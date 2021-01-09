/*
Juan José Mayorga Usero
CFGS Desarrollo de Aplicaciones Web
I.E.S. Maestre de Calatrava - Ciudad Real
Desarrollo Web en Entorno Cliente
UT04 Práctica 2
*/

function Landscape(title, description, url, coords = "")
{
    if (!(this instanceof Landscape)) 
    {
        throw new ConstructorInvalido();
    }

    Image.call(this, title, description, url, coords);
}

Landscape.prototype = Object.create(Image.prototype);
Landscape.prototype.constructor = Landscape;