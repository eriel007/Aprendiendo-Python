import '../../../assets/css/cursos/python/Variable.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import img1 from '../../../assets/images/variables/img1.png';
import img2 from '../../../assets/images/variables/img2.png';
import img3 from '../../../assets/images/variables/img3.png';
import img4 from '../../../assets/images/variables/img4.png';

function Variable() {
    return <>
    <div className="contenedor">
        <div className="titulo">
            <h2 className='display-6'>Variables en Python</h2>
        </div>
        <div className="contenedorHijo">
            <p className='lead'>Continuando con nuestro curso básico de Python, en esta entrega hablaremos 
                sobre las variables en Python. Las variables son esenciales en cualquier 
                lenguaje de programación, ya que nos permiten almacenar valores y manipularlos 
                de diversas formas. En Python, la declaración de variables es bastante sencilla 
                y flexible.
                <br />
                <br />
                En Python, una variable es simplemente un nombre que se utiliza para hacer 
                referencia a un objeto en memoria. Para crear una variable, solo necesitamos
                asignarle un valor utilizando el operador de asignación "=".
                <br />
                <br />
                Por ejemplo, si queremos crear una variable llamada "x" y asignarle el valor 
                5, podemos hacer lo siguiente:
            </p>
            <img src={img1} className="card-img-top" alt="" />
            <p className='lead'>
            Aquí, "x" es el nombre de nuestra variable y "5" es el valor que le estamos 
            asignando. Ahora podemos hacer referencia a "x" en cualquier otro lugar de 
            nuestro código para obtener o modificar su valor.
            <br />
            <br />
            Es importante tener en cuenta que en Python no es necesario declarar el 
            tipo de dato que almacenará una variable, ya que el intérprete lo deducirá 
            automáticamente en tiempo de ejecución.
            <br />
            <br />
            Por ejemplo, si queremos crear una variable que almacene una cadena de texto, 
            podemos hacer lo siguiente:
            </p>
            <img src={img2} alt="" className='card-img-top'/>
            <p className='lead'>
            Aquí, "mensaje" es el nombre de nuestra variable y "Hola, mundo!" es la cadena 
            de texto que le estamos asignando. Python automáticamente reconocerá que 
            "mensaje" es una variable de tipo cadena de texto (string).
            <br /><br />
            Además, en Python podemos cambiar el valor de una variable en cualquier momento 
            simplemente asignándole un nuevo valor. Por ejemplo:
            </p>
            <img src={img3} alt="" className='card-img-top'/>
            <p className='lead'>
            En este caso, primero creamos la variable "x" con el valor 5, la imprimimos y luego 
            le asignamos un nuevo valor de 10 y la volvemos a imprimir.
            <br /><br />
            Por último, es importante mencionar que en Python existen algunas convenciones 
            para nombrar las variables. Por lo general, se utilizan nombres en minúsculas 
            y separados por guiones bajos para las variables compuestas por más de una 
            palabra. Por ejemplo:
            </p>
            <img src={img4} alt=""className='card-img-top'/>
            <p className='lead'>
            Es importante tener en cuenta que Python distingue entre mayúsculas y 
            minúsculas en los nombres de variables, por lo que "Nombre" y "nombre" 
            son variables diferentes.
            <br /><br />
            Además, existen algunas convenciones específicas que se utilizan comúnmente 
            en Python para nombrar variables. Por ejemplo, se suele utilizar "i" como 
            nombre de variable para un índice en un bucle for, y "x", "y", y "z" se 
            utilizan a menudo para representar coordenadas o valores numéricos.
            <br /><br />
            También es importante evitar utilizar palabras clave de Python como nombres
            de variables. Las palabras clave son palabras reservadas que tienen un 
            significado especial en Python, como "if", "else", "while", "for", etc.
            <br /><br />
            Al seguir estas convenciones de nomenclatura, tus programas serán más legibles 
            y fáciles de entender para ti y para otros programadores.
            <br /><br />
            En resumen, las variables en Python son nombres que se utilizan para hacer 
            referencia a objetos en memoria. Python deduce el tipo de dato de una variable 
            automáticamente en tiempo de ejecución y podemos cambiar su valor en cualquier 
            momento simplemente asignándole un nuevo valor. En próximas entregas veremos 
            cómo trabajar con variables de diferentes tipos de datos y cómo utilizarlas en 
            estructuras de control de flujo como condicionales y bucles. ¡Hasta la próxima!
            </p>
        </div>
    </div>
    </>
}

export default Variable;