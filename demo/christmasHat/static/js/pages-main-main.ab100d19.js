(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-main-main"],{1659:function(t,e,n){"use strict";var r=n("288e");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=r(n("795b"));n("96cf");var o=r(n("3b8d"));n("28a5");var i=r(n("cebc")),s=n("2f62"),c={data:function(){return{showCanvas:!1,imgUrl:"",defaultHatWidth:100,defaultHatHeight:100,canvasTempFilePath:"",hatTop:140,hatLeft:140,currentHatTop:"",currentHatLeft:"",rotateTop:0,rotateLeft:0,beforeAngel:45,currentRotateTop:"",currentRotateLeft:"",hatScale:1,hatRotate:0,touchTarget:"",currentPos:{x:"",y:""}}},computed:(0,i.default)({},(0,s.mapState)(["forcedLogin","hasLogin","openId","userInfo"]),{avatarHd:function(){return this.imgUrl?this.imgUrl:this.userInfo.avatarUrl?this.userInfo.avatarUrl:void 0},hatHalfWidth:function(){return this.defaultHatWidth/2},hatRadius:function(){return Math.sqrt(2*this.hatHalfWidth*this.hatHalfWidth)},hatStyleStr:function(){return"transform:translate(".concat(this.hatLeft,"px,").concat(this.hatTop,"px)")},hatImgStyleStr:function(){return"transform:scale(".concat(this.hatScale,") rotate(").concat(this.hatRotate,"deg)")},rotateStyleStr:function(){return"transform:translate(".concat(this.rotateLeft,"px,").concat(this.rotateTop,"px)")}}),onLoad:function(){},methods:(0,i.default)({},(0,s.mapMutations)(["setOpenId","setUserInfo"]),{getHdUrl:function(t){var e=t.split("/");return e[e.length-1]=0,e=e.join("/"),e},handleTouchStart:function(t){this.currentHatTop=this.hatTop,this.currentHatLeft=this.hatLeft,this.currentRotateLeft=this.rotateLeft,this.currentRotateTop=this.rotateTop,this.touchTarget=t.target.id,this.currentPos={x:t.touches[0].clientX,y:t.touches[0].clientY}},handleTouchMove:function(t){if(t.preventDefault(),this.touchTarget){var e={x:t.touches[0].clientX,y:t.touches[0].clientY},n=e.x-this.currentPos.x,r=e.y-this.currentPos.y;if("hat"===this.touchTarget)this.hatLeft=this.hatLeft+n,this.hatTop=this.hatTop+r;else if("rotate"===this.touchTarget){this.rotateLeft=this.rotateLeft+n,this.rotateTop=this.rotateTop+r;var a=this.rotateLeft+this.hatHalfWidth,o=this.rotateTop+this.hatHalfWidth,i=Math.sqrt(a*a+o*o);this.hatScale=i/this.hatRadius;var s=Math.atan2(o,a)/Math.PI*180;this.hatRotate=s-this.beforeAngel+this.hatRotate,this.beforeAngel=s}this.currentPos=e}},handleTouchEnd:function(t){this.touchTarget=""},onGetUserInfo:function(t){this.setUserInfo(t.detail.userInfo)},onH5GetUserInfo:function(){this.setUserInfo({avatarUrl:"../../static/img/avatar.jpeg"})},onAliGetUserInfo:function(){var t=this;my.getAuthCode({scopes:"auth_user",success:function(e){uni.getUserInfo({success:function(e){t.setUserInfo(e.userInfo),console.log(e.userInfo.avatarUrl)},fail:function(t){console.error(t)}})}})},getSetting:function(){var t=this;uni.getSetting({success:function(e){console.log(e),e.authSetting["scope.userInfo"]&&uni.getUserInfo({success:function(e){console.log(e),t.setUserInfo(e.userInfo)}})}})},getOpenid:function(){var t=this;wx.cloud&&wx.cloud.callFunction({name:"login",data:{},success:function(e){console.log("[云函数] [login] user openid: ",e.result.openid),t.setOpenId(e.result.openid),console.log(t.openId)},fail:function(t){console.error("[云函数] [login] 调用失败",t)}})},uploadAvatar:function(){var t=this;uni.showLoading({title:"上传中"}),uni.chooseImage({count:1,sizeType:["compressed"],sourceType:["album"],success:function(e){uni.hideLoading();var n=e.tempFilePaths[0];t.imgUrl=n},fail:function(t){uni.hideLoading(),console.error(t)}})},drawCanvas:function(){var t=(0,o.default)(regeneratorRuntime.mark(function t(){var e,n,r,a;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return this.showCanvas=!0,uni.showLoading({title:"正在生成图片"}),t.next=4,this.getImagePath();case 4:e=t.sent,n=uni.getSystemInfoSync().windowWidth,console.log(e),console.log(n),r=uni.createCanvasContext("avatarCanvas"),a=2*this.hatHalfWidth*this.hatScale,r.clearRect(0,0,n,n),r.drawImage(e,0,0,n,n),r.translate(this.hatLeft+this.hatHalfWidth,this.hatTop+this.hatHalfWidth),r.rotate(this.hatRotate*Math.PI/180),console.log(-a/2),r.drawImage("../../static/img/hat.png",-a/2,-a/2,a,a),r.draw(),uni.hideLoading();case 18:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),getImagePath:function(){var t=this;return new a.default(function(e,n){t.imgUrl&&e(t.imgUrl),uni.getImageInfo({src:t.avatarHd,success:function(t){console.log(t.path),e(t.path)}})})},saveAvatar:function(){uni.canvasToTempFilePath({x:0,y:0,width:uni.getSystemInfoSync().windowWidth,height:uni.getSystemInfoSync().windowWidth,canvasId:"avatarCanvas",success:function(t){uni.saveImageToPhotosAlbum({filePath:t.tempFilePath,success:function(){uni.showToast({title:"已保存到相册"}),console.log("save success")}})}})}})};e.default=c},"3b8d":function(t,e,n){"use strict";n.r(e),n.d(e,"default",function(){return i});var r=n("795b"),a=n.n(r);function o(t,e,n,r,o,i,s){try{var c=t[i](s),u=c.value}catch(h){return void n(h)}c.done?e(u):a.a.resolve(u).then(r,o)}function i(t){return function(){var e=this,n=arguments;return new a.a(function(r,a){var i=t.apply(e,n);function s(t){o(i,r,a,s,c,"next",t)}function c(t){o(i,r,a,s,c,"throw",t)}s(void 0)})}}},"457a":function(t,e,n){"use strict";var r=n("c452"),a=n.n(r);a.a},7229:function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"content",attrs:{"disable-scroll":!0}},[n("v-uni-view",{staticClass:"userinfo"},[t.userInfo.avatarUrl?n("v-uni-view",{staticClass:"user-show"},[n("v-uni-image",{staticClass:"user-avatar",attrs:{src:t.avatarHd}}),n("v-uni-view",{staticClass:"user-hat",style:t.hatStyleStr,on:{touchstart:function(e){arguments[0]=e=t.$handleEvent(e),t.handleTouchStart.apply(void 0,arguments)},touchmove:function(e){e.stopPropagation(),arguments[0]=e=t.$handleEvent(e),t.handleTouchMove.apply(void 0,arguments)}}},[n("v-uni-image",{staticClass:"hat",style:t.hatImgStyleStr,attrs:{id:"hat",src:"../../static/img/hat.png"}}),n("v-uni-view",{staticClass:"rotate",style:t.rotateStyleStr,attrs:{id:"rotate"}},[n("v-uni-image",{staticClass:"rotate-icon",attrs:{id:"rotate",src:"../../static/img/icon-rotate.png"}})],1)],1)],1):t._e()],1),n("v-uni-view",{staticClass:"user-buttons"},[t.userInfo.avatarUrl?t._e():n("v-uni-button",{attrs:{type:"primary"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.onH5GetUserInfo.apply(void 0,arguments)}}},[t._v("获取头像")]),t.userInfo.avatarUrl?n("v-uni-button",{attrs:{type:"primary"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.drawCanvas.apply(void 0,arguments)}}},[t._v("生成头像")]):t._e()],1),n("v-uni-view",{staticClass:"canvas-modal",class:{show:t.showCanvas}},[n("v-uni-canvas",{staticClass:"canvas-avatar",attrs:{id:"avatarCanvas","canvas-id":"avatarCanvas"}}),n("v-uni-view",{staticClass:"user-buttons"},[n("v-uni-button",{on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.showCanvas=!1}}},[t._v("返回")]),n("v-uni-button",{attrs:{type:"primary"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.saveAvatar.apply(void 0,arguments)}}},[t._v("保存到相册")])],1)],1)],1)},a=[];n.d(e,"a",function(){return r}),n.d(e,"b",function(){return a})},"800e":function(t,e,n){"use strict";n.r(e);var r=n("1659"),a=n.n(r);for(var o in r)"default"!==o&&function(t){n.d(e,t,function(){return r[t]})}(o);e["default"]=a.a},"962f":function(t,e,n){"use strict";n.r(e);var r=n("7229"),a=n("800e");for(var o in a)"default"!==o&&function(t){n.d(e,t,function(){return a[t]})}(o);n("457a");var i=n("2877"),s=Object(i["a"])(a["default"],r["a"],r["b"],!1,null,"2c41e5c7",null);e["default"]=s.exports},"96cf":function(t,e){!function(e){"use strict";var n,r=Object.prototype,a=r.hasOwnProperty,o="function"===typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",s=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag",u="object"===typeof t,h=e.regeneratorRuntime;if(h)u&&(t.exports=h);else{h=e.regeneratorRuntime=u?t.exports:{},h.wrap=b;var l="suspendedStart",f="suspendedYield",d="executing",p="completed",v={},g={};g[i]=function(){return this};var y=Object.getPrototypeOf,m=y&&y(y(H([])));m&&m!==r&&a.call(m,i)&&(g=m);var w=T.prototype=L.prototype=Object.create(g);I.prototype=w.constructor=T,T.constructor=I,T[c]=I.displayName="GeneratorFunction",h.isGeneratorFunction=function(t){var e="function"===typeof t&&t.constructor;return!!e&&(e===I||"GeneratorFunction"===(e.displayName||e.name))},h.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,T):(t.__proto__=T,c in t||(t[c]="GeneratorFunction")),t.prototype=Object.create(w),t},h.awrap=function(t){return{__await:t}},S(k.prototype),k.prototype[s]=function(){return this},h.AsyncIterator=k,h.async=function(t,e,n,r){var a=new k(b(t,e,n,r));return h.isGeneratorFunction(e)?a:a.next().then(function(t){return t.done?t.value:a.next()})},S(w),w[c]="Generator",w[i]=function(){return this},w.toString=function(){return"[object Generator]"},h.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){while(e.length){var r=e.pop();if(r in t)return n.value=r,n.done=!1,n}return n.done=!0,n}},h.values=H,P.prototype={constructor:P,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=n,this.done=!1,this.delegate=null,this.method="next",this.arg=n,this.tryEntries.forEach(U),!t)for(var e in this)"t"===e.charAt(0)&&a.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=n)},stop:function(){this.done=!0;var t=this.tryEntries[0],e=t.completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function r(r,a){return s.type="throw",s.arg=t,e.next=r,a&&(e.method="next",e.arg=n),!!a}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],s=i.completion;if("root"===i.tryLoc)return r("end");if(i.tryLoc<=this.prev){var c=a.call(i,"catchLoc"),u=a.call(i,"finallyLoc");if(c&&u){if(this.prev<i.catchLoc)return r(i.catchLoc,!0);if(this.prev<i.finallyLoc)return r(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return r(i.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return r(i.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var r=this.tryEntries[n];if(r.tryLoc<=this.prev&&a.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var o=r;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=t,i.arg=e,o?(this.method="next",this.next=o.finallyLoc,v):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),v},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),U(n),v}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var a=r.arg;U(n)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:H(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=n),v}}}function b(t,e,n,r){var a=e&&e.prototype instanceof L?e:L,o=Object.create(a.prototype),i=new P(r||[]);return o._invoke=E(t,n,i),o}function x(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(r){return{type:"throw",arg:r}}}function L(){}function I(){}function T(){}function S(t){["next","throw","return"].forEach(function(e){t[e]=function(t){return this._invoke(e,t)}})}function k(t){function e(n,r,o,i){var s=x(t[n],t,r);if("throw"!==s.type){var c=s.arg,u=c.value;return u&&"object"===typeof u&&a.call(u,"__await")?Promise.resolve(u.__await).then(function(t){e("next",t,o,i)},function(t){e("throw",t,o,i)}):Promise.resolve(u).then(function(t){c.value=t,o(c)},function(t){return e("throw",t,o,i)})}i(s.arg)}var n;function r(t,r){function a(){return new Promise(function(n,a){e(t,r,n,a)})}return n=n?n.then(a,a):a()}this._invoke=r}function E(t,e,n){var r=l;return function(a,o){if(r===d)throw new Error("Generator is already running");if(r===p){if("throw"===a)throw o;return j()}n.method=a,n.arg=o;while(1){var i=n.delegate;if(i){var s=_(i,n);if(s){if(s===v)continue;return s}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(r===l)throw r=p,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r=d;var c=x(t,e,n);if("normal"===c.type){if(r=n.done?p:f,c.arg===v)continue;return{value:c.arg,done:n.done}}"throw"===c.type&&(r=p,n.method="throw",n.arg=c.arg)}}}function _(t,e){var r=t.iterator[e.method];if(r===n){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=n,_(t,e),"throw"===e.method))return v;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return v}var a=x(r,t.iterator,e.arg);if("throw"===a.type)return e.method="throw",e.arg=a.arg,e.delegate=null,v;var o=a.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=n),e.delegate=null,v):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,v)}function C(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function U(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function P(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(C,this),this.reset(!0)}function H(t){if(t){var e=t[i];if(e)return e.call(t);if("function"===typeof t.next)return t;if(!isNaN(t.length)){var r=-1,o=function e(){while(++r<t.length)if(a.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=n,e.done=!0,e};return o.next=o}}return{next:j}}function j(){return{value:n,done:!0}}}(function(){return this||"object"===typeof self&&self}()||Function("return this")())},c452:function(t,e,n){var r=n("c8c5");"string"===typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);var a=n("4f06").default;a("7f051e5a",r,!0,{sourceMap:!1,shadowMode:!1})},c8c5:function(t,e,n){e=t.exports=n("2350")(!1),e.push([t.i,".content[data-v-2c41e5c7]{background-color:#fff}.user-show[data-v-2c41e5c7]{display:block;text-align:center;position:relative}.user-avatar[data-v-2c41e5c7]{display:block;width:100vw;height:100vw;background-repeat:no-repeat}.user-hat[data-v-2c41e5c7]{position:absolute;top:0;left:0;height:104px;width:104px}.user-hat .hat[data-v-2c41e5c7]{width:100px;height:100px;border:dashed 2px #bbb7b7}.user-hat .rotate[data-v-2c41e5c7]{width:20px;height:20px;padding:5px;position:absolute;right:-15px;bottom:-15px;background-color:#d81e06;border-radius:50%}.user-hat .rotate .rotate-icon[data-v-2c41e5c7]{width:20px;height:20px}.user-nick[data-v-2c41e5c7]{display:block;text-align:center}.user-buttons[data-v-2c41e5c7]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;padding-top:20px}.user-buttons uni-button[data-v-2c41e5c7]{display:block;margin:0 8px;width:auto}.canvas-modal[data-v-2c41e5c7]{width:100%;height:100%;position:absolute;display:none;top:0;left:0;background-color:#fff}.canvas-modal.show[data-v-2c41e5c7]{display:block}.canvas-avatar[data-v-2c41e5c7]{width:100vw;height:100vw;margin:0 auto;border-radius:4px}.center-point[data-v-2c41e5c7]{position:absolute;top:50%;left:50%;width:6px;height:6px;background-color:red;margin-left:-3px;margin-top:-3px}",""])}}]);