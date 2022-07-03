# K6 load testing

This repo explores options of new K6 solution for load testing websites and api's. In this example we will load test a project I am currently working on.

K6 solution is an Go binary (application) which accepts testing script written in modern javascript (ES6). However it is not npm/node application nor a full blown browser. This means that not all functionlitity is supported, for example fs from node is not included in k6 or browser window supported in browsers javascript.

Compared to previous application I was using, autocannon, looking at npm stats [it seem the right time to try k6](https://npmtrends.com/artillery-vs-autocannon-vs-k6)

## Installation

Based on the [official documentation](https://k6.io/docs/getting-started/installation/), the binary installation of k6 is adviced. The application is GO binary and the tests are written in plain modern javascript (ES6).
I will be using Linux Debian/Ubuntu version. In addition there is docker image that can be used, which is suitable for CI/CD application.

### Ubuntu/Debian instalation

I had problems using bash script on the website. But if you go [to this location](https://dl.k6.io/deb/dists/stable/main/binary-amd64/) and download deb package you can start installation locally. I downloaded [0.38.3-amd64 version](https://dl.k6.io/deb/dists/stable/main/binary-amd64/k6-v0.38.3-amd64.deb)

Script that did not work properly on Linux Mint 20.2

```bash
sudo gpg --no-default-keyring --keyring /usr/share/keyrings/k6-archive-keyring.gpg --keyserver hkp://keyserver.ubuntu.com:80 --recv-keys C5AD17C747E3415A3642D57D77C6C491D6AC1D69
echo "deb [signed-by=/usr/share/keyrings/k6-archive-keyring.gpg] https://dl.k6.io/deb stable main" | sudo tee /etc/apt/sources.list.d/k6.list
sudo apt-get update
sudo apt-get install k6

```

### Docker

Docker seem to be most simple approach to me. Using docker-compose to store long docker commands is even easier in my opnion. See docker folder for more info and docker-compose.yml for simple implementation.

### Using docker-compose

If you have docker and docker-compose installed on your machine you can use simple command `docker-compose up`.
For docker we use different script that for local k6 instace. I was not able to export reports from docker image back to local folder. This might be minor obstacle but I was not able to solve it for now.

```bash
# start solution
docker-compose up
# close and clan
docker-compose down
```

**On my machine local go binary was visible faster than docker-compose container version**.

### Reports

Basic report is output to the console. Beside that, there is [large number of supported outputs](https://k6.io/docs/results-visualization/end-of-test-summary/).

#### Custom html report

k6 offers callback function to use to customise report in any way desired. There is already html output report created by community that makes use of `handleSummary` callback function. [See github repo for more info](https://github.com/benc-uk/k6-reporter).

This is the reporting approach I prefer, because it gives oportunity to customise report file name.

### Running localy

If you installed k6 localy you can use following commands

```bash
# get version
k6 version
# get helo
k6 help
# run script
k6 run ./tests/index.js
```
