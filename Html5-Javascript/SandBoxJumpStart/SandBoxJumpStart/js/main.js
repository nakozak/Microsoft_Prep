// Your code here!
(function () {
    "use strict";

    WinJS.Binding.optimizeBIndingReferences = true;

    var app = WinJS.Application;
    var activation = Windows.ApplicationModel.Activation;
    var b = false;
    app.onactivated = function (args) {

    };
    app.oncheckpoint = function (args) {

    };
    app.onready = function (e) {
        //var myString = "hello world";
        //var myBool = true;
        log(f1());
        log(f2())
        function f1() {

        }

        var f2 = function () {

        };
    };
    function log(msg) {
        if (!b) document.getElementById("script").innerHTML = app.onready;
        b = true;
        var div = document.getElementById("log");
        div.innerHTML += msg;
        //console.log(msg);
    }

    app.start();

})();