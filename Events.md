# HTML5 Knowledges
Handling Events
## Event Propagation
**Event propagation** es el proceso mediante el cual un evento generado en un elemento de una página web se propaga a través de los diferentes elementos contenedores hasta llegar al elemento raíz (normalmente el DOCUMENT).

### Tipos de Propagación
* ascendente o **bubbling**
    * Es el comportamiento por defecto de los eventos en la mayoría de los navegadores donde **un evento generado en un elemento interno se propaga hacia elementos externos**. Por ejemplo: **_un botón que cambie el background-color del su contenedor_**
* descendente o **capturing**
    * Es un comportamiento menos común y se refiere a los casos donde un evento disparado por un elemento _padre_ o _externo_ afecta a un elemento _hijo_ o _interno_. Por ejemplo : **_al mouse estar sobre el contenedor se cambie el backgorund-color de algún botón dentro del contenedor_**

# Notas
1- Handling the proyect and solving how i can the object **HTMLElement** automaticlly tsc or vsCode they imported a library **_import { isThisTypeNode } from "typescript"_** and this generate errors in Brave-Browser

*  1.1 : Find errors in browser sources (specifically files ".js").
* 1.2 : If you can, delete imported library
* 1.3 : Try change the settings of  **tsconfig.json** 
    ```json
    {
    "compilerOptions": {
        "target": "es5",
        "module": "umd"
    }
    }
    ```
* 2 : To indicate "rootDir (_directory where are my **files.ts**_)" "outFile ( **_mycompiledfile.js_** )" we need to change some settings in **_tsconfig.json_**
    ```json
    {
    "compilerOptions": {
        "module" : "system", //or amd
        "rootDir" : "./myDir", //note : We can select a specific file example = **/myDir/main.ts**
        "outFile" : "./main.js" //tsc goint to compile in the root directory of the Project
    }
    }
    ```
* 3 : event.**target** and event.**currentTarget**
    * **currentTarget** : se refiere al elemento que disparón el evento.
    * **target** : se refiere a cualquier elemento dentro del _**elemento disparador**_ que se vea involucrado en el evento.