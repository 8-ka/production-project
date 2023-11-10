import { classNames } from "./classNames"

describe('classNames', () => {
  test('only first param', () => {
    expect(classNames('someClass')).toBe('someClass');
  })
  
  test('with additional', () => {
    const expected = 'someClass class1 class2';
    
    expect(classNames('someClass', {}, ['class1', 'class2'])).toBe(expected);
  })
})