function gender(usergender){
    if (usergender=="female"){
        var pronouns="Ms. ";
    }else if (usergender=="male"){
        var pronouns="Mr. " ;
    }else {
      var pronouns="Mr/Ms" ;
    }
    return pronouns;
}

function age (userage){
    if (userage<=0){
        alert("your age incorrect")
    }
}

function message(welcomemsg,pro,name){
    if (welcomemsg==false){
        if (pro=="Ms. "||pro=="Mr. " ){
            alert ("Welcome, " + pro + name+"!");   
        }else {
        alert ("Welcome, " + name+"!"); 
        }
    }
}

function emptyOrNot(empty){
    if (empty===""){
        var element="invalid"
    } else{
        var element=empty;
    }
    return element;
}

function answers(array){
    for (let i=0;i<array.length+1;i++){
        console.log(array[i]);
    }
}


var userName = prompt("Enter your Name please? ");
var index0=emptyOrNot(userName);
var userGender = prompt("Your gender: male/female?!");
var index1=emptyOrNot(userGender);
var userAge = prompt("Enter your Age please? ");
age (userAge);
var index2=emptyOrNot(userAge);
var welcomeMessage = confirm("Do you want to skip the welcoming message");
var pron=gender(userGender)
message(welcomeMessage,pron,userName);
var doTasks= prompt("Did you do your last tasks?! Yes/No ");
var index3=emptyOrNot(doTasks);
var Useful= prompt("do you find 'toDO' useful?! Yes/No ");
var index4=emptyOrNot(Useful);
var Evaluate= prompt("Do you want to evaluate our'toDo' ?! Yes/No");
var index5=emptyOrNot(Evaluate);
arr=[index0,index1,index2,index3,index4,index5];
answers(arr);

