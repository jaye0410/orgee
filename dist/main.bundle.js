/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _Es5Tester = __webpack_require__(1);
	
	var _Es5Tester2 = _interopRequireDefault(_Es5Tester);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	(function (arg) {
		console.log('This is ' + arg + '!');
	})('Arrow function');
	
	var tester = new _Es5Tester2.default('Test!!');
	
	document.addEventListener('DOMContentLoaded', function () {
		console.log(document.querySelector('#wrapper'));
	});

/***/ },
/* 1 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Es5Tester = function () {
		function Es5Tester(sample) {
			_classCallCheck(this, Es5Tester);
	
			this._sample = sample;
		}
	
		_createClass(Es5Tester, [{
			key: "sample",
			get: function get() {
				return this._sample;
			}
		}]);
	
		return Es5Tester;
	}();
	
	exports.default = Es5Tester;

/***/ }
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNDMxZjVmZjJkODA0MjE1OWQwZDEiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZXM1L0VzNVRlc3Rlci5qcyJdLCJuYW1lcyI6WyJhcmciLCJjb25zb2xlIiwibG9nIiwidGVzdGVyIiwiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwicXVlcnlTZWxlY3RvciIsIkVzNVRlc3RlciIsInNhbXBsZSIsIl9zYW1wbGUiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1QkFBZTtBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7QUNsQ0E7Ozs7OztBQUpBLEVBQUMsVUFBQ0EsR0FBRCxFQUFTO0FBQ1RDLFVBQVFDLEdBQVIsY0FBdUJGLEdBQXZCO0FBQ0EsRUFGRCxFQUVHLGdCQUZIOztBQUtBLEtBQUlHLFNBQVMsd0JBQWMsUUFBZCxDQUFiOztBQUVBQyxVQUFTQyxnQkFBVCxDQUEwQixrQkFBMUIsRUFBOEMsWUFBTTtBQUNuREosVUFBUUMsR0FBUixDQUFZRSxTQUFTRSxhQUFULENBQXVCLFVBQXZCLENBQVo7QUFDQSxFQUZELEU7Ozs7Ozs7Ozs7Ozs7Ozs7S0NQcUJDLFM7QUFDcEIscUJBQVlDLE1BQVosRUFBb0I7QUFBQTs7QUFDbkIsUUFBS0MsT0FBTCxHQUFlRCxNQUFmO0FBQ0E7Ozs7dUJBRVk7QUFDWixXQUFPLEtBQUtDLE9BQVo7QUFDQTs7Ozs7O21CQVBtQkYsUyIsImZpbGUiOiJtYWluLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKVxuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuXG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRleHBvcnRzOiB7fSxcbiBcdFx0XHRpZDogbW9kdWxlSWQsXG4gXHRcdFx0bG9hZGVkOiBmYWxzZVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogd2VicGFjay9ib290c3RyYXAgNDMxZjVmZjJkODA0MjE1OWQwZDFcbiAqKi8iLCIoKGFyZykgPT4ge1xuXHRjb25zb2xlLmxvZyhgVGhpcyBpcyAke2FyZ30hYCk7XG59KSgnQXJyb3cgZnVuY3Rpb24nKTtcblxuaW1wb3J0IEVzNVRlc3RlciBmcm9tICcuL2VzNS9FczVUZXN0ZXInO1xudmFyIHRlc3RlciA9IG5ldyBFczVUZXN0ZXIoJ1Rlc3QhIScpO1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCkgPT4ge1xuXHRjb25zb2xlLmxvZyhkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjd3JhcHBlcicpKTtcbn0pO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvYXBwLmpzXG4gKiovIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgRXM1VGVzdGVyIHtcblx0Y29uc3RydWN0b3Ioc2FtcGxlKSB7XG5cdFx0dGhpcy5fc2FtcGxlID0gc2FtcGxlO1xuXHR9XG5cdFxuXHRnZXQgc2FtcGxlKCkge1xuXHRcdHJldHVybiB0aGlzLl9zYW1wbGU7XG5cdH1cbn1cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9lczUvRXM1VGVzdGVyLmpzXG4gKiovIl0sInNvdXJjZVJvb3QiOiIifQ==