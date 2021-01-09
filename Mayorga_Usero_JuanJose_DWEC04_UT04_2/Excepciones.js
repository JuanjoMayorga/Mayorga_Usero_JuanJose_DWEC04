/*
Juan José Mayorga Usero
CFGS Desarrollo de Aplicaciones Web
I.E.S. Maestre de Calatrava - Ciudad Real
Desarrollo Web en Entorno Cliente
UT04 Práctica 2
*/

function BaseException(message = "Default Message", fileName, lineNumber) 
{ 
	let instance = new Error(message, fileName, lineNumber); 
	instance.name = "MyError"; 
	Object.setPrototypeOf(instance, Object.getPrototypeOf(this)); 
	if(Error.captureStackTrace) 
	{ 
		Error.captureStackTrace(instance, BaseException);
	} 
	return instance; 
} 
BaseException.prototype = Object.create(Error.prototype, 
{ 
	constructor: 
	{ 
		value: BaseException, 
		enumerable: false, 
		writable: true, 
		configurable: true 
	} 
});	

function ConstructorInvalido()
{
	let instance = BaseException.call(this, "El constructor del objeto no se ha usado adecuadamente."); 
	instance.name = "ConstructorInvalido"; 
	return instance;
}
ConstructorInvalido.prototype = Object.create(BaseException.prototype); 
ConstructorInvalido.prototype.constructor = ConstructorInvalido;

function TituloVacio()
{
	let instance = BaseException.call(this, "El título no puede ser vacío."); 
	instance.name = "TituloVacio"; 
	return instance;
}
TituloVacio.prototype = Object.create(BaseException.prototype); 
TituloVacio.prototype.constructor = TituloVacio;

function DescripcionVacia()
{
	let instance = BaseException.call(this, "La descripción no puede ser vacía."); 
	instance.name = "DescripcionVacia"; 
	return instance;
}
DescripcionVacia.prototype = Object.create(BaseException.prototype); 
DescripcionVacia.prototype.constructor = DescripcionVacia;

function URLVacia()
{
	let instance = BaseException.call(this, "La URL no puede ser vacía."); 
	instance.name = "URLVacia"; 
	return instance;
}
URLVacia.prototype = Object.create(BaseException.prototype); 
URLVacia.prototype.constructor = URLVacia;

function NombreVacio()
{
	let instance = BaseException.call(this, "El nombre no puede ser vacío."); 
	instance.name = "NombreVacio"; 
	return instance;
}
NombreVacio.prototype = Object.create(BaseException.prototype); 
NombreVacio.prototype.constructor = NombreVacio;

function EmailVacio()
{
	let instance = BaseException.call(this, "El e-mail no puede ser vacío."); 
	instance.name = "EmailVacio"; 
	return instance;
}
EmailVacio.prototype = Object.create(BaseException.prototype); 
EmailVacio.prototype.constructor = EmailVacio;

function CategoriaInvalida()
{
	let instance = BaseException.call(this, "La categoría debe ser un objeto de la clase Category."); 
	instance.name = "CategoriaInvalida"; 
	return instance;
}
CategoriaInvalida.prototype = Object.create(BaseException.prototype); 
CategoriaInvalida.prototype.constructor = CategoriaInvalida;

function CategoriaNull()
{
	let instance = BaseException.call(this, "La categoría no puede ser null."); 
	instance.name = "CategoriaNull"; 
	return instance;
}
CategoriaNull.prototype = Object.create(BaseException.prototype); 
CategoriaNull.prototype.constructor = CategoriaNull;

function CategoriaExiste()
{
	let instance = BaseException.call(this, "La categoría ya existe."); 
	instance.name = "CategoriaExiste"; 
	return instance;
}
CategoriaExiste.prototype = Object.create(BaseException.prototype); 
CategoriaExiste.prototype.constructor = CategoriaExiste;

function CategoriaNoRegistrada()
{
	let instance = BaseException.call(this, "La categoría no está registrada."); 
	instance.name = "CategoriaNoRegistrada"; 
	return instance;
}
CategoriaNoRegistrada.prototype = Object.create(BaseException.prototype); 
CategoriaNoRegistrada.prototype.constructor = CategoriaNoRegistrada;

function ImagenInvalida()
{
	let instance = BaseException.call(this, "La imagen debe ser un objeto de la clase Image."); 
	instance.name = "ImagenInvalida"; 
	return instance;
}
ImagenInvalida.prototype = Object.create(BaseException.prototype); 
ImagenInvalida.prototype.constructor = ImagenInvalida;

function ImagenNull()
{
	let instance = BaseException.call(this, "La imagen no puede ser null."); 
	instance.name = "ImagenNull"; 
	return instance;
}
ImagenNull.prototype = Object.create(BaseException.prototype); 
ImagenNull.prototype.constructor = ImagenNull;

function ImagenExiste()
{
	let instance = BaseException.call(this, "La imagen ya existe."); 
	instance.name = "ImagenExiste"; 
	return instance;
}
ImagenExiste.prototype = Object.create(BaseException.prototype); 
ImagenExiste.prototype.constructor = ImagenExiste;

function ImagenNoExiste()
{
	let instance = BaseException.call(this, "La imagen no existe."); 
	instance.name = "ImagenNoExiste"; 
	return instance;
}
ImagenNoExiste.prototype = Object.create(BaseException.prototype); 
ImagenNoExiste.prototype.constructor = ImagenNoExiste;

function AutorInvalido()
{
	let instance = BaseException.call(this, "El autor debe ser un objeto de la clase Author."); 
	instance.name = "AutorInvalido"; 
	return instance;
}
AutorInvalido.prototype = Object.create(BaseException.prototype); 
AutorInvalido.prototype.constructor = AutorInvalido;

function AutorNull()
{
	let instance = BaseException.call(this, "El autor no puede ser nulo."); 
	instance.name = "AutorNull"; 
	return instance;
}
AutorNull.prototype = Object.create(BaseException.prototype); 
AutorNull.prototype.constructor = AutorNull;

function AutorNoExiste()
{
	let instance = BaseException.call(this, "El autor no existe."); 
	instance.name = "AutorNoExiste"; 
	return instance;
}
AutorNoExiste.prototype = Object.create(BaseException.prototype); 
AutorNoExiste.prototype.constructor = AutorNoExiste;

function AutorExiste()
{
	let instance = BaseException.call(this, "El autor ya existe en la galería."); 
	instance.name = "AutorExiste"; 
	return instance;
}
AutorExiste.prototype = Object.create(BaseException.prototype); 
AutorExiste.prototype.constructor = AutorExiste;

function CoordsInvalidas()
{
	let instance = BaseException.call(this, "Las coordenadas introducidas no es un objeto Coords válido."); 
	instance.name = "CoordsInvalidas"; 
	return instance;
}
CoordsInvalidas.prototype = Object.create(BaseException.prototype); 
CoordsInvalidas.prototype.constructor = CoordsInvalidas;


