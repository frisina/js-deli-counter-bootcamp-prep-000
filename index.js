
function takeANumber(katzDeliLine, person) {
  katzDeliLine.push(person);

  console.log(katzDeliLine);
  return "Welcome, " + person + ". You are number " + katzDeliLine.length + " in line.";
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return "There is nobody waiting to be served!"
  } else {
    var firstName = katzDeliLine[0];
    katzDeliLine.shift();
    return "Currently serving " + firstName +".";
  }
}

function currentLine(katzDeliLine) {
  for (var i = 1; i < katzDeliLine.length; i++) {
    if (katzDeliLine.length === 0 ) {
      return "The line is currently empty";
    } else {
    return "The line is currently: " + i + "." + katzDeliLine[i];
    }
  }
}
