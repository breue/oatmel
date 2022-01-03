// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require rails-ujs
//= require activestorage
//= require turbolinks
//= require_tree .



/*! =======================================================
                      This is the magical bricklayer.js            
========================================================= */
!function t(e,n,r){function o(s,u){if(!n[s]){if(!e[s]){var l="function"==typeof require&&require;if(!u&&l)return l(s,!0);if(i)return i(s,!0);var a=new Error("Cannot find module '"+s+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[s]={exports:{}};e[s][0].call(p.exports,function(t){var n=e[s][1][t];return o(n?n:t)},p,p.exports,t,e,n,r)}return n[s].exports}for(var i="function"==typeof require&&require,s=0;s<r.length;s++)o(r[s]);return o}({1:[function(t,e,n){var r,o=this&&this.__extends||function(t,e){function n(){this.constructor=t}for(var r in e)e.hasOwnProperty(r)&&(t[r]=e[r]);t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)};!function(t){function e(t){return[].slice.call(t)}function n(t,e,n){if(window.CustomEvent)var r=new CustomEvent(e,{detail:n});else{var r=document.createEvent("CustomEvent");r.initCustomEvent(e,!0,!0,n)}return t.dispatchEvent(r)}var r={rulerClassName:"bricklayer-column-sizer",columnClassName:"bricklayer-column"},i=function(){function t(t){this.element=document.createElement("div"),this.element.className=t}return t.prototype.destroy=function(){this.element.parentNode.removeChild(this.element)},t}(),s=function(t){function e(){t.apply(this,arguments)}return o(e,t),e.prototype.getWidth=function(){this.element.setAttribute("style","\n        display: block;\n        visibility: hidden !important;\n        top: -1000px !important;\n      ");var t=this.element.offsetWidth;return this.element.removeAttribute("style"),t},e}(i),u=function(t){function e(){t.apply(this,arguments)}return o(e,t),e}(i),l=function(){function t(t,e){void 0===e&&(e=r),this.element=t,this.options=e,this.build(),this.buildResponsive()}return t.prototype.append=function(t){var n=this;if(Array.isArray(t))return void t.forEach(function(t){return n.append(t)});var r=this.findMinHeightColumn();this.elements=e(this.elements).concat([t]),this.applyPosition("append",r,t)},t.prototype.prepend=function(t){var n=this;if(Array.isArray(t))return void t.forEach(function(t){return n.prepend(t)});var r=this.findMinHeightColumn();this.elements=[t].concat(e(this.elements)),this.applyPosition("prepend",r,t)},t.prototype.on=function(t,e){return this.element.addEventListener("bricklayer."+t,e),this},t.prototype.redraw=function(){var t=this.columnCount;this.checkColumnCount(!1),this.reorderElements(t),n(this.element,"bricklayer.redraw",{columnCount:t})},t.prototype.destroy=function(){var t=this;this.ruler.destroy(),e(this.elements).forEach(function(e){return t.element.appendChild(e)}),e(this.getColumns()).forEach(function(t){return t.parentNode.removeChild(t)}),n(this.element,"bricklayer.destroy",{})},t.prototype.build=function(){this.ruler=new s(this.options.rulerClassName),this.elements=this.getElementsInOrder(),this.element.insertBefore(this.ruler.element,this.element.firstChild)},t.prototype.buildResponsive=function(){var t=this;window.addEventListener("resize",function(e){return t.checkColumnCount()}),this.checkColumnCount(),this.on("breakpoint",function(e){return t.reorderElements(e.detail.columnCount)}),this.columnCount>=1&&this.reorderElements(this.columnCount)},t.prototype.getColumns=function(){return this.element.querySelectorAll(":scope > ."+this.options.columnClassName)},t.prototype.findMinHeightColumn=function(){var t=e(this.getColumns()),n=t.map(function(t){return t.offsetHeight}),r=Math.min.apply(null,n);return t[n.indexOf(r)]},t.prototype.getElementsInOrder=function(){return this.element.querySelectorAll(":scope > *:not(."+this.options.columnClassName+"):not(."+this.options.rulerClassName+")")},t.prototype.checkColumnCount=function(t){void 0===t&&(t=!0);var e=this.getColumnCount();this.columnCount!==e&&(t&&n(this.element,"bricklayer.breakpoint",{columnCount:e}),this.columnCount=e)},t.prototype.reorderElements=function(t){var n=this;void 0===t&&(t=1),(t==1/0||1>t)&&(t=1);for(var r=e(this.elements).map(function(t){var e=t.parentNode?t.parentNode.removeChild(t):t;return e}),o=this.getColumns(),i=0;i<o.length;i++)o[i].parentNode.removeChild(o[i]);for(var i=0;t>i;i++){var s=new u(this.options.columnClassName).element;this.element.appendChild(s)}r.forEach(function(t){var e=n.findMinHeightColumn();e.appendChild(t)})},t.prototype.getColumnCount=function(){var t=this.element.offsetWidth,e=this.ruler.getWidth();return Math.round(t/e)},t.prototype.applyPosition=function(t,e,r){var o=this,i=function(i){var s=i+t.charAt(0).toUpperCase()+t.substr(1);n(o.element,"bricklayer."+s,{item:r,column:e})};switch(i("before"),t){case"append":e.appendChild(r);break;case"prepend":e.insertBefore(r,e.firstChild)}i("after")},t}();t.Container=l}(r||(r={})),function(t,n){"function"==typeof define&&define.amd?define(function(){return n()}):"undefined"!=typeof window&&t===window?t.Bricklayer=n():"object"==typeof e&&e.exports&&(e.exports=n())}("undefined"!=typeof window?window:this,function(){return r.Container})},{}]},{},[1]);


/*! =======================================================
                      VERSION  11.0.2              
========================================================= */
"use strict";var _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(a){return typeof a}:function(a){return a&&"function"==typeof Symbol&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},windowIsDefined="object"===("undefined"==typeof window?"undefined":_typeof(window));!function(a){if("function"==typeof define&&define.amd)define(["jquery"],a);else if("object"===("undefined"==typeof module?"undefined":_typeof(module))&&module.exports){var b;try{b=require("jquery")}catch(c){b=null}module.exports=a(b)}else window&&(window.Slider=a(window.jQuery))}(function(a){var b="slider",c="bootstrapSlider";windowIsDefined&&!window.console&&(window.console={}),windowIsDefined&&!window.console.log&&(window.console.log=function(){}),windowIsDefined&&!window.console.warn&&(window.console.warn=function(){});var d;return function(a){function b(){}function c(a){function c(b){b.prototype.option||(b.prototype.option=function(b){a.isPlainObject(b)&&(this.options=a.extend(!0,this.options,b))})}function e(b,c){a.fn[b]=function(e){if("string"==typeof e){for(var g=d.call(arguments,1),h=0,i=this.length;i>h;h++){var j=this[h],k=a.data(j,b);if(k)if(a.isFunction(k[e])&&"_"!==e.charAt(0)){var l=k[e].apply(k,g);if(void 0!==l&&l!==k)return l}else f("no such method '"+e+"' for "+b+" instance");else f("cannot call methods on "+b+" prior to initialization; attempted to call '"+e+"'")}return this}var m=this.map(function(){var d=a.data(this,b);return d?(d.option(e),d._init()):(d=new c(this,e),a.data(this,b,d)),a(this)});return 1===m.length?m[0]:m}}if(a){var f="undefined"==typeof console?b:function(a){console.error(a)};return a.bridget=function(a,b){c(b),e(a,b)},a.bridget}}var d=Array.prototype.slice;c(a)}(a),function(a){function e(b,c){function d(a,b){var c="data-slider-"+b.replace(/_/g,"-"),d=a.getAttribute(c);try{return JSON.parse(d)}catch(e){return d}}this._state={value:null,enabled:null,offset:null,size:null,percentage:null,inDrag:!1,over:!1,tickIndex:null},this.ticksCallbackMap={},this.handleCallbackMap={},"string"==typeof b?this.element=document.querySelector(b):b instanceof HTMLElement&&(this.element=b),c=c?c:{};for(var e=Object.keys(this.defaultOptions),f=c.hasOwnProperty("min"),g=c.hasOwnProperty("max"),i=0;i<e.length;i++){var j=e[i],k=c[j];k="undefined"!=typeof k?k:d(this.element,j),k=null!==k?k:this.defaultOptions[j],this.options||(this.options={}),this.options[j]=k}if(this.ticksAreValid=Array.isArray(this.options.ticks)&&this.options.ticks.length>0,this.ticksAreValid||(this.options.lock_to_ticks=!1),"auto"===this.options.rtl){var l=window.getComputedStyle(this.element);null!=l?this.options.rtl="rtl"===l.direction:this.options.rtl="rtl"===this.element.style.direction}"vertical"!==this.options.orientation||"top"!==this.options.tooltip_position&&"bottom"!==this.options.tooltip_position?"horizontal"!==this.options.orientation||"left"!==this.options.tooltip_position&&"right"!==this.options.tooltip_position||(this.options.tooltip_position="top"):this.options.rtl?this.options.tooltip_position="left":this.options.tooltip_position="right";var m,n,o,p,q,r=this.element.style.width,s=!1,t=this.element.parentNode;if(this.sliderElem)s=!0;else{this.sliderElem=document.createElement("div"),this.sliderElem.className="slider";var u=document.createElement("div");u.className="slider-track",n=document.createElement("div"),n.className="slider-track-low",m=document.createElement("div"),m.className="slider-selection",o=document.createElement("div"),o.className="slider-track-high",p=document.createElement("div"),p.className="slider-handle min-slider-handle",p.setAttribute("role","slider"),p.setAttribute("aria-valuemin",this.options.min),p.setAttribute("aria-valuemax",this.options.max),q=document.createElement("div"),q.className="slider-handle max-slider-handle",q.setAttribute("role","slider"),q.setAttribute("aria-valuemin",this.options.min),q.setAttribute("aria-valuemax",this.options.max),u.appendChild(n),u.appendChild(m),u.appendChild(o),this.rangeHighlightElements=[];var v=this.options.rangeHighlights;if(Array.isArray(v)&&v.length>0)for(var w=0;w<v.length;w++){var x=document.createElement("div"),y=v[w]["class"]||"";x.className="slider-rangeHighlight slider-selection "+y,this.rangeHighlightElements.push(x),u.appendChild(x)}var z=Array.isArray(this.options.labelledby);if(z&&this.options.labelledby[0]&&p.setAttribute("aria-labelledby",this.options.labelledby[0]),z&&this.options.labelledby[1]&&q.setAttribute("aria-labelledby",this.options.labelledby[1]),!z&&this.options.labelledby&&(p.setAttribute("aria-labelledby",this.options.labelledby),q.setAttribute("aria-labelledby",this.options.labelledby)),this.ticks=[],Array.isArray(this.options.ticks)&&this.options.ticks.length>0){for(this.ticksContainer=document.createElement("div"),this.ticksContainer.className="slider-tick-container",i=0;i<this.options.ticks.length;i++){var A=document.createElement("div");if(A.className="slider-tick",this.options.ticks_tooltip){var B=this._addTickListener(),C=B.addMouseEnter(this,A,i),D=B.addMouseLeave(this,A);this.ticksCallbackMap[i]={mouseEnter:C,mouseLeave:D}}this.ticks.push(A),this.ticksContainer.appendChild(A)}m.className+=" tick-slider-selection"}if(this.tickLabels=[],Array.isArray(this.options.ticks_labels)&&this.options.ticks_labels.length>0)for(this.tickLabelContainer=document.createElement("div"),this.tickLabelContainer.className="slider-tick-label-container",i=0;i<this.options.ticks_labels.length;i++){var E=document.createElement("div"),F=0===this.options.ticks_positions.length,G=this.options.reversed&&F?this.options.ticks_labels.length-(i+1):i;E.className="slider-tick-label",E.innerHTML=this.options.ticks_labels[G],this.tickLabels.push(E),this.tickLabelContainer.appendChild(E)}var H=function(a){var b=document.createElement("div");b.className="arrow";var c=document.createElement("div");c.className="tooltip-inner",a.appendChild(b),a.appendChild(c)},I=document.createElement("div");I.className="tooltip tooltip-main",I.setAttribute("role","presentation"),H(I);var J=document.createElement("div");J.className="tooltip tooltip-min",J.setAttribute("role","presentation"),H(J);var K=document.createElement("div");K.className="tooltip tooltip-max",K.setAttribute("role","presentation"),H(K),this.sliderElem.appendChild(u),this.sliderElem.appendChild(I),this.sliderElem.appendChild(J),this.sliderElem.appendChild(K),this.tickLabelContainer&&this.sliderElem.appendChild(this.tickLabelContainer),this.ticksContainer&&this.sliderElem.appendChild(this.ticksContainer),this.sliderElem.appendChild(p),this.sliderElem.appendChild(q),t.insertBefore(this.sliderElem,this.element),this.element.style.display="none"}if(a&&(this.$element=a(this.element),this.$sliderElem=a(this.sliderElem)),this.eventToCallbackMap={},this.sliderElem.id=this.options.id,this.touchCapable="ontouchstart"in window||window.DocumentTouch&&document instanceof window.DocumentTouch,this.touchX=0,this.touchY=0,this.tooltip=this.sliderElem.querySelector(".tooltip-main"),this.tooltipInner=this.tooltip.querySelector(".tooltip-inner"),this.tooltip_min=this.sliderElem.querySelector(".tooltip-min"),this.tooltipInner_min=this.tooltip_min.querySelector(".tooltip-inner"),this.tooltip_max=this.sliderElem.querySelector(".tooltip-max"),this.tooltipInner_max=this.tooltip_max.querySelector(".tooltip-inner"),h[this.options.scale]&&(this.options.scale=h[this.options.scale]),s===!0&&(this._removeClass(this.sliderElem,"slider-horizontal"),this._removeClass(this.sliderElem,"slider-vertical"),this._removeClass(this.sliderElem,"slider-rtl"),this._removeClass(this.tooltip,"hide"),this._removeClass(this.tooltip_min,"hide"),this._removeClass(this.tooltip_max,"hide"),["left","right","top","width","height"].forEach(function(a){this._removeProperty(this.trackLow,a),this._removeProperty(this.trackSelection,a),this._removeProperty(this.trackHigh,a)},this),[this.handle1,this.handle2].forEach(function(a){this._removeProperty(a,"left"),this._removeProperty(a,"right"),this._removeProperty(a,"top")},this),[this.tooltip,this.tooltip_min,this.tooltip_max].forEach(function(a){this._removeProperty(a,"bs-tooltip-left"),this._removeProperty(a,"bs-tooltip-right"),this._removeProperty(a,"bs-tooltip-top"),this._removeClass(a,"bs-tooltip-right"),this._removeClass(a,"bs-tooltip-left"),this._removeClass(a,"bs-tooltip-top")},this)),"vertical"===this.options.orientation?(this._addClass(this.sliderElem,"slider-vertical"),this.stylePos="top",this.mousePos="pageY",this.sizePos="offsetHeight"):(this._addClass(this.sliderElem,"slider-horizontal"),this.sliderElem.style.width=r,this.options.orientation="horizontal",this.options.rtl?this.stylePos="right":this.stylePos="left",this.mousePos="clientX",this.sizePos="offsetWidth"),this.options.rtl&&this._addClass(this.sliderElem,"slider-rtl"),this._setTooltipPosition(),Array.isArray(this.options.ticks)&&this.options.ticks.length>0&&(g||(this.options.max=Math.max.apply(Math,this.options.ticks)),f||(this.options.min=Math.min.apply(Math,this.options.ticks))),Array.isArray(this.options.value)?(this.options.range=!0,this._state.value=this.options.value):this.options.range?this._state.value=[this.options.value,this.options.max]:this._state.value=this.options.value,this.trackLow=n||this.trackLow,this.trackSelection=m||this.trackSelection,this.trackHigh=o||this.trackHigh,"none"===this.options.selection?(this._addClass(this.trackLow,"hide"),this._addClass(this.trackSelection,"hide"),this._addClass(this.trackHigh,"hide")):("after"===this.options.selection||"before"===this.options.selection)&&(this._removeClass(this.trackLow,"hide"),this._removeClass(this.trackSelection,"hide"),this._removeClass(this.trackHigh,"hide")),this.handle1=p||this.handle1,this.handle2=q||this.handle2,s===!0)for(this._removeClass(this.handle1,"round triangle"),this._removeClass(this.handle2,"round triangle hide"),i=0;i<this.ticks.length;i++)this._removeClass(this.ticks[i],"round triangle hide");var L=["round","triangle","custom"],M=-1!==L.indexOf(this.options.handle);if(M)for(this._addClass(this.handle1,this.options.handle),this._addClass(this.handle2,this.options.handle),i=0;i<this.ticks.length;i++)this._addClass(this.ticks[i],this.options.handle);if(this._state.offset=this._offset(this.sliderElem),this._state.size=this.sliderElem[this.sizePos],this.setValue(this._state.value),this.handle1Keydown=this._keydown.bind(this,0),this.handle1.addEventListener("keydown",this.handle1Keydown,!1),this.handle2Keydown=this._keydown.bind(this,1),this.handle2.addEventListener("keydown",this.handle2Keydown,!1),this.mousedown=this._mousedown.bind(this),this.touchstart=this._touchstart.bind(this),this.touchmove=this._touchmove.bind(this),this.touchCapable&&(this.sliderElem.addEventListener("touchstart",this.touchstart,!1),this.sliderElem.addEventListener("touchmove",this.touchmove,!1)),this.sliderElem.addEventListener("mousedown",this.mousedown,!1),this.resize=this._resize.bind(this),window.addEventListener("resize",this.resize,!1),"hide"===this.options.tooltip)this._addClass(this.tooltip,"hide"),this._addClass(this.tooltip_min,"hide"),this._addClass(this.tooltip_max,"hide");else if("always"===this.options.tooltip)this._showTooltip(),this._alwaysShowTooltip=!0;else{if(this.showTooltip=this._showTooltip.bind(this),this.hideTooltip=this._hideTooltip.bind(this),this.options.ticks_tooltip){var N=this._addTickListener(),O=N.addMouseEnter(this,this.handle1),P=N.addMouseLeave(this,this.handle1);this.handleCallbackMap.handle1={mouseEnter:O,mouseLeave:P},O=N.addMouseEnter(this,this.handle2),P=N.addMouseLeave(this,this.handle2),this.handleCallbackMap.handle2={mouseEnter:O,mouseLeave:P}}else this.sliderElem.addEventListener("mouseenter",this.showTooltip,!1),this.sliderElem.addEventListener("mouseleave",this.hideTooltip,!1),this.touchCapable&&(this.sliderElem.addEventListener("touchstart",this.showTooltip,!1),this.sliderElem.addEventListener("touchmove",this.showTooltip,!1),this.sliderElem.addEventListener("touchend",this.hideTooltip,!1));this.handle1.addEventListener("focus",this.showTooltip,!1),this.handle1.addEventListener("blur",this.hideTooltip,!1),this.handle2.addEventListener("focus",this.showTooltip,!1),this.handle2.addEventListener("blur",this.hideTooltip,!1),this.touchCapable&&(this.handle1.addEventListener("touchstart",this.showTooltip,!1),this.handle1.addEventListener("touchmove",this.showTooltip,!1),this.handle1.addEventListener("touchend",this.hideTooltip,!1),this.handle2.addEventListener("touchstart",this.showTooltip,!1),this.handle2.addEventListener("touchmove",this.showTooltip,!1),this.handle2.addEventListener("touchend",this.hideTooltip,!1))}this.options.enabled?this.enable():this.disable()}var f=void 0,g={formatInvalidInputErrorMsg:function(a){return"Invalid input value '"+a+"' passed in"},callingContextNotSliderInstance:"Calling context element does not have instance of Slider bound to it. Check your code to make sure the JQuery object returned from the call to the slider() initializer is calling the method"},h={linear:{getValue:function(a,b){return a<b.min?b.min:a>b.max?b.max:a},toValue:function(a){var b=a/100*(this.options.max-this.options.min),c=!0;if(this.options.ticks_positions.length>0){for(var d,e,f,g=0,i=1;i<this.options.ticks_positions.length;i++)if(a<=this.options.ticks_positions[i]){d=this.options.ticks[i-1],f=this.options.ticks_positions[i-1],e=this.options.ticks[i],g=this.options.ticks_positions[i];break}var j=(a-f)/(g-f);b=d+j*(e-d),c=!1}var k=c?this.options.min:0,l=k+Math.round(b/this.options.step)*this.options.step;return h.linear.getValue(l,this.options)},toPercentage:function(a){if(this.options.max===this.options.min)return 0;if(this.options.ticks_positions.length>0){for(var b,c,d,e=0,f=0;f<this.options.ticks.length;f++)if(a<=this.options.ticks[f]){b=f>0?this.options.ticks[f-1]:0,d=f>0?this.options.ticks_positions[f-1]:0,c=this.options.ticks[f],e=this.options.ticks_positions[f];break}if(f>0){var g=(a-b)/(c-b);return d+g*(e-d)}}return 100*(a-this.options.min)/(this.options.max-this.options.min)}},logarithmic:{toValue:function(a){var b=1-this.options.min,c=Math.log(this.options.min+b),d=Math.log(this.options.max+b),e=Math.exp(c+(d-c)*a/100)-b;return Math.round(e)===d?d:(e=this.options.min+Math.round((e-this.options.min)/this.options.step)*this.options.step,h.linear.getValue(e,this.options))},toPercentage:function(a){if(this.options.max===this.options.min)return 0;var b=1-this.options.min,c=Math.log(this.options.max+b),d=Math.log(this.options.min+b),e=Math.log(a+b);return 100*(e-d)/(c-d)}}};d=function(a,b){return e.call(this,a,b),this},d.prototype={_init:function(){},constructor:d,defaultOptions:{id:"",min:0,max:10,step:1,precision:0,orientation:"horizontal",value:5,range:!1,selection:"before",tooltip:"show",tooltip_split:!1,lock_to_ticks:!1,handle:"round",reversed:!1,rtl:"auto",enabled:!0,formatter:function(a){return Array.isArray(a)?a[0]+" : "+a[1]:a},natural_arrow_keys:!1,ticks:[],ticks_positions:[],ticks_labels:[],ticks_snap_bounds:0,ticks_tooltip:!1,scale:"linear",focus:!1,tooltip_position:null,labelledby:null,rangeHighlights:[]},getElement:function(){return this.sliderElem},getValue:function(){return this.options.range?this._state.value:this._state.value[0]},setValue:function(a,b,c){a||(a=0);var d=this.getValue();this._state.value=this._validateInputValue(a);var e=this._applyPrecision.bind(this);this.options.range?(this._state.value[0]=e(this._state.value[0]),this._state.value[1]=e(this._state.value[1]),this.ticksAreValid&&this.options.lock_to_ticks&&(this._state.value[0]=this.options.ticks[this._getClosestTickIndex(this._state.value[0])],this._state.value[1]=this.options.ticks[this._getClosestTickIndex(this._state.value[1])]),this._state.value[0]=Math.max(this.options.min,Math.min(this.options.max,this._state.value[0])),this._state.value[1]=Math.max(this.options.min,Math.min(this.options.max,this._state.value[1]))):(this._state.value=e(this._state.value),this.ticksAreValid&&this.options.lock_to_ticks&&(this._state.value=this.options.ticks[this._getClosestTickIndex(this._state.value)]),this._state.value=[Math.max(this.options.min,Math.min(this.options.max,this._state.value))],this._addClass(this.handle2,"hide"),"after"===this.options.selection?this._state.value[1]=this.options.max:this._state.value[1]=this.options.min),this._setTickIndex(),this.options.max>this.options.min?this._state.percentage=[this._toPercentage(this._state.value[0]),this._toPercentage(this._state.value[1]),100*this.options.step/(this.options.max-this.options.min)]:this._state.percentage=[0,0,100],this._layout();var f=this.options.range?this._state.value:this._state.value[0];this._setDataVal(f),b===!0&&this._trigger("slide",f);var g=!1;return g=Array.isArray(f)?d[0]!==f[0]||d[1]!==f[1]:d!==f,g&&c===!0&&this._trigger("change",{oldValue:d,newValue:f}),this},destroy:function(){this._removeSliderEventHandlers(),this.sliderElem.parentNode.removeChild(this.sliderElem),this.element.style.display="",this._cleanUpEventCallbacksMap(),this.element.removeAttribute("data"),a&&(this._unbindJQueryEventHandlers(),f===b&&this.$element.removeData(f),this.$element.removeData(c))},disable:function(){return this._state.enabled=!1,this.handle1.removeAttribute("tabindex"),this.handle2.removeAttribute("tabindex"),this._addClass(this.sliderElem,"slider-disabled"),this._trigger("slideDisabled"),this},enable:function(){return this._state.enabled=!0,this.handle1.setAttribute("tabindex",0),this.handle2.setAttribute("tabindex",0),this._removeClass(this.sliderElem,"slider-disabled"),this._trigger("slideEnabled"),this},toggle:function(){return this._state.enabled?this.disable():this.enable(),this},isEnabled:function(){return this._state.enabled},on:function(a,b){return this._bindNonQueryEventHandler(a,b),this},off:function(b,c){a?(this.$element.off(b,c),this.$sliderElem.off(b,c)):this._unbindNonQueryEventHandler(b,c)},getAttribute:function(a){return a?this.options[a]:this.options},setAttribute:function(a,b){return this.options[a]=b,this},refresh:function(d){var g=this.getValue();return this._removeSliderEventHandlers(),e.call(this,this.element,this.options),d&&d.useCurrentValue===!0&&this.setValue(g),a&&(f===b?(a.data(this.element,b,this),a.data(this.element,c,this)):a.data(this.element,c,this)),this},relayout:function(){return this._resize(),this},_removeTooltipListener:function(a,b){this.handle1.removeEventListener(a,b,!1),this.handle2.removeEventListener(a,b,!1)},_removeSliderEventHandlers:function(){if(this.handle1.removeEventListener("keydown",this.handle1Keydown,!1),this.handle2.removeEventListener("keydown",this.handle2Keydown,!1),this.options.ticks_tooltip){for(var a=this.ticksContainer.getElementsByClassName("slider-tick"),b=0;b<a.length;b++)a[b].removeEventListener("mouseenter",this.ticksCallbackMap[b].mouseEnter,!1),a[b].removeEventListener("mouseleave",this.ticksCallbackMap[b].mouseLeave,!1);this.handleCallbackMap.handle1&&this.handleCallbackMap.handle2&&(this.handle1.removeEventListener("mouseenter",this.handleCallbackMap.handle1.mouseEnter,!1),this.handle2.removeEventListener("mouseenter",this.handleCallbackMap.handle2.mouseEnter,!1),this.handle1.removeEventListener("mouseleave",this.handleCallbackMap.handle1.mouseLeave,!1),this.handle2.removeEventListener("mouseleave",this.handleCallbackMap.handle2.mouseLeave,!1))}this.handleCallbackMap=null,this.ticksCallbackMap=null,this.showTooltip&&this._removeTooltipListener("focus",this.showTooltip),this.hideTooltip&&this._removeTooltipListener("blur",this.hideTooltip),this.showTooltip&&this.sliderElem.removeEventListener("mouseenter",this.showTooltip,!1),this.hideTooltip&&this.sliderElem.removeEventListener("mouseleave",this.hideTooltip,!1),this.sliderElem.removeEventListener("mousedown",this.mousedown,!1),this.touchCapable&&(this.showTooltip&&(this.handle1.removeEventListener("touchstart",this.showTooltip,!1),this.handle1.removeEventListener("touchmove",this.showTooltip,!1),this.handle2.removeEventListener("touchstart",this.showTooltip,!1),this.handle2.removeEventListener("touchmove",this.showTooltip,!1)),this.hideTooltip&&(this.handle1.removeEventListener("touchend",this.hideTooltip,!1),this.handle2.removeEventListener("touchend",this.hideTooltip,!1)),this.showTooltip&&(this.sliderElem.removeEventListener("touchstart",this.showTooltip,!1),this.sliderElem.removeEventListener("touchmove",this.showTooltip,!1)),this.hideTooltip&&this.sliderElem.removeEventListener("touchend",this.hideTooltip,!1),this.sliderElem.removeEventListener("touchstart",this.touchstart,!1),this.sliderElem.removeEventListener("touchmove",this.touchmove,!1)),window.removeEventListener("resize",this.resize,!1)},_bindNonQueryEventHandler:function(a,b){void 0===this.eventToCallbackMap[a]&&(this.eventToCallbackMap[a]=[]),this.eventToCallbackMap[a].push(b)},_unbindNonQueryEventHandler:function(a,b){var c=this.eventToCallbackMap[a];if(void 0!==c)for(var d=0;d<c.length;d++)if(c[d]===b){c.splice(d,1);break}},_cleanUpEventCallbacksMap:function(){for(var a=Object.keys(this.eventToCallbackMap),b=0;b<a.length;b++){var c=a[b];delete this.eventToCallbackMap[c]}},_showTooltip:function(){this.options.tooltip_split===!1?(this._addClass(this.tooltip,"show"),this.tooltip_min.style.display="none",this.tooltip_max.style.display="none"):(this._addClass(this.tooltip_min,"show"),this._addClass(this.tooltip_max,"show"),this.tooltip.style.display="none"),this._state.over=!0},_hideTooltip:function(){this._state.inDrag===!1&&this._alwaysShowTooltip!==!0&&(this._removeClass(this.tooltip,"show"),this._removeClass(this.tooltip_min,"show"),this._removeClass(this.tooltip_max,"show")),this._state.over=!1},_setToolTipOnMouseOver:function(a){function b(a,b){return b?[100-a.percentage[0],c.options.range?100-a.percentage[1]:a.percentage[1]]:[a.percentage[0],a.percentage[1]]}var c=this,d=this.options.formatter(a?a.value[0]:this._state.value[0]),e=a?b(a,this.options.reversed):b(this._state,this.options.reversed);this._setText(this.tooltipInner,d),this.tooltip.style[this.stylePos]=e[0]+"%"},_copyState:function(){return{value:[this._state.value[0],this._state.value[1]],enabled:this._state.enabled,offset:this._state.offset,size:this._state.size,percentage:[this._state.percentage[0],this._state.percentage[1],this._state.percentage[2]],inDrag:this._state.inDrag,over:this._state.over,dragged:this._state.dragged,keyCtrl:this._state.keyCtrl}},_addTickListener:function(){return{addMouseEnter:function(a,b,c){var d=function(){var d=a._copyState(),e=b===a.handle1?d.value[0]:d.value[1],f=void 0;void 0!==c?(e=a.options.ticks[c],f=a.options.ticks_positions.length>0&&a.options.ticks_positions[c]||a._toPercentage(a.options.ticks[c])):f=a._toPercentage(e),d.value[0]=e,d.percentage[0]=f,a._setToolTipOnMouseOver(d),a._showTooltip()};return b.addEventListener("mouseenter",d,!1),d},addMouseLeave:function(a,b){var c=function(){a._hideTooltip()};return b.addEventListener("mouseleave",c,!1),c}}},_layout:function(){var a,b;if(a=this.options.reversed?[100-this._state.percentage[0],this.options.range?100-this._state.percentage[1]:this._state.percentage[1]]:[this._state.percentage[0],this._state.percentage[1]],this.handle1.style[this.stylePos]=a[0]+"%",this.handle1.setAttribute("aria-valuenow",this._state.value[0]),b=this.options.formatter(this._state.value[0]),isNaN(b)?this.handle1.setAttribute("aria-valuetext",b):this.handle1.removeAttribute("aria-valuetext"),this.handle2.style[this.stylePos]=a[1]+"%",this.handle2.setAttribute("aria-valuenow",this._state.value[1]),b=this.options.formatter(this._state.value[1]),isNaN(b)?this.handle2.setAttribute("aria-valuetext",b):this.handle2.removeAttribute("aria-valuetext"),this.rangeHighlightElements.length>0&&Array.isArray(this.options.rangeHighlights)&&this.options.rangeHighlights.length>0)for(var c=0;c<this.options.rangeHighlights.length;c++){var d=this._toPercentage(this.options.rangeHighlights[c].start),e=this._toPercentage(this.options.rangeHighlights[c].end);if(this.options.reversed){var f=100-e;e=100-d,d=f}var g=this._createHighlightRange(d,e);g?"vertical"===this.options.orientation?(this.rangeHighlightElements[c].style.top=g.start+"%",this.rangeHighlightElements[c].style.height=g.size+"%"):(this.options.rtl?this.rangeHighlightElements[c].style.right=g.start+"%":this.rangeHighlightElements[c].style.left=g.start+"%",this.rangeHighlightElements[c].style.width=g.size+"%"):this.rangeHighlightElements[c].style.display="none"}if(Array.isArray(this.options.ticks)&&this.options.ticks.length>0){var h,i="vertical"===this.options.orientation?"height":"width";h="vertical"===this.options.orientation?"marginTop":this.options.rtl?"marginRight":"marginLeft";var j=this._state.size/(this.options.ticks.length-1);if(this.tickLabelContainer){var k=0;if(0===this.options.ticks_positions.length)"vertical"!==this.options.orientation&&(this.tickLabelContainer.style[h]=-j/2+"px"),k=this.tickLabelContainer.offsetHeight;else for(l=0;l<this.tickLabelContainer.childNodes.length;l++)this.tickLabelContainer.childNodes[l].offsetHeight>k&&(k=this.tickLabelContainer.childNodes[l].offsetHeight);"horizontal"===this.options.orientation&&(this.sliderElem.style.marginBottom=k+"px")}for(var l=0;l<this.options.ticks.length;l++){var m=this.options.ticks_positions[l]||this._toPercentage(this.options.ticks[l]);this.options.reversed&&(m=100-m),this.ticks[l].style[this.stylePos]=m+"%",this._removeClass(this.ticks[l],"in-selection"),this.options.range?m>=a[0]&&m<=a[1]&&this._addClass(this.ticks[l],"in-selection"):"after"===this.options.selection&&m>=a[0]?this._addClass(this.ticks[l],"in-selection"):"before"===this.options.selection&&m<=a[0]&&this._addClass(this.ticks[l],"in-selection"),this.tickLabels[l]&&(this.tickLabels[l].style[i]=j+"px","vertical"!==this.options.orientation&&void 0!==this.options.ticks_positions[l]?(this.tickLabels[l].style.position="absolute",this.tickLabels[l].style[this.stylePos]=m+"%",this.tickLabels[l].style[h]=-j/2+"px"):"vertical"===this.options.orientation&&(this.options.rtl?this.tickLabels[l].style.marginRight=this.sliderElem.offsetWidth+"px":this.tickLabels[l].style.marginLeft=this.sliderElem.offsetWidth+"px",this.tickLabelContainer.style[h]=this.sliderElem.offsetWidth/2*-1+"px"),this._removeClass(this.tickLabels[l],"label-in-selection label-is-selection"),this.options.range?m>=a[0]&&m<=a[1]&&(this._addClass(this.tickLabels[l],"label-in-selection"),(m===a[0]||a[1])&&this._addClass(this.tickLabels[l],"label-is-selection")):("after"===this.options.selection&&m>=a[0]?this._addClass(this.tickLabels[l],"label-in-selection"):"before"===this.options.selection&&m<=a[0]&&this._addClass(this.tickLabels[l],"label-in-selection"),m===a[0]&&this._addClass(this.tickLabels[l],"label-is-selection")))}}var n;if(this.options.range){n=this.options.formatter(this._state.value),this._setText(this.tooltipInner,n),this.tooltip.style[this.stylePos]=(a[1]+a[0])/2+"%";var o=this.options.formatter(this._state.value[0]);this._setText(this.tooltipInner_min,o);var p=this.options.formatter(this._state.value[1]);this._setText(this.tooltipInner_max,p),this.tooltip_min.style[this.stylePos]=a[0]+"%",this.tooltip_max.style[this.stylePos]=a[1]+"%"}else n=this.options.formatter(this._state.value[0]),this._setText(this.tooltipInner,n),this.tooltip.style[this.stylePos]=a[0]+"%";if("vertical"===this.options.orientation)this.trackLow.style.top="0",this.trackLow.style.height=Math.min(a[0],a[1])+"%",this.trackSelection.style.top=Math.min(a[0],a[1])+"%",this.trackSelection.style.height=Math.abs(a[0]-a[1])+"%",this.trackHigh.style.bottom="0",this.trackHigh.style.height=100-Math.min(a[0],a[1])-Math.abs(a[0]-a[1])+"%";else{"right"===this.stylePos?this.trackLow.style.right="0":this.trackLow.style.left="0",this.trackLow.style.width=Math.min(a[0],a[1])+"%","right"===this.stylePos?this.trackSelection.style.right=Math.min(a[0],a[1])+"%":this.trackSelection.style.left=Math.min(a[0],a[1])+"%",this.trackSelection.style.width=Math.abs(a[0]-a[1])+"%","right"===this.stylePos?this.trackHigh.style.left="0":this.trackHigh.style.right="0",this.trackHigh.style.width=100-Math.min(a[0],a[1])-Math.abs(a[0]-a[1])+"%";var q=this.tooltip_min.getBoundingClientRect(),r=this.tooltip_max.getBoundingClientRect();"bottom"===this.options.tooltip_position?q.right>r.left?(this._removeClass(this.tooltip_max,"bs-tooltip-bottom"),this._addClass(this.tooltip_max,"bs-tooltip-top"),this.tooltip_max.style.top="",this.tooltip_max.style.bottom="22px"):(this._removeClass(this.tooltip_max,"bs-tooltip-top"),this._addClass(this.tooltip_max,"bs-tooltip-bottom"),this.tooltip_max.style.top=this.tooltip_min.style.top,this.tooltip_max.style.bottom=""):q.right>r.left?(this._removeClass(this.tooltip_max,"bs-tooltip-top"),this._addClass(this.tooltip_max,"bs-tooltip-bottom"),this.tooltip_max.style.top="18px"):(this._removeClass(this.tooltip_max,"bs-tooltip-bottom"),this._addClass(this.tooltip_max,"bs-tooltip-top"),this.tooltip_max.style.top=this.tooltip_min.style.top)}},_createHighlightRange:function(a,b){return this._isHighlightRange(a,b)?a>b?{start:b,size:a-b}:{start:a,size:b-a}:null},_isHighlightRange:function(a,b){return a>=0&&100>=a&&b>=0&&100>=b?!0:!1},_resize:function(a){this._state.offset=this._offset(this.sliderElem),this._state.size=this.sliderElem[this.sizePos],this._layout()},_removeProperty:function(a,b){a.style.removeProperty?a.style.removeProperty(b):a.style.removeAttribute(b)},_mousedown:function(a){if(!this._state.enabled)return!1;a.preventDefault&&a.preventDefault(),this._state.offset=this._offset(this.sliderElem),this._state.size=this.sliderElem[this.sizePos];var b=this._getPercentage(a);if(this.options.range){var c=Math.abs(this._state.percentage[0]-b),d=Math.abs(this._state.percentage[1]-b);this._state.dragged=d>c?0:1,this._adjustPercentageForRangeSliders(b)}else this._state.dragged=0;this._state.percentage[this._state.dragged]=b,this.touchCapable&&(document.removeEventListener("touchmove",this.mousemove,!1),document.removeEventListener("touchend",this.mouseup,!1)),this.mousemove&&document.removeEventListener("mousemove",this.mousemove,!1),this.mouseup&&document.removeEventListener("mouseup",this.mouseup,!1),this.mousemove=this._mousemove.bind(this),this.mouseup=this._mouseup.bind(this),this.touchCapable&&(document.addEventListener("touchmove",this.mousemove,!1),document.addEventListener("touchend",this.mouseup,!1)),document.addEventListener("mousemove",this.mousemove,!1),document.addEventListener("mouseup",this.mouseup,!1),this._state.inDrag=!0;var e=this._calculateValue();return this._trigger("slideStart",e),this.setValue(e,!1,!0),a.returnValue=!1,this.options.focus&&this._triggerFocusOnHandle(this._state.dragged),!0},_touchstart:function(a){this._mousedown(a)},_triggerFocusOnHandle:function(a){0===a&&this.handle1.focus(),1===a&&this.handle2.focus()},_keydown:function(a,b){if(!this._state.enabled)return!1;var c;switch(b.keyCode){case 37:case 40:c=-1;break;case 39:case 38:c=1}if(c){if(this.options.natural_arrow_keys){var d="horizontal"===this.options.orientation,e="vertical"===this.options.orientation,f=this.options.rtl,g=this.options.reversed;d?f?g||(c=-c):g&&(c=-c):e&&(g||(c=-c))}var h;if(this.ticksAreValid&&this.options.lock_to_ticks){var i=void 0;i=this.options.ticks.indexOf(this._state.value[a]),-1===i&&(i=0,window.console.warn("(lock_to_ticks) _keydown: index should not be -1")),i+=c,i=Math.max(0,Math.min(this.options.ticks.length-1,i)),h=this.options.ticks[i]}else h=this._state.value[a]+c*this.options.step;var j=this._toPercentage(h);if(this._state.keyCtrl=a,this.options.range){this._adjustPercentageForRangeSliders(j);var k=this._state.keyCtrl?this._state.value[0]:h,l=this._state.keyCtrl?h:this._state.value[1];h=[Math.max(this.options.min,Math.min(this.options.max,k)),Math.max(this.options.min,Math.min(this.options.max,l))]}else h=Math.max(this.options.min,Math.min(this.options.max,h));return this._trigger("slideStart",h),this.setValue(h,!0,!0),this._trigger("slideStop",h),this._pauseEvent(b),delete this._state.keyCtrl,!1}},_pauseEvent:function(a){a.stopPropagation&&a.stopPropagation(),
a.preventDefault&&a.preventDefault(),a.cancelBubble=!0,a.returnValue=!1},_mousemove:function(a){if(!this._state.enabled)return!1;var b=this._getPercentage(a);this._adjustPercentageForRangeSliders(b),this._state.percentage[this._state.dragged]=b;var c=this._calculateValue(!0);return this.setValue(c,!0,!0),!1},_touchmove:function(a){void 0!==a.changedTouches&&a.preventDefault&&a.preventDefault()},_adjustPercentageForRangeSliders:function(a){if(this.options.range){var b=this._getNumDigitsAfterDecimalPlace(a);b=b?b-1:0;var c=this._applyToFixedAndParseFloat(a,b);0===this._state.dragged&&this._applyToFixedAndParseFloat(this._state.percentage[1],b)<c?(this._state.percentage[0]=this._state.percentage[1],this._state.dragged=1):1===this._state.dragged&&this._applyToFixedAndParseFloat(this._state.percentage[0],b)>c?(this._state.percentage[1]=this._state.percentage[0],this._state.dragged=0):0===this._state.keyCtrl&&this._toPercentage(this._state.value[1])<a?(this._state.percentage[0]=this._state.percentage[1],this._state.keyCtrl=1,this.handle2.focus()):1===this._state.keyCtrl&&this._toPercentage(this._state.value[0])>a&&(this._state.percentage[1]=this._state.percentage[0],this._state.keyCtrl=0,this.handle1.focus())}},_mouseup:function(a){if(!this._state.enabled)return!1;var b=this._getPercentage(a);this._adjustPercentageForRangeSliders(b),this._state.percentage[this._state.dragged]=b,this.touchCapable&&(document.removeEventListener("touchmove",this.mousemove,!1),document.removeEventListener("touchend",this.mouseup,!1)),document.removeEventListener("mousemove",this.mousemove,!1),document.removeEventListener("mouseup",this.mouseup,!1),this._state.inDrag=!1,this._state.over===!1&&this._hideTooltip();var c=this._calculateValue(!0);return this.setValue(c,!1,!0),this._trigger("slideStop",c),this._state.dragged=null,!1},_setValues:function(a,b){var c=0===a?0:100;this._state.percentage[a]!==c&&(b.data[a]=this._toValue(this._state.percentage[a]),b.data[a]=this._applyPrecision(b.data[a]))},_calculateValue:function(a){var b={};return this.options.range?(b.data=[this.options.min,this.options.max],this._setValues(0,b),this._setValues(1,b),a&&(b.data[0]=this._snapToClosestTick(b.data[0]),b.data[1]=this._snapToClosestTick(b.data[1]))):(b.data=this._toValue(this._state.percentage[0]),b.data=parseFloat(b.data),b.data=this._applyPrecision(b.data),a&&(b.data=this._snapToClosestTick(b.data))),b.data},_snapToClosestTick:function(a){for(var b=[a,1/0],c=0;c<this.options.ticks.length;c++){var d=Math.abs(this.options.ticks[c]-a);d<=b[1]&&(b=[this.options.ticks[c],d])}return b[1]<=this.options.ticks_snap_bounds?b[0]:a},_applyPrecision:function(a){var b=this.options.precision||this._getNumDigitsAfterDecimalPlace(this.options.step);return this._applyToFixedAndParseFloat(a,b)},_getNumDigitsAfterDecimalPlace:function(a){var b=(""+a).match(/(?:\.(\d+))?(?:[eE]([+-]?\d+))?$/);return b?Math.max(0,(b[1]?b[1].length:0)-(b[2]?+b[2]:0)):0},_applyToFixedAndParseFloat:function(a,b){var c=a.toFixed(b);return parseFloat(c)},_getPercentage:function(a){!this.touchCapable||"touchstart"!==a.type&&"touchmove"!==a.type&&"touchend"!==a.type||(a=a.changedTouches[0]);var b=a[this.mousePos],c=this._state.offset[this.stylePos],d=b-c;"right"===this.stylePos&&(d=-d);var e=d/this._state.size*100;return e=Math.round(e/this._state.percentage[2])*this._state.percentage[2],this.options.reversed&&(e=100-e),Math.max(0,Math.min(100,e))},_validateInputValue:function(a){if(isNaN(+a)){if(Array.isArray(a))return this._validateArray(a),a;throw new Error(g.formatInvalidInputErrorMsg(a))}return+a},_validateArray:function(a){for(var b=0;b<a.length;b++){var c=a[b];if("number"!=typeof c)throw new Error(g.formatInvalidInputErrorMsg(c))}},_setDataVal:function(a){this.element.setAttribute("data-value",a),this.element.setAttribute("value",a),this.element.value=a},_trigger:function(b,c){c=c||0===c?c:void 0;var d=this.eventToCallbackMap[b];if(d&&d.length)for(var e=0;e<d.length;e++){var f=d[e];f(c)}a&&this._triggerJQueryEvent(b,c)},_triggerJQueryEvent:function(a,b){var c={type:a,value:b};this.$element.trigger(c),this.$sliderElem.trigger(c)},_unbindJQueryEventHandlers:function(){this.$element.off(),this.$sliderElem.off()},_setText:function(a,b){"undefined"!=typeof a.textContent?a.textContent=b:"undefined"!=typeof a.innerText&&(a.innerText=b)},_removeClass:function(a,b){for(var c=b.split(" "),d=a.className,e=0;e<c.length;e++){var f=c[e],g=new RegExp("(?:\\s|^)"+f+"(?:\\s|$)");d=d.replace(g," ")}a.className=d.trim()},_addClass:function(a,b){for(var c=b.split(" "),d=a.className,e=0;e<c.length;e++){var f=c[e],g=new RegExp("(?:\\s|^)"+f+"(?:\\s|$)"),h=g.test(d);h||(d+=" "+f)}a.className=d.trim()},_offsetLeft:function(a){return a.getBoundingClientRect().left},_offsetRight:function(a){return a.getBoundingClientRect().right},_offsetTop:function(a){for(var b=a.offsetTop;(a=a.offsetParent)&&!isNaN(a.offsetTop);)b+=a.offsetTop,"BODY"!==a.tagName&&(b-=a.scrollTop);return b},_offset:function(a){return{left:this._offsetLeft(a),right:this._offsetRight(a),top:this._offsetTop(a)}},_css:function(b,c,d){if(a)a.style(b,c,d);else{var e=c.replace(/^-ms-/,"ms-").replace(/-([\da-z])/gi,function(a,b){return b.toUpperCase()});b.style[e]=d}},_toValue:function(a){return this.options.scale.toValue.apply(this,[a])},_toPercentage:function(a){return this.options.scale.toPercentage.apply(this,[a])},_setTooltipPosition:function(){var a=[this.tooltip,this.tooltip_min,this.tooltip_max];if("vertical"===this.options.orientation){var b;b=this.options.tooltip_position?this.options.tooltip_position:this.options.rtl?"left":"right";var c="left"===b?"right":"left";a.forEach(function(a){this._addClass(a,"bs-tooltip-"+b),a.style[c]="100%"}.bind(this))}else"bottom"===this.options.tooltip_position?a.forEach(function(a){this._addClass(a,"bs-tooltip-bottom"),a.style.top="22px"}.bind(this)):a.forEach(function(a){this._addClass(a,"bs-tooltip-top"),a.style.top=-this.tooltip.outerHeight-14+"px"}.bind(this))},_getClosestTickIndex:function(a){for(var b=Math.abs(a-this.options.ticks[0]),c=0,d=0;d<this.options.ticks.length;++d){var e=Math.abs(a-this.options.ticks[d]);b>e&&(b=e,c=d)}return c},_setTickIndex:function(){this.ticksAreValid&&(this._state.tickIndex=[this.options.ticks.indexOf(this._state.value[0]),this.options.ticks.indexOf(this._state.value[1])])}},a&&a.fn&&(a.fn.slider?(windowIsDefined&&window.console.warn("bootstrap-slider.js - WARNING: $.fn.slider namespace is already bound. Use the $.fn.bootstrapSlider namespace instead."),f=c):(a.bridget(b,d),f=b),a.bridget(c,d),a(function(){a("input[data-provide=slider]")[f]()}))}(a),d});


var tata=function(t){function n(e){if(r[e])return r[e].exports;var o=r[e]={i:e,l:!1,exports:{}};return t[e].call(o.exports,o,o.exports,n),o.l=!0,o.exports}var r={};return n.m=t,n.c=r,n.d=function(t,r,e){n.o(t,r)||Object.defineProperty(t,r,{configurable:!1,enumerable:!0,get:e})},n.n=function(t){var r=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(r,"a",r),r},n.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},n.p="",n(n.s=0)}([function(t,n,r){t.exports=r(1)},function(t,n,r){"use strict";function e(){return"tata-"+Date.now()}function o(){switch(arguments.length>0&&void 0!==arguments[0]?arguments[0]:"tr"){case"tr":return"top-right";case"tm":return"top-mid";case"tl":return"top-left";case"mr":return"mid-right";case"mm":return"mid-mid";case"ml":return"mid-left";case"br":return"bottom-right";case"bm":return"bottom-mid";case"bl":return"bottom-left";default:return"top-right"}}function a(){switch(arguments.length>0&&void 0!==arguments[0]?arguments[0]:"text"){case"text":return"chat_bubble";case"log":return"textsms";case"info":return"";case"warn":return"info_outline";case"success":return"check";case"error":return"";case"ask":return"help_outline";default:return""}}function i(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"fade",n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"tr";if("slide"===t)switch(n){case"tr":case"mr":case"br":return"slide-right-in";case"tl":case"ml":case"bl":return"slide-left-in";case"tm":return"slide-top-in";case"bm":return"slide-bottom-in"}return"fade-in"}function s(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"fade",n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"tr";if("slide"===t)switch(n){case"tr":case"mr":case"br":return"slide-right-out";case"tl":case"ml":case"bl":return"slide-left-out";case"tm":return"slide-top-out";case"bm":return"slide-bottom-out"}return"fade-out"}function c(t){t.target.classList.contains("tata-close")||this.opts.onClick.call(this)}function l(t){var n=t.target;if(n.classList.contains("tata-close")){var r=n.parentNode.getAttribute("id"),e=y.find(function(t){return t.id===r}),o=document.getElementById(r);o.classList.add(s(e.opts.animate,e.opts.position)),f(o),!!e.opts.onClose&&"function"==typeof e.opts.onClose&&e.opts.onClose.call(e)}}function f(t){var n=setTimeout(function(){"function"==typeof t.remove?t.remove():document.body.removeChild(t),clearTimeout(n)},800)}function u(t,n,r){var l=e(),u=a(r.type),d=o(r.position),p=i(r.animate,r.position),m={title:t,text:n,opts:r,id:l},h=y.findIndex(function(t){return t.id===l}),g=0===h?null:y[h-1];y.push(m);var v='\n  <div class="tata '+r.type+" "+p+" "+d+'" id='+l+'>\n    <i class="tata-icon material-icons">'+u+'</i>\n    <div class="tata-body">\n      <h4 class="tata-title">'+t+'</h4>\n      <p class="tata-text">'+n+"</p>\n    </div>\n    "+(r.closeBtn||r.holding?'<button class="tata-close material-icons">clear</button>':"")+"\n    "+(!r.holding&&r.progress?'<div class="tata-progress"></div>':"")+"\n  </div>\n ";document.body.insertAdjacentHTML("beforeend",v),g&&g.opts.position===m.opts.position&&f(document.getElementById(g.id));var b=document.getElementById(l);if(!!r.onClick&&"function"==typeof r.onClick&&b.addEventListener("click",c.bind(m),{capture:!0,once:!0}),!r.holding&&r.progress){b.querySelector(".tata-progress").style.animation=r.duration/1e3+"s reduceWidth linear forwards";var x=setTimeout(function(){var t=y.findIndex(function(t){return t===t});y.splice(t,1),b.classList.add(s(m.opts.animate,m.opts.position)),f(b),clearTimeout(x),!!m.opts.onClose&&"function"==typeof m.opts.onClose&&m.opts.onClose.call(m)},r.duration)}}function d(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"ä½ å¥½",n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"ä»Šå¤©æ˜¯"+(new Date).toLocaleString(),r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};u(t,n,Object.assign({},w,r,{type:"text"}))}function p(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"ä½ å¥½",n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"ä»Šå¤©æ˜¯"+(new Date).toLocaleString(),r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};u(t,n,Object.assign({},w,r,{type:"log"}))}function m(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"ä½ å¥½",n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"ä»Šå¤©æ˜¯"+(new Date).toLocaleString(),r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};u(t,n,Object.assign({},w,r,{type:"info"}))}function h(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"ä½ å¥½",n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"ä»Šå¤©æ˜¯"+(new Date).toLocaleString(),r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};u(t,n,Object.assign({},w,r,{type:"warn"}))}function g(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"ä½ å¥½",n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"ä»Šå¤©æ˜¯"+(new Date).toLocaleString(),r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};u(t,n,Object.assign({},w,r,{type:"error"}))}function v(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"ä½ å¥½",n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"ä»Šå¤©æ˜¯"+(new Date).toLocaleString(),r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};u(t,n,Object.assign({},w,r,{type:"success"}))}function b(){var t=Object.assign({},w,opts,{type:"ask"});u(title,d,t)}function x(){y.forEach(function(t){return f(document.getElementById(t.id))}),y.length=0}Object.defineProperty(n,"__esModule",{value:!0}),n.text=d,n.log=p,n.info=m,n.warn=h,n.error=g,n.success=v,n.ask=b,n.clear=x,r(2),function(t){var n=document.createElement("link");n.rel="stylesheet",n.href=t,document.head.appendChild(n)}("https://fonts.googleapis.com/icon?family=Material+Icons"),document.addEventListener("click",l,!1);var y=[],w={type:"log",position:"tr",animate:"fade",duration:3e3,progress:!0,holding:!1,closeBtn:!0,onClick:null,onClose:null}},function(t,n,r){var e=r(3);"string"==typeof e&&(e=[[t.i,e,""]]);var o={hmr:!0};o.transform=void 0;r(5)(e,o);e.locals&&(t.exports=e.locals)},function(t,n,r){n=t.exports=r(4)(void 0),n.push([t.i,".tata {\r\n  position: fixed;\r\n  display: flex;\r\n  justify-content: space-around;\r\n  align-items: center;\r\n  width: 300px;\r\n  border-radius: 3px;\r\n  color: #ffffff;\r\n  font-size: 16px;\r\n  z-index: 9999;\r\n  pointer-events: auto;\r\n  padding: 12px 14px 12px 20px;\r\n  box-shadow: 0 24px 38px 3px rgba(0, 0, 0, 0.14), 0 9px 46px 8px rgba(0, 0, 0, 0.12), 0 11px 15px -7px rgba(0, 0, 0, 0.2);\r\n}\r\n\r\n.tata:hover {\r\n  opacity: 1;\r\n}\r\n\r\n.tata * {\r\n  box-sizing: border-box;\r\n}\r\n\r\n.tata .tata-icon {\r\n  font-size: 2em;\r\n  color: inherit;\r\n}\r\n\r\n.tata .tata-body {\r\n  margin: 0;\r\n  padding: 0 14px;\r\n  min-height: 38px;\r\n  min-width: 260px;\r\n}\r\n\r\n.tata .tata-title {\r\n  margin: 0 0 2px 0;\r\n  font-size: 1em;\r\n}\r\n\r\n.tata .tata-text {\r\n  margin: 0;\r\n  font-size: .9em;\r\n}\r\n\r\n.tata .tata-close {\r\n  position: absolute;\r\n  top: 6px;\r\n  right: 6px;\r\n  border: none;\r\n  margin: 0;\r\n  padding: 0;\r\n  font-size: 1em;\r\n  font-weight: bold;\r\n  color: inherit;\r\n  cursor: pointer;\r\n  outline: none;\r\n  background: transparent;\r\n}\r\n\r\n.tata-progress {\r\n  position: absolute;\r\n  bottom: -1px;\r\n  left: 0;\r\n  width: 100%;\r\n  height: 5px;\r\n  border-radius: 0 0 3px 3px;\r\n  background: rgba(0, 0, 0, 0.2);\r\n}\r\n\r\n.tata .tata-close:hover {\r\n  opacity: 0.4;\r\n}\r\n\r\n.tata.top-right {\r\n  top: 12px;\r\n  right: 12px;\r\n}\r\n\r\n.tata.top-mid {\r\n  top: 12px;\r\n  left: 50%;\r\n  transform: translateX(-50%);\r\n}\r\n\r\n.tata.top-left {\r\n  top: 12px;\r\n  left: 12px;\r\n}\r\n\r\n.tata.bottom-right {\r\n  right: 12px;\r\n  bottom: 18px;\r\n}\r\n\r\n.tata.bottom-mid {\r\n  left: 50%;\r\n  bottom: 18px;\r\n  transform: translateX(-50%);\r\n}\r\n\r\n.tata.bottom-left {\r\n  bottom: 18px;\r\n  left: 12px;\r\n}\r\n\r\n.tata.mid-right {\r\n  top: 50%;\r\n  right: 12px;\r\n  transform: translateY(-50%);\r\n}\r\n\r\n.tata.mid-left {\r\n  top: 50%;\r\n  left: 12px;\r\n  transform: translateY(-50%);\r\n}\r\n\r\n.tata.mid-mid {\r\n  top: 35%;\r\n  left: 50%;\r\n  transform: translate(-50%, -50%);\r\n}\r\n\r\n.tata.text {\r\n  color: #fff;\r\n  background: #323232;\r\n}\r\n\r\n.tata.log {\r\n  color: #333333;\r\n  background: #fffffc;\r\n}\r\n\r\n.tata.info {\r\n  background: #FFC108;\r\n}\r\n\r\n.tata.warn {\r\n  background: #f89406;\r\n}\r\n\r\n.tata.error {\r\n  background: #FFC108;\r\n}\r\n\r\n.tata.success {\r\n  background: #FFC108;\r\n}\r\n\r\n.tata.fade-in {\r\n  animation: .4s ease-in fadeIn forwards;\r\n}\r\n\r\n.tata.fade-out {\r\n  animation: .4s linear fadeOut forwards;\r\n}\r\n\r\n.tata.slide-right-in {\r\n  animation: .4s ease slideRightIn forwards;\r\n}\r\n\r\n.tata.slide-right-out {\r\n  animation: .4s ease slideRightOut forwards;\r\n}\r\n\r\n.tata.slide-left-in {\r\n  animation: .4s ease slideLeftIn forwards;\r\n}\r\n\r\n.tata.slide-left-out {\r\n  animation: .4s ease slideLeftOut forwards;\r\n}\r\n\r\n.tata.slide-top-in {\r\n  animation: .4s ease slideTopIn forwards;\r\n}\r\n\r\n.tata.slide-top-out {\r\n  animation: .4s ease slideTopOut forwards;\r\n}\r\n\r\n.tata.slide-bottom-in {\r\n  animation: .4s ease slideBottomIn forwards;\r\n}\r\n\r\n.tata.slide-bottom-out {\r\n  animation: .4s ease slideBottomOut forwards;\r\n}\r\n\r\n@keyframes fadeIn {\r\n  from {\r\n    opacity: 0;\r\n  }\r\n\r\n  to {\r\n    opacity: 1;\r\n  }\r\n}\r\n\r\n@keyframes fadeOut {\r\n  from {\r\n    opacity: 1;\r\n  }\r\n\r\n  to {\r\n    opacity: 0;\r\n  }\r\n}\r\n\r\n@keyframes slideRightIn {\r\n  from {\r\n    right: -310px;\r\n  }\r\n\r\n  to {\r\n    right: 12px;\r\n  }\r\n}\r\n\r\n@keyframes slideRightOut {\r\n  from {\r\n    right: 12px;\r\n  }\r\n\r\n  to {\r\n    right: -310px;\r\n  }\r\n}\r\n\r\n@keyframes slideLeftIn {\r\n  from {\r\n    left: -310px;\r\n  }\r\n\r\n  to {\r\n    left: 12px;\r\n  }\r\n}\r\n\r\n@keyframes slideLeftOut {\r\n  from {\r\n    left: 12px;\r\n  }\r\n\r\n  to {\r\n    left: -310px;\r\n  }\r\n}\r\n\r\n@keyframes slideTopIn {\r\n  from {\r\n    top: calc(-100% + -12px);\r\n  }\r\n  to {\r\n    top: 12px;\r\n  }\r\n}\r\n\r\n@keyframes slideTopOut {\r\n  from {\r\n    top: 12px;\r\n  }\r\n  to {\r\n    top: calc(-100% + -12px);\r\n  }\r\n}\r\n\r\n@keyframes slideBottomIn {\r\n  from {\r\n    bottom: calc(-100% + -18px);\r\n  }\r\n  to {\r\n    bottom: 18px;\r\n  }\r\n}\r\n\r\n@keyframes slideBottomOut {\r\n  from {\r\n    bottom: 18px;\r\n  }\r\n  to {\r\n    bottom: calc(-100% + -18px);\r\n  }\r\n}\r\n\r\n@keyframes reduceWidth {\r\n  from {\r\n    width: 100%;\r\n  }\r\n\r\n  to {\r\n    width: 0%;\r\n  }\r\n}",""])},function(t,n){function r(t,n){var r=t[1]||"",o=t[3];if(!o)return r;if(n&&"function"==typeof btoa){var a=e(o);return[r].concat(o.sources.map(function(t){return"/*# sourceURL="+o.sourceRoot+t+" */"})).concat([a]).join("\n")}return[r].join("\n")}function e(t){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(t))))+" */"}t.exports=function(t){var n=[];return n.toString=function(){return this.map(function(n){var e=r(n,t);return n[2]?"@media "+n[2]+"{"+e+"}":e}).join("")},n.i=function(t,r){"string"==typeof t&&(t=[[null,t,""]]);for(var e={},o=0;o<this.length;o++){var a=this[o][0];"number"==typeof a&&(e[a]=!0)}for(o=0;o<t.length;o++){var i=t[o];"number"==typeof i[0]&&e[i[0]]||(r&&!i[2]?i[2]=r:r&&(i[2]="("+i[2]+") and ("+r+")"),n.push(i))}},n}},function(t,n,r){function e(t,n){for(var r=0;r<t.length;r++){var e=t[r],o=m[e.id];if(o){o.refs++;for(var a=0;a<o.parts.length;a++)o.parts[a](e.parts[a]);for(;a<e.parts.length;a++)o.parts.push(f(e.parts[a],n))}else{for(var i=[],a=0;a<e.parts.length;a++)i.push(f(e.parts[a],n));m[e.id]={id:e.id,refs:1,parts:i}}}}function o(t,n){for(var r=[],e={},o=0;o<t.length;o++){var a=t[o],i=n.base?a[0]+n.base:a[0],s=a[1],c=a[2],l=a[3],f={css:s,media:c,sourceMap:l};e[i]?e[i].parts.push(f):r.push(e[i]={id:i,parts:[f]})}return r}function a(t,n){var r=g(t.insertInto);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var e=x[x.length-1];if("top"===t.insertAt)e?e.nextSibling?r.insertBefore(n,e.nextSibling):r.appendChild(n):r.insertBefore(n,r.firstChild),x.push(n);else if("bottom"===t.insertAt)r.appendChild(n);else{if("object"!=typeof t.insertAt||!t.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var o=g(t.insertInto+" "+t.insertAt.before);r.insertBefore(n,o)}}function i(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t);var n=x.indexOf(t);n>=0&&x.splice(n,1)}function s(t){var n=document.createElement("style");return t.attrs.type="text/css",l(n,t.attrs),a(t,n),n}function c(t){var n=document.createElement("link");return t.attrs.type="text/css",t.attrs.rel="stylesheet",l(n,t.attrs),a(t,n),n}function l(t,n){Object.keys(n).forEach(function(r){t.setAttribute(r,n[r])})}function f(t,n){var r,e,o,a;if(n.transform&&t.css){if(!(a=n.transform(t.css)))return function(){};t.css=a}if(n.singleton){var l=b++;r=v||(v=s(n)),e=u.bind(null,r,l,!1),o=u.bind(null,r,l,!0)}else t.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(r=c(n),e=p.bind(null,r,n),o=function(){i(r),r.href&&URL.revokeObjectURL(r.href)}):(r=s(n),e=d.bind(null,r),o=function(){i(r)});return e(t),function(n){if(n){if(n.css===t.css&&n.media===t.media&&n.sourceMap===t.sourceMap)return;e(t=n)}else o()}}function u(t,n,r,e){var o=r?"":e.css;if(t.styleSheet)t.styleSheet.cssText=w(n,o);else{var a=document.createTextNode(o),i=t.childNodes;i[n]&&t.removeChild(i[n]),i.length?t.insertBefore(a,i[n]):t.appendChild(a)}}function d(t,n){var r=n.css,e=n.media;if(e&&t.setAttribute("media",e),t.styleSheet)t.styleSheet.cssText=r;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(r))}}function p(t,n,r){var e=r.css,o=r.sourceMap,a=void 0===n.convertToAbsoluteUrls&&o;(n.convertToAbsoluteUrls||a)&&(e=y(e)),o&&(e+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */");var i=new Blob([e],{type:"text/css"}),s=t.href;t.href=URL.createObjectURL(i),s&&URL.revokeObjectURL(s)}var m={},h=function(t){var n;return function(){return void 0===n&&(n=t.apply(this,arguments)),n}}(function(){return window&&document&&document.all&&!window.atob}),g=function(t){var n={};return function(r){if(void 0===n[r]){var e=t.call(this,r);if(e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(t){e=null}n[r]=e}return n[r]}}(function(t){return document.querySelector(t)}),v=null,b=0,x=[],y=r(6);t.exports=function(t,n){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");n=n||{},n.attrs="object"==typeof n.attrs?n.attrs:{},n.singleton||(n.singleton=h()),n.insertInto||(n.insertInto="head"),n.insertAt||(n.insertAt="bottom");var r=o(t,n);return e(r,n),function(t){for(var a=[],i=0;i<r.length;i++){var s=r[i],c=m[s.id];c.refs--,a.push(c)}if(t){e(o(t,n),n)}for(var i=0;i<a.length;i++){var c=a[i];if(0===c.refs){for(var l=0;l<c.parts.length;l++)c.parts[l]();delete m[c.id]}}}};var w=function(){var t=[];return function(n,r){return t[n]=r,t.filter(Boolean).join("\n")}}()},function(t,n){t.exports=function(t){var n="undefined"!=typeof window&&window.location;if(!n)throw new Error("fixUrls requires window.location");if(!t||"string"!=typeof t)return t;var r=n.protocol+"//"+n.host,e=r+n.pathname.replace(/\/[^\/]*$/,"/");return t.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(t,n){var o=n.trim().replace(/^"(.*)"$/,function(t,n){return n}).replace(/^'(.*)'$/,function(t,n){return n});if(/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(o))return t;var a;return a=0===o.indexOf("//")?o:0===o.indexOf("/")?r+o:e+o.replace(/^\.\//,""),"url("+JSON.stringify(a)+")"})}}]);


!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var f;"undefined"!=typeof window?f=window:"undefined"!=typeof global?f=global:"undefined"!=typeof self&&(f=self),f.Slideout=e()}}(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

/**
 * Module dependencies
 */
var decouple = require('decouple');
var Emitter = require('emitter');

/**
 * Privates
 */
var scrollTimeout;
var scrolling = false;
var doc = window.document;
var html = doc.documentElement;
var msPointerSupported = window.navigator.msPointerEnabled;
var touch = {
  'start': msPointerSupported ? 'MSPointerDown' : 'touchstart',
  'move': msPointerSupported ? 'MSPointerMove' : 'touchmove',
  'end': msPointerSupported ? 'MSPointerUp' : 'touchend'
};
var prefix = (function prefix() {
  var regex = /^(Webkit|Khtml|Moz|ms|O)(?=[A-Z])/;
  var styleDeclaration = doc.getElementsByTagName('script')[0].style;
  for (var prop in styleDeclaration) {
    if (regex.test(prop)) {
      return '-' + prop.match(regex)[0].toLowerCase() + '-';
    }
  }
  // Nothing found so far? Webkit does not enumerate over the CSS properties of the style object.
  // However (prop in style) returns the correct value, so we'll have to test for
  // the precence of a specific property
  if ('WebkitOpacity' in styleDeclaration) { return '-webkit-'; }
  if ('KhtmlOpacity' in styleDeclaration) { return '-khtml-'; }
  return '';
}());
function extend(destination, from) {
  for (var prop in from) {
    if (from[prop]) {
      destination[prop] = from[prop];
    }
  }
  return destination;
}
function inherits(child, uber) {
  child.prototype = extend(child.prototype || {}, uber.prototype);
}
function hasIgnoredElements(el) {
  while (el.parentNode) {
    if (el.getAttribute('data-slideout-ignore') !== null) {
      return el;
    }
    el = el.parentNode;
  }
  return null;
}

/**
 * Slideout constructor
 */
function Slideout(options) {
  options = options || {};

  // Sets default values
  this._startOffsetX = 0;
  this._currentOffsetX = 0;
  this._opening = false;
  this._moved = false;
  this._opened = false;
  this._preventOpen = false;
  this._touch = options.touch === undefined ? true : options.touch && true;
  this._side = options.side || 'left';

  // Sets panel
  this.panel = options.panel;
  this.menu = options.menu;

  // Sets  classnames
  if (!this.panel.classList.contains('slideout-panel')) {
    this.panel.classList.add('slideout-panel');
  }
  if (!this.panel.classList.contains('slideout-panel-' + this._side)) {
    this.panel.classList.add('slideout-panel-' + this._side);
  }
  if (!this.menu.classList.contains('slideout-menu')) {
    this.menu.classList.add('slideout-menu');
  }
  if (!this.menu.classList.contains('slideout-menu-' + this._side)) {
    this.menu.classList.add('slideout-menu-' + this._side);
  }

  // Sets options
  this._fx = options.fx || 'ease';
  this._duration = parseInt(options.duration, 10) || 300;
  this._tolerance = parseInt(options.tolerance, 10) || 70;
  this._padding = this._translateTo = parseInt(options.padding, 10) || 256;
  this._orientation = this._side === 'right' ? -1 : 1;
  this._translateTo *= this._orientation;

  // Init touch events
  if (this._touch) {
    this._initTouchEvents();
  }
}

/**
 * Inherits from Emitter
 */
inherits(Slideout, Emitter);

/**
 * Opens the slideout menu.
 */
Slideout.prototype.open = function() {
  var self = this;
  this.emit('beforeopen');
  if (!html.classList.contains('slideout-open')) {
    html.classList.add('slideout-open');
  }
  this._setTransition();
  this._translateXTo(this._translateTo);
  this._opened = true;
  setTimeout(function() {
    self.panel.style.transition = self.panel.style['-webkit-transition'] = '';
    self.emit('open');
  }, this._duration + 50);
  return this;
};

/**
 * Closes slideout menu.
 */
Slideout.prototype.close = function() {
  var self = this;
  if (!this.isOpen() && !this._opening) {
    return this;
  }
  this.emit('beforeclose');
  this._setTransition();
  this._translateXTo(0);
  this._opened = false;
  setTimeout(function() {
    html.classList.remove('slideout-open');
    self.panel.style.transition = self.panel.style['-webkit-transition'] = self.panel.style[prefix + 'transform'] = self.panel.style.transform = '';
    self.emit('close');
  }, this._duration + 50);
  return this;
};

/**
 * Toggles (open/close) slideout menu.
 */
Slideout.prototype.toggle = function() {
  return this.isOpen() ? this.close() : this.open();
};

/**
 * Returns true if the slideout is currently open, and false if it is closed.
 */
Slideout.prototype.isOpen = function() {
  return this._opened;
};

/**
 * Translates panel and updates currentOffset with a given X point
 */
Slideout.prototype._translateXTo = function(translateX) {
  this._currentOffsetX = translateX;
  this.panel.style[prefix + 'transform'] = this.panel.style.transform = 'translateX(' + translateX + 'px)';
  return this;
};

/**
 * Set transition properties
 */
Slideout.prototype._setTransition = function() {
  this.panel.style[prefix + 'transition'] = this.panel.style.transition = prefix + 'transform ' + this._duration + 'ms ' + this._fx;
  return this;
};

/**
 * Initializes touch event
 */
Slideout.prototype._initTouchEvents = function() {
  var self = this;

  /**
   * Decouple scroll event
   */
  this._onScrollFn = decouple(doc, 'scroll', function() {
    if (!self._moved) {
      clearTimeout(scrollTimeout);
      scrolling = true;
      scrollTimeout = setTimeout(function() {
        scrolling = false;
      }, 250);
    }
  });

  /**
   * Prevents touchmove event if slideout is moving
   */
  this._preventMove = function(eve) {
    if (self._moved) {
      eve.preventDefault();
    }
  };

  doc.addEventListener(touch.move, this._preventMove);

  /**
   * Resets values on touchstart
   */
  this._resetTouchFn = function(eve) {
    if (typeof eve.touches === 'undefined') {
      return;
    }

    self._moved = false;
    self._opening = false;
    self._startOffsetX = eve.touches[0].pageX;
    self._preventOpen = (!self._touch || (!self.isOpen() && self.menu.clientWidth !== 0));
  };

  this.panel.addEventListener(touch.start, this._resetTouchFn);

  /**
   * Resets values on touchcancel
   */
  this._onTouchCancelFn = function() {
    self._moved = false;
    self._opening = false;
  };

  this.panel.addEventListener('touchcancel', this._onTouchCancelFn);

  /**
   * Toggles slideout on touchend
   */
  this._onTouchEndFn = function() {
    if (self._moved) {
      self.emit('translateend');
      (self._opening && Math.abs(self._currentOffsetX) > self._tolerance) ? self.open() : self.close();
    }
    self._moved = false;
  };

  this.panel.addEventListener(touch.end, this._onTouchEndFn);

  /**
   * Translates panel on touchmove
   */
  this._onTouchMoveFn = function(eve) {
    if (
      scrolling ||
      self._preventOpen ||
      typeof eve.touches === 'undefined' ||
      hasIgnoredElements(eve.target)
    ) {
      return;
    }

    var dif_x = eve.touches[0].clientX - self._startOffsetX;
    var translateX = self._currentOffsetX = dif_x;

    if (Math.abs(translateX) > self._padding) {
      return;
    }

    if (Math.abs(dif_x) > 20) {

      self._opening = true;

      var oriented_dif_x = dif_x * self._orientation;

      if (self._opened && oriented_dif_x > 0 || !self._opened && oriented_dif_x < 0) {
        return;
      }

      if (!self._moved) {
        self.emit('translatestart');
      }

      if (oriented_dif_x <= 0) {
        translateX = dif_x + self._padding * self._orientation;
        self._opening = false;
      }

      if (!(self._moved && html.classList.contains('slideout-open'))) {
        html.classList.add('slideout-open');
      }

      self.panel.style[prefix + 'transform'] = self.panel.style.transform = 'translateX(' + translateX + 'px)';
      self.emit('translate', translateX);
      self._moved = true;
    }

  };

  this.panel.addEventListener(touch.move, this._onTouchMoveFn);

  return this;
};

/**
 * Enable opening the slideout via touch events.
 */
Slideout.prototype.enableTouch = function() {
  this._touch = true;
  return this;
};

/**
 * Disable opening the slideout via touch events.
 */
Slideout.prototype.disableTouch = function() {
  this._touch = false;
  return this;
};

/**
 * Destroy an instance of slideout.
 */
Slideout.prototype.destroy = function() {
  // Close before clean
  this.close();

  // Remove event listeners
  doc.removeEventListener(touch.move, this._preventMove);
  this.panel.removeEventListener(touch.start, this._resetTouchFn);
  this.panel.removeEventListener('touchcancel', this._onTouchCancelFn);
  this.panel.removeEventListener(touch.end, this._onTouchEndFn);
  this.panel.removeEventListener(touch.move, this._onTouchMoveFn);
  doc.removeEventListener('scroll', this._onScrollFn);

  // Remove methods
  this.open = this.close = function() {};

  // Return the instance so it can be easily dereferenced
  return this;
};

/**
 * Expose Slideout
 */
module.exports = Slideout;

},{"decouple":2,"emitter":3}],2:[function(require,module,exports){
'use strict';

var requestAnimFrame = (function() {
  return window.requestAnimationFrame ||
    window.webkitRequestAnimationFrame ||
    function (callback) {
      window.setTimeout(callback, 1000 / 60);
    };
}());

function decouple(node, event, fn) {
  var eve,
      tracking = false;

  function captureEvent(e) {
    eve = e;
    track();
  }

  function track() {
    if (!tracking) {
      requestAnimFrame(update);
      tracking = true;
    }
  }

  function update() {
    fn.call(node, eve);
    tracking = false;
  }

  node.addEventListener(event, captureEvent, false);

  return captureEvent;
}

/**
 * Expose decouple
 */
module.exports = decouple;

},{}],3:[function(require,module,exports){
"use strict";

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

exports.__esModule = true;
/**
 * Creates a new instance of Emitter.
 * @class
 * @returns {Object} Returns a new instance of Emitter.
 * @example
 * // Creates a new instance of Emitter.
 * var Emitter = require('emitter');
 *
 * var emitter = new Emitter();
 */

var Emitter = (function () {
  function Emitter() {
    _classCallCheck(this, Emitter);
  }

  /**
   * Adds a listener to the collection for the specified event.
   * @memberof! Emitter.prototype
   * @function
   * @param {String} event - The event name.
   * @param {Function} listener - A listener function to add.
   * @returns {Object} Returns an instance of Emitter.
   * @example
   * // Add an event listener to "foo" event.
   * emitter.on('foo', listener);
   */

  Emitter.prototype.on = function on(event, listener) {
    // Use the current collection or create it.
    this._eventCollection = this._eventCollection || {};

    // Use the current collection of an event or create it.
    this._eventCollection[event] = this._eventCollection[event] || [];

    // Appends the listener into the collection of the given event
    this._eventCollection[event].push(listener);

    return this;
  };

  /**
   * Adds a listener to the collection for the specified event that will be called only once.
   * @memberof! Emitter.prototype
   * @function
   * @param {String} event - The event name.
   * @param {Function} listener - A listener function to add.
   * @returns {Object} Returns an instance of Emitter.
   * @example
   * // Will add an event handler to "foo" event once.
   * emitter.once('foo', listener);
   */

  Emitter.prototype.once = function once(event, listener) {
    var self = this;

    function fn() {
      self.off(event, fn);
      listener.apply(this, arguments);
    }

    fn.listener = listener;

    this.on(event, fn);

    return this;
  };

  /**
   * Removes a listener from the collection for the specified event.
   * @memberof! Emitter.prototype
   * @function
   * @param {String} event - The event name.
   * @param {Function} listener - A listener function to remove.
   * @returns {Object} Returns an instance of Emitter.
   * @example
   * // Remove a given listener.
   * emitter.off('foo', listener);
   */

  Emitter.prototype.off = function off(event, listener) {

    var listeners = undefined;

    // Defines listeners value.
    if (!this._eventCollection || !(listeners = this._eventCollection[event])) {
      return this;
    }

    listeners.forEach(function (fn, i) {
      if (fn === listener || fn.listener === listener) {
        // Removes the given listener.
        listeners.splice(i, 1);
      }
    });

    // Removes an empty event collection.
    if (listeners.length === 0) {
      delete this._eventCollection[event];
    }

    return this;
  };

  /**
   * Execute each item in the listener collection in order with the specified data.
   * @memberof! Emitter.prototype
   * @function
   * @param {String} event - The name of the event you want to emit.
   * @param {...Object} data - Data to pass to the listeners.
   * @returns {Object} Returns an instance of Emitter.
   * @example
   * // Emits the "foo" event with 'param1' and 'param2' as arguments.
   * emitter.emit('foo', 'param1', 'param2');
   */

  Emitter.prototype.emit = function emit(event) {
    var _this = this;

    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    var listeners = undefined;

    // Defines listeners value.
    if (!this._eventCollection || !(listeners = this._eventCollection[event])) {
      return this;
    }

    // Clone listeners
    listeners = listeners.slice(0);

    listeners.forEach(function (fn) {
      return fn.apply(_this, args);
    });

    return this;
  };

  return Emitter;
})();

/**
 * Exports Emitter
 */
exports["default"] = Emitter;
module.exports = exports["default"];
},{}]},{},[1])(1)
});

var image_queue_count = 0
function readURL(input) {
  if (input.files && input.files[0]) {
    var reader = new FileReader();
    reader.onload = function(e) {
      $('.image-upload-wrap').hide();
      $('.file-upload-image').attr('src', e.target.result);
      $('.file-upload-content').show();
      $('.image-title').html("");
      $("#review_done").prop("disabled",true);
      image_queue_count++

 $.ajax({
    url: '/upload',
    type: 'POST',
    dataType: "JSON", 
    data: {role:"Front",
    	image_data: e.target.result},
    success: function(data){
      $("#front_image_id").val(data["id"]);
      image_queue_count--
      $("#review_done").prop("disabled",false);
      if ($('#loading').is(':visible')) {
	      if(image_queue_count == 0){
	      	$('#loading').hide();
	      	$('#step3').show();
	      }
	  }

    },
    error: function(xhr, ajaxOptions, thrownError){
    }        
  })

    };

    reader.readAsDataURL(input.files[0]);
    
  } else {
    removeUpload();
  }
}

function removeUpload() {
  $('.file-upload-input').replaceWith($('.file-upload-input').clone());
  $('.file-upload-content').hide();
  $('.image-upload-wrap').show();
  $('.file-upload-input')[0].value = "";
}
$('.image-upload-wrap').bind('dragover', function () {
    $('.image-upload-wrap').addClass('image-dropping');
  });
  $('.image-upload-wrap').bind('dragleave', function () {
    $('.image-upload-wrap').removeClass('image-dropping');
});


  function readURL2(input) {
  if (input.files && input.files[0]) {
    var reader = new FileReader();
    reader.onload = function(e) {
      $('.image-upload-wrap2').hide();
      $('.file-upload-image2').attr('src', e.target.result);
      $('.file-upload-content2').show();
      $('.image-title2').html("");
      $("#review_done").prop("disabled",true);
      image_queue_count++


  $.ajax({
    url: '/upload',
    type: 'POST',
    dataType: "JSON", 
    data: {role:"Back",
    	image_data: e.target.result},
    success: function(data){
      $("#back_image_id").val(data["id"]);
      image_queue_count--
      // alert(data["id"]);
      $("#review_done").prop("disabled",false);
      if ($('#loading').is(':visible')) {
	      if(image_queue_count == 0){
	      	$('#loading').hide();
	      	$('#step3').show();
	      }
	  }
    },
    error: function(xhr, ajaxOptions, thrownError){
    }        
  })
    };

    reader.readAsDataURL(input.files[0]);

  } else {
    removeUpload2();
  }
}

function removeUpload2() {
  $('.file-upload-input2').replaceWith($('.file-upload-input2').clone());
  $('.file-upload-content2').hide();
  $('.image-upload-wrap2').show();

  $('.file-upload-input2')[0].value = "";
}
$('.image-upload-wrap2').bind('dragover', function () {
    $('.image-upload-wrap2').addClass('image-dropping2');
  });
  $('.image-upload-wrap2').bind('dragleave', function () {
    $('.image-upload-wrap2').removeClass('image-dropping2');
});


  function readURL3(input) {
  if (input.files && input.files[0]) {

    var reader = new FileReader();

    reader.onload = function(e) {
      $('.image-upload-wrap3').hide();
      $('.file-upload-image3').attr('src', e.target.result);
      $('.file-upload-content3').show();
      $('.image-title3').html("");
      $("#review_done").prop("disabled",true);
      image_queue_count++

 $.ajax({
    url: '/upload',
    type: 'POST',
    dataType: "JSON", 
    data: {role:"Extra",
    	image_data: e.target.result},
    success: function(data){
      $("#extra_image_id").val(data["id"]);
      image_queue_count--
      $("#review_done").prop("disabled",false);
      if ($('#loading').is(':visible')) {
	      if(image_queue_count == 0){
	      	$('#loading').hide();
	      	$('#step3').show();
	      }
	  }
    },
    error: function(xhr, ajaxOptions, thrownError){
    }        
  })

    };

    reader.readAsDataURL(input.files[0]);

  } else {
    removeUpload3();
  }
}

function removeUpload3() {
  $('.file-upload-input3').replaceWith($('.file-upload-input3').clone());
  $('.file-upload-content3').hide();
  $('.image-upload-wrap3').show();

  $('.file-upload-input3')[0].value = "";
  $("#extra_image_id").val("");

}
$('.image-upload-wrap3').bind('dragover', function () {
    $('.image-upload-wrap3').addClass('image-dropping3');
  });
  $('.image-upload-wrap3').bind('dragleave', function () {
    $('.image-upload-wrap3').removeClass('image-dropping3');
});


function readURL4(input) {
  if (input.files && input.files[0]) {

    var reader = new FileReader();

    reader.onload = function(e) {
      $('.image-upload-wrap4').hide();

      $('.file-upload-image4').attr('src', e.target.result);
      $('.file-upload-content4').show();

      $('.image-title4').html("");
    };

    reader.readAsDataURL(input.files[0]);

  } else {
    removeUpload4();
  }
}

function removeUpload4() {
  $('.file-upload-input4').replaceWith($('.file-upload-input4').clone());
  $('.file-upload-content4').hide();
  $('.image-upload-wrap4').show();

  $('.file-upload-input4')[0].value = "";

}
$('.image-upload-wrap4').bind('dragover', function () {
    $('.image-upload-wrap4').addClass('image-dropping4');
  });
  $('.image-upload-wrap4').bind('dragleave', function () {
    $('.image-upload-wrap4').removeClass('image-dropping4');
});


function autocomplete(inp, arr) {
  /*the autocomplete function takes two arguments,
  the text field element and an array of possible autocompleted values:*/
  var currentFocus;
  /*execute a function when someone writes in the text field:*/
  inp.addEventListener("input", function(e) {
      var a, b, i, val = this.value;
      /*close any already open lists of autocompleted values*/
      closeAllLists();
      if (!val) { return false;}
      currentFocus = -1;
      /*create a DIV element that will contain the items (values):*/
      a = document.createElement("DIV");
      a.setAttribute("id", this.id + "autocomplete-list");
      a.setAttribute("class", "autocomplete-items");

      var elementy = $("#" + inp.id);
      if (elementy.width() > 300) {
      	a.setAttribute("style", "width:" + elementy.width() + "px;")
      }

      /*append the DIV element as a child of the autocomplete container:*/
      this.parentNode.appendChild(a);
      /*for each item in the array...*/
      for (i = 0; i < arr.length; i++) {
        /*check if the item starts with the same letters as the text field value:*/
        if (arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) {
          /*create a DIV element for each matching element:*/
          b = document.createElement("DIV");
          /*make the matching letters bold:*/
          b.innerHTML = "<strong>" + arr[i].substr(0, val.length) + "</strong>";
          b.innerHTML += arr[i].substr(val.length);
          /*insert a input field that will hold the current array item's value:*/
          b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";
          /*execute a function when someone clicks on the item value (DIV element):*/
              b.addEventListener("click", function(e) {


              /*insert the value for the autocomplete text field:*/
              inp.value = this.getElementsByTagName("input")[0].value;
              /*close the list of autocompleted values,
              (or any other open lists of autocompleted values:*/

              	if (inp.id == "product_searcher") {
              		$("#product_searchy").submit();
              	}
              	if (inp.id == "post_search") {
              		$("#post_searchy").submit();
              	}

              closeAllLists();
          });
          a.appendChild(b);
        }
      }
  });
  /*execute a function presses a key on the keyboard:*/
  inp.addEventListener("keydown", function(e) {
      var x = document.getElementById(this.id + "autocomplete-list");
      if (x) x = x.getElementsByTagName("div");
      if (e.keyCode == 40) {
        /*If the arrow DOWN key is pressed,
        increase the currentFocus variable:*/
        currentFocus++;
        /*and and make the current item more visible:*/
        addActive(x);
      } else if (e.keyCode == 38) { //up
        /*If the arrow UP key is pressed,
        decrease the currentFocus variable:*/
        currentFocus--;
        /*and and make the current item more visible:*/
        addActive(x);
      } else if (e.keyCode == 13) {
        /*If the ENTER key is pressed, prevent the form from being submitted,*/
        e.preventDefault();
        if (currentFocus > -1) {
          /*and simulate a click on the "active" item:*/
          if (x) x[currentFocus].click();
        }
      }
  });
  function addActive(x) {
    /*a function to classify an item as "active":*/
    if (!x) return false;
    /*start by removing the "active" class on all items:*/
    removeActive(x);
    if (currentFocus >= x.length) currentFocus = 0;
    if (currentFocus < 0) currentFocus = (x.length - 1);
    /*add class "autocomplete-active":*/
    x[currentFocus].classList.add("autocomplete-active");
  }
  function removeActive(x) {
    /*a function to remove the "active" class from all autocomplete items:*/
    for (var i = 0; i < x.length; i++) {
      x[i].classList.remove("autocomplete-active");
    }
  }
  function closeAllLists(elmnt) {
    /*close all autocomplete lists in the document,
    except the one passed as an argument:*/
    var x = document.getElementsByClassName("autocomplete-items");
    for (var i = 0; i < x.length; i++) {
      if (elmnt != x[i] && elmnt != inp) {
      x[i].parentNode.removeChild(x[i]);
    }
  }
}
/*execute a function when someone clicks in the document:*/
document.addEventListener("click", function (e) {
    closeAllLists(e.target);
});
}

on(document, "click", "a[data-restores-last-page-fetched]", function(event) {
  const { target: a } = event
  const { restoresLastPageFetched: key } = a.dataset
  const lastPageFetched = sessionStorage.getItem(key)

  if (lastPageFetched) {
    a.href = lastPageFetched
  }
})

// https://developer.mozilla.org/en-US/docs/Web/API/Element/matches
if (!Element.prototype.matches) {
  Element.prototype.matches =
    Element.prototype.msMatchesSelector ||
    Element.prototype.webkitMatchesSelector;
}

// https://developer.mozilla.org/en-US/docs/Web/API/Element/closest
if (!Element.prototype.closest) {
  Element.prototype.closest = function(s) {
    var el = this;
    if (!document.documentElement.contains(el)) return null;
    do {
      if (el.matches(s)) return el;
      el = el.parentElement || el.parentNode;
    } while (el !== null && el.nodeType === 1);
    return null;
  };
}

function on(element, event, selector, handler) {
  element.addEventListener(event, function(_event) {
    var target = _event.target;

    while (target && target !== this) {
      if (target.matches(selector)) {
          handler.call(target, _event);
      }

      target = target.parentNode;
    }
  });
}

// adapted from examples here:
//
//   https://github.com/turbolinks/turbolinks/issues/2#issuecomment-180631563
//   https://stackoverflow.com/a/41704079/1947079
//
Turbolinks.savedScrolls = {}

document.addEventListener("turbolinks:render", function(event) {
  const savedScroll = Turbolinks.savedScrolls[window.location.href]
  if (!savedScroll) { return; }

  delete(Turbolinks.savedScrolls[window.location.href])

  if (savedScroll.document != null) {
    if (savedScroll.document < document.documentElement.scrollHeight) {

  setTimeout(
    function() {
    	document.documentElement.scrollTop = savedScroll.document

    }, 400);
      
    }
  }

  if (savedScroll.body != null) {
    if (savedScroll.body < document.body.scrollHeight) {
    setTimeout(
    function() {
    	window.scrollTo(0,localStorage.getItem("scroll"));
    }, 400);
    }
  }
});

document.addEventListener("turbolinks:before-visit", function(event) {
  if (document.querySelector("body[data-preserve-scroll=true]")) {
    Turbolinks.savedScrolls = {
      [window.location.href]: {
        document: document.documentElement.scrollTop,
        body: document.body.scrollTop
      }
    }
    localStorage.setItem("scroll", document.documentElement.scrollTop);
  }
});

function clearScroller() {
sessionStorage.removeItem('index');
sessionStorage.removeItem('scroll');
window.location.href = '/';
}

function setCatQuery(url, secure_id) {
history.replaceState({ turbolinks: { restorationIdentifier: secure_id} }, '', url)
sessionStorage.setItem("pages_index", url);
}

function clearScroller2() {
sessionStorage.removeItem('index');
sessionStorage.removeItem('scroll');
window.location.href = '/community';
}

function setCatQuery2(url, secure_id) {
history.replaceState({ turbolinks: { restorationIdentifier: secure_id} }, '', url)
sessionStorage.setItem("posts_index", url);
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJpbmRleC5qcyIsIm5vZGVfbW9kdWxlcy9kZWNvdXBsZS9pbmRleC5qcyIsIm5vZGVfbW9kdWxlcy9lbWl0dGVyL2Rpc3QvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzFWQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3hDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiJ3VzZSBzdHJpY3QnO1xuXG4vKipcbiAqIE1vZHVsZSBkZXBlbmRlbmNpZXNcbiAqL1xudmFyIGRlY291cGxlID0gcmVxdWlyZSgnZGVjb3VwbGUnKTtcbnZhciBFbWl0dGVyID0gcmVxdWlyZSgnZW1pdHRlcicpO1xuXG4vKipcbiAqIFByaXZhdGVzXG4gKi9cbnZhciBzY3JvbGxUaW1lb3V0O1xudmFyIHNjcm9sbGluZyA9IGZhbHNlO1xudmFyIGRvYyA9IHdpbmRvdy5kb2N1bWVudDtcbnZhciBodG1sID0gZG9jLmRvY3VtZW50RWxlbWVudDtcbnZhciBtc1BvaW50ZXJTdXBwb3J0ZWQgPSB3aW5kb3cubmF2aWdhdG9yLm1zUG9pbnRlckVuYWJsZWQ7XG52YXIgdG91Y2ggPSB7XG4gICdzdGFydCc6IG1zUG9pbnRlclN1cHBvcnRlZCA/ICdNU1BvaW50ZXJEb3duJyA6ICd0b3VjaHN0YXJ0JyxcbiAgJ21vdmUnOiBtc1BvaW50ZXJTdXBwb3J0ZWQgPyAnTVNQb2ludGVyTW92ZScgOiAndG91Y2htb3ZlJyxcbiAgJ2VuZCc6IG1zUG9pbnRlclN1cHBvcnRlZCA/ICdNU1BvaW50ZXJVcCcgOiAndG91Y2hlbmQnXG59O1xudmFyIHByZWZpeCA9IChmdW5jdGlvbiBwcmVmaXgoKSB7XG4gIHZhciByZWdleCA9IC9eKFdlYmtpdHxLaHRtbHxNb3p8bXN8TykoPz1bQS1aXSkvO1xuICB2YXIgc3R5bGVEZWNsYXJhdGlvbiA9IGRvYy5nZXRFbGVtZW50c0J5VGFnTmFtZSgnc2NyaXB0JylbMF0uc3R5bGU7XG4gIGZvciAodmFyIHByb3AgaW4gc3R5bGVEZWNsYXJhdGlvbikge1xuICAgIGlmIChyZWdleC50ZXN0KHByb3ApKSB7XG4gICAgICByZXR1cm4gJy0nICsgcHJvcC5tYXRjaChyZWdleClbMF0udG9Mb3dlckNhc2UoKSArICctJztcbiAgICB9XG4gIH1cbiAgLy8gTm90aGluZyBmb3VuZCBzbyBmYXI/IFdlYmtpdCBkb2VzIG5vdCBlbnVtZXJhdGUgb3ZlciB0aGUgQ1NTIHByb3BlcnRpZXMgb2YgdGhlIHN0eWxlIG9iamVjdC5cbiAgLy8gSG93ZXZlciAocHJvcCBpbiBzdHlsZSkgcmV0dXJucyB0aGUgY29ycmVjdCB2YWx1ZSwgc28gd2UnbGwgaGF2ZSB0byB0ZXN0IGZvclxuICAvLyB0aGUgcHJlY2VuY2Ugb2YgYSBzcGVjaWZpYyBwcm9wZXJ0eVxuICBpZiAoJ1dlYmtpdE9wYWNpdHknIGluIHN0eWxlRGVjbGFyYXRpb24pIHsgcmV0dXJuICctd2Via2l0LSc7IH1cbiAgaWYgKCdLaHRtbE9wYWNpdHknIGluIHN0eWxlRGVjbGFyYXRpb24pIHsgcmV0dXJuICcta2h0bWwtJzsgfVxuICByZXR1cm4gJyc7XG59KCkpO1xuZnVuY3Rpb24gZXh0ZW5kKGRlc3RpbmF0aW9uLCBmcm9tKSB7XG4gIGZvciAodmFyIHByb3AgaW4gZnJvbSkge1xuICAgIGlmIChmcm9tW3Byb3BdKSB7XG4gICAgICBkZXN0aW5hdGlvbltwcm9wXSA9IGZyb21bcHJvcF07XG4gICAgfVxuICB9XG4gIHJldHVybiBkZXN0aW5hdGlvbjtcbn1cbmZ1bmN0aW9uIGluaGVyaXRzKGNoaWxkLCB1YmVyKSB7XG4gIGNoaWxkLnByb3RvdHlwZSA9IGV4dGVuZChjaGlsZC5wcm90b3R5cGUgfHwge30sIHViZXIucHJvdG90eXBlKTtcbn1cbmZ1bmN0aW9uIGhhc0lnbm9yZWRFbGVtZW50cyhlbCkge1xuICB3aGlsZSAoZWwucGFyZW50Tm9kZSkge1xuICAgIGlmIChlbC5nZXRBdHRyaWJ1dGUoJ2RhdGEtc2xpZGVvdXQtaWdub3JlJykgIT09IG51bGwpIHtcbiAgICAgIHJldHVybiBlbDtcbiAgICB9XG4gICAgZWwgPSBlbC5wYXJlbnROb2RlO1xuICB9XG4gIHJldHVybiBudWxsO1xufVxuXG4vKipcbiAqIFNsaWRlb3V0IGNvbnN0cnVjdG9yXG4gKi9cbmZ1bmN0aW9uIFNsaWRlb3V0KG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG5cbiAgLy8gU2V0cyBkZWZhdWx0IHZhbHVlc1xuICB0aGlzLl9zdGFydE9mZnNldFggPSAwO1xuICB0aGlzLl9jdXJyZW50T2Zmc2V0WCA9IDA7XG4gIHRoaXMuX29wZW5pbmcgPSBmYWxzZTtcbiAgdGhpcy5fbW92ZWQgPSBmYWxzZTtcbiAgdGhpcy5fb3BlbmVkID0gZmFsc2U7XG4gIHRoaXMuX3ByZXZlbnRPcGVuID0gZmFsc2U7XG4gIHRoaXMuX3RvdWNoID0gb3B0aW9ucy50b3VjaCA9PT0gdW5kZWZpbmVkID8gdHJ1ZSA6IG9wdGlvbnMudG91Y2ggJiYgdHJ1ZTtcbiAgdGhpcy5fc2lkZSA9IG9wdGlvbnMuc2lkZSB8fCAnbGVmdCc7XG5cbiAgLy8gU2V0cyBwYW5lbFxuICB0aGlzLnBhbmVsID0gb3B0aW9ucy5wYW5lbDtcbiAgdGhpcy5tZW51ID0gb3B0aW9ucy5tZW51O1xuXG4gIC8vIFNldHMgIGNsYXNzbmFtZXNcbiAgaWYgKCF0aGlzLnBhbmVsLmNsYXNzTGlzdC5jb250YWlucygnc2xpZGVvdXQtcGFuZWwnKSkge1xuICAgIHRoaXMucGFuZWwuY2xhc3NMaXN0LmFkZCgnc2xpZGVvdXQtcGFuZWwnKTtcbiAgfVxuICBpZiAoIXRoaXMucGFuZWwuY2xhc3NMaXN0LmNvbnRhaW5zKCdzbGlkZW91dC1wYW5lbC0nICsgdGhpcy5fc2lkZSkpIHtcbiAgICB0aGlzLnBhbmVsLmNsYXNzTGlzdC5hZGQoJ3NsaWRlb3V0LXBhbmVsLScgKyB0aGlzLl9zaWRlKTtcbiAgfVxuICBpZiAoIXRoaXMubWVudS5jbGFzc0xpc3QuY29udGFpbnMoJ3NsaWRlb3V0LW1lbnUnKSkge1xuICAgIHRoaXMubWVudS5jbGFzc0xpc3QuYWRkKCdzbGlkZW91dC1tZW51Jyk7XG4gIH1cbiAgaWYgKCF0aGlzLm1lbnUuY2xhc3NMaXN0LmNvbnRhaW5zKCdzbGlkZW91dC1tZW51LScgKyB0aGlzLl9zaWRlKSkge1xuICAgIHRoaXMubWVudS5jbGFzc0xpc3QuYWRkKCdzbGlkZW91dC1tZW51LScgKyB0aGlzLl9zaWRlKTtcbiAgfVxuXG4gIC8vIFNldHMgb3B0aW9uc1xuICB0aGlzLl9meCA9IG9wdGlvbnMuZnggfHwgJ2Vhc2UnO1xuICB0aGlzLl9kdXJhdGlvbiA9IHBhcnNlSW50KG9wdGlvbnMuZHVyYXRpb24sIDEwKSB8fCAzMDA7XG4gIHRoaXMuX3RvbGVyYW5jZSA9IHBhcnNlSW50KG9wdGlvbnMudG9sZXJhbmNlLCAxMCkgfHwgNzA7XG4gIHRoaXMuX3BhZGRpbmcgPSB0aGlzLl90cmFuc2xhdGVUbyA9IHBhcnNlSW50KG9wdGlvbnMucGFkZGluZywgMTApIHx8IDI1NjtcbiAgdGhpcy5fb3JpZW50YXRpb24gPSB0aGlzLl9zaWRlID09PSAncmlnaHQnID8gLTEgOiAxO1xuICB0aGlzLl90cmFuc2xhdGVUbyAqPSB0aGlzLl9vcmllbnRhdGlvbjtcblxuICAvLyBJbml0IHRvdWNoIGV2ZW50c1xuICBpZiAodGhpcy5fdG91Y2gpIHtcbiAgICB0aGlzLl9pbml0VG91Y2hFdmVudHMoKTtcbiAgfVxufVxuXG4vKipcbiAqIEluaGVyaXRzIGZyb20gRW1pdHRlclxuICovXG5pbmhlcml0cyhTbGlkZW91dCwgRW1pdHRlcik7XG5cbi8qKlxuICogT3BlbnMgdGhlIHNsaWRlb3V0IG1lbnUuXG4gKi9cblNsaWRlb3V0LnByb3RvdHlwZS5vcGVuID0gZnVuY3Rpb24oKSB7XG4gIHZhciBzZWxmID0gdGhpcztcbiAgdGhpcy5lbWl0KCdiZWZvcmVvcGVuJyk7XG4gIGlmICghaHRtbC5jbGFzc0xpc3QuY29udGFpbnMoJ3NsaWRlb3V0LW9wZW4nKSkge1xuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgnc2xpZGVvdXQtb3BlbicpO1xuICB9XG4gIHRoaXMuX3NldFRyYW5zaXRpb24oKTtcbiAgdGhpcy5fdHJhbnNsYXRlWFRvKHRoaXMuX3RyYW5zbGF0ZVRvKTtcbiAgdGhpcy5fb3BlbmVkID0gdHJ1ZTtcbiAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICBzZWxmLnBhbmVsLnN0eWxlLnRyYW5zaXRpb24gPSBzZWxmLnBhbmVsLnN0eWxlWyctd2Via2l0LXRyYW5zaXRpb24nXSA9ICcnO1xuICAgIHNlbGYuZW1pdCgnb3BlbicpO1xuICB9LCB0aGlzLl9kdXJhdGlvbiArIDUwKTtcbiAgcmV0dXJuIHRoaXM7XG59O1xuXG4vKipcbiAqIENsb3NlcyBzbGlkZW91dCBtZW51LlxuICovXG5TbGlkZW91dC5wcm90b3R5cGUuY2xvc2UgPSBmdW5jdGlvbigpIHtcbiAgdmFyIHNlbGYgPSB0aGlzO1xuICBpZiAoIXRoaXMuaXNPcGVuKCkgJiYgIXRoaXMuX29wZW5pbmcpIHtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuICB0aGlzLmVtaXQoJ2JlZm9yZWNsb3NlJyk7XG4gIHRoaXMuX3NldFRyYW5zaXRpb24oKTtcbiAgdGhpcy5fdHJhbnNsYXRlWFRvKDApO1xuICB0aGlzLl9vcGVuZWQgPSBmYWxzZTtcbiAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICBodG1sLmNsYXNzTGlzdC5yZW1vdmUoJ3NsaWRlb3V0LW9wZW4nKTtcbiAgICBzZWxmLnBhbmVsLnN0eWxlLnRyYW5zaXRpb24gPSBzZWxmLnBhbmVsLnN0eWxlWyctd2Via2l0LXRyYW5zaXRpb24nXSA9IHNlbGYucGFuZWwuc3R5bGVbcHJlZml4ICsgJ3RyYW5zZm9ybSddID0gc2VsZi5wYW5lbC5zdHlsZS50cmFuc2Zvcm0gPSAnJztcbiAgICBzZWxmLmVtaXQoJ2Nsb3NlJyk7XG4gIH0sIHRoaXMuX2R1cmF0aW9uICsgNTApO1xuICByZXR1cm4gdGhpcztcbn07XG5cbi8qKlxuICogVG9nZ2xlcyAob3Blbi9jbG9zZSkgc2xpZGVvdXQgbWVudS5cbiAqL1xuU2xpZGVvdXQucHJvdG90eXBlLnRvZ2dsZSA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gdGhpcy5pc09wZW4oKSA/IHRoaXMuY2xvc2UoKSA6IHRoaXMub3BlbigpO1xufTtcblxuLyoqXG4gKiBSZXR1cm5zIHRydWUgaWYgdGhlIHNsaWRlb3V0IGlzIGN1cnJlbnRseSBvcGVuLCBhbmQgZmFsc2UgaWYgaXQgaXMgY2xvc2VkLlxuICovXG5TbGlkZW91dC5wcm90b3R5cGUuaXNPcGVuID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiB0aGlzLl9vcGVuZWQ7XG59O1xuXG4vKipcbiAqIFRyYW5zbGF0ZXMgcGFuZWwgYW5kIHVwZGF0ZXMgY3VycmVudE9mZnNldCB3aXRoIGEgZ2l2ZW4gWCBwb2ludFxuICovXG5TbGlkZW91dC5wcm90b3R5cGUuX3RyYW5zbGF0ZVhUbyA9IGZ1bmN0aW9uKHRyYW5zbGF0ZVgpIHtcbiAgdGhpcy5fY3VycmVudE9mZnNldFggPSB0cmFuc2xhdGVYO1xuICB0aGlzLnBhbmVsLnN0eWxlW3ByZWZpeCArICd0cmFuc2Zvcm0nXSA9IHRoaXMucGFuZWwuc3R5bGUudHJhbnNmb3JtID0gJ3RyYW5zbGF0ZVgoJyArIHRyYW5zbGF0ZVggKyAncHgpJztcbiAgcmV0dXJuIHRoaXM7XG59O1xuXG4vKipcbiAqIFNldCB0cmFuc2l0aW9uIHByb3BlcnRpZXNcbiAqL1xuU2xpZGVvdXQucHJvdG90eXBlLl9zZXRUcmFuc2l0aW9uID0gZnVuY3Rpb24oKSB7XG4gIHRoaXMucGFuZWwuc3R5bGVbcHJlZml4ICsgJ3RyYW5zaXRpb24nXSA9IHRoaXMucGFuZWwuc3R5bGUudHJhbnNpdGlvbiA9IHByZWZpeCArICd0cmFuc2Zvcm0gJyArIHRoaXMuX2R1cmF0aW9uICsgJ21zICcgKyB0aGlzLl9meDtcbiAgcmV0dXJuIHRoaXM7XG59O1xuXG4vKipcbiAqIEluaXRpYWxpemVzIHRvdWNoIGV2ZW50XG4gKi9cblNsaWRlb3V0LnByb3RvdHlwZS5faW5pdFRvdWNoRXZlbnRzID0gZnVuY3Rpb24oKSB7XG4gIHZhciBzZWxmID0gdGhpcztcblxuICAvKipcbiAgICogRGVjb3VwbGUgc2Nyb2xsIGV2ZW50XG4gICAqL1xuICB0aGlzLl9vblNjcm9sbEZuID0gZGVjb3VwbGUoZG9jLCAnc2Nyb2xsJywgZnVuY3Rpb24oKSB7XG4gICAgaWYgKCFzZWxmLl9tb3ZlZCkge1xuICAgICAgY2xlYXJUaW1lb3V0KHNjcm9sbFRpbWVvdXQpO1xuICAgICAgc2Nyb2xsaW5nID0gdHJ1ZTtcbiAgICAgIHNjcm9sbFRpbWVvdXQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICBzY3JvbGxpbmcgPSBmYWxzZTtcbiAgICAgIH0sIDI1MCk7XG4gICAgfVxuICB9KTtcblxuICAvKipcbiAgICogUHJldmVudHMgdG91Y2htb3ZlIGV2ZW50IGlmIHNsaWRlb3V0IGlzIG1vdmluZ1xuICAgKi9cbiAgdGhpcy5fcHJldmVudE1vdmUgPSBmdW5jdGlvbihldmUpIHtcbiAgICBpZiAoc2VsZi5fbW92ZWQpIHtcbiAgICAgIGV2ZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH1cbiAgfTtcblxuICBkb2MuYWRkRXZlbnRMaXN0ZW5lcih0b3VjaC5tb3ZlLCB0aGlzLl9wcmV2ZW50TW92ZSk7XG5cbiAgLyoqXG4gICAqIFJlc2V0cyB2YWx1ZXMgb24gdG91Y2hzdGFydFxuICAgKi9cbiAgdGhpcy5fcmVzZXRUb3VjaEZuID0gZnVuY3Rpb24oZXZlKSB7XG4gICAgaWYgKHR5cGVvZiBldmUudG91Y2hlcyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBzZWxmLl9tb3ZlZCA9IGZhbHNlO1xuICAgIHNlbGYuX29wZW5pbmcgPSBmYWxzZTtcbiAgICBzZWxmLl9zdGFydE9mZnNldFggPSBldmUudG91Y2hlc1swXS5wYWdlWDtcbiAgICBzZWxmLl9wcmV2ZW50T3BlbiA9ICghc2VsZi5fdG91Y2ggfHwgKCFzZWxmLmlzT3BlbigpICYmIHNlbGYubWVudS5jbGllbnRXaWR0aCAhPT0gMCkpO1xuICB9O1xuXG4gIHRoaXMucGFuZWwuYWRkRXZlbnRMaXN0ZW5lcih0b3VjaC5zdGFydCwgdGhpcy5fcmVzZXRUb3VjaEZuKTtcblxuICAvKipcbiAgICogUmVzZXRzIHZhbHVlcyBvbiB0b3VjaGNhbmNlbFxuICAgKi9cbiAgdGhpcy5fb25Ub3VjaENhbmNlbEZuID0gZnVuY3Rpb24oKSB7XG4gICAgc2VsZi5fbW92ZWQgPSBmYWxzZTtcbiAgICBzZWxmLl9vcGVuaW5nID0gZmFsc2U7XG4gIH07XG5cbiAgdGhpcy5wYW5lbC5hZGRFdmVudExpc3RlbmVyKCd0b3VjaGNhbmNlbCcsIHRoaXMuX29uVG91Y2hDYW5jZWxGbik7XG5cbiAgLyoqXG4gICAqIFRvZ2dsZXMgc2xpZGVvdXQgb24gdG91Y2hlbmRcbiAgICovXG4gIHRoaXMuX29uVG91Y2hFbmRGbiA9IGZ1bmN0aW9uKCkge1xuICAgIGlmIChzZWxmLl9tb3ZlZCkge1xuICAgICAgc2VsZi5lbWl0KCd0cmFuc2xhdGVlbmQnKTtcbiAgICAgIChzZWxmLl9vcGVuaW5nICYmIE1hdGguYWJzKHNlbGYuX2N1cnJlbnRPZmZzZXRYKSA+IHNlbGYuX3RvbGVyYW5jZSkgPyBzZWxmLm9wZW4oKSA6IHNlbGYuY2xvc2UoKTtcbiAgICB9XG4gICAgc2VsZi5fbW92ZWQgPSBmYWxzZTtcbiAgfTtcblxuICB0aGlzLnBhbmVsLmFkZEV2ZW50TGlzdGVuZXIodG91Y2guZW5kLCB0aGlzLl9vblRvdWNoRW5kRm4pO1xuXG4gIC8qKlxuICAgKiBUcmFuc2xhdGVzIHBhbmVsIG9uIHRvdWNobW92ZVxuICAgKi9cbiAgdGhpcy5fb25Ub3VjaE1vdmVGbiA9IGZ1bmN0aW9uKGV2ZSkge1xuICAgIGlmIChcbiAgICAgIHNjcm9sbGluZyB8fFxuICAgICAgc2VsZi5fcHJldmVudE9wZW4gfHxcbiAgICAgIHR5cGVvZiBldmUudG91Y2hlcyA9PT0gJ3VuZGVmaW5lZCcgfHxcbiAgICAgIGhhc0lnbm9yZWRFbGVtZW50cyhldmUudGFyZ2V0KVxuICAgICkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHZhciBkaWZfeCA9IGV2ZS50b3VjaGVzWzBdLmNsaWVudFggLSBzZWxmLl9zdGFydE9mZnNldFg7XG4gICAgdmFyIHRyYW5zbGF0ZVggPSBzZWxmLl9jdXJyZW50T2Zmc2V0WCA9IGRpZl94O1xuXG4gICAgaWYgKE1hdGguYWJzKHRyYW5zbGF0ZVgpID4gc2VsZi5fcGFkZGluZykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmIChNYXRoLmFicyhkaWZfeCkgPiAyMCkge1xuXG4gICAgICBzZWxmLl9vcGVuaW5nID0gdHJ1ZTtcblxuICAgICAgdmFyIG9yaWVudGVkX2RpZl94ID0gZGlmX3ggKiBzZWxmLl9vcmllbnRhdGlvbjtcblxuICAgICAgaWYgKHNlbGYuX29wZW5lZCAmJiBvcmllbnRlZF9kaWZfeCA+IDAgfHwgIXNlbGYuX29wZW5lZCAmJiBvcmllbnRlZF9kaWZfeCA8IDApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBpZiAoIXNlbGYuX21vdmVkKSB7XG4gICAgICAgIHNlbGYuZW1pdCgndHJhbnNsYXRlc3RhcnQnKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG9yaWVudGVkX2RpZl94IDw9IDApIHtcbiAgICAgICAgdHJhbnNsYXRlWCA9IGRpZl94ICsgc2VsZi5fcGFkZGluZyAqIHNlbGYuX29yaWVudGF0aW9uO1xuICAgICAgICBzZWxmLl9vcGVuaW5nID0gZmFsc2U7XG4gICAgICB9XG5cbiAgICAgIGlmICghKHNlbGYuX21vdmVkICYmIGh0bWwuY2xhc3NMaXN0LmNvbnRhaW5zKCdzbGlkZW91dC1vcGVuJykpKSB7XG4gICAgICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgnc2xpZGVvdXQtb3BlbicpO1xuICAgICAgfVxuXG4gICAgICBzZWxmLnBhbmVsLnN0eWxlW3ByZWZpeCArICd0cmFuc2Zvcm0nXSA9IHNlbGYucGFuZWwuc3R5bGUudHJhbnNmb3JtID0gJ3RyYW5zbGF0ZVgoJyArIHRyYW5zbGF0ZVggKyAncHgpJztcbiAgICAgIHNlbGYuZW1pdCgndHJhbnNsYXRlJywgdHJhbnNsYXRlWCk7XG4gICAgICBzZWxmLl9tb3ZlZCA9IHRydWU7XG4gICAgfVxuXG4gIH07XG5cbiAgdGhpcy5wYW5lbC5hZGRFdmVudExpc3RlbmVyKHRvdWNoLm1vdmUsIHRoaXMuX29uVG91Y2hNb3ZlRm4pO1xuXG4gIHJldHVybiB0aGlzO1xufTtcblxuLyoqXG4gKiBFbmFibGUgb3BlbmluZyB0aGUgc2xpZGVvdXQgdmlhIHRvdWNoIGV2ZW50cy5cbiAqL1xuU2xpZGVvdXQucHJvdG90eXBlLmVuYWJsZVRvdWNoID0gZnVuY3Rpb24oKSB7XG4gIHRoaXMuX3RvdWNoID0gdHJ1ZTtcbiAgcmV0dXJuIHRoaXM7XG59O1xuXG4vKipcbiAqIERpc2FibGUgb3BlbmluZyB0aGUgc2xpZGVvdXQgdmlhIHRvdWNoIGV2ZW50cy5cbiAqL1xuU2xpZGVvdXQucHJvdG90eXBlLmRpc2FibGVUb3VjaCA9IGZ1bmN0aW9uKCkge1xuICB0aGlzLl90b3VjaCA9IGZhbHNlO1xuICByZXR1cm4gdGhpcztcbn07XG5cbi8qKlxuICogRGVzdHJveSBhbiBpbnN0YW5jZSBvZiBzbGlkZW91dC5cbiAqL1xuU2xpZGVvdXQucHJvdG90eXBlLmRlc3Ryb3kgPSBmdW5jdGlvbigpIHtcbiAgLy8gQ2xvc2UgYmVmb3JlIGNsZWFuXG4gIHRoaXMuY2xvc2UoKTtcblxuICAvLyBSZW1vdmUgZXZlbnQgbGlzdGVuZXJzXG4gIGRvYy5yZW1vdmVFdmVudExpc3RlbmVyKHRvdWNoLm1vdmUsIHRoaXMuX3ByZXZlbnRNb3ZlKTtcbiAgdGhpcy5wYW5lbC5yZW1vdmVFdmVudExpc3RlbmVyKHRvdWNoLnN0YXJ0LCB0aGlzLl9yZXNldFRvdWNoRm4pO1xuICB0aGlzLnBhbmVsLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3RvdWNoY2FuY2VsJywgdGhpcy5fb25Ub3VjaENhbmNlbEZuKTtcbiAgdGhpcy5wYW5lbC5yZW1vdmVFdmVudExpc3RlbmVyKHRvdWNoLmVuZCwgdGhpcy5fb25Ub3VjaEVuZEZuKTtcbiAgdGhpcy5wYW5lbC5yZW1vdmVFdmVudExpc3RlbmVyKHRvdWNoLm1vdmUsIHRoaXMuX29uVG91Y2hNb3ZlRm4pO1xuICBkb2MucmVtb3ZlRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgdGhpcy5fb25TY3JvbGxGbik7XG5cbiAgLy8gUmVtb3ZlIG1ldGhvZHNcbiAgdGhpcy5vcGVuID0gdGhpcy5jbG9zZSA9IGZ1bmN0aW9uKCkge307XG5cbiAgLy8gUmV0dXJuIHRoZSBpbnN0YW5jZSBzbyBpdCBjYW4gYmUgZWFzaWx5IGRlcmVmZXJlbmNlZFxuICByZXR1cm4gdGhpcztcbn07XG5cbi8qKlxuICogRXhwb3NlIFNsaWRlb3V0XG4gKi9cbm1vZHVsZS5leHBvcnRzID0gU2xpZGVvdXQ7XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciByZXF1ZXN0QW5pbUZyYW1lID0gKGZ1bmN0aW9uKCkge1xuICByZXR1cm4gd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSB8fFxuICAgIHdpbmRvdy53ZWJraXRSZXF1ZXN0QW5pbWF0aW9uRnJhbWUgfHxcbiAgICBmdW5jdGlvbiAoY2FsbGJhY2spIHtcbiAgICAgIHdpbmRvdy5zZXRUaW1lb3V0KGNhbGxiYWNrLCAxMDAwIC8gNjApO1xuICAgIH07XG59KCkpO1xuXG5mdW5jdGlvbiBkZWNvdXBsZShub2RlLCBldmVudCwgZm4pIHtcbiAgdmFyIGV2ZSxcbiAgICAgIHRyYWNraW5nID0gZmFsc2U7XG5cbiAgZnVuY3Rpb24gY2FwdHVyZUV2ZW50KGUpIHtcbiAgICBldmUgPSBlO1xuICAgIHRyYWNrKCk7XG4gIH1cblxuICBmdW5jdGlvbiB0cmFjaygpIHtcbiAgICBpZiAoIXRyYWNraW5nKSB7XG4gICAgICByZXF1ZXN0QW5pbUZyYW1lKHVwZGF0ZSk7XG4gICAgICB0cmFja2luZyA9IHRydWU7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gdXBkYXRlKCkge1xuICAgIGZuLmNhbGwobm9kZSwgZXZlKTtcbiAgICB0cmFja2luZyA9IGZhbHNlO1xuICB9XG5cbiAgbm9kZS5hZGRFdmVudExpc3RlbmVyKGV2ZW50LCBjYXB0dXJlRXZlbnQsIGZhbHNlKTtcblxuICByZXR1cm4gY2FwdHVyZUV2ZW50O1xufVxuXG4vKipcbiAqIEV4cG9zZSBkZWNvdXBsZVxuICovXG5tb2R1bGUuZXhwb3J0cyA9IGRlY291cGxlO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBfY2xhc3NDYWxsQ2hlY2sgPSBmdW5jdGlvbiAoaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfTtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbi8qKlxuICogQ3JlYXRlcyBhIG5ldyBpbnN0YW5jZSBvZiBFbWl0dGVyLlxuICogQGNsYXNzXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIGEgbmV3IGluc3RhbmNlIG9mIEVtaXR0ZXIuXG4gKiBAZXhhbXBsZVxuICogLy8gQ3JlYXRlcyBhIG5ldyBpbnN0YW5jZSBvZiBFbWl0dGVyLlxuICogdmFyIEVtaXR0ZXIgPSByZXF1aXJlKCdlbWl0dGVyJyk7XG4gKlxuICogdmFyIGVtaXR0ZXIgPSBuZXcgRW1pdHRlcigpO1xuICovXG5cbnZhciBFbWl0dGVyID0gKGZ1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gRW1pdHRlcigpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgRW1pdHRlcik7XG4gIH1cblxuICAvKipcbiAgICogQWRkcyBhIGxpc3RlbmVyIHRvIHRoZSBjb2xsZWN0aW9uIGZvciB0aGUgc3BlY2lmaWVkIGV2ZW50LlxuICAgKiBAbWVtYmVyb2YhIEVtaXR0ZXIucHJvdG90eXBlXG4gICAqIEBmdW5jdGlvblxuICAgKiBAcGFyYW0ge1N0cmluZ30gZXZlbnQgLSBUaGUgZXZlbnQgbmFtZS5cbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gbGlzdGVuZXIgLSBBIGxpc3RlbmVyIGZ1bmN0aW9uIHRvIGFkZC5cbiAgICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyBhbiBpbnN0YW5jZSBvZiBFbWl0dGVyLlxuICAgKiBAZXhhbXBsZVxuICAgKiAvLyBBZGQgYW4gZXZlbnQgbGlzdGVuZXIgdG8gXCJmb29cIiBldmVudC5cbiAgICogZW1pdHRlci5vbignZm9vJywgbGlzdGVuZXIpO1xuICAgKi9cblxuICBFbWl0dGVyLnByb3RvdHlwZS5vbiA9IGZ1bmN0aW9uIG9uKGV2ZW50LCBsaXN0ZW5lcikge1xuICAgIC8vIFVzZSB0aGUgY3VycmVudCBjb2xsZWN0aW9uIG9yIGNyZWF0ZSBpdC5cbiAgICB0aGlzLl9ldmVudENvbGxlY3Rpb24gPSB0aGlzLl9ldmVudENvbGxlY3Rpb24gfHwge307XG5cbiAgICAvLyBVc2UgdGhlIGN1cnJlbnQgY29sbGVjdGlvbiBvZiBhbiBldmVudCBvciBjcmVhdGUgaXQuXG4gICAgdGhpcy5fZXZlbnRDb2xsZWN0aW9uW2V2ZW50XSA9IHRoaXMuX2V2ZW50Q29sbGVjdGlvbltldmVudF0gfHwgW107XG5cbiAgICAvLyBBcHBlbmRzIHRoZSBsaXN0ZW5lciBpbnRvIHRoZSBjb2xsZWN0aW9uIG9mIHRoZSBnaXZlbiBldmVudFxuICAgIHRoaXMuX2V2ZW50Q29sbGVjdGlvbltldmVudF0ucHVzaChsaXN0ZW5lcik7XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICAvKipcbiAgICogQWRkcyBhIGxpc3RlbmVyIHRvIHRoZSBjb2xsZWN0aW9uIGZvciB0aGUgc3BlY2lmaWVkIGV2ZW50IHRoYXQgd2lsbCBiZSBjYWxsZWQgb25seSBvbmNlLlxuICAgKiBAbWVtYmVyb2YhIEVtaXR0ZXIucHJvdG90eXBlXG4gICAqIEBmdW5jdGlvblxuICAgKiBAcGFyYW0ge1N0cmluZ30gZXZlbnQgLSBUaGUgZXZlbnQgbmFtZS5cbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gbGlzdGVuZXIgLSBBIGxpc3RlbmVyIGZ1bmN0aW9uIHRvIGFkZC5cbiAgICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyBhbiBpbnN0YW5jZSBvZiBFbWl0dGVyLlxuICAgKiBAZXhhbXBsZVxuICAgKiAvLyBXaWxsIGFkZCBhbiBldmVudCBoYW5kbGVyIHRvIFwiZm9vXCIgZXZlbnQgb25jZS5cbiAgICogZW1pdHRlci5vbmNlKCdmb28nLCBsaXN0ZW5lcik7XG4gICAqL1xuXG4gIEVtaXR0ZXIucHJvdG90eXBlLm9uY2UgPSBmdW5jdGlvbiBvbmNlKGV2ZW50LCBsaXN0ZW5lcikge1xuICAgIHZhciBzZWxmID0gdGhpcztcblxuICAgIGZ1bmN0aW9uIGZuKCkge1xuICAgICAgc2VsZi5vZmYoZXZlbnQsIGZuKTtcbiAgICAgIGxpc3RlbmVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgfVxuXG4gICAgZm4ubGlzdGVuZXIgPSBsaXN0ZW5lcjtcblxuICAgIHRoaXMub24oZXZlbnQsIGZuKTtcblxuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIC8qKlxuICAgKiBSZW1vdmVzIGEgbGlzdGVuZXIgZnJvbSB0aGUgY29sbGVjdGlvbiBmb3IgdGhlIHNwZWNpZmllZCBldmVudC5cbiAgICogQG1lbWJlcm9mISBFbWl0dGVyLnByb3RvdHlwZVxuICAgKiBAZnVuY3Rpb25cbiAgICogQHBhcmFtIHtTdHJpbmd9IGV2ZW50IC0gVGhlIGV2ZW50IG5hbWUuXG4gICAqIEBwYXJhbSB7RnVuY3Rpb259IGxpc3RlbmVyIC0gQSBsaXN0ZW5lciBmdW5jdGlvbiB0byByZW1vdmUuXG4gICAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgYW4gaW5zdGFuY2Ugb2YgRW1pdHRlci5cbiAgICogQGV4YW1wbGVcbiAgICogLy8gUmVtb3ZlIGEgZ2l2ZW4gbGlzdGVuZXIuXG4gICAqIGVtaXR0ZXIub2ZmKCdmb28nLCBsaXN0ZW5lcik7XG4gICAqL1xuXG4gIEVtaXR0ZXIucHJvdG90eXBlLm9mZiA9IGZ1bmN0aW9uIG9mZihldmVudCwgbGlzdGVuZXIpIHtcblxuICAgIHZhciBsaXN0ZW5lcnMgPSB1bmRlZmluZWQ7XG5cbiAgICAvLyBEZWZpbmVzIGxpc3RlbmVycyB2YWx1ZS5cbiAgICBpZiAoIXRoaXMuX2V2ZW50Q29sbGVjdGlvbiB8fCAhKGxpc3RlbmVycyA9IHRoaXMuX2V2ZW50Q29sbGVjdGlvbltldmVudF0pKSB7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBsaXN0ZW5lcnMuZm9yRWFjaChmdW5jdGlvbiAoZm4sIGkpIHtcbiAgICAgIGlmIChmbiA9PT0gbGlzdGVuZXIgfHwgZm4ubGlzdGVuZXIgPT09IGxpc3RlbmVyKSB7XG4gICAgICAgIC8vIFJlbW92ZXMgdGhlIGdpdmVuIGxpc3RlbmVyLlxuICAgICAgICBsaXN0ZW5lcnMuc3BsaWNlKGksIDEpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgLy8gUmVtb3ZlcyBhbiBlbXB0eSBldmVudCBjb2xsZWN0aW9uLlxuICAgIGlmIChsaXN0ZW5lcnMubGVuZ3RoID09PSAwKSB7XG4gICAgICBkZWxldGUgdGhpcy5fZXZlbnRDb2xsZWN0aW9uW2V2ZW50XTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICAvKipcbiAgICogRXhlY3V0ZSBlYWNoIGl0ZW0gaW4gdGhlIGxpc3RlbmVyIGNvbGxlY3Rpb24gaW4gb3JkZXIgd2l0aCB0aGUgc3BlY2lmaWVkIGRhdGEuXG4gICAqIEBtZW1iZXJvZiEgRW1pdHRlci5wcm90b3R5cGVcbiAgICogQGZ1bmN0aW9uXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBldmVudCAtIFRoZSBuYW1lIG9mIHRoZSBldmVudCB5b3Ugd2FudCB0byBlbWl0LlxuICAgKiBAcGFyYW0gey4uLk9iamVjdH0gZGF0YSAtIERhdGEgdG8gcGFzcyB0byB0aGUgbGlzdGVuZXJzLlxuICAgKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIGFuIGluc3RhbmNlIG9mIEVtaXR0ZXIuXG4gICAqIEBleGFtcGxlXG4gICAqIC8vIEVtaXRzIHRoZSBcImZvb1wiIGV2ZW50IHdpdGggJ3BhcmFtMScgYW5kICdwYXJhbTInIGFzIGFyZ3VtZW50cy5cbiAgICogZW1pdHRlci5lbWl0KCdmb28nLCAncGFyYW0xJywgJ3BhcmFtMicpO1xuICAgKi9cblxuICBFbWl0dGVyLnByb3RvdHlwZS5lbWl0ID0gZnVuY3Rpb24gZW1pdChldmVudCkge1xuICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IEFycmF5KF9sZW4gPiAxID8gX2xlbiAtIDEgOiAwKSwgX2tleSA9IDE7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICAgIGFyZ3NbX2tleSAtIDFdID0gYXJndW1lbnRzW19rZXldO1xuICAgIH1cblxuICAgIHZhciBsaXN0ZW5lcnMgPSB1bmRlZmluZWQ7XG5cbiAgICAvLyBEZWZpbmVzIGxpc3RlbmVycyB2YWx1ZS5cbiAgICBpZiAoIXRoaXMuX2V2ZW50Q29sbGVjdGlvbiB8fCAhKGxpc3RlbmVycyA9IHRoaXMuX2V2ZW50Q29sbGVjdGlvbltldmVudF0pKSB7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICAvLyBDbG9uZSBsaXN0ZW5lcnNcbiAgICBsaXN0ZW5lcnMgPSBsaXN0ZW5lcnMuc2xpY2UoMCk7XG5cbiAgICBsaXN0ZW5lcnMuZm9yRWFjaChmdW5jdGlvbiAoZm4pIHtcbiAgICAgIHJldHVybiBmbi5hcHBseShfdGhpcywgYXJncyk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICByZXR1cm4gRW1pdHRlcjtcbn0pKCk7XG5cbi8qKlxuICogRXhwb3J0cyBFbWl0dGVyXG4gKi9cbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gRW1pdHRlcjtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1tcImRlZmF1bHRcIl07Il19
!function(t){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=t();else if("function"==typeof define&&define.amd)define([],t);else{var e;"undefined"!=typeof window?e=window:"undefined"!=typeof global?e=global:"undefined"!=typeof self&&(e=self),e.Slideout=t()}}(function(){var t,e,n;return function i(t,e,n){function o(r,a){if(!e[r]){if(!t[r]){var u=typeof require=="function"&&require;if(!a&&u)return u(r,!0);if(s)return s(r,!0);var l=new Error("Cannot find module '"+r+"'");throw l.code="MODULE_NOT_FOUND",l}var f=e[r]={exports:{}};t[r][0].call(f.exports,function(e){var n=t[r][1][e];return o(n?n:e)},f,f.exports,i,t,e,n)}return e[r].exports}var s=typeof require=="function"&&require;for(var r=0;r<n.length;r++)o(n[r]);return o}({1:[function(t,e,n){"use strict";var i=t("decouple");var o=t("emitter");var s;var r=false;var a=window.document;var u=a.documentElement;var l=window.navigator.msPointerEnabled;var f={start:l?"MSPointerDown":"touchstart",move:l?"MSPointerMove":"touchmove",end:l?"MSPointerUp":"touchend"};var h=function v(){var t=/^(Webkit|Khtml|Moz|ms|O)(?=[A-Z])/;var e=a.getElementsByTagName("script")[0].style;for(var n in e){if(t.test(n)){return"-"+n.match(t)[0].toLowerCase()+"-"}}if("WebkitOpacity"in e){return"-webkit-"}if("KhtmlOpacity"in e){return"-khtml-"}return""}();function c(t,e){for(var n in e){if(e[n]){t[n]=e[n]}}return t}function p(t,e){t.prototype=c(t.prototype||{},e.prototype)}function d(t){while(t.parentNode){if(t.getAttribute("data-slideout-ignore")!==null){return t}t=t.parentNode}return null}function _(t){t=t||{};this._startOffsetX=0;this._currentOffsetX=0;this._opening=false;this._moved=false;this._opened=false;this._preventOpen=false;this._touch=t.touch===undefined?true:t.touch&&true;this._side=t.side||"left";this.panel=t.panel;this.menu=t.menu;if(!this.panel.classList.contains("slideout-panel")){this.panel.classList.add("slideout-panel")}if(!this.panel.classList.contains("slideout-panel-"+this._side)){this.panel.classList.add("slideout-panel-"+this._side)}if(!this.menu.classList.contains("slideout-menu")){this.menu.classList.add("slideout-menu")}if(!this.menu.classList.contains("slideout-menu-"+this._side)){this.menu.classList.add("slideout-menu-"+this._side)}this._fx=t.fx||"ease";this._duration=parseInt(t.duration,10)||300;this._tolerance=parseInt(t.tolerance,10)||70;this._padding=this._translateTo=parseInt(t.padding,10)||256;this._orientation=this._side==="right"?-1:1;this._translateTo*=this._orientation;if(this._touch){this._initTouchEvents()}}p(_,o);_.prototype.open=function(){var t=this;this.emit("beforeopen");if(!u.classList.contains("slideout-open")){u.classList.add("slideout-open")}this._setTransition();this._translateXTo(this._translateTo);this._opened=true;setTimeout(function(){t.panel.style.transition=t.panel.style["-webkit-transition"]="";t.emit("open")},this._duration+50);return this};_.prototype.close=function(){var t=this;if(!this.isOpen()&&!this._opening){return this}this.emit("beforeclose");this._setTransition();this._translateXTo(0);this._opened=false;setTimeout(function(){u.classList.remove("slideout-open");t.panel.style.transition=t.panel.style["-webkit-transition"]=t.panel.style[h+"transform"]=t.panel.style.transform="";t.emit("close")},this._duration+50);return this};_.prototype.toggle=function(){return this.isOpen()?this.close():this.open()};_.prototype.isOpen=function(){return this._opened};_.prototype._translateXTo=function(t){this._currentOffsetX=t;this.panel.style[h+"transform"]=this.panel.style.transform="translateX("+t+"px)";return this};_.prototype._setTransition=function(){this.panel.style[h+"transition"]=this.panel.style.transition=h+"transform "+this._duration+"ms "+this._fx;return this};_.prototype._initTouchEvents=function(){var t=this;this._onScrollFn=i(a,"scroll",function(){if(!t._moved){clearTimeout(s);r=true;s=setTimeout(function(){r=false},250)}});this._preventMove=function(e){if(t._moved){e.preventDefault()}};a.addEventListener(f.move,this._preventMove);this._resetTouchFn=function(e){if(typeof e.touches==="undefined"){return}t._moved=false;t._opening=false;t._startOffsetX=e.touches[0].pageX;t._preventOpen=!t._touch||!t.isOpen()&&t.menu.clientWidth!==0};this.panel.addEventListener(f.start,this._resetTouchFn);this._onTouchCancelFn=function(){t._moved=false;t._opening=false};this.panel.addEventListener("touchcancel",this._onTouchCancelFn);this._onTouchEndFn=function(){if(t._moved){t.emit("translateend");t._opening&&Math.abs(t._currentOffsetX)>t._tolerance?t.open():t.close()}t._moved=false};this.panel.addEventListener(f.end,this._onTouchEndFn);this._onTouchMoveFn=function(e){if(r||t._preventOpen||typeof e.touches==="undefined"||d(e.target)){return}var n=e.touches[0].clientX-t._startOffsetX;var i=t._currentOffsetX=n;if(Math.abs(i)>t._padding){return}if(Math.abs(n)>20){t._opening=true;var o=n*t._orientation;if(t._opened&&o>0||!t._opened&&o<0){return}if(!t._moved){t.emit("translatestart")}if(o<=0){i=n+t._padding*t._orientation;t._opening=false}if(!(t._moved&&u.classList.contains("slideout-open"))){u.classList.add("slideout-open")}t.panel.style[h+"transform"]=t.panel.style.transform="translateX("+i+"px)";t.emit("translate",i);t._moved=true}};this.panel.addEventListener(f.move,this._onTouchMoveFn);return this};_.prototype.enableTouch=function(){this._touch=true;return this};_.prototype.disableTouch=function(){this._touch=false;return this};_.prototype.destroy=function(){this.close();a.removeEventListener(f.move,this._preventMove);this.panel.removeEventListener(f.start,this._resetTouchFn);this.panel.removeEventListener("touchcancel",this._onTouchCancelFn);this.panel.removeEventListener(f.end,this._onTouchEndFn);this.panel.removeEventListener(f.move,this._onTouchMoveFn);a.removeEventListener("scroll",this._onScrollFn);this.open=this.close=function(){};return this};e.exports=_},{decouple:2,emitter:3}],2:[function(t,e,n){"use strict";var i=function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||function(t){window.setTimeout(t,1e3/60)}}();function o(t,e,n){var o,s=false;function r(t){o=t;a()}function a(){if(!s){i(u);s=true}}function u(){n.call(t,o);s=false}t.addEventListener(e,r,false);return r}e.exports=o},{}],3:[function(t,e,n){"use strict";var i=function(t,e){if(!(t instanceof e)){throw new TypeError("Cannot call a class as a function")}};n.__esModule=true;var o=function(){function t(){i(this,t)}t.prototype.on=function e(t,n){this._eventCollection=this._eventCollection||{};this._eventCollection[t]=this._eventCollection[t]||[];this._eventCollection[t].push(n);return this};t.prototype.once=function n(t,e){var n=this;function i(){n.off(t,i);e.apply(this,arguments)}i.listener=e;this.on(t,i);return this};t.prototype.off=function o(t,e){var n=undefined;if(!this._eventCollection||!(n=this._eventCollection[t])){return this}n.forEach(function(t,i){if(t===e||t.listener===e){n.splice(i,1)}});if(n.length===0){delete this._eventCollection[t]}return this};t.prototype.emit=function s(t){var e=this;for(var n=arguments.length,i=Array(n>1?n-1:0),o=1;o<n;o++){i[o-1]=arguments[o]}var s=undefined;if(!this._eventCollection||!(s=this._eventCollection[t])){return this}s=s.slice(0);s.forEach(function(t){return t.apply(e,i)});return this};return t}();n["default"]=o;e.exports=n["default"]},{}]},{},[1])(1)});



  