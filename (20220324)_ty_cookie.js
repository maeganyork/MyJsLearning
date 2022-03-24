//----------------------------------------------------------------------------

//---------------------------------------------------------------------------
function getCookieVal(offset) {  
	try{ 
		var endstr = document.cookie.indexOf (";", offset);   
		if(endstr == -1) {   
			endstr = document.cookie.length;   
		}   
		return unescape(document.cookie.substring(offset, endstr)); 
	}
	catch(err){
		return null;
	}
}   
function getCookie(name) { 
	try{
		name=escape(name);  
		var arg = name + "=";   
		var alen = arg.length;   
		var clen = document.cookie.length;   
		var i = 0;   
		var j = 0;   
		while(i < clen) {   
			j = i + alen;       
			if(document.cookie.substring(i, j) == arg)   
				return unescape(getCookieVal(j));   
				i = document.cookie.indexOf(" ", i) + 1;   
			if(i == 0)   
				break;   
		}     
		return null;
	}
	catch(err){
		return null;
	}
}   
function deleteCookie(name) { 
	try{  
		var exp = new Date();     
		var cval = getCookie(name);     
		exp.setTime(exp.getTime() - 1);     
		document.cookie = name + "=" + cval + "; expires=" + exp.toGMTString();   
		return true;
	}
	catch(err){
		return false;
	}
}   
function setCookie(name,value,gCookieExpDays) { 

	try{
		name=escape(name);
		value=escape(value);  
		var argv = setCookie.arguments;   
		var argc = setCookie.arguments.length;   
		var exp = (argc > 2) ? argv[2] : gCookieExpDays;   
		var path = (argc > 3) ? argv[3] : null;   
		var domain = (argc > 4) ? argv[4] : null;   
		var secure = (argc > 5) ? argv[5] : false;   
		deleteCookie(name);   
		if (gCookieExpDays==0){  //cookie
			document.cookie = name + "=" + value +  
			((domain == null) ? "" : ("; domain=" + domain)) +   
			((path == null) ? "" : ("; path=" + path)) +   
			((secure == true) ? "; secure" : ""); 
		}else{//cookie
			var expires = new Date();   
			expires.setTime(expires.getTime() + (exp*24*60*60*1000));
			document.cookie = name + "=" + value +   
			"; expires=" + expires.toGMTString() +   
			((domain == null) ? "" : ("; domain=" + domain)) +   
			((path == null) ? "" : ("; path=" + path)) +   
			((secure == true) ? "; secure" : ""); 
		} 
		return true;
	}
	catch(err){
		return false;
	}
}  
