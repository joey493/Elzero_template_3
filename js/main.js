// down-arrow btn 
const downArrowBtn = document.querySelector('.down-arrow')

downArrowBtn.addEventListener('click', () => {
    window.scrollTo(0, 500)
})

// articles 
const articles = document.querySelector('.articles .container')

const articlesImgs = [
    '../imgs/articles/cat-02.jpg',
    '../imgs/articles/cat-03.jpg',
    '../imgs/articles/cat-04.jpg',
    '../imgs/articles/cat-05.jpg',
    '../imgs/articles/cat-06.jpg',
    '../imgs/articles/cat-07.jpg',
    '../imgs/articles/cat-08.jpg',
]


const cloneArticle = (arr, parent) => {
    arr.forEach(ele => {
        // clone element
        const clonedNode = document.querySelector('.article').cloneNode(true)
        
        clonedNode.querySelector('img').setAttribute('src', ele)
        parent.appendChild(clonedNode)
    })
}

cloneArticle(articlesImgs, articles)

// testimonials
const testimonials = document.querySelector('.testimonials .container')
const testimonialsData = [
    {
        img: '../imgs/testimonials/avatar-02.png',
        name: 'Mohamed Ibrahim'
    },
    {
        img: '../imgs/testimonials/avatar-03.png',
        name: 'Shady Nabil'
    },
    {
        img: '../imgs/testimonials/avatar-04.png',
        name: 'Amr Hendawy'
    },
    {
        img: '../imgs/testimonials/avatar-05.png',
        name: 'Sherief Ashraf'
    },
    {
        img: '../imgs/testimonials/avatar-06.png',
        name: 'Osama Mohamed'
    },
]

const cloneTestimonial = (arr, parent) => {
    arr.forEach(({img, name}) => {
        // clone element
        const clonedNode = document.querySelector('.testimonial').cloneNode(true)
                
        clonedNode.querySelector('h3').innerText = name
        clonedNode.querySelector('img').setAttribute('src', img)
        parent.appendChild(clonedNode)
    })
}

cloneTestimonial(testimonialsData, testimonials)
