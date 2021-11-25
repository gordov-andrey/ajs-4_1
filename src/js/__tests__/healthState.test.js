import healthState from '../healthState';

test.each([
  [95, 'healthy'],
  [50, 'healthy'],
  [49.9, 'wounded'],
  [15, 'wounded'],
  [14.9, 'critical'],
  [5, 'critical'],
  ['test', 0],
])('health test', (health, expected) => {
  const result = healthState({
    name: 'Маг',
    health,
  });

  expect(result).toBe(expected);
});
