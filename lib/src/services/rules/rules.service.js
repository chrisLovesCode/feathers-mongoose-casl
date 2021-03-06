/* eslint-disable quotes */
// Initializes the `rules` service on path `/rules`

const createService = require('../../utils/createService');
// const {createService} = require('feathers-mongoose-casl');
const createModel = require('./rules.model');
const hooks = require('./rules.hooks');
const swaggerSchemaExamples = require('../../utils/swaggerSchemaExamples');

module.exports = function (app) {
  const Model = createModel(app);
  const rulesCacheConfig = app.get('feathers-mongoose-casl').rulesCache;
  const options = {
    Model,
    paginate: {
      "default": rulesCacheConfig['local-config'].max,
      "max": rulesCacheConfig['local-config'].max
    },
    whitelist: ['$exists'],
    dashboardConfig: {
      sideBarIconName: 'account-book',
      docLayout: [
        ['name', 'description', 'active'],
        'actions',
        'subject',
        'fields',
        ['from', 'to'],
        'anonymousUser',
        'conditions',
        'userContext',
        'roles'
      ],

      i18n: {
        "enUS": {
          serviceName: 'Rules',
          serviceNameMany: 'Rules',
          serviceNameOne: 'Rule',
          fields: {
            "_id": "ID",
            'updatedAt': 'Updated At',
            'createdAt': 'Created At',
            "name": "Name",
            "description": "Description",
            "active": "Active",
            "actions": "Actions",
            "subject": "Subject",
            "fields": "Fields",
            "from": "From",
            "to": "To",
            "anonymousUser": "Anonymous User",
            "conditions": "Conditions",
            "userContext": "User Context",
            "roles": "Roles"
          }
        },
        "heIL": {
          serviceName: 'חוקים',
          serviceNameMany: 'חוקים',
          serviceNameOne: 'חוק',
          fields: {
            "_id": "מזהה",
            "updatedAt": "תאריך עדכון",
            "createdAt": "נוצר בתאריך",
            "name": "שם",
            "description": "תיאור",
            "active": "פעיל",
            "actions": "פעולות",
            "subject": "נושאים",
            "fields": "שדות",
            "from": "מתאריך",
            "to": "עד תאריך",
            "anonymousUser": "יוזר אנונימי",
            "conditions": "תנאים",
            "userContext": "מידע ממשתמש",
            "roles": "תפקידים"
          }
        },
        "deDE": {
          serviceName: 'Rechte',
          serviceNameMany: 'Rechte',
          serviceNameOne: 'Recht',
          fields: {
            "_id": "ID",
            'updatedAt': 'Aktualisiert am',
            'createdAt': 'Erstellt am',
            "name": "Name",
            "description": "Beschreibung",
            "active": "Aktiv",
            "actions": "Aktionen",
            "subject": "Subjekt",
            "fields": "Felder",
            "from": "Von",
            "to": "Bis",
            "anonymousUser": "Anonymer Benutzer",
            "conditions": "Bedingungen",
            "userContext": "Benutzerkontext",
            "roles": "Rollen"
          }
        }
      }
    }
  };

  // Initialize our service with any options it requires
  const rulesService = createService(options);
  app.use('/rules', rulesService);

  // Swagger docs
  if (app.docs && app.docs.paths['/rules']) {
    app.docs.paths['/rules'].post.description = 'Create and update rules collection';
    app.docs.paths['/rules'].post.parameters[0].schema = swaggerSchemaExamples.rulesSwaggerSchema;
  }

  // Get our initialized service so that we can register hooks
  const service = app.service('rules');

  service.hooks(hooks);
};
