// Library of functions to help with randomness

//Return a random decimal b/t low (inclusive) and high (exclusive)
function randomDec(low, high) { 
return Math.random () * (high - low) + low;
}

//Return a random integer b/t low (inclusive) and high (exclusive)
function randomInt(low, high) {
return Math.floor(randomDec(low, high));
}

// Return a random color as rgb string
function randomRGB() {
    let r = randomInt(0, 256)
    let g = randomInt(0, 256)
    let b = randomInt(0, 256)
    return `rgb(${r}, ${g}, ${b})`;
}

    
