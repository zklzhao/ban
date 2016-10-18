
var total=$("#bannerBg ul").children().length;
		var now=0;
		function clock()
		  {
			  var cname
			  if(now==total -1){
				now=0; 
			 }else{
				now=now+1; 
			 }
			 for(i=0;i<total;i++){
				 	cname="#bannerBg .bg" + i;
				   $("#bannerBg ul li").eq(i).css("display","none");
				   $("#btt span").eq(i).css("background","#666");
				   $(cname).css("display","none");
			 }
			 
		  cname="#bannerBg .bg" + now;
		  $("#bannerBg ul li").eq(now).fadeIn(400);
		  $("#btt span").eq(now).css("background","#95cb11");
		  $(cname).css("display","block");
		  }
	 $(document).ready(function() {
		$("#bannerBg ul li").eq(0).fadeIn(400);
		$("#btt span").eq(0).css("background","#95cb11");
		$("#bannerBg .bg0").fadeIn(50);
		$("#bannerBg ul li,#btt span").mouseenter(function(){
			window.clearInterval(int);
			
		});
		$("#btt span").mouseenter(function(){
			if($(this).index()!=now){
				now=$(this).index()-1;
				clock();
			}
		});
		var int=self.setInterval("clock()",3000)
		$("#bannerBg ul li,#bannerBg span").mouseleave(function(){
			int=self.setInterval("clock()",3000)
		});
		$("#btt span").eq(1).css("margin-left","52px");
		$("#btt span").eq(2).css("margin-left","90px");
		$("#btt span").eq(3).css("margin-left","128px");
		$("#btt span").eq(4).css("margin-left","166px");
		$("#btt span").eq(5).css("margin-left","204px");
		});