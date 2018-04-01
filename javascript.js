ready(function(){
	$("#content ol li").mouseover(function(event){
		clearInterval(play);
	var index=$(this).index();
	$("#content ul li").eq(index).show().siblings().hide();
	$(this).addClass('current').siblings().removeClass('current');
	}).mouseout(function(){
		autoplay();
	})
    var play=null,index=0;
	function autoplay()
	{
		play=setInterval(function(){
			index++;
			if(index>3)
				{index=-1;}
			else
			{
				$("#content ol li").eq(index).addClass('current').siblings().removeClass('current');
		        $("#content ul li").eq(index).show().siblings().hide();
			}
		    
		},1000);
		
	}
    autoplay();
})
