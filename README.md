# angular2-di-decorators

This project will be a collection of decorators to make it easier to use the
dependency inject system of angular2 with [javascript  decorators](https://github.com/wycats/javascript-decorators/blob/master/README.md).

**Note: this is only necessary because javascript decorators do not support parameter decorators**

## Installation

```
npm install --save angular2-di-decorators
```

## Usage

```javascript
import {Component} from 'angular2/core';
import Service from "./service";
import { InjectParameters } from "angular2-di-decorators";

@Component({
    selector: 'my-app',
    template: '<h1>My First Angular 2 App</h1>',
    providers: [Service]
})
@InjectParameters([Service])
export default class AppComponent {
  constructor(service) {
    this.service = service;
  }
}
```

## Example project

See [angular2-di-decorators-example](http://github.com/gaslight/angular2-di-decorators-example)
