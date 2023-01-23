# HTML5 Knowledges
# How to Image Slider
Hello World
## HTML
* **for** : El atributo "for" se usa en los elementos "label" para hacer referencia a un
  control/elemento asociado en el documento.
    * En este caso, cada etiqueta "label" está haciendo referencia a un input específico (radio1, radio2, etc) mediante
  su id, permitiendo que al hacer click en la etiqueta "label" se seleccione o deseleccione el input correspondiente.
```HTML
<!--radio buttons start-->
<input type="radio" name="radio-btn" id="radio1">
<input type="radio" name="radio-btn" id="radio2">
<input type="radio" name="radio-btn" id="radio3">
<input type="radio" name="radio-btn" id="radio4">
<!--radio buttons end-->
<!--manual navigation start-->
<div class="navigation-manual">
  <label for="radio1" class="manual-btn"></label>
  <label for="radio2" class="manual-btn"></label>
  <label for="radio3" class="manual-btn"></label>
  <label for="radio4" class="manual-btn"></label>
</div>
<!--manual navigation end-->
```
## CSS
* **:not** _pseudo-selector_ : Aplica estilos a elementos que no posean ciertos atributos.
```HTML
<form>
 <!--Phone:--> <input type="tel" class="example">
 <!--E-mail:--> <input type="email" disabled="disabled">
 <!--Password:--> <input type="password">
</form>
```
```CSS
/*CSS*/
input:not([disabled]):not(.example){
/*Solo se aplican los estilos a Password porque no posee el atributo ni la clase ".example"*/
 background-color: #ccc;
}
```
* **~** : El selector "~" se conoce como el selector de hermano general. Se usa para seleccionar todos los elementos hermanos que siguen después de un elemento específico.
## JavaScript
* **setInterval** : es una función que ejecutará la acción que le indiquemos en el tiempo que le indiquemos