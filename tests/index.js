// js extension in the file names is REQUIRED
// import html report, v 2.4.0
import {htmlReport} from "https://raw.githubusercontent.com/benc-uk/k6-reporter/2.4.0/dist/bundle.js";
// import local methods and settings
import { rsdPageTitlesCheck } from './modules/rsdPageTitlesCheck.js'
import { getOptions } from "./modules/getOptions.js"

// set type of load test to run
// "load" | "endurance" | "stress"
const type="endurance"

// export options to run
export const options = getOptions(type)

// construct file name
const fileName = `${new Date().getTime()}_${type}.html`

// create html summary report
export function handleSummary(data) {
  return {
    [`./tests/reports/${fileName}`]: htmlReport(data)
  }
}

export default rsdPageTitlesCheck