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
    var Note = sequelize.define('note1',
        {
            'title': {
                'type': Sequelize.STRING(64),
                'allowNull': false
            }
        }
    );
    var Tag = sequelize.define('tag1', {
        'name': {
            'type': Sequelize.CHAR(64),
            'allowNull': false,
            'unique': true
        }
    });
    var Tagging = sequelize.define('tagging1',{
        'type': {
            'type': Sequelize.INTEGER(),
            'allowNull': true
        }
    });
    Note.belongsToMany(Tag, {'through': Tagging});
    Tag.belongsToMany(Note, {'through': Tagging});

    // yield Note.sync()
    // yield Tag.sync()
    // yield Tagging.sync()

    // var note = yield Note.create({'title': 'note'});
    // yield note.createTag({'name': 'tag'}, {'type': 0});

    var note = yield Note.create({'title': 'notef'});
    var tag = yield Tag.create({'name': 'C++'});
    yield note.addTag(tag, {'type': 1});
});