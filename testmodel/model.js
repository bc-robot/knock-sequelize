/**
 * Created by kevin on 16/12/7.
 */
var Sequelize = require('sequelize');
var sequelize = new Sequelize('node_mysql','root','C', {
    host: 'localhost',
    dialect: 'mysql',
    pool: {
        max: 5,
        min: 0,
        idle: 1000
    },
});

var Model = sequelize.define('enterprise',
    {
        authorid: {
            type: Sequelize.INTEGER,
        },
        name: {
            type: Sequelize.STRING
        }
    },
    {
        'frezeTableName': true,
        'tableName': 'enterprise',
        'timestamps': true,
        'createdAt': 'create_time',
        'updatedAt': false,
        // 将deletedAt字段改名
        // 同时需要设置paranoid为true（此种模式下，删除数据时不会进行物理删除，而是设置deletedAt为当前时间
        // 'deletedAt': 'dtime',
        // 'paranoid': true,
        defaultScope: {
            where: {
                // username: 'dan'
            },
            limit: 12
        },
    });

// Model.find({id:1})
Model.findAll().then(function(dt) {
    dt.forEach(function(i){
        console.log(i.get({plain:true}));
    })
})

