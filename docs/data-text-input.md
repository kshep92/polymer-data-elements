[<- Back to Table of Contents](../README.md)

# data-text-input

Bind a String value from a JSON object to an HTML `<input type="text" />` tag.

All validation is fired first on `blur`, then on `input`.

## Usage

Given the JSON data:

```javascript
{
    user: {
        name: 'Kevin Sheppard'
    }
}
```

Use as follows:

```HTML
<input 
    type="text"
    is="data-text-input" 
    name="fullName" 
    model="{{user.name}}" 
    required />
```

To get the expected output:

![output](images/data-text-input.png)


## Properties

Inherited from [DataElementBehaviors.Basic](behaviors-basic.md):
 
 - `error: String`
 - `model: String`
 - `name: String`
 - `valid: Boolean`

 Inherited from [DataElementBehaviors.TextField](behaviors-text-feild.md);

 - `pristine: Boolean`
 - `touched: Boolean` 

 *All other HTML5 properties.

## Methods

Inherited from [DataElementBehaviors.TextField](behaviors-text-feild.md);

- `validate(): Boolean` (*override*)

*All other HTML5 methods.

Inherited from [DataElementBehaviors.Basic](behaviors-basic.md):

 - `data-element-added`
 - `validation`

## Events

*All other HTML5 events.

## Behaviors

- [DataElementBehaviors.Basic](behaviors-basic.md)
- [DataElementBehaviors.OptionList](behaviors-text-field.md)