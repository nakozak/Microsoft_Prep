// For an introduction to the Blank template, see the following documentation:
// https://go.microsoft.com/fwlink/?LinkId=232509

(function () {
	"use strict";

	var app = WinJS.Application;
	var activation = Windows.ApplicationModel.Activation;
	var isFirstActivation = true;

	app.onactivated = function (args) {
		if (args.detail.kind === activation.ActivationKind.voiceCommand) {
			// TODO: Handle relevant ActivationKinds. For example, if your app can be started by voice commands,
			// this is a good place to decide whether to populate an input field or choose a different initial view.
		}
		else if (args.detail.kind === activation.ActivationKind.launch) {
			// A Launch activation happens when the user launches your app via the tile
			// or invokes a toast notification by clicking or tapping on the body.
			if (args.detail.arguments) {
				// TODO: If the app supports toasts, use this value from the toast payload to determine where in the app
				// to take the user in response to them invoking a toast notification.
			}
			else if (args.detail.previousExecutionState === activation.ApplicationExecutionState.terminated) {
				// TODO: This application had been suspended and was then terminated to reclaim memory.
				// To create a smooth user experience, restore application state here so that it looks like the app never stopped running.
				// Note: You may want to record the time when the app was last suspended and only restore state if they've returned after a short period.
			}
		}

		if (!args.detail.prelaunchActivated) {
			// TODO: If prelaunchActivated were true, it would mean the app was prelaunched in the background as an optimization.
			// In that case it would be suspended shortly thereafter.
			// Any long-running operations (like expensive network or disk I/O) or changes to user state which occur at launch
			// should be done here (to avoid doing them in the prelaunch case).
			// Alternatively, this work can be done in a resume or visibilitychanged handler.
		}

		if (isFirstActivation) {
			// TODO: The app was activated and had not been running. Do general startup initialization here.
			document.addEventListener("visibilitychange", onVisibilityChanged);
			args.setPromise(WinJS.UI.processAll());
		}

		isFirstActivation = false;
	};

	function onVisibilityChanged(args) {
		if (!document.hidden) {
			// TODO: The app just became visible. This may be a good time to refresh the view.
		}
	}

	app.oncheckpoint = function (args) {
		// TODO: This application is about to be suspended. Save any state that needs to persist across suspensions here.
		// You might use the WinJS.Application.sessionState object, which is automatically saved and restored across suspension.
		// If you need to complete an asynchronous operation before your application is suspended, call args.setPromise().
    };
    var b = false;
    app.onready = function (e) {
        // Arrays
        //var fruit = ["apple", "orange", "banana","strawberry","cherry"];
        //var vegetables = ["carrot", "broccoli","cauliflower"];
        //fruit.push("pear");
        //fruit.pop();
        //fruit = fruit.concat(vegetables); //  add fruit array to vegetable array ; immutable example since the function returns its value
        //fruit = fruit.slice(0, 1); // Take a slice out of the array and returns it
        //fruit.splice(1, 2,"melon","grape"); // changes the array contents ; mutable example
        //select in c# is equivalent to map in js
        //fruit = fruit.map(function (i) {
        //    return { fruitName: i };
        //});
        //fruit = fruit.filter(function (i) {
        //    return i[0] === "a";
        //});
        //log(fruit.sort());
        //log(fruit.every(function (i) {
        //    //return i[0] === "a"; // false
        //    return i.length > 0; // true
        //}));
        //log(fruit.some(function (i) {
        //    return i[0] === "a"; // true
        //}));
        //fruit.forEach(function (i) {

        //});
        // Objects
        //Object initializer syntax
        //var dog = {
        //    breed: "German Shepard"
        //};
        //dog.breed = "German Shepard";
        //dog.bark = function (log("woof"););
    };
    function log(msg) {
        console.log(msg);
    }
    /*Methods*/
     //log(f1("one", 2, 0.78, {}, []));
        //function f1() {
        //    //debugger;
        //}
    //var ops = {
    //    // Add Method
    //    add: function addNumbers(n1, n2) {
    //        return n1 + n2;
    //    }
    //}; // <---- ops ends here
    //Example of runnning
    //var x = ops.add(3, 5); // x == 8
    //var y = ops.addNumbers(3, 5); // not valid!
    /* Function Scope */
    /************************************************
     * Defining what is accessible in code and where 
     * encapsulation
     * *********************************************/
    /*Scope Example*/
    /*
    var x = 2000;
    function someFunc() {
        y = 12;
        return y;
    }
    var z = x + y; // invalid use of y
    var z = x + someFunc(); // z == 2012 */

    //Functions in functions 
    //function outerFunction(n) {
    //    function innerFunction() {
    //        return n * n;
    //    }
    //    return innerFunction();
    //}
    //Example of running
    // var x = outerFunction(4); // x == 16
    // innerfunction cannot be called directly

    //Module pattern
    //var mod = (function () {
    //    var m = 2000, c = 0; d = 10; y = 2;
    //    return {
    //        getHiddenYear: function () {
    //            return m + c + d + y;
    //        }
    //    };
    //}());
    //var x = mod.getHiddenYear(); // x == 2012
    //function add(n1, n2) {
    //    return n1 + n2;
    //}
    //function calc(n1, n2, processForCalc) {
    //    return processForCalc(n1, n2);
    //}
    //function executeMath() {
    //    setOutput(calc(4, 4, add));
    //}

    //DOM Selection
    //ID
    //var x = document.getElementById("anyID");
    //or
    //var x = document.querySelector("#anyID");
    //Selectors
    //var thing = document.querySelector("#anyID");
    //var list = document.querySelectorAll(".item");]
    function queryDOM() {
        var x = document.getElementById("pic");
    }
    app.start();

})();
