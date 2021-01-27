var firstName="";
var lastName="";
var userName;
var date;
var currentDate;
var currentDay;
var greet;
var mailID=["Lorem@yahoo.com","JA@outlook.com","Ipsom@gmail.com","Dolar@web.com","dom@js.com","ajai@gmail.com","function@script.com","user@xyz.com","site@gmail.com","ty@hp.com"];
var displayDOM=document.querySelector('.second-section h2');

document.getElementsByClassName('first-name')[0].addEventListener('click',()=>{
    while(firstName==""){
        try{
            firstName=prompt("Enter Your First Name : ");
            if(firstName=="") throw "The Field is empty";
            if(!firstName.match(/^[A-Za-z]+$/)) throw "Only Alphabetical Letters are allowed";
        }catch(err){
            alert(err);
            firstName="";
        }
    }
});
document.getElementsByClassName('last-name')[0].addEventListener('click',()=>{
    while(lastName==""){
        try{
            lastName=prompt("Enter Your Last Name : ");
            if(lastName=="") throw "The Field is empty";
            if(!lastName.match(/^[A-Za-z]+$/)) throw "Only Alphabetical Letters are allowed";
        }catch(err){
            alert(err);
            lastName="";
        }
    }
});
document.getElementsByClassName('user-name')[0].addEventListener('click',()=>{
    userName=prompt("Enter Your User Name : ");
});
document.getElementsByClassName('greet')[0].addEventListener('click',()=>{
    date=new Date();
    currentDate=date.getHours();
    if(currentDate >= 0 && currentDate < 12){
        currentDay="Good Morning";
    }
    else if(currentDate >= 12 && currentDate < 15){
        currentDay="Good Afternoon";
    }
    else if(currentDate >= 15 && currentDate < 19){
        currentDay="Good Evening";
    }
    else if(currentDate >= 19 && currentDate < 24){
        currentDay="Good Night";
    }
    greet=currentDay + " " + firstName + " " + lastName;
    if(firstName==undefined || firstName=="" || lastName==undefined || lastName==""){
        alert("Enter the First Name and Last Name to done this Operation");
    }
    else{
        displayDOM.textContent=greet;
    }
});
document.getElementsByClassName('reverse')[0].addEventListener('click',()=>{
    if(firstName==undefined || firstName=="" || lastName==undefined || lastName==""){
        alert("Enter the First Name and Last Name to Reverse the Full Name");
    }
    else{
        var fullName=firstName + " " + lastName;
        var rev=fullName.split("").reverse().join("");
        displayDOM.textContent=rev;
    }
});
document.getElementsByClassName('length')[0].addEventListener('click',()=>{
    if(userName==undefined || userName==""){
        alert("Enter Username by Clicking the UserName Button to get it's length");
    }
    else{
        displayDOM.textContent='Hi ' + userName + " Your Name is " + userName.length + " in length";
    }
});
document.getElementsByClassName('capitalize')[0].addEventListener('click',()=>{
    if(firstName==undefined || firstName=="" || lastName==undefined || lastName==""){
        alert("Enter the First Name and Last Name to done this Operation");
    }
    else{
        var firstArr=firstName.charAt(0).toUpperCase()+firstName.slice(1);
        var lastArr =lastName.charAt(0).toUpperCase()+lastName.slice(1);           
        displayDOM.textContent=firstArr + " " + lastArr;                      
    }
});
document.getElementsByClassName('gmail-extract')[0].addEventListener('click',()=>{
    var mail="";
    mail+="Mail id's ends With '@gmail.com' are as follows : <br><center>";
    for(var i=0;i<mailID.length;i++){
        if(mailID[i].endsWith("@gmail.com")){
            mail+=mailID[i]+"<br>";
        }
    }
    mail+="</center>";
    displayDOM.innerHTML=mail;
});