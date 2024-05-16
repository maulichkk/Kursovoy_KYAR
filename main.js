const openPopUp = document.getElementById('open_pop_up');
const closePopUp = document.getElementById('pop_up_close');
const popUp = document.getElementById('pop_up')

openPopUp.addEventListener('click', function(e){
    e.preventDefault();
    popUp.classList.add('active');
    formContent.style.display = 'block'; 
    thankYouMessage.style.display = 'none'; 

})

closePopUp.addEventListener('click', () => {
    popUp.classList.remove('active');
    
    
})

const requestForm = document.getElementById('requestForm');
const formContent = document.getElementById('formContent');
const thankYouMessage = document.getElementById('thankYouMessage'); 

requestForm.addEventListener('submit', function(e) {
    e.preventDefault();
    formContent.style.display = 'none';
    thankYouMessage.style.display = 'block';
    setTimeout(function() {
        popUp.classList.remove('active');
    }, 3000);
});
