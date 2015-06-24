Timber-Logger
=============

Purty logging in the console.

## Installation

  `npm install timber-logger --save`

## Usage

Instantiate:

```
  var timber = require('timber-logger');
```

Replace your console.log statements with the following:

```
  timber.log('Hello, World!');
```

This is how it would appear in the console:

![timber log](https://cloud.githubusercontent.com/assets/6021115/8340027/b4f3cf70-1a89-11e5-945e-073ab8cbc437.png)

Warnings would be:

```
  timber.warn('You have been warned!');
```

Would show up as:

![timber warn](https://cloud.githubusercontent.com/assets/6021115/8340029/bcf12858-1a89-11e5-84de-61e5720ac22a.png)

And errors:

```
  timber.error('This happens when warnings are disregarded!');
```

Would show up as:

![timber error](https://cloud.githubusercontent.com/assets/6021115/8340031/c06d9282-1a89-11e5-948c-b879a172d3d0.png)

Timber-Logger also has an experimental banner tool, some what similar to the [*NIX banner command](https://en.wikipedia.org/wiki/Banner_%28Unix%29).

```
  var timber = require('timber-logger');

  var helloBanner = timber.makeBanner('HELLO!');

  for (var i=0;i<8;i+=1) {
    timber.log(helloBanner[i]);
  }
```

You get:

<pre>
*     * ******  *       *         ***      *
*     * *       *       *        *   *     *
*     * *       *       *       *     *    *
******* *****   *       *       *     *    *
*     * *       *       *       *     *    *
*     * *       *       *        *   *
*     * ******  ******  ******    ***      *

</pre>


## Tests

  TODO

## Contributing

  TODO

## Release History

* 0.1.0 Initial release
* 0.1.1 Minor fixes
* 0.2.0 Added banner functionality
