"use-strict";

document.addEventListener("DOMContentLoaded", init);

function init() {
    let startTime = new Date().getTime();
    let sum = getSum(sieve(2000000));
    console.log(sum);
    let endTime = new Date().getTime();
    let time = endTime-startTime;
    console.log(time+"ms");
    showResult(sum,time);
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

function showResult(sum,time) {
    document.querySelector("section").innerHTML +=
        "<p>The found sum of all primes less than 2'000'000 is "+sum+".<br/>This was found in "+time+"ms.</p>"
}

