var katzDeliLine = [];

function takeANumber(currentLine, person) {
  katzDeliLine.push(person)
  var realName = katzDeliLine.splice(katzDeliLine - 1, 1)

  return "Welcome, " + realName + ". You are number " + currentline + " in line.";
}
