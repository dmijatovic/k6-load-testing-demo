
export const settings = {
  // when single stage define in root of the object
  // vus:10,
  // duration:'10s',
  // you can also define differrent stages
  stages: [
    // scale up to 20 users over 1 minute
    { duration: '10s', target: 2 },
    { duration: '10s', target: 10 },
    { duration: '10s', target: 5 },
    { duration: '10s', target: 15 },
    { duration: '10s', target: 7 },
    { duration: '10s', target: 0 }
  ],
  thresholds: {
    // 90% of requests must complete below 0.5s
    http_req_duration: ['p(90)<500'],
  },
};
