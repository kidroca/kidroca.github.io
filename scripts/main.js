document.addEventListener("DOMContentLoaded", function(event) {

    setTimeout(function() {
        var section = document.querySelector('.under-construction');

        section.classList.add('slideDown');

        section.addEventListener('click', function () {
            section.parentNode.removeChild(section);
        })
    }, 1500);
});
