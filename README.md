# Proyecto para reforzar TypeScript
# Practicando-TypeScript

Ejercicios de ejemplo para conocer un poco sobre TypeScript.
La idea es conocer algunos conceptos base de Typescript para ya después comenzar a aprender Angular.

* Lo primero que debemos de hacer después de descargar el código es ejecutar el comando:

```
npm install
```
Ese comando descargará todos los módulos de node necesarios para ejecutar el proyecto.


* Cuando termine de instalar los node_modules, entonces podermos ejecutar el proyecto de con el siguiente comando

```
npm run start
```
Para que eso funcione, recordar que se debe de ejecutar ese comando en el mismo directorio donde se encuentra el ```package.json```

## Cambiar el puerto
Por defecto, el puerto que configuré para este proyecto es el ```8081```, pero si necesitan cambiarlo porque pueda que ese puerto lo use su computadora, pueden cambiarlo abriendo el ```package.json``` >> scripts. Ahí verán la instrucción que lanza el servidor de desarrollo

```
"start": "webpack-dev-server --mode development --open --port=8081"
```

Simplemente se cambia el puerto por el que necesite y listo.