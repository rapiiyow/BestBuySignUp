// This function will get the fields on the page and set the value
function FillUp(element, val){
    if(document.getElementById(element) && val != ''){
        document.getElementById(element).value = val;
    }
}

//Set value for First Name
FillUp('firstName','Juan');

//Set value for Last Name
FillUp('lastName','Dela Cruz');

//Set value for Email
FillUp('email','JuanDelaCruz@gmail.com');

//Set value for Password
FillUp('password','Samplepassword');