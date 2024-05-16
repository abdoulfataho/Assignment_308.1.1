// The initial numbers that must be verified.
const n1 = 8;
const n2 = 13;
const n3 = 22;
const n4 = 7;

// Check one: add up to 50
// This is a fairly simple operation using
// arithmetic operators and a comparison.
const isSum50 = (n1 + n2 + n3 + n4) == 50;

// Check two: at least two odd numbers
// Here, we use modulus to check if something is odd.
// Since % 2 is 0 if even and 1 if odd, we can use
// arithmetic to count the total number of odd numbers.
const isTwoOdd = (n1 % 2) + (n2 % 2) + (n3 % 2) + (n4 % 2) >= 2;

// Check three: no number larger than 25
// This time, we use the OR operator to check
// if ANY of the numbers is larger than 25.
const isOver25 = n1 > 25 || n2 > 25 || n3 > 25 || n4 > 25;

// Check four: all unique numbers
// This is long, and there are more efficient
// ways of handling it with other data structures
// that we will review later.
const isUnique = n1 != n2 && n1 != n3 && n1 != n4 && n2 != n3 && n2 != n4 && n3 != n4;

// Here, we put the results into a single variable 
// for convenience. Note how we negate isOver25 using
// the ! operator. We could also have tested for 
// "isUnder25" as an alternative.
const isValid = isSum50 && isTwoOdd && !isOver25 && isUnique;

// Finally, log the results.
console.log(isValid);

// Here's another example of how this COULD be done,
// but it SHOULD NOT be done this way. As programmers,
// we break things into small, manageable pieces so that
// they can be better understood, scaled, and maintained.
const dontDoThis = ((n1 + n2 + n3 + n4) == 50) && 
  ((n1 % 2) + (n2 % 2) + (n3 % 2) + (n4 % 2) >= 2) && 
  !(n1 > 25 || n2 > 25 || n3 > 25 || n4 > 25) && 
  (n1 != n2 && n1 != n3 && n1 != n4 && n2 != n3 && n2 != n4 && n3 != n4);




  // Part two :practical math.


  // Declaring a fonction to check the fuel consumption depanding on wich speed we are
  function fuelConsumption(speed) {
    if (speed === 55) return 30;
    else if (speed === 60) return 28;
    else if (speed === 75) return 23;
}
// Declaring a fonction that will taake the trip details
function tripDetails(speed) {
    const totalDistance = 1500;
    const fuelEfficiency = fuelConsumption(speed);
    const fuelNeeded = totalDistance / fuelEfficiency;
    const costPerGallon = 3;
    const totalCost = fuelNeeded * costPerGallon;
    const tripDuration = totalDistance / speed;
    return { fuelNeeded, totalCost, tripDuration };
}

function compareResults() {
    const budget = 175;
    const speeds = [55, 60, 75];
    speeds.forEach(speed => {
        const { fuelNeeded, totalCost, tripDuration } = tripDetails(speed);
        console.log(`At ${speed} mph:`);
        console.log(`Gallons of fuel needed: ${fuelNeeded}`);
        console.log(`Total cost of fuel: $${totalCost}`);
        console.log(`Trip duration: ${tripDuration.toFixed(2)} hours`);
        if (totalCost <= budget) {
            console.log("Budget is enough to cover the fuel expense.");
        } else {
            console.log("Budget is not enough to cover the fuel expense.");
        }
        console.log();
    });
}

compareResults();