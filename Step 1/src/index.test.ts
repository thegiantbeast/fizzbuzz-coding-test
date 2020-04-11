import { describe, it } from 'mocha'
import { expect } from 'chai'

import { fizzbuzzChallenge } from './index'

describe('Fizz Buzz Challenge', () => {
    it('should require two integer inputs', () => {
        expect(fizzbuzzChallenge(0.1, 0)).to.equal("Please specify two input integers.")
        expect(fizzbuzzChallenge(1.1, 2.2)).to.equal("Please specify two input integers.")
    })

    it('should require the second integer to be higher than the first integer', () => {
        expect(fizzbuzzChallenge(20, 10)).to.equal("Please specify the second integer as higher than the first one.")
    })

    it('should return "fizz" for multipliers of 3', () => {
        expect(fizzbuzzChallenge(3, 3)).to.equal('fizz')
        expect(fizzbuzzChallenge(6, 6)).to.equal('fizz')
    })

    it('should return "buzz" for multipliers of 5', () => {
        expect(fizzbuzzChallenge(5, 5)).to.equal('buzz')
        expect(fizzbuzzChallenge(10, 10)).to.equal('buzz')
    })

    it('should return "fizzbuzz" for multipliers of 15', () => {
        expect(fizzbuzzChallenge(15, 15)).to.equal('fizzbuzz')
        expect(fizzbuzzChallenge(30, 30)).to.equal('fizzbuzz')
    })

    it('should return the sequence between integers', () => {
        expect(fizzbuzzChallenge(2, 16)).to.equal('2 fizz 4 buzz fizz 7 8 fizz buzz 11 fizz 13 14 fizzbuzz 16')
        expect(fizzbuzzChallenge(-3, -1)).to.equal('fizz -2 -1')
        expect(fizzbuzzChallenge(20, 36)).to.equal('buzz fizz 22 23 fizz buzz 26 fizz 28 29 fizzbuzz 31 32 fizz 34 buzz fizz')
    })
})