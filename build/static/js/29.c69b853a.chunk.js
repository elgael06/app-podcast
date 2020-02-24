(this["webpackJsonpapp-podcast"]=this["webpackJsonpapp-podcast"]||[]).push([[29],{158:function(t,e,r){"use strict";r.r(e),r.d(e,"ion_toast",(function(){return h}));var o=r(2),n=r(34),i=(r(10),r(26),r(24)),a=r(28),s=r(168),c=r(169),l=function(t,e){var r=Object(i.a)(),o=Object(i.a)(),n=t.host||t,a=t.querySelector(".toast-wrapper");switch(o.addElement(a),e){case"top":o.fromTo("transform","translateY(-100%)","translateY(calc(10px + var(--ion-safe-area-top, 0px)))");break;case"middle":var s=Math.floor(n.clientHeight/2-a.clientHeight/2);a.style.top=s+"px",o.fromTo("opacity",.01,1);break;default:o.fromTo("transform","translateY(100%)","translateY(calc(-10px - var(--ion-safe-area-bottom, 0px)))")}return r.addElement(n).easing("cubic-bezier(.155,1.105,.295,1.12)").duration(400).addAnimation(o)},d=function(t,e){var r=Object(i.a)(),o=Object(i.a)(),n=t.host||t,a=t.querySelector(".toast-wrapper");switch(o.addElement(a),e){case"top":o.fromTo("transform","translateY(calc(10px + var(--ion-safe-area-top, 0px)))","translateY(-100%)");break;case"middle":o.fromTo("opacity",.99,0);break;default:o.fromTo("transform","translateY(calc(-10px - var(--ion-safe-area-bottom, 0px)))","translateY(100%)")}return r.addElement(n).easing("cubic-bezier(.36,.66,.04,1)").duration(300).addAnimation(o)},u=function(t,e){var r=Object(i.a)(),o=Object(i.a)(),n=t.host||t,a=t.querySelector(".toast-wrapper");switch(o.addElement(a),e){case"top":a.style.top="calc(8px + var(--ion-safe-area-top, 0px))",o.fromTo("opacity",.01,1);break;case"middle":var s=Math.floor(n.clientHeight/2-a.clientHeight/2);a.style.top=s+"px",o.fromTo("opacity",.01,1);break;default:a.style.bottom="calc(8px + var(--ion-safe-area-bottom, 0px))",o.fromTo("opacity",.01,1)}return r.addElement(n).easing("cubic-bezier(.36,.66,.04,1)").duration(400).addAnimation(o)},p=function(t){var e=Object(i.a)(),r=Object(i.a)(),o=t.host||t,n=t.querySelector(".toast-wrapper");return r.addElement(n).fromTo("opacity",.99,0),e.addElement(o).easing("cubic-bezier(.36,.66,.04,1)").duration(300).addAnimation(r)},h=function(){function t(t){var e=this;Object(n.k)(this,t),this.presented=!1,this.mode=Object(n.d)(this),this.duration=0,this.keyboardClose=!1,this.position="bottom",this.translucent=!1,this.animated=!0,this.dispatchCancelHandler=function(t){var r=t.detail.role;if(Object(a.j)(r)){var o=e.getButtons().find((function(t){return"cancel"===t.role}));e.callButtonHandler(o)}},Object(a.e)(this.el),this.didPresent=Object(n.e)(this,"ionToastDidPresent",7),this.willPresent=Object(n.e)(this,"ionToastWillPresent",7),this.willDismiss=Object(n.e)(this,"ionToastWillDismiss",7),this.didDismiss=Object(n.e)(this,"ionToastDidDismiss",7)}return t.prototype.present=function(){return Object(o.a)(this,void 0,void 0,(function(){var t=this;return Object(o.c)(this,(function(e){switch(e.label){case 0:return[4,Object(a.f)(this,"toastEnter",l,u,this.position)];case 1:return e.sent(),this.duration>0&&(this.durationTimeout=setTimeout((function(){return t.dismiss(void 0,"timeout")}),this.duration)),[2]}}))}))},t.prototype.dismiss=function(t,e){return this.durationTimeout&&clearTimeout(this.durationTimeout),Object(a.g)(this,t,e,"toastLeave",d,p,this.position)},t.prototype.onDidDismiss=function(){return Object(a.h)(this.el,"ionToastDidDismiss")},t.prototype.onWillDismiss=function(){return Object(a.h)(this.el,"ionToastWillDismiss")},t.prototype.getButtons=function(){return this.buttons?this.buttons.map((function(t){return"string"===typeof t?{text:t}:t})):[]},t.prototype.buttonClick=function(t){return Object(o.a)(this,void 0,void 0,(function(){var e;return Object(o.c)(this,(function(r){switch(r.label){case 0:return e=t.role,Object(a.j)(e)?[2,this.dismiss(void 0,e)]:[4,this.callButtonHandler(t)];case 1:return r.sent()?[2,this.dismiss(void 0,e)]:[2,Promise.resolve()]}}))}))},t.prototype.callButtonHandler=function(t){return Object(o.a)(this,void 0,void 0,(function(){var e;return Object(o.c)(this,(function(r){switch(r.label){case 0:if(!t||!t.handler)return[3,4];r.label=1;case 1:return r.trys.push([1,3,,4]),[4,Object(a.n)(t.handler)];case 2:return!1===r.sent()?[2,!1]:[3,4];case 3:return e=r.sent(),console.error(e),[3,4];case 4:return[2,!0]}}))}))},t.prototype.renderButtons=function(t,e){var r,o=this;if(0!==t.length){var i=Object(n.d)(this),a=((r={"toast-button-group":!0})["toast-button-group-"+e]=!0,r);return Object(n.i)("div",{class:a},t.map((function(t){return Object(n.i)("button",{type:"button",class:b(t),tabIndex:0,onClick:function(){return o.buttonClick(t)},part:"button"},Object(n.i)("div",{class:"toast-button-inner"},t.icon&&Object(n.i)("ion-icon",{icon:t.icon,slot:void 0===t.text?"icon-only":void 0,class:"toast-icon"}),t.text),"md"===i&&Object(n.i)("ion-ripple-effect",{type:void 0!==t.icon&&void 0===t.text?"unbounded":"bounded"}))})))}},t.prototype.render=function(){var t,e,r=this.getButtons(),o=r.filter((function(t){return"start"===t.side})),i=r.filter((function(t){return"start"!==t.side})),a=Object(n.d)(this),l=((t={"toast-wrapper":!0})["toast-"+this.position]=!0,t);return Object(n.i)(n.a,{style:{zIndex:""+(6e4+this.overlayIndex)},class:Object.assign(Object.assign(Object.assign((e={},e[a]=!0,e),Object(s.a)(this.color)),Object(s.b)(this.cssClass)),{"toast-translucent":this.translucent}),onIonToastWillDismiss:this.dispatchCancelHandler},Object(n.i)("div",{class:l},Object(n.i)("div",{class:"toast-container",part:"container"},this.renderButtons(o,"start"),Object(n.i)("div",{class:"toast-content"},void 0!==this.header&&Object(n.i)("div",{class:"toast-header",part:"header"},this.header),void 0!==this.message&&Object(n.i)("div",{class:"toast-message",part:"message",innerHTML:Object(c.a)(this.message)})),this.renderButtons(i,"end"))))},Object.defineProperty(t.prototype,"el",{get:function(){return Object(n.f)(this)},enumerable:!0,configurable:!0}),Object.defineProperty(t,"style",{get:function(){return":host{--border-width:0;--border-style:none;--border-color:initial;--box-shadow:none;--min-width:auto;--width:auto;--min-height:auto;--height:auto;--max-height:auto;left:0;top:0;display:block;position:absolute;width:100%;height:100%;color:var(--color);font-family:var(--ion-font-family,inherit);contain:strict;z-index:1001;pointer-events:none}:host-context([dir=rtl]){left:unset;right:unset;right:0}:host(.overlay-hidden){display:none}:host(.ion-color){--button-color:inherit;color:var(--ion-color-contrast)}:host(.ion-color) .toast-button-cancel{color:inherit}:host(.ion-color) .toast-wrapper{background:var(--ion-color-base)}.toast-wrapper{border-radius:var(--border-radius);left:var(--start);right:var(--end);width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);background:var(--background);-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow)}:host-context([dir=rtl]) .toast-wrapper,[dir=rtl] .toast-wrapper{left:unset;right:unset;left:var(--end);right:var(--start)}.toast-container{-ms-flex-align:center;align-items:center;pointer-events:auto;height:inherit;min-height:inherit;max-height:inherit;contain:content}.toast-container,.toast-content{display:-ms-flexbox;display:flex}.toast-content{-ms-flex:1;flex:1;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:center;justify-content:center}.toast-message{-ms-flex:1;flex:1;white-space:pre-wrap}.toast-button-group{display:-ms-flexbox;display:flex}.toast-button{outline:none;color:var(--button-color);z-index:0}.toast-icon{font-size:1.4em}.toast-button-inner{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}@media (any-hover:hover){.toast-button:hover{cursor:pointer}}:host{--background:var(--ion-color-step-50,#f2f2f2);--border-radius:14px;--button-color:var(--ion-color-primary,#3880ff);--color:var(--ion-color-step-850,#262626);--max-width:700px;--start:10px;--end:10px;font-size:14px}.toast-wrapper{margin-left:auto;margin-right:auto;margin-top:auto;margin-bottom:auto;display:block;position:absolute;z-index:10}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.toast-wrapper{margin-left:unset;margin-right:unset;-webkit-margin-start:auto;margin-inline-start:auto;-webkit-margin-end:auto;margin-inline-end:auto}}@supports ((-webkit-backdrop-filter:blur(0)) or (backdrop-filter:blur(0))){:host(.toast-translucent) .toast-wrapper{background:rgba(var(--ion-background-color-rgb,255,255,255),.8);-webkit-backdrop-filter:saturate(180%) blur(20px);backdrop-filter:saturate(180%) blur(20px)}}.toast-wrapper.toast-top{-webkit-transform:translate3d(0,-100%,0);transform:translate3d(0,-100%,0);top:0}.toast-wrapper.toast-middle{opacity:.01}.toast-wrapper.toast-bottom{-webkit-transform:translate3d(0,100%,0);transform:translate3d(0,100%,0);bottom:0}.toast-content{padding-left:15px;padding-right:15px;padding-top:15px;padding-bottom:15px}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.toast-content{padding-left:unset;padding-right:unset;-webkit-padding-start:15px;padding-inline-start:15px;-webkit-padding-end:15px;padding-inline-end:15px}}.toast-header{margin-bottom:2px;font-weight:500}.toast-button{padding-left:15px;padding-right:15px;padding-top:10px;padding-bottom:10px;height:44px;-webkit-transition:background-color,opacity .1s linear;transition:background-color,opacity .1s linear;border:0;background-color:transparent;font-family:var(--ion-font-family);font-size:17px;font-weight:500;overflow:hidden}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.toast-button{padding-left:unset;padding-right:unset;-webkit-padding-start:15px;padding-inline-start:15px;-webkit-padding-end:15px;padding-inline-end:15px}}.toast-button.ion-activated{opacity:.4}@media (any-hover:hover){.toast-button:hover{opacity:.6}}"},enumerable:!0,configurable:!0}),t}(),b=function(t){var e;return Object.assign(((e={"toast-button":!0,"toast-button-icon-only":void 0!==t.icon&&void 0===t.text})["toast-button-"+t.role]=void 0!==t.role,e["ion-focusable"]=!0,e["ion-activatable"]=!0,e),Object(s.b)(t.cssClass))}},168:function(t,e,r){"use strict";r.d(e,"a",(function(){return i})),r.d(e,"b",(function(){return a})),r.d(e,"c",(function(){return n})),r.d(e,"d",(function(){return c}));var o=r(2),n=function(t,e){return null!==e.closest(t)},i=function(t){var e;return"string"===typeof t&&t.length>0?((e={"ion-color":!0})["ion-color-"+t]=!0,e):void 0},a=function(t){var e={};return function(t){return void 0!==t?(Array.isArray(t)?t:t.split(" ")).filter((function(t){return null!=t})).map((function(t){return t.trim()})).filter((function(t){return""!==t})):[]}(t).forEach((function(t){return e[t]=!0})),e},s=/^[a-z][a-z0-9+\-.]*:/,c=function(t,e,r){return Object(o.a)(void 0,void 0,void 0,(function(){var n;return Object(o.c)(this,(function(o){return null!=t&&"#"!==t[0]&&!s.test(t)&&(n=document.querySelector("ion-router"))?(null!=e&&e.preventDefault(),[2,n.push(t,r)]):[2,!1]}))}))}},169:function(t,e,r){"use strict";r.d(e,"a",(function(){return o}));var o=function(t){try{if("string"!==typeof t||""===t)return t;var e=document.createDocumentFragment(),r=document.createElement("div");e.appendChild(r),r.innerHTML=t,s.forEach((function(t){for(var r=e.querySelectorAll(t),o=r.length-1;o>=0;o--){var a=r[o];a.parentNode?a.parentNode.removeChild(a):e.removeChild(a);for(var s=i(a),c=0;c<s.length;c++)n(s[c])}}));for(var o=i(e),a=0;a<o.length;a++)n(o[a]);var c=document.createElement("div");c.appendChild(e);var l=c.querySelector("div");return null!==l?l.innerHTML:c.innerHTML}catch(d){return console.error(d),""}},n=function t(e){if(!e.nodeType||1===e.nodeType){for(var r=e.attributes.length-1;r>=0;r--){var o=e.attributes.item(r),n=o.name;if(a.includes(n.toLowerCase())){var s=o.value;null!=s&&s.toLowerCase().includes("javascript:")&&e.removeAttribute(n)}else e.removeAttribute(n)}var c=i(e);for(r=0;r<c.length;r++)t(c[r])}},i=function(t){return null!=t.children?t.children:t.childNodes},a=["class","id","href","src","name","slot"],s=["script","style","iframe","meta","link","object","embed"]}}]);
//# sourceMappingURL=29.c69b853a.chunk.js.map