//npm - global command, comes with node
//npm --version

// local dependency - use it only in this particular project
// npm i (install) <packageName>

//global dependency - use it in any project
// npm install -g <packageName>

//package.json - manifest file(stores important info about project/package)
    //manual approach(create package.json in the root, create properties etc.)
    //npm init(step by step, press enter to skip)
    //npm init -y(everything default)

//we need package.json bcs when we install dependencies it is stored there as a dependency - when we install dependency npm also creates folder node_modules
//we also need package.json bcs we need to provide info about our project such as dependencies

const _ = require('lodash'); //external module - install first the dependency, loadash - utility library

const items = [1,[2,[3,[4]]]]
const newItems = _.flattenDeep(items)

console.log(newItems)
console.log("hello world")