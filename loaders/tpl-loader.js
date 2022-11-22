const {
  tplReplace
} = require('./utils')

module.exports = function tplLoader(source) {
  source = source.replace(/\s+/g, '');
  console.log(source);
  return `
  export default (options)=>{
      ${ tplReplace.toString()}
      return tplReplace('${source}', options)
  }
  `
}