'use strict';

const assert = require('assertive');

const Cache = require('../lib/cache');

describe('Cache', () => {
  it('always has a backend', () => {
    const cache = new Cache({});
    assert.truthy(cache.backend);
  });

  it('has a "memory" backend by default', () => {
    const cache = new Cache({});
    assert.equal('memory', cache.backend.type);
  });
});
