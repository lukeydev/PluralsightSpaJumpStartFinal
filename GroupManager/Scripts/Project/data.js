/// <reference path="../knockout-3.2.0.debug.js" />
var my = {}

my.sampleData = (function (my) {
    "use strict";
    var data = {
        Groups: [
            { "GroupId": 1, "GroupName": "DOCS_SUPERVISORS", "DisableMe": "true" },
            { "GroupId": 2, "GroupName": "DOCS_USERS", "Disable": "false" },
            { "GroupId": 3, "GroupName": "RECORDS_SUPERVISORS", "Disable": "true" },
            { "GroupId": 4, "GroupName": "DOCS_SUPERVISORS", "Disable": "true" }
        ]
    };
    return {
        data: data
    };
})(my);