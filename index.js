var katzDeliLine = [];

function takeANumber(currentLine, person) {
  katzDeliLine.push(person)

  return "Welcome, " + katzDeliLine[person] + ". You are number " + katzDeliLine.length + " in line.";
}
