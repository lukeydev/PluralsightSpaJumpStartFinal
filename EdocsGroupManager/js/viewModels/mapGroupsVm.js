/// <reference path="../../Scripts/knockout-3.2.0.debug.js" />
$(function () {

    var MappedGroup = function () {
        this.systemId = ko.observable();
        this.groupId = ko.observable();
        this.groupName = ko.observable();
        this.readOnly = ko.observable(false);
        this.fullControl = ko.observable(false);
    };

    //mapped:
    my.vmMap = { 
        newGroup: ko.observable(""),
        groups: ko.observableArray([]),
        selectedGroup: ko.observable(),
        load: function () {
            $.each(my.groupData.data.Groups, function (i, p) {
                my.vmMap.groups.push(new MappedGroup()
                    .systemId(p.SystemId)
                    .groupId(p.GroupId)
                    .groupName(p.GroupName)
                    );
            });
        },
        users: my.remoteData.data.Users,
        selectedOption: ko.observable('')
    };

    //remove
    my.vmMap.removeGroup = function (group) {
        my.vmMap.groups.remove(group);
    };
    my.vmMap.removeAllGroups = function () {
        my.vmMap.groups.removeAll();
    };

    //add:
    //autoComplete Options
    my.vmMap.options = my.vmMap.users.map(function (element) {
        return { label: element.GroupName, value: element.GroupId, object: element };
    });
    //add
    my.vmMap.groupHasBeenEntered = ko.computed(function () {
        return (my.vmMap.selectedOption().object == null) ? false : (my.vmMap.selectedOption().object.GroupName.length > 0);
        //return my.vmDisable.newGroup().length > 0;                
    });
    my.vmMap.addGroup = function () {
        var selectedGroupToAdd = my.vmMap.selectedOption().object.GroupName;
        if (selectedGroupToAdd === "") {
            return;
        }
        groupInArray = false;
        groupIsValid = false;
        $.each(my.availableGroupData.data.Groups, function (i, p) {

            if (p.GroupName.toUpperCase() == selectedGroupToAdd.toUpperCase()) {
                groupIsValid = true;
                return;
            }
        });
        if (!groupIsValid) {
            return;
        }
        $.each(my.vmMap.groups(), function (v, p) {
            if (p.groupName().toUpperCase() == selectedGroupToAdd.toUpperCase()) {
                groupInArray = true;
                return;
            }
        });
        if (!groupInArray) {
            my.vmMap.groups.push(new MappedGroup()
                                .groupName(selectedGroupToAdd)
                                .groupId("DOCS_" + selectedGroupToAdd.toUpperCase())
                                );
        }

    };

    //


    my.vmMap.load();
    ko.applyBindings(my.vmMap);
    //ko.applyBindings(my.vmMap, document.getElementById('#MappedGroups'));

});