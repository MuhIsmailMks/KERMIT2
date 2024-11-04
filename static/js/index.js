 // copy address
const copyAddresses = document.querySelectorAll('.copy-box');

copyAddresses.forEach(copyAddress => {
    let text = copyAddress.querySelector('.copy-box__text');
    let btnText = text.textContent;
    let timeout;

    copyAddress.addEventListener('click', () => {
        navigator.clipboard.writeText(text.textContent)
            .then(() => {
                text.textContent = 'Copied';

                clearTimeout(timeout);
                timeout = setTimeout(() => {
                    text.textContent = btnText;  
                }, 2000);
            })
            .catch(err => {
                console.error('Failed to copy text: ', err);
            });
    });
});


// menu-button
const menuButton = document.querySelector('.menu-button');
const menuContainer = document.querySelector('.navbar nav');
const navContainer = document.querySelector('.menuContainer');
const socialLinks = document.querySelectorAll('.socialLink');

menuButton.addEventListener('click', () => {
    menuButton.classList.toggle('active')
    navContainer.classList.toggle('active')
    menuContainer.classList.toggle('active')
})

socialLinks.forEach(socialLink => {
    socialLink.addEventListener('click', () => {
        menuButton.classList.remove('active')
        navContainer.classList.remove('active')
        menuContainer.classList.remove('active')
    })
})



// loading
// Dapatkan elemen bar
const bars = document.querySelectorAll('.bar');
const loadContainer = document.querySelector('.loadContainer')

// Fungsi untuk mengisi bar
function fillBar(index) {
  if (index < bars.length) {
    bars[index].style.backgroundColor = '#fff';
    bars[index].style.opacity = 1; 
    setTimeout(() => fillBar(index + 1), 500); 
  }
}

// Panggil fungsi saat halaman selesai loading
window.addEventListener('load', () => {
  fillBar(0);  
  AOS.init({
    once: true
    });
  loadContainer.classList.add('hidden')
});
