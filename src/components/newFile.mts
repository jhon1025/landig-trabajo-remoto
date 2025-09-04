import { form, submitButton } from "./Hero.astro.0.mts";

form.addEventListener('submit', async function (e) {
// 1. Prevenimos que la página se recargue
e.preventDefault();

// 2. Deshabilitamos el botón para evitar envíos múltiples
submitButton.disabled = true;
submitButton.textContent = 'ENVIANDO...';

// 3. Obtenemos los datos del formulario
const formData = new FormData(form);
const data = Object.fromEntries(formData.entries());

// 👇 ¡Pega tu URL de Google Apps Script aquí! 👇
const SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbygcGaRImwRgjUiR_IlAkQc0NDEmPEkO1eMilwC02PKncy5usCl4zARWTDVg_fU5CUI/exec';

try {
// 4. Enviamos los datos a nuestro script de Google
const response = await fetch(SCRIPT_URL, {
method: 'POST',
headers: {
'Content-Type': 'application/json',
},
body: JSON.stringify(data),
});

const result = await response.json();

// 5. Si Google nos dice que todo salió bien...
if (result.result === 'success') {
// ...redirigimos al usuario a la página de gracias.
window.location.href = '/gracias';
} else {
// Si el script reporta un error, lo mostramos.
throw new Error(result.error || 'Hubo un error en el servidor.');
}
} catch (error) {
// 6. Si hay un error de conexión o del script, avisamos al usuario.
console.error('Error al enviar el formulario:', error);
alert('Hubo un error al enviar tu registro. Por favor, inténtalo de nuevo.');

// Y volvemos a habilitar el botón
submitButton.disabled = false;
submitButton.textContent = 'ÚNETE AHORA';
}
});
