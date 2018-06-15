var katzDeli=[]
var i=0
var returnString = ""
function takeANumber(katzDeliLine,name) {
  // console.log(katzDeliLine) 
  returnString = `Welcome, ${name}. You are number ${i+1} in line.`
  console.log(returnString)
  katzDeli.push(name)
  return returnString//,katzDeli
}
