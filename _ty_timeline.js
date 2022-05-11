// JavaScript Document
	//=====Time LINE================================================
	//===========================================================
	var intparent2height=0;
	function timelineautoreplace(strpre,nc){
		try{
			var line;
			var leftbox;
			var rightbox;
			var arrow=document.getElementById(strpre + "arrow");
			var lineend=document.getElementById(strpre + "lineend");
			var i=1;
			var nl=0;
			var nb=0;
			for (i=1;i<=nc;i++){
				line=document.getElementById(strpre + "line" + i);
				leftbox=document.getElementById(strpre + "left" + i);
				rightbox=document.getElementById(strpre + "right" + i);
				if (i>1){
					nl=(i-1)*110+52;
				}else{
					nl=52;
				}
				line.style.top=nl + "px";
				nk=nl+ 105 -30;
				leftbox.style.top=nk + "px";
				nk=nl + 105 - 40;
				rightbox.style.top=nk + "px";
			}
			nl=((nc-1) * (100) + nc * 10 + 152);
			lineend.style.top=nl + "px";
			arrow.style.top=(nl + 100) + "px";
			arrow.parentNode.style.height=(nl +100) + "px";
			var stroldh=arrow.parentNode.parentNode.style.height;
			stroldh=stroldh.substring(0,stroldh.length-2);
			if(stroldh==""){
				intparent2height=0;
			}else
			{
				intparent2height=stroldh-0;
			}
			if (intparent2height<nl+180){
				arrow.parentNode.parentNode.style.height=(nl +180) + "px";
			}
		}catch(err){
			alert(err);
		}
	}
	
	function gettimecount(index){
		try{
			var obj=document.getElementsByTagName("div");
			var nc=obj.length;
			var j=0;
			var strls="";
			if(nc>0){
				var i=0;
				for(i=0;i<nc;i++){
					if(obj[i].className=="divtimelinelefttime"){
						strls=obj[i].id;
						strls=strls.substring(0,11);
						if (strls.toLowerCase()=="time_" + index + "_left"){
							j=j+1;
						}
					}
				}
				return j;
			}else{
				return 0;	
			}
		}catch(err){
			return 0;
		}
	}
	
	function timeallautoreplace(){
		try{
			var i=0;
			var nc=0;
			for (i=1;i<=9;i++){
				nc=gettimecount(i);
				//alert("i=" + i + "---nc=" + nc);
				if(nc>0){
					timelineautoreplace("time_" + i + "_",nc);	
				}
				nc=0;
			}
		}catch(err){
			alert(err);
		}
	}
