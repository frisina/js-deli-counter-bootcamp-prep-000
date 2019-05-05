var katzDeliLine = [];

function takeANumber(currentLine, person) {
  currentLine = katzDeliLine.length;
  katzDeliLine.push(person);

  console.log(katzDeliLine);
  return "Welcome, " + person + ". You are number " + currentLine + " in line.";
}
