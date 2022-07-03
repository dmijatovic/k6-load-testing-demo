import http from 'k6/http'
import { parseHTML } from 'k6/html'
import { check, sleep } from 'k6'

export function validatePageTitle({ url, title,waitFor}) {
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
  check(pageTitle, {
    "correct page title":()=>pageTitle===title
  })
  if (waitFor) {
    sleep(parseInt(waitFor))
  }
}