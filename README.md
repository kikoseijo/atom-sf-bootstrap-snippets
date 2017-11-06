# Atom snippets for developpers

This plugins aims to save development time by adding some clever shortcuts to your atom text editor.
By using this library you will be faster, close to speed light.


## Installation

### GUI

Puedes hacerlo a través del interface GUI (`Preferencias > Instalar`) y busca el paquete 'bootstrap-3-snippets-for-atom'

### Command line

Como ciertos comandos necesitan otros plugins de atom lo mejor es cargar primeros las dependencias:

***Install dependencies first:***

  `apm install emmet`
  `apm install language-blade`

***Then install this plugin:***

  `apm install bootstrap-3-snippets-for-atom`

***Reopen atom window if was open!***

Después tienes que reiniciar Atom para que los cambios surgan efecto.

##### Emmet example of completion

To be able to run this emmet completion shortcuts you need to have [Emmet Plugin](https://github.com/emmetio/emmet-atom) installed.

Input | Shortcut | Result
------|----------|-----------
**Bootstrap table** | `emm:table` | table.table.table-striped.table-bordered>(thead>tr>th*6)+(tbody>tr>td*6)

## Snippets categories

Here are some of the libraries used, and the shortcodes to bring them all in your screen.


| Input                | Shortcut
|----------------------|------------------------------------
| **Collective**       | `boo:form`
| **Emmet**            | `emm:table`
| **PHP**              | `php:interface`
| **Laravel**          | `lara:layout`
| **Bulma**            | `bulma:hero`
| **{N}**              | `tns:dragab`
| **CSS**              | `css:media-calls`
| **React-Native**     | `rn:class-component`
| **NativeBase**       | `rnb:container`
| **ES6**              | `import-axios`
| **Typescript**       | `ts:model-class`


---
## Credits:

>  [Sunnyface.com](https://sunnyface.com "Programador ios málaga Marbella") Web development

> [GestorApp.com](https://gestorapp.com "Gestor de aplicaciones moviles en málaga, mijas, marbella") Mobile aplications

> [SosVecinos.com](https://sosvecinos.com "Plataforma móvil para la gestion de comunidades") Residents mobile application

> [KikoSeijo.com](https://kikoseijo.com "Programador freelance movil y Laravel") Freelance senior programmer

---
## Changelog




###### 16.nov.2017
- Updated readme.

###### 10.nov.2017
- Added React Native.
- Added React NativeBase.

###### 20.oct.2017
- Updated readme.

###### ...

###### 7.nov.2016
- Initial commit.


---


![logo]


[logo]: https://sunnyface.com/images/logo.png "Desarrollo nativo para móviles y API REST"
