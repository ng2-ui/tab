(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("@angular/core"), require("@angular/forms"), require("@angular/common"));
	else if(typeof define === 'function' && define.amd)
		define(["@angular/core", "@angular/forms", "@angular/common"], factory);
	else if(typeof exports === 'object')
		exports["tab"] = factory(require("@angular/core"), require("@angular/forms"), require("@angular/common"));
	else
		root["tab"] = factory(root["@angular/core"], root["@angular/forms"], root["@angular/common"]);
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
	var tab_component_1 = __webpack_require__(1);
	exports.NguiTabComponent = tab_component_1.NguiTabComponent;
	var tab_module_1 = __webpack_require__(3);
	exports.NguiTabModule = tab_module_1.NguiTabModule;


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
	var NguiTabComponent = (function () {
	    function NguiTabComponent(viewContainer) {
	        this.viewContainer = viewContainer;
	        this.selectedIndexClass = 'selected';
	        this.selectedContentsClass = 'selected';
	        this.el = this.viewContainer.element.nativeElement;
	    }
	    NguiTabComponent.prototype.ngAfterViewInit = function () {
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
	    NguiTabComponent.prototype.selectTab = function (id) {
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
	    NguiTabComponent.prototype.addClass = function (el, str) {
	        var classNames = (el.className || '').split(' ');
	        classNames.push(str);
	        el.className = classNames.join(' ');
	    };
	    NguiTabComponent.prototype.removeClass = function (el, str) {
	        el.className = (el.className || '').replace(new RegExp('[ ]*' + str), '');
	    };
	    return NguiTabComponent;
	}());
	__decorate([
	    core_1.Input('selected'),
	    __metadata("design:type", String)
	], NguiTabComponent.prototype, "selectedIndex", void 0);
	__decorate([
	    core_1.Input('selected-index-class'),
	    __metadata("design:type", String)
	], NguiTabComponent.prototype, "selectedIndexClass", void 0);
	__decorate([
	    core_1.Input('selected-contents-class'),
	    __metadata("design:type", String)
	], NguiTabComponent.prototype, "selectedContentsClass", void 0);
	NguiTabComponent = __decorate([
	    core_1.Component({
	        selector: 'ngui-tab, [ngui-tab]',
	        encapsulation: core_1.ViewEncapsulation.None,
	        template: "<ng-content></ng-content>",
	        styles: ["\n    .tabs {\n      position: relative;\n      top: 1px;\n      background: transparent;\n      display: block;\n    }\n    .tabs [index] {\n      display: inline-block;\n      border: 1px solid #999;\n      padding: 5px 10px;\n      border-radius: 2px 2px 0 0;\n    }\n    .tabs [index].selected {\n      padding-top: 0;\n      background: #f7f7f7;\n      border-top: 5px solid #00BCD4;\n      border-bottom: 1px solid transparent;\n    }\n    .tab-contents {\n      border: 1px solid #999;\n      border-radius: 2px;\n      min-height: 3em;\n    }\n  "],
	    }),
	    __metadata("design:paramtypes", [core_1.ViewContainerRef])
	], NguiTabComponent);
	exports.NguiTabComponent = NguiTabComponent;


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
	var tab_component_1 = __webpack_require__(1);
	exports.NguiTabComponent = tab_component_1.NguiTabComponent;
	var NguiTabModule = (function () {
	    function NguiTabModule() {
	    }
	    return NguiTabModule;
	}());
	NguiTabModule = __decorate([
	    core_1.NgModule({
	        imports: [common_1.CommonModule, forms_1.FormsModule],
	        declarations: [tab_component_1.NguiTabComponent],
	        exports: [tab_component_1.NguiTabComponent]
	    }),
	    __metadata("design:paramtypes", [])
	], NguiTabModule);
	exports.NguiTabModule = NguiTabModule;


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
//# sourceMappingURL=tab.umd.js.map