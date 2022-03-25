      var zIndex = 6;
	  function drag(oDrag) {
        var disX = dixY = 0;
        oDrag.onmousedown = function(event) {
          var event = event || window.event;
          disX = event.clientX - this.offsetLeft;
          disY = event.clientY - this.offsetTop;

          var oTemp = this.cloneNode(true);
          document.body.appendChild(oTemp);

          document.onmousemove = function(event) {
            var event = event || window.event;
            var iL = event.clientX - disX;
            var iT = event.clientY - disY;
            var maxL = document.documentElement.clientWidth - oDrag.offsetWidth;
            var maxT = document.documentElement.clientHeight - oDrag.offsetHeight;

            iL <= 0 && (iL = 0);
            iT <= 0 && (iT = 0);
            iL >= maxL && (iL = maxL);
            iT >= maxT && (iT = maxT);
            oTemp.style.zIndex = zIndex++;
            oTemp.style.opacity = "0.5";
            oTemp.style.filter = "alpha(opacity=50)";
            oTemp.style.left = iL + "px";
            oTemp.style.top = iT + "px";
            return false;
          };

          document.onmouseup = function() {
            document.onmousemove = null;
            document.onmouseup = null;
            oDrag.style.opacity = oTemp.style.opacity;
            var arr = {
              left: oTemp.offsetLeft,
              top: oTemp.offsetTop
            };
            oDrag.style.zIndex = oTemp.style.zIndex;
            oAnimate(oDrag, arr, 300,
            function() {
              document.body.removeChild(oTemp);
            });
            oDrag.releaseCapture && oDrag.releaseCapture()
          };

          this.setCapture && this.setCapture();
          return false
        }
      }
      function oAnimate(obj, params, time, handler) {
        var node = typeof obj == "string" ? $(obj) : obj;
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
                var anim = setInterval(function() {
                  node.style[n] = count + "px";
                  count = _old <= _new ? count + speed: count - speed;
                  flag += _tt;
                  if (flag >= time) {
                    node.style[n] = _new + "px";
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

