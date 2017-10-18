import React, { Component } from 'react';
import './App.css';

import Thermometer from 'react-thermometer-component'

const usage = `
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
`

const api = [
  {
    param: 'theme',
    type: 'String',
    description: 'Light or Dark',
    example: 'theme="light"',
    default: 'light'
  },
  {
    param: 'value',
    type: 'Number',
    description: 'Temperature value',
    example: 'value={27}',
    default: '0'
  },
  {
    param: 'max',
    type: 'Number',
    description: 'Maximum value of thermometer',
    example: 'max={100}',
    default: '100'
  },
  {
    param: 'steps',
    type: 'Number',
    description: 'Thermometer dividers',
    example: 'steps={3}',
    default: '0'
  },
  {
    param: 'format',
    type: 'String',
    description: 'Degrees format',
    example: 'format="°C"',
    default: '""'
  },
  {
    param: 'size',
    type: 'String',
    description: 'Thermometer size. Can be small, normal or large',
    example: 'size="large"',
    default: 'normal'
  },
  {
    param: 'height',
    type: 'Number',
    description: 'Thermometer height',
    example: 'height={300}',
    default: '200'
  },
]

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div class="thermometer-container">
            <Thermometer value={23}/>
          </div>

          <h1 className="App-title">A React Thermometer Component</h1>
        </header>
          <h3>Install</h3>
          <code>$ npm install --save react-thermometer-component</code>
          <h3>Usage</h3>
          <pre>{usage}</pre>
          <h3>API</h3>
          <div class="thermometer-container">
            <table>
              <tr>
                <th>Param</th>
                <th>Type</th>
                <th>Description</th>
                <th>Example</th>
                <th>Default</th>
              </tr>
              {api.map((api, key) => (
                <tr key={key}>
                  <td>{api.param}</td>
                  <td>{api.type}</td>
                  <td>{api.description}</td>
                  <td>{api.example}</td>
                  <td>{api.default}</td>
                </tr>
              ))}
            </table>
          </div>
        <h3>Examples</h3>
        <div class="examples">
          <Thermometer
            value={13}
            theme="light"
            size="small"
          />
          <Thermometer
            value={17}
            theme="light"
          />
          <Thermometer
            value={17}
            size="large"
          />
          <Thermometer
            value={17}
            theme="dark"
          />
        </div>
      </div>
    );
  }
}

export default App;
