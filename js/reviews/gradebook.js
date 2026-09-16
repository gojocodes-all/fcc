function getAverage(arr){
  let sum = 0;
  for(const numbers of arr){
    sum += numbers;
  }
  const avg = sum / arr.length;
  return avg;
}

function getGrade(score){
  if(score === 100){
    return "A+";
  }
  else if(score <= 99 && score >= 90){
    return "A";
  }
  else if(score < 90 && score >= 80){
    return "B";
  }
  else if(score < 80 && score >= 70){
    return "C";
  }
  else if(score < 70 && score >= 60){
    return "D";
  }
  else if(score < 60 && score >= 50){
    return "E";
  }
  else if (score < 50 && score >= 0){
    return "F";
  }
  else {
    return `${score} is invalid.
    Please provide a valid score value`
  }
}

function hasPassingGrade(score){
  let bool = false;
  let grade = getGrade(score);
  if(grade !== "F"){
    bool = true;
  }
  return bool;
}

function studentMsg(arr,studScore){
  const average = getAverage(arr);
  const grade = getGrade(studScore);
  if(hasPassingGrade(studScore) === true && grade.length <= 2){
return `Class average: ${average}. Your grade: ${grade}. You passed the course.`  
  }
  else if(hasPassingGrade(studScore) === false && grade.length <= 2){
    return `Class average: ${average} Your grade: ${grade}. You failed the course.`
  }
  return `Your score is invalid`;
}
console.log(studentMsg([100,90,91,98,97,99,91,99],101))