﻿
// John Papa http://johnpapa.net
// Depends on scripts:
//                         jQuery
(function (my) {
    "use strict";
    //TODO:  put your hosting server here



    //var serviceBase = 'http://localhost:49218/api/groups/',
    var serviceBase = 'http://localhost:49218/api/',
        getSvcUrl = function (method) { return serviceBase + method; };
    
    my.ajaxService = (function () {
        var ajaxGetJson = function (method, jsonIn, callback) {
            alert(getSvcUrl(method));

            $.ajax({
                url: getSvcUrl(method),
                type: "GET",
                data: ko.toJSON(jsonIn),
                dataType: "json",
                contentType: "application/json",
                success: function (json) {
                    callback(json);
                }
            });
        },
            ajaxPostJson = function (method, jsonIn, callback) {
                $.ajax({
                    url: getSvcUrl(method),
                    type: "POST",
                    data: ko.toJSON(jsonIn),
                    dataType: "json",
                    contentType: "application/json",
                    success: function (json) {
                        callback(json);
                    }
                });
            };
        return {
            ajaxGetJson: ajaxGetJson,
            ajaxPostJson: ajaxPostJson
        };
    })();
}(my));