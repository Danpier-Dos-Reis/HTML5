var counter = 1;
/*La función setInterval repetirá esta acción cada 5 segundos, incrementando counter y
seleccionando diferentes botones de radio. Una vez que counter sea mayor a 4, se reiniciará
en 1 para que la selección comience de nuevo desde el primer botón de radio.*/
setInterval(function(){
  /*En este caso, se está construyendo un string dinámico utilizando 'radio' + counter. Por ejemplo, si counter vale 1, entonces
  el string resultante será "radio1". Luego, la función getElementById buscará un elemento HTML con el id "radio1".*/
  document.getElementById('radio' + counter).checked = true;
  counter++;
  if(counter > 4){
    counter = 1;
  }
}, 5000);