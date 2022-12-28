//jest is the test runner you should use. For unit/integration testing in node. install it with npm i --save-dev
//dev dependencies are exactly the same as dependencies except theyre not important for your app to run. That means when you 
//deploy your code to github or as an npm package users dont need your dev dependencies. 

//You should always be looking at code coverage, it ensures youre testing all paths in your code. to do this run 
//npm test -- --coverage --collectCoverageFrom="./src/**"

//you should add this jest config to your jest.config.js

// {
//     ...
//     "jest": {
//       "collectCoverage": true,
//       "collectCoverageFrom": ["./src/**"],
//       "coverageThreshold": {
//         "global": {
//           "lines": 90
//         }
//       }
//     }
//   }

const add = require('./myLib.mjs') 

describe("add()", () => {
    test('Adds num1 to num2', () => {
        const result = add(1,2)

        expect(result).toEqual(3)
    })
})

