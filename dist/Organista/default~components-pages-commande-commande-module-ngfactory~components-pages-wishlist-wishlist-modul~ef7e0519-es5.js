(function () {
  function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~components-pages-commande-commande-module-ngfactory~components-pages-wishlist-wishlist-modul~ef7e0519"], {
    /***/
    "0GIX":
    /*!************************************!*\
      !*** ./src/app/data/wishlist.json ***!
      \************************************/

    /*! exports provided: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, default */

    /***/
    function GIX(module) {
      module.exports = JSON.parse("[{\"photo\":\"assets/img/products/1.png\",\"title\":\"Kiwi\",\"qty\":2,\"price\":12.99,\"stock\":true},{\"photo\":\"assets/img/products/5.png\",\"title\":\"Watermelons\",\"qty\":1,\"price\":9.99,\"stock\":true},{\"photo\":\"assets/img/products/4.png\",\"title\":\"Cucumbers\",\"qty\":3,\"price\":13.99,\"stock\":false},{\"photo\":\"assets/img/products/4.png\",\"title\":\"Cucumbers\",\"qty\":3,\"price\":13.99,\"stock\":false},{\"photo\":\"assets/img/products/4.png\",\"title\":\"Cucumbers\",\"qty\":3,\"price\":13.99,\"stock\":false},{\"photo\":\"assets/img/products/4.png\",\"title\":\"Cucumbers\",\"qty\":3,\"price\":13.99,\"stock\":false},{\"photo\":\"assets/img/products/4.png\",\"title\":\"Cucumbers\",\"qty\":3,\"price\":13.99,\"stock\":false},{\"photo\":\"assets/img/products/4.png\",\"title\":\"Cucumbers\",\"qty\":3,\"price\":13.99,\"stock\":false},{\"photo\":\"assets/img/products/4.png\",\"title\":\"Cucumbers\",\"qty\":3,\"price\":13.99,\"stock\":false},{\"photo\":\"assets/img/products/4.png\",\"title\":\"Cucumbers\",\"qty\":3,\"price\":13.99,\"stock\":false},{\"photo\":\"assets/img/products/4.png\",\"title\":\"Cucumbers\",\"qty\":3,\"price\":13.99,\"stock\":false},{\"photo\":\"assets/img/products/4.png\",\"title\":\"Cucumbers\",\"qty\":3,\"price\":13.99,\"stock\":false},{\"photo\":\"assets/img/products/4.png\",\"title\":\"Cucumbers\",\"qty\":3,\"price\":13.99,\"stock\":false},{\"photo\":\"assets/img/products/4.png\",\"title\":\"Cucumbers\",\"qty\":3,\"price\":13.99,\"stock\":false},{\"photo\":\"assets/img/products/4.png\",\"title\":\"Cucumbers\",\"qty\":3,\"price\":13.99,\"stock\":false},{\"photo\":\"assets/img/products/4.png\",\"title\":\"Cucumbers\",\"qty\":3,\"price\":13.99,\"stock\":false},{\"photo\":\"assets/img/products/4.png\",\"title\":\"Cucumbers\",\"qty\":3,\"price\":13.99,\"stock\":false},{\"photo\":\"assets/img/products/4.png\",\"title\":\"Cucumbers\",\"qty\":3,\"price\":13.99,\"stock\":false},{\"photo\":\"assets/img/products/4.png\",\"title\":\"Cucumbers\",\"qty\":3,\"price\":13.99,\"stock\":false},{\"photo\":\"assets/img/products/4.png\",\"title\":\"Cucumbers\",\"qty\":3,\"price\":13.99,\"stock\":false},{\"photo\":\"assets/img/products/4.png\",\"title\":\"Cucumbers\",\"qty\":3,\"price\":13.99,\"stock\":false},{\"photo\":\"assets/img/products/4.png\",\"title\":\"Cucumbers\",\"qty\":3,\"price\":13.99,\"stock\":false},{\"photo\":\"assets/img/products/4.png\",\"title\":\"Cucumbers\",\"qty\":3,\"price\":13.99,\"stock\":false},{\"photo\":\"assets/img/products/4.png\",\"title\":\"Cucumbers\",\"qty\":3,\"price\":13.99,\"stock\":false},{\"photo\":\"assets/img/products/4.png\",\"title\":\"Cucumbers\",\"qty\":3,\"price\":13.99,\"stock\":false},{\"photo\":\"assets/img/products/4.png\",\"title\":\"Cucumbers\",\"qty\":3,\"price\":13.99,\"stock\":false},{\"photo\":\"assets/img/products/4.png\",\"title\":\"Cucumbers\",\"qty\":3,\"price\":13.99,\"stock\":false},{\"photo\":\"assets/img/products/4.png\",\"title\":\"Cucumbers\",\"qty\":3,\"price\":13.99,\"stock\":false},{\"photo\":\"assets/img/products/4.png\",\"title\":\"Cucumbers\",\"qty\":3,\"price\":13.99,\"stock\":false},{\"photo\":\"assets/img/products/4.png\",\"title\":\"Cucumbers\",\"qty\":3,\"price\":13.99,\"stock\":false},{\"photo\":\"assets/img/products/4.png\",\"title\":\"Cucumbers\",\"qty\":3,\"price\":13.99,\"stock\":false},{\"photo\":\"assets/img/products/4.png\",\"title\":\"Cucumbers\",\"qty\":3,\"price\":13.99,\"stock\":false},{\"photo\":\"assets/img/products/4.png\",\"title\":\"Cucumbers\",\"qty\":3,\"price\":13.99,\"stock\":false},{\"photo\":\"assets/img/products/4.png\",\"title\":\"Cucumbers\",\"qty\":3,\"price\":13.99,\"stock\":false}]");
      /***/
    },

    /***/
    "LVc+":
    /*!********************************************************!*\
      !*** ./src/app/services/commandes/commande.service.ts ***!
      \********************************************************/

    /*! exports provided: CommandeService */

    /***/
    function LVc(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CommandeService", function () {
        return CommandeService;
      });
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/common/http */
      "IheW");
      /* harmony import */


      var _common_global_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../common/global-constants */
      "jxL5");
      /* harmony import */


      var sweetalert2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! sweetalert2 */
      "PSD3");
      /* harmony import */


      var sweetalert2__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_2__);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "iInd");
      /* harmony import */


      var _paniers_panier_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../paniers/panier.service */
      "JvmC");

      var CommandeService = /*#__PURE__*/function () {
        function CommandeService(http, router, panierService) {
          _classCallCheck(this, CommandeService);

          this.http = http;
          this.router = router;
          this.panierService = panierService;
          this.token = localStorage.getItem('token');
          this.iduser = localStorage.getItem('iduser');
          this.testvar = [];
          this.terminate = false;
        } // var commandeGenerale = {
        //   "quantitetotalCommande":quantitetotalCommande,
        //   "montantTotaCommande":montantTotaCommande,
        //   "montantlivraison":montantlivraison,
        //   "statut":statut,
        //   "numero_commande":numero_commande,
        //   "vendeurID":vendeurID,
        //   "userId":iduser
        //  }


        _createClass(CommandeService, [{
          key: "GetCommandeByuser",
          value: function GetCommandeByuser() {
            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({
              'Content-Type': 'application/json',
              'Authorization': "Bearer ".concat(localStorage.getItem('token'))
            });
            return this.http.get(_common_global_constants__WEBPACK_IMPORTED_MODULE_1__["GlobalConstants"].apiURL + "/commandes/getuserIdcommande/" + this.iduser + ".json", {
              headers: headers
            });
          }
        }, {
          key: "GetProduitBycomamnde",
          value: function GetProduitBycomamnde() {
            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({
              'Content-Type': 'application/json',
              'Authorization': "Bearer ".concat(localStorage.getItem('token'))
            });
            return this.http.get(_common_global_constants__WEBPACK_IMPORTED_MODULE_1__["GlobalConstants"].apiURL + "/produitcommande/listProduitcommande.json", {
              headers: headers
            });
          }
        }, {
          key: "AddCommande",
          value: function AddCommande(data, listprod) {
            var _this = this;

            var re = false;
            sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire('Patientez svp!!!');
            sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.showLoading(sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.getDenyButton());
            var idcommande = 0;
            var commande = {
              "venteId": data.venteId,
              "userId": data.userId,
              "vendeurId": data.vendeurID,
              "quantite": data.quantitetotalCommande,
              "montant": data.montantTotaCommande,
              "statut": "en attente",
              "numero_commande": String(Math.floor(100000 + Math.random() * 900000)),
              "montantlivraison": data.montantlivraison
            };
            this.token = localStorage.getItem('token');
            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({
              'Content-Type': 'application/json',
              'Authorization': "Bearer ".concat(localStorage.getItem('token'))
            });
            var body = JSON.stringify(commande); // console.log(this.token);
            // console.log("voici le token dans commande : ",this.token)
            // console.log("voici le token dans commande : ",this.iduser)

            this.http.post(_common_global_constants__WEBPACK_IMPORTED_MODULE_1__["GlobalConstants"].apiURL + '/commandes/addCommandes.json', body, {
              headers: headers
            }).subscribe(function (res) {
              //  console.log(res);
              if (res['message'] === "authentication failed Token not valide") {
                sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire({
                  icon: 'error',
                  title: 'Commande refusé',
                  text: 'Votre session a expiré!',
                  showConfirmButton: true,
                  timer: 2000
                });

                _this.router.navigate(['/login']);

                re = false;
              } else if (res['response']['code'] === "200") {
                //  Swal.fire({
                //   icon: 'success',
                //   title: 'Commande effectuée',
                //   text: 'Merci pour votre commande!',
                //   showConfirmButton: true,
                //   timer: 2000
                //  });
                idcommande = res['response']['idcommande'];
                var number = listprod.length;

                var _iterator = _createForOfIteratorHelper(listprod),
                    _step;

                try {
                  for (_iterator.s(); !(_step = _iterator.n()).done;) {
                    var item = _step.value;
                    number -= 1; // console.log(item)

                    _this.AddProduitCommande(item, number, idcommande);
                  } //this.panierService.removePanier();
                  //this.cart = []
                  // console.log(idcommande)
                  //this.panierService.removePanier()
                  //this.router.navigate(['/login']);

                } catch (err) {
                  _iterator.e(err);
                } finally {
                  _iterator.f();
                }

                re = true;
              } else if (res['response']['code'] === "404") {
                sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire({
                  icon: 'error',
                  title: 'Commande refusé!',
                  text: 'Veuillez contactez le service client!',
                  showConfirmButton: true,
                  timer: 2000
                });
                re = false;
              } else {
                //this.alertConfirmation()
                sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire({
                  icon: 'error',
                  title: 'Commande refusé!',
                  text: 'veuillez verifier votre connexion internet!',
                  showConfirmButton: true,
                  timer: 2000
                });
                re = false;
              }
            });
            return re;
          }
        }, {
          key: "AddProduitCommande",
          value: function AddProduitCommande(data, listenumer, idcommande) {
            var _this2 = this;

            //Swal.fire('Patientez svp!!!')
            //Swal.showLoading(Swal.getDenyButton())
            console.log(listenumer);
            var produitcommande = {
              "idcommande": idcommande,
              "titre": data.title,
              "prixunitaire": data.price,
              "quantite": data.qty,
              "Idvendeur": data.idprod,
              "idvente": data.id
            };
            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({
              'Content-Type': 'application/json',
              'Authorization': "Bearer ".concat(localStorage.getItem('token'))
            });
            var body = JSON.stringify(produitcommande);
            var alert = true;
            console.log(this.token);
            this.http.post(_common_global_constants__WEBPACK_IMPORTED_MODULE_1__["GlobalConstants"].apiURL + '/produitcommande/addProduitcommande.json', body, {
              headers: headers
            }).subscribe(function (res) {
              console.log(res);

              if (res['message'] === "authentication failed Token not valide") {
                if (listenumer === 0) {
                  sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire({
                    icon: 'error',
                    title: 'Commande refusé',
                    text: 'Votre session a expiré!',
                    showConfirmButton: true,
                    timer: 2000
                  });

                  _this2.router.navigate(['/login']);
                }
              } else if (res['response']['code'] === "200") {
                if (listenumer === 0) {
                  _this2.testvar.push("1");

                  console.log("this.testvar :", _this2.testvar);
                  sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire({
                    icon: 'success',
                    title: 'Commande effectuée',
                    text: 'Merci pour votre commande!',
                    showConfirmButton: true,
                    timer: 2000
                  });
                }

                console.log('after'); //update vente

                var newquantite;

                _this2.http.get(_common_global_constants__WEBPACK_IMPORTED_MODULE_1__["GlobalConstants"].apiURL + '/ventes/getVentesbyID/' + data.id + '.json', {
                  headers: headers
                }).subscribe(function (vente) {
                  //+data.id+'.json')
                  console.log("produit vente: " + vente['response'].data);
                  newquantite = vente['response'].data.quantite - data.qty;
                }, function (error) {}, function () {
                  var ventes = {
                    "quantite": newquantite
                  };
                  var body = JSON.stringify(ventes);

                  _this2.http.post(_common_global_constants__WEBPACK_IMPORTED_MODULE_1__["GlobalConstants"].apiURL + '/ventes/updateVentes/' + data.id + '.json', body, {
                    headers: headers
                  }).subscribe(function (rep) {
                    console.log("updating vente", rep['response']);
                  });
                }); //update produit vente
                //this.panierService.removePanier()
                //this.router.navigate(['/login']);

              } else if (res['response']['code'] === "404") {
                if (listenumer === 0) {
                  sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire({
                    icon: 'error',
                    title: 'Commande refusé!',
                    text: 'Veuillez contactez le service client!',
                    showConfirmButton: true,
                    timer: 2000
                  });
                  return true; //  localStorage.setItem('commaandeOK',"false")
                }
              } else {
                //this.alertConfirmation()
                if (listenumer === 0) {
                  sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire({
                    icon: 'error',
                    title: 'Inscription refusé!',
                    text: 'veuillez verifier votre connexion internet!',
                    showConfirmButton: true,
                    timer: 2000
                  });
                  localStorage.setItem('commaandeOK', "false");
                }
              }
            });
          }
        }, {
          key: "GetUser",
          value: function GetUser() {
            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({
              'Content-Type': 'application/json',
              'Authorization': "Bearer ".concat(localStorage.getItem('token'))
            });
            return this.http.get(_common_global_constants__WEBPACK_IMPORTED_MODULE_1__["GlobalConstants"].api_auth + "/getuser/" + localStorage.getItem('iduser') + ".json", {
              headers: headers
            });
          }
        }]);

        return CommandeService;
      }();

      CommandeService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
        factory: function CommandeService_Factory() {
          return new CommandeService(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_paniers_panier_service__WEBPACK_IMPORTED_MODULE_5__["PanierService"]));
        },
        token: CommandeService,
        providedIn: "root"
      });
      /***/
    }
  }]);
})();
//# sourceMappingURL=default~components-pages-commande-commande-module-ngfactory~components-pages-wishlist-wishlist-modul~ef7e0519-es5.js.map