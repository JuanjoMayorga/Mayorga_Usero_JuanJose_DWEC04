/*
Juan José Mayorga Usero
CFGS Desarrollo de Aplicaciones Web
I.E.S. Maestre de Calatrava - Ciudad Real
Desarrollo Web en Entorno Cliente
UT04 Práctica 2
*/

function Image(title, description, url, coords = "")
{
    if (!(this instanceof Image)) 
    {
        throw new ConstructorInvalido();
    }

    if(!title)
    {
        throw new TituloVacio();
    }

    if(!description)
    {
        throw new DescripcionVacia();
	}

    if(!url)
    {
        throw new URLVacia();
    }

	let _title = title;
    let _description = description;
    let _url = url;
    let _coords = coords;

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
    
    Object.defineProperty(this, 'description', 
	{ 
		get:function()
		{ 
			return _description; 
		}, 
		set:function(value)
		{ 
            if (!value)
            {
                throw new DescripcionVacia();
            } 
			_description = value;
		}
    });
    
    Object.defineProperty(this, 'url', 
	{ 
		get:function()
		{ 
			return _url; 
		}, 
		set:function(value)
		{ 
            if (!value)
            {
                throw new URLVacia();
            } 
			_url = value;
		}
	});

	Object.defineProperty(this, 'coords', 
	{ 
		get:function()
		{ 
			return _coords; 
		}, 
		set:function(value)
		{ 
			_coords = value;
		}
	});
}

Category.prototype.constructor = Category;