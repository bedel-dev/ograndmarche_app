(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-pages-bloggrid-bloggrid-module-ngfactory"],{

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

/***/ "84wN":
/*!************************************************************************!*\
  !*** ./src/app/components/pages/bloggrid/content/content.component.ts ***!
  \************************************************************************/
/*! exports provided: ContentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentComponent", function() { return ContentComponent; });
/* harmony import */ var _data_blog_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../data/blog.json */ "jYud");
var _data_blog_json__WEBPACK_IMPORTED_MODULE_0___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../../../data/blog.json */ "jYud", 1);
/* harmony import */ var _data_blogtags_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../data/blogtags.json */ "KLMf");
var _data_blogtags_json__WEBPACK_IMPORTED_MODULE_1___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../../../data/blogtags.json */ "KLMf", 1);


class ContentComponent {
    constructor() {
        // pagination
        this.page = 1;
        this.blogbox = _data_blog_json__WEBPACK_IMPORTED_MODULE_0__;
        this.tags = _data_blogtags_json__WEBPACK_IMPORTED_MODULE_1__;
    }
    getBlogTags(items) {
        var elems = _data_blogtags_json__WEBPACK_IMPORTED_MODULE_1__.filter((item) => {
            return items.includes(item.id);
        });
        return elems;
    }
    ngOnInit() {
    }
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

/***/ "KLMf":
/*!************************************!*\
  !*** ./src/app/data/blogtags.json ***!
  \************************************/
/*! exports provided: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, default */
/***/ (function(module) {

module.exports = JSON.parse("[{\"id\":1,\"title\":\"Food\"},{\"id\":2,\"title\":\"Breeding\"},{\"id\":3,\"title\":\"Health\"},{\"id\":4,\"title\":\"Ingredients\"},{\"id\":5,\"title\":\"Organic\"},{\"id\":6,\"title\":\"Farms\"},{\"id\":7,\"title\":\"Green\"},{\"id\":8,\"title\":\"Fiber\"},{\"id\":9,\"title\":\"Supplements\"},{\"id\":10,\"title\":\"Gain\"},{\"id\":11,\"title\":\"Live Stock\"},{\"id\":12,\"title\":\"Harvest\"}]");

/***/ }),

/***/ "NYrx":
/*!*****************************************************************************************!*\
  !*** ./src/app/components/pages/bloggrid/content/content.component.css.shim.ngstyle.js ***!
  \*****************************************************************************************/
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
var styles = ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcGFnZXMvYmxvZ2dyaWQvY29udGVudC9jb250ZW50LmNvbXBvbmVudC5jc3MifQ== */"];



/***/ }),

/***/ "TL3n":
/*!**********************************************************************************!*\
  !*** ./src/app/components/pages/bloggrid/bloggrid.component.css.shim.ngstyle.js ***!
  \**********************************************************************************/
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
var styles = ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcGFnZXMvYmxvZ2dyaWQvYmxvZ2dyaWQuY29tcG9uZW50LmNzcyJ9 */"];



/***/ }),

/***/ "TY7b":
/*!************************************************************************!*\
  !*** ./src/app/components/pages/bloggrid/bloggrid.module.ngfactory.js ***!
  \************************************************************************/
/*! exports provided: BloggridModuleNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BloggridModuleNgFactory", function() { return BloggridModuleNgFactory; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _bloggrid_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bloggrid.module */ "nBrX");
/* harmony import */ var _node_modules_angular_router_router_ngfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/@angular/router/router.ngfactory */ "pMnS");
/* harmony import */ var _bloggrid_component_ngfactory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./bloggrid.component.ngfactory */ "c7e0");
/* harmony import */ var _node_modules_ng_bootstrap_ng_bootstrap_ng_bootstrap_ngfactory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../node_modules/@ng-bootstrap/ng-bootstrap/ng-bootstrap.ngfactory */ "9AJC");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "G0yt");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-pagination */ "xkgV");
/* harmony import */ var ngx_countdown__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-countdown */ "pQl/");
/* harmony import */ var angular_crumbs_breadcrumb_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! angular-crumbs/breadcrumb.service */ "iryk");
/* harmony import */ var angular_crumbs_breadcrumb_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! angular-crumbs/breadcrumb.module */ "lABs");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _services_produits_produit_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../services/produits/produit.service */ "d/cB");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common/http */ "IheW");
/* harmony import */ var _bloggrid_routing_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./bloggrid-routing.module */ "Yizx");
/* harmony import */ var ngx_slick_carousel__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ngx-slick-carousel */ "fyIi");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../shared/shared.module */ "hGdz");
/* harmony import */ var _bloggrid_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./bloggrid.component */ "V9IV");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
 * tslint:disable
 */



















var BloggridModuleNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcmf"](_bloggrid_module__WEBPACK_IMPORTED_MODULE_1__["BloggridModule"], [], function (_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmod"]([_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵCodegenComponentFactoryResolver"], [[8, [_node_modules_angular_router_router_ngfactory__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_router_router_lNgFactory"], _bloggrid_component_ngfactory__WEBPACK_IMPORTED_MODULE_3__["BloggridComponentNgFactory"], _node_modules_ng_bootstrap_ng_bootstrap_ng_bootstrap_ngfactory__WEBPACK_IMPORTED_MODULE_4__["NgbAlertNgFactory"], _node_modules_ng_bootstrap_ng_bootstrap_ng_bootstrap_ngfactory__WEBPACK_IMPORTED_MODULE_4__["NgbDatepickerNgFactory"], _node_modules_ng_bootstrap_ng_bootstrap_ng_bootstrap_ngfactory__WEBPACK_IMPORTED_MODULE_4__["ɵtNgFactory"], _node_modules_ng_bootstrap_ng_bootstrap_ng_bootstrap_ngfactory__WEBPACK_IMPORTED_MODULE_4__["ɵuNgFactory"], _node_modules_ng_bootstrap_ng_bootstrap_ng_bootstrap_ngfactory__WEBPACK_IMPORTED_MODULE_4__["ɵlNgFactory"], _node_modules_ng_bootstrap_ng_bootstrap_ng_bootstrap_ngfactory__WEBPACK_IMPORTED_MODULE_4__["ɵqNgFactory"], _node_modules_ng_bootstrap_ng_bootstrap_ng_bootstrap_ngfactory__WEBPACK_IMPORTED_MODULE_4__["ɵrNgFactory"]]], [3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModuleRef"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgLocalization"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgLocaleLocalization"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵangular_packages_forms_forms_n"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵangular_packages_forms_forms_n"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbModal"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbModal"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["ɵv"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbModalConfig"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, ngx_pagination__WEBPACK_IMPORTED_MODULE_8__["PaginationService"], ngx_pagination__WEBPACK_IMPORTED_MODULE_8__["PaginationService"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, ngx_countdown__WEBPACK_IMPORTED_MODULE_9__["CountdownTimer"], ngx_countdown__WEBPACK_IMPORTED_MODULE_9__["CountdownTimer"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, angular_crumbs_breadcrumb_service__WEBPACK_IMPORTED_MODULE_10__["BreadcrumbService"], angular_crumbs_breadcrumb_module__WEBPACK_IMPORTED_MODULE_11__["breadcrumbServiceFactory"], [_angular_router__WEBPACK_IMPORTED_MODULE_12__["Router"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _services_produits_produit_service__WEBPACK_IMPORTED_MODULE_13__["ProduitService"], _services_produits_produit_service__WEBPACK_IMPORTED_MODULE_13__["ProduitService"], [_angular_common_http__WEBPACK_IMPORTED_MODULE_14__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_12__["Router"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_router__WEBPACK_IMPORTED_MODULE_12__["RouterModule"], _angular_router__WEBPACK_IMPORTED_MODULE_12__["RouterModule"], [[2, _angular_router__WEBPACK_IMPORTED_MODULE_12__["ɵangular_packages_router_router_a"]], [2, _angular_router__WEBPACK_IMPORTED_MODULE_12__["Router"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _bloggrid_routing_module__WEBPACK_IMPORTED_MODULE_15__["BloggridRoutingModule"], _bloggrid_routing_module__WEBPACK_IMPORTED_MODULE_15__["BloggridRoutingModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbAccordionModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbAccordionModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbAlertModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbAlertModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbButtonsModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbButtonsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbCarouselModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbCarouselModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbCollapseModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbCollapseModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵangular_packages_forms_forms_d"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵangular_packages_forms_forms_d"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbDatepickerModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbDatepickerModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbDropdownModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbDropdownModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbModalModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbModalModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbNavModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbNavModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbPaginationModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbPaginationModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbPopoverModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbPopoverModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbProgressbarModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbProgressbarModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbRatingModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbRatingModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbTimepickerModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbTimepickerModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbToastModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbToastModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbTooltipModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbTooltipModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbTypeaheadModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbTypeaheadModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, ngx_pagination__WEBPACK_IMPORTED_MODULE_8__["NgxPaginationModule"], ngx_pagination__WEBPACK_IMPORTED_MODULE_8__["NgxPaginationModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, ngx_slick_carousel__WEBPACK_IMPORTED_MODULE_16__["SlickCarouselModule"], ngx_slick_carousel__WEBPACK_IMPORTED_MODULE_16__["SlickCarouselModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, ngx_countdown__WEBPACK_IMPORTED_MODULE_9__["CountdownModule"], ngx_countdown__WEBPACK_IMPORTED_MODULE_9__["CountdownModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, angular_crumbs_breadcrumb_module__WEBPACK_IMPORTED_MODULE_11__["BreadcrumbModule"], angular_crumbs_breadcrumb_module__WEBPACK_IMPORTED_MODULE_11__["BreadcrumbModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _shared_shared_module__WEBPACK_IMPORTED_MODULE_17__["SharedModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_17__["SharedModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _bloggrid_module__WEBPACK_IMPORTED_MODULE_1__["BloggridModule"], _bloggrid_module__WEBPACK_IMPORTED_MODULE_1__["BloggridModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_router__WEBPACK_IMPORTED_MODULE_12__["ROUTES"], function () { return [[{ path: "", component: _bloggrid_component__WEBPACK_IMPORTED_MODULE_18__["BloggridComponent"] }]]; }, [])]); });



/***/ }),

/***/ "V2+H":
/*!**********************************************************************************!*\
  !*** ./src/app/components/pages/bloggrid/content/content.component.ngfactory.js ***!
  \**********************************************************************************/
/*! exports provided: RenderType_ContentComponent, View_ContentComponent_0, View_ContentComponent_Host_0, ContentComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_ContentComponent", function() { return RenderType_ContentComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_ContentComponent_0", function() { return View_ContentComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_ContentComponent_Host_0", function() { return View_ContentComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentComponentNgFactory", function() { return ContentComponentNgFactory; });
/* harmony import */ var _content_component_css_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./content.component.css.shim.ngstyle */ "NYrx");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-pagination */ "xkgV");
/* harmony import */ var _node_modules_ngx_pagination_dist_ngx_pagination_ngfactory__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../node_modules/ngx-pagination/dist/ngx-pagination.ngfactory */ "abRS");
/* harmony import */ var _content_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./content.component */ "84wN");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
 * tslint:disable
 */







var styles_ContentComponent = [_content_component_css_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
var RenderType_ContentComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 0, styles: styles_ContentComponent, data: {} });

function View_ContentComponent_2(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "a", [["href", "#"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](1, null, ["", ""]))], null, function (_ck, _v) { var currVal_0 = _v.context.$implicit.title; _ck(_v, 1, 0, currVal_0); }); }
function View_ContentComponent_1(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 25, "div", [["class", "col-lg-4 col-md-6"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 24, "article", [["class", "andro_post"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 3, "div", [["class", "andro_post-thumb"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 2, "a", [], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 4).onClick($event.button, $event.ctrlKey, $event.shiftKey, $event.altKey, $event.metaKey) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](4, 671744, null, 0, _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["LocationStrategy"]], { routerLink: [0, "routerLink"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, null, 0, "img", [], [[8, "src", 4], [8, "alt", 0]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](6, 0, null, null, 19, "div", [["class", "andro_post-body"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](7, 0, null, null, 2, "div", [["class", "andro_post-categories"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ContentComponent_2)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](9, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], { ngForOf: [0, "ngForOf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](10, 0, null, null, 12, "div", [["class", "andro_post-desc"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](11, 0, null, null, 3, "h5", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](12, 0, null, null, 2, "a", [], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 13).onClick($event.button, $event.ctrlKey, $event.shiftKey, $event.altKey, $event.metaKey) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](13, 671744, null, 0, _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["LocationStrategy"]], { routerLink: [0, "routerLink"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](14, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](15, 0, null, null, 5, "span", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](16, 0, null, null, 1, "span", [["class", "fw-600"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Posted On "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](18, 0, null, null, 2, "a", [["class", "andro_post-date"]], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 19).onClick($event.button, $event.ctrlKey, $event.shiftKey, $event.altKey, $event.metaKey) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](19, 671744, null, 0, _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["LocationStrategy"]], { routerLink: [0, "routerLink"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](20, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](21, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](22, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](23, 0, null, null, 2, "a", [["class", "andro_btn-custom btn-block"]], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 24).onClick($event.button, $event.ctrlKey, $event.shiftKey, $event.altKey, $event.metaKey) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](24, 671744, null, 0, _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["LocationStrategy"]], { routerLink: [0, "routerLink"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" Read More "]))], function (_ck, _v) { var _co = _v.component; var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵinlineInterpolate"](1, "/post-single/", _v.context.$implicit.id, ""); _ck(_v, 4, 0, currVal_2); var currVal_5 = _co.getBlogTags(_v.context.$implicit.tags); _ck(_v, 9, 0, currVal_5); var currVal_8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵinlineInterpolate"](1, "/post-single/", _v.context.$implicit.id, ""); _ck(_v, 13, 0, currVal_8); var currVal_12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵinlineInterpolate"](1, "/post-single/", _v.context.$implicit.id, ""); _ck(_v, 19, 0, currVal_12); var currVal_17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵinlineInterpolate"](1, "/post-single/", _v.context.$implicit.id, ""); _ck(_v, 24, 0, currVal_17); }, function (_ck, _v) { var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 4).target; var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 4).href; _ck(_v, 3, 0, currVal_0, currVal_1); var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵinlineInterpolate"](1, "", _v.context.$implicit.photo, ""); var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵinlineInterpolate"](1, "", _v.context.$implicit.title, ""); _ck(_v, 5, 0, currVal_3, currVal_4); var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 13).target; var currVal_7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 13).href; _ck(_v, 12, 0, currVal_6, currVal_7); var currVal_9 = _v.context.$implicit.title; _ck(_v, 14, 0, currVal_9); var currVal_10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 19).target; var currVal_11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 19).href; _ck(_v, 18, 0, currVal_10, currVal_11); var currVal_13 = _v.context.$implicit.postdate; _ck(_v, 20, 0, currVal_13); var currVal_14 = _v.context.$implicit.shortdesc; _ck(_v, 22, 0, currVal_14); var currVal_15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 24).target; var currVal_16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 24).href; _ck(_v, 23, 0, currVal_15, currVal_16); }); }
function View_ContentComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 8, "div", [["class", "section"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 7, "div", [["class", "container"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 4, "div", [["class", "row"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 3, null, View_ContentComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](4, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], { ngForOf: [0, "ngForOf"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpod"](5, { itemsPerPage: 0, currentPage: 1 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](0, ngx_pagination__WEBPACK_IMPORTED_MODULE_4__["PaginatePipe"], [ngx_pagination__WEBPACK_IMPORTED_MODULE_4__["PaginationService"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](7, 0, null, null, 1, "pagination-controls", [], null, [[null, "pageChange"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("pageChange" === en)) {
        var pd_0 = ((_co.page = $event) !== false);
        ad = (pd_0 && ad);
    } return ad; }, _node_modules_ngx_pagination_dist_ngx_pagination_ngfactory__WEBPACK_IMPORTED_MODULE_5__["View_PaginationControlsComponent_0"], _node_modules_ngx_pagination_dist_ngx_pagination_ngfactory__WEBPACK_IMPORTED_MODULE_5__["RenderType_PaginationControlsComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](8, 49152, null, 0, ngx_pagination__WEBPACK_IMPORTED_MODULE_4__["PaginationControlsComponent"], [], null, { pageChange: "pageChange" })], function (_ck, _v) { var _co = _v.component; var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 4, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 6).transform(_co.blogbox, _ck(_v, 5, 0, 6, _co.page))); _ck(_v, 4, 0, currVal_0); }, null); }
function View_ContentComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-content", [], null, null, null, View_ContentComponent_0, RenderType_ContentComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _content_component__WEBPACK_IMPORTED_MODULE_6__["ContentComponent"], [], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var ContentComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-content", _content_component__WEBPACK_IMPORTED_MODULE_6__["ContentComponent"], View_ContentComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "V9IV":
/*!*****************************************************************!*\
  !*** ./src/app/components/pages/bloggrid/bloggrid.component.ts ***!
  \*****************************************************************/
/*! exports provided: BloggridComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BloggridComponent", function() { return BloggridComponent; });
class BloggridComponent {
    constructor() {
        // Instagram
        this.instaclassname = "secondary-bg";
        // Footer style
        this.classname = "";
        this.ftlogo = "assets/img/logo.png";
    }
    ngOnInit() {
    }
}


/***/ }),

/***/ "Yizx":
/*!**********************************************************************!*\
  !*** ./src/app/components/pages/bloggrid/bloggrid-routing.module.ts ***!
  \**********************************************************************/
/*! exports provided: BloggridRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BloggridRoutingModule", function() { return BloggridRoutingModule; });
/* harmony import */ var _bloggrid_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bloggrid.component */ "V9IV");

const routes = [{ path: '', component: _bloggrid_component__WEBPACK_IMPORTED_MODULE_0__["BloggridComponent"] }];
class BloggridRoutingModule {
}


/***/ }),

/***/ "c7e0":
/*!***************************************************************************!*\
  !*** ./src/app/components/pages/bloggrid/bloggrid.component.ngfactory.js ***!
  \***************************************************************************/
/*! exports provided: RenderType_BloggridComponent, View_BloggridComponent_0, View_BloggridComponent_Host_0, BloggridComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_BloggridComponent", function() { return RenderType_BloggridComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_BloggridComponent_0", function() { return View_BloggridComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_BloggridComponent_Host_0", function() { return View_BloggridComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BloggridComponentNgFactory", function() { return BloggridComponentNgFactory; });
/* harmony import */ var _bloggrid_component_css_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bloggrid.component.css.shim.ngstyle */ "TL3n");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _shared_headertwo_headertwo_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/headertwo/headertwo.component.ngfactory */ "DXox");
/* harmony import */ var _shared_headertwo_headertwo_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/headertwo/headertwo.component */ "vqSU");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _services_users_user_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../services/users/user.service */ "5xR+");
/* harmony import */ var _services_paniers_panier_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../services/paniers/panier.service */ "JvmC");
/* harmony import */ var _services_produits_produit_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../services/produits/produit.service */ "d/cB");
/* harmony import */ var _shared_breadcrumbs_breadcrumbs_component_ngfactory__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../shared/breadcrumbs/breadcrumbs.component.ngfactory */ "Ek5M");
/* harmony import */ var _shared_breadcrumbs_breadcrumbs_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../shared/breadcrumbs/breadcrumbs.component */ "8zIM");
/* harmony import */ var _content_content_component_ngfactory__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./content/content.component.ngfactory */ "V2+H");
/* harmony import */ var _content_content_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./content/content.component */ "84wN");
/* harmony import */ var _shared_instagram_instagram_component_ngfactory__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../shared/instagram/instagram.component.ngfactory */ "BFE4");
/* harmony import */ var _shared_instagram_instagram_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../shared/instagram/instagram.component */ "+rZe");
/* harmony import */ var _shared_footer_footer_component_ngfactory__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../shared/footer/footer.component.ngfactory */ "R8T8");
/* harmony import */ var _shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../shared/footer/footer.component */ "FezY");
/* harmony import */ var _bloggrid_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./bloggrid.component */ "V9IV");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
 * tslint:disable
 */


















var styles_BloggridComponent = [_bloggrid_component_css_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
var RenderType_BloggridComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 0, styles: styles_BloggridComponent, data: {} });

function View_BloggridComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-headertwo", [], null, [["window", "scroll"]], function (_v, en, $event) { var ad = true; if (("window:scroll" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).onWindowScroll($event) !== false);
        ad = (pd_0 && ad);
    } return ad; }, _shared_headertwo_headertwo_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_HeadertwoComponent_0"], _shared_headertwo_headertwo_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_HeadertwoComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _shared_headertwo_headertwo_component__WEBPACK_IMPORTED_MODULE_3__["HeadertwoComponent"], [_angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], _services_users_user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"], _services_paniers_panier_service__WEBPACK_IMPORTED_MODULE_7__["PanierService"], _services_produits_produit_service__WEBPACK_IMPORTED_MODULE_8__["ProduitService"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 1, "app-breadcrumbs", [], null, null, null, _shared_breadcrumbs_breadcrumbs_component_ngfactory__WEBPACK_IMPORTED_MODULE_9__["View_BreadcrumbsComponent_0"], _shared_breadcrumbs_breadcrumbs_component_ngfactory__WEBPACK_IMPORTED_MODULE_9__["RenderType_BreadcrumbsComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 114688, null, 0, _shared_breadcrumbs_breadcrumbs_component__WEBPACK_IMPORTED_MODULE_10__["BreadcrumbsComponent"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, null, 1, "app-content", [], null, null, null, _content_content_component_ngfactory__WEBPACK_IMPORTED_MODULE_11__["View_ContentComponent_0"], _content_content_component_ngfactory__WEBPACK_IMPORTED_MODULE_11__["RenderType_ContentComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](5, 114688, null, 0, _content_content_component__WEBPACK_IMPORTED_MODULE_12__["ContentComponent"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](6, 0, null, null, 1, "app-instagram", [], null, null, null, _shared_instagram_instagram_component_ngfactory__WEBPACK_IMPORTED_MODULE_13__["View_InstagramComponent_0"], _shared_instagram_instagram_component_ngfactory__WEBPACK_IMPORTED_MODULE_13__["RenderType_InstagramComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](7, 114688, null, 0, _shared_instagram_instagram_component__WEBPACK_IMPORTED_MODULE_14__["InstagramComponent"], [], { layout: [0, "layout"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](8, 0, null, null, 1, "app-footer", [], null, [["window", "scroll"]], function (_v, en, $event) { var ad = true; if (("window:scroll" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 9).checkScroll() !== false);
        ad = (pd_0 && ad);
    } return ad; }, _shared_footer_footer_component_ngfactory__WEBPACK_IMPORTED_MODULE_15__["View_FooterComponent_0"], _shared_footer_footer_component_ngfactory__WEBPACK_IMPORTED_MODULE_15__["RenderType_FooterComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](9, 114688, null, 0, _shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_16__["FooterComponent"], [], { layout: [0, "layout"], logo: [1, "logo"] }, null)], function (_ck, _v) { var _co = _v.component; _ck(_v, 1, 0); _ck(_v, 3, 0); _ck(_v, 5, 0); var currVal_0 = _co.instaclassname; _ck(_v, 7, 0, currVal_0); var currVal_1 = _co.classname; var currVal_2 = _co.ftlogo; _ck(_v, 9, 0, currVal_1, currVal_2); }, null); }
function View_BloggridComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-bloggrid", [], null, null, null, View_BloggridComponent_0, RenderType_BloggridComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _bloggrid_component__WEBPACK_IMPORTED_MODULE_17__["BloggridComponent"], [], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var BloggridComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-bloggrid", _bloggrid_component__WEBPACK_IMPORTED_MODULE_17__["BloggridComponent"], View_BloggridComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "nBrX":
/*!**************************************************************!*\
  !*** ./src/app/components/pages/bloggrid/bloggrid.module.ts ***!
  \**************************************************************/
/*! exports provided: BloggridModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BloggridModule", function() { return BloggridModule; });
class BloggridModule {
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



/***/ })

}]);
//# sourceMappingURL=components-pages-bloggrid-bloggrid-module-ngfactory-es2015.js.map