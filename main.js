(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\paginaPersonal\frontend\src\main.ts */"zUnb");


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "BuFo":
/*!***************************************************!*\
  !*** ./src/app/components/home/home.component.ts ***!
  \***************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "R0Ic");
/* harmony import */ var _animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../animations */ "J1Ni");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_mobileDetector_mobile_detector_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/mobileDetector/mobile-detector.service */ "HhPq");
/* harmony import */ var ng_in_viewport__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-in-viewport */ "Wuvc");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");






function HomeComponent_h1_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "h1", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "\u00A1Bienvenido a mi p\u00E1gina web!");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("@insertRemoveTrigger", undefined);
} }
function HomeComponent_img_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "img", 11);
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("@insertRemoveTrigger", undefined);
} }
function HomeComponent_span_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "celular");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function HomeComponent_span_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "pc");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
const _c0 = function () { return [0]; };
const _c1 = function (a0) { return { threshold: a0 }; };
class HomeComponent {
    constructor(mobileDetector) {
        this.mobileDetector = mobileDetector;
        this.home = 1;
        this.isMobile = false;
        this.isShown = true;
        this.animation = "";
    }
    ngOnInit() {
        this.isMobile = this.mobileDetector.isMobile();
    }
    onIntersection({ target, visible }) {
        this.isShown = visible;
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_mobileDetector_mobile_detector_service__WEBPACK_IMPORTED_MODULE_3__["MobileDetectorService"])); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 22, vars: 8, consts: [["inViewport", "", 3, "inViewportOptions", "inViewportAction"], ["id", "home"], [1, "centrado"], ["class", "bienvenido", 4, "ngIf"], [1, "cardCentrada"], [1, "text"], [1, "dosColumnas"], ["target", "_blank", "href", "https://github.com/LeonardoDavidMachado/paginaPersonal", 1, "enlace"], ["class", "mitad", "src", "./assets/angular.svg", 4, "ngIf"], [4, "ngIf"], [1, "bienvenido"], ["src", "./assets/angular.svg", 1, "mitad"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("inViewportAction", function HomeComponent_Template_section_inViewportAction_0_listener($event) { return ctx.onIntersection($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, HomeComponent_h1_3_Template, 2, 1, "h1", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "h2", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "Sobre m\u00ED y esta p\u00E1gina");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, " Soy un desarrollador fullstack y t\u00E9cnico electr\u00F3nico con experiencia laboral en frontend. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](9, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, " Ac\u00E1 pod\u00E9s encontrar informaci\u00F3n sobre m\u00ED y ver una muestra de mi trabajo, est\u00E1 creada con Angular Material. Se puede ver el c\u00F3digo en mi ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14, "github");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, ". ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](16, HomeComponent_img_16_Template, 1, 1, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18, "\u00A1No te olvides de visitarla con tu ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](19, HomeComponent_span_19_Template, 2, 0, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](20, HomeComponent_span_20_Template, 2, 0, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](21, " para verla en la otra versi\u00F3n! ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("inViewportOptions", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](6, _c1, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](5, _c0)));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.isShown);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.isShown);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.isMobile);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.isMobile);
    } }, directives: [ng_in_viewport__WEBPACK_IMPORTED_MODULE_4__["InViewportDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"]], styles: ["@import url(\"https://fonts.googleapis.com/css2?family=Dancing+Script&display=swap\");\n@import url(\"https://fonts.googleapis.com/css2?family=Berkshire+Swash&family=Dancing+Script&display=swap\");\nbody[_ngcontent-%COMP%] {\n  padding-top: 0px;\n  padding-left: 0px;\n  width: 100%;\n  min-height: 100%;\n  height: auto;\n  background-color: var(--bodyBackground);\n  transition: background-color 3s linear;\n}\n.text[_ngcontent-%COMP%], td[_ngcontent-%COMP%], li[_ngcontent-%COMP%], .menuIcon[_ngcontent-%COMP%] {\n  color: var(--textColor);\n}\n.bienvenido[_ngcontent-%COMP%] {\n  color: var(--textColor);\n  font-family: \"Dancing Script\", cursive;\n  font-size: 30px;\n  font-weight: 500;\n  margin-top: 30px;\n}\n.mode[_ngcontent-%COMP%] {\n  color: var(--modeColor);\n}\n.moon[_ngcontent-%COMP%], .sun[_ngcontent-%COMP%] {\n  padding: 3px;\n}\n.moon[_ngcontent-%COMP%] {\n  color: white;\n}\n.sun[_ngcontent-%COMP%] {\n  color: yellow;\n}\n.themeSlide[_ngcontent-%COMP%] {\n  padding: 3px;\n  display: inline-flex;\n  align-items: center;\n}\n@media (max-width: 900px) {\n  .cardFormacion[_ngcontent-%COMP%] {\n    margin-top: 5%;\n  }\n\n  .iconoContacto[_ngcontent-%COMP%] {\n    font-size: x-large;\n    position: absolute;\n    left: 10%;\n    background-color: var(--iconColor);\n    border-radius: 50%;\n  }\n\n  .contactoLista[_ngcontent-%COMP%] {\n    width: 300px;\n    height: 300px;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-evenly;\n  }\n\n  .menu[_ngcontent-%COMP%] {\n    color: white;\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between;\n    width: 100%;\n  }\n\n  nav[_ngcontent-%COMP%] {\n    position: fixed;\n    top: 0;\n    width: 100%;\n    z-index: 2;\n    margin: 0;\n  }\n}\n@media (min-width: 900px) {\n  .iconoContacto[_ngcontent-%COMP%] {\n    font-size: x-large;\n    position: relative;\n    left: -10px;\n    top: -8px;\n    background-color: var(--iconColor);\n    border-radius: 50%;\n  }\n\n  .contactoLista[_ngcontent-%COMP%] {\n    width: 100%;\n    display: flex;\n    flex-direction: row;\n    justify-content: space-evenly;\n  }\n\n  nav[_ngcontent-%COMP%] {\n    background: black;\n    position: fixed;\n    top: 0;\n    left: 0;\n    width: 100%;\n    padding: 10px 0px 10px 0px;\n    z-index: 2;\n    box-shadow: 0px 15px 20px #24aa2b;\n  }\n}\n.centrado[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.titulo[_ngcontent-%COMP%] {\n  color: var(--title);\n  font-family: \"Allan\", cursive;\n  font-size: 40px;\n  margin-bottom: 30px;\n}\n.botones-navbar[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-evenly;\n  flex-wrap: nowrap;\n  width: 100%;\n}\n.boton-navegacion[_ngcontent-%COMP%] {\n  margin-left: 20px;\n}\n.boton-navegacion[_ngcontent-%COMP%]:hover {\n  background-color: red;\n  color: black;\n}\n.boton-navegacion[_ngcontent-%COMP%]:active {\n  background-color: blue;\n}\n.card[_ngcontent-%COMP%], .cardCentrada[_ngcontent-%COMP%] {\n  margin-top: 10%;\n}\n.card[_ngcontent-%COMP%] {\n  max-width: 400px;\n  box-shadow: 10px 30px 30px var(--shadowColor);\n  background-color: var(--formacionColor);\n}\n.cardCentrada[_ngcontent-%COMP%] {\n  margin: auto;\n  width: 50%;\n  min-width: 250px;\n  background-color: transparent;\n}\nsection[_ngcontent-%COMP%] {\n  padding: 6% 10% 4% 10%;\n}\ntable[_ngcontent-%COMP%] {\n  width: 100%;\n  background-color: var(--formacionColor);\n}\n.botones-slider[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-around;\n  align-items: baseline;\n  padding: 0% 10% 5% 10%;\n}\n.paginator[_ngcontent-%COMP%] {\n  color: var(--paginatorColor);\n}\nh4[_ngcontent-%COMP%] {\n  color: var(--subtitleColor);\n}\n.botonSlider[_ngcontent-%COMP%] {\n  background-color: white;\n}\n.barra[_ngcontent-%COMP%] {\n  width: 20%;\n}\n.logo[_ngcontent-%COMP%] {\n  width: 40%;\n  padding-left: 30px;\n}\n.encabezado[_ngcontent-%COMP%] {\n  background-color: darkviolet;\n}\n.cardFormacion[_ngcontent-%COMP%] {\n  width: auto;\n  box-shadow: 10px 30px 30px #a74242;\n  background-color: var(--formacionColor);\n}\n.header-card[_ngcontent-%COMP%] {\n  margin-left: 10%;\n}\n.empresa[_ngcontent-%COMP%] {\n  color: red;\n}\n.puesto[_ngcontent-%COMP%] {\n  color: greenyellow;\n}\n.texto[_ngcontent-%COMP%] {\n  padding: 25% 0% 25% 0%;\n  width: 200px;\n  height: 200px;\n}\n.mitad[_ngcontent-%COMP%] {\n  width: 50%;\n  height: 50%;\n  padding-right: 20px;\n}\n.dosColumnas[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row-reverse;\n  align-items: center;\n}\n.columnasResponsivas[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n}\n.columnaDos[_ngcontent-%COMP%] {\n  margin-left: 20%;\n}\n.contactoItem[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  cursor: pointer;\n}\n  a {\n  color: aliceblue;\n  text-decoration: none;\n}\n.enlace[_ngcontent-%COMP%] {\n  color: rgba(44, 199, 134, 0.781);\n}\n  .backdropBackground {\n  -webkit-backdrop-filter: brightness(0.8) blur(10px);\n          backdrop-filter: brightness(0.8) blur(10px);\n}\n\np[_ngcontent-%COMP%], h2[_ngcontent-%COMP%] {\n  color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXGFwcC5jb21wb25lbnQuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFxob21lLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFRLG1GQUFBO0FBQ0EsMEdBQUE7QUFpQlI7RUFDRSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLHVDQXBCZTtFQXFCZixzQ0FBQTtBQ2ZGO0FEa0JBO0VBQ0UsdUJBdkJVO0FDUVo7QURrQkE7RUFDRSx1QkEzQlU7RUE0QlYsc0NBbkJRO0VBb0JSLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FDZkY7QURrQkE7RUFDRSx1QkE1QlU7QUNhWjtBRGtCQTtFQUNFLFlBQUE7QUNmRjtBRGtCQTtFQUNFLFlBQUE7QUNmRjtBRGtCQTtFQUNFLGFBQUE7QUNmRjtBRGtCQTtFQUNFLFlBQUE7RUFDQSxvQkFBQTtFQUNBLG1CQUFBO0FDZkY7QURrQkE7RUFFRTtJQUNFLGNBQUE7RUNoQkY7O0VEbUJBO0lBQ0Usa0JBQUE7SUFDQSxrQkFBQTtJQUNBLFNBQUE7SUFDQSxrQ0E1RFE7SUE2RFIsa0JBQUE7RUNoQkY7O0VEbUJBO0lBQ0UsWUE3REc7SUE4REgsYUE5REc7SUErREgsYUFBQTtJQUNBLHNCQUFBO0lBQ0EsNkJBQUE7RUNoQkY7O0VEbUJBO0lBQ0UsWUFBQTtJQUNBLGFBQUE7SUFDQSxtQkFBQTtJQUNBLDhCQUFBO0lBQ0EsV0FBQTtFQ2hCRjs7RURtQkE7SUFDRSxlQUFBO0lBQ0EsTUFBQTtJQUNBLFdBQUE7SUFDQSxVQUFBO0lBQ0EsU0FBQTtFQ2hCRjtBQUNGO0FEb0JBO0VBRUU7SUFDRSxrQkFBQTtJQUNBLGtCQUFBO0lBQ0EsV0FBQTtJQUNBLFNBQUE7SUFDQSxrQ0FqR1E7SUFrR1Isa0JBQUE7RUNuQkY7O0VEc0JBO0lBQ0UsV0FBQTtJQUNBLGFBQUE7SUFDQSxtQkFBQTtJQUNBLDZCQUFBO0VDbkJGOztFRHNCQTtJQUNFLGlCQUFBO0lBQ0EsZUFBQTtJQUNBLE1BQUE7SUFDQSxPQUFBO0lBQ0EsV0FBQTtJQUNBLDBCQUFBO0lBQ0EsVUFBQTtJQUNBLGlDQUFBO0VDbkJGO0FBQ0Y7QURzQkE7RUFDRSxrQkFBQTtBQ3BCRjtBRHVCQTtFQUNFLG1CQXBJTTtFQXFJTiw2QkE1SE07RUE2SE4sZUFBQTtFQUNBLG1CQUFBO0FDcEJGO0FEdUJBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsNkJBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7QUNwQkY7QUR1QkE7RUFDSSxpQkFBQTtBQ3BCSjtBRHNCSTtFQUNJLHFCQUFBO0VBQ0EsWUFBQTtBQ3BCUjtBRHVCSTtFQUNJLHNCQUFBO0FDckJSO0FEeUJBO0VBQ0UsZUFBQTtBQ3RCRjtBRHlCQTtFQUNFLGdCQUFBO0VBQ0EsNkNBQUE7RUFDQSx1Q0FsS2U7QUM0SWpCO0FEeUJBO0VBQ0UsWUFBQTtFQUNBLFVBQUE7RUFDQSxnQkFBQTtFQUNBLDZCQUFBO0FDdEJGO0FEeUJBO0VBQ0Usc0JBQUE7QUN0QkY7QUR5QkE7RUFDRSxXQUFBO0VBQ0EsdUNBbExlO0FDNEpqQjtBRHlCQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDZCQUFBO0VBQ0EscUJBQUE7RUFDQSxzQkFBQTtBQ3RCRjtBRHlCQTtFQUNFLDRCQWhNZTtBQzBLakI7QUR5QkE7RUFDRSwyQkFuTWM7QUM2S2hCO0FEeUJBO0VBQ0UsdUJBQUE7QUN0QkY7QUR5QkE7RUFDRSxVQUFBO0FDdEJGO0FEeUJBO0VBQ0UsVUFBQTtFQUNBLGtCQUFBO0FDdEJGO0FEeUJBO0VBQ0UsNEJBQUE7QUN0QkY7QUR5QkE7RUFDRSxXQUFBO0VBQ0Esa0NBQUE7RUFDQSx1Q0F6TmU7QUNtTWpCO0FEeUJBO0VBQ0UsZ0JBQUE7QUN0QkY7QUR5QkE7RUFDRSxVQUFBO0FDdEJGO0FEeUJBO0VBQ0Usa0JBQUE7QUN0QkY7QUR5QkE7RUFDRSxzQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0FDdEJGO0FEeUJBO0VBQ0UsVUFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtBQ3RCRjtBRHlCQTtFQUNFLGFBQUE7RUFDQSwyQkFBQTtFQUNBLG1CQUFBO0FDdEJGO0FEeUJBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7QUN0QkY7QUR5QkE7RUFDRSxnQkFBQTtBQ3RCRjtBRHlCQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsZUFBQTtBQ3RCRjtBRHlCQTtFQUNFLGdCQUFBO0VBQ0EscUJBQUE7QUN0QkY7QUR5QkE7RUFDRSxnQ0FBQTtBQ3RCRjtBRHlCQTtFQUNFLG1EQUFBO1VBQUEsMkNBQUE7QUN0QkY7QUF0UUE7OztHQUFBO0FBS0E7RUFDSSxZQUFBO0FBd1FKIiwiZmlsZSI6ImhvbWUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1EYW5jaW5nK1NjcmlwdCZkaXNwbGF5PXN3YXAnKTtcclxuQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9QmVya3NoaXJlK1N3YXNoJmZhbWlseT1EYW5jaW5nK1NjcmlwdCZkaXNwbGF5PXN3YXAnKTtcclxuXHJcbi8vdmFyaWFibGVzXHJcbiRib2R5QmFja2dyb3VuZDogdmFyKC0tYm9keUJhY2tncm91bmQpO1xyXG4kdGl0bGU6IHZhcigtLXRpdGxlKTtcclxuJHRleHRDb2xvcjogdmFyKC0tdGV4dENvbG9yKTtcclxuJHBhZ2luYXRvcmNvbG9yOiB2YXIoLS1wYWdpbmF0b3JDb2xvcik7XHJcbiRzdWJ0aXRsZUNvbG9yOiB2YXIoLS1zdWJ0aXRsZUNvbG9yKTtcclxuJGZvcm1hY2lvbkNvbG9yOiB2YXIoLS1mb3JtYWNpb25Db2xvcik7XHJcbiRzaGFkb3dDb2xvcjogdmFyKC0tc2hhZG93Q29sb3IpO1xyXG4kYXJ0aWNsZUNvbG9yOiB2YXIoLS1hcnRpY2xlQ29sb3IpO1xyXG4kaWNvbkNvbG9yOiB2YXIoLS1pY29uQ29sb3IpO1xyXG4kbW9kZUNvbG9yOiB2YXIoLS1tb2RlQ29sb3IpO1xyXG4kYWxsYW46ICdBbGxhbicsIGN1cnNpdmU7XHJcbiRkYW5jaW5nOiAnRGFuY2luZyBTY3JpcHQnLCBjdXJzaXZlO1xyXG4kc2l6ZTogMzAwcHg7XHJcblxyXG5ib2R5IHtcclxuICBwYWRkaW5nLXRvcDogMHB4O1xyXG4gIHBhZGRpbmctbGVmdDogMHB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1pbi1oZWlnaHQ6IDEwMCU7XHJcbiAgaGVpZ2h0OiBhdXRvO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICRib2R5QmFja2dyb3VuZDtcclxuICB0cmFuc2l0aW9uOiAgYmFja2dyb3VuZC1jb2xvciAzcyBsaW5lYXI7XHJcbn1cclxuXHJcbi50ZXh0LCB0ZCwgbGksIC5tZW51SWNvbiB7XHJcbiAgY29sb3I6ICR0ZXh0Q29sb3I7XHJcbn1cclxuXHJcbi5iaWVudmVuaWRvIHtcclxuICBjb2xvcjogJHRleHRDb2xvcjtcclxuICBmb250LWZhbWlseTogJGRhbmNpbmc7XHJcbiAgZm9udC1zaXplOiAzMHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgbWFyZ2luLXRvcDogMzBweDtcclxufVxyXG5cclxuLm1vZGUge1xyXG4gIGNvbG9yOiAkbW9kZUNvbG9yO1xyXG59XHJcblxyXG4ubW9vbiwgLnN1biB7XHJcbiAgcGFkZGluZzogM3B4O1xyXG59XHJcblxyXG4ubW9vbiB7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4uc3VuIHtcclxuICBjb2xvcjogeWVsbG93O1xyXG59XHJcblxyXG4udGhlbWVTbGlkZSB7XHJcbiAgcGFkZGluZzogM3B4O1xyXG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA5MDBweCkgIHtcclxuXHJcbiAgLmNhcmRGb3JtYWNpb24ge1xyXG4gICAgbWFyZ2luLXRvcDogNSU7XHJcbiAgfVxyXG5cclxuICAuaWNvbm9Db250YWN0byB7XHJcbiAgICBmb250LXNpemU6IHgtbGFyZ2U7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBsZWZ0OiAxMCU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkaWNvbkNvbG9yO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIH1cclxuXHJcbiAgLmNvbnRhY3RvTGlzdGEge1xyXG4gICAgd2lkdGg6ICRzaXplO1xyXG4gICAgaGVpZ2h0OiAkc2l6ZTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XHJcbiAgfVxyXG5cclxuICAubWVudSB7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuXHJcbiAgbmF2IHtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHRvcDogMDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgei1pbmRleDogMjtcclxuICAgIG1hcmdpbjogMDtcclxuICB9XHJcblxyXG59XHJcblxyXG5AbWVkaWEgKG1pbi13aWR0aDogOTAwcHgpIHtcclxuXHJcbiAgLmljb25vQ29udGFjdG8ge1xyXG4gICAgZm9udC1zaXplOiB4LWxhcmdlO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgbGVmdDogLTEwcHg7XHJcbiAgICB0b3A6IC04cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkaWNvbkNvbG9yO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIH1cclxuXHJcbiAgLmNvbnRhY3RvTGlzdGEge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xyXG4gIH1cclxuXHJcbiAgbmF2IHtcclxuICAgIGJhY2tncm91bmQ6IGJsYWNrO1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgcGFkZGluZzogMTBweCAwcHggMTBweCAwcHg7XHJcbiAgICB6LWluZGV4OiAyO1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDE1cHggMjBweCByZ2IoMzYsIDE3MCwgNDMpO1xyXG4gIH1cclxufVxyXG5cclxuLmNlbnRyYWRvIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi50aXR1bG8ge1xyXG4gIGNvbG9yOiAkdGl0bGU7XHJcbiAgZm9udC1mYW1pbHk6ICRhbGxhbjtcclxuICBmb250LXNpemU6IDQwcHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcclxufVxyXG5cclxuLmJvdG9uZXMtbmF2YmFyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XHJcbiAgZmxleC13cmFwOiBub3dyYXA7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5ib3Rvbi1uYXZlZ2FjaW9uIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xyXG5cclxuICAgICY6aG92ZXIge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcclxuICAgICAgICBjb2xvcjogYmxhY2s7XHJcbiAgICB9XHJcblxyXG4gICAgJjphY3RpdmUge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IGJsdWU7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5jYXJkLCAuY2FyZENlbnRyYWRhIHtcclxuICBtYXJnaW4tdG9wOiAxMCU7XHJcbn1cclxuXHJcbi5jYXJkIHtcclxuICBtYXgtd2lkdGg6IDQwMHB4O1xyXG4gIGJveC1zaGFkb3c6IDEwcHggMzBweCAzMHB4ICRzaGFkb3dDb2xvcjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkZm9ybWFjaW9uQ29sb3I7XHJcbn1cclxuXHJcbi5jYXJkQ2VudHJhZGEge1xyXG4gIG1hcmdpbjogYXV0bztcclxuICB3aWR0aDogNTAlO1xyXG4gIG1pbi13aWR0aDogMjUwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbn1cclxuXHJcbnNlY3Rpb24ge1xyXG4gIHBhZGRpbmc6IDYlIDEwJSA0JSAxMCU7XHJcbn1cclxuXHJcbnRhYmxlIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkZm9ybWFjaW9uQ29sb3I7XHJcbn1cclxuXHJcbi5ib3RvbmVzLXNsaWRlciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG4gIGFsaWduLWl0ZW1zOiBiYXNlbGluZTtcclxuICBwYWRkaW5nOiAwJSAxMCUgNSUgMTAlO1xyXG59XHJcblxyXG4ucGFnaW5hdG9yIHtcclxuICBjb2xvcjogJHBhZ2luYXRvcmNvbG9yO1xyXG59XHJcblxyXG5oNCB7XHJcbiAgY29sb3I6JHN1YnRpdGxlQ29sb3I7XHJcbn1cclxuXHJcbi5ib3RvblNsaWRlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi5iYXJyYSB7XHJcbiAgd2lkdGg6IDIwJTtcclxufVxyXG5cclxuLmxvZ28ge1xyXG4gIHdpZHRoOiA0MCU7XHJcbiAgcGFkZGluZy1sZWZ0OiAzMHB4O1xyXG59XHJcblxyXG4uZW5jYWJlemFkbyB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogZGFya3Zpb2xldDtcclxufVxyXG5cclxuLmNhcmRGb3JtYWNpb24ge1xyXG4gIHdpZHRoOiBhdXRvO1xyXG4gIGJveC1zaGFkb3c6IDEwcHggMzBweCAzMHB4IHJnYigxNjcsIDY2LCA2Nik7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJGZvcm1hY2lvbkNvbG9yO1xyXG59XHJcblxyXG4uaGVhZGVyLWNhcmQge1xyXG4gIG1hcmdpbi1sZWZ0OiAxMCU7XHJcbn1cclxuXHJcbi5lbXByZXNhIHtcclxuICBjb2xvcjogcmVkO1xyXG59XHJcblxyXG4ucHVlc3RvIHtcclxuICBjb2xvcjogZ3JlZW55ZWxsb3c7XHJcbn1cclxuXHJcbi50ZXh0byB7XHJcbiAgcGFkZGluZzogMjUlIDAlIDI1JSAwJTtcclxuICB3aWR0aDogMjAwcHg7XHJcbiAgaGVpZ2h0OiAyMDBweDtcclxufVxyXG5cclxuLm1pdGFkIHtcclxuICB3aWR0aDogNTAlO1xyXG4gIGhlaWdodDogNTAlO1xyXG4gIHBhZGRpbmctcmlnaHQ6IDIwcHg7XHJcbn1cclxuXHJcbi5kb3NDb2x1bW5hcyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93LXJldmVyc2U7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLmNvbHVtbmFzUmVzcG9uc2l2YXMge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4uY29sdW1uYURvcyB7XHJcbiAgbWFyZ2luLWxlZnQ6IDIwJTtcclxufVxyXG5cclxuLmNvbnRhY3RvSXRlbSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyOyAgXHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG46Om5nLWRlZXAgYSB7XHJcbiAgY29sb3I6IGFsaWNlYmx1ZTtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbn1cclxuXHJcbi5lbmxhY2Uge1xyXG4gIGNvbG9yOiByZ2JhKDQ0LCAxOTksIDEzNCwgMC43ODEpO1xyXG59XHJcblxyXG46Om5nLWRlZXAgLmJhY2tkcm9wQmFja2dyb3VuZCB7XHJcbiAgYmFja2Ryb3AtZmlsdGVyOiBicmlnaHRuZXNzKDAuOCkgYmx1cigxMHB4KTtcclxufSIsIkBpbXBvcnQgdXJsKFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1EYW5jaW5nK1NjcmlwdCZkaXNwbGF5PXN3YXBcIik7XG5AaW1wb3J0IHVybChcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9QmVya3NoaXJlK1N3YXNoJmZhbWlseT1EYW5jaW5nK1NjcmlwdCZkaXNwbGF5PXN3YXBcIik7XG5ib2R5IHtcbiAgcGFkZGluZy10b3A6IDBweDtcbiAgcGFkZGluZy1sZWZ0OiAwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBtaW4taGVpZ2h0OiAxMDAlO1xuICBoZWlnaHQ6IGF1dG87XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJvZHlCYWNrZ3JvdW5kKTtcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAzcyBsaW5lYXI7XG59XG5cbi50ZXh0LCB0ZCwgbGksIC5tZW51SWNvbiB7XG4gIGNvbG9yOiB2YXIoLS10ZXh0Q29sb3IpO1xufVxuXG4uYmllbnZlbmlkbyB7XG4gIGNvbG9yOiB2YXIoLS10ZXh0Q29sb3IpO1xuICBmb250LWZhbWlseTogXCJEYW5jaW5nIFNjcmlwdFwiLCBjdXJzaXZlO1xuICBmb250LXNpemU6IDMwcHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIG1hcmdpbi10b3A6IDMwcHg7XG59XG5cbi5tb2RlIHtcbiAgY29sb3I6IHZhcigtLW1vZGVDb2xvcik7XG59XG5cbi5tb29uLCAuc3VuIHtcbiAgcGFkZGluZzogM3B4O1xufVxuXG4ubW9vbiB7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLnN1biB7XG4gIGNvbG9yOiB5ZWxsb3c7XG59XG5cbi50aGVtZVNsaWRlIHtcbiAgcGFkZGluZzogM3B4O1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDkwMHB4KSB7XG4gIC5jYXJkRm9ybWFjaW9uIHtcbiAgICBtYXJnaW4tdG9wOiA1JTtcbiAgfVxuXG4gIC5pY29ub0NvbnRhY3RvIHtcbiAgICBmb250LXNpemU6IHgtbGFyZ2U7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGxlZnQ6IDEwJTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pY29uQ29sb3IpO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgfVxuXG4gIC5jb250YWN0b0xpc3RhIHtcbiAgICB3aWR0aDogMzAwcHg7XG4gICAgaGVpZ2h0OiAzMDBweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XG4gIH1cblxuICAubWVudSB7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cblxuICBuYXYge1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICB0b3A6IDA7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgei1pbmRleDogMjtcbiAgICBtYXJnaW46IDA7XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiA5MDBweCkge1xuICAuaWNvbm9Db250YWN0byB7XG4gICAgZm9udC1zaXplOiB4LWxhcmdlO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBsZWZ0OiAtMTBweDtcbiAgICB0b3A6IC04cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taWNvbkNvbG9yKTtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIH1cblxuICAuY29udGFjdG9MaXN0YSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xuICB9XG5cbiAgbmF2IHtcbiAgICBiYWNrZ3JvdW5kOiBibGFjaztcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcGFkZGluZzogMTBweCAwcHggMTBweCAwcHg7XG4gICAgei1pbmRleDogMjtcbiAgICBib3gtc2hhZG93OiAwcHggMTVweCAyMHB4ICMyNGFhMmI7XG4gIH1cbn1cbi5jZW50cmFkbyB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLnRpdHVsbyB7XG4gIGNvbG9yOiB2YXIoLS10aXRsZSk7XG4gIGZvbnQtZmFtaWx5OiBcIkFsbGFuXCIsIGN1cnNpdmU7XG4gIGZvbnQtc2l6ZTogNDBweDtcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcbn1cblxuLmJvdG9uZXMtbmF2YmFyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XG4gIGZsZXgtd3JhcDogbm93cmFwO1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmJvdG9uLW5hdmVnYWNpb24ge1xuICBtYXJnaW4tbGVmdDogMjBweDtcbn1cbi5ib3Rvbi1uYXZlZ2FjaW9uOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xuICBjb2xvcjogYmxhY2s7XG59XG4uYm90b24tbmF2ZWdhY2lvbjphY3RpdmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBibHVlO1xufVxuXG4uY2FyZCwgLmNhcmRDZW50cmFkYSB7XG4gIG1hcmdpbi10b3A6IDEwJTtcbn1cblxuLmNhcmQge1xuICBtYXgtd2lkdGg6IDQwMHB4O1xuICBib3gtc2hhZG93OiAxMHB4IDMwcHggMzBweCB2YXIoLS1zaGFkb3dDb2xvcik7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWZvcm1hY2lvbkNvbG9yKTtcbn1cblxuLmNhcmRDZW50cmFkYSB7XG4gIG1hcmdpbjogYXV0bztcbiAgd2lkdGg6IDUwJTtcbiAgbWluLXdpZHRoOiAyNTBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG59XG5cbnNlY3Rpb24ge1xuICBwYWRkaW5nOiA2JSAxMCUgNCUgMTAlO1xufVxuXG50YWJsZSB7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1mb3JtYWNpb25Db2xvcik7XG59XG5cbi5ib3RvbmVzLXNsaWRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICBhbGlnbi1pdGVtczogYmFzZWxpbmU7XG4gIHBhZGRpbmc6IDAlIDEwJSA1JSAxMCU7XG59XG5cbi5wYWdpbmF0b3Ige1xuICBjb2xvcjogdmFyKC0tcGFnaW5hdG9yQ29sb3IpO1xufVxuXG5oNCB7XG4gIGNvbG9yOiB2YXIoLS1zdWJ0aXRsZUNvbG9yKTtcbn1cblxuLmJvdG9uU2xpZGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG59XG5cbi5iYXJyYSB7XG4gIHdpZHRoOiAyMCU7XG59XG5cbi5sb2dvIHtcbiAgd2lkdGg6IDQwJTtcbiAgcGFkZGluZy1sZWZ0OiAzMHB4O1xufVxuXG4uZW5jYWJlemFkbyB7XG4gIGJhY2tncm91bmQtY29sb3I6IGRhcmt2aW9sZXQ7XG59XG5cbi5jYXJkRm9ybWFjaW9uIHtcbiAgd2lkdGg6IGF1dG87XG4gIGJveC1zaGFkb3c6IDEwcHggMzBweCAzMHB4ICNhNzQyNDI7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWZvcm1hY2lvbkNvbG9yKTtcbn1cblxuLmhlYWRlci1jYXJkIHtcbiAgbWFyZ2luLWxlZnQ6IDEwJTtcbn1cblxuLmVtcHJlc2Ege1xuICBjb2xvcjogcmVkO1xufVxuXG4ucHVlc3RvIHtcbiAgY29sb3I6IGdyZWVueWVsbG93O1xufVxuXG4udGV4dG8ge1xuICBwYWRkaW5nOiAyNSUgMCUgMjUlIDAlO1xuICB3aWR0aDogMjAwcHg7XG4gIGhlaWdodDogMjAwcHg7XG59XG5cbi5taXRhZCB7XG4gIHdpZHRoOiA1MCU7XG4gIGhlaWdodDogNTAlO1xuICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xufVxuXG4uZG9zQ29sdW1uYXMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93LXJldmVyc2U7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5jb2x1bW5hc1Jlc3BvbnNpdmFzIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmNvbHVtbmFEb3Mge1xuICBtYXJnaW4tbGVmdDogMjAlO1xufVxuXG4uY29udGFjdG9JdGVtIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuOjpuZy1kZWVwIGEge1xuICBjb2xvcjogYWxpY2VibHVlO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbi5lbmxhY2Uge1xuICBjb2xvcjogcmdiYSg0NCwgMTk5LCAxMzQsIDAuNzgxKTtcbn1cblxuOjpuZy1kZWVwIC5iYWNrZHJvcEJhY2tncm91bmQge1xuICBiYWNrZHJvcC1maWx0ZXI6IGJyaWdodG5lc3MoMC44KSBibHVyKDEwcHgpO1xufVxuXG4vKiBib2R5IHtcbiAgICBiYWNrZ3JvdW5kOiByZ2IoMjcsMjAsMTQyKTtcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsIHJnYmEoMjcsMjAsMTQyLDEpIDE2JSwgcmdiYSg0OSwxNzUsMTE0LDEpIDc4JSwgcmdiYSgyNTUsNDEsMCwxKSAxMDAlKTtcbn0gKi9cbnAsIGgyIHtcbiAgY29sb3I6IHdoaXRlO1xufSJdfQ== */"], data: { animation: [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('insertRemoveTrigger', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':enter', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["useAnimation"])(_animations__WEBPACK_IMPORTED_MODULE_1__["changeOpacityAnimation"], {
                        params: {
                            time: '5s'
                        }
                    })
                ])
            ])
        ] } });


/***/ }),

/***/ "EOyz":
/*!*****************************************************************!*\
  !*** ./src/app/components/experiencia/experiencia.component.ts ***!
  \*****************************************************************/
/*! exports provided: ExperienciaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExperienciaComponent", function() { return ExperienciaComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");



function ExperienciaComponent_div_5_span_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const experiencia_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("- Fin: ", experiencia_r1.fin, " ");
} }
function ExperienciaComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-card-title", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-card-subtitle", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, ExperienciaComponent_div_5_span_10_Template, 2, 1, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const experiencia_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](experiencia_r1.empresa);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Puesto: ", experiencia_r1.puesto, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "./assets/", experiencia_r1.logo, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Inicio: ", experiencia_r1.inicio, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", experiencia_r1.fin.lenght > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](experiencia_r1.descripcion);
} }
const EXPERIENCIA = [
    { empresa: "OneInfo Consulting", inicio: "Marzo 2021", fin: "", puesto: "Desarrollador web fullstack", descripcion: "Desarrollo de frontend en React y Angular. Trato con clientes en reuniones y demostraciones. Ayudé a otros colaboradores de la empresa que requerían asistencia en proyectos que no participé. Mi puesto en OneInfo Consulting es el primero como desarrollador.", logo: "oneinfoconsulting.png" },
];
class ExperienciaComponent {
    constructor() { }
    ngOnInit() {
        this.experiencias = EXPERIENCIA;
        this.experiencias[0].logo = this.experiencias[0].logo.toLowerCase();
    }
}
ExperienciaComponent.ɵfac = function ExperienciaComponent_Factory(t) { return new (t || ExperienciaComponent)(); };
ExperienciaComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ExperienciaComponent, selectors: [["app-experiencia"]], decls: 6, vars: 1, consts: [[1, "centrado"], [1, "titulo"], ["class", "responsive", 4, "ngFor", "ngForOf"], [1, "responsive"], [1, "card"], [1, "header-card"], [1, "empresa"], [1, "puesto"], [3, "src"], [1, "text"], [4, "ngIf"]], template: function ExperienciaComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "body");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "section");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Experiencia");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ExperienciaComponent_div_5_Template, 13, 6, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.experiencias);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCardSubtitle"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"]], styles: ["@import url(\"https://fonts.googleapis.com/css2?family=Dancing+Script&display=swap\");\n@import url(\"https://fonts.googleapis.com/css2?family=Berkshire+Swash&family=Dancing+Script&display=swap\");\nbody[_ngcontent-%COMP%] {\n  padding-top: 0px;\n  padding-left: 0px;\n  width: 100%;\n  min-height: 100%;\n  height: auto;\n  background-color: var(--bodyBackground);\n  transition: background-color 3s linear;\n}\n.text[_ngcontent-%COMP%], td[_ngcontent-%COMP%], li[_ngcontent-%COMP%], .menuIcon[_ngcontent-%COMP%] {\n  color: var(--textColor);\n}\n.bienvenido[_ngcontent-%COMP%] {\n  color: var(--textColor);\n  font-family: \"Dancing Script\", cursive;\n  font-size: 30px;\n  font-weight: 500;\n  margin-top: 30px;\n}\n.mode[_ngcontent-%COMP%] {\n  color: var(--modeColor);\n}\n.moon[_ngcontent-%COMP%], .sun[_ngcontent-%COMP%] {\n  padding: 3px;\n}\n.moon[_ngcontent-%COMP%] {\n  color: white;\n}\n.sun[_ngcontent-%COMP%] {\n  color: yellow;\n}\n.themeSlide[_ngcontent-%COMP%] {\n  padding: 3px;\n  display: inline-flex;\n  align-items: center;\n}\n@media (max-width: 900px) {\n  .cardFormacion[_ngcontent-%COMP%] {\n    margin-top: 5%;\n  }\n\n  .iconoContacto[_ngcontent-%COMP%] {\n    font-size: x-large;\n    position: absolute;\n    left: 10%;\n    background-color: var(--iconColor);\n    border-radius: 50%;\n  }\n\n  .contactoLista[_ngcontent-%COMP%] {\n    width: 300px;\n    height: 300px;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-evenly;\n  }\n\n  .menu[_ngcontent-%COMP%] {\n    color: white;\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between;\n    width: 100%;\n  }\n\n  nav[_ngcontent-%COMP%] {\n    position: fixed;\n    top: 0;\n    width: 100%;\n    z-index: 2;\n    margin: 0;\n  }\n}\n@media (min-width: 900px) {\n  .iconoContacto[_ngcontent-%COMP%] {\n    font-size: x-large;\n    position: relative;\n    left: -10px;\n    top: -8px;\n    background-color: var(--iconColor);\n    border-radius: 50%;\n  }\n\n  .contactoLista[_ngcontent-%COMP%] {\n    width: 100%;\n    display: flex;\n    flex-direction: row;\n    justify-content: space-evenly;\n  }\n\n  nav[_ngcontent-%COMP%] {\n    background: black;\n    position: fixed;\n    top: 0;\n    left: 0;\n    width: 100%;\n    padding: 10px 0px 10px 0px;\n    z-index: 2;\n    box-shadow: 0px 15px 20px #24aa2b;\n  }\n}\n.centrado[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.titulo[_ngcontent-%COMP%] {\n  color: var(--title);\n  font-family: \"Allan\", cursive;\n  font-size: 40px;\n  margin-bottom: 30px;\n}\n.botones-navbar[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-evenly;\n  flex-wrap: nowrap;\n  width: 100%;\n}\n.boton-navegacion[_ngcontent-%COMP%] {\n  margin-left: 20px;\n}\n.boton-navegacion[_ngcontent-%COMP%]:hover {\n  background-color: red;\n  color: black;\n}\n.boton-navegacion[_ngcontent-%COMP%]:active {\n  background-color: blue;\n}\n.card[_ngcontent-%COMP%], .cardCentrada[_ngcontent-%COMP%] {\n  margin-top: 10%;\n}\n.card[_ngcontent-%COMP%] {\n  max-width: 400px;\n  box-shadow: 10px 30px 30px var(--shadowColor);\n  background-color: var(--formacionColor);\n}\n.cardCentrada[_ngcontent-%COMP%] {\n  margin: auto;\n  width: 50%;\n  min-width: 250px;\n  background-color: transparent;\n}\nsection[_ngcontent-%COMP%] {\n  padding: 6% 10% 4% 10%;\n}\ntable[_ngcontent-%COMP%] {\n  width: 100%;\n  background-color: var(--formacionColor);\n}\n.botones-slider[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-around;\n  align-items: baseline;\n  padding: 0% 10% 5% 10%;\n}\n.paginator[_ngcontent-%COMP%] {\n  color: var(--paginatorColor);\n}\nh4[_ngcontent-%COMP%] {\n  color: var(--subtitleColor);\n}\n.botonSlider[_ngcontent-%COMP%] {\n  background-color: white;\n}\n.barra[_ngcontent-%COMP%] {\n  width: 20%;\n}\n.logo[_ngcontent-%COMP%] {\n  width: 40%;\n  padding-left: 30px;\n}\n.encabezado[_ngcontent-%COMP%] {\n  background-color: darkviolet;\n}\n.cardFormacion[_ngcontent-%COMP%] {\n  width: auto;\n  box-shadow: 10px 30px 30px #a74242;\n  background-color: var(--formacionColor);\n}\n.header-card[_ngcontent-%COMP%] {\n  margin-left: 10%;\n}\n.empresa[_ngcontent-%COMP%] {\n  color: red;\n}\n.puesto[_ngcontent-%COMP%] {\n  color: greenyellow;\n}\n.texto[_ngcontent-%COMP%] {\n  padding: 25% 0% 25% 0%;\n  width: 200px;\n  height: 200px;\n}\n.mitad[_ngcontent-%COMP%] {\n  width: 50%;\n  height: 50%;\n  padding-right: 20px;\n}\n.dosColumnas[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row-reverse;\n  align-items: center;\n}\n.columnasResponsivas[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n}\n.columnaDos[_ngcontent-%COMP%] {\n  margin-left: 20%;\n}\n.contactoItem[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  cursor: pointer;\n}\n  a {\n  color: aliceblue;\n  text-decoration: none;\n}\n.enlace[_ngcontent-%COMP%] {\n  color: rgba(44, 199, 134, 0.781);\n}\n  .backdropBackground {\n  -webkit-backdrop-filter: brightness(0.8) blur(10px);\n          backdrop-filter: brightness(0.8) blur(10px);\n}\n\n.responsive[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-evenly;\n  align-items: center;\n  flex-wrap: wrap;\n  padding-top: 0%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXGFwcC5jb21wb25lbnQuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFxleHBlcmllbmNpYS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBUSxtRkFBQTtBQUNBLDBHQUFBO0FBaUJSO0VBQ0UsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSx1Q0FwQmU7RUFxQmYsc0NBQUE7QUNmRjtBRGtCQTtFQUNFLHVCQXZCVTtBQ1FaO0FEa0JBO0VBQ0UsdUJBM0JVO0VBNEJWLHNDQW5CUTtFQW9CUixlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBQ2ZGO0FEa0JBO0VBQ0UsdUJBNUJVO0FDYVo7QURrQkE7RUFDRSxZQUFBO0FDZkY7QURrQkE7RUFDRSxZQUFBO0FDZkY7QURrQkE7RUFDRSxhQUFBO0FDZkY7QURrQkE7RUFDRSxZQUFBO0VBQ0Esb0JBQUE7RUFDQSxtQkFBQTtBQ2ZGO0FEa0JBO0VBRUU7SUFDRSxjQUFBO0VDaEJGOztFRG1CQTtJQUNFLGtCQUFBO0lBQ0Esa0JBQUE7SUFDQSxTQUFBO0lBQ0Esa0NBNURRO0lBNkRSLGtCQUFBO0VDaEJGOztFRG1CQTtJQUNFLFlBN0RHO0lBOERILGFBOURHO0lBK0RILGFBQUE7SUFDQSxzQkFBQTtJQUNBLDZCQUFBO0VDaEJGOztFRG1CQTtJQUNFLFlBQUE7SUFDQSxhQUFBO0lBQ0EsbUJBQUE7SUFDQSw4QkFBQTtJQUNBLFdBQUE7RUNoQkY7O0VEbUJBO0lBQ0UsZUFBQTtJQUNBLE1BQUE7SUFDQSxXQUFBO0lBQ0EsVUFBQTtJQUNBLFNBQUE7RUNoQkY7QUFDRjtBRG9CQTtFQUVFO0lBQ0Usa0JBQUE7SUFDQSxrQkFBQTtJQUNBLFdBQUE7SUFDQSxTQUFBO0lBQ0Esa0NBakdRO0lBa0dSLGtCQUFBO0VDbkJGOztFRHNCQTtJQUNFLFdBQUE7SUFDQSxhQUFBO0lBQ0EsbUJBQUE7SUFDQSw2QkFBQTtFQ25CRjs7RURzQkE7SUFDRSxpQkFBQTtJQUNBLGVBQUE7SUFDQSxNQUFBO0lBQ0EsT0FBQTtJQUNBLFdBQUE7SUFDQSwwQkFBQTtJQUNBLFVBQUE7SUFDQSxpQ0FBQTtFQ25CRjtBQUNGO0FEc0JBO0VBQ0Usa0JBQUE7QUNwQkY7QUR1QkE7RUFDRSxtQkFwSU07RUFxSU4sNkJBNUhNO0VBNkhOLGVBQUE7RUFDQSxtQkFBQTtBQ3BCRjtBRHVCQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDZCQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0FDcEJGO0FEdUJBO0VBQ0ksaUJBQUE7QUNwQko7QURzQkk7RUFDSSxxQkFBQTtFQUNBLFlBQUE7QUNwQlI7QUR1Qkk7RUFDSSxzQkFBQTtBQ3JCUjtBRHlCQTtFQUNFLGVBQUE7QUN0QkY7QUR5QkE7RUFDRSxnQkFBQTtFQUNBLDZDQUFBO0VBQ0EsdUNBbEtlO0FDNElqQjtBRHlCQTtFQUNFLFlBQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSw2QkFBQTtBQ3RCRjtBRHlCQTtFQUNFLHNCQUFBO0FDdEJGO0FEeUJBO0VBQ0UsV0FBQTtFQUNBLHVDQWxMZTtBQzRKakI7QUR5QkE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw2QkFBQTtFQUNBLHFCQUFBO0VBQ0Esc0JBQUE7QUN0QkY7QUR5QkE7RUFDRSw0QkFoTWU7QUMwS2pCO0FEeUJBO0VBQ0UsMkJBbk1jO0FDNktoQjtBRHlCQTtFQUNFLHVCQUFBO0FDdEJGO0FEeUJBO0VBQ0UsVUFBQTtBQ3RCRjtBRHlCQTtFQUNFLFVBQUE7RUFDQSxrQkFBQTtBQ3RCRjtBRHlCQTtFQUNFLDRCQUFBO0FDdEJGO0FEeUJBO0VBQ0UsV0FBQTtFQUNBLGtDQUFBO0VBQ0EsdUNBek5lO0FDbU1qQjtBRHlCQTtFQUNFLGdCQUFBO0FDdEJGO0FEeUJBO0VBQ0UsVUFBQTtBQ3RCRjtBRHlCQTtFQUNFLGtCQUFBO0FDdEJGO0FEeUJBO0VBQ0Usc0JBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtBQ3RCRjtBRHlCQTtFQUNFLFVBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7QUN0QkY7QUR5QkE7RUFDRSxhQUFBO0VBQ0EsMkJBQUE7RUFDQSxtQkFBQTtBQ3RCRjtBRHlCQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0FDdEJGO0FEeUJBO0VBQ0UsZ0JBQUE7QUN0QkY7QUR5QkE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGVBQUE7QUN0QkY7QUR5QkE7RUFDRSxnQkFBQTtFQUNBLHFCQUFBO0FDdEJGO0FEeUJBO0VBQ0UsZ0NBQUE7QUN0QkY7QUR5QkE7RUFDRSxtREFBQTtVQUFBLDJDQUFBO0FDdEJGO0FBdFFBOzs7R0FBQTtBQUtBO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsNkJBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0FBd1FKIiwiZmlsZSI6ImV4cGVyaWVuY2lhLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9RGFuY2luZytTY3JpcHQmZGlzcGxheT1zd2FwJyk7XHJcbkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUJlcmtzaGlyZStTd2FzaCZmYW1pbHk9RGFuY2luZytTY3JpcHQmZGlzcGxheT1zd2FwJyk7XHJcblxyXG4vL3ZhcmlhYmxlc1xyXG4kYm9keUJhY2tncm91bmQ6IHZhcigtLWJvZHlCYWNrZ3JvdW5kKTtcclxuJHRpdGxlOiB2YXIoLS10aXRsZSk7XHJcbiR0ZXh0Q29sb3I6IHZhcigtLXRleHRDb2xvcik7XHJcbiRwYWdpbmF0b3Jjb2xvcjogdmFyKC0tcGFnaW5hdG9yQ29sb3IpO1xyXG4kc3VidGl0bGVDb2xvcjogdmFyKC0tc3VidGl0bGVDb2xvcik7XHJcbiRmb3JtYWNpb25Db2xvcjogdmFyKC0tZm9ybWFjaW9uQ29sb3IpO1xyXG4kc2hhZG93Q29sb3I6IHZhcigtLXNoYWRvd0NvbG9yKTtcclxuJGFydGljbGVDb2xvcjogdmFyKC0tYXJ0aWNsZUNvbG9yKTtcclxuJGljb25Db2xvcjogdmFyKC0taWNvbkNvbG9yKTtcclxuJG1vZGVDb2xvcjogdmFyKC0tbW9kZUNvbG9yKTtcclxuJGFsbGFuOiAnQWxsYW4nLCBjdXJzaXZlO1xyXG4kZGFuY2luZzogJ0RhbmNpbmcgU2NyaXB0JywgY3Vyc2l2ZTtcclxuJHNpemU6IDMwMHB4O1xyXG5cclxuYm9keSB7XHJcbiAgcGFkZGluZy10b3A6IDBweDtcclxuICBwYWRkaW5nLWxlZnQ6IDBweDtcclxuICB3aWR0aDogMTAwJTtcclxuICBtaW4taGVpZ2h0OiAxMDAlO1xyXG4gIGhlaWdodDogYXV0bztcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkYm9keUJhY2tncm91bmQ7XHJcbiAgdHJhbnNpdGlvbjogIGJhY2tncm91bmQtY29sb3IgM3MgbGluZWFyO1xyXG59XHJcblxyXG4udGV4dCwgdGQsIGxpLCAubWVudUljb24ge1xyXG4gIGNvbG9yOiAkdGV4dENvbG9yO1xyXG59XHJcblxyXG4uYmllbnZlbmlkbyB7XHJcbiAgY29sb3I6ICR0ZXh0Q29sb3I7XHJcbiAgZm9udC1mYW1pbHk6ICRkYW5jaW5nO1xyXG4gIGZvbnQtc2l6ZTogMzBweDtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG4gIG1hcmdpbi10b3A6IDMwcHg7XHJcbn1cclxuXHJcbi5tb2RlIHtcclxuICBjb2xvcjogJG1vZGVDb2xvcjtcclxufVxyXG5cclxuLm1vb24sIC5zdW4ge1xyXG4gIHBhZGRpbmc6IDNweDtcclxufVxyXG5cclxuLm1vb24ge1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLnN1biB7XHJcbiAgY29sb3I6IHllbGxvdztcclxufVxyXG5cclxuLnRoZW1lU2xpZGUge1xyXG4gIHBhZGRpbmc6IDNweDtcclxuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogOTAwcHgpICB7XHJcblxyXG4gIC5jYXJkRm9ybWFjaW9uIHtcclxuICAgIG1hcmdpbi10b3A6IDUlO1xyXG4gIH1cclxuXHJcbiAgLmljb25vQ29udGFjdG8ge1xyXG4gICAgZm9udC1zaXplOiB4LWxhcmdlO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbGVmdDogMTAlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGljb25Db2xvcjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICB9XHJcblxyXG4gIC5jb250YWN0b0xpc3RhIHtcclxuICAgIHdpZHRoOiAkc2l6ZTtcclxuICAgIGhlaWdodDogJHNpemU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xyXG4gIH1cclxuXHJcbiAgLm1lbnUge1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcblxyXG4gIG5hdiB7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB0b3A6IDA7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHotaW5kZXg6IDI7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgfVxyXG5cclxufVxyXG5cclxuQG1lZGlhIChtaW4td2lkdGg6IDkwMHB4KSB7XHJcblxyXG4gIC5pY29ub0NvbnRhY3RvIHtcclxuICAgIGZvbnQtc2l6ZTogeC1sYXJnZTtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGxlZnQ6IC0xMHB4O1xyXG4gICAgdG9wOiAtOHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGljb25Db2xvcjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICB9XHJcblxyXG4gIC5jb250YWN0b0xpc3RhIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcclxuICB9XHJcblxyXG4gIG5hdiB7XHJcbiAgICBiYWNrZ3JvdW5kOiBibGFjaztcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHRvcDogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBhZGRpbmc6IDEwcHggMHB4IDEwcHggMHB4O1xyXG4gICAgei1pbmRleDogMjtcclxuICAgIGJveC1zaGFkb3c6IDBweCAxNXB4IDIwcHggcmdiKDM2LCAxNzAsIDQzKTtcclxuICB9XHJcbn1cclxuXHJcbi5jZW50cmFkbyB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4udGl0dWxvIHtcclxuICBjb2xvcjogJHRpdGxlO1xyXG4gIGZvbnQtZmFtaWx5OiAkYWxsYW47XHJcbiAgZm9udC1zaXplOiA0MHB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XHJcbn1cclxuXHJcbi5ib3RvbmVzLW5hdmJhciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xyXG4gIGZsZXgtd3JhcDogbm93cmFwO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uYm90b24tbmF2ZWdhY2lvbiB7XHJcbiAgICBtYXJnaW4tbGVmdDogMjBweDtcclxuXHJcbiAgICAmOmhvdmVyIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XHJcbiAgICAgICAgY29sb3I6IGJsYWNrO1xyXG4gICAgfVxyXG5cclxuICAgICY6YWN0aXZlIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibHVlO1xyXG4gICAgfVxyXG59XHJcblxyXG4uY2FyZCwgLmNhcmRDZW50cmFkYSB7XHJcbiAgbWFyZ2luLXRvcDogMTAlO1xyXG59XHJcblxyXG4uY2FyZCB7XHJcbiAgbWF4LXdpZHRoOiA0MDBweDtcclxuICBib3gtc2hhZG93OiAxMHB4IDMwcHggMzBweCAkc2hhZG93Q29sb3I7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJGZvcm1hY2lvbkNvbG9yO1xyXG59XHJcblxyXG4uY2FyZENlbnRyYWRhIHtcclxuICBtYXJnaW46IGF1dG87XHJcbiAgd2lkdGg6IDUwJTtcclxuICBtaW4td2lkdGg6IDI1MHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG59XHJcblxyXG5zZWN0aW9uIHtcclxuICBwYWRkaW5nOiA2JSAxMCUgNCUgMTAlO1xyXG59XHJcblxyXG50YWJsZSB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJGZvcm1hY2lvbkNvbG9yO1xyXG59XHJcblxyXG4uYm90b25lcy1zbGlkZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuICBhbGlnbi1pdGVtczogYmFzZWxpbmU7XHJcbiAgcGFkZGluZzogMCUgMTAlIDUlIDEwJTtcclxufVxyXG5cclxuLnBhZ2luYXRvciB7XHJcbiAgY29sb3I6ICRwYWdpbmF0b3Jjb2xvcjtcclxufVxyXG5cclxuaDQge1xyXG4gIGNvbG9yOiRzdWJ0aXRsZUNvbG9yO1xyXG59XHJcblxyXG4uYm90b25TbGlkZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4uYmFycmEge1xyXG4gIHdpZHRoOiAyMCU7XHJcbn1cclxuXHJcbi5sb2dvIHtcclxuICB3aWR0aDogNDAlO1xyXG4gIHBhZGRpbmctbGVmdDogMzBweDtcclxufVxyXG5cclxuLmVuY2FiZXphZG8ge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGRhcmt2aW9sZXQ7XHJcbn1cclxuXHJcbi5jYXJkRm9ybWFjaW9uIHtcclxuICB3aWR0aDogYXV0bztcclxuICBib3gtc2hhZG93OiAxMHB4IDMwcHggMzBweCByZ2IoMTY3LCA2NiwgNjYpO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICRmb3JtYWNpb25Db2xvcjtcclxufVxyXG5cclxuLmhlYWRlci1jYXJkIHtcclxuICBtYXJnaW4tbGVmdDogMTAlO1xyXG59XHJcblxyXG4uZW1wcmVzYSB7XHJcbiAgY29sb3I6IHJlZDtcclxufVxyXG5cclxuLnB1ZXN0byB7XHJcbiAgY29sb3I6IGdyZWVueWVsbG93O1xyXG59XHJcblxyXG4udGV4dG8ge1xyXG4gIHBhZGRpbmc6IDI1JSAwJSAyNSUgMCU7XHJcbiAgd2lkdGg6IDIwMHB4O1xyXG4gIGhlaWdodDogMjAwcHg7XHJcbn1cclxuXHJcbi5taXRhZCB7XHJcbiAgd2lkdGg6IDUwJTtcclxuICBoZWlnaHQ6IDUwJTtcclxuICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xyXG59XHJcblxyXG4uZG9zQ29sdW1uYXMge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdy1yZXZlcnNlO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5jb2x1bW5hc1Jlc3BvbnNpdmFzIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLmNvbHVtbmFEb3Mge1xyXG4gIG1hcmdpbi1sZWZ0OiAyMCU7XHJcbn1cclxuXHJcbi5jb250YWN0b0l0ZW0ge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsgIFxyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuOjpuZy1kZWVwIGEge1xyXG4gIGNvbG9yOiBhbGljZWJsdWU7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG59XHJcblxyXG4uZW5sYWNlIHtcclxuICBjb2xvcjogcmdiYSg0NCwgMTk5LCAxMzQsIDAuNzgxKTtcclxufVxyXG5cclxuOjpuZy1kZWVwIC5iYWNrZHJvcEJhY2tncm91bmQge1xyXG4gIGJhY2tkcm9wLWZpbHRlcjogYnJpZ2h0bmVzcygwLjgpIGJsdXIoMTBweCk7XHJcbn0iLCJAaW1wb3J0IHVybChcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9RGFuY2luZytTY3JpcHQmZGlzcGxheT1zd2FwXCIpO1xuQGltcG9ydCB1cmwoXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUJlcmtzaGlyZStTd2FzaCZmYW1pbHk9RGFuY2luZytTY3JpcHQmZGlzcGxheT1zd2FwXCIpO1xuYm9keSB7XG4gIHBhZGRpbmctdG9wOiAwcHg7XG4gIHBhZGRpbmctbGVmdDogMHB4O1xuICB3aWR0aDogMTAwJTtcbiAgbWluLWhlaWdodDogMTAwJTtcbiAgaGVpZ2h0OiBhdXRvO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ib2R5QmFja2dyb3VuZCk7XG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgM3MgbGluZWFyO1xufVxuXG4udGV4dCwgdGQsIGxpLCAubWVudUljb24ge1xuICBjb2xvcjogdmFyKC0tdGV4dENvbG9yKTtcbn1cblxuLmJpZW52ZW5pZG8ge1xuICBjb2xvcjogdmFyKC0tdGV4dENvbG9yKTtcbiAgZm9udC1mYW1pbHk6IFwiRGFuY2luZyBTY3JpcHRcIiwgY3Vyc2l2ZTtcbiAgZm9udC1zaXplOiAzMHB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBtYXJnaW4tdG9wOiAzMHB4O1xufVxuXG4ubW9kZSB7XG4gIGNvbG9yOiB2YXIoLS1tb2RlQ29sb3IpO1xufVxuXG4ubW9vbiwgLnN1biB7XG4gIHBhZGRpbmc6IDNweDtcbn1cblxuLm1vb24ge1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5zdW4ge1xuICBjb2xvcjogeWVsbG93O1xufVxuXG4udGhlbWVTbGlkZSB7XG4gIHBhZGRpbmc6IDNweDtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA5MDBweCkge1xuICAuY2FyZEZvcm1hY2lvbiB7XG4gICAgbWFyZ2luLXRvcDogNSU7XG4gIH1cblxuICAuaWNvbm9Db250YWN0byB7XG4gICAgZm9udC1zaXplOiB4LWxhcmdlO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBsZWZ0OiAxMCU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taWNvbkNvbG9yKTtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIH1cblxuICAuY29udGFjdG9MaXN0YSB7XG4gICAgd2lkdGg6IDMwMHB4O1xuICAgIGhlaWdodDogMzAwcHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xuICB9XG5cbiAgLm1lbnUge1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG5cbiAgbmF2IHtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgdG9wOiAwO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHotaW5kZXg6IDI7XG4gICAgbWFyZ2luOiAwO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogOTAwcHgpIHtcbiAgLmljb25vQ29udGFjdG8ge1xuICAgIGZvbnQtc2l6ZTogeC1sYXJnZTtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgbGVmdDogLTEwcHg7XG4gICAgdG9wOiAtOHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWljb25Db2xvcik7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICB9XG5cbiAgLmNvbnRhY3RvTGlzdGEge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcbiAgfVxuXG4gIG5hdiB7XG4gICAgYmFja2dyb3VuZDogYmxhY2s7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBhZGRpbmc6IDEwcHggMHB4IDEwcHggMHB4O1xuICAgIHotaW5kZXg6IDI7XG4gICAgYm94LXNoYWRvdzogMHB4IDE1cHggMjBweCAjMjRhYTJiO1xuICB9XG59XG4uY2VudHJhZG8ge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi50aXR1bG8ge1xuICBjb2xvcjogdmFyKC0tdGl0bGUpO1xuICBmb250LWZhbWlseTogXCJBbGxhblwiLCBjdXJzaXZlO1xuICBmb250LXNpemU6IDQwcHg7XG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XG59XG5cbi5ib3RvbmVzLW5hdmJhciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xuICBmbGV4LXdyYXA6IG5vd3JhcDtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5ib3Rvbi1uYXZlZ2FjaW9uIHtcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XG59XG4uYm90b24tbmF2ZWdhY2lvbjpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcbiAgY29sb3I6IGJsYWNrO1xufVxuLmJvdG9uLW5hdmVnYWNpb246YWN0aXZlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogYmx1ZTtcbn1cblxuLmNhcmQsIC5jYXJkQ2VudHJhZGEge1xuICBtYXJnaW4tdG9wOiAxMCU7XG59XG5cbi5jYXJkIHtcbiAgbWF4LXdpZHRoOiA0MDBweDtcbiAgYm94LXNoYWRvdzogMTBweCAzMHB4IDMwcHggdmFyKC0tc2hhZG93Q29sb3IpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1mb3JtYWNpb25Db2xvcik7XG59XG5cbi5jYXJkQ2VudHJhZGEge1xuICBtYXJnaW46IGF1dG87XG4gIHdpZHRoOiA1MCU7XG4gIG1pbi13aWR0aDogMjUwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xufVxuXG5zZWN0aW9uIHtcbiAgcGFkZGluZzogNiUgMTAlIDQlIDEwJTtcbn1cblxudGFibGUge1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZm9ybWFjaW9uQ29sb3IpO1xufVxuXG4uYm90b25lcy1zbGlkZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgYWxpZ24taXRlbXM6IGJhc2VsaW5lO1xuICBwYWRkaW5nOiAwJSAxMCUgNSUgMTAlO1xufVxuXG4ucGFnaW5hdG9yIHtcbiAgY29sb3I6IHZhcigtLXBhZ2luYXRvckNvbG9yKTtcbn1cblxuaDQge1xuICBjb2xvcjogdmFyKC0tc3VidGl0bGVDb2xvcik7XG59XG5cbi5ib3RvblNsaWRlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xufVxuXG4uYmFycmEge1xuICB3aWR0aDogMjAlO1xufVxuXG4ubG9nbyB7XG4gIHdpZHRoOiA0MCU7XG4gIHBhZGRpbmctbGVmdDogMzBweDtcbn1cblxuLmVuY2FiZXphZG8ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrdmlvbGV0O1xufVxuXG4uY2FyZEZvcm1hY2lvbiB7XG4gIHdpZHRoOiBhdXRvO1xuICBib3gtc2hhZG93OiAxMHB4IDMwcHggMzBweCAjYTc0MjQyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1mb3JtYWNpb25Db2xvcik7XG59XG5cbi5oZWFkZXItY2FyZCB7XG4gIG1hcmdpbi1sZWZ0OiAxMCU7XG59XG5cbi5lbXByZXNhIHtcbiAgY29sb3I6IHJlZDtcbn1cblxuLnB1ZXN0byB7XG4gIGNvbG9yOiBncmVlbnllbGxvdztcbn1cblxuLnRleHRvIHtcbiAgcGFkZGluZzogMjUlIDAlIDI1JSAwJTtcbiAgd2lkdGg6IDIwMHB4O1xuICBoZWlnaHQ6IDIwMHB4O1xufVxuXG4ubWl0YWQge1xuICB3aWR0aDogNTAlO1xuICBoZWlnaHQ6IDUwJTtcbiAgcGFkZGluZy1yaWdodDogMjBweDtcbn1cblxuLmRvc0NvbHVtbmFzIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdy1yZXZlcnNlO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uY29sdW1uYXNSZXNwb25zaXZhcyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5jb2x1bW5hRG9zIHtcbiAgbWFyZ2luLWxlZnQ6IDIwJTtcbn1cblxuLmNvbnRhY3RvSXRlbSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbjo6bmctZGVlcCBhIHtcbiAgY29sb3I6IGFsaWNlYmx1ZTtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG4uZW5sYWNlIHtcbiAgY29sb3I6IHJnYmEoNDQsIDE5OSwgMTM0LCAwLjc4MSk7XG59XG5cbjo6bmctZGVlcCAuYmFja2Ryb3BCYWNrZ3JvdW5kIHtcbiAgYmFja2Ryb3AtZmlsdGVyOiBicmlnaHRuZXNzKDAuOCkgYmx1cigxMHB4KTtcbn1cblxuLyogYm9keSB7XG4gICAgYmFja2dyb3VuZDogcmdiKDI3LDIwLDE0Mik7XG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDkwZGVnLCByZ2JhKDQ5LDE3NSwxMTQsMSkgMTAlLCByZ2JhKDI1NSw0MSwwLDEpIDUwJSwgIHJnYmEoMjcsMjAsMTQyLDEpMTAwJSk7XG59ICovXG4ucmVzcG9uc2l2ZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIHBhZGRpbmctdG9wOiAwJTtcbn0iXX0= */"] });


/***/ }),

/***/ "HhPq":
/*!********************************************************************!*\
  !*** ./src/app/services/mobileDetector/mobile-detector.service.ts ***!
  \********************************************************************/
/*! exports provided: MobileDetectorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MobileDetectorService", function() { return MobileDetectorService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class MobileDetectorService {
    constructor() { }
    isMobile() {
        let check = false;
        ((a) => { if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|iPad|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4)))
            check = true; })(navigator.userAgent || navigator.vendor);
        return check;
    }
}
MobileDetectorService.ɵfac = function MobileDetectorService_Factory(t) { return new (t || MobileDetectorService)(); };
MobileDetectorService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: MobileDetectorService, factory: MobileDetectorService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "J1Ni":
/*!*******************************!*\
  !*** ./src/app/animations.ts ***!
  \*******************************/
/*! exports provided: transitionAnimation, flyInTopAnimation, flyInOutAnimation, changeOpacityAnimation, rotateAnimation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "transitionAnimation", function() { return transitionAnimation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "flyInTopAnimation", function() { return flyInTopAnimation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "flyInOutAnimation", function() { return flyInOutAnimation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "changeOpacityAnimation", function() { return changeOpacityAnimation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rotateAnimation", function() { return rotateAnimation; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "R0Ic");

const transitionAnimation = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animation"])([
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
        height: '{{ height }}',
        opacity: '{{ opacity }}',
        backgroundColor: '{{ backgroundColor }}',
        backdropFilter: 'opacity(20%)',
    }),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('{{ time }}')
]);
const flyInTopAnimation = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animation"])([
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
        transform: 'translateY(-100%)',
    }),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('3s')
]);
const flyInOutAnimation = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animation"])([
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
        transform: 'translateX(-100%)',
    }),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('{{time}}')
]);
const changeOpacityAnimation = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animation"])([
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
        opacity: '0',
    }),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('{{time}}', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 1 }))
]);
const rotateAnimation = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animation"])([
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
        transform: 'rotate(0)',
    }),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('1500ms ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'rotate(-360deg)' })),
]);


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/navbar/navbar.component */ "hrlM");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/home/home.component */ "BuFo");
/* harmony import */ var _components_formacion_formacion_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/formacion/formacion.component */ "fTPQ");
/* harmony import */ var _components_experiencia_experiencia_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/experiencia/experiencia.component */ "EOyz");
/* harmony import */ var _components_contacto_contacto_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/contacto/contacto.component */ "gAHN");






class AppComponent {
    constructor() {
        this.title = 'paginaPersonal';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 10, vars: 0, consts: [["id", "home"], ["id", "formacion"], ["id", "experiencia"], ["id", "contacto"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "body");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-navbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-formacion");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "app-experiencia");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "app-contacto");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__["NavbarComponent"], _components_home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"], _components_formacion_formacion_component__WEBPACK_IMPORTED_MODULE_3__["FormacionComponent"], _components_experiencia_experiencia_component__WEBPACK_IMPORTED_MODULE_4__["ExperienciaComponent"], _components_contacto_contacto_component__WEBPACK_IMPORTED_MODULE_5__["ContactoComponent"]], styles: ["@import url(\"https://fonts.googleapis.com/css2?family=Dancing+Script&display=swap\");\n@import url(\"https://fonts.googleapis.com/css2?family=Berkshire+Swash&family=Dancing+Script&display=swap\");\nbody[_ngcontent-%COMP%] {\n  padding-top: 0px;\n  padding-left: 0px;\n  width: 100%;\n  min-height: 100%;\n  height: auto;\n  background-color: var(--bodyBackground);\n  transition: background-color 3s linear;\n}\n.text[_ngcontent-%COMP%], td[_ngcontent-%COMP%], li[_ngcontent-%COMP%], .menuIcon[_ngcontent-%COMP%] {\n  color: var(--textColor);\n}\n.bienvenido[_ngcontent-%COMP%] {\n  color: var(--textColor);\n  font-family: \"Dancing Script\", cursive;\n  font-size: 30px;\n  font-weight: 500;\n  margin-top: 30px;\n}\n.mode[_ngcontent-%COMP%] {\n  color: var(--modeColor);\n}\n.moon[_ngcontent-%COMP%], .sun[_ngcontent-%COMP%] {\n  padding: 3px;\n}\n.moon[_ngcontent-%COMP%] {\n  color: white;\n}\n.sun[_ngcontent-%COMP%] {\n  color: yellow;\n}\n.themeSlide[_ngcontent-%COMP%] {\n  padding: 3px;\n  display: inline-flex;\n  align-items: center;\n}\n@media (max-width: 900px) {\n  .cardFormacion[_ngcontent-%COMP%] {\n    margin-top: 5%;\n  }\n\n  .iconoContacto[_ngcontent-%COMP%] {\n    font-size: x-large;\n    position: absolute;\n    left: 10%;\n    background-color: var(--iconColor);\n    border-radius: 50%;\n  }\n\n  .contactoLista[_ngcontent-%COMP%] {\n    width: 300px;\n    height: 300px;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-evenly;\n  }\n\n  .menu[_ngcontent-%COMP%] {\n    color: white;\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between;\n    width: 100%;\n  }\n\n  nav[_ngcontent-%COMP%] {\n    position: fixed;\n    top: 0;\n    width: 100%;\n    z-index: 2;\n    margin: 0;\n  }\n}\n@media (min-width: 900px) {\n  .iconoContacto[_ngcontent-%COMP%] {\n    font-size: x-large;\n    position: relative;\n    left: -10px;\n    top: -8px;\n    background-color: var(--iconColor);\n    border-radius: 50%;\n  }\n\n  .contactoLista[_ngcontent-%COMP%] {\n    width: 100%;\n    display: flex;\n    flex-direction: row;\n    justify-content: space-evenly;\n  }\n\n  nav[_ngcontent-%COMP%] {\n    background: black;\n    position: fixed;\n    top: 0;\n    left: 0;\n    width: 100%;\n    padding: 10px 0px 10px 0px;\n    z-index: 2;\n    box-shadow: 0px 15px 20px #24aa2b;\n  }\n}\n.centrado[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.titulo[_ngcontent-%COMP%] {\n  color: var(--title);\n  font-family: \"Allan\", cursive;\n  font-size: 40px;\n  margin-bottom: 30px;\n}\n.botones-navbar[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-evenly;\n  flex-wrap: nowrap;\n  width: 100%;\n}\n.boton-navegacion[_ngcontent-%COMP%] {\n  margin-left: 20px;\n}\n.boton-navegacion[_ngcontent-%COMP%]:hover {\n  background-color: red;\n  color: black;\n}\n.boton-navegacion[_ngcontent-%COMP%]:active {\n  background-color: blue;\n}\n.card[_ngcontent-%COMP%], .cardCentrada[_ngcontent-%COMP%] {\n  margin-top: 10%;\n}\n.card[_ngcontent-%COMP%] {\n  max-width: 400px;\n  box-shadow: 10px 30px 30px var(--shadowColor);\n  background-color: var(--formacionColor);\n}\n.cardCentrada[_ngcontent-%COMP%] {\n  margin: auto;\n  width: 50%;\n  min-width: 250px;\n  background-color: transparent;\n}\nsection[_ngcontent-%COMP%] {\n  padding: 6% 10% 4% 10%;\n}\ntable[_ngcontent-%COMP%] {\n  width: 100%;\n  background-color: var(--formacionColor);\n}\n.botones-slider[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-around;\n  align-items: baseline;\n  padding: 0% 10% 5% 10%;\n}\n.paginator[_ngcontent-%COMP%] {\n  color: var(--paginatorColor);\n}\nh4[_ngcontent-%COMP%] {\n  color: var(--subtitleColor);\n}\n.botonSlider[_ngcontent-%COMP%] {\n  background-color: white;\n}\n.barra[_ngcontent-%COMP%] {\n  width: 20%;\n}\n.logo[_ngcontent-%COMP%] {\n  width: 40%;\n  padding-left: 30px;\n}\n.encabezado[_ngcontent-%COMP%] {\n  background-color: darkviolet;\n}\n.cardFormacion[_ngcontent-%COMP%] {\n  width: auto;\n  box-shadow: 10px 30px 30px #a74242;\n  background-color: var(--formacionColor);\n}\n.header-card[_ngcontent-%COMP%] {\n  margin-left: 10%;\n}\n.empresa[_ngcontent-%COMP%] {\n  color: red;\n}\n.puesto[_ngcontent-%COMP%] {\n  color: greenyellow;\n}\n.texto[_ngcontent-%COMP%] {\n  padding: 25% 0% 25% 0%;\n  width: 200px;\n  height: 200px;\n}\n.mitad[_ngcontent-%COMP%] {\n  width: 50%;\n  height: 50%;\n  padding-right: 20px;\n}\n.dosColumnas[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row-reverse;\n  align-items: center;\n}\n.columnasResponsivas[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n}\n.columnaDos[_ngcontent-%COMP%] {\n  margin-left: 20%;\n}\n.contactoItem[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  cursor: pointer;\n}\n  a {\n  color: aliceblue;\n  text-decoration: none;\n}\n.enlace[_ngcontent-%COMP%] {\n  color: rgba(44, 199, 134, 0.781);\n}\n  .backdropBackground {\n  -webkit-backdrop-filter: brightness(0.8) blur(10px);\n          backdrop-filter: brightness(0.8) blur(10px);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFRLG1GQUFBO0FBQ0EsMEdBQUE7QUFpQlI7RUFDRSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLHVDQXBCZTtFQXFCZixzQ0FBQTtBQWZGO0FBa0JBO0VBQ0UsdUJBdkJVO0FBUVo7QUFrQkE7RUFDRSx1QkEzQlU7RUE0QlYsc0NBbkJRO0VBb0JSLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FBZkY7QUFrQkE7RUFDRSx1QkE1QlU7QUFhWjtBQWtCQTtFQUNFLFlBQUE7QUFmRjtBQWtCQTtFQUNFLFlBQUE7QUFmRjtBQWtCQTtFQUNFLGFBQUE7QUFmRjtBQWtCQTtFQUNFLFlBQUE7RUFDQSxvQkFBQTtFQUNBLG1CQUFBO0FBZkY7QUFrQkE7RUFFRTtJQUNFLGNBQUE7RUFoQkY7O0VBbUJBO0lBQ0Usa0JBQUE7SUFDQSxrQkFBQTtJQUNBLFNBQUE7SUFDQSxrQ0E1RFE7SUE2RFIsa0JBQUE7RUFoQkY7O0VBbUJBO0lBQ0UsWUE3REc7SUE4REgsYUE5REc7SUErREgsYUFBQTtJQUNBLHNCQUFBO0lBQ0EsNkJBQUE7RUFoQkY7O0VBbUJBO0lBQ0UsWUFBQTtJQUNBLGFBQUE7SUFDQSxtQkFBQTtJQUNBLDhCQUFBO0lBQ0EsV0FBQTtFQWhCRjs7RUFtQkE7SUFDRSxlQUFBO0lBQ0EsTUFBQTtJQUNBLFdBQUE7SUFDQSxVQUFBO0lBQ0EsU0FBQTtFQWhCRjtBQUNGO0FBb0JBO0VBRUU7SUFDRSxrQkFBQTtJQUNBLGtCQUFBO0lBQ0EsV0FBQTtJQUNBLFNBQUE7SUFDQSxrQ0FqR1E7SUFrR1Isa0JBQUE7RUFuQkY7O0VBc0JBO0lBQ0UsV0FBQTtJQUNBLGFBQUE7SUFDQSxtQkFBQTtJQUNBLDZCQUFBO0VBbkJGOztFQXNCQTtJQUNFLGlCQUFBO0lBQ0EsZUFBQTtJQUNBLE1BQUE7SUFDQSxPQUFBO0lBQ0EsV0FBQTtJQUNBLDBCQUFBO0lBQ0EsVUFBQTtJQUNBLGlDQUFBO0VBbkJGO0FBQ0Y7QUFzQkE7RUFDRSxrQkFBQTtBQXBCRjtBQXVCQTtFQUNFLG1CQXBJTTtFQXFJTiw2QkE1SE07RUE2SE4sZUFBQTtFQUNBLG1CQUFBO0FBcEJGO0FBdUJBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsNkJBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7QUFwQkY7QUF1QkE7RUFDSSxpQkFBQTtBQXBCSjtBQXNCSTtFQUNJLHFCQUFBO0VBQ0EsWUFBQTtBQXBCUjtBQXVCSTtFQUNJLHNCQUFBO0FBckJSO0FBeUJBO0VBQ0UsZUFBQTtBQXRCRjtBQXlCQTtFQUNFLGdCQUFBO0VBQ0EsNkNBQUE7RUFDQSx1Q0FsS2U7QUE0SWpCO0FBeUJBO0VBQ0UsWUFBQTtFQUNBLFVBQUE7RUFDQSxnQkFBQTtFQUNBLDZCQUFBO0FBdEJGO0FBeUJBO0VBQ0Usc0JBQUE7QUF0QkY7QUF5QkE7RUFDRSxXQUFBO0VBQ0EsdUNBbExlO0FBNEpqQjtBQXlCQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDZCQUFBO0VBQ0EscUJBQUE7RUFDQSxzQkFBQTtBQXRCRjtBQXlCQTtFQUNFLDRCQWhNZTtBQTBLakI7QUF5QkE7RUFDRSwyQkFuTWM7QUE2S2hCO0FBeUJBO0VBQ0UsdUJBQUE7QUF0QkY7QUF5QkE7RUFDRSxVQUFBO0FBdEJGO0FBeUJBO0VBQ0UsVUFBQTtFQUNBLGtCQUFBO0FBdEJGO0FBeUJBO0VBQ0UsNEJBQUE7QUF0QkY7QUF5QkE7RUFDRSxXQUFBO0VBQ0Esa0NBQUE7RUFDQSx1Q0F6TmU7QUFtTWpCO0FBeUJBO0VBQ0UsZ0JBQUE7QUF0QkY7QUF5QkE7RUFDRSxVQUFBO0FBdEJGO0FBeUJBO0VBQ0Usa0JBQUE7QUF0QkY7QUF5QkE7RUFDRSxzQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0FBdEJGO0FBeUJBO0VBQ0UsVUFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtBQXRCRjtBQXlCQTtFQUNFLGFBQUE7RUFDQSwyQkFBQTtFQUNBLG1CQUFBO0FBdEJGO0FBeUJBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7QUF0QkY7QUF5QkE7RUFDRSxnQkFBQTtBQXRCRjtBQXlCQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsZUFBQTtBQXRCRjtBQXlCQTtFQUNFLGdCQUFBO0VBQ0EscUJBQUE7QUF0QkY7QUF5QkE7RUFDRSxnQ0FBQTtBQXRCRjtBQXlCQTtFQUNFLG1EQUFBO1VBQUEsMkNBQUE7QUF0QkYiLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9RGFuY2luZytTY3JpcHQmZGlzcGxheT1zd2FwJyk7XHJcbkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUJlcmtzaGlyZStTd2FzaCZmYW1pbHk9RGFuY2luZytTY3JpcHQmZGlzcGxheT1zd2FwJyk7XHJcblxyXG4vL3ZhcmlhYmxlc1xyXG4kYm9keUJhY2tncm91bmQ6IHZhcigtLWJvZHlCYWNrZ3JvdW5kKTtcclxuJHRpdGxlOiB2YXIoLS10aXRsZSk7XHJcbiR0ZXh0Q29sb3I6IHZhcigtLXRleHRDb2xvcik7XHJcbiRwYWdpbmF0b3Jjb2xvcjogdmFyKC0tcGFnaW5hdG9yQ29sb3IpO1xyXG4kc3VidGl0bGVDb2xvcjogdmFyKC0tc3VidGl0bGVDb2xvcik7XHJcbiRmb3JtYWNpb25Db2xvcjogdmFyKC0tZm9ybWFjaW9uQ29sb3IpO1xyXG4kc2hhZG93Q29sb3I6IHZhcigtLXNoYWRvd0NvbG9yKTtcclxuJGFydGljbGVDb2xvcjogdmFyKC0tYXJ0aWNsZUNvbG9yKTtcclxuJGljb25Db2xvcjogdmFyKC0taWNvbkNvbG9yKTtcclxuJG1vZGVDb2xvcjogdmFyKC0tbW9kZUNvbG9yKTtcclxuJGFsbGFuOiAnQWxsYW4nLCBjdXJzaXZlO1xyXG4kZGFuY2luZzogJ0RhbmNpbmcgU2NyaXB0JywgY3Vyc2l2ZTtcclxuJHNpemU6IDMwMHB4O1xyXG5cclxuYm9keSB7XHJcbiAgcGFkZGluZy10b3A6IDBweDtcclxuICBwYWRkaW5nLWxlZnQ6IDBweDtcclxuICB3aWR0aDogMTAwJTtcclxuICBtaW4taGVpZ2h0OiAxMDAlO1xyXG4gIGhlaWdodDogYXV0bztcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkYm9keUJhY2tncm91bmQ7XHJcbiAgdHJhbnNpdGlvbjogIGJhY2tncm91bmQtY29sb3IgM3MgbGluZWFyO1xyXG59XHJcblxyXG4udGV4dCwgdGQsIGxpLCAubWVudUljb24ge1xyXG4gIGNvbG9yOiAkdGV4dENvbG9yO1xyXG59XHJcblxyXG4uYmllbnZlbmlkbyB7XHJcbiAgY29sb3I6ICR0ZXh0Q29sb3I7XHJcbiAgZm9udC1mYW1pbHk6ICRkYW5jaW5nO1xyXG4gIGZvbnQtc2l6ZTogMzBweDtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG4gIG1hcmdpbi10b3A6IDMwcHg7XHJcbn1cclxuXHJcbi5tb2RlIHtcclxuICBjb2xvcjogJG1vZGVDb2xvcjtcclxufVxyXG5cclxuLm1vb24sIC5zdW4ge1xyXG4gIHBhZGRpbmc6IDNweDtcclxufVxyXG5cclxuLm1vb24ge1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLnN1biB7XHJcbiAgY29sb3I6IHllbGxvdztcclxufVxyXG5cclxuLnRoZW1lU2xpZGUge1xyXG4gIHBhZGRpbmc6IDNweDtcclxuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogOTAwcHgpICB7XHJcblxyXG4gIC5jYXJkRm9ybWFjaW9uIHtcclxuICAgIG1hcmdpbi10b3A6IDUlO1xyXG4gIH1cclxuXHJcbiAgLmljb25vQ29udGFjdG8ge1xyXG4gICAgZm9udC1zaXplOiB4LWxhcmdlO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbGVmdDogMTAlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGljb25Db2xvcjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICB9XHJcblxyXG4gIC5jb250YWN0b0xpc3RhIHtcclxuICAgIHdpZHRoOiAkc2l6ZTtcclxuICAgIGhlaWdodDogJHNpemU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xyXG4gIH1cclxuXHJcbiAgLm1lbnUge1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcblxyXG4gIG5hdiB7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB0b3A6IDA7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHotaW5kZXg6IDI7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgfVxyXG5cclxufVxyXG5cclxuQG1lZGlhIChtaW4td2lkdGg6IDkwMHB4KSB7XHJcblxyXG4gIC5pY29ub0NvbnRhY3RvIHtcclxuICAgIGZvbnQtc2l6ZTogeC1sYXJnZTtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGxlZnQ6IC0xMHB4O1xyXG4gICAgdG9wOiAtOHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGljb25Db2xvcjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICB9XHJcblxyXG4gIC5jb250YWN0b0xpc3RhIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcclxuICB9XHJcblxyXG4gIG5hdiB7XHJcbiAgICBiYWNrZ3JvdW5kOiBibGFjaztcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHRvcDogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBhZGRpbmc6IDEwcHggMHB4IDEwcHggMHB4O1xyXG4gICAgei1pbmRleDogMjtcclxuICAgIGJveC1zaGFkb3c6IDBweCAxNXB4IDIwcHggcmdiKDM2LCAxNzAsIDQzKTtcclxuICB9XHJcbn1cclxuXHJcbi5jZW50cmFkbyB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4udGl0dWxvIHtcclxuICBjb2xvcjogJHRpdGxlO1xyXG4gIGZvbnQtZmFtaWx5OiAkYWxsYW47XHJcbiAgZm9udC1zaXplOiA0MHB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XHJcbn1cclxuXHJcbi5ib3RvbmVzLW5hdmJhciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xyXG4gIGZsZXgtd3JhcDogbm93cmFwO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uYm90b24tbmF2ZWdhY2lvbiB7XHJcbiAgICBtYXJnaW4tbGVmdDogMjBweDtcclxuXHJcbiAgICAmOmhvdmVyIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XHJcbiAgICAgICAgY29sb3I6IGJsYWNrO1xyXG4gICAgfVxyXG5cclxuICAgICY6YWN0aXZlIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibHVlO1xyXG4gICAgfVxyXG59XHJcblxyXG4uY2FyZCwgLmNhcmRDZW50cmFkYSB7XHJcbiAgbWFyZ2luLXRvcDogMTAlO1xyXG59XHJcblxyXG4uY2FyZCB7XHJcbiAgbWF4LXdpZHRoOiA0MDBweDtcclxuICBib3gtc2hhZG93OiAxMHB4IDMwcHggMzBweCAkc2hhZG93Q29sb3I7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJGZvcm1hY2lvbkNvbG9yO1xyXG59XHJcblxyXG4uY2FyZENlbnRyYWRhIHtcclxuICBtYXJnaW46IGF1dG87XHJcbiAgd2lkdGg6IDUwJTtcclxuICBtaW4td2lkdGg6IDI1MHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG59XHJcblxyXG5zZWN0aW9uIHtcclxuICBwYWRkaW5nOiA2JSAxMCUgNCUgMTAlO1xyXG59XHJcblxyXG50YWJsZSB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJGZvcm1hY2lvbkNvbG9yO1xyXG59XHJcblxyXG4uYm90b25lcy1zbGlkZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuICBhbGlnbi1pdGVtczogYmFzZWxpbmU7XHJcbiAgcGFkZGluZzogMCUgMTAlIDUlIDEwJTtcclxufVxyXG5cclxuLnBhZ2luYXRvciB7XHJcbiAgY29sb3I6ICRwYWdpbmF0b3Jjb2xvcjtcclxufVxyXG5cclxuaDQge1xyXG4gIGNvbG9yOiRzdWJ0aXRsZUNvbG9yO1xyXG59XHJcblxyXG4uYm90b25TbGlkZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4uYmFycmEge1xyXG4gIHdpZHRoOiAyMCU7XHJcbn1cclxuXHJcbi5sb2dvIHtcclxuICB3aWR0aDogNDAlO1xyXG4gIHBhZGRpbmctbGVmdDogMzBweDtcclxufVxyXG5cclxuLmVuY2FiZXphZG8ge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGRhcmt2aW9sZXQ7XHJcbn1cclxuXHJcbi5jYXJkRm9ybWFjaW9uIHtcclxuICB3aWR0aDogYXV0bztcclxuICBib3gtc2hhZG93OiAxMHB4IDMwcHggMzBweCByZ2IoMTY3LCA2NiwgNjYpO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICRmb3JtYWNpb25Db2xvcjtcclxufVxyXG5cclxuLmhlYWRlci1jYXJkIHtcclxuICBtYXJnaW4tbGVmdDogMTAlO1xyXG59XHJcblxyXG4uZW1wcmVzYSB7XHJcbiAgY29sb3I6IHJlZDtcclxufVxyXG5cclxuLnB1ZXN0byB7XHJcbiAgY29sb3I6IGdyZWVueWVsbG93O1xyXG59XHJcblxyXG4udGV4dG8ge1xyXG4gIHBhZGRpbmc6IDI1JSAwJSAyNSUgMCU7XHJcbiAgd2lkdGg6IDIwMHB4O1xyXG4gIGhlaWdodDogMjAwcHg7XHJcbn1cclxuXHJcbi5taXRhZCB7XHJcbiAgd2lkdGg6IDUwJTtcclxuICBoZWlnaHQ6IDUwJTtcclxuICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xyXG59XHJcblxyXG4uZG9zQ29sdW1uYXMge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdy1yZXZlcnNlO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5jb2x1bW5hc1Jlc3BvbnNpdmFzIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLmNvbHVtbmFEb3Mge1xyXG4gIG1hcmdpbi1sZWZ0OiAyMCU7XHJcbn1cclxuXHJcbi5jb250YWN0b0l0ZW0ge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsgIFxyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuOjpuZy1kZWVwIGEge1xyXG4gIGNvbG9yOiBhbGljZWJsdWU7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG59XHJcblxyXG4uZW5sYWNlIHtcclxuICBjb2xvcjogcmdiYSg0NCwgMTk5LCAxMzQsIDAuNzgxKTtcclxufVxyXG5cclxuOjpuZy1kZWVwIC5iYWNrZHJvcEJhY2tncm91bmQge1xyXG4gIGJhY2tkcm9wLWZpbHRlcjogYnJpZ2h0bmVzcygwLjgpIGJsdXIoMTBweCk7XHJcbn0iXX0= */"] });


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/navbar/navbar.component */ "hrlM");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/home/home.component */ "BuFo");
/* harmony import */ var _components_formacion_formacion_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/formacion/formacion.component */ "fTPQ");
/* harmony import */ var _components_experiencia_experiencia_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/experiencia/experiencia.component */ "EOyz");
/* harmony import */ var _components_contacto_contacto_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/contacto/contacto.component */ "gAHN");
/* harmony import */ var ng_in_viewport__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-in-viewport */ "Wuvc");
/* harmony import */ var _material_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./material.module */ "vvyD");
/* harmony import */ var _components_pop_up_pop_up_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/pop-up/pop-up.component */ "tjuB");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ "fXoL");














class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdefineInjector"]({ providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
            _material_module__WEBPACK_IMPORTED_MODULE_11__["MaterialModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"],
            ng_in_viewport__WEBPACK_IMPORTED_MODULE_10__["InViewportModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_5__["NavbarComponent"],
        _components_home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"],
        _components_formacion_formacion_component__WEBPACK_IMPORTED_MODULE_7__["FormacionComponent"],
        _components_experiencia_experiencia_component__WEBPACK_IMPORTED_MODULE_8__["ExperienciaComponent"],
        _components_contacto_contacto_component__WEBPACK_IMPORTED_MODULE_9__["ContactoComponent"],
        _components_pop_up_pop_up_component__WEBPACK_IMPORTED_MODULE_12__["PopUpComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
        _material_module__WEBPACK_IMPORTED_MODULE_11__["MaterialModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"],
        ng_in_viewport__WEBPACK_IMPORTED_MODULE_10__["InViewportModule"]] }); })();


/***/ }),

/***/ "fTPQ":
/*!*************************************************************!*\
  !*** ./src/app/components/formacion/formacion.component.ts ***!
  \*************************************************************/
/*! exports provided: FormacionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormacionComponent", function() { return FormacionComponent; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "R0Ic");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_mobileDetector_mobile_detector_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/mobileDetector/mobile-detector.service */ "HhPq");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/tabs */ "wZkO");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");









function FormacionComponent_div_5_th_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "th", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Nombre ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function FormacionComponent_div_5_td_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r17 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", element_r17.nombre, " ");
} }
function FormacionComponent_div_5_th_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "th", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Establecimiento ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function FormacionComponent_div_5_td_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r18 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", element_r18.establecimiento, " ");
} }
function FormacionComponent_div_5_th_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "th", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Fecha de inicio ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function FormacionComponent_div_5_td_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r19 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", element_r19.fechaInicio, " ");
} }
function FormacionComponent_div_5_th_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "th", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Fecha de finalizaci\u00F3n ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function FormacionComponent_div_5_td_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r20 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", element_r20.fechaFin, " ");
} }
function FormacionComponent_div_5_th_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "th", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Logo ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function FormacionComponent_div_5_td_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r21 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("src", "./assets/", element_r21.logo, "", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
} }
function FormacionComponent_div_5_tr_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "tr", 23);
} }
function FormacionComponent_div_5_tr_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "tr", 24);
} }
function FormacionComponent_div_5_div_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const lenguaje_r23 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](lenguaje_r23);
} }
function FormacionComponent_div_5_div_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const base_r24 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](base_r24);
} }
function FormacionComponent_div_5_div_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r25 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r25);
} }
function FormacionComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-tab-group", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "mat-tab", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "table", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](4, 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, FormacionComponent_div_5_th_5_Template, 2, 0, "th", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, FormacionComponent_div_5_td_6_Template, 2, 1, "td", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](7, 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, FormacionComponent_div_5_th_8_Template, 2, 0, "th", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, FormacionComponent_div_5_td_9_Template, 2, 1, "td", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](10, 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, FormacionComponent_div_5_th_11_Template, 2, 0, "th", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, FormacionComponent_div_5_td_12_Template, 2, 1, "td", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](13, 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](14, FormacionComponent_div_5_th_14_Template, 2, 0, "th", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](15, FormacionComponent_div_5_td_15_Template, 2, 1, "td", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](16, 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](17, FormacionComponent_div_5_th_17_Template, 2, 0, "th", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](18, FormacionComponent_div_5_td_18_Template, 2, 1, "td", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](19, FormacionComponent_div_5_tr_19_Template, 1, 0, "tr", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](20, FormacionComponent_div_5_tr_20_Template, 1, 0, "tr", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "mat-tab", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "mat-card", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](23, FormacionComponent_div_5_div_23_Template, 4, 1, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "mat-tab", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "mat-card", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](26, FormacionComponent_div_5_div_26_Template, 4, 1, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "mat-tab", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "mat-card", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](30, FormacionComponent_div_5_div_30_Template, 4, 1, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("dataSource", ctx_r0.dataSource);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matHeaderRowDef", ctx_r0.displayedColumns);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matRowDefColumns", ctx_r0.displayedColumns);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r0.lenguajes);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r0.basesDeDatos);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r0.frameTec);
} }
function FormacionComponent_div_6_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "img", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r30 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", data_r30.nombre, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", data_r30.establecimiento, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"](" ", data_r30.fechaInicio, " - ", data_r30.fechaFin, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("src", "./assets/", data_r30.logo, "", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
} }
function FormacionComponent_div_6_div_15_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const lenguaje_r32 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@flyInOut", "in");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](lenguaje_r32);
} }
function FormacionComponent_div_6_div_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-card-title", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Lenguajes");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, FormacionComponent_div_6_div_15_div_3_Template, 4, 2, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@flyInOut", "in");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r27.lenguajes);
} }
function FormacionComponent_div_6_div_16_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const base_r34 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](base_r34);
} }
function FormacionComponent_div_6_div_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-card-title", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Bases de datos");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, FormacionComponent_div_6_div_16_div_3_Template, 4, 1, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@flyInOut", "in");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r28.basesDeDatos);
} }
function FormacionComponent_div_6_div_17_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r36 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r36);
} }
function FormacionComponent_div_6_div_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-card-title", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Frameworks y tecnolog\u00EDas");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, FormacionComponent_div_6_div_17_div_3_Template, 4, 1, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@flyInOut", "in");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r29.frameTec);
} }
function FormacionComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    const _r38 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-card", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "mat-card-title", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Universitaria y cursos");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, FormacionComponent_div_6_div_4_Template, 11, 5, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "mat-card", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function FormacionComponent_div_6_Template_button_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r38); const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r37.change(0); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "mat-icon", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "arrow_back");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "p", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function FormacionComponent_div_6_Template_button_click_12_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r38); const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r39.change(1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "mat-icon", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "arrow_forward");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](15, FormacionComponent_div_6_div_15_Template, 4, 2, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](16, FormacionComponent_div_6_div_16_Template, 4, 2, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](17, FormacionComponent_div_6_div_17_Template, 4, 2, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r1.dataSource);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@slideStatus", ctx_r1.status);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("", ctx_r1.position + 1, "/", 3, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.position == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.position == 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.position == 2);
} }
const FORMACION = [
    { posicion: 1, nombre: 'INGENIERIA EN SISTEMAS', establecimiento: 'UTN FRBA', fechaInicio: '2021', fechaFin: '', logo: 'UTNFRBA.png', },
    { posicion: 2, nombre: 'DIPLOMATURA EN PROGRAMACION WEB FULL STACK CON REACT JS', establecimiento: 'CENTRO DE E-LEARNING UTN FRBA', fechaInicio: '2020', fechaFin: '2021', logo: 'elearning.png', },
    { posicion: 3, nombre: 'PROGRAMACION JAVA', establecimiento: 'ITMaster Academy', fechaInicio: '2020', fechaFin: '2020', logo: 'itmaster.svg', },
    { posicion: 4, nombre: 'INGENIERA ELECTRONICA', establecimiento: 'UTN FRH', fechaInicio: '2015', fechaFin: '', logo: 'UTN-FRH.png', },
];
class FormacionComponent {
    constructor(mobileDetector) {
        this.mobileDetector = mobileDetector;
        this.displayedColumns = ['nombre', 'establecimiento', 'logo', 'fechaInicio', 'fechaFin'];
        this.dataSource = FORMACION;
        this.lenguajes = ["C", "C++", "Java", "JavaScript", "TypeScript", "Phyton"];
        this.basesDeDatos = ["MySQL", "MongoDB"];
        this.frameTec = ["Node.js", "Express", "React", "React Native", "Angular", "Material", "Ionic", "Cordova", "Selenium", "Docker"];
        this.position = 0;
        this.isMobile = false;
    }
    ngOnInit() {
        this.isMobile = this.mobileDetector.isMobile();
    }
    change(destiny) {
        const BACK = 0;
        const FORWARD = 1;
        const LENGTH = 2;
        switch (destiny) {
            case BACK: {
                if (this.position > 0) {
                    this.position--;
                }
                else {
                    this.position = 0;
                }
                break;
            }
            case FORWARD: {
                if (this.position < LENGTH) {
                    this.position++;
                }
                else {
                    this.position = 2;
                }
                break;
            }
        }
    }
}
FormacionComponent.ɵfac = function FormacionComponent_Factory(t) { return new (t || FormacionComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_mobileDetector_mobile_detector_service__WEBPACK_IMPORTED_MODULE_2__["MobileDetectorService"])); };
FormacionComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: FormacionComponent, selectors: [["app-formacion"]], decls: 7, vars: 2, consts: [[1, "centrado"], [1, "titulo"], [4, "ngIf"], ["backgroundColor", "warn"], ["label", "UNIVERSITARIA Y CURSOS"], ["mat-table", "", 1, "mat-elevation-z8", 3, "dataSource"], ["matColumnDef", "nombre"], ["class", "encabezado", "mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "establecimiento"], ["matColumnDef", "fechaInicio"], ["matColumnDef", "fechaFin"], ["matColumnDef", "logo"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["label", "LENGUAJES", 1, "label"], [1, "cardFormacion"], [4, "ngFor", "ngForOf"], ["label", "BASES DE DATOS", 1, "label"], ["label", "FRAMEWORKS Y TECNOLOGIAS", 1, "label"], ["mat-header-cell", "", 1, "encabezado"], ["mat-cell", ""], [1, "logo", 3, "src"], ["mat-header-row", ""], ["mat-row", ""], [1, "text"], [1, "botones-slider"], ["mat-fab", "", 1, "botonSlider", 3, "click"], [1, "sliderArrow"], [1, "paginator"], ["mat-card-image", "", 1, "logo", 3, "src"]], template: function FormacionComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "body");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "section");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "h2", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Formaci\u00F3n");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, FormacionComponent_div_5_Template, 31, 6, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, FormacionComponent_div_6_Template, 18, 7, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.isMobile);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isMobile);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_4__["MatTabGroup"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_4__["MatTab"], _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatTable"], _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatRowDef"], _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCard"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatHeaderCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatRow"], _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardTitle"], _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIcon"], _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardImage"]], styles: ["@import url(\"https://fonts.googleapis.com/css2?family=Dancing+Script&display=swap\");\n@import url(\"https://fonts.googleapis.com/css2?family=Berkshire+Swash&family=Dancing+Script&display=swap\");\nbody[_ngcontent-%COMP%] {\n  padding-top: 0px;\n  padding-left: 0px;\n  width: 100%;\n  min-height: 100%;\n  height: auto;\n  background-color: var(--bodyBackground);\n  transition: background-color 3s linear;\n}\n.text[_ngcontent-%COMP%], td[_ngcontent-%COMP%], li[_ngcontent-%COMP%], .menuIcon[_ngcontent-%COMP%] {\n  color: var(--textColor);\n}\n.bienvenido[_ngcontent-%COMP%] {\n  color: var(--textColor);\n  font-family: \"Dancing Script\", cursive;\n  font-size: 30px;\n  font-weight: 500;\n  margin-top: 30px;\n}\n.mode[_ngcontent-%COMP%] {\n  color: var(--modeColor);\n}\n.moon[_ngcontent-%COMP%], .sun[_ngcontent-%COMP%] {\n  padding: 3px;\n}\n.moon[_ngcontent-%COMP%] {\n  color: white;\n}\n.sun[_ngcontent-%COMP%] {\n  color: yellow;\n}\n.themeSlide[_ngcontent-%COMP%] {\n  padding: 3px;\n  display: inline-flex;\n  align-items: center;\n}\n@media (max-width: 900px) {\n  .cardFormacion[_ngcontent-%COMP%] {\n    margin-top: 5%;\n  }\n\n  .iconoContacto[_ngcontent-%COMP%] {\n    font-size: x-large;\n    position: absolute;\n    left: 10%;\n    background-color: var(--iconColor);\n    border-radius: 50%;\n  }\n\n  .contactoLista[_ngcontent-%COMP%] {\n    width: 300px;\n    height: 300px;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-evenly;\n  }\n\n  .menu[_ngcontent-%COMP%] {\n    color: white;\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between;\n    width: 100%;\n  }\n\n  nav[_ngcontent-%COMP%] {\n    position: fixed;\n    top: 0;\n    width: 100%;\n    z-index: 2;\n    margin: 0;\n  }\n}\n@media (min-width: 900px) {\n  .iconoContacto[_ngcontent-%COMP%] {\n    font-size: x-large;\n    position: relative;\n    left: -10px;\n    top: -8px;\n    background-color: var(--iconColor);\n    border-radius: 50%;\n  }\n\n  .contactoLista[_ngcontent-%COMP%] {\n    width: 100%;\n    display: flex;\n    flex-direction: row;\n    justify-content: space-evenly;\n  }\n\n  nav[_ngcontent-%COMP%] {\n    background: black;\n    position: fixed;\n    top: 0;\n    left: 0;\n    width: 100%;\n    padding: 10px 0px 10px 0px;\n    z-index: 2;\n    box-shadow: 0px 15px 20px #24aa2b;\n  }\n}\n.centrado[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.titulo[_ngcontent-%COMP%] {\n  color: var(--title);\n  font-family: \"Allan\", cursive;\n  font-size: 40px;\n  margin-bottom: 30px;\n}\n.botones-navbar[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-evenly;\n  flex-wrap: nowrap;\n  width: 100%;\n}\n.boton-navegacion[_ngcontent-%COMP%] {\n  margin-left: 20px;\n}\n.boton-navegacion[_ngcontent-%COMP%]:hover {\n  background-color: red;\n  color: black;\n}\n.boton-navegacion[_ngcontent-%COMP%]:active {\n  background-color: blue;\n}\n.card[_ngcontent-%COMP%], .cardCentrada[_ngcontent-%COMP%] {\n  margin-top: 10%;\n}\n.card[_ngcontent-%COMP%] {\n  max-width: 400px;\n  box-shadow: 10px 30px 30px var(--shadowColor);\n  background-color: var(--formacionColor);\n}\n.cardCentrada[_ngcontent-%COMP%] {\n  margin: auto;\n  width: 50%;\n  min-width: 250px;\n  background-color: transparent;\n}\nsection[_ngcontent-%COMP%] {\n  padding: 6% 10% 4% 10%;\n}\ntable[_ngcontent-%COMP%] {\n  width: 100%;\n  background-color: var(--formacionColor);\n}\n.botones-slider[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-around;\n  align-items: baseline;\n  padding: 0% 10% 5% 10%;\n}\n.paginator[_ngcontent-%COMP%] {\n  color: var(--paginatorColor);\n}\nh4[_ngcontent-%COMP%] {\n  color: var(--subtitleColor);\n}\n.botonSlider[_ngcontent-%COMP%] {\n  background-color: white;\n}\n.barra[_ngcontent-%COMP%] {\n  width: 20%;\n}\n.logo[_ngcontent-%COMP%] {\n  width: 40%;\n  padding-left: 30px;\n}\n.encabezado[_ngcontent-%COMP%] {\n  background-color: darkviolet;\n}\n.cardFormacion[_ngcontent-%COMP%] {\n  width: auto;\n  box-shadow: 10px 30px 30px #a74242;\n  background-color: var(--formacionColor);\n}\n.header-card[_ngcontent-%COMP%] {\n  margin-left: 10%;\n}\n.empresa[_ngcontent-%COMP%] {\n  color: red;\n}\n.puesto[_ngcontent-%COMP%] {\n  color: greenyellow;\n}\n.texto[_ngcontent-%COMP%] {\n  padding: 25% 0% 25% 0%;\n  width: 200px;\n  height: 200px;\n}\n.mitad[_ngcontent-%COMP%] {\n  width: 50%;\n  height: 50%;\n  padding-right: 20px;\n}\n.dosColumnas[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row-reverse;\n  align-items: center;\n}\n.columnasResponsivas[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n}\n.columnaDos[_ngcontent-%COMP%] {\n  margin-left: 20%;\n}\n.contactoItem[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  cursor: pointer;\n}\n  a {\n  color: aliceblue;\n  text-decoration: none;\n}\n.enlace[_ngcontent-%COMP%] {\n  color: rgba(44, 199, 134, 0.781);\n}\n  .backdropBackground {\n  -webkit-backdrop-filter: brightness(0.8) blur(10px);\n          backdrop-filter: brightness(0.8) blur(10px);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXGFwcC5jb21wb25lbnQuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFxmb3JtYWNpb24uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQVEsbUZBQUE7QUFDQSwwR0FBQTtBQWlCUjtFQUNFLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsdUNBcEJlO0VBcUJmLHNDQUFBO0FDZkY7QURrQkE7RUFDRSx1QkF2QlU7QUNRWjtBRGtCQTtFQUNFLHVCQTNCVTtFQTRCVixzQ0FuQlE7RUFvQlIsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUNmRjtBRGtCQTtFQUNFLHVCQTVCVTtBQ2FaO0FEa0JBO0VBQ0UsWUFBQTtBQ2ZGO0FEa0JBO0VBQ0UsWUFBQTtBQ2ZGO0FEa0JBO0VBQ0UsYUFBQTtBQ2ZGO0FEa0JBO0VBQ0UsWUFBQTtFQUNBLG9CQUFBO0VBQ0EsbUJBQUE7QUNmRjtBRGtCQTtFQUVFO0lBQ0UsY0FBQTtFQ2hCRjs7RURtQkE7SUFDRSxrQkFBQTtJQUNBLGtCQUFBO0lBQ0EsU0FBQTtJQUNBLGtDQTVEUTtJQTZEUixrQkFBQTtFQ2hCRjs7RURtQkE7SUFDRSxZQTdERztJQThESCxhQTlERztJQStESCxhQUFBO0lBQ0Esc0JBQUE7SUFDQSw2QkFBQTtFQ2hCRjs7RURtQkE7SUFDRSxZQUFBO0lBQ0EsYUFBQTtJQUNBLG1CQUFBO0lBQ0EsOEJBQUE7SUFDQSxXQUFBO0VDaEJGOztFRG1CQTtJQUNFLGVBQUE7SUFDQSxNQUFBO0lBQ0EsV0FBQTtJQUNBLFVBQUE7SUFDQSxTQUFBO0VDaEJGO0FBQ0Y7QURvQkE7RUFFRTtJQUNFLGtCQUFBO0lBQ0Esa0JBQUE7SUFDQSxXQUFBO0lBQ0EsU0FBQTtJQUNBLGtDQWpHUTtJQWtHUixrQkFBQTtFQ25CRjs7RURzQkE7SUFDRSxXQUFBO0lBQ0EsYUFBQTtJQUNBLG1CQUFBO0lBQ0EsNkJBQUE7RUNuQkY7O0VEc0JBO0lBQ0UsaUJBQUE7SUFDQSxlQUFBO0lBQ0EsTUFBQTtJQUNBLE9BQUE7SUFDQSxXQUFBO0lBQ0EsMEJBQUE7SUFDQSxVQUFBO0lBQ0EsaUNBQUE7RUNuQkY7QUFDRjtBRHNCQTtFQUNFLGtCQUFBO0FDcEJGO0FEdUJBO0VBQ0UsbUJBcElNO0VBcUlOLDZCQTVITTtFQTZITixlQUFBO0VBQ0EsbUJBQUE7QUNwQkY7QUR1QkE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw2QkFBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtBQ3BCRjtBRHVCQTtFQUNJLGlCQUFBO0FDcEJKO0FEc0JJO0VBQ0kscUJBQUE7RUFDQSxZQUFBO0FDcEJSO0FEdUJJO0VBQ0ksc0JBQUE7QUNyQlI7QUR5QkE7RUFDRSxlQUFBO0FDdEJGO0FEeUJBO0VBQ0UsZ0JBQUE7RUFDQSw2Q0FBQTtFQUNBLHVDQWxLZTtBQzRJakI7QUR5QkE7RUFDRSxZQUFBO0VBQ0EsVUFBQTtFQUNBLGdCQUFBO0VBQ0EsNkJBQUE7QUN0QkY7QUR5QkE7RUFDRSxzQkFBQTtBQ3RCRjtBRHlCQTtFQUNFLFdBQUE7RUFDQSx1Q0FsTGU7QUM0SmpCO0FEeUJBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsNkJBQUE7RUFDQSxxQkFBQTtFQUNBLHNCQUFBO0FDdEJGO0FEeUJBO0VBQ0UsNEJBaE1lO0FDMEtqQjtBRHlCQTtFQUNFLDJCQW5NYztBQzZLaEI7QUR5QkE7RUFDRSx1QkFBQTtBQ3RCRjtBRHlCQTtFQUNFLFVBQUE7QUN0QkY7QUR5QkE7RUFDRSxVQUFBO0VBQ0Esa0JBQUE7QUN0QkY7QUR5QkE7RUFDRSw0QkFBQTtBQ3RCRjtBRHlCQTtFQUNFLFdBQUE7RUFDQSxrQ0FBQTtFQUNBLHVDQXpOZTtBQ21NakI7QUR5QkE7RUFDRSxnQkFBQTtBQ3RCRjtBRHlCQTtFQUNFLFVBQUE7QUN0QkY7QUR5QkE7RUFDRSxrQkFBQTtBQ3RCRjtBRHlCQTtFQUNFLHNCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7QUN0QkY7QUR5QkE7RUFDRSxVQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0FDdEJGO0FEeUJBO0VBQ0UsYUFBQTtFQUNBLDJCQUFBO0VBQ0EsbUJBQUE7QUN0QkY7QUR5QkE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtBQ3RCRjtBRHlCQTtFQUNFLGdCQUFBO0FDdEJGO0FEeUJBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxlQUFBO0FDdEJGO0FEeUJBO0VBQ0UsZ0JBQUE7RUFDQSxxQkFBQTtBQ3RCRjtBRHlCQTtFQUNFLGdDQUFBO0FDdEJGO0FEeUJBO0VBQ0UsbURBQUE7VUFBQSwyQ0FBQTtBQ3RCRjtBQXRRQTs7Ozs7R0FBQSIsImZpbGUiOiJmb3JtYWNpb24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1EYW5jaW5nK1NjcmlwdCZkaXNwbGF5PXN3YXAnKTtcclxuQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9QmVya3NoaXJlK1N3YXNoJmZhbWlseT1EYW5jaW5nK1NjcmlwdCZkaXNwbGF5PXN3YXAnKTtcclxuXHJcbi8vdmFyaWFibGVzXHJcbiRib2R5QmFja2dyb3VuZDogdmFyKC0tYm9keUJhY2tncm91bmQpO1xyXG4kdGl0bGU6IHZhcigtLXRpdGxlKTtcclxuJHRleHRDb2xvcjogdmFyKC0tdGV4dENvbG9yKTtcclxuJHBhZ2luYXRvcmNvbG9yOiB2YXIoLS1wYWdpbmF0b3JDb2xvcik7XHJcbiRzdWJ0aXRsZUNvbG9yOiB2YXIoLS1zdWJ0aXRsZUNvbG9yKTtcclxuJGZvcm1hY2lvbkNvbG9yOiB2YXIoLS1mb3JtYWNpb25Db2xvcik7XHJcbiRzaGFkb3dDb2xvcjogdmFyKC0tc2hhZG93Q29sb3IpO1xyXG4kYXJ0aWNsZUNvbG9yOiB2YXIoLS1hcnRpY2xlQ29sb3IpO1xyXG4kaWNvbkNvbG9yOiB2YXIoLS1pY29uQ29sb3IpO1xyXG4kbW9kZUNvbG9yOiB2YXIoLS1tb2RlQ29sb3IpO1xyXG4kYWxsYW46ICdBbGxhbicsIGN1cnNpdmU7XHJcbiRkYW5jaW5nOiAnRGFuY2luZyBTY3JpcHQnLCBjdXJzaXZlO1xyXG4kc2l6ZTogMzAwcHg7XHJcblxyXG5ib2R5IHtcclxuICBwYWRkaW5nLXRvcDogMHB4O1xyXG4gIHBhZGRpbmctbGVmdDogMHB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1pbi1oZWlnaHQ6IDEwMCU7XHJcbiAgaGVpZ2h0OiBhdXRvO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICRib2R5QmFja2dyb3VuZDtcclxuICB0cmFuc2l0aW9uOiAgYmFja2dyb3VuZC1jb2xvciAzcyBsaW5lYXI7XHJcbn1cclxuXHJcbi50ZXh0LCB0ZCwgbGksIC5tZW51SWNvbiB7XHJcbiAgY29sb3I6ICR0ZXh0Q29sb3I7XHJcbn1cclxuXHJcbi5iaWVudmVuaWRvIHtcclxuICBjb2xvcjogJHRleHRDb2xvcjtcclxuICBmb250LWZhbWlseTogJGRhbmNpbmc7XHJcbiAgZm9udC1zaXplOiAzMHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgbWFyZ2luLXRvcDogMzBweDtcclxufVxyXG5cclxuLm1vZGUge1xyXG4gIGNvbG9yOiAkbW9kZUNvbG9yO1xyXG59XHJcblxyXG4ubW9vbiwgLnN1biB7XHJcbiAgcGFkZGluZzogM3B4O1xyXG59XHJcblxyXG4ubW9vbiB7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4uc3VuIHtcclxuICBjb2xvcjogeWVsbG93O1xyXG59XHJcblxyXG4udGhlbWVTbGlkZSB7XHJcbiAgcGFkZGluZzogM3B4O1xyXG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA5MDBweCkgIHtcclxuXHJcbiAgLmNhcmRGb3JtYWNpb24ge1xyXG4gICAgbWFyZ2luLXRvcDogNSU7XHJcbiAgfVxyXG5cclxuICAuaWNvbm9Db250YWN0byB7XHJcbiAgICBmb250LXNpemU6IHgtbGFyZ2U7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBsZWZ0OiAxMCU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkaWNvbkNvbG9yO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIH1cclxuXHJcbiAgLmNvbnRhY3RvTGlzdGEge1xyXG4gICAgd2lkdGg6ICRzaXplO1xyXG4gICAgaGVpZ2h0OiAkc2l6ZTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XHJcbiAgfVxyXG5cclxuICAubWVudSB7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuXHJcbiAgbmF2IHtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHRvcDogMDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgei1pbmRleDogMjtcclxuICAgIG1hcmdpbjogMDtcclxuICB9XHJcblxyXG59XHJcblxyXG5AbWVkaWEgKG1pbi13aWR0aDogOTAwcHgpIHtcclxuXHJcbiAgLmljb25vQ29udGFjdG8ge1xyXG4gICAgZm9udC1zaXplOiB4LWxhcmdlO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgbGVmdDogLTEwcHg7XHJcbiAgICB0b3A6IC04cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkaWNvbkNvbG9yO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIH1cclxuXHJcbiAgLmNvbnRhY3RvTGlzdGEge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xyXG4gIH1cclxuXHJcbiAgbmF2IHtcclxuICAgIGJhY2tncm91bmQ6IGJsYWNrO1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgcGFkZGluZzogMTBweCAwcHggMTBweCAwcHg7XHJcbiAgICB6LWluZGV4OiAyO1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDE1cHggMjBweCByZ2IoMzYsIDE3MCwgNDMpO1xyXG4gIH1cclxufVxyXG5cclxuLmNlbnRyYWRvIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi50aXR1bG8ge1xyXG4gIGNvbG9yOiAkdGl0bGU7XHJcbiAgZm9udC1mYW1pbHk6ICRhbGxhbjtcclxuICBmb250LXNpemU6IDQwcHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcclxufVxyXG5cclxuLmJvdG9uZXMtbmF2YmFyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XHJcbiAgZmxleC13cmFwOiBub3dyYXA7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5ib3Rvbi1uYXZlZ2FjaW9uIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xyXG5cclxuICAgICY6aG92ZXIge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcclxuICAgICAgICBjb2xvcjogYmxhY2s7XHJcbiAgICB9XHJcblxyXG4gICAgJjphY3RpdmUge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IGJsdWU7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5jYXJkLCAuY2FyZENlbnRyYWRhIHtcclxuICBtYXJnaW4tdG9wOiAxMCU7XHJcbn1cclxuXHJcbi5jYXJkIHtcclxuICBtYXgtd2lkdGg6IDQwMHB4O1xyXG4gIGJveC1zaGFkb3c6IDEwcHggMzBweCAzMHB4ICRzaGFkb3dDb2xvcjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkZm9ybWFjaW9uQ29sb3I7XHJcbn1cclxuXHJcbi5jYXJkQ2VudHJhZGEge1xyXG4gIG1hcmdpbjogYXV0bztcclxuICB3aWR0aDogNTAlO1xyXG4gIG1pbi13aWR0aDogMjUwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbn1cclxuXHJcbnNlY3Rpb24ge1xyXG4gIHBhZGRpbmc6IDYlIDEwJSA0JSAxMCU7XHJcbn1cclxuXHJcbnRhYmxlIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkZm9ybWFjaW9uQ29sb3I7XHJcbn1cclxuXHJcbi5ib3RvbmVzLXNsaWRlciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG4gIGFsaWduLWl0ZW1zOiBiYXNlbGluZTtcclxuICBwYWRkaW5nOiAwJSAxMCUgNSUgMTAlO1xyXG59XHJcblxyXG4ucGFnaW5hdG9yIHtcclxuICBjb2xvcjogJHBhZ2luYXRvcmNvbG9yO1xyXG59XHJcblxyXG5oNCB7XHJcbiAgY29sb3I6JHN1YnRpdGxlQ29sb3I7XHJcbn1cclxuXHJcbi5ib3RvblNsaWRlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi5iYXJyYSB7XHJcbiAgd2lkdGg6IDIwJTtcclxufVxyXG5cclxuLmxvZ28ge1xyXG4gIHdpZHRoOiA0MCU7XHJcbiAgcGFkZGluZy1sZWZ0OiAzMHB4O1xyXG59XHJcblxyXG4uZW5jYWJlemFkbyB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogZGFya3Zpb2xldDtcclxufVxyXG5cclxuLmNhcmRGb3JtYWNpb24ge1xyXG4gIHdpZHRoOiBhdXRvO1xyXG4gIGJveC1zaGFkb3c6IDEwcHggMzBweCAzMHB4IHJnYigxNjcsIDY2LCA2Nik7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJGZvcm1hY2lvbkNvbG9yO1xyXG59XHJcblxyXG4uaGVhZGVyLWNhcmQge1xyXG4gIG1hcmdpbi1sZWZ0OiAxMCU7XHJcbn1cclxuXHJcbi5lbXByZXNhIHtcclxuICBjb2xvcjogcmVkO1xyXG59XHJcblxyXG4ucHVlc3RvIHtcclxuICBjb2xvcjogZ3JlZW55ZWxsb3c7XHJcbn1cclxuXHJcbi50ZXh0byB7XHJcbiAgcGFkZGluZzogMjUlIDAlIDI1JSAwJTtcclxuICB3aWR0aDogMjAwcHg7XHJcbiAgaGVpZ2h0OiAyMDBweDtcclxufVxyXG5cclxuLm1pdGFkIHtcclxuICB3aWR0aDogNTAlO1xyXG4gIGhlaWdodDogNTAlO1xyXG4gIHBhZGRpbmctcmlnaHQ6IDIwcHg7XHJcbn1cclxuXHJcbi5kb3NDb2x1bW5hcyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93LXJldmVyc2U7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLmNvbHVtbmFzUmVzcG9uc2l2YXMge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4uY29sdW1uYURvcyB7XHJcbiAgbWFyZ2luLWxlZnQ6IDIwJTtcclxufVxyXG5cclxuLmNvbnRhY3RvSXRlbSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyOyAgXHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG46Om5nLWRlZXAgYSB7XHJcbiAgY29sb3I6IGFsaWNlYmx1ZTtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbn1cclxuXHJcbi5lbmxhY2Uge1xyXG4gIGNvbG9yOiByZ2JhKDQ0LCAxOTksIDEzNCwgMC43ODEpO1xyXG59XHJcblxyXG46Om5nLWRlZXAgLmJhY2tkcm9wQmFja2dyb3VuZCB7XHJcbiAgYmFja2Ryb3AtZmlsdGVyOiBicmlnaHRuZXNzKDAuOCkgYmx1cigxMHB4KTtcclxufSIsIkBpbXBvcnQgdXJsKFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1EYW5jaW5nK1NjcmlwdCZkaXNwbGF5PXN3YXBcIik7XG5AaW1wb3J0IHVybChcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9QmVya3NoaXJlK1N3YXNoJmZhbWlseT1EYW5jaW5nK1NjcmlwdCZkaXNwbGF5PXN3YXBcIik7XG5ib2R5IHtcbiAgcGFkZGluZy10b3A6IDBweDtcbiAgcGFkZGluZy1sZWZ0OiAwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBtaW4taGVpZ2h0OiAxMDAlO1xuICBoZWlnaHQ6IGF1dG87XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJvZHlCYWNrZ3JvdW5kKTtcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAzcyBsaW5lYXI7XG59XG5cbi50ZXh0LCB0ZCwgbGksIC5tZW51SWNvbiB7XG4gIGNvbG9yOiB2YXIoLS10ZXh0Q29sb3IpO1xufVxuXG4uYmllbnZlbmlkbyB7XG4gIGNvbG9yOiB2YXIoLS10ZXh0Q29sb3IpO1xuICBmb250LWZhbWlseTogXCJEYW5jaW5nIFNjcmlwdFwiLCBjdXJzaXZlO1xuICBmb250LXNpemU6IDMwcHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIG1hcmdpbi10b3A6IDMwcHg7XG59XG5cbi5tb2RlIHtcbiAgY29sb3I6IHZhcigtLW1vZGVDb2xvcik7XG59XG5cbi5tb29uLCAuc3VuIHtcbiAgcGFkZGluZzogM3B4O1xufVxuXG4ubW9vbiB7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLnN1biB7XG4gIGNvbG9yOiB5ZWxsb3c7XG59XG5cbi50aGVtZVNsaWRlIHtcbiAgcGFkZGluZzogM3B4O1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDkwMHB4KSB7XG4gIC5jYXJkRm9ybWFjaW9uIHtcbiAgICBtYXJnaW4tdG9wOiA1JTtcbiAgfVxuXG4gIC5pY29ub0NvbnRhY3RvIHtcbiAgICBmb250LXNpemU6IHgtbGFyZ2U7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGxlZnQ6IDEwJTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pY29uQ29sb3IpO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgfVxuXG4gIC5jb250YWN0b0xpc3RhIHtcbiAgICB3aWR0aDogMzAwcHg7XG4gICAgaGVpZ2h0OiAzMDBweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XG4gIH1cblxuICAubWVudSB7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cblxuICBuYXYge1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICB0b3A6IDA7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgei1pbmRleDogMjtcbiAgICBtYXJnaW46IDA7XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiA5MDBweCkge1xuICAuaWNvbm9Db250YWN0byB7XG4gICAgZm9udC1zaXplOiB4LWxhcmdlO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBsZWZ0OiAtMTBweDtcbiAgICB0b3A6IC04cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taWNvbkNvbG9yKTtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIH1cblxuICAuY29udGFjdG9MaXN0YSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xuICB9XG5cbiAgbmF2IHtcbiAgICBiYWNrZ3JvdW5kOiBibGFjaztcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcGFkZGluZzogMTBweCAwcHggMTBweCAwcHg7XG4gICAgei1pbmRleDogMjtcbiAgICBib3gtc2hhZG93OiAwcHggMTVweCAyMHB4ICMyNGFhMmI7XG4gIH1cbn1cbi5jZW50cmFkbyB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLnRpdHVsbyB7XG4gIGNvbG9yOiB2YXIoLS10aXRsZSk7XG4gIGZvbnQtZmFtaWx5OiBcIkFsbGFuXCIsIGN1cnNpdmU7XG4gIGZvbnQtc2l6ZTogNDBweDtcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcbn1cblxuLmJvdG9uZXMtbmF2YmFyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XG4gIGZsZXgtd3JhcDogbm93cmFwO1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmJvdG9uLW5hdmVnYWNpb24ge1xuICBtYXJnaW4tbGVmdDogMjBweDtcbn1cbi5ib3Rvbi1uYXZlZ2FjaW9uOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xuICBjb2xvcjogYmxhY2s7XG59XG4uYm90b24tbmF2ZWdhY2lvbjphY3RpdmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBibHVlO1xufVxuXG4uY2FyZCwgLmNhcmRDZW50cmFkYSB7XG4gIG1hcmdpbi10b3A6IDEwJTtcbn1cblxuLmNhcmQge1xuICBtYXgtd2lkdGg6IDQwMHB4O1xuICBib3gtc2hhZG93OiAxMHB4IDMwcHggMzBweCB2YXIoLS1zaGFkb3dDb2xvcik7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWZvcm1hY2lvbkNvbG9yKTtcbn1cblxuLmNhcmRDZW50cmFkYSB7XG4gIG1hcmdpbjogYXV0bztcbiAgd2lkdGg6IDUwJTtcbiAgbWluLXdpZHRoOiAyNTBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG59XG5cbnNlY3Rpb24ge1xuICBwYWRkaW5nOiA2JSAxMCUgNCUgMTAlO1xufVxuXG50YWJsZSB7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1mb3JtYWNpb25Db2xvcik7XG59XG5cbi5ib3RvbmVzLXNsaWRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICBhbGlnbi1pdGVtczogYmFzZWxpbmU7XG4gIHBhZGRpbmc6IDAlIDEwJSA1JSAxMCU7XG59XG5cbi5wYWdpbmF0b3Ige1xuICBjb2xvcjogdmFyKC0tcGFnaW5hdG9yQ29sb3IpO1xufVxuXG5oNCB7XG4gIGNvbG9yOiB2YXIoLS1zdWJ0aXRsZUNvbG9yKTtcbn1cblxuLmJvdG9uU2xpZGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG59XG5cbi5iYXJyYSB7XG4gIHdpZHRoOiAyMCU7XG59XG5cbi5sb2dvIHtcbiAgd2lkdGg6IDQwJTtcbiAgcGFkZGluZy1sZWZ0OiAzMHB4O1xufVxuXG4uZW5jYWJlemFkbyB7XG4gIGJhY2tncm91bmQtY29sb3I6IGRhcmt2aW9sZXQ7XG59XG5cbi5jYXJkRm9ybWFjaW9uIHtcbiAgd2lkdGg6IGF1dG87XG4gIGJveC1zaGFkb3c6IDEwcHggMzBweCAzMHB4ICNhNzQyNDI7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWZvcm1hY2lvbkNvbG9yKTtcbn1cblxuLmhlYWRlci1jYXJkIHtcbiAgbWFyZ2luLWxlZnQ6IDEwJTtcbn1cblxuLmVtcHJlc2Ege1xuICBjb2xvcjogcmVkO1xufVxuXG4ucHVlc3RvIHtcbiAgY29sb3I6IGdyZWVueWVsbG93O1xufVxuXG4udGV4dG8ge1xuICBwYWRkaW5nOiAyNSUgMCUgMjUlIDAlO1xuICB3aWR0aDogMjAwcHg7XG4gIGhlaWdodDogMjAwcHg7XG59XG5cbi5taXRhZCB7XG4gIHdpZHRoOiA1MCU7XG4gIGhlaWdodDogNTAlO1xuICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xufVxuXG4uZG9zQ29sdW1uYXMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93LXJldmVyc2U7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5jb2x1bW5hc1Jlc3BvbnNpdmFzIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmNvbHVtbmFEb3Mge1xuICBtYXJnaW4tbGVmdDogMjAlO1xufVxuXG4uY29udGFjdG9JdGVtIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuOjpuZy1kZWVwIGEge1xuICBjb2xvcjogYWxpY2VibHVlO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbi5lbmxhY2Uge1xuICBjb2xvcjogcmdiYSg0NCwgMTk5LCAxMzQsIDAuNzgxKTtcbn1cblxuOjpuZy1kZWVwIC5iYWNrZHJvcEJhY2tncm91bmQge1xuICBiYWNrZHJvcC1maWx0ZXI6IGJyaWdodG5lc3MoMC44KSBibHVyKDEwcHgpO1xufVxuXG4vKiBib2R5IHtcblxuICAgIGJhY2tncm91bmQ6IHJnYigyNywyMCwxNDIpO1xuYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDkwZGVnLCByZ2JhKDI3LDIwLDE0MiwxKSA1JSwgcmdiYSg0OSwxNzUsMTE0LDEpIDUwJSwgcmdiYSgyNTUsNDEsMCwxKSAxMDAlKTtcblxufSAqLyJdfQ== */"], data: { animation: [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('flyInOut', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(0)' })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('void => *', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(-100%)' }),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])(100)
                ]),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* => void', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])(500, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(100%)' }))
                ])
            ])
        ] } });


/***/ }),

/***/ "gAHN":
/*!***********************************************************!*\
  !*** ./src/app/components/contacto/contacto.component.ts ***!
  \***********************************************************/
/*! exports provided: ContactoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactoComponent", function() { return ContactoComponent; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "R0Ic");
/* harmony import */ var _animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../animations */ "J1Ni");
/* harmony import */ var _pop_up_pop_up_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../pop-up/pop-up.component */ "tjuB");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var ng_in_viewport__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-in-viewport */ "Wuvc");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");










function ContactoComponent_div_6_div_6_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ContactoComponent_div_6_div_6_Template_div_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r4); const contacto_r2 = ctx.$implicit; const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2); return ctx_r3.openDialog(contacto_r2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "mat-icon", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "mat-card-subtitle", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const contacto_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("svgIcon", contacto_r2.logo);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", contacto_r2.descripcion, "");
} }
function ContactoComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "mat-icon", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "mat-card-subtitle");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "a", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, " E-mail");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](6, ContactoComponent_div_6_div_6_Template, 5, 2, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("@flyInOut", undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r0.contactos);
} }
const _c0 = function () { return [0]; };
const _c1 = function (a0) { return { threshold: a0 }; };
const CONTACTO = [
    { descripcion: "Linkedin", enlace: "https://www.linkedin.com/in/leonardo-david-machado-b119681b3/", logo: "linkedin" },
    { descripcion: "Github", enlace: "https://github.com/LeonardoDavidMachado", logo: "github" },
];
class ContactoComponent {
    constructor(dialog, matIconRegistry, domSanitizer) {
        this.dialog = dialog;
        this.matIconRegistry = matIconRegistry;
        this.domSanitizer = domSanitizer;
        this.inView = false;
        this.matIconRegistry.addSvgIcon(`linkedin`, this.domSanitizer.bypassSecurityTrustResourceUrl('./assets/linkedin.svg'));
        this.matIconRegistry.addSvgIcon(`github`, this.domSanitizer.bypassSecurityTrustResourceUrl('./assets/github.svg'));
        this.matIconRegistry.addSvgIcon(`email`, this.domSanitizer.bypassSecurityTrustResourceUrl('./assets/email.svg'));
    }
    ngOnInit() {
        this.contactos = CONTACTO;
    }
    onIntersection({ target, visible }) {
        this.inView = visible;
    }
    openDialog(contacto) {
        this.dialog.open(_pop_up_pop_up_component__WEBPACK_IMPORTED_MODULE_2__["PopUpComponent"], {
            backdropClass: 'backdropBackground',
            data: {
                contacto
            },
            height: '200px',
            width: '350px',
        });
    }
}
ContactoComponent.ɵfac = function ContactoComponent_Factory(t) { return new (t || ContactoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIconRegistry"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["DomSanitizer"])); };
ContactoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: ContactoComponent, selectors: [["app-contacto"]], decls: 7, vars: 5, consts: [["inViewport", "", 3, "inViewportOptions", "inViewportAction"], [1, "centrado"], [1, "titulo"], ["class", "contactoLista", 4, "ngIf"], [1, "contactoLista"], [1, "contactoItem"], ["svgIcon", "email", 1, "iconoContacto"], ["target", "_blank", "href", "mailto:leondav@hotmail.com", 1, "text"], [4, "ngFor", "ngForOf"], [1, "contactoItem", 3, "click"], [1, "iconoContacto", 3, "svgIcon"], [1, "text"]], template: function ContactoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "body", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("inViewportAction", function ContactoComponent_Template_body_inViewportAction_0_listener($event) { return ctx.onIntersection($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "section");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "h1", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "Contacto");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](5, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](6, ContactoComponent_div_6_Template, 7, 2, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("inViewportOptions", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](3, _c1, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](2, _c0)));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.inView);
    } }, directives: [ng_in_viewport__WEBPACK_IMPORTED_MODULE_7__["InViewportDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIcon"], _angular_material_card__WEBPACK_IMPORTED_MODULE_9__["MatCardSubtitle"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"]], styles: ["@import url(\"https://fonts.googleapis.com/css2?family=Dancing+Script&display=swap\");\n@import url(\"https://fonts.googleapis.com/css2?family=Berkshire+Swash&family=Dancing+Script&display=swap\");\nbody[_ngcontent-%COMP%] {\n  padding-top: 0px;\n  padding-left: 0px;\n  width: 100%;\n  min-height: 100%;\n  height: auto;\n  background-color: var(--bodyBackground);\n  transition: background-color 3s linear;\n}\n.text[_ngcontent-%COMP%], td[_ngcontent-%COMP%], li[_ngcontent-%COMP%], .menuIcon[_ngcontent-%COMP%] {\n  color: var(--textColor);\n}\n.bienvenido[_ngcontent-%COMP%] {\n  color: var(--textColor);\n  font-family: \"Dancing Script\", cursive;\n  font-size: 30px;\n  font-weight: 500;\n  margin-top: 30px;\n}\n.mode[_ngcontent-%COMP%] {\n  color: var(--modeColor);\n}\n.moon[_ngcontent-%COMP%], .sun[_ngcontent-%COMP%] {\n  padding: 3px;\n}\n.moon[_ngcontent-%COMP%] {\n  color: white;\n}\n.sun[_ngcontent-%COMP%] {\n  color: yellow;\n}\n.themeSlide[_ngcontent-%COMP%] {\n  padding: 3px;\n  display: inline-flex;\n  align-items: center;\n}\n@media (max-width: 900px) {\n  .cardFormacion[_ngcontent-%COMP%] {\n    margin-top: 5%;\n  }\n\n  .iconoContacto[_ngcontent-%COMP%] {\n    font-size: x-large;\n    position: absolute;\n    left: 10%;\n    background-color: var(--iconColor);\n    border-radius: 50%;\n  }\n\n  .contactoLista[_ngcontent-%COMP%] {\n    width: 300px;\n    height: 300px;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-evenly;\n  }\n\n  .menu[_ngcontent-%COMP%] {\n    color: white;\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between;\n    width: 100%;\n  }\n\n  nav[_ngcontent-%COMP%] {\n    position: fixed;\n    top: 0;\n    width: 100%;\n    z-index: 2;\n    margin: 0;\n  }\n}\n@media (min-width: 900px) {\n  .iconoContacto[_ngcontent-%COMP%] {\n    font-size: x-large;\n    position: relative;\n    left: -10px;\n    top: -8px;\n    background-color: var(--iconColor);\n    border-radius: 50%;\n  }\n\n  .contactoLista[_ngcontent-%COMP%] {\n    width: 100%;\n    display: flex;\n    flex-direction: row;\n    justify-content: space-evenly;\n  }\n\n  nav[_ngcontent-%COMP%] {\n    background: black;\n    position: fixed;\n    top: 0;\n    left: 0;\n    width: 100%;\n    padding: 10px 0px 10px 0px;\n    z-index: 2;\n    box-shadow: 0px 15px 20px #24aa2b;\n  }\n}\n.centrado[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.titulo[_ngcontent-%COMP%] {\n  color: var(--title);\n  font-family: \"Allan\", cursive;\n  font-size: 40px;\n  margin-bottom: 30px;\n}\n.botones-navbar[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-evenly;\n  flex-wrap: nowrap;\n  width: 100%;\n}\n.boton-navegacion[_ngcontent-%COMP%] {\n  margin-left: 20px;\n}\n.boton-navegacion[_ngcontent-%COMP%]:hover {\n  background-color: red;\n  color: black;\n}\n.boton-navegacion[_ngcontent-%COMP%]:active {\n  background-color: blue;\n}\n.card[_ngcontent-%COMP%], .cardCentrada[_ngcontent-%COMP%] {\n  margin-top: 10%;\n}\n.card[_ngcontent-%COMP%] {\n  max-width: 400px;\n  box-shadow: 10px 30px 30px var(--shadowColor);\n  background-color: var(--formacionColor);\n}\n.cardCentrada[_ngcontent-%COMP%] {\n  margin: auto;\n  width: 50%;\n  min-width: 250px;\n  background-color: transparent;\n}\nsection[_ngcontent-%COMP%] {\n  padding: 6% 10% 4% 10%;\n}\ntable[_ngcontent-%COMP%] {\n  width: 100%;\n  background-color: var(--formacionColor);\n}\n.botones-slider[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-around;\n  align-items: baseline;\n  padding: 0% 10% 5% 10%;\n}\n.paginator[_ngcontent-%COMP%] {\n  color: var(--paginatorColor);\n}\nh4[_ngcontent-%COMP%] {\n  color: var(--subtitleColor);\n}\n.botonSlider[_ngcontent-%COMP%] {\n  background-color: white;\n}\n.barra[_ngcontent-%COMP%] {\n  width: 20%;\n}\n.logo[_ngcontent-%COMP%] {\n  width: 40%;\n  padding-left: 30px;\n}\n.encabezado[_ngcontent-%COMP%] {\n  background-color: darkviolet;\n}\n.cardFormacion[_ngcontent-%COMP%] {\n  width: auto;\n  box-shadow: 10px 30px 30px #a74242;\n  background-color: var(--formacionColor);\n}\n.header-card[_ngcontent-%COMP%] {\n  margin-left: 10%;\n}\n.empresa[_ngcontent-%COMP%] {\n  color: red;\n}\n.puesto[_ngcontent-%COMP%] {\n  color: greenyellow;\n}\n.texto[_ngcontent-%COMP%] {\n  padding: 25% 0% 25% 0%;\n  width: 200px;\n  height: 200px;\n}\n.mitad[_ngcontent-%COMP%] {\n  width: 50%;\n  height: 50%;\n  padding-right: 20px;\n}\n.dosColumnas[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row-reverse;\n  align-items: center;\n}\n.columnasResponsivas[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n}\n.columnaDos[_ngcontent-%COMP%] {\n  margin-left: 20%;\n}\n.contactoItem[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  cursor: pointer;\n}\n  a {\n  color: aliceblue;\n  text-decoration: none;\n}\n.enlace[_ngcontent-%COMP%] {\n  color: rgba(44, 199, 134, 0.781);\n}\n  .backdropBackground {\n  -webkit-backdrop-filter: brightness(0.8) blur(10px);\n          backdrop-filter: brightness(0.8) blur(10px);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXGFwcC5jb21wb25lbnQuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFxjb250YWN0by5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBUSxtRkFBQTtBQUNBLDBHQUFBO0FBaUJSO0VBQ0UsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSx1Q0FwQmU7RUFxQmYsc0NBQUE7QUNmRjtBRGtCQTtFQUNFLHVCQXZCVTtBQ1FaO0FEa0JBO0VBQ0UsdUJBM0JVO0VBNEJWLHNDQW5CUTtFQW9CUixlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBQ2ZGO0FEa0JBO0VBQ0UsdUJBNUJVO0FDYVo7QURrQkE7RUFDRSxZQUFBO0FDZkY7QURrQkE7RUFDRSxZQUFBO0FDZkY7QURrQkE7RUFDRSxhQUFBO0FDZkY7QURrQkE7RUFDRSxZQUFBO0VBQ0Esb0JBQUE7RUFDQSxtQkFBQTtBQ2ZGO0FEa0JBO0VBRUU7SUFDRSxjQUFBO0VDaEJGOztFRG1CQTtJQUNFLGtCQUFBO0lBQ0Esa0JBQUE7SUFDQSxTQUFBO0lBQ0Esa0NBNURRO0lBNkRSLGtCQUFBO0VDaEJGOztFRG1CQTtJQUNFLFlBN0RHO0lBOERILGFBOURHO0lBK0RILGFBQUE7SUFDQSxzQkFBQTtJQUNBLDZCQUFBO0VDaEJGOztFRG1CQTtJQUNFLFlBQUE7SUFDQSxhQUFBO0lBQ0EsbUJBQUE7SUFDQSw4QkFBQTtJQUNBLFdBQUE7RUNoQkY7O0VEbUJBO0lBQ0UsZUFBQTtJQUNBLE1BQUE7SUFDQSxXQUFBO0lBQ0EsVUFBQTtJQUNBLFNBQUE7RUNoQkY7QUFDRjtBRG9CQTtFQUVFO0lBQ0Usa0JBQUE7SUFDQSxrQkFBQTtJQUNBLFdBQUE7SUFDQSxTQUFBO0lBQ0Esa0NBakdRO0lBa0dSLGtCQUFBO0VDbkJGOztFRHNCQTtJQUNFLFdBQUE7SUFDQSxhQUFBO0lBQ0EsbUJBQUE7SUFDQSw2QkFBQTtFQ25CRjs7RURzQkE7SUFDRSxpQkFBQTtJQUNBLGVBQUE7SUFDQSxNQUFBO0lBQ0EsT0FBQTtJQUNBLFdBQUE7SUFDQSwwQkFBQTtJQUNBLFVBQUE7SUFDQSxpQ0FBQTtFQ25CRjtBQUNGO0FEc0JBO0VBQ0Usa0JBQUE7QUNwQkY7QUR1QkE7RUFDRSxtQkFwSU07RUFxSU4sNkJBNUhNO0VBNkhOLGVBQUE7RUFDQSxtQkFBQTtBQ3BCRjtBRHVCQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDZCQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0FDcEJGO0FEdUJBO0VBQ0ksaUJBQUE7QUNwQko7QURzQkk7RUFDSSxxQkFBQTtFQUNBLFlBQUE7QUNwQlI7QUR1Qkk7RUFDSSxzQkFBQTtBQ3JCUjtBRHlCQTtFQUNFLGVBQUE7QUN0QkY7QUR5QkE7RUFDRSxnQkFBQTtFQUNBLDZDQUFBO0VBQ0EsdUNBbEtlO0FDNElqQjtBRHlCQTtFQUNFLFlBQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSw2QkFBQTtBQ3RCRjtBRHlCQTtFQUNFLHNCQUFBO0FDdEJGO0FEeUJBO0VBQ0UsV0FBQTtFQUNBLHVDQWxMZTtBQzRKakI7QUR5QkE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw2QkFBQTtFQUNBLHFCQUFBO0VBQ0Esc0JBQUE7QUN0QkY7QUR5QkE7RUFDRSw0QkFoTWU7QUMwS2pCO0FEeUJBO0VBQ0UsMkJBbk1jO0FDNktoQjtBRHlCQTtFQUNFLHVCQUFBO0FDdEJGO0FEeUJBO0VBQ0UsVUFBQTtBQ3RCRjtBRHlCQTtFQUNFLFVBQUE7RUFDQSxrQkFBQTtBQ3RCRjtBRHlCQTtFQUNFLDRCQUFBO0FDdEJGO0FEeUJBO0VBQ0UsV0FBQTtFQUNBLGtDQUFBO0VBQ0EsdUNBek5lO0FDbU1qQjtBRHlCQTtFQUNFLGdCQUFBO0FDdEJGO0FEeUJBO0VBQ0UsVUFBQTtBQ3RCRjtBRHlCQTtFQUNFLGtCQUFBO0FDdEJGO0FEeUJBO0VBQ0Usc0JBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtBQ3RCRjtBRHlCQTtFQUNFLFVBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7QUN0QkY7QUR5QkE7RUFDRSxhQUFBO0VBQ0EsMkJBQUE7RUFDQSxtQkFBQTtBQ3RCRjtBRHlCQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0FDdEJGO0FEeUJBO0VBQ0UsZ0JBQUE7QUN0QkY7QUR5QkE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGVBQUE7QUN0QkY7QUR5QkE7RUFDRSxnQkFBQTtFQUNBLHFCQUFBO0FDdEJGO0FEeUJBO0VBQ0UsZ0NBQUE7QUN0QkY7QUR5QkE7RUFDRSxtREFBQTtVQUFBLDJDQUFBO0FDdEJGO0FBdFFBOzs7R0FBQSIsImZpbGUiOiJjb250YWN0by5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PURhbmNpbmcrU2NyaXB0JmRpc3BsYXk9c3dhcCcpO1xyXG5AaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1CZXJrc2hpcmUrU3dhc2gmZmFtaWx5PURhbmNpbmcrU2NyaXB0JmRpc3BsYXk9c3dhcCcpO1xyXG5cclxuLy92YXJpYWJsZXNcclxuJGJvZHlCYWNrZ3JvdW5kOiB2YXIoLS1ib2R5QmFja2dyb3VuZCk7XHJcbiR0aXRsZTogdmFyKC0tdGl0bGUpO1xyXG4kdGV4dENvbG9yOiB2YXIoLS10ZXh0Q29sb3IpO1xyXG4kcGFnaW5hdG9yY29sb3I6IHZhcigtLXBhZ2luYXRvckNvbG9yKTtcclxuJHN1YnRpdGxlQ29sb3I6IHZhcigtLXN1YnRpdGxlQ29sb3IpO1xyXG4kZm9ybWFjaW9uQ29sb3I6IHZhcigtLWZvcm1hY2lvbkNvbG9yKTtcclxuJHNoYWRvd0NvbG9yOiB2YXIoLS1zaGFkb3dDb2xvcik7XHJcbiRhcnRpY2xlQ29sb3I6IHZhcigtLWFydGljbGVDb2xvcik7XHJcbiRpY29uQ29sb3I6IHZhcigtLWljb25Db2xvcik7XHJcbiRtb2RlQ29sb3I6IHZhcigtLW1vZGVDb2xvcik7XHJcbiRhbGxhbjogJ0FsbGFuJywgY3Vyc2l2ZTtcclxuJGRhbmNpbmc6ICdEYW5jaW5nIFNjcmlwdCcsIGN1cnNpdmU7XHJcbiRzaXplOiAzMDBweDtcclxuXHJcbmJvZHkge1xyXG4gIHBhZGRpbmctdG9wOiAwcHg7XHJcbiAgcGFkZGluZy1sZWZ0OiAwcHg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWluLWhlaWdodDogMTAwJTtcclxuICBoZWlnaHQ6IGF1dG87XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJGJvZHlCYWNrZ3JvdW5kO1xyXG4gIHRyYW5zaXRpb246ICBiYWNrZ3JvdW5kLWNvbG9yIDNzIGxpbmVhcjtcclxufVxyXG5cclxuLnRleHQsIHRkLCBsaSwgLm1lbnVJY29uIHtcclxuICBjb2xvcjogJHRleHRDb2xvcjtcclxufVxyXG5cclxuLmJpZW52ZW5pZG8ge1xyXG4gIGNvbG9yOiAkdGV4dENvbG9yO1xyXG4gIGZvbnQtZmFtaWx5OiAkZGFuY2luZztcclxuICBmb250LXNpemU6IDMwcHg7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICBtYXJnaW4tdG9wOiAzMHB4O1xyXG59XHJcblxyXG4ubW9kZSB7XHJcbiAgY29sb3I6ICRtb2RlQ29sb3I7XHJcbn1cclxuXHJcbi5tb29uLCAuc3VuIHtcclxuICBwYWRkaW5nOiAzcHg7XHJcbn1cclxuXHJcbi5tb29uIHtcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi5zdW4ge1xyXG4gIGNvbG9yOiB5ZWxsb3c7XHJcbn1cclxuXHJcbi50aGVtZVNsaWRlIHtcclxuICBwYWRkaW5nOiAzcHg7XHJcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDkwMHB4KSAge1xyXG5cclxuICAuY2FyZEZvcm1hY2lvbiB7XHJcbiAgICBtYXJnaW4tdG9wOiA1JTtcclxuICB9XHJcblxyXG4gIC5pY29ub0NvbnRhY3RvIHtcclxuICAgIGZvbnQtc2l6ZTogeC1sYXJnZTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGxlZnQ6IDEwJTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICRpY29uQ29sb3I7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgfVxyXG5cclxuICAuY29udGFjdG9MaXN0YSB7XHJcbiAgICB3aWR0aDogJHNpemU7XHJcbiAgICBoZWlnaHQ6ICRzaXplO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcclxuICB9XHJcblxyXG4gIC5tZW51IHtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG5cclxuICBuYXYge1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICB6LWluZGV4OiAyO1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gIH1cclxuXHJcbn1cclxuXHJcbkBtZWRpYSAobWluLXdpZHRoOiA5MDBweCkge1xyXG5cclxuICAuaWNvbm9Db250YWN0byB7XHJcbiAgICBmb250LXNpemU6IHgtbGFyZ2U7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBsZWZ0OiAtMTBweDtcclxuICAgIHRvcDogLThweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICRpY29uQ29sb3I7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgfVxyXG5cclxuICAuY29udGFjdG9MaXN0YSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XHJcbiAgfVxyXG5cclxuICBuYXYge1xyXG4gICAgYmFja2dyb3VuZDogYmxhY2s7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDBweCAxMHB4IDBweDtcclxuICAgIHotaW5kZXg6IDI7XHJcbiAgICBib3gtc2hhZG93OiAwcHggMTVweCAyMHB4IHJnYigzNiwgMTcwLCA0Myk7XHJcbiAgfVxyXG59XHJcblxyXG4uY2VudHJhZG8ge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLnRpdHVsbyB7XHJcbiAgY29sb3I6ICR0aXRsZTtcclxuICBmb250LWZhbWlseTogJGFsbGFuO1xyXG4gIGZvbnQtc2l6ZTogNDBweDtcclxuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xyXG59XHJcblxyXG4uYm90b25lcy1uYXZiYXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcclxuICBmbGV4LXdyYXA6IG5vd3JhcDtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLmJvdG9uLW5hdmVnYWNpb24ge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDIwcHg7XHJcblxyXG4gICAgJjpob3ZlciB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xyXG4gICAgICAgIGNvbG9yOiBibGFjaztcclxuICAgIH1cclxuXHJcbiAgICAmOmFjdGl2ZSB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogYmx1ZTtcclxuICAgIH1cclxufVxyXG5cclxuLmNhcmQsIC5jYXJkQ2VudHJhZGEge1xyXG4gIG1hcmdpbi10b3A6IDEwJTtcclxufVxyXG5cclxuLmNhcmQge1xyXG4gIG1heC13aWR0aDogNDAwcHg7XHJcbiAgYm94LXNoYWRvdzogMTBweCAzMHB4IDMwcHggJHNoYWRvd0NvbG9yO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICRmb3JtYWNpb25Db2xvcjtcclxufVxyXG5cclxuLmNhcmRDZW50cmFkYSB7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG4gIHdpZHRoOiA1MCU7XHJcbiAgbWluLXdpZHRoOiAyNTBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxufVxyXG5cclxuc2VjdGlvbiB7XHJcbiAgcGFkZGluZzogNiUgMTAlIDQlIDEwJTtcclxufVxyXG5cclxudGFibGUge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICRmb3JtYWNpb25Db2xvcjtcclxufVxyXG5cclxuLmJvdG9uZXMtc2xpZGVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbiAgYWxpZ24taXRlbXM6IGJhc2VsaW5lO1xyXG4gIHBhZGRpbmc6IDAlIDEwJSA1JSAxMCU7XHJcbn1cclxuXHJcbi5wYWdpbmF0b3Ige1xyXG4gIGNvbG9yOiAkcGFnaW5hdG9yY29sb3I7XHJcbn1cclxuXHJcbmg0IHtcclxuICBjb2xvcjokc3VidGl0bGVDb2xvcjtcclxufVxyXG5cclxuLmJvdG9uU2xpZGVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLmJhcnJhIHtcclxuICB3aWR0aDogMjAlO1xyXG59XHJcblxyXG4ubG9nbyB7XHJcbiAgd2lkdGg6IDQwJTtcclxuICBwYWRkaW5nLWxlZnQ6IDMwcHg7XHJcbn1cclxuXHJcbi5lbmNhYmV6YWRvIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrdmlvbGV0O1xyXG59XHJcblxyXG4uY2FyZEZvcm1hY2lvbiB7XHJcbiAgd2lkdGg6IGF1dG87XHJcbiAgYm94LXNoYWRvdzogMTBweCAzMHB4IDMwcHggcmdiKDE2NywgNjYsIDY2KTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkZm9ybWFjaW9uQ29sb3I7XHJcbn1cclxuXHJcbi5oZWFkZXItY2FyZCB7XHJcbiAgbWFyZ2luLWxlZnQ6IDEwJTtcclxufVxyXG5cclxuLmVtcHJlc2Ege1xyXG4gIGNvbG9yOiByZWQ7XHJcbn1cclxuXHJcbi5wdWVzdG8ge1xyXG4gIGNvbG9yOiBncmVlbnllbGxvdztcclxufVxyXG5cclxuLnRleHRvIHtcclxuICBwYWRkaW5nOiAyNSUgMCUgMjUlIDAlO1xyXG4gIHdpZHRoOiAyMDBweDtcclxuICBoZWlnaHQ6IDIwMHB4O1xyXG59XHJcblxyXG4ubWl0YWQge1xyXG4gIHdpZHRoOiA1MCU7XHJcbiAgaGVpZ2h0OiA1MCU7XHJcbiAgcGFkZGluZy1yaWdodDogMjBweDtcclxufVxyXG5cclxuLmRvc0NvbHVtbmFzIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3ctcmV2ZXJzZTtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4uY29sdW1uYXNSZXNwb25zaXZhcyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5jb2x1bW5hRG9zIHtcclxuICBtYXJnaW4tbGVmdDogMjAlO1xyXG59XHJcblxyXG4uY29udGFjdG9JdGVtIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7ICBcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbjo6bmctZGVlcCBhIHtcclxuICBjb2xvcjogYWxpY2VibHVlO1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxufVxyXG5cclxuLmVubGFjZSB7XHJcbiAgY29sb3I6IHJnYmEoNDQsIDE5OSwgMTM0LCAwLjc4MSk7XHJcbn1cclxuXHJcbjo6bmctZGVlcCAuYmFja2Ryb3BCYWNrZ3JvdW5kIHtcclxuICBiYWNrZHJvcC1maWx0ZXI6IGJyaWdodG5lc3MoMC44KSBibHVyKDEwcHgpO1xyXG59IiwiQGltcG9ydCB1cmwoXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PURhbmNpbmcrU2NyaXB0JmRpc3BsYXk9c3dhcFwiKTtcbkBpbXBvcnQgdXJsKFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1CZXJrc2hpcmUrU3dhc2gmZmFtaWx5PURhbmNpbmcrU2NyaXB0JmRpc3BsYXk9c3dhcFwiKTtcbmJvZHkge1xuICBwYWRkaW5nLXRvcDogMHB4O1xuICBwYWRkaW5nLWxlZnQ6IDBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIG1pbi1oZWlnaHQ6IDEwMCU7XG4gIGhlaWdodDogYXV0bztcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYm9keUJhY2tncm91bmQpO1xuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDNzIGxpbmVhcjtcbn1cblxuLnRleHQsIHRkLCBsaSwgLm1lbnVJY29uIHtcbiAgY29sb3I6IHZhcigtLXRleHRDb2xvcik7XG59XG5cbi5iaWVudmVuaWRvIHtcbiAgY29sb3I6IHZhcigtLXRleHRDb2xvcik7XG4gIGZvbnQtZmFtaWx5OiBcIkRhbmNpbmcgU2NyaXB0XCIsIGN1cnNpdmU7XG4gIGZvbnQtc2l6ZTogMzBweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbWFyZ2luLXRvcDogMzBweDtcbn1cblxuLm1vZGUge1xuICBjb2xvcjogdmFyKC0tbW9kZUNvbG9yKTtcbn1cblxuLm1vb24sIC5zdW4ge1xuICBwYWRkaW5nOiAzcHg7XG59XG5cbi5tb29uIHtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4uc3VuIHtcbiAgY29sb3I6IHllbGxvdztcbn1cblxuLnRoZW1lU2xpZGUge1xuICBwYWRkaW5nOiAzcHg7XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogOTAwcHgpIHtcbiAgLmNhcmRGb3JtYWNpb24ge1xuICAgIG1hcmdpbi10b3A6IDUlO1xuICB9XG5cbiAgLmljb25vQ29udGFjdG8ge1xuICAgIGZvbnQtc2l6ZTogeC1sYXJnZTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbGVmdDogMTAlO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWljb25Db2xvcik7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICB9XG5cbiAgLmNvbnRhY3RvTGlzdGEge1xuICAgIHdpZHRoOiAzMDBweDtcbiAgICBoZWlnaHQ6IDMwMHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcbiAgfVxuXG4gIC5tZW51IHtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuXG4gIG5hdiB7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHRvcDogMDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICB6LWluZGV4OiAyO1xuICAgIG1hcmdpbjogMDtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDkwMHB4KSB7XG4gIC5pY29ub0NvbnRhY3RvIHtcbiAgICBmb250LXNpemU6IHgtbGFyZ2U7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGxlZnQ6IC0xMHB4O1xuICAgIHRvcDogLThweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pY29uQ29sb3IpO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgfVxuXG4gIC5jb250YWN0b0xpc3RhIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XG4gIH1cblxuICBuYXYge1xuICAgIGJhY2tncm91bmQ6IGJsYWNrO1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwYWRkaW5nOiAxMHB4IDBweCAxMHB4IDBweDtcbiAgICB6LWluZGV4OiAyO1xuICAgIGJveC1zaGFkb3c6IDBweCAxNXB4IDIwcHggIzI0YWEyYjtcbiAgfVxufVxuLmNlbnRyYWRvIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4udGl0dWxvIHtcbiAgY29sb3I6IHZhcigtLXRpdGxlKTtcbiAgZm9udC1mYW1pbHk6IFwiQWxsYW5cIiwgY3Vyc2l2ZTtcbiAgZm9udC1zaXplOiA0MHB4O1xuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xufVxuXG4uYm90b25lcy1uYXZiYXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcbiAgZmxleC13cmFwOiBub3dyYXA7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uYm90b24tbmF2ZWdhY2lvbiB7XG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xufVxuLmJvdG9uLW5hdmVnYWNpb246aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XG4gIGNvbG9yOiBibGFjaztcbn1cbi5ib3Rvbi1uYXZlZ2FjaW9uOmFjdGl2ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IGJsdWU7XG59XG5cbi5jYXJkLCAuY2FyZENlbnRyYWRhIHtcbiAgbWFyZ2luLXRvcDogMTAlO1xufVxuXG4uY2FyZCB7XG4gIG1heC13aWR0aDogNDAwcHg7XG4gIGJveC1zaGFkb3c6IDEwcHggMzBweCAzMHB4IHZhcigtLXNoYWRvd0NvbG9yKTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZm9ybWFjaW9uQ29sb3IpO1xufVxuXG4uY2FyZENlbnRyYWRhIHtcbiAgbWFyZ2luOiBhdXRvO1xuICB3aWR0aDogNTAlO1xuICBtaW4td2lkdGg6IDI1MHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbn1cblxuc2VjdGlvbiB7XG4gIHBhZGRpbmc6IDYlIDEwJSA0JSAxMCU7XG59XG5cbnRhYmxlIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWZvcm1hY2lvbkNvbG9yKTtcbn1cblxuLmJvdG9uZXMtc2xpZGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gIGFsaWduLWl0ZW1zOiBiYXNlbGluZTtcbiAgcGFkZGluZzogMCUgMTAlIDUlIDEwJTtcbn1cblxuLnBhZ2luYXRvciB7XG4gIGNvbG9yOiB2YXIoLS1wYWdpbmF0b3JDb2xvcik7XG59XG5cbmg0IHtcbiAgY29sb3I6IHZhcigtLXN1YnRpdGxlQ29sb3IpO1xufVxuXG4uYm90b25TbGlkZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbn1cblxuLmJhcnJhIHtcbiAgd2lkdGg6IDIwJTtcbn1cblxuLmxvZ28ge1xuICB3aWR0aDogNDAlO1xuICBwYWRkaW5nLWxlZnQ6IDMwcHg7XG59XG5cbi5lbmNhYmV6YWRvIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogZGFya3Zpb2xldDtcbn1cblxuLmNhcmRGb3JtYWNpb24ge1xuICB3aWR0aDogYXV0bztcbiAgYm94LXNoYWRvdzogMTBweCAzMHB4IDMwcHggI2E3NDI0MjtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZm9ybWFjaW9uQ29sb3IpO1xufVxuXG4uaGVhZGVyLWNhcmQge1xuICBtYXJnaW4tbGVmdDogMTAlO1xufVxuXG4uZW1wcmVzYSB7XG4gIGNvbG9yOiByZWQ7XG59XG5cbi5wdWVzdG8ge1xuICBjb2xvcjogZ3JlZW55ZWxsb3c7XG59XG5cbi50ZXh0byB7XG4gIHBhZGRpbmc6IDI1JSAwJSAyNSUgMCU7XG4gIHdpZHRoOiAyMDBweDtcbiAgaGVpZ2h0OiAyMDBweDtcbn1cblxuLm1pdGFkIHtcbiAgd2lkdGg6IDUwJTtcbiAgaGVpZ2h0OiA1MCU7XG4gIHBhZGRpbmctcmlnaHQ6IDIwcHg7XG59XG5cbi5kb3NDb2x1bW5hcyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3ctcmV2ZXJzZTtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmNvbHVtbmFzUmVzcG9uc2l2YXMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uY29sdW1uYURvcyB7XG4gIG1hcmdpbi1sZWZ0OiAyMCU7XG59XG5cbi5jb250YWN0b0l0ZW0ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG46Om5nLWRlZXAgYSB7XG4gIGNvbG9yOiBhbGljZWJsdWU7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuLmVubGFjZSB7XG4gIGNvbG9yOiByZ2JhKDQ0LCAxOTksIDEzNCwgMC43ODEpO1xufVxuXG46Om5nLWRlZXAgLmJhY2tkcm9wQmFja2dyb3VuZCB7XG4gIGJhY2tkcm9wLWZpbHRlcjogYnJpZ2h0bmVzcygwLjgpIGJsdXIoMTBweCk7XG59XG5cbi8qIGJvZHkge1xuICAgIGJhY2tncm91bmQ6IHJnYigyNywyMCwxNDIpO1xuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgyNzBkZWcsIHJnYmEoNDksMTc1LDExNCwxKSAxMCUsIHJnYmEoMjcsMjAsMTQyLDEpIDUwJSwgIHJnYmEoMjU1LDQxLDAsMSkgMTAwJSk7XG59ICovIl19 */"], data: { animation: [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('flyInOut', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':enter', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["useAnimation"])(_animations__WEBPACK_IMPORTED_MODULE_1__["flyInOutAnimation"], {
                        params: {
                            time: '3s'
                        }
                    })
                ])
            ])
        ] } });


/***/ }),

/***/ "hrlM":
/*!*******************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.ts ***!
  \*******************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "R0Ic");
/* harmony import */ var _animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../animations */ "J1Ni");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_mobileDetector_mobile_detector_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/mobileDetector/mobile-detector.service */ "HhPq");
/* harmony import */ var _services_themeChanger_theme_changer_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/themeChanger/theme-changer.service */ "ylcm");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/slide-toggle */ "1jcm");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/menu */ "STbY");










function NavbarComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "button", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "a", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "Home");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "button", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "a", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "Formaci\u00F3n");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "button", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "a", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "Experiencia");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "button", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "a", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, "Contacto");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "mat-icon", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16, "light_mode");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "mat-slide-toggle", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function NavbarComponent_div_1_Template_mat_slide_toggle_click_17_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r2.changeTheme(); })("ngModelChange", function NavbarComponent_div_1_Template_mat_slide_toggle_ngModelChange_17_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r3); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r4.isChecked = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "mat-icon", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](19, "dark_mode");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("@flyInTop", undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("@rotatedState", ctx_r0.state);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx_r0.isChecked);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("@rotatedState", ctx_r0.state);
} }
function NavbarComponent_div_2_mat_icon_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-icon", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "dark_mode");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function NavbarComponent_div_2_mat_icon_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-icon", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "light_mode");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function NavbarComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "more_vert");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function NavbarComponent_div_2_Template_button_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r9); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r8.changeTheme(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](6, NavbarComponent_div_2_mat_icon_6_Template, 2, 0, "mat-icon", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](7, NavbarComponent_div_2_mat_icon_7_Template, 2, 0, "mat-icon", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "mat-menu", null, 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "a", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, "Home");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "a", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, "Formacion");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "a", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18, "Experiencia");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "a", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](21, "Contacto");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](9);
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("@flyInTop", undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("matMenuTriggerFor", _r7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("@rotatedState", ctx_r1.state);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx_r1.isDark);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r1.isDark);
} }
class NavbarComponent {
    constructor(mobileDetector, themeChanger) {
        this.mobileDetector = mobileDetector;
        this.themeChanger = themeChanger;
        this.home = false;
        this.formacion = false;
        this.experiencia = false;
        this.contacto = false;
        this.isMobile = false;
        this.isDark = true;
        this.isChecked = false;
        this.state = 'default';
    }
    ngOnInit() {
        this.themeChanger.darkTheme();
        this.isMobile = this.mobileDetector.isMobile();
        switch (this.actual) {
            case 1:
                this.home = true;
                this.formacion = false;
                this.experiencia = false;
                this.contacto = false;
                break;
            case 2:
                this.home = false;
                this.formacion = true;
                this.experiencia = false;
                this.contacto = false;
                break;
            case 3:
                this.home = false;
                this.formacion = false;
                this.experiencia = true;
                this.contacto = false;
                break;
            case 4:
                this.home = false;
                this.formacion = false;
                this.experiencia = false;
                this.contacto = true;
                break;
            default:
                this.home = false;
                this.formacion = false;
                this.experiencia = false;
                this.contacto = false;
                break;
        }
    }
    changeTheme() {
        this.isChecked = !this.isChecked;
        this.isDark = this.themeChanger.changeTheme();
        this.rotate();
    }
    rotate() {
        console.log("aaa");
        this.state = (this.state === 'default' ? 'rotated' : 'default');
    }
}
NavbarComponent.ɵfac = function NavbarComponent_Factory(t) { return new (t || NavbarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_mobileDetector_mobile_detector_service__WEBPACK_IMPORTED_MODULE_3__["MobileDetectorService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_themeChanger_theme_changer_service__WEBPACK_IMPORTED_MODULE_4__["ThemeChangerService"])); };
NavbarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: NavbarComponent, selectors: [["app-navbar"]], inputs: { actual: "actual" }, decls: 3, vars: 2, consts: [["class", "navbar", 4, "ngIf"], [4, "ngIf"], [1, "navbar"], [1, "botones-navbar"], ["mat-button", "", "color", "primary", 1, "boton-navegacion"], ["href", "#home"], ["href", "#formacion"], ["href", "#experiencia"], ["href", "#contacto"], [1, "themeSlide"], [1, "sun"], [3, "ngModel", "click", "ngModelChange"], [1, "moon"], [1, "menu"], ["mat-icon-button", "", 1, "menuIcon", 3, "matMenuTriggerFor"], ["mat-mini-fab", "", "color", "primary", 1, "boton-navegacion", 3, "click"], ["class", "mode", 4, "ngIf"], ["menu", "matMenu"], ["mat-menu-item", "", "color", "primary", 1, "boton-navegacion"], [1, "mode"]], template: function NavbarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "nav");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, NavbarComponent_div_1_Template, 20, 4, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, NavbarComponent_div_2_Template, 22, 5, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.isMobile);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.isMobile);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIcon"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_8__["MatSlideToggle"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_9__["MatMenuTrigger"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_9__["MatMenu"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_9__["MatMenuItem"]], styles: ["@import url(\"https://fonts.googleapis.com/css2?family=Dancing+Script&display=swap\");\n@import url(\"https://fonts.googleapis.com/css2?family=Berkshire+Swash&family=Dancing+Script&display=swap\");\nbody[_ngcontent-%COMP%] {\n  padding-top: 0px;\n  padding-left: 0px;\n  width: 100%;\n  min-height: 100%;\n  height: auto;\n  background-color: var(--bodyBackground);\n  transition: background-color 3s linear;\n}\n.text[_ngcontent-%COMP%], td[_ngcontent-%COMP%], li[_ngcontent-%COMP%], .menuIcon[_ngcontent-%COMP%] {\n  color: var(--textColor);\n}\n.bienvenido[_ngcontent-%COMP%] {\n  color: var(--textColor);\n  font-family: \"Dancing Script\", cursive;\n  font-size: 30px;\n  font-weight: 500;\n  margin-top: 30px;\n}\n.mode[_ngcontent-%COMP%] {\n  color: var(--modeColor);\n}\n.moon[_ngcontent-%COMP%], .sun[_ngcontent-%COMP%] {\n  padding: 3px;\n}\n.moon[_ngcontent-%COMP%] {\n  color: white;\n}\n.sun[_ngcontent-%COMP%] {\n  color: yellow;\n}\n.themeSlide[_ngcontent-%COMP%] {\n  padding: 3px;\n  display: inline-flex;\n  align-items: center;\n}\n@media (max-width: 900px) {\n  .cardFormacion[_ngcontent-%COMP%] {\n    margin-top: 5%;\n  }\n\n  .iconoContacto[_ngcontent-%COMP%] {\n    font-size: x-large;\n    position: absolute;\n    left: 10%;\n    background-color: var(--iconColor);\n    border-radius: 50%;\n  }\n\n  .contactoLista[_ngcontent-%COMP%] {\n    width: 300px;\n    height: 300px;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-evenly;\n  }\n\n  .menu[_ngcontent-%COMP%] {\n    color: white;\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between;\n    width: 100%;\n  }\n\n  nav[_ngcontent-%COMP%] {\n    position: fixed;\n    top: 0;\n    width: 100%;\n    z-index: 2;\n    margin: 0;\n  }\n}\n@media (min-width: 900px) {\n  .iconoContacto[_ngcontent-%COMP%] {\n    font-size: x-large;\n    position: relative;\n    left: -10px;\n    top: -8px;\n    background-color: var(--iconColor);\n    border-radius: 50%;\n  }\n\n  .contactoLista[_ngcontent-%COMP%] {\n    width: 100%;\n    display: flex;\n    flex-direction: row;\n    justify-content: space-evenly;\n  }\n\n  nav[_ngcontent-%COMP%] {\n    background: black;\n    position: fixed;\n    top: 0;\n    left: 0;\n    width: 100%;\n    padding: 10px 0px 10px 0px;\n    z-index: 2;\n    box-shadow: 0px 15px 20px #24aa2b;\n  }\n}\n.centrado[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.titulo[_ngcontent-%COMP%] {\n  color: var(--title);\n  font-family: \"Allan\", cursive;\n  font-size: 40px;\n  margin-bottom: 30px;\n}\n.botones-navbar[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-evenly;\n  flex-wrap: nowrap;\n  width: 100%;\n}\n.boton-navegacion[_ngcontent-%COMP%] {\n  margin-left: 20px;\n}\n.boton-navegacion[_ngcontent-%COMP%]:hover {\n  background-color: red;\n  color: black;\n}\n.boton-navegacion[_ngcontent-%COMP%]:active {\n  background-color: blue;\n}\n.card[_ngcontent-%COMP%], .cardCentrada[_ngcontent-%COMP%] {\n  margin-top: 10%;\n}\n.card[_ngcontent-%COMP%] {\n  max-width: 400px;\n  box-shadow: 10px 30px 30px var(--shadowColor);\n  background-color: var(--formacionColor);\n}\n.cardCentrada[_ngcontent-%COMP%] {\n  margin: auto;\n  width: 50%;\n  min-width: 250px;\n  background-color: transparent;\n}\nsection[_ngcontent-%COMP%] {\n  padding: 6% 10% 4% 10%;\n}\ntable[_ngcontent-%COMP%] {\n  width: 100%;\n  background-color: var(--formacionColor);\n}\n.botones-slider[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-around;\n  align-items: baseline;\n  padding: 0% 10% 5% 10%;\n}\n.paginator[_ngcontent-%COMP%] {\n  color: var(--paginatorColor);\n}\nh4[_ngcontent-%COMP%] {\n  color: var(--subtitleColor);\n}\n.botonSlider[_ngcontent-%COMP%] {\n  background-color: white;\n}\n.barra[_ngcontent-%COMP%] {\n  width: 20%;\n}\n.logo[_ngcontent-%COMP%] {\n  width: 40%;\n  padding-left: 30px;\n}\n.encabezado[_ngcontent-%COMP%] {\n  background-color: darkviolet;\n}\n.cardFormacion[_ngcontent-%COMP%] {\n  width: auto;\n  box-shadow: 10px 30px 30px #a74242;\n  background-color: var(--formacionColor);\n}\n.header-card[_ngcontent-%COMP%] {\n  margin-left: 10%;\n}\n.empresa[_ngcontent-%COMP%] {\n  color: red;\n}\n.puesto[_ngcontent-%COMP%] {\n  color: greenyellow;\n}\n.texto[_ngcontent-%COMP%] {\n  padding: 25% 0% 25% 0%;\n  width: 200px;\n  height: 200px;\n}\n.mitad[_ngcontent-%COMP%] {\n  width: 50%;\n  height: 50%;\n  padding-right: 20px;\n}\n.dosColumnas[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row-reverse;\n  align-items: center;\n}\n.columnasResponsivas[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n}\n.columnaDos[_ngcontent-%COMP%] {\n  margin-left: 20%;\n}\n.contactoItem[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  cursor: pointer;\n}\n  a {\n  color: aliceblue;\n  text-decoration: none;\n}\n.enlace[_ngcontent-%COMP%] {\n  color: rgba(44, 199, 134, 0.781);\n}\n  .backdropBackground {\n  -webkit-backdrop-filter: brightness(0.8) blur(10px);\n          backdrop-filter: brightness(0.8) blur(10px);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXGFwcC5jb21wb25lbnQuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFxuYXZiYXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQVEsbUZBQUE7QUFDQSwwR0FBQTtBQWlCUjtFQUNFLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsdUNBcEJlO0VBcUJmLHNDQUFBO0FDZkY7QURrQkE7RUFDRSx1QkF2QlU7QUNRWjtBRGtCQTtFQUNFLHVCQTNCVTtFQTRCVixzQ0FuQlE7RUFvQlIsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUNmRjtBRGtCQTtFQUNFLHVCQTVCVTtBQ2FaO0FEa0JBO0VBQ0UsWUFBQTtBQ2ZGO0FEa0JBO0VBQ0UsWUFBQTtBQ2ZGO0FEa0JBO0VBQ0UsYUFBQTtBQ2ZGO0FEa0JBO0VBQ0UsWUFBQTtFQUNBLG9CQUFBO0VBQ0EsbUJBQUE7QUNmRjtBRGtCQTtFQUVFO0lBQ0UsY0FBQTtFQ2hCRjs7RURtQkE7SUFDRSxrQkFBQTtJQUNBLGtCQUFBO0lBQ0EsU0FBQTtJQUNBLGtDQTVEUTtJQTZEUixrQkFBQTtFQ2hCRjs7RURtQkE7SUFDRSxZQTdERztJQThESCxhQTlERztJQStESCxhQUFBO0lBQ0Esc0JBQUE7SUFDQSw2QkFBQTtFQ2hCRjs7RURtQkE7SUFDRSxZQUFBO0lBQ0EsYUFBQTtJQUNBLG1CQUFBO0lBQ0EsOEJBQUE7SUFDQSxXQUFBO0VDaEJGOztFRG1CQTtJQUNFLGVBQUE7SUFDQSxNQUFBO0lBQ0EsV0FBQTtJQUNBLFVBQUE7SUFDQSxTQUFBO0VDaEJGO0FBQ0Y7QURvQkE7RUFFRTtJQUNFLGtCQUFBO0lBQ0Esa0JBQUE7SUFDQSxXQUFBO0lBQ0EsU0FBQTtJQUNBLGtDQWpHUTtJQWtHUixrQkFBQTtFQ25CRjs7RURzQkE7SUFDRSxXQUFBO0lBQ0EsYUFBQTtJQUNBLG1CQUFBO0lBQ0EsNkJBQUE7RUNuQkY7O0VEc0JBO0lBQ0UsaUJBQUE7SUFDQSxlQUFBO0lBQ0EsTUFBQTtJQUNBLE9BQUE7SUFDQSxXQUFBO0lBQ0EsMEJBQUE7SUFDQSxVQUFBO0lBQ0EsaUNBQUE7RUNuQkY7QUFDRjtBRHNCQTtFQUNFLGtCQUFBO0FDcEJGO0FEdUJBO0VBQ0UsbUJBcElNO0VBcUlOLDZCQTVITTtFQTZITixlQUFBO0VBQ0EsbUJBQUE7QUNwQkY7QUR1QkE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw2QkFBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtBQ3BCRjtBRHVCQTtFQUNJLGlCQUFBO0FDcEJKO0FEc0JJO0VBQ0kscUJBQUE7RUFDQSxZQUFBO0FDcEJSO0FEdUJJO0VBQ0ksc0JBQUE7QUNyQlI7QUR5QkE7RUFDRSxlQUFBO0FDdEJGO0FEeUJBO0VBQ0UsZ0JBQUE7RUFDQSw2Q0FBQTtFQUNBLHVDQWxLZTtBQzRJakI7QUR5QkE7RUFDRSxZQUFBO0VBQ0EsVUFBQTtFQUNBLGdCQUFBO0VBQ0EsNkJBQUE7QUN0QkY7QUR5QkE7RUFDRSxzQkFBQTtBQ3RCRjtBRHlCQTtFQUNFLFdBQUE7RUFDQSx1Q0FsTGU7QUM0SmpCO0FEeUJBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsNkJBQUE7RUFDQSxxQkFBQTtFQUNBLHNCQUFBO0FDdEJGO0FEeUJBO0VBQ0UsNEJBaE1lO0FDMEtqQjtBRHlCQTtFQUNFLDJCQW5NYztBQzZLaEI7QUR5QkE7RUFDRSx1QkFBQTtBQ3RCRjtBRHlCQTtFQUNFLFVBQUE7QUN0QkY7QUR5QkE7RUFDRSxVQUFBO0VBQ0Esa0JBQUE7QUN0QkY7QUR5QkE7RUFDRSw0QkFBQTtBQ3RCRjtBRHlCQTtFQUNFLFdBQUE7RUFDQSxrQ0FBQTtFQUNBLHVDQXpOZTtBQ21NakI7QUR5QkE7RUFDRSxnQkFBQTtBQ3RCRjtBRHlCQTtFQUNFLFVBQUE7QUN0QkY7QUR5QkE7RUFDRSxrQkFBQTtBQ3RCRjtBRHlCQTtFQUNFLHNCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7QUN0QkY7QUR5QkE7RUFDRSxVQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0FDdEJGO0FEeUJBO0VBQ0UsYUFBQTtFQUNBLDJCQUFBO0VBQ0EsbUJBQUE7QUN0QkY7QUR5QkE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtBQ3RCRjtBRHlCQTtFQUNFLGdCQUFBO0FDdEJGO0FEeUJBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxlQUFBO0FDdEJGO0FEeUJBO0VBQ0UsZ0JBQUE7RUFDQSxxQkFBQTtBQ3RCRjtBRHlCQTtFQUNFLGdDQUFBO0FDdEJGO0FEeUJBO0VBQ0UsbURBQUE7VUFBQSwyQ0FBQTtBQ3RCRiIsImZpbGUiOiJuYXZiYXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1EYW5jaW5nK1NjcmlwdCZkaXNwbGF5PXN3YXAnKTtcclxuQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9QmVya3NoaXJlK1N3YXNoJmZhbWlseT1EYW5jaW5nK1NjcmlwdCZkaXNwbGF5PXN3YXAnKTtcclxuXHJcbi8vdmFyaWFibGVzXHJcbiRib2R5QmFja2dyb3VuZDogdmFyKC0tYm9keUJhY2tncm91bmQpO1xyXG4kdGl0bGU6IHZhcigtLXRpdGxlKTtcclxuJHRleHRDb2xvcjogdmFyKC0tdGV4dENvbG9yKTtcclxuJHBhZ2luYXRvcmNvbG9yOiB2YXIoLS1wYWdpbmF0b3JDb2xvcik7XHJcbiRzdWJ0aXRsZUNvbG9yOiB2YXIoLS1zdWJ0aXRsZUNvbG9yKTtcclxuJGZvcm1hY2lvbkNvbG9yOiB2YXIoLS1mb3JtYWNpb25Db2xvcik7XHJcbiRzaGFkb3dDb2xvcjogdmFyKC0tc2hhZG93Q29sb3IpO1xyXG4kYXJ0aWNsZUNvbG9yOiB2YXIoLS1hcnRpY2xlQ29sb3IpO1xyXG4kaWNvbkNvbG9yOiB2YXIoLS1pY29uQ29sb3IpO1xyXG4kbW9kZUNvbG9yOiB2YXIoLS1tb2RlQ29sb3IpO1xyXG4kYWxsYW46ICdBbGxhbicsIGN1cnNpdmU7XHJcbiRkYW5jaW5nOiAnRGFuY2luZyBTY3JpcHQnLCBjdXJzaXZlO1xyXG4kc2l6ZTogMzAwcHg7XHJcblxyXG5ib2R5IHtcclxuICBwYWRkaW5nLXRvcDogMHB4O1xyXG4gIHBhZGRpbmctbGVmdDogMHB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1pbi1oZWlnaHQ6IDEwMCU7XHJcbiAgaGVpZ2h0OiBhdXRvO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICRib2R5QmFja2dyb3VuZDtcclxuICB0cmFuc2l0aW9uOiAgYmFja2dyb3VuZC1jb2xvciAzcyBsaW5lYXI7XHJcbn1cclxuXHJcbi50ZXh0LCB0ZCwgbGksIC5tZW51SWNvbiB7XHJcbiAgY29sb3I6ICR0ZXh0Q29sb3I7XHJcbn1cclxuXHJcbi5iaWVudmVuaWRvIHtcclxuICBjb2xvcjogJHRleHRDb2xvcjtcclxuICBmb250LWZhbWlseTogJGRhbmNpbmc7XHJcbiAgZm9udC1zaXplOiAzMHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgbWFyZ2luLXRvcDogMzBweDtcclxufVxyXG5cclxuLm1vZGUge1xyXG4gIGNvbG9yOiAkbW9kZUNvbG9yO1xyXG59XHJcblxyXG4ubW9vbiwgLnN1biB7XHJcbiAgcGFkZGluZzogM3B4O1xyXG59XHJcblxyXG4ubW9vbiB7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4uc3VuIHtcclxuICBjb2xvcjogeWVsbG93O1xyXG59XHJcblxyXG4udGhlbWVTbGlkZSB7XHJcbiAgcGFkZGluZzogM3B4O1xyXG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA5MDBweCkgIHtcclxuXHJcbiAgLmNhcmRGb3JtYWNpb24ge1xyXG4gICAgbWFyZ2luLXRvcDogNSU7XHJcbiAgfVxyXG5cclxuICAuaWNvbm9Db250YWN0byB7XHJcbiAgICBmb250LXNpemU6IHgtbGFyZ2U7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBsZWZ0OiAxMCU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkaWNvbkNvbG9yO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIH1cclxuXHJcbiAgLmNvbnRhY3RvTGlzdGEge1xyXG4gICAgd2lkdGg6ICRzaXplO1xyXG4gICAgaGVpZ2h0OiAkc2l6ZTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XHJcbiAgfVxyXG5cclxuICAubWVudSB7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuXHJcbiAgbmF2IHtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHRvcDogMDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgei1pbmRleDogMjtcclxuICAgIG1hcmdpbjogMDtcclxuICB9XHJcblxyXG59XHJcblxyXG5AbWVkaWEgKG1pbi13aWR0aDogOTAwcHgpIHtcclxuXHJcbiAgLmljb25vQ29udGFjdG8ge1xyXG4gICAgZm9udC1zaXplOiB4LWxhcmdlO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgbGVmdDogLTEwcHg7XHJcbiAgICB0b3A6IC04cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkaWNvbkNvbG9yO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIH1cclxuXHJcbiAgLmNvbnRhY3RvTGlzdGEge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xyXG4gIH1cclxuXHJcbiAgbmF2IHtcclxuICAgIGJhY2tncm91bmQ6IGJsYWNrO1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgcGFkZGluZzogMTBweCAwcHggMTBweCAwcHg7XHJcbiAgICB6LWluZGV4OiAyO1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDE1cHggMjBweCByZ2IoMzYsIDE3MCwgNDMpO1xyXG4gIH1cclxufVxyXG5cclxuLmNlbnRyYWRvIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi50aXR1bG8ge1xyXG4gIGNvbG9yOiAkdGl0bGU7XHJcbiAgZm9udC1mYW1pbHk6ICRhbGxhbjtcclxuICBmb250LXNpemU6IDQwcHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcclxufVxyXG5cclxuLmJvdG9uZXMtbmF2YmFyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XHJcbiAgZmxleC13cmFwOiBub3dyYXA7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5ib3Rvbi1uYXZlZ2FjaW9uIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xyXG5cclxuICAgICY6aG92ZXIge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcclxuICAgICAgICBjb2xvcjogYmxhY2s7XHJcbiAgICB9XHJcblxyXG4gICAgJjphY3RpdmUge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IGJsdWU7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5jYXJkLCAuY2FyZENlbnRyYWRhIHtcclxuICBtYXJnaW4tdG9wOiAxMCU7XHJcbn1cclxuXHJcbi5jYXJkIHtcclxuICBtYXgtd2lkdGg6IDQwMHB4O1xyXG4gIGJveC1zaGFkb3c6IDEwcHggMzBweCAzMHB4ICRzaGFkb3dDb2xvcjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkZm9ybWFjaW9uQ29sb3I7XHJcbn1cclxuXHJcbi5jYXJkQ2VudHJhZGEge1xyXG4gIG1hcmdpbjogYXV0bztcclxuICB3aWR0aDogNTAlO1xyXG4gIG1pbi13aWR0aDogMjUwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbn1cclxuXHJcbnNlY3Rpb24ge1xyXG4gIHBhZGRpbmc6IDYlIDEwJSA0JSAxMCU7XHJcbn1cclxuXHJcbnRhYmxlIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkZm9ybWFjaW9uQ29sb3I7XHJcbn1cclxuXHJcbi5ib3RvbmVzLXNsaWRlciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG4gIGFsaWduLWl0ZW1zOiBiYXNlbGluZTtcclxuICBwYWRkaW5nOiAwJSAxMCUgNSUgMTAlO1xyXG59XHJcblxyXG4ucGFnaW5hdG9yIHtcclxuICBjb2xvcjogJHBhZ2luYXRvcmNvbG9yO1xyXG59XHJcblxyXG5oNCB7XHJcbiAgY29sb3I6JHN1YnRpdGxlQ29sb3I7XHJcbn1cclxuXHJcbi5ib3RvblNsaWRlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi5iYXJyYSB7XHJcbiAgd2lkdGg6IDIwJTtcclxufVxyXG5cclxuLmxvZ28ge1xyXG4gIHdpZHRoOiA0MCU7XHJcbiAgcGFkZGluZy1sZWZ0OiAzMHB4O1xyXG59XHJcblxyXG4uZW5jYWJlemFkbyB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogZGFya3Zpb2xldDtcclxufVxyXG5cclxuLmNhcmRGb3JtYWNpb24ge1xyXG4gIHdpZHRoOiBhdXRvO1xyXG4gIGJveC1zaGFkb3c6IDEwcHggMzBweCAzMHB4IHJnYigxNjcsIDY2LCA2Nik7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJGZvcm1hY2lvbkNvbG9yO1xyXG59XHJcblxyXG4uaGVhZGVyLWNhcmQge1xyXG4gIG1hcmdpbi1sZWZ0OiAxMCU7XHJcbn1cclxuXHJcbi5lbXByZXNhIHtcclxuICBjb2xvcjogcmVkO1xyXG59XHJcblxyXG4ucHVlc3RvIHtcclxuICBjb2xvcjogZ3JlZW55ZWxsb3c7XHJcbn1cclxuXHJcbi50ZXh0byB7XHJcbiAgcGFkZGluZzogMjUlIDAlIDI1JSAwJTtcclxuICB3aWR0aDogMjAwcHg7XHJcbiAgaGVpZ2h0OiAyMDBweDtcclxufVxyXG5cclxuLm1pdGFkIHtcclxuICB3aWR0aDogNTAlO1xyXG4gIGhlaWdodDogNTAlO1xyXG4gIHBhZGRpbmctcmlnaHQ6IDIwcHg7XHJcbn1cclxuXHJcbi5kb3NDb2x1bW5hcyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93LXJldmVyc2U7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLmNvbHVtbmFzUmVzcG9uc2l2YXMge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4uY29sdW1uYURvcyB7XHJcbiAgbWFyZ2luLWxlZnQ6IDIwJTtcclxufVxyXG5cclxuLmNvbnRhY3RvSXRlbSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyOyAgXHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG46Om5nLWRlZXAgYSB7XHJcbiAgY29sb3I6IGFsaWNlYmx1ZTtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbn1cclxuXHJcbi5lbmxhY2Uge1xyXG4gIGNvbG9yOiByZ2JhKDQ0LCAxOTksIDEzNCwgMC43ODEpO1xyXG59XHJcblxyXG46Om5nLWRlZXAgLmJhY2tkcm9wQmFja2dyb3VuZCB7XHJcbiAgYmFja2Ryb3AtZmlsdGVyOiBicmlnaHRuZXNzKDAuOCkgYmx1cigxMHB4KTtcclxufSIsIkBpbXBvcnQgdXJsKFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1EYW5jaW5nK1NjcmlwdCZkaXNwbGF5PXN3YXBcIik7XG5AaW1wb3J0IHVybChcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9QmVya3NoaXJlK1N3YXNoJmZhbWlseT1EYW5jaW5nK1NjcmlwdCZkaXNwbGF5PXN3YXBcIik7XG5ib2R5IHtcbiAgcGFkZGluZy10b3A6IDBweDtcbiAgcGFkZGluZy1sZWZ0OiAwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBtaW4taGVpZ2h0OiAxMDAlO1xuICBoZWlnaHQ6IGF1dG87XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJvZHlCYWNrZ3JvdW5kKTtcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAzcyBsaW5lYXI7XG59XG5cbi50ZXh0LCB0ZCwgbGksIC5tZW51SWNvbiB7XG4gIGNvbG9yOiB2YXIoLS10ZXh0Q29sb3IpO1xufVxuXG4uYmllbnZlbmlkbyB7XG4gIGNvbG9yOiB2YXIoLS10ZXh0Q29sb3IpO1xuICBmb250LWZhbWlseTogXCJEYW5jaW5nIFNjcmlwdFwiLCBjdXJzaXZlO1xuICBmb250LXNpemU6IDMwcHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIG1hcmdpbi10b3A6IDMwcHg7XG59XG5cbi5tb2RlIHtcbiAgY29sb3I6IHZhcigtLW1vZGVDb2xvcik7XG59XG5cbi5tb29uLCAuc3VuIHtcbiAgcGFkZGluZzogM3B4O1xufVxuXG4ubW9vbiB7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLnN1biB7XG4gIGNvbG9yOiB5ZWxsb3c7XG59XG5cbi50aGVtZVNsaWRlIHtcbiAgcGFkZGluZzogM3B4O1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDkwMHB4KSB7XG4gIC5jYXJkRm9ybWFjaW9uIHtcbiAgICBtYXJnaW4tdG9wOiA1JTtcbiAgfVxuXG4gIC5pY29ub0NvbnRhY3RvIHtcbiAgICBmb250LXNpemU6IHgtbGFyZ2U7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGxlZnQ6IDEwJTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pY29uQ29sb3IpO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgfVxuXG4gIC5jb250YWN0b0xpc3RhIHtcbiAgICB3aWR0aDogMzAwcHg7XG4gICAgaGVpZ2h0OiAzMDBweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XG4gIH1cblxuICAubWVudSB7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cblxuICBuYXYge1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICB0b3A6IDA7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgei1pbmRleDogMjtcbiAgICBtYXJnaW46IDA7XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiA5MDBweCkge1xuICAuaWNvbm9Db250YWN0byB7XG4gICAgZm9udC1zaXplOiB4LWxhcmdlO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBsZWZ0OiAtMTBweDtcbiAgICB0b3A6IC04cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taWNvbkNvbG9yKTtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIH1cblxuICAuY29udGFjdG9MaXN0YSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xuICB9XG5cbiAgbmF2IHtcbiAgICBiYWNrZ3JvdW5kOiBibGFjaztcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcGFkZGluZzogMTBweCAwcHggMTBweCAwcHg7XG4gICAgei1pbmRleDogMjtcbiAgICBib3gtc2hhZG93OiAwcHggMTVweCAyMHB4ICMyNGFhMmI7XG4gIH1cbn1cbi5jZW50cmFkbyB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLnRpdHVsbyB7XG4gIGNvbG9yOiB2YXIoLS10aXRsZSk7XG4gIGZvbnQtZmFtaWx5OiBcIkFsbGFuXCIsIGN1cnNpdmU7XG4gIGZvbnQtc2l6ZTogNDBweDtcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcbn1cblxuLmJvdG9uZXMtbmF2YmFyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XG4gIGZsZXgtd3JhcDogbm93cmFwO1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmJvdG9uLW5hdmVnYWNpb24ge1xuICBtYXJnaW4tbGVmdDogMjBweDtcbn1cbi5ib3Rvbi1uYXZlZ2FjaW9uOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xuICBjb2xvcjogYmxhY2s7XG59XG4uYm90b24tbmF2ZWdhY2lvbjphY3RpdmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBibHVlO1xufVxuXG4uY2FyZCwgLmNhcmRDZW50cmFkYSB7XG4gIG1hcmdpbi10b3A6IDEwJTtcbn1cblxuLmNhcmQge1xuICBtYXgtd2lkdGg6IDQwMHB4O1xuICBib3gtc2hhZG93OiAxMHB4IDMwcHggMzBweCB2YXIoLS1zaGFkb3dDb2xvcik7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWZvcm1hY2lvbkNvbG9yKTtcbn1cblxuLmNhcmRDZW50cmFkYSB7XG4gIG1hcmdpbjogYXV0bztcbiAgd2lkdGg6IDUwJTtcbiAgbWluLXdpZHRoOiAyNTBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG59XG5cbnNlY3Rpb24ge1xuICBwYWRkaW5nOiA2JSAxMCUgNCUgMTAlO1xufVxuXG50YWJsZSB7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1mb3JtYWNpb25Db2xvcik7XG59XG5cbi5ib3RvbmVzLXNsaWRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICBhbGlnbi1pdGVtczogYmFzZWxpbmU7XG4gIHBhZGRpbmc6IDAlIDEwJSA1JSAxMCU7XG59XG5cbi5wYWdpbmF0b3Ige1xuICBjb2xvcjogdmFyKC0tcGFnaW5hdG9yQ29sb3IpO1xufVxuXG5oNCB7XG4gIGNvbG9yOiB2YXIoLS1zdWJ0aXRsZUNvbG9yKTtcbn1cblxuLmJvdG9uU2xpZGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG59XG5cbi5iYXJyYSB7XG4gIHdpZHRoOiAyMCU7XG59XG5cbi5sb2dvIHtcbiAgd2lkdGg6IDQwJTtcbiAgcGFkZGluZy1sZWZ0OiAzMHB4O1xufVxuXG4uZW5jYWJlemFkbyB7XG4gIGJhY2tncm91bmQtY29sb3I6IGRhcmt2aW9sZXQ7XG59XG5cbi5jYXJkRm9ybWFjaW9uIHtcbiAgd2lkdGg6IGF1dG87XG4gIGJveC1zaGFkb3c6IDEwcHggMzBweCAzMHB4ICNhNzQyNDI7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWZvcm1hY2lvbkNvbG9yKTtcbn1cblxuLmhlYWRlci1jYXJkIHtcbiAgbWFyZ2luLWxlZnQ6IDEwJTtcbn1cblxuLmVtcHJlc2Ege1xuICBjb2xvcjogcmVkO1xufVxuXG4ucHVlc3RvIHtcbiAgY29sb3I6IGdyZWVueWVsbG93O1xufVxuXG4udGV4dG8ge1xuICBwYWRkaW5nOiAyNSUgMCUgMjUlIDAlO1xuICB3aWR0aDogMjAwcHg7XG4gIGhlaWdodDogMjAwcHg7XG59XG5cbi5taXRhZCB7XG4gIHdpZHRoOiA1MCU7XG4gIGhlaWdodDogNTAlO1xuICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xufVxuXG4uZG9zQ29sdW1uYXMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93LXJldmVyc2U7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5jb2x1bW5hc1Jlc3BvbnNpdmFzIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmNvbHVtbmFEb3Mge1xuICBtYXJnaW4tbGVmdDogMjAlO1xufVxuXG4uY29udGFjdG9JdGVtIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuOjpuZy1kZWVwIGEge1xuICBjb2xvcjogYWxpY2VibHVlO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbi5lbmxhY2Uge1xuICBjb2xvcjogcmdiYSg0NCwgMTk5LCAxMzQsIDAuNzgxKTtcbn1cblxuOjpuZy1kZWVwIC5iYWNrZHJvcEJhY2tncm91bmQge1xuICBiYWNrZHJvcC1maWx0ZXI6IGJyaWdodG5lc3MoMC44KSBibHVyKDEwcHgpO1xufSJdfQ== */"], data: { animation: [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('flyInTop', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':enter', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["useAnimation"])(_animations__WEBPACK_IMPORTED_MODULE_1__["flyInTopAnimation"])
                ]),
            ]),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('rotatedState', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* => *', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["useAnimation"])(_animations__WEBPACK_IMPORTED_MODULE_1__["rotateAnimation"])
                ]),
            ])
        ] } });


/***/ }),

/***/ "tjuB":
/*!*******************************************************!*\
  !*** ./src/app/components/pop-up/pop-up.component.ts ***!
  \*******************************************************/
/*! exports provided: PopUpComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PopUpComponent", function() { return PopUpComponent; });
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/button */ "bTqV");




class PopUpComponent {
    constructor(dialog, data) {
        this.dialog = dialog;
        this.data = data;
    }
    ngOnInit() {
    }
}
PopUpComponent.ɵfac = function PopUpComponent_Factory(t) { return new (t || PopUpComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MAT_DIALOG_DATA"])); };
PopUpComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: PopUpComponent, selectors: [["app-pop-up"]], decls: 12, vars: 3, consts: [[1, "dialog"], ["mat-dialog-title", ""], ["mat-button", "", "mat-dialog-close", ""], ["mat-raised-button", "", "color", "primary", "cdkFocusInitial", "", 3, "mat-dialog-close"], ["target", "_blank", 3, "href"]], template: function PopUpComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h2", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Saliendo del sitio...");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "mat-dialog-actions");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Cancelar");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, " CONTINUAR");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" Al presionar en continuar ser\u00E1 redirigido a ", ctx.data.contacto.descripcion, ". ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("mat-dialog-close", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("href", ctx.data.contacto.enlace, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    } }, directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialogTitle"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialogActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButton"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialogClose"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwb3AtdXAuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/home/home.component */ "BuFo");
/* harmony import */ var _components_contacto_contacto_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/contacto/contacto.component */ "gAHN");
/* harmony import */ var _components_experiencia_experiencia_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/experiencia/experiencia.component */ "EOyz");
/* harmony import */ var _components_formacion_formacion_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/formacion/formacion.component */ "fTPQ");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");







const routes = [
    { path: '', component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_1__["HomeComponent"] },
    { path: 'contacto', component: _components_contacto_contacto_component__WEBPACK_IMPORTED_MODULE_2__["ContactoComponent"] },
    { path: 'experiencia', component: _components_experiencia_experiencia_component__WEBPACK_IMPORTED_MODULE_3__["ExperienciaComponent"] },
    { path: 'formacion', component: _components_formacion_formacion_component__WEBPACK_IMPORTED_MODULE_4__["FormacionComponent"] }
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "vvyD":
/*!************************************!*\
  !*** ./src/app/material.module.ts ***!
  \************************************/
/*! exports provided: MaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function() { return MaterialModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/slide-toggle */ "1jcm");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/menu */ "STbY");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/tabs */ "wZkO");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/progress-bar */ "bv9b");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ "fXoL");











class MaterialModule {
}
MaterialModule.ɵfac = function MaterialModule_Factory(t) { return new (t || MaterialModule)(); };
MaterialModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineNgModule"]({ type: MaterialModule });
MaterialModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"]
        ], _angular_material_icon__WEBPACK_IMPORTED_MODULE_1__["MatIconModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
        _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_3__["MatSlideToggleModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardModule"],
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_5__["MatMenuModule"],
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_6__["MatTabsModule"],
        _angular_material_table__WEBPACK_IMPORTED_MODULE_7__["MatTableModule"],
        _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_8__["MatProgressBarModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__["MatDialogModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsetNgModuleScope"](MaterialModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"]], exports: [_angular_material_icon__WEBPACK_IMPORTED_MODULE_1__["MatIconModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
        _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_3__["MatSlideToggleModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardModule"],
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_5__["MatMenuModule"],
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_6__["MatTabsModule"],
        _angular_material_table__WEBPACK_IMPORTED_MODULE_7__["MatTableModule"],
        _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_8__["MatProgressBarModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__["MatDialogModule"]] }); })();


/***/ }),

/***/ "ylcm":
/*!****************************************************************!*\
  !*** ./src/app/services/themeChanger/theme-changer.service.ts ***!
  \****************************************************************/
/*! exports provided: ThemeChangerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThemeChangerService", function() { return ThemeChangerService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class ThemeChangerService {
    constructor() { }
    changeTheme() {
        let aux = localStorage.getItem('isDark');
        let isDark = false;
        ;
        if (aux && aux == 'true') {
            isDark = true;
        }
        if (isDark) {
            this.ligthTheme();
        }
        else {
            this.darkTheme();
        }
        isDark = !isDark;
        localStorage.setItem('isDark', isDark.toString());
        return isDark;
    }
    darkTheme() {
        document.documentElement.style.setProperty('--bodyBackground', '#1f0b6f');
        document.documentElement.style.setProperty('--textColor', 'white');
        document.documentElement.style.setProperty('--subtitleColor', 'chartreuse');
        document.documentElement.style.setProperty('--title', 'rgb(228, 210, 139)');
        document.documentElement.style.setProperty('--formacionColor', '#424242');
        document.documentElement.style.setProperty('--shadowColor', 'white');
        document.documentElement.style.setProperty('--iconColor', 'darkblue');
        document.documentElement.style.setProperty('--modeColor', 'yellow');
        document.documentElement.style.setProperty('--paginatorColor', '#f03a3a');
    }
    ligthTheme() {
        document.documentElement.style.setProperty('--bodyBackground', 'whitesmoke');
        document.documentElement.style.setProperty('--textColor', 'black');
        document.documentElement.style.setProperty('--subtitleColor', 'darkblue');
        document.documentElement.style.setProperty('--title', 'black');
        document.documentElement.style.setProperty('--formacionColor', 'rgb(201 189 151 / 78%)');
        document.documentElement.style.setProperty('--shadowColor', '#50096e');
        document.documentElement.style.setProperty('--iconColor', 'black');
        document.documentElement.style.setProperty('--modeColor', 'white');
        document.documentElement.style.setProperty('--paginatorColor', '#174185');
    }
}
ThemeChangerService.ɵfac = function ThemeChangerService_Factory(t) { return new (t || ThemeChangerService)(); };
ThemeChangerService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ThemeChangerService, factory: ThemeChangerService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map