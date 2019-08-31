$(document).ready(function () {
    function alterarCorDaGrade(obj, args) {
        var bgGrid = [];
        var bgGridColor = Math.round(5 * Math.random());
        var bgGridUrl = location.protocol + "//" + location.host + "/";
        if (location.hostname == "localhost") {
            bgGridUrl += location.pathname.split('/')[1] + "/";
        }
        bgGrid[0] = "bg-grid-gray.png";
        bgGrid[1] = "bg-grid-red.png";
        bgGrid[2] = "bg-grid-orange.png";
        bgGrid[3] = "bg-grid-green.png";
        bgGrid[4] = "bg-grid-blue.png";
        bgGrid[5] = "bg-grid-violet.png";
        $("#gridBackground").css('background-image', "url(" + bgGridUrl + "img/layout/" + bgGrid[bgGridColor] + ")");
    }
    alterarCorDaGrade();
});