
const scriptURL = 'https://script.google.com/macros/s/AKfycbz1MJAm9SyNrvHQ0tUxazMHHtn12h_0S57I85VdjOpmlIAb-N2dZyYwabdTD7rc9zML/exec'
const form = document.forms['test']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => alert("Thanks for Contacting us..! We Will Contact You Soon..."))
    .catch(error => console.error('Error!', error.message))
})