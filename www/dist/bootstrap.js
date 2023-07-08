/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 	};
/******/
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"main": 0
/******/ 	};
/******/
/******/
/******/
/******/ 	// script path function
/******/ 	function jsonpScriptSrc(chunkId) {
/******/ 		return __webpack_require__.p + "" + chunkId + ".bootstrap.js"
/******/ 	}
/******/
/******/ 	// object to store loaded and loading wasm modules
/******/ 	var installedWasmModules = {};
/******/
/******/ 	function promiseResolve() { return Promise.resolve(); }
/******/
/******/ 	var wasmImportObjects = {
/******/ 		"../pkg/touchies_bg.wasm": function() {
/******/ 			return {
/******/ 				"./touchies_bg.js": {
/******/ 					"__wbg_alert_76cf778c3d9e76cb": function(p0i32,p1i32) {
/******/ 						return installedModules["../pkg/touchies_bg.js"].exports["__wbg_alert_76cf778c3d9e76cb"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbindgen_object_drop_ref": function(p0i32) {
/******/ 						return installedModules["../pkg/touchies_bg.js"].exports["__wbindgen_object_drop_ref"](p0i32);
/******/ 					},
/******/ 					"__wbindgen_string_new": function(p0i32,p1i32) {
/******/ 						return installedModules["../pkg/touchies_bg.js"].exports["__wbindgen_string_new"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbindgen_object_clone_ref": function(p0i32) {
/******/ 						return installedModules["../pkg/touchies_bg.js"].exports["__wbindgen_object_clone_ref"](p0i32);
/******/ 					},
/******/ 					"__wbindgen_cb_drop": function(p0i32) {
/******/ 						return installedModules["../pkg/touchies_bg.js"].exports["__wbindgen_cb_drop"](p0i32);
/******/ 					},
/******/ 					"__wbindgen_number_get": function(p0i32,p1i32) {
/******/ 						return installedModules["../pkg/touchies_bg.js"].exports["__wbindgen_number_get"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_log_c9486ca5d8e2cbe8": function(p0i32,p1i32) {
/******/ 						return installedModules["../pkg/touchies_bg.js"].exports["__wbg_log_c9486ca5d8e2cbe8"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_log_aba5996d9bde071f": function(p0i32,p1i32,p2i32,p3i32,p4i32,p5i32,p6i32,p7i32) {
/******/ 						return installedModules["../pkg/touchies_bg.js"].exports["__wbg_log_aba5996d9bde071f"](p0i32,p1i32,p2i32,p3i32,p4i32,p5i32,p6i32,p7i32);
/******/ 					},
/******/ 					"__wbg_mark_40e050a77cc39fea": function(p0i32,p1i32) {
/******/ 						return installedModules["../pkg/touchies_bg.js"].exports["__wbg_mark_40e050a77cc39fea"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_measure_aa7a73f17813f708": function(p0i32,p1i32,p2i32,p3i32) {
/******/ 						return installedModules["../pkg/touchies_bg.js"].exports["__wbg_measure_aa7a73f17813f708"](p0i32,p1i32,p2i32,p3i32);
/******/ 					},
/******/ 					"__wbg_new_abda76e883ba8a5f": function() {
/******/ 						return installedModules["../pkg/touchies_bg.js"].exports["__wbg_new_abda76e883ba8a5f"]();
/******/ 					},
/******/ 					"__wbg_stack_658279fe44541cf6": function(p0i32,p1i32) {
/******/ 						return installedModules["../pkg/touchies_bg.js"].exports["__wbg_stack_658279fe44541cf6"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_error_f851667af71bcfc6": function(p0i32,p1i32) {
/******/ 						return installedModules["../pkg/touchies_bg.js"].exports["__wbg_error_f851667af71bcfc6"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_instanceof_Window_9029196b662bc42a": function(p0i32) {
/******/ 						return installedModules["../pkg/touchies_bg.js"].exports["__wbg_instanceof_Window_9029196b662bc42a"](p0i32);
/******/ 					},
/******/ 					"__wbg_document_f7ace2b956f30a4f": function(p0i32) {
/******/ 						return installedModules["../pkg/touchies_bg.js"].exports["__wbg_document_f7ace2b956f30a4f"](p0i32);
/******/ 					},
/******/ 					"__wbg_innerWidth_ebe07ce5463ff293": function(p0i32) {
/******/ 						return installedModules["../pkg/touchies_bg.js"].exports["__wbg_innerWidth_ebe07ce5463ff293"](p0i32);
/******/ 					},
/******/ 					"__wbg_innerHeight_2dd06d8cf68f1d7d": function(p0i32) {
/******/ 						return installedModules["../pkg/touchies_bg.js"].exports["__wbg_innerHeight_2dd06d8cf68f1d7d"](p0i32);
/******/ 					},
/******/ 					"__wbg_devicePixelRatio_f9de7bddca0eaf20": function(p0i32) {
/******/ 						return installedModules["../pkg/touchies_bg.js"].exports["__wbg_devicePixelRatio_f9de7bddca0eaf20"](p0i32);
/******/ 					},
/******/ 					"__wbg_matchMedia_12ef69056e32d0b3": function(p0i32,p1i32,p2i32) {
/******/ 						return installedModules["../pkg/touchies_bg.js"].exports["__wbg_matchMedia_12ef69056e32d0b3"](p0i32,p1i32,p2i32);
/******/ 					},
/******/ 					"__wbg_get_cb7c1c2da725c920": function(p0i32,p1i32,p2i32) {
/******/ 						return installedModules["../pkg/touchies_bg.js"].exports["__wbg_get_cb7c1c2da725c920"](p0i32,p1i32,p2i32);
/******/ 					},
/******/ 					"__wbg_cancelAnimationFrame_9b68e9588c6543bc": function(p0i32,p1i32) {
/******/ 						return installedModules["../pkg/touchies_bg.js"].exports["__wbg_cancelAnimationFrame_9b68e9588c6543bc"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_requestAnimationFrame_d082200514b6674d": function(p0i32,p1i32) {
/******/ 						return installedModules["../pkg/touchies_bg.js"].exports["__wbg_requestAnimationFrame_d082200514b6674d"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_clearTimeout_220be2fa0577b342": function(p0i32,p1i32) {
/******/ 						return installedModules["../pkg/touchies_bg.js"].exports["__wbg_clearTimeout_220be2fa0577b342"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_setTimeout_eb1a0d116c26d9f6": function(p0i32,p1i32,p2i32) {
/******/ 						return installedModules["../pkg/touchies_bg.js"].exports["__wbg_setTimeout_eb1a0d116c26d9f6"](p0i32,p1i32,p2i32);
/******/ 					},
/******/ 					"__wbg_body_674aec4c1c0910cd": function(p0i32) {
/******/ 						return installedModules["../pkg/touchies_bg.js"].exports["__wbg_body_674aec4c1c0910cd"](p0i32);
/******/ 					},
/******/ 					"__wbg_fullscreenElement_07d5b77ef6c958c1": function(p0i32) {
/******/ 						return installedModules["../pkg/touchies_bg.js"].exports["__wbg_fullscreenElement_07d5b77ef6c958c1"](p0i32);
/******/ 					},
/******/ 					"__wbg_createElement_4891554b28d3388b": function(p0i32,p1i32,p2i32) {
/******/ 						return installedModules["../pkg/touchies_bg.js"].exports["__wbg_createElement_4891554b28d3388b"](p0i32,p1i32,p2i32);
/******/ 					},
/******/ 					"__wbg_exitFullscreen_5fada21e8623256e": function(p0i32) {
/******/ 						return installedModules["../pkg/touchies_bg.js"].exports["__wbg_exitFullscreen_5fada21e8623256e"](p0i32);
/******/ 					},
/******/ 					"__wbg_exitPointerLock_bf425ac90f055faa": function(p0i32) {
/******/ 						return installedModules["../pkg/touchies_bg.js"].exports["__wbg_exitPointerLock_bf425ac90f055faa"](p0i32);
/******/ 					},
/******/ 					"__wbg_querySelector_52ded52c20e23921": function(p0i32,p1i32,p2i32) {
/******/ 						return installedModules["../pkg/touchies_bg.js"].exports["__wbg_querySelector_52ded52c20e23921"](p0i32,p1i32,p2i32);
/******/ 					},
/******/ 					"__wbg_x_6c8af74c3b4d8c09": function(p0i32) {
/******/ 						return installedModules["../pkg/touchies_bg.js"].exports["__wbg_x_6c8af74c3b4d8c09"](p0i32);
/******/ 					},
/******/ 					"__wbg_y_4cca2672ce1b5fc1": function(p0i32) {
/******/ 						return installedModules["../pkg/touchies_bg.js"].exports["__wbg_y_4cca2672ce1b5fc1"](p0i32);
/******/ 					},
/******/ 					"__wbg_width_e0c6b79d8cdd8897": function(p0i32) {
/******/ 						return installedModules["../pkg/touchies_bg.js"].exports["__wbg_width_e0c6b79d8cdd8897"](p0i32);
/******/ 					},
/******/ 					"__wbg_height_bed51746e072a118": function(p0i32) {
/******/ 						return installedModules["../pkg/touchies_bg.js"].exports["__wbg_height_bed51746e072a118"](p0i32);
/******/ 					},
/******/ 					"__wbg_setProperty_b95ef63ab852879e": function(p0i32,p1i32,p2i32,p3i32,p4i32) {
/******/ 						return installedModules["../pkg/touchies_bg.js"].exports["__wbg_setProperty_b95ef63ab852879e"](p0i32,p1i32,p2i32,p3i32,p4i32);
/******/ 					},
/******/ 					"__wbg_matches_07c564b5b4101cf2": function(p0i32) {
/******/ 						return installedModules["../pkg/touchies_bg.js"].exports["__wbg_matches_07c564b5b4101cf2"](p0i32);
/******/ 					},
/******/ 					"__wbg_addListener_85fb6e4bd17e8878": function(p0i32,p1i32) {
/******/ 						return installedModules["../pkg/touchies_bg.js"].exports["__wbg_addListener_85fb6e4bd17e8878"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_removeListener_3b62020874cfc3c7": function(p0i32,p1i32) {
/******/ 						return installedModules["../pkg/touchies_bg.js"].exports["__wbg_removeListener_3b62020874cfc3c7"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_pointerId_701aab7b4fb073ff": function(p0i32) {
/******/ 						return installedModules["../pkg/touchies_bg.js"].exports["__wbg_pointerId_701aab7b4fb073ff"](p0i32);
/******/ 					},
/******/ 					"__wbg_pressure_e388b6fd623a3917": function(p0i32) {
/******/ 						return installedModules["../pkg/touchies_bg.js"].exports["__wbg_pressure_e388b6fd623a3917"](p0i32);
/******/ 					},
/******/ 					"__wbg_pointerType_0009b1e4e6b0f428": function(p0i32,p1i32) {
/******/ 						return installedModules["../pkg/touchies_bg.js"].exports["__wbg_pointerType_0009b1e4e6b0f428"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_deltaX_84508d00a1050e70": function(p0i32) {
/******/ 						return installedModules["../pkg/touchies_bg.js"].exports["__wbg_deltaX_84508d00a1050e70"](p0i32);
/******/ 					},
/******/ 					"__wbg_deltaY_64823169afb0335d": function(p0i32) {
/******/ 						return installedModules["../pkg/touchies_bg.js"].exports["__wbg_deltaY_64823169afb0335d"](p0i32);
/******/ 					},
/******/ 					"__wbg_deltaMode_1c680147cfdba8a5": function(p0i32) {
/******/ 						return installedModules["../pkg/touchies_bg.js"].exports["__wbg_deltaMode_1c680147cfdba8a5"](p0i32);
/******/ 					},
/******/ 					"__wbg_now_0cfdc90c97d0c24b": function(p0i32) {
/******/ 						return installedModules["../pkg/touchies_bg.js"].exports["__wbg_now_0cfdc90c97d0c24b"](p0i32);
/******/ 					},
/******/ 					"__wbg_matches_0f7e350783b542c2": function(p0i32) {
/******/ 						return installedModules["../pkg/touchies_bg.js"].exports["__wbg_matches_0f7e350783b542c2"](p0i32);
/******/ 					},
/******/ 					"__wbg_getBoundingClientRect_ac9db8cf97ca8083": function(p0i32) {
/******/ 						return installedModules["../pkg/touchies_bg.js"].exports["__wbg_getBoundingClientRect_ac9db8cf97ca8083"](p0i32);
/******/ 					},
/******/ 					"__wbg_requestFullscreen_3545278bcd44910c": function(p0i32) {
/******/ 						return installedModules["../pkg/touchies_bg.js"].exports["__wbg_requestFullscreen_3545278bcd44910c"](p0i32);
/******/ 					},
/******/ 					"__wbg_requestPointerLock_368c5cc6c3ddd339": function(p0i32) {
/******/ 						return installedModules["../pkg/touchies_bg.js"].exports["__wbg_requestPointerLock_368c5cc6c3ddd339"](p0i32);
/******/ 					},
/******/ 					"__wbg_setAttribute_e7e80b478b7b8b2f": function(p0i32,p1i32,p2i32,p3i32,p4i32) {
/******/ 						return installedModules["../pkg/touchies_bg.js"].exports["__wbg_setAttribute_e7e80b478b7b8b2f"](p0i32,p1i32,p2i32,p3i32,p4i32);
/******/ 					},
/******/ 					"__wbg_setPointerCapture_e7c29336490bba19": function(p0i32,p1i32) {
/******/ 						return installedModules["../pkg/touchies_bg.js"].exports["__wbg_setPointerCapture_e7c29336490bba19"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_style_3801009b2339aa94": function(p0i32) {
/******/ 						return installedModules["../pkg/touchies_bg.js"].exports["__wbg_style_3801009b2339aa94"](p0i32);
/******/ 					},
/******/ 					"__wbg_error_c9309504864e78b5": function(p0i32,p1i32) {
/******/ 						return installedModules["../pkg/touchies_bg.js"].exports["__wbg_error_c9309504864e78b5"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_clientX_1a480606ab0cabaa": function(p0i32) {
/******/ 						return installedModules["../pkg/touchies_bg.js"].exports["__wbg_clientX_1a480606ab0cabaa"](p0i32);
/******/ 					},
/******/ 					"__wbg_clientY_9c7878f7faf3900f": function(p0i32) {
/******/ 						return installedModules["../pkg/touchies_bg.js"].exports["__wbg_clientY_9c7878f7faf3900f"](p0i32);
/******/ 					},
/******/ 					"__wbg_offsetX_5a58f16f6c3a41b6": function(p0i32) {
/******/ 						return installedModules["../pkg/touchies_bg.js"].exports["__wbg_offsetX_5a58f16f6c3a41b6"](p0i32);
/******/ 					},
/******/ 					"__wbg_offsetY_c45b4956f6429a95": function(p0i32) {
/******/ 						return installedModules["../pkg/touchies_bg.js"].exports["__wbg_offsetY_c45b4956f6429a95"](p0i32);
/******/ 					},
/******/ 					"__wbg_ctrlKey_0a805df688b5bf42": function(p0i32) {
/******/ 						return installedModules["../pkg/touchies_bg.js"].exports["__wbg_ctrlKey_0a805df688b5bf42"](p0i32);
/******/ 					},
/******/ 					"__wbg_shiftKey_8a070ab6169b5fa4": function(p0i32) {
/******/ 						return installedModules["../pkg/touchies_bg.js"].exports["__wbg_shiftKey_8a070ab6169b5fa4"](p0i32);
/******/ 					},
/******/ 					"__wbg_altKey_6fc1761a6b7a406e": function(p0i32) {
/******/ 						return installedModules["../pkg/touchies_bg.js"].exports["__wbg_altKey_6fc1761a6b7a406e"](p0i32);
/******/ 					},
/******/ 					"__wbg_metaKey_d89287be4389a3c1": function(p0i32) {
/******/ 						return installedModules["../pkg/touchies_bg.js"].exports["__wbg_metaKey_d89287be4389a3c1"](p0i32);
/******/ 					},
/******/ 					"__wbg_button_7a095234b69de930": function(p0i32) {
/******/ 						return installedModules["../pkg/touchies_bg.js"].exports["__wbg_button_7a095234b69de930"](p0i32);
/******/ 					},
/******/ 					"__wbg_buttons_d0f40e1650e3fa28": function(p0i32) {
/******/ 						return installedModules["../pkg/touchies_bg.js"].exports["__wbg_buttons_d0f40e1650e3fa28"](p0i32);
/******/ 					},
/******/ 					"__wbg_movementX_966ec323c169d1a6": function(p0i32) {
/******/ 						return installedModules["../pkg/touchies_bg.js"].exports["__wbg_movementX_966ec323c169d1a6"](p0i32);
/******/ 					},
/******/ 					"__wbg_movementY_b14b3bc8e1b31f23": function(p0i32) {
/******/ 						return installedModules["../pkg/touchies_bg.js"].exports["__wbg_movementY_b14b3bc8e1b31f23"](p0i32);
/******/ 					},
/******/ 					"__wbg_addEventListener_5651108fc3ffeb6e": function(p0i32,p1i32,p2i32,p3i32) {
/******/ 						return installedModules["../pkg/touchies_bg.js"].exports["__wbg_addEventListener_5651108fc3ffeb6e"](p0i32,p1i32,p2i32,p3i32);
/******/ 					},
/******/ 					"__wbg_addEventListener_a5963e26cd7b176b": function(p0i32,p1i32,p2i32,p3i32,p4i32) {
/******/ 						return installedModules["../pkg/touchies_bg.js"].exports["__wbg_addEventListener_a5963e26cd7b176b"](p0i32,p1i32,p2i32,p3i32,p4i32);
/******/ 					},
/******/ 					"__wbg_removeEventListener_1fa0d9594cdb0b1d": function(p0i32,p1i32,p2i32,p3i32,p4i32) {
/******/ 						return installedModules["../pkg/touchies_bg.js"].exports["__wbg_removeEventListener_1fa0d9594cdb0b1d"](p0i32,p1i32,p2i32,p3i32,p4i32);
/******/ 					},
/******/ 					"__wbg_instanceof_HtmlCanvasElement_da5f9efa0688cf6d": function(p0i32) {
/******/ 						return installedModules["../pkg/touchies_bg.js"].exports["__wbg_instanceof_HtmlCanvasElement_da5f9efa0688cf6d"](p0i32);
/******/ 					},
/******/ 					"__wbg_width_2931aaedd21f1fff": function(p0i32) {
/******/ 						return installedModules["../pkg/touchies_bg.js"].exports["__wbg_width_2931aaedd21f1fff"](p0i32);
/******/ 					},
/******/ 					"__wbg_setwidth_a667a942dba6656e": function(p0i32,p1i32) {
/******/ 						return installedModules["../pkg/touchies_bg.js"].exports["__wbg_setwidth_a667a942dba6656e"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_height_0d36fbbeb60b0661": function(p0i32) {
/******/ 						return installedModules["../pkg/touchies_bg.js"].exports["__wbg_height_0d36fbbeb60b0661"](p0i32);
/******/ 					},
/******/ 					"__wbg_setheight_a747d440760fe5aa": function(p0i32,p1i32) {
/******/ 						return installedModules["../pkg/touchies_bg.js"].exports["__wbg_setheight_a747d440760fe5aa"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_charCode_75cea1a3a6d66388": function(p0i32) {
/******/ 						return installedModules["../pkg/touchies_bg.js"].exports["__wbg_charCode_75cea1a3a6d66388"](p0i32);
/******/ 					},
/******/ 					"__wbg_keyCode_dfa86be31f5ef90c": function(p0i32) {
/******/ 						return installedModules["../pkg/touchies_bg.js"].exports["__wbg_keyCode_dfa86be31f5ef90c"](p0i32);
/******/ 					},
/******/ 					"__wbg_altKey_612289acf855835c": function(p0i32) {
/******/ 						return installedModules["../pkg/touchies_bg.js"].exports["__wbg_altKey_612289acf855835c"](p0i32);
/******/ 					},
/******/ 					"__wbg_ctrlKey_582686fb2263dd3c": function(p0i32) {
/******/ 						return installedModules["../pkg/touchies_bg.js"].exports["__wbg_ctrlKey_582686fb2263dd3c"](p0i32);
/******/ 					},
/******/ 					"__wbg_shiftKey_48e8701355d8e2d4": function(p0i32) {
/******/ 						return installedModules["../pkg/touchies_bg.js"].exports["__wbg_shiftKey_48e8701355d8e2d4"](p0i32);
/******/ 					},
/******/ 					"__wbg_metaKey_43193b7cc99f8914": function(p0i32) {
/******/ 						return installedModules["../pkg/touchies_bg.js"].exports["__wbg_metaKey_43193b7cc99f8914"](p0i32);
/******/ 					},
/******/ 					"__wbg_key_8aeaa079126a9cc7": function(p0i32,p1i32) {
/******/ 						return installedModules["../pkg/touchies_bg.js"].exports["__wbg_key_8aeaa079126a9cc7"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_code_96d6322b968b2d17": function(p0i32,p1i32) {
/******/ 						return installedModules["../pkg/touchies_bg.js"].exports["__wbg_code_96d6322b968b2d17"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_getModifierState_5102ee8843516d2f": function(p0i32,p1i32,p2i32) {
/******/ 						return installedModules["../pkg/touchies_bg.js"].exports["__wbg_getModifierState_5102ee8843516d2f"](p0i32,p1i32,p2i32);
/******/ 					},
/******/ 					"__wbg_target_f171e89c61e2bccf": function(p0i32) {
/******/ 						return installedModules["../pkg/touchies_bg.js"].exports["__wbg_target_f171e89c61e2bccf"](p0i32);
/******/ 					},
/******/ 					"__wbg_cancelBubble_90d1c3aa2a76cbeb": function(p0i32) {
/******/ 						return installedModules["../pkg/touchies_bg.js"].exports["__wbg_cancelBubble_90d1c3aa2a76cbeb"](p0i32);
/******/ 					},
/******/ 					"__wbg_preventDefault_24104f3f0a54546a": function(p0i32) {
/******/ 						return installedModules["../pkg/touchies_bg.js"].exports["__wbg_preventDefault_24104f3f0a54546a"](p0i32);
/******/ 					},
/******/ 					"__wbg_stopPropagation_55539cfa2506c867": function(p0i32) {
/******/ 						return installedModules["../pkg/touchies_bg.js"].exports["__wbg_stopPropagation_55539cfa2506c867"](p0i32);
/******/ 					},
/******/ 					"__wbg_parentElement_c75962bc9997ea5f": function(p0i32) {
/******/ 						return installedModules["../pkg/touchies_bg.js"].exports["__wbg_parentElement_c75962bc9997ea5f"](p0i32);
/******/ 					},
/******/ 					"__wbg_appendChild_51339d4cde00ee22": function(p0i32,p1i32) {
/******/ 						return installedModules["../pkg/touchies_bg.js"].exports["__wbg_appendChild_51339d4cde00ee22"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_newnoargs_581967eacc0e2604": function(p0i32,p1i32) {
/******/ 						return installedModules["../pkg/touchies_bg.js"].exports["__wbg_newnoargs_581967eacc0e2604"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_get_97b561fb56f034b5": function(p0i32,p1i32) {
/******/ 						return installedModules["../pkg/touchies_bg.js"].exports["__wbg_get_97b561fb56f034b5"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_call_cb65541d95d71282": function(p0i32,p1i32) {
/******/ 						return installedModules["../pkg/touchies_bg.js"].exports["__wbg_call_cb65541d95d71282"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_new_b51585de1b234aff": function() {
/******/ 						return installedModules["../pkg/touchies_bg.js"].exports["__wbg_new_b51585de1b234aff"]();
/******/ 					},
/******/ 					"__wbg_self_1ff1d729e9aae938": function() {
/******/ 						return installedModules["../pkg/touchies_bg.js"].exports["__wbg_self_1ff1d729e9aae938"]();
/******/ 					},
/******/ 					"__wbg_window_5f4faef6c12b79ec": function() {
/******/ 						return installedModules["../pkg/touchies_bg.js"].exports["__wbg_window_5f4faef6c12b79ec"]();
/******/ 					},
/******/ 					"__wbg_globalThis_1d39714405582d3c": function() {
/******/ 						return installedModules["../pkg/touchies_bg.js"].exports["__wbg_globalThis_1d39714405582d3c"]();
/******/ 					},
/******/ 					"__wbg_global_651f05c6a0944d1c": function() {
/******/ 						return installedModules["../pkg/touchies_bg.js"].exports["__wbg_global_651f05c6a0944d1c"]();
/******/ 					},
/******/ 					"__wbindgen_is_undefined": function(p0i32) {
/******/ 						return installedModules["../pkg/touchies_bg.js"].exports["__wbindgen_is_undefined"](p0i32);
/******/ 					},
/******/ 					"__wbg_is_205d914af04a8faa": function(p0i32,p1i32) {
/******/ 						return installedModules["../pkg/touchies_bg.js"].exports["__wbg_is_205d914af04a8faa"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_set_092e06b0f9d71865": function(p0i32,p1i32,p2i32) {
/******/ 						return installedModules["../pkg/touchies_bg.js"].exports["__wbg_set_092e06b0f9d71865"](p0i32,p1i32,p2i32);
/******/ 					},
/******/ 					"__wbindgen_debug_string": function(p0i32,p1i32) {
/******/ 						return installedModules["../pkg/touchies_bg.js"].exports["__wbindgen_debug_string"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbindgen_throw": function(p0i32,p1i32) {
/******/ 						return installedModules["../pkg/touchies_bg.js"].exports["__wbindgen_throw"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbindgen_closure_wrapper729": function(p0i32,p1i32,p2i32) {
/******/ 						return installedModules["../pkg/touchies_bg.js"].exports["__wbindgen_closure_wrapper729"](p0i32,p1i32,p2i32);
/******/ 					},
/******/ 					"__wbindgen_closure_wrapper731": function(p0i32,p1i32,p2i32) {
/******/ 						return installedModules["../pkg/touchies_bg.js"].exports["__wbindgen_closure_wrapper731"](p0i32,p1i32,p2i32);
/******/ 					},
/******/ 					"__wbindgen_closure_wrapper733": function(p0i32,p1i32,p2i32) {
/******/ 						return installedModules["../pkg/touchies_bg.js"].exports["__wbindgen_closure_wrapper733"](p0i32,p1i32,p2i32);
/******/ 					},
/******/ 					"__wbindgen_closure_wrapper735": function(p0i32,p1i32,p2i32) {
/******/ 						return installedModules["../pkg/touchies_bg.js"].exports["__wbindgen_closure_wrapper735"](p0i32,p1i32,p2i32);
/******/ 					},
/******/ 					"__wbindgen_closure_wrapper737": function(p0i32,p1i32,p2i32) {
/******/ 						return installedModules["../pkg/touchies_bg.js"].exports["__wbindgen_closure_wrapper737"](p0i32,p1i32,p2i32);
/******/ 					},
/******/ 					"__wbindgen_closure_wrapper739": function(p0i32,p1i32,p2i32) {
/******/ 						return installedModules["../pkg/touchies_bg.js"].exports["__wbindgen_closure_wrapper739"](p0i32,p1i32,p2i32);
/******/ 					},
/******/ 					"__wbindgen_closure_wrapper741": function(p0i32,p1i32,p2i32) {
/******/ 						return installedModules["../pkg/touchies_bg.js"].exports["__wbindgen_closure_wrapper741"](p0i32,p1i32,p2i32);
/******/ 					},
/******/ 					"__wbindgen_closure_wrapper1245": function(p0i32,p1i32,p2i32) {
/******/ 						return installedModules["../pkg/touchies_bg.js"].exports["__wbindgen_closure_wrapper1245"](p0i32,p1i32,p2i32);
/******/ 					},
/******/ 					"__wbindgen_closure_wrapper10907": function(p0i32,p1i32,p2i32) {
/******/ 						return installedModules["../pkg/touchies_bg.js"].exports["__wbindgen_closure_wrapper10907"](p0i32,p1i32,p2i32);
/******/ 					}
/******/ 				}
/******/ 			};
/******/ 		},
/******/ 	};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var promises = [];
/******/
/******/
/******/ 		// JSONP chunk loading for javascript
/******/
/******/ 		var installedChunkData = installedChunks[chunkId];
/******/ 		if(installedChunkData !== 0) { // 0 means "already installed".
/******/
/******/ 			// a Promise means "currently loading".
/******/ 			if(installedChunkData) {
/******/ 				promises.push(installedChunkData[2]);
/******/ 			} else {
/******/ 				// setup Promise in chunk cache
/******/ 				var promise = new Promise(function(resolve, reject) {
/******/ 					installedChunkData = installedChunks[chunkId] = [resolve, reject];
/******/ 				});
/******/ 				promises.push(installedChunkData[2] = promise);
/******/
/******/ 				// start chunk loading
/******/ 				var script = document.createElement('script');
/******/ 				var onScriptComplete;
/******/
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.src = jsonpScriptSrc(chunkId);
/******/
/******/ 				// create error before stack unwound to get useful stacktrace later
/******/ 				var error = new Error();
/******/ 				onScriptComplete = function (event) {
/******/ 					// avoid mem leaks in IE.
/******/ 					script.onerror = script.onload = null;
/******/ 					clearTimeout(timeout);
/******/ 					var chunk = installedChunks[chunkId];
/******/ 					if(chunk !== 0) {
/******/ 						if(chunk) {
/******/ 							var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 							var realSrc = event && event.target && event.target.src;
/******/ 							error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 							error.name = 'ChunkLoadError';
/******/ 							error.type = errorType;
/******/ 							error.request = realSrc;
/******/ 							chunk[1](error);
/******/ 						}
/******/ 						installedChunks[chunkId] = undefined;
/******/ 					}
/******/ 				};
/******/ 				var timeout = setTimeout(function(){
/******/ 					onScriptComplete({ type: 'timeout', target: script });
/******/ 				}, 120000);
/******/ 				script.onerror = script.onload = onScriptComplete;
/******/ 				document.head.appendChild(script);
/******/ 			}
/******/ 		}
/******/
/******/ 		// Fetch + compile chunk loading for webassembly
/******/
/******/ 		var wasmModules = {"0":["../pkg/touchies_bg.wasm"]}[chunkId] || [];
/******/
/******/ 		wasmModules.forEach(function(wasmModuleId) {
/******/ 			var installedWasmModuleData = installedWasmModules[wasmModuleId];
/******/
/******/ 			// a Promise means "currently loading" or "already loaded".
/******/ 			if(installedWasmModuleData)
/******/ 				promises.push(installedWasmModuleData);
/******/ 			else {
/******/ 				var importObject = wasmImportObjects[wasmModuleId]();
/******/ 				var req = fetch(__webpack_require__.p + "" + {"../pkg/touchies_bg.wasm":"85c67fe8765f2e2ef254"}[wasmModuleId] + ".module.wasm");
/******/ 				var promise;
/******/ 				if(importObject instanceof Promise && typeof WebAssembly.compileStreaming === 'function') {
/******/ 					promise = Promise.all([WebAssembly.compileStreaming(req), importObject]).then(function(items) {
/******/ 						return WebAssembly.instantiate(items[0], items[1]);
/******/ 					});
/******/ 				} else if(typeof WebAssembly.instantiateStreaming === 'function') {
/******/ 					promise = WebAssembly.instantiateStreaming(req, importObject);
/******/ 				} else {
/******/ 					var bytesPromise = req.then(function(x) { return x.arrayBuffer(); });
/******/ 					promise = bytesPromise.then(function(bytes) {
/******/ 						return WebAssembly.instantiate(bytes, importObject);
/******/ 					});
/******/ 				}
/******/ 				promises.push(installedWasmModules[wasmModuleId] = promise.then(function(res) {
/******/ 					return __webpack_require__.w[wasmModuleId] = (res.instance || res).exports;
/******/ 				}));
/******/ 			}
/******/ 		});
/******/ 		return Promise.all(promises);
/******/ 	};
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// on error function for async loading
/******/ 	__webpack_require__.oe = function(err) { console.error(err); throw err; };
/******/
/******/ 	// object with all WebAssembly.instance exports
/******/ 	__webpack_require__.w = {};
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./bootstrap.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./bootstrap.js":
/*!**********************!*\
  !*** ./bootstrap.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// A dependency graph that contains any wasm must all be imported\n// asynchronously. This `bootstrap.js` file does the single async import, so\n// that no one else needs to worry about it again.\n__webpack_require__.e(/*! import() */ 0).then(__webpack_require__.bind(null, /*! ./index.js */ \"./index.js\"))\n  .catch(e => console.error(\"Error importing `index.js`:\", e));\n\n\n//# sourceURL=webpack:///./bootstrap.js?");

/***/ })

/******/ });