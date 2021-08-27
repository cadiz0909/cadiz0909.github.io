# Curriculum vitae

Curriculum disponible en el sitio [web](https://cadiz0909.github.io/) y elaborado usando [react-resume-template](https://github.com/tbakerx/react-resume-template), una plantilla de react para el Curriculum.

#### Dependencias
Se requiere de node y npm

* [node](https://nodejs.org/en/download/package-manager/)
* npm `sudo apt-get install npm`


#### Instalación
Para instalar el repositorio.

    $ git clone https://github.com/Cadiz0909/cadiz0909.github.io.git
    $ cd cadiz0909.github.io/website
    $ npm install
    $ npm install react react-dom --save

#### Edición
Si se desean realizar cambios en la plantilla

    $ cd cadiz0909.github.io
    $ rm -rf ./css ./images ./js ./static *.json favicon.ico index.html *.js
    $ cd website
    $ npm start
  Se montará el proyecto en un servidor local. Editar los documentos en `public` o `src`.</br>
  Una vez terminados los cambios.

    $ npm run build
    $ cp -r build/* ../
    $ rm -rf build/

  Se generará el proyecto en un nuevo directorio `build`. Copiar el contenido de dicho directorio en el directorio `cadiz0909.github.io` para que Github tome el archivo index y lo monte en la pagina `.io`

  ### Icons
  The icons font used is [fontawesome](https://fontawesome.com/v4.7/icons/)