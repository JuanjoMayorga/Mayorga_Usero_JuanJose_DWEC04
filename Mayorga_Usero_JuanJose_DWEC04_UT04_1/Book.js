/*
Juan José Mayorga Usero
CFGS Desarrollo de Aplicaciones Web
I.E.S. Maestre de Calatrava - Ciudad Real
Desarrollo Web en Entorno Cliente
UT04 Práctica 1
*/

/*
He definido un objeto Book con un constructor para crear los libros que se van a almacenar en Lista.
 */
function Book(isbn, title, author, publicationDate, price)
{
	/* En un primer momento, pense en poner las propiedades públicas. Luego decidí que era mejor usar campos privados. */
	/*this.isbn = isbn;
	this.title = title;
	this.author = author;
	this.publicationDate = publicationDate;
	this.price = price;*/

	/* Aquí defino los campos privados. */
	let _isbn = isbn;
	let _title = title;
	let _author = author;
	let _publicationDate = publicationDate;
	let _price = price;

	/* Creo métodos get y set para cada uno de los atributos.*/
	Object.defineProperty(this, 'isbn', 
	{ 
		get:function()
		{ 
			return _isbn; 
		}, 
		set:function(value)
		{ 
			_isbn = value;
		}
	});

	Object.defineProperty(this, 'title', 
	{ 
		get:function()
		{ 
			return _title; 
		}, 
		set:function(value)
		{ 
			_title= value;
		}
	});

	Object.defineProperty(this, 'author', 
	{ 
		get:function()
		{ 
			return _author; 
		}, 
		set:function(value)
		{ 
			_author = value;
		}
	});

	Object.defineProperty(this, 'publicationDate', 
	{ 
		get:function()
		{ 
			return _publicationDate; 
		}, 
		set:function(value)
		{ 
			_publicationDate = value;
		}
	});

	Object.defineProperty(this, 'price', 
	{ 
		get:function()
		{ 
			return _price; 
		}, 
		set:function(value)
		{ 
			_price = value;
		}
	});
}

Book.prototype.constructor = Book;
