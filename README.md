# vue-personal-show

> My personal show project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

## How to check if this project has flatmap-stream

1.please run this command to check if this project has flatmap-stream:
>
$ npm ls event-stream flatmap-stream
  >>1)、For example, including flatmap-stream
>>>...
flatmap-stream@0.1.1
...

 >> 2）、For example, not included

>>>vue-personl-show@1.0.0 /github/vue-personal-show

>>>└── (empty)

2.if has ,please downgrade to 3.3.4 :
>
$ npm install event-stream@3.3.4
