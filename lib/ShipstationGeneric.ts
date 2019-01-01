// tslint:disable max-line-length

import * as shipstationAPI from 'node-shipstation'
import { Generic } from '@fabrix/spool-generics'

export class ShipstationGeneric extends Generic {
  public config: {
    shipstation_key: string,
    shipstation_secret: string
  }

  /**
   * Create Shipstation Instance
   * @returns {*} Shipstation Instance
   */
  shipstation() {
    return new shipstationAPI(this.config.shipstation_key, this.config.shipstation_secret)
  }

}

