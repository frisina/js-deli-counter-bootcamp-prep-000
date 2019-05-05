
function takeANumber(katzDeliLine, person) {
  katzDeliLine.push(person);

  console.log(katzDeliLine);
  return "Welcome, " + person + ". You are number " + katzDeliLine.length + " in line.";
}

function nowServing(katzDeliLine) {
  for (var i = 0; i < katzDeliLine[1]; i++) {
  if (katzDeliLine.length === 0) {
    return "There is nobody waiting to be served!"
  } else {
    return "Currently serving " + katzDeliLine[i] +".";
  }
  katzDeliLine.shift();
}
