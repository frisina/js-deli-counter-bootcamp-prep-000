function takeANumber(currentLine, person) {
  katzDeliLine.push(person);
  var name = katzDeliLine.pop();
  return "Welcome, " + name + ". You are number " + (currentLine.length + 1) + " in line.";
}
