/*
Juan José Mayorga Usero
CFGS Desarrollo de Aplicaciones Web
I.E.S. Maestre de Calatrava - Ciudad Real
Desarrollo Web en Entorno Cliente
UT04 Práctica 2
*/

function Portrait(title, description, url, coords = "")
{
    if (!(this instanceof Portrait)) 
    {
        throw new ConstructorInvalido();
    }

    Image.call(this, title, description, url, coords);
}

Portrait.prototype = Object.create(Image.prototype);
Portrait.prototype.constructor = Portrait;