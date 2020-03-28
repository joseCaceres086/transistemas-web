// La siguiente función agrega o quita la clase 'hamburger-menu-active' al elemento body. En el HTML, se llama mediante el atributo 'onclick' del botón de la hamburguesa.

function toggleHamburgerMenu(){
	var htmlBody = document.body; // Declaro una variable de nombre htmlBody, que referencia al elemento body del documento HTML.
	htmlBody.classList.toggle('hamburger-menu-active'); // Agrego/quito la clase 'hamburger-menu-active' al elemento body.
}