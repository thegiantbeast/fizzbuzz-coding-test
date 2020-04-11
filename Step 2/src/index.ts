export const fizzbuzzChallenge = (start: number, end: number) => {
    if (!Number.isInteger(start) || !Number.isInteger(end)) {
        return "Please specify two input integers."
    }

    if (start > end) {
        return "Please specify the second integer as higher than the first one."
    }

    let output = ''

    for(let currentInteger = start; currentInteger <= end; currentInteger++) {
        const currentIntegerContains3 = currentInteger.toString().indexOf("3") !== -1
        const isMultiplierOf3 = (currentInteger % 3) == 0
        const isMultiplierOf5 = (currentInteger % 5) == 0
        const isMultiplierOf15 = (currentInteger % 15) == 0
        
        if (currentIntegerContains3) {
            output += 'lucky '
        }
        else if (isMultiplierOf15) {
            output += 'fizzbuzz '
        }
        else if (isMultiplierOf3) {
            output += 'fizz '
        }
        else if (isMultiplierOf5) {
            output += 'buzz '
        }
        else {
            output += `${currentInteger} `
        }
    }

    return output.trim()
}