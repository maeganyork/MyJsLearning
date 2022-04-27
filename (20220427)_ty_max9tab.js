// JavaScript Document
	function iselementnullfordivtab(elemexpress) {
    	try {
        	eval(elemexpress);
			var k=obj.id;
        	return true;
    	}
    	catch (err) {
        	return false;
    	}
	}
	//----------------------------------------
	function divtab_changetab(index,count){
		try{
			var i=0;
			var tabcur=document.getElementById("divtab" + index);
			var tabcurdiv=document.getElementById("divtabcontent" + index);
			//--------------------------------------------------
			//tabcur.style.borderBottomWidth="0px";
			tabcur.style.backgroundColor="#e0fce3";
			tabcur.style.color="#AA0000";
			tabcur.style.fontWeight="bold";
			tabcurdiv.style.display="block";
			//--------------------------------------------------
			var tabother;
			var tabotherdiv;
			for (i=1;i<=count;i++){
				if (i!=index){
					tabother=document.getElementById("divtab" + i);
					tabotherdiv=document.getElementById("divtabcontent" + i);
					//------------------------------------------------------
					//tabother.style.borderBottomWidth="0px";
					tabother.style.backgroundColor="#007F00";
					tabother.style.color="#FFFBF0";
					tabother.style.fontWeight="normal";
					tabotherdiv.style.display="none";
					//------------------------------------------------------
				}
			}
		}catch(err){
		}
	}
	//---------------------------------------
	var intcount=0;
	function divtabsel(obj){
		try{
			var strls=obj.id;
			var intls=strls.length;
			strls=strls.substr(intls-1);
			intls=strls-0;
			//alert(intls);
			//---------------------------
			if (intcount==0){
				var i=1;
				var j=0;
				for(i=1;i<10;i++){
					if (iselementnullfordivtab("var obj=document.getElementById('divtab' + " + i + ");")==true)	{
						j++;
					}else{
						break;
					}
				}
				if(j>0){
					intcount=j;
				}else{
					intcount=2;
				}
			}
			//alert(intcount);
			//------------------------
			divtab_changetab(intls,intcount);
			//--------------------------
		}catch(err){
			
		}
	}
