var katzDeliLine = [];

function takeANumber(currentLine, person) {
  katzDeliLine.push(person);

  console.log(katzDeliLine);
  return "Welcome, " + person + ". You are number " + (katzDeliLine.length + 1) + " in line.";
}
