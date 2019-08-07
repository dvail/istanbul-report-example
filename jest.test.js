import { testA } from './sample'

test('test some sample code', () => {

  let param1 = 0
  let param2 = 100

  expect(testA(param1, param2)).toBe(param1)
});
