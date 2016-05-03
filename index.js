var PostJson =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var guid = function guid() {
	  var s4 = function s4() {
	    return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
	  };
	  return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
	};

	exports.default = function (url, data, funct, err_funct) {
	  var xmlhttp = new XMLHttpRequest();

	  xmlhttp.onreadystatechange = function () {
	    if (xmlhttp.readyState == 4) {
	      if (xmlhttp.status == 200) {
	        if (funct != undefined) {
	          funct();
	        }
	      } else {
	        if (err_funct != undefined) {
	          err_funct(xmlhttp.status);
	        }
	      }
	    }
	  };

	  xmlhttp.open('POST', url, true);
	  xmlhttp.setRequestHeader("cache-control", "no-cache");
	  xmlhttp.setRequestHeader("postman-token", guid());
	  xmlhttp.send(data);
	};

/***/ }
/******/ ]);