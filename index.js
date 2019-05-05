var katzDeliLine = [];

function takeANumber(currentLine, person) {
  katzDeliLine.push(person)
  let lastPerson = katzDeliLine.pop();
  var count = 0;
  for (var i = 0; i < person.length; i++) {
    count++;
  }

  return "Welcome, " + lastPerson + ". You are number " + count + " in line.";
}
