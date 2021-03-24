let p = document.getElementsByTagName('p')
let h1 = document.getElementById('title')
let yes = document.getElementById('yes')
let no = document.getElementById('no')
yes.value = 'Có'
no.value = 'Không'
no.addEventListener('click', swap)
yes.addEventListener('click', heart)
function swap() {
    yes.id = 'no'
    no.id = 'yes'
    yes = document.getElementById('yes')
    no = document.getElementById('no')
    yes.value = 'Có'
    no.value = 'Không'
    console.log(no);
}
function heart() {
    for (let x of p) {
        x.className = 'animate__animated animate__fadeInUp'
    }
    h1.className='animate__animated animate__slideInDown'
    h1.innerHTML='❤️Meeeee tooooo❤️'
    yes.className = 'no-opacity'
    no.className = 'no-opacity'
}