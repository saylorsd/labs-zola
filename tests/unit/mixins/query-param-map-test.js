import Ember from 'ember';
import QueryParamMapMixin from 'labs-zola/mixins/query-param-map';
import { module, test } from 'qunit';

module('Unit | Mixin | query param map');

// Replace this with your real tests.
test('it works', function(assert) {
  let QueryParamMapObject = Ember.Object.extend(QueryParamMapMixin);
  let subject = QueryParamMapObject.create();
  assert.ok(subject);
});
