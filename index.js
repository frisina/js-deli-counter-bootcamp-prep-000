var katzDeliLine = [];

function takeANumber(currentLine, person) {
  katzDeliLine.push(person)
  var realLength = katzDeliLine.length;

  return "Welcome, " + katzDeliLine.pop() + ". You are number " + realLength + " in line.";
}
