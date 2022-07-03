import http from 'k6/http'
import { parseHTML } from 'k6/html'
import { check, sleep } from 'k6'

/**
 * Visit provided url and validate that page title
 * in the head is to provided title value.
 * Optionally you can provide time to wait after each request
 * waitFor is number in seconds to pass to sleep fn.
 * @param url: string, an valid complete url incl https://
 * @param title: string
 * @param waitFor: number to sleep in seconds
 */
export function validatePageTitle({url,title,waitFor}) {
  // make a request
  const res = http.get(url)
  // check status
  check(res, {
    "status 200":(res)=>res.status===200
  })
  // parse body
  const doc = parseHTML(res.body)
  // get Page title
  const pageTitle = doc.find("head title").text()
  const propName = `[${title}]`
  check(pageTitle, {
    [`${propName}`]:()=>pageTitle===title
  })
  // sleep(1)
  if (waitFor) {
    // console.log("waitFor...",waitFor)
    sleep(parseInt(waitFor))
  }
}