//speck-more
const elements = document.querySelectorAll('.spack-more');
Array.from(elements).forEach(function(el){
    const btn = el.querySelector('.more__btn');
    const svg = el.querySelector('#morereadArrow');

    const content = el.querySelector('.more__content');

    btn.addEventListener('click', function(){
        toggleContent(content, btn);
    });

    svg.addEventListener('click', function(){
        toggleContent(content, btn);
    });
});

function toggleContent(content, btn) {
    if (!content.classList.contains('open')) {
        content.style.maxHeight = content.scrollHeight + 'px';
        content.classList.add('open');
        btn.textContent = '閉じる';
    } else {
        content.style.maxHeight = '450px';
        content.classList.remove('open');
        btn.textContent = 'もっと見る';
    }
}
//speck-more

//usecase-more
if (window.matchMedia("(max-width: 1111px)").matches) {
    const elements02 = document.querySelectorAll('.usecase-more');
    Array.from(elements02).forEach(function(el){
        const btn02 = el.querySelector('.more__btn');
        const svg02 = el.querySelector('#morereadArrow-sp');
        const content02 = el.querySelector('.more__content_spOnly');
        btn02.addEventListener('click', function(){
            toggleContent(content02, btn02);
        });
        svg02.addEventListener('click', function(){
            toggleContent(content02, btn02);
        });
    });
    function toggleContent(content02, btn02) {
        if (!content02.classList.contains('open')) {
            content02.style.maxHeight = content02.scrollHeight + 'px';
            content02.classList.add('open');
            btn02.textContent = '閉じる';
        } else {
            content02.style.maxHeight = '450px';
            content02.classList.remove('open');
            btn02.textContent = 'もっと見る';
        }
    }
}
//usecase-more