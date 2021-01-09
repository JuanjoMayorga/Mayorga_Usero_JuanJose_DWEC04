/*
Juan José Mayorga Usero
CFGS Desarrollo de Aplicaciones Web
I.E.S. Maestre de Calatrava - Ciudad Real
Desarrollo Web en Entorno Cliente
UT04 Práctica 2
*/

function Author(nickname, email, avatar = "")
{
    if (!(this instanceof Author)) 
    {
        throw new ConstructorInvalido();
    }

    if(!nickname)
    {
        throw new NombreVacio();
    }
    if(!email)
    {
        throw new EmailVacio();
    }

	let _nickname = nickname;
    let _email = email;
    let _avatar = avatar;

	Object.defineProperty(this, 'nickname', 
	{ 
		get:function()
		{ 
			return _nickname; 
		}, 
		set:function(value)
		{ 
            if (!value)
            {
                throw new TituloVacio();
            } 
			_nickname = value;
		}
    });
    
    Object.defineProperty(this, 'email', 
	{ 
		get:function()
		{ 
			return _email; 
		}, 
		set:function(value)
		{ 
            if (!value)
            {
                throw new EmailVacio();
            } 
			_email = value;
		}
    });

	Object.defineProperty(this, 'avatar', 
	{ 
		get:function()
		{ 
			return _avatar; 
		}, 
		set:function(value)
		{ 
			_avatar = value;
		}
	});
}

Author.prototype.constructor = Author;