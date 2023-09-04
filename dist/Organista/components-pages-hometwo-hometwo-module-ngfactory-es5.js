(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-pages-hometwo-hometwo-module-ngfactory"], {
    /***/
    "/jb+":
    /*!******************************************************************!*\
      !*** ./src/app/components/shared/category/category.component.ts ***!
      \******************************************************************/

    /*! exports provided: CategoryComponent */

    /***/
    function jb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CategoryComponent", function () {
        return CategoryComponent;
      });

      var CategoryComponent = /*#__PURE__*/function () {
        function CategoryComponent(produitService, router) {
          _classCallCheck(this, CategoryComponent);

          this.produitService = produitService;
          this.router = router;
        }

        _createClass(CategoryComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.getAllcategorie();
          }
        }, {
          key: "getAllcategorie",
          value: function getAllcategorie() {
            var _this = this;

            this.produitService.GetAllcategorie().subscribe(function (res) {
              _this.datas = res;
              _this.categorie = _this.datas.data;
            });
          }
        }, {
          key: "searchProduct",
          value: function searchProduct(variable) {
            var _this2 = this;

            var newroute = '/shop-v3/' + variable + ":" + "category";
            this.router.navigateByUrl('/', {
              skipLocationChange: true
            }).then(function () {
              _this2.router.navigate([newroute]);
            });
          }
        }]);

        return CategoryComponent;
      }();
      /***/

    },

    /***/
    "1AuQ":
    /*!**********************************************************************!*\
      !*** ./src/app/components/pages/hometwo/hometwo.module.ngfactory.js ***!
      \**********************************************************************/

    /*! exports provided: HometwoModuleNgFactory */

    /***/
    function AuQ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HometwoModuleNgFactory", function () {
        return HometwoModuleNgFactory;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _hometwo_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./hometwo.module */
      "zF0K");
      /* harmony import */


      var _node_modules_angular_router_router_ngfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../../../node_modules/@angular/router/router.ngfactory */
      "pMnS");
      /* harmony import */


      var _hometwo_component_ngfactory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./hometwo.component.ngfactory */
      "eKHA");
      /* harmony import */


      var _node_modules_ng_bootstrap_ng_bootstrap_ng_bootstrap_ngfactory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../../../../node_modules/@ng-bootstrap/ng-bootstrap/ng-bootstrap.ngfactory */
      "9AJC");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common */
      "SVse");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/forms */
      "s7LF");
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      "G0yt");
      /* harmony import */


      var ngx_countdown__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ngx-countdown */
      "pQl/");
      /* harmony import */


      var angular_crumbs_breadcrumb_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! angular-crumbs/breadcrumb.service */
      "iryk");
      /* harmony import */


      var angular_crumbs_breadcrumb_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! angular-crumbs/breadcrumb.module */
      "lABs");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/router */
      "iInd");
      /* harmony import */


      var _services_produits_produit_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ../../../services/produits/produit.service */
      "d/cB");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/common/http */
      "IheW");
      /* harmony import */


      var _hometwo_routing_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ./hometwo-routing.module */
      "Jn6a");
      /* harmony import */


      var ngx_slick_carousel__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ngx-slick-carousel */
      "fyIi");
      /* harmony import */


      var _shared_shared_module__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ../../shared/shared.module */
      "hGdz");
      /* harmony import */


      var _hometwo_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! ./hometwo.component */
      "eVxp");
      /**
       * @fileoverview This file was generated by the Angular template compiler. Do not edit.
       *
       * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
       * tslint:disable
       */


      var HometwoModuleNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcmf"](_hometwo_module__WEBPACK_IMPORTED_MODULE_1__["HometwoModule"], [], function (_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmod"]([_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵCodegenComponentFactoryResolver"], [[8, [_node_modules_angular_router_router_ngfactory__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_router_router_lNgFactory"], _hometwo_component_ngfactory__WEBPACK_IMPORTED_MODULE_3__["HometwoComponentNgFactory"], _node_modules_ng_bootstrap_ng_bootstrap_ng_bootstrap_ngfactory__WEBPACK_IMPORTED_MODULE_4__["NgbAlertNgFactory"], _node_modules_ng_bootstrap_ng_bootstrap_ng_bootstrap_ngfactory__WEBPACK_IMPORTED_MODULE_4__["NgbDatepickerNgFactory"], _node_modules_ng_bootstrap_ng_bootstrap_ng_bootstrap_ngfactory__WEBPACK_IMPORTED_MODULE_4__["ɵtNgFactory"], _node_modules_ng_bootstrap_ng_bootstrap_ng_bootstrap_ngfactory__WEBPACK_IMPORTED_MODULE_4__["ɵuNgFactory"], _node_modules_ng_bootstrap_ng_bootstrap_ng_bootstrap_ngfactory__WEBPACK_IMPORTED_MODULE_4__["ɵlNgFactory"], _node_modules_ng_bootstrap_ng_bootstrap_ng_bootstrap_ngfactory__WEBPACK_IMPORTED_MODULE_4__["ɵqNgFactory"], _node_modules_ng_bootstrap_ng_bootstrap_ng_bootstrap_ngfactory__WEBPACK_IMPORTED_MODULE_4__["ɵrNgFactory"]]], [3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModuleRef"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgLocalization"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgLocaleLocalization"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵangular_packages_forms_forms_n"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵangular_packages_forms_forms_n"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbModal"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbModal"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["ɵv"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbModalConfig"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, ngx_countdown__WEBPACK_IMPORTED_MODULE_8__["CountdownTimer"], ngx_countdown__WEBPACK_IMPORTED_MODULE_8__["CountdownTimer"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, angular_crumbs_breadcrumb_service__WEBPACK_IMPORTED_MODULE_9__["BreadcrumbService"], angular_crumbs_breadcrumb_module__WEBPACK_IMPORTED_MODULE_10__["breadcrumbServiceFactory"], [_angular_router__WEBPACK_IMPORTED_MODULE_11__["Router"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _services_produits_produit_service__WEBPACK_IMPORTED_MODULE_12__["ProduitService"], _services_produits_produit_service__WEBPACK_IMPORTED_MODULE_12__["ProduitService"], [_angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_11__["Router"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_router__WEBPACK_IMPORTED_MODULE_11__["RouterModule"], _angular_router__WEBPACK_IMPORTED_MODULE_11__["RouterModule"], [[2, _angular_router__WEBPACK_IMPORTED_MODULE_11__["ɵangular_packages_router_router_a"]], [2, _angular_router__WEBPACK_IMPORTED_MODULE_11__["Router"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _hometwo_routing_module__WEBPACK_IMPORTED_MODULE_14__["HometwoRoutingModule"], _hometwo_routing_module__WEBPACK_IMPORTED_MODULE_14__["HometwoRoutingModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, ngx_slick_carousel__WEBPACK_IMPORTED_MODULE_15__["SlickCarouselModule"], ngx_slick_carousel__WEBPACK_IMPORTED_MODULE_15__["SlickCarouselModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbAccordionModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbAccordionModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbAlertModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbAlertModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbButtonsModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbButtonsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbCarouselModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbCarouselModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbCollapseModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbCollapseModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵangular_packages_forms_forms_d"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵangular_packages_forms_forms_d"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbDatepickerModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbDatepickerModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbDropdownModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbDropdownModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbModalModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbModalModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbNavModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbNavModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbPaginationModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbPaginationModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbPopoverModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbPopoverModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbProgressbarModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbProgressbarModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbRatingModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbRatingModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbTimepickerModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbTimepickerModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbToastModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbToastModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbTooltipModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbTooltipModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbTypeaheadModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbTypeaheadModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, ngx_countdown__WEBPACK_IMPORTED_MODULE_8__["CountdownModule"], ngx_countdown__WEBPACK_IMPORTED_MODULE_8__["CountdownModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, angular_crumbs_breadcrumb_module__WEBPACK_IMPORTED_MODULE_10__["BreadcrumbModule"], angular_crumbs_breadcrumb_module__WEBPACK_IMPORTED_MODULE_10__["BreadcrumbModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _shared_shared_module__WEBPACK_IMPORTED_MODULE_16__["SharedModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_16__["SharedModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _hometwo_module__WEBPACK_IMPORTED_MODULE_1__["HometwoModule"], _hometwo_module__WEBPACK_IMPORTED_MODULE_1__["HometwoModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_router__WEBPACK_IMPORTED_MODULE_11__["ROUTES"], function () {
          return [[{
            path: "",
            component: _hometwo_component__WEBPACK_IMPORTED_MODULE_17__["HometwoComponent"]
          }]];
        }, [])]);
      });
      /***/

    },

    /***/
    "28nw":
    /*!********************************************************************************!*\
      !*** ./src/app/components/pages/hometwo/hometwo.component.css.shim.ngstyle.js ***!
      \********************************************************************************/

    /*! exports provided: styles */

    /***/
    function nw(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "styles", function () {
        return styles;
      });
      /**
       * @fileoverview This file was generated by the Angular template compiler. Do not edit.
       *
       * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
       * tslint:disable
       */


      var styles = ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcGFnZXMvaG9tZXR3by9ob21ldHdvLmNvbXBvbmVudC5jc3MifQ== */"];
      /***/
    },

    /***/
    "4D1z":
    /*!****************************************************************************************!*\
      !*** ./src/app/components/pages/hometwo/content/content.component.css.shim.ngstyle.js ***!
      \****************************************************************************************/

    /*! exports provided: styles */

    /***/
    function D1z(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "styles", function () {
        return styles;
      });
      /**
       * @fileoverview This file was generated by the Angular template compiler. Do not edit.
       *
       * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
       * tslint:disable
       */


      var styles = [".blink_me[_ngcontent-%COMP%] {\n    animation: blinker 1s linear infinite;\n    color: red !important;\n    \n  }\n@keyframes blinker {\n    50% {\n      opacity: 0;\n    }\n  }\n\n.anim[_ngcontent-%COMP%] {\n    \n    text-align: center;\n  }\n.anim[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    -webkit-text-stroke-width: 1.25px;\n    -webkit-text-stroke-color: #000;\n    \n    transform: translate(0, 100%) rotate(4deg);\n    animation: jump 2s ease-in-out infinite;\n    display: inline-block;\n    font-family: \"Open Sans\";\n    color: #fff;\n  }\n.anim[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(1) {\n    animation-delay: 120ms;\n  }\n.anim[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(2) {\n    animation-delay: 240ms;\n  }\n.anim[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(3) {\n    animation-delay: 360ms;\n  }\n.anim[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(4) {\n    animation-delay: 480ms;\n  }\n.anim[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(5) {\n    animation-delay: 600ms;\n  }\n.anim[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(6) {\n    animation-delay: 720ms;\n  }\n.anim[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(7) {\n    animation-delay: 840ms;\n  }\n.anim[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(8) {\n    animation-delay: 960ms;\n  }\n.anim[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(9) {\n    animation-delay: 1080ms;\n  }\n.anim[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(10) {\n    animation-delay: 1200ms;\n  }\n@keyframes jump {\n    33% {\n      \n    }\n    50% {\n      \n    }\n    66.67% {\n      \n    }\n  }\n\n.wiggle[_ngcontent-%COMP%] {\n  animation: wiggle 1.5s linear infinite;\n}\n\n@keyframes wiggle {\n  0%, 7% {\n    transform: rotateZ(0);\n  }\n  15% {\n    transform: rotateZ(-15deg);\n  }\n  20% {\n    transform: rotateZ(10deg);\n  }\n  25% {\n    transform: rotateZ(-10deg);\n  }\n  30% {\n    transform: rotateZ(6deg);\n  }\n  35% {\n    transform: rotateZ(-4deg);\n  }\n  40%, 100% {\n    transform: rotateZ(0);\n  }\n}\nbody[_ngcontent-%COMP%] {\n  background: #000;\n}\n.tests[_ngcontent-%COMP%] {\n  position: absolute;\n  left: calc(50% - 3em);\n  top: calc(50% - 2em);\n  \n  height: 4em;\n  width: 7em;\n  \n  background: #444;\n  background: linear-gradient(top, #555, #333);\n  border: none;\n  border-top: 3px solid orange;\n  border-radius: 0 0 0.2em 0.2em;\n  color: #fff;\n  font-family: Helvetica, Arial, Sans-serif;\n  font-size: 1em;\n  transform-origin: 50% 5em;\n}\n.andro_product.andro_product-has-controls.andro_product-has-buttons.slick-slide[_ngcontent-%COMP%] {\n  width: 350px !important;\n}\n.banner-pop[_ngcontent-%COMP%]{\n  bottom: 40%;\n  height: 250px;\n  width: 260px;\n  overflow: hidden;\n  border-radius: 4px;\n}\n.banner-pop[_ngcontent-%COMP%], .banner._pp[_ngcontent-%COMP%], .header[_ngcontent-%COMP%] {\n  z-index: 70;\n  max-width: 310px;\n}\n.banner-pop[_ngcontent-%COMP%], .card._sh2[_ngcontent-%COMP%] {\n  box-shadow: 0 2px 7px 1px rgb(0 0 0 / 15%);\n}\n.banner-pop[_ngcontent-%COMP%] {\n  left: 9px;\n}\n.b2top[_ngcontent-%COMP%]   .cta.btn[_ngcontent-%COMP%], .banner-pop[_ngcontent-%COMP%], .banner._pp[_ngcontent-%COMP%], .noti[_ngcontent-%COMP%], .popup[_ngcontent-%COMP%] {\n  position: fixed;\n}\n.banner-pops[_ngcontent-%COMP%] {\n  right: 4px;\n}\n.banner-pops[_ngcontent-%COMP%]{\n  bottom: 40%;\n  height: 250px;\n  width: 260px;\n  overflow: hidden;\n  border-radius: 4px;\n}\n.banner-pops[_ngcontent-%COMP%], .banner._pp[_ngcontent-%COMP%], .header[_ngcontent-%COMP%] {\n  z-index: 70;\n  max-width: 310px;\n}\n.banner-pops[_ngcontent-%COMP%], .card._sh2[_ngcontent-%COMP%] {\n  box-shadow: 0 2px 7px 1px rgb(0 0 0 / 15%);\n}\n.b2top[_ngcontent-%COMP%]   .cta.btn[_ngcontent-%COMP%], .banner-pops[_ngcontent-%COMP%], .banner._pp[_ngcontent-%COMP%], .noti[_ngcontent-%COMP%], .popup[_ngcontent-%COMP%] {\n  position: fixed;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wYWdlcy9ob21ldHdvL2NvbnRlbnQvY29udGVudC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJFQUFFLCtDQUErQztBQUNqRDtJQUNJLHFDQUFxQztJQUNyQyxxQkFBcUI7O0VBRXZCO0FBR0E7SUFDRTtNQUNFLFVBQVU7SUFDWjtFQUNGO0FBSUEscUZBQXFGO0FBRXJGO0lBQ0Usa0JBQWtCO0lBQ2xCLGtCQUFrQjtFQUNwQjtBQUNBO0lBQ0UsaUNBQWlDO0lBQ2pDLCtCQUErQjtJQUMvQiwrQ0FBK0M7SUFDL0MsMENBQTBDO0lBQzFDLHVDQUF1QztJQUN2QyxxQkFBcUI7SUFDckIsd0JBQXdCO0lBQ3hCLFdBQVc7RUFDYjtBQUNBO0lBQ0Usc0JBQXNCO0VBQ3hCO0FBQ0E7SUFDRSxzQkFBc0I7RUFDeEI7QUFDQTtJQUNFLHNCQUFzQjtFQUN4QjtBQUNBO0lBQ0Usc0JBQXNCO0VBQ3hCO0FBQ0E7SUFDRSxzQkFBc0I7RUFDeEI7QUFDQTtJQUNFLHNCQUFzQjtFQUN4QjtBQUNBO0lBQ0Usc0JBQXNCO0VBQ3hCO0FBQ0E7SUFDRSxzQkFBc0I7RUFDeEI7QUFDQTtJQUNFLHVCQUF1QjtFQUN6QjtBQUNBO0lBQ0UsdUJBQXVCO0VBQ3pCO0FBRUE7SUFDRTtNQUNFLGlEQUFpRDtJQUNuRDtJQUNBO01BQ0U7a0RBQzRDO0lBQzlDO0lBQ0E7TUFDRSxrREFBa0Q7SUFDcEQ7RUFDRjtBQUVBLDhDQUE4QztBQUNoRDtFQUNFLHNDQUFzQztBQUN4QztBQUVBLGNBQWM7QUFDZDtFQUNFO0lBQ0UscUJBQXFCO0VBQ3ZCO0VBQ0E7SUFDRSwwQkFBMEI7RUFDNUI7RUFDQTtJQUNFLHlCQUF5QjtFQUMzQjtFQUNBO0lBQ0UsMEJBQTBCO0VBQzVCO0VBQ0E7SUFDRSx3QkFBd0I7RUFDMUI7RUFDQTtJQUNFLHlCQUF5QjtFQUMzQjtFQUNBO0lBQ0UscUJBQXFCO0VBQ3ZCO0FBQ0Y7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLHFCQUFxQjtFQUNyQixvQkFBb0I7O0VBRXBCLFdBQVc7RUFDWCxVQUFVOztFQUVWLGdCQUFnQjtFQUNoQiw0Q0FBNEM7RUFDNUMsWUFBWTtFQUNaLDRCQUE0QjtFQUM1Qiw4QkFBOEI7RUFDOUIsV0FBVztFQUNYLHlDQUF5QztFQUN6QyxjQUFjO0VBQ2QseUJBQXlCO0FBQzNCO0FBRUE7RUFDRSx1QkFBdUI7QUFDekI7QUFFQTtFQUNFLFdBQVc7RUFDWCxhQUFhO0VBQ2IsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixrQkFBa0I7QUFDcEI7QUFFQTtFQUNFLFdBQVc7RUFDWCxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLDBDQUEwQztBQUM1QztBQUVBO0VBQ0UsU0FBUztBQUNYO0FBR0E7RUFDRSxlQUFlO0FBQ2pCO0FBTUE7RUFDRSxVQUFVO0FBQ1o7QUFFQTtFQUNFLFdBQVc7RUFDWCxhQUFhO0VBQ2IsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixrQkFBa0I7QUFDcEI7QUFFQTtFQUNFLFdBQVc7RUFDWCxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLDBDQUEwQztBQUM1QztBQUVBO0VBQ0UsZUFBZTtBQUNqQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcGFnZXMvaG9tZXR3by9jb250ZW50L2NvbnRlbnQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiAgLyogYW5pbSAxIGFkZCBibGlua19tZSBjbGFzcyB0byB1cCBlbGVtZW50IGxpICovXG4uYmxpbmtfbWUge1xuICAgIGFuaW1hdGlvbjogYmxpbmtlciAxcyBsaW5lYXIgaW5maW5pdGU7XG4gICAgY29sb3I6IHJlZCAhaW1wb3J0YW50O1xuICAgIFxuICB9XG5cbiAgXG4gIEBrZXlmcmFtZXMgYmxpbmtlciB7XG4gICAgNTAlIHtcbiAgICAgIG9wYWNpdHk6IDA7XG4gICAgfVxuICB9XG5cblxuXG4gIC8qIGFuaW0gMiBhZGQgYW5pbSBjbGFzcyB0byB1cCBlbGVtZW50IGxpIG9yIGEgIGFuZCBjcmVhdGUgZGlmZmVyZW50IHNwYW4gb2YgbGV0dGVyICovXG4gIEBpbXBvcnQgdXJsKFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1UaXRhbitPbmUmZGlzcGxheT1zd2FwXCIpO1xuICAuYW5pbSB7XG4gICAgLyogd2lkdGg6IDEwMHZ3OyAqL1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxuICAuYW5pbSBzcGFuIHtcbiAgICAtd2Via2l0LXRleHQtc3Ryb2tlLXdpZHRoOiAxLjI1cHg7XG4gICAgLXdlYmtpdC10ZXh0LXN0cm9rZS1jb2xvcjogIzAwMDtcbiAgICAvKiB0ZXh0LXNoYWRvdzogMCAwcHggI2YzYzYyMywgMCAwcHggI2YyYWFhYTsgKi9cbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAxMDAlKSByb3RhdGUoNGRlZyk7XG4gICAgYW5pbWF0aW9uOiBqdW1wIDJzIGVhc2UtaW4tb3V0IGluZmluaXRlO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBmb250LWZhbWlseTogXCJPcGVuIFNhbnNcIjtcbiAgICBjb2xvcjogI2ZmZjtcbiAgfVxuICAuYW5pbSBzcGFuOm50aC1jaGlsZCgxKSB7XG4gICAgYW5pbWF0aW9uLWRlbGF5OiAxMjBtcztcbiAgfVxuICAuYW5pbSBzcGFuOm50aC1jaGlsZCgyKSB7XG4gICAgYW5pbWF0aW9uLWRlbGF5OiAyNDBtcztcbiAgfVxuICAuYW5pbSBzcGFuOm50aC1jaGlsZCgzKSB7XG4gICAgYW5pbWF0aW9uLWRlbGF5OiAzNjBtcztcbiAgfVxuICAuYW5pbSBzcGFuOm50aC1jaGlsZCg0KSB7XG4gICAgYW5pbWF0aW9uLWRlbGF5OiA0ODBtcztcbiAgfVxuICAuYW5pbSBzcGFuOm50aC1jaGlsZCg1KSB7XG4gICAgYW5pbWF0aW9uLWRlbGF5OiA2MDBtcztcbiAgfVxuICAuYW5pbSBzcGFuOm50aC1jaGlsZCg2KSB7XG4gICAgYW5pbWF0aW9uLWRlbGF5OiA3MjBtcztcbiAgfVxuICAuYW5pbSBzcGFuOm50aC1jaGlsZCg3KSB7XG4gICAgYW5pbWF0aW9uLWRlbGF5OiA4NDBtcztcbiAgfVxuICAuYW5pbSBzcGFuOm50aC1jaGlsZCg4KSB7XG4gICAgYW5pbWF0aW9uLWRlbGF5OiA5NjBtcztcbiAgfVxuICAuYW5pbSBzcGFuOm50aC1jaGlsZCg5KSB7XG4gICAgYW5pbWF0aW9uLWRlbGF5OiAxMDgwbXM7XG4gIH1cbiAgLmFuaW0gc3BhbjpudGgtY2hpbGQoMTApIHtcbiAgICBhbmltYXRpb24tZGVsYXk6IDEyMDBtcztcbiAgfVxuICBcbiAgQGtleWZyYW1lcyBqdW1wIHtcbiAgICAzMyUge1xuICAgICAgLyogdGV4dC1zaGFkb3c6IDAgNjBweCAjZjM3MTIxLCAwIDUwcHggI2YyYWFhYTsgKi9cbiAgICB9XG4gICAgNTAlIHtcbiAgICAgIC8qIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDApIHJvdGF0ZSgtNGRlZyk7XG4gICAgICB0ZXh0LXNoYWRvdzogMCAwcHggIzhmYzBhOSwgMCAwcHggIzg0YTlhYzsgKi9cbiAgICB9XG4gICAgNjYuNjclIHtcbiAgICAgIC8qIHRleHQtc2hhZG93OiAwIC02MHB4ICNkNTQwNjIsIDAgNTBweCAjOGZjMGE5OyAqL1xuICAgIH1cbiAgfVxuXG4gIC8qIGFuaW0gMyBhZGQgd2lnZ2xlIGNsYXNzIHRvIHVwIGVsZW1lbnQgbGkgICovXG4ud2lnZ2xlIHtcbiAgYW5pbWF0aW9uOiB3aWdnbGUgMS41cyBsaW5lYXIgaW5maW5pdGU7XG59XG5cbi8qIEtleWZyYW1lcyAqL1xuQGtleWZyYW1lcyB3aWdnbGUge1xuICAwJSwgNyUge1xuICAgIHRyYW5zZm9ybTogcm90YXRlWigwKTtcbiAgfVxuICAxNSUge1xuICAgIHRyYW5zZm9ybTogcm90YXRlWigtMTVkZWcpO1xuICB9XG4gIDIwJSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGVaKDEwZGVnKTtcbiAgfVxuICAyNSUge1xuICAgIHRyYW5zZm9ybTogcm90YXRlWigtMTBkZWcpO1xuICB9XG4gIDMwJSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGVaKDZkZWcpO1xuICB9XG4gIDM1JSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGVaKC00ZGVnKTtcbiAgfVxuICA0MCUsIDEwMCUge1xuICAgIHRyYW5zZm9ybTogcm90YXRlWigwKTtcbiAgfVxufVxuXG5ib2R5IHtcbiAgYmFja2dyb3VuZDogIzAwMDtcbn1cblxuLnRlc3RzIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiBjYWxjKDUwJSAtIDNlbSk7XG4gIHRvcDogY2FsYyg1MCUgLSAyZW0pO1xuICBcbiAgaGVpZ2h0OiA0ZW07XG4gIHdpZHRoOiA3ZW07XG4gIFxuICBiYWNrZ3JvdW5kOiAjNDQ0O1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG9wLCAjNTU1LCAjMzMzKTtcbiAgYm9yZGVyOiBub25lO1xuICBib3JkZXItdG9wOiAzcHggc29saWQgb3JhbmdlO1xuICBib3JkZXItcmFkaXVzOiAwIDAgMC4yZW0gMC4yZW07XG4gIGNvbG9yOiAjZmZmO1xuICBmb250LWZhbWlseTogSGVsdmV0aWNhLCBBcmlhbCwgU2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAxZW07XG4gIHRyYW5zZm9ybS1vcmlnaW46IDUwJSA1ZW07XG59XG5cbi5hbmRyb19wcm9kdWN0LmFuZHJvX3Byb2R1Y3QtaGFzLWNvbnRyb2xzLmFuZHJvX3Byb2R1Y3QtaGFzLWJ1dHRvbnMuc2xpY2stc2xpZGUge1xuICB3aWR0aDogMzUwcHggIWltcG9ydGFudDtcbn1cblxuLmJhbm5lci1wb3B7XG4gIGJvdHRvbTogNDAlO1xuICBoZWlnaHQ6IDI1MHB4O1xuICB3aWR0aDogMjYwcHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbn1cblxuLmJhbm5lci1wb3AsIC5iYW5uZXIuX3BwLCAuaGVhZGVyIHtcbiAgei1pbmRleDogNzA7XG4gIG1heC13aWR0aDogMzEwcHg7XG59XG4uYmFubmVyLXBvcCwgLmNhcmQuX3NoMiB7XG4gIGJveC1zaGFkb3c6IDAgMnB4IDdweCAxcHggcmdiKDAgMCAwIC8gMTUlKTtcbn1cblxuLmJhbm5lci1wb3Age1xuICBsZWZ0OiA5cHg7XG59XG5cblxuLmIydG9wIC5jdGEuYnRuLCAuYmFubmVyLXBvcCwgLmJhbm5lci5fcHAsIC5ub3RpLCAucG9wdXAge1xuICBwb3NpdGlvbjogZml4ZWQ7XG59XG5cblxuXG5cblxuLmJhbm5lci1wb3BzIHtcbiAgcmlnaHQ6IDRweDtcbn1cblxuLmJhbm5lci1wb3Bze1xuICBib3R0b206IDQwJTtcbiAgaGVpZ2h0OiAyNTBweDtcbiAgd2lkdGg6IDI2MHB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG59XG5cbi5iYW5uZXItcG9wcywgLmJhbm5lci5fcHAsIC5oZWFkZXIge1xuICB6LWluZGV4OiA3MDtcbiAgbWF4LXdpZHRoOiAzMTBweDtcbn1cbi5iYW5uZXItcG9wcywgLmNhcmQuX3NoMiB7XG4gIGJveC1zaGFkb3c6IDAgMnB4IDdweCAxcHggcmdiKDAgMCAwIC8gMTUlKTtcbn1cblxuLmIydG9wIC5jdGEuYnRuLCAuYmFubmVyLXBvcHMsIC5iYW5uZXIuX3BwLCAubm90aSwgLnBvcHVwIHtcbiAgcG9zaXRpb246IGZpeGVkO1xufSJdfQ== */"];
      /***/
    },

    /***/
    "5hEr":
    /*!****************************************************************************!*\
      !*** ./src/app/components/shared/category/category.component.ngfactory.js ***!
      \****************************************************************************/

    /*! exports provided: RenderType_CategoryComponent, View_CategoryComponent_0, View_CategoryComponent_Host_0, CategoryComponentNgFactory */

    /***/
    function hEr(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RenderType_CategoryComponent", function () {
        return RenderType_CategoryComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "View_CategoryComponent_0", function () {
        return View_CategoryComponent_0;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "View_CategoryComponent_Host_0", function () {
        return View_CategoryComponent_Host_0;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CategoryComponentNgFactory", function () {
        return CategoryComponentNgFactory;
      });
      /* harmony import */


      var _category_component_css_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./category.component.css.shim.ngstyle */
      "XEfl");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "iInd");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      "SVse");
      /* harmony import */


      var _category_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./category.component */
      "/jb+");
      /* harmony import */


      var _services_produits_produit_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../../services/produits/produit.service */
      "d/cB");
      /**
       * @fileoverview This file was generated by the Angular template compiler. Do not edit.
       *
       * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
       * tslint:disable
       */


      var styles_CategoryComponent = [_category_component_css_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];

      var RenderType_CategoryComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({
        encapsulation: 0,
        styles: styles_CategoryComponent,
        data: {}
      });

      function View_CategoryComponent_2(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 3, "th", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 2, "a", [], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) {
          var ad = true;

          if ("click" === en) {
            var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 2).onClick($event.button, $event.ctrlKey, $event.shiftKey, $event.altKey, $event.metaKey) !== false;
            ad = pd_0 && ad;
          }

          return ad;
        }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 671744, null, 0, _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["LocationStrategy"]], {
          routerLink: [0, "routerLink"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](3, null, [" ", " "]))], function (_ck, _v) {
          var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵinlineInterpolate"](1, "/shop-v3/", _v.parent.context.$implicit.id, ":category");

          _ck(_v, 2, 0, currVal_2);
        }, function (_ck, _v) {
          var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 2).target;

          var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 2).href;

          _ck(_v, 1, 0, currVal_0, currVal_1);

          var currVal_3 = _v.parent.context.$implicit.label;

          _ck(_v, 3, 0, currVal_3);
        });
      }

      function View_CategoryComponent_1(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "tr", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_CategoryComponent_2)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null)], function (_ck, _v) {
          var currVal_0 = _v.context.$implicit.type_produit === "Produit consommable";

          _ck(_v, 2, 0, currVal_0);
        }, null);
      }

      function View_CategoryComponent_4(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 3, "th", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 2, "a", [], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) {
          var ad = true;

          if ("click" === en) {
            var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 2).onClick($event.button, $event.ctrlKey, $event.shiftKey, $event.altKey, $event.metaKey) !== false;
            ad = pd_0 && ad;
          }

          return ad;
        }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 671744, null, 0, _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["LocationStrategy"]], {
          routerLink: [0, "routerLink"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](3, null, [" ", ""]))], function (_ck, _v) {
          var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵinlineInterpolate"](1, "/shop-v3/", _v.parent.context.$implicit.id, ":category");

          _ck(_v, 2, 0, currVal_2);
        }, function (_ck, _v) {
          var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 2).target;

          var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 2).href;

          _ck(_v, 1, 0, currVal_0, currVal_1);

          var currVal_3 = _v.parent.context.$implicit.label;

          _ck(_v, 3, 0, currVal_3);
        });
      }

      function View_CategoryComponent_3(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "tr", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_CategoryComponent_4)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null)], function (_ck, _v) {
          var currVal_0 = _v.context.$implicit.type_produit === "Intrant";

          _ck(_v, 2, 0, currVal_0);
        }, null);
      }

      function View_CategoryComponent_6(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 3, "th", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 2, "a", [], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) {
          var ad = true;

          if ("click" === en) {
            var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 2).onClick($event.button, $event.ctrlKey, $event.shiftKey, $event.altKey, $event.metaKey) !== false;
            ad = pd_0 && ad;
          }

          return ad;
        }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 671744, null, 0, _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["LocationStrategy"]], {
          routerLink: [0, "routerLink"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](3, null, [" ", ""]))], function (_ck, _v) {
          var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵinlineInterpolate"](1, "/shop-v3/", _v.parent.context.$implicit.id, ":category");

          _ck(_v, 2, 0, currVal_2);
        }, function (_ck, _v) {
          var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 2).target;

          var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 2).href;

          _ck(_v, 1, 0, currVal_0, currVal_1);

          var currVal_3 = _v.parent.context.$implicit.label;

          _ck(_v, 3, 0, currVal_3);
        });
      }

      function View_CategoryComponent_5(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "tr", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_CategoryComponent_6)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null)], function (_ck, _v) {
          var currVal_0 = _v.context.$implicit.type_produit === "Outils";

          _ck(_v, 2, 0, currVal_0);
        }, null);
      }

      function View_CategoryComponent_0(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 45, "ul", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 14, "li", [["class", "andro_category-mm-item andro_category-mm-item-has-children"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 1, "a", [["style", "font-size: 15px;color: black;font-weight: 600;"], ["type", "button"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" Produit consommable "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, null, 11, "ul", [["class", "andro_category-mm-2-cols"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, null, 10, "li", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](6, 0, null, null, 6, "div", [["class", "andro_category-mm-banner"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](7, 0, null, null, 0, "img", [["alt", "megamenu img"], ["src", "assets/img/megamenu/1.jpeg"], ["style", "height: 200px;"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](8, 0, null, null, 4, "div", [["class", "andro_category-mm-banner-desc"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](9, 0, null, null, 1, "h6", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Produits consommable"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](11, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["L'ensemble de tous nos Produits consommable"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](13, 0, null, null, 2, "table", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_CategoryComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](15, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], {
          ngForOf: [0, "ngForOf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](16, 0, null, null, 14, "li", [["class", "andro_category-mm-item andro_category-mm-item-has-children"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](17, 0, null, null, 1, "a", [["style", "font-size: 15px;color: black;font-weight: 600;"], ["type", "button"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Intrant"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](19, 0, null, null, 11, "ul", [["class", "andro_category-mm-2-cols"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](20, 0, null, null, 10, "li", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](21, 0, null, null, 6, "div", [["class", "andro_category-mm-banner"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](22, 0, null, null, 0, "img", [["alt", "megamenu img"], ["src", "assets/img/megamenu/2.jpeg"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](23, 0, null, null, 4, "div", [["class", "andro_category-mm-banner-desc"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](24, 0, null, null, 1, "h6", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Intrant"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](26, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["L'ensemble de tous nos Intrants"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](28, 0, null, null, 2, "table", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_CategoryComponent_3)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](30, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], {
          ngForOf: [0, "ngForOf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](31, 0, null, null, 14, "li", [["class", "andro_category-mm-item andro_category-mm-item-has-children"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](32, 0, null, null, 1, "a", [["style", "font-size: 15px;color: black;font-weight: 600;"], ["type", "button"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Outils"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](34, 0, null, null, 11, "ul", [["class", "andro_category-mm-2-cols"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](35, 0, null, null, 10, "li", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](36, 0, null, null, 6, "div", [["class", "andro_category-mm-banner"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](37, 0, null, null, 0, "img", [["alt", "megamenu img"], ["src", "assets/img/megamenu/3.jpeg"], ["style", "height: 200px;color: black;font-weight: 600;"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](38, 0, null, null, 4, "div", [["class", "andro_category-mm-banner-desc"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](39, 0, null, null, 1, "h6", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Outils"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](41, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["L'ensemble de tous nos Outils"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](43, 0, null, null, 2, "table", [["style", "overflow: auto;"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_CategoryComponent_5)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](45, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], {
          ngForOf: [0, "ngForOf"]
        }, null)], function (_ck, _v) {
          var _co = _v.component;
          var currVal_0 = _co.categorie;

          _ck(_v, 15, 0, currVal_0);

          var currVal_1 = _co.categorie;

          _ck(_v, 30, 0, currVal_1);

          var currVal_2 = _co.categorie;

          _ck(_v, 45, 0, currVal_2);
        }, null);
      }

      function View_CategoryComponent_Host_0(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-category", [], null, null, null, View_CategoryComponent_0, RenderType_CategoryComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _category_component__WEBPACK_IMPORTED_MODULE_4__["CategoryComponent"], [_services_produits_produit_service__WEBPACK_IMPORTED_MODULE_5__["ProduitService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]], null, null)], function (_ck, _v) {
          _ck(_v, 1, 0);
        }, null);
      }

      var CategoryComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-category", _category_component__WEBPACK_IMPORTED_MODULE_4__["CategoryComponent"], View_CategoryComponent_Host_0, {}, {}, []);
      /***/

    },

    /***/
    "Ahbh":
    /*!*************************************************************************!*\
      !*** ./node_modules/ngx-slick-carousel/ngx-slick-carousel.ngfactory.js ***!
      \*************************************************************************/

    /*! exports provided: SlickCarouselModuleNgFactory, RenderType_SlickCarouselComponent, View_SlickCarouselComponent_0, View_SlickCarouselComponent_Host_0, SlickCarouselComponentNgFactory */

    /***/
    function Ahbh(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SlickCarouselModuleNgFactory", function () {
        return SlickCarouselModuleNgFactory;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RenderType_SlickCarouselComponent", function () {
        return RenderType_SlickCarouselComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "View_SlickCarouselComponent_0", function () {
        return View_SlickCarouselComponent_0;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "View_SlickCarouselComponent_Host_0", function () {
        return View_SlickCarouselComponent_Host_0;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SlickCarouselComponentNgFactory", function () {
        return SlickCarouselComponentNgFactory;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var ngx_slick_carousel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ngx-slick-carousel */
      "fyIi");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "SVse");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "s7LF");
      /**
       * @fileoverview This file was generated by the Angular template compiler. Do not edit.
       *
       * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
       * tslint:disable
       */


      var SlickCarouselModuleNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcmf"](ngx_slick_carousel__WEBPACK_IMPORTED_MODULE_1__["SlickCarouselModule"], [], function (_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmod"]([_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵCodegenComponentFactoryResolver"], [[8, []], [3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModuleRef"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgLocalization"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgLocaleLocalization"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, ngx_slick_carousel__WEBPACK_IMPORTED_MODULE_1__["SlickCarouselModule"], ngx_slick_carousel__WEBPACK_IMPORTED_MODULE_1__["SlickCarouselModule"], [])]);
      });

      var styles_SlickCarouselComponent = [];

      var RenderType_SlickCarouselComponent = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcrt"]({
        encapsulation: 2,
        styles: styles_SlickCarouselComponent,
        data: {}
      });

      function View_SlickCarouselComponent_0(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵncd"](null, 0)], null, null);
      }

      function View_SlickCarouselComponent_Host_0(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 2, "ngx-slick-carousel", [], null, null, null, View_SlickCarouselComponent_0, RenderType_SlickCarouselComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](5120, null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NG_VALUE_ACCESSOR"], function (p0_0) {
          return [p0_0];
        }, [ngx_slick_carousel__WEBPACK_IMPORTED_MODULE_1__["SlickCarouselComponent"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](2, 13287424, null, 0, ngx_slick_carousel__WEBPACK_IMPORTED_MODULE_1__["SlickCarouselComponent"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"]], null, null)], null, null);
      }

      var SlickCarouselComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵccf"]("ngx-slick-carousel", ngx_slick_carousel__WEBPACK_IMPORTED_MODULE_1__["SlickCarouselComponent"], View_SlickCarouselComponent_Host_0, {
        config: "config"
      }, {
        afterChange: "afterChange",
        beforeChange: "beforeChange",
        breakpoint: "breakpoint",
        destroy: "destroy",
        init: "init"
      }, ["*"]);
      /***/

    },

    /***/
    "G3Dg":
    /*!****************************************!*\
      !*** ./src/app/data/blogcategory.json ***!
      \****************************************/

    /*! exports provided: 0, 1, 2, default */

    /***/
    function G3Dg(module) {
      module.exports = JSON.parse("[{\"id\":1,\"title\":\"Produit consomable\",\"count\":32,\"children\":[]},{\"id\":2,\"title\":\"Intrant\",\"count\":24,\"children\":[]},{\"id\":3,\"title\":\"Outils\",\"count\":44,\"children\":[]}]");
      /***/
    },

    /***/
    "Jn6a":
    /*!********************************************************************!*\
      !*** ./src/app/components/pages/hometwo/hometwo-routing.module.ts ***!
      \********************************************************************/

    /*! exports provided: HometwoRoutingModule */

    /***/
    function Jn6a(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HometwoRoutingModule", function () {
        return HometwoRoutingModule;
      });
      /* harmony import */


      var _hometwo_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./hometwo.component */
      "eVxp");

      var routes = [{
        path: '',
        component: _hometwo_component__WEBPACK_IMPORTED_MODULE_0__["HometwoComponent"]
      }];

      var HometwoRoutingModule = /*#__PURE__*/_createClass(function HometwoRoutingModule() {
        _classCallCheck(this, HometwoRoutingModule);
      });
      /***/

    },

    /***/
    "KLMf":
    /*!************************************!*\
      !*** ./src/app/data/blogtags.json ***!
      \************************************/

    /*! exports provided: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, default */

    /***/
    function KLMf(module) {
      module.exports = JSON.parse("[{\"id\":1,\"title\":\"Food\"},{\"id\":2,\"title\":\"Breeding\"},{\"id\":3,\"title\":\"Health\"},{\"id\":4,\"title\":\"Ingredients\"},{\"id\":5,\"title\":\"Organic\"},{\"id\":6,\"title\":\"Farms\"},{\"id\":7,\"title\":\"Green\"},{\"id\":8,\"title\":\"Fiber\"},{\"id\":9,\"title\":\"Supplements\"},{\"id\":10,\"title\":\"Gain\"},{\"id\":11,\"title\":\"Live Stock\"},{\"id\":12,\"title\":\"Harvest\"}]");
      /***/
    },

    /***/
    "XEfl":
    /*!***********************************************************************************!*\
      !*** ./src/app/components/shared/category/category.component.css.shim.ngstyle.js ***!
      \***********************************************************************************/

    /*! exports provided: styles */

    /***/
    function XEfl(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "styles", function () {
        return styles;
      });
      /**
       * @fileoverview This file was generated by the Angular template compiler. Do not edit.
       *
       * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
       * tslint:disable
       */


      var styles = ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2hhcmVkL2NhdGVnb3J5L2NhdGVnb3J5LmNvbXBvbmVudC5jc3MifQ== */"];
      /***/
    },

    /***/
    "dQeu":
    /*!*********************************************************************************!*\
      !*** ./src/app/components/pages/hometwo/content/content.component.ngfactory.js ***!
      \*********************************************************************************/

    /*! exports provided: RenderType_ContentComponent, View_ContentComponent_0, View_ContentComponent_Host_0, ContentComponentNgFactory */

    /***/
    function dQeu(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RenderType_ContentComponent", function () {
        return RenderType_ContentComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "View_ContentComponent_0", function () {
        return View_ContentComponent_0;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "View_ContentComponent_Host_0", function () {
        return View_ContentComponent_Host_0;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ContentComponentNgFactory", function () {
        return ContentComponentNgFactory;
      });
      /* harmony import */


      var _content_component_css_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./content.component.css.shim.ngstyle */
      "4D1z");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var ngx_slick_carousel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ngx-slick-carousel */
      "fyIi");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "iInd");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      "SVse");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/forms */
      "s7LF");
      /* harmony import */


      var _shared_category_category_component_ngfactory__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../../shared/category/category.component.ngfactory */
      "5hEr");
      /* harmony import */


      var _shared_category_category_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../../shared/category/category.component */
      "/jb+");
      /* harmony import */


      var _services_produits_produit_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../../../../services/produits/produit.service */
      "d/cB");
      /* harmony import */


      var _node_modules_ngx_slick_carousel_ngx_slick_carousel_ngfactory__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../../../../../../node_modules/ngx-slick-carousel/ngx-slick-carousel.ngfactory */
      "Ahbh");
      /* harmony import */


      var _content_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./content.component */
      "miLA");
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      "G0yt");
      /* harmony import */


      var _services_paniers_panier_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ../../../../services/paniers/panier.service */
      "JvmC");
      /**
       * @fileoverview This file was generated by the Angular template compiler. Do not edit.
       *
       * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
       * tslint:disable
       */


      var styles_ContentComponent = [_content_component_css_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];

      var RenderType_ContentComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({
        encapsulation: 0,
        styles: styles_ContentComponent,
        data: {}
      });

      function View_ContentComponent_1(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "div", [["class", "banner-pop"], ["data-bnrid", "689"], ["data-end", "2022-11-08T23:59:00+00:00"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 1, "a", [["class", "-fw -fh"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 0, "img", [["alt", "pub"], ["class", "-fw -fh"], ["src", "/assets/img/test.gif"]], null, null, null, null, null))], null, null);
      }

      function View_ContentComponent_2(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 17, "div", [["class", "container-fluid"], ["ngxSlickItem", ""]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 212992, null, 0, ngx_slick_carousel__WEBPACK_IMPORTED_MODULE_2__["SlickItemDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"], ngx_slick_carousel__WEBPACK_IMPORTED_MODULE_2__["SlickCarouselComponent"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 15, "div", [["class", "row align-items-center"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 12, "div", [["class", "col-lg-6"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, null, 2, "p", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, null, 1, "strong", [["class", "custom-primary"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](6, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](7, 0, null, null, 3, "h1", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](8, null, [" ", " "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](9, 0, null, null, 1, "span", [["class", "fw-400"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](10, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](11, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](12, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](13, 0, null, null, 2, "a", [["class", "andro_btn-custom"]], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) {
          var ad = true;

          if ("click" === en) {
            var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 14).onClick($event.button, $event.ctrlKey, $event.shiftKey, $event.altKey, $event.metaKey) !== false;
            ad = pd_0 && ad;
          }

          return ad;
        }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](14, 671744, null, 0, _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["LocationStrategy"]], {
          routerLink: [0, "routerLink"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Voir plus"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](16, 0, null, null, 1, "div", [["class", "col-lg-6 d-none d-lg-block"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](17, 0, null, null, 0, "img", [], [[8, "src", 4], [8, "alt", 0]], null, null, null, null))], function (_ck, _v) {
          _ck(_v, 1, 0);

          var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵinlineInterpolate"](1, "/product-single-v2/", _v.context.$implicit.idproduit, "");

          _ck(_v, 14, 0, currVal_6);
        }, function (_ck, _v) {
          var currVal_0 = _v.context.$implicit.user;

          _ck(_v, 6, 0, currVal_0);

          var currVal_1 = _v.context.$implicit.title;

          _ck(_v, 8, 0, currVal_1);

          var currVal_2 = _v.context.$implicit.titlespan;

          _ck(_v, 10, 0, currVal_2);

          var currVal_3 = _v.context.$implicit.para;

          _ck(_v, 12, 0, currVal_3);

          var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 14).target;

          var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 14).href;

          _ck(_v, 13, 0, currVal_4, currVal_5);

          var currVal_7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵinlineInterpolate"](1, "", _v.context.$implicit.photo, "");

          var currVal_8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵinlineInterpolate"](1, "", _v.context.$implicit.title, "");

          _ck(_v, 17, 0, currVal_7, currVal_8);
        });
      }

      function View_ContentComponent_3(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "div", [["class", "banner-pops"], ["data-bnrid", "689"], ["data-end", "2022-11-08T23:59:00+00:00"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 1, "a", [["class", "-fw -fh"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 0, "img", [["alt", "PU | SBD TECNO"], ["class", "-fw -fh"], ["src", "/assets/img/gif_test.gif"]], null, null, null, null, null))], null, null);
      }

      function View_ContentComponent_5(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "span", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](1, null, ["$", ""])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](2, 2)], null, function (_ck, _v) {
          var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 1, 0, _ck(_v, 2, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent.parent, 0), _v.parent.context.$implicit.price * (100 - _v.parent.context.$implicit.discount) / 100, "1.2-2"));

          _ck(_v, 1, 0, currVal_0);
        });
      }

      function View_ContentComponent_6(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "span", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["/ Kg"]))], null, null);
      }

      function View_ContentComponent_4(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 28, "div", [["class", "andro_product andro_product-has-controls andro_product-has-buttons"], ["ngxSlickItem", ""], ["style", "width: 100px !important;"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 212992, null, 0, ngx_slick_carousel__WEBPACK_IMPORTED_MODULE_2__["SlickItemDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"], ngx_slick_carousel__WEBPACK_IMPORTED_MODULE_2__["SlickCarouselComponent"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 26, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 3, "div", [["class", "andro_product-thumb"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, null, 2, "a", [], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) {
          var ad = true;

          if ("click" === en) {
            var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 5).onClick($event.button, $event.ctrlKey, $event.shiftKey, $event.altKey, $event.metaKey) !== false;
            ad = pd_0 && ad;
          }

          return ad;
        }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](5, 671744, null, 0, _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["LocationStrategy"]], {
          routerLink: [0, "routerLink"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](6, 0, null, null, 0, "img", [["style", "height: 170px;"]], [[8, "src", 4], [8, "alt", 0]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](7, 0, null, null, 14, "div", [["class", "andro_product-body"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](8, 0, null, null, 3, "h5", [["class", "andro_product-title"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](9, 0, null, null, 2, "a", [], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) {
          var ad = true;

          if ("click" === en) {
            var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 10).onClick($event.button, $event.ctrlKey, $event.shiftKey, $event.altKey, $event.metaKey) !== false;
            ad = pd_0 && ad;
          }

          return ad;
        }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](10, 671744, null, 0, _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["LocationStrategy"]], {
          routerLink: [0, "routerLink"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](11, null, [" ", " "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](12, 0, null, null, 7, "div", [["class", "andro_product-price"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ContentComponent_5)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](14, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](15, 0, null, null, 4, "span", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](16, null, ["", " Fr "])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](17, 2), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ContentComponent_6)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](19, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](20, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](21, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](22, 0, null, null, 6, "div", [["class", "andro_product-footer"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](23, 0, null, null, 5, "div", [["class", "andro_product-buttons"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](24, 0, null, null, 1, "a", [["class", "andro_btn-custom primary"], ["href", "javascript:void(0)"]], null, [[null, "click"]], function (_v, en, $event) {
          var ad = true;
          var _co = _v.component;

          if ("click" === en) {
            var pd_0 = _co.open(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent, 84), _v.context.$implicit) !== false;
            ad = pd_0 && ad;
          }

          return ad;
        }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Acheter"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](26, 0, null, null, 2, "a", [["class", "andro_btn-custom light"]], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) {
          var ad = true;

          if ("click" === en) {
            var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 27).onClick($event.button, $event.ctrlKey, $event.shiftKey, $event.altKey, $event.metaKey) !== false;
            ad = pd_0 && ad;
          }

          return ad;
        }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](27, 671744, null, 0, _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["LocationStrategy"]], {
          routerLink: [0, "routerLink"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Voir plus"]))], function (_ck, _v) {
          _ck(_v, 1, 0);

          var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵinlineInterpolate"](1, "/product-single-v2/", _v.context.$implicit.id, "");

          _ck(_v, 5, 0, currVal_2);

          var currVal_7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵinlineInterpolate"](1, "/product-single/", _v.context.$implicit.id, "");

          _ck(_v, 10, 0, currVal_7);

          var currVal_9 = _v.context.$implicit.discount;

          _ck(_v, 14, 0, currVal_9);

          var currVal_11 = _v.context.$implicit.typeVente === "Produit consommable" && _v.context.$implicit.categorie !== "animal";

          _ck(_v, 19, 0, currVal_11);

          var currVal_15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵinlineInterpolate"](1, "/product-single-v2/", _v.context.$implicit.id, "");

          _ck(_v, 27, 0, currVal_15);
        }, function (_ck, _v) {
          var _co = _v.component;

          var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 5).target;

          var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 5).href;

          _ck(_v, 4, 0, currVal_0, currVal_1);

          var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵinlineInterpolate"](2, "", _co.imagurl, "/", _v.context.$implicit.urlImageVente, "");

          var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵinlineInterpolate"](1, "", _v.context.$implicit.urlImageVente, "");

          _ck(_v, 6, 0, currVal_3, currVal_4);

          var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 10).target;

          var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 10).href;

          _ck(_v, 9, 0, currVal_5, currVal_6);

          var currVal_8 = _v.context.$implicit.description;

          _ck(_v, 11, 0, currVal_8);

          var currVal_10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 16, 0, _ck(_v, 17, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent, 0), _v.context.$implicit.prix, "1.0-0"));

          _ck(_v, 16, 0, currVal_10);

          var currVal_12 = _v.context.$implicit.shortdesc;

          _ck(_v, 21, 0, currVal_12);

          var currVal_13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 27).target;

          var currVal_14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 27).href;

          _ck(_v, 26, 0, currVal_13, currVal_14);
        });
      }

      function View_ContentComponent_7(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 22, "div", [["class", "col-sm-6"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 21, "div", [["class", "andro_product andro_product-minimal andro_product-has-controls andro_product-has-buttons"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 3, "div", [["class", "andro_product-thumb"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 2, "a", [], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) {
          var ad = true;

          if ("click" === en) {
            var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 4).onClick($event.button, $event.ctrlKey, $event.shiftKey, $event.altKey, $event.metaKey) !== false;
            ad = pd_0 && ad;
          }

          return ad;
        }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](4, 671744, null, 0, _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["LocationStrategy"]], {
          routerLink: [0, "routerLink"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, null, 0, "img", [["style", "height: 170px;"]], [[8, "src", 4], [8, "alt", 0]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](6, 0, null, null, 4, "div", [["class", "andro_product-body"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](7, 0, null, null, 3, "h6", [["class", "andro_product-title"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](8, 0, null, null, 2, "a", [], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) {
          var ad = true;

          if ("click" === en) {
            var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 9).onClick($event.button, $event.ctrlKey, $event.shiftKey, $event.altKey, $event.metaKey) !== false;
            ad = pd_0 && ad;
          }

          return ad;
        }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](9, 671744, null, 0, _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["LocationStrategy"]], {
          routerLink: [0, "routerLink"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](10, null, [" ", " "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](11, 0, null, null, 11, "div", [["class", "andro_product-footer"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](12, 0, null, null, 3, "div", [["class", "andro_product-price"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](13, 0, null, null, 2, "span", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](14, null, ["", " Fr"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](15, 2), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](16, 0, null, null, 6, "div", [["class", "andro_product-buttons"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](17, 0, null, null, 5, "div", [["class", "andro_product-buttons"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](18, 0, null, null, 1, "a", [["class", "andro_btn-custom primary"], ["href", "javascript:void(0)"]], null, [[null, "click"]], function (_v, en, $event) {
          var ad = true;
          var _co = _v.component;

          if ("click" === en) {
            var pd_0 = _co.open(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent, 84), _v.context.$implicit) !== false;
            ad = pd_0 && ad;
          }

          return ad;
        }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Acheter"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](20, 0, null, null, 2, "a", [["class", "andro_btn-custom light"]], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) {
          var ad = true;

          if ("click" === en) {
            var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 21).onClick($event.button, $event.ctrlKey, $event.shiftKey, $event.altKey, $event.metaKey) !== false;
            ad = pd_0 && ad;
          }

          return ad;
        }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](21, 671744, null, 0, _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["LocationStrategy"]], {
          routerLink: [0, "routerLink"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Voir plus"]))], function (_ck, _v) {
          var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵinlineInterpolate"](1, "/product-single-v2/", _v.context.$implicit.id, "");

          _ck(_v, 4, 0, currVal_2);

          var currVal_7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵinlineInterpolate"](1, "/product-single/", _v.context.$implicit.id, "");

          _ck(_v, 9, 0, currVal_7);

          var currVal_12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵinlineInterpolate"](1, "/product-single-v2/", _v.context.$implicit.id, "");

          _ck(_v, 21, 0, currVal_12);
        }, function (_ck, _v) {
          var _co = _v.component;

          var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 4).target;

          var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 4).href;

          _ck(_v, 3, 0, currVal_0, currVal_1);

          var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵinlineInterpolate"](2, "", _co.imagurl, "/", _v.context.$implicit.urlImageVente, "");

          var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵinlineInterpolate"](1, "", _v.context.$implicit.description, "");

          _ck(_v, 5, 0, currVal_3, currVal_4);

          var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 9).target;

          var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 9).href;

          _ck(_v, 8, 0, currVal_5, currVal_6);

          var currVal_8 = _v.context.$implicit.description;

          _ck(_v, 10, 0, currVal_8);

          var currVal_9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 14, 0, _ck(_v, 15, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent, 0), _v.context.$implicit.prix, "1.0-0"));

          _ck(_v, 14, 0, currVal_9);

          var currVal_10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 21).target;

          var currVal_11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 21).href;

          _ck(_v, 20, 0, currVal_10, currVal_11);
        });
      }

      function View_ContentComponent_9(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 3, "div", [["class", "andro_product-badge andro_badge-featured"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 0, "i", [["class", "fa fa-star"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 1, "span", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Featured"]))], null, null);
      }

      function View_ContentComponent_10(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "div", [["class", "andro_product-badge andro_badge-sale"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](1, null, [" ", "% Off "]))], null, function (_ck, _v) {
          var _co = _v.component;
          var currVal_0 = _co.modalContent.title;

          _ck(_v, 1, 0, currVal_0);
        });
      }

      function View_ContentComponent_11(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "span", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](1, null, ["$", ""])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](2, 2)], null, function (_ck, _v) {
          var _co = _v.component;

          var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 1, 0, _ck(_v, 2, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent.parent, 0), _co.modalContent.prix * (100 - _co.modalContent.discount) / 100, "1.2-2"));

          _ck(_v, 1, 0, currVal_0);
        });
      }

      function View_ContentComponent_12(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "span", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["/ Kg"]))], null, null);
      }

      function View_ContentComponent_13(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "span", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" Kilo (s) "]))], null, null);
      }

      function View_ContentComponent_14(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 3, "div", [["class", "form-control"], ["name", "amount"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 2, "a", [["value", ""]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](2, null, ["Montant total : ", " Fr"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](3, 2)], null, function (_ck, _v) {
          var _co = _v.component;

          var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 2, 0, _ck(_v, 3, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent.parent, 0), _co.modalContent.prix, "1.2-2"));

          _ck(_v, 2, 0, currVal_0);
        });
      }

      function View_ContentComponent_15(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 3, "div", [["class", "form-control"], ["name", "amount"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 2, "a", [["value", ""]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](2, null, ["Montant total : ", " Fr"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](3, 2)], null, function (_ck, _v) {
          var _co = _v.component;

          var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 2, 0, _ck(_v, 3, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent.parent, 0), _co.montantcommande, "1.2-2"));

          _ck(_v, 2, 0, currVal_0);
        });
      }

      function View_ContentComponent_8(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 58, "div", [["class", "modal-body"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 2, "div", [["class", "close-btn close-dark close"]], null, [[null, "click"]], function (_v, en, $event) {
          var ad = true;

          if ("click" === en) {
            var pd_0 = _v.context.$implicit.dismiss("Cross click") !== false;
            ad = pd_0 && ad;
          }

          return ad;
        }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 0, "span", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 0, "span", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, null, 54, "div", [["class", "container-fluid"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, null, 53, "div", [["class", "row"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](6, 0, null, null, 6, "div", [["class", "col-md-5"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](7, 0, null, null, 5, "div", [["class", "andro_product"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ContentComponent_9)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](9, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ContentComponent_10)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](11, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](12, 0, null, null, 0, "img", [], [[8, "src", 4], [8, "alt", 0]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](13, 0, null, null, 45, "div", [["class", "col-md-7"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](14, 0, null, null, 44, "div", [["class", "andro_product-single-content"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](15, 0, null, null, 1, "h3", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](16, null, [" ", " "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](17, 0, null, null, 7, "div", [["class", "andro_product-price"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ContentComponent_11)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](19, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](20, 0, null, null, 4, "span", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](21, null, ["", " Fr "])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](22, 2), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ContentComponent_12)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](24, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](25, 0, null, null, 1, "p", [["class", "andro_product-excerpt"], ["style", "font-size: 30px !important;"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](26, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](27, 0, null, null, 31, "form", [["class", "andro_product-atc-form"], ["novalidate", ""]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "submit"], [null, "reset"]], function (_v, en, $event) {
          var ad = true;
          var _co = _v.component;

          if ("submit" === en) {
            var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 29).onSubmit($event) !== false;
            ad = pd_0 && ad;
          }

          if ("reset" === en) {
            var pd_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 29).onReset() !== false;
            ad = pd_1 && ad;
          }

          if ("submit" === en) {
            var pd_2 = _co.addtopanier(_co.modalContent.quantite, _co.modalContent.description, _co.modalContent.id, _co.modalContent.urlImageVente, _co.modalContent.prix, _co.modalContent.idUser, _co.modalContent.typeVente, _co.modalContent.categorie) !== false;
            ad = pd_2 && ad;
          }

          return ad;
        }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](28, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_y"], [], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](29, 4210688, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgForm"], [[8, null], [8, null]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ControlContainer"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgForm"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](31, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatusGroup"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ControlContainer"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](32, 0, null, null, 12, "div", [["class", "andro_product-variation-wrapper"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](33, 0, null, null, 6, "div", [["class", "form-group"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](34, 0, null, null, 5, "div", [["class", "form-control"], ["name", "amount"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](35, 0, null, null, 4, "a", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](36, null, ["", " "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ContentComponent_13)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](38, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" disponible (s)"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](40, 0, null, null, 4, "div", [["class", "form-group"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ContentComponent_14)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](42, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ContentComponent_15)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](44, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](45, 0, null, null, 13, "div", [["class", "qty-outter"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](46, 0, null, null, 1, "button", [["class", "andro_btn-custom"], ["type", "submit"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Ajouter au panier"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](48, 0, null, null, 10, "div", [["class", "qty"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](49, 0, null, null, 1, "span", [["class", "qty-subtract"]], null, [[null, "click"]], function (_v, en, $event) {
          var ad = true;
          var _co = _v.component;

          if ("click" === en) {
            var pd_0 = _co.decrement(_co.modalContent.quantite, _co.modalContent.prix) !== false;
            ad = pd_0 && ad;
          }

          return ad;
        }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](50, 0, null, null, 0, "i", [["class", "fa fa-minus"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](51, 0, null, null, 5, "input", [["id", "counter"], ["name", "counter"], ["type", "text"]], [[8, "value", 0], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"], [null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"]], function (_v, en, $event) {
          var ad = true;
          var _co = _v.component;

          if ("input" === en) {
            var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 52)._handleInput($event.target.value) !== false;
            ad = pd_0 && ad;
          }

          if ("blur" === en) {
            var pd_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 52).onTouched() !== false;
            ad = pd_1 && ad;
          }

          if ("compositionstart" === en) {
            var pd_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 52)._compositionStart() !== false;
            ad = pd_2 && ad;
          }

          if ("compositionend" === en) {
            var pd_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 52)._compositionEnd($event.target.value) !== false;
            ad = pd_3 && ad;
          }

          if ("ngModelChange" === en) {
            var pd_4 = (_co.counter = $event) !== false;
            ad = pd_4 && ad;
          }

          return ad;
        }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](52, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["COMPOSITION_BUFFER_MODE"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NG_VALUE_ACCESSOR"], function (p0_0) {
          return [p0_0];
        }, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](54, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"], [[2, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ControlContainer"]], [8, null], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NG_VALUE_ACCESSOR"]]], {
          name: [0, "name"],
          model: [1, "model"]
        }, {
          update: "ngModelChange"
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](56, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControl"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](57, 0, null, null, 1, "span", [["class", "qty-add"]], null, [[null, "click"]], function (_v, en, $event) {
          var ad = true;
          var _co = _v.component;

          if ("click" === en) {
            var pd_0 = _co.increment(_co.modalContent.quantite, _co.modalContent.prix) !== false;
            ad = pd_0 && ad;
          }

          return ad;
        }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](58, 0, null, null, 0, "i", [["class", "fa fa-plus"]], null, null, null, null, null))], function (_ck, _v) {
          var _co = _v.component;
          var currVal_0 = _co.modalContent.featured;

          _ck(_v, 9, 0, currVal_0);

          var currVal_1 = _co.modalContent.discount;

          _ck(_v, 11, 0, currVal_1);

          var currVal_5 = _co.modalContent.discount;

          _ck(_v, 19, 0, currVal_5);

          var currVal_7 = _co.modalContent.typeVente === "Produit consommable" && _co.modalContent.categorie !== "animal";

          _ck(_v, 24, 0, currVal_7);

          var currVal_17 = _co.modalContent.typeVente == "Produit consommable" && _co.modalContent.categorie !== "animal";

          _ck(_v, 38, 0, currVal_17);

          var currVal_18 = _co.montantcommande === 1;

          _ck(_v, 42, 0, currVal_18);

          var currVal_19 = _co.montantcommande > 1;

          _ck(_v, 44, 0, currVal_19);

          var currVal_28 = "counter";
          var currVal_29 = _co.counter;

          _ck(_v, 54, 0, currVal_28, currVal_29);
        }, function (_ck, _v) {
          var _co = _v.component;

          var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵinlineInterpolate"](2, "", _co.imagurl, "/", _co.modalContent.urlImageVente, "");

          var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵinlineInterpolate"](1, "", _co.modalContent.title, "");

          _ck(_v, 12, 0, currVal_2, currVal_3);

          var currVal_4 = _co.modalContent.title;

          _ck(_v, 16, 0, currVal_4);

          var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 21, 0, _ck(_v, 22, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent, 0), _co.modalContent.prix, "1.2-2"));

          _ck(_v, 21, 0, currVal_6);

          var currVal_8 = _co.modalContent.description;

          _ck(_v, 26, 0, currVal_8);

          var currVal_9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 31).ngClassUntouched;

          var currVal_10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 31).ngClassTouched;

          var currVal_11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 31).ngClassPristine;

          var currVal_12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 31).ngClassDirty;

          var currVal_13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 31).ngClassValid;

          var currVal_14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 31).ngClassInvalid;

          var currVal_15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 31).ngClassPending;

          _ck(_v, 27, 0, currVal_9, currVal_10, currVal_11, currVal_12, currVal_13, currVal_14, currVal_15);

          var currVal_16 = _co.modalContent.quantite;

          _ck(_v, 36, 0, currVal_16);

          var currVal_20 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵinlineInterpolate"](1, "", _co.counter, "");

          var currVal_21 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 56).ngClassUntouched;

          var currVal_22 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 56).ngClassTouched;

          var currVal_23 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 56).ngClassPristine;

          var currVal_24 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 56).ngClassDirty;

          var currVal_25 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 56).ngClassValid;

          var currVal_26 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 56).ngClassInvalid;

          var currVal_27 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 56).ngClassPending;

          _ck(_v, 51, 0, currVal_20, currVal_21, currVal_22, currVal_23, currVal_24, currVal_25, currVal_26, currVal_27);
        });
      }

      function View_ContentComponent_0(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["DecimalPipe"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["LOCALE_ID"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 36, "div", [["class", "section"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ContentComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, null, 31, "div", [["class", "container"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, null, 30, "div", [["class", "row"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](6, 0, null, null, 8, "div", [["class", "col-lg-3"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](7, 0, null, null, 7, "div", [["class", "andro_category-mm"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](8, 0, null, null, 3, "div", [["class", "andro_category-mm-header"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](9, 0, null, null, 2, "h6", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](10, 0, null, null, 0, "i", [["class", "fas fa-th-large"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Categories"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](12, 0, null, null, 2, "div", [["class", "andro_category-mm-body"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](13, 0, null, null, 1, "app-category", [], null, null, null, _shared_category_category_component_ngfactory__WEBPACK_IMPORTED_MODULE_6__["View_CategoryComponent_0"], _shared_category_category_component_ngfactory__WEBPACK_IMPORTED_MODULE_6__["RenderType_CategoryComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](14, 114688, null, 0, _shared_category_category_component__WEBPACK_IMPORTED_MODULE_7__["CategoryComponent"], [_services_produits_produit_service__WEBPACK_IMPORTED_MODULE_8__["ProduitService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](15, 0, null, null, 20, "div", [["class", "col-lg-9"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](16, 0, null, null, 13, "div", [["class", "andro_flex-menu d-none d-md-block"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](17, 0, null, null, 12, "ul", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](18, 0, null, null, 3, "li", [["class", "menu-item wiggle"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](19, 0, null, null, 2, "a", [["routerLink", "/produit-recent/recent"], ["style", "font-size:17px;font-weight: 700;"]], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) {
          var ad = true;

          if ("click" === en) {
            var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 20).onClick($event.button, $event.ctrlKey, $event.shiftKey, $event.altKey, $event.metaKey) !== false;
            ad = pd_0 && ad;
          }

          return ad;
        }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](20, 671744, null, 0, _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["LocationStrategy"]], {
          routerLink: [0, "routerLink"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" Nouveaut\xE9s "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](22, 0, null, null, 3, "li", [["class", "menu-item menu-item-has-children"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](23, 0, null, null, 2, "a", [["routerLink", "/shop-v3/all"], ["style", "font-size:17px;font-weight: 700;"]], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) {
          var ad = true;

          if ("click" === en) {
            var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 24).onClick($event.button, $event.ctrlKey, $event.shiftKey, $event.altKey, $event.metaKey) !== false;
            ad = pd_0 && ad;
          }

          return ad;
        }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](24, 671744, null, 0, _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["LocationStrategy"]], {
          routerLink: [0, "routerLink"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Plus de produits"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](26, 0, null, null, 3, "li", [["class", "menu-item"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](27, 0, null, null, 2, "a", [["routerLink", "/shop-v3/pluscommander"], ["style", "font-size:17px;font-weight: 700;"]], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) {
          var ad = true;

          if ("click" === en) {
            var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 28).onClick($event.button, $event.ctrlKey, $event.shiftKey, $event.altKey, $event.metaKey) !== false;
            ad = pd_0 && ad;
          }

          return ad;
        }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](28, 671744, null, 0, _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["LocationStrategy"]], {
          routerLink: [0, "routerLink"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Les plus command\xE9s"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](30, 0, null, null, 5, "div", [["class", "andro_banner banner-1"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](31, 0, null, null, 4, "ngx-slick-carousel", [["class", "andro_banner-slider"]], null, null, null, _node_modules_ngx_slick_carousel_ngx_slick_carousel_ngfactory__WEBPACK_IMPORTED_MODULE_9__["View_SlickCarouselComponent_0"], _node_modules_ngx_slick_carousel_ngx_slick_carousel_ngfactory__WEBPACK_IMPORTED_MODULE_9__["RenderType_SlickCarouselComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](5120, null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NG_VALUE_ACCESSOR"], function (p0_0) {
          return [p0_0];
        }, [ngx_slick_carousel__WEBPACK_IMPORTED_MODULE_2__["SlickCarouselComponent"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](33, 13287424, [["slickModal", 4]], 0, ngx_slick_carousel__WEBPACK_IMPORTED_MODULE_2__["SlickCarouselComponent"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"]], {
          config: [0, "config"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, 0, 1, null, View_ContentComponent_2)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](35, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], {
          ngForOf: [0, "ngForOf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ContentComponent_3)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](37, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](38, 0, null, null, 12, "div", [["class", "section pt-0 andro_fresh-arrivals"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](39, 0, null, null, 11, "div", [["class", "container"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](40, 0, null, null, 5, "div", [["class", "section-title flex-title"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](41, 0, null, null, 1, "h4", [["class", "title"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Nouveaut\xE9s"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](43, 0, null, null, 2, "div", [["class", "andro_arrows"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](44, 0, null, null, 0, "i", [["class", "fa fa-arrow-left slick-arrow slider-prev"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](45, 0, null, null, 0, "i", [["class", "fa fa-arrow-right slick-arrow slider-next"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](46, 0, null, null, 4, "ngx-slick-carousel", [["class", "andro_fresh-arrivals-slider"]], null, null, null, _node_modules_ngx_slick_carousel_ngx_slick_carousel_ngfactory__WEBPACK_IMPORTED_MODULE_9__["View_SlickCarouselComponent_0"], _node_modules_ngx_slick_carousel_ngx_slick_carousel_ngfactory__WEBPACK_IMPORTED_MODULE_9__["RenderType_SlickCarouselComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](5120, null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NG_VALUE_ACCESSOR"], function (p0_0) {
          return [p0_0];
        }, [ngx_slick_carousel__WEBPACK_IMPORTED_MODULE_2__["SlickCarouselComponent"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](48, 13287424, [["slickModal", 4]], 0, ngx_slick_carousel__WEBPACK_IMPORTED_MODULE_2__["SlickCarouselComponent"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"]], {
          config: [0, "config"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, 0, 1, null, View_ContentComponent_4)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](50, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], {
          ngForOf: [0, "ngForOf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](51, 0, null, null, 32, "div", [["class", "section section-padding pt-0"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](52, 0, null, null, 31, "div", [["class", "container"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](53, 0, null, null, 30, "div", [["class", "row"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](54, 0, null, null, 7, "div", [["class", "col-lg-8"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](55, 0, null, null, 2, "div", [["class", "section-title"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](56, 0, null, null, 1, "h4", [["class", "title"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Nos produits"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](58, 0, null, null, 3, "div", [["class", "row"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 2, null, View_ContentComponent_7)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](60, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], {
          ngForOf: [0, "ngForOf"]
        }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["SlicePipe"], []), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](62, 0, null, null, 21, "div", [["class", "col-lg-4"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](63, 0, null, null, 20, "div", [["class", "sidebar"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](64, 0, null, null, 19, "div", [["class", "sidebar-widget"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](65, 0, null, null, 2, "div", [["class", "section-title"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](66, 0, null, null, 1, "h4", [["class", "title"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Categories"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](68, 0, null, null, 15, "ul", [["class", "sidebar-widget-list"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](69, 0, null, null, 4, "li", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](70, 0, null, null, 3, "a", [["href", "#"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" Produit consomable "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](72, 0, null, null, 1, "span", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](73, null, ["(", ")"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](74, 0, null, null, 4, "li", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](75, 0, null, null, 3, "a", [["href", "#"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" Intrant"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](77, 0, null, null, 1, "span", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](78, null, ["(", ")"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](79, 0, null, null, 4, "li", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](80, 0, null, null, 3, "a", [["href", "#"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" Outils "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](82, 0, null, null, 1, "span", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](83, null, ["(", ")"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](0, [["shopmodal", 2]], null, 0, null, View_ContentComponent_8))], function (_ck, _v) {
          var _co = _v.component;
          var currVal_0 = _co.view;

          _ck(_v, 3, 0, currVal_0);

          _ck(_v, 14, 0);

          var currVal_3 = "/produit-recent/recent";

          _ck(_v, 20, 0, currVal_3);

          var currVal_6 = "/shop-v3/all";

          _ck(_v, 24, 0, currVal_6);

          var currVal_9 = "/shop-v3/pluscommander";

          _ck(_v, 28, 0, currVal_9);

          var currVal_10 = _co.bannerConfig;

          _ck(_v, 33, 0, currVal_10);

          var currVal_11 = _co.bannerslider;

          _ck(_v, 35, 0, currVal_11);

          var currVal_12 = _co.view;

          _ck(_v, 37, 0, currVal_12);

          var currVal_13 = _co.fresharrConfig;

          _ck(_v, 48, 0, currVal_13);

          var currVal_14 = _co.produitrecent;

          _ck(_v, 50, 0, currVal_14);

          var currVal_15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 60, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 61).transform(_co.allproductionconso, 0, 6));

          _ck(_v, 60, 0, currVal_15);
        }, function (_ck, _v) {
          var _co = _v.component;

          var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 20).target;

          var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 20).href;

          _ck(_v, 19, 0, currVal_1, currVal_2);

          var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 24).target;

          var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 24).href;

          _ck(_v, 23, 0, currVal_4, currVal_5);

          var currVal_7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 28).target;

          var currVal_8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 28).href;

          _ck(_v, 27, 0, currVal_7, currVal_8);

          var currVal_16 = _co.produitconsommable;

          _ck(_v, 73, 0, currVal_16);

          var currVal_17 = _co.intrants;

          _ck(_v, 78, 0, currVal_17);

          var currVal_18 = _co.outils;

          _ck(_v, 83, 0, currVal_18);
        });
      }

      function View_ContentComponent_Host_0(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-content", [], null, null, null, View_ContentComponent_0, RenderType_ContentComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _content_component__WEBPACK_IMPORTED_MODULE_10__["ContentComponent"], [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__["NgbModal"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _services_produits_produit_service__WEBPACK_IMPORTED_MODULE_8__["ProduitService"], _services_paniers_panier_service__WEBPACK_IMPORTED_MODULE_12__["PanierService"]], null, null)], function (_ck, _v) {
          _ck(_v, 1, 0);
        }, null);
      }

      var ContentComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-content", _content_component__WEBPACK_IMPORTED_MODULE_10__["ContentComponent"], View_ContentComponent_Host_0, {}, {}, []);
      /***/

    },

    /***/
    "eKHA":
    /*!*************************************************************************!*\
      !*** ./src/app/components/pages/hometwo/hometwo.component.ngfactory.js ***!
      \*************************************************************************/

    /*! exports provided: RenderType_HometwoComponent, View_HometwoComponent_0, View_HometwoComponent_Host_0, HometwoComponentNgFactory */

    /***/
    function eKHA(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RenderType_HometwoComponent", function () {
        return RenderType_HometwoComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "View_HometwoComponent_0", function () {
        return View_HometwoComponent_0;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "View_HometwoComponent_Host_0", function () {
        return View_HometwoComponent_Host_0;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HometwoComponentNgFactory", function () {
        return HometwoComponentNgFactory;
      });
      /* harmony import */


      var _hometwo_component_css_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./hometwo.component.css.shim.ngstyle */
      "28nw");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _shared_headertwo_headertwo_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../shared/headertwo/headertwo.component.ngfactory */
      "DXox");
      /* harmony import */


      var _shared_headertwo_headertwo_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../shared/headertwo/headertwo.component */
      "vqSU");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      "SVse");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      "iInd");
      /* harmony import */


      var _services_users_user_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../../services/users/user.service */
      "5xR+");
      /* harmony import */


      var _services_paniers_panier_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../../services/paniers/panier.service */
      "JvmC");
      /* harmony import */


      var _services_produits_produit_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../../../services/produits/produit.service */
      "d/cB");
      /* harmony import */


      var _content_content_component_ngfactory__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./content/content.component.ngfactory */
      "dQeu");
      /* harmony import */


      var _content_content_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./content/content.component */
      "miLA");
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      "G0yt");
      /* harmony import */


      var _shared_footer_footer_component_ngfactory__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ../../shared/footer/footer.component.ngfactory */
      "R8T8");
      /* harmony import */


      var _shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ../../shared/footer/footer.component */
      "FezY");
      /* harmony import */


      var _hometwo_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ./hometwo.component */
      "eVxp");
      /**
       * @fileoverview This file was generated by the Angular template compiler. Do not edit.
       *
       * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
       * tslint:disable
       */


      var styles_HometwoComponent = [_hometwo_component_css_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];

      var RenderType_HometwoComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({
        encapsulation: 0,
        styles: styles_HometwoComponent,
        data: {}
      });

      function View_HometwoComponent_0(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-headertwo", [], null, [["window", "scroll"]], function (_v, en, $event) {
          var ad = true;

          if ("window:scroll" === en) {
            var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).onWindowScroll($event) !== false;
            ad = pd_0 && ad;
          }

          return ad;
        }, _shared_headertwo_headertwo_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_HeadertwoComponent_0"], _shared_headertwo_headertwo_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_HeadertwoComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _shared_headertwo_headertwo_component__WEBPACK_IMPORTED_MODULE_3__["HeadertwoComponent"], [_angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], _services_users_user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"], _services_paniers_panier_service__WEBPACK_IMPORTED_MODULE_7__["PanierService"], _services_produits_produit_service__WEBPACK_IMPORTED_MODULE_8__["ProduitService"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 1, "app-content", [], null, null, null, _content_content_component_ngfactory__WEBPACK_IMPORTED_MODULE_9__["View_ContentComponent_0"], _content_content_component_ngfactory__WEBPACK_IMPORTED_MODULE_9__["RenderType_ContentComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 114688, null, 0, _content_content_component__WEBPACK_IMPORTED_MODULE_10__["ContentComponent"], [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__["NgbModal"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], _services_produits_produit_service__WEBPACK_IMPORTED_MODULE_8__["ProduitService"], _services_paniers_panier_service__WEBPACK_IMPORTED_MODULE_7__["PanierService"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, null, 1, "app-footer", [], null, [["window", "scroll"]], function (_v, en, $event) {
          var ad = true;

          if ("window:scroll" === en) {
            var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 5).checkScroll() !== false;
            ad = pd_0 && ad;
          }

          return ad;
        }, _shared_footer_footer_component_ngfactory__WEBPACK_IMPORTED_MODULE_12__["View_FooterComponent_0"], _shared_footer_footer_component_ngfactory__WEBPACK_IMPORTED_MODULE_12__["RenderType_FooterComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](5, 114688, null, 0, _shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_13__["FooterComponent"], [], {
          layout: [0, "layout"],
          logo: [1, "logo"]
        }, null)], function (_ck, _v) {
          var _co = _v.component;

          _ck(_v, 1, 0);

          _ck(_v, 3, 0);

          var currVal_0 = _co.classname;
          var currVal_1 = _co.ftlogo;

          _ck(_v, 5, 0, currVal_0, currVal_1);
        }, null);
      }

      function View_HometwoComponent_Host_0(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-hometwo", [], null, null, null, View_HometwoComponent_0, RenderType_HometwoComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _hometwo_component__WEBPACK_IMPORTED_MODULE_14__["HometwoComponent"], [], null, null)], function (_ck, _v) {
          _ck(_v, 1, 0);
        }, null);
      }

      var HometwoComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-hometwo", _hometwo_component__WEBPACK_IMPORTED_MODULE_14__["HometwoComponent"], View_HometwoComponent_Host_0, {}, {}, []);
      /***/

    },

    /***/
    "eVxp":
    /*!***************************************************************!*\
      !*** ./src/app/components/pages/hometwo/hometwo.component.ts ***!
      \***************************************************************/

    /*! exports provided: HometwoComponent */

    /***/
    function eVxp(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HometwoComponent", function () {
        return HometwoComponent;
      });

      var HometwoComponent = /*#__PURE__*/function () {
        function HometwoComponent() {
          _classCallCheck(this, HometwoComponent);

          // Instagram
          this.instaclassname = "secondary-bg"; // Footer style

          this.classname = "";
          this.ftlogo = "assets/img/logo.png";
        }

        _createClass(HometwoComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return HometwoComponent;
      }();
      /***/

    },

    /***/
    "miLA":
    /*!***********************************************************************!*\
      !*** ./src/app/components/pages/hometwo/content/content.component.ts ***!
      \***********************************************************************/

    /*! exports provided: ContentComponent */

    /***/
    function miLA(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ContentComponent", function () {
        return ContentComponent;
      });
      /* harmony import */


      var _data_shop_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../../../data/shop.json */
      "adAz");

      var _data_shop_json__WEBPACK_IMPORTED_MODULE_0___namespace = /*#__PURE__*/__webpack_require__.t(
      /*! ../../../../data/shop.json */
      "adAz", 1);
      /* harmony import */


      var _data_category_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../../data/category.json */
      "2hAT");

      var _data_category_json__WEBPACK_IMPORTED_MODULE_1___namespace = /*#__PURE__*/__webpack_require__.t(
      /*! ../../../../data/category.json */
      "2hAT", 1);
      /* harmony import */


      var _data_blogcategory_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../../data/blogcategory.json */
      "G3Dg");

      var _data_blogcategory_json__WEBPACK_IMPORTED_MODULE_2___namespace = /*#__PURE__*/__webpack_require__.t(
      /*! ../../../../data/blogcategory.json */
      "G3Dg", 1);
      /* harmony import */


      var _data_blog_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../../../data/blog.json */
      "jYud");

      var _data_blog_json__WEBPACK_IMPORTED_MODULE_3___namespace = /*#__PURE__*/__webpack_require__.t(
      /*! ../../../../data/blog.json */
      "jYud", 1);
      /* harmony import */


      var _data_blogtags_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../../../data/blogtags.json */
      "KLMf");

      var _data_blogtags_json__WEBPACK_IMPORTED_MODULE_4___namespace = /*#__PURE__*/__webpack_require__.t(
      /*! ../../../../data/blogtags.json */
      "KLMf", 1);
      /* harmony import */


      var _data_testimonial_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../../../data/testimonial.json */
      "2Tmz");

      var _data_testimonial_json__WEBPACK_IMPORTED_MODULE_5___namespace = /*#__PURE__*/__webpack_require__.t(
      /*! ../../../../data/testimonial.json */
      "2Tmz", 1);
      /* harmony import */


      var sweetalert2__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! sweetalert2 */
      "PSD3");
      /* harmony import */


      var sweetalert2__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_6__);
      /* harmony import */


      var _common_global_constants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../../../common/global-constants */
      "jxL5");

      var ContentComponent = /*#__PURE__*/function () {
        function ContentComponent(modalService, router, produitService, panierService) {
          _classCallCheck(this, ContentComponent);

          this.modalService = modalService;
          this.router = router;
          this.produitService = produitService;
          this.panierService = panierService;
          this.imagurl = _common_global_constants__WEBPACK_IMPORTED_MODULE_7__["GlobalConstants"].host + "/img/produit_image/";
          this.produitrecent = [];
          this.produitconsommable = 0;
          this.intrants = 0;
          this.outils = 0;
          this.allproductionconso = [];
          this.view = true;
          this.isLaoder = true;
          this.today = new Date();
          this.allcategorie = [];
          this.shopbox = _data_shop_json__WEBPACK_IMPORTED_MODULE_0__;
          this.featuredpost = _data_shop_json__WEBPACK_IMPORTED_MODULE_0__;
          this.category = _data_category_json__WEBPACK_IMPORTED_MODULE_1__;
          this.blogcategory = _data_blogcategory_json__WEBPACK_IMPORTED_MODULE_2__;
          this.testimonial = _data_testimonial_json__WEBPACK_IMPORTED_MODULE_5__;
          this.blogbox = _data_blog_json__WEBPACK_IMPORTED_MODULE_3__;
          this.tags = _data_blogtags_json__WEBPACK_IMPORTED_MODULE_4__; // Banner

          this.bannerslider = [{
            idproduit: 1,
            photo: "assets/img/products/20.jpeg",
            user: "Bedel coulibaly",
            title: "Banane plantain",
            titlespan: "en vente",
            para: "meilleur Banane plantain de la region du belier, produit dans les meilleurs conditions"
          }, {
            idproduit: 2,
            photo: "assets/img/products/21.jpeg",
            user: "Atse cedrick",
            title: "Banane plantain",
            titlespan: "en vente",
            para: "meilleur banane plantain de la region du belier, produit dans les meilleurs conditions"
          }];
          this.bannerConfig = {
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            dots: true,
            dotsClass: "slick-dots d-flex",
            autoplay: true,
            responsive: [{
              breakpoint: 991,
              settings: {
                slidesToShow: 2
              }
            }, {
              breakpoint: 575,
              settings: {
                slidesToShow: 1
              }
            }]
          }; // Icons

          this.iconspost = [{
            icon: "flaticon-diet",
            title: "Produit consomable",
            para: "Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          }, {
            icon: "flaticon-harvest",
            title: "Intrant",
            para: "Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          }, {
            icon: "flaticon-tag",
            title: "Outils",
            para: "Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          }]; // Fresharrivals

          this.fresharrConfig = {
            slidesToShow: 3,
            slidesToScroll: 1,
            arrows: true,
            dots: false,
            autoplay: true,
            prevArrow: '.andro_fresh-arrivals .slider-prev',
            nextArrow: '.andro_fresh-arrivals .slider-next',
            responsive: [{
              breakpoint: 991,
              settings: {
                slidesToShow: 2
              }
            }, {
              breakpoint: 575,
              settings: {
                slidesToShow: 1
              }
            }]
          }; // Testimonial

          this.testiConfig = {
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            dots: true,
            dotsClass: "slick-dots d-flex",
            autoplay: true,
            responsive: [{
              breakpoint: 991,
              settings: {
                slidesToShow: 2
              }
            }, {
              breakpoint: 575,
              settings: {
                slidesToShow: 1
              }
            }]
          }; // Increment decrement

          this.counter = 1;
          this.montantcommande = 1;
        }

        _createClass(ContentComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.innerWidth = window.innerWidth;
            this.stopModale();
            this.getProductRecent();
          } // get recente product

        }, {
          key: "getProductRecent",
          value: function getProductRecent() {
            var _this3 = this;

            if (this.innerWidth <= 1389) {
              this.view = false;
            } else {}

            this.produitService.GetAllcategorie().subscribe(function (res) {
              res.data.forEach(function (elements) {
                _this3.allcategorie.push(elements);
              });
            }); //console.log("category :",this.allcategorie)

            var todayjour = this.today.getDate();
            this.produitService.GetAllProduit().subscribe(function (res) {
              _this3.produits = res;
              var conso = [];
              var intr = [];
              var out = [];

              _this3.produits.data.forEach(function (element) {
                _this3.allcategorie.forEach(function (cate) {
                  if (String(cate.id) == element.categorieProduitId) {
                    element.categorie = cate.label;
                  }
                });

                var datecreateprod = new Date(element['created_at']);
                var produitjour = datecreateprod.getDate();
                _this3.isLaoder = false;

                if (element['typeVente'] === "Produit consommable") {
                  conso.push(element);

                  _this3.allproductionconso.push(element);

                  _this3.produitconsommable = conso.length;
                }

                if (element['typeVente'] === "Intrant") {
                  intr.push(element);
                  _this3.intrants = intr.length;
                }

                if (element['typeVente'] === "Outils") {
                  out.push(element);
                  _this3.outils = out.length;
                }

                if (produitjour >= todayjour - 20 && produitjour <= todayjour) {
                  _this3.produitrecent.push(element);
                } else {
                  _this3.produitrecent.push(element);
                }
              });
            });
            console.log('je suis ici :', this.produitrecent);
          }
        }, {
          key: "open",
          value: function open(content, item) {
            this.counter = 1;
            this.montantcommande = 1;
            this.modalContent = item;
            this.modalService.open(content, {
              centered: true,
              size: "lg",
              windowClass: 'andro_quick-view-modal p-0'
            });
          }
        }, {
          key: "getBlogTags",
          value: function getBlogTags(items) {
            var elems = _data_blogtags_json__WEBPACK_IMPORTED_MODULE_4__.filter(function (item) {
              return items.includes(item.id);
            });

            return elems;
          }
        }, {
          key: "addtopanier",
          value: function addtopanier(quantite, description, id, urlimage, montantunitaire, idproducteur, typeVente, categorie) {
            if (this.montantcommande == 1) {
              this.montantcommande = montantunitaire;
            }

            if (this.counter > quantite) {
              sweetalert2__WEBPACK_IMPORTED_MODULE_6___default.a.fire({
                icon: 'error',
                title: 'Ajout echoué!',
                text: "La quantité doit etre inferieur a celui de produit",
                showConfirmButton: true,
                timer: 2000
              });
            } else {
              console.log(id, description, quantite, urlimage, this.montantcommande);
              this.panierService.addItemsToCart(description, this.counter, id, urlimage, this.montantcommande, idproducteur, montantunitaire, typeVente, categorie);
            }

            this.modalService.dismissAll();
          }
        }, {
          key: "increment",
          value: function increment(quantite, prix) {
            this.montantcommande = prix;

            if (this.counter <= quantite - 1) {
              this.counter += 1;
              this.montantcommande = this.montantcommande * this.counter;
            }
          }
        }, {
          key: "decrement",
          value: function decrement(quantite, prix) {
            this.montantcommande = prix;
            this.counter -= 1;
            this.montantcommande = this.montantcommande * this.counter;
          }
        }, {
          key: "searchProduct",
          value: function searchProduct(variable) {
            var _this4 = this;

            var newroute = '/shop-v3/' + variable;
            this.router.navigateByUrl('/', {
              skipLocationChange: true
            }).then(function () {
              _this4.router.navigate([newroute]);
            });
          }
        }, {
          key: "stopModale",
          value: function stopModale() {
            if (sweetalert2__WEBPACK_IMPORTED_MODULE_6___default.a.isLoading) {
              sweetalert2__WEBPACK_IMPORTED_MODULE_6___default.a.close();
            }
          }
        }]);

        return ContentComponent;
      }();
      /***/

    },

    /***/
    "zF0K":
    /*!************************************************************!*\
      !*** ./src/app/components/pages/hometwo/hometwo.module.ts ***!
      \************************************************************/

    /*! exports provided: HometwoModule */

    /***/
    function zF0K(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HometwoModule", function () {
        return HometwoModule;
      });

      var HometwoModule = /*#__PURE__*/_createClass(function HometwoModule() {
        _classCallCheck(this, HometwoModule);
      });
      /***/

    }
  }]);
})();
//# sourceMappingURL=components-pages-hometwo-hometwo-module-ngfactory-es5.js.map