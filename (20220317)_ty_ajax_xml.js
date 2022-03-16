
//xmlhttp
	//create xmlhttp object
		function createRequest() {
			try {
				var objXML;
				objXML = new XMLHttpRequest();
				//return objXML;
			} catch (trymicrosoft) {
				try {
						objXML = new ActiveXObject("Msxml2.XMLHTTP");
						//return objXML;
					} catch (othermicrosoft) {
						try {
							objXML = new ActiveXObject("Microsoft.XMLHTTP");
							//return objXML;
						} catch (failed) {
							objXML = false;
							//return objXML;
						}
					}
			}
			 if (!objXML){
				alert("Error initializing XMLHttpRequest!");
			}
			return objXML;
		}
		//--------------------------------
		//GET-text/plain
		function ajaxsendtextbyget(objx,strurl,strfunction){
			objx.open("GET", strurl, true);
			objx.setRequestHeader("Content-Type", "text/plain");
			objx.onreadystatechange=eval(strfunction);
			objx.send(null);
		}
		//POST-text/plain
		function ajaxsendtextbypost(objx,strurl,strlist,strfunction){
			objx.open("POST", strurl, true);
			objx.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
			objx.onreadystatechange=eval(strfunction);
			objx.send(strlist);
		}
		//POST text/xml
		function ajaxsendxmlbypost(objx,strurl,strxml,strfunction){
			objx.open("POST", strurl, true);
			objx.setRequestHeader("Content-Type", "text/xml");
			objx.onreadystatechange=eval(strfunction);
			objx.send(strxml);
		}
		//-------------------------
		//-------------------------
