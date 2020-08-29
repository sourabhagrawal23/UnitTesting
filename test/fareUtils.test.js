const mocha = require('mocha')
const chai = require('chai')
const fareUtils = require('../fareutils')

const expect = chai.expect

describe('fareUtils', function () {
    it('expect fare to be 50 for 0km, omin', () => {
        let fare = fareUtils.calcFare(0, 0)
        expect(fare).to.equal(50)
    })
})