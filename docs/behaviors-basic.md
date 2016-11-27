# DataElementBehaviors.Basic

These are shared properties/methods/events that all components
in the data-elements package share.

## Properties

`model: String` 

The value the control is bound to.

`valid: Boolean` (default: true, notify: true)

Flag for the validity of the control. `true` when all validation passes. 
Plese use the `setValidity()` method for changing the validation state 
of controls. This will be made readOnly in the future.

`error: String` The error message shown when validation fails.

`name: String` The name of the control. **Mandatory**

## Methods

`addValidator(validatorFunction: Function, validationMessage: String): Void` 
- validatorFunction: A function that will test the validity of the input.
- validationMessage: The message to display when validation fails.

Add a validator to the control. Will be run after all native validation
procedures have been executed and passed. The `validatorFunction` must
return `true` if the validation has failed. You can add as many as you like.

`on(eventName: String, handler: Function): Void`

- eventName: The name of the event. E.g. 'blur'
- handler: The function that will handle the event.

Shorcut for the `document.addEventListener` function.

`setValidity(isValid: Boolean, errorMessage: String): Void`

- `isValid`: Is the field valid or not?
- `errorMessage`: The error message shown to the user if the field isn't valid.

The method for setting the validity of the input.

`validate(): Boolean`

A method stub that all elements inheriting this behavior must override.
The default implementation is a console.log() message.

## Events

- `data-element-added`: Fired when the control has been attached to the DOM.
- `validation`: Fired when the element's validity has been changed via 
`setValidity()`.


