# HTML5 DOM Basics Operations
Basic Operations in the Dom for get, remove, replace, create html elements and nodes.
___
## Get Elements
* **querySelector()** :  nos permite buscar de 3 formas, con _id_, _clase_ o _tagName_. Nos devuelve un solo elemento, el primero que contenga el valor que se le
pasó como input.
    * Los elementos se seleccionan como en CSS (**#idname** **.classname** **tagname**)
* **querySelectorAll()** : este método retorna una **NodeList** con todos los elementos que
tengan ese _selector_ (id , class o tagName)
    * Los elementos se seleccionan como en CSS (**#idname** **.classname** **tagname**)

* **getElementsByClassName('classname')** : obtiene un **array** con todos los elementos que
tengan esa clase.
    * _getElementByClassName()_ no existe, es decir que no podremos obtener solo 1 elemento con esa clase.
* **getElementsByTagName('tagname')** : optenemos un array con todos los elementos que tengan esa etiqueta.
* **getElementById(‘id’)** : nos permite obtener un elemento a través de su id.
### Parents 🧑‍🦱
* _any_element_.**parent** : obtenemos el elemento padre.
    * _any_element_.**parentElement**
* _any_element_.**parentNode** : nos da el nodo padre, si este es un elemento, entonces nos devuelve ese elemento html.
* _document_.**body** : obtenemos el cuerpo de nuestro documento (o sea el tag **body**).
* _document_.**documentElement** : obtenemos el documento (o sea el tag **html**).
    * _document_._body_.**parentElement** .

### Children 🧒
* _any_container_element_.**childElementCount** : obtenemos el número de **elementos** hijos. Solo los Hijos directos.
* _any_container_element_.**childNodes** : obtenemos una NodeList incluyendo los TextNodes.
* _any_container_element_.**children** : obtenemos un **array** de **elementos** (sin TextNodes).
* _any_container_element_.**firstChild** : the next Node (Include TextNodes).
* _any_container_element_.**lastChild** : the next Node (Include TextNodes).
* _any_container_element_.**firstElementChild** : the next html element (No TextNode).
* _any_container_element_.**lastElementChild** : the next html element (No TextNodes)).
### Siblings / Brothers 🙅‍♂️🙅‍♀️
* _any_element_.**nextSibling** : the next sibling Node (Include TextNodes).
* _any_element_.***lastSibling** : the next sibling Node (Include TextNodes).
* _any_element_.***nextElementSibling** : the next sibling Node (Include TextNodes).
* _any_element_.***lastElementSibling** : the next sibling Node (Include TextNodes).
___
## Create Elements 🛠️
* _document_.**createElement("h1")**
* _document_.**createTextNode("Hello World")**
## Add Attributes ➕👀
* _any_element_.**setAttribute("class","name_class")** : podemos añadir cualquier tipo de atributo de esta manera.
    * Example => **setAttribute("style","background-color: red;")**
* ➖ _any_element_.**removeAttribute("class","name_class")** : podemos eliminar cualquier tipo de atributo de esta manera.
* _any_element_.**classList**.**_add_**("_newClass_")
* ➖ _any_element_.**classList**.**_remove_**("_oldClass_")
* ♻️ _any_element_.**classList**.**_replace_**("_oldClass_","_newClass_").
## Add Content ➕📙
* _any_element_.**textContent** : textContent es una propiedad de los **elementos**.
* _any_element_.**innerText** : también es una propiedad pero es muy poco usado y tiene un hueco de seguridad.
___