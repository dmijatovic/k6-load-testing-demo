// import http from 'k6/http';
// import { check, group, sleep, fail } from 'k6';

import { HomePage } from './modules/home-page.js';

// we name it not options, to export it
// and use in index
export const settings = {
  // when single stage define in root of the object
  vus:10,
  duration:'10s',
  // you can also define differrent stages
  // stages: [
  //   // scale up to 20 users over 1 minute
  //   { duration: '1m', target: 20 },
  //   // hold load for 1 minute
  //   { duration: '1m', target: 20 },
  //   // scale down within 1 min
  //   { duration: '1m', target: 0 },
  // ],
  thresholds: {
    http_req_duration: ['p(95)<500'], // 95% of requests must complete below 0.5s
  },
};

export default function () {
  HomePage()
}