/**
 * Created by kevin on 16/12/1.
 */
var co = require('co')
var Sequelize = require('sequelize');


co(function *() {
var sequelize = new Sequelize('node_mysql','root','C', {
    host: 'localhost',
    dialect: 'mysql',
    pool: {
        max: 5,
        min: 0,
        idle: 1000
    }
})

var sequelize1 = new Sequelize('nodejs','root','C', {
    host: 'localhost',
    dialect: 'mysql',
    pool: {
        max: 5,
        min: 0,
        idle: 1000
    }
})


// var User = sequelize.define('user', {
//     fistName: {
//         type: Sequelize.STRING,
//         field: 'first_name'
//     },
//     lastName: {
//         type: Sequelize.STRING
//     }
// }, {
//     freezeTableName: true
// });
//
// User.sync({force: true}).then(function() {
//     return User.create({
//         firstName: 'John',
//         lastName: 'Hancock'
//     });
// });

var Model = sequelize.define('Users',
    {
        emp_id: {
            type: Sequelize.INTEGER,
        },
        // email: {
        //     type: Sequelize.STRING
        // },
        // accesss_level: {
        //     type: Sequelize.INTEGER
        // },
        // stuff: {
        //     type: Sequelize.STRING
        // }
    },
    {
        freezeTableName: true,
        tableName: 'users',
        underscored: true,
    defaultScope: {
        where: {
            // username: 'dan'
        },
        limit: 12
    },
    // scopes: {
    //     isALie: {
    //         where: {
    //             stuff: 'cake'
    //         }
    //     },
    //     complexFunction: function(email, accessLevel) {
    //         return {
    //             where: {
    //                 email: {
    //                     $like: email
    //                 },
    //                 accesss_level: {
    //                     $gte: accessLevel
    //                 }
    //             }
    //         }
    //     }
    // }
})
var Model1 = sequelize1.define('t_user',
    {
        name: {
            type: Sequelize.STRING,
        },
        // email: {
        //     type: Sequelize.STRING
        // },
        // accesss_level: {
        //     type: Sequelize.INTEGER
        // },
        // stuff: {
        //     type: Sequelize.STRING
        // }
    },
    {
        freezeTableName: true,
        tableName: 't_user',
        underscored: true,
        timestamps: false,
        defaultScope: {
            where: {
                // username: 'dan'
            },
            limit: 12
        },
    });


// Model1.hasOne(Model);
//
// Model.belongsTo(Model1);

// Model.findById(1).getModel1().then(function(dt1){
//     console.log(dt1.get({plain:true}))
// })


    // var mo = yield Model.findById(1).then(function(data){
    //     var id = data.get({plain:true}).id;
    // });
    // console.log(mo.get({plain:true}))
    // console.log('aa')
    // var mo1 = yield mo.setModel1().catch(function(dt){console.log(dt)});
    // console.log(mo1.get({plain:true}))
    // console.log('bb')
});


// then(function(dt){
//     // console.log(dt);
//     dt
//
// })


// Model.sync().then(function(){
    // return Model.create({
    //     username: 'ccc',
    //     cake: 'a piece'
    // })
    // Model.findAll({dbName:  'nodejs'}).then(function(dt) {
    //     dt.forEach(function(i){
    //         console.log(i);
    //     })
    // })
    // Model1.findAll({dbName:  'nodejs'}).then(function(dt) {
    //     dt.forEach(function(i){
    //         console.log(i);
    //     })
    // })
    // console.log();
// })