const asist = document.getElementById('asist')
const checkAsistire = document.getElementById('asiste')
const checkNoAsistire = document.getElementById('noAsiste')
const nota = document.getElementById('nota')


const $form = document.querySelector('#form')

$form.addEventListener('submit', handleSubmit)

async function handleSubmit(event) {
    event.preventDefault()
    const form = new FormData(this)
    const response = await fetch(this.action, {
        method: this.method,
        body: form,
        headers: {
            'Accept': 'application/json'
        }
    })
    if (response.ok) {
        swal({
            title: "Gracias",
            text: "Te esperamos!",
            icon: "success",
            button: true,
        });
        this.reset()
    }
}



