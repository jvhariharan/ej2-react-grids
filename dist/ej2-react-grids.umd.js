/*!
*  filename: ej2-react-grids.umd.js
*  version : 1.0.19
*  Copyright Syncfusion Inc. 2001 - 2017. All rights reserved.
*  Use of this code is subject to the terms of our license.
*  A copy of the current license can be obtained at any time by e-mailing
*  licensing@syncfusion.com. Any infringement will be prosecuted under
*  applicable laws. 
*/

(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("@syncfusion/ej2-react-base"), require("react"), require("@syncfusion/ej2-grids"));
	else if(typeof define === 'function' && define.amd)
		define(["@syncfusion/ej2-react-base", "react", "@syncfusion/ej2-grids"], factory);
	else {
		var a = typeof exports === 'object' ? factory(require("@syncfusion/ej2-react-base"), require("react"), require("@syncfusion/ej2-grids")) : factory(root["@syncfusion/ej2-react-base"], root["react"], root["@syncfusion/ej2-grids"]);
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(this, function(__WEBPACK_EXTERNAL_MODULE_3__, __WEBPACK_EXTERNAL_MODULE_7__, __WEBPACK_EXTERNAL_MODULE_8__) {
return /******/ (function(modules) { // webpackBootstrap
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
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(1), __webpack_require__(3), __webpack_require__(8)], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, grid_1, ej2_react_base_1, ej2_grids_1) {
	    "use strict";
	    function __export(m) {
	        for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	    }
	    Object.defineProperty(exports, "__esModule", { value: true });
	    __export(grid_1);
	    exports.Inject = ej2_react_base_1.Inject;
	    __export(ej2_grids_1);
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(2), __webpack_require__(4), __webpack_require__(5), __webpack_require__(6)], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, columns_directive_1, aggregates_directive_1, aggregate_columns_directive_1, grid_component_1) {
	    "use strict";
	    function __export(m) {
	        for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	    }
	    Object.defineProperty(exports, "__esModule", { value: true });
	    __export(columns_directive_1);
	    __export(aggregates_directive_1);
	    __export(aggregate_columns_directive_1);
	    __export(grid_component_1);
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __extends = (this && this.__extends) || (function () {
	    var extendStatics = Object.setPrototypeOf ||
	        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
	        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
	    return function (d, b) {
	        extendStatics(d, b);
	        function __() { this.constructor = d; }
	        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	    };
	})();
	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(3)], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, ej2_react_base_1) {
	    "use strict";
	    Object.defineProperty(exports, "__esModule", { value: true });
	    var ColumnDirective = (function (_super) {
	        __extends(ColumnDirective, _super);
	        function ColumnDirective() {
	            return _super !== null && _super.apply(this, arguments) || this;
	        }
	        return ColumnDirective;
	    }(ej2_react_base_1.ComplexBase));
	    ColumnDirective.moduleName = 'column';
	    exports.ColumnDirective = ColumnDirective;
	    var ColumnsDirective = (function (_super) {
	        __extends(ColumnsDirective, _super);
	        function ColumnsDirective() {
	            return _super !== null && _super.apply(this, arguments) || this;
	        }
	        return ColumnsDirective;
	    }(ej2_react_base_1.ComplexBase));
	    ColumnsDirective.propertyName = 'columns';
	    ColumnsDirective.moduleName = 'columns';
	    exports.ColumnsDirective = ColumnsDirective;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 3 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_3__;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __extends = (this && this.__extends) || (function () {
	    var extendStatics = Object.setPrototypeOf ||
	        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
	        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
	    return function (d, b) {
	        extendStatics(d, b);
	        function __() { this.constructor = d; }
	        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	    };
	})();
	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(3)], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, ej2_react_base_1) {
	    "use strict";
	    Object.defineProperty(exports, "__esModule", { value: true });
	    var AggregateDirective = (function (_super) {
	        __extends(AggregateDirective, _super);
	        function AggregateDirective() {
	            return _super !== null && _super.apply(this, arguments) || this;
	        }
	        return AggregateDirective;
	    }(ej2_react_base_1.ComplexBase));
	    AggregateDirective.moduleName = 'aggregate';
	    exports.AggregateDirective = AggregateDirective;
	    var AggregatesDirective = (function (_super) {
	        __extends(AggregatesDirective, _super);
	        function AggregatesDirective() {
	            return _super !== null && _super.apply(this, arguments) || this;
	        }
	        return AggregatesDirective;
	    }(ej2_react_base_1.ComplexBase));
	    AggregatesDirective.propertyName = 'aggregates';
	    AggregatesDirective.moduleName = 'aggregates';
	    exports.AggregatesDirective = AggregatesDirective;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __extends = (this && this.__extends) || (function () {
	    var extendStatics = Object.setPrototypeOf ||
	        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
	        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
	    return function (d, b) {
	        extendStatics(d, b);
	        function __() { this.constructor = d; }
	        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	    };
	})();
	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(3)], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, ej2_react_base_1) {
	    "use strict";
	    Object.defineProperty(exports, "__esModule", { value: true });
	    var AggregateColumnDirective = (function (_super) {
	        __extends(AggregateColumnDirective, _super);
	        function AggregateColumnDirective() {
	            return _super !== null && _super.apply(this, arguments) || this;
	        }
	        return AggregateColumnDirective;
	    }(ej2_react_base_1.ComplexBase));
	    AggregateColumnDirective.moduleName = 'aggregateColumn';
	    exports.AggregateColumnDirective = AggregateColumnDirective;
	    var AggregateColumnsDirective = (function (_super) {
	        __extends(AggregateColumnsDirective, _super);
	        function AggregateColumnsDirective() {
	            return _super !== null && _super.apply(this, arguments) || this;
	        }
	        return AggregateColumnsDirective;
	    }(ej2_react_base_1.ComplexBase));
	    AggregateColumnsDirective.propertyName = 'columns';
	    AggregateColumnsDirective.moduleName = 'aggregateColumns';
	    exports.AggregateColumnsDirective = AggregateColumnsDirective;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __extends = (this && this.__extends) || (function () {
	    var extendStatics = Object.setPrototypeOf ||
	        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
	        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
	    return function (d, b) {
	        extendStatics(d, b);
	        function __() { this.constructor = d; }
	        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	    };
	})();
	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(7), __webpack_require__(8), __webpack_require__(3)], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, React, ej2_grids_1, ej2_react_base_1) {
	    "use strict";
	    Object.defineProperty(exports, "__esModule", { value: true });
	    var GridComponent = (function (_super) {
	        __extends(GridComponent, _super);
	        function GridComponent(props) {
	            var _this = _super.call(this, props) || this;
	            _this.initRenderCalled = false;
	            _this.checkInjectedModules = true;
	            _this.directivekeys = { 'columns': 'column', 'aggregates': { 'aggregate': { 'aggregateColumns': 'aggregateColumn' } } };
	            _this.state = props;
	            return _this;
	        }
	        GridComponent.prototype.render = function () {
	            if ((this.element && !this.initRenderCalled) || this.refreshing) {
	                _super.prototype.render.call(this);
	                this.initRenderCalled = true;
	            }
	            else {
	                return React.createElement('div', this.getDefaultAttributes(), this.props.children);
	            }
	        };
	        return GridComponent;
	    }(ej2_grids_1.Grid));
	    exports.GridComponent = GridComponent;
	    ej2_react_base_1.applyMixins(GridComponent, [ej2_react_base_1.ComponentBase, React.PureComponent]);
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 7 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_7__;

/***/ }),
/* 8 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_8__;

/***/ })
/******/ ])
});
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCAwNDQ2YmU1NTE0Yjg2NWUwYzNjNyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dyaWQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dyaWQvY29sdW1ucy1kaXJlY3RpdmUuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQHN5bmNmdXNpb24vZWoyLXJlYWN0LWJhc2VcIiIsIndlYnBhY2s6Ly8vLi9zcmMvZ3JpZC9hZ2dyZWdhdGVzLWRpcmVjdGl2ZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZ3JpZC9hZ2dyZWdhdGUtY29sdW1ucy1kaXJlY3RpdmUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dyaWQvZ3JpZC5jb21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAc3luY2Z1c2lvbi9lajItZ3JpZHNcIiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTztBQ1ZBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVCQUFlO0FBQ2Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7aUVDdENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtREFBa0QsY0FBYztBQUNoRTtBQUNBO0FBQ0E7QUFDQSxFQUFDOzs7Ozs7O2lFQ1REO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtREFBa0QsY0FBYztBQUNoRTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUM7Ozs7Ozs7QUNWRDtBQUNBO0FBQ0EsV0FBVSxnQkFBZ0Isc0NBQXNDLGlCQUFpQixFQUFFO0FBQ25GLDBCQUF5Qix1REFBdUQ7QUFDaEY7QUFDQTtBQUNBLHdCQUF1QixzQkFBc0I7QUFDN0M7QUFDQTtBQUNBLEVBQUM7QUFDRDtBQUNBO0FBQ0EsbURBQWtELGNBQWM7QUFDaEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsRUFBQzs7Ozs7OztBQ2hDRCxnRDs7Ozs7O0FDQUE7QUFDQTtBQUNBLFdBQVUsZ0JBQWdCLHNDQUFzQyxpQkFBaUIsRUFBRTtBQUNuRiwwQkFBeUIsdURBQXVEO0FBQ2hGO0FBQ0E7QUFDQSx3QkFBdUIsc0JBQXNCO0FBQzdDO0FBQ0E7QUFDQSxFQUFDO0FBQ0Q7QUFDQTtBQUNBLG1EQUFrRCxjQUFjO0FBQ2hFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEVBQUM7Ozs7Ozs7QUNoQ0Q7QUFDQTtBQUNBLFdBQVUsZ0JBQWdCLHNDQUFzQyxpQkFBaUIsRUFBRTtBQUNuRiwwQkFBeUIsdURBQXVEO0FBQ2hGO0FBQ0E7QUFDQSx3QkFBdUIsc0JBQXNCO0FBQzdDO0FBQ0E7QUFDQSxFQUFDO0FBQ0Q7QUFDQTtBQUNBLG1EQUFrRCxjQUFjO0FBQ2hFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEVBQUM7Ozs7Ozs7QUNoQ0Q7QUFDQTtBQUNBLFdBQVUsZ0JBQWdCLHNDQUFzQyxpQkFBaUIsRUFBRTtBQUNuRiwwQkFBeUIsdURBQXVEO0FBQ2hGO0FBQ0E7QUFDQSx3QkFBdUIsc0JBQXNCO0FBQzdDO0FBQ0E7QUFDQSxFQUFDO0FBQ0Q7QUFDQTtBQUNBLG1EQUFrRCxjQUFjO0FBQ2hFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9DQUFtQyxxQ0FBcUMsZUFBZSx3Q0FBd0MsRUFBRTtBQUNqSTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0EsRUFBQzs7Ozs7OztBQ3BDRCxnRDs7Ozs7O0FDQUEsZ0QiLCJmaWxlIjoiZWoyLXJlYWN0LWdyaWRzLnVtZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkocmVxdWlyZShcIkBzeW5jZnVzaW9uL2VqMi1yZWFjdC1iYXNlXCIpLCByZXF1aXJlKFwicmVhY3RcIiksIHJlcXVpcmUoXCJAc3luY2Z1c2lvbi9lajItZ3JpZHNcIikpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW1wiQHN5bmNmdXNpb24vZWoyLXJlYWN0LWJhc2VcIiwgXCJyZWFjdFwiLCBcIkBzeW5jZnVzaW9uL2VqMi1ncmlkc1wiXSwgZmFjdG9yeSk7XG5cdGVsc2Uge1xuXHRcdHZhciBhID0gdHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnID8gZmFjdG9yeShyZXF1aXJlKFwiQHN5bmNmdXNpb24vZWoyLXJlYWN0LWJhc2VcIiksIHJlcXVpcmUoXCJyZWFjdFwiKSwgcmVxdWlyZShcIkBzeW5jZnVzaW9uL2VqMi1ncmlkc1wiKSkgOiBmYWN0b3J5KHJvb3RbXCJAc3luY2Z1c2lvbi9lajItcmVhY3QtYmFzZVwiXSwgcm9vdFtcInJlYWN0XCJdLCByb290W1wiQHN5bmNmdXNpb24vZWoyLWdyaWRzXCJdKTtcblx0XHRmb3IodmFyIGkgaW4gYSkgKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyA/IGV4cG9ydHMgOiByb290KVtpXSA9IGFbaV07XG5cdH1cbn0pKHRoaXMsIGZ1bmN0aW9uKF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfM19fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzdfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV84X18pIHtcbnJldHVybiBcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG5cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGV4cG9ydHM6IHt9LFxuIFx0XHRcdGlkOiBtb2R1bGVJZCxcbiBcdFx0XHRsb2FkZWQ6IGZhbHNlXG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oMCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgMDQ0NmJlNTUxNGI4NjVlMGMzYzciLCJkZWZpbmUoW1wicmVxdWlyZVwiLCBcImV4cG9ydHNcIiwgXCIuL2dyaWRcIiwgXCJAc3luY2Z1c2lvbi9lajItcmVhY3QtYmFzZVwiLCBcIkBzeW5jZnVzaW9uL2VqMi1ncmlkc1wiXSwgZnVuY3Rpb24gKHJlcXVpcmUsIGV4cG9ydHMsIGdyaWRfMSwgZWoyX3JlYWN0X2Jhc2VfMSwgZWoyX2dyaWRzXzEpIHtcbiAgICBcInVzZSBzdHJpY3RcIjtcbiAgICBmdW5jdGlvbiBfX2V4cG9ydChtKSB7XG4gICAgICAgIGZvciAodmFyIHAgaW4gbSkgaWYgKCFleHBvcnRzLmhhc093blByb3BlcnR5KHApKSBleHBvcnRzW3BdID0gbVtwXTtcbiAgICB9XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuICAgIF9fZXhwb3J0KGdyaWRfMSk7XG4gICAgZXhwb3J0cy5JbmplY3QgPSBlajJfcmVhY3RfYmFzZV8xLkluamVjdDtcbiAgICBfX2V4cG9ydChlajJfZ3JpZHNfMSk7XG59KTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSAwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImRlZmluZShbXCJyZXF1aXJlXCIsIFwiZXhwb3J0c1wiLCBcIi4vY29sdW1ucy1kaXJlY3RpdmVcIiwgXCIuL2FnZ3JlZ2F0ZXMtZGlyZWN0aXZlXCIsIFwiLi9hZ2dyZWdhdGUtY29sdW1ucy1kaXJlY3RpdmVcIiwgXCIuL2dyaWQuY29tcG9uZW50XCJdLCBmdW5jdGlvbiAocmVxdWlyZSwgZXhwb3J0cywgY29sdW1uc19kaXJlY3RpdmVfMSwgYWdncmVnYXRlc19kaXJlY3RpdmVfMSwgYWdncmVnYXRlX2NvbHVtbnNfZGlyZWN0aXZlXzEsIGdyaWRfY29tcG9uZW50XzEpIHtcbiAgICBcInVzZSBzdHJpY3RcIjtcbiAgICBmdW5jdGlvbiBfX2V4cG9ydChtKSB7XG4gICAgICAgIGZvciAodmFyIHAgaW4gbSkgaWYgKCFleHBvcnRzLmhhc093blByb3BlcnR5KHApKSBleHBvcnRzW3BdID0gbVtwXTtcbiAgICB9XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuICAgIF9fZXhwb3J0KGNvbHVtbnNfZGlyZWN0aXZlXzEpO1xuICAgIF9fZXhwb3J0KGFnZ3JlZ2F0ZXNfZGlyZWN0aXZlXzEpO1xuICAgIF9fZXhwb3J0KGFnZ3JlZ2F0ZV9jb2x1bW5zX2RpcmVjdGl2ZV8xKTtcbiAgICBfX2V4cG9ydChncmlkX2NvbXBvbmVudF8xKTtcbn0pO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvZ3JpZC9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgX19leHRlbmRzID0gKHRoaXMgJiYgdGhpcy5fX2V4dGVuZHMpIHx8IChmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcbiAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxuICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChiLmhhc093blByb3BlcnR5KHApKSBkW3BdID0gYltwXTsgfTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICAgICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XG4gICAgICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcbiAgICB9O1xufSkoKTtcbmRlZmluZShbXCJyZXF1aXJlXCIsIFwiZXhwb3J0c1wiLCBcIkBzeW5jZnVzaW9uL2VqMi1yZWFjdC1iYXNlXCJdLCBmdW5jdGlvbiAocmVxdWlyZSwgZXhwb3J0cywgZWoyX3JlYWN0X2Jhc2VfMSkge1xuICAgIFwidXNlIHN0cmljdFwiO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbiAgICB2YXIgQ29sdW1uRGlyZWN0aXZlID0gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICAgICAgX19leHRlbmRzKENvbHVtbkRpcmVjdGl2ZSwgX3N1cGVyKTtcbiAgICAgICAgZnVuY3Rpb24gQ29sdW1uRGlyZWN0aXZlKCkge1xuICAgICAgICAgICAgcmV0dXJuIF9zdXBlciAhPT0gbnVsbCAmJiBfc3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKSB8fCB0aGlzO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBDb2x1bW5EaXJlY3RpdmU7XG4gICAgfShlajJfcmVhY3RfYmFzZV8xLkNvbXBsZXhCYXNlKSk7XG4gICAgQ29sdW1uRGlyZWN0aXZlLm1vZHVsZU5hbWUgPSAnY29sdW1uJztcbiAgICBleHBvcnRzLkNvbHVtbkRpcmVjdGl2ZSA9IENvbHVtbkRpcmVjdGl2ZTtcbiAgICB2YXIgQ29sdW1uc0RpcmVjdGl2ZSA9IChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgICAgIF9fZXh0ZW5kcyhDb2x1bW5zRGlyZWN0aXZlLCBfc3VwZXIpO1xuICAgICAgICBmdW5jdGlvbiBDb2x1bW5zRGlyZWN0aXZlKCkge1xuICAgICAgICAgICAgcmV0dXJuIF9zdXBlciAhPT0gbnVsbCAmJiBfc3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKSB8fCB0aGlzO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBDb2x1bW5zRGlyZWN0aXZlO1xuICAgIH0oZWoyX3JlYWN0X2Jhc2VfMS5Db21wbGV4QmFzZSkpO1xuICAgIENvbHVtbnNEaXJlY3RpdmUucHJvcGVydHlOYW1lID0gJ2NvbHVtbnMnO1xuICAgIENvbHVtbnNEaXJlY3RpdmUubW9kdWxlTmFtZSA9ICdjb2x1bW5zJztcbiAgICBleHBvcnRzLkNvbHVtbnNEaXJlY3RpdmUgPSBDb2x1bW5zRGlyZWN0aXZlO1xufSk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9ncmlkL2NvbHVtbnMtZGlyZWN0aXZlLmpzXG4vLyBtb2R1bGUgaWQgPSAyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV8zX187XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJAc3luY2Z1c2lvbi9lajItcmVhY3QtYmFzZVwiXG4vLyBtb2R1bGUgaWQgPSAzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBfX2V4dGVuZHMgPSAodGhpcyAmJiB0aGlzLl9fZXh0ZW5kcykgfHwgKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxuICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XG4gICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKGIuaGFzT3duUHJvcGVydHkocCkpIGRbcF0gPSBiW3BdOyB9O1xuICAgIHJldHVybiBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xuICAgICAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cbiAgICAgICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xuICAgIH07XG59KSgpO1xuZGVmaW5lKFtcInJlcXVpcmVcIiwgXCJleHBvcnRzXCIsIFwiQHN5bmNmdXNpb24vZWoyLXJlYWN0LWJhc2VcIl0sIGZ1bmN0aW9uIChyZXF1aXJlLCBleHBvcnRzLCBlajJfcmVhY3RfYmFzZV8xKSB7XG4gICAgXCJ1c2Ugc3RyaWN0XCI7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuICAgIHZhciBBZ2dyZWdhdGVEaXJlY3RpdmUgPSAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgICAgICBfX2V4dGVuZHMoQWdncmVnYXRlRGlyZWN0aXZlLCBfc3VwZXIpO1xuICAgICAgICBmdW5jdGlvbiBBZ2dyZWdhdGVEaXJlY3RpdmUoKSB7XG4gICAgICAgICAgICByZXR1cm4gX3N1cGVyICE9PSBudWxsICYmIF9zdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpIHx8IHRoaXM7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIEFnZ3JlZ2F0ZURpcmVjdGl2ZTtcbiAgICB9KGVqMl9yZWFjdF9iYXNlXzEuQ29tcGxleEJhc2UpKTtcbiAgICBBZ2dyZWdhdGVEaXJlY3RpdmUubW9kdWxlTmFtZSA9ICdhZ2dyZWdhdGUnO1xuICAgIGV4cG9ydHMuQWdncmVnYXRlRGlyZWN0aXZlID0gQWdncmVnYXRlRGlyZWN0aXZlO1xuICAgIHZhciBBZ2dyZWdhdGVzRGlyZWN0aXZlID0gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICAgICAgX19leHRlbmRzKEFnZ3JlZ2F0ZXNEaXJlY3RpdmUsIF9zdXBlcik7XG4gICAgICAgIGZ1bmN0aW9uIEFnZ3JlZ2F0ZXNEaXJlY3RpdmUoKSB7XG4gICAgICAgICAgICByZXR1cm4gX3N1cGVyICE9PSBudWxsICYmIF9zdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpIHx8IHRoaXM7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIEFnZ3JlZ2F0ZXNEaXJlY3RpdmU7XG4gICAgfShlajJfcmVhY3RfYmFzZV8xLkNvbXBsZXhCYXNlKSk7XG4gICAgQWdncmVnYXRlc0RpcmVjdGl2ZS5wcm9wZXJ0eU5hbWUgPSAnYWdncmVnYXRlcyc7XG4gICAgQWdncmVnYXRlc0RpcmVjdGl2ZS5tb2R1bGVOYW1lID0gJ2FnZ3JlZ2F0ZXMnO1xuICAgIGV4cG9ydHMuQWdncmVnYXRlc0RpcmVjdGl2ZSA9IEFnZ3JlZ2F0ZXNEaXJlY3RpdmU7XG59KTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2dyaWQvYWdncmVnYXRlcy1kaXJlY3RpdmUuanNcbi8vIG1vZHVsZSBpZCA9IDRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIF9fZXh0ZW5kcyA9ICh0aGlzICYmIHRoaXMuX19leHRlbmRzKSB8fCAoZnVuY3Rpb24gKCkge1xuICAgIHZhciBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XG4gICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcbiAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoYi5oYXNPd25Qcm9wZXJ0eShwKSkgZFtwXSA9IGJbcF07IH07XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxuICAgICAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XG4gICAgfTtcbn0pKCk7XG5kZWZpbmUoW1wicmVxdWlyZVwiLCBcImV4cG9ydHNcIiwgXCJAc3luY2Z1c2lvbi9lajItcmVhY3QtYmFzZVwiXSwgZnVuY3Rpb24gKHJlcXVpcmUsIGV4cG9ydHMsIGVqMl9yZWFjdF9iYXNlXzEpIHtcbiAgICBcInVzZSBzdHJpY3RcIjtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG4gICAgdmFyIEFnZ3JlZ2F0ZUNvbHVtbkRpcmVjdGl2ZSA9IChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgICAgIF9fZXh0ZW5kcyhBZ2dyZWdhdGVDb2x1bW5EaXJlY3RpdmUsIF9zdXBlcik7XG4gICAgICAgIGZ1bmN0aW9uIEFnZ3JlZ2F0ZUNvbHVtbkRpcmVjdGl2ZSgpIHtcbiAgICAgICAgICAgIHJldHVybiBfc3VwZXIgIT09IG51bGwgJiYgX3N1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykgfHwgdGhpcztcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gQWdncmVnYXRlQ29sdW1uRGlyZWN0aXZlO1xuICAgIH0oZWoyX3JlYWN0X2Jhc2VfMS5Db21wbGV4QmFzZSkpO1xuICAgIEFnZ3JlZ2F0ZUNvbHVtbkRpcmVjdGl2ZS5tb2R1bGVOYW1lID0gJ2FnZ3JlZ2F0ZUNvbHVtbic7XG4gICAgZXhwb3J0cy5BZ2dyZWdhdGVDb2x1bW5EaXJlY3RpdmUgPSBBZ2dyZWdhdGVDb2x1bW5EaXJlY3RpdmU7XG4gICAgdmFyIEFnZ3JlZ2F0ZUNvbHVtbnNEaXJlY3RpdmUgPSAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgICAgICBfX2V4dGVuZHMoQWdncmVnYXRlQ29sdW1uc0RpcmVjdGl2ZSwgX3N1cGVyKTtcbiAgICAgICAgZnVuY3Rpb24gQWdncmVnYXRlQ29sdW1uc0RpcmVjdGl2ZSgpIHtcbiAgICAgICAgICAgIHJldHVybiBfc3VwZXIgIT09IG51bGwgJiYgX3N1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykgfHwgdGhpcztcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gQWdncmVnYXRlQ29sdW1uc0RpcmVjdGl2ZTtcbiAgICB9KGVqMl9yZWFjdF9iYXNlXzEuQ29tcGxleEJhc2UpKTtcbiAgICBBZ2dyZWdhdGVDb2x1bW5zRGlyZWN0aXZlLnByb3BlcnR5TmFtZSA9ICdjb2x1bW5zJztcbiAgICBBZ2dyZWdhdGVDb2x1bW5zRGlyZWN0aXZlLm1vZHVsZU5hbWUgPSAnYWdncmVnYXRlQ29sdW1ucyc7XG4gICAgZXhwb3J0cy5BZ2dyZWdhdGVDb2x1bW5zRGlyZWN0aXZlID0gQWdncmVnYXRlQ29sdW1uc0RpcmVjdGl2ZTtcbn0pO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvZ3JpZC9hZ2dyZWdhdGUtY29sdW1ucy1kaXJlY3RpdmUuanNcbi8vIG1vZHVsZSBpZCA9IDVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIF9fZXh0ZW5kcyA9ICh0aGlzICYmIHRoaXMuX19leHRlbmRzKSB8fCAoZnVuY3Rpb24gKCkge1xuICAgIHZhciBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XG4gICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcbiAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoYi5oYXNPd25Qcm9wZXJ0eShwKSkgZFtwXSA9IGJbcF07IH07XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxuICAgICAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XG4gICAgfTtcbn0pKCk7XG5kZWZpbmUoW1wicmVxdWlyZVwiLCBcImV4cG9ydHNcIiwgXCJyZWFjdFwiLCBcIkBzeW5jZnVzaW9uL2VqMi1ncmlkc1wiLCBcIkBzeW5jZnVzaW9uL2VqMi1yZWFjdC1iYXNlXCJdLCBmdW5jdGlvbiAocmVxdWlyZSwgZXhwb3J0cywgUmVhY3QsIGVqMl9ncmlkc18xLCBlajJfcmVhY3RfYmFzZV8xKSB7XG4gICAgXCJ1c2Ugc3RyaWN0XCI7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuICAgIHZhciBHcmlkQ29tcG9uZW50ID0gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICAgICAgX19leHRlbmRzKEdyaWRDb21wb25lbnQsIF9zdXBlcik7XG4gICAgICAgIGZ1bmN0aW9uIEdyaWRDb21wb25lbnQocHJvcHMpIHtcbiAgICAgICAgICAgIHZhciBfdGhpcyA9IF9zdXBlci5jYWxsKHRoaXMsIHByb3BzKSB8fCB0aGlzO1xuICAgICAgICAgICAgX3RoaXMuaW5pdFJlbmRlckNhbGxlZCA9IGZhbHNlO1xuICAgICAgICAgICAgX3RoaXMuY2hlY2tJbmplY3RlZE1vZHVsZXMgPSB0cnVlO1xuICAgICAgICAgICAgX3RoaXMuZGlyZWN0aXZla2V5cyA9IHsgJ2NvbHVtbnMnOiAnY29sdW1uJywgJ2FnZ3JlZ2F0ZXMnOiB7ICdhZ2dyZWdhdGUnOiB7ICdhZ2dyZWdhdGVDb2x1bW5zJzogJ2FnZ3JlZ2F0ZUNvbHVtbicgfSB9IH07XG4gICAgICAgICAgICBfdGhpcy5zdGF0ZSA9IHByb3BzO1xuICAgICAgICAgICAgcmV0dXJuIF90aGlzO1xuICAgICAgICB9XG4gICAgICAgIEdyaWRDb21wb25lbnQucHJvdG90eXBlLnJlbmRlciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGlmICgodGhpcy5lbGVtZW50ICYmICF0aGlzLmluaXRSZW5kZXJDYWxsZWQpIHx8IHRoaXMucmVmcmVzaGluZykge1xuICAgICAgICAgICAgICAgIF9zdXBlci5wcm90b3R5cGUucmVuZGVyLmNhbGwodGhpcyk7XG4gICAgICAgICAgICAgICAgdGhpcy5pbml0UmVuZGVyQ2FsbGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KCdkaXYnLCB0aGlzLmdldERlZmF1bHRBdHRyaWJ1dGVzKCksIHRoaXMucHJvcHMuY2hpbGRyZW4pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gR3JpZENvbXBvbmVudDtcbiAgICB9KGVqMl9ncmlkc18xLkdyaWQpKTtcbiAgICBleHBvcnRzLkdyaWRDb21wb25lbnQgPSBHcmlkQ29tcG9uZW50O1xuICAgIGVqMl9yZWFjdF9iYXNlXzEuYXBwbHlNaXhpbnMoR3JpZENvbXBvbmVudCwgW2VqMl9yZWFjdF9iYXNlXzEuQ29tcG9uZW50QmFzZSwgUmVhY3QuUHVyZUNvbXBvbmVudF0pO1xufSk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9ncmlkL2dyaWQuY29tcG9uZW50LmpzXG4vLyBtb2R1bGUgaWQgPSA2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV83X187XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJyZWFjdFwiXG4vLyBtb2R1bGUgaWQgPSA3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV84X187XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJAc3luY2Z1c2lvbi9lajItZ3JpZHNcIlxuLy8gbW9kdWxlIGlkID0gOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwic291cmNlUm9vdCI6IiJ9