const contactButton = document.getElementById('contact--form-button');
	
const exitButton = document.getElementById('contact--form-exit');
	
const contactForm = document.getElementById('contact-form');
	
contactButton.addEventListener('click', () => {

	contactForm.style.display = 'grid';

});
	
exitButton.addEventListener('click', () => {

	contactForm.style.display = 'none';

});

const contactSection = document.getElementById('con')