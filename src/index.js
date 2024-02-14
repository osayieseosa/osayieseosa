const html = document.getElementById('html')
const themes = document.getElementById('themes')
const backToTopButton = document.getElementById('back_to_top')

window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', ({matches}) =>{
    if(matches){
        html.dataset.theme = 'dark'
        localStorage.setItem('theme','dark')
        themes.checked = false
    }else{
        localStorage.setItem('theme','light')
        html.dataset.theme = "light"
        themes.checked = true
    }
})

if(!localStorage.getItem('theme')){
    if(window.matchMedia('(prefers-color-scheme: dark)').matches){
    html.dataset.theme = 'dark'
    localStorage.setItem('theme','dark')
    themes.checked = false
    }else{
        localStorage.setItem('theme','light')
        html.dataset.theme = "light"
        themes.checked = true
    }
}else{
    if(localStorage.getItem('theme') === 'dark'){
        html.dataset.theme = localStorage.getItem('theme')
        themes.checked = false
    }else{
        html.dataset.theme = localStorage.getItem('theme')
        themes.checked = true
    }
}

themes.addEventListener('click',() => {
    if(themes.checked){
        html.dataset.theme = "light";
        localStorage.setItem('theme','light')
    }else{
        html.dataset.theme = "black";
        localStorage.setItem('theme','dark')
    }
})

const displayText = (id) => {
    document.getElementById(id).classList = 'block'
}
const hideText = (id) => {
    document.getElementById(id).classList = 'hidden'
}

window.onscroll = function(){scrollFUnction()} 

const scrollFUnction = () => {
    if (document.body.scrollTOp > 500 || document.documentElement.scrollTop > 500){
        backToTopButton.style.display ="flex"
    }else{
        backToTopButton.style.display = "none"
    }
}

const backToTop = () => {
    document.body.scrollTop = 0
    document.documentElement.scrollTop = 0
}

const submitMessage = (e) => {
    e.preventDefault()
    console.log('working')
    alert('submitted')
}