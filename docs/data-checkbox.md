# data-checkbox

## Usage

Given the JSON data:

```javascript
{
    user: {
        agree: false
    }
}
```

Use the following markup to create a two-way binding with a checkbox:

```html
<input type="checkbox" is="data-checkbox" model="{{user.agree}}" id="cbAgree"> 
<label for="cbAgree">I agree to the bogus <a href="#">Terms of service</a>.</label>
```

## Properties

- `model: Boolean`

Properties inherited from [DataElementBehaviors.Basic](behaviors-basic.md):

- `error: String`
- `name: String`
- `valid: Boolean`

*All other HTML5 properties.

## Methods

Methods inherited from [DataElementBehaviors.Basic](behaviors-basic.md):

- `addValidator(validatorFn, errorMessage)`
- `on(eventName, handlerFn)`
- `setValidity(isValid, errorMessage)`
- `validate()`

*All other HTML5 methods.

## Events

Events inherited from [DataElementBehaviors.Basic](behaviors-basic.md):

- `data-element-added`
- `validation`

*All other HTML5 events.

## Behaviors

- [DataElementBehaviors.Basic](behaviors-basic.md)

