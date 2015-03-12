/* A polyfill for browsers that don't support ligatures. */
/* The script tag referring to this file must be placed before the ending body tag. */

/* To provide support for elements dynamically added, this script adds
   method 'icomoonLiga' to the window object. You can pass element references to this method.
*/
(function () {
	'use strict';
	function supportsProperty(p) {
		var prefixes = ['Webkit', 'Moz', 'O', 'ms'],
			i,
			div = document.createElement('div'),
			ret = p in div.style;
		if (!ret) {
			p = p.charAt(0).toUpperCase() + p.substr(1);
			for (i = 0; i < prefixes.length; i += 1) {
				ret = prefixes[i] + p in div.style;
				if (ret) {
					break;
				}
			}
		}
		return ret;
	}
	var icons;
	if (!supportsProperty('fontFeatureSettings')) {
		icons = {
			'play': '&#xe957;',
			'video': '&#xe957;',
			'play2': '&#xe958;',
			'video2': '&#xe958;',
			'presentation': '&#xe95c;',
			'board-play': '&#xe95c;',
			'video-camera': '&#xe962;',
			'video10': '&#xe962;',
			'video-camera2': '&#xe963;',
			'video11': '&#xe963;',
			'video-camera3': '&#xe965;',
			'video13': '&#xe965;',
			'file-empty': '&#xe99d;',
			'file3': '&#xe99d;',
			'file-empty2': '&#xe99e;',
			'file4': '&#xe99e;',
			'file-text2': '&#xe9ad;',
			'file17': '&#xe9ad;',
			'file-text3': '&#xe9ae;',
			'file18': '&#xe9ae;',
			'file-picture': '&#xe9af;',
			'file19': '&#xe9af;',
			'file-picture2': '&#xe9b0;',
			'file20': '&#xe9b0;',
			'file-play': '&#xe9b3;',
			'file23': '&#xe9b3;',
			'file-play2': '&#xe9b4;',
			'file24': '&#xe9b4;',
			'file-xml': '&#xe9bb;',
			'file29': '&#xe9bb;',
			'file-xml2': '&#xe9bc;',
			'file30': '&#xe9bc;',
			'file-presentation': '&#xe9bf;',
			'file33': '&#xe9bf;',
			'file-presentation2': '&#xe9c0;',
			'file34': '&#xe9c0;',
			'file-stats': '&#xe9c1;',
			'file35': '&#xe9c1;',
			'file-stats2': '&#xe9c2;',
			'file36': '&#xe9c2;',
			'folder': '&#xe9d0;',
			'directory': '&#xe9d0;',
			'folder2': '&#xe9db;',
			'directory11': '&#xe9db;',
			'folder-open': '&#xe9dc;',
			'directory12': '&#xe9dc;',
			'folder5': '&#xe9e7;',
			'directory23': '&#xe9e7;',
			'folder-open2': '&#xe9e8;',
			'directory24': '&#xe9e8;',
			'users4': '&#xeb09;',
			'group4': '&#xeb09;',
			'user-tie': '&#xeb0a;',
			'user19': '&#xeb0a;',
			'lan': '&#xec64;',
			'network': '&#xec64;',
			'link': '&#xec96;',
			'chain': '&#xec96;',
			'link3': '&#xec98;',
			'chain2': '&#xec98;',
			'link7': '&#xec9c;',
			'chain4': '&#xec9c;',
			'youtube': '&#xeef3;',
			'brand14': '&#xeef3;',
			'youtube2': '&#xeef4;',
			'brand15': '&#xeef4;',
			'youtube3': '&#xeef5;',
			'brand16': '&#xeef5;',
			'blogger': '&#xef15;',
			'brand48': '&#xef15;',
			'blogger2': '&#xef16;',
			'brand49': '&#xef16;',
			'file-pdf': '&#xef36;',
			'file41': '&#xef36;',
			'file-word': '&#xef38;',
			'file43': '&#xef38;',
			'file-excel': '&#xef39;',
			'file44': '&#xef39;',
			'0': 0
		};
		delete icons['0'];
		window.icomoonLiga = function (els) {
			var classes,
				el,
				i,
				innerHTML,
				key;
			els = els || document.getElementsByTagName('*');
			if (!els.length) {
				els = [els];
			}
			for (i = 0; ; i += 1) {
				el = els[i];
				if (!el) {
					break;
				}
				classes = el.className;
				if (/icon-/.test(classes)) {
					innerHTML = el.innerHTML;
					if (innerHTML && innerHTML.length > 1) {
						for (key in icons) {
							if (icons.hasOwnProperty(key)) {
								innerHTML = innerHTML.replace(new RegExp(key, 'g'), icons[key]);
							}
						}
						el.innerHTML = innerHTML;
					}
				}
			}
		};
		window.icomoonLiga();
	}
}());