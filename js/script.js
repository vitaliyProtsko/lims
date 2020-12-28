const hamburger = document.querySelector('.hamburger');

hamburger.addEventListener('click', (event) => {
    event.target.closest('.hamburger').classList.toggle('hamburger-active');
    event.target.closest('.menu').querySelector('.menu-list').classList.toggle('menu-list-active');
});

$(document).ready(function () {

    function moveProgressBar(node, nodeLine, animationLength = 10000) {
        const progressElement = $(node);
        progressElement.each(function (value, item) {
            $(item).find(nodeLine).animate({
                width: item.dataset.progressPercent+'%'
            }, animationLength);
        });
    }

    moveProgressBar('.system-timer', '.system-timer-line');
})