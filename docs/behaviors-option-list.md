# DataElementBehaviors.OptionList

Properties shared by `data-selector` and `simple-data-selector`

## Properties

`labelField: String` (default: 'label')

For use in the [data-select](data-select.md) tag.

`multiple: Boolean` (default: false)

Flag to allow/disallow multiple selection.

`required: Boolean` (default: false)

A flag to mark the field as required. When `multiple == true` the
control will ensure that at least one item is selected.

`selectedItem: Object`

The currently selected item. A two-way object binding from the host.

`selectedItems: Array`

The currently selected items. A two-way array binding from the host.

`valueField: String` (default: 'id')

The key of the `selectedItem` object that the control will update
and use for determining whether or not to check a checkbox or radio button. 

## Methods

None.

