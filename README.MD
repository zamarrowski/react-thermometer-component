# A React Thermometer Component

## Install

```sh
$ npm install --save react-thermometer-component
```

# View demo

https://zamarrowski.github.io/react-thermometer-component/

## Usage

```js
import React from 'react'
import { render } from 'react-dom'
import Thermometer from 'react-thermometer-component'

render(
  <Thermometer
    theme="light"
    value="18"
    max="100"
    steps="3"
    format="°C"
    size="large"
    height="300"
  />
, document.getElementById('container'))
```

### Browserify

[`browserify`](https://npmjs.com/packages/browserify) is supported, but you have to install [`browserify-css@^0.12.0`](https://npmjs.com/packages/browserify-css) manually.


## API:

| Param | Type | Description | Example | Default |
| --- | --- | --- | --- | --- |
| `theme` | `String` | Light or Dark | `theme="light"` | light |
| `value` | `Number` | Temperature value | `value={27}` | 0 |
| `max` | `Number` | Maximum value of thermometer | `max={100}` | 100 |
| `steps` | `Number` | Thermometer dividers | `steps={3}` | 0 |
| `format` | `String` | Degrees format | `format="°C"` | '' |
| `size` | `String` | Thermometer size. Can be small, normal or large | `size="large"` | normal |
| `height` | `Number` | Thermometer height | `height={300}` | 200 |

# Contributors

I have made improvements to this component. The original component is http://www.interaminense.com/react-ui-thermomete.
