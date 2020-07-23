// Assignment # 38-44

// task1
// function power(a,b){
//     alert(a**b)
    
// }
// power(2,5)

// task2
// function checkYear(year){
//     if( ((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0)){
//         alert("Leap Year")
//     }
//     else{alert("Not a Leap Year")}
// }
// checkYear(2020)

// task3
// function sides(a,b,c){
//     s=( a + b + c ) / 2
//     area(s,a,b,c)
// }
// function area(s,a,b,c){
//     console.log(s,a,b,c)
//     areavalue = s*(s - a)*(s - b)*(s - c)
//     alert(Math.sqrt(areavalue))
// }
// sides(3,4,5)

// task4
// function mainFunc(){
//     firstsubmarks=+prompt("Enter marks of first subject")
//     secondsubmarks=+prompt("Enter marks of second subject")
//     thirdsubmarks=+prompt("Enter marks of third subject")
//     total=firstsubmarks+secondsubmarks+thirdsubmarks
//     average(total)
//     percentage(total)
// }
// function average(){
//     aver=total/3
//     alert(aver+" average")
// }
// function percentage(){
//     percent=(total/300)*100
//     alert(percent+"%")
// }
// mainFunc()

// task5
// function findIndex(){
//     data=prompt("Enter String")
//     char=prompt("Enter Character to get index")
//     for(i=0;i<data.length;i++){
//         if(data[i] === char){
//             alert(i)
//         }
//     }
// }
// findIndex()

// task6
// function removevowel(){
//     str=prompt("Enter String to remove vowel")
//     str=str.toLowerCase();
//     alert(str.replace(/[aeiou]+/g, ''))
// }
// removevowel()

// task7

// function occurrences() {
//     var checkstr = "Pleases read this application and give me gratuity";
//     var occur = checkstr.match(/[aeiou]{2}/g);
//     alert( occur ? occur.length : 0);
//   }
// occurrences();
  




// task8
// var distance=+prompt("Enter distance in km")
// function meter(distance){
//     console.log(distance)
//     tometer=distance*1000
//     document.write(tometer+" "+"meter"+"<br>")
// }function feet(distance){
//     tofeet=distance*3281
//     document.write(tofeet+" "+"feet"+"<br>")
// }function inches(distance){
//     toinches=distance*39370
//     document.write(toinches+" "+"inches"+"<br>")
// }function centimeters(distance){
//     tocentimeters=distance*100000
//     document.write(tocentimeters+" "+"centimeters"+"<br>")
// }
// meter(distance)
// feet(distance)
// inches(distance)
// centimeters(distance)

// task9
// function calcovertime(){
//     totaltimeworked=+prompt("Enter working hours of employ ")
//     if(totaltimeworked>40){
//         overtime=totaltimeworked-40
//         price=overtime*12.00
//         alert("Employ overtime pay is "+ price)
//     }else(alert("You have to work more than 40 hours"))
// }
// calcovertime()

// task10
// function currencynotes(){
//     amount=+prompt("Enter your Amount")
//     notesofhundred= Math.floor(amount / 100);
// 	notesoffifty=Math.floor(((amount % 100)/ 50));
//     notesoften=Math.floor((((amount % 100)% 50) / 10));
//     document.write("You will have"+" "+notesofhundred+" "+"Hundred notes"+" "+notesoffifty+" "+"fifty notes"+" "+notesoften+" "+"ten notes")
// }
// currencynotes()




// Assignment # 43-48

// task1
// function openalert(){
//     alert("Hello World")
// }

// task2
// function display(){
//     alert("Thanks for purchasing a phone from us")
// }

// task3
// function del(id){
//     var data = document.getElementById(id).innerHTML=""
// }

// task4
// function image1(){
//     document.getElementById("changeimage").src="car2.jpg"
// }
// function image2(){
//     document.getElementById("changeimage").src="car1.jpg"
// }

// task5
// counter=document.getElementById("counter")
// count=0
// function increase(){
//     count++
//     counter.innerHTML=count
// }
// function decrease(){
//     count--
//     counter.innerHTML=count
// }



// Assignment # 49-52


// task1
// function sub() {
//     var formdata = document.getElementById("form");
//     var empty = "";
//     for (var i = 0; i < formdata.length ;i++) {
//       empty += formdata.elements[i].value + "<br>";
//     }
//     document.getElementById("display").innerHTML = empty;
//   }

// task2

// function displaymore() {
//     var moreText = document.getElementById("moretext");
//       moreText.style.display = "inline";
// }

// task3
// Unable to understand the question.









// Assignment # 53 - 57

// task1
// var modal = document.getElementById("displayModal");
// function imageid(id){
// var img = document.getElementById(id);
// var modimg = document.getElementById("image");
//   modal.style.display = "block";
//   modimg.src = img.src;
// }
// var span = document.getElementsByClassName("closebtn")[0];
// span.onclick = function() {
//   modal.style.display = "none";
// }

// task2
// var fsize=14
// function zoomin(){
//   fsize=fsize+10
//   if(fsize>4){document.getElementById("disable").disabled=false}
//   paragraph=document.getElementById("para")
//   paragraph.style.fontSize=fsize+'px'
// }
// function zoomout(){
//   fsize=fsize-10
//   if(fsize<=4){
//     document.getElementById("disable").disabled=true
//   }
//   paragraph=document.getElementById("para")
//   paragraph.style.fontSize=fsize+'px'
// }







// Assignment # 58-67JAVASCRIPT

// // task1

// // i)
// var content=document.getElementById("main-content")

// // ii)
// console.log(content.children)


// // iii)
// var p = content.getElementsByTagName("p");
// for(i=0;i<p.length;i++){
// document.write(p[i].innerHTML,"<br>");
// }

// // iv)
// var fname=document.getElementById("first-name").value="abc"

// // v)
// var lname=document.getElementById("last-name").value="def"
// var name=document.getElementById("email").value="abc@gmail.com"


// task2

// i)
// var firstname=document.getElementById("form-content").nodeType;
// document.write(firstname,"<br>")

// ii)
// var lastname=document.getElementById("lastName").nodeType
// var chname=document.getElementById("lastName").childNodes[0]
// console.log(lastname)
// console.log(chname.nodeType)

// iii)
// var childnode=document.getElementById("lastName").childNodes[0]
// childnode.nodeValue="Last Name: Updated value"
// console.log(childnode)

// iv)
// var firchild=document.getElementById("main-content").firstChild
// var laschild=document.getElementById("main-content").lastChild
// console.log(firchild,laschild)

// // v)
// var nextsib=document.getElementById("lastName").nextSibling
// var prevsib=document.getElementById("lastName").previousSibling
// console.log(nextsib,prevsib)

// // vi)
// var parnode=document.getElementById("email").parentNode
// var ntype=document.getElementById("email").nodeType
// console.log(parnode,ntype)



