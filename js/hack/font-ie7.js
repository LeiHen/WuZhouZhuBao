/* To avoid CSS expressions while still supporting IE 7 and IE 6, use this script */
/* The script tag referencing this file must be placed before the ending body tag. */

/* Use conditional comments in order to target IE 7 and older:
	<!--[if lt IE 8]><!-->
	<script src="ie7/ie7.js"></script>
	<!--<![endif]-->
*/

(function() {
	function addIcon(el, entity) {
		var html = el.innerHTML;
		el.innerHTML = '<span style="font-family: \'icomoon\'">' + entity + '</span>' + html;
	}
	var icons = {
		'icon_search': '&#xe600;',
		'icon_zoomin': '&#xe601;',
		'icon_zoomout': '&#xe602;',
		'icon_add': '&#xe603;',
		'icon_subtract': '&#xe604;',
		'icon_exclamation': '&#xe605;',
		'icon_question': '&#xe606;',
		'icon_close': '&#xe607;',
		'icon_forbid': '&#xe608;',
		'icon_qrcode': '&#xe938;',
		'icon_google_plus': '&#xea88;',
		'icon_apple': '&#xeabf;',
		'icon_android': '&#xeac1;',
		'icon_windows': '&#xeac2;',
		'icon_windows8': '&#xeac3;',
		'icon_share': '&#xe25a;',
		'icon_check_box': '&#xe25c;',
		'icon_check_box_outline_blank': '&#xe25d;',
		'icon_radio_button_unchecked': '&#xe25e;',
		'icon_radio_button_checked': '&#xe25f;',
		'icon_weibo': '&#xf18a;',
		'icon_qq': '&#xf1d6;',
		'icon_wechat': '&#xf1d7;',
		'icon_weixin': '&#xf1d7;',
		'icon_chevron_down': '&#xe609;',
		'icon_chevron_left': '&#xe60a;',
		'icon_chevron_right': '&#xe60b;',
		'icon_chevron_up': '&#xe60c;',
		'icon_shopping_cart': '&#xe60d;',
		'icon_facebook': '&#xe60e;',
		'icon_google': '&#xe60f;',
		'icon_twitter': '&#xe610;',
		'0': 0
		},
		els = document.getElementsByTagName('*'),
		i, c, el;
	for (i = 0; ; i += 1) {
		el = els[i];
		if(!el) {
			break;
		}
		c = el.className;
		c = c.match(/icon_[^\s'"]+/);
		if (c && icons[c[0]]) {
			addIcon(el, icons[c[0]]);
		}
	}
}());
