import sum from '../src/sum';

describe('Sum', function () {
    it('Test two sum', () => {
        expect(sum(1, 2)).toEqual(3);
    });
});
