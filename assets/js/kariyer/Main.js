
var HomePageOurNewsCount = 0;
var HomePageOurNewsActive = 0;
var HomePageOurNewsInterval;
//-------------------------//
var HomePageFairNewsCount = 0;
var HomePageFairNewsActive = 0;
var HomePageFairNewsInterval;
//-------------------------//
var HomePageRightSliderCount = 0;
var HomePageRightSliderActive = 0;
var HomePageRightSliderInterval;
//-------------------------//
var FaaliyetArea1SliderCount = 0;
var FaaliyetArea1SliderActive = 0;
var FaaliyetArea1SliderInterval;
//-------------------------//
var FaaliyetArea2SliderCount = 0;
var FaaliyetArea2SliderActive = 0;
var FaaliyetArea2SliderInterval;
//-------------------------//
var getMainSliderLogoTotalCount = 0;
var getMainSliderLogoTotalItem = 0;
var getMainSliderLogoTotalWidth = 125;
var getMainSliderLogoTotalActive = 0;
var MainSliderLogoInterval;
//------------------------//
//-------------------------//
var TarihceSliderCount = 0;
var TarihceSliderActive = 0;
var TarihceSliderInterval;
$(document).ready(function(e) {


    JobForm();
    if ($(".Factories:[moduletype=Production]").length) {
        hashSetting();
    }

	InitDropDownList()

	$(function () {

		if($("#slider-range-max").html() != null)
		{
			$("#slider-range-max").slider({

                slide: function (event, ui) {
                    //$("#amount").val(ui.value);
                    sliderValue = parseInt($(".ui-slider-handle").css("left"));
                },
                stop: function () {
                    if (sliderValue >= 80) { // 140
                        $(".ui-slider-handle").stop().animate({ left: "119px" }, 300, function () {
						    $("#SecureValue").html("2");
                            $(".FormSecure").hide();
                        }).blur();
                    } else {
                        $(".ui-slider-handle").stop().animate({ left: 0 }, 300, function () {
							  $("#SecureValue").html("1");
                            $(".FormSecure").show();
                        }).blur();
                    }
                }
            });

		}


        });
	/*companent*/

});

function JobForm()
{
    $(".page-body .page-content .content .Form .FormDetail form .ButtonAreaNext .Next").click(function e() {




        var sectionid = $(this).parent().parent().attr("id");

        var valueCntrl = false;
        $(".page-body .page-content .content .Form .FormDetail form #" + sectionid + " .Valid input:[data-val=true]").each(function () {
            if ($(this).val() == "") {
                valueCntrl = true;
                $(".page-body .page-content .content .Form .FormDetail form .ButtonArea .Send").trigger("click");
            }
        });
        if (!valueCntrl) {
            $(".icerik .sayfa .Form .FormTopMenu ul li a").removeClass("Selected")
            var sectionindex = $(this).parent().parent().next().next().attr("itemid");
            $(".icerik .sayfa .Form .FormTopMenu ul li a:[itemid=" + sectionindex + "]").addClass("Selected");
            $(this).parent().parent().hide();
            $(this).parent().parent().next().next().show();
        }



    });

    $(".page-body .page-content .content .Form .FormDetail form .ButtonAreaBefore .Before").click(function e() {
        $(".icerik .sayfa .Form .FormTopMenu ul li a").removeClass("Selected")
        var sectionindex = $(this).parent().parent().prev().prev().attr("itemid");
        $(".icerik .sayfa .Form .FormTopMenu ul li a:[itemid=" + sectionindex + "]").addClass("Selected");
        $(this).parent().parent().hide();
        $(this).parent().parent().prev().prev().show();
    });

    $(".page-body .page-content .content .Form .FormDetail form .ButtonArea .Send").click(function e() {



    });

}

function InitDropDownList() {


        $(".ValidDrp select,.BigValidDrp select").each(function () {
            if ($(this).attr("isdrp") != "true") {
                $(this).attr("isdrp", true);
                $(this).parent().addClass("inputdrpParent").each(function () { $(this).html("<span class='inputdrpText'>" + $(this).find("option:selected").text() + "</span>" + $(this).html()); });
            }
        })
        $(".ValidDrp select,.BigValidDrp select").change(function() { $(this).parent().find(".inputdrpText").html($(this).find("option:selected").text()); });


}
