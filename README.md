#Repeat-end directive

The repeat-end directive fires an event at the last of an ng-repeat iteration

## Install

+ Bower

```bash
$ bower install angular-repeat-end --save
```

### Include the javascript file:

+ Use Wiredep

+ Or include it manually:

``` html
<script src="bower_components/angular-repeat-end/dist/repeat-end-directive.min.js"></script>
```

##Use

+ Inject the loader module into your app:

``` js
angular.module('myApp', ['evtrs.repeatend']);
```

+ Add the loader directive to an ng-repeat attribute

``` html
  <div ng-repeat="thing in things" repeat-end="YOUR_MESSAGE_TO_EMIT"></loader>
```



