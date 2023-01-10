/* Open and Close Contact Form */

const contactButton = document.getElementById('contact-cta');
	
const exitButton = document.getElementById('contact--form-exit');
	
const contactForm = document.getElementById('contact-form');
	
contactButton.addEventListener('click', () => {

	contactForm.style.display = 'grid';

});
	
exitButton.addEventListener('click', () => {

	contactForm.style.display = 'none';

});