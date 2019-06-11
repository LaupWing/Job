// setTimeout(()=>{
//     const child = document.querySelector('.startup')
//     document.body.removeChild(child)
// },7500)
let index = 0;
const allimg = Array.from(document.querySelectorAll('.image'))
setInterval(()=>{
    allimg.forEach(img=>img.classList.add('hide'))
    allimg[index].classList.remove('hide')
    index++
    if(index===allimg.length)   index=0
},6000)

const form = document.querySelector('form')
form.addEventListener('submit', goJim)
function goJim(){
    event.preventDefault()
    const val = form.inputVal.value
    const secret = 'jim'
    const el = document.querySelector('#haha')
    if(val.toLowerCase().trim() === secret) {
        el.classList.add('show')
        document.querySelector('audio').play()
    } 
}