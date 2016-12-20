/**
 * Created by kevin on 16/12/2.
 */
var Sequelize = require('sequelize')
var co = require('co')
co(function *(){

    var sequelize = new Sequelize(
        'uuu',
        'root',
        'C',
        {
            'dialect': 'mysql',
            'host': 'localhost',
            'port': 3306,
            'define': {
                'underscored': true,
                'charset': 'utf8',
                'collate': 'utf8_general_ci',
                'timestamps': true
            }
        }
    )

    var User = sequelize.define(
        'user',
        {
            'emp_id': {
                'type': Sequelize.STRING(10),
                'allowNull': false,
                'unique': true
            },
            'nick': {
                'type': Sequelize.STRING(64),
                'allowNull': false
            },
            'department': {
                'type': Sequelize.STRING(64),
                'allowNull': true
            }
        },
        {
            'frezeTableName': true,
            'tableName': 'xyz_users',
            'timestamps': true,
            'createdAt': false,
            'updatedAt': 'utime',

            // 将deletedAt字段改名
            // 同时需要设置paranoid为true（此种模式下，删除数据时不会进行物理删除，而是设置deletedAt为当前时间
            'deletedAt': 'dtime',
            'paranoid': true
        }
    );


    //增
    // yield User.sync();
    // var user = User.build({
    //     'emp_id': '5',
    //     'nick': '小红',
    //     'department': '技术部'
    // });

    // user = yield user.save();
    // console.log(user.get({'plain': true}));



    //
    // var user = yield User.create({
    //     'emp_id': '4',
    //     'nick': '小明',
    //     'department': '技术部'
    // });
    // console.log(user.get({'plain': true}));


//改
    // 方法1：操作对象属性（不会操作db），调用save后操作db
    // user.nick = '小白';
    // user = yield user.save();
    // console.log(user.get({'plain': true}));

// 方法2：直接update操作db
//     user = yield user.update({
//         'nick': '小白白'
//     });
//     console.log(user.get({'plain': true}));
    // 方法1
//     user.emp_id = '33';
//     user.nick = '小白';
//     user = yield user.save({'fields': ['nick']});
//
// // 方法2
//     user = yield user.update(
//         {'emp_id': '33', 'nick': '小白'},
//         {'fields': ['nick']}
// });



    //删
    // yield User.destroy(
    //     {
    //         where: {
    //             id:1
    //         },
    //         force: true
    //     });
    //
    // //查
    // yield users = yield User.findAll({
    //     'attributes': ['emp_id','nick']
    //     // 'where': {
    //     //     'id': [1, 2, 3],
    //     //     'nick': 'a',
    //     //     'department': null
    //     // }
    // });
    // console.log(users)
    // var users = yield User.findAll({
    //     'where': {
    //         'id': {
    //             '$eq': 1,                // id = 1
    //             '$ne': 2,                // id != 2
    //
    //             '$gt': 6,                // id > 6
    //             '$gte': 6,               // id >= 6
    //
    //             '$lt': 10,               // id < 10
    //             '$lte': 10,              // id <= 10
    //
    //             '$between': [6, 10],     // id BETWEEN 6 AND 10
    //             '$notBetween': [11, 15], // id NOT BETWEEN 11 AND 15
    //
    //             '$in': [1, 2],           // id IN (1, 2)
    //             '$notIn': [3, 4]         // id NOT IN (3, 4)
    //         },
    //         'nick': {
    //             '$like': '%a%',          // nick LIKE '%a%'
    //             '$notLike': '%a'         // nick NOT LIKE '%a'
    //         },
    //         'updated_at': {
    //             '$eq': null,             // updated_at IS NULL
    //             '$ne': null              // created_at IS NOT NULL
    //         }
    //     }
    // });

//排序
//     var users = yield User.findAll({
//         'order': [
//             ['id','DESC'],
//             ['nick']
//         ]
//     });

    //分页
    // var countPerPage = 20, currentPage = 5;
    // var users = yield User.findAll({
    //     'limit': countPerPage,                      // 每页多少条
    //     'offset': countPerPage * (currentPage - 1)  // 跳过多少条
    // });

    User.findAll({
        'limit': 20,
        'offset': 0
    }).then(function(users){
        console.log(users)
    });
    // .then(users => {
    //     console.log(users);
    //     users.map(user=> console.log(user.get({plain: true})));
    // });
    // console.log(result.rows);
    // console.log(result);


    // sequelize.query("select * from xyz_users").spread(function(results, metadata) {
    //     // Results will be an empty array and metadata will contain the number of affected rows.
    //     console.log(results,metadata)   update xyz_users set department='艺术1'
    // })
    // sequelize.query("select * from xyz_users").then(function(dt) {
    //     console.log(dt);
    // })
    // spread(function(results, metadata) {
    //     // Results will be an empty array and metadata will contain the number of affected rows.
    //     console.log(results,' - - - - - - - ',metadata)
    // })

    //批量操作
    var users = yield User.bulkCreate(
        [
            {'emp_id': 'a', 'nick': 'a'},
            {'emp_id': 'b', 'nick': 'b'},
            {'emp_id': 'c', 'nick': 'c'}
        ]
    );

    var affectedRows = yield User.update(
        {'nick': 'hhhh'},
        {
            'where': {
                'id': [2, 3, 4]
            }
        }
    );

    var affectedRows = yield User.destroy({
        'where': {'id': [2, 3, 4]}
    });


    // 关系 一对一 一对多 多对多
    var User = sequelize.define('user',
        {
            'emp_id': {
                'type': Sequelize.CHAR(10),
                'allowNull': false,
                'unique': true
            }
        }
    );
    var Account = sequelize.define('account',
        {
            'email': {
                'type': Sequelize.CHAR(20),
                'allowNull': false
            }
        }
    );
    /*
     * User的实例对象将拥有getAccount、setAccount、addAccount方法
     */
    User.hasOne(Account);
    /*
     * Account的实例对象将拥有getUser、setUser、addUser方法
     */
    Account.belongsTo(User);
}).catch(function(e) {
    console.log(e)
})


