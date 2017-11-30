# Atom snippets for web artisans

This plugins aims to save development time by adding some clever shortcuts to your atom text editor.
By using this library you will be faster, close to speed light.


## Installation

#### GUI

Open atom and go to settings (***&#8984;,***) and click on install package and search for `bootstrap-3-snippets-for-atom`, install the plugin and restart atom (***&#x2303;&#x2325;&#x2318;L***)

#### Command line

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
This are just some examples, there are many more commands you can use, list will show when you start typing.


| Input                | Shortcut
|----------------------|------------------------------------
| **Collective**       | `form:input`
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

## what you get

Here are some sample commands, list grows over time.

![PHP](/res/php.png?raw=true "PHP")

![bootstrap3](/res/bootstrap3.png?raw=true "bootstrap3")

![Bulma](/res/bulma.png?raw=true "Bulma")

![ES6](/res/es6.png?raw=true "ES6")

![Laravel](/res/laravel.png?raw=true "Laravel")

![react-native](/res/react-native.png?raw=true "React-Native")

![NativeBase](/res/react.png?raw=true "NativeBase")


### Changelog

***2.9***

- Added VueJs API Options.

***2.8***

- Added [Vue Element](http://element.eleme.io).
- Vue - async component template.
- Vue- Basic Template.
- Import VueJS for ES6
- Added React [NativeBase](https://nativebase.io) snippets
- React-native JSX Styles
- CSS flexbox definitions
- Added [Axios](https://github.com/axios/axios)

***2.7***

- ES6 snippets.

***2.6***

- NativeScript.
- React-native components.
- Laravel var_dump directive.
- Laravel blade translate directive.

***2.5***

- Enhanced Laravel layout template.
- NativeScripts templates.

***2.5***

- Apply some fix.

***2.4***

- Apply some fix.

***2.3***

- Enhanced Atom UI Style.
- Added Laravel repository template.

***2.2***

- Laravel service provider template.
- PHP Class definitions.
- Emmet simple columns.

***2.1***

- Added [Bulma.io](https://bulma.io) library snippets.

***2.0***

- Updated help and descriptions.
- git checkout -b "changelog" -a . -m "Initial commit including a changelog".




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

###### 05.dec.2016
- Initial commit.


---


![logo]


[logo]: https://sunnyface.com/images/logo.png
