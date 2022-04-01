//This document does not depend on other files. Can be operated independently.
//---------------------------------------------------------------------------

		var strmsgstyle="menubar:no,directions:no,status:no,scrollbar:no,revisable:no";
//==================================================================
//String
//=================================================================
		function Ltrim(str)
		{
			var i;
			for(i=0;i<str.length;i++)
			{
				if(str.charAt(i)!=" "&&str.charAt(i)!="\t")break;
			}
			str=str.substring(i,str.length);
			return str;
		}
//============================================================
		function Rtrim(str)
		{
			var i;
			for(i=str.length-1;i>=0;i--)
			{
				if(str.charAt(i)!=" "&&str.charAt(i)!="\t")break;
			}
			str=str.substring(0,i+1);
			return str;
		}
//==========================================================
		function trim(str)
		{
			return Ltrim(Rtrim(str));
		}
//============================================================
		function mid(str,nstart,nlen){
			
			if(str.length<nlen) return str;
			if (nstart==0 ) nstart=1;
			var strls;
			if (nstart-1 + nlen>str.length){
				strls=str.substring(nstart-1,str.length);
			}else{
				strls=str.substring(nstart-1,nstart-1+nlen);
			}
			strls=trim(strls)
			return strls
		}
//================================================
		function left(str,nlen){
			
			if (str.length<nlen) return str;
			if (nlen==0) return str;
			var strls;
			strls=mid(str,1,nlen);
			return strls;
		}
//=====================================================		
		function right(str,nlen){
			
			if (str.length<nlen) return str;
			if (nlen==0) return str;
			var strls;
			strls=mid(str,(str.length-nlen+1),nlen);
			return strls;
		}
//==========================================================
		function instr(str,strfind,nstart){
			
			if (strfind.length>str.length) return 0;
			var ncannumber=instr.arguments.length;
			if (ncannumber<3) nstart=1;
			if (nstart=0) nstart=1;
			return str.indexOf(strfind,nstart-1)+1;
		}
//==============================================================
			function replacestring(strin,str1,str2){
				
				var re=eval("/" + str1 + "/g");
				return strin.replace(re,str2);
			}
			//========================================
			function replacestringall(strin,str1,str2){
				try{
					var intls=instr(strin,str1);
					var strls=strin;
					//alert(intls);
					while(intls>0){
						strls=strls.replace(str1,str2);
						intls=instr(strls,str1);
						//alert(intls);
					}
					return strls;
				}catch(err){
					//alert(err.description);
					return strin;
				}
			}
//=============================================================
    
function getmidstring(strIN, strChar, strChar2, isInc){
    try{
        if(strIN == "" || strChar == ""){
			return "";	
		}
        //---------------------------------------
        var strLSLSLS;
        strLSLSLS = strChar;
        if(strChar == "$"){
			strChar = left(strIN, 1);
		}
        var i;
		var j;
		var k;
		var m;
        i = instr(strIN, strChar)
        if(i == 0){
			return "";
		}
        //------------------
        k = strChar.length; 
        var strLS;
        strLS = right(strIN, strIN.length - (i + k - 1));
        if(strChar2 == ""){
            j = instr(strLS, strChar);
            if(j == 0){
				return "";
			}
            j = j + k + i - 1;
            m = k; 
		}else{
            if(strChar2 == "$"){ 
                j = strIN.length; 
                m = 1; 
			}else{
                j = instr(strLS, strChar2);
                if(j == 0){
					return "";	
				}
                j = j + k + i - 1;
                m = strChar2.length;
			}
		}
        if(j == 0){ return ""; }
        //------------------
        if(isInc == true){
            if(strChar2 == "$"){ 
                return strChar + strLS;
			}else{
                return mid(strIN, i, j - i + m);
			}
		}else{
            if (strLSLSLS == "$"){
                return left(strIN, 1) + mid(strIN, i + k, j - i - k);
			}else{
                if (strChar2 == "$"){
                    return mid(strIN, i + k, j - i - k) + right(strIN, 1);
				}else{
                    return mid(strIN, i + k, j - i - k);
				}
			}
		}
    //-----------------------------
	}catch(err){
		alert(err.description);
		return "";
	}
}
