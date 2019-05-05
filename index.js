var katzDeliLine = [];

function takeANumber(currentLine, person) {
  katzDeliLine.push(person)
  var realLength = katzDeliLine.length + 1;

  return "Welcome, " + katzDeliLine.pop() + ". You are number " + realLength + " in line.";
}
