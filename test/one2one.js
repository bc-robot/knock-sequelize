/**
 * Created by kevin on 16/12/2.
 */
var Sequelize = require('sequelize')
var co = require('co')

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

co(function *() {
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

    // 增
    // var user = yield User.create({'emp_id': '7'}).catch(function(dt){
    //     console.log(dt);
    // });
    // var account = yield user.createAccount({'email': 'a'});
    // console.log(account.get({'plain': true}));

    // 改
    // var anotherAccount = yield Account.create({'email': 'b'});
    // console.log(anotherAccount);
    // anotherAccount = yield user.setAccount(anotherAccount);
    // console.log(anotherAccount);

    // var user = yield User.findOne(
    //     {
    //         where: {
    //             id: 1
    //         }
    //     })
    // var account = yield user.getAccount();
    // console.log(account.get({'plain':true}));


    // var user = yield User.findById(1, {
    //     'include': [Account]
    // });

    // SELECT `user`.`id`, `user`.`emp_id`, `user`.`created_at`, `user`.`updated_at`, `account`.`id` AS `account.id`, `account`.`email` AS `account.email`, `account`.`created_at` AS `account.created_at`, `account`.`updated_at` AS `account.updated_at`, `account`.`user_id` AS `account.user_id`
    // FROM `users` AS `user` LEFT OUTER JOIN `accounts` AS `account`
    // ON `user`.`id` = `account`.`user_id`
    // WHERE `user`.`id` = 1 LIMIT 1;
    // console.log(user.get({'plain': true}));


    //反向查找
    // var account = yield Account.findById(2,{
    //     'include': [User]
    // });
    //
    // console.log(account.get({'plain': true}))
});