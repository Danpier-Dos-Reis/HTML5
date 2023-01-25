# HTML5 Knowledges
Initial Commit

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