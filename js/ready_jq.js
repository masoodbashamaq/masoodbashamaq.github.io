$(document).ready(function() {
        $("#dt-show").mouseover(function(){
			$(".service-area-idt").hide("fast");
			$(".service-area-rera").hide("fast");
			$(".service-area-audit").hide("fast");
			$(".service-area-crp").hide("fast");
			$(".service-area-oth").hide("fast");
			$(".service-area-dt").show("fast");
        });
		$("#idt-show").mouseover(function(){
			$(".service-area-dt").hide("fast");
			$(".service-area-rera").hide("fast");
			$(".service-area-audit").hide("fast");
			$(".service-area-crp").hide("fast");
			$(".service-area-oth").hide("fast");
			$(".service-area-idt").show("fast");
        });
		$("#rera-show").mouseover(function(){
			$(".service-area-dt").hide("fast");
			$(".service-area-idt").hide("fast");
			$(".service-area-audit").hide("fast");
			$(".service-area-crp").hide("fast");
			$(".service-area-oth").hide("fast");
			$(".service-area-rera").show("fast");
        });
		$("#audit-show").mouseover(function(){
			$(".service-area-dt").hide("fast");
			$(".service-area-rera").hide("fast");
			$(".service-area-idt").hide("fast");
			$(".service-area-crp").hide("fast");
			$(".service-area-oth").hide("fast");
			$(".service-area-audit").show("fast");
        });
		$("#crp-show").mouseover(function(){
			$(".service-area-dt").hide("fast");
			$(".service-area-rera").hide("fast");
			$(".service-area-audit").hide("fast");
			$(".service-area-idt").hide("fast");
			$(".service-area-oth").hide("fast");
			$(".service-area-crp").show("fast");
        });
		$("#oth-show").mouseover(function(){
			$(".service-area-dt").hide("fast");
			$(".service-area-idt").hide("fast");
			$(".service-area-audit").hide("fast");
			$(".service-area-crp").hide("fast");
			$(".service-area-rera").hide("fast");
			$(".service-area-oth").show("fast");
        });
		$("#dt-show").click(function(){
			$(".service-area-idt").hide("fast");
			$(".service-area-rera").hide("fast");
			$(".service-area-audit").hide("fast");
			$(".service-area-crp").hide("fast");
			$(".service-area-oth").hide("fast");
			$(".service-area-dt").show("fast");
        });
		$("#idt-show").click(function(){
			$(".service-area-dt").hide("fast");
			$(".service-area-rera").hide("fast");
			$(".service-area-audit").hide("fast");
			$(".service-area-crp").hide("fast");
			$(".service-area-oth").hide("fast");
			$(".service-area-idt").show("fast");
        });
		$("#rera-show").click(function(){
			$(".service-area-dt").hide("fast");
			$(".service-area-idt").hide("fast");
			$(".service-area-audit").hide("fast");
			$(".service-area-crp").hide("fast");
			$(".service-area-oth").hide("fast");
			$(".service-area-rera").show("fast");
        });
		$("#audit-show").click(function(){
			$(".service-area-dt").hide("fast");
			$(".service-area-rera").hide("fast");
			$(".service-area-idt").hide("fast");
			$(".service-area-crp").hide("fast");
			$(".service-area-oth").hide("fast");
			$(".service-area-audit").show("fast");
        });
		$("#crp-show").click(function(){
			$(".service-area-dt").hide("fast");
			$(".service-area-rera").hide("fast");
			$(".service-area-audit").hide("fast");
			$(".service-area-idt").hide("fast");
			$(".service-area-oth").hide("fast");
			$(".service-area-crp").show("fast");
        });
		$("#oth-show").click(function(){
			$(".service-area-dt").hide("fast");
			$(".service-area-idt").hide("fast");
			$(".service-area-audit").hide("fast");
			$(".service-area-crp").hide("fast");
			$(".service-area-rera").hide("fast");
			$(".service-area-oth").show("fast");
        });
		$("#dt-menu").click(function(){
			$("#dt-show").click();
        });
		$("#idt-menu").click(function(){
			$("#idt-show").click();
        });
		$("#rera-menu").click(function(){
			$("#rera-show").click();
        });
		$("#audit-menu").click(function(){
			$("#audit-show").click();
        });
		$("#crp-menu").click(function(){
			$("#crp-show").click();
        });
		$("#oth-menu").click(function(){
			$("#oth-show").click();
        });
		$(".ms-bt").click(function(){
			$(".hs,.hs-img").parent().removeClass("active");
			$(".vs,.vs-img").parent().removeClass("active");
			$(".wd,.wd-img").parent().removeClass("active");
			$(".ms,.ms-img").parent().addClass("active");
		});
});