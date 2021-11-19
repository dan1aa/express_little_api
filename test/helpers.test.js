const assert = require('assert');
const expect = require('chai').expect;

const { oddOrEven, typeofOfParameter } = require('../helpers/helper')

describe('Even or odd', () => {
    describe('Should eval numbers to even or odd', () => {
        it('Should return false', done => {
            const firstFunc = oddOrEven(5)
            expect(firstFunc).to.equal(false)
            done()
        })
        it('Should return true', done => {
            const secondFunc = oddOrEven(22)
            expect(secondFunc).to.equal(true)
            done()
        })
    })
})

describe('Typeof of params', () => {
    describe('Should return typeof of param', () => {
        it('Should return undefined', done => {
            const firstParam = typeofOfParameter(undefined)
            expect(firstParam).to.equal('undefined')
            done()
        })
        it('Should return string', done => {
            const firstParam = typeofOfParameter('hello')
            expect(firstParam).to.equal('string')
            done()
        })
        it('Should return object', done => {
            const firstParam = typeofOfParameter([1,2,3])
            expect(firstParam).to.equal('object')
            done()
        })
    })
})