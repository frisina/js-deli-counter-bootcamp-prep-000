
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

function currentLine(line) {
  txt = "";
  for(var i = 0; i < line.length; i++) {
    if (line.length < 0) {
      return "The line is currently empty";
    }
    txt += line[x] + " ";
  }
  return txt
}
