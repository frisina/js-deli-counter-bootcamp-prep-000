var katzDeliLine = [];

function takeANumber(currentLine, person) {
  katzDeliLine.push(person);
  let realName = katzDeliLine.pop();

  console.log(katzDeliLine);
  return "Welcome, " + realName + ". You are number " + (katzDeliLine.length + 1) + " in line.";
}
