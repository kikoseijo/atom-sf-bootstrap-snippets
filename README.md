

## Instalación por GUI

Puedes hacerlo a través del interface GUI (`Preferencias > Instalar`) y busca el paquete 'bootstrap-3-snippets-for-atom'


## Instalación por consola de comandos

Para que funcionen los snippets de Laravel hay que instalar el [language-blade](https://atom.io/packages/language-blade) paquete antes de instalar este repositorio.  a por la consola de comandos:

  `apm install language-blade`  
  `apm install bootstrap-3-snippets-for-atom`

Después tienes que reiniciar Atom para que los cambios surgan efecto.

## Emmet completion Shortcut

To be able to run this emmet completion shortcuts you need to have [Emmet Plugin](https://github.com/emmetio/emmet-atom) installed.

Input | Shortcut | Result
---|---|---
**Bootstrap table** | `emm:table` | table.table.table-striped.table-bordered>(thead>tr>th*6)+(tbody>tr>td*6)



### Fromulario + Formulario con Modelo

|      Input       |      Shortcut     |
|------------------|-------------------|
| **Form**         | `boo:form`        |
| **Form model**   | `boo:formmodel`   |



### Campos de formulario - | V | H |

| Input Vertical  |      Shortcut     | Input Horizontal|      Shortcut     |
|-----------------|-------------------|-----------------|-------------------|
| **Button**      | `boo:button`      |                 |                   |
| **Checkbox**    | `boo:checkbox`    | **Checkbox**    | `boo:checkboxh`   |
| **Date**        | `boo:date`        | **Date**        | `boo:dateh`       |
| **Email**       | `boo:email`       | **Email**       | `boo:emailh`      |
| **File**        | `boo:file`        | **File**        | `boo:fileh`       |
| **Hidden**      | `boo:hidden`      |                 |                   |
| **Number**      | `boo:number`      | **Number**      | `boo:numberh`     |
| **Password**    | `boo:password`    | **Password**    | `boo:passwordh`   |
| **Radio**       | `boo:radio`       | **Radio**       | `boo:radioh`      |
| **Select**      | `boo:select`      |                 |                   |
| **SelectMonth** | `boo:selectmonth` | **SelectMonth** | `boo:selectmonthh`|
| **SelectYear**  | `boo:selectyear`  | **SelectYear**  | `boo:selectyearh` |
| **SelectRange** | `boo:selectrange` | **SelectRange** | `boo:selectrangeh`|
| **Text**        | `boo:text`        | **Text**        | `boo:texth`       |
| **Textarea**    | `boo:textarea`    | **Textarea**    | `boo:textareah`   |



## Nota del autor

Los Snippets han sido recopilados de diversos plugins disponibles los cuales han sido modificados.

El fin de este repositorio es ir completandose de las funciones o los shortcodes que mas usamos en bootstrap para usar en el mejor editor conocido hasta la fecha.  

Estaré encantado de añadir vuestros snippets del que desee colaborar, ya sea a través del [repositorio Github](https://github.com/kikoseijo/atom-sf-bootstrap-snippets) o simplemente habriendo algún ito en la web de github.  


## Futuras mejoras:

- Mejorar los Snippets para laravel a medida que se usen.
- Crear formularios comunes basicos completos en uno solo snippet.
- Añadir mejoras en los snippets permitiendo mas dinamismo en las funciones.


# [By the Sunnyface.com Team.](https://www.sunnyface.com "Programador ios málaga Marbella")

![logo]






[logo]: https://sunnyface.com/images/logo.png "Desarrollo nativo para móviles y API REST"
