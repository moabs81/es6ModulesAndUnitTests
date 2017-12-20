'use strict';

const arrToSort = [];
for (var i = 0; i < 8; i++) {
    let num = Math.random() * 100;
    num = num - (num % 1);
    arrToSort.push(num);
};
//arrToSort.forEach(element => { console.log(element) });

const doTheBreak = function() {
    let arr1 = this.splice(0, this.length / 2);
    console.log(arr1.length + ' || ' + this.length);
    if (arr1.length > 1) {
        doTheBreak.call(arr1);
        doTheBreak.call(this);
    };
    if (arr1.length == 1 && this.length == 1) {
        console.log('reached the bottom!');
    };
};

//doTheBreak.call(arrToSort);

const tryThisRecursion = function() {
    let arr1 = this.splice(0, this.length / 2),
        arr2 = this,
        newArr = [];
    if (arr1.length > 1) {
        tryThisRecursion.call(arr1);
    } else {
        if (arr1[0] < arr2[0]) {
            newArr.push
        }
    }
};

tryThisRecursion.call(arrToSort);