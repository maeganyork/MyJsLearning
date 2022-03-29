      var zIndex_x = 6;
	  var clonetop=0;
	  var cloneleft=0;
	  var max_x=document.documentElement.clientWidth-20;
	  var min_x=0;
	  var objcurleftobj=null;
	  var objcurhuadongdivvalue=null;
	  
	  
	  function drag_x(oDrag) {
        var disX = 0;
		var lsleft=cloneleft;
        oDrag.onmousedown = function(event) {
          var event = event || window.event;
          disX = event.clientX - this.offsetLeft;

	  	  var oTemp = this.cloneNode(true);
          document.body.appendChild(oTemp);
		  
		  var ismove=false;
          document.onmousemove = function(event) {
            var event = event || window.event;
			var iL = event.clientX - disX;
            var maxL = max_x;

            iL <= min_x && (iL = min_x);
            iL >= maxL && (iL = maxL);
            oTemp.style.zIndex = zIndex_x++;
            oTemp.style.opacity = "0.5";
            oTemp.style.filter = "alpha(opacity=50)";

			oTemp.style.left = (iL + lsleft) + "px";
			
			ismove=true;
			
			//alert(clonetop);
			oTemp.style.top=clonetop + "px";
            return false;
          };

          document.onmouseup = function() {
            document.onmousemove = null;
            document.onmouseup = null;
            oDrag.style.opacity = oTemp.style.opacity;
			//alert(oTemp.offsetLeft + "--" + lsleft);
			if(ismove==false){
				lsleft=0;	
			}
            var arr = {
              left:oTemp.offsetLeft - lsleft
            };
			lsleft=cloneleft;
            oDrag.style.zIndex = oTemp.style.zIndex;
            oAnimate(oDrag, arr, 300,
            function(){
              document.body.removeChild(oTemp);
            });
            oDrag.releaseCapture && oDrag.releaseCapture()
          };
		  //oDrag.onmouseup=function(){
			//oDrag.releaseCapture && oDrag.releaseCapture();
			//oDrag.onmousedouwn=null;
			//oDrag.onmouseup=null;
			//disX = 0;
	   		//clonetop=0;
	   		//cloneleft=0;
			//alert(oDrag.offsetLeft);
		  //}

          this.setCapture && this.setCapture();
          return false
        }
      }
	  
	  
      function oAnimate(obj, params, time, handler) {
        var node = typeof obj == "string" ? document.getElementById(obj) : obj;
        var _style = node.currentStyle ? node.currentStyle: window.getComputedStyle(node, null);
        var handleFlag = true;
        for (var p in params) { (function() {
            var n = p;
            if (n == "left" || n == "top") {
              var _old = parseInt(_style[n]);
              var _new = parseInt(params[n]);
              var _length = 0,
              _tt = 10;
              if (!isNaN(_old)) {
                var count = _old;
                var length = _old <= _new ? (_new - _old) : (_old - _new);
                var speed = length / time * _tt;
                var flag = 0;
				node.style.opacity = "1";
				node.style.filter = "alpha(opacity=100)";
                var anim = setInterval(function() {
                  node.style[n] = count + "px";
                  count = _old <= _new ? count + speed: count - speed;
                  flag += _tt;
                  if (flag >= time) {
					  	if(_new<0){_new=0;}
                    node.style[n] = _new + "px";
					try{
						if(objcurleftobj!=null){
							objcurleftobj.value=_new;
						}
						if(objcurhuadongdivvalue!=null){
							objcurhuadongdivvalue.value=node.id;
						}
					}catch(err){
					}
                    clearInterval(anim);
                    if (handleFlag) {
                      handler();
                      handleFlag = false;
                    }
                  }
                },
                _tt);
              }

            }
          })();
        }
      }

