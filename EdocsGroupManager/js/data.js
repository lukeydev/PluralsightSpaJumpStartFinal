/// <reference path="../Scripts/knockout-3.2.0.debug.js" />
var my = {};

//add service pulls here, currently set to sample data..
//currentlySet
my.groupData = (function (my) {
    "use strict";
    var data = {
        Groups: [
            {"SystemId": 1, "GroupId": "DOCS_SUPERVISORS", "GroupName":"DM Supervisors"},  
            {"SystemId": 2, "GroupId": "DOCS_USERS", "GroupName": "DM Users" },
            {"SystemId": 3, "GroupId": "RECORDS_MANAGERS", "GroupName": "Records Managers" },
            {"SystemId": 4, "GroupId": "PROJECTS", "GroupName": "Projects" }
        ]
    };
    return {
        data: data
    };
})(my);

//available Groups
my.availableGroupData = (function (my) {
    "use strict";
    var data = {
        Groups: [
            { "SystemId": 5, "GroupId": "BULLS", "GroupName": "Chicago Bulls" },
            { "SystemId": 6, "GroupId": "HORNETS", "GroupName": "Charlotte Hornets" },
            { "SystemId": 7, "GroupId": "HEAT", "GroupName": "Miami Heat" },
            { "SystemId": 8, "GroupId": "SPURA", "GroupName": "San Antonio Spurs" }
        ]
    };
    return {
        data: data
    };

})(my);

my.validGroupData = (function (my) {
    "use strict";
    var data = {
        Groups: [
            //{ "name": 'DOCS_SUPERVISORS', "id": 1 },
            //{ "name": 'DM_USERS', "id": 2 },
            //{ "name": 'RECORDS_MANAGERS', "id": 3 },
            //{ "name": 'CSD_CORP_REC', "id": 4 },
            //{ "name": 'CSD_ICTS_BUS_SUP', "id": 5 },
            //{ "name": 'HR', "id": 6 }

            { "SystemId": 5, "GroupId": "BULLS", "GroupName": "Chicago Bulls" },
            { "SystemId": 6, "GroupId": "HORNETS", "GroupName": "Charlotte Hornets" },
            { "SystemId": 7, "GroupId": "HEAT", "GroupName": "Miami Heat" },
            { "SystemId": 8, "GroupId": "SPURA", "GroupName": "San Antonio Spurs" }
        ]
    };
    return {
        data: data
    };

})(my);

my.setMapGroupsData = (function (my) {
    "use strict";
    var data = {
        MappedGroups: [
            { "SystemId": 9, "GroupId": "DOCS_SUPERVISORS", "GroupName": "DM Supervisors", "ReadOnly":true, "FullControl":false },
            { "SystemId": 10, "GroupId": "DOCS_USERS", "GroupName": "DM Users A", "ReadOnly": false, "FullControl": true },
            { "SystemId": 11, "GroupId": "RECORDS_MANAGERS", "GroupName": "Records Managers", "ReadOnly": true, "FullControl": true },
            { "SystemId": 12, "GroupId": "PROJECTS", "GroupName": "Projects", "ReadOnly": true, "FullControl": false }
        ]
    };
    return {
        data: data
    };
})(my);

my.setDisableGroupsData = (function (my) {
    "use strict";
    var data = {
        Groups: [
            { "SystemId": 1, "GroupId": "DOCS_SUPERVISORS", "GroupName": "DM Supervisors", "DisableGroup":true },
            { "SystemId": 2, "GroupId": "DOCS_USERS", "GroupName": "DM Users", "DisableGroup": true },
            { "SystemId": 3, "GroupId": "RECORDS_MANAGERS", "GroupName": "Records Managers", "DisableGroup": true },
            { "SystemId": 4, "GroupId": "PROJECTS", "GroupName": "Projects", "DisableGroup": false }
        ]
    };
    return {
        data: data
    };
})(my);







