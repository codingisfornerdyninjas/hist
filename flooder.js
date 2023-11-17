  function rand(numb) {
for(let i = 0; i < numb; i++){
  x = window.open("https://codingisfornerdyninjas.github.io/hist/?q= "+ Math.floor(Math.random() * 500000))
  setTimeout(function(){x.close()} , 10)
}

} 
