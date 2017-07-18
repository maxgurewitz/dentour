import app from '../server/app';
import test from 'ava';

test('foo', t =>
  t.true(app.middleware.length > 0)
);
