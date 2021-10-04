function getSleepHours(day) {
  if (day === "monday") {
    return 1;
  } else if (day === "tuesday") {
    return 1;
  } else if (day === "wednesday") {
    return 1;
  } else if (day === "thursday") {
    return 1;
  } else if (day === "friday") {
    return 1;
  } else if (day === "saturday") {
    return 1;
  } else {
    return 1;
  }
}

/*
const getActualSleepHours = () => getSleepHours('monday') + getSleepHours('tuesday') + getSleepHours('wednesday') + getSleepHours('thursday') + getSleepHours('friday') + getSleepHours('saturday') + getSleepHours('sunday')
*/
const getActualSleepHours = () => 6 + 7 + 9 + 8 + 5 + 10 + 11;

console.log(getActualSleepHours());

/*
function getIdealSleepHours(){
  const idealHours = 1
  return idealHours * 7
} */

const getIdealSleepHours = (idealHours) => idealHours * 7;

function calculateSleepDebt() {
  const actualSleepHours = getActualSleepHours();
  const idealSleepHours = getIdealSleepHours(8);

  if (actualSleepHours === idealSleepHours) {
    console.log("Perfect amount of sleep");
  } else if (actualSleepHours > idealSleepHours) {
    const difference = actualSleepHours - idealSleepHours;
    console.log("Got more sleep than needed");
    console.log(`Got ${difference} extra hours of sleep`);
  } else {
    const difference = idealSleepHours - actualSleepHours;
    console.log("Get some rest");
    console.log(`You need ${difference} extra hours of sleep`);
  }
}

calculateSleepDebt();
