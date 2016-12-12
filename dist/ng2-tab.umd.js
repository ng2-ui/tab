(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("@angular/core"), require("@angular/forms"), require("@angular/common"));
	else if(typeof define === 'function' && define.amd)
		define(["@angular/core", "@angular/forms", "@angular/common"], factory);
	else if(typeof exports === 'object')
		exports["ng2-tab"] = factory(require("@angular/core"), require("@angular/forms"), require("@angular/common"));
	else
		root["ng2-tab"] = factory(root["@angular/core"], root["@angular/forms"], root["@angular/common"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_2__, __WEBPACK_EXTERNAL_MODULE_4__, __WEBPACK_EXTERNAL_MODULE_5__) {
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
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var ng2_tab_component_1 = __webpack_require__(1);
	exports.Ng2TabComponent = ng2_tab_component_1.Ng2TabComponent;
	var ng2_tab_module_1 = __webpack_require__(3);
	exports.Ng2TabModule = ng2_tab_module_1.Ng2TabModule;


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(2);
	var Ng2TabComponent = (function () {
	    function Ng2TabComponent(viewContainer) {
	        this.viewContainer = viewContainer;
	        this.selectedIndexClass = 'selected';
	        this.selectedContentsClass = 'selected';
	        this.el = this.viewContainer.element.nativeElement;
	    }
	    Ng2TabComponent.prototype.ngAfterViewInit = function () {
	        var _this = this;
	        this.indexEls = [].slice.call(this.el.querySelectorAll('[index]'));
	        this.contentsEls = [].slice.call(this.el.querySelectorAll('[contents]'));
	        this.selectTab(this.selectedIndex);
	        this.indexEls.forEach(function (el) {
	            el.addEventListener('click', function () {
	                _this.selectTab(el.getAttribute('index'));
	            });
	        });
	    };
	    Ng2TabComponent.prototype.selectTab = function (id) {
	        var _this = this;
	        id = id || this.indexEls[0].getAttribute('index');
	        this.indexEls.forEach(function (el) {
	            _this.removeClass(el, _this.selectedIndexClass);
	            if (el.getAttribute('index') == id) {
	                _this.addClass(el, _this.selectedIndexClass);
	            }
	        });
	        this.contentsEls.forEach(function (el) {
	            el.style.display = 'none';
	            _this.removeClass(el, _this.selectedContentsClass);
	            if (el.getAttribute('contents') == id) {
	                el.style.display = '';
	                _this.addClass(el, _this.selectedContentsClass);
	            }
	        });
	    };
	    Ng2TabComponent.prototype.addClass = function (el, str) {
	        var classNames = (el.className || '').split(' ');
	        classNames.push(str);
	        el.className = classNames.join(' ');
	    };
	    Ng2TabComponent.prototype.removeClass = function (el, str) {
	        el.className = (el.className || '').replace(new RegExp('[ ]*' + str), '');
	    };
	    return Ng2TabComponent;
	}());
	__decorate([
	    core_1.Input('selected'),
	    __metadata("design:type", String)
	], Ng2TabComponent.prototype, "selectedIndex", void 0);
	__decorate([
	    core_1.Input('selected-index-class'),
	    __metadata("design:type", String)
	], Ng2TabComponent.prototype, "selectedIndexClass", void 0);
	__decorate([
	    core_1.Input('selected-contents-class'),
	    __metadata("design:type", String)
	], Ng2TabComponent.prototype, "selectedContentsClass", void 0);
	Ng2TabComponent = __decorate([
	    core_1.Component({
	        selector: 'ng2-tab, [ng2-tab]',
	        encapsulation: core_1.ViewEncapsulation.None,
	        template: "<ng-content></ng-content>",
	        styles: ["\n    .tabs {\n      position: relative;\n      top: 1px;\n      background: transparent;\n      display: block;\n    }\n    .tabs [index] {\n      display: inline-block;\n      border: 1px solid #999;\n      padding: 5px 10px;\n      border-radius: 2px 2px 0 0;\n    }\n    .tabs [index].selected {\n      padding-top: 0;\n      background: #f7f7f7;\n      border-top: 5px solid #00BCD4;\n      border-bottom: 1px solid transparent;\n    }\n    .tab-contents {\n      border: 1px solid #999;\n      border-radius: 2px;\n      min-height: 3em;\n    }\n  "],
	    }),
	    __metadata("design:paramtypes", [core_1.ViewContainerRef])
	], Ng2TabComponent);
	exports.Ng2TabComponent = Ng2TabComponent;


/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(2);
	var forms_1 = __webpack_require__(4);
	var common_1 = __webpack_require__(5);
	var ng2_tab_component_1 = __webpack_require__(1);
	exports.Ng2TabComponent = ng2_tab_component_1.Ng2TabComponent;
	var Ng2TabModule = (function () {
	    function Ng2TabModule() {
	    }
	    return Ng2TabModule;
	}());
	Ng2TabModule = __decorate([
	    core_1.NgModule({
	        imports: [common_1.CommonModule, forms_1.FormsModule],
	        declarations: [ng2_tab_component_1.Ng2TabComponent],
	        exports: [ng2_tab_component_1.Ng2TabComponent]
	    }),
	    __metadata("design:paramtypes", [])
	], Ng2TabModule);
	exports.Ng2TabModule = Ng2TabModule;


/***/ },
/* 4 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_4__;

/***/ },
/* 5 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_5__;

/***/ }
/******/ ])
});
;
//# sourceMappingURL=ng2-tab.umd.js.map