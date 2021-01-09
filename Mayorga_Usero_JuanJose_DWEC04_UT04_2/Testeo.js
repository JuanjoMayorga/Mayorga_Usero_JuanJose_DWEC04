/*
Juan José Mayorga Usero
CFGS Desarrollo de Aplicaciones Web
I.E.S. Maestre de Calatrava - Ciudad Real
Desarrollo Web en Entorno Cliente
UT04 Práctica 2
*/

function testeo() 
{
    // En primer lugar, voy a crear varios objetos de los tipos que se piden en el enunciado.
    console.log("En primer lugar, voy a crear varios objetos de los tipos que se piden en el enunciado.");
    // Objetos Image: Creo 6 objetos Image. Se pueden mostrar por consola directamente.
    console.log("Objetos Image: Creo 6 objetos Image. Se pueden mostrar por consola directamente.");
    let imagen1 = new Image("Remontada al PSG", "Messi celebrando la victoria frente al PSG", "https://e00-marca.uecdn.es/assets/multimedia/imagenes/2017/04/03/14912490601797.jpg", new Coords(41.39,2.17));
    let imagen2 = new Image("The last shot", "Michael Jordan anotando frente a Utah Jazz", "https://e00-marca.uecdn.es/assets/multimedia/imagenes/2018/06/14/15289587333620.jpg", new Coords(40.76,-111.89));
    let imagen3 = new Image("La mano de Dios", "Maradona marca a Inglaterra con la mano", "https://cdn2.mediotiempo.com/uploads/media/2019/06/22/mano-dios-gol-maradona-inglaterra.jpg", new Coords(19.30,-99.15));
    let imagen4 = new Image("Vinsanity", "Vince Carter en el concurso de mates de 2000", "https://www.bardown.com/polopoly_fs/1.1441690!/fileimage/httpImage/image.jpg_gen/derivatives/default/vc1.jpg", new Coords(37.75,-122.20));
    let imagen5 = new Image("El más rápido", "Usain Bolt bate el récord mundial de 100m lisos", "https://e00-marca.uecdn.es/assets/multimedia/imagenes/2019/08/15/15658714229821.jpg", new Coords(52.52,13.38));
    let imagen6 = new Image("El hijo del viento", "Carl Lewis en Barcelona 92", "https://img.olympicchannel.com/images/image/private/t_16-9_760/v1538355600/primary/adc9oztu46zmomtj7sio", new Coords(41.39,2.17));
    console.log(imagen1);
    console.log(imagen2);
    console.log(imagen3);
    console.log(imagen4);
    console.log(imagen5);
    console.log(imagen6);
    // Objetos Landscape: Creo 3 objetos Landscape. Se pueden mostrar por consola directamente.
    console.log("Objetos Landscape: Creo 3 objetos Landscape. Se pueden mostrar por consola directamente.");
    let landscape1 = new Landscape("El nido de pájaro", "Estadio Olímpico de Pekín", "https://d1xymaf218jlo1.cloudfront.net/2015/12/pekin-estadio.jpg", new Coords(39.65,116.24));
    let landscape2 = new Landscape("Tower Bridge", "El puente de Londres con los aros olímpicos", "https://i.pinimg.com/originals/ee/e6/b6/eee6b669afe00f2317db22eecf386d5e.jpg", new Coords(51.51,-0.09));
    let landscape3 = new Landscape("Wimbledon", "Pistas de juego del torneo de Wimbledon", "https://e00-marca.uecdn.es/assets/multimedia/imagenes/2020/03/27/15853083295304.jpg", new Coords(51.51,-0.09));
    console.log(landscape1);
    console.log(landscape2);
    console.log(landscape3);
    // Objetos Portrait: Creo 2 objetos Portrait. Se pueden mostrar por consola directamente.
    console.log("Objetos Portrait: Creo 2 objetos Portrait. Se pueden mostrar por consola directamente.");
    let portrait1 = new Portrait("La saeta rubia", "Retrato de Alfredo Di Stéfano", "https://s3.amazonaws.com/arc-wordpress-client-uploads/infobae-wp/wp-content/uploads/2017/11/25171611/GettyImages-3429336.jpg", new Coords(41.39,2.17));
    let portrait2 = new Portrait("Black mamba", "Retrato de Kobe Bryant con el trofeo de la NBA", "https://cdn.shopify.com/s/files/1/1050/9876/products/kobe6_1200x1200.jpg?v=1580159220", new Coords(34.04,-118.27));
    console.log(portrait1);
    console.log(portrait2);
    // Objetos Category: Creo 4 objetos Category. Se pueden mostrar por consola directamente.
    console.log("Objetos Category: Creo 4 objetos Category. Se pueden mostrar por consola directamente.");
    let categoria1 = new Category("Fútbol");
    let categoria2 = new Category("Baloncesto");
    let categoria3 = new Category("Atletismo");
    let categoria4 = new Category("Tenis");
    console.log(categoria1);
    console.log(categoria2);
    console.log(categoria3);
    console.log(categoria4);
    // Objetos Author: Creo 4 objetos Author. Se pueden mostrar por consola directamente.
    console.log("Objetos Author: Creo 4 objetos Author. Se pueden mostrar por consola directamente.");
    let autor1 = new Author("Santiago Garcés", "sgarces@fcbarcelona.com");
    let autor2 = new Author("Fernando Medina", "fmedina@orlandomagic.com");
    let autor3 = new Author("Eduardo Longoni", "elongoni@clarin.com");
    let autor4 = new Author("Jesse Garrabrant", "jgarrabrant@olympics.com");
    console.log(autor1);
    console.log(autor2);
    console.log(autor3);
    console.log(autor4);
    /* 
    Creo un objeto Gallery, con el que trabajaré el resto de la práctica.
    Desarrollando esta función de testeo, he observado que al invocar el objeto galeria1 con el comando console.log()
    visualizamos el estado final del objeto, no el estado el objeto en el momento que se invoca.
    Por ese motivo he creado una función imprimir() para los objetos Gallery, que muestra los arrays de objetos Image, Category y Author.
    */
    console.log("Creo un objeto Gallery, con el que trabajaré el resto de la práctica.");
    let galeria1 = new Gallery("Galería de ejemplo");
    // Pruebo la función addCategory, añadiendo el objeto categoria1.
    console.log("Pruebo la función addCategory, añadiendo el objeto categoria1.");
    galeria1.addCategory(categoria1);
    // Si intento añadir la misma categoría dos veces, salta una excepción.
    console.log("Si intento añadir la misma categoría dos veces, salta una excepción.");   
    galeria1.addCategory(categoria1);
    galeria1.addCategory(categoria2);
    galeria1.addCategory(categoria3);
    // Muestro galeria1 con 3 categorías añadidas.
    console.log("Muestro galeria1 con 3 categorías añadidas.");
    galeria1.imprimir();
    // Pruebo la función removeCategory. Quito categoria3 y muestro la galería.
    console.log("Pruebo la función removeCategory. Quito categoria3 y muestro la galería.");
    galeria1.removeCategory(categoria3);
    galeria1.imprimir();
    // Intento quitar una categoría que no está en la galería. Salta una excepción.
    console.log("Intento quitar una categoría que no está en la galería. Salta una excepción.");
    galeria1.removeCategory(categoria4);
    // Finalmente añado categoria3 y categoria4.
    console.log("Finalmente añado categoria3 y categoria4.");
    galeria1.addCategory(categoria3);
    galeria1.addCategory(categoria4);
    galeria1.imprimir();
    // Repito el proceso con los autores. Añado el objeto autor1.
    console.log("Repito el proceso con los autores. Añado el objeto autor1.");
    galeria1.addAuthor(autor1);
    // Si intento añadir nuevamente autor1, salta una excepción.
    console.log("Si intento añadir nuevamente autor1, salta una excepción.");
    galeria1.addAuthor(autor1);
    galeria1.addAuthor(autor2);
    galeria1.addAuthor(autor3);
    // Muestro galeria1 con 3 autores añadidos.
    console.log("Muestro galeria1 con 3 autores añadidos.");
    galeria1.imprimir();
    // Pruebo la función removeAuthor. Quito autor3 y muestro la galería.
    console.log("Pruebo la función removeAuthor. Quito autor3 y muestro la galería.");
    galeria1.removeAuthor(autor3);
    galeria1.imprimir();
    // Intento quitar un autor que no está en la galería. Salta una excepción.
    console.log("Intento quitar un autor que no está en la galería. Salta una excepción.");
    galeria1.removeAuthor(autor4);
    // Finalmente añado autor3 y autor4.
    console.log("Finalmente añado autor3 y autor4.");
    galeria1.addAuthor(autor3);
    galeria1.addAuthor(autor4);
    galeria1.imprimir();
    // Pruebo la función addImage con la imagen1, que pertenece a categoria1 y es del autor1.
    console.log("Pruebo la función addImage con la imagen1, que pertenece a categoria1 y es del autor1.");
    galeria1.addImage(imagen1,categoria1,autor1);
    galeria1.imprimir();
    // Si intento añadir nuevamente imagen1, salta una excepción.
    console.log("Si intento añadir nuevamente imagen1, salta una excepción.");
    galeria1.addImage(imagen1,categoria1,autor1);
    // Añado algunas imágenes más y las muestro.
    console.log("Añado algunas imágenes más y las muestro.");
    galeria1.addImage(imagen2,categoria2,autor2);
    galeria1.addImage(imagen3,categoria1,autor3);
    galeria1.addImage(imagen4,categoria2,autor4);
    galeria1.addImage(imagen5,categoria3,autor1);
    galeria1.imprimir();
    // Pruebo la función removeImage. Quito imagen5 y muestro la galería.
    console.log("Pruebo la función removeImage. Quito imagen5 y muestro la galería.");
    galeria1.removeImage(imagen5);
    galeria1.imprimir();
    // Intento quitar un autor que no está en la galería. Salta una excepción.
    console.log("Intento quitar una imagen que no está en la galería. Salta una excepción.");
    galeria1.removeImage(imagen6);
    // Añado de nuevo imagen5. También añado imagen6 y los objetos Portrait y Landscape que he creado.
    console.log("Añado de nuevo imagen5. También añado imagen6 y los objetos Portrait y Landscape que he creado.");
    galeria1.addImage(imagen5,categoria3,autor1);
    galeria1.addImage(imagen6,categoria3,autor3);
    galeria1.addImage(landscape1,categoria3,autor4);
    galeria1.addImage(landscape2,categoria3,autor4);
    galeria1.addImage(landscape3,categoria4,autor1);
    galeria1.addImage(portrait1,categoria1,autor3);
    galeria1.addImage(portrait2,categoria2,autor2);
    galeria1.imprimir();
    // Pruebo la función getCategoryImages. Esta función devuelve un array con las imágenes que corresponden a la categoría que se le indica como argumento de entrada.
    console.log("Pruebo la función getCategoryImages. Esta función devuelve un array con las imágenes que corresponden a la categoría que se le indica como argumento de entrada.");
    // Comienzo hallando las imágenes de categoria1: 'Fútbol'.
    console.log("Comienzo hallando las imágenes de categoria1: 'Fútbol'.");
    let imagenesFutbol = galeria1.getCategoryImages(categoria1);
    // Puedo ver el array con el comando console.log.
    console.log("Puedo ver el array con el comando console.log.");
    console.log(imagenesFutbol);
    // Hago lo mismo con las otras categorías.
    console.log("Hago lo mismo con las otras categorías.");
    let imagenesBaloncesto = galeria1.getCategoryImages(categoria2);
    console.log(imagenesBaloncesto);
    let imagenesAtletismo = galeria1.getCategoryImages(categoria3);
    console.log(imagenesAtletismo);
    let imagenesTenis = galeria1.getCategoryImages(categoria4);
    console.log(imagenesTenis);
    // Pruebo la función getCategoryImages. Esta función devuelve un array con las imágenes que corresponden a la categoría que se le indica como argumento de entrada.
    console.log("Pruebo la función getAuthorImages. Esta función devuelve un array con las imágenes que corresponden al autor que se le indica como argumento de entrada.");
    // Comienzo hallando las imágenes de autor1: 'Fútbol'.
    console.log("Comienzo hallando las imágenes de categoria1: 'Santiago Garcés'.");
    let imagenesGarces = galeria1.getAuthorImages(autor1);
    // Puedo ver el array con el comando console.log.
    console.log("Puedo ver el array con el comando console.log.");
    console.log(imagenesGarces);
    // Hago lo mismo con los otros autores.
    console.log("Hago lo mismo con los otros autores.");
    let imagenesMedina = galeria1.getAuthorImages(autor2);
    console.log(imagenesMedina);
    let imagenesLongoni = galeria1.getAuthorImages(autor3);
    console.log(imagenesLongoni);
    let imagenesGarrabrant = galeria1.getAuthorImages(autor4);
    console.log(imagenesGarrabrant);
    // Pruebo la función getPortraits. Esta función devuelve un array con los objetos Portrait (o mejor dicho, las imágenes cuya imagen es de tipo Portrait).
    console.log("Pruebo la función getPortraits. Esta función devuelve un array con los objetos Portrait (o mejor dicho, las imágenes cuya imagen es de tipo Portrait).");
    let portraits1 = galeria1.getPortraits();
    console.log(portraits1);   
    // Pruebo la función getLandscapes. Esta función devuelve un array con los objetos Landscape (o mejor dicho, las imágenes cuya imagen es de tipo Landscape).
    console.log("Pruebo la función getLandscapes. Esta función devuelve un array con los objetos Landscape (o mejor dicho, las imágenes cuya imagen es de tipo Landscape).");
    let landscapes1 = galeria1.getLandscapes();
    console.log(landscapes1); 
    // Finalmente, puedo mostrar el objeto galeria1 con console.log. Este comando nos da el estado final del objeto.
    console.log("Finalmente, puedo mostrar el objeto galeria1 con console.log. Este comando nos da el estado final del objeto.");
    console.log(galeria1);
}

window.onload = testeo();