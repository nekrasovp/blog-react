import {random5, containsItem, beautifulDate, beautifulTime} from './usefulFunctions';

test('Test random 5 digits number generator', () => {
    expect(random5().toString().length).toBe(5);
})

test('Test containsItem', () => {
    const array = [1, 0.2, 'a']
    expect(containsItem(array, 1)).toBe(true)
    expect(containsItem(array, 'a')).toBe(true)
    expect(containsItem(array, 2)).toBe(false)
    expect(containsItem(array, 'bar')).toBe(false)
})

test('Test Date and Time beatufier', () => {
    const date = new Date('1995-12-17T03:24:00');
    expect(beautifulDate(date)).toBe('17.12.1995');
    expect(beautifulTime(date)).toBe('3:24');
})