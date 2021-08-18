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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_mobileDetector_mobile_detector_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/mobileDetector/mobile-detector.service */ "HhPq");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");



function HomeComponent_span_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "celular");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function HomeComponent_span_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "pc");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class HomeComponent {
    constructor(mobileDetector) {
        this.mobileDetector = mobileDetector;
        this.home = 1;
        this.isMobile = false;
    }
    ngOnInit() {
        this.isMobile = this.mobileDetector.isMobile();
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_mobileDetector_mobile_detector_service__WEBPACK_IMPORTED_MODULE_1__["MobileDetectorService"])); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 23, vars: 2, consts: [["id", "home"], [1, "centrado"], [1, "bienvenido"], [1, "cardCentrada"], [1, "chartreuse"], [1, "dosColumnas"], ["target", "_blank", "href", "https://github.com/LeonardoDavidMachado/paginaPersonal", 1, "enlace"], ["src", "./assets/angular.svg", 1, "mitad"], [4, "ngIf"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "\u00A1Bienvenido a mi p\u00E1gina web!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Sobre m\u00ED y esta p\u00E1gina");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h4", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Soy un desarrollador fullstack y t\u00E9cnico electr\u00F3nico con experiencia laboral en frontend. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " Ac\u00E1 pod\u00E9s encontrar informaci\u00F3n sobre m\u00ED y ver una muestra de mi trabajo, est\u00E1 creada con Angular Material. Se puede ver el c\u00F3digo en mi ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "github");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, ". ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "\u00A1No te olvides de visitarla con tu ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, HomeComponent_span_20_Template, 2, 0, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, HomeComponent_span_21_Template, 2, 0, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, " para verla en la otra versi\u00F3n! ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isMobile);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isMobile);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]], styles: ["@import url('https://fonts.googleapis.com/css2?family=Dancing+Script&display=swap');\r\n@import url('https://fonts.googleapis.com/css2?family=Berkshire+Swash&family=Dancing+Script&display=swap');\r\n@media (max-width: 780px)  {\r\n\r\n  .iconoContacto[_ngcontent-%COMP%] {\r\n    font-size: x-large;\r\n    position: absolute;\r\n    left: 10%;\r\n  }\r\n\r\n  .contactoLista[_ngcontent-%COMP%] {\r\n    width: 300px;\r\n    height: 300px;\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: space-evenly;\r\n  }\r\n\r\n  .menu[_ngcontent-%COMP%] {\r\n    color: white;\r\n  }\r\n\r\n  nav[_ngcontent-%COMP%] {\r\n    position: fixed;\r\n    top: 0;\r\n    left: 0;\r\n    width: 100%;\r\n    z-index: 2;\r\n    margin: 0;\r\n    width: 40px;\r\n  }\r\n\r\n}\r\n@media (min-width: 780px) {\r\n\r\n  .iconoContacto[_ngcontent-%COMP%] {\r\n    font-size: x-large;\r\n    position: relative;\r\n    left: -10px;\r\n    top: -8px;\r\n  }\r\n\r\n  .contactoLista[_ngcontent-%COMP%] {\r\n    width:100%;\r\n    \r\n    display: flex;\r\n    flex-direction: row;\r\n    justify-content: space-evenly;\r\n  }\r\n\r\n  nav[_ngcontent-%COMP%] {\r\n    background: black;\r\n    position: fixed;\r\n    top: 0;\r\n    left: 0;\r\n    width: 100%;\r\n    padding-top: 10px;\r\n    padding-bottom: 10px;\r\n    z-index: 2;\r\n    box-shadow: 0px 15px 20px rgb(36, 170, 43);\r\n  }\r\n}\r\n.centrado[_ngcontent-%COMP%] {\r\n  text-align: center;\r\n}\r\n.titulo[_ngcontent-%COMP%] {\r\n  color:rgb(228, 210, 139);\r\n  -webkit-text-decoration: underline rgb(228, 210, 139);\r\n          text-decoration: underline rgb(228, 210, 139);\r\n  font-family: 'Allan', cursive;\r\n  font-size: 40px;\r\n  margin-bottom: 30px;\r\n}\r\n.botones-navbar[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: space-evenly;\r\n  flex-wrap: nowrap;\r\n  width: 100%;\r\n}\r\n.boton-navegacion[_ngcontent-%COMP%] {\r\n    margin-left: 20px;\r\n}\r\n.boton-navegacion[_ngcontent-%COMP%]:hover {\r\n    background-color: red;\r\n    color: black;\r\n}\r\n.boton-navegacion[_ngcontent-%COMP%]:active {\r\n    background-color: blue;\r\n}\r\n.card[_ngcontent-%COMP%] {\r\n  max-width: 400px;\r\n  box-shadow: 10px 30px 30px white;\r\n  margin-top: 10%;\r\n}\r\n.cardCentrada[_ngcontent-%COMP%] {\r\n  margin: auto;\r\n  width: 50%;\r\n  \r\n  min-width: 250px;\r\n  \r\n  margin-top: 10%;\r\n  \r\n  background-color: transparent;\r\n}\r\nsection[_ngcontent-%COMP%] {\r\n  padding: 6% 10% 4% 10%;\r\n}\r\ntable[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n}\r\n.botones-slider[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: space-around;\r\n  align-items: baseline;\r\n  padding-left: 10%;\r\n  padding-right: 10%;\r\n  padding-bottom: 5%;\r\n}\r\n.paginator[_ngcontent-%COMP%] {\r\n  color: darkorange;\r\n}\r\n.chartreuse[_ngcontent-%COMP%] {\r\n  color:chartreuse;\r\n}\r\n.botonSlider[_ngcontent-%COMP%] {\r\n  background-color: white;\r\n}\r\n.barra[_ngcontent-%COMP%] {\r\n  width: 20%;\r\n}\r\n.logo[_ngcontent-%COMP%] {\r\n  width: 40%;\r\n  padding-left: 30px;\r\n}\r\n.encabezado[_ngcontent-%COMP%] {\r\n  background-color: darkviolet;\r\n}\r\n.cardFormacion[_ngcontent-%COMP%] {\r\n  width: auto;\r\n  box-shadow: 10px 30px 30px rgb(167, 66, 66);\r\n  margin-top: 5%;\r\n}\r\n.header-card[_ngcontent-%COMP%] {\r\n  margin-left: 10%;\r\n}\r\narticle[_ngcontent-%COMP%] {\r\n  background: rgb(255,255,255);\r\n  background: radial-gradient(circle, rgba(255,255,255,1) 14%, rgba(224,224,224,1) 29%, rgba(54,54,54,1) 86%);\r\n  width: 300px;\r\n  height: 300px;\r\n  border-radius: 50%;\r\n}\r\n.empresa[_ngcontent-%COMP%] {\r\n  color: red;\r\n}\r\n.puesto[_ngcontent-%COMP%] {\r\n  color: greenyellow;\r\n}\r\n.texto[_ngcontent-%COMP%] {\r\n  padding-top: 25%;\r\n  padding-left: 25%;\r\n  width: 200px;\r\n  height: 200px;\r\n}\r\n.mitad[_ngcontent-%COMP%] {\r\n  width: 50%;\r\n  height: 50%;\r\n  padding-right: 20px;\r\n}\r\n.dosColumnas[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  flex-direction: row-reverse;\r\n  align-items: center;\r\n}\r\n.columnasResponsivas[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  flex-direction: row;\r\n  align-items: center;\r\n}\r\n.columnaDos[_ngcontent-%COMP%] {\r\n  margin-left: 20%;\r\n}\r\n.bienvenido[_ngcontent-%COMP%] {\r\n  color: white;\r\n  font-family: 'Dancing Script', cursive;\r\n  font-size: 30px;\r\n  font-weight: 500;\r\n}\r\nbody[_ngcontent-%COMP%] {\r\n  padding-top: 0px;\r\n  padding-left: 0px;\r\n  width: 100%;\r\n  min-height: 100%;\r\n  height: auto;\r\n  background-color: darkblue;\r\n}\r\n.contactoItem[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: center;  \r\n}\r\na[_ngcontent-%COMP%] {\r\n  color: aliceblue;\r\n  text-decoration: none;\r\n}\r\n.enlace[_ngcontent-%COMP%] {\r\n  color: rgba(44, 199, 134, 0.781);\r\n}\r\n\r\np[_ngcontent-%COMP%], h2[_ngcontent-%COMP%] {\r\n    color: white;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2FwcC5jb21wb25lbnQuY3NzIiwiaG9tZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLG1GQUFtRjtBQUNuRiwwR0FBMEc7QUFFMUc7O0VBRUU7SUFDRSxrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLFNBQVM7RUFDWDs7RUFFQTtJQUNFLFlBQVk7SUFDWixhQUFhO0lBQ2IsYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qiw2QkFBNkI7RUFDL0I7O0VBRUE7SUFDRSxZQUFZO0VBQ2Q7O0VBRUE7SUFDRSxlQUFlO0lBQ2YsTUFBTTtJQUNOLE9BQU87SUFDUCxXQUFXO0lBQ1gsVUFBVTtJQUNWLFNBQVM7SUFDVCxXQUFXO0VBQ2I7O0FBRUY7QUFFQTs7RUFFRTtJQUNFLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsV0FBVztJQUNYLFNBQVM7RUFDWDs7RUFFQTtJQUNFLFVBQVU7SUFDVixtQkFBbUI7SUFDbkIsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQiw2QkFBNkI7RUFDL0I7O0VBRUE7SUFDRSxpQkFBaUI7SUFDakIsZUFBZTtJQUNmLE1BQU07SUFDTixPQUFPO0lBQ1AsV0FBVztJQUNYLGlCQUFpQjtJQUNqQixvQkFBb0I7SUFDcEIsVUFBVTtJQUNWLDBDQUEwQztFQUM1QztBQUNGO0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLHdCQUF3QjtFQUN4QixxREFBNkM7VUFBN0MsNkNBQTZDO0VBQzdDLDZCQUE2QjtFQUM3QixlQUFlO0VBQ2YsbUJBQW1CO0FBQ3JCO0FBQ0E7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLDZCQUE2QjtFQUM3QixpQkFBaUI7RUFDakIsV0FBVztBQUNiO0FBRUE7SUFDSSxpQkFBaUI7QUFDckI7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQixZQUFZO0FBQ2hCO0FBRUE7SUFDSSxzQkFBc0I7QUFDMUI7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixnQ0FBZ0M7RUFDaEMsZUFBZTtBQUNqQjtBQUVBO0VBQ0UsWUFBWTtFQUNaLFVBQVU7RUFDVixzQkFBc0I7RUFDdEIsZ0JBQWdCO0VBQ2hCLGlEQUFpRDtFQUNqRCxlQUFlO0VBQ2YsaURBQWlEO0VBQ2pELDZCQUE2QjtBQUMvQjtBQUVBO0VBQ0Usc0JBQXNCO0FBQ3hCO0FBRUE7RUFDRSxXQUFXO0FBQ2I7QUFHQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsNkJBQTZCO0VBQzdCLHFCQUFxQjtFQUNyQixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLGtCQUFrQjtBQUNwQjtBQUVBO0VBQ0UsaUJBQWlCO0FBQ25CO0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7QUFFQTtFQUNFLHVCQUF1QjtBQUN6QjtBQUdBO0VBQ0UsVUFBVTtBQUNaO0FBRUE7RUFDRSxVQUFVO0VBQ1Ysa0JBQWtCO0FBQ3BCO0FBRUE7RUFDRSw0QkFBNEI7QUFDOUI7QUFFQTtFQUNFLFdBQVc7RUFDWCwyQ0FBMkM7RUFDM0MsY0FBYztBQUNoQjtBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBRUE7RUFDRSw0QkFBNEI7RUFDNUIsMkdBQTJHO0VBQzNHLFlBQVk7RUFDWixhQUFhO0VBQ2Isa0JBQWtCO0FBQ3BCO0FBRUE7RUFDRSxVQUFVO0FBQ1o7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjtBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixZQUFZO0VBQ1osYUFBYTtBQUNmO0FBRUE7RUFDRSxVQUFVO0VBQ1YsV0FBVztFQUNYLG1CQUFtQjtBQUNyQjtBQUVBO0VBQ0UsYUFBYTtFQUNiLDJCQUEyQjtFQUMzQixtQkFBbUI7QUFDckI7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsbUJBQW1CO0FBQ3JCO0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7QUFFQTtFQUNFLFlBQVk7RUFDWixzQ0FBc0M7RUFDdEMsZUFBZTtFQUNmLGdCQUFnQjtBQUNsQjtBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixXQUFXO0VBQ1gsZ0JBQWdCO0VBQ2hCLFlBQVk7RUFDWiwwQkFBMEI7QUFDNUI7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCO0FBQ3pCO0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIscUJBQXFCO0FBQ3ZCO0FBRUE7RUFDRSxnQ0FBZ0M7QUFDbEM7QUNoUEE7OztHQUdHO0FBRUg7SUFDSSxZQUFZO0FBQ2hCIiwiZmlsZSI6ImhvbWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PURhbmNpbmcrU2NyaXB0JmRpc3BsYXk9c3dhcCcpO1xyXG5AaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1CZXJrc2hpcmUrU3dhc2gmZmFtaWx5PURhbmNpbmcrU2NyaXB0JmRpc3BsYXk9c3dhcCcpO1xyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDc4MHB4KSAge1xyXG5cclxuICAuaWNvbm9Db250YWN0byB7XHJcbiAgICBmb250LXNpemU6IHgtbGFyZ2U7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBsZWZ0OiAxMCU7XHJcbiAgfVxyXG5cclxuICAuY29udGFjdG9MaXN0YSB7XHJcbiAgICB3aWR0aDogMzAwcHg7XHJcbiAgICBoZWlnaHQ6IDMwMHB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcclxuICB9XHJcblxyXG4gIC5tZW51IHtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICB9XHJcblxyXG4gIG5hdiB7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICB6LWluZGV4OiAyO1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgd2lkdGg6IDQwcHg7XHJcbiAgfVxyXG5cclxufVxyXG5cclxuQG1lZGlhIChtaW4td2lkdGg6IDc4MHB4KSB7XHJcblxyXG4gIC5pY29ub0NvbnRhY3RvIHtcclxuICAgIGZvbnQtc2l6ZTogeC1sYXJnZTtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGxlZnQ6IC0xMHB4O1xyXG4gICAgdG9wOiAtOHB4O1xyXG4gIH1cclxuXHJcbiAgLmNvbnRhY3RvTGlzdGEge1xyXG4gICAgd2lkdGg6MTAwJTtcclxuICAgIC8qIGhlaWdodDogMzAwcHg7ICovXHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xyXG4gIH1cclxuXHJcbiAgbmF2IHtcclxuICAgIGJhY2tncm91bmQ6IGJsYWNrO1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgcGFkZGluZy10b3A6IDEwcHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcclxuICAgIHotaW5kZXg6IDI7XHJcbiAgICBib3gtc2hhZG93OiAwcHggMTVweCAyMHB4IHJnYigzNiwgMTcwLCA0Myk7XHJcbiAgfVxyXG59XHJcblxyXG4uY2VudHJhZG8ge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4udGl0dWxvIHtcclxuICBjb2xvcjpyZ2IoMjI4LCAyMTAsIDEzOSk7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmUgcmdiKDIyOCwgMjEwLCAxMzkpO1xyXG4gIGZvbnQtZmFtaWx5OiAnQWxsYW4nLCBjdXJzaXZlO1xyXG4gIGZvbnQtc2l6ZTogNDBweDtcclxuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xyXG59XHJcbi5ib3RvbmVzLW5hdmJhciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xyXG4gIGZsZXgtd3JhcDogbm93cmFwO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uYm90b24tbmF2ZWdhY2lvbiB7XHJcbiAgICBtYXJnaW4tbGVmdDogMjBweDtcclxufVxyXG5cclxuLmJvdG9uLW5hdmVnYWNpb246aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG59XHJcblxyXG4uYm90b24tbmF2ZWdhY2lvbjphY3RpdmUge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmx1ZTtcclxufVxyXG5cclxuLmNhcmQge1xyXG4gIG1heC13aWR0aDogNDAwcHg7XHJcbiAgYm94LXNoYWRvdzogMTBweCAzMHB4IDMwcHggd2hpdGU7XHJcbiAgbWFyZ2luLXRvcDogMTAlO1xyXG59XHJcblxyXG4uY2FyZENlbnRyYWRhIHtcclxuICBtYXJnaW46IGF1dG87XHJcbiAgd2lkdGg6IDUwJTtcclxuICAvKiBtYXgtd2lkdGg6IDQwMHB4OyAqL1xyXG4gIG1pbi13aWR0aDogMjUwcHg7XHJcbiAgLyogYm94LXNoYWRvdzogMTBweCAzMHB4IDMwcHggcmdiKDE3OSwgNjYsIDY2KTsgKi9cclxuICBtYXJnaW4tdG9wOiAxMCU7XHJcbiAgLyogYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxMDEsIDQ5LCAxNjgsIDAuNzgxKTsgKi9cclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxufVxyXG5cclxuc2VjdGlvbiB7XHJcbiAgcGFkZGluZzogNiUgMTAlIDQlIDEwJTtcclxufVxyXG5cclxudGFibGUge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG5cclxuLmJvdG9uZXMtc2xpZGVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbiAgYWxpZ24taXRlbXM6IGJhc2VsaW5lO1xyXG4gIHBhZGRpbmctbGVmdDogMTAlO1xyXG4gIHBhZGRpbmctcmlnaHQ6IDEwJTtcclxuICBwYWRkaW5nLWJvdHRvbTogNSU7XHJcbn1cclxuXHJcbi5wYWdpbmF0b3Ige1xyXG4gIGNvbG9yOiBkYXJrb3JhbmdlO1xyXG59XHJcblxyXG4uY2hhcnRyZXVzZSB7XHJcbiAgY29sb3I6Y2hhcnRyZXVzZTtcclxufVxyXG5cclxuLmJvdG9uU2xpZGVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuXHJcbi5iYXJyYSB7XHJcbiAgd2lkdGg6IDIwJTtcclxufVxyXG5cclxuLmxvZ28ge1xyXG4gIHdpZHRoOiA0MCU7XHJcbiAgcGFkZGluZy1sZWZ0OiAzMHB4O1xyXG59XHJcblxyXG4uZW5jYWJlemFkbyB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogZGFya3Zpb2xldDtcclxufVxyXG5cclxuLmNhcmRGb3JtYWNpb24ge1xyXG4gIHdpZHRoOiBhdXRvO1xyXG4gIGJveC1zaGFkb3c6IDEwcHggMzBweCAzMHB4IHJnYigxNjcsIDY2LCA2Nik7XHJcbiAgbWFyZ2luLXRvcDogNSU7XHJcbn1cclxuXHJcbi5oZWFkZXItY2FyZCB7XHJcbiAgbWFyZ2luLWxlZnQ6IDEwJTtcclxufVxyXG5cclxuYXJ0aWNsZSB7XHJcbiAgYmFja2dyb3VuZDogcmdiKDI1NSwyNTUsMjU1KTtcclxuICBiYWNrZ3JvdW5kOiByYWRpYWwtZ3JhZGllbnQoY2lyY2xlLCByZ2JhKDI1NSwyNTUsMjU1LDEpIDE0JSwgcmdiYSgyMjQsMjI0LDIyNCwxKSAyOSUsIHJnYmEoNTQsNTQsNTQsMSkgODYlKTtcclxuICB3aWR0aDogMzAwcHg7XHJcbiAgaGVpZ2h0OiAzMDBweDtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbn1cclxuXHJcbi5lbXByZXNhIHtcclxuICBjb2xvcjogcmVkO1xyXG59XHJcblxyXG4ucHVlc3RvIHtcclxuICBjb2xvcjogZ3JlZW55ZWxsb3c7XHJcbn1cclxuXHJcbi50ZXh0byB7XHJcbiAgcGFkZGluZy10b3A6IDI1JTtcclxuICBwYWRkaW5nLWxlZnQ6IDI1JTtcclxuICB3aWR0aDogMjAwcHg7XHJcbiAgaGVpZ2h0OiAyMDBweDtcclxufVxyXG5cclxuLm1pdGFkIHtcclxuICB3aWR0aDogNTAlO1xyXG4gIGhlaWdodDogNTAlO1xyXG4gIHBhZGRpbmctcmlnaHQ6IDIwcHg7XHJcbn1cclxuXHJcbi5kb3NDb2x1bW5hcyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93LXJldmVyc2U7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLmNvbHVtbmFzUmVzcG9uc2l2YXMge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4uY29sdW1uYURvcyB7XHJcbiAgbWFyZ2luLWxlZnQ6IDIwJTtcclxufVxyXG5cclxuLmJpZW52ZW5pZG8ge1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBmb250LWZhbWlseTogJ0RhbmNpbmcgU2NyaXB0JywgY3Vyc2l2ZTtcclxuICBmb250LXNpemU6IDMwcHg7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxufVxyXG5cclxuYm9keSB7XHJcbiAgcGFkZGluZy10b3A6IDBweDtcclxuICBwYWRkaW5nLWxlZnQ6IDBweDtcclxuICB3aWR0aDogMTAwJTtcclxuICBtaW4taGVpZ2h0OiAxMDAlO1xyXG4gIGhlaWdodDogYXV0bztcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrYmx1ZTtcclxufVxyXG5cclxuLmNvbnRhY3RvSXRlbSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyOyAgXHJcbn1cclxuXHJcbmEge1xyXG4gIGNvbG9yOiBhbGljZWJsdWU7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG59XHJcblxyXG4uZW5sYWNlIHtcclxuICBjb2xvcjogcmdiYSg0NCwgMTk5LCAxMzQsIDAuNzgxKTtcclxufSIsIkBpbXBvcnQgXCIuLi8uLi9hcHAuY29tcG9uZW50LmNzc1wiO1xyXG5cclxuLyogYm9keSB7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2IoMjcsMjAsMTQyKTtcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgcmdiYSgyNywyMCwxNDIsMSkgMTYlLCByZ2JhKDQ5LDE3NSwxMTQsMSkgNzglLCByZ2JhKDI1NSw0MSwwLDEpIDEwMCUpO1xyXG59ICovXHJcblxyXG5wLCBoMiB7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbn0iXX0= */"] });


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
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, ExperienciaComponent_div_5_span_10_Template, 2, 1, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p");
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
ExperienciaComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ExperienciaComponent, selectors: [["app-experiencia"]], decls: 6, vars: 1, consts: [[1, "centrado"], [1, "titulo"], ["class", "responsive", 4, "ngFor", "ngForOf"], [1, "responsive"], [1, "card"], [1, "header-card"], [1, "empresa"], [1, "puesto"], [3, "src"], [4, "ngIf"]], template: function ExperienciaComponent_Template(rf, ctx) { if (rf & 1) {
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
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCardSubtitle"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"]], styles: ["@import url('https://fonts.googleapis.com/css2?family=Dancing+Script&display=swap');\r\n@import url('https://fonts.googleapis.com/css2?family=Berkshire+Swash&family=Dancing+Script&display=swap');\r\n@media (max-width: 780px)  {\r\n\r\n  .iconoContacto[_ngcontent-%COMP%] {\r\n    font-size: x-large;\r\n    position: absolute;\r\n    left: 10%;\r\n  }\r\n\r\n  .contactoLista[_ngcontent-%COMP%] {\r\n    width: 300px;\r\n    height: 300px;\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: space-evenly;\r\n  }\r\n\r\n  .menu[_ngcontent-%COMP%] {\r\n    color: white;\r\n  }\r\n\r\n  nav[_ngcontent-%COMP%] {\r\n    position: fixed;\r\n    top: 0;\r\n    left: 0;\r\n    width: 100%;\r\n    z-index: 2;\r\n    margin: 0;\r\n    width: 40px;\r\n  }\r\n\r\n}\r\n@media (min-width: 780px) {\r\n\r\n  .iconoContacto[_ngcontent-%COMP%] {\r\n    font-size: x-large;\r\n    position: relative;\r\n    left: -10px;\r\n    top: -8px;\r\n  }\r\n\r\n  .contactoLista[_ngcontent-%COMP%] {\r\n    width:100%;\r\n    \r\n    display: flex;\r\n    flex-direction: row;\r\n    justify-content: space-evenly;\r\n  }\r\n\r\n  nav[_ngcontent-%COMP%] {\r\n    background: black;\r\n    position: fixed;\r\n    top: 0;\r\n    left: 0;\r\n    width: 100%;\r\n    padding-top: 10px;\r\n    padding-bottom: 10px;\r\n    z-index: 2;\r\n    box-shadow: 0px 15px 20px rgb(36, 170, 43);\r\n  }\r\n}\r\n.centrado[_ngcontent-%COMP%] {\r\n  text-align: center;\r\n}\r\n.titulo[_ngcontent-%COMP%] {\r\n  color:rgb(228, 210, 139);\r\n  -webkit-text-decoration: underline rgb(228, 210, 139);\r\n          text-decoration: underline rgb(228, 210, 139);\r\n  font-family: 'Allan', cursive;\r\n  font-size: 40px;\r\n  margin-bottom: 30px;\r\n}\r\n.botones-navbar[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: space-evenly;\r\n  flex-wrap: nowrap;\r\n  width: 100%;\r\n}\r\n.boton-navegacion[_ngcontent-%COMP%] {\r\n    margin-left: 20px;\r\n}\r\n.boton-navegacion[_ngcontent-%COMP%]:hover {\r\n    background-color: red;\r\n    color: black;\r\n}\r\n.boton-navegacion[_ngcontent-%COMP%]:active {\r\n    background-color: blue;\r\n}\r\n.card[_ngcontent-%COMP%] {\r\n  max-width: 400px;\r\n  box-shadow: 10px 30px 30px white;\r\n  margin-top: 10%;\r\n}\r\n.cardCentrada[_ngcontent-%COMP%] {\r\n  margin: auto;\r\n  width: 50%;\r\n  \r\n  min-width: 250px;\r\n  \r\n  margin-top: 10%;\r\n  \r\n  background-color: transparent;\r\n}\r\nsection[_ngcontent-%COMP%] {\r\n  padding: 6% 10% 4% 10%;\r\n}\r\ntable[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n}\r\n.botones-slider[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: space-around;\r\n  align-items: baseline;\r\n  padding-left: 10%;\r\n  padding-right: 10%;\r\n  padding-bottom: 5%;\r\n}\r\n.paginator[_ngcontent-%COMP%] {\r\n  color: darkorange;\r\n}\r\n.chartreuse[_ngcontent-%COMP%] {\r\n  color:chartreuse;\r\n}\r\n.botonSlider[_ngcontent-%COMP%] {\r\n  background-color: white;\r\n}\r\n.barra[_ngcontent-%COMP%] {\r\n  width: 20%;\r\n}\r\n.logo[_ngcontent-%COMP%] {\r\n  width: 40%;\r\n  padding-left: 30px;\r\n}\r\n.encabezado[_ngcontent-%COMP%] {\r\n  background-color: darkviolet;\r\n}\r\n.cardFormacion[_ngcontent-%COMP%] {\r\n  width: auto;\r\n  box-shadow: 10px 30px 30px rgb(167, 66, 66);\r\n  margin-top: 5%;\r\n}\r\n.header-card[_ngcontent-%COMP%] {\r\n  margin-left: 10%;\r\n}\r\narticle[_ngcontent-%COMP%] {\r\n  background: rgb(255,255,255);\r\n  background: radial-gradient(circle, rgba(255,255,255,1) 14%, rgba(224,224,224,1) 29%, rgba(54,54,54,1) 86%);\r\n  width: 300px;\r\n  height: 300px;\r\n  border-radius: 50%;\r\n}\r\n.empresa[_ngcontent-%COMP%] {\r\n  color: red;\r\n}\r\n.puesto[_ngcontent-%COMP%] {\r\n  color: greenyellow;\r\n}\r\n.texto[_ngcontent-%COMP%] {\r\n  padding-top: 25%;\r\n  padding-left: 25%;\r\n  width: 200px;\r\n  height: 200px;\r\n}\r\n.mitad[_ngcontent-%COMP%] {\r\n  width: 50%;\r\n  height: 50%;\r\n  padding-right: 20px;\r\n}\r\n.dosColumnas[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  flex-direction: row-reverse;\r\n  align-items: center;\r\n}\r\n.columnasResponsivas[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  flex-direction: row;\r\n  align-items: center;\r\n}\r\n.columnaDos[_ngcontent-%COMP%] {\r\n  margin-left: 20%;\r\n}\r\n.bienvenido[_ngcontent-%COMP%] {\r\n  color: white;\r\n  font-family: 'Dancing Script', cursive;\r\n  font-size: 30px;\r\n  font-weight: 500;\r\n}\r\nbody[_ngcontent-%COMP%] {\r\n  padding-top: 0px;\r\n  padding-left: 0px;\r\n  width: 100%;\r\n  min-height: 100%;\r\n  height: auto;\r\n  background-color: darkblue;\r\n}\r\n.contactoItem[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: center;  \r\n}\r\na[_ngcontent-%COMP%] {\r\n  color: aliceblue;\r\n  text-decoration: none;\r\n}\r\n.enlace[_ngcontent-%COMP%] {\r\n  color: rgba(44, 199, 134, 0.781);\r\n}\r\n\r\n.responsive[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    flex-direction: row;\r\n    justify-content: space-evenly;\r\n    align-items: center;\r\n    flex-wrap: wrap;\r\n    padding-top: 0%;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2FwcC5jb21wb25lbnQuY3NzIiwiZXhwZXJpZW5jaWEuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxtRkFBbUY7QUFDbkYsMEdBQTBHO0FBRTFHOztFQUVFO0lBQ0Usa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixTQUFTO0VBQ1g7O0VBRUE7SUFDRSxZQUFZO0lBQ1osYUFBYTtJQUNiLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsNkJBQTZCO0VBQy9COztFQUVBO0lBQ0UsWUFBWTtFQUNkOztFQUVBO0lBQ0UsZUFBZTtJQUNmLE1BQU07SUFDTixPQUFPO0lBQ1AsV0FBVztJQUNYLFVBQVU7SUFDVixTQUFTO0lBQ1QsV0FBVztFQUNiOztBQUVGO0FBRUE7O0VBRUU7SUFDRSxrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxTQUFTO0VBQ1g7O0VBRUE7SUFDRSxVQUFVO0lBQ1YsbUJBQW1CO0lBQ25CLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsNkJBQTZCO0VBQy9COztFQUVBO0lBQ0UsaUJBQWlCO0lBQ2pCLGVBQWU7SUFDZixNQUFNO0lBQ04sT0FBTztJQUNQLFdBQVc7SUFDWCxpQkFBaUI7SUFDakIsb0JBQW9CO0lBQ3BCLFVBQVU7SUFDViwwQ0FBMEM7RUFDNUM7QUFDRjtBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSx3QkFBd0I7RUFDeEIscURBQTZDO1VBQTdDLDZDQUE2QztFQUM3Qyw2QkFBNkI7RUFDN0IsZUFBZTtFQUNmLG1CQUFtQjtBQUNyQjtBQUNBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQiw2QkFBNkI7RUFDN0IsaUJBQWlCO0VBQ2pCLFdBQVc7QUFDYjtBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCO0FBRUE7SUFDSSxxQkFBcUI7SUFDckIsWUFBWTtBQUNoQjtBQUVBO0lBQ0ksc0JBQXNCO0FBQzFCO0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsZ0NBQWdDO0VBQ2hDLGVBQWU7QUFDakI7QUFFQTtFQUNFLFlBQVk7RUFDWixVQUFVO0VBQ1Ysc0JBQXNCO0VBQ3RCLGdCQUFnQjtFQUNoQixpREFBaUQ7RUFDakQsZUFBZTtFQUNmLGlEQUFpRDtFQUNqRCw2QkFBNkI7QUFDL0I7QUFFQTtFQUNFLHNCQUFzQjtBQUN4QjtBQUVBO0VBQ0UsV0FBVztBQUNiO0FBR0E7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLDZCQUE2QjtFQUM3QixxQkFBcUI7RUFDckIsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixrQkFBa0I7QUFDcEI7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjtBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBRUE7RUFDRSx1QkFBdUI7QUFDekI7QUFHQTtFQUNFLFVBQVU7QUFDWjtBQUVBO0VBQ0UsVUFBVTtFQUNWLGtCQUFrQjtBQUNwQjtBQUVBO0VBQ0UsNEJBQTRCO0FBQzlCO0FBRUE7RUFDRSxXQUFXO0VBQ1gsMkNBQTJDO0VBQzNDLGNBQWM7QUFDaEI7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUVBO0VBQ0UsNEJBQTRCO0VBQzVCLDJHQUEyRztFQUMzRyxZQUFZO0VBQ1osYUFBYTtFQUNiLGtCQUFrQjtBQUNwQjtBQUVBO0VBQ0UsVUFBVTtBQUNaO0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsWUFBWTtFQUNaLGFBQWE7QUFDZjtBQUVBO0VBQ0UsVUFBVTtFQUNWLFdBQVc7RUFDWCxtQkFBbUI7QUFDckI7QUFFQTtFQUNFLGFBQWE7RUFDYiwyQkFBMkI7RUFDM0IsbUJBQW1CO0FBQ3JCO0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLG1CQUFtQjtBQUNyQjtBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBRUE7RUFDRSxZQUFZO0VBQ1osc0NBQXNDO0VBQ3RDLGVBQWU7RUFDZixnQkFBZ0I7QUFDbEI7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsV0FBVztFQUNYLGdCQUFnQjtFQUNoQixZQUFZO0VBQ1osMEJBQTBCO0FBQzVCO0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVCQUF1QjtBQUN6QjtBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLHFCQUFxQjtBQUN2QjtBQUVBO0VBQ0UsZ0NBQWdDO0FBQ2xDO0FDaFBBOzs7R0FHRztBQUVIO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQiw2QkFBNkI7SUFDN0IsbUJBQW1CO0lBQ25CLGVBQWU7SUFDZixlQUFlO0FBQ25CIiwiZmlsZSI6ImV4cGVyaWVuY2lhLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1EYW5jaW5nK1NjcmlwdCZkaXNwbGF5PXN3YXAnKTtcclxuQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9QmVya3NoaXJlK1N3YXNoJmZhbWlseT1EYW5jaW5nK1NjcmlwdCZkaXNwbGF5PXN3YXAnKTtcclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA3ODBweCkgIHtcclxuXHJcbiAgLmljb25vQ29udGFjdG8ge1xyXG4gICAgZm9udC1zaXplOiB4LWxhcmdlO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbGVmdDogMTAlO1xyXG4gIH1cclxuXHJcbiAgLmNvbnRhY3RvTGlzdGEge1xyXG4gICAgd2lkdGg6IDMwMHB4O1xyXG4gICAgaGVpZ2h0OiAzMDBweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XHJcbiAgfVxyXG5cclxuICAubWVudSB7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgfVxyXG5cclxuICBuYXYge1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgei1pbmRleDogMjtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIHdpZHRoOiA0MHB4O1xyXG4gIH1cclxuXHJcbn1cclxuXHJcbkBtZWRpYSAobWluLXdpZHRoOiA3ODBweCkge1xyXG5cclxuICAuaWNvbm9Db250YWN0byB7XHJcbiAgICBmb250LXNpemU6IHgtbGFyZ2U7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBsZWZ0OiAtMTBweDtcclxuICAgIHRvcDogLThweDtcclxuICB9XHJcblxyXG4gIC5jb250YWN0b0xpc3RhIHtcclxuICAgIHdpZHRoOjEwMCU7XHJcbiAgICAvKiBoZWlnaHQ6IDMwMHB4OyAqL1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcclxuICB9XHJcblxyXG4gIG5hdiB7XHJcbiAgICBiYWNrZ3JvdW5kOiBibGFjaztcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHRvcDogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBhZGRpbmctdG9wOiAxMHB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDEwcHg7XHJcbiAgICB6LWluZGV4OiAyO1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDE1cHggMjBweCByZ2IoMzYsIDE3MCwgNDMpO1xyXG4gIH1cclxufVxyXG5cclxuLmNlbnRyYWRvIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuLnRpdHVsbyB7XHJcbiAgY29sb3I6cmdiKDIyOCwgMjEwLCAxMzkpO1xyXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lIHJnYigyMjgsIDIxMCwgMTM5KTtcclxuICBmb250LWZhbWlseTogJ0FsbGFuJywgY3Vyc2l2ZTtcclxuICBmb250LXNpemU6IDQwcHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcclxufVxyXG4uYm90b25lcy1uYXZiYXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcclxuICBmbGV4LXdyYXA6IG5vd3JhcDtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLmJvdG9uLW5hdmVnYWNpb24ge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDIwcHg7XHJcbn1cclxuXHJcbi5ib3Rvbi1uYXZlZ2FjaW9uOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcclxuICAgIGNvbG9yOiBibGFjaztcclxufVxyXG5cclxuLmJvdG9uLW5hdmVnYWNpb246YWN0aXZlIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsdWU7XHJcbn1cclxuXHJcbi5jYXJkIHtcclxuICBtYXgtd2lkdGg6IDQwMHB4O1xyXG4gIGJveC1zaGFkb3c6IDEwcHggMzBweCAzMHB4IHdoaXRlO1xyXG4gIG1hcmdpbi10b3A6IDEwJTtcclxufVxyXG5cclxuLmNhcmRDZW50cmFkYSB7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG4gIHdpZHRoOiA1MCU7XHJcbiAgLyogbWF4LXdpZHRoOiA0MDBweDsgKi9cclxuICBtaW4td2lkdGg6IDI1MHB4O1xyXG4gIC8qIGJveC1zaGFkb3c6IDEwcHggMzBweCAzMHB4IHJnYigxNzksIDY2LCA2Nik7ICovXHJcbiAgbWFyZ2luLXRvcDogMTAlO1xyXG4gIC8qIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTAxLCA0OSwgMTY4LCAwLjc4MSk7ICovXHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbn1cclxuXHJcbnNlY3Rpb24ge1xyXG4gIHBhZGRpbmc6IDYlIDEwJSA0JSAxMCU7XHJcbn1cclxuXHJcbnRhYmxlIHtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuXHJcbi5ib3RvbmVzLXNsaWRlciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG4gIGFsaWduLWl0ZW1zOiBiYXNlbGluZTtcclxuICBwYWRkaW5nLWxlZnQ6IDEwJTtcclxuICBwYWRkaW5nLXJpZ2h0OiAxMCU7XHJcbiAgcGFkZGluZy1ib3R0b206IDUlO1xyXG59XHJcblxyXG4ucGFnaW5hdG9yIHtcclxuICBjb2xvcjogZGFya29yYW5nZTtcclxufVxyXG5cclxuLmNoYXJ0cmV1c2Uge1xyXG4gIGNvbG9yOmNoYXJ0cmV1c2U7XHJcbn1cclxuXHJcbi5ib3RvblNsaWRlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcblxyXG4uYmFycmEge1xyXG4gIHdpZHRoOiAyMCU7XHJcbn1cclxuXHJcbi5sb2dvIHtcclxuICB3aWR0aDogNDAlO1xyXG4gIHBhZGRpbmctbGVmdDogMzBweDtcclxufVxyXG5cclxuLmVuY2FiZXphZG8ge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGRhcmt2aW9sZXQ7XHJcbn1cclxuXHJcbi5jYXJkRm9ybWFjaW9uIHtcclxuICB3aWR0aDogYXV0bztcclxuICBib3gtc2hhZG93OiAxMHB4IDMwcHggMzBweCByZ2IoMTY3LCA2NiwgNjYpO1xyXG4gIG1hcmdpbi10b3A6IDUlO1xyXG59XHJcblxyXG4uaGVhZGVyLWNhcmQge1xyXG4gIG1hcmdpbi1sZWZ0OiAxMCU7XHJcbn1cclxuXHJcbmFydGljbGUge1xyXG4gIGJhY2tncm91bmQ6IHJnYigyNTUsMjU1LDI1NSk7XHJcbiAgYmFja2dyb3VuZDogcmFkaWFsLWdyYWRpZW50KGNpcmNsZSwgcmdiYSgyNTUsMjU1LDI1NSwxKSAxNCUsIHJnYmEoMjI0LDIyNCwyMjQsMSkgMjklLCByZ2JhKDU0LDU0LDU0LDEpIDg2JSk7XHJcbiAgd2lkdGg6IDMwMHB4O1xyXG4gIGhlaWdodDogMzAwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG59XHJcblxyXG4uZW1wcmVzYSB7XHJcbiAgY29sb3I6IHJlZDtcclxufVxyXG5cclxuLnB1ZXN0byB7XHJcbiAgY29sb3I6IGdyZWVueWVsbG93O1xyXG59XHJcblxyXG4udGV4dG8ge1xyXG4gIHBhZGRpbmctdG9wOiAyNSU7XHJcbiAgcGFkZGluZy1sZWZ0OiAyNSU7XHJcbiAgd2lkdGg6IDIwMHB4O1xyXG4gIGhlaWdodDogMjAwcHg7XHJcbn1cclxuXHJcbi5taXRhZCB7XHJcbiAgd2lkdGg6IDUwJTtcclxuICBoZWlnaHQ6IDUwJTtcclxuICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xyXG59XHJcblxyXG4uZG9zQ29sdW1uYXMge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdy1yZXZlcnNlO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5jb2x1bW5hc1Jlc3BvbnNpdmFzIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLmNvbHVtbmFEb3Mge1xyXG4gIG1hcmdpbi1sZWZ0OiAyMCU7XHJcbn1cclxuXHJcbi5iaWVudmVuaWRvIHtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgZm9udC1mYW1pbHk6ICdEYW5jaW5nIFNjcmlwdCcsIGN1cnNpdmU7XHJcbiAgZm9udC1zaXplOiAzMHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbn1cclxuXHJcbmJvZHkge1xyXG4gIHBhZGRpbmctdG9wOiAwcHg7XHJcbiAgcGFkZGluZy1sZWZ0OiAwcHg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWluLWhlaWdodDogMTAwJTtcclxuICBoZWlnaHQ6IGF1dG87XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogZGFya2JsdWU7XHJcbn1cclxuXHJcbi5jb250YWN0b0l0ZW0ge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsgIFxyXG59XHJcblxyXG5hIHtcclxuICBjb2xvcjogYWxpY2VibHVlO1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxufVxyXG5cclxuLmVubGFjZSB7XHJcbiAgY29sb3I6IHJnYmEoNDQsIDE5OSwgMTM0LCAwLjc4MSk7XHJcbn0iLCJAaW1wb3J0IFwiLi4vLi4vYXBwLmNvbXBvbmVudC5jc3NcIjtcclxuXHJcbi8qIGJvZHkge1xyXG4gICAgYmFja2dyb3VuZDogcmdiKDI3LDIwLDE0Mik7XHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsIHJnYmEoNDksMTc1LDExNCwxKSAxMCUsIHJnYmEoMjU1LDQxLDAsMSkgNTAlLCAgcmdiYSgyNywyMCwxNDIsMSkxMDAlKTtcclxufSAqL1xyXG5cclxuLnJlc3BvbnNpdmUge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICBwYWRkaW5nLXRvcDogMCU7XHJcbn0iXX0= */"] });


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
    } }, directives: [_components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__["NavbarComponent"], _components_home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"], _components_formacion_formacion_component__WEBPACK_IMPORTED_MODULE_3__["FormacionComponent"], _components_experiencia_experiencia_component__WEBPACK_IMPORTED_MODULE_4__["ExperienciaComponent"], _components_contacto_contacto_component__WEBPACK_IMPORTED_MODULE_5__["ContactoComponent"]], styles: ["@import url('https://fonts.googleapis.com/css2?family=Dancing+Script&display=swap');\r\n@import url('https://fonts.googleapis.com/css2?family=Berkshire+Swash&family=Dancing+Script&display=swap');\r\n@media (max-width: 780px)  {\r\n\r\n  .iconoContacto[_ngcontent-%COMP%] {\r\n    font-size: x-large;\r\n    position: absolute;\r\n    left: 10%;\r\n  }\r\n\r\n  .contactoLista[_ngcontent-%COMP%] {\r\n    width: 300px;\r\n    height: 300px;\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: space-evenly;\r\n  }\r\n\r\n  .menu[_ngcontent-%COMP%] {\r\n    color: white;\r\n  }\r\n\r\n  nav[_ngcontent-%COMP%] {\r\n    position: fixed;\r\n    top: 0;\r\n    left: 0;\r\n    width: 100%;\r\n    z-index: 2;\r\n    margin: 0;\r\n    width: 40px;\r\n  }\r\n\r\n}\r\n@media (min-width: 780px) {\r\n\r\n  .iconoContacto[_ngcontent-%COMP%] {\r\n    font-size: x-large;\r\n    position: relative;\r\n    left: -10px;\r\n    top: -8px;\r\n  }\r\n\r\n  .contactoLista[_ngcontent-%COMP%] {\r\n    width:100%;\r\n    \r\n    display: flex;\r\n    flex-direction: row;\r\n    justify-content: space-evenly;\r\n  }\r\n\r\n  nav[_ngcontent-%COMP%] {\r\n    background: black;\r\n    position: fixed;\r\n    top: 0;\r\n    left: 0;\r\n    width: 100%;\r\n    padding-top: 10px;\r\n    padding-bottom: 10px;\r\n    z-index: 2;\r\n    box-shadow: 0px 15px 20px rgb(36, 170, 43);\r\n  }\r\n}\r\n.centrado[_ngcontent-%COMP%] {\r\n  text-align: center;\r\n}\r\n.titulo[_ngcontent-%COMP%] {\r\n  color:rgb(228, 210, 139);\r\n  -webkit-text-decoration: underline rgb(228, 210, 139);\r\n          text-decoration: underline rgb(228, 210, 139);\r\n  font-family: 'Allan', cursive;\r\n  font-size: 40px;\r\n  margin-bottom: 30px;\r\n}\r\n.botones-navbar[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: space-evenly;\r\n  flex-wrap: nowrap;\r\n  width: 100%;\r\n}\r\n.boton-navegacion[_ngcontent-%COMP%] {\r\n    margin-left: 20px;\r\n}\r\n.boton-navegacion[_ngcontent-%COMP%]:hover {\r\n    background-color: red;\r\n    color: black;\r\n}\r\n.boton-navegacion[_ngcontent-%COMP%]:active {\r\n    background-color: blue;\r\n}\r\n.card[_ngcontent-%COMP%] {\r\n  max-width: 400px;\r\n  box-shadow: 10px 30px 30px white;\r\n  margin-top: 10%;\r\n}\r\n.cardCentrada[_ngcontent-%COMP%] {\r\n  margin: auto;\r\n  width: 50%;\r\n  \r\n  min-width: 250px;\r\n  \r\n  margin-top: 10%;\r\n  \r\n  background-color: transparent;\r\n}\r\nsection[_ngcontent-%COMP%] {\r\n  padding: 6% 10% 4% 10%;\r\n}\r\ntable[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n}\r\n.botones-slider[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: space-around;\r\n  align-items: baseline;\r\n  padding-left: 10%;\r\n  padding-right: 10%;\r\n  padding-bottom: 5%;\r\n}\r\n.paginator[_ngcontent-%COMP%] {\r\n  color: darkorange;\r\n}\r\n.chartreuse[_ngcontent-%COMP%] {\r\n  color:chartreuse;\r\n}\r\n.botonSlider[_ngcontent-%COMP%] {\r\n  background-color: white;\r\n}\r\n.barra[_ngcontent-%COMP%] {\r\n  width: 20%;\r\n}\r\n.logo[_ngcontent-%COMP%] {\r\n  width: 40%;\r\n  padding-left: 30px;\r\n}\r\n.encabezado[_ngcontent-%COMP%] {\r\n  background-color: darkviolet;\r\n}\r\n.cardFormacion[_ngcontent-%COMP%] {\r\n  width: auto;\r\n  box-shadow: 10px 30px 30px rgb(167, 66, 66);\r\n  margin-top: 5%;\r\n}\r\n.header-card[_ngcontent-%COMP%] {\r\n  margin-left: 10%;\r\n}\r\narticle[_ngcontent-%COMP%] {\r\n  background: rgb(255,255,255);\r\n  background: radial-gradient(circle, rgba(255,255,255,1) 14%, rgba(224,224,224,1) 29%, rgba(54,54,54,1) 86%);\r\n  width: 300px;\r\n  height: 300px;\r\n  border-radius: 50%;\r\n}\r\n.empresa[_ngcontent-%COMP%] {\r\n  color: red;\r\n}\r\n.puesto[_ngcontent-%COMP%] {\r\n  color: greenyellow;\r\n}\r\n.texto[_ngcontent-%COMP%] {\r\n  padding-top: 25%;\r\n  padding-left: 25%;\r\n  width: 200px;\r\n  height: 200px;\r\n}\r\n.mitad[_ngcontent-%COMP%] {\r\n  width: 50%;\r\n  height: 50%;\r\n  padding-right: 20px;\r\n}\r\n.dosColumnas[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  flex-direction: row-reverse;\r\n  align-items: center;\r\n}\r\n.columnasResponsivas[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  flex-direction: row;\r\n  align-items: center;\r\n}\r\n.columnaDos[_ngcontent-%COMP%] {\r\n  margin-left: 20%;\r\n}\r\n.bienvenido[_ngcontent-%COMP%] {\r\n  color: white;\r\n  font-family: 'Dancing Script', cursive;\r\n  font-size: 30px;\r\n  font-weight: 500;\r\n}\r\nbody[_ngcontent-%COMP%] {\r\n  padding-top: 0px;\r\n  padding-left: 0px;\r\n  width: 100%;\r\n  min-height: 100%;\r\n  height: auto;\r\n  background-color: darkblue;\r\n}\r\n.contactoItem[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: center;  \r\n}\r\na[_ngcontent-%COMP%] {\r\n  color: aliceblue;\r\n  text-decoration: none;\r\n}\r\n.enlace[_ngcontent-%COMP%] {\r\n  color: rgba(44, 199, 134, 0.781);\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLG1GQUFtRjtBQUNuRiwwR0FBMEc7QUFFMUc7O0VBRUU7SUFDRSxrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLFNBQVM7RUFDWDs7RUFFQTtJQUNFLFlBQVk7SUFDWixhQUFhO0lBQ2IsYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qiw2QkFBNkI7RUFDL0I7O0VBRUE7SUFDRSxZQUFZO0VBQ2Q7O0VBRUE7SUFDRSxlQUFlO0lBQ2YsTUFBTTtJQUNOLE9BQU87SUFDUCxXQUFXO0lBQ1gsVUFBVTtJQUNWLFNBQVM7SUFDVCxXQUFXO0VBQ2I7O0FBRUY7QUFFQTs7RUFFRTtJQUNFLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsV0FBVztJQUNYLFNBQVM7RUFDWDs7RUFFQTtJQUNFLFVBQVU7SUFDVixtQkFBbUI7SUFDbkIsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQiw2QkFBNkI7RUFDL0I7O0VBRUE7SUFDRSxpQkFBaUI7SUFDakIsZUFBZTtJQUNmLE1BQU07SUFDTixPQUFPO0lBQ1AsV0FBVztJQUNYLGlCQUFpQjtJQUNqQixvQkFBb0I7SUFDcEIsVUFBVTtJQUNWLDBDQUEwQztFQUM1QztBQUNGO0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLHdCQUF3QjtFQUN4QixxREFBNkM7VUFBN0MsNkNBQTZDO0VBQzdDLDZCQUE2QjtFQUM3QixlQUFlO0VBQ2YsbUJBQW1CO0FBQ3JCO0FBQ0E7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLDZCQUE2QjtFQUM3QixpQkFBaUI7RUFDakIsV0FBVztBQUNiO0FBRUE7SUFDSSxpQkFBaUI7QUFDckI7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQixZQUFZO0FBQ2hCO0FBRUE7SUFDSSxzQkFBc0I7QUFDMUI7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixnQ0FBZ0M7RUFDaEMsZUFBZTtBQUNqQjtBQUVBO0VBQ0UsWUFBWTtFQUNaLFVBQVU7RUFDVixzQkFBc0I7RUFDdEIsZ0JBQWdCO0VBQ2hCLGlEQUFpRDtFQUNqRCxlQUFlO0VBQ2YsaURBQWlEO0VBQ2pELDZCQUE2QjtBQUMvQjtBQUVBO0VBQ0Usc0JBQXNCO0FBQ3hCO0FBRUE7RUFDRSxXQUFXO0FBQ2I7QUFHQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsNkJBQTZCO0VBQzdCLHFCQUFxQjtFQUNyQixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLGtCQUFrQjtBQUNwQjtBQUVBO0VBQ0UsaUJBQWlCO0FBQ25CO0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7QUFFQTtFQUNFLHVCQUF1QjtBQUN6QjtBQUdBO0VBQ0UsVUFBVTtBQUNaO0FBRUE7RUFDRSxVQUFVO0VBQ1Ysa0JBQWtCO0FBQ3BCO0FBRUE7RUFDRSw0QkFBNEI7QUFDOUI7QUFFQTtFQUNFLFdBQVc7RUFDWCwyQ0FBMkM7RUFDM0MsY0FBYztBQUNoQjtBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBRUE7RUFDRSw0QkFBNEI7RUFDNUIsMkdBQTJHO0VBQzNHLFlBQVk7RUFDWixhQUFhO0VBQ2Isa0JBQWtCO0FBQ3BCO0FBRUE7RUFDRSxVQUFVO0FBQ1o7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjtBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixZQUFZO0VBQ1osYUFBYTtBQUNmO0FBRUE7RUFDRSxVQUFVO0VBQ1YsV0FBVztFQUNYLG1CQUFtQjtBQUNyQjtBQUVBO0VBQ0UsYUFBYTtFQUNiLDJCQUEyQjtFQUMzQixtQkFBbUI7QUFDckI7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsbUJBQW1CO0FBQ3JCO0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7QUFFQTtFQUNFLFlBQVk7RUFDWixzQ0FBc0M7RUFDdEMsZUFBZTtFQUNmLGdCQUFnQjtBQUNsQjtBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixXQUFXO0VBQ1gsZ0JBQWdCO0VBQ2hCLFlBQVk7RUFDWiwwQkFBMEI7QUFDNUI7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCO0FBQ3pCO0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIscUJBQXFCO0FBQ3ZCO0FBRUE7RUFDRSxnQ0FBZ0M7QUFDbEMiLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1EYW5jaW5nK1NjcmlwdCZkaXNwbGF5PXN3YXAnKTtcclxuQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9QmVya3NoaXJlK1N3YXNoJmZhbWlseT1EYW5jaW5nK1NjcmlwdCZkaXNwbGF5PXN3YXAnKTtcclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA3ODBweCkgIHtcclxuXHJcbiAgLmljb25vQ29udGFjdG8ge1xyXG4gICAgZm9udC1zaXplOiB4LWxhcmdlO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbGVmdDogMTAlO1xyXG4gIH1cclxuXHJcbiAgLmNvbnRhY3RvTGlzdGEge1xyXG4gICAgd2lkdGg6IDMwMHB4O1xyXG4gICAgaGVpZ2h0OiAzMDBweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XHJcbiAgfVxyXG5cclxuICAubWVudSB7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgfVxyXG5cclxuICBuYXYge1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgei1pbmRleDogMjtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIHdpZHRoOiA0MHB4O1xyXG4gIH1cclxuXHJcbn1cclxuXHJcbkBtZWRpYSAobWluLXdpZHRoOiA3ODBweCkge1xyXG5cclxuICAuaWNvbm9Db250YWN0byB7XHJcbiAgICBmb250LXNpemU6IHgtbGFyZ2U7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBsZWZ0OiAtMTBweDtcclxuICAgIHRvcDogLThweDtcclxuICB9XHJcblxyXG4gIC5jb250YWN0b0xpc3RhIHtcclxuICAgIHdpZHRoOjEwMCU7XHJcbiAgICAvKiBoZWlnaHQ6IDMwMHB4OyAqL1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcclxuICB9XHJcblxyXG4gIG5hdiB7XHJcbiAgICBiYWNrZ3JvdW5kOiBibGFjaztcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHRvcDogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBhZGRpbmctdG9wOiAxMHB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDEwcHg7XHJcbiAgICB6LWluZGV4OiAyO1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDE1cHggMjBweCByZ2IoMzYsIDE3MCwgNDMpO1xyXG4gIH1cclxufVxyXG5cclxuLmNlbnRyYWRvIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuLnRpdHVsbyB7XHJcbiAgY29sb3I6cmdiKDIyOCwgMjEwLCAxMzkpO1xyXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lIHJnYigyMjgsIDIxMCwgMTM5KTtcclxuICBmb250LWZhbWlseTogJ0FsbGFuJywgY3Vyc2l2ZTtcclxuICBmb250LXNpemU6IDQwcHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcclxufVxyXG4uYm90b25lcy1uYXZiYXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcclxuICBmbGV4LXdyYXA6IG5vd3JhcDtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLmJvdG9uLW5hdmVnYWNpb24ge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDIwcHg7XHJcbn1cclxuXHJcbi5ib3Rvbi1uYXZlZ2FjaW9uOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcclxuICAgIGNvbG9yOiBibGFjaztcclxufVxyXG5cclxuLmJvdG9uLW5hdmVnYWNpb246YWN0aXZlIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsdWU7XHJcbn1cclxuXHJcbi5jYXJkIHtcclxuICBtYXgtd2lkdGg6IDQwMHB4O1xyXG4gIGJveC1zaGFkb3c6IDEwcHggMzBweCAzMHB4IHdoaXRlO1xyXG4gIG1hcmdpbi10b3A6IDEwJTtcclxufVxyXG5cclxuLmNhcmRDZW50cmFkYSB7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG4gIHdpZHRoOiA1MCU7XHJcbiAgLyogbWF4LXdpZHRoOiA0MDBweDsgKi9cclxuICBtaW4td2lkdGg6IDI1MHB4O1xyXG4gIC8qIGJveC1zaGFkb3c6IDEwcHggMzBweCAzMHB4IHJnYigxNzksIDY2LCA2Nik7ICovXHJcbiAgbWFyZ2luLXRvcDogMTAlO1xyXG4gIC8qIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTAxLCA0OSwgMTY4LCAwLjc4MSk7ICovXHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbn1cclxuXHJcbnNlY3Rpb24ge1xyXG4gIHBhZGRpbmc6IDYlIDEwJSA0JSAxMCU7XHJcbn1cclxuXHJcbnRhYmxlIHtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuXHJcbi5ib3RvbmVzLXNsaWRlciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG4gIGFsaWduLWl0ZW1zOiBiYXNlbGluZTtcclxuICBwYWRkaW5nLWxlZnQ6IDEwJTtcclxuICBwYWRkaW5nLXJpZ2h0OiAxMCU7XHJcbiAgcGFkZGluZy1ib3R0b206IDUlO1xyXG59XHJcblxyXG4ucGFnaW5hdG9yIHtcclxuICBjb2xvcjogZGFya29yYW5nZTtcclxufVxyXG5cclxuLmNoYXJ0cmV1c2Uge1xyXG4gIGNvbG9yOmNoYXJ0cmV1c2U7XHJcbn1cclxuXHJcbi5ib3RvblNsaWRlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcblxyXG4uYmFycmEge1xyXG4gIHdpZHRoOiAyMCU7XHJcbn1cclxuXHJcbi5sb2dvIHtcclxuICB3aWR0aDogNDAlO1xyXG4gIHBhZGRpbmctbGVmdDogMzBweDtcclxufVxyXG5cclxuLmVuY2FiZXphZG8ge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGRhcmt2aW9sZXQ7XHJcbn1cclxuXHJcbi5jYXJkRm9ybWFjaW9uIHtcclxuICB3aWR0aDogYXV0bztcclxuICBib3gtc2hhZG93OiAxMHB4IDMwcHggMzBweCByZ2IoMTY3LCA2NiwgNjYpO1xyXG4gIG1hcmdpbi10b3A6IDUlO1xyXG59XHJcblxyXG4uaGVhZGVyLWNhcmQge1xyXG4gIG1hcmdpbi1sZWZ0OiAxMCU7XHJcbn1cclxuXHJcbmFydGljbGUge1xyXG4gIGJhY2tncm91bmQ6IHJnYigyNTUsMjU1LDI1NSk7XHJcbiAgYmFja2dyb3VuZDogcmFkaWFsLWdyYWRpZW50KGNpcmNsZSwgcmdiYSgyNTUsMjU1LDI1NSwxKSAxNCUsIHJnYmEoMjI0LDIyNCwyMjQsMSkgMjklLCByZ2JhKDU0LDU0LDU0LDEpIDg2JSk7XHJcbiAgd2lkdGg6IDMwMHB4O1xyXG4gIGhlaWdodDogMzAwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG59XHJcblxyXG4uZW1wcmVzYSB7XHJcbiAgY29sb3I6IHJlZDtcclxufVxyXG5cclxuLnB1ZXN0byB7XHJcbiAgY29sb3I6IGdyZWVueWVsbG93O1xyXG59XHJcblxyXG4udGV4dG8ge1xyXG4gIHBhZGRpbmctdG9wOiAyNSU7XHJcbiAgcGFkZGluZy1sZWZ0OiAyNSU7XHJcbiAgd2lkdGg6IDIwMHB4O1xyXG4gIGhlaWdodDogMjAwcHg7XHJcbn1cclxuXHJcbi5taXRhZCB7XHJcbiAgd2lkdGg6IDUwJTtcclxuICBoZWlnaHQ6IDUwJTtcclxuICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xyXG59XHJcblxyXG4uZG9zQ29sdW1uYXMge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdy1yZXZlcnNlO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5jb2x1bW5hc1Jlc3BvbnNpdmFzIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLmNvbHVtbmFEb3Mge1xyXG4gIG1hcmdpbi1sZWZ0OiAyMCU7XHJcbn1cclxuXHJcbi5iaWVudmVuaWRvIHtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgZm9udC1mYW1pbHk6ICdEYW5jaW5nIFNjcmlwdCcsIGN1cnNpdmU7XHJcbiAgZm9udC1zaXplOiAzMHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbn1cclxuXHJcbmJvZHkge1xyXG4gIHBhZGRpbmctdG9wOiAwcHg7XHJcbiAgcGFkZGluZy1sZWZ0OiAwcHg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWluLWhlaWdodDogMTAwJTtcclxuICBoZWlnaHQ6IGF1dG87XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogZGFya2JsdWU7XHJcbn1cclxuXHJcbi5jb250YWN0b0l0ZW0ge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsgIFxyXG59XHJcblxyXG5hIHtcclxuICBjb2xvcjogYWxpY2VibHVlO1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxufVxyXG5cclxuLmVubGFjZSB7XHJcbiAgY29sb3I6IHJnYmEoNDQsIDE5OSwgMTM0LCAwLjc4MSk7XHJcbn0iXX0= */"] });


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
/* harmony import */ var _material_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./material.module */ "vvyD");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ "fXoL");












class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineInjector"]({ providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
            _material_module__WEBPACK_IMPORTED_MODULE_10__["MaterialModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_5__["NavbarComponent"],
        _components_home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"],
        _components_formacion_formacion_component__WEBPACK_IMPORTED_MODULE_7__["FormacionComponent"],
        _components_experiencia_experiencia_component__WEBPACK_IMPORTED_MODULE_8__["ExperienciaComponent"],
        _components_contacto_contacto_component__WEBPACK_IMPORTED_MODULE_9__["ContactoComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
        _material_module__WEBPACK_IMPORTED_MODULE_10__["MaterialModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"]] }); })();


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_mobileDetector_mobile_detector_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/mobileDetector/mobile-detector.service */ "HhPq");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/tabs */ "wZkO");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");








function FormacionComponent_div_5_th_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Nombre ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function FormacionComponent_div_5_td_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r17 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r17.nombre, " ");
} }
function FormacionComponent_div_5_th_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Establecimiento ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function FormacionComponent_div_5_td_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r18 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r18.establecimiento, " ");
} }
function FormacionComponent_div_5_th_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Fecha de inicio ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function FormacionComponent_div_5_td_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r19 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r19.fechaInicio, " ");
} }
function FormacionComponent_div_5_th_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Fecha de finalizaci\u00F3n ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function FormacionComponent_div_5_td_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r20 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r20.fechaFin, " ");
} }
function FormacionComponent_div_5_th_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Logo ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function FormacionComponent_div_5_td_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r21 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "./assets/", element_r21.logo, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function FormacionComponent_div_5_tr_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 23);
} }
function FormacionComponent_div_5_tr_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 24);
} }
function FormacionComponent_div_5_div_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const lenguaje_r23 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](lenguaje_r23);
} }
function FormacionComponent_div_5_div_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const base_r24 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](base_r24);
} }
function FormacionComponent_div_5_div_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r25 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r25);
} }
function FormacionComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-tab-group", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-tab", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "table", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](6, 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, FormacionComponent_div_5_th_7_Template, 2, 0, "th", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, FormacionComponent_div_5_td_8_Template, 2, 1, "td", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](9, 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, FormacionComponent_div_5_th_10_Template, 2, 0, "th", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, FormacionComponent_div_5_td_11_Template, 2, 1, "td", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](12, 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, FormacionComponent_div_5_th_13_Template, 2, 0, "th", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, FormacionComponent_div_5_td_14_Template, 2, 1, "td", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](15, 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, FormacionComponent_div_5_th_16_Template, 2, 0, "th", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, FormacionComponent_div_5_td_17_Template, 2, 1, "td", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](18, 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, FormacionComponent_div_5_th_19_Template, 2, 0, "th", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, FormacionComponent_div_5_td_20_Template, 2, 1, "td", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, FormacionComponent_div_5_tr_21_Template, 1, 0, "tr", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, FormacionComponent_div_5_tr_22_Template, 1, 0, "tr", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "mat-tab", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "mat-card", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, FormacionComponent_div_5_div_25_Template, 4, 1, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "mat-tab", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "mat-card", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, FormacionComponent_div_5_div_28_Template, 4, 1, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "mat-tab", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "mat-card", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](32, FormacionComponent_div_5_div_32_Template, 4, 1, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSource", ctx_r0.dataSource);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matHeaderRowDef", ctx_r0.displayedColumns);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRowDefColumns", ctx_r0.displayedColumns);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.lenguajes);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.basesDeDatos);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.frameTec);
} }
function FormacionComponent_div_6_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "img", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r30 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", data_r30.nombre, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", data_r30.establecimiento, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", data_r30.fechaInicio, " - ", data_r30.fechaFin, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "./assets/", data_r30.logo, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function FormacionComponent_div_6_div_15_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const lenguaje_r32 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](lenguaje_r32);
} }
function FormacionComponent_div_6_div_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card-title", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Lenguajes");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, FormacionComponent_div_6_div_15_div_3_Template, 4, 1, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r27.lenguajes);
} }
function FormacionComponent_div_6_div_16_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const base_r34 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](base_r34);
} }
function FormacionComponent_div_6_div_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card-title", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Bases de datos");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, FormacionComponent_div_6_div_16_div_3_Template, 4, 1, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r28.basesDeDatos);
} }
function FormacionComponent_div_6_div_17_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r36 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r36);
} }
function FormacionComponent_div_6_div_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card-title", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Frameworks y tecnolog\u00EDas");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, FormacionComponent_div_6_div_17_div_3_Template, 4, 1, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r29.frameTec);
} }
function FormacionComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    const _r38 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-card-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Universitaria y cursos");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, FormacionComponent_div_6_div_4_Template, 11, 5, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-card", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FormacionComponent_div_6_Template_button_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r38); const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r37.change(0); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-icon", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "arrow_back");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FormacionComponent_div_6_Template_button_click_12_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r38); const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r39.change(1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-icon", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "arrow_forward");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, FormacionComponent_div_6_div_15_Template, 4, 1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, FormacionComponent_div_6_div_16_Template, 4, 1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, FormacionComponent_div_6_div_17_Template, 4, 1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.dataSource);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", ctx_r1.position + 1, "/", 3, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.position == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.position == 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.position == 2);
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
FormacionComponent.ɵfac = function FormacionComponent_Factory(t) { return new (t || FormacionComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_mobileDetector_mobile_detector_service__WEBPACK_IMPORTED_MODULE_1__["MobileDetectorService"])); };
FormacionComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FormacionComponent, selectors: [["app-formacion"]], decls: 7, vars: 2, consts: [[1, "centrado"], [1, "titulo"], [4, "ngIf"], ["backgroundColor", "accent"], ["label", "UNIVERSITARIA Y CURSOS"], ["mat-table", "", 1, "mat-elevation-z8", 3, "dataSource"], ["matColumnDef", "nombre"], ["class", "encabezado", "mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "establecimiento"], ["matColumnDef", "fechaInicio"], ["matColumnDef", "fechaFin"], ["matColumnDef", "logo"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["label", "LENGUAJES", 1, "label"], [1, "cardFormacion"], [4, "ngFor", "ngForOf"], ["label", "BASES DE DATOS", 1, "label"], ["label", "FRAMEWORKS Y TECNOLOGIAS", 1, "label"], ["mat-header-cell", "", 1, "encabezado"], ["mat-cell", ""], [1, "logo", 3, "src"], ["mat-header-row", ""], ["mat-row", ""], [1, "botones-slider"], ["mat-fab", "", 1, "botonSlider", 3, "click"], [1, "sliderArrow"], [1, "paginator"], ["mat-card-image", "", 1, "logo", 3, "src"], [1, "chartreuse"]], template: function FormacionComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "body");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "section");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Formaci\u00F3n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, FormacionComponent_div_5_Template, 33, 6, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, FormacionComponent_div_6_Template, 18, 6, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isMobile);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isMobile);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_3__["MatTabGroup"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_3__["MatTab"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatTable"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatRowDef"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCard"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatHeaderCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatRow"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardTitle"], _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIcon"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardImage"]], styles: ["@import url('https://fonts.googleapis.com/css2?family=Dancing+Script&display=swap');\r\n@import url('https://fonts.googleapis.com/css2?family=Berkshire+Swash&family=Dancing+Script&display=swap');\r\n@media (max-width: 780px)  {\r\n\r\n  .iconoContacto[_ngcontent-%COMP%] {\r\n    font-size: x-large;\r\n    position: absolute;\r\n    left: 10%;\r\n  }\r\n\r\n  .contactoLista[_ngcontent-%COMP%] {\r\n    width: 300px;\r\n    height: 300px;\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: space-evenly;\r\n  }\r\n\r\n  .menu[_ngcontent-%COMP%] {\r\n    color: white;\r\n  }\r\n\r\n  nav[_ngcontent-%COMP%] {\r\n    position: fixed;\r\n    top: 0;\r\n    left: 0;\r\n    width: 100%;\r\n    z-index: 2;\r\n    margin: 0;\r\n    width: 40px;\r\n  }\r\n\r\n}\r\n@media (min-width: 780px) {\r\n\r\n  .iconoContacto[_ngcontent-%COMP%] {\r\n    font-size: x-large;\r\n    position: relative;\r\n    left: -10px;\r\n    top: -8px;\r\n  }\r\n\r\n  .contactoLista[_ngcontent-%COMP%] {\r\n    width:100%;\r\n    \r\n    display: flex;\r\n    flex-direction: row;\r\n    justify-content: space-evenly;\r\n  }\r\n\r\n  nav[_ngcontent-%COMP%] {\r\n    background: black;\r\n    position: fixed;\r\n    top: 0;\r\n    left: 0;\r\n    width: 100%;\r\n    padding-top: 10px;\r\n    padding-bottom: 10px;\r\n    z-index: 2;\r\n    box-shadow: 0px 15px 20px rgb(36, 170, 43);\r\n  }\r\n}\r\n.centrado[_ngcontent-%COMP%] {\r\n  text-align: center;\r\n}\r\n.titulo[_ngcontent-%COMP%] {\r\n  color:rgb(228, 210, 139);\r\n  -webkit-text-decoration: underline rgb(228, 210, 139);\r\n          text-decoration: underline rgb(228, 210, 139);\r\n  font-family: 'Allan', cursive;\r\n  font-size: 40px;\r\n  margin-bottom: 30px;\r\n}\r\n.botones-navbar[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: space-evenly;\r\n  flex-wrap: nowrap;\r\n  width: 100%;\r\n}\r\n.boton-navegacion[_ngcontent-%COMP%] {\r\n    margin-left: 20px;\r\n}\r\n.boton-navegacion[_ngcontent-%COMP%]:hover {\r\n    background-color: red;\r\n    color: black;\r\n}\r\n.boton-navegacion[_ngcontent-%COMP%]:active {\r\n    background-color: blue;\r\n}\r\n.card[_ngcontent-%COMP%] {\r\n  max-width: 400px;\r\n  box-shadow: 10px 30px 30px white;\r\n  margin-top: 10%;\r\n}\r\n.cardCentrada[_ngcontent-%COMP%] {\r\n  margin: auto;\r\n  width: 50%;\r\n  \r\n  min-width: 250px;\r\n  \r\n  margin-top: 10%;\r\n  \r\n  background-color: transparent;\r\n}\r\nsection[_ngcontent-%COMP%] {\r\n  padding: 6% 10% 4% 10%;\r\n}\r\ntable[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n}\r\n.botones-slider[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: space-around;\r\n  align-items: baseline;\r\n  padding-left: 10%;\r\n  padding-right: 10%;\r\n  padding-bottom: 5%;\r\n}\r\n.paginator[_ngcontent-%COMP%] {\r\n  color: darkorange;\r\n}\r\n.chartreuse[_ngcontent-%COMP%] {\r\n  color:chartreuse;\r\n}\r\n.botonSlider[_ngcontent-%COMP%] {\r\n  background-color: white;\r\n}\r\n.barra[_ngcontent-%COMP%] {\r\n  width: 20%;\r\n}\r\n.logo[_ngcontent-%COMP%] {\r\n  width: 40%;\r\n  padding-left: 30px;\r\n}\r\n.encabezado[_ngcontent-%COMP%] {\r\n  background-color: darkviolet;\r\n}\r\n.cardFormacion[_ngcontent-%COMP%] {\r\n  width: auto;\r\n  box-shadow: 10px 30px 30px rgb(167, 66, 66);\r\n  margin-top: 5%;\r\n}\r\n.header-card[_ngcontent-%COMP%] {\r\n  margin-left: 10%;\r\n}\r\narticle[_ngcontent-%COMP%] {\r\n  background: rgb(255,255,255);\r\n  background: radial-gradient(circle, rgba(255,255,255,1) 14%, rgba(224,224,224,1) 29%, rgba(54,54,54,1) 86%);\r\n  width: 300px;\r\n  height: 300px;\r\n  border-radius: 50%;\r\n}\r\n.empresa[_ngcontent-%COMP%] {\r\n  color: red;\r\n}\r\n.puesto[_ngcontent-%COMP%] {\r\n  color: greenyellow;\r\n}\r\n.texto[_ngcontent-%COMP%] {\r\n  padding-top: 25%;\r\n  padding-left: 25%;\r\n  width: 200px;\r\n  height: 200px;\r\n}\r\n.mitad[_ngcontent-%COMP%] {\r\n  width: 50%;\r\n  height: 50%;\r\n  padding-right: 20px;\r\n}\r\n.dosColumnas[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  flex-direction: row-reverse;\r\n  align-items: center;\r\n}\r\n.columnasResponsivas[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  flex-direction: row;\r\n  align-items: center;\r\n}\r\n.columnaDos[_ngcontent-%COMP%] {\r\n  margin-left: 20%;\r\n}\r\n.bienvenido[_ngcontent-%COMP%] {\r\n  color: white;\r\n  font-family: 'Dancing Script', cursive;\r\n  font-size: 30px;\r\n  font-weight: 500;\r\n}\r\nbody[_ngcontent-%COMP%] {\r\n  padding-top: 0px;\r\n  padding-left: 0px;\r\n  width: 100%;\r\n  min-height: 100%;\r\n  height: auto;\r\n  background-color: darkblue;\r\n}\r\n.contactoItem[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: center;  \r\n}\r\na[_ngcontent-%COMP%] {\r\n  color: aliceblue;\r\n  text-decoration: none;\r\n}\r\n.enlace[_ngcontent-%COMP%] {\r\n  color: rgba(44, 199, 134, 0.781);\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2FwcC5jb21wb25lbnQuY3NzIiwiZm9ybWFjaW9uLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsbUZBQW1GO0FBQ25GLDBHQUEwRztBQUUxRzs7RUFFRTtJQUNFLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsU0FBUztFQUNYOztFQUVBO0lBQ0UsWUFBWTtJQUNaLGFBQWE7SUFDYixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLDZCQUE2QjtFQUMvQjs7RUFFQTtJQUNFLFlBQVk7RUFDZDs7RUFFQTtJQUNFLGVBQWU7SUFDZixNQUFNO0lBQ04sT0FBTztJQUNQLFdBQVc7SUFDWCxVQUFVO0lBQ1YsU0FBUztJQUNULFdBQVc7RUFDYjs7QUFFRjtBQUVBOztFQUVFO0lBQ0Usa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsU0FBUztFQUNYOztFQUVBO0lBQ0UsVUFBVTtJQUNWLG1CQUFtQjtJQUNuQixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLDZCQUE2QjtFQUMvQjs7RUFFQTtJQUNFLGlCQUFpQjtJQUNqQixlQUFlO0lBQ2YsTUFBTTtJQUNOLE9BQU87SUFDUCxXQUFXO0lBQ1gsaUJBQWlCO0lBQ2pCLG9CQUFvQjtJQUNwQixVQUFVO0lBQ1YsMENBQTBDO0VBQzVDO0FBQ0Y7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjtBQUNBO0VBQ0Usd0JBQXdCO0VBQ3hCLHFEQUE2QztVQUE3Qyw2Q0FBNkM7RUFDN0MsNkJBQTZCO0VBQzdCLGVBQWU7RUFDZixtQkFBbUI7QUFDckI7QUFDQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsNkJBQTZCO0VBQzdCLGlCQUFpQjtFQUNqQixXQUFXO0FBQ2I7QUFFQTtJQUNJLGlCQUFpQjtBQUNyQjtBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCLFlBQVk7QUFDaEI7QUFFQTtJQUNJLHNCQUFzQjtBQUMxQjtBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGdDQUFnQztFQUNoQyxlQUFlO0FBQ2pCO0FBRUE7RUFDRSxZQUFZO0VBQ1osVUFBVTtFQUNWLHNCQUFzQjtFQUN0QixnQkFBZ0I7RUFDaEIsaURBQWlEO0VBQ2pELGVBQWU7RUFDZixpREFBaUQ7RUFDakQsNkJBQTZCO0FBQy9CO0FBRUE7RUFDRSxzQkFBc0I7QUFDeEI7QUFFQTtFQUNFLFdBQVc7QUFDYjtBQUdBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQiw2QkFBNkI7RUFDN0IscUJBQXFCO0VBQ3JCLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsa0JBQWtCO0FBQ3BCO0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUVBO0VBQ0UsdUJBQXVCO0FBQ3pCO0FBR0E7RUFDRSxVQUFVO0FBQ1o7QUFFQTtFQUNFLFVBQVU7RUFDVixrQkFBa0I7QUFDcEI7QUFFQTtFQUNFLDRCQUE0QjtBQUM5QjtBQUVBO0VBQ0UsV0FBVztFQUNYLDJDQUEyQztFQUMzQyxjQUFjO0FBQ2hCO0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7QUFFQTtFQUNFLDRCQUE0QjtFQUM1QiwyR0FBMkc7RUFDM0csWUFBWTtFQUNaLGFBQWE7RUFDYixrQkFBa0I7QUFDcEI7QUFFQTtFQUNFLFVBQVU7QUFDWjtBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCO0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLFlBQVk7RUFDWixhQUFhO0FBQ2Y7QUFFQTtFQUNFLFVBQVU7RUFDVixXQUFXO0VBQ1gsbUJBQW1CO0FBQ3JCO0FBRUE7RUFDRSxhQUFhO0VBQ2IsMkJBQTJCO0VBQzNCLG1CQUFtQjtBQUNyQjtBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixtQkFBbUI7QUFDckI7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUVBO0VBQ0UsWUFBWTtFQUNaLHNDQUFzQztFQUN0QyxlQUFlO0VBQ2YsZ0JBQWdCO0FBQ2xCO0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLDBCQUEwQjtBQUM1QjtBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix1QkFBdUI7QUFDekI7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixxQkFBcUI7QUFDdkI7QUFFQTtFQUNFLGdDQUFnQztBQUNsQztBQ2hQQTs7Ozs7R0FLRyIsImZpbGUiOiJmb3JtYWNpb24uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PURhbmNpbmcrU2NyaXB0JmRpc3BsYXk9c3dhcCcpO1xyXG5AaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1CZXJrc2hpcmUrU3dhc2gmZmFtaWx5PURhbmNpbmcrU2NyaXB0JmRpc3BsYXk9c3dhcCcpO1xyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDc4MHB4KSAge1xyXG5cclxuICAuaWNvbm9Db250YWN0byB7XHJcbiAgICBmb250LXNpemU6IHgtbGFyZ2U7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBsZWZ0OiAxMCU7XHJcbiAgfVxyXG5cclxuICAuY29udGFjdG9MaXN0YSB7XHJcbiAgICB3aWR0aDogMzAwcHg7XHJcbiAgICBoZWlnaHQ6IDMwMHB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcclxuICB9XHJcblxyXG4gIC5tZW51IHtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICB9XHJcblxyXG4gIG5hdiB7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICB6LWluZGV4OiAyO1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgd2lkdGg6IDQwcHg7XHJcbiAgfVxyXG5cclxufVxyXG5cclxuQG1lZGlhIChtaW4td2lkdGg6IDc4MHB4KSB7XHJcblxyXG4gIC5pY29ub0NvbnRhY3RvIHtcclxuICAgIGZvbnQtc2l6ZTogeC1sYXJnZTtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGxlZnQ6IC0xMHB4O1xyXG4gICAgdG9wOiAtOHB4O1xyXG4gIH1cclxuXHJcbiAgLmNvbnRhY3RvTGlzdGEge1xyXG4gICAgd2lkdGg6MTAwJTtcclxuICAgIC8qIGhlaWdodDogMzAwcHg7ICovXHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xyXG4gIH1cclxuXHJcbiAgbmF2IHtcclxuICAgIGJhY2tncm91bmQ6IGJsYWNrO1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgcGFkZGluZy10b3A6IDEwcHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcclxuICAgIHotaW5kZXg6IDI7XHJcbiAgICBib3gtc2hhZG93OiAwcHggMTVweCAyMHB4IHJnYigzNiwgMTcwLCA0Myk7XHJcbiAgfVxyXG59XHJcblxyXG4uY2VudHJhZG8ge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4udGl0dWxvIHtcclxuICBjb2xvcjpyZ2IoMjI4LCAyMTAsIDEzOSk7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmUgcmdiKDIyOCwgMjEwLCAxMzkpO1xyXG4gIGZvbnQtZmFtaWx5OiAnQWxsYW4nLCBjdXJzaXZlO1xyXG4gIGZvbnQtc2l6ZTogNDBweDtcclxuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xyXG59XHJcbi5ib3RvbmVzLW5hdmJhciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xyXG4gIGZsZXgtd3JhcDogbm93cmFwO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uYm90b24tbmF2ZWdhY2lvbiB7XHJcbiAgICBtYXJnaW4tbGVmdDogMjBweDtcclxufVxyXG5cclxuLmJvdG9uLW5hdmVnYWNpb246aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG59XHJcblxyXG4uYm90b24tbmF2ZWdhY2lvbjphY3RpdmUge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmx1ZTtcclxufVxyXG5cclxuLmNhcmQge1xyXG4gIG1heC13aWR0aDogNDAwcHg7XHJcbiAgYm94LXNoYWRvdzogMTBweCAzMHB4IDMwcHggd2hpdGU7XHJcbiAgbWFyZ2luLXRvcDogMTAlO1xyXG59XHJcblxyXG4uY2FyZENlbnRyYWRhIHtcclxuICBtYXJnaW46IGF1dG87XHJcbiAgd2lkdGg6IDUwJTtcclxuICAvKiBtYXgtd2lkdGg6IDQwMHB4OyAqL1xyXG4gIG1pbi13aWR0aDogMjUwcHg7XHJcbiAgLyogYm94LXNoYWRvdzogMTBweCAzMHB4IDMwcHggcmdiKDE3OSwgNjYsIDY2KTsgKi9cclxuICBtYXJnaW4tdG9wOiAxMCU7XHJcbiAgLyogYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxMDEsIDQ5LCAxNjgsIDAuNzgxKTsgKi9cclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxufVxyXG5cclxuc2VjdGlvbiB7XHJcbiAgcGFkZGluZzogNiUgMTAlIDQlIDEwJTtcclxufVxyXG5cclxudGFibGUge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG5cclxuLmJvdG9uZXMtc2xpZGVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbiAgYWxpZ24taXRlbXM6IGJhc2VsaW5lO1xyXG4gIHBhZGRpbmctbGVmdDogMTAlO1xyXG4gIHBhZGRpbmctcmlnaHQ6IDEwJTtcclxuICBwYWRkaW5nLWJvdHRvbTogNSU7XHJcbn1cclxuXHJcbi5wYWdpbmF0b3Ige1xyXG4gIGNvbG9yOiBkYXJrb3JhbmdlO1xyXG59XHJcblxyXG4uY2hhcnRyZXVzZSB7XHJcbiAgY29sb3I6Y2hhcnRyZXVzZTtcclxufVxyXG5cclxuLmJvdG9uU2xpZGVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuXHJcbi5iYXJyYSB7XHJcbiAgd2lkdGg6IDIwJTtcclxufVxyXG5cclxuLmxvZ28ge1xyXG4gIHdpZHRoOiA0MCU7XHJcbiAgcGFkZGluZy1sZWZ0OiAzMHB4O1xyXG59XHJcblxyXG4uZW5jYWJlemFkbyB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogZGFya3Zpb2xldDtcclxufVxyXG5cclxuLmNhcmRGb3JtYWNpb24ge1xyXG4gIHdpZHRoOiBhdXRvO1xyXG4gIGJveC1zaGFkb3c6IDEwcHggMzBweCAzMHB4IHJnYigxNjcsIDY2LCA2Nik7XHJcbiAgbWFyZ2luLXRvcDogNSU7XHJcbn1cclxuXHJcbi5oZWFkZXItY2FyZCB7XHJcbiAgbWFyZ2luLWxlZnQ6IDEwJTtcclxufVxyXG5cclxuYXJ0aWNsZSB7XHJcbiAgYmFja2dyb3VuZDogcmdiKDI1NSwyNTUsMjU1KTtcclxuICBiYWNrZ3JvdW5kOiByYWRpYWwtZ3JhZGllbnQoY2lyY2xlLCByZ2JhKDI1NSwyNTUsMjU1LDEpIDE0JSwgcmdiYSgyMjQsMjI0LDIyNCwxKSAyOSUsIHJnYmEoNTQsNTQsNTQsMSkgODYlKTtcclxuICB3aWR0aDogMzAwcHg7XHJcbiAgaGVpZ2h0OiAzMDBweDtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbn1cclxuXHJcbi5lbXByZXNhIHtcclxuICBjb2xvcjogcmVkO1xyXG59XHJcblxyXG4ucHVlc3RvIHtcclxuICBjb2xvcjogZ3JlZW55ZWxsb3c7XHJcbn1cclxuXHJcbi50ZXh0byB7XHJcbiAgcGFkZGluZy10b3A6IDI1JTtcclxuICBwYWRkaW5nLWxlZnQ6IDI1JTtcclxuICB3aWR0aDogMjAwcHg7XHJcbiAgaGVpZ2h0OiAyMDBweDtcclxufVxyXG5cclxuLm1pdGFkIHtcclxuICB3aWR0aDogNTAlO1xyXG4gIGhlaWdodDogNTAlO1xyXG4gIHBhZGRpbmctcmlnaHQ6IDIwcHg7XHJcbn1cclxuXHJcbi5kb3NDb2x1bW5hcyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93LXJldmVyc2U7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLmNvbHVtbmFzUmVzcG9uc2l2YXMge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4uY29sdW1uYURvcyB7XHJcbiAgbWFyZ2luLWxlZnQ6IDIwJTtcclxufVxyXG5cclxuLmJpZW52ZW5pZG8ge1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBmb250LWZhbWlseTogJ0RhbmNpbmcgU2NyaXB0JywgY3Vyc2l2ZTtcclxuICBmb250LXNpemU6IDMwcHg7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxufVxyXG5cclxuYm9keSB7XHJcbiAgcGFkZGluZy10b3A6IDBweDtcclxuICBwYWRkaW5nLWxlZnQ6IDBweDtcclxuICB3aWR0aDogMTAwJTtcclxuICBtaW4taGVpZ2h0OiAxMDAlO1xyXG4gIGhlaWdodDogYXV0bztcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrYmx1ZTtcclxufVxyXG5cclxuLmNvbnRhY3RvSXRlbSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyOyAgXHJcbn1cclxuXHJcbmEge1xyXG4gIGNvbG9yOiBhbGljZWJsdWU7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG59XHJcblxyXG4uZW5sYWNlIHtcclxuICBjb2xvcjogcmdiYSg0NCwgMTk5LCAxMzQsIDAuNzgxKTtcclxufSIsIkBpbXBvcnQgXCIuLi8uLi9hcHAuY29tcG9uZW50LmNzc1wiO1xyXG5cclxuLyogYm9keSB7XHJcblxyXG4gICAgYmFja2dyb3VuZDogcmdiKDI3LDIwLDE0Mik7XHJcbmJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgcmdiYSgyNywyMCwxNDIsMSkgNSUsIHJnYmEoNDksMTc1LDExNCwxKSA1MCUsIHJnYmEoMjU1LDQxLDAsMSkgMTAwJSk7XHJcblxyXG59ICovIl19 */"] });


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");





function ContactoComponent_div_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "mat-icon", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-card-subtitle");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const contacto_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("svgIcon", contacto_r1.logo);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", contacto_r1.enlace, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", contacto_r1.descripcion, "");
} }
const CONTACTO = [
    { descripcion: "Linkedin", enlace: "https://www.linkedin.com/in/leonardo-david-machado-b119681b3/", logo: "linkedin" },
    { descripcion: "Github", enlace: "https://github.com/LeonardoDavidMachado", logo: "github" },
];
class ContactoComponent {
    constructor(matIconRegistry, domSanitizer) {
        this.matIconRegistry = matIconRegistry;
        this.domSanitizer = domSanitizer;
        this.matIconRegistry.addSvgIcon(`linkedin`, this.domSanitizer.bypassSecurityTrustResourceUrl('./assets/linkedin.svg'));
        this.matIconRegistry.addSvgIcon(`github`, this.domSanitizer.bypassSecurityTrustResourceUrl('./assets/github.svg'));
        this.matIconRegistry.addSvgIcon(`email`, this.domSanitizer.bypassSecurityTrustResourceUrl('./assets/email.svg'));
    }
    ngOnInit() {
        this.contactos = CONTACTO;
    }
}
ContactoComponent.ɵfac = function ContactoComponent_Factory(t) { return new (t || ContactoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_icon__WEBPACK_IMPORTED_MODULE_1__["MatIconRegistry"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"])); };
ContactoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ContactoComponent, selectors: [["app-contacto"]], decls: 13, vars: 1, consts: [[1, "centrado"], [1, "titulo"], [1, "contactoLista"], [1, "contactoItem"], ["svgIcon", "email", 1, "iconoContacto"], ["target", "_blank", "href", "mailto:leondav@hotmail.com"], [4, "ngFor", "ngForOf"], [1, "iconoContacto", 3, "svgIcon"], ["target", "_blank", 3, "href"]], template: function ContactoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "body");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "section");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Contacto");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "mat-icon", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-card-subtitle");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " E-mail");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, ContactoComponent_div_12_Template, 6, 3, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.contactos);
    } }, directives: [_angular_material_icon__WEBPACK_IMPORTED_MODULE_1__["MatIcon"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardSubtitle"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"]], styles: ["@import url('https://fonts.googleapis.com/css2?family=Dancing+Script&display=swap');\r\n@import url('https://fonts.googleapis.com/css2?family=Berkshire+Swash&family=Dancing+Script&display=swap');\r\n@media (max-width: 780px)  {\r\n\r\n  .iconoContacto[_ngcontent-%COMP%] {\r\n    font-size: x-large;\r\n    position: absolute;\r\n    left: 10%;\r\n  }\r\n\r\n  .contactoLista[_ngcontent-%COMP%] {\r\n    width: 300px;\r\n    height: 300px;\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: space-evenly;\r\n  }\r\n\r\n  .menu[_ngcontent-%COMP%] {\r\n    color: white;\r\n  }\r\n\r\n  nav[_ngcontent-%COMP%] {\r\n    position: fixed;\r\n    top: 0;\r\n    left: 0;\r\n    width: 100%;\r\n    z-index: 2;\r\n    margin: 0;\r\n    width: 40px;\r\n  }\r\n\r\n}\r\n@media (min-width: 780px) {\r\n\r\n  .iconoContacto[_ngcontent-%COMP%] {\r\n    font-size: x-large;\r\n    position: relative;\r\n    left: -10px;\r\n    top: -8px;\r\n  }\r\n\r\n  .contactoLista[_ngcontent-%COMP%] {\r\n    width:100%;\r\n    \r\n    display: flex;\r\n    flex-direction: row;\r\n    justify-content: space-evenly;\r\n  }\r\n\r\n  nav[_ngcontent-%COMP%] {\r\n    background: black;\r\n    position: fixed;\r\n    top: 0;\r\n    left: 0;\r\n    width: 100%;\r\n    padding-top: 10px;\r\n    padding-bottom: 10px;\r\n    z-index: 2;\r\n    box-shadow: 0px 15px 20px rgb(36, 170, 43);\r\n  }\r\n}\r\n.centrado[_ngcontent-%COMP%] {\r\n  text-align: center;\r\n}\r\n.titulo[_ngcontent-%COMP%] {\r\n  color:rgb(228, 210, 139);\r\n  -webkit-text-decoration: underline rgb(228, 210, 139);\r\n          text-decoration: underline rgb(228, 210, 139);\r\n  font-family: 'Allan', cursive;\r\n  font-size: 40px;\r\n  margin-bottom: 30px;\r\n}\r\n.botones-navbar[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: space-evenly;\r\n  flex-wrap: nowrap;\r\n  width: 100%;\r\n}\r\n.boton-navegacion[_ngcontent-%COMP%] {\r\n    margin-left: 20px;\r\n}\r\n.boton-navegacion[_ngcontent-%COMP%]:hover {\r\n    background-color: red;\r\n    color: black;\r\n}\r\n.boton-navegacion[_ngcontent-%COMP%]:active {\r\n    background-color: blue;\r\n}\r\n.card[_ngcontent-%COMP%] {\r\n  max-width: 400px;\r\n  box-shadow: 10px 30px 30px white;\r\n  margin-top: 10%;\r\n}\r\n.cardCentrada[_ngcontent-%COMP%] {\r\n  margin: auto;\r\n  width: 50%;\r\n  \r\n  min-width: 250px;\r\n  \r\n  margin-top: 10%;\r\n  \r\n  background-color: transparent;\r\n}\r\nsection[_ngcontent-%COMP%] {\r\n  padding: 6% 10% 4% 10%;\r\n}\r\ntable[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n}\r\n.botones-slider[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: space-around;\r\n  align-items: baseline;\r\n  padding-left: 10%;\r\n  padding-right: 10%;\r\n  padding-bottom: 5%;\r\n}\r\n.paginator[_ngcontent-%COMP%] {\r\n  color: darkorange;\r\n}\r\n.chartreuse[_ngcontent-%COMP%] {\r\n  color:chartreuse;\r\n}\r\n.botonSlider[_ngcontent-%COMP%] {\r\n  background-color: white;\r\n}\r\n.barra[_ngcontent-%COMP%] {\r\n  width: 20%;\r\n}\r\n.logo[_ngcontent-%COMP%] {\r\n  width: 40%;\r\n  padding-left: 30px;\r\n}\r\n.encabezado[_ngcontent-%COMP%] {\r\n  background-color: darkviolet;\r\n}\r\n.cardFormacion[_ngcontent-%COMP%] {\r\n  width: auto;\r\n  box-shadow: 10px 30px 30px rgb(167, 66, 66);\r\n  margin-top: 5%;\r\n}\r\n.header-card[_ngcontent-%COMP%] {\r\n  margin-left: 10%;\r\n}\r\narticle[_ngcontent-%COMP%] {\r\n  background: rgb(255,255,255);\r\n  background: radial-gradient(circle, rgba(255,255,255,1) 14%, rgba(224,224,224,1) 29%, rgba(54,54,54,1) 86%);\r\n  width: 300px;\r\n  height: 300px;\r\n  border-radius: 50%;\r\n}\r\n.empresa[_ngcontent-%COMP%] {\r\n  color: red;\r\n}\r\n.puesto[_ngcontent-%COMP%] {\r\n  color: greenyellow;\r\n}\r\n.texto[_ngcontent-%COMP%] {\r\n  padding-top: 25%;\r\n  padding-left: 25%;\r\n  width: 200px;\r\n  height: 200px;\r\n}\r\n.mitad[_ngcontent-%COMP%] {\r\n  width: 50%;\r\n  height: 50%;\r\n  padding-right: 20px;\r\n}\r\n.dosColumnas[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  flex-direction: row-reverse;\r\n  align-items: center;\r\n}\r\n.columnasResponsivas[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  flex-direction: row;\r\n  align-items: center;\r\n}\r\n.columnaDos[_ngcontent-%COMP%] {\r\n  margin-left: 20%;\r\n}\r\n.bienvenido[_ngcontent-%COMP%] {\r\n  color: white;\r\n  font-family: 'Dancing Script', cursive;\r\n  font-size: 30px;\r\n  font-weight: 500;\r\n}\r\nbody[_ngcontent-%COMP%] {\r\n  padding-top: 0px;\r\n  padding-left: 0px;\r\n  width: 100%;\r\n  min-height: 100%;\r\n  height: auto;\r\n  background-color: darkblue;\r\n}\r\n.contactoItem[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: center;  \r\n}\r\na[_ngcontent-%COMP%] {\r\n  color: aliceblue;\r\n  text-decoration: none;\r\n}\r\n.enlace[_ngcontent-%COMP%] {\r\n  color: rgba(44, 199, 134, 0.781);\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2FwcC5jb21wb25lbnQuY3NzIiwiY29udGFjdG8uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxtRkFBbUY7QUFDbkYsMEdBQTBHO0FBRTFHOztFQUVFO0lBQ0Usa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixTQUFTO0VBQ1g7O0VBRUE7SUFDRSxZQUFZO0lBQ1osYUFBYTtJQUNiLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsNkJBQTZCO0VBQy9COztFQUVBO0lBQ0UsWUFBWTtFQUNkOztFQUVBO0lBQ0UsZUFBZTtJQUNmLE1BQU07SUFDTixPQUFPO0lBQ1AsV0FBVztJQUNYLFVBQVU7SUFDVixTQUFTO0lBQ1QsV0FBVztFQUNiOztBQUVGO0FBRUE7O0VBRUU7SUFDRSxrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxTQUFTO0VBQ1g7O0VBRUE7SUFDRSxVQUFVO0lBQ1YsbUJBQW1CO0lBQ25CLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsNkJBQTZCO0VBQy9COztFQUVBO0lBQ0UsaUJBQWlCO0lBQ2pCLGVBQWU7SUFDZixNQUFNO0lBQ04sT0FBTztJQUNQLFdBQVc7SUFDWCxpQkFBaUI7SUFDakIsb0JBQW9CO0lBQ3BCLFVBQVU7SUFDViwwQ0FBMEM7RUFDNUM7QUFDRjtBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSx3QkFBd0I7RUFDeEIscURBQTZDO1VBQTdDLDZDQUE2QztFQUM3Qyw2QkFBNkI7RUFDN0IsZUFBZTtFQUNmLG1CQUFtQjtBQUNyQjtBQUNBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQiw2QkFBNkI7RUFDN0IsaUJBQWlCO0VBQ2pCLFdBQVc7QUFDYjtBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCO0FBRUE7SUFDSSxxQkFBcUI7SUFDckIsWUFBWTtBQUNoQjtBQUVBO0lBQ0ksc0JBQXNCO0FBQzFCO0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsZ0NBQWdDO0VBQ2hDLGVBQWU7QUFDakI7QUFFQTtFQUNFLFlBQVk7RUFDWixVQUFVO0VBQ1Ysc0JBQXNCO0VBQ3RCLGdCQUFnQjtFQUNoQixpREFBaUQ7RUFDakQsZUFBZTtFQUNmLGlEQUFpRDtFQUNqRCw2QkFBNkI7QUFDL0I7QUFFQTtFQUNFLHNCQUFzQjtBQUN4QjtBQUVBO0VBQ0UsV0FBVztBQUNiO0FBR0E7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLDZCQUE2QjtFQUM3QixxQkFBcUI7RUFDckIsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixrQkFBa0I7QUFDcEI7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjtBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBRUE7RUFDRSx1QkFBdUI7QUFDekI7QUFHQTtFQUNFLFVBQVU7QUFDWjtBQUVBO0VBQ0UsVUFBVTtFQUNWLGtCQUFrQjtBQUNwQjtBQUVBO0VBQ0UsNEJBQTRCO0FBQzlCO0FBRUE7RUFDRSxXQUFXO0VBQ1gsMkNBQTJDO0VBQzNDLGNBQWM7QUFDaEI7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUVBO0VBQ0UsNEJBQTRCO0VBQzVCLDJHQUEyRztFQUMzRyxZQUFZO0VBQ1osYUFBYTtFQUNiLGtCQUFrQjtBQUNwQjtBQUVBO0VBQ0UsVUFBVTtBQUNaO0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsWUFBWTtFQUNaLGFBQWE7QUFDZjtBQUVBO0VBQ0UsVUFBVTtFQUNWLFdBQVc7RUFDWCxtQkFBbUI7QUFDckI7QUFFQTtFQUNFLGFBQWE7RUFDYiwyQkFBMkI7RUFDM0IsbUJBQW1CO0FBQ3JCO0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLG1CQUFtQjtBQUNyQjtBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBRUE7RUFDRSxZQUFZO0VBQ1osc0NBQXNDO0VBQ3RDLGVBQWU7RUFDZixnQkFBZ0I7QUFDbEI7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsV0FBVztFQUNYLGdCQUFnQjtFQUNoQixZQUFZO0VBQ1osMEJBQTBCO0FBQzVCO0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVCQUF1QjtBQUN6QjtBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLHFCQUFxQjtBQUN2QjtBQUVBO0VBQ0UsZ0NBQWdDO0FBQ2xDO0FDaFBBOzs7R0FHRyIsImZpbGUiOiJjb250YWN0by5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9RGFuY2luZytTY3JpcHQmZGlzcGxheT1zd2FwJyk7XHJcbkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUJlcmtzaGlyZStTd2FzaCZmYW1pbHk9RGFuY2luZytTY3JpcHQmZGlzcGxheT1zd2FwJyk7XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNzgwcHgpICB7XHJcblxyXG4gIC5pY29ub0NvbnRhY3RvIHtcclxuICAgIGZvbnQtc2l6ZTogeC1sYXJnZTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGxlZnQ6IDEwJTtcclxuICB9XHJcblxyXG4gIC5jb250YWN0b0xpc3RhIHtcclxuICAgIHdpZHRoOiAzMDBweDtcclxuICAgIGhlaWdodDogMzAwcHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xyXG4gIH1cclxuXHJcbiAgLm1lbnUge1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gIH1cclxuXHJcbiAgbmF2IHtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHRvcDogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHotaW5kZXg6IDI7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICB3aWR0aDogNDBweDtcclxuICB9XHJcblxyXG59XHJcblxyXG5AbWVkaWEgKG1pbi13aWR0aDogNzgwcHgpIHtcclxuXHJcbiAgLmljb25vQ29udGFjdG8ge1xyXG4gICAgZm9udC1zaXplOiB4LWxhcmdlO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgbGVmdDogLTEwcHg7XHJcbiAgICB0b3A6IC04cHg7XHJcbiAgfVxyXG5cclxuICAuY29udGFjdG9MaXN0YSB7XHJcbiAgICB3aWR0aDoxMDAlO1xyXG4gICAgLyogaGVpZ2h0OiAzMDBweDsgKi9cclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XHJcbiAgfVxyXG5cclxuICBuYXYge1xyXG4gICAgYmFja2dyb3VuZDogYmxhY2s7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwYWRkaW5nLXRvcDogMTBweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xyXG4gICAgei1pbmRleDogMjtcclxuICAgIGJveC1zaGFkb3c6IDBweCAxNXB4IDIwcHggcmdiKDM2LCAxNzAsIDQzKTtcclxuICB9XHJcbn1cclxuXHJcbi5jZW50cmFkbyB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbi50aXR1bG8ge1xyXG4gIGNvbG9yOnJnYigyMjgsIDIxMCwgMTM5KTtcclxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZSByZ2IoMjI4LCAyMTAsIDEzOSk7XHJcbiAgZm9udC1mYW1pbHk6ICdBbGxhbicsIGN1cnNpdmU7XHJcbiAgZm9udC1zaXplOiA0MHB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XHJcbn1cclxuLmJvdG9uZXMtbmF2YmFyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XHJcbiAgZmxleC13cmFwOiBub3dyYXA7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5ib3Rvbi1uYXZlZ2FjaW9uIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xyXG59XHJcblxyXG4uYm90b24tbmF2ZWdhY2lvbjpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbn1cclxuXHJcbi5ib3Rvbi1uYXZlZ2FjaW9uOmFjdGl2ZSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibHVlO1xyXG59XHJcblxyXG4uY2FyZCB7XHJcbiAgbWF4LXdpZHRoOiA0MDBweDtcclxuICBib3gtc2hhZG93OiAxMHB4IDMwcHggMzBweCB3aGl0ZTtcclxuICBtYXJnaW4tdG9wOiAxMCU7XHJcbn1cclxuXHJcbi5jYXJkQ2VudHJhZGEge1xyXG4gIG1hcmdpbjogYXV0bztcclxuICB3aWR0aDogNTAlO1xyXG4gIC8qIG1heC13aWR0aDogNDAwcHg7ICovXHJcbiAgbWluLXdpZHRoOiAyNTBweDtcclxuICAvKiBib3gtc2hhZG93OiAxMHB4IDMwcHggMzBweCByZ2IoMTc5LCA2NiwgNjYpOyAqL1xyXG4gIG1hcmdpbi10b3A6IDEwJTtcclxuICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDEwMSwgNDksIDE2OCwgMC43ODEpOyAqL1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG59XHJcblxyXG5zZWN0aW9uIHtcclxuICBwYWRkaW5nOiA2JSAxMCUgNCUgMTAlO1xyXG59XHJcblxyXG50YWJsZSB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcblxyXG4uYm90b25lcy1zbGlkZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuICBhbGlnbi1pdGVtczogYmFzZWxpbmU7XHJcbiAgcGFkZGluZy1sZWZ0OiAxMCU7XHJcbiAgcGFkZGluZy1yaWdodDogMTAlO1xyXG4gIHBhZGRpbmctYm90dG9tOiA1JTtcclxufVxyXG5cclxuLnBhZ2luYXRvciB7XHJcbiAgY29sb3I6IGRhcmtvcmFuZ2U7XHJcbn1cclxuXHJcbi5jaGFydHJldXNlIHtcclxuICBjb2xvcjpjaGFydHJldXNlO1xyXG59XHJcblxyXG4uYm90b25TbGlkZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG5cclxuLmJhcnJhIHtcclxuICB3aWR0aDogMjAlO1xyXG59XHJcblxyXG4ubG9nbyB7XHJcbiAgd2lkdGg6IDQwJTtcclxuICBwYWRkaW5nLWxlZnQ6IDMwcHg7XHJcbn1cclxuXHJcbi5lbmNhYmV6YWRvIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrdmlvbGV0O1xyXG59XHJcblxyXG4uY2FyZEZvcm1hY2lvbiB7XHJcbiAgd2lkdGg6IGF1dG87XHJcbiAgYm94LXNoYWRvdzogMTBweCAzMHB4IDMwcHggcmdiKDE2NywgNjYsIDY2KTtcclxuICBtYXJnaW4tdG9wOiA1JTtcclxufVxyXG5cclxuLmhlYWRlci1jYXJkIHtcclxuICBtYXJnaW4tbGVmdDogMTAlO1xyXG59XHJcblxyXG5hcnRpY2xlIHtcclxuICBiYWNrZ3JvdW5kOiByZ2IoMjU1LDI1NSwyNTUpO1xyXG4gIGJhY2tncm91bmQ6IHJhZGlhbC1ncmFkaWVudChjaXJjbGUsIHJnYmEoMjU1LDI1NSwyNTUsMSkgMTQlLCByZ2JhKDIyNCwyMjQsMjI0LDEpIDI5JSwgcmdiYSg1NCw1NCw1NCwxKSA4NiUpO1xyXG4gIHdpZHRoOiAzMDBweDtcclxuICBoZWlnaHQ6IDMwMHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxufVxyXG5cclxuLmVtcHJlc2Ege1xyXG4gIGNvbG9yOiByZWQ7XHJcbn1cclxuXHJcbi5wdWVzdG8ge1xyXG4gIGNvbG9yOiBncmVlbnllbGxvdztcclxufVxyXG5cclxuLnRleHRvIHtcclxuICBwYWRkaW5nLXRvcDogMjUlO1xyXG4gIHBhZGRpbmctbGVmdDogMjUlO1xyXG4gIHdpZHRoOiAyMDBweDtcclxuICBoZWlnaHQ6IDIwMHB4O1xyXG59XHJcblxyXG4ubWl0YWQge1xyXG4gIHdpZHRoOiA1MCU7XHJcbiAgaGVpZ2h0OiA1MCU7XHJcbiAgcGFkZGluZy1yaWdodDogMjBweDtcclxufVxyXG5cclxuLmRvc0NvbHVtbmFzIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3ctcmV2ZXJzZTtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4uY29sdW1uYXNSZXNwb25zaXZhcyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5jb2x1bW5hRG9zIHtcclxuICBtYXJnaW4tbGVmdDogMjAlO1xyXG59XHJcblxyXG4uYmllbnZlbmlkbyB7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGZvbnQtZmFtaWx5OiAnRGFuY2luZyBTY3JpcHQnLCBjdXJzaXZlO1xyXG4gIGZvbnQtc2l6ZTogMzBweDtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG59XHJcblxyXG5ib2R5IHtcclxuICBwYWRkaW5nLXRvcDogMHB4O1xyXG4gIHBhZGRpbmctbGVmdDogMHB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1pbi1oZWlnaHQ6IDEwMCU7XHJcbiAgaGVpZ2h0OiBhdXRvO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGRhcmtibHVlO1xyXG59XHJcblxyXG4uY29udGFjdG9JdGVtIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7ICBcclxufVxyXG5cclxuYSB7XHJcbiAgY29sb3I6IGFsaWNlYmx1ZTtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbn1cclxuXHJcbi5lbmxhY2Uge1xyXG4gIGNvbG9yOiByZ2JhKDQ0LCAxOTksIDEzNCwgMC43ODEpO1xyXG59IiwiQGltcG9ydCBcIi4uLy4uL2FwcC5jb21wb25lbnQuY3NzXCI7XHJcblxyXG4vKiBib2R5IHtcclxuICAgIGJhY2tncm91bmQ6IHJnYigyNywyMCwxNDIpO1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDI3MGRlZywgcmdiYSg0OSwxNzUsMTE0LDEpIDEwJSwgcmdiYSgyNywyMCwxNDIsMSkgNTAlLCAgcmdiYSgyNTUsNDEsMCwxKSAxMDAlKTtcclxufSAqLyJdfQ== */"] });


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _services_mobileDetector_mobile_detector_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/mobileDetector/mobile-detector.service */ "HhPq");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/menu */ "STbY");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");







function NavbarComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Home");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Formaci\u00F3n");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Experiencia");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Contacto");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function NavbarComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "more_vert");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-menu", 9, 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Home");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Formacion");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Experiencia");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Contacto");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matMenuTriggerFor", _r2);
} }
class NavbarComponent {
    constructor(router, activatedRoute, _location, mobileDetector) {
        this.router = router;
        this.activatedRoute = activatedRoute;
        this._location = _location;
        this.mobileDetector = mobileDetector;
        this.home = false;
        this.formacion = false;
        this.experiencia = false;
        this.contacto = false;
        this.url = "";
        this.isMobile = false;
        this.url = this.router.routerState.snapshot.url;
        console.log("url", this.url);
        //tambien puedo definir la posicion actual usando esta variable
    }
    ngOnInit() {
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
}
NavbarComponent.ɵfac = function NavbarComponent_Factory(t) { return new (t || NavbarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_mobileDetector_mobile_detector_service__WEBPACK_IMPORTED_MODULE_3__["MobileDetectorService"])); };
NavbarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NavbarComponent, selectors: [["app-navbar"]], inputs: { actual: "actual" }, decls: 3, vars: 2, consts: [["class", "navbar", 4, "ngIf"], ["class", "menu", 4, "ngIf"], [1, "navbar"], [1, "botones-navbar"], ["mat-button", "", "color", "primary", 1, "boton-navegacion"], ["href", "#home"], ["href", "#formacion"], ["href", "#experiencia"], ["href", "#contacto"], [1, "menu"], ["mat-icon-button", "", 3, "matMenuTriggerFor"], ["menu", "matMenu"], ["mat-menu-item", "", "color", "primary", 1, "boton-navegacion"]], template: function NavbarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NavbarComponent_div_1_Template, 14, 0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, NavbarComponent_div_2_Template, 18, 1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isMobile);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isMobile);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButton"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_5__["MatMenuTrigger"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIcon"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_5__["MatMenu"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_5__["MatMenuItem"]], styles: ["@import url('https://fonts.googleapis.com/css2?family=Dancing+Script&display=swap');\r\n@import url('https://fonts.googleapis.com/css2?family=Berkshire+Swash&family=Dancing+Script&display=swap');\r\n@media (max-width: 780px)  {\r\n\r\n  .iconoContacto[_ngcontent-%COMP%] {\r\n    font-size: x-large;\r\n    position: absolute;\r\n    left: 10%;\r\n  }\r\n\r\n  .contactoLista[_ngcontent-%COMP%] {\r\n    width: 300px;\r\n    height: 300px;\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: space-evenly;\r\n  }\r\n\r\n  .menu[_ngcontent-%COMP%] {\r\n    color: white;\r\n  }\r\n\r\n  nav[_ngcontent-%COMP%] {\r\n    position: fixed;\r\n    top: 0;\r\n    left: 0;\r\n    width: 100%;\r\n    z-index: 2;\r\n    margin: 0;\r\n    width: 40px;\r\n  }\r\n\r\n}\r\n@media (min-width: 780px) {\r\n\r\n  .iconoContacto[_ngcontent-%COMP%] {\r\n    font-size: x-large;\r\n    position: relative;\r\n    left: -10px;\r\n    top: -8px;\r\n  }\r\n\r\n  .contactoLista[_ngcontent-%COMP%] {\r\n    width:100%;\r\n    \r\n    display: flex;\r\n    flex-direction: row;\r\n    justify-content: space-evenly;\r\n  }\r\n\r\n  nav[_ngcontent-%COMP%] {\r\n    background: black;\r\n    position: fixed;\r\n    top: 0;\r\n    left: 0;\r\n    width: 100%;\r\n    padding-top: 10px;\r\n    padding-bottom: 10px;\r\n    z-index: 2;\r\n    box-shadow: 0px 15px 20px rgb(36, 170, 43);\r\n  }\r\n}\r\n.centrado[_ngcontent-%COMP%] {\r\n  text-align: center;\r\n}\r\n.titulo[_ngcontent-%COMP%] {\r\n  color:rgb(228, 210, 139);\r\n  -webkit-text-decoration: underline rgb(228, 210, 139);\r\n          text-decoration: underline rgb(228, 210, 139);\r\n  font-family: 'Allan', cursive;\r\n  font-size: 40px;\r\n  margin-bottom: 30px;\r\n}\r\n.botones-navbar[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: space-evenly;\r\n  flex-wrap: nowrap;\r\n  width: 100%;\r\n}\r\n.boton-navegacion[_ngcontent-%COMP%] {\r\n    margin-left: 20px;\r\n}\r\n.boton-navegacion[_ngcontent-%COMP%]:hover {\r\n    background-color: red;\r\n    color: black;\r\n}\r\n.boton-navegacion[_ngcontent-%COMP%]:active {\r\n    background-color: blue;\r\n}\r\n.card[_ngcontent-%COMP%] {\r\n  max-width: 400px;\r\n  box-shadow: 10px 30px 30px white;\r\n  margin-top: 10%;\r\n}\r\n.cardCentrada[_ngcontent-%COMP%] {\r\n  margin: auto;\r\n  width: 50%;\r\n  \r\n  min-width: 250px;\r\n  \r\n  margin-top: 10%;\r\n  \r\n  background-color: transparent;\r\n}\r\nsection[_ngcontent-%COMP%] {\r\n  padding: 6% 10% 4% 10%;\r\n}\r\ntable[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n}\r\n.botones-slider[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: space-around;\r\n  align-items: baseline;\r\n  padding-left: 10%;\r\n  padding-right: 10%;\r\n  padding-bottom: 5%;\r\n}\r\n.paginator[_ngcontent-%COMP%] {\r\n  color: darkorange;\r\n}\r\n.chartreuse[_ngcontent-%COMP%] {\r\n  color:chartreuse;\r\n}\r\n.botonSlider[_ngcontent-%COMP%] {\r\n  background-color: white;\r\n}\r\n.barra[_ngcontent-%COMP%] {\r\n  width: 20%;\r\n}\r\n.logo[_ngcontent-%COMP%] {\r\n  width: 40%;\r\n  padding-left: 30px;\r\n}\r\n.encabezado[_ngcontent-%COMP%] {\r\n  background-color: darkviolet;\r\n}\r\n.cardFormacion[_ngcontent-%COMP%] {\r\n  width: auto;\r\n  box-shadow: 10px 30px 30px rgb(167, 66, 66);\r\n  margin-top: 5%;\r\n}\r\n.header-card[_ngcontent-%COMP%] {\r\n  margin-left: 10%;\r\n}\r\narticle[_ngcontent-%COMP%] {\r\n  background: rgb(255,255,255);\r\n  background: radial-gradient(circle, rgba(255,255,255,1) 14%, rgba(224,224,224,1) 29%, rgba(54,54,54,1) 86%);\r\n  width: 300px;\r\n  height: 300px;\r\n  border-radius: 50%;\r\n}\r\n.empresa[_ngcontent-%COMP%] {\r\n  color: red;\r\n}\r\n.puesto[_ngcontent-%COMP%] {\r\n  color: greenyellow;\r\n}\r\n.texto[_ngcontent-%COMP%] {\r\n  padding-top: 25%;\r\n  padding-left: 25%;\r\n  width: 200px;\r\n  height: 200px;\r\n}\r\n.mitad[_ngcontent-%COMP%] {\r\n  width: 50%;\r\n  height: 50%;\r\n  padding-right: 20px;\r\n}\r\n.dosColumnas[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  flex-direction: row-reverse;\r\n  align-items: center;\r\n}\r\n.columnasResponsivas[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  flex-direction: row;\r\n  align-items: center;\r\n}\r\n.columnaDos[_ngcontent-%COMP%] {\r\n  margin-left: 20%;\r\n}\r\n.bienvenido[_ngcontent-%COMP%] {\r\n  color: white;\r\n  font-family: 'Dancing Script', cursive;\r\n  font-size: 30px;\r\n  font-weight: 500;\r\n}\r\nbody[_ngcontent-%COMP%] {\r\n  padding-top: 0px;\r\n  padding-left: 0px;\r\n  width: 100%;\r\n  min-height: 100%;\r\n  height: auto;\r\n  background-color: darkblue;\r\n}\r\n.contactoItem[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: center;  \r\n}\r\na[_ngcontent-%COMP%] {\r\n  color: aliceblue;\r\n  text-decoration: none;\r\n}\r\n.enlace[_ngcontent-%COMP%] {\r\n  color: rgba(44, 199, 134, 0.781);\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2FwcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLG1GQUFtRjtBQUNuRiwwR0FBMEc7QUFFMUc7O0VBRUU7SUFDRSxrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLFNBQVM7RUFDWDs7RUFFQTtJQUNFLFlBQVk7SUFDWixhQUFhO0lBQ2IsYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qiw2QkFBNkI7RUFDL0I7O0VBRUE7SUFDRSxZQUFZO0VBQ2Q7O0VBRUE7SUFDRSxlQUFlO0lBQ2YsTUFBTTtJQUNOLE9BQU87SUFDUCxXQUFXO0lBQ1gsVUFBVTtJQUNWLFNBQVM7SUFDVCxXQUFXO0VBQ2I7O0FBRUY7QUFFQTs7RUFFRTtJQUNFLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsV0FBVztJQUNYLFNBQVM7RUFDWDs7RUFFQTtJQUNFLFVBQVU7SUFDVixtQkFBbUI7SUFDbkIsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQiw2QkFBNkI7RUFDL0I7O0VBRUE7SUFDRSxpQkFBaUI7SUFDakIsZUFBZTtJQUNmLE1BQU07SUFDTixPQUFPO0lBQ1AsV0FBVztJQUNYLGlCQUFpQjtJQUNqQixvQkFBb0I7SUFDcEIsVUFBVTtJQUNWLDBDQUEwQztFQUM1QztBQUNGO0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLHdCQUF3QjtFQUN4QixxREFBNkM7VUFBN0MsNkNBQTZDO0VBQzdDLDZCQUE2QjtFQUM3QixlQUFlO0VBQ2YsbUJBQW1CO0FBQ3JCO0FBQ0E7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLDZCQUE2QjtFQUM3QixpQkFBaUI7RUFDakIsV0FBVztBQUNiO0FBRUE7SUFDSSxpQkFBaUI7QUFDckI7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQixZQUFZO0FBQ2hCO0FBRUE7SUFDSSxzQkFBc0I7QUFDMUI7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixnQ0FBZ0M7RUFDaEMsZUFBZTtBQUNqQjtBQUVBO0VBQ0UsWUFBWTtFQUNaLFVBQVU7RUFDVixzQkFBc0I7RUFDdEIsZ0JBQWdCO0VBQ2hCLGlEQUFpRDtFQUNqRCxlQUFlO0VBQ2YsaURBQWlEO0VBQ2pELDZCQUE2QjtBQUMvQjtBQUVBO0VBQ0Usc0JBQXNCO0FBQ3hCO0FBRUE7RUFDRSxXQUFXO0FBQ2I7QUFHQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsNkJBQTZCO0VBQzdCLHFCQUFxQjtFQUNyQixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLGtCQUFrQjtBQUNwQjtBQUVBO0VBQ0UsaUJBQWlCO0FBQ25CO0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7QUFFQTtFQUNFLHVCQUF1QjtBQUN6QjtBQUdBO0VBQ0UsVUFBVTtBQUNaO0FBRUE7RUFDRSxVQUFVO0VBQ1Ysa0JBQWtCO0FBQ3BCO0FBRUE7RUFDRSw0QkFBNEI7QUFDOUI7QUFFQTtFQUNFLFdBQVc7RUFDWCwyQ0FBMkM7RUFDM0MsY0FBYztBQUNoQjtBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBRUE7RUFDRSw0QkFBNEI7RUFDNUIsMkdBQTJHO0VBQzNHLFlBQVk7RUFDWixhQUFhO0VBQ2Isa0JBQWtCO0FBQ3BCO0FBRUE7RUFDRSxVQUFVO0FBQ1o7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjtBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixZQUFZO0VBQ1osYUFBYTtBQUNmO0FBRUE7RUFDRSxVQUFVO0VBQ1YsV0FBVztFQUNYLG1CQUFtQjtBQUNyQjtBQUVBO0VBQ0UsYUFBYTtFQUNiLDJCQUEyQjtFQUMzQixtQkFBbUI7QUFDckI7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsbUJBQW1CO0FBQ3JCO0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7QUFFQTtFQUNFLFlBQVk7RUFDWixzQ0FBc0M7RUFDdEMsZUFBZTtFQUNmLGdCQUFnQjtBQUNsQjtBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixXQUFXO0VBQ1gsZ0JBQWdCO0VBQ2hCLFlBQVk7RUFDWiwwQkFBMEI7QUFDNUI7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCO0FBQ3pCO0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIscUJBQXFCO0FBQ3ZCO0FBRUE7RUFDRSxnQ0FBZ0M7QUFDbEMiLCJmaWxlIjoibmF2YmFyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1EYW5jaW5nK1NjcmlwdCZkaXNwbGF5PXN3YXAnKTtcclxuQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9QmVya3NoaXJlK1N3YXNoJmZhbWlseT1EYW5jaW5nK1NjcmlwdCZkaXNwbGF5PXN3YXAnKTtcclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA3ODBweCkgIHtcclxuXHJcbiAgLmljb25vQ29udGFjdG8ge1xyXG4gICAgZm9udC1zaXplOiB4LWxhcmdlO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbGVmdDogMTAlO1xyXG4gIH1cclxuXHJcbiAgLmNvbnRhY3RvTGlzdGEge1xyXG4gICAgd2lkdGg6IDMwMHB4O1xyXG4gICAgaGVpZ2h0OiAzMDBweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XHJcbiAgfVxyXG5cclxuICAubWVudSB7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgfVxyXG5cclxuICBuYXYge1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgei1pbmRleDogMjtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIHdpZHRoOiA0MHB4O1xyXG4gIH1cclxuXHJcbn1cclxuXHJcbkBtZWRpYSAobWluLXdpZHRoOiA3ODBweCkge1xyXG5cclxuICAuaWNvbm9Db250YWN0byB7XHJcbiAgICBmb250LXNpemU6IHgtbGFyZ2U7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBsZWZ0OiAtMTBweDtcclxuICAgIHRvcDogLThweDtcclxuICB9XHJcblxyXG4gIC5jb250YWN0b0xpc3RhIHtcclxuICAgIHdpZHRoOjEwMCU7XHJcbiAgICAvKiBoZWlnaHQ6IDMwMHB4OyAqL1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcclxuICB9XHJcblxyXG4gIG5hdiB7XHJcbiAgICBiYWNrZ3JvdW5kOiBibGFjaztcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHRvcDogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBhZGRpbmctdG9wOiAxMHB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDEwcHg7XHJcbiAgICB6LWluZGV4OiAyO1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDE1cHggMjBweCByZ2IoMzYsIDE3MCwgNDMpO1xyXG4gIH1cclxufVxyXG5cclxuLmNlbnRyYWRvIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuLnRpdHVsbyB7XHJcbiAgY29sb3I6cmdiKDIyOCwgMjEwLCAxMzkpO1xyXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lIHJnYigyMjgsIDIxMCwgMTM5KTtcclxuICBmb250LWZhbWlseTogJ0FsbGFuJywgY3Vyc2l2ZTtcclxuICBmb250LXNpemU6IDQwcHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcclxufVxyXG4uYm90b25lcy1uYXZiYXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcclxuICBmbGV4LXdyYXA6IG5vd3JhcDtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLmJvdG9uLW5hdmVnYWNpb24ge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDIwcHg7XHJcbn1cclxuXHJcbi5ib3Rvbi1uYXZlZ2FjaW9uOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcclxuICAgIGNvbG9yOiBibGFjaztcclxufVxyXG5cclxuLmJvdG9uLW5hdmVnYWNpb246YWN0aXZlIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsdWU7XHJcbn1cclxuXHJcbi5jYXJkIHtcclxuICBtYXgtd2lkdGg6IDQwMHB4O1xyXG4gIGJveC1zaGFkb3c6IDEwcHggMzBweCAzMHB4IHdoaXRlO1xyXG4gIG1hcmdpbi10b3A6IDEwJTtcclxufVxyXG5cclxuLmNhcmRDZW50cmFkYSB7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG4gIHdpZHRoOiA1MCU7XHJcbiAgLyogbWF4LXdpZHRoOiA0MDBweDsgKi9cclxuICBtaW4td2lkdGg6IDI1MHB4O1xyXG4gIC8qIGJveC1zaGFkb3c6IDEwcHggMzBweCAzMHB4IHJnYigxNzksIDY2LCA2Nik7ICovXHJcbiAgbWFyZ2luLXRvcDogMTAlO1xyXG4gIC8qIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTAxLCA0OSwgMTY4LCAwLjc4MSk7ICovXHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbn1cclxuXHJcbnNlY3Rpb24ge1xyXG4gIHBhZGRpbmc6IDYlIDEwJSA0JSAxMCU7XHJcbn1cclxuXHJcbnRhYmxlIHtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuXHJcbi5ib3RvbmVzLXNsaWRlciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG4gIGFsaWduLWl0ZW1zOiBiYXNlbGluZTtcclxuICBwYWRkaW5nLWxlZnQ6IDEwJTtcclxuICBwYWRkaW5nLXJpZ2h0OiAxMCU7XHJcbiAgcGFkZGluZy1ib3R0b206IDUlO1xyXG59XHJcblxyXG4ucGFnaW5hdG9yIHtcclxuICBjb2xvcjogZGFya29yYW5nZTtcclxufVxyXG5cclxuLmNoYXJ0cmV1c2Uge1xyXG4gIGNvbG9yOmNoYXJ0cmV1c2U7XHJcbn1cclxuXHJcbi5ib3RvblNsaWRlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcblxyXG4uYmFycmEge1xyXG4gIHdpZHRoOiAyMCU7XHJcbn1cclxuXHJcbi5sb2dvIHtcclxuICB3aWR0aDogNDAlO1xyXG4gIHBhZGRpbmctbGVmdDogMzBweDtcclxufVxyXG5cclxuLmVuY2FiZXphZG8ge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGRhcmt2aW9sZXQ7XHJcbn1cclxuXHJcbi5jYXJkRm9ybWFjaW9uIHtcclxuICB3aWR0aDogYXV0bztcclxuICBib3gtc2hhZG93OiAxMHB4IDMwcHggMzBweCByZ2IoMTY3LCA2NiwgNjYpO1xyXG4gIG1hcmdpbi10b3A6IDUlO1xyXG59XHJcblxyXG4uaGVhZGVyLWNhcmQge1xyXG4gIG1hcmdpbi1sZWZ0OiAxMCU7XHJcbn1cclxuXHJcbmFydGljbGUge1xyXG4gIGJhY2tncm91bmQ6IHJnYigyNTUsMjU1LDI1NSk7XHJcbiAgYmFja2dyb3VuZDogcmFkaWFsLWdyYWRpZW50KGNpcmNsZSwgcmdiYSgyNTUsMjU1LDI1NSwxKSAxNCUsIHJnYmEoMjI0LDIyNCwyMjQsMSkgMjklLCByZ2JhKDU0LDU0LDU0LDEpIDg2JSk7XHJcbiAgd2lkdGg6IDMwMHB4O1xyXG4gIGhlaWdodDogMzAwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG59XHJcblxyXG4uZW1wcmVzYSB7XHJcbiAgY29sb3I6IHJlZDtcclxufVxyXG5cclxuLnB1ZXN0byB7XHJcbiAgY29sb3I6IGdyZWVueWVsbG93O1xyXG59XHJcblxyXG4udGV4dG8ge1xyXG4gIHBhZGRpbmctdG9wOiAyNSU7XHJcbiAgcGFkZGluZy1sZWZ0OiAyNSU7XHJcbiAgd2lkdGg6IDIwMHB4O1xyXG4gIGhlaWdodDogMjAwcHg7XHJcbn1cclxuXHJcbi5taXRhZCB7XHJcbiAgd2lkdGg6IDUwJTtcclxuICBoZWlnaHQ6IDUwJTtcclxuICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xyXG59XHJcblxyXG4uZG9zQ29sdW1uYXMge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdy1yZXZlcnNlO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5jb2x1bW5hc1Jlc3BvbnNpdmFzIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLmNvbHVtbmFEb3Mge1xyXG4gIG1hcmdpbi1sZWZ0OiAyMCU7XHJcbn1cclxuXHJcbi5iaWVudmVuaWRvIHtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgZm9udC1mYW1pbHk6ICdEYW5jaW5nIFNjcmlwdCcsIGN1cnNpdmU7XHJcbiAgZm9udC1zaXplOiAzMHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbn1cclxuXHJcbmJvZHkge1xyXG4gIHBhZGRpbmctdG9wOiAwcHg7XHJcbiAgcGFkZGluZy1sZWZ0OiAwcHg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWluLWhlaWdodDogMTAwJTtcclxuICBoZWlnaHQ6IGF1dG87XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogZGFya2JsdWU7XHJcbn1cclxuXHJcbi5jb250YWN0b0l0ZW0ge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsgIFxyXG59XHJcblxyXG5hIHtcclxuICBjb2xvcjogYWxpY2VibHVlO1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxufVxyXG5cclxuLmVubGFjZSB7XHJcbiAgY29sb3I6IHJnYmEoNDQsIDE5OSwgMTM0LCAwLjc4MSk7XHJcbn0iXX0= */"] });


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ "fXoL");










class MaterialModule {
}
MaterialModule.ɵfac = function MaterialModule_Factory(t) { return new (t || MaterialModule)(); };
MaterialModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineNgModule"]({ type: MaterialModule });
MaterialModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"]
        ], _angular_material_icon__WEBPACK_IMPORTED_MODULE_1__["MatIconModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
        _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_3__["MatSlideToggleModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardModule"],
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_5__["MatMenuModule"],
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_6__["MatTabsModule"],
        _angular_material_table__WEBPACK_IMPORTED_MODULE_7__["MatTableModule"],
        _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_8__["MatProgressBarModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsetNgModuleScope"](MaterialModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"]], exports: [_angular_material_icon__WEBPACK_IMPORTED_MODULE_1__["MatIconModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
        _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_3__["MatSlideToggleModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardModule"],
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_5__["MatMenuModule"],
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_6__["MatTabsModule"],
        _angular_material_table__WEBPACK_IMPORTED_MODULE_7__["MatTableModule"],
        _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_8__["MatProgressBarModule"]] }); })();


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