# error Handler

* **hook.errorHandler** to make sure that errors get cleaned up before they go back to the client

###  Open src\app.hooks.js and paste this

{% code-tabs %}
{% code-tabs-item title="src\\app.hooks.js" %}
```javascript
const {hooks} = require('feathers-mongoose-casl');

module.exports = {
  before: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  },

  after: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  },

  error: {
    all: [hooks.errorHandler() ], // errorHandler - make sure that errors get cleaned up before they go back to the client
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  }
};
```
{% endcode-tabs-item %}
{% endcode-tabs %}

```text
git add .
git commit -m "Add feathers-mongoose-casl authentication and authorization hooks"
```
