/*global expect*/
import React from 'react'
import { Add } from './Addition'
//import { compileAndroidCode } from './Addition'


describe("add()", () => {
    it("is should add two numbers", () => {
        let expectedOutput = 7
        let actualOutput = Add(2, 5)
        expect(actualOutput).toBe(expectedOutput)
    })
    it("it should add only numbers", () => {
        //let actualOutput = Add(2, "a")
        expect(() => { Add(2, "a") }).toThrow(Error);
        //expect(actualOutput).toBe(null)
    })

})
