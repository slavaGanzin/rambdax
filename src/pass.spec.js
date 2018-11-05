import { pass } from './pass'

test('true on success', () => {
  const result = pass(1, 'foo', {})('number', 'string', 'object')

  expect(result).toBe(true)
})

test('false on failure', () => {
  expect(pass(1, 'foo', {})('number', 'string', 'string')).toBe(
    false
  )
})

test('true when single schema', () => {
  expect(pass(1, 2, 3)('number')).toBe(true)
})

test('false when single schema', () => {
  expect(pass(1, 'foo', {})('number')).toBe(false)
})
