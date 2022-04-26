src = "https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"
src = "https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"

const uploadInput = document.querySelector('#upload-input');
const previewImg = document.querySelector('.upload-image img');

uploadInput.addEventListener('change', e => {
    if (e.target.files.length > 0) {
        const url = URL.createObjectURL(e.target.files[0]);
        previewImg.src = url;
    }
})

$('#topheader .navbar-nav a').on('click', function () {
    $('#topheader .navbar-nav').find('li.active').removeClass('active');
    $(this).parent('li').addClass('active');
})