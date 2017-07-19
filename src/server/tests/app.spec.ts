import app from '../app';
import test from 'ava';

test('foo', t =>
  t.true(app.middleware.length > 0)
);
