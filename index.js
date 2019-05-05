function takeANumber(currentLine, person) {
  var name = person.pop();
  return "Welcome, " + name + ". You are number " + (currentLine.length + 1) + " in line.";
}
