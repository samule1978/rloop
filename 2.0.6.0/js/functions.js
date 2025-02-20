/**
 * **** BISMILLAH-HIRRAHMAH-NIRRAHEEM ***
 * Created by samuleghurry on 21/01/2018.
 */

/******* VARIABLES *******/
var isMobile = false;

/*** Acceleration/Gyro ***/
var ax = 0;
var ay = 0;
var az = 0;
var ai = 0;
var arAlpha = 0;
var arBeta = 0;
var arGamma = 0;
var alpha = 0;
var beta = 0;
var gamma = 0;
var delay = 100;

/*** Preloader ***/
var width = 100,
    perfData = window.performance.timing, // The PerformanceTiming interface represents timing-related performance information for the given page.
    EstimatedTime = -(perfData.loadEventEnd - perfData.navigationStart),
    time = parseInt((EstimatedTime/1000)%60)*100;
// Percentage Increment Animation
var start = 0,
    end = 100;






/******* FUNCTIONS *******/
$.fn.setup = function() {
    isMobile = $(this).isMobile();
};

$.fn.gyro = function() {
    if (window.DeviceMotionEvent === undefined) {
        return false;
    } else {
        window.ondeviceorientation = function(event) {
            if ($(".preloader-wrap").hasClass("finished")) {
                if($(this).portrait()) {
                    //degrees = Math.round(event.alpha);
                    degrees = Math.round(event.gamma);

                    $("#spinLogo").rotate(-degrees);
                    $("#spiniPhoneX").rotate(-degrees);
                }
            }
        }

        return true;
    }
};

$.fn.animateOnOrientationChange = function() {
    window.addEventListener("resize", function() {
        $('#spiniPhoneX').scale(1);
        $("#spinLogo").removeAttr('style');
        $("#spiniPhoneX").removeAttr('style');
        $("#spinLogo").rotate(0);
        $("#spiniPhoneX").rotate(0);

        if($(this).portrait()) {

        } else {
            $('#spiniPhoneX').delay(500).animate({opacity:0, scale: '10'}, 500);
            $("#spinLogo").delay(500).animate({top:'-235px'}, 500, function() {
                //callback
            });
        }
    }, false);
};

/*$.fn.rotate = function(degrees) {
    //$(this).css({'transform' : 'rotate('+ degrees +'deg)'});
    $(this).css({
        '-webkit-transform' : 'rotate('+ degrees +'deg)',
        '-moz-transform'    : 'rotate('+ degrees +'deg)',
        '-ms-transform'     : 'rotate('+ degrees +'deg)',
        '-o-transform'      : 'rotate('+ degrees +'deg)',
        'transform'         : 'rotate('+ degrees +'deg)'
    });

    return $(this);
};*/

/*$.fn.scale = function(size) {
    //$(this).css({'transform' : 'scale('+ size +')'});
    $(this).css({
        '-webkit-transform' : 'scale('+ size +')',
        '-moz-transform'    : 'scale('+ size +')',
        '-ms-transform'     : 'scale('+ size +')',
        '-o-transform'      : 'scale('+ size +')',
        'transform'         : 'scale('+ size +')'
    });
    return $(this);
};*/

$.fn.portrait = function() {
    return window.innerHeight > window.innerWidth;
};

$.fn.isMobile = function() {
    return (
        /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent)
        || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0,4))
    );

}

$.fn.showLoader = function(show) {
    if (show) {
        $('.preloader-wrap').show();

        // Loadbar Animation
        $(".loadbar").animate({
            width: width + "%"
        }, time);

        // Loadbar Animation on Finished
        setTimeout(function(){
            $(".preloader-wrap").addClass("hide").delay(6000).addClass("finished");

            /*$(".trackbar").delay(100).animate({opacity:0, scale: '0'}, 500, function() {
                $('.preloader-wrap').fadeOut(500);
            });*/
        }, time);
    } else {
        $('.preloader-wrap').hide();
    }
};

$.fn.showDebugInfo = function(show) {
    if (show) {
        $("#debugInfo").show();

        window.ondevicemotion = function(event) {
            ax = Math.round(Math.abs(event.accelerationIncludingGravity.x * 1));
            ay = Math.round(Math.abs(event.accelerationIncludingGravity.y * 1));
            az = Math.round(Math.abs(event.accelerationIncludingGravity.z * 1));
            ai = Math.round(event.interval * 100) / 100;
            rR = event.rotationRate;
            if (rR != null) {
                arAlpha = Math.round(rR.alpha);
                arBeta = Math.round(rR.beta);
                arGamma = Math.round(rR.gamma);
            }
        }

        window.ondeviceorientation = function(event) {
            alpha = Math.round(event.alpha);
            beta = Math.round(event.beta);
            gamma = Math.round(event.gamma);
        }

        setInterval(function() {
            document.getElementById("xlabel").innerHTML = "X: " + ax;
            document.getElementById("ylabel").innerHTML = "Y: " + ay;
            document.getElementById("zlabel").innerHTML = "Z: " + az;
            document.getElementById("ilabel").innerHTML = "I: " + ai;
            document.getElementById("arAlphaLabel").innerHTML = "arA: " + arAlpha;
            document.getElementById("arBetaLabel").innerHTML = "arB: " + arBeta;
            document.getElementById("arGammaLabel").innerHTML = "arG: " + arGamma;
            document.getElementById("alphalabel").innerHTML = "Alpha: " + alpha;
            document.getElementById("betalabel").innerHTML = "Beta: " + beta;
            document.getElementById("gammalabel").innerHTML = "Gamma: " + gamma;

            if($(this).portrait()) {
                document.getElementById("orientationlabel").innerHTML = "Orientation: Portrait";
            } else {
                document.getElementById("orientationlabel").innerHTML = "Orientation: Landscape";
            }
        }, delay);
    } else {
        $("#debugInfo").hide();
    }
};