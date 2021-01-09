/*
Juan José Mayorga Usero
CFGS Desarrollo de Aplicaciones Web
I.E.S. Maestre de Calatrava - Ciudad Real
Desarrollo Web en Entorno Cliente
UT04 Práctica 1
*/

// Función de testeo.
function testList() 
{
    // Primero creo unos cuantos objetos Book para probar los métodos de la Lista que crearé después.
    let book1=new Book("978-84-9804-654-0", "El Quijote", "Miguel de Cervantes", new Date(1605, 0, 1), 20);
    let book2=new Book("978-84-6703-338-3", "Hamlet", "William Shakespeare", new Date(1609, 0, 1), 15.6);
    let book3=new Book("978-15-1965-334-5", "Orlando furioso", "Ludovico Ariosto", new Date(1532, 0, 1), 21.02);
    let book4 = { 
		title: "Tartufo", 
		author: "Molière", 
		publicationDate: 
		new Date(1669, 0, 1), 
		price: 9.17, };
    let book5=new Book("978-84-4142-514-9", "Divina comedia", "Dante Alighieri", new Date(1472, 0, 1), 14.25);
    let book6=new Book("978-84-6703-458-5", "El perro del hortelano", "Lope de Vega", new Date(1618, 0, 1), 6.60);
    let book7=new Book("978-95-0039-253-2", "Leviathan", "Thomas Hobbes", new Date(1651, 0, 1), 6.60);
    // Ahora creo una lista de con un número máximo de ítems de 5.
    lista=new ListaOrdenadaPorISBN(5);
    // Compruebo si la lista está vacía con la función isEmpty.
    console.log("Compruebo si la lista está vacía con la función isEmpty.");
    console.log(lista.isEmpty());
    // Compruebo si la lista está llena con la función isFull.
    console.log("Compruebo si la lista está vacía con la función isFull.");
    console.log(lista.isFull());
    // Añado los tres primeros libros con la función add y los muestro por consola con la función toString.
    console.log("Añado los tres primeros libros con la función add y los muestro por consola con la función toString.");
    lista.add(book1);
    lista.add(book2);
    lista.add(book3);
    console.log(lista.toString());
    // Voy a intentar añadir el book4 'Tartufo', que he creado de manera literal, y no tiene ISBN. Debe saltar la excepción personalizada que he creado.
    console.log("Voy a intentar añadir el book4 'Tartufo', que he creado de manera literal, y no tiene ISBN. Debe saltar la excepción personalizada que he creado.");
    lista.add(book4);
    // Devuelvo el número de elementos en la lista con la función size.
    console.log("Devuelvo el número de elementos en la lista con la función size.");
    console.log(lista.size());
    // Añado el book5 'Divina comedia' en la posición 1 (recordar que el primer elemento de un array es el 0) con la función addAt. Se muestra el nuevo tamaño de la lista.
    console.log("Añado el book5 'Divina comedia' en la posición 1 (recordar que el primer elemento de un array es el 0) con la función addAt. Se muestra el nuevo tamaño de la lista.");
	console.log(lista.addAt(book5, 1));
    console.log(lista.toString());
    // Obtengo el segundo elemento de la lista con el método get.
    console.log("Obtengo el segundo elemento de la lista con el método get.");
    console.log(lista.get(1));
    // Hallo el índice del objeto book3 'Orlando furioso', con la función indexOf.
    console.log("Hallo el índice del objeto book3 'Orlando furioso', con la función indexOf.");
    console.log(lista.indexOf(book3));
    // Intento hallar el índice del objeto book6 'El perro del hortelano', que no está en la lista.
    console.log("Intento hallar el índice del objeto book6 'El perro del hortelano', que no está en la lista.");
    console.log(lista.indexOf(book6));
    // Hallo el índice del objeto book3 'Orlando furioso', comenzando a buscar por el final, con la función lastIndexOf.
    console.log("Hallo el índice del objeto book3 'Orlando furioso', comenzando a buscar por el final, con la función lastIndexOf.");
    console.log(lista.lastIndexOf(book3));
    // Muestro el máximo número de elementos que podemos tener en la lista con la función capacity.
    console.log("Muestro el máximo número de elementos que podemos tener en la lista con la función capacity.");
    console.log(lista.capacity());
    // Obtengo el primer elemento de la lista con la función firstElement.
    console.log("Obtengo el primer elemento de la lista con la función firstElement.");
    console.log(lista.firstElement());
    // Obtengo el último elemento de la lista con la función firstElement.
    console.log("Obtengo el último elemento de la lista con la función firstElement.");
    console.log(lista.lastElement());
    // Elimino el elemento de la lista que está en la posición 2 (recordar que el primer elemento de un array es el 0) con la función remove.
    console.log("Elimino el elemento de la lista que está en la posición 2 (recordar que el primer elemento de un array es el 0) con la función remove.");
    console.log(lista.remove(2));
    // Muestro cómo queda la lista tras esta operación con la función toString.
    console.log("Muestro cómo queda la lista tras esta operación con la función toString.");
    console.log(lista.toString());
    // Elimino el elemento book3 'Orlando furioso' con la función removeElement.
    console.log("Elimino el elemento book3 'Orlando furioso' con la función removeElement.");
    console.log(lista.removeElement(book3));
    // Muestro cómo queda la lista tras esta operación con la función toString.
    console.log("Muestro cómo queda la lista tras esta operación con la función toString.");
    console.log(lista.toString());
    // Ahora sustituyo el elemento en la posición 0 (recordar que el primer elemento de un array es el 0) por el objeto book6 'El perro del hortelano'.
    console.log("Ahora sustituyo el elemento en la posición 0 (recordar que el primer elemento de un array es el 0) por el objeto book6 'El perro del hortelano'.");
    console.log(lista.set(book6, 0));
    // Muestro cómo queda la lista tras esta operación con la función toString.
    console.log("Muestro cómo queda la lista tras esta operación con la función toString.");
    console.log(lista.toString());
    // Vacío la lista con la función clear.
    console.log("Vacío la lista con la función clear.");
    lista.clear();
    // Muestro cómo queda la lista tras esta operación con la función toString.
    console.log("Muestro cómo queda la lista tras esta operación con la función toString.");
    console.log(lista.toString());
}
window.onload = testList();
