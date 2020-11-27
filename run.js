const postcss = require('postcss');
const plugin = require('./index.js')

const pxtoremMulti = plugin([
    {
      type: 'phone',
      rootValue: 37.5,
      baseDpr: 2,
      propList: ['*'],
      minPixelValue: 2
    },
    {
      type: 'pad',
      rootValue: 76.5,
      baseDpr: 2,
      propList: ['*'],
      minPixelValue: 2
    }
  ]);

const result = postcss.parse(`
/* root value phone */
h1 { margin: 0 0 20px; font-size: 32px; line-height: 1.2; letter-spacing: 1px; }
`);

pxtoremMulti(result);

console.log(result.toString())