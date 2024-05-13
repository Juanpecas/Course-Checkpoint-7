# Course Checkpoint 7


## ¿Qué diferencia a Javascript de cualquier otro lenguaje de programación?

1. **Lenguaje de script del lado del cliente:** JavaScript se ejecuta en el navegador web del usuario, lo que lo convierte en un lenguaje de script del lado del cliente. Esto significa que puede manipular el contenido de una página web en tiempo real, responder a eventos del usuario y mejorar la experiencia del usuario sin necesidad de comunicarse constantemente con el servidor.

2. **Interacción con HTML y CSS:** JavaScript puede interactuar directamente con el HTML y el CSS de una página web, lo que le permite modificar el contenido, el estilo y el comportamiento de la página dinámicamente. Esto lo convierte en una herramienta poderosa para la creación de aplicaciones web interactivas.

3. **Asincronía y llamadas AJAX:** JavaScript es asincrónico por naturaleza, lo que significa que puede realizar operaciones en segundo plano sin bloquear la ejecución del código. Esto es especialmente útil para realizar llamadas AJAX, que permiten a las aplicaciones web enviar y recibir datos del servidor sin necesidad de recargar la página.

4. **Lenguaje interpretado y de tipado dinámico:** JavaScript es un lenguaje interpretado, lo que significa que el código se ejecuta directamente por el navegador o por un entorno de ejecución como Node.js en el servidor, sin necesidad de compilarlo previamente. Además, JavaScript es de tipado dinámico, lo que significa que las variables pueden contener diferentes tipos de datos en diferentes momentos durante la ejecución del programa.

5. **Amplia adopción y comunidad activa:** JavaScript es uno de los lenguajes de programación más populares y ampliamente utilizados en el mundo, lo que ha llevado a una comunidad activa de desarrolladores que contribuyen con bibliotecas, frameworks y recursos educativos. Esta comunidad activa y la amplia adopción hacen que JavaScript sea una opción atractiva para desarrolladores de todo el mundo.

    En resumen, JavaScript se destaca por su capacidad para crear aplicaciones web interactivas, su integración directa con HTML y CSS, su naturaleza asincrónica, su tipado dinámico y su amplia adopción y comunidad activa. Estas características únicas hacen que JavaScript sea un lenguaje poderoso y versátil para el desarrollo web.

### ¿Para qué se usa JavaScript?

JavaScript se usa en una variedad de contextos y aplicaciones en el desarrollo web y más allá. Aquí hay algunos casos comunes de uso de JavaScript:

1. **Desarrollo web**: JavaScript es fundamental en el desarrollo web para crear páginas web dinámicas e interactivas. Se utiliza para agregar interactividad a elementos HTML, manipular el DOM (Document Object Model), realizar solicitudes HTTP asíncronas (AJAX) para actualizar contenido de forma dinámica, validar formularios, crear efectos visuales y animaciones, y mucho más.

2. **Front-end**: En el desarrollo front-end, JavaScript es esencial para crear la lógica y la interactividad de las aplicaciones web en el navegador del usuario. Frameworks como React, Angular y Vue.js se basan en JavaScript para crear interfaces de usuario modernas y potentes.

3. **Back-end**: Con el advenimiento de Node.js, JavaScript también se utiliza en el desarrollo back-end. Node.js permite ejecutar JavaScript en el servidor, lo que permite a los desarrolladores crear aplicaciones web completas utilizando JavaScript tanto en el front-end como en el back-end. Esto proporciona coherencia y simplicidad en todo el desarrollo de la aplicación.

4. **Desarrollo de aplicaciones móviles**: JavaScript se utiliza en el desarrollo de aplicaciones móviles a través de tecnologías como React Native y Ionic, que permiten a los desarrolladores crear aplicaciones móviles multiplataforma utilizando JavaScript, junto con HTML y CSS.

5. **Juegos y aplicaciones de escritorio**: Con la ayuda de bibliotecas y frameworks como Phaser.js y Electron, JavaScript se utiliza en el desarrollo de juegos y aplicaciones de escritorio. Estas tecnologías permiten a los desarrolladores crear juegos y aplicaciones de escritorio utilizando tecnologías web estándar como HTML, CSS y JavaScript.

    **Ejemplos**

    * Este ejemplo muestra un mensaje de saludo en la consola del navegador.
        ```js
        console.log("¡Hola, mundo!");
        ```

    *  Este suma dos números y muestra el resultado en la consola.
        ```js
        var num1 = 5;
        var num2 = 10;
        var resultado = num1 + num2;
        console.log("El resultado de la suma es: " + resultado);
        ```
    * Este ejemplo muestra un mensaje emergente en el navegador cuando se carga la página.
        ```js
        window.onload = function() {
            alert("¡Bienvenido a mi página!");
            };  
        ```

## ¿Cuáles son algunos tipos de datos JS?



En JavaScript, los tipos de datos son como las diferentes formas en que se pueden representar las cosas en el mundo digital. Son como las piezas de Lego que puedes usar para construir diferentes cosas en tu programa.

1. **Numbers**: Los números son datos que representan valores numéricos, como 1, 2, 3, 10, -5, 3.14, etc. Puedes usar números para contar cosas, calcular matemáticas y mucho más.
   
   Ejemplo:
   ```js
   let edad = 25;
   let precio = 9.99;
   ```
2. **Strings**: Las cadenas de texto son secuencias de caracteres, como letras, números y símbolos. Puedes usar cadenas de texto para representar palabras, oraciones, direcciones de correo electrónico, mensajes de texto y mucho más.

    Ejemplo:
    ```js
    let nombre = "Juan";
    let mensaje = "¡Hola, mundo!";
    ```
3. **Booleans**: Los booleanos son datos que representan solo dos valores: verdadero (true) o falso (false). Puedes usar booleanos para representar el estado de algo, como si una puerta está abierta o cerrada, si un usuario está conectado o desconectado, etc.

    **Ejemplo**:
    ```js
    let estaLloviendo = true;
    let esDia = false;
    ```
4. **Arrays** :   Los Arrays son colecciones ordenadas de datos. Puedes usar arreglos para almacenar una lista de cosas relacionadas, como nombres de personas, números de teléfono, puntuaciones de juegos, etc.

    **Ejemplo**:
    ```js
    let numeros = [1, 2, 3, 4, 5];
    let colores = ["rojo", "verde", "azul"];
    ```
5. **Objects** : Los objetos son como contenedores que pueden almacenar muchos tipos diferentes de datos. Puedes usar objetos para representar cosas más complejas, como personas, coches, cuentas bancarias, etc. Un objeto está formado por pares clave-valor, donde cada clave es un nombre único que identifica un valor específico.

    **Ejemplo**:
    ```js
    let persona = {
    nombre: "María",
    edad: 30,
    ciudad: "Madrid"
    };
    ```



## ¿Cuáles son las tres funciones de String en JS?


1. **length** : Esta función te permite saber cuántos caracteres hay en una cadena de texto. Es como si pudieras preguntarle a JavaScript: "¿Cuántas letras hay en esta palabra?".Por ejemplo, si tienes la palabra "Hola", la función length te dirá que tiene 4 caracteres.
javascript

    ```js
    let mensaje = "Hola";
    let longitud = mensaje.length;
    // La variable 'longitud' ahora tendrá el valor 4
    ```
2. **toUpperCase()** : Esta función convierte todas las letras de una cadena a mayúsculas. Es útil si necesitas que todo el texto esté en mayúsculas, independientemente de cómo se escribió originalmente.Por ejemplo, si tienes la cadena "hola", la función toUpperCase() la convertirá en "HOLA".

    ```js
    let texto = "hola";
    let textoMayusculas = texto.toUpperCase();
    // La variable 'textoMayusculas' ahora tendrá el valor "HOLA"
    ```
3. **toLowerCase()** : Esta función convierte todas las letras de una cadena a minúsculas. Es similar a toUpperCase(), pero en lugar de convertir a mayúsculas, convierte a minúsculas.Por ejemplo, si tienes la cadena "HOLA", la función toLowerCase() la convertirá en "hola".

    ```js
    let texto = "HOLA";
    let textoMinusculas = texto.toLowerCase();
    // La variable 'textoMinusculas' ahora tendrá el valor "hola"
    ```
       
## ¿Qué es un condicional?


Un condicional es una estructura de control en programación que te permite tomar decisiones basadas en ciertas condiciones. Es como tener un camino bifurcado en una carretera, donde puedes elegir qué dirección tomar dependiendo de ciertas circunstancias.

En términos más técnicos, un condicional evalúa una expresión booleana, que es una afirmación que es verdadera o falsa. Dependiendo del resultado de esa evaluación, el programa ejecutará un conjunto específico de instrucciones.

Por ejemplo, imagina un programa que necesita verificar si un usuario tiene más de 18 años antes de permitirle acceder a ciertas funciones. En este caso, podríamos usar un condicional para verificar si la edad del usuario es mayor o igual a 18. Si es así, el programa permitirá el acceso; de lo contrario, no lo permitirá.


En JavaScript, un condicional típico se escribe con la palabra clave if, seguida de la expresión a evaluar entre paréntesis y luego el bloque de código que se ejecutará si la expresión es verdadera. También puede haber otras palabras clave como else y else if para manejar diferentes escenarios.

1. **Ejemplo**: Verificar si un usuario es mayor de edad
    ```js
    let edad = 20;

    if (edad >= 18) {
        console.log("Eres mayor de edad, puedes acceder al contenido.");
    } else {
        console.log("Eres menor de edad, no puedes acceder al contenido.");
    }
    ```
    En este ejemplo, estamos verificando si la variable edad es mayor o igual a 18. Si es así, imprimimos "Eres mayor de edad, puedes acceder al contenido."; de lo contrario, imprimimos "Eres menor de edad, no puedes acceder al contenido.".


2. **Ejemplo** : Determinar si un número es par o impar
    ```js
    let numero = 15;

    if (numero % 2 === 0) {
        console.log("El número es par");
    } else {
        console.log("El número es impar");
    }
    ```
    En este ejemplo, estamos usando el operador de módulo % para verificar si el número es divisible entre 2 sin dejar un residuo. Si no hay residuo (es decir, el número es par), imprimimos "El número es par"; de lo contrario, imprimimos "El número es impar".

3. **Ejemplo** : Verificar si un número es positivo o negativo
    ```js
    let numero = -16;

    if (numero > 0) {
    console.log("El número es positivo");
    } else {
    console.log("El número es negativo");
    }
    ```
    En este ejemplo, estamos verificando si la variable numero es mayor que cero. Si es así, imprimimos "El número es positivo"; de lo contrario, imprimimos "El número es negativo".

### Beneficios de los Condicionales en Programación

1. **Toma de decisiones**: Los condicionales permiten que un programa tome decisiones basadas en ciertas condiciones. Esto es fundamental para crear programas dinámicos y adaptativos que respondan a diferentes situaciones.

2. **Control del flujo de ejecución**: Los condicionales controlan el flujo de ejecución de un programa al permitir que ciertas partes del código se ejecuten solo si se cumple una condición específica. Esto permite crear lógica ramificada en un programa.

3. **Personalización del comportamiento**: Los condicionales permiten personalizar el comportamiento de un programa según diferentes escenarios. Por ejemplo, un programa puede comportarse de una manera si una condición es verdadera y de otra manera si la condición es falsa.

4. **Manejo de errores y validación**: Los condicionales se utilizan para verificar y validar datos, lo que ayuda a prevenir errores y manejar casos inesperados de manera adecuada. Por ejemplo, un formulario web puede usar condicionales para verificar si se han completado todos los campos obligatorios antes de enviar los datos al servidor.

5. **Optimización del rendimiento**: En algunos casos, el uso de condicionales puede ayudar a optimizar el rendimiento de un programa al evitar la ejecución innecesaria de ciertas partes del código. Por ejemplo, un bucle puede incluir una condición de salida para evitar que continúe ejecutándose una vez que se cumpla cierta condición.



## ¿Qué es un operador ternario?

Un operador ternario es un tipo de operador que toma tres operandos y se utiliza para hacer una asignación condicional en una sola línea de código. Es una forma abreviada de escribir un condicional if...else.

La sintaxis general de un operador ternario en JavaScript es la siguiente:
```js
condition ? expressionIfTrue : expressionIfFalse;
```

Aquí, la condición es una expresión que se evalúa como verdadera o falsa. Si la condición es verdadera, se evalúa y devuelve la expresiónSiVerdadero. Si la condición es falsa, se evalúa y devuelve la expresiónSiFalso.

Por ejemplo, considera este código utilizando un operador ternario para asignar un mensaje basado en si un número es par o impar:
```js
let numero = 10;
let mensaje = (numero % 2 === 0) ? "El número es par" : "El número es impar";
console.log(mensaje); // Output: El número es par
```
En este ejemplo, la condición (numero % 2 === 0) verifica si numero es divisible por 2 sin dejar un residuo, lo que indica que es par. Si esta condición es verdadera, se asigna el mensaje "El número es par" a la variable mensaje utilizando el operador ternario. De lo contrario, si la condición es falsa (lo que significa que el número es impar), se asigna el mensaje "El número es impar".

El uso de operadores ternarios puede hacer que el código sea más conciso y fácil de leer, especialmente cuando necesitas realizar una asignación condicional simple en una sola línea.


### Beneficios de un Operador Ternario en JavaScript

1. **Sintaxis Concisa**: El operador ternario ofrece una sintaxis más concisa y compacta en comparación con una declaración if-else. Esto puede hacer que el código sea más fácil de leer y entender, especialmente para expresiones simples.

2. **Menos Código**: Al usar un operador ternario, se puede reducir la cantidad de código necesario en comparación con una declaración if-else equivalente. Esto puede conducir a un código más limpio y menos propenso a errores.

3. **Facilita Expresiones Inline**: El operador ternario es ideal para utilizar en expresiones inline, como en la asignación de valores a variables o en la renderización condicional de elementos en plantillas HTML. Esto permite una mayor legibilidad y claridad en el código.

4. **Eficiencia de Escritura**: Al utilizar un operador ternario, se puede escribir código de manera más eficiente y rápida, especialmente para casos simples donde una declaración if-else completa puede ser excesiva.

5. **Expresiones Booleanas Claras**: El uso de un operador ternario puede hacer que las expresiones booleanas en el código sean más claras y fáciles de entender, especialmente cuando se utilizan para asignar valores condicionalmente.


## ¿Cuál es la diferencia entre una declaración de función y una expresión de función?

La diferencia principal entre una declaración de función y una expresión de función radica en cómo se declaran y cómo se comportan en el código.

1. **Declaración de función:**
    * Se define utilizando la palabra clave function, seguida del nombre de la  función y sus parámetros entre paréntesis, seguido de un bloque de código entre llaves {} que contiene las instrucciones de la función.

    * Puede ser invocada (llamada) en cualquier parte del código, incluso antes de que se declare, debido al concepto de elevación (hoisting) en JavaScript.

    * El nombre de la función se convierte en una variable en el ámbito actual, lo que significa que puede ser sobrescrito, pero solo dentro del ámbito en el que se declara la función.

    ```js
    function sumar(a, b) {
    return a + b;
    }
    ```

2. **Expresión de función:**
    * Se asigna a una variable o se utiliza como parte de otra expresión, como una asignación, una llamada de función o un objeto.

    * No se puede invocar antes de que se defina en el código, debido a que no se eleva (hoist) al principio del ámbito como las declaraciones de función.

    * Puede ser anónima (sin nombre) o nombrada.

    ```js
    const sumar = function(a, b) {
    return a + b;
    };

    const sumar = (a, b) => a + b;

    ```
En resumen, las declaraciones de función se pueden llamar antes de su declaración debido a la elevación (hoisting), mientras que las expresiones de función no se pueden invocar antes de que aparezcan en el código. Además, las declaraciones de función crean una variable en el ámbito actual, mientras que las expresiones de función pueden asignarse a una variable o utilizarse como parte de otra expresión.




## ¿Qué es la palabra clave "this" en JavaScript?

La palabra clave "this" en JavaScript se refiere al objeto al que pertenece el contexto actual en el que se está ejecutando el código. La referencia "this" se comporta de manera dinámica y puede cambiar dependiendo de cómo se invoca una función o cómo se accede a un objeto.

Aquí hay algunas formas comunes en las que se puede usar la palabra clave "this" en JavaScript:

1. **En el contexto de una función regular**: Dentro de una función regular, "this" hace referencia al objeto global en el navegador (`window` en el navegador web) o al objeto global en Node.js (`global` en Node.js), a menos que la función esté en modo estricto (`"use strict"`), en cuyo caso "this" será `undefined` si no se asigna explícitamente.

2. **En el contexto de un método de objeto**: Cuando "this" se usa dentro de un método de un objeto, hace referencia al propio objeto en el que se invoca el método. Esto permite acceder y manipular las propiedades del objeto.

3. **En el contexto de una función de constructor**: Dentro de una función de constructor (creada con la palabra clave `"new"`), "this" hace referencia al nuevo objeto que se está creando y se inicializa con los valores proporcionados en la función de constructor.

4. **En el contexto de una función de flecha**: Dentro de una función de flecha, "this" hace referencia al "this" léxico, lo que significa que "this" se mantiene igual al valor de "this" en el ámbito donde se definió la función de flecha, no donde se llama.

Es importante entender cómo se comporta "this" en diferentes contextos para evitar confusiones y errores al escribir código en JavaScript.

### **Ejemplos**

* Uso de "this" en el contexto de una función
    ```js
    function saludar() {
      console.log("Hola, " + this.nombre);
    }

    var persona = {
      nombre: "Juan",
      saludar: saludar
    };

    persona.saludar(); // Salida: Hola, Juan
    ```

    En este ejemplo, la función saludar() se define fuera del objeto persona, pero luego se asigna como un método del objeto persona. Cuando se llama a persona.saludar(), la palabra clave "this" dentro de la función se refiere al objeto persona, por lo que puede acceder a la propiedad nombre del objeto.

* Uso de "this" en el contexto de una función de constructor
    ```js
    function Persona(nombre) {
        this.nombre = nombre;
        this.saludar = function() {
            console.log("Hola, soy " + this.nombre);
        };
    }

    var juan = new Persona("Juan");
    juan.saludar(); // Salida: Hola, soy Juan

    ```

    En este ejemplo, la función Persona se utiliza como un constructor para crear objetos Persona. Dentro del constructor, la palabra clave "this" se refiere al objeto que se está creando actualmente. Por lo tanto, cuando se llama al método saludar() en el objeto juan, "this" dentro de la función se refiere al objeto juan.

* Uso de "this" en el contexto de una función de flecha
    ```js
    var persona = {
        nombre: "María",
        obtenerNombre: () => {
            console.log("Mi nombre es " + this.nombre);
        }
    };

    persona.obtenerNombre(); // Salida: Mi nombre es undefined
    ```

    En este ejemplo, la función obtenerNombre() se define como una función de flecha. Las funciones de flecha no tienen su propio "this", por lo que "this" dentro de la función se refiere al "this" del ámbito circundante en el momento en que se define la función. En este caso, como la función de flecha se define fuera de cualquier objeto, "this" se refiere al objeto global, donde "nombre" no está definido. Por lo tanto, la salida es "Mi nombre es undefined".













    



    


