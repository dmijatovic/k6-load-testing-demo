// note js extension in the file names
// it is REQUIRED
import {rsdPageTitlesCheck} from './modules/rsdPageTitlesCheck.js'
import { getOptions } from "./modules/getOptions.js"

// extract test type from env variables
const type = __ENV.TEST_TYPE || "load"
console.log("Test type...", type)

// export options to run
export const options = getOptions(type)

// export script
export default rsdPageTitlesCheck