export function lengthofstring(answer){
    if (answer.length > 8)
        return true
    return false
}

export function hascaps(answer){
    const regex = /[A-Z]/
    if(regex.test(answer))
        return false
    return true
}

export function presenceofspecialcharacter(answer){
    const regex = new RegExp("\\W")
    if(regex.test(answer))
        return true
    return false
}

export function sumtosixtynine(answer){
    let sum = 0, numbers = answer.match(/\d/g)
    if (numbers)
        for (const number of numbers)
            sum += parseInt(number, 10)
    else
        return false
    if(sum == 69)
        return true
    return false
}

export function drangonofthewest(answer){
    return (answer.includes("iroh"))
}

export function sundayinclusion(answer){
    return (answer.includes("sunday"))
}

export function ibelieve(answer){
    return answer.includes("ibelieve")
}

export function oddlength(answer){
    return answer.length%2 != 0
}

export function isprimelength(answer){
    for(let i = 2; i<answer.length; i++){
        if(answer.length%i == 0)
            return false
    }
    return true
}