"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "app/api/usuarios/route";
exports.ids = ["app/api/usuarios/route"];
exports.modules = {

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fusuarios%2Froute&page=%2Fapi%2Fusuarios%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fusuarios%2Froute.js&appDir=C%3A%5CUsers%5Cbombo%5CDesktop%5ChealthSync%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Cbombo%5CDesktop%5ChealthSync&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fusuarios%2Froute&page=%2Fapi%2Fusuarios%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fusuarios%2Froute.js&appDir=C%3A%5CUsers%5Cbombo%5CDesktop%5ChealthSync%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Cbombo%5CDesktop%5ChealthSync&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   headerHooks: () => (/* binding */ headerHooks),\n/* harmony export */   originalPathname: () => (/* binding */ originalPathname),\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   requestAsyncStorage: () => (/* binding */ requestAsyncStorage),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage),\n/* harmony export */   staticGenerationBailout: () => (/* binding */ staticGenerationBailout)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/future/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/future/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(rsc)/./node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var C_Users_bombo_Desktop_healthSync_app_api_usuarios_route_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/api/usuarios/route.js */ \"(rsc)/./app/api/usuarios/route.js\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/usuarios/route\",\n        pathname: \"/api/usuarios\",\n        filename: \"route\",\n        bundlePath: \"app/api/usuarios/route\"\n    },\n    resolvedPagePath: \"C:\\\\Users\\\\bombo\\\\Desktop\\\\healthSync\\\\app\\\\api\\\\usuarios\\\\route.js\",\n    nextConfigOutput,\n    userland: C_Users_bombo_Desktop_healthSync_app_api_usuarios_route_js__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { requestAsyncStorage, staticGenerationAsyncStorage, serverHooks, headerHooks, staticGenerationBailout } = routeModule;\nconst originalPathname = \"/api/usuarios/route\";\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        serverHooks,\n        staticGenerationAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIuanM/bmFtZT1hcHAlMkZhcGklMkZ1c3VhcmlvcyUyRnJvdXRlJnBhZ2U9JTJGYXBpJTJGdXN1YXJpb3MlMkZyb3V0ZSZhcHBQYXRocz0mcGFnZVBhdGg9cHJpdmF0ZS1uZXh0LWFwcC1kaXIlMkZhcGklMkZ1c3VhcmlvcyUyRnJvdXRlLmpzJmFwcERpcj1DJTNBJTVDVXNlcnMlNUNib21ibyU1Q0Rlc2t0b3AlNUNoZWFsdGhTeW5jJTVDYXBwJnBhZ2VFeHRlbnNpb25zPXRzeCZwYWdlRXh0ZW5zaW9ucz10cyZwYWdlRXh0ZW5zaW9ucz1qc3gmcGFnZUV4dGVuc2lvbnM9anMmcm9vdERpcj1DJTNBJTVDVXNlcnMlNUNib21ibyU1Q0Rlc2t0b3AlNUNoZWFsdGhTeW5jJmlzRGV2PXRydWUmdHNjb25maWdQYXRoPXRzY29uZmlnLmpzb24mYmFzZVBhdGg9JmFzc2V0UHJlZml4PSZuZXh0Q29uZmlnT3V0cHV0PSZwcmVmZXJyZWRSZWdpb249Jm1pZGRsZXdhcmVDb25maWc9ZTMwJTNEISIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFzRztBQUN2QztBQUNjO0FBQ21CO0FBQ2hHO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixnSEFBbUI7QUFDM0M7QUFDQSxjQUFjLHlFQUFTO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxZQUFZO0FBQ1osQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLFFBQVEsdUdBQXVHO0FBQy9HO0FBQ0E7QUFDQSxXQUFXLDRFQUFXO0FBQ3RCO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDNko7O0FBRTdKIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vaGVhbHRoc3luYy8/OTFjMSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBcHBSb3V0ZVJvdXRlTW9kdWxlIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvZnV0dXJlL3JvdXRlLW1vZHVsZXMvYXBwLXJvdXRlL21vZHVsZS5jb21waWxlZFwiO1xuaW1wb3J0IHsgUm91dGVLaW5kIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvZnV0dXJlL3JvdXRlLWtpbmRcIjtcbmltcG9ydCB7IHBhdGNoRmV0Y2ggYXMgX3BhdGNoRmV0Y2ggfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9saWIvcGF0Y2gtZmV0Y2hcIjtcbmltcG9ydCAqIGFzIHVzZXJsYW5kIGZyb20gXCJDOlxcXFxVc2Vyc1xcXFxib21ib1xcXFxEZXNrdG9wXFxcXGhlYWx0aFN5bmNcXFxcYXBwXFxcXGFwaVxcXFx1c3Vhcmlvc1xcXFxyb3V0ZS5qc1wiO1xuLy8gV2UgaW5qZWN0IHRoZSBuZXh0Q29uZmlnT3V0cHV0IGhlcmUgc28gdGhhdCB3ZSBjYW4gdXNlIHRoZW0gaW4gdGhlIHJvdXRlXG4vLyBtb2R1bGUuXG5jb25zdCBuZXh0Q29uZmlnT3V0cHV0ID0gXCJcIlxuY29uc3Qgcm91dGVNb2R1bGUgPSBuZXcgQXBwUm91dGVSb3V0ZU1vZHVsZSh7XG4gICAgZGVmaW5pdGlvbjoge1xuICAgICAgICBraW5kOiBSb3V0ZUtpbmQuQVBQX1JPVVRFLFxuICAgICAgICBwYWdlOiBcIi9hcGkvdXN1YXJpb3Mvcm91dGVcIixcbiAgICAgICAgcGF0aG5hbWU6IFwiL2FwaS91c3Vhcmlvc1wiLFxuICAgICAgICBmaWxlbmFtZTogXCJyb3V0ZVwiLFxuICAgICAgICBidW5kbGVQYXRoOiBcImFwcC9hcGkvdXN1YXJpb3Mvcm91dGVcIlxuICAgIH0sXG4gICAgcmVzb2x2ZWRQYWdlUGF0aDogXCJDOlxcXFxVc2Vyc1xcXFxib21ib1xcXFxEZXNrdG9wXFxcXGhlYWx0aFN5bmNcXFxcYXBwXFxcXGFwaVxcXFx1c3Vhcmlvc1xcXFxyb3V0ZS5qc1wiLFxuICAgIG5leHRDb25maWdPdXRwdXQsXG4gICAgdXNlcmxhbmRcbn0pO1xuLy8gUHVsbCBvdXQgdGhlIGV4cG9ydHMgdGhhdCB3ZSBuZWVkIHRvIGV4cG9zZSBmcm9tIHRoZSBtb2R1bGUuIFRoaXMgc2hvdWxkXG4vLyBiZSBlbGltaW5hdGVkIHdoZW4gd2UndmUgbW92ZWQgdGhlIG90aGVyIHJvdXRlcyB0byB0aGUgbmV3IGZvcm1hdC4gVGhlc2Vcbi8vIGFyZSB1c2VkIHRvIGhvb2sgaW50byB0aGUgcm91dGUuXG5jb25zdCB7IHJlcXVlc3RBc3luY1N0b3JhZ2UsIHN0YXRpY0dlbmVyYXRpb25Bc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzLCBoZWFkZXJIb29rcywgc3RhdGljR2VuZXJhdGlvbkJhaWxvdXQgfSA9IHJvdXRlTW9kdWxlO1xuY29uc3Qgb3JpZ2luYWxQYXRobmFtZSA9IFwiL2FwaS91c3Vhcmlvcy9yb3V0ZVwiO1xuZnVuY3Rpb24gcGF0Y2hGZXRjaCgpIHtcbiAgICByZXR1cm4gX3BhdGNoRmV0Y2goe1xuICAgICAgICBzZXJ2ZXJIb29rcyxcbiAgICAgICAgc3RhdGljR2VuZXJhdGlvbkFzeW5jU3RvcmFnZVxuICAgIH0pO1xufVxuZXhwb3J0IHsgcm91dGVNb2R1bGUsIHJlcXVlc3RBc3luY1N0b3JhZ2UsIHN0YXRpY0dlbmVyYXRpb25Bc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzLCBoZWFkZXJIb29rcywgc3RhdGljR2VuZXJhdGlvbkJhaWxvdXQsIG9yaWdpbmFsUGF0aG5hbWUsIHBhdGNoRmV0Y2gsICB9O1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1hcHAtcm91dGUuanMubWFwIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fusuarios%2Froute&page=%2Fapi%2Fusuarios%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fusuarios%2Froute.js&appDir=C%3A%5CUsers%5Cbombo%5CDesktop%5ChealthSync%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Cbombo%5CDesktop%5ChealthSync&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./app/api/usuarios/route.js":
/*!***********************************!*\
  !*** ./app/api/usuarios/route.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GET: () => (/* binding */ GET),\n/* harmony export */   POST: () => (/* binding */ POST)\n/* harmony export */ });\n/* harmony import */ var _libs_mongodb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/libs/mongodb */ \"(rsc)/./libs/mongodb.js\");\n/* harmony import */ var _models_usuarios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/models/usuarios */ \"(rsc)/./models/usuarios.js\");\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/server */ \"(rsc)/./node_modules/next/dist/api/server.js\");\n\n\n\n//Esto fue para comprobar que si se esta conectando a la base de datos\nasync function GET() {\n    await (0,_libs_mongodb__WEBPACK_IMPORTED_MODULE_0__.connectDB)();\n    const usuarios = await _models_usuarios__WEBPACK_IMPORTED_MODULE_1__[\"default\"].find({});\n    return next_server__WEBPACK_IMPORTED_MODULE_2__.NextResponse.json(usuarios);\n}\nasync function POST(request) {\n    await (0,_libs_mongodb__WEBPACK_IMPORTED_MODULE_0__.connectDB)();\n    const data = await request.json();\n    const userExists = await _models_usuarios__WEBPACK_IMPORTED_MODULE_1__[\"default\"].findOne({\n        correo: data.correo\n    });\n    if (!userExists) {\n        const usuarios = await _models_usuarios__WEBPACK_IMPORTED_MODULE_1__[\"default\"].create(data);\n        return next_server__WEBPACK_IMPORTED_MODULE_2__.NextResponse.json({\n            usuarios\n        });\n    } else {\n        //Si el usuario ya existe, no hace nada\n        return next_server__WEBPACK_IMPORTED_MODULE_2__.NextResponse.json({\n            message: \"Usuario ya existe\"\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvYXBpL3VzdWFyaW9zL3JvdXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQTJDO0FBQ0Q7QUFDQztBQUUzQyxzRUFBc0U7QUFDL0QsZUFBZUc7SUFDbEIsTUFBTUgsd0RBQVNBO0lBQ2YsTUFBTUksV0FBVyxNQUFNSCx3REFBUUEsQ0FBQ0ksSUFBSSxDQUFDLENBQUM7SUFDdEMsT0FBT0gscURBQVlBLENBQUNJLElBQUksQ0FBQ0Y7QUFDN0I7QUFFTyxlQUFlRyxLQUFLQyxPQUFPO0lBQzlCLE1BQU1SLHdEQUFTQTtJQUNmLE1BQU1TLE9BQU8sTUFBTUQsUUFBUUYsSUFBSTtJQUMvQixNQUFNSSxhQUFhLE1BQU1ULHdEQUFRQSxDQUFDVSxPQUFPLENBQUM7UUFBRUMsUUFBUUgsS0FBS0csTUFBTTtJQUFDO0lBQ2hFLElBQUksQ0FBQ0YsWUFBWTtRQUNiLE1BQU1OLFdBQVcsTUFBTUgsd0RBQVFBLENBQUNZLE1BQU0sQ0FBQ0o7UUFDdkMsT0FBT1AscURBQVlBLENBQUNJLElBQUksQ0FBQztZQUFFRjtRQUFTO0lBQ3hDLE9BQU07UUFDRix1Q0FBdUM7UUFDdkMsT0FBT0YscURBQVlBLENBQUNJLElBQUksQ0FBQztZQUFFUSxTQUFTO1FBQW9CO0lBQzVEO0FBQ0oiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9oZWFsdGhzeW5jLy4vYXBwL2FwaS91c3Vhcmlvcy9yb3V0ZS5qcz82M2RlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNvbm5lY3REQiB9IGZyb20gXCJAL2xpYnMvbW9uZ29kYlwiO1xyXG5pbXBvcnQgIFVzdWFyaW9zIGZyb20gXCJAL21vZGVscy91c3Vhcmlvc1wiO1xyXG5pbXBvcnQgeyBOZXh0UmVzcG9uc2UgfSBmcm9tIFwibmV4dC9zZXJ2ZXJcIjtcclxuXHJcbi8vRXN0byBmdWUgcGFyYSBjb21wcm9iYXIgcXVlIHNpIHNlIGVzdGEgY29uZWN0YW5kbyBhIGxhIGJhc2UgZGUgZGF0b3NcclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIEdFVCgpIHtcclxuICAgIGF3YWl0IGNvbm5lY3REQigpO1xyXG4gICAgY29uc3QgdXN1YXJpb3MgPSBhd2FpdCBVc3Vhcmlvcy5maW5kKHt9KTtcclxuICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbih1c3Vhcmlvcyk7XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBQT1NUKHJlcXVlc3QpIHtcclxuICAgIGF3YWl0IGNvbm5lY3REQigpO1xyXG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcXVlc3QuanNvbigpO1xyXG4gICAgY29uc3QgdXNlckV4aXN0cyA9IGF3YWl0IFVzdWFyaW9zLmZpbmRPbmUoeyBjb3JyZW86IGRhdGEuY29ycmVvIH0pO1xyXG4gICAgaWYgKCF1c2VyRXhpc3RzKSB7XHJcbiAgICAgICAgY29uc3QgdXN1YXJpb3MgPSBhd2FpdCBVc3Vhcmlvcy5jcmVhdGUoZGF0YSk7XHJcbiAgICAgICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKHsgdXN1YXJpb3MgfSk7XHJcbiAgICB9IGVsc2V7XHJcbiAgICAgICAgLy9TaSBlbCB1c3VhcmlvIHlhIGV4aXN0ZSwgbm8gaGFjZSBuYWRhXHJcbiAgICAgICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKHsgbWVzc2FnZTogXCJVc3VhcmlvIHlhIGV4aXN0ZVwiIH0pO1xyXG4gICAgfVxyXG59Il0sIm5hbWVzIjpbImNvbm5lY3REQiIsIlVzdWFyaW9zIiwiTmV4dFJlc3BvbnNlIiwiR0VUIiwidXN1YXJpb3MiLCJmaW5kIiwianNvbiIsIlBPU1QiLCJyZXF1ZXN0IiwiZGF0YSIsInVzZXJFeGlzdHMiLCJmaW5kT25lIiwiY29ycmVvIiwiY3JlYXRlIiwibWVzc2FnZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./app/api/usuarios/route.js\n");

/***/ }),

/***/ "(rsc)/./libs/mongodb.js":
/*!*************************!*\
  !*** ./libs/mongodb.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   connectDB: () => (/* binding */ connectDB)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nasync function connectDB() {\n    await mongoose__WEBPACK_IMPORTED_MODULE_0___default().connect(process.env.MONGODB_URL);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9saWJzL21vbmdvZGIuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQWdDO0FBRXpCLGVBQWVDO0lBQ2xCLE1BQU1ELHVEQUFnQixDQUFDRyxRQUFRQyxHQUFHLENBQUNDLFdBQVc7QUFDbEQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9oZWFsdGhzeW5jLy4vbGlicy9tb25nb2RiLmpzPzU5MzUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG1vbmdvb3NlIGZyb20gXCJtb25nb29zZVwiO1xyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNvbm5lY3REQigpICAgIHtcclxuICAgIGF3YWl0IG1vbmdvb3NlLmNvbm5lY3QocHJvY2Vzcy5lbnYuTU9OR09EQl9VUkwpO1xyXG59Il0sIm5hbWVzIjpbIm1vbmdvb3NlIiwiY29ubmVjdERCIiwiY29ubmVjdCIsInByb2Nlc3MiLCJlbnYiLCJNT05HT0RCX1VSTCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./libs/mongodb.js\n");

/***/ }),

/***/ "(rsc)/./models/usuarios.js":
/*!****************************!*\
  !*** ./models/usuarios.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst usuarioSchema = new (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema)({\n    nombre: {\n        type: String,\n        required: true\n    },\n    apellido: {\n        type: String,\n        required: false\n    },\n    correo: {\n        type: String,\n        required: true,\n        unique: true\n    },\n    contrasena: {\n        type: String,\n        required: false\n    }\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((mongoose__WEBPACK_IMPORTED_MODULE_0___default().models).Usuarios || mongoose__WEBPACK_IMPORTED_MODULE_0___default().model(\"Usuarios\", usuarioSchema));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9tb2RlbHMvdXN1YXJpb3MuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQWdDO0FBR2hDLE1BQU1DLGdCQUFlLElBQUlELHdEQUFlLENBQ3BDO0lBQ0lHLFFBQVE7UUFDSkMsTUFBTUM7UUFDTkMsVUFBVTtJQUNkO0lBQ0FDLFVBQVU7UUFDTkgsTUFBTUM7UUFDTkMsVUFBVTtJQUNkO0lBQ0FFLFFBQVE7UUFDSkosTUFBTUM7UUFDTkMsVUFBVTtRQUNWRyxRQUFRO0lBQ1o7SUFDQUMsWUFBWTtRQUNSTixNQUFNQztRQUNOQyxVQUFVO0lBQ2Q7QUFDSjtBQUdKLGlFQUFlTix3REFBZSxDQUFDWSxRQUFRLElBQUlaLHFEQUFjLENBQUMsWUFBWUMsY0FBY0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2hlYWx0aHN5bmMvLi9tb2RlbHMvdXN1YXJpb3MuanM/M2IxMSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbW9uZ29vc2UgZnJvbSAnbW9uZ29vc2UnO1xyXG5cclxuXHJcbmNvbnN0IHVzdWFyaW9TY2hlbWEgPW5ldyBtb25nb29zZS5TY2hlbWEoXHJcbiAgICB7XHJcbiAgICAgICAgbm9tYnJlOiB7XHJcbiAgICAgICAgICAgIHR5cGU6IFN0cmluZywgXHJcbiAgICAgICAgICAgIHJlcXVpcmVkOiB0cnVlXHJcbiAgICAgICAgfSxcclxuICAgICAgICBhcGVsbGlkbzoge1xyXG4gICAgICAgICAgICB0eXBlOiBTdHJpbmcsIFxyXG4gICAgICAgICAgICByZXF1aXJlZDogZmFsc2VcclxuICAgICAgICB9LFxyXG4gICAgICAgIGNvcnJlbzoge1xyXG4gICAgICAgICAgICB0eXBlOiBTdHJpbmcsIFxyXG4gICAgICAgICAgICByZXF1aXJlZDogdHJ1ZSxcclxuICAgICAgICAgICAgdW5pcXVlOiB0cnVlXHJcbiAgICAgICAgfSxcclxuICAgICAgICBjb250cmFzZW5hOiB7XHJcbiAgICAgICAgICAgIHR5cGU6IFN0cmluZywgXHJcbiAgICAgICAgICAgIHJlcXVpcmVkOiBmYWxzZVxyXG4gICAgICAgIH0sXHJcbiAgICB9XHJcbilcclxuXHJcbmV4cG9ydCBkZWZhdWx0IG1vbmdvb3NlLm1vZGVscy5Vc3VhcmlvcyB8fCBtb25nb29zZS5tb2RlbCgnVXN1YXJpb3MnLCB1c3VhcmlvU2NoZW1hKTtcclxuXHJcblxyXG5cclxuXHJcbiJdLCJuYW1lcyI6WyJtb25nb29zZSIsInVzdWFyaW9TY2hlbWEiLCJTY2hlbWEiLCJub21icmUiLCJ0eXBlIiwiU3RyaW5nIiwicmVxdWlyZWQiLCJhcGVsbGlkbyIsImNvcnJlbyIsInVuaXF1ZSIsImNvbnRyYXNlbmEiLCJtb2RlbHMiLCJVc3VhcmlvcyIsIm1vZGVsIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./models/usuarios.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fusuarios%2Froute&page=%2Fapi%2Fusuarios%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fusuarios%2Froute.js&appDir=C%3A%5CUsers%5Cbombo%5CDesktop%5ChealthSync%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Cbombo%5CDesktop%5ChealthSync&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();