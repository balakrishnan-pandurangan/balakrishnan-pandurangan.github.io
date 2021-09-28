export function getAge() {
    var age = new Date().getFullYear() - new Date(1990, 12, 27).getFullYear();
    return Math.abs(age);
  }
  
  export function getExperience() {
    let experienceInYears = new Date().getFullYear() - new Date(2014, 2, 17).getFullYear();
    let experienceInMonths = ((new Date().getMonth() - new Date(2014, 2, 17).getMonth()) + (12 * experienceInYears)) / 12;
    let gap = experienceInMonths - experienceInYears;
    if (gap > 0.5) {
      return Math.abs(experienceInYears) + ".5+";
    } else if (gap > 0.2) {
      return Math.abs(experienceInYears) + "+";
    } else {
      return Math.abs(experienceInYears);
    }
  }
  
  export function getCopyRightYear() {
    let year = new Date().getFullYear();
    let startYear = 2021;
    if (year > startYear) {
      return startYear + " - " + year;
    } else {
      return year;
    }
  }