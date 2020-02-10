'use strict';

var fs        = require('fs');
var path      = require('path');
var Sequelize = require('sequelize');
var basename  = path.basename(__filename);
var config    = require('../config/config')[env];
var db        = {};

  var sequelize = new Sequelize(
    
    {
      database:config.server.database,
      username:config.server.username,
      password:config.server.password,
      dialect:config.server.dialect,
      logging: (data)=> {}
    }
  );

  fs.readdirSync(__dirname)
  .filter(group=>{
      return(group.indexOf('.')===-1);
  })
  .forEach(group=>{
      fs.readdirSync(__dirname+'/'+group)
      .filter(file => {
        return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
      })
      .forEach(file => {
        var model = sequelize['import'](path.join(__dirname+'/'+group, file));
        db[model.name] = model;
      });
  })

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;