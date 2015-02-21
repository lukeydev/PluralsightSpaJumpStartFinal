/// <reference path="../Scripts/jquery-2.1.3.min.js" />
ko.bindingHandlers.autoComplete = {
    // Only using init event because the Jquery.UI.AutoComplete widget will take care of the update callbacks
    init: function (element, valueAccessor, allBindings, viewModel, bindingContext) {
        // { selected: mySelectedOptionObservable, options: myArrayOfLabelValuePairs }
        var settings = valueAccessor();

        var selectedOption = settings.selected;
        var options = settings.options;

        var updateElementValueWithLabel = function (event, ui) {
            // Stop the default behavior
            event.preventDefault();

            // Update the value of the html element with the label 
            // of the activated option in the list (ui.item)
            if (ui.item != null) {
                $(element).val(ui.item.label);

                // Update our SelectedOption observable
                if (typeof ui.item !== "undefined") {
                    // ui.item - label|value|...
                    selectedOption(ui.item);
                }
            }
        };

        $(element).autocomplete({
            source: options,
            select: function (event, ui) {
                updateElementValueWithLabel(event, ui);
            },
            focus: function (event, ui) {
                updateElementValueWithLabel(event, ui);
            },
            change: function (event, ui) {
                updateElementValueWithLabel(event, ui);
            }
        });
    }
};

// Array with original data
//var remoteData = [{
//    name: 'DOCS_SUPERVISORS',
//    id: 1
//}, {
//    name: 'DM_USERS',
//    id: 2
//}, {
//    name: 'RECORDS_MANAGERS',
//    id: 3
//}, {
//    name: 'CSD_CORP_REC',
//    id: 4
//}, {
//    name: 'CSD_ICTS_BUS_SUP',
//    id: 5
//}, {
//    name: 'HR',
//    id: 6
//}];
