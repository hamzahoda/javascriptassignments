// Assignment # 21 to 25







// task1
// var firstname=prompt("Enter your first name")
// var lastname=prompt("Enter your last name")
// var fullName=firstname+lastname
// document.write("Hello"+" "+fullName)

// task2
// var mobile=prompt("Enter favorite mobile phone model")
// document.write("My favourite phone is:"+" "+mobile+"<br>"+"Length of string:"+" "+mobile.length)

// task3
// var string="Pakistani"
// document.write("String:"+" "+string+"<br>"+"Index of 'n':"+" "+string.indexOf("n"))

// task4
// var world="Hello World"
// document.write("String:"+" "+world+"<br>"+"Last index of 'l':"+" "+world.lastIndexOf("l"))

// task5
// var search="Pakistani"
// document.write("String:"+" "+search+"<br>"+"Character at index 3:"+" "+search.charAt("3"))

// task6
// var str1=prompt("Enter your first name")
// var str2=prompt("Enter your last name")
// var fullName=str1.concat(str2)
// document.write("Hello"+" "+fullName)

// task7
// var city="Hyderabad"
// document.write("City:"+" "+city+"<br>")
// city =city.replace('Hyder',"Islam")
// document.write("After Replacement:"+" "+city)

// task8
// var message = "Ali and Sami are best friends. They play cricket and football together."
// document.write(message+"<br>"+"<br>")
// message=message.replace(/and/g,"&")
// document.write(message)

// task9
// var number="472"
// document.write("Value:"+" "+number+"<br>"+"Type:"+" "+typeof(number)+"<br>")
// strtointeger = Number(number)
// document.write("Value:"+" "+strtointeger+"<br>"+"Type:"+" "+typeof(strtointeger))

// task10
// var user=prompt("Enter any Word")
// document.write("User Input:"+" "+user+"<br>"+"Upper case:"+" "+user.toUpperCase())

// task11
// var titlecase=prompt("Enter any word to convert in titlecase")
// var firstletter=titlecase.charAt(0,1)
// var remainletter=titlecase.slice(1)
// firstletter=firstletter.toUpperCase()
// remainletter=remainletter.toLowerCase()
// var title=firstletter+remainletter
// document.write("User Input:"+" "+titlecase+"<br>"+"Title Case:"+" "+title)

// task12
// var num=35.36
// document.write("Number:"+" "+num+"<br>")
// var strnum=num.toString()
// strnum=strnum.replace(".","")
// document.write("Result"+" "+strnum)

// task13
// var username=prompt("Enter Username")
// for(i=0;i<username.length;i++){
//     if(username[i]=="@"){
//         alert("Please Enter a valid username")
//     }
//     else if(username[i]=="."){
//         alert("Please Enter a valid username")
//     }
//     else if(username[i]=="!"){
//         alert("Please Enter a valid username")
//     }
// }

// task14
// var A = ["cake", "apple pie", "cookie", "chips", "patties"]
// var search=prompt("Welcome to bakery what do you want to order.")
// search = search.toLowerCase()
// for(i=0;i<A.length;i++){
//     if(A[i] == search){
//     document.write(search+" "+"is available at index"+" "+i+" " +"in our bakery")
// } else{document.write("We are sorry pastry is not available in our bakkery")}
// }

// task15
// var university = "University of Karachi";
// var ar=university.split(' ')
// console.log( ar );

// for(i=0;i<university.length;i++){
//     document.write(university[i]+"<br>")
// }

// task16
// var user=prompt("Enter your input")
// document.write("User Input:"+" "+user+"<br>"+"Last character of input:"+" "+user.charAt(user.length-1))

// task17
// var occur="the quick brown fox jumps over the lazy dog"
// document.write("Text:"+" "+occur+"<br>"+"There are"+" "+occur.match(/the/g).length+" "+"occurrence(s) of word 'the'")




// Assignment 26 to 30





// task1
// var number=prompt("Enter positive integer")
// document.write("number:"+" "+number+"<br>")
// document.write("round off value:"+" "+Math.round(number)+"<br>")
// document.write("floor value:"+" "+Math.floor(number)+"<br>")
// document.write("ceil value :"+" "+Math.ceil(number)+"<br>")

// task2
// var number=prompt("Enter negative floating point")
// document.write("number:"+" "+number+"<br>")
// document.write("round off value:"+" "+Math.round(number)+"<br>")
// document.write("floor value:"+" "+Math.floor(number)+"<br>")
// document.write("ceil value :"+" "+Math.ceil(number)+"<br>")

// task3
// var absolute=prompt("Enter any number")
// document.write("The absolute value of"+" "+absolute+" "+"is"+" "+Math.abs(absolute))

// task4
// var dice=Math.floor(Math.random() * 7)+ 1;
// document.write("random dice value:"+" "+dice)

// task5
// var coin=Math.floor(Math.random()*2)+1;
// if(coin==2){
//     document.write(coin+"<br>"+"random coin value:Heads")
// }else if(coin==1){
//     document.write(coin+"<br>"+"random coin value:Tails")
// }

// task6
// document.write(Math.floor((Math.random() * 100) + 1));

// task7
// var user=prompt("Enter weight in kilograms")
// document.write("The weight of user is is"+" "+user)

// task8
// var secretnumber=Math.floor(Math.random() * 10) + 1;
// console.log(secretnumber)
// var user=prompt("Enter a number between 1 and 10")
// if(secretnumber==user){
//     alert("Congratulation")
// }else{alert("Try Again")}







// Assignments 31 to 34







// task1
// var date=new Date()
// document.write(date)

// task2
// var newdate = new Date();
// var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
// document.write("Current Month:"+" "+months[newdate.getMonth()])

// task3
// var newday = new Date()
// var days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
// alert("Today is"+" "+days[newday.getDay()])

// task4
// var dat=new Date();
// var days =  ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
// if (days[dat.getDay()]=="Sunday" || days[dat.getDay()]=="Saturday" ){
//     document.write("It’s Fun day")
// }else{document.write("Bad luck")}

// task5
// var checkdate=new Date();
// if(checkdate.getDate() <16){
//     document.write("First fifteen days of the month")
// }else{
//     document.write("Last days of the month")
// }


// task6
// var currentdate=new Date();
// var datesince=currentdate.getTime();
// document.write("Current date:"+" "+currentdate+"<br>")
// document.write("Elapsed milliseconds since January 1,1970:"+" "+datesince+"<br>")
// document.write("Elapsed minutes since January 1,1970:"+" "+datesince/60000)


// task7
// var userdate="December 31, 2020"
// var lastdate=new Date(userdate)
// document.write("Later date:"+" "+lastdate)

// task8
// var ramzandate=new Date("June 18, 2015");
// var todate=new Date();
// var ramzandatetime=ramzandate.getTime()
// var todatetime=todate.getTime()
// var total=todatetime-ramzandatetime
// var rounded=Math.floor(total/(1000*60*60*24))
// document.write(rounded+" "+"days have passed since 1st Ramzan,2015")

// task9
// var referencedate=new Date("December 5, 2015");
// var begining=new Date("January 1, 2015");
// var referencetime=referencedate.getTime();
// var beginingtime=begining.getTime();
// var total=referencetime-beginingtime
// var convert=total/1000
// document.write("On reference date"+" "+referencedate+"<br>"+convert+" "+"Seconds had passed since beginning of 2015")

// task10
// var currentdate=new Date();
// var aheadate=new Date("June 20 ,2020 ,14:50:24")
// document.write("Current Date"+" "+currentdate+"<br>"+"1 hour ago it was"+" "+aheadate)

// task11
// var presentdate=new Date();
// var getyear=presentdate.getFullYear();
// document.write("Current date"+" "+presentdate+"<br>")
// var year100=(getyear-100)
// presentdate.setFullYear(year100)
// document.write("100 years back,It was"+" "+presentdate+"<br>")

// task12
// var nowdate=new Date();
// var age=prompt("Enter your age")
// var year=nowdate.getFullYear();
// var birthyear=year-age
// document.write("Your age is"+" "+age+"<br>"+"Your birth year is"+" "+birthyear)



// task13
// var customername="abc customer"
// var currentmonth="June"
// var numberofunits=410
// var chargesperunit=16
// var netamount=numberofunits*chargesperunit
// var latepayment=350
// var grossamount=netamount+latepayment
// document.write("Customer Name:"+customername+"<br>"+
// "Current Month:"+currentmonth+"<br>"+
// "Number of Units:"+numberofunits+"<br>"+
// "Charges per unit"+chargesperunit+"<br>"+"<br>"
// +"Net amount payable(within due date:)"+" "+netamount+"<br>"
// +"Late payment surcharge:"+" "+latepayment+"<br>"
// +"Gross amount payable(after due date:)"+" "+grossamount)






// Assignment 35 to 38








// task1
// function currentdate(){
//     var newdate=new Date();
//     document.write(newdate)
// }
// currentdate()

// task2
// function greet(){
//     var firstname=prompt("Enter your first name")
//     var lastname=prompt("Enter your last name")
//     var greeting=firstname+" "+lastname
//     alert("Hello"+" "+greeting)
// }
// greet()

// task3
// function add(){
//     var num1=+prompt("Enter first number")
//     var num2=+prompt("Enter second number")
//     var sum = num1 +num2
//     alert(sum)
// }
// add()

// task4
// function calc(){
//     var num1=+prompt("Enter first number")
//     var num2=+prompt("Enter second number")
//     var operator=prompt("Enter operator")
//     if(operator=="+"){
//         document.write(num1+num2)
//     }else if(operator=="-"){
//         document.write(num1-num2)
//     }else if(operator=="/"){
//         document.write(num1/num2)
//     }else if(operator=="*"){
//         document.write(num1*num2)
//     }
// }
// calc()

// task5
// function square(num){
//     number=num**2
//     alert(number)
// }
// square(9)

// task6
// function factorial(num){
//     total=1
//     number=num
//     for(var i = number; i >= 1; i--){
//         total = total * i;
//     }
//     document.write(total);
// }
// factorial(5)

// task7
// function counting(){
//     var startnum=+prompt("Enter starting number")
//     var endnum=+prompt("Enter ending number")
//     for(var i=startnum;i<=endnum;i++){
//         document.write(i+"<br>")
//         console.log(i+"<br>")
//     }
// }
// counting()

// task8
// function hypotenuse(){
//     base=+prompt("Enter Base")
//     perpendicular=+prompt("Enter perpendicular")
//     powerbase=base**2
//     powerperpendicular=perpendicular**2
//     calc=Math.sqrt(powerbase+powerperpendicular)
//     document.write("hypotenuse"+" "+calc)
// }
// hypotenuse()

// task9
// function area(width,height){
//     var A=width*height
//     document.write(A)
// }
// area(2,4)
// width=2
// height=4
// area(width,height)

// task10
// function palindrome(){
// var check=prompt("Enter string to check")
// var reverse=""
// for(i=check.length-1;i>=0;i--){
//     reverse=reverse+check[i]
// }
// if(check==reverse){
//     document.write("Its a palindrome")
// }else{document.write("Not a palindrome")}}
// palindrome()

// task11
// function capital()
// {
//     var examplestring="the quick brown fox"
//  return examplestring.replace(/\w\S*/g, 
//     function(stringcapital){
//     return stringcapital.charAt(0).toUpperCase() + stringcapital.substr(1).toLowerCase();});
// }
// document.write(capital());
// capital()

// task12
// function checkoccurence(newstr,character){
// var newstring = newstr;
// var occurence=0
// var char=character
// for(i=0;i<newstring.length;i++){
//     if(newstring[i]==char){
//         occurence=occurence+1
//     }
// }
// document.write("String:"+" "+newstring+"<br>"+"Character:"+" "+char+"<br>"+"Occurences:"+" "+occurence)
// }
// checkoccurence('JSResourceS.com','o')

// task13
// function calcCircumference(radius){
//     circumference=(2*3.14)*radius
//     document.write("The circumference is"+" "+circumference+"<br>")
// }
// calcCircumference(4)

// function calcArea(radius){
//     radiusofcircle=3.14*(radius**2)
//     document.write("The area is"+" "+radiusofcircle)

// }
// calcArea(6)

