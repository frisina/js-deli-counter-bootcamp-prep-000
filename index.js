var katzDeliLine = [];

function takeANumber(currentLine, person) {
  katzDeliLine.push(person)

  return "Welcome, " + katzDeliLine.pop() + ". You are number " + katzDeliLine.length + " in line.";
}