/* --------------------------------------------------------
Script for Form Validation

version: 1.0
last modified: 22.07.2019
author: Malek Gorchene
email: malek.gorchene@gmail.com
----------------------------------------------------------*/

// Validate function

let form = document.querySelector('#signUp');

let validate = (event)=>{

    // Prevent default refresh
    event.preventDefault();

    let inputs = Array.from(document.querySelectorAll('input,textarea'));
    let emptyInput = false;
    let minPassLength = false;
    let patternPassword = true;
    let patternEmail = true;

    inputs.map((elem)=>{

        // Validate inputs values
        if(elem.value === ""){
            emptyInput = true; 
        }

        // Valid Password
        if(elem.id === 'password'){
            minPassLength = elem.value.length < 8;
            if(!minPassLength){
                let re = /[A-Z]/;
                patternPassword = re.test(elem.value);
            }
        }

        // Valid Email
        if(elem.id === 'email'){
            let re = /[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}/igm;
            patternEmail = re.test(elem.value);   
        }

    });


    // Test outputs of verif
    if(emptyInput){
        alert("An input has no value");
        return;
    }
        
    if(minPassLength){
        alert("Password must have 8 characteres at least");
        return;
    }
        
    if(!patternPassword){
        alert("Password must have one upper char at least");
        return;
    }
        
    if(!patternEmail){
        alert("Wrong mail adresse");
        return;
    }
        
    

};

form.addEventListener('submit',validate);

