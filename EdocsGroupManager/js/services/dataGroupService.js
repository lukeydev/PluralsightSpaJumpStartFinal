/// <reference path="ajaxService.js" />
// shoppingDataService
// John Papa http://johnpapa.net
// Depends on scripts:
//                         ajaxservice.js
(function (my) {
    "use strict";
    my.groupDataService = {
        getAllGroups: function (callback) {
            //my.ajaxService.ajaxGetJsonp("GetSaleItems", null, callback);
            my.ajaxService.ajaxGetJson("groups/GetAllGroups", null, callback);
        },

        
        getAllMappedGroups: function (callback) {
            my.ajaxService.ajaxGetJson("mappedGroups/GetAllMappedGroups", null, callback);
        }
        //,

        //placeOrder: function (shoppingCart, callback) {
        //    //my.ajaxService.ajaxPostJsonp("PlaceOrder", shoppingCart, callback);
        //    my.ajaxService.ajaxPostJson("PlaceOrder", shoppingCart, callback);
        //}
    };
}(my));