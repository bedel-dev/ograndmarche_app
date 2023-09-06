(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-pages-legal-legal-module-ngfactory"],{

/***/ "+rZe":
/*!********************************************************************!*\
  !*** ./src/app/components/shared/instagram/instagram.component.ts ***!
  \********************************************************************/
/*! exports provided: InstagramComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InstagramComponent", function() { return InstagramComponent; });
/* harmony import */ var _data_instagram_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../data/instagram.json */ "8L2s");
var _data_instagram_json__WEBPACK_IMPORTED_MODULE_0___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../../data/instagram.json */ "8L2s", 1);

class InstagramComponent {
    constructor() {
        this.instagram = _data_instagram_json__WEBPACK_IMPORTED_MODULE_0__;
    }
    ngOnInit() {
    }
}


/***/ }),

/***/ "6KBC":
/*!****************************************************************!*\
  !*** ./src/app/components/pages/legal/legal-routing.module.ts ***!
  \****************************************************************/
/*! exports provided: LegalRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LegalRoutingModule", function() { return LegalRoutingModule; });
/* harmony import */ var _legal_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./legal.component */ "g40R");

const routes = [{ path: '', component: _legal_component__WEBPACK_IMPORTED_MODULE_0__["LegalComponent"] }];
class LegalRoutingModule {
}


/***/ }),

/***/ "8L2s":
/*!*************************************!*\
  !*** ./src/app/data/instagram.json ***!
  \*************************************/
/*! exports provided: 0, 1, 2, 3, 4, 5, default */
/***/ (function(module) {

module.exports = JSON.parse("[{\"id\":1,\"img\":\"assets/img/ig/1.jpg\"},{\"id\":2,\"img\":\"assets/img/ig/2.jpg\"},{\"id\":3,\"img\":\"assets/img/ig/3.jpg\"},{\"id\":4,\"img\":\"assets/img/ig/4.jpg\"},{\"id\":5,\"img\":\"assets/img/ig/5.jpg\"},{\"id\":6,\"img\":\"assets/img/ig/6.jpg\"}]");

/***/ }),

/***/ "8TaD":
/*!*********************************************************************!*\
  !*** ./src/app/components/pages/legal/legal.component.ngfactory.js ***!
  \*********************************************************************/
/*! exports provided: RenderType_LegalComponent, View_LegalComponent_0, View_LegalComponent_Host_0, LegalComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_LegalComponent", function() { return RenderType_LegalComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_LegalComponent_0", function() { return View_LegalComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_LegalComponent_Host_0", function() { return View_LegalComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LegalComponentNgFactory", function() { return LegalComponentNgFactory; });
/* harmony import */ var _legal_component_css_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./legal.component.css.shim.ngstyle */ "rGEF");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _shared_headertwo_headertwo_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/headertwo/headertwo.component.ngfactory */ "DXox");
/* harmony import */ var _shared_headertwo_headertwo_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/headertwo/headertwo.component */ "vqSU");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _services_users_user_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../services/users/user.service */ "5xR+");
/* harmony import */ var _services_commandes_commande_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../services/commandes/commande.service */ "LVc+");
/* harmony import */ var _services_paniers_panier_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../services/paniers/panier.service */ "JvmC");
/* harmony import */ var _services_produits_produit_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../services/produits/produit.service */ "d/cB");
/* harmony import */ var _shared_breadcrumbs_breadcrumbs_component_ngfactory__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../shared/breadcrumbs/breadcrumbs.component.ngfactory */ "Ek5M");
/* harmony import */ var _shared_breadcrumbs_breadcrumbs_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../shared/breadcrumbs/breadcrumbs.component */ "8zIM");
/* harmony import */ var _content_content_component_ngfactory__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./content/content.component.ngfactory */ "z2eK");
/* harmony import */ var _content_content_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./content/content.component */ "sik/");
/* harmony import */ var _shared_instagram_instagram_component_ngfactory__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../shared/instagram/instagram.component.ngfactory */ "BFE4");
/* harmony import */ var _shared_instagram_instagram_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../shared/instagram/instagram.component */ "+rZe");
/* harmony import */ var _shared_footer_footer_component_ngfactory__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../shared/footer/footer.component.ngfactory */ "R8T8");
/* harmony import */ var _shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../shared/footer/footer.component */ "FezY");
/* harmony import */ var _legal_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./legal.component */ "g40R");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
 * tslint:disable
 */



















var styles_LegalComponent = [_legal_component_css_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
var RenderType_LegalComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 0, styles: styles_LegalComponent, data: {} });

function View_LegalComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-headertwo", [], null, [["window", "scroll"]], function (_v, en, $event) { var ad = true; if (("window:scroll" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).onWindowScroll($event) !== false);
        ad = (pd_0 && ad);
    } return ad; }, _shared_headertwo_headertwo_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_HeadertwoComponent_0"], _shared_headertwo_headertwo_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_HeadertwoComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _shared_headertwo_headertwo_component__WEBPACK_IMPORTED_MODULE_3__["HeadertwoComponent"], [_angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], _services_users_user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"], _services_commandes_commande_service__WEBPACK_IMPORTED_MODULE_7__["CommandeService"], _services_paniers_panier_service__WEBPACK_IMPORTED_MODULE_8__["PanierService"], _services_produits_produit_service__WEBPACK_IMPORTED_MODULE_9__["ProduitService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 1, "app-breadcrumbs", [], null, null, null, _shared_breadcrumbs_breadcrumbs_component_ngfactory__WEBPACK_IMPORTED_MODULE_10__["View_BreadcrumbsComponent_0"], _shared_breadcrumbs_breadcrumbs_component_ngfactory__WEBPACK_IMPORTED_MODULE_10__["RenderType_BreadcrumbsComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 114688, null, 0, _shared_breadcrumbs_breadcrumbs_component__WEBPACK_IMPORTED_MODULE_11__["BreadcrumbsComponent"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, null, 1, "app-content", [], null, null, null, _content_content_component_ngfactory__WEBPACK_IMPORTED_MODULE_12__["View_ContentComponent_0"], _content_content_component_ngfactory__WEBPACK_IMPORTED_MODULE_12__["RenderType_ContentComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](5, 114688, null, 0, _content_content_component__WEBPACK_IMPORTED_MODULE_13__["ContentComponent"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](6, 0, null, null, 1, "app-instagram", [], null, null, null, _shared_instagram_instagram_component_ngfactory__WEBPACK_IMPORTED_MODULE_14__["View_InstagramComponent_0"], _shared_instagram_instagram_component_ngfactory__WEBPACK_IMPORTED_MODULE_14__["RenderType_InstagramComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](7, 114688, null, 0, _shared_instagram_instagram_component__WEBPACK_IMPORTED_MODULE_15__["InstagramComponent"], [], { layout: [0, "layout"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](8, 0, null, null, 1, "app-footer", [], null, [["window", "scroll"]], function (_v, en, $event) { var ad = true; if (("window:scroll" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 9).checkScroll() !== false);
        ad = (pd_0 && ad);
    } return ad; }, _shared_footer_footer_component_ngfactory__WEBPACK_IMPORTED_MODULE_16__["View_FooterComponent_0"], _shared_footer_footer_component_ngfactory__WEBPACK_IMPORTED_MODULE_16__["RenderType_FooterComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](9, 114688, null, 0, _shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_17__["FooterComponent"], [], { layout: [0, "layout"], logo: [1, "logo"] }, null)], function (_ck, _v) { var _co = _v.component; _ck(_v, 1, 0); _ck(_v, 3, 0); _ck(_v, 5, 0); var currVal_0 = _co.instaclassname; _ck(_v, 7, 0, currVal_0); var currVal_1 = _co.classname; var currVal_2 = _co.ftlogo; _ck(_v, 9, 0, currVal_1, currVal_2); }, null); }
function View_LegalComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-legal", [], null, null, null, View_LegalComponent_0, RenderType_LegalComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _legal_component__WEBPACK_IMPORTED_MODULE_18__["LegalComponent"], [], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var LegalComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-legal", _legal_component__WEBPACK_IMPORTED_MODULE_18__["LegalComponent"], View_LegalComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "BFE4":
/*!******************************************************************************!*\
  !*** ./src/app/components/shared/instagram/instagram.component.ngfactory.js ***!
  \******************************************************************************/
/*! exports provided: RenderType_InstagramComponent, View_InstagramComponent_0, View_InstagramComponent_Host_0, InstagramComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_InstagramComponent", function() { return RenderType_InstagramComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_InstagramComponent_0", function() { return View_InstagramComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_InstagramComponent_Host_0", function() { return View_InstagramComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InstagramComponentNgFactory", function() { return InstagramComponentNgFactory; });
/* harmony import */ var _instagram_component_css_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./instagram.component.css.shim.ngstyle */ "pbL2");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _instagram_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./instagram.component */ "+rZe");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
 * tslint:disable
 */




var styles_InstagramComponent = [_instagram_component_css_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
var RenderType_InstagramComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 0, styles: styles_InstagramComponent, data: {} });

function View_InstagramComponent_1(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "div", [["class", "col-lg-4 col-md-4 col-sm-4 col-6 p-0"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 1, "a", [["class", "andro_ig-item"], ["href", "#"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 0, "img", [["alt", "ig"]], [[8, "src", 4]], null, null, null, null))], null, function (_ck, _v) { var currVal_0 = _v.context.$implicit.img; _ck(_v, 2, 0, currVal_0); }); }
function View_InstagramComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 10, "div", [["class", "row no-gutters"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 5, "div", [], [[8, "className", 0]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 4, "div", [["class", "andro_instagram"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 1, "h3", [["class", "text-white"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Follow Us On Instagram"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, null, 1, "a", [["class", "andro_btn-custom light"], ["href", "#"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Follow Us"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](7, 0, null, null, 3, "div", [["class", "col-lg-8"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](8, 0, null, null, 2, "div", [["class", "row no-gutters"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_InstagramComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](10, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], { ngForOf: [0, "ngForOf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_1 = _co.instagram; _ck(_v, 10, 0, currVal_1); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵinlineInterpolate"](1, "col-lg-4 ", _co.layout, " pattern-bg"); _ck(_v, 1, 0, currVal_0); }); }
function View_InstagramComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-instagram", [], null, null, null, View_InstagramComponent_0, RenderType_InstagramComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _instagram_component__WEBPACK_IMPORTED_MODULE_3__["InstagramComponent"], [], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var InstagramComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-instagram", _instagram_component__WEBPACK_IMPORTED_MODULE_3__["InstagramComponent"], View_InstagramComponent_Host_0, { layout: "layout" }, {}, []);



/***/ }),

/***/ "G3Dg":
/*!****************************************!*\
  !*** ./src/app/data/blogcategory.json ***!
  \****************************************/
/*! exports provided: 0, 1, 2, default */
/***/ (function(module) {

module.exports = JSON.parse("[{\"id\":1,\"title\":\"Produit consomable\",\"count\":32,\"children\":[]},{\"id\":2,\"title\":\"Intrant\",\"count\":24,\"children\":[]},{\"id\":3,\"title\":\"Outils\",\"count\":44,\"children\":[]}]");

/***/ }),

/***/ "Hdfl":
/*!**************************************************************************************!*\
  !*** ./src/app/components/pages/legal/content/content.component.css.shim.ngstyle.js ***!
  \**************************************************************************************/
/*! exports provided: styles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
 * tslint:disable
 */
var styles = ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcGFnZXMvbGVnYWwvY29udGVudC9jb250ZW50LmNvbXBvbmVudC5jc3MifQ== */"];



/***/ }),

/***/ "NZU0":
/*!********************************************************!*\
  !*** ./src/app/components/pages/legal/legal.module.ts ***!
  \********************************************************/
/*! exports provided: LegalModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LegalModule", function() { return LegalModule; });
class LegalModule {
}


/***/ }),

/***/ "g40R":
/*!***********************************************************!*\
  !*** ./src/app/components/pages/legal/legal.component.ts ***!
  \***********************************************************/
/*! exports provided: LegalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LegalComponent", function() { return LegalComponent; });
class LegalComponent {
    constructor() {
        // Instagram
        this.instaclassname = "secondary-bg";
        // Footer style
        this.classname = "";
        this.ftlogo = "assets/img/logo_ready.png";
    }
    ngOnInit() {
    }
}


/***/ }),

/***/ "pbL2":
/*!*************************************************************************************!*\
  !*** ./src/app/components/shared/instagram/instagram.component.css.shim.ngstyle.js ***!
  \*************************************************************************************/
/*! exports provided: styles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
 * tslint:disable
 */
var styles = ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2hhcmVkL2luc3RhZ3JhbS9pbnN0YWdyYW0uY29tcG9uZW50LmNzcyJ9 */"];



/***/ }),

/***/ "rGEF":
/*!****************************************************************************!*\
  !*** ./src/app/components/pages/legal/legal.component.css.shim.ngstyle.js ***!
  \****************************************************************************/
/*! exports provided: styles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
 * tslint:disable
 */
var styles = ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcGFnZXMvbGVnYWwvbGVnYWwuY29tcG9uZW50LmNzcyJ9 */"];



/***/ }),

/***/ "saAn":
/*!******************************************************************!*\
  !*** ./src/app/components/pages/legal/legal.module.ngfactory.js ***!
  \******************************************************************/
/*! exports provided: LegalModuleNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LegalModuleNgFactory", function() { return LegalModuleNgFactory; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _legal_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./legal.module */ "NZU0");
/* harmony import */ var _node_modules_angular_router_router_ngfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/@angular/router/router.ngfactory */ "pMnS");
/* harmony import */ var _legal_component_ngfactory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./legal.component.ngfactory */ "8TaD");
/* harmony import */ var _node_modules_ng_bootstrap_ng_bootstrap_ng_bootstrap_ngfactory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../node_modules/@ng-bootstrap/ng-bootstrap/ng-bootstrap.ngfactory */ "9AJC");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "G0yt");
/* harmony import */ var ngx_countdown__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-countdown */ "pQl/");
/* harmony import */ var angular_crumbs_breadcrumb_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! angular-crumbs/breadcrumb.service */ "iryk");
/* harmony import */ var angular_crumbs_breadcrumb_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! angular-crumbs/breadcrumb.module */ "lABs");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _services_produits_produit_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../services/produits/produit.service */ "d/cB");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common/http */ "IheW");
/* harmony import */ var _legal_routing_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./legal-routing.module */ "6KBC");
/* harmony import */ var ngx_slick_carousel__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ngx-slick-carousel */ "fyIi");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../shared/shared.module */ "hGdz");
/* harmony import */ var _legal_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./legal.component */ "g40R");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
 * tslint:disable
 */


















var LegalModuleNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcmf"](_legal_module__WEBPACK_IMPORTED_MODULE_1__["LegalModule"], [], function (_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmod"]([_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵCodegenComponentFactoryResolver"], [[8, [_node_modules_angular_router_router_ngfactory__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_router_router_lNgFactory"], _legal_component_ngfactory__WEBPACK_IMPORTED_MODULE_3__["LegalComponentNgFactory"], _node_modules_ng_bootstrap_ng_bootstrap_ng_bootstrap_ngfactory__WEBPACK_IMPORTED_MODULE_4__["NgbAlertNgFactory"], _node_modules_ng_bootstrap_ng_bootstrap_ng_bootstrap_ngfactory__WEBPACK_IMPORTED_MODULE_4__["NgbDatepickerNgFactory"], _node_modules_ng_bootstrap_ng_bootstrap_ng_bootstrap_ngfactory__WEBPACK_IMPORTED_MODULE_4__["ɵtNgFactory"], _node_modules_ng_bootstrap_ng_bootstrap_ng_bootstrap_ngfactory__WEBPACK_IMPORTED_MODULE_4__["ɵuNgFactory"], _node_modules_ng_bootstrap_ng_bootstrap_ng_bootstrap_ngfactory__WEBPACK_IMPORTED_MODULE_4__["ɵlNgFactory"], _node_modules_ng_bootstrap_ng_bootstrap_ng_bootstrap_ngfactory__WEBPACK_IMPORTED_MODULE_4__["ɵqNgFactory"], _node_modules_ng_bootstrap_ng_bootstrap_ng_bootstrap_ngfactory__WEBPACK_IMPORTED_MODULE_4__["ɵrNgFactory"]]], [3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModuleRef"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgLocalization"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgLocaleLocalization"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵangular_packages_forms_forms_n"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵangular_packages_forms_forms_n"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbModal"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbModal"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["ɵv"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbModalConfig"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, ngx_countdown__WEBPACK_IMPORTED_MODULE_8__["CountdownTimer"], ngx_countdown__WEBPACK_IMPORTED_MODULE_8__["CountdownTimer"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, angular_crumbs_breadcrumb_service__WEBPACK_IMPORTED_MODULE_9__["BreadcrumbService"], angular_crumbs_breadcrumb_module__WEBPACK_IMPORTED_MODULE_10__["breadcrumbServiceFactory"], [_angular_router__WEBPACK_IMPORTED_MODULE_11__["Router"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _services_produits_produit_service__WEBPACK_IMPORTED_MODULE_12__["ProduitService"], _services_produits_produit_service__WEBPACK_IMPORTED_MODULE_12__["ProduitService"], [_angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_11__["Router"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_router__WEBPACK_IMPORTED_MODULE_11__["RouterModule"], _angular_router__WEBPACK_IMPORTED_MODULE_11__["RouterModule"], [[2, _angular_router__WEBPACK_IMPORTED_MODULE_11__["ɵangular_packages_router_router_a"]], [2, _angular_router__WEBPACK_IMPORTED_MODULE_11__["Router"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _legal_routing_module__WEBPACK_IMPORTED_MODULE_14__["LegalRoutingModule"], _legal_routing_module__WEBPACK_IMPORTED_MODULE_14__["LegalRoutingModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, ngx_slick_carousel__WEBPACK_IMPORTED_MODULE_15__["SlickCarouselModule"], ngx_slick_carousel__WEBPACK_IMPORTED_MODULE_15__["SlickCarouselModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbAccordionModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbAccordionModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbAlertModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbAlertModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbButtonsModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbButtonsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbCarouselModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbCarouselModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbCollapseModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbCollapseModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵangular_packages_forms_forms_d"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵangular_packages_forms_forms_d"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbDatepickerModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbDatepickerModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbDropdownModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbDropdownModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbModalModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbModalModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbNavModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbNavModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbPaginationModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbPaginationModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbPopoverModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbPopoverModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbProgressbarModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbProgressbarModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbRatingModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbRatingModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbTimepickerModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbTimepickerModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbToastModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbToastModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbTooltipModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbTooltipModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbTypeaheadModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbTypeaheadModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, ngx_countdown__WEBPACK_IMPORTED_MODULE_8__["CountdownModule"], ngx_countdown__WEBPACK_IMPORTED_MODULE_8__["CountdownModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, angular_crumbs_breadcrumb_module__WEBPACK_IMPORTED_MODULE_10__["BreadcrumbModule"], angular_crumbs_breadcrumb_module__WEBPACK_IMPORTED_MODULE_10__["BreadcrumbModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _shared_shared_module__WEBPACK_IMPORTED_MODULE_16__["SharedModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_16__["SharedModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _legal_module__WEBPACK_IMPORTED_MODULE_1__["LegalModule"], _legal_module__WEBPACK_IMPORTED_MODULE_1__["LegalModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_router__WEBPACK_IMPORTED_MODULE_11__["ROUTES"], function () { return [[{ path: "", component: _legal_component__WEBPACK_IMPORTED_MODULE_17__["LegalComponent"] }]]; }, [])]); });



/***/ }),

/***/ "sik/":
/*!*********************************************************************!*\
  !*** ./src/app/components/pages/legal/content/content.component.ts ***!
  \*********************************************************************/
/*! exports provided: ContentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentComponent", function() { return ContentComponent; });
/* harmony import */ var _data_blog_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../data/blog.json */ "jYud");
var _data_blog_json__WEBPACK_IMPORTED_MODULE_0___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../../../data/blog.json */ "jYud", 1);
/* harmony import */ var _data_blogcategory_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../data/blogcategory.json */ "G3Dg");
var _data_blogcategory_json__WEBPACK_IMPORTED_MODULE_1___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../../../data/blogcategory.json */ "G3Dg", 1);


class ContentComponent {
    constructor() {
        this.blogbox = _data_blog_json__WEBPACK_IMPORTED_MODULE_0__;
        this.category = _data_blogcategory_json__WEBPACK_IMPORTED_MODULE_1__;
    }
    ngOnInit() {
    }
}


/***/ }),

/***/ "z2eK":
/*!*******************************************************************************!*\
  !*** ./src/app/components/pages/legal/content/content.component.ngfactory.js ***!
  \*******************************************************************************/
/*! exports provided: RenderType_ContentComponent, View_ContentComponent_0, View_ContentComponent_Host_0, ContentComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_ContentComponent", function() { return RenderType_ContentComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_ContentComponent_0", function() { return View_ContentComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_ContentComponent_Host_0", function() { return View_ContentComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentComponentNgFactory", function() { return ContentComponentNgFactory; });
/* harmony import */ var _content_component_css_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./content.component.css.shim.ngstyle */ "Hdfl");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _content_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./content.component */ "sik/");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
 * tslint:disable
 */





var styles_ContentComponent = [_content_component_css_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
var RenderType_ContentComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 0, styles: styles_ContentComponent, data: {} });

function View_ContentComponent_1(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 12, "article", [["class", "post"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 2, "a", [], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 2).onClick($event.button, $event.ctrlKey, $event.shiftKey, $event.altKey, $event.metaKey) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 671744, null, 0, _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["LocationStrategy"]], { routerLink: [0, "routerLink"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 0, "img", [], [[8, "src", 4], [8, "alt", 0]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, null, 3, "h6", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, null, 2, "a", [], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 6).onClick($event.button, $event.ctrlKey, $event.shiftKey, $event.altKey, $event.metaKey) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](6, 671744, null, 0, _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["LocationStrategy"]], { routerLink: [0, "routerLink"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](7, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](8, 0, null, null, 4, "span", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Posted on "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](10, 0, null, null, 2, "a", [], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 11).onClick($event.button, $event.ctrlKey, $event.shiftKey, $event.altKey, $event.metaKey) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](11, 671744, null, 0, _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["LocationStrategy"]], { routerLink: [0, "routerLink"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](12, null, ["", ""]))], function (_ck, _v) { var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵinlineInterpolate"](1, "/post-single/", _v.context.$implicit.id, ""); _ck(_v, 2, 0, currVal_2); var currVal_7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵinlineInterpolate"](1, "/post-single/", _v.context.$implicit.id, ""); _ck(_v, 6, 0, currVal_7); var currVal_11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵinlineInterpolate"](1, "/post-single/", _v.context.$implicit.id, ""); _ck(_v, 11, 0, currVal_11); }, function (_ck, _v) { var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 2).target; var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 2).href; _ck(_v, 1, 0, currVal_0, currVal_1); var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵinlineInterpolate"](1, "", _v.context.$implicit.photo, ""); var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵinlineInterpolate"](1, "", _v.context.$implicit.title, ""); _ck(_v, 3, 0, currVal_3, currVal_4); var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 6).target; var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 6).href; _ck(_v, 5, 0, currVal_5, currVal_6); var currVal_8 = _v.context.$implicit.title; _ck(_v, 7, 0, currVal_8); var currVal_9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 11).target; var currVal_10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 11).href; _ck(_v, 10, 0, currVal_9, currVal_10); var currVal_12 = _v.context.$implicit.postdate; _ck(_v, 12, 0, currVal_12); }); }
function View_ContentComponent_3(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 4, "li", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 3, "a", [["href", "#"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](2, null, [" ", " "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 1, "span", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](4, null, ["(", ")"]))], null, function (_ck, _v) { var currVal_0 = _v.context.$implicit.title; _ck(_v, 2, 0, currVal_0); var currVal_1 = _v.context.$implicit.count; _ck(_v, 4, 0, currVal_1); }); }
function View_ContentComponent_2(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 7, "li", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 3, "a", [["href", "#"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](2, null, [" ", " "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 1, "span", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](4, null, ["(", ")"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, null, 2, "ul", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ContentComponent_3)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](7, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], { ngForOf: [0, "ngForOf"] }, null)], function (_ck, _v) { var currVal_2 = _v.context.$implicit.children; _ck(_v, 7, 0, currVal_2); }, function (_ck, _v) { var currVal_0 = _v.context.$implicit.title; _ck(_v, 2, 0, currVal_0); var currVal_1 = _v.context.$implicit.count; _ck(_v, 4, 0, currVal_1); }); }
function View_ContentComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 61, "div", [["class", "section"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 60, "div", [["class", "container"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 59, "div", [["class", "row"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 33, "div", [["class", "col-lg-8"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, null, 32, "div", [["class", "entry-content"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, null, 1, "h3", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Who are we"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](7, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Our website is: http://androthemes.com/themes/angular/organista"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](9, 0, null, null, 1, "h3", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Privacy Policy"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](11, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](13, 0, null, null, 1, "h3", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Cookie Policy"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](15, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](17, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](19, 0, null, null, 1, "h3", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Order Policy"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](21, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](23, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc. "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](25, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](27, 0, null, null, 1, "h3", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Analytics"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](29, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc. "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](31, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](33, 0, null, null, 1, "h3", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["How Do We Store Your Data"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](35, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc. "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](37, 0, null, null, 24, "div", [["class", "col-lg-4"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](38, 0, null, null, 23, "div", [["class", "sidebar"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](39, 0, null, null, 5, "div", [["class", "sidebar-widget widget-recent-posts"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](40, 0, null, null, 1, "h5", [["class", "widget-title"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Recent Posts"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 2, null, View_ContentComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](43, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], { ngForOf: [0, "ngForOf"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["SlicePipe"], []), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](45, 0, null, null, 5, "div", [["class", "sidebar-widget"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](46, 0, null, null, 1, "h5", [["class", "widget-title"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" Post Categories "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](48, 0, null, null, 2, "ul", [["class", "sidebar-widget-list"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ContentComponent_2)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](50, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], { ngForOf: [0, "ngForOf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](51, 0, null, null, 10, "div", [["class", "sidebar-widget"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](52, 0, null, null, 9, "div", [["class", "andro_newsletter-form"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](53, 0, null, null, 1, "h5", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Join our newsletter"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](55, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Get exclusive weekly deals with our newsletter subscription"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](57, 0, null, null, 4, "form", [["method", "post"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](58, 0, null, null, 1, "div", [["class", "form-group"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](59, 0, null, null, 0, "input", [["class", "form-control"], ["name", "newsletter_email"], ["placeholder", "Email Address"], ["type", "email"], ["value", ""]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](60, 0, null, null, 1, "button", [["class", "andro_btn-custom btn-block"], ["name", "button"], ["type", "submit"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Join Newsletter"]))], function (_ck, _v) { var _co = _v.component; var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 43, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 44).transform(_co.blogbox, 0, 2)); _ck(_v, 43, 0, currVal_0); var currVal_1 = _co.category; _ck(_v, 50, 0, currVal_1); }, null); }
function View_ContentComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-content", [], null, null, null, View_ContentComponent_0, RenderType_ContentComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _content_component__WEBPACK_IMPORTED_MODULE_4__["ContentComponent"], [], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var ContentComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-content", _content_component__WEBPACK_IMPORTED_MODULE_4__["ContentComponent"], View_ContentComponent_Host_0, {}, {}, []);



/***/ })

}]);
//# sourceMappingURL=components-pages-legal-legal-module-ngfactory-es2015.js.map