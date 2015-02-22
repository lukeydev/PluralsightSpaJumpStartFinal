$(function () {
    //group class
    var Group = function () {
        this.systemId = ko.observable();
        this.groupId = ko.observable();
        this.groupName = ko.observable();
        this.disableGroup = ko.observable(false);
    };

    //viewModel:
    my.vm = {
        newGroup: ko.observable(""),
        groups: ko.observableArray([]),
        selectedGroup: ko.observable(),
        load: function () {
            $.each(my.groupData.data.Groups, function (i, p) {
                my.vm.groups.push(new Group()
                    .systemId(p.SystemId)
                    .groupId(p.GroupId)
                    .groupName(p.GroupName)
                    );
            });
        },
        users: my.remoteData.data.Users,
        selectedOption: ko.observable('')
    };
    //autoComplete Options
    my.vm.options = my.vm.users.map(function (element) {
        var dbg = element;

        return { label: element.GroupName, value: element.GroupId, object: element };
    });
    //remove
    my.vm.removeGroup = function (group) {
        my.vm.groups.remove(group);
    };
    my.vm.removeAllGroups = function () {
        my.vm.groups.removeAll();
    };
    //add
    my.vm.groupHasBeenEntered = ko.computed(function () {
        return (my.vm.selectedOption().object == null) ? false : (my.vm.selectedOption().object.GroupName.length > 0);
        //return my.vm.newGroup().length > 0;                
    });
    my.vm.addGroup = function () {
        var selectedGroupToAdd = my.vm.selectedOption().object.GroupName;
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
        $.each(my.vm.groups(), function (v, p) {
            if (p.groupName().toUpperCase() == selectedGroupToAdd.toUpperCase()) {
                groupInArray = true;
                return;
            }
        });
        if (!groupInArray) {
            my.vm.groups.push(new Group()
                                .groupName(selectedGroupToAdd)
                                .groupId("DOCS_" + selectedGroupToAdd.toUpperCase())
                                );
        }

    };

    my.vm.load();
    ko.applyBindings(my.vm, $('.DisableGroups   ')[0]);
});