/**
 * **** BISMILLAH-HIRRAHMAH-NIRRAHEEM ***
 * Created by samuleghurry on 20/01/2018.
 */

$(document).ready(function () {
    showDebug = false;

    $("#main").hide();

    isMobile = $(this).isMobile();
    if (!isMobile) $('#spiniPhoneX').hide();

    $(this).load();
});
