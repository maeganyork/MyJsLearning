

function SetAllTags(strclassnm,strpropertynm,strvalue){
	//this f is along;
	try{  
		var arrayOfDocFonts;        
		if (document.all || document.getElementById) {            
			arrayOfDocFonts = document.getElementsByTagName(strclassnm);        
		}    
		var objx;
		for(var i=0;i < arrayOfDocFonts.length;i++)    
		{    
			objx=eval("arrayOfDocFonts[i]." + strpropertynm + "='" + strvalue + "';");
		} 
		return true;
	}  
	catch(err){
		//alert("ERR���޷�����Ԫ������!Ҫʹ�ô�Ч��,��ʹ��IE5.0�����������");
		return false;
	}
} 
function handleAllTags(strclassnm){ 
		//this f is along;
		//strclassnm���ݵ��Ǳ�ǩ�����ͣ��磺"<div>"   
		var arrayOfDocFonts;        
		if (document.all || document.getElementById) {            
			arrayOfDocFonts = document.getElementsByTagName(strclassnm);        
		}    
		//alert("���ĵ�??��Ǹ���Ϊ��   "   +   arrayOfDocFonts.length     +   "����")    
		var tmp=0;    
		for(var i=0;i < arrayOfDocFonts.length;i++)    
		{    
			if(arrayOfDocFonts[i].id!="") {   
				alert("��ID�ǣ�" + strclassnm + "["+eval(i+1)+"].id="+arrayOfDocFonts[i].id);    
				tmp+=1;
			} 
		}    
} 
//�����������õ�����Xֵ
function getmousecurx(){
	try{
		return document.body.scrollLeft + event.clientX;
	}
	catch(err){
		return 0;
	}
}
//���ĸ������õ�����Yֵ
function getmousecury(){
	try{
		return document.body.scrollTop + event.clientY;
	}
	catch(err){
		return 0;
	}
}
//����������õ���ǰҳ����Ҫ���ݵĿ�
function getdomcurwidth(){
	try{
		return document.body.clientWidth;
	}
	catch(err){
		return 800;
	}
}
//����������õ���ǰҳ����Ҫ���ݵĿ�
function getdomcurheight(){
	try{
		return document.body.clientHeight;
	}
	catch(err){
		return 600;
	}
}
//����������,�Կ���ͨ��display�����������Ƿ���ʾ��Ԫ�ؽ���˫�����ʾ����
function letobjshowbydisplay(objnm){
	try{
		if(typeof objnm == 'string'){
			//˵�����������ַ����������������
			var obj=document.getElementById(objnm);
			if(obj.style.display=="none"){
				obj.style.display="";
			}else{
				obj.style.display="none";
			}
		}else{
			//˵���������Ƕ�����
			if(objnm.style.display=="none"){
				objnm.style.display="";
			}else{
				objnm.style.display="none";
			}
		}
		return true;
	}
	catch(err){
		//alert("ERR���޷�����Ԫ������!Ҫʹ�ô�Ч��,��ʹ��IE5.0���������,��ֻ��ʹ��IE�������");
		return false;
	}
}
//���߸�����,�Կ���ͨ��visibility�����������Ƿ���ʾ��Ԫ�ؽ���˫�����ʾ����
function letobjshowbyvisibility(objnm){
	try{
		if(typeof objnm == 'string'){
			//˵�����������ַ����������������
			var obj=document.getElementById(objnm);
			if(obj.style.visibility=="visible"){
				obj.style.visibility="hidden";
			}else{
				obj.style.visibility="visible";
			}
		}else{
			//˵���������Ƕ�����
			if(objnm.style.visibility=="visible"){
				objnm.style.visibility="hidden";
			}else{
				objnm.style.visibility="visible";
			}
		}
		return true;
	}
	catch(err){
		//alert("ERR���޷�����Ԫ������!Ҫʹ�ô�Ч��,��ʹ��IE5.0���������,��ֻ��ʹ��IE�������");
		return false;
	}
}
//--�ڰ˸��������޸ı�������STYLE���á�
			function changebackground(obj,strnewback){
				obj.background=strnewback;
			}
//����������������������������������������
			//�ÿ��߱�����ͬ��ͼƬ��������ʾ���м�
			function letpicinmiddle(strsrc,strimgnm,nmaxwidth,nmaxheight){
				var img;
				var nw,nh,nv;
				img = new Image(); 
				img.src=strsrc;
				nw=img.width;
				nh=img.height;
				if(nw==0 || nh==0){
					nw=200;
					nh=300;
				}
				nv=nw/nh;//���߱�
				myshow=document.images(strimgnm);
				if(nw<nmaxwidth && nh<nmaxheight){
					myshow.width=nw;
					myshow.height=nh;
				}else{
					if(nw>nh){
						myshow.width=nmaxwidth;
						myshow.height=nmaxwidth/nv;
					}else{
						myshow.width=nmaxheight * nv;
						myshow.height=nmaxheight;
					}
				}
				myshow.src=strsrc;
			}//����
			//letpicinmiddle(strsrc,"imgshow",550,420)
	//----------------------------------------------------------------
function previewlocalimg(imgFileinput,width,height){   
	var newPreview =document.createElement("div"); 
	if (typeof("newpreview") != "undefined"){
		document.body.removeChild(document.getElementById("newpreview"));	
	}
	document.body.appendChild(newPreview);
	newPreview.style.filter="progid:DXImageTransform.Microsoft.AlphaImageLoader(sizingMethod=scale)";    
    var url = imgFileinput.value;   
    var fileext=url.substring(url.lastIndexOf("."),url.length);      
    fileext=fileext.toLowerCase();   
    if((fileext!='.jpg')&&(fileext!='.gif')&&(fileext!='.jpeg')&&(fileext!='.png')&&(fileext!='.ico')&&(fileext!='.JPG')&&(fileext!='.GIF')&&(fileext!='.JPEG')&&(fileext!='.PNG')&&(fileext!='.ICO')){   
        alert("�Բ���ϵͳ��֧�ֱ�׼��ʽ��ͼƬ��jpg,ico,gif,png���ָ�ʽ��������������ʽ�������ϴ���");     
    }else{   
            newPreview.filters.item("DXImageTransform.Microsoft.AlphaImageLoader").src = url;   
			newPreview.id="newpreview";
            newPreview.style.width =width + "px";   
            newPreview.style.height =height + "px";    
    }   
}   
