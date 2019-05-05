
function takeANumber(currentLine, person) {
  var katzDeliLine = [];
  katzDeliLine.push(person)
  var realName = katzDeliLine.splice(katzDeliLine - 1, 1)
  var realLength = katzDeliLine.length + 1;

  return "Welcome, " + realName + ". You are number " + realLength + " in line.";
}
