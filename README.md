# postcss-pxtorem-multi

A plugin for [PostCSS](https://github.com/ai/postcss) that support multiple rootValue based on [pxtorem](https://github.com/cuth/postcss-pxtorem)

## Install

```shell
$ npm install postcss-pxtorem-multi --save-dev
```

## Usage

1. set options which is pxtorem's option array added `type`
```
[{
  type: 'phone',
  rootValue: 16,
  unitPrecision: 5,
  selectorBlackList: [],
  propList: ["font", "font-size", "line-height", "letter-spacing"],
  replace: true,
  mediaQuery: false,
  minPixelValue: 0,
  exclude: null
}, {
  type: 'pad',
  rootValue: 20,
  unitPrecision: 5,
  selectorBlackList: [],
  propList: ["font", "font-size", "line-height", "letter-spacing"],
  replace: true,
  mediaQuery: false,
  minPixelValue: 0,
  exclude: null
}]
```

2. add remark on css file head：`root value ${type}`

The plugin will use corresponding option in prev step to generate rem
