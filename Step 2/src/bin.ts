#!/usr/bin/env node

import { fizzbuzzChallenge } from './index'

const argv = process.argv.slice(2)
const start = Number(argv[0])
const end = Number(argv[1])

console.log(fizzbuzzChallenge(start, end))