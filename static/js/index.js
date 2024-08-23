// menu 
const menu_btn = document.querySelector('.menu_btn');
const links = document.querySelector('.links');

menu_btn.addEventListener('click', () => {
    menu_btn.classList.toggle('active')
    links.classList.toggle('active')
})
 
 // copy address
    const copy_address = document.querySelector(".copy_address");
    const copybtn = document.querySelector(".contractCopy");
    
     copybtn.addEventListener("click", function() { 
        let textSpan = copybtn.querySelector('span');
        let intervalId;
            let addressText = document.querySelector(".value").getAttribute('value');
            textSpan.innerHTML = 'COPY';

            if (intervalId) {  
                clearInterval(intervalId);
            }

            intervalId = setInterval(() => {
                textSpan.innerHTML = '0x4334ef6f3600280A0935964799025BbaE86b4f33'; 
                // textSpan.innerHTML = ''; 
                clearInterval(intervalId);  
            }, 1000);

            navigator.clipboard.writeText(addressText);
        }); 
        
        copy_address.addEventListener("click", function() {   
        let message = copy_address.querySelector('.message');
        let intervalId;
            let addressText = `0x4334ef6f3600280A0935964799025BbaE86b4f33`
            message.classList.add('active')
            if (intervalId) {  
                clearInterval(intervalId);
            }

            intervalId = setInterval(() => {
                message.classList.remove('active')
                clearInterval(intervalId);  
            }, 1000);

            navigator.clipboard.writeText(addressText);
        }); 

