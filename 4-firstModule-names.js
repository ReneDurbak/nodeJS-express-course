
//share
const john = 'John';
const peter = 'Peter';

//local
const secret = 'super secret'; // no access to secret variable because we are not exporting it


module.exports = {john,peter} // we always need to export a module

//console.log(module) //info about current module(file), Module is represented by an object