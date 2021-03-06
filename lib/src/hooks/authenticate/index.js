const { when, isProvider } = require('feathers-hooks-common');
const authenticate = require('./authenticate');

const validateAbilities = when(
  (hook) => !!(
    hook.params.provider &&
    (`/${hook.path}` !== hook.app.get('authentication').path) &&
    isProvider('external')
  ),
  authenticate
);

module.exports = validateAbilities;
