// import html report, v 2.4.0
import { htmlReport } from "https://raw.githubusercontent.com/benc-uk/k6-reporter/2.4.0/dist/bundle.js";

import maxLoad, { settings } from './max-load.js'

// export options to run
export const options = settings


const fileName = `${new Date().getTime()}_summary.html`

// create html summary report
export function handleSummary(data) {
  return {
    [`./tests/reports/${fileName}`]: htmlReport(data)
  }
}

export default maxLoad