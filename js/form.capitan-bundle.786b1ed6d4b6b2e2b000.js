webpackJsonp([18],{272:(function(module,exports,__webpack_require__){"use strict";(function($){Object.defineProperty(exports,"__esModule",{value:true});exports.init=init;var _={defaults:{componentSelector:'form',pluginOptions:{selectors:{ajaxForm:'form[data-ajax-url]'}}}};var o=_.defaults;function checkLength(elem){var maxCount=$(elem).attr('maxlength');$('<small class="form__counter">'+maxCount+' / '+maxCount+'</small>').insertAfter($(elem));$(elem).on('keyup',function(){var currentCount=$(elem).val().length,remainingCount=maxCount-currentCount;$(elem).next('small').text(remainingCount+' / '+maxCount);});}
function init(){if(document.querySelector(o.componentSelector)){var textareas=$('textarea');for(var i=0;i<textareas.length;i+=1){if($(textareas[i]).attr('maxlength')){checkLength(textareas[i]);}}
$(o.pluginOptions.selectors.ajaxForm).on('submit',function(e){e.preventDefault();var $this=$(this);if($this.parsley()){if($this.parsley().isValid()){console.log('VALID - READY FOR AJAX CALL');}}else{console.log('NO VALIDATION - READY FOR AJAX CALL');}});$('.form--onepager').on('submit',function(e){e.preventDefault();var $this=$(this);var $fields=$this.find('input:not([type="submit"])');var fieldArray=$fields.toArray();var url=$this.attr('action');var data={};fieldArray.forEach(function(input){if(input.type==='checkbox'){data[input.name]=Number(input.checked);}else{data[input.name]=input.value;}});if(!$this.parent().hasClass('util-spinner')){$this.off('is-validate-success');$this.on('is-validate-success',function(){$this.parent().addClass('util-spinner');$.ajax({type:'POST',url:url,data:data,dataType:'json',success:function success(data){$.fancybox.open({src:'#form-success',type:'inline'});},error:function error(xhr,ajaxOptions,thrownError){console.log('error...',xhr);$.fancybox.open({src:'#form-error',type:'inline'});},complete:function complete(){$this.parent().removeClass('util-spinner');}});});}});}};}.call(exports,__webpack_require__(41)))})});