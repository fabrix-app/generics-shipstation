'use strict'
/* global describe, it */
const assert = require('assert')
describe('Shipping Generic Shipstation', () => {
  let ShippingGenericService

  before((done) => {
    ShippingGenericService = global.app.services.ShippingGenericService
    done()
  })

  it('should exist', () => {
    assert(ShippingGenericService)
  })

})
