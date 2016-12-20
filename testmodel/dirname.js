/**
 * Created by kevin on 16/12/7.
 */
console.log(__dirname)
var path = require('path')
var env       = process.env.NODE_ENV || 'development';
var config    = require(__dirname + '/config.json')[env];
var basename  = path.basename(module.filename);
console.log(basename,module.filename,config)