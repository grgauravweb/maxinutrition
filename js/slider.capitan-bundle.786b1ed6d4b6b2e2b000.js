webpackJsonp([11],{258:(function(module,exports,__webpack_require__){"use strict";(function($){var _interopRequireDefault=__webpack_require__(283);Object.defineProperty(exports,"__esModule",{value:true});exports.initSliderPlugin=initSliderPlugin;exports.updateSlider=updateSlider;exports.init=init;var _typeof2=_interopRequireDefault(__webpack_require__(286));var _={defaults:{componentSelector:'.slider',componentBlocker:'slider-instagram',pluginOptions:{classes:{},selectors:{},settings:{slidesToShow:1,slidesToScroll:1,mobileFirst:true,prevArrow:'<button type="button" class="slider__arrow slider__arrow--prev">Previous</button>',nextArrow:'<button type="button" class="slider__arrow slider__arrow--next">Next</button>',responsive:[{breakpoint:Capitan.Vars.breakpoints.xs,settings:{arrows:false,dots:true}},{breakpoint:Capitan.Vars.breakpoints.md,settings:{arrows:true,dots:false}}]}}}};var o=_.defaults;var $component=$(o.componentSelector);function getPluginSettings(slider,inlineSettings){var settings={};var dataSettings=null;Object.assign(settings,o.pluginOptions.settings);if(slider.classList.contains('slider--products')){Object.assign(settings,{adaptiveHeight:true,swipeToSlide:true,responsive:[{breakpoint:Capitan.Vars.breakpoints.sm,settings:{slidesToShow:3,slidesToScroll:1}},{breakpoint:Capitan.Vars.breakpoints.md,settings:{slidesToShow:3,slidesToScroll:1}},{breakpoint:Capitan.Vars.breakpoints.lg,settings:{slidesToShow:4,slidesToScroll:1}}]});}else if(slider.classList.contains('slider--articles')){Object.assign(settings,{adaptiveHeight:true,swipeToSlide:true,responsive:[{breakpoint:Capitan.Vars.breakpoints.sm,settings:{slidesToShow:2,slidesToScroll:1}},{breakpoint:Capitan.Vars.breakpoints.lg,settings:{slidesToShow:3,slidesToScroll:1}}]});}else if(slider.classList.contains('slider--usps')){Object.assign(settings,{adaptiveHeight:true,swipeToSlide:true,variableWidth:false,slidesToShow:1,slidesToScroll:1,responsive:[{breakpoint:Capitan.Vars.breakpoints.sm,settings:{slidesToShow:2,slidesToScroll:1}},{breakpoint:Capitan.Vars.breakpoints.lg,settings:{slidesToShow:3,slidesToScroll:1}}]});}else if(slider.classList.contains('slider--stage')){Object.assign(settings,{autoplay:true,autoplaySpeed:5000,arrows:false,dots:true,lazyLoad:"progressive",responsive:[{breakpoint:Capitan.Vars.breakpoints.sm,settings:{arrows:false,dots:true}},{breakpoint:Capitan.Vars.breakpoints.lg,settings:{arrows:false,dots:true}},{breakpoint:Capitan.Vars.breakpoints.xl,settings:{arrows:false,dots:true}}]});}else if(slider.classList.contains('slider--header')){Object.assign(settings,{adaptiveHeight:false,swipeToSlide:true,arrows:false,autoplay:true,infinite:true,autoplaySpeed:7000,slidesToShow:1,slidesToScroll:1,responsive:[{breakpoint:Capitan.Vars.breakpoints.lg,settings:{slidesToShow:3,slidesToScroll:3}}]});}
if(inlineSettings){Object.assign(settings,inlineSettings);}
if(slider.dataset.slick){dataSettings=slider.dataset.slick.replace(/'/g,'"');dataSettings=JSON.parse(dataSettings);if(dataSettings!==null&&(0,_typeof2.default)(dataSettings)==='object'){Object.assign(settings,dataSettings);}}
return settings;}
function initSliderPlugin(slider,inlineSettings){o.pluginOptions.paginationPrefix=$component.data('pagination-prefix');__webpack_require__.e(20).then(__webpack_require__.bind(null,290)).then(function(){__webpack_require__.e(20).then(__webpack_require__.bind(null,291)).then(function(slick){var settings=getPluginSettings(slider,inlineSettings);$(slider).slick(settings);});});}
function updateSlider($slider){if(document.querySelector(o.componentSelector)){var components=document.querySelectorAll(o.componentSelector);for(var i=0;i<components.length;i+=1){$(components[i]).slick('setPosition');}}else{$slider.slick('setPosition');}}
function init(){if(document.querySelector(o.componentSelector)){var components=document.querySelectorAll(o.componentSelector);for(var i=0;i<components.length;i+=1){if(!components[i].parentElement.classList.contains(o.componentBlocker)){initSliderPlugin(components[i]);}}}}}.call(exports,__webpack_require__(41)))}),283:(function(module,exports){function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}
module.exports=_interopRequireDefault;}),286:(function(module,exports){function _typeof2(obj){if(typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"){_typeof2=function _typeof2(obj){return typeof obj;};}else{_typeof2=function _typeof2(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj;};}return _typeof2(obj);}
function _typeof(obj){if(typeof Symbol==="function"&&_typeof2(Symbol.iterator)==="symbol"){module.exports=_typeof=function _typeof(obj){return _typeof2(obj);};}else{module.exports=_typeof=function _typeof(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":_typeof2(obj);};}
return _typeof(obj);}
module.exports=_typeof;})});