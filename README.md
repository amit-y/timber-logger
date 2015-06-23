Timber-Logger
=============

Purty logging in the console.

## Installation

  `npm install timber-logger --save`

## Usage

To replace your console.log statement, use the following:

```
  var timber = require('timber-logger');

  timber.log('Hello, World!');
```

Timber-Logger also has an experimental banner tool, some what similar to the [*NIX banner command](https://en.wikipedia.org/wiki/Banner_%28Unix%29).

```
  var timber = require('timber-logger');

  var helloBanner = timber.makeBanner('HELLO!');

  for (var i=0;i<8;i+=1) {
    timber.log(helloBanner[i]);
  }
```

## Tests

  TODO

## Contributing

  TODO

## Release History

* 0.1.0 Initial release
* 0.1.1 Minor fixes
* 0.2.0 Added banner functionality
