// return the largest number in the array.  For example, returnLargest([1,3,10]) should return 10.
// returnLargest([-2,-5,-10]) should return -2.

function returnLargest(arr) {
    var retVal = arr[0];
    for (var i = 1; i < arr.length; i++) {
        if (arr[i] > retVal) retVal = arr[i];
    }
    return retVal;
}

describe("returnLargest", function () {
    it("should return 5 when we pass [1,2,3,4,5] as an argument", function () {
        expect(returnLargest([1, 2, 3, 4, 5])).toEqual(5);
    });
    it("should return 11 when we pass [2, 7, 11, 3, 6] as an argument", function () {
        expect(returnLargest([2, 7, 11, 3, 6])).toEqual(11);
    });
    it("should return -23 when we pass [-44, -101, -23] as an argument", function () {
        expect(returnLargest([-44, -101, -23])).toEqual(-23);
    });
    it("should return 13 when we pass [4, 11, 5, 9, 13] as an argument", function () {
        expect(returnLargest([4, 11, 5, 9, 13])).toEqual(13);
    });
    it("should return 99 when we pass [13, 99, 45] as an argument", function () {
        expect(returnLargest([13, 99, 45])).toEqual(99);
    });
});