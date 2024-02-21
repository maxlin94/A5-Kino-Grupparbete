class PassWordValidation {
    constructor(){

    }
    getPwStrengthText(){
         return document.querySelector('#pwPower');
    }
    getPwInput(){
    return document.querySelector('#createPasswordAcc');
    }

    pwPower(){
        const passwordInput = this.getPwInput().value;
        const passwordStrengthText = this.getPwStrengthText();

        if(passwordInput.length < 5){
            passwordStrengthText.innerText='svagt';
        
        }
        else if(passwordInput.length > 10){
            passwordStrengthText.innerText='starkt'
        }
        else {
            passwordStrengthText.innerText = 'Måttligt';
        }
        
    }

        validationInput(){
        const pwInput = this.getPwInput();
        pwInput.addEventListener('input',()=>{
            this.pwPower();
        });
    }
   
}

const validator = new PassWordValidation();
validator.validationInput();
