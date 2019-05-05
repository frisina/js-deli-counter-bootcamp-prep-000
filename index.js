var katzDeliLine = [];

function takeANumber(currentLine, person) {
  katzDeliLine.push(person);
  var realName = katzDeliLine.splice(katzDeliLine - 1, 1);

  console.log(katzDeliLine);
  return "Welcome, " + realName + ". You are number " + katzDeliLine.length + " in line.";
}
