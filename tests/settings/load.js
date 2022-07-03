
export const settings = {
  // when single stage define in root of the object
  // vus:10,
  // duration:'10s',
  // you can also define differrent stages
  stages: [
    // scale up
    { duration: '10s', target: 2 },
    // hold load
    { duration: '40s', target: 2 },
    // scale down
    { duration: '10s', target: 0 },
  ],
  thresholds: {
    // 90% of requests must complete below 0.5s
    // 95% of requests must complete below 1s
    http_req_duration: ['p(90)<500','p(95)<1000'],
  },
};
