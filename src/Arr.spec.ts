import * as Arr  from './Arr';

describe('Arr', () => {
    it('range', async () => {
        expect([0,1,2,3]).toEqual(Arr.range(0,3));
        expect([1,2,3,4]).toEqual(Arr.range(1,4));
        expect([1]).toEqual(Arr.range(1,1));
    });
    
    it('compareArray', async () => {
        expect(Arr.compareArray([0],[0])).toBeTruthy();
        expect(Arr.compareArray([0,1,3],[0,1,3])).toBeTruthy();
        expect(Arr.compareArray([undefined,'b',3],[undefined,'b',3])).toBeTruthy();
        expect(Arr.compareArray([0],[1])).toBeFalsy();
        expect(Arr.compareArray([0],[0,1])).toBeFalsy();
        expect(Arr.compareArray(['b'],['b','b'])).toBeFalsy();
        expect(Arr.compareArray(['b'],['ba'])).toBeFalsy();
    });
    
    it('warp', async () => {
        expect(Arr.warp(0)).toEqual([0]);
        expect(Arr.warp('b')).toEqual(['b']);
        expect(Arr.warp([0])).toEqual([0]);
        expect(Arr.warp(['b'])).toEqual(['b']);
        expect(Arr.warp(undefined)).toEqual([]);
        expect(Arr.warp(null)).toEqual([]);
    });
    
    it('collapse', async () => {
        expect([1, 2, 3, 4, 5, 6, 7, 8, 9]).toEqual(Arr.collapse([[1, 2, 3], [4, 5, 6], [7, 8, 9]]));
    });
});