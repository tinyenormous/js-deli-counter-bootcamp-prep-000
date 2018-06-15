var katzDeli=[]
var i=0
var returnString = ""
function takeANumber(katzDeliLine,name) {
  console.log(katzDeliLine) 
  do {
    if (name === katzDeliLine[i]) {
      returnString = `Welcome, ${name}. You are number ${i+1} in line.`
      console.log(returnString)
      katzDeli.push(name)
      
    } 
    i++
  } while (i<katzDeliLine.length)
  return returnString
}
