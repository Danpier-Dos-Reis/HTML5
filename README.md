# HTML5 Knowledges
Initial Commit **_Free Code Camp Projects_**

## Funciones

* _Math_.**floor()** : redondea el resultado de una operación aritmética al valor más bajo.
    * Ejemplo: Math.floor(1.9) = 1
* _Math_.**random()** = genera un número aleatorio entre 0 (inclusive) y 1 (exclusivo). Al multiplicarlo por el tamaño del array quotes.length se está asegurando que el número generado aleatoriamente sea menor al tamaño del array, y asi poder utilizarlo como un indice del array.
    * Más : si queremos generar un número aleatorio entre el 1 y el 5, de manera inclusiva, podríamos utilizar el método **_Math.floor(Math.random() * 5) + 1_**, lo cual nos daría un número aleatorio entre y 5, ambos incluidos. Si queremos generar un número aleatorio entre el 1 y el 5 de manera exclusiva, podríamos utilizar el método **_Math.floor(Math.random() * 4) + 1_**, lo cual nos daría un número aleatorio entre 1 y 4, el 5 no estaría incluido en el rango.
## Css
* _position_ : **fixed ;** = La propiedad _"position: fixed"_ en CSS establece que un elemento estará posicionado en relación a la ventana del navegador y no a su contenedor padre. Esto significa que aunque el usuario haga scroll en la página, el elemento con "position: fixed" seguirá en la misma posición en la pantalla.