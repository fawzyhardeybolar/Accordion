let first = document.querySelector('.first');
let second = document.querySelector('.second')
let last = document.querySelector('.last')
let lorem = document.querySelectorAll('.lorem');
// console.log([...lorem]);

first.addEventListener('click', () => {
    console.log(lorem[0].style.display);
    if (lorem[0].style.display == 'block') {
        lorem[0].style.display = 'none'
    } else {
        lorem[0].style.display = 'block'
        lorem[1].style.display = 'none'
        lorem[2].style.display = 'none'
    }
})

second.addEventListener('click', () => {
    if (lorem[1].style.display == 'block') {
        lorem[1].style.display = 'none'
    } else {
        lorem[1].style.display = 'block'
        lorem[0].style.display = 'none'
        lorem[2].style.display = 'none'
    }
    // if (lorem[1].style.display == 'none') {
    //     lorem[1].style.display = 'block'
    // } else if (lorem[1].style.display == 'block') {
    //     lorem[1].style.display = 'none'
    // } else if ( lorem[1].style.display == 'block') {
    //     lorem[0].style.display = 'none'
    //     lorem[2].style.display = 'none'
    // }
})

last.addEventListener('click', () => {
    if (lorem[2].style.display == 'block') {
        lorem[2].style.display = 'none'
    } else {
        lorem[2].style.display = 'block'
        lorem[0].style.display = 'none'
        lorem[1].style.display = 'none'
    }
    // if (lorem[2].style.display == 'none') {
    //     lorem[2].style.display = 'block'
    // } else if (lorem[2].style.display == 'block') {
    //     lorem[2].style.display = 'none'
    // } else if (lorem[2].style.display == 'block') {
    //     lorem[0].style.display = 'none'
    //     lorem[1].style.display = 'none'
    // }
})