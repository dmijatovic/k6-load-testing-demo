import { settings as load } from '../settings/load.js'
import { settings as stress } from '../settings/stress.js'
import { settings as endurance } from '../settings/endurance.js'

/**
 * get options based on the type of the test to be performed
 * @param {*} type string
 */
export function getOptions(type) {
  switch (type) {
    case "stress":
      return stress
    case "endurance":
      return endurance
    default:
      // load test is default
      return load
  }
}