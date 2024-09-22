// step - 1 set event handler 

document.getElementById('button-login').addEventListener('click',function(event){
    // stop refresh form   -->  event.preventDefault();
    // step 2 default behavior (prevent reloading browser)
    event.preventDefault();
    console.log("login button clicked");

    const phoneNumber = document.getElementById('phone-number').value
    console.log(phoneNumber);
    const pinNumber = document.getElementById('pin-number').value
    console.log(pinNumber);

    if(phoneNumber == '5' && pinNumber == '1234'){
        console.log("you are log in");
        window.location.href = '/home.html'
    }
    else{
        alert("wrong")
    }
})

