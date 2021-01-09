/*
Juan José Mayorga Usero
CFGS Desarrollo de Aplicaciones Web
I.E.S. Maestre de Calatrava - Ciudad Real
Desarrollo Web en Entorno Cliente
UT04 Práctica 1
*/

// Hago que ListaOrdenadaPorISBN herede de Lista.
ListaOrdenadaPorFecha.prototype = Object.create(Lista.prototype);

ListaOrdenadaPorFecha.prototype.constructor = ListaOrdenadaPorFecha;

// Igual que Lista, el constructor sólo recibe como argumento el número de elementos admisibles.
function ListaOrdenadaPorFecha(max_elem_lista)
{
    Lista.call(this, max_elem_lista);
}

// Añade un nuevo elemento a la lista manteniendo la relación de orden. Devuelve el tamaño de la lista una vez añadido.
ListaOrdenadaPorFecha.prototype.add = function(elem)
{
	try
	{
		// Excepción: El elemento no es un Book. Puedes comprobar si tiene la propiedad ISBN y title.
		if (elem.hasOwnProperty('isbn')==false||elem.hasOwnProperty('title')==false) // https://dmitripavlutin.com/check-if-object-has-property-javascript/ 
		{ 
			throw new ErrorNoEsBook();
		}
		// Excepción: La lista está llena.
		else if (this.isFull())  
		{ 	
			throw new ErrorListaLlena(); // Si está completa lanzamos excepción.
		}	
		// Añadimos si la lista no está completa.
        this.books.push(elem); //Utilizamos los métodos de array para gestionar la lista.
        this.books.sort(compare);
        return this.size(); // Devolvemos el tamaño.
	}
	catch(error)
	{
		console.log(error.toString());
	}
}

// Función para ordenar el array por fecha de publicación de manera ascendente.
function compare(a,b) // https://stackoverflow.com/questions/1129216/sort-array-of-objects-by-string-property-value
{
    if(a.publicationDate<b.publicationDate)
    {
        return -1;
    }
    if(a.publicationDate>b.publicationDate)
    {
        return 1;
    }
    return 0;
}

/*
Para las funciones que no tienen sentido en listas ordenadas:
- addAt
- lastIndexOf
- set
he optado por sobreescribirlas y lanzar una excepción que indique que se está intentando utilizar una función deshabilitada.
*/
ListaOrdenadaPorFecha.prototype.addAt = function(elem, index)
{
	try
	{
        throw new FuncionDeshabilitada();
	}
	catch(error)
	{
		console.log(error.toString());
	}	
}

ListaOrdenadaPorFecha.prototype.lastIndexOf = function(elem)
{
	try
	{
        throw new FuncionDeshabilitada();
	}
	catch(error)
	{
		console.log(error.toString());
	}	
}

ListaOrdenadaPorFecha.prototype.set = function(elem, index)
{
	try
	{
        throw new FuncionDeshabilitada();
	}
	catch(error)
	{
		console.log(error.toString());
	}	
}