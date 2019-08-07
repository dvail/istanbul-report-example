# istanbul-report-example

All three test instances import and run the same test against code in sample.js.

To test with jest and generate coverage reports via nyc:
`yarn jest-test`

To test with puppeteer and generate coverage reports via puppeteer-to-istanbul and nyc:
`yarn pptr-test`

To run the first jest tests through c8 and generate coverage reports via c8:
`yarn jest-c8-test`
