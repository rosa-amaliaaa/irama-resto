const fade = document.querySelectorAll('.fade');

window.addEventListener('scroll', () => {

  fade.forEach(item => {

    const top = item.getBoundingClientRect().top;

    if(top < window.innerHeight - 100){
      item.classList.add('show');
    }

  });

});