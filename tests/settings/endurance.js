
export const settings = {
  // when single stage define in root of the object
  // vus:10,
  // duration:'10s',
  // you can also define differrent stages
  stages: [
    // scale up
    { duration: '1m', target: 20 },
    // hold load
    { duration: '10m', target: 20 },
    // scale down
    { duration: '1m', target: 0 },
  ],
  thresholds: {
    // 95% of requests must complete below 0.5s
    http_req_duration: ['p(90)<700'],
  },
};
