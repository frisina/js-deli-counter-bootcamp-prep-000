
function takeANumber(katzDeliLine, person) {
  katzDeliLine.push(person);

  console.log(katzDeliLine);
  return "Welcome, " + person + ". You are number " + katzDeliLine.length + " in line.";
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return "There is nobody waiting to be served!"
  } else {
    var firstName = katzDeliLine[0];
    katzDeliLine.shift();
    return "Currently serving " + firstName +".";
  }
}

function currentLine(line) {
  var txt = "The line is currently: ";
  for(var i = 1; i <= line.length; i++) {
    txt += i + ". " + line[i] + ", " ;
    }
  return txt;
  }
