const pageTurnBtn = document.querySelectorAll('.nextprev-btn');
pageTurnBtn.forEach((e1, index) => {
    e1.onclick = () => {
        const pageTurnId = e1.getAttribute('data-page');
        const pageTurn = document.getElementById(pageTurnId);
        if (pageTurn.classList.contains('turn')) {
            pageTurn.classList.remove('turn');
            setTimeout(() => {
                pageTurn.style.zIndex = 20 - index;
            }, 500);
        }
        else {
            pageTurn.classList.add('turn');
            setTimeout(() => {
                pageTurn.style.zIndex = 20 + index;
            }, 500);
        }
    }
})
// contact me btn when click
const pages = document.querySelectorAll('.book-page.page-right');
const contactMeBtn = document.querySelector('.btn.contact-me');
contactMeBtn.onclick = () => {
    pages.forEach((page, index) => {
        setTimeout(() => {
            page.classList.add('turn');
            setTimeout(() => {
                page.style.zIndex = 20 + index;
            }, 500)
        }, (index + 1) * 200 + 100)
    })
}
// =======create reverse index function
let totalPages = pages.length;
let pagesNumber = 0;

function reverseIndex() {
    pagesNumber--;
    if (pagesNumber < 0) {
        pagesNumber = totalPages - 1;
    }
}
// ======back profile btn when click
const backProfileBtn = document.querySelector('.back-profile');
backProfileBtn.onclick = () => {
    pages.forEach((_, index) => {
        setTimeout(() => {
            reverseIndex();
            pages[pagesNumber].classList.remove('turn');
            setTimeout(() => {
                reverseIndex();
                pages[pagesNumber].style.zIndex = 10 + index;
            }, 500)
        }, (index + 1) * 200 + 100)

    })
}
// ===opening Animation

const coverRight = document.querySelector('.cover.cover-right');
const pageLeft = document.querySelector('.book-page.page-left');
// ==opening Animation(cover right animation)
setTimeout(() => {
    coverRight.classList.add('turn');
}, 2100)
setTimeout(() => {
    coverRight.style.zIndex = -1;
}, 2800)
// ==opening Animation(page left or profile page animation)
setTimeout(() => {
    coverLeft.style.zIndex = 20;
}, 3200)
// opening Animation(all page right Animation)
pages.forEach((_, index) => {
    setTimeout(() => {
        reverseIndex();
        pages[pagesNumber].classList.remove('turn');
        setTimeout(() => {
            reverseIndex();
            pages[pagesNumber].style.zIndex = 10 + index;
        }, 500)
    }, (index + 1) * 200 + 2100)

})