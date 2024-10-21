var navv=document.querySelector('.header');
window.onscroll =function(){
    if(window.scrollY >0){
        navv.style.background = '#eefff9';

    }
    else{
        navv.style.background = 'transparent';
    }
}