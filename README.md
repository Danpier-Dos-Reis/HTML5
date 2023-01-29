# HTML5 Knowledges
Initial Commit **_Free Code Camp Projects_**

## Funciones

* _Math_.**floor()** : redondea el resultado de una operación aritmética al valor más bajo.
    * Ejemplo: Math.floor(1.9) = 1
* _Math_.**random()** = genera un número aleatorio entre 0 (inclusive) y 1 (exclusivo). Al multiplicarlo por el tamaño del array quotes.length se está asegurando que el número generado aleatoriamente sea menor al tamaño del array, y asi poder utilizarlo como un indice del array.
    * Más : si queremos generar un número aleatorio entre el 1 y el 5, de manera inclusiva, podríamos utilizar el método **_Math.floor(Math.random() * 5) + 1_**, lo cual nos daría un número aleatorio entre y 5, ambos incluidos. Si queremos generar un número aleatorio entre el 1 y el 5 de manera exclusiva, podríamos utilizar el método **_Math.floor(Math.random() * 4) + 1_**, lo cual nos daría un número aleatorio entre 1 y 4, el 5 no estaría incluido en el rango.
* _element_._classList_.**toggle()** : permite agregar o quitar una clase de un elemento HTML. Si la clase ya está asignada al elemento, se quitará, y si no está asignada, se agregará.
## Css
* _position_ : **fixed ;** = La propiedad _"position: fixed"_ en CSS establece que un elemento estará posicionado en relación a la ventana del navegador y no a su contenedor padre. Esto significa que aunque el usuario haga scroll en la página, el elemento con "position: fixed" seguirá en la misma posición en la pantalla.
* **vh** y **wh** : vh representa la altura de la página y wh representa el ancho de la página.
    * Ejemplo : "_height: 100vh;_" significa que el elemento tendrá una altura del 100% de la altura de la ventana del navegador.
* **Francciones CSS Grid** : si tengo un contenedor con un ancho de _100px_ y colocamos la propiedad **"grid-template-columns: _1fr 1fr_;"** esto es igual a 100px/2 por lo que se crearían dos columnas de _50px_ en el contenedor.
* Position : specifies the type of positioning method used for an element (static, relative, absolute, fixed, or sticky).
    * **sticky** : The element is positioned based on the user's scroll position.
    * **static** : Default value. Elements render in order, as they appear in the document flow
    * **absolute** : The element is positioned relative to its first positioned (not static) ancestor element.
    * **fixed** : The element is positioned relative to the browser window.
    * **relative** : The element is positioned relative to its normal position, so "left:20px" adds 20 pixels to the element's LEFT position
    * **initial** : Sets this property to its default value.
    * **inherit** : Inherits this property from its parent element