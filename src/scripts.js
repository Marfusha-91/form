import './style.scss';

document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('form');
    form.addEventListener('submit', formSend);

    async function formSend(e) {
        let formData = new FormData(form);
        e.preventDefault();

        let responce = await fetch('https://httpbin.org/post', {
            method: 'POST',
            body: formData
        })
        if (responce.ok) {
            alert("номер отправлен");
            //  formPreview.innerHTML = '';
            form.reset()
        } else {
            alert('ошибка')
        }
    }


})
document.querySelector('body').style.backgroundImage = 'url(' + "../src/assets/images.jpg" + ')';
