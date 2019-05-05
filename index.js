
function takeANumber(katzDeliLine, person) {
  currentLine = katzDeliLine.length + 1;
  katzDeliLine.push(person);

  console.log(katzDeliLine);
  return "Welcome, " + person + ". You are number " + currentLine + " in line.";
}
