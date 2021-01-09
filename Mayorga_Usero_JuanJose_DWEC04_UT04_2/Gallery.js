/*
Juan José Mayorga Usero
CFGS Desarrollo de Aplicaciones Web
I.E.S. Maestre de Calatrava - Ciudad Real
Desarrollo Web en Entorno Cliente
UT04 Práctica 2
*/

function Gallery(title)
{
	if (!(this instanceof Gallery)) 
    {
        throw new ConstructorInvalido();
    }

	// title es un atributo obligatorio.
    if(!title)
    {
        throw new TituloVacio();
    }

	// Defino title y los arrays de imágenes, categorías y autores.
	let _title = title;
    let _images = [];
    let _categories = [];
    let _authors = [];

	// Getters y Setters de los atributos.
	Object.defineProperty(this, 'title', 
	{ 
		get:function()
		{ 
			return _title; 
		}, 
		set:function(value)
		{ 
			if (!value)
            {
                throw new TituloVacio();
            }
			_title = value;
		}
	});

	Object.defineProperty(this, 'categories', 
	{ 
		get:function()
		{ 
			return _categories; 
		}, 
    });
    
    Object.defineProperty(this, 'authors', 
	{ 
		get:function()
		{ 
			return _authors; 
		}, 
	});

	Object.defineProperty(this, 'images', 
	{ 
		get:function()
		{ 
			return _images; 
		}, 
    });
}

Gallery.prototype.constructor = Gallery;

// Añade una nueva categoría.
Gallery.prototype.addCategory = function(category)
{
	try
	{
		if (!(category instanceof Category)) 
		{
			throw new CategoriaInvalida();
		}
		// Excepción: La categoría no puede ser null
		if (category==null)
		{ 
			throw new CategoriaNull();
		}
		// Excepción: La categoría ya existe.
        this.categories.forEach(function(entry) 
        {
            if(entry.title==category.title)
            {
                throw new CategoriaExiste();
            }
		});
		// Este código era válido planteando el ejercicio según la solución. Cambié de idea.
		/*category = {
			category : category,
			images: []
		}*/
		this.categories.push(category); //Utilizamos los métodos de array para gestionar la lista.
		return this.categories.length; // Devolvemos el tamaño.
	}
	catch(error)
	{
		console.log(error.toString());
	}
}

// Elimina una categoría.
Gallery.prototype.removeCategory = function(category)
{
	try
	{
		// Primero hay que buscar la categoría que queremos quitar. 
		// Para ello buscamos su índice comparando el título de la categoría buscada con el atributo categoría de las imágenes del array.
		// Según lo descrito en la estructura de datos.
		var index = -1;  
		for (var i = 0; i < this.categories.length; i++) 
		{ 
			/*if (this.categories[i].category.title == category.title)*/
			if (this.categories[i].title == category.title) 
			{ 
				index = i; 
				break; 
			} 
        } 
        // Excepción: La categoría no está registrada.
        if(index==-1)
        {
            throw new CategoriaNoRegistrada();
        }
        this.categories.splice(index, 1);
        return this.categories.length;
	}
	catch(error)
	{
		console.log(error.toString());
	}
}

// Añade una nueva imagen a una categoría con un autor.
Gallery.prototype.addImage = function(image, category, author)
{
	try
	{
		if (!(image instanceof Image)) 
		{
			throw new ImagenInvalida();
		}
		if (!(category instanceof Category)) 
		{
			throw new CategoriaInvalida();
		}
		if (!(author instanceof Author)) 
		{
			throw new AutorInvalido();
		}
		// Excepción: La imagen no puede ser null
		if (image==null)
		{ 
			throw new ImagenNull();
		}
		// Busco si la imagen a introducir ya está en el array.
		// En tal caso, lanzo una excepción.
		var indexImagen = -1;  
		for (var i = 0; i < this.images.length; i++) 
		{ 
			if (this.images[i].image.title == image.title) 
			{ 
				indexImagen = i; 
				break; 
			} 
        } 
        // Excepción: La imagen ya existe.
        if(indexImagen!=-1)
        {
            throw new ImagenExiste();
		}
		// Compruebo si la categoría existe en el array de categorías.
		var indexCategoria = -1;  
		for (var i = 0; i < this.categories.length; i++) 
		{ 
			if (this.categories[i].title == category.title) 
			{ 
				indexCategoria = i; 
				break; 
			} 
		} 
		if(indexCategoria == -1)
		{
			throw new CategoriaNoRegistrada();
		}
		// Compruebo si el autor existe en el array de autores.
		var indexAutor = -1;  
		for (var i = 0; i < this.authors.length; i++) 
		{ 
			if (this.authors[i].nickname == author.nickname) 
			{ 
				indexAutor = i; 
				break; 
			} 
		} 
		if(indexAutor == -1)
		{
			throw new AutorNoExiste();
		}
		/* Si no hay problemas con los datos a introducir, creo un objeto compuesto por el objeto Image y las propiedades 
		nickname de author y title de category. 
		Esto se almacena en el array de imágenes.
		*/				
		image = {
			image : image,
			author: this.authors[indexAutor].nickname,
			category: this.categories[indexCategoria].title
		}
		/*this.categories[indexCategoria].images.push(image);*/
		this.images.push(image);
		return this.images.length; // Devolvemos el tamaño.
	}
	catch(error)
	{
		console.log(error.toString());
	}
}

// Elimina una imagen.
Gallery.prototype.removeImage = function(image)
{
	try
	{
		// Compruebo si la categoría a eliminar existe.
		var index = -1;  
		for (var i = 0; i < this.images.length; i++) 
		{ 
			if (this.images[i].image.title == image.title) 
			{ 
				index = i; 
				break; 
			} 
        } 
        // Excepción: La imagen no existe.
        if(index==-1)
        {
            throw new ImagenNoExiste();
        }
        this.images.splice(index, 1);
        return this.images.length;
	}
	catch(error)
	{
		console.log(error.toString());
	}
}

// Devuelve todas las imágenes de una determinada categoría.
Gallery.prototype.getCategoryImages = function(category)
{
	try
	{
		// Creo una variable para almacenar los datos de retorno.
		let _imagesCategory = [];
		// Recorro el array de imágenes buscando las imágenes de esa categoría.
		// La estructura de datos que he ideado facilita mucho la labor.
		var elementosEncontrados = 0;  
		for (var i = 0; i < this.images.length; i++) 
		{ 
			if (this.images[i].category == category.title) 
			{ 
				_imagesCategory.push(this.images[i]);
				elementosEncontrados++;
			} 
        } 
        // Excepción: La categoría no está registrada.
        if(elementosEncontrados==0)
        {
            throw new CategoriaNoRegistrada();
        }
        return _imagesCategory;
	}
	catch(error)
	{
		console.log(error.toString());
	}
}

// Añade un nuevo autor a la galería.
Gallery.prototype.addAuthor = function(author)
{
	try
	{
		if (!(author instanceof Author)) 
		{
			throw new AutorInvalido();
		}
		// Excepción: El autor no puede ser null
		if (author==null)
		{ 
			throw new AutorNull();
		}
		// Excepción: El autor ya existe.
        this.authors.forEach(function(entry) 
        {
            if(entry.nickname==author.nickname)
            {
                throw new AutorExiste();
            }
        });
		this.authors.push(author); //Utilizamos los métodos de array para gestionar la lista.
		return this.authors.length; // Devolvemos el tamaño.
	}
	catch(error)
	{
		console.log(error.toString());
	}
}

// Eliminar un autor.
Gallery.prototype.removeAuthor = function(author)
{
	try
	{
		var index = -1;  
		// Compruebo si existe el autor que queremos eliminar.
		for (var i = 0; i < this.authors.length; i++) 
		{ 
			if (this.authors[i].nickname == author.nickname) 
			{ 
				index = i; 
				break; 
			} 
        } 
        // Excepción: El autor no existe.
        if(index==-1)
        {
            throw new AutorNoExiste();
        }
        this.authors.splice(index, 1);
        return this.authors.length;
	}
	catch(error)
	{
		console.log(error.toString());
	}
}

// Devuelve todas las imágenes añadidas por un autor.
Gallery.prototype.getAuthorImages = function(author)
{
	try
	{
		// Creo una variable para almacenar los datos de retorno.
		// Recorro el array de imágenes buscando las imágenes de ese autor.
		// La estructura de datos que he ideado facilita mucho la labor.
		let _imagesAuthor = [];
		var elementosEncontrados = 0;  
		for (var i = 0; i < this.images.length; i++) 
		{ 
			if (this.images[i].author == author.nickname) 
			{ 
				_imagesAuthor.push(this.images[i]);
				elementosEncontrados++; 
			} 
        } 
        // Excepción: El autor no existe.
        if(elementosEncontrados==0)
        {
            throw new AutorNoExiste();
        }
        return _imagesAuthor;
	}
	catch(error)
	{
		console.log(error.toString());
	}
}

// Devuelve todas las imágenes de tipo retrato.
Gallery.prototype.getPortraits = function()
{
	try
	{
		// Creo una variable para almacenar los datos de retorno.
		let _portraits = [];
		// Recorro el array de imágenes en busca de los elementos Portrait.
		for (var i = 0; i < this.images.length; i++) 
		{ 
			if (this.images[i].image instanceof Portrait) 
			{ 
				_portraits.push(this.images[i]);
			} 
        } 
        return _portraits;
	}
	catch(error)
	{
		console.log(error.toString());
	}
}

// Devuelve todas las imágenes de tipo apaisado.
Gallery.prototype.getLandscapes = function()
{
	try
	{
		// Creo una variable para almacenar los datos de retorno.
		let _landscapes = [];
		//  Recorro el array de imágenes en busca de los elementos Landscape.
		for (var i = 0; i < this.images.length; i++) 
		{ 
			if (this.images[i].image instanceof Landscape) 
			{ 
				_landscapes.push(this.images[i]);
			} 
        } 
        return _landscapes;
	}
	catch(error)
	{
		console.log(error.toString());
	}
}

/* He añadido una función imprimir para mostrar el contenido de las galerías. 
Esto se debe a que si las muestro con el comando console.log, saldrá el estado final del objeto Galleru, no su estado en el momento que se invoca.
 */
Gallery.prototype.imprimir = function()
{
	let texto = "images : \n";
	this.images.forEach(function(entry) 
    {
		texto = texto + "{\n\timage : \n\t{ \n\t\ttitle : "+entry.image.title+"\n\t\tdescription : "+entry.image.description+"\n\t\turl : "+entry.image.url+"\n\t\tcoords : \n\t\t{\n\t\t\tlatitude : "+entry.image.coords.latitude+"\n\t\t\tlongitude : "+entry.image.coords.longitude+"\n\t\t}\n\t}\n\tauthor : "+entry.author+"\n\tcategory : "+entry.category+"\n}\n";
	});
	texto = texto + "categories : \n";
	this.categories.forEach(function(entry) 
    {
		texto = texto + "{\n\ttitle : "+entry.title+"\n\tdescription : "+entry.description+"\n}\n";
	});
	texto = texto + "authors : \n";
	this.authors.forEach(function(entry) 
    {
		texto = texto + "{\n\tnickname : "+entry.nickname+"\n\temail : "+entry.email+"\n\tavatar : "+entry.avatar+"\n}\n";
	});
	console.log(texto);
}