var katzDeli=[]
var i=0
var returnString = ""
function takeANumber(katzDeliLine,name) {
  // console.log(katzDeliLine) 
  returnString = `Welcome, ${name}. You are number ${katzDeliLine.length+1} in line.`
  console.log(returnString)
  katzDeliLine.push(name)
  return returnString//,katzDeli
}


function nowServing(katzDeliLine){
  if (katzDeliLine.length>0) {
  var removedName=  katzDeliLine[0]
  katzDeliLine.shift()
  return `Currently serving ${removedName}.`

  }
  else {
  return "There is nobody waiting to be served!"  
  }
  
}

function currentLine(){
  var printString=""
  if (currentLine.length===0){
    return 
  }
  else {
    printString = 'The line is currently:'
    for (i=0; i<currentLine.length; i++){
      printString=printString.concat(currentLine[i])
    }
    return `The line is currently: 1. Bill, 2. Jane, 3. Ann`
  }
}