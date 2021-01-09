/*
Juan José Mayorga Usero
CFGS Desarrollo de Aplicaciones Web
I.E.S. Maestre de Calatrava - Ciudad Real
Desarrollo Web en Entorno Cliente
UT04 Práctica 2
*/

function Category(title, description = "")
{
    if (!(this instanceof Category)) 
    {
        throw new ConstructorInvalido();
    }

    if(!title)
    {
        throw new TituloVacio();
    }

	let _title = title;
    let _description = description;

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
			_description = value;
		}
	});
}

Category.prototype.constructor = Category;