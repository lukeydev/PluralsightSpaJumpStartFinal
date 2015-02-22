$(function () {
    //group class
    var Group = function () {
        this.systemId = ko.observable();
        this.groupId = ko.observable();
        this.groupName = ko.observable();
        this.disableGroup = ko.observable(false);
    };

    //viewModel:
    my.vmDisable = {
        newGroup: ko.observable(""),
        groups: ko.observableArray([]),
        selectedGroup: ko.observable(),
        load: function () {
          //  var test = my.groupData.data.Groups;

            $.each(my.setDisableGroupsData.data.Groups, function (i, p) {
                my.vmDisable.groups.push(new Group()
                    .systemId(p.SystemId)
                    .groupId(p.GroupId)
                    .groupName(p.GroupName)
                    .disableGroup(p.DisableGroup)
                    );
            });
        },
        validGroups: my.validGroupData.data.Groups,
        selectedOption: ko.observable('')
    };
    //autoComplete Options
    my.vmDisable.options = my.vmDisable.validGroups.map(function (element) {
        var dbg = element;

        return { label: element.GroupName, value: element.GroupId, object: element };
    });
    //remove
    my.vmDisable.removeGroup = function (group) {
        my.vmDisable.groups.remove(group);
    };
    my.vmDisable.removeAllGroups = function () {
        my.vmDisable.groups.removeAll();
    };
    //add
    my.vmDisable.groupHasBeenEntered = ko.computed(function () {
        return (my.vmDisable.selectedOption().object == null) ? false : (my.vmDisable.selectedOption().object.GroupName.length > 0);
        //return my.vmDisable.newGroup().length > 0;                
    });
    my.vmDisable.addGroup = function () {
        var selectedGroupToAdd = my.vmDisable.selectedOption().object.GroupName;
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
        $.each(my.vmDisable.groups(), function (v, p) {
            if (p.groupName().toUpperCase() == selectedGroupToAdd.toUpperCase()) {
                groupInArray = true;
                return;
            }
        });
        if (!groupInArray) {
            my.vmDisable.groups.push(new Group()
                                .groupName(selectedGroupToAdd)
                                .groupId("DOCS_" + selectedGroupToAdd.toUpperCase())
                                );
        }

    };

    my.vmDisable.load();
    //ko.applyBindings(my.vmDisable, document.getElementById('#DisableGroups'));
    //ko.applyBindings(my.vmDisable);
});