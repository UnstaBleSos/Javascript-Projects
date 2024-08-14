const formvalue = document.querySelector('#form');
formvalue.addEventListener('submit',function(e){
    e.preventDefault();
    const alphabetUpper = document.querySelector('#alphabetUpper').checked
    const alphabetLower = document.querySelector('#alphabetLower').checked
    const digit = document.querySelector('#digit').checked
    const symbol = document. querySelector('#symbol').checked
    const limit = document.querySelector('#limit').value
    const text = document.querySelector('#text');

    if(!limit && limit === 0){
        alert("Enter password length ")
    }
    if(alphabetUpper){
                let res='' 
                const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
                let count= 0
                while(count<limit){
                    res += characters.charAt(Math.floor(Math.random() * characters.length))
                    count++;   
                }
                text.innerHTML+='Random Password: '+res;     
    }
    if(alphabetLower){
        let res='' 
        const characters = 'abcdefghijklmnopqrstuvwxyz'
        let count= 0
        while(count<limit){
            res += characters.charAt(Math.floor(Math.random() * characters.length))
            count++;   
        }
        text.innerHTML+='Random Password: '+res;     
}
    if(digit){
                let res='' 
                const characters = '0123456789'
                let count= 0
                while(count<limit){
                    res += characters.charAt(Math.floor(Math.random() * characters.length))
                    count++;   
                }
                text.innerHTML+=res;   
    }
    if(symbol){
        const symbols = '~!@#$%^&*()_+{}|?><:";/*-.,'
        let count= 0
        res=''
        while(count<limit){
            res += symbols.charAt(Math.floor(Math.random() * symbols.length))
            count++;  
        }
        text.innerHTML+=res;   
    }
});

   




