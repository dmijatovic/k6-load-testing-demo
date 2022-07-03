# K6 load test using NPM

Important is to realise that K6 supports tests written in javascript but it is not a Node app. Therefore not all npm features are natively included.
This section of documentation contains more info about [using k6 in node/npm way](https://k6.io/docs/using-k6/modules/)

## Tree types of imports

- Built-in modules: basic utility functions for load tests. These are modules embeded in k6 binary. The complete list is [available here](https://k6.io/docs/javascript-api/)
- Local modules/files: local jsvascript file to be imported into main file. Note! only basic javascript functions are supported, K6 is not Node.js and not the browser, so some functionality might be missing. For bundling of local modules into one output file webpack or other bundling tools can be used.
- Remote (https) modules: k6 can load remote modules using https. This could have raise some security concerns. There is a collection of [remote libs hosted by k6 on this location](https://jslib.k6.io/)

## Example templates

The documentation provides 2 example templates;

- [ES6 template with webapck](https://github.com/grafana/k6-template-es6): this example uses webpack and babel to transpile modern JS to ES5.
- [Typescript template](https://github.com/grafana/k6-template-typescript): this example also uses webpack and babel to transpile typescript to ES5.

## Conclusion

At this point in time my prefference is to run k6 locally using locally installed binary or docker image. The npm approach seem to me just more complex than other two options.