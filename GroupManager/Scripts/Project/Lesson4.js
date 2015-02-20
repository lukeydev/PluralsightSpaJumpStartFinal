/// <reference path="../knockout-3.2.0.debug.js" />

$(function () {

    ////object literal..
    //var viewModel = {
   //     firstName: ko.observable("John")
   // };

    var viewModel = function () {
        this.firstName = ko.observable("Sam");
    }

    ko.applyBindings(viewModel);
})

