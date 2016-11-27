[<- Back to Table of Contents](../README.md)

# data-form

The `data-form` element is a type extension to the regular HTML
`<form>` tag. Use this as the main container element for all of the
other elements listed in this package.

## Usage

```html
<form is="data-form">
    <!-- Your fields and controls -->
</form>
```
Note: This extension adds a `novalidate` attribute to any form it is used on.

## Properties

Since this is a type extension, all regular HTML form attributes
still apply.

`reference: Object` (readOnly: true, notify: true, default: `{valid: true}`)

A variable that can be bound to for showing field errors in the template.

## Methods

`validate(): Boolean`

 Runs through all controls registered on the form and validates them. 
 Sets `reference.valid` to `false` if there are any errors.

## Events

None.

## Behaviors

None. Very unruly.