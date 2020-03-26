/*
function takeANumber(current, name) {
    current.length+1;
    current.push(name);
  return `Welcome, ${name}. You are number ${current.length} in line.`;
}


function nowServing(current) {
  if(current.length < 1) {
    return "There is nobody waiting to be served!";
  } else {
    var inFront = current.shift();
    return `Currently serving ${inFront}.`;
  }
}


function currentLine(current) {
  if(current.length < 1) {
    return "The line is currently empty.";
  } else {
    var name = []; 
      for( var i = 0; i < current.length; i++ ) {
        name.push(`${i+1}. ${current[i]}`);
      }  
    return "The line is currently: " + name.join(", ");
  }
}  
*/


/*
function takeANumber(current, name) {
  current.push(name) && current.length+1;
    return `Welcome, ${name}. You are number ${current.length} in line.`;
}

*/



function takeANumber(current,name) {
  current.push(name) && current.length+1;
  for()
    return `Welcome. You are ticket number ${current[i]}.`;
}


function nowServing(current) {
  if(current.length < 1) {
    return "There is nobody waiting to be served!";
  } else {
     var inFront = current.shift();
     return `Currently serving ${inFront}.`;
  }
}

function currentLine(current) {
  if(current.length < 1) {
    return "The line is currently empty.";
  } else {
    var i = 0;
    var name = [];
      for(i = 0; i < current.length; i++) {
        name.push(`${i+1}. ${current[i]}`);
      }
      return "The line is currently: " + name.join(", ");
  }
}































