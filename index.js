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


function nowServing(){
  if (katzDeli>0) {
  katzDeli.shift()
  return katzDeli
  }
  else {
  return "There is nobody waiting to be served!"  
  }
  
}