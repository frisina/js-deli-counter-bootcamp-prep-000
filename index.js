
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
  var i = 1;
  var text = "The line is currently: ";
  while (i <= line.length) {
    if (line.length === 0)
      text = "The line is currently empty.";
    } else {
      text += "" + i + ". " + line[i] + ", ";
      i++;
  }
  return text;
}
