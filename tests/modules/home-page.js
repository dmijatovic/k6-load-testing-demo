import http from 'k6/http'
import { parseHTML } from 'k6/html'
import { group, check, sleep } from 'k6'

export function HomePage() {
  group('visit homepage', function () {
    const res = http.get('https://research-software.dev/')
    // check status is 200
    check(res, {
      "status 200":(res)=>res.status===200
    })
    // parse body as html
    const doc = parseHTML(res.body)
    // get page title
    const pageTitle = doc.find("head title").text()
    // you can use console log
    // console.log("pageTitle...", pageTitle)
    // validate page title
    check(pageTitle, {
      'correct page title':()=>pageTitle==='Research Software Directory'
    })
    // wait for 1 second
    // sleep(1)
  })
}