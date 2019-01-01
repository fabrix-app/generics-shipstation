'use strict'

const _ = require('lodash')
const smokesignals = require('smokesignals')
const path = require('path')

const Controller = require('@fabrix/fabrix/dist/common').FabrixController

module.exports = _.defaultsDeep({
  pkg: {
    name: require('../../package').name + '-test'
  },
  api: {
    controllers: {
    }
  },
  config: {
    main: {
      spools: [
        require('@fabrix/spool-router').RouterSpool,
        require('@fabrix/spool-express').ExpressSpool,
        require('@fabrix/spool-generics').GenericsSpool
      ]
    },
    routes: {
      // '/step1': {
      //   'GET': {
      //     handler: 'NmiController.nonSensitiveForm'
      //   },
      //   'POST': {
      //     handler: 'NmiController.sensitiveForm'
      //   }
      // },
      // '/step2': {
      //   'GET': {
      //     handler: 'NmiController.redirected'
      //   }
      // }
    },
    session: {
      secret: 'shipstation'
    },
    web: {
      express: require('express')
    },
    generics: {
      shipstation: {
        adapter: require('../../dist/index').ShipstationGeneric,
        config: {
          shipstation_key: process.env.SHIPSTATION_KEY,
          shipstation_secret: process.env.SHIPSTATION_SECRET
        },
        api: require('../../dist/api/index')
      }
    }
  }
}, smokesignals.FailsafeConfig)


