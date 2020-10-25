const burgerMenu = document.getElementById('burgerMenu');
const menu = document.getElementById('menu');
const closeMenu = document.getElementById('closeMenu');
const leftButton = document.getElementById('homeSlider__left');
const rightButton = document.getElementById('homeSlider__right');
const slider = document.querySelector('.homeSlider');

burgerMenu.addEventListener('click', () => {
  menu.classList.add('menu-is-active');

})

closeMenu.addEventListener('click', () => {
  menu.classList.remove('menu-is-active')
})

rightButton.addEventListener('click', () => {
  movD();
})

leftButton.addEventListener('click', () => {
  movI();
})

let margin=0
const movD = () => {
  window.clearInterval(intervalo)
  autoPlaySlider()
  if(margin<400){
    margin+=100;
    slider.animate({
      marginLeft: `-${margin}%`
    },
    {
      duration: 700,
      fill: "forwards",
      easing: 'ease-in',
    })
    
    // slider.style.marginLeft=`-${margin}%`;
  }else{
    margin=0;
    slider.animate({
      marginLeft: `-${margin}%`
    },
    {
      duration: 0,
      fill: "forwards"
    })
    // slider.style.marginLeft=`${margin}%`;
  }
}

const movI = () => {
  window.clearInterval(intervalo)
  autoPlaySlider()
  if(margin>0){
    margin-=100;
    slider.animate({
      marginLeft: `-${margin}%`
    },
    {
      duration: 700,
      fill: 'forwards',
      easing: 'ease-in',
    })
    // slider.style.marginLeft=`-${margin}%`;
  }else{
    margin=400
    slider.animate({
      marginLeft: `-${margin}%`
    },
    {
      duration: 0,
      fill: "forwards"
    })
    // slider.style.marginLeft=`-${margin}%`;
  }
}
let intervalo
const autoPlaySlider = () => {
  intervalo = setInterval( () => { movD() } , 4500 )
}

autoPlaySlider()