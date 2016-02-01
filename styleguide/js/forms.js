$(document).ready(
    function () // or $(function()
    {
        var lookForResults = 
            function (e) {
                $.ajax(
                    {
                        url: "sample-data/it-staff.json"
                      , error: function(jqXHR, textStatus, errorThrown) { alert(errorThrown); }
                      , success: PersonPicker_Ajax_OnSuccess
                    }
                );
            };
        $('#find-primary-contact-modal').on('show.bs.modal', lookForResults);
        
        $("#in-dialog-find-person-button").click(lookForResults);
        
        $(".find-person-button").click(FindPersonButton_OnClick);
        
        $(".year-boundary").change(YearBoundaryText_OnChange_OnKeyup);//.keyup(YearBoundaryText_OnChange_OnKeyup);
        $("#table-add-row-button").click(TableAddRowButton_OnClick);
        $("#table-show-screenreader-elements-button").click(TableShowScreenreaderElementsButton_OnClick);
        
        AdjustTabularDataToYears();
    }
);

function FindPersonButton_OnClick() {
    var $destination = $(this).closest(".find-person-destination");
    $("#person-picker-results-tbody").data("destination", $destination);
    
    // .hide() here is really okay; we don't want the results to be available,
    // even to people using screen readers.
    $("#find-primary-contact-modal .people-result").hide();
    $("#find-primary-contact-modal .progress").show();
    $("#person-picker-name-text").val($destination.find(".person-name").val());
}

function PersonPicker_Ajax_OnSuccess(data, textStatus, jqXHR) {
    var $tbody = $("#person-picker-results-tbody");
    var $destination = $tbody.data("destination");
    $tbody.empty();
    var results = $.grep(
        data
      , function (n, i) {
            return n.Name.toLowerCase().trim().indexOf($destination.find(".person-name").val().toLowerCase().trim()) >= 0;
        }
    );
    $.each(
        results
      , function(index, value) {
            var newTr = $("<tr><td headers='person-picker-name-th'><a href='javascript:void(0)'></a></td><td headers='person-picker-title-th'></td></tr>");
            newTr.find("[headers=person-picker-name-th] a").text(value.Name);
            newTr.find("[headers=person-picker-title-th]").text(value.Title);
            newTr.attr("data-name", value.Name);
            newTr.attr("data-title", value.Title);
            newTr.attr("data-email", value.Email);
            newTr.attr("data-phone", value.Phone);
            $tbody.append(newTr);
            newTr.find("a").click(PersonPicker_PersonLink_OnClick);
        }
    );
    $("#find-primary-contact-modal .people-result").show();
    $("#find-primary-contact-modal .progress").hide();
}
        
function PersonPicker_PersonLink_OnClick() {
    var $destination = $("#person-picker-results-tbody").data("destination");
    var $tr = $(this).closest("tr");
    if ($destination && $tr) {
        $('#find-primary-contact-modal').modal("hide");
        $destination.find(".person-name").val($tr.attr("data-name"));
        $destination.find(".person-title").val($tr.attr("data-title"));
        $destination.find(".person-email").val($tr.attr("data-email"));
        $destination.find(".person-phone").val($tr.attr("data-phone"));
    }
}

function YearBoundaryText_OnChange_OnKeyup() {
    AdjustTabularDataToYears();
}

function TableAddRowButton_OnClick() {
    var $tbody = $("#dynamic-table tbody");
    var rowCount = $tbody.find("tr").length;
    var trHtml = "\
<tr>\
    <td headers='category-th'>\
        <label class='sr-only' for='dynamic-select-_rn_'>Category for Row _rn+1_:</label>\
        <select id='dynamic-select-_rn_'>\
            <option value=''></option>\
            <option value='1'>Melville Library</option>\
            <option value='2'>Educational Computing Center</option>\
            <option value='3'>Old Engineering</option>\
        </select>\
    </td>\
    <td headers='total-th'>\
        <label class='sr-only' for='dynamic-total-_rn_'>Total for Row _rn+1_:</label>\
        <input type='number' class='form-control row-sum' min='0' max='100' readonly='readonly' id='dynamic-total-_rn_' style='width:6em'/>\
    </td>\
</tr>";
    trHtml =
        trHtml
            .replace(/_rn_/g, rowCount.toString())
            .replace(/_rn\+1_/g, (rowCount + 1).toString());
    var $tr = $(trHtml);
    $tbody.append($tr);
    AdjustTabularDataToYears();
}

function TableShowScreenreaderElementsButton_OnClick() {
    var $sr = $("#dynamic-table .sr-only, #dynamic-table .no-sr-only");
    
    if ($(this).attr("aria-pressed") !== "true")
    {
        $sr.addClass("no-sr-only").removeClass("sr-only");
    }
    else
    {
        $sr.addClass("sr-only").removeClass("no-sr-only");
    }
}

function DynamicTableAmountInput_OnChange() {
    var $tr = $(this).closest("tr");
    var sum = 0;
    $tr.find("td[data-year] input.row-summand").each(
        function(index, input) {
            var $input = $(input);
            var summand = parseInt($input.val());
            if (!isNaN(summand)) {
                sum += summand;
            }
        }
    );
    $tr.find("input.row-sum").val(sum);
}

function AdjustTabularDataToYears () {
    var $table = $("#dynamic-table");
    var $thead = $("#dynamic-table thead");
    var $tbody = $("#dynamic-table tbody");
    var $tfoot = $("#dynamic-table tfoot");
    var startYear = $("#start-year-text").val();
    var endYear = $("#end-year-text").val();
    
    startYear = parseInt(startYear);
    endYear = parseInt(endYear);
    
    if (
        startYear !== undefined
     && endYear !== undefined
     && !isNaN(startYear)
     && !isNaN(endYear)
     && startYear <= endYear
    ) {
        // Start by removing anything that's out of range.
        var $outOfRange = $table
            .find("[data-year]")
            .filter(
                function() {
                    var dataYear = parseInt($(this).attr("data-year"));
                    var result =
                        isNaN(dataYear)
                     || (dataYear < startYear)
                     || (dataYear > endYear);
                    return result;
                }
            );
        $outOfRange.remove();
        
        // We're assuming a single tr in the thead.
        var $ths = $thead.find("th[data-year]");
        
        var generateThForYear = function(p_year) {
            var $newTh =
                $("<th />")
                    .text(p_year)
                    .attr("id", "table-" + p_year.toString() + "-th")
                    .attr("data-year", p_year);
            return $newTh;
        }
        
        var generateTdForYearRow = function(p_year, p_row) {
            var $newTd =
                $("<td />")
                    .attr("headers", "table-" + p_year.toString() + "-th")
                    .attr("data-year", p_year);
            var $newLabel =
                $("<label class='sr-only'></label>")
                    .text("Year " + p_year.toString() + " for Row " + (p_row + 1).toString() + ":");
            var $newInput =
                $("<input type='number' class='form-control row-summand' min='0' max='100' style='width:6em'/>");
            $newInput.attr("id", "dynamic-" + p_year.toString() + "-" + p_row.toString());
            $newLabel.attr("for", $newInput.attr("id"));
            $newTd.append($newLabel);
            $newTd.append($newInput);
            
            $newInput.change(DynamicTableAmountInput_OnChange);
            
            return $newTd;
        }
        
        // If there are no table head cells that represent a year, we have to
        // seed the table with one.
        if ($ths.length == 0) {
            var $categoryTh = $("#category-th");
            var $newTh = generateThForYear(startYear);
            $newTh.insertAfter($categoryTh);
        }
        
        $tbody.find("tr").each(
            function (index, tr) {
                var $tr = $(tr);
                var $tds = $tr.find("td[data-year]");

                // If there are no table data cells that represent a year, we have to
                // seed the table with one.
                if ($tds.length == 0) {
                    var $categoryTd = $tr.find("[headers=category-th]");
                    var $newTd = generateTdForYearRow(startYear, $tr.index());
                    $newTd.insertAfter($categoryTd);
                }
            }
        );
        
        // We know the first data year in the head isn't less than the start
        // year because we already removed it.
        while (
            parseInt($thead.find("th[data-year]:first").attr("data-year"))
          > startYear
        ) {
            var $firstTh = $thead.find("th[data-year]:first");
            var firstYear = parseInt($firstTh.attr("data-year"));
            firstYear--;
            var $newTh = generateThForYear(firstYear);
            $newTh.insertBefore($firstTh);
        }
        
        // Repeat for the end.
        while (
            parseInt($thead.find("th[data-year]:last").attr("data-year"))
          < endYear
        ) {
            var $lastTh = $thead.find("th[data-year]:last");
            var lastYear = parseInt($lastTh.attr("data-year"));
            lastYear++;
            var $newTh = generateThForYear(lastYear);
            $newTh.insertAfter($lastTh);
        }
        
        $tbody.find("tr").each(
            function (index, tr) {
                var $tr = $(tr);
        
                // We know the first data year in the row isn't less than the start
                // year because we already removed it.
                while (
                    parseInt($tr.find("td[data-year]:first").attr("data-year"))
                  > startYear
                ) {
                    var $firstTd = $tr.find("td[data-year]:first");
                    var firstYear = parseInt($firstTd.attr("data-year"));
                    firstYear--;
                    var $newTd = generateTdForYearRow(firstYear, $tr.index());
                    $newTd.insertBefore($firstTd);
                }

                // Repeat for the end.
                while (
                    parseInt($tr.find("td[data-year]:last").attr("data-year"))
                  < endYear
                ) {
                    var $lastTd = $tr.find("td[data-year]:last");
                    var lastYear = parseInt($lastTd.attr("data-year"));
                    lastYear++;
                    var $newTd = generateTdForYearRow(lastYear, $tr.index());
                    $newTd.insertAfter($lastTd);
                }
            }
        );
        
        // +3: one for the category, one for the total, and one to be inclusive
        //     of the start or end year.
        $tfoot.find(".button-collection").attr("colspan", endYear - startYear + 3);
    }
}