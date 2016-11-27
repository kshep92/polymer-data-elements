[<- Back to Table of Contents](../README.md)

# DataElementBehaviors.TextField

Properties, methods and events shared by the `data-text-input`
and `data-text-field` elements.

## Properties

`pristine: Boolean` (default: true) 

Set to false once the user has interacted with the field in any way.

`touched: Boolean` (default: false) 

Set to true the first time the field has gained and then lost focus.
Sort of redundant, but used to determine when to trigger validation logic.

## Methods

`validate(): Boolean` (*override*)

Executes all HTML5 validations first and then any additional validation
methods set by the user. See [DataElementBehaviors.Basic#addValidator](behaviors-basic.md)

## Events

None.