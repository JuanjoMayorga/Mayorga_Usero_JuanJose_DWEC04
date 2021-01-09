/*
Juan José Mayorga Usero
CFGS Desarrollo de Aplicaciones Web
I.E.S. Maestre de Calatrava - Ciudad Real
Desarrollo Web en Entorno Cliente
UT04 Práctica 2
*/

function Coords(latitude, longitude)
{
    if (!(this instanceof Coords)) 
    {
        throw new ConstructorInvalido();
    }

    if(!latitude)
    {
        throw new LatitudVacia();
    }

    if(!longitude)
    {
        throw new LongitudVacia();
    }

	let _latitude = latitude;
    let _longitude = longitude;

	Object.defineProperty(this, 'latitude', 
	{ 
		get:function()
		{ 
			return _latitude; 
		}, 
		set:function(value)
		{ 
            if (!value)
            {
                throw new LatitudVacia();
            } 
			_latitude = value;
		}
    });
    
    Object.defineProperty(this, 'longitude', 
	{ 
		get:function()
		{ 
			return _longitude; 
		}, 
		set:function(value)
		{ 
            if (!value)
            {
                throw new LongitudVacia();
            } 
			_longitude = value;
		}
    });
}

Coords.prototype.constructor = Coords;