/*
Juan José Mayorga Usero
CFGS Desarrollo de Aplicaciones Web
I.E.S. Maestre de Calatrava - Ciudad Real
Desarrollo Web en Entorno Cliente
UT04 Práctica 1
*/

/* Creo el constructor para los objetos Lista. Recibe como argumento de entrada el número de elementos que puede albergar la lista. */
function Lista(max_elem_lista)
{
	let _max_elem_lista = max_elem_lista;
	// La lista contiene un array de books que se irá actualizando con las operaciones que se hacen.
	let _books = [];

	Object.defineProperty(this, 'max_elem_lista', 
	{ 
		get:function()
		{ 
			return _max_elem_lista; 
		}, 
		set:function(value)
		{ 
			_max_elem_lista = value;
		}
	});

	Object.defineProperty(this, 'books', 
	{ 
		get:function()
		{ 
			return _books; 
		}, 
	});
}

Lista.prototype.constructor=Lista;

// Devuelve true o false en función de si la lista está vacía.
Lista.prototype.isEmpty = function()
{
	return (this.books.length === 0);
}

// Devuelve true o false en función de si la lista está llena.
Lista.prototype.isFull = function()
{
	return (this.books.length === this.max_elem_lista);
}

// Devuelve el número de elementos de la lista.
Lista.prototype.size = function()
{
	return (this.books.length);
}

// Añade un nuevo elemento al final de la lista. Devuelve el tamaño de la lista una vez añadido.
Lista.prototype.add = function(elem)
{
	try
	{
		// Excepción: El elemento no es un Book. Puedes comprobar si tiene la propiedad ISBN y title.
		// Como en este caso he creado también los objetos Book, podría usar elem.isbn para acceder a la propiedad isbn.
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
		return this.size(); // Devolvemos el tamaño.
	}
	catch(error)
	{
		console.log(error.toString());
	}
}

// Añade un nuevo elemento en la posición especificada en la lista. Devuelve el tamaño de la lista una vez añadido.
Lista.prototype.addAt = function(elem, index)
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
		// Excepción: El índice está fuera de los elementos de la lista.
		else if(index>=this.max_elem_lista||index<0)
		{
			throw new ErrorIndiceFuera();
		}
		// Añadimos si la lista no está completa.
		this.books.splice(index, 0, elem); //Utilizamos los métodos de array para gestionar la lista.
		return this.size(); // Devolvemos el tamaño.
	}
	catch(error)
	{
		console.log(error.toString());
	}	
}

// Devuelve el elemento de la lista de la posición especificada.
Lista.prototype.get = function(index)
{
	try
	{
		// Excepción: El índice está fuera de los elementos de la lista.
		if(index>=this.max_elem_lista||index<0)
		{
			throw new ErrorIndiceFuera();
		}
		return this.books[index];
	}
	catch(error)
	{
		console.log(error.toString());
	}	
}

// Devuelve la lista en formato cadena. El delimitador de elementos será " - ".
/* Dado que se trata de un objeto con múltiples propiedades, he considerado más claro representar la lista mostrando las propiedades de cada objeto en una línea, y dejar un espacio entre cada objeto. */
Lista.prototype.toString = function() 
{
	// Reducimos el array para el primer elemento en salir.
	// https://www.w3schools.com/jsref/jsref_reduce.asp
	return this.books.reduce(function(str, item, index)
	{
		return str + item.isbn + "\n" + item.title +"\n" + item.author +"\n" + item.publicationDate.getFullYear() + "\n" +item.price  + "\n\n";
	},""); //El valor inicial de la reducción es ""
}

// Devuelve la posición del elemento indicado. Si el elemento no está en la lista devuelve -1. Realiza la comparación por ISBN.
Lista.prototype.indexOf = function(elem)
{
	try
	{
		// Excepción: El elemento no es un Book. Puedes comprobar si tiene la propiedad ISBN y title.
		if (elem.hasOwnProperty('isbn')==false||elem.hasOwnProperty('title')==false) // https://dmitripavlutin.com/check-if-object-has-property-javascript/ 
		{ 
			throw new ErrorNoEsBook();
		}
		// https://www.geeksforgeeks.org/find-start-ending-index-element-unsorted-array/
		// https://dmitripavlutin.com/how-to-compare-objects-in-javascript/
		var index = -1;  
		// Recorrer la lista de principio a fin para encontrar la primera coincidencia.
		for (var i = 0; i < this.books.length; i++) 
		{ 
			if (this.books[i].isbn == elem.isbn) 
			{ 
				index = i; 
				break; 
			} 
		} 
		return index;
	}
	catch(error)
	{
		console.log(error.toString());
	}	
}

// Devuelve la posición del elemento indicado. Si el elemento no está en la lista devuelve -1. Realiza la comparación por ISBN.
Lista.prototype.lastIndexOf = function(elem)
{
	try
	{
		// Excepción: El elemento no es un Book. Puedes comprobar si tiene la propiedad ISBN y title.
		if (elem.hasOwnProperty('isbn')==false||elem.hasOwnProperty('title')==false) // https://dmitripavlutin.com/check-if-object-has-property-javascript/ 
		{ 
			throw new ErrorNoEsBook();
		}
		var index = -1; 
		// Recorrer la lista de fin a principio para encontrar la primera coincidencia.
		for (var i = this.books.length-1; i >=0; i--) 
		{ 
			if (this.books[i].isbn == elem.isbn) 
			{ 
				index = i; 
				break; 
			} 
		} 
		return index;
	}
	catch(error)
	{
		console.log(error.toString());
	}	
}

// Devuelve el máximo número de elementos que podemos tener en la lista.
Lista.prototype.capacity = function()
{
	return this.max_elem_lista;
}

// Vacía la lista.
Lista.prototype.clear = function()
{
	this.books.splice(0, this.books.length); // https://www.w3schools.com/jsref/jsref_splice.asp
}

// Devuelve el primer elemento de la lista.
Lista.prototype.firstElement = function()
{
	try
	{
		if (this.isEmpty())
		{
			throw new ErrorListaVacia();
		} 
		return this.books[0];
	}
	catch(error)
	{
		console.log(error.toString());
	}	
}

// Devuelve el último elemento de la lista.
Lista.prototype.lastElement = function()
{	
	try
	{
		// Excepción: La lista está vacía.
		if (this.isEmpty())
		{
			throw new ErrorListaVacia();
		} 
		return this.books[this.books.length-1];
	}
	catch(error)
	{
		console.log(error.toString());
	}	
}

// Elimina el elemento de la posición indicada. Devuelve el elemento borrado.
Lista.prototype.remove = function(index)
{
	try
	{
		// Excepción: El índice está fuera de los elementos de la lista.
		if(index>=this.max_elem_lista||index<0)
		{
			throw new ErrorIndiceFuera();
		}
		return this.books.splice(index, 1)[0]; // https://www.w3schools.com/jsref/jsref_splice.asp
		// Hay que poner el índice 0, porque si no, devuelve un array de un elemento. Queremos el primer elemento de ese array.
	}
	catch(error)
	{
		console.log(error.toString());
	}
}

// Elimina el elemento indicado de la lista. Devuelve true si se ha podido borrar el elemento, false en caso contrario.
Lista.prototype.removeElement = function(elem)
{
	return this.remove(this.indexOf(elem));
}

// Reemplaza el elemento de la lista indicado por el índice. Devuelve el elemento que estaba anteriormente en la lista.
Lista.prototype.set = function(elem, index)
{
	try
	{
		// Excepción: El elemento no es un Book. Puedes comprobar si tiene la propiedad ISBN y title.
		if (elem.hasOwnProperty('isbn')==false||elem.hasOwnProperty('title')==false) // https://dmitripavlutin.com/check-if-object-has-property-javascript/ 
		{ 
			throw new ErrorNoEsBook();
		}
		// Excepción: El índice está fuera de los elementos de la lista.
		else if(index>=this.max_elem_lista||index<0)
		{
			throw new ErrorIndiceFuera();
		}
		// https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array/splice
		return this.books.splice(index,1,elem)[0]; //Utilizamos los métodos de array para gestionar la lista
		// Hay que poner el índice 0, porque si no, devuelve un array de un elemento. Queremos el primer elemento de ese array.
	}
	catch(error)
	{
		console.log(error.toString());
	}
}

