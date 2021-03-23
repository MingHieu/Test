let btn=document.getElementById('btn')
let p=document.getElementsByTagName('p')
let h1=document.getElementsByTagName('h1')
btn.addEventListener('click',heart)
function heart(){
    for(let x of p){
    x.className='opacity'
    }
    h1[0].className='opacity'
}

