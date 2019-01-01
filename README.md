# generics-shipstation

[![Gitter][gitter-image]][gitter-url]
[![NPM version][npm-image]][npm-url]
[![Build Status][ci-image]][ci-url]
[![Test Coverage][coverage-image]][coverage-url]
[![Dependency Status][daviddm-image]][daviddm-url]
[![Follow @FabrixApp on Twitter][twitter-image]][twitter-url]

Generic Fulfillment Provider for Shipstation.com.

Looking for [Spool-Generics?](https://github.com/fabrix-app/spool-generics)

## Install

```sh
$ npm install --save @fabrix/generics-shipstation
```

## Configure

```js
// config/generics.ts
export const generics = {
  // make the key shipstation, alternatively make the key payment_processor to be the default payment_processor  
  shipstation: {
    adapter: require('@fabrix/generic-shipstation').ShipstationGeneric,
    config: {
        shipstation_public: '<your public key>',
        shipstation_secret: '<your private key>'
    },
    api: require('@fabrix/generic-shipstation/api'),
    icon: '' // url to an icon you want to use for this generic
  }
}
```

[npm-image]: https://img.shields.io/npm/v/@fabrix/generics-shipstation.svg?style=flat-square
[npm-url]: https://npmjs.org/package/@fabrix/generics-shipstation
[ci-image]: https://img.shields.io/circleci/project/github/fabrix-app/generics-shipstation/master.svg
[ci-url]: https://circleci.com/gh/fabrix-app/generics-shipstation/tree/master
[daviddm-image]: http://img.shields.io/david/fabrix-app/generics-shipstation.svg?style=flat-square
[daviddm-url]: https://david-dm.org/fabrix-app/generics-shipstation
[gitter-image]: http://img.shields.io/badge/+%20GITTER-JOIN%20CHAT%20%E2%86%92-1DCE73.svg?style=flat-square
[gitter-url]: https://gitter.im/fabrix-app/Lobby
[twitter-image]: https://img.shields.io/twitter/follow/FabrixApp.svg?style=social
[twitter-url]: https://twitter.com/FabrixApp
[coverage-image]: https://img.shields.io/codeclimate/coverage/github/fabrix-app/generics-shipstation.svg?style=flat-square
[coverage-url]: https://codeclimate.com/github/fabrix-app/generics-shipstation/coverage
