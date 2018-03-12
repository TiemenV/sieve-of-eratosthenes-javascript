"use-strict";

document.addEventListener("DOMContentLoaded", init);

function init() {
    let startTime = new Date().getTime();
    console.log(getSum(sieve(2000000)));
    let endTime = new Date().getTime();
    console.log(endTime-startTime+"ms");
}

function sieve(l) {
    sl = l - 2;
    a = [];
    for (let i = 0; i < sl; i++) {
        a.push(true);
    }
    p  =[];
    for (let i = 0; i < sl; i++) {
        if (a[i]) {
            j = 2 * i + 2;
            while (j < sl) {
                a[j] = false;
                j += i + 2
            }
            p.push(i+2);
        }
    }
    return p;
}

function getSum(array) {
    let sum = 0;
    for(let i in array) {
        sum += array[i];
    }
    return sum;
}
