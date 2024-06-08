let age = window.prompt("What's your age?");
age = Number(age);
age+=1;

if(age >= 18 || age > 20){
    function myAge(){
        document.getElementById('demo').innerHTML = "You are overage: " + age;
    
    }
}

else{
    function myAge(){
        document.getElementById('demo').innerHTML = "You are underage: " + age;
    
    }
}

