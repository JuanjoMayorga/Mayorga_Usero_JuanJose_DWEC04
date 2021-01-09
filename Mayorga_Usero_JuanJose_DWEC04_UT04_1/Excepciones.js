/*
Juan José Mayorga Usero
CFGS Desarrollo de Aplicaciones Web
I.E.S. Maestre de Calatrava - Ciudad Real
Desarrollo Web en Entorno Cliente
UT04 Práctica 1
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

// Esta excepción nos dice si hemos intentado trabajar con un elemento que no es de la clase Book.
function ErrorNoEsBook()
{
	let instance = BaseException.call(this, "El elemento no es un Book."); 
	instance.name = "ErrorNoEsBook"; 
	return instance;
}
ErrorNoEsBook.prototype = Object.create(BaseException.prototype); 
ErrorNoEsBook.prototype.constructor = ErrorNoEsBook;

function ErrorListaLlena()
{
	let instance = BaseException.call(this, "La lista está llena. No puedes añadir más elementos."); 
	instance.name = "ErrorListaLlena"; 
	return instance;
}
ErrorListaLlena.prototype = Object.create(BaseException.prototype); 
ErrorListaLlena.prototype.constructor = ErrorListaLlena;

function ErrorIndiceFuera()
{
	let instance = BaseException.call(this, "El índice está fuera de los elementos de la lista."); 
	instance.name = "ErrorIndiceFuera"; 
	return instance;
}
ErrorIndiceFuera.prototype = Object.create(BaseException.prototype); 
ErrorIndiceFuera.prototype.constructor = ErrorIndiceFuera;

function ErrorListaVacia()
{
	let instance = BaseException.call(this, "La lista está vacía."); 
	instance.name = "ErrorListaVacia"; 
	return instance;
}
ErrorListaVacia.prototype = Object.create(BaseException.prototype); 
ErrorListaVacia.prototype.constructor = ErrorListaVacia;

// Para las listas ordenadas hay varias funciones que no tienen sentido porque se rompería el orden.
// Como las listas ordenadas heredan de la lista, lo que he hecho ha sido sobreescribir los métodos conflictivos de manera que, al invocarlos, se nos diga que esa función está deshabilitada.
function FuncionDeshabilitada()
{
	let instance = BaseException.call(this, "Esta función está deshabilitada para las listas ordenadas."); 
	instance.name = "FuncionDeshabilitada"; 
	return instance;
}
FuncionDeshabilitada.prototype = Object.create(BaseException.prototype); 
FuncionDeshabilitada.prototype.constructor = FuncionDeshabilitada;


