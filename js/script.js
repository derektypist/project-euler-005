// Function to Get Number Information (including Invalid Input)
function getNumberInfo() {
    // Set Up Variable
    let txt = "";
    // Get the Value of the Input Field
    let num = document.getElementById("mynumber").value;
    // Check if number is valid
    if (isNaN(num) || num.toString().length == 0 || num<1 || num> 30 || !Number.isInteger(Number(num))) {
        txt += `Invalid Input.  Please enter a whole number between 1 and 30.`;
    } else {
        txt += `You have entered the number ${num}. <p>`;
        txt += `The smallest multiple from 1 to ${num} is ${smallestMult(num)}.`;
    }

    // Display Information in the Browser
    document.getElementById("numinfo").innerHTML = txt;
}

/*
    Function to Return the Smallest Positive Integer that is
    evenly divisible (divisible with no remainder) by all of the numbers
    from 1 to n.
    smallestMult(5) returns 60.
    smallestMult(10) returns 2520.
*/
function smallestMult(n) {
    let g=1;
    for (let i=1;i<=n;i++) {
        g = lcm(g,i);
    }
    return g;
}

// Function to Calculate the Greatest Common Divisor (GCD)
function gcd(x,y) {
    return y==0 ? x : gcd(y,x%y);
}

// Function to Calculate the Least Common Multiple (LCM)
function lcm(x,y) {
    return Math.floor((x*y)/gcd(x,y));
}

// Function to Clear Information
function clearInfo() {
    let txt = "";
    document.getElementById("numinfo").innerHTML = txt;
}
