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
    var User = sequelize.define('user2s',
        {
            'emp_id': {
                'type': Sequelize.CHAR(10),
                'allowNull': false,
                'unique': true
            }
        }
    );
    var Note = sequelize.define('notes',
        {
            'title': {
                'type': Sequelize.CHAR(64),
                'allowNull': false
            }
        }
    );

    /*
     * User的实例对象将拥有getNotes、setNotes、addNote、createNote、removeNote、hasNote方法
     */
    User.hasMany(Note);
    /*
     * Note的实例对象将拥有getUser、setUser、createUser方法
     */
    Note.belongsTo(User);

// 增
//     var user = yield User.create({'emp_id': '3'});
//     var note = yield user.createNote({'title': 'a'});
//     console.log(note);

    // var user = yield User.create({'emp_id': '9'});
    // var note = yield Note.create({'title': 'b'});
    // var aa = yield user.addNote(note);
    // console.log(aa);

    // 为user增加note1、note2
//     var user = yield User.create({'emp_id': '10'});
//     var note1 = yield user.createNote({'title': 'a'});
//     var note2 = yield user.createNote({'title': 'b'});
// // 先创建note3、note4
//     var note3 = yield Note.create({'title': 'c'});
//     var note4 = yield Note.create({'title': 'd'});
// // user拥有的note更改为note3、note4
//     yield user.setNotes([note3, note4]);

    // // 删
    // var user = yield User.create({'emp_id': '11'});
    // var note1 = yield user.createNote({'title': 'a'});
    // var note2 = yield user.createNote({'title': 'b'});
    // yield user.setNotes([]);
    // yield user.removeNote(note);

    // 查
    // var notes = yield user.getNotes({
    //     'where': {
    //         'title': {
    //             '$like': '%css%'
    //         }
    //     }
    // });
    // notes.forEach(function(note) {
    //     console.log(note);
    // });

    // var notes = yield Note.findAll({
    //     'include': [User],
    //     'where': {
    //         'title': {
    //             '$like': '%css%'
    //         }
    //     }
    // });
    // notes.forEach(function(note) {
    //     // note属于哪个user可以通过note.user访问
    //     console.log(note);
    // });

    // var users = yield User.findAll({
    //     'include': [Note],
    //     'where': {
    //         'created_at': {
    //             '$lt': new Date()
    //         }
    //     }
    // });
    // users.forEach(function(user) {
    //     // user的notes可以通过user.notes访问
    //     console.log(user);
    // });

    // var users = yield User.findAll({
    //     'include': [
    //         {
    //             'model': Note,
    //             'where': {
    //                 'title': {
    //                     '$like': '%css%'
    //                 }
    //             }
    //         }
    //     ],
    //     'where': {
    //         'created_at': {
    //             '$lt': new Date()
    //         }
    //     }
    // });
});