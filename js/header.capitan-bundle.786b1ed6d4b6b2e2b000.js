webpackJsonp([17],{

/***/ 265:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function($) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.init = init;

/**
 * Capitan header v1.0.0
 *
 * Copyright brandung GmbH & Co.KG
 * http://www.Capitan.de/
 *
 * Date: 2017-01-14
 * MIT License (MIT)
 */
var _ = {
  defaults: {
    componentSelector: 'header',
    pluginOptions: {
      classes: {
        sticky: 'is-header-sticky'
      }
    }
  }
};
var o = _.defaults;

function init() {
  if (document.querySelector(o.componentSelector)) {
    window.addEventListener('scroll', function () {
      if (window.scrollY > $(o.componentSelector).outerHeight(true) / 2) {
        $('body').addClass(o.pluginOptions.classes.sticky);
      } else {
        $('body').removeClass(o.pluginOptions.classes.sticky);
      }
    });
  }
}
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(41)))

/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLmpzIl0sIm5hbWVzIjpbIl8iLCJkZWZhdWx0cyIsImNvbXBvbmVudFNlbGVjdG9yIiwicGx1Z2luT3B0aW9ucyIsImNsYXNzZXMiLCJzdGlja3kiLCJvIiwiaW5pdCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsIndpbmRvdyIsImFkZEV2ZW50TGlzdGVuZXIiLCJzY3JvbGxZIiwiJCIsIm91dGVySGVpZ2h0IiwiYWRkQ2xhc3MiLCJyZW1vdmVDbGFzcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBOzs7Ozs7Ozs7QUFVQSxJQUFNQSxDQUFDLEdBQUc7QUFDUkMsVUFBUSxFQUFFO0FBQ1RDLHFCQUFpQixFQUFFLFFBRFY7QUFFVEMsaUJBQWEsRUFBRTtBQUNkQyxhQUFPLEVBQUU7QUFDUkMsY0FBTSxFQUFFO0FBREE7QUFESztBQUZOO0FBREYsQ0FBVjtBQVlBLElBQU1DLENBQUMsR0FBR04sQ0FBQyxDQUFDQyxRQUFaOztBQUVPLFNBQVNNLElBQVQsR0FBZ0I7QUFDdEIsTUFBSUMsUUFBUSxDQUFDQyxhQUFULENBQXVCSCxDQUFDLENBQUNKLGlCQUF6QixDQUFKLEVBQWlEO0FBQ2hEUSxVQUFNLENBQUNDLGdCQUFQLENBQXdCLFFBQXhCLEVBQWtDLFlBQU07QUFDdkMsVUFBSUQsTUFBTSxDQUFDRSxPQUFQLEdBQWlCQyxDQUFDLENBQUNQLENBQUMsQ0FBQ0osaUJBQUgsQ0FBRCxDQUF1QlksV0FBdkIsQ0FBbUMsSUFBbkMsSUFBMkMsQ0FBaEUsRUFBbUU7QUFDbEVELFNBQUMsQ0FBQyxNQUFELENBQUQsQ0FBVUUsUUFBVixDQUFtQlQsQ0FBQyxDQUFDSCxhQUFGLENBQWdCQyxPQUFoQixDQUF3QkMsTUFBM0M7QUFDQSxPQUZELE1BRU87QUFDTlEsU0FBQyxDQUFDLE1BQUQsQ0FBRCxDQUFVRyxXQUFWLENBQXNCVixDQUFDLENBQUNILGFBQUYsQ0FBZ0JDLE9BQWhCLENBQXdCQyxNQUE5QztBQUNBO0FBQ0QsS0FORDtBQU9BO0FBQ0QsQyIsImZpbGUiOiJoZWFkZXIuY2FwaXRhbi1idW5kbGUuNzg2YjFlZDZkNGI2YjJlMmIwMDAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIENhcGl0YW4gaGVhZGVyIHYxLjAuMFxuICpcbiAqIENvcHlyaWdodCBicmFuZHVuZyBHbWJIICYgQ28uS0dcbiAqIGh0dHA6Ly93d3cuQ2FwaXRhbi5kZS9cbiAqXG4gKiBEYXRlOiAyMDE3LTAxLTE0XG4gKiBNSVQgTGljZW5zZSAoTUlUKVxuICovXG5cbmNvbnN0IF8gPSB7XG5cdFx0ZGVmYXVsdHM6IHtcblx0XHRcdGNvbXBvbmVudFNlbGVjdG9yOiAnaGVhZGVyJyxcblx0XHRcdHBsdWdpbk9wdGlvbnM6IHtcblx0XHRcdFx0Y2xhc3Nlczoge1xuXHRcdFx0XHRcdHN0aWNreTogJ2lzLWhlYWRlci1zdGlja3knXG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdH1cbjtcblxuY29uc3QgbyA9IF8uZGVmYXVsdHM7XG5cbmV4cG9ydCBmdW5jdGlvbiBpbml0KCkge1xuXHRpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihvLmNvbXBvbmVudFNlbGVjdG9yKSkge1xuXHRcdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCAoKSA9PiB7XG5cdFx0XHRpZiAod2luZG93LnNjcm9sbFkgPiAkKG8uY29tcG9uZW50U2VsZWN0b3IpLm91dGVySGVpZ2h0KHRydWUpIC8gMikge1xuXHRcdFx0XHQkKCdib2R5JykuYWRkQ2xhc3Moby5wbHVnaW5PcHRpb25zLmNsYXNzZXMuc3RpY2t5KTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdCQoJ2JvZHknKS5yZW1vdmVDbGFzcyhvLnBsdWdpbk9wdGlvbnMuY2xhc3Nlcy5zdGlja3kpO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHR9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==