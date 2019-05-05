var katzDeliLine = [];

function takeANumber(currentLine, person) {
  katzDeliLine.push(person)
  let lastPerson = katzDeliLine.pop();
  return "Welcome, " + lastPerson + ". You are number " + (currentLine.length + 1) + " in line.";
}
