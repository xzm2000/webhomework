$(function(){
	'use strict';
	$("li[id^='panel']").click(function(){
		var index=$(this).attr('id');
		var thisid = index.substr(5);
		$(this).addClass('active').siblings().removeClass('active');
		$('#panel0'+thisid).addClass('active').siblings().removeClass('active');
	});
	$('#submit').click(function(){
		alert('感谢你的反馈');
	})
});
