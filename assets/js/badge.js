/*! Clef for WordPress - v1.9
 * http://getclef.com
 * Copyright (c) 2014; * Licensed GPLv2+ */
(function(e){e(document).ready(function(){var t=e(".clef-badge-prompt"),n={action:"clef_badge_prompt"},a=!1;t.find(".add-badge").click(function(i){if(i.preventDefault(),!a){a=!0;var c=e.extend({enable:"badge"},n);t.slideUp(),e.post(ajaxurl,c,function(){},"json")}}),t.find(".add-link").click(function(i){if(i.preventDefault(),!a){a=!0;var c=e.extend({enable:"link"},n);t.slideUp(),e.post(ajaxurl,c,function(){},"json")}}),t.find(".no-badge").click(function(){var a=e.extend({disable:!0},n);e.post(ajaxurl,a,function(){},"json"),t.find(".badge-fade").fadeOut(function(){t.find(".link-fade").fadeIn()})}),t.find(".no-link, .dismiss").click(function(i){if(i.preventDefault(),!a){a=!0;var c=e.extend({disable:!0},n);t.slideUp(),e.post(ajaxurl,c,function(){},"json")}})})}).call(this,jQuery);