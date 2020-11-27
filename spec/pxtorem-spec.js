// Jasmine unit tests
// To run tests, run these commands from the project root:
// 1. `npm install -g jasmine-node`
// 2. `jasmine-node spec`

/* global describe, it, expect */

"use strict";
var postcss = require("postcss");
var pxtorem = require("..");
var basicCSS = ".rule { font-size: 15px }";
var filterPropList = require("../lib/filter-prop-list");

describe("pxtorem", function() {
  it("should work on the readme example", function() {
    var input =
      `
      /* root value phone */
      h1 { margin: 0 0 20px; font-size: 32px; line-height: 1.2; letter-spacing: 1px; }
      `;
    var output =
      `
      /* root value phone */
      h1 { margin: 0 0 20px; font-size: 2rem; line-height: 1.2; letter-spacing: 0.0625rem; }
      `
    var processed = postcss(pxtorem([
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
    ])).process(input).css;

    expect(processed).toBe(output);
  });
});
