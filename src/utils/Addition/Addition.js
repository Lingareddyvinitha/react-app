import React from 'react'

export const Add = (a, b) => {
    if (typeof a === "number" && typeof b === "number") {
        return a + b;
    }
    else {
        throw new Error('please enter two numbers');
    }

}
/*
export function compileAndroidCode(a) {
    if (a === 5) {
        throw new Error('you are using the wrong JDK');
    }
}*/
