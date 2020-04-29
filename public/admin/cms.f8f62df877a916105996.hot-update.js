webpackHotUpdate("cms",{

/***/ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/defineProperty.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _defineProperty; });
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/extends.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/extends.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _extends; });
function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _objectWithoutPropertiesLoose; });
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

/***/ }),

/***/ "./node_modules/@reach/auto-id/dist/auto-id.esm.js":
/*!*********************************************************!*\
  !*** ./node_modules/@reach/auto-id/dist/auto-id.esm.js ***!
  \*********************************************************/
/*! exports provided: useId */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useId", function() { return useId; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _reach_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @reach/utils */ "./node_modules/@reach/utils/dist/utils.esm.js");



/*
 * Welcome to @reach/auto-id!

 * Let's see if we can make sense of why this hook exists and its
 * implementation.
 *
 * Some background:
 *   1. Accessibiliy APIs rely heavily on element IDs
 *   2. Requiring developers to put IDs on every element in Reach UI is both
 *      cumbersome and error-prone
 *   3. With a component model, we can generate IDs for them!
 *
 * Solution 1: Generate random IDs.
 *
 * This works great as long as you don't server render your app. When React (in
 * the client) tries to reuse the markup from the server, the IDs won't match
 * and React will then recreate the entire DOM tree.
 *
 * Solution 2: Increment an integer
 *
 * This sounds great. Since we're rendering the exact same tree on the server
 * and client, we can increment a counter and get a deterministic result between
 * client and server. Also, JS integers can go up to nine-quadrillion. I'm
 * pretty sure the tab will be closed before an app never needs
 * 10 quadrillion IDs!
 *
 * Problem solved, right?
 *
 * Ah, but there's a catch! React's concurrent rendering makes this approach
 * non-deterministic. While the client and server will end up with the same
 * elements in the end, depending on suspense boundaries (and possibly some user
 * input during the initial render) the incrementing integers won't always match
 * up.
 *
 * Solution 3: Don't use IDs at all on the server; patch after first render.
 *
 * What we've done here is solution 2 with some tricks. With this approach, the
 * ID returned is an empty string on the first render. This way the server and
 * client have the same markup no matter how wild the concurrent rendering may
 * have gotten.
 *
 * After the render, we patch up the components with an incremented ID. This
 * causes a double render on any components with `useId`. Shouldn't be a problem
 * since the components using this hook should be small, and we're only updating
 * the ID attribute on the DOM, nothing big is happening.
 *
 * It doesn't have to be an incremented number, though--we could do generate
 * random strings instead, but incrementing a number is probably the cheapest
 * thing we can do.
 *
 * Additionally, we only do this patchup on the very first client render ever.
 * Any calls to `useId` that happen dynamically in the client will be
 * populated immediately with a value. So, we only get the double render after
 * server hydration and never again, SO BACK OFF ALRIGHT?
 */
var serverHandoffComplete = false;
var id = 0;

var genId = function genId() {
  return ++id;
};
/**
 * useId
 *
 * Autogenerate IDs to facilitate WAI-ARIA and server rendering.
 *
 * Note: The returned ID will initially be `null` and will update after a
 * component mounts. Users may need to supply their own ID if they need
 * consistent values for SSR.
 *
 * @see Docs https://reacttraining.com/reach-ui/auto-id
 */


var useId = function useId(idFromProps) {
  /*
   * If this instance isn't part of the initial render, we don't have to do the
   * double render/patch-up dance. We can just generate the ID and return it.
   */
  var initialId = idFromProps || (serverHandoffComplete ? genId() : null);

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(initialId),
      id = _useState[0],
      setId = _useState[1];

  Object(_reach_utils__WEBPACK_IMPORTED_MODULE_1__["useIsomorphicLayoutEffect"])(function () {
    if (id === null) {
      /*
       * Patch the ID after render. We do this in `useLayoutEffect` to avoid any
       * rendering flicker, though it'll make the first render slower (unlikely
       * to matter, but you're welcome to measure your app and let us know if
       * it's a problem).
       */
      setId(genId());
    } // eslint-disable-next-line react-hooks/exhaustive-deps

  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    if (serverHandoffComplete === false) {
      /*
       * Flag all future uses of `useId` to skip the update dance. This is in
       * `useEffect` because it goes after `useLayoutEffect`, ensuring we don't
       * accidentally bail out of the patch-up dance prematurely.
       */
      serverHandoffComplete = true;
    }
  }, []);
  return id != null ? String(id) : undefined;
};


//# sourceMappingURL=auto-id.esm.js.map


/***/ }),

/***/ "./node_modules/@reach/descendants/dist/descendants.esm.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@reach/descendants/dist/descendants.esm.js ***!
  \*****************************************************************/
/*! exports provided: DescendantProvider, createDescendantContext, useDescendant, useDescendantKeyDown, useDescendants */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DescendantProvider", function() { return DescendantProvider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createDescendantContext", function() { return createDescendantContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useDescendant", function() { return useDescendant; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useDescendantKeyDown", function() { return useDescendantKeyDown; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useDescendants", function() { return useDescendants; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _reach_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @reach/utils */ "./node_modules/@reach/utils/dist/utils.esm.js");



function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function createDescendantContext(name, initialValue) {
  if (initialValue === void 0) {
    initialValue = {};
  }

  return Object(_reach_utils__WEBPACK_IMPORTED_MODULE_1__["createNamedContext"])(name, _extends({
    descendants: [],
    registerDescendant: _reach_utils__WEBPACK_IMPORTED_MODULE_1__["noop"],
    unregisterDescendant: _reach_utils__WEBPACK_IMPORTED_MODULE_1__["noop"]
  }, initialValue));
}
/**
 * This hook registers our descendant by passing it into an array. We can then
 * search that array by to find its index when registering it in the component.
 * We use this for focus management, keyboard navigation, and typeahead
 * functionality for some components.
 *
 * The hook accepts the element node and (optionally) a key. The key is useful
 * if multiple descendants have identical text values and we need to
 * differentiate siblings for some reason.
 *
 * Our main goals with this are:
 *   1) maximum composability,
 *   2) minimal API friction
 *   3) SSR compatibility*
 *   4) concurrent safe
 *   5) index always up-to-date with the tree despite changes
 *   6) works with memoization of any component in the tree (hopefully)
 *
 * * As for SSR, the good news is that we don't actually need the index on the
 * server for most use-cases, as we are only using it to determine the order of
 * composed descendants for keyboard navigation. However, in the few cases where
 * this is not the case, we can require an explicit index from the app.
 */

function useDescendant(_ref, indexProp) {
  var context = _ref.context,
      element = _ref.element,
      rest = _objectWithoutPropertiesLoose(_ref, ["context", "element"]);

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(),
      forceUpdate = _useState[1];

  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(context),
      registerDescendant = _useContext.registerDescendant,
      unregisterDescendant = _useContext.unregisterDescendant,
      descendants = _useContext.descendants; // Prevent any flashing


  Object(_reach_utils__WEBPACK_IMPORTED_MODULE_1__["useIsomorphicLayoutEffect"])(function () {
    if (!element) forceUpdate({}); // @ts-ignore

    registerDescendant(_extends({
      element: element
    }, rest));
    return function () {
      return unregisterDescendant(element);
    }; // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [element].concat(Object.values(rest)));
  return indexProp !== null && indexProp !== void 0 ? indexProp : descendants.findIndex(function (item) {
    return item.element === element;
  });
}
function useDescendants() {
  return Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);
}
function DescendantProvider(_ref2) {
  var Ctx = _ref2.context,
      children = _ref2.children,
      items = _ref2.items,
      set = _ref2.set;
  var registerDescendant = react__WEBPACK_IMPORTED_MODULE_0___default.a.useCallback(function (_ref3) {
    var element = _ref3.element,
        rest = _objectWithoutPropertiesLoose(_ref3, ["element"]);

    if (!element) {
      return;
    }

    set(function (items) {
      var newItem;
      var newItems; // If there are no items, register at index 0 and bail.

      if (items.length === 0) {
        newItem = _extends({
          element: element,
          index: 0
        }, rest);
        newItems = [].concat(items, [newItem]);
      } else if (items.find(function (item) {
        return item.element === element;
      })) {
        // If the element is already registered, just use the same array
        newItems = items;
      } else {
        // When registering a descendant, we need to make sure we insert in
        // into the array in the same order that it appears in the DOM. So as
        // new descendants are added or maybe some are removed, we always know
        // that the array is up-to-date and correct.
        //
        // So here we look at our registered descendants and see if the new
        // element we are adding appears earlier than an existing descendant's
        // DOM node via `node.compareDocumentPosition`. If it does, we insert
        // the new element at this index. Because `registerDescendant` will be
        // called in an effect every time the descendants state value changes,
        // we should be sure that this index is accurate when descendent
        // elements come or go from our component.
        var index = items.findIndex(function (item) {
          if (!item.element || !element) {
            return false;
          } // Does this element's DOM node appear before another item in the
          // array in our DOM tree? If so, return true to grab the index at
          // this point in the array so we know where to insert the new
          // element.


          return Boolean(item.element.compareDocumentPosition(element) & Node.DOCUMENT_POSITION_PRECEDING);
        });
        newItem = _extends({
          element: element,
          index: index
        }, rest); // If an index is not found we will push the element to the end.

        if (index === -1) {
          newItems = [].concat(items, [newItem]);
        } else {
          newItems = [].concat(items.slice(0, index), [newItem], items.slice(index));
        }
      }

      return newItems.map(function (item, index) {
        return _extends({}, item, {
          index: index
        });
      });
    });
  }, // set is a state setter initialized by the useDescendants hook.
  // We can safely ignore the lint warning here because it will not change
  // between renders.
  // eslint-disable-next-line react-hooks/exhaustive-deps
  []);
  var unregisterDescendant = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function (element) {
    if (!element) {
      return;
    }

    set(function (items) {
      return items.filter(function (item) {
        return element !== item.element;
      });
    });
  }, // set is a state setter initialized by the useDescendants hook.
  // We can safely ignore the lint warning here because it will not change
  // between renders.
  // eslint-disable-next-line react-hooks/exhaustive-deps
  []);
  var value = Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(function () {
    return {
      descendants: items,
      registerDescendant: registerDescendant,
      unregisterDescendant: unregisterDescendant
    };
  }, [items, registerDescendant, unregisterDescendant]);
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Ctx.Provider, {
    value: value
  }, children);
}
/**
 * Testing this as an abstraction for compound components that use keyboard
 * navigation. Hoping this will help us prevent bugs and mismatched behavior
 * across various components, but it may also prove to be too messy of an
 * abstraction in the end.
 *
 * Currently used in:
 *   - Tabs
 *   - Accordion
 *
 * @param context
 * @param options
 */

function useDescendantKeyDown(context, options) {
  var _useContext2 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(context),
      descendants = _useContext2.descendants;

  var callback = options.callback,
      currentIndex = options.currentIndex,
      filter = options.filter,
      _options$key = options.key,
      key = _options$key === void 0 ? "index" : _options$key,
      _options$orientation = options.orientation,
      orientation = _options$orientation === void 0 ? "vertical" : _options$orientation,
      _options$rotate = options.rotate,
      rotate = _options$rotate === void 0 ? true : _options$rotate,
      _options$rtl = options.rtl,
      rtl = _options$rtl === void 0 ? false : _options$rtl;
  var index = currentIndex !== null && currentIndex !== void 0 ? currentIndex : -1;
  return function handleKeyDown(event) {
    if (!["ArrowDown", "ArrowUp", "ArrowLeft", "ArrowRight", "PageUp", "PageDown", "Home", "End"].includes(event.key)) {
      return;
    } // If we use a filter function, we need to re-index our descendants array
    // so that filtered descendent elements aren't selected.


    var selectableDescendants = filter ? descendants.filter(filter) : descendants; // Current index should map to the updated array vs. the original
    // descendants array.

    if (filter) {
      index = selectableDescendants.findIndex(function (descendant) {
        return descendant.index === currentIndex;
      });
    } // We need some options for any of this to work!


    if (!selectableDescendants.length) {
      return;
    }

    function getNextOption() {
      var atBottom = index === selectableDescendants.length - 1;
      return atBottom ? rotate ? getFirstOption() : selectableDescendants[index] : selectableDescendants[(index + 1) % selectableDescendants.length];
    }

    function getPreviousOption() {
      var atTop = index === 0;
      return atTop ? rotate ? getLastOption() : selectableDescendants[index] : selectableDescendants[(index - 1 + selectableDescendants.length) % selectableDescendants.length];
    }

    function getFirstOption() {
      return selectableDescendants[0];
    }

    function getLastOption() {
      return selectableDescendants[selectableDescendants.length - 1];
    }

    switch (event.key) {
      case "ArrowDown":
        if (orientation === "vertical" || orientation === "both") {
          event.preventDefault();
          var next = getNextOption();
          callback(key === "option" ? next : next[key]);
        }

        break;

      case "ArrowUp":
        if (orientation === "vertical" || orientation === "both") {
          event.preventDefault();
          var prev = getPreviousOption();
          callback(key === "option" ? prev : prev[key]);
        }

        break;

      case "ArrowLeft":
        if (orientation === "horizontal" || orientation === "both") {
          event.preventDefault();
          var nextOrPrev = (rtl ? getNextOption : getPreviousOption)();
          callback(key === "option" ? nextOrPrev : nextOrPrev[key]);
        }

        break;

      case "ArrowRight":
        if (orientation === "horizontal" || orientation === "both") {
          event.preventDefault();
          var prevOrNext = (rtl ? getPreviousOption : getNextOption)();
          callback(key === "option" ? prevOrNext : prevOrNext[key]);
        }

        break;

      case "PageUp":
        event.preventDefault();
        var prevOrFirst = (event.ctrlKey ? getPreviousOption : getFirstOption)();
        callback(key === "option" ? prevOrFirst : prevOrFirst[key]);
        break;

      case "Home":
        event.preventDefault();
        var first = getFirstOption();
        callback(key === "option" ? first : first[key]);
        break;

      case "PageDown":
        event.preventDefault();
        var nextOrLast = (event.ctrlKey ? getNextOption : getLastOption)();
        callback(key === "option" ? nextOrLast : nextOrLast[key]);
        break;

      case "End":
        event.preventDefault();
        var last = getLastOption();
        callback(key === "option" ? last : last[key]);
        break;
    }
  };
}


//# sourceMappingURL=descendants.esm.js.map


/***/ }),

/***/ "./node_modules/@reach/dialog/dist/dialog.esm.js":
/*!*******************************************************!*\
  !*** ./node_modules/@reach/dialog/dist/dialog.esm.js ***!
  \*******************************************************/
/*! exports provided: default, Dialog, DialogContent, DialogOverlay */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Dialog", function() { return Dialog; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogContent", function() { return DialogContent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogOverlay", function() { return DialogOverlay; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _reach_portal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @reach/portal */ "./node_modules/@reach/portal/dist/portal.esm.js");
/* harmony import */ var _reach_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @reach/utils */ "./node_modules/@reach/utils/dist/utils.esm.js");
/* harmony import */ var react_focus_lock__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-focus-lock */ "./node_modules/react-focus-lock/dist/es2015/index.js");
/* harmony import */ var react_remove_scroll__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-remove-scroll */ "./node_modules/react-remove-scroll/dist/es2015/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_5__);







function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

var overlayPropTypes = {
  initialFocusRef: function initialFocusRef() {
    return null;
  },
  allowPinchZoom: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.bool,
  onDismiss: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.func
}; ////////////////////////////////////////////////////////////////////////////////

/**
 * DialogOverlay
 *
 * Low-level component if you need more control over the styles or rendering of
 * the dialog overlay.
 *
 * Note: You must render a `DialogContent` inside.
 *
 * @see Docs https://reacttraining.com/reach-ui/dialog#dialogoverlay
 */

var DialogOverlay = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function DialogOverlay(_ref, forwardedRef) {
  var _ref$isOpen = _ref.isOpen,
      isOpen = _ref$isOpen === void 0 ? true : _ref$isOpen,
      props = _objectWithoutPropertiesLoose(_ref, ["isOpen"]);

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    return Object(_reach_utils__WEBPACK_IMPORTED_MODULE_2__["checkStyles"])("dialog");
  }, []); // We want to ignore the immediate focus of a tooltip so it doesn't pop
  // up again when the menu closes, only pops up when focus returns again
  // to the tooltip (like native OS tooltips).

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    if (isOpen) {
      // @ts-ignore
      window.__REACH_DISABLE_TOOLTIPS = true;
    } else {
      window.requestAnimationFrame(function () {
        // Wait a frame so that this doesn't fire before tooltip does
        // @ts-ignore
        window.__REACH_DISABLE_TOOLTIPS = false;
      });
    }
  }, [isOpen]);
  return isOpen ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_reach_portal__WEBPACK_IMPORTED_MODULE_1__["default"], {
    "data-reach-dialog-wrapper": ""
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(DialogInner, Object.assign({
    ref: forwardedRef
  }, props))) : null;
});

if (true) {
  DialogOverlay.displayName = "DialogOverlay";
  DialogOverlay.propTypes = /*#__PURE__*/_extends({}, overlayPropTypes, {
    isOpen: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.bool
  });
} ////////////////////////////////////////////////////////////////////////////////

/**
 * DialogInner
 */


var DialogInner = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function DialogInner(_ref2, forwardedRef) {
  var allowPinchZoom = _ref2.allowPinchZoom,
      initialFocusRef = _ref2.initialFocusRef,
      onClick = _ref2.onClick,
      _ref2$onDismiss = _ref2.onDismiss,
      onDismiss = _ref2$onDismiss === void 0 ? _reach_utils__WEBPACK_IMPORTED_MODULE_2__["noop"] : _ref2$onDismiss,
      onMouseDown = _ref2.onMouseDown,
      onKeyDown = _ref2.onKeyDown,
      _ref2$unstable_lockFo = _ref2.unstable_lockFocusAcrossFrames,
      unstable_lockFocusAcrossFrames = _ref2$unstable_lockFo === void 0 ? true : _ref2$unstable_lockFo,
      props = _objectWithoutPropertiesLoose(_ref2, ["allowPinchZoom", "initialFocusRef", "onClick", "onDismiss", "onMouseDown", "onKeyDown", "unstable_lockFocusAcrossFrames"]);

  var mouseDownTarget = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
  var overlayNode = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
  var ref = Object(_reach_utils__WEBPACK_IMPORTED_MODULE_2__["useForkedRef"])(overlayNode, forwardedRef);
  var activateFocusLock = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function () {
    if (initialFocusRef && initialFocusRef.current) {
      initialFocusRef.current.focus();
    }
  }, [initialFocusRef]);

  function handleClick(event) {
    if (mouseDownTarget.current === event.target) {
      event.stopPropagation();
      onDismiss(event);
    }
  }

  function handleKeyDown(event) {
    if (event.key === "Escape") {
      event.stopPropagation();
      onDismiss(event);
    }
  }

  function handleMouseDown(event) {
    mouseDownTarget.current = event.target;
  }

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    return overlayNode.current ? createAriaHider(overlayNode.current) : void null;
  }, []);
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_focus_lock__WEBPACK_IMPORTED_MODULE_3__["default"], {
    autoFocus: true,
    returnFocus: true,
    onActivation: activateFocusLock,
    crossFrame: unstable_lockFocusAcrossFrames
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_remove_scroll__WEBPACK_IMPORTED_MODULE_4__["RemoveScroll"], {
    allowPinchZoom: allowPinchZoom
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", Object.assign({}, props, {
    ref: ref,
    "data-reach-dialog-overlay": "",

    /*
     * We can ignore the `no-static-element-interactions` warning here
     * because our overlay is only designed to capture any outside
     * clicks, not to serve as a clickable element itself.
     */
    onClick: Object(_reach_utils__WEBPACK_IMPORTED_MODULE_2__["wrapEvent"])(onClick, handleClick),
    onKeyDown: Object(_reach_utils__WEBPACK_IMPORTED_MODULE_2__["wrapEvent"])(onKeyDown, handleKeyDown),
    onMouseDown: Object(_reach_utils__WEBPACK_IMPORTED_MODULE_2__["wrapEvent"])(onMouseDown, handleMouseDown)
  }))));
});

if (true) {
  DialogOverlay.displayName = "DialogOverlay";
  DialogOverlay.propTypes = /*#__PURE__*/_extends({}, overlayPropTypes);
} ////////////////////////////////////////////////////////////////////////////////

/**
 * DialogContent
 *
 * Low-level component if you need more control over the styles or rendering of
 * the dialog content.
 *
 * Note: Must be a child of `DialogOverlay`.
 *
 * Note: You only need to use this when you are also styling `DialogOverlay`,
 * otherwise you can use the high-level `Dialog` component and pass the props
 * to it. Any props passed to `Dialog` component (besides `isOpen` and
 * `onDismiss`) will be spread onto `DialogContent`.
 *
 * @see Docs https://reacttraining.com/reach-ui/dialog#dialogcontent
 */


var DialogContent = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function DialogContent(_ref3, forwardedRef) {
  var onClick = _ref3.onClick,
      onKeyDown = _ref3.onKeyDown,
      props = _objectWithoutPropertiesLoose(_ref3, ["onClick", "onKeyDown"]);

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", Object.assign({
    "aria-modal": "true",
    role: "dialog",
    tabIndex: -1
  }, props, {
    ref: forwardedRef,
    "data-reach-dialog-content": "",
    onClick: Object(_reach_utils__WEBPACK_IMPORTED_MODULE_2__["wrapEvent"])(onClick, function (event) {
      event.stopPropagation();
    })
  }));
});

if (true) {
  DialogContent.displayName = "DialogContent";
  DialogContent.propTypes = {
    "aria-label": ariaLabelType,
    "aria-labelledby": ariaLabelType
  };
} ////////////////////////////////////////////////////////////////////////////////

/**
 * Dialog
 *
 * High-level component to render a modal dialog window over the top of the page
 * (or another dialog).
 *
 * @see Docs https://reacttraining.com/reach-ui/dialog#dialog
 */


var Dialog = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function Dialog(_ref4, forwardedRef) {
  var isOpen = _ref4.isOpen,
      _ref4$onDismiss = _ref4.onDismiss,
      onDismiss = _ref4$onDismiss === void 0 ? _reach_utils__WEBPACK_IMPORTED_MODULE_2__["noop"] : _ref4$onDismiss,
      initialFocusRef = _ref4.initialFocusRef,
      allowPinchZoom = _ref4.allowPinchZoom,
      props = _objectWithoutPropertiesLoose(_ref4, ["isOpen", "onDismiss", "initialFocusRef", "allowPinchZoom"]);

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(DialogOverlay, {
    initialFocusRef: initialFocusRef,
    allowPinchZoom: allowPinchZoom,
    isOpen: isOpen,
    onDismiss: onDismiss
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(DialogContent, Object.assign({
    ref: forwardedRef
  }, props)));
});

if (true) {
  Dialog.displayName = "Dialog";
  Dialog.propTypes = {
    isOpen: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.bool,
    onDismiss: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.func,
    "aria-label": ariaLabelType,
    "aria-labelledby": ariaLabelType
  };
}

function createAriaHider(dialogNode) {
  var originalValues = [];
  var rootNodes = [];
  var ownerDocument = Object(_reach_utils__WEBPACK_IMPORTED_MODULE_2__["getOwnerDocument"])(dialogNode) || document;

  if (!dialogNode) {
    if (true) {
      console.warn("A ref has not yet been attached to a dialog node when attempting to call `createAriaHider`.");
    }

    return _reach_utils__WEBPACK_IMPORTED_MODULE_2__["noop"];
  }

  Array.prototype.forEach.call(ownerDocument.querySelectorAll("body > *"), function (node) {
    var _dialogNode$parentNod, _dialogNode$parentNod2;

    var portalNode = (_dialogNode$parentNod = dialogNode.parentNode) === null || _dialogNode$parentNod === void 0 ? void 0 : (_dialogNode$parentNod2 = _dialogNode$parentNod.parentNode) === null || _dialogNode$parentNod2 === void 0 ? void 0 : _dialogNode$parentNod2.parentNode;

    if (node === portalNode) {
      return;
    }

    var attr = node.getAttribute("aria-hidden");
    var alreadyHidden = attr !== null && attr !== "false";

    if (alreadyHidden) {
      return;
    }

    originalValues.push(attr);
    rootNodes.push(node);
    node.setAttribute("aria-hidden", "true");
  });
  return function () {
    rootNodes.forEach(function (node, index) {
      var originalValue = originalValues[index];

      if (originalValue === null) {
        node.removeAttribute("aria-hidden");
      } else {
        node.setAttribute("aria-hidden", originalValue);
      }
    });
  };
}

function ariaLabelType(props, propName, compName, location, propFullName) {
  var details = "\nSee https://www.w3.org/TR/wai-aria/#aria-label for details.";

  if (!props["aria-label"] && !props["aria-labelledby"]) {
    return new Error("A <" + compName + "> must have either an `aria-label` or `aria-labelledby` prop.\n      " + details);
  }

  if (props["aria-label"] && props["aria-labelledby"]) {
    return new Error("You provided both `aria-label` and `aria-labelledby` props to a <" + compName + ">. If the a label for this component is visible on the screen, that label's component should be given a unique ID prop, and that ID should be passed as the `aria-labelledby` prop into <" + compName + ">. If the label cannot be determined programmatically from the content of the element, an alternative label should be provided as the `aria-label` prop, which will be used as an `aria-label` on the HTML tag." + details);
  } else if (props[propName] != null && !Object(_reach_utils__WEBPACK_IMPORTED_MODULE_2__["isString"])(props[propName])) {
    return new Error("Invalid prop `" + propName + "` supplied to `" + compName + "`. Expected `string`, received `" + (Array.isArray(propFullName) ? "array" : typeof propFullName) + "`.");
  }

  return null;
}

/* harmony default export */ __webpack_exports__["default"] = (Dialog);

//# sourceMappingURL=dialog.esm.js.map


/***/ }),

/***/ "./node_modules/@reach/portal/dist/portal.esm.js":
/*!*******************************************************!*\
  !*** ./node_modules/@reach/portal/dist/portal.esm.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _reach_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @reach/utils */ "./node_modules/@reach/utils/dist/utils.esm.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-dom */ "react-dom");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_2__);




/**
 * Welcome to @reach/portal!
 *
 * Creates and appends a DOM node to the end of `document.body` and renders a
 * React tree into it. Useful for rendering a natural React element hierarchy
 * with a different DOM hierarchy to prevent parent styles from clipping or
 * hiding content (for popovers, dropdowns, and modals).
 *
 * @see Docs   https://reacttraining.com/reach-ui/portal
 * @see Source https://github.com/reach/reach-ui/tree/master/packages/portal
 * @see React  https://reactjs.org/docs/portals.html
 */
/**
 * Portal
 *
 * @see Docs https://reacttraining.com/reach-ui/portal#portal
 */

var Portal = function Portal(_ref) {
  var children = _ref.children,
      _ref$type = _ref.type,
      type = _ref$type === void 0 ? "reach-portal" : _ref$type;
  var mountNode = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
  var portalNode = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(),
      forceUpdate = _useState[1];

  Object(_reach_utils__WEBPACK_IMPORTED_MODULE_1__["useIsomorphicLayoutEffect"])(function () {
    // It's possible that the content of the portal has, itself, been portaled.
    // In that case, it's important to append to the correct document element.
    var ownerDocument = mountNode.current.ownerDocument;
    portalNode.current = ownerDocument === null || ownerDocument === void 0 ? void 0 : ownerDocument.createElement(type);
    ownerDocument.body.appendChild(portalNode.current);
    forceUpdate({});
    return function () {
      if (portalNode.current && portalNode.current.ownerDocument) {
        portalNode.current.ownerDocument.body.removeChild(portalNode.current);
      }
    };
  }, [type]);
  return portalNode.current ? Object(react_dom__WEBPACK_IMPORTED_MODULE_2__["createPortal"])(children, portalNode.current) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    ref: mountNode
  });
};

if (true) {
  Portal.displayName = "Portal";
}

/* harmony default export */ __webpack_exports__["default"] = (Portal);
//# sourceMappingURL=portal.esm.js.map


/***/ }),

/***/ "./node_modules/@reach/tabs/dist/tabs.esm.js":
/*!***************************************************!*\
  !*** ./node_modules/@reach/tabs/dist/tabs.esm.js ***!
  \***************************************************/
/*! exports provided: Tab, TabList, TabPanel, TabPanels, Tabs, TabsKeyboardActivation, TabsOrientation, useTabsContext */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab", function() { return Tab; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabList", function() { return TabList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabPanel", function() { return TabPanel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabPanels", function() { return TabPanels; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tabs", function() { return Tabs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsKeyboardActivation", function() { return TabsKeyboardActivation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsOrientation", function() { return TabsOrientation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useTabsContext", function() { return useTabsContext; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _reach_descendants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @reach/descendants */ "./node_modules/@reach/descendants/dist/descendants.esm.js");
/* harmony import */ var _reach_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @reach/utils */ "./node_modules/@reach/utils/dist/utils.esm.js");
/* harmony import */ var _reach_auto_id__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @reach/auto-id */ "./node_modules/@reach/auto-id/dist/auto-id.esm.js");






function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

var TabsDescendantsContext = /*#__PURE__*/Object(_reach_descendants__WEBPACK_IMPORTED_MODULE_2__["createDescendantContext"])("TabsDescendantsContext");
var TabPanelDescendantsContext = /*#__PURE__*/Object(_reach_descendants__WEBPACK_IMPORTED_MODULE_2__["createDescendantContext"])("TabPanelDescendantsContext");
var TabsContext = /*#__PURE__*/Object(_reach_utils__WEBPACK_IMPORTED_MODULE_3__["createNamedContext"])("TabsContext", {});
var TabsKeyboardActivation;

(function (TabsKeyboardActivation) {
  TabsKeyboardActivation["Auto"] = "auto";
  TabsKeyboardActivation["Manual"] = "manual";
})(TabsKeyboardActivation || (TabsKeyboardActivation = {}));

var TabsOrientation;

(function (TabsOrientation) {
  TabsOrientation["Horizontal"] = "horizontal";
  TabsOrientation["Vertical"] = "vertical";
})(TabsOrientation || (TabsOrientation = {})); ////////////////////////////////////////////////////////////////////////////////

/**
 * Tabs
 *
 * The parent component of the tab interface.
 *
 * @see Docs https://reacttraining.com/reach-ui/tabs#tabs
 */


var Tabs = /*#__PURE__*/Object(_reach_utils__WEBPACK_IMPORTED_MODULE_3__["forwardRefWithAs"])(function Tabs(_ref, ref) {
  var _props$id;

  var _ref$as = _ref.as,
      Comp = _ref$as === void 0 ? "div" : _ref$as,
      children = _ref.children,
      defaultIndex = _ref.defaultIndex,
      _ref$orientation = _ref.orientation,
      orientation = _ref$orientation === void 0 ? TabsOrientation.Horizontal : _ref$orientation,
      _ref$index = _ref.index,
      controlledIndex = _ref$index === void 0 ? undefined : _ref$index,
      _ref$keyboardActivati = _ref.keyboardActivation,
      keyboardActivation = _ref$keyboardActivati === void 0 ? TabsKeyboardActivation.Auto : _ref$keyboardActivati,
      onChange = _ref.onChange,
      _ref$readOnly = _ref.readOnly,
      readOnly = _ref$readOnly === void 0 ? false : _ref$readOnly,
      props = _objectWithoutPropertiesLoose(_ref, ["as", "children", "defaultIndex", "orientation", "index", "keyboardActivation", "onChange", "readOnly"]);

  var isControlled = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(controlledIndex != null);
  Object(_reach_utils__WEBPACK_IMPORTED_MODULE_3__["useControlledSwitchWarning"])(controlledIndex, "index", "Tabs");

  var _id = Object(_reach_auto_id__WEBPACK_IMPORTED_MODULE_4__["useId"])(props.id);

  var id = (_props$id = props.id) !== null && _props$id !== void 0 ? _props$id : Object(_reach_utils__WEBPACK_IMPORTED_MODULE_3__["makeId"])("tabs", _id); // We only manage focus if the user caused the update vs. a new controlled
  // index coming in.

  var userInteractedRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(false);
  var selectedPanelRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
  var isRTL = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(false);

  var _useControlledState = Object(_reach_utils__WEBPACK_IMPORTED_MODULE_3__["useControlledState"])(controlledIndex, defaultIndex !== null && defaultIndex !== void 0 ? defaultIndex : 0),
      selectedIndex = _useControlledState[0],
      setSelectedIndex = _useControlledState[1];

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(-1),
      focusedIndex = _useState[0],
      setFocusedIndex = _useState[1];

  var _useDescendants = Object(_reach_descendants__WEBPACK_IMPORTED_MODULE_2__["useDescendants"])(),
      tabs = _useDescendants[0],
      setTabs = _useDescendants[1];

  var context = Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(function () {
    return {
      focusedIndex: focusedIndex,
      id: id,
      isControlled: isControlled.current,
      isRTL: isRTL,
      keyboardActivation: keyboardActivation,
      onFocusPanel: function onFocusPanel() {
        var _selectedPanelRef$cur;

        (_selectedPanelRef$cur = selectedPanelRef.current) === null || _selectedPanelRef$cur === void 0 ? void 0 : _selectedPanelRef$cur.focus();
      },
      onSelectTab: readOnly ? _reach_utils__WEBPACK_IMPORTED_MODULE_3__["noop"] : function (index) {
        userInteractedRef.current = true;
        onChange && onChange(index);
        setSelectedIndex(index);
      },
      onSelectTabWithKeyboard: readOnly ? _reach_utils__WEBPACK_IMPORTED_MODULE_3__["noop"] : function (index) {
        var _tabs$index$element;

        userInteractedRef.current = true;

        switch (keyboardActivation) {
          case TabsKeyboardActivation.Manual:
            (_tabs$index$element = tabs[index].element) === null || _tabs$index$element === void 0 ? void 0 : _tabs$index$element.focus();
            return;

          case TabsKeyboardActivation.Auto:
          default:
            onChange && onChange(index);
            setSelectedIndex(index);
            return;
        }
      },
      orientation: orientation,
      selectedIndex: selectedIndex,
      selectedPanelRef: selectedPanelRef,
      setFocusedIndex: setFocusedIndex,
      setSelectedIndex: setSelectedIndex,
      userInteractedRef: userInteractedRef
    };
  }, [focusedIndex, id, keyboardActivation, onChange, orientation, readOnly, selectedIndex, setSelectedIndex, tabs]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    return Object(_reach_utils__WEBPACK_IMPORTED_MODULE_3__["checkStyles"])("tabs");
  }, []);
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_reach_descendants__WEBPACK_IMPORTED_MODULE_2__["DescendantProvider"], {
    context: TabsDescendantsContext,
    items: tabs,
    set: setTabs
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(TabsContext.Provider, {
    value: context
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Comp, Object.assign({}, props, {
    ref: ref,
    "data-reach-tabs": "",
    "data-orientation": orientation,
    id: props.id
  }), Object(_reach_utils__WEBPACK_IMPORTED_MODULE_3__["isFunction"])(children) ? children({
    focusedIndex: focusedIndex,
    id: id,
    selectedIndex: selectedIndex
  }) : children)));
});

if (true) {
  Tabs.displayName = "Tabs";
  Tabs.propTypes = {
    children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node.isRequired,
    onChange: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
    orientation: /*#__PURE__*/prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOf( /*#__PURE__*/Object.values(TabsOrientation)),
    index: function index(props, name, compName, location, propName) {
      var val = props[name];

      if (props.index > -1 && props.onChange == null && props.readOnly !== true) {
        return new Error("You provided a value prop to `" + compName + "` without an `onChange` handler. This will render a read-only tabs element. If the tabs should be mutable use `defaultIndex`. Otherwise, set `onChange`.");
      } else if (props[name] != null && !Object(_reach_utils__WEBPACK_IMPORTED_MODULE_3__["isNumber"])(props[name])) {
        return new Error("Invalid prop `" + propName + "` supplied to `" + compName + "`. Expected `number`, received `" + (Array.isArray(val) ? "array" : typeof val) + "`.");
      }

      return null;
    },
    defaultIndex: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number
  };
} ////////////////////////////////////////////////////////////////////////////////

/**
 * TabList
 *
 * The parent component of the tabs.
 *
 * @see Docs https://reacttraining.com/reach-ui/tabs#tablist
 */


var TabListImpl = /*#__PURE__*/Object(_reach_utils__WEBPACK_IMPORTED_MODULE_3__["forwardRefWithAs"])(function TabList(_ref2, forwardedRef) {
  var children = _ref2.children,
      _ref2$as = _ref2.as,
      Comp = _ref2$as === void 0 ? "div" : _ref2$as,
      onKeyDown = _ref2.onKeyDown,
      props = _objectWithoutPropertiesLoose(_ref2, ["children", "as", "onKeyDown"]);

  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(TabsContext),
      focusedIndex = _useContext.focusedIndex,
      isControlled = _useContext.isControlled,
      isRTL = _useContext.isRTL,
      keyboardActivation = _useContext.keyboardActivation,
      onSelectTabWithKeyboard = _useContext.onSelectTabWithKeyboard,
      orientation = _useContext.orientation,
      selectedIndex = _useContext.selectedIndex,
      setSelectedIndex = _useContext.setSelectedIndex;

  var _useContext2 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(TabsDescendantsContext),
      tabs = _useContext2.descendants;

  var ownRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
  var ref = Object(_reach_utils__WEBPACK_IMPORTED_MODULE_3__["useForkedRef"])(forwardedRef, ownRef);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    if (ownRef.current && (ownRef.current.ownerDocument && ownRef.current.ownerDocument.dir === "rtl" || Object(_reach_utils__WEBPACK_IMPORTED_MODULE_3__["getElementComputedStyle"])(ownRef.current, "direction") === "rtl")) {
      isRTL.current = true;
    }
  }, [isRTL]);
  var handleKeyDown = Object(_reach_utils__WEBPACK_IMPORTED_MODULE_3__["useEventCallback"])(Object(_reach_utils__WEBPACK_IMPORTED_MODULE_3__["wrapEvent"])(onKeyDown, Object(_reach_descendants__WEBPACK_IMPORTED_MODULE_2__["useDescendantKeyDown"])(TabsDescendantsContext, {
    currentIndex: keyboardActivation === TabsKeyboardActivation.Manual ? focusedIndex : selectedIndex,
    orientation: orientation,
    rotate: true,
    callback: onSelectTabWithKeyboard,
    filter: function filter(tab) {
      return !tab.disabled;
    },
    rtl: isRTL.current
  })));
  Object(_reach_utils__WEBPACK_IMPORTED_MODULE_3__["useIsomorphicLayoutEffect"])(function () {
    var _tabs$selectedIndex;

    // In the event an uncontrolled component's selected index is disabled,
    // (this should only happen if the first tab is disabled and no default
    // index is set), we need to override the selection to the next selectable
    // index value.
    if (!isControlled && Object(_reach_utils__WEBPACK_IMPORTED_MODULE_3__["boolOrBoolString"])((_tabs$selectedIndex = tabs[selectedIndex]) === null || _tabs$selectedIndex === void 0 ? void 0 : _tabs$selectedIndex.disabled)) {
      var next = tabs.find(function (tab) {
        return !tab.disabled;
      });

      if (next) {
        setSelectedIndex(next.index);
      }
    }
  }, [tabs, isControlled, selectedIndex, setSelectedIndex]);
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Comp // The element that serves as the container for the set of tabs has role
  // `tablist`
  // https://www.w3.org/TR/wai-aria-practices-1.2/#tabpanel
  , Object.assign({
    // The element that serves as the container for the set of tabs has role
    // `tablist`
    // https://www.w3.org/TR/wai-aria-practices-1.2/#tabpanel
    role: "tablist",
    "aria-orientation": orientation
  }, props, {
    "data-reach-tab-list": "",
    ref: ref,
    onKeyDown: handleKeyDown
  }), react__WEBPACK_IMPORTED_MODULE_0__["Children"].map(children, function (child, index) {
    // TODO: Remove in 1.0
    return Object(_reach_utils__WEBPACK_IMPORTED_MODULE_3__["cloneValidElement"])(child, {
      isSelected: index === selectedIndex
    });
  }));
});
var TabList = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["memo"])(TabListImpl);

if (true) {
  TabList.displayName = "TabList";
  TabListImpl.displayName = "TabList";
  TabListImpl.propTypes = {
    as: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.any,
    children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node
  };
}

/**
 * Tab
 *
 * The interactive element that changes the selected panel.
 *
 * @see Docs https://reacttraining.com/reach-ui/tabs#tab
 */

var Tab = /*#__PURE__*/Object(_reach_utils__WEBPACK_IMPORTED_MODULE_3__["forwardRefWithAs"])(function Tab(_ref3, forwardedRef) {
  var children = _ref3.children,
      _ = _ref3.isSelected,
      _ref3$as = _ref3.as,
      Comp = _ref3$as === void 0 ? "button" : _ref3$as,
      disabled = _ref3.disabled,
      onBlur = _ref3.onBlur,
      onFocus = _ref3.onFocus,
      props = _objectWithoutPropertiesLoose(_ref3, ["children", "isSelected", "as", "disabled", "onBlur", "onFocus"]);

  var _useContext3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(TabsContext),
      tabsId = _useContext3.id,
      onSelectTab = _useContext3.onSelectTab,
      orientation = _useContext3.orientation,
      selectedIndex = _useContext3.selectedIndex,
      userInteractedRef = _useContext3.userInteractedRef,
      setFocusedIndex = _useContext3.setFocusedIndex;

  var ownRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
  var ref = Object(_reach_utils__WEBPACK_IMPORTED_MODULE_3__["useForkedRef"])(forwardedRef, ownRef);
  var index = Object(_reach_descendants__WEBPACK_IMPORTED_MODULE_2__["useDescendant"])({
    element: ownRef.current,
    context: TabsDescendantsContext,
    disabled: !!disabled
  });
  var isSelected = index === selectedIndex;

  function onSelect() {
    onSelectTab(index);
  }

  Object(_reach_utils__WEBPACK_IMPORTED_MODULE_3__["useUpdateEffect"])(function () {
    if (isSelected && ownRef.current && userInteractedRef.current) {
      userInteractedRef.current = false;
      ownRef.current.focus();
    }
  }, [isSelected]);
  var handleFocus = Object(_reach_utils__WEBPACK_IMPORTED_MODULE_3__["useEventCallback"])(Object(_reach_utils__WEBPACK_IMPORTED_MODULE_3__["wrapEvent"])(onFocus, function () {
    setFocusedIndex(index);
  }));
  var handleBlur = Object(_reach_utils__WEBPACK_IMPORTED_MODULE_3__["useEventCallback"])(Object(_reach_utils__WEBPACK_IMPORTED_MODULE_3__["wrapEvent"])(onFocus, function () {
    setFocusedIndex(-1);
  }));
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Comp // Each element with role `tab` has the property `aria-controls` referring
  // to its associated `tabpanel` element.
  // https://www.w3.org/TR/wai-aria-practices-1.2/#tabpanel
  , Object.assign({
    "aria-controls": Object(_reach_utils__WEBPACK_IMPORTED_MODULE_3__["makeId"])(tabsId, "panel", index),
    "aria-disabled": disabled,
    "aria-selected": isSelected,
    // Each element that serves as a tab has role `tab` and is contained
    // within the element with role `tablist`.
    // https://www.w3.org/TR/wai-aria-practices-1.2/#tabpanel
    role: "tab",
    tabIndex: isSelected ? 0 : -1
  }, props, {
    ref: ref,
    "data-reach-tab": "",
    "data-orientation": orientation,
    "data-selected": isSelected ? "" : undefined,
    disabled: disabled,
    id: Object(_reach_utils__WEBPACK_IMPORTED_MODULE_3__["makeId"])(tabsId, "tab", index),
    onClick: onSelect,
    onFocus: handleFocus,
    onBlur: handleBlur
  }), children);
});

if (true) {
  Tab.displayName = "Tab";
  Tab.propTypes = {
    children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node,
    disabled: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool
  };
} ////////////////////////////////////////////////////////////////////////////////

/**
 * TabPanels
 *
 * The parent component of the panels.
 *
 * @see Docs https://reacttraining.com/reach-ui/tabs#tabpanels
 */


var TabPanelsImpl = /*#__PURE__*/Object(_reach_utils__WEBPACK_IMPORTED_MODULE_3__["forwardRefWithAs"])(function TabPanels(_ref4, forwardedRef) {
  var children = _ref4.children,
      _ref4$as = _ref4.as,
      Comp = _ref4$as === void 0 ? "div" : _ref4$as,
      props = _objectWithoutPropertiesLoose(_ref4, ["children", "as"]);

  var ownRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])();
  var ref = Object(_reach_utils__WEBPACK_IMPORTED_MODULE_3__["useForkedRef"])(ownRef, forwardedRef);

  var _useDescendants2 = Object(_reach_descendants__WEBPACK_IMPORTED_MODULE_2__["useDescendants"])(),
      tabPanels = _useDescendants2[0],
      setTabPanels = _useDescendants2[1];

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_reach_descendants__WEBPACK_IMPORTED_MODULE_2__["DescendantProvider"], {
    context: TabPanelDescendantsContext,
    items: tabPanels,
    set: setTabPanels
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Comp, Object.assign({}, props, {
    ref: ref,
    "data-reach-tab-panels": ""
  }), children));
});
var TabPanels = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["memo"])(TabPanelsImpl);

if (true) {
  TabPanels.displayName = "TabPanels";
  TabPanelsImpl.displayName = "TabPanels";
  TabPanelsImpl.propTypes = {
    as: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.any,
    children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node
  };
}

/**
 * TabPanel
 *
 * The panel that displays when it's corresponding tab is active.
 *
 * @see Docs https://reacttraining.com/reach-ui/tabs#tabpanel
 */

var TabPanel = /*#__PURE__*/Object(_reach_utils__WEBPACK_IMPORTED_MODULE_3__["forwardRefWithAs"])(function TabPanel(_ref5, forwardedRef) {
  var children = _ref5.children,
      ariaLabel = _ref5["aria-label"],
      _ref5$as = _ref5.as,
      Comp = _ref5$as === void 0 ? "div" : _ref5$as,
      props = _objectWithoutPropertiesLoose(_ref5, ["children", "aria-label", "as"]);

  var _useContext4 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(TabsContext),
      selectedPanelRef = _useContext4.selectedPanelRef,
      selectedIndex = _useContext4.selectedIndex,
      tabsId = _useContext4.id;

  var ownRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
  var index = Object(_reach_descendants__WEBPACK_IMPORTED_MODULE_2__["useDescendant"])({
    element: ownRef.current,
    context: TabPanelDescendantsContext
  });
  var isSelected = index === selectedIndex;
  var id = Object(_reach_utils__WEBPACK_IMPORTED_MODULE_3__["makeId"])(tabsId, "panel", index);
  var ref = Object(_reach_utils__WEBPACK_IMPORTED_MODULE_3__["useForkedRef"])(forwardedRef, ownRef, isSelected ? selectedPanelRef : null);
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Comp // Each element with role `tabpanel` has the property `aria-labelledby`
  // referring to its associated tab element.
  , Object.assign({
    "aria-labelledby": Object(_reach_utils__WEBPACK_IMPORTED_MODULE_3__["makeId"])(tabsId, "tab", index),
    hidden: !isSelected,
    // Each element that contains the content panel for a tab has role
    // `tabpanel`.
    // https://www.w3.org/TR/wai-aria-practices-1.2/#tabpanel
    role: "tabpanel",
    tabIndex: isSelected ? 0 : -1
  }, props, {
    ref: ref,
    "data-reach-tab-panel": "",
    id: id
  }), children);
});

if (true) {
  TabPanel.displayName = "TabPanel";
  TabPanel.propTypes = {
    as: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.any,
    children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node
  };
} ////////////////////////////////////////////////////////////////////////////////

/**
 * A hook that exposes data for a given `Tabs` component to its descendants.
 *
 * @see Docs https://reacttraining.com/reach-ui/tabs#usetabscontext
 */


function useTabsContext() {
  var _useContext5 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(TabsContext),
      focusedIndex = _useContext5.focusedIndex,
      id = _useContext5.id,
      selectedIndex = _useContext5.selectedIndex;

  return Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(function () {
    return {
      focusedIndex: focusedIndex,
      id: id,
      selectedIndex: selectedIndex
    };
  }, [focusedIndex, id, selectedIndex]);
}


//# sourceMappingURL=tabs.esm.js.map


/***/ }),

/***/ "./node_modules/@reach/utils/dist/utils.esm.js":
/*!*****************************************************!*\
  !*** ./node_modules/@reach/utils/dist/utils.esm.js ***!
  \*****************************************************/
/*! exports provided: warning, assignRef, boolOrBoolString, canUseDOM, checkStyles, cloneValidElement, createNamedContext, forwardRefWithAs, getDocumentDimensions, getElementComputedStyle, getOwnerDocument, getOwnerWindow, getScrollPosition, getScrollbarOffset, isBoolean, isFunction, isNumber, isRightClick, isString, makeId, noop, ponyfillGlobal, stateToAttributeString, useCallbackProp, useCheckStyles, useConstant, useControlledState, useControlledSwitchWarning, useEventCallback, useEventListener, useFocusChange, useForkedRef, useIsomorphicLayoutEffect, usePrevious, useStateLogger, useUpdateEffect, wrapEvent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(process) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "assignRef", function() { return assignRef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "boolOrBoolString", function() { return boolOrBoolString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "canUseDOM", function() { return canUseDOM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkStyles", function() { return checkStyles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cloneValidElement", function() { return cloneValidElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createNamedContext", function() { return createNamedContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "forwardRefWithAs", function() { return forwardRefWithAs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDocumentDimensions", function() { return getDocumentDimensions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getElementComputedStyle", function() { return getElementComputedStyle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getOwnerDocument", function() { return getOwnerDocument; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getOwnerWindow", function() { return getOwnerWindow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getScrollPosition", function() { return getScrollPosition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getScrollbarOffset", function() { return getScrollbarOffset; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isBoolean", function() { return isBoolean; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isFunction", function() { return isFunction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isNumber", function() { return isNumber; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isRightClick", function() { return isRightClick; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isString", function() { return isString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "makeId", function() { return makeId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "noop", function() { return noop; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ponyfillGlobal", function() { return ponyfillGlobal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stateToAttributeString", function() { return stateToAttributeString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useCallbackProp", function() { return useCallbackProp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useCheckStyles", function() { return useCheckStyles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useConstant", function() { return useConstant; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useControlledState", function() { return useControlledState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useControlledSwitchWarning", function() { return useControlledSwitchWarning; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useEventCallback", function() { return useEventCallback; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useEventListener", function() { return useEventListener; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useFocusChange", function() { return useFocusChange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useForkedRef", function() { return useForkedRef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useIsomorphicLayoutEffect", function() { return useIsomorphicLayoutEffect; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "usePrevious", function() { return usePrevious; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useStateLogger", function() { return useStateLogger; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useUpdateEffect", function() { return useUpdateEffect; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "wrapEvent", function() { return wrapEvent; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var warning__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! warning */ "./node_modules/warning/warning.js");
/* harmony import */ var warning__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(warning__WEBPACK_IMPORTED_MODULE_1__);
/* harmony reexport (default from non-harmony) */ __webpack_require__.d(__webpack_exports__, "warning", function() { return warning__WEBPACK_IMPORTED_MODULE_1___default.a; });




/* eslint-disable no-restricted-globals, eqeqeq,  */
/**
 * React currently throws a warning when using useLayoutEffect on the server.
 * To get around it, we can conditionally useEffect on the server (no-op) and
 * useLayoutEffect in the browser. We occasionally need useLayoutEffect to
 * ensure we don't get a render flash for certain operations, but we may also
 * need affected components to render on the server. One example is when setting
 * a component's descendants to retrieve their index values.
 *
 * Important to note that using this hook as an escape hatch will break the
 * eslint dependency warnings unless you rename the import to `useLayoutEffect`.
 * Use sparingly only when the effect won't effect the rendered HTML to avoid
 * any server/client mismatch.
 *
 * If a useLayoutEffect is needed and the result would create a mismatch, it's
 * likely that the component in question shouldn't be rendered on the server at
 * all, so a better approach would be to lazily render those in a parent
 * component after client-side hydration.
 *
 * TODO: We are calling useLayoutEffect in a couple of places that will likely
 * cause some issues for SSR users, whether the warning shows or not. Audit and
 * fix these.
 *
 * https://gist.github.com/gaearon/e7d97cdf38a2907924ea12e4ebdf3c85
 * https://github.com/reduxjs/react-redux/blob/master/src/utils/useIsomorphicLayoutEffect.js
 *
 * @param effect
 * @param deps
 */

var useIsomorphicLayoutEffect = /*#__PURE__*/canUseDOM() ? react__WEBPACK_IMPORTED_MODULE_0___default.a.useLayoutEffect : react__WEBPACK_IMPORTED_MODULE_0___default.a.useEffect;
var checkedPkgs = {};
/**
 * When in dev mode, checks that styles for a given @reach package are loaded.
 *
 * @param packageName Name of the package to check.
 * @example checkStyles("dialog") will check for styles for @reach/dialog
 */
// @ts-ignore

var checkStyles = function checkStyles(packageName) {
  return void packageName;
};

if (true) {
  // In CJS files, process.env.NODE_ENV is stripped from our build, but we need
  // it to prevent style checks from clogging up user logs while testing.
  // This is a workaround until we can tweak the build a bit to accommodate.
  var _ref = typeof process !== "undefined" ? process : {
    env: {
      NODE_ENV: "development"
    }
  },
      env = _ref.env;

  checkStyles = function checkStyles(packageName) {
    // only check once per package
    if (checkedPkgs[packageName]) return;
    checkedPkgs[packageName] = true;

    if (env.NODE_ENV !== "test" && parseInt(window.getComputedStyle(document.body).getPropertyValue("--reach-" + packageName), 10) !== 1) {
      console.warn("@reach/" + packageName + " styles not found. If you are using a bundler like webpack or parcel include this in the entry file of your app before any of your own styles:\n\n    import \"@reach/" + packageName + "/styles.css\";\n\n  Otherwise you'll need to include them some other way:\n\n    <link rel=\"stylesheet\" type=\"text/css\" href=\"node_modules/@reach/" + packageName + "/styles.css\" />\n\n  For more information visit https://ui.reach.tech/styling.\n  ");
    }
  };
}
/**
 * Ponyfill for the global object in some environments.
 *
 * @link https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
 */

var ponyfillGlobal = typeof window != "undefined" && window.Math == Math ? window : typeof self != "undefined" && self.Math == Math ? self :
/*#__PURE__*/
// eslint-disable-next-line no-new-func
Function("return this")();
/**
 * Passes or assigns an arbitrary value to a ref function or object.
 *
 * @param ref
 * @param value
 */

function assignRef(ref, value) {
  if (ref == null) return;

  if (isFunction(ref)) {
    ref(value);
  } else {
    try {
      ref.current = value;
    } catch (error) {
      throw new Error("Cannot assign value \"" + value + "\" to ref \"" + ref + "\"");
    }
  }
}
/**
 * Checks true|"true" vs false|"false"
 *
 * @param value
 */

function boolOrBoolString(value) {
  return value === "true" ? true : isBoolean(value) ? value : false;
}
function canUseDOM() {
  return typeof window !== "undefined" && typeof window.document !== "undefined" && typeof window.document.createElement !== "undefined";
}
/**
 * Type-safe clone element
 *
 * @param element
 * @param props
 * @param children
 */

function cloneValidElement(element, props) {
  for (var _len = arguments.length, children = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    children[_key - 2] = arguments[_key];
  }

  return Object(react__WEBPACK_IMPORTED_MODULE_0__["isValidElement"])(element) ? react__WEBPACK_IMPORTED_MODULE_0__["cloneElement"].apply(void 0, [element, props].concat(children)) : element;
}
function createNamedContext(name, defaultValue) {
  var Ctx = Object(react__WEBPACK_IMPORTED_MODULE_0__["createContext"])(defaultValue);
  Ctx.displayName = name;
  return Ctx;
}
/**
 * This is a hack for sure. The thing is, getting a component to intelligently
 * infer props based on a component or JSX string passed into an `as` prop is
 * kind of a huge pain. Getting it to work and satisfy the constraints of
 * `forwardRef` seems dang near impossible. To avoid needing to do this awkward
 * type song-and-dance every time we want to forward a ref into a component
 * that accepts an `as` prop, we abstract all of that mess to this function for
 * the time time being.
 *
 * TODO: Eventually we should probably just try to get the type defs above
 * working across the board, but ain't nobody got time for that mess!
 *
 * @param Comp
 */

function forwardRefWithAs(comp) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.forwardRef(comp);
}
/**
 * Get the size of the working document minus the scrollbar offset.
 *
 * @param element
 */

function getDocumentDimensions(element) {
  if (!canUseDOM()) return {
    width: 0,
    height: 0
  };
  var doc = element ? getOwnerDocument(element) : document;
  var win = element ? getOwnerWindow(element) : window;
  return {
    width: doc.documentElement.clientWidth || win.innerWidth,
    height: doc.documentElement.clientHeight || win.innerHeight
  };
}
/**
 * Get the scoll position of the global window object relative to a given node.
 *
 * @param element
 */

function getScrollPosition(element) {
  if (!canUseDOM()) return {
    scrollX: 0,
    scrollY: 0
  };
  var win = element ? getOwnerWindow(element) : window;
  return {
    scrollX: win.scrollX,
    scrollY: win.scrollY
  };
}
/**
 * Get a computed style value by property, backwards compatible with IE
 * @param element
 * @param styleProp
 */

function getElementComputedStyle(element, styleProp) {
  var y = null;
  var doc = getOwnerDocument(element);

  if (element.currentStyle) {
    y = element.currentStyle[styleProp];
  } else if (doc && doc.defaultView && isFunction(doc.defaultView.getComputedStyle)) {
    y = doc.defaultView.getComputedStyle(element, null).getPropertyValue(styleProp);
  }

  return y;
}
/**
 * Get an element's owner document. Useful when components are used in iframes
 * or other environments like dev tools.
 *
 * @param element
 */

function getOwnerDocument(element) {
  return element && element.ownerDocument ? element.ownerDocument : canUseDOM() ? document : null;
}
function getOwnerWindow(element) {
  var doc = element ? getOwnerDocument(element) : null;
  return doc ? doc.defaultView || window : null;
}
/**
 * Get the scrollbar offset distance.
 *
 * TODO: Remove in 1.0 (we used this in public examples)
 */

function getScrollbarOffset() {
  try {
    if (window.innerWidth > document.documentElement.clientWidth) {
      return window.innerWidth - document.documentElement.clientWidth;
    }
  } catch (err) {}

  return 0;
}
/**
 * Checks whether or not a value is a boolean.
 *
 * @param value
 */

function isBoolean(value) {
  return typeof value === "boolean";
}
/**
 * Checks whether or not a value is a function.
 *
 * @param value
 */

function isFunction(value) {
  return !!(value && {}.toString.call(value) == "[object Function]");
}
/**
 * Checks whether or not a value is a number.
 *
 * @param value
 */

function isNumber(value) {
  return typeof value === "number";
}
/**
 * Detects right clicks
 *
 * @param nativeEvent
 */

function isRightClick(nativeEvent) {
  return nativeEvent.which === 3 || nativeEvent.button === 2;
}
/**
 * Checks whether or not a value is a string.
 *
 * @param value
 */

function isString(value) {
  return typeof value === "string";
}
/**
 * Joins strings to format IDs for compound components.
 *
 * @param args
 */

function makeId() {
  for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    args[_key2] = arguments[_key2];
  }

  return args.filter(function (val) {
    return val != null;
  }).join("--");
}
/**
 * No-op function.
 */

function noop() {}
/**
 * Convert our state strings for HTML data attributes.
 * No need for a fancy kebab-caser here, we know what our state strings are!
 *
 * @param state
 */

function stateToAttributeString(state) {
  return String(state).replace(/([\s_]+)/g, "-").toLowerCase();
}
/**
 * Check if a component is controlled or uncontrolled and return the correct
 * state value and setter accordingly. If the component state is controlled by
 * the app, the setter is a noop.
 *
 * @param controlPropValue
 * @param defaultValue
 */

function useControlledState(controlPropValue, defaultValue) {
  var isControlled = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(controlPropValue != null);

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(defaultValue),
      valueState = _useState[0],
      setValue = _useState[1];

  var set = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function (n) {
    if (!isControlled.current) {
      setValue(n);
    }
  }, []);
  return [isControlled.current ? controlPropValue : valueState, set];
}
/**
 * Logs a warning in dev mode when a component switches from controlled to
 * uncontrolled, or vice versa
 *
 * A single prop should typically be used to determine whether or not a
 * component is controlled or not.
 *
 * @param controlPropValue
 * @param controlPropName
 * @param componentName
 */

function useControlledSwitchWarning(controlPropValue, controlPropName, componentName) {
  /*
   * Determine whether or not the component is controlled and warn the developer
   * if this changes unexpectedly.
   */
  var isControlled = controlPropValue != null;

  var _useRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(isControlled),
      wasControlled = _useRef.current;

  var effect = noop;

  if (true) {
    effect = function effect() {
       true ? warning__WEBPACK_IMPORTED_MODULE_1___default()(!(!isControlled && wasControlled), "`" + componentName + "` is changing from uncontrolled to be controlled. Reach UI components should not switch from uncontrolled to controlled (or vice versa). Decide between using a controlled or uncontrolled `" + componentName + "` for the lifetime of the component. Check the `" + controlPropName + "` prop.") : undefined;
       true ? warning__WEBPACK_IMPORTED_MODULE_1___default()(!(!isControlled && wasControlled), "`" + componentName + "` is changing from controlled to be uncontrolled. Reach UI components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled `" + componentName + "` for the lifetime of the component. Check the `" + controlPropName + "` prop.") : undefined;
    };
  }

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(effect, [componentName, controlPropName, isControlled]);
}
function useCheckStyles(pkg) {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    return checkStyles(pkg);
  }, []);
}
/**
 * React hook for creating a value exactly once.
 * @see https://github.com/Andarist/use-constant
 */

function useConstant(fn) {
  var ref = react__WEBPACK_IMPORTED_MODULE_0___default.a.useRef();

  if (!ref.current) {
    ref.current = {
      v: fn()
    };
  }

  return ref.current.v;
}
/**
 * @param callback
 */

function useEventCallback(callback) {
  var ref = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(callback);
  useIsomorphicLayoutEffect(function () {
    ref.current = callback;
  });
  return Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function (event) {
    for (var _len3 = arguments.length, args = new Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
      args[_key3 - 1] = arguments[_key3];
    }

    return ref.current.apply(ref, [event].concat(args));
  }, []);
}
/**
 * @param callback
 */

function useCallbackProp(callback) {
  var ref = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(callback);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    ref.current = callback;
  });
  return Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function () {
    return ref.current && ref.current.apply(ref, arguments);
  }, []);
}
/**
 * Adds a DOM event listener
 *
 * @param eventName
 * @param listener
 * @param element
 */

function useEventListener(eventName, listener, element) {
  if (element === void 0) {
    element = window;
  }

  var savedHandler = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(listener);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    savedHandler.current = listener;
  }, [listener]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    var isSupported = element && element.addEventListener;

    if (!isSupported) {
      if (true) {
        console.warn("Event listener not supported on the element provided");
      }

      return;
    }

    function eventListener(event) {
      savedHandler.current(event);
    }

    element.addEventListener(eventName, eventListener);
    return function () {
      element.removeEventListener(eventName, eventListener);
    };
  }, [eventName, element]);
}
/**
 * Detect when focus changes in our document.
 *
 * @param handleChange
 * @param when
 * @param ownerDocument
 */

function useFocusChange(handleChange, when, ownerDocument) {
  if (handleChange === void 0) {
    handleChange = console.log;
  }

  if (when === void 0) {
    when = "focus";
  }

  if (ownerDocument === void 0) {
    ownerDocument = document;
  }

  var lastActiveElement = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(ownerDocument.activeElement);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    lastActiveElement.current = ownerDocument.activeElement;

    function onChange(event) {
      if (lastActiveElement.current !== ownerDocument.activeElement) {
        handleChange(ownerDocument.activeElement, lastActiveElement.current, event);
        lastActiveElement.current = ownerDocument.activeElement;
      }
    }

    ownerDocument.addEventListener(when, onChange, true);
    return function () {
      ownerDocument.removeEventListener(when, onChange);
    };
  }, [when, handleChange, ownerDocument]);
}
/**
 * Passes or assigns a value to multiple refs (typically a DOM node). Useful for
 * dealing with components that need an explicit ref for DOM calculations but
 * also forwards refs assigned by an app.
 *
 * @param refs Refs to fork
 */

function useForkedRef() {
  for (var _len4 = arguments.length, refs = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
    refs[_key4] = arguments[_key4];
  }

  return Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(function () {
    if (refs.every(function (ref) {
      return ref == null;
    })) {
      return null;
    }

    return function (node) {
      refs.forEach(function (ref) {
        assignRef(ref, node);
      });
    }; // eslint-disable-next-line react-hooks/exhaustive-deps
  }, refs);
}
/**
 * Returns the previous value of a reference after a component update.
 *
 * @param value
 */

function usePrevious(value) {
  var ref = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    ref.current = value;
  }, [value]);
  return ref.current;
}
/**
 * Call an effect after a component update, skipping the initial mount.
 *
 * @param effect Effect to call
 * @param deps Effect dependency list
 */

function useUpdateEffect(effect, deps) {
  var mounted = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(false);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    if (mounted.current) {
      effect();
    } else {
      mounted.current = true;
    } // eslint-disable-next-line react-hooks/exhaustive-deps

  }, deps);
}
/**
 * Just a lil state logger
 *
 * @param state
 * @param DEBUG
 */

function useStateLogger(state, DEBUG) {
  if (DEBUG === void 0) {
    DEBUG = false;
  }

  var effect = noop;

  if (true) {
    if (DEBUG) {
      effect = function effect() {
        console.group("State Updated");
        console.log("%c" + state, "font-weight: normal; font-size: 120%; font-style: italic;");
        console.groupEnd();
      };
    }
  }

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(effect, [state]);
}
/**
 * Wraps a lib-defined event handler and a user-defined event handler, returning
 * a single handler that allows a user to prevent lib-defined handlers from
 * firing.
 *
 * @param theirHandler User-supplied event handler
 * @param ourHandler Library-supplied event handler
 */

function wrapEvent(theirHandler, ourHandler) {
  return function (event) {
    theirHandler && theirHandler(event);

    if (!event.defaultPrevented) {
      return ourHandler(event);
    }
  };
}


//# sourceMappingURL=utils.esm.js.map

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ "./node_modules/@reach/visually-hidden/dist/visually-hidden.esm.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@reach/visually-hidden/dist/visually-hidden.esm.js ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


/**
 * Welcome to @reach/visually-hidden!
 *
 * Provides text for screen readers that is visually hidden.
 * It is the logical opposite of the `aria-hidden` attribute.
 *
 * @see https://snook.ca/archives/html_and_css/hiding-content-for-accessibility
 * @see https://a11yproject.com/posts/how-to-hide-content/
 * @see Docs     https://reacttraining.com/reach-ui/visually-hidden
 * @see Source   https://github.com/reach/reach-ui/tree/master/packages/visually-hidden
 */
/**
 * VisuallyHidden
 *
 * Provides text for screen readers that is visually hidden.
 * It is the logical opposite of the `aria-hidden` attribute.
 */

var VisuallyHidden = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function VisuallyHidden(props, ref) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", Object.assign({
    ref: ref,
    style: {
      border: 0,
      clip: "rect(0 0 0 0)",
      height: "1px",
      margin: "-1px",
      overflow: "hidden",
      padding: 0,
      position: "absolute",
      width: "1px",
      // https://medium.com/@jessebeach/beware-smushed-off-screen-accessible-text-5952a4c2cbfe
      whiteSpace: "nowrap",
      wordWrap: "normal"
    }
  }, props));
});

if (true) {
  VisuallyHidden.displayName = "VisuallyHidden";
}

/* harmony default export */ __webpack_exports__["default"] = (VisuallyHidden);
//# sourceMappingURL=visually-hidden.esm.js.map


/***/ }),

/***/ "./node_modules/detect-node/browser.js":
/*!*********************************************!*\
  !*** ./node_modules/detect-node/browser.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = false;



/***/ }),

/***/ "./node_modules/focus-lock/dist/es2015/constants.js":
/*!**********************************************************!*\
  !*** ./node_modules/focus-lock/dist/es2015/constants.js ***!
  \**********************************************************/
/*! exports provided: FOCUS_GROUP, FOCUS_DISABLED, FOCUS_ALLOW, FOCUS_AUTO */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FOCUS_GROUP", function() { return FOCUS_GROUP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FOCUS_DISABLED", function() { return FOCUS_DISABLED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FOCUS_ALLOW", function() { return FOCUS_ALLOW; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FOCUS_AUTO", function() { return FOCUS_AUTO; });
var FOCUS_GROUP = 'data-focus-lock';
var FOCUS_DISABLED = 'data-focus-lock-disabled';
var FOCUS_ALLOW = 'data-no-focus-lock';
var FOCUS_AUTO = 'data-autofocus-inside';

/***/ }),

/***/ "./node_modules/focus-lock/dist/es2015/focusInside.js":
/*!************************************************************!*\
  !*** ./node_modules/focus-lock/dist/es2015/focusInside.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_all_affected__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/all-affected */ "./node_modules/focus-lock/dist/es2015/utils/all-affected.js");
/* harmony import */ var _utils_array__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/array */ "./node_modules/focus-lock/dist/es2015/utils/array.js");



var focusInFrame = function focusInFrame(frame) {
  return frame === document.activeElement;
};

var focusInsideIframe = function focusInsideIframe(topNode) {
  return !!Object(_utils_array__WEBPACK_IMPORTED_MODULE_1__["arrayFind"])(Object(_utils_array__WEBPACK_IMPORTED_MODULE_1__["toArray"])(topNode.querySelectorAll('iframe')), focusInFrame);
};

var focusInside = function focusInside(topNode) {
  var activeElement = document && document.activeElement;

  if (!activeElement || activeElement.dataset && activeElement.dataset.focusGuard) {
    return false;
  }
  return Object(_utils_all_affected__WEBPACK_IMPORTED_MODULE_0__["default"])(topNode).reduce(function (result, node) {
    return result || node.contains(activeElement) || focusInsideIframe(node);
  }, false);
};

/* harmony default export */ __webpack_exports__["default"] = (focusInside);

/***/ }),

/***/ "./node_modules/focus-lock/dist/es2015/focusIsHidden.js":
/*!**************************************************************!*\
  !*** ./node_modules/focus-lock/dist/es2015/focusIsHidden.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_array__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/array */ "./node_modules/focus-lock/dist/es2015/utils/array.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants */ "./node_modules/focus-lock/dist/es2015/constants.js");



var focusIsHidden = function focusIsHidden() {
  return document && Object(_utils_array__WEBPACK_IMPORTED_MODULE_0__["toArray"])(document.querySelectorAll('[' + _constants__WEBPACK_IMPORTED_MODULE_1__["FOCUS_ALLOW"] + ']')).some(function (node) {
    return node.contains(document.activeElement);
  });
};

/* harmony default export */ __webpack_exports__["default"] = (focusIsHidden);

/***/ }),

/***/ "./node_modules/focus-lock/dist/es2015/focusMerge.js":
/*!***********************************************************!*\
  !*** ./node_modules/focus-lock/dist/es2015/focusMerge.js ***!
  \***********************************************************/
/*! exports provided: newFocus, getFocusabledIn, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "newFocus", function() { return newFocus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFocusabledIn", function() { return getFocusabledIn; });
/* harmony import */ var _utils_DOMutils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/DOMutils */ "./node_modules/focus-lock/dist/es2015/utils/DOMutils.js");
/* harmony import */ var _utils_firstFocus__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/firstFocus */ "./node_modules/focus-lock/dist/es2015/utils/firstFocus.js");
/* harmony import */ var _utils_all_affected__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/all-affected */ "./node_modules/focus-lock/dist/es2015/utils/all-affected.js");
/* harmony import */ var _utils_array__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils/array */ "./node_modules/focus-lock/dist/es2015/utils/array.js");





var findAutoFocused = function findAutoFocused(autoFocusables) {
  return function (node) {
    return !!node.autofocus || node.dataset && !!node.dataset.autofocus || autoFocusables.indexOf(node) >= 0;
  };
};

var isGuard = function isGuard(node) {
  return node && node.dataset && node.dataset.focusGuard;
};
var notAGuard = function notAGuard(node) {
  return !isGuard(node);
};

var newFocus = function newFocus(innerNodes, outerNodes, activeElement, lastNode, autoFocused) {
  var cnt = innerNodes.length;
  var firstFocus = innerNodes[0];
  var lastFocus = innerNodes[cnt - 1];
  var isOnGuard = isGuard(activeElement);

  // focus is inside
  if (innerNodes.indexOf(activeElement) >= 0) {
    return undefined;
  }

  var activeIndex = outerNodes.indexOf(activeElement);
  var lastIndex = outerNodes.indexOf(lastNode || activeIndex);
  var lastNodeInside = innerNodes.indexOf(lastNode);
  var indexDiff = activeIndex - lastIndex;
  var firstNodeIndex = outerNodes.indexOf(firstFocus);
  var lastNodeIndex = outerNodes.indexOf(lastFocus);

  var returnFirstNode = Object(_utils_firstFocus__WEBPACK_IMPORTED_MODULE_1__["pickFocusable"])(innerNodes, 0);
  var returnLastNode = Object(_utils_firstFocus__WEBPACK_IMPORTED_MODULE_1__["pickFocusable"])(innerNodes, cnt - 1);

  // new focus
  if (activeIndex === -1 || lastNodeInside === -1) {
    return innerNodes.indexOf(autoFocused && autoFocused.length ? Object(_utils_firstFocus__WEBPACK_IMPORTED_MODULE_1__["default"])(autoFocused) : Object(_utils_firstFocus__WEBPACK_IMPORTED_MODULE_1__["default"])(innerNodes));
  }
  // old focus
  if (!indexDiff && lastNodeInside >= 0) {
    return lastNodeInside;
  }
  // first element
  if (activeIndex <= firstNodeIndex && isOnGuard && Math.abs(indexDiff) > 1) {
    return returnLastNode;
  }
  // last element
  if (activeIndex >= firstNodeIndex && isOnGuard && Math.abs(indexDiff) > 1) {
    return returnFirstNode;
  }
  // jump out, but not on the guard
  if (indexDiff && Math.abs(indexDiff) > 1) {
    return lastNodeInside;
  }
  // focus above lock
  if (activeIndex <= firstNodeIndex) {
    return returnLastNode;
  }
  // focus below lock
  if (activeIndex > lastNodeIndex) {
    return returnFirstNode;
  }
  // index is inside tab order, but outside Lock
  if (indexDiff) {
    if (Math.abs(indexDiff) > 1) {
      return lastNodeInside;
    }
    return (cnt + lastNodeInside + indexDiff) % cnt;
  }
  // do nothing
  return undefined;
};

var getTopCommonParent = function getTopCommonParent(baseActiveElement, leftEntry, rightEntries) {
  var activeElements = Object(_utils_array__WEBPACK_IMPORTED_MODULE_3__["asArray"])(baseActiveElement);
  var leftEntries = Object(_utils_array__WEBPACK_IMPORTED_MODULE_3__["asArray"])(leftEntry);
  var activeElement = activeElements[0];
  var topCommon = null;
  leftEntries.filter(Boolean).forEach(function (entry) {
    topCommon = Object(_utils_DOMutils__WEBPACK_IMPORTED_MODULE_0__["getCommonParent"])(topCommon || entry, entry) || topCommon;
    rightEntries.filter(Boolean).forEach(function (subEntry) {
      var common = Object(_utils_DOMutils__WEBPACK_IMPORTED_MODULE_0__["getCommonParent"])(activeElement, subEntry);
      if (common) {
        if (!topCommon || common.contains(topCommon)) {
          topCommon = common;
        } else {
          topCommon = Object(_utils_DOMutils__WEBPACK_IMPORTED_MODULE_0__["getCommonParent"])(common, topCommon);
        }
      }
    });
  });
  return topCommon;
};

var allParentAutofocusables = function allParentAutofocusables(entries) {
  return entries.reduce(function (acc, node) {
    return acc.concat(Object(_utils_DOMutils__WEBPACK_IMPORTED_MODULE_0__["parentAutofocusables"])(node));
  }, []);
};

var reorderNodes = function reorderNodes(srcNodes, dstNodes) {
  var remap = new Map();
  // no Set(dstNodes) for IE11 :(
  dstNodes.forEach(function (entity) {
    return remap.set(entity.node, entity);
  });
  // remap to dstNodes
  return srcNodes.map(function (node) {
    return remap.get(node);
  }).filter(Boolean);
};

var getFocusabledIn = function getFocusabledIn(topNode) {
  var entries = Object(_utils_all_affected__WEBPACK_IMPORTED_MODULE_2__["default"])(topNode).filter(notAGuard);
  var commonParent = getTopCommonParent(topNode, topNode, entries);
  var outerNodes = Object(_utils_DOMutils__WEBPACK_IMPORTED_MODULE_0__["getTabbableNodes"])([commonParent], true);
  var innerElements = Object(_utils_DOMutils__WEBPACK_IMPORTED_MODULE_0__["getTabbableNodes"])(entries).filter(function (_ref) {
    var node = _ref.node;
    return notAGuard(node);
  }).map(function (_ref2) {
    var node = _ref2.node;
    return node;
  });

  return outerNodes.map(function (_ref3) {
    var node = _ref3.node,
        index = _ref3.index;
    return {
      node: node,
      index: index,
      lockItem: innerElements.indexOf(node) >= 0,
      guard: isGuard(node)
    };
  });
};

var getFocusMerge = function getFocusMerge(topNode, lastNode) {
  var activeElement = document && document.activeElement;
  var entries = Object(_utils_all_affected__WEBPACK_IMPORTED_MODULE_2__["default"])(topNode).filter(notAGuard);

  var commonParent = getTopCommonParent(activeElement || topNode, topNode, entries);

  var innerElements = Object(_utils_DOMutils__WEBPACK_IMPORTED_MODULE_0__["getTabbableNodes"])(entries).filter(function (_ref4) {
    var node = _ref4.node;
    return notAGuard(node);
  });

  if (!innerElements[0]) {
    innerElements = Object(_utils_DOMutils__WEBPACK_IMPORTED_MODULE_0__["getAllTabbableNodes"])(entries).filter(function (_ref5) {
      var node = _ref5.node;
      return notAGuard(node);
    });
    if (!innerElements[0]) {
      return undefined;
    }
  }

  var outerNodes = Object(_utils_DOMutils__WEBPACK_IMPORTED_MODULE_0__["getTabbableNodes"])([commonParent]).map(function (_ref6) {
    var node = _ref6.node;
    return node;
  });
  var orderedInnerElements = reorderNodes(outerNodes, innerElements);
  var innerNodes = orderedInnerElements.map(function (_ref7) {
    var node = _ref7.node;
    return node;
  });

  var newId = newFocus(innerNodes, outerNodes, activeElement, lastNode, innerNodes.filter(findAutoFocused(allParentAutofocusables(entries))));

  if (newId === undefined) {
    return newId;
  }
  return orderedInnerElements[newId];
};

/* harmony default export */ __webpack_exports__["default"] = (getFocusMerge);

/***/ }),

/***/ "./node_modules/focus-lock/dist/es2015/index.js":
/*!******************************************************!*\
  !*** ./node_modules/focus-lock/dist/es2015/index.js ***!
  \******************************************************/
/*! exports provided: tabHook, focusInside, focusIsHidden, focusMerge, getFocusabledIn, constants, getAllAffectedNodes, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tabHook__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tabHook */ "./node_modules/focus-lock/dist/es2015/tabHook.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "tabHook", function() { return _tabHook__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _focusMerge__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./focusMerge */ "./node_modules/focus-lock/dist/es2015/focusMerge.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "focusMerge", function() { return _focusMerge__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getFocusabledIn", function() { return _focusMerge__WEBPACK_IMPORTED_MODULE_1__["getFocusabledIn"]; });

/* harmony import */ var _focusInside__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./focusInside */ "./node_modules/focus-lock/dist/es2015/focusInside.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "focusInside", function() { return _focusInside__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _focusIsHidden__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./focusIsHidden */ "./node_modules/focus-lock/dist/es2015/focusIsHidden.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "focusIsHidden", function() { return _focusIsHidden__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _setFocus__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./setFocus */ "./node_modules/focus-lock/dist/es2015/setFocus.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./constants */ "./node_modules/focus-lock/dist/es2015/constants.js");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "constants", function() { return _constants__WEBPACK_IMPORTED_MODULE_5__; });
/* harmony import */ var _utils_all_affected__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./utils/all-affected */ "./node_modules/focus-lock/dist/es2015/utils/all-affected.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getAllAffectedNodes", function() { return _utils_all_affected__WEBPACK_IMPORTED_MODULE_6__["default"]; });











/* harmony default export */ __webpack_exports__["default"] = (_setFocus__WEBPACK_IMPORTED_MODULE_4__["default"]);

/***/ }),

/***/ "./node_modules/focus-lock/dist/es2015/setFocus.js":
/*!*********************************************************!*\
  !*** ./node_modules/focus-lock/dist/es2015/setFocus.js ***!
  \*********************************************************/
/*! exports provided: focusOn, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "focusOn", function() { return focusOn; });
/* harmony import */ var _focusMerge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./focusMerge */ "./node_modules/focus-lock/dist/es2015/focusMerge.js");


var focusOn = function focusOn(target) {
  target.focus();
  if (target.contentWindow) {
    target.contentWindow.focus();
  }
};

var guardCount = 0;
var lockDisabled = false;

/* harmony default export */ __webpack_exports__["default"] = (function (topNode, lastNode) {
  var focusable = Object(_focusMerge__WEBPACK_IMPORTED_MODULE_0__["default"])(topNode, lastNode);

  if (lockDisabled) {
    return;
  }

  if (focusable) {
    if (guardCount > 2) {
      // eslint-disable-next-line no-console
      console.error('FocusLock: focus-fighting detected. Only one focus management system could be active. ' + 'See https://github.com/theKashey/focus-lock/#focus-fighting');
      lockDisabled = true;
      setTimeout(function () {
        lockDisabled = false;
      }, 1);
      return;
    }
    guardCount++;
    focusOn(focusable.node);
    guardCount--;
  }
});

/***/ }),

/***/ "./node_modules/focus-lock/dist/es2015/tabHook.js":
/*!********************************************************!*\
  !*** ./node_modules/focus-lock/dist/es2015/tabHook.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  attach: function attach() {},
  detach: function detach() {}
});

/***/ }),

/***/ "./node_modules/focus-lock/dist/es2015/utils/DOMutils.js":
/*!***************************************************************!*\
  !*** ./node_modules/focus-lock/dist/es2015/utils/DOMutils.js ***!
  \***************************************************************/
/*! exports provided: isVisible, notHiddenInput, getCommonParent, filterFocusable, getTabbableNodes, getAllTabbableNodes, parentAutofocusables */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isVisible", function() { return isVisible; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "notHiddenInput", function() { return notHiddenInput; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCommonParent", function() { return getCommonParent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "filterFocusable", function() { return filterFocusable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTabbableNodes", function() { return getTabbableNodes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAllTabbableNodes", function() { return getAllTabbableNodes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parentAutofocusables", function() { return parentAutofocusables; });
/* harmony import */ var _tabOrder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tabOrder */ "./node_modules/focus-lock/dist/es2015/utils/tabOrder.js");
/* harmony import */ var _tabUtils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tabUtils */ "./node_modules/focus-lock/dist/es2015/utils/tabUtils.js");
/* harmony import */ var _array__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./array */ "./node_modules/focus-lock/dist/es2015/utils/array.js");




var isElementHidden = function isElementHidden(computedStyle) {
  if (!computedStyle || !computedStyle.getPropertyValue) {
    return false;
  }
  return computedStyle.getPropertyValue('display') === 'none' || computedStyle.getPropertyValue('visibility') === 'hidden';
};

var isVisible = function isVisible(node) {
  return !node || node === document || node.nodeType === Node.DOCUMENT_NODE || !isElementHidden(window.getComputedStyle(node, null)) && isVisible(node.parentNode);
};

var notHiddenInput = function notHiddenInput(node) {
  return !((node.tagName === 'INPUT' || node.tagName === 'BUTTON') && (node.type === 'hidden' || node.disabled));
};

var getParents = function getParents(node) {
  var parents = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

  parents.push(node);
  if (node.parentNode) {
    getParents(node.parentNode, parents);
  }
  return parents;
};

var getCommonParent = function getCommonParent(nodea, nodeb) {
  var parentsA = getParents(nodea);
  var parentsB = getParents(nodeb);

  for (var i = 0; i < parentsA.length; i += 1) {
    var currentParent = parentsA[i];
    if (parentsB.indexOf(currentParent) >= 0) {
      return currentParent;
    }
  }
  return false;
};

var filterFocusable = function filterFocusable(nodes) {
  return Object(_array__WEBPACK_IMPORTED_MODULE_2__["toArray"])(nodes).filter(function (node) {
    return isVisible(node);
  }).filter(function (node) {
    return notHiddenInput(node);
  });
};

var getTabbableNodes = function getTabbableNodes(topNodes, withGuards) {
  return Object(_tabOrder__WEBPACK_IMPORTED_MODULE_0__["orderByTabIndex"])(filterFocusable(Object(_tabUtils__WEBPACK_IMPORTED_MODULE_1__["getFocusables"])(topNodes, withGuards)), true, withGuards);
};

var getAllTabbableNodes = function getAllTabbableNodes(topNodes) {
  return Object(_tabOrder__WEBPACK_IMPORTED_MODULE_0__["orderByTabIndex"])(filterFocusable(Object(_tabUtils__WEBPACK_IMPORTED_MODULE_1__["getFocusables"])(topNodes)), false);
};

var parentAutofocusables = function parentAutofocusables(topNode) {
  return filterFocusable(Object(_tabUtils__WEBPACK_IMPORTED_MODULE_1__["getParentAutofocusables"])(topNode));
};

/***/ }),

/***/ "./node_modules/focus-lock/dist/es2015/utils/all-affected.js":
/*!*******************************************************************!*\
  !*** ./node_modules/focus-lock/dist/es2015/utils/all-affected.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants */ "./node_modules/focus-lock/dist/es2015/constants.js");
/* harmony import */ var _array__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./array */ "./node_modules/focus-lock/dist/es2015/utils/array.js");
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };




var filterNested = function filterNested(nodes) {
  var l = nodes.length;
  for (var i = 0; i < l; i += 1) {
    var _loop = function _loop(j) {
      if (i !== j) {
        if (nodes[i].contains(nodes[j])) {
          return {
            v: filterNested(nodes.filter(function (x) {
              return x !== nodes[j];
            }))
          };
        }
      }
    };

    for (var j = 0; j < l; j += 1) {
      var _ret = _loop(j);

      if ((typeof _ret === 'undefined' ? 'undefined' : _typeof(_ret)) === "object") return _ret.v;
    }
  }
  return nodes;
};

var getTopParent = function getTopParent(node) {
  return node.parentNode ? getTopParent(node.parentNode) : node;
};

var getAllAffectedNodes = function getAllAffectedNodes(node) {
  var nodes = Object(_array__WEBPACK_IMPORTED_MODULE_1__["asArray"])(node);
  return nodes.filter(Boolean).reduce(function (acc, currentNode) {
    var group = currentNode.getAttribute(_constants__WEBPACK_IMPORTED_MODULE_0__["FOCUS_GROUP"]);
    acc.push.apply(acc, group ? filterNested(Object(_array__WEBPACK_IMPORTED_MODULE_1__["toArray"])(getTopParent(currentNode).querySelectorAll('[' + _constants__WEBPACK_IMPORTED_MODULE_0__["FOCUS_GROUP"] + '="' + group + '"]:not([' + _constants__WEBPACK_IMPORTED_MODULE_0__["FOCUS_DISABLED"] + '="disabled"])'))) : [currentNode]);
    return acc;
  }, []);
};

/* harmony default export */ __webpack_exports__["default"] = (getAllAffectedNodes);

/***/ }),

/***/ "./node_modules/focus-lock/dist/es2015/utils/array.js":
/*!************************************************************!*\
  !*** ./node_modules/focus-lock/dist/es2015/utils/array.js ***!
  \************************************************************/
/*! exports provided: toArray, arrayFind, asArray */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toArray", function() { return toArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "arrayFind", function() { return arrayFind; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "asArray", function() { return asArray; });
var toArray = function toArray(a) {
  var ret = Array(a.length);
  for (var i = 0; i < a.length; ++i) {
    ret[i] = a[i];
  }
  return ret;
};

var arrayFind = function arrayFind(array, search) {
  return array.filter(function (a) {
    return a === search;
  })[0];
};

var asArray = function asArray(a) {
  return Array.isArray(a) ? a : [a];
};

/***/ }),

/***/ "./node_modules/focus-lock/dist/es2015/utils/firstFocus.js":
/*!*****************************************************************!*\
  !*** ./node_modules/focus-lock/dist/es2015/utils/firstFocus.js ***!
  \*****************************************************************/
/*! exports provided: pickFocusable, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pickFocusable", function() { return pickFocusable; });
var isRadio = function isRadio(node) {
  return node.tagName === 'INPUT' && node.type === 'radio';
};

var findSelectedRadio = function findSelectedRadio(node, nodes) {
  return nodes.filter(isRadio).filter(function (el) {
    return el.name === node.name;
  }).filter(function (el) {
    return el.checked;
  })[0] || node;
};

var pickFirstFocus = function pickFirstFocus(nodes) {
  if (nodes[0] && nodes.length > 1) {
    if (isRadio(nodes[0]) && nodes[0].name) {
      return findSelectedRadio(nodes[0], nodes);
    }
  }
  return nodes[0];
};

var pickFocusable = function pickFocusable(nodes, index) {
  if (nodes.length > 1) {
    if (isRadio(nodes[index]) && nodes[index].name) {
      return nodes.indexOf(findSelectedRadio(nodes[index], nodes));
    }
  }
  return index;
};

/* harmony default export */ __webpack_exports__["default"] = (pickFirstFocus);

/***/ }),

/***/ "./node_modules/focus-lock/dist/es2015/utils/tabOrder.js":
/*!***************************************************************!*\
  !*** ./node_modules/focus-lock/dist/es2015/utils/tabOrder.js ***!
  \***************************************************************/
/*! exports provided: tabSort, orderByTabIndex */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tabSort", function() { return tabSort; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "orderByTabIndex", function() { return orderByTabIndex; });
/* harmony import */ var _array__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./array */ "./node_modules/focus-lock/dist/es2015/utils/array.js");


var tabSort = function tabSort(a, b) {
  var tabDiff = a.tabIndex - b.tabIndex;
  var indexDiff = a.index - b.index;

  if (tabDiff) {
    if (!a.tabIndex) return 1;
    if (!b.tabIndex) return -1;
  }

  return tabDiff || indexDiff;
};

var orderByTabIndex = function orderByTabIndex(nodes, filterNegative, keepGuards) {
  return Object(_array__WEBPACK_IMPORTED_MODULE_0__["toArray"])(nodes).map(function (node, index) {
    return {
      node: node,
      index: index,
      tabIndex: keepGuards && node.tabIndex === -1 ? (node.dataset || {}).focusGuard ? 0 : -1 : node.tabIndex
    };
  }).filter(function (data) {
    return !filterNegative || data.tabIndex >= 0;
  }).sort(tabSort);
};

/***/ }),

/***/ "./node_modules/focus-lock/dist/es2015/utils/tabUtils.js":
/*!***************************************************************!*\
  !*** ./node_modules/focus-lock/dist/es2015/utils/tabUtils.js ***!
  \***************************************************************/
/*! exports provided: getFocusables, getParentAutofocusables */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFocusables", function() { return getFocusables; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getParentAutofocusables", function() { return getParentAutofocusables; });
/* harmony import */ var _tabbables__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tabbables */ "./node_modules/focus-lock/dist/es2015/utils/tabbables.js");
/* harmony import */ var _array__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./array */ "./node_modules/focus-lock/dist/es2015/utils/array.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constants */ "./node_modules/focus-lock/dist/es2015/constants.js");




var queryTabbables = _tabbables__WEBPACK_IMPORTED_MODULE_0__["default"].join(',');
var queryGuardTabbables = queryTabbables + ', [data-focus-guard]';

var getFocusables = function getFocusables(parents, withGuards) {
  return parents.reduce(function (acc, parent) {
    return acc.concat(
    // add all tabbables inside
    Object(_array__WEBPACK_IMPORTED_MODULE_1__["toArray"])(parent.querySelectorAll(withGuards ? queryGuardTabbables : queryTabbables)),
    // add if node is tabble itself
    parent.parentNode ? Object(_array__WEBPACK_IMPORTED_MODULE_1__["toArray"])(parent.parentNode.querySelectorAll(_tabbables__WEBPACK_IMPORTED_MODULE_0__["default"].join(','))).filter(function (node) {
      return node === parent;
    }) : []);
  }, []);
};

var getParentAutofocusables = function getParentAutofocusables(parent) {
  var parentFocus = parent.querySelectorAll('[' + _constants__WEBPACK_IMPORTED_MODULE_2__["FOCUS_AUTO"] + ']');
  return Object(_array__WEBPACK_IMPORTED_MODULE_1__["toArray"])(parentFocus).map(function (node) {
    return getFocusables([node]);
  }).reduce(function (acc, nodes) {
    return acc.concat(nodes);
  }, []);
};

/***/ }),

/***/ "./node_modules/focus-lock/dist/es2015/utils/tabbables.js":
/*!****************************************************************!*\
  !*** ./node_modules/focus-lock/dist/es2015/utils/tabbables.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (['button:enabled:not([readonly])', 'select:enabled:not([readonly])', 'textarea:enabled:not([readonly])', 'input:enabled:not([readonly])', 'a[href]', 'area[href]', 'iframe', 'object', 'embed', '[tabindex]', '[contenteditable]', '[autofocus]']);

/***/ }),

/***/ "./node_modules/get-nonce/dist/es2015/index.js":
/*!*****************************************************!*\
  !*** ./node_modules/get-nonce/dist/es2015/index.js ***!
  \*****************************************************/
/*! exports provided: setNonce, getNonce */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setNonce", function() { return setNonce; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getNonce", function() { return getNonce; });
var currentNonce;
var setNonce = function (nonce) {
    currentNonce = nonce;
};
var getNonce = function () {
    if (currentNonce) {
        return currentNonce;
    }
    if (true) {
        return __webpack_require__.nc;
    }
    return undefined;
};


/***/ }),

/***/ "./node_modules/gotrue-js/lib/admin.js":
/*!*********************************************!*\
  !*** ./node_modules/gotrue-js/lib/admin.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Admin = function () {
  function Admin(user) {
    _classCallCheck(this, Admin);

    this.user = user;
  }

  // Return a list of all users in an audience


  _createClass(Admin, [{
    key: "listUsers",
    value: function listUsers(aud) {
      return this.user._request("/admin/users", {
        method: "GET",
        audience: aud
      });
    }
  }, {
    key: "getUser",
    value: function getUser(user) {
      return this.user._request("/admin/users/" + user.id);
    }
  }, {
    key: "updateUser",
    value: function updateUser(user) {
      var attributes = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      return this.user._request("/admin/users/" + user.id, {
        method: "PUT",
        body: JSON.stringify(attributes)
      });
    }
  }, {
    key: "createUser",
    value: function createUser(email, password) {
      var attributes = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

      attributes.email = email;
      attributes.password = password;
      return this.user._request("/admin/users", {
        method: "POST",
        body: JSON.stringify(attributes)
      });
    }
  }, {
    key: "deleteUser",
    value: function deleteUser(user) {
      return this.user._request("/admin/users/" + user.id, {
        method: "DELETE"
      });
    }
  }]);

  return Admin;
}();

exports.default = Admin;

/***/ }),

/***/ "./node_modules/gotrue-js/lib/index.js":
/*!*********************************************!*\
  !*** ./node_modules/gotrue-js/lib/index.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _microApiClient = __webpack_require__(/*! micro-api-client */ "./node_modules/micro-api-client/lib/index.js");

var _microApiClient2 = _interopRequireDefault(_microApiClient);

var _user = __webpack_require__(/*! ./user */ "./node_modules/gotrue-js/lib/user.js");

var _user2 = _interopRequireDefault(_user);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var HTTPRegexp = /^http:\/\//;
var defaultApiURL = "/.netlify/identity";

var GoTrue = function () {
  function GoTrue() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        _ref$APIUrl = _ref.APIUrl,
        APIUrl = _ref$APIUrl === undefined ? defaultApiURL : _ref$APIUrl,
        _ref$audience = _ref.audience,
        audience = _ref$audience === undefined ? "" : _ref$audience,
        _ref$setCookie = _ref.setCookie,
        setCookie = _ref$setCookie === undefined ? false : _ref$setCookie;

    _classCallCheck(this, GoTrue);

    if (APIUrl.match(HTTPRegexp)) {
      console.warn("Warning:\n\nDO NOT USE HTTP IN PRODUCTION FOR GOTRUE EVER!\nGoTrue REQUIRES HTTPS to work securely.");
    }

    if (audience) {
      this.audience = audience;
    }

    this.setCookie = setCookie;

    this.api = new _microApiClient2.default(APIUrl);
  }

  _createClass(GoTrue, [{
    key: "_request",
    value: function _request(path) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      options.headers = options.headers || {};
      var aud = options.audience || this.audience;
      if (aud) {
        options.headers["X-JWT-AUD"] = aud;
      }
      return this.api.request(path, options).catch(function (err) {
        if (err instanceof _microApiClient.JSONHTTPError && err.json) {
          if (err.json.msg) {
            err.message = err.json.msg;
          } else if (err.json.error) {
            err.message = err.json.error + ": " + err.json.error_description;
          }
        }
        return Promise.reject(err);
      });
    }
  }, {
    key: "settings",
    value: function settings() {
      return this._request("/settings");
    }
  }, {
    key: "signup",
    value: function signup(email, password, data) {
      return this._request("/signup", {
        method: "POST",
        body: JSON.stringify({ email: email, password: password, data: data })
      });
    }
  }, {
    key: "login",
    value: function login(email, password, remember) {
      var _this = this;

      this._setRememberHeaders(remember);
      return this._request("/token", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: "grant_type=password&username=" + encodeURIComponent(email) + "&password=" + encodeURIComponent(password)
      }).then(function (response) {
        _user2.default.removeSavedSession();
        return _this.createUser(response, remember);
      });
    }
  }, {
    key: "loginExternalUrl",
    value: function loginExternalUrl(provider) {
      return this.api.apiURL + "/authorize?provider=" + provider;
    }
  }, {
    key: "confirm",
    value: function confirm(token, remember) {
      this._setRememberHeaders(remember);
      return this.verify("signup", token, remember);
    }
  }, {
    key: "requestPasswordRecovery",
    value: function requestPasswordRecovery(email) {
      return this._request("/recover", {
        method: "POST",
        body: JSON.stringify({ email: email })
      });
    }
  }, {
    key: "recover",
    value: function recover(token, remember) {
      this._setRememberHeaders(remember);
      return this.verify("recovery", token, remember);
    }
  }, {
    key: "acceptInvite",
    value: function acceptInvite(token, password, remember) {
      var _this2 = this;

      this._setRememberHeaders(remember);
      return this._request("/verify", {
        method: "POST",
        body: JSON.stringify({ token: token, password: password, type: "signup" })
      }).then(function (response) {
        return _this2.createUser(response, remember);
      });
    }
  }, {
    key: "acceptInviteExternalUrl",
    value: function acceptInviteExternalUrl(provider, token) {
      return this.api.apiURL + "/authorize?provider=" + provider + "&invite_token=" + token;
    }
  }, {
    key: "createUser",
    value: function createUser(tokenResponse) {
      var remember = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

      this._setRememberHeaders(remember);
      var user = new _user2.default(this.api, tokenResponse, this.audience);
      return user.getUserData().then(function (user) {
        if (remember) {
          user._saveSession();
        }
        return user;
      });
    }
  }, {
    key: "currentUser",
    value: function currentUser() {
      var user = _user2.default.recoverSession(this.api);
      user && this._setRememberHeaders(user._fromStorage);
      return user;
    }
  }, {
    key: "verify",
    value: function verify(type, token, remember) {
      var _this3 = this;

      this._setRememberHeaders(remember);
      return this._request("/verify", {
        method: "POST",
        body: JSON.stringify({ token: token, type: type })
      }).then(function (response) {
        return _this3.createUser(response, remember);
      });
    }
  }, {
    key: "_setRememberHeaders",
    value: function _setRememberHeaders(remember) {
      if (this.setCookie) {
        this.api.defaultHeaders = this.api.defaultHeaders || {};
        this.api.defaultHeaders["X-Use-Cookie"] = remember ? "1" : "session";
      }
    }
  }]);

  return GoTrue;
}();

exports.default = GoTrue;


if (typeof window !== "undefined") {
  window.GoTrue = GoTrue;
}

/***/ }),

/***/ "./node_modules/gotrue-js/lib/user.js":
/*!********************************************!*\
  !*** ./node_modules/gotrue-js/lib/user.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _microApiClient = __webpack_require__(/*! micro-api-client */ "./node_modules/micro-api-client/lib/index.js");

var _microApiClient2 = _interopRequireDefault(_microApiClient);

var _admin = __webpack_require__(/*! ./admin */ "./node_modules/gotrue-js/lib/admin.js");

var _admin2 = _interopRequireDefault(_admin);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ExpiryMargin = 60 * 1000;
var storageKey = "gotrue.user";
var refreshPromises = {};
var currentUser = null;
var forbiddenUpdateAttributes = { api: 1, token: 1, audience: 1, url: 1 };
var forbiddenSaveAttributes = { api: 1 };
var isBrowser = function isBrowser() {
  return typeof window !== "undefined";
};

var User = function () {
  function User(api, tokenResponse, audience) {
    _classCallCheck(this, User);

    this.api = api;
    this.url = api.apiURL;
    this.audience = audience;
    this._processTokenResponse(tokenResponse);
    currentUser = this;
  }

  _createClass(User, [{
    key: "update",
    value: function update(attributes) {
      var _this = this;

      return this._request("/user", {
        method: "PUT",
        body: JSON.stringify(attributes)
      }).then(function (response) {
        return _this._saveUserData(response)._refreshSavedSession();
      });
    }
  }, {
    key: "jwt",
    value: function jwt(forceRefresh) {
      var _tokenDetails = this.tokenDetails(),
          expires_at = _tokenDetails.expires_at,
          refresh_token = _tokenDetails.refresh_token,
          access_token = _tokenDetails.access_token;

      if (forceRefresh || expires_at - ExpiryMargin < Date.now()) {
        return this._refreshToken(refresh_token);
      }
      return Promise.resolve(access_token);
    }
  }, {
    key: "logout",
    value: function logout() {
      return this._request("/logout", { method: "POST" }).then(this.clearSession.bind(this)).catch(this.clearSession.bind(this));
    }
  }, {
    key: "_refreshToken",
    value: function _refreshToken(refresh_token) {
      var _this2 = this;

      if (refreshPromises[refresh_token]) {
        return refreshPromises[refresh_token];
      }
      return refreshPromises[refresh_token] = this.api.request("/token", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: "grant_type=refresh_token&refresh_token=" + refresh_token
      }).then(function (response) {
        delete refreshPromises[refresh_token];
        _this2._processTokenResponse(response);
        _this2._refreshSavedSession();
        return _this2.token.access_token;
      }).catch(function (error) {
        delete refreshPromises[refresh_token];
        _this2.clearSession();
        return Promise.reject(error);
      });
    }
  }, {
    key: "_request",
    value: function _request(path) {
      var _this3 = this;

      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      options.headers = options.headers || {};

      var aud = options.audience || this.audience;
      if (aud) {
        options.headers["X-JWT-AUD"] = aud;
      }

      return this.jwt().then(function (token) {
        return _this3.api.request(path, _extends({
          headers: Object.assign(options.headers, {
            Authorization: "Bearer " + token
          })
        }, options)).catch(function (err) {
          if (err instanceof _microApiClient.JSONHTTPError && err.json) {
            if (err.json.msg) {
              err.message = err.json.msg;
            } else if (err.json.error) {
              err.message = err.json.error + ": " + err.json.error_description;
            }
          }
          return Promise.reject(err);
        });
      });
    }
  }, {
    key: "getUserData",
    value: function getUserData() {
      return this._request("/user").then(this._saveUserData.bind(this)).then(this._refreshSavedSession.bind(this));
    }
  }, {
    key: "_saveUserData",
    value: function _saveUserData(attributes, fromStorage) {
      for (var key in attributes) {
        if (key in User.prototype || key in forbiddenUpdateAttributes) {
          continue;
        }
        this[key] = attributes[key];
      }
      if (fromStorage) {
        this._fromStorage = true;
      }
      return this;
    }
  }, {
    key: "_processTokenResponse",
    value: function _processTokenResponse(tokenResponse) {
      this.token = tokenResponse;
      var claims = void 0;
      try {
        claims = JSON.parse(urlBase64Decode(tokenResponse.access_token.split(".")[1]));
        this.token.expires_at = claims.exp * 1000;
      } catch (e) {
        console.error(new Error("Gotrue-js: Failed to parse tokenResponse claims: " + JSON.stringify(tokenResponse)));
      }
    }
  }, {
    key: "_refreshSavedSession",
    value: function _refreshSavedSession() {
      // only update saved session if we previously saved something
      if (isBrowser() && localStorage.getItem(storageKey)) {
        this._saveSession();
      }
      return this;
    }
  }, {
    key: "_saveSession",
    value: function _saveSession() {
      isBrowser() && localStorage.setItem(storageKey, JSON.stringify(this._details));
      return this;
    }
  }, {
    key: "tokenDetails",
    value: function tokenDetails() {
      return this.token;
    }
  }, {
    key: "clearSession",
    value: function clearSession() {
      User.removeSavedSession();
      this.token = null;
      currentUser = null;
    }
  }, {
    key: "admin",
    get: function get() {
      return new _admin2.default(this);
    }
  }, {
    key: "_details",
    get: function get() {
      var userCopy = {};
      for (var key in this) {
        if (key in User.prototype || key in forbiddenSaveAttributes) {
          continue;
        }
        userCopy[key] = this[key];
      }
      return userCopy;
    }
  }], [{
    key: "removeSavedSession",
    value: function removeSavedSession() {
      isBrowser() && localStorage.removeItem(storageKey);
    }
  }, {
    key: "recoverSession",
    value: function recoverSession(apiInstance) {
      if (currentUser) {
        return currentUser;
      }

      var json = isBrowser() && localStorage.getItem(storageKey);
      if (json) {
        try {
          var data = JSON.parse(json);
          var url = data.url,
              token = data.token,
              audience = data.audience;

          if (!url || !token) {
            return null;
          }

          var api = apiInstance || new _microApiClient2.default(url, {});
          return new User(api, token, audience)._saveUserData(data, true);
        } catch (ex) {
          console.error(new Error("Gotrue-js: Error recovering session: " + ex));
          return null;
        }
      }

      return null;
    }
  }]);

  return User;
}();

exports.default = User;


function urlBase64Decode(str) {
  // From https://jwt.io/js/jwt.js
  var output = str.replace(/-/g, '+').replace(/_/g, '/');
  switch (output.length % 4) {
    case 0:
      break;
    case 2:
      output += '==';
      break;
    case 3:
      output += '=';
      break;
    default:
      throw 'Illegal base64url string!';
  }
  var result = window.atob(output); //polifyll https://github.com/davidchambers/Base64.js
  try {
    return decodeURIComponent(escape(result));
  } catch (err) {
    return result;
  }
}

/***/ }),

/***/ "./node_modules/micro-api-client/lib/index.js":
/*!****************************************************!*\
  !*** ./node_modules/micro-api-client/lib/index.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.JSONHTTPError = exports.TextHTTPError = exports.HTTPError = exports.getPagination = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _pagination = __webpack_require__(/*! ./pagination */ "./node_modules/micro-api-client/lib/pagination.js");

Object.defineProperty(exports, "getPagination", {
  enumerable: true,
  get: function get() {
    return _pagination.getPagination;
  }
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _extendableBuiltin(cls) {
  function ExtendableBuiltin() {
    var instance = Reflect.construct(cls, Array.from(arguments));
    Object.setPrototypeOf(instance, Object.getPrototypeOf(this));
    return instance;
  }

  ExtendableBuiltin.prototype = Object.create(cls.prototype, {
    constructor: {
      value: cls,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });

  if (Object.setPrototypeOf) {
    Object.setPrototypeOf(ExtendableBuiltin, cls);
  } else {
    ExtendableBuiltin.__proto__ = cls;
  }

  return ExtendableBuiltin;
}

var HTTPError = exports.HTTPError = function (_extendableBuiltin2) {
  _inherits(HTTPError, _extendableBuiltin2);

  function HTTPError(response) {
    _classCallCheck(this, HTTPError);

    var _this = _possibleConstructorReturn(this, (HTTPError.__proto__ || Object.getPrototypeOf(HTTPError)).call(this, response.statusText));

    _this.name = _this.constructor.name;
    if (typeof Error.captureStackTrace === "function") {
      Error.captureStackTrace(_this, _this.constructor);
    } else {
      _this.stack = new Error(response.statusText).stack;
    }
    _this.status = response.status;
    return _this;
  }

  return HTTPError;
}(_extendableBuiltin(Error));

var TextHTTPError = exports.TextHTTPError = function (_HTTPError) {
  _inherits(TextHTTPError, _HTTPError);

  function TextHTTPError(response, data) {
    _classCallCheck(this, TextHTTPError);

    var _this2 = _possibleConstructorReturn(this, (TextHTTPError.__proto__ || Object.getPrototypeOf(TextHTTPError)).call(this, response));

    _this2.data = data;
    return _this2;
  }

  return TextHTTPError;
}(HTTPError);

var JSONHTTPError = exports.JSONHTTPError = function (_HTTPError2) {
  _inherits(JSONHTTPError, _HTTPError2);

  function JSONHTTPError(response, json) {
    _classCallCheck(this, JSONHTTPError);

    var _this3 = _possibleConstructorReturn(this, (JSONHTTPError.__proto__ || Object.getPrototypeOf(JSONHTTPError)).call(this, response));

    _this3.json = json;
    return _this3;
  }

  return JSONHTTPError;
}(HTTPError);

var API = function () {
  function API() {
    var apiURL = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
    var options = arguments[1];

    _classCallCheck(this, API);

    this.apiURL = apiURL;
    if (this.apiURL.match(/\/[^\/]?/)) {
      // eslint-disable-line no-useless-escape
      this._sameOrigin = true;
    }
    this.defaultHeaders = options && options.defaultHeaders || {};
  }

  _createClass(API, [{
    key: "headers",
    value: function headers() {
      var _headers = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      return _extends({}, this.defaultHeaders, {
        "Content-Type": "application/json"
      }, _headers);
    }
  }, {
    key: "parseJsonResponse",
    value: function parseJsonResponse(response) {
      return response.json().then(function (json) {
        if (!response.ok) {
          return Promise.reject(new JSONHTTPError(response, json));
        }

        var pagination = (0, _pagination.getPagination)(response);
        return pagination ? { pagination: pagination, items: json } : json;
      });
    }
  }, {
    key: "request",
    value: function request(path) {
      var _this4 = this;

      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      var headers = this.headers(options.headers || {});
      if (this._sameOrigin) {
        options.credentials = options.credentials || "same-origin";
      }
      return fetch(this.apiURL + path, _extends({}, options, { headers: headers })).then(function (response) {
        var contentType = response.headers.get("Content-Type");
        if (contentType && contentType.match(/json/)) {
          return _this4.parseJsonResponse(response);
        }

        if (!response.ok) {
          return response.text().then(function (data) {
            return Promise.reject(new TextHTTPError(response, data));
          });
        }
        return response.text().then(function (data) {
          data;
        });
      });
    }
  }]);

  return API;
}();

exports.default = API;

/***/ }),

/***/ "./node_modules/micro-api-client/lib/pagination.js":
/*!*********************************************************!*\
  !*** ./node_modules/micro-api-client/lib/pagination.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

exports.getPagination = getPagination;
function getPagination(response) {
  var links = response.headers.get("Link");
  var pagination = {};
  //var link, url, rel, m, page;
  if (links == null) {
    return null;
  }
  links = links.split(",");
  var total = response.headers.get("X-Total-Count");

  for (var i = 0, len = links.length; i < len; i++) {
    var link = links[i].replace(/(^\s*|\s*$)/, "");

    var _link$split = link.split(";"),
        _link$split2 = _slicedToArray(_link$split, 2),
        url = _link$split2[0],
        rel = _link$split2[1];

    var m = url.match(/page=(\d+)/);
    var page = m && parseInt(m[1], 10);
    if (rel.match(/last/)) {
      pagination.last = page;
    } else if (rel.match(/next/)) {
      pagination.next = page;
    } else if (rel.match(/prev/)) {
      pagination.prev = page;
    } else if (rel.match(/first/)) {
      pagination.first = page;
    }
  }

  pagination.last = Math.max(pagination.last || 0, pagination.prev && pagination.prev + 1 || 0);
  pagination.current = pagination.next ? pagination.next - 1 : pagination.last || 1;
  pagination.total = total ? parseInt(total, 10) : null;

  return pagination;
}

/***/ }),

/***/ "./node_modules/react-clientside-effect/lib/index.es.js":
/*!**************************************************************!*\
  !*** ./node_modules/react-clientside-effect/lib/index.es.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);




function withSideEffect(reducePropsToState, handleStateChangeOnClient) {
  if (true) {
    if (typeof reducePropsToState !== 'function') {
      throw new Error('Expected reducePropsToState to be a function.');
    }

    if (typeof handleStateChangeOnClient !== 'function') {
      throw new Error('Expected handleStateChangeOnClient to be a function.');
    }
  }

  function getDisplayName(WrappedComponent) {
    return WrappedComponent.displayName || WrappedComponent.name || 'Component';
  }

  return function wrap(WrappedComponent) {
    if (true) {
      if (typeof WrappedComponent !== 'function') {
        throw new Error('Expected WrappedComponent to be a React component.');
      }
    }

    var mountedInstances = [];
    var state;

    function emitChange() {
      state = reducePropsToState(mountedInstances.map(function (instance) {
        return instance.props;
      }));
      handleStateChangeOnClient(state);
    }

    var SideEffect =
    /*#__PURE__*/
    function (_PureComponent) {
      Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(SideEffect, _PureComponent);

      function SideEffect() {
        return _PureComponent.apply(this, arguments) || this;
      }

      // Try to use displayName of wrapped component
      SideEffect.peek = function peek() {
        return state;
      };

      var _proto = SideEffect.prototype;

      _proto.componentDidMount = function componentDidMount() {
        mountedInstances.push(this);
        emitChange();
      };

      _proto.componentDidUpdate = function componentDidUpdate() {
        emitChange();
      };

      _proto.componentWillUnmount = function componentWillUnmount() {
        var index = mountedInstances.indexOf(this);
        mountedInstances.splice(index, 1);
        emitChange();
      };

      _proto.render = function render() {
        return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(WrappedComponent, this.props);
      };

      return SideEffect;
    }(react__WEBPACK_IMPORTED_MODULE_2__["PureComponent"]);

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(SideEffect, "displayName", "SideEffect(" + getDisplayName(WrappedComponent) + ")");

    return SideEffect;
  };
}

/* harmony default export */ __webpack_exports__["default"] = (withSideEffect);


/***/ }),

/***/ "./node_modules/react-focus-lock/dist/es2015/AutoFocusInside.js":
/*!**********************************************************************!*\
  !*** ./node_modules/react-focus-lock/dist/es2015/AutoFocusInside.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var focus_lock_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! focus-lock/constants */ "./node_modules/focus-lock/dist/es2015/constants.js");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./util */ "./node_modules/react-focus-lock/dist/es2015/util.js");






var AutoFocusInside = function AutoFocusInside(_ref) {
  var disabled = _ref.disabled,
      children = _ref.children,
      className = _ref.className;
  return react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, Object(_util__WEBPACK_IMPORTED_MODULE_4__["inlineProp"])(focus_lock_constants__WEBPACK_IMPORTED_MODULE_3__["FOCUS_AUTO"], !disabled), {
    className: className
  }), children);
};

AutoFocusInside.propTypes =  true ? {
  children: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.node.isRequired,
  disabled: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,
  className: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string
} : undefined;
AutoFocusInside.defaultProps = {
  disabled: false,
  className: undefined
};
/* harmony default export */ __webpack_exports__["default"] = (AutoFocusInside);

/***/ }),

/***/ "./node_modules/react-focus-lock/dist/es2015/Combination.js":
/*!******************************************************************!*\
  !*** ./node_modules/react-focus-lock/dist/es2015/Combination.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Lock__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Lock */ "./node_modules/react-focus-lock/dist/es2015/Lock.js");
/* harmony import */ var _Trap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Trap */ "./node_modules/react-focus-lock/dist/es2015/Trap.js");





/* that would be a BREAKING CHANGE!
// delaying sidecar execution till the first usage
const RequireSideCar = (props) => {
  // eslint-disable-next-line global-require
  const SideCar = require('./Trap').default;
  return <SideCar {...props} />;
};
*/

var FocusLockCombination = react__WEBPACK_IMPORTED_MODULE_2__["forwardRef"](function (props, ref) {
  return react__WEBPACK_IMPORTED_MODULE_2__["createElement"](_Lock__WEBPACK_IMPORTED_MODULE_3__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    sideCar: _Trap__WEBPACK_IMPORTED_MODULE_4__["default"],
    ref: ref
  }, props));
});

var _ref = _Lock__WEBPACK_IMPORTED_MODULE_3__["default"].propTypes || {},
    sideCar = _ref.sideCar,
    propTypes = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref, ["sideCar"]);

FocusLockCombination.propTypes = propTypes;
/* harmony default export */ __webpack_exports__["default"] = (FocusLockCombination);

/***/ }),

/***/ "./node_modules/react-focus-lock/dist/es2015/FocusGuard.js":
/*!*****************************************************************!*\
  !*** ./node_modules/react-focus-lock/dist/es2015/FocusGuard.js ***!
  \*****************************************************************/
/*! exports provided: hiddenGuard, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hiddenGuard", function() { return hiddenGuard; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);


var hiddenGuard = {
  width: '1px',
  height: '0px',
  padding: 0,
  overflow: 'hidden',
  position: 'fixed',
  top: '1px',
  left: '1px'
};

var InFocusGuard = function InFocusGuard(_ref) {
  var children = _ref.children;
  return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    key: "guard-first",
    "data-focus-guard": true,
    "data-focus-auto-guard": true,
    style: hiddenGuard
  }), children, children && react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    key: "guard-last",
    "data-focus-guard": true,
    "data-focus-auto-guard": true,
    style: hiddenGuard
  }));
};

InFocusGuard.propTypes =  true ? {
  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node
} : undefined;
InFocusGuard.defaultProps = {
  children: null
};
/* harmony default export */ __webpack_exports__["default"] = (InFocusGuard);

/***/ }),

/***/ "./node_modules/react-focus-lock/dist/es2015/FreeFocusInside.js":
/*!**********************************************************************!*\
  !*** ./node_modules/react-focus-lock/dist/es2015/FreeFocusInside.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var focus_lock_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! focus-lock/constants */ "./node_modules/focus-lock/dist/es2015/constants.js");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./util */ "./node_modules/react-focus-lock/dist/es2015/util.js");






var FreeFocusInside = function FreeFocusInside(_ref) {
  var children = _ref.children,
      className = _ref.className;
  return react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, Object(_util__WEBPACK_IMPORTED_MODULE_4__["inlineProp"])(focus_lock_constants__WEBPACK_IMPORTED_MODULE_3__["FOCUS_ALLOW"], true), {
    className: className
  }), children);
};

FreeFocusInside.propTypes =  true ? {
  children: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.node.isRequired,
  className: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string
} : undefined;
FreeFocusInside.defaultProps = {
  className: undefined
};
/* harmony default export */ __webpack_exports__["default"] = (FreeFocusInside);

/***/ }),

/***/ "./node_modules/react-focus-lock/dist/es2015/Lock.js":
/*!***********************************************************!*\
  !*** ./node_modules/react-focus-lock/dist/es2015/Lock.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var focus_lock_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! focus-lock/constants */ "./node_modules/focus-lock/dist/es2015/constants.js");
/* harmony import */ var use_callback_ref__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! use-callback-ref */ "./node_modules/use-callback-ref/dist/es2015/index.js");
/* harmony import */ var _FocusGuard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./FocusGuard */ "./node_modules/react-focus-lock/dist/es2015/FocusGuard.js");
/* harmony import */ var _medium__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./medium */ "./node_modules/react-focus-lock/dist/es2015/medium.js");







var emptyArray = [];
var FocusLock = react__WEBPACK_IMPORTED_MODULE_1__["forwardRef"](function (props, parentRef) {
  var _extends2;

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_1__["useState"](),
      realObserved = _React$useState[0],
      setObserved = _React$useState[1];

  var observed = react__WEBPACK_IMPORTED_MODULE_1__["useRef"]();
  var isActive = react__WEBPACK_IMPORTED_MODULE_1__["useRef"](false);
  var originalFocusedElement = react__WEBPACK_IMPORTED_MODULE_1__["useRef"](null);
  var children = props.children,
      disabled = props.disabled,
      noFocusGuards = props.noFocusGuards,
      persistentFocus = props.persistentFocus,
      crossFrame = props.crossFrame,
      autoFocus = props.autoFocus,
      allowTextSelection = props.allowTextSelection,
      group = props.group,
      className = props.className,
      whiteList = props.whiteList,
      _props$shards = props.shards,
      shards = _props$shards === void 0 ? emptyArray : _props$shards,
      _props$as = props.as,
      Container = _props$as === void 0 ? 'div' : _props$as,
      _props$lockProps = props.lockProps,
      containerProps = _props$lockProps === void 0 ? {} : _props$lockProps,
      SideCar = props.sideCar,
      shouldReturnFocus = props.returnFocus,
      onActivationCallback = props.onActivation,
      onDeactivationCallback = props.onDeactivation;

  var _React$useState2 = react__WEBPACK_IMPORTED_MODULE_1__["useState"]({}),
      id = _React$useState2[0]; // SIDE EFFECT CALLBACKS


  var onActivation = react__WEBPACK_IMPORTED_MODULE_1__["useCallback"](function () {
    originalFocusedElement.current = originalFocusedElement.current || document && document.activeElement;

    if (observed.current && onActivationCallback) {
      onActivationCallback(observed.current);
    }

    isActive.current = true;
  }, [onActivationCallback]);
  var onDeactivation = react__WEBPACK_IMPORTED_MODULE_1__["useCallback"](function () {
    isActive.current = false;

    if (onDeactivationCallback) {
      onDeactivationCallback(observed.current);
    }
  }, [onDeactivationCallback]);
  var returnFocus = react__WEBPACK_IMPORTED_MODULE_1__["useCallback"](function (allowDefer) {
    var current = originalFocusedElement.current;

    if (Boolean(shouldReturnFocus) && current && current.focus) {
      var focusOptions = typeof shouldReturnFocus === 'object' ? shouldReturnFocus : undefined;
      originalFocusedElement.current = null;

      if (allowDefer) {
        // React might return focus after update
        // it's safer to defer the action
        Promise.resolve().then(function () {
          return current.focus(focusOptions);
        });
      } else {
        current.focus(focusOptions);
      }
    }
  }, [shouldReturnFocus]); // MEDIUM CALLBACKS

  var onFocus = react__WEBPACK_IMPORTED_MODULE_1__["useCallback"](function (event) {
    if (isActive.current) {
      _medium__WEBPACK_IMPORTED_MODULE_6__["mediumFocus"].useMedium(event);
    }
  }, []);
  var onBlur = _medium__WEBPACK_IMPORTED_MODULE_6__["mediumBlur"].useMedium; // REF PROPAGATION
  // not using real refs due to race conditions

  var setObserveNode = react__WEBPACK_IMPORTED_MODULE_1__["useCallback"](function (newObserved) {
    if (observed.current !== newObserved) {
      observed.current = newObserved;
      setObserved(newObserved);
    }
  }, []);

  if (true) {
    if (typeof allowTextSelection !== 'undefined') {
      // eslint-disable-next-line no-console
      console.warn('React-Focus-Lock: allowTextSelection is deprecated and enabled by default');
    }

    react__WEBPACK_IMPORTED_MODULE_1__["useEffect"](function () {
      if (!observed.current) {
        // eslint-disable-next-line no-console
        console.error('FocusLock: could not obtain ref to internal node');
      }
    }, []);
  }

  var lockProps = Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])((_extends2 = {}, _extends2[focus_lock_constants__WEBPACK_IMPORTED_MODULE_3__["FOCUS_DISABLED"]] = disabled && 'disabled', _extends2[focus_lock_constants__WEBPACK_IMPORTED_MODULE_3__["FOCUS_GROUP"]] = group, _extends2), containerProps);

  var hasLeadingGuards = noFocusGuards !== true;
  var hasTailingGuards = hasLeadingGuards && noFocusGuards !== 'tail';
  var mergedRef = Object(use_callback_ref__WEBPACK_IMPORTED_MODULE_4__["useMergeRefs"])([parentRef, setObserveNode]);
  return react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, hasLeadingGuards && [react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", {
    key: "guard-first",
    "data-focus-guard": true,
    tabIndex: disabled ? -1 : 0,
    style: _FocusGuard__WEBPACK_IMPORTED_MODULE_5__["hiddenGuard"]
  }), // nearest focus guard
  react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", {
    key: "guard-nearest",
    "data-focus-guard": true,
    tabIndex: disabled ? -1 : 1,
    style: _FocusGuard__WEBPACK_IMPORTED_MODULE_5__["hiddenGuard"]
  })], !disabled && react__WEBPACK_IMPORTED_MODULE_1__["createElement"](SideCar, {
    id: id,
    sideCar: _medium__WEBPACK_IMPORTED_MODULE_6__["mediumSidecar"],
    observed: realObserved,
    disabled: disabled,
    persistentFocus: persistentFocus,
    crossFrame: crossFrame,
    autoFocus: autoFocus,
    whiteList: whiteList,
    shards: shards,
    onActivation: onActivation,
    onDeactivation: onDeactivation,
    returnFocus: returnFocus
  }), react__WEBPACK_IMPORTED_MODULE_1__["createElement"](Container, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    ref: mergedRef
  }, lockProps, {
    className: className,
    onBlur: onBlur,
    onFocus: onFocus
  }), children), hasTailingGuards && react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", {
    "data-focus-guard": true,
    tabIndex: disabled ? -1 : 0,
    style: _FocusGuard__WEBPACK_IMPORTED_MODULE_5__["hiddenGuard"]
  }));
});
FocusLock.propTypes =  true ? {
  children: prop_types__WEBPACK_IMPORTED_MODULE_2__["node"],
  disabled: prop_types__WEBPACK_IMPORTED_MODULE_2__["bool"],
  returnFocus: Object(prop_types__WEBPACK_IMPORTED_MODULE_2__["oneOfType"])([prop_types__WEBPACK_IMPORTED_MODULE_2__["bool"], prop_types__WEBPACK_IMPORTED_MODULE_2__["object"]]),
  noFocusGuards: prop_types__WEBPACK_IMPORTED_MODULE_2__["bool"],
  allowTextSelection: prop_types__WEBPACK_IMPORTED_MODULE_2__["bool"],
  autoFocus: prop_types__WEBPACK_IMPORTED_MODULE_2__["bool"],
  persistentFocus: prop_types__WEBPACK_IMPORTED_MODULE_2__["bool"],
  crossFrame: prop_types__WEBPACK_IMPORTED_MODULE_2__["bool"],
  group: prop_types__WEBPACK_IMPORTED_MODULE_2__["string"],
  className: prop_types__WEBPACK_IMPORTED_MODULE_2__["string"],
  whiteList: prop_types__WEBPACK_IMPORTED_MODULE_2__["func"],
  shards: Object(prop_types__WEBPACK_IMPORTED_MODULE_2__["arrayOf"])(prop_types__WEBPACK_IMPORTED_MODULE_2__["any"]),
  as: Object(prop_types__WEBPACK_IMPORTED_MODULE_2__["oneOfType"])([prop_types__WEBPACK_IMPORTED_MODULE_2__["string"], prop_types__WEBPACK_IMPORTED_MODULE_2__["func"], prop_types__WEBPACK_IMPORTED_MODULE_2__["object"]]),
  lockProps: prop_types__WEBPACK_IMPORTED_MODULE_2__["object"],
  onActivation: prop_types__WEBPACK_IMPORTED_MODULE_2__["func"],
  onDeactivation: prop_types__WEBPACK_IMPORTED_MODULE_2__["func"],
  sideCar: prop_types__WEBPACK_IMPORTED_MODULE_2__["any"].isRequired
} : undefined;
FocusLock.defaultProps = {
  children: undefined,
  disabled: false,
  returnFocus: false,
  noFocusGuards: false,
  autoFocus: true,
  persistentFocus: false,
  crossFrame: true,
  allowTextSelection: undefined,
  group: undefined,
  className: undefined,
  whiteList: undefined,
  shards: undefined,
  as: 'div',
  lockProps: {},
  onActivation: undefined,
  onDeactivation: undefined
};
/* harmony default export */ __webpack_exports__["default"] = (FocusLock);

/***/ }),

/***/ "./node_modules/react-focus-lock/dist/es2015/MoveFocusInside.js":
/*!**********************************************************************!*\
  !*** ./node_modules/react-focus-lock/dist/es2015/MoveFocusInside.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var focus_lock_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! focus-lock/constants */ "./node_modules/focus-lock/dist/es2015/constants.js");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./util */ "./node_modules/react-focus-lock/dist/es2015/util.js");
/* harmony import */ var _medium__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./medium */ "./node_modules/react-focus-lock/dist/es2015/medium.js");







function MoveFocusInside(_ref) {
  var isDisabled = _ref.disabled,
      className = _ref.className,
      children = _ref.children;
  var ref = react__WEBPACK_IMPORTED_MODULE_1__["useRef"](null);
  var disabled = react__WEBPACK_IMPORTED_MODULE_1__["useRef"](isDisabled);

  var moveFocus = function moveFocus() {
    var observed = ref.current;
    _medium__WEBPACK_IMPORTED_MODULE_5__["mediumEffect"].useMedium(function (car) {
      if (!disabled.current && observed) {
        if (!car.focusInside(observed)) {
          car.moveFocusInside(observed, null);
        }
      }
    });
  };

  react__WEBPACK_IMPORTED_MODULE_1__["useEffect"](function () {
    disabled.current = isDisabled;
    moveFocus();
  }, [isDisabled]);
  return react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, Object(_util__WEBPACK_IMPORTED_MODULE_4__["inlineProp"])(focus_lock_constants__WEBPACK_IMPORTED_MODULE_3__["FOCUS_AUTO"], !isDisabled), {
    ref: ref,
    className: className
  }), children);
}

MoveFocusInside.propTypes =  true ? {
  children: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.node.isRequired,
  disabled: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,
  className: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string
} : undefined;
MoveFocusInside.defaultProps = {
  disabled: false,
  className: undefined
};
/* harmony default export */ __webpack_exports__["default"] = (MoveFocusInside);

/***/ }),

/***/ "./node_modules/react-focus-lock/dist/es2015/Trap.js":
/*!***********************************************************!*\
  !*** ./node_modules/react-focus-lock/dist/es2015/Trap.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_clientside_effect__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-clientside-effect */ "./node_modules/react-clientside-effect/lib/index.es.js");
/* harmony import */ var focus_lock__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! focus-lock */ "./node_modules/focus-lock/dist/es2015/index.js");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./util */ "./node_modules/react-focus-lock/dist/es2015/util.js");
/* harmony import */ var _medium__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./medium */ "./node_modules/react-focus-lock/dist/es2015/medium.js");







var focusOnBody = function focusOnBody() {
  return document && document.activeElement === document.body;
};

var isFreeFocus = function isFreeFocus() {
  return focusOnBody() || Object(focus_lock__WEBPACK_IMPORTED_MODULE_3__["focusIsHidden"])();
};

var lastActiveTrap = null;
var lastActiveFocus = null;
var lastPortaledElement = null;
var focusWasOutsideWindow = false;

var defaultWhitelist = function defaultWhitelist() {
  return true;
};

var focusWhitelisted = function focusWhitelisted(activeElement) {
  return (lastActiveTrap.whiteList || defaultWhitelist)(activeElement);
};

var recordPortal = function recordPortal(observerNode, portaledElement) {
  lastPortaledElement = {
    observerNode: observerNode,
    portaledElement: portaledElement
  };
};

var focusIsPortaledPair = function focusIsPortaledPair(element) {
  return lastPortaledElement && lastPortaledElement.portaledElement === element;
};

function autoGuard(startIndex, end, step, allNodes) {
  var lastGuard = null;
  var i = startIndex;

  do {
    var item = allNodes[i];

    if (item.guard) {
      if (item.node.dataset.focusAutoGuard) {
        lastGuard = item;
      }
    } else if (item.lockItem) {
      if (i !== startIndex) {
        // we will tab to the next element
        return;
      }

      lastGuard = null;
    } else {
      break;
    }
  } while ((i += step) !== end);

  if (lastGuard) {
    lastGuard.node.tabIndex = 0;
  }
}

var extractRef = function extractRef(ref) {
  return ref && 'current' in ref ? ref.current : ref;
};

var focusWasOutside = function focusWasOutside(crossFrameOption) {
  if (crossFrameOption) {
    // with cross frame return true for any value
    return Boolean(focusWasOutsideWindow);
  } // in other case return only of focus went a while aho


  return focusWasOutsideWindow === "meanwhile";
};

var activateTrap = function activateTrap() {
  var result = false;

  if (lastActiveTrap) {
    var _lastActiveTrap = lastActiveTrap,
        observed = _lastActiveTrap.observed,
        persistentFocus = _lastActiveTrap.persistentFocus,
        autoFocus = _lastActiveTrap.autoFocus,
        shards = _lastActiveTrap.shards,
        crossFrame = _lastActiveTrap.crossFrame;
    var workingNode = observed || lastPortaledElement && lastPortaledElement.portaledElement;
    var activeElement = document && document.activeElement;

    if (workingNode) {
      var workingArea = [workingNode].concat(shards.map(extractRef).filter(Boolean));

      if (!activeElement || focusWhitelisted(activeElement)) {
        if (persistentFocus || focusWasOutside(crossFrame) || !isFreeFocus() || !lastActiveFocus && autoFocus) {
          if (workingNode && !(Object(focus_lock__WEBPACK_IMPORTED_MODULE_3__["focusInside"])(workingArea) || focusIsPortaledPair(activeElement, workingNode))) {
            if (document && !lastActiveFocus && activeElement && !autoFocus) {
              activeElement.blur();
              document.body.focus();
            } else {
              result = Object(focus_lock__WEBPACK_IMPORTED_MODULE_3__["default"])(workingArea, lastActiveFocus);
              lastPortaledElement = {};
            }
          }

          focusWasOutsideWindow = false;
          lastActiveFocus = document && document.activeElement;
        }
      }

      if (document) {
        var newActiveElement = document && document.activeElement;
        var allNodes = Object(focus_lock__WEBPACK_IMPORTED_MODULE_3__["getFocusabledIn"])(workingArea);
        var focusedItem = allNodes.find(function (_ref) {
          var node = _ref.node;
          return node === newActiveElement;
        });

        if (focusedItem) {
          // remove old focus
          allNodes.filter(function (_ref2) {
            var guard = _ref2.guard,
                node = _ref2.node;
            return guard && node.dataset.focusAutoGuard;
          }).forEach(function (_ref3) {
            var node = _ref3.node;
            return node.removeAttribute('tabIndex');
          });
          var focusedIndex = allNodes.indexOf(focusedItem);
          autoGuard(focusedIndex, allNodes.length, +1, allNodes);
          autoGuard(focusedIndex, -1, -1, allNodes);
        }
      }
    }
  }

  return result;
};

var onTrap = function onTrap(event) {
  if (activateTrap() && event) {
    // prevent scroll jump
    event.stopPropagation();
    event.preventDefault();
  }
};

var onBlur = function onBlur() {
  return Object(_util__WEBPACK_IMPORTED_MODULE_4__["deferAction"])(activateTrap);
};

var onFocus = function onFocus(event) {
  // detect portal
  var source = event.target;
  var currentNode = event.currentTarget;

  if (!currentNode.contains(source)) {
    recordPortal(currentNode, source);
  }
};

var FocusWatcher = function FocusWatcher() {
  return null;
};

var FocusTrap = function FocusTrap(_ref4) {
  var children = _ref4.children;
  return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    onBlur: onBlur,
    onFocus: onFocus
  }, children);
};

FocusTrap.propTypes =  true ? {
  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node.isRequired
} : undefined;

var onWindowBlur = function onWindowBlur() {
  focusWasOutsideWindow = "just"; // using setTimeout to set  this variable after React/sidecar reaction

  setTimeout(function () {
    focusWasOutsideWindow = "meanwhile";
  }, 0);
};

var attachHandler = function attachHandler() {
  document.addEventListener('focusin', onTrap, true);
  document.addEventListener('focusout', onBlur);
  window.addEventListener('blur', onWindowBlur);
};

var detachHandler = function detachHandler() {
  document.removeEventListener('focusin', onTrap, true);
  document.removeEventListener('focusout', onBlur);
  window.removeEventListener('blur', onWindowBlur);
};

function reducePropsToState(propsList) {
  return propsList.filter(function (_ref5) {
    var disabled = _ref5.disabled;
    return !disabled;
  });
}

function handleStateChangeOnClient(traps) {
  var trap = traps.slice(-1)[0];

  if (trap && !lastActiveTrap) {
    attachHandler();
  }

  var lastTrap = lastActiveTrap;
  var sameTrap = lastTrap && trap && trap.id === lastTrap.id;
  lastActiveTrap = trap;

  if (lastTrap && !sameTrap) {
    lastTrap.onDeactivation(); // return focus only of last trap was removed

    if (!traps.filter(function (_ref6) {
      var id = _ref6.id;
      return id === lastTrap.id;
    }).length) {
      // allow defer is no other trap is awaiting restore
      lastTrap.returnFocus(!trap);
    }
  }

  if (trap) {
    lastActiveFocus = null;

    if (!sameTrap || lastTrap.observed !== trap.observed) {
      trap.onActivation();
    }

    activateTrap(true);
    Object(_util__WEBPACK_IMPORTED_MODULE_4__["deferAction"])(activateTrap);
  } else {
    detachHandler();
    lastActiveFocus = null;
  }
} // bind medium


_medium__WEBPACK_IMPORTED_MODULE_5__["mediumFocus"].assignSyncMedium(onFocus);
_medium__WEBPACK_IMPORTED_MODULE_5__["mediumBlur"].assignMedium(onBlur);
_medium__WEBPACK_IMPORTED_MODULE_5__["mediumEffect"].assignMedium(function (cb) {
  return cb({
    moveFocusInside: focus_lock__WEBPACK_IMPORTED_MODULE_3__["default"],
    focusInside: focus_lock__WEBPACK_IMPORTED_MODULE_3__["focusInside"]
  });
});
/* harmony default export */ __webpack_exports__["default"] = (Object(react_clientside_effect__WEBPACK_IMPORTED_MODULE_2__["default"])(reducePropsToState, handleStateChangeOnClient)(FocusWatcher));

/***/ }),

/***/ "./node_modules/react-focus-lock/dist/es2015/UI.js":
/*!*********************************************************!*\
  !*** ./node_modules/react-focus-lock/dist/es2015/UI.js ***!
  \*********************************************************/
/*! exports provided: AutoFocusInside, MoveFocusInside, FreeFocusInside, InFocusGuard, FocusLockUI, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Lock__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Lock */ "./node_modules/react-focus-lock/dist/es2015/Lock.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FocusLockUI", function() { return _Lock__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _AutoFocusInside__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AutoFocusInside */ "./node_modules/react-focus-lock/dist/es2015/AutoFocusInside.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AutoFocusInside", function() { return _AutoFocusInside__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _MoveFocusInside__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MoveFocusInside */ "./node_modules/react-focus-lock/dist/es2015/MoveFocusInside.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MoveFocusInside", function() { return _MoveFocusInside__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _FreeFocusInside__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./FreeFocusInside */ "./node_modules/react-focus-lock/dist/es2015/FreeFocusInside.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FreeFocusInside", function() { return _FreeFocusInside__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _FocusGuard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./FocusGuard */ "./node_modules/react-focus-lock/dist/es2015/FocusGuard.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "InFocusGuard", function() { return _FocusGuard__WEBPACK_IMPORTED_MODULE_4__["default"]; });







/* harmony default export */ __webpack_exports__["default"] = (_Lock__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./node_modules/react-focus-lock/dist/es2015/index.js":
/*!************************************************************!*\
  !*** ./node_modules/react-focus-lock/dist/es2015/index.js ***!
  \************************************************************/
/*! exports provided: AutoFocusInside, MoveFocusInside, FreeFocusInside, InFocusGuard, FocusLockUI, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Combination__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Combination */ "./node_modules/react-focus-lock/dist/es2015/Combination.js");
/* harmony import */ var _UI__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UI */ "./node_modules/react-focus-lock/dist/es2015/UI.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AutoFocusInside", function() { return _UI__WEBPACK_IMPORTED_MODULE_1__["AutoFocusInside"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MoveFocusInside", function() { return _UI__WEBPACK_IMPORTED_MODULE_1__["MoveFocusInside"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FreeFocusInside", function() { return _UI__WEBPACK_IMPORTED_MODULE_1__["FreeFocusInside"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "InFocusGuard", function() { return _UI__WEBPACK_IMPORTED_MODULE_1__["InFocusGuard"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FocusLockUI", function() { return _UI__WEBPACK_IMPORTED_MODULE_1__["FocusLockUI"]; });



/* harmony default export */ __webpack_exports__["default"] = (_Combination__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./node_modules/react-focus-lock/dist/es2015/medium.js":
/*!*************************************************************!*\
  !*** ./node_modules/react-focus-lock/dist/es2015/medium.js ***!
  \*************************************************************/
/*! exports provided: mediumFocus, mediumBlur, mediumEffect, mediumSidecar */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mediumFocus", function() { return mediumFocus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mediumBlur", function() { return mediumBlur; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mediumEffect", function() { return mediumEffect; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mediumSidecar", function() { return mediumSidecar; });
/* harmony import */ var use_sidecar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! use-sidecar */ "./node_modules/use-sidecar/dist/es2015/index.js");

var mediumFocus = Object(use_sidecar__WEBPACK_IMPORTED_MODULE_0__["createMedium"])({}, function (_ref) {
  var target = _ref.target,
      currentTarget = _ref.currentTarget;
  return {
    target: target,
    currentTarget: currentTarget
  };
});
var mediumBlur = Object(use_sidecar__WEBPACK_IMPORTED_MODULE_0__["createMedium"])();
var mediumEffect = Object(use_sidecar__WEBPACK_IMPORTED_MODULE_0__["createMedium"])();
var mediumSidecar = Object(use_sidecar__WEBPACK_IMPORTED_MODULE_0__["createSidecarMedium"])({
  async: true
});

/***/ }),

/***/ "./node_modules/react-focus-lock/dist/es2015/util.js":
/*!***********************************************************!*\
  !*** ./node_modules/react-focus-lock/dist/es2015/util.js ***!
  \***********************************************************/
/*! exports provided: deferAction, inlineProp */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deferAction", function() { return deferAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "inlineProp", function() { return inlineProp; });
function deferAction(action) {
  // Hidding setImmediate from Webpack to avoid inserting polyfill
  var _window = window,
      setImmediate = _window.setImmediate;

  if (typeof setImmediate !== 'undefined') {
    setImmediate(action);
  } else {
    setTimeout(action, 1);
  }
}
var inlineProp = function inlineProp(name, value) {
  var obj = {};
  obj[name] = value;
  return obj;
};

/***/ }),

/***/ "./node_modules/react-netlify-identity-widget/dist/react-netlify-identity-widget.esm.js":
/*!**********************************************************************************************!*\
  !*** ./node_modules/react-netlify-identity-widget/dist/react-netlify-identity-widget.esm.js ***!
  \**********************************************************************************************/
/*! exports provided: useNetlifyIdentity, default, IdentityContextProvider, IdentityModal, useIdentityContext */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IdentityContextProvider", function() { return IdentityContextProvider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IdentityModal", function() { return IdentityModal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useIdentityContext", function() { return useIdentityContext; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _reach_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @reach/dialog */ "./node_modules/@reach/dialog/dist/dialog.esm.js");
/* harmony import */ var _reach_visually_hidden__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @reach/visually-hidden */ "./node_modules/@reach/visually-hidden/dist/visually-hidden.esm.js");
/* harmony import */ var react_netlify_identity__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-netlify-identity */ "./node_modules/react-netlify-identity/dist/index.js");
/* harmony import */ var react_netlify_identity__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_netlify_identity__WEBPACK_IMPORTED_MODULE_3__);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useNetlifyIdentity", function() { return react_netlify_identity__WEBPACK_IMPORTED_MODULE_3__["useNetlifyIdentity"]; });

/* harmony import */ var _reach_tabs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @reach/tabs */ "./node_modules/@reach/tabs/dist/tabs.esm.js");







function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function useLoading() {
  var _React$useState = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(false),
      isLoading = _React$useState[0],
      setState = _React$useState[1];

  var mount = react__WEBPACK_IMPORTED_MODULE_0___default.a.useRef(false);
  react__WEBPACK_IMPORTED_MODULE_0___default.a.useEffect(function () {
    mount.current = true;
    return function () {
      return void (mount.current = false);
    };
  }, []);

  function load(aPromise) {
    setState(true);
    return aPromise["finally"](function () {
      return mount.current && setState(false);
    });
  }

  return [isLoading, load];
}

function Login(_ref) {
  var onLogin = _ref.onLogin;

  var _useIdentityContext = Object(react_netlify_identity__WEBPACK_IMPORTED_MODULE_3__["useIdentityContext"])(),
      loginUser = _useIdentityContext.loginUser;

  var formRef = react__WEBPACK_IMPORTED_MODULE_0___default.a.useRef(null);

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(''),
      msg = _React$useState[0],
      setMsg = _React$useState[1];

  var _useLoading = useLoading(),
      isLoading = _useLoading[0],
      load = _useLoading[1];

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
    ref: formRef,
    className: "form",
    onSubmit: function onSubmit(e) {
      e.preventDefault();
      var target = e.target;
      var email = target.email.value;
      var password = target.password.value;
      load(loginUser(email, password, true)).then(function (user) {
        if (true) console.log('Success! Logged in', user);
        if (onLogin) onLogin(user);
      })["catch"](function (err) {
        return void console.error(err) || setMsg('Error: ' + err.message);
      });
    }
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "RNIW_formGroup",
    key: "email"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_reach_visually_hidden__WEBPACK_IMPORTED_MODULE_2__["default"], null, "Enter your email"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    className: "RNIW_formControl",
    type: "email",
    name: "email",
    placeholder: "Email",
    autoCapitalize: "off",
    required: true
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "RNIW_inputFieldIcon RNIW_inputFieldEmail"
  }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "RNIW_formGroup",
    key: "password"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_reach_visually_hidden__WEBPACK_IMPORTED_MODULE_2__["default"], null, "Enter your password"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    className: "RNIW_formControl",
    type: "password",
    name: "password",
    placeholder: "Password",
    required: true
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "RNIW_inputFieldIcon RNIW_inputFieldPassword"
  }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    type: "submit",
    className: isLoading ? 'RNIW_btn RNIW_saving' : 'RNIW_btn'
  }, "Log in"), msg && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("pre", {
    style: {
      background: 'salmon',
      padding: 10
    }
  }, msg)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    type: "button",
    className: "RNIW_btnLink forgotPasswordLink"
  }, "Forgot password?"));
}

function Logout(_ref) {
  var onLogout = _ref.onLogout;
  var identity = Object(react_netlify_identity__WEBPACK_IMPORTED_MODULE_3__["useIdentityContext"])();

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(''),
      msg = _React$useState[0],
      setMsg = _React$useState[1];

  var name = identity && identity.user && identity.user.user_metadata && identity.user.user_metadata.full_name || 'NoName';

  var _useLoading = useLoading(),
      isLoading = _useLoading[0],
      load = _useLoading[1];

  var logout = function logout() {
    return load(identity.logoutUser()).then(function () {
      if (onLogout) onLogout();
    })["catch"](function (err) {
      return void console.error(err) || setMsg('Error: ' + err.message);
    });
  };

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "RNIW_header"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    className: "RNIW_btn RNIW_btnHeader active"
  }, "Logged in")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
    className: "form "
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "RNIW_infoText"
  }, "Logged in as ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "RNIW_infoTextEmail"
  }, name)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    type: "submit",
    className: isLoading ? 'RNIW_btn RNIW_saving' : 'RNIW_btn',
    onClick: logout
  }, "Log out"), msg && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("pre", {
    style: {
      background: 'salmon',
      padding: 10
    }
  }, msg)));
}

function Signup(_ref) {
  var onSignup = _ref.onSignup;

  var _useIdentityContext = Object(react_netlify_identity__WEBPACK_IMPORTED_MODULE_3__["useIdentityContext"])(),
      signupUser = _useIdentityContext.signupUser;

  var formRef = react__WEBPACK_IMPORTED_MODULE_0___default.a.useRef(null);

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(''),
      msg = _React$useState[0],
      setMsg = _React$useState[1];

  var _useLoading = useLoading(),
      isLoading = _useLoading[0],
      load = _useLoading[1];

  var signup = function signup() {
    if (!formRef.current) return;
    var full_name = formRef.current.username.value;
    var email = formRef.current.email.value;
    var password = formRef.current.password.value;
    var data = {
      signupSource: 'react-netlify-identity-widget',
      full_name: full_name
    };
    load(signupUser(email, password, data)).then(function (user) {
      if (true) console.log('Success! Signed up', user);
      if (onSignup) onSignup(user);
    })["catch"](function (err) {
      return void console.error(err) || setMsg('Error: ' + err.message);
    });
  };

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
    ref: formRef,
    className: "form",
    onSubmit: function onSubmit(e) {
      e.preventDefault();
      signup();
    }
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "RNIW_formGroup",
    key: "username"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_reach_visually_hidden__WEBPACK_IMPORTED_MODULE_2__["default"], null, "Enter your name"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    id: "username",
    className: "RNIW_formControl",
    type: "name",
    name: "username",
    placeholder: "Name",
    autoCapitalize: "off",
    required: true
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "RNIW_inputFieldIcon RNIW_inputFieldName"
  }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "RNIW_formGroup",
    key: "email"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_reach_visually_hidden__WEBPACK_IMPORTED_MODULE_2__["default"], null, "Enter your email"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    className: "RNIW_formControl",
    type: "email",
    name: "email",
    placeholder: "Email",
    autoCapitalize: "off",
    required: true
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "RNIW_inputFieldIcon RNIW_inputFieldEmail"
  }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "RNIW_formGroup",
    key: "password"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_reach_visually_hidden__WEBPACK_IMPORTED_MODULE_2__["default"], null, "Enter your password"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    className: "RNIW_formControl",
    type: "password",
    name: "password",
    placeholder: "Password",
    required: true
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "RNIW_inputFieldIcon RNIW_inputFieldPassword"
  }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    type: "submit",
    className: isLoading ? 'RNIW_btn RNIW_saving' : 'RNIW_btn'
  }, "Sign Up"), msg && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("pre", {
    style: {
      background: 'salmon',
      padding: 10
    }
  }, msg)));
}

function Providers() {
  var _useIdentityContext = Object(react_netlify_identity__WEBPACK_IMPORTED_MODULE_3__["useIdentityContext"])(),
      settings = _useIdentityContext.settings;

  var hasProviders = Object.entries(settings.external).some(function (_ref) {
    var k = _ref[0],
        v = _ref[1];
    return ['github', 'gitlab', 'bitbucket', 'google'].includes(k) && v;
  });
  if (!hasProviders) return null;
  var isLocalhost = false;

  if (typeof window !== 'undefined') {
    isLocalhost = Boolean(window.location.hostname === 'localhost' || // [::1] is the IPv6 localhost address.
    window.location.hostname === '[::1]' || // 127.0.0.1/8 is considered localhost for IPv4.
    window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));
  }

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "providersGroup"
  }, isLocalhost && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("pre", null, "\u26A0\uFE0FTesting providers on localhost won't work because OAuth redirects to your production site"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", {
    className: "RNIW_hr"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ProviderButton, {
    settings: settings,
    provider: "Google"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ProviderButton, {
    settings: settings,
    provider: "GitHub"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ProviderButton, {
    settings: settings,
    provider: "GitLab"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ProviderButton, {
    settings: settings,
    provider: "Bitbucket"
  }));
}

function ProviderButton(_ref2) {
  var settings = _ref2.settings,
      provider = _ref2.provider;
  var ext = settings.external;
  if (!ext[provider.toLowerCase()]) return null;

  var _useIdentityContext2 = Object(react_netlify_identity__WEBPACK_IMPORTED_MODULE_3__["useIdentityContext"])(),
      loginProvider = _useIdentityContext2.loginProvider;

  var click = function click() {
    return loginProvider(provider.toLowerCase());
  };

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    onClick: click,
    className: "provider" + provider + " RNIW_btn RNIW_btnProvider"
  }, "Continue with ", provider);
}

function LoggedOutScreen(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_reach_tabs__WEBPACK_IMPORTED_MODULE_4__["Tabs"], {
    defaultIndex: 0
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_reach_tabs__WEBPACK_IMPORTED_MODULE_4__["TabList"], {
    className: "RNIW_header"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_reach_tabs__WEBPACK_IMPORTED_MODULE_4__["Tab"], {
    className: "RNIW_btn RNIW_btnHeader"
  }, "Login"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_reach_tabs__WEBPACK_IMPORTED_MODULE_4__["Tab"], {
    className: "RNIW_btn RNIW_btnHeader"
  }, "Sign Up")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_reach_tabs__WEBPACK_IMPORTED_MODULE_4__["TabPanels"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_reach_tabs__WEBPACK_IMPORTED_MODULE_4__["TabPanel"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Login, {
    onLogin: props.onLogin
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_reach_tabs__WEBPACK_IMPORTED_MODULE_4__["TabPanel"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Signup, {
    onSignup: props.onSignup
  })))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Providers, null));
}

function LoggedInScreen(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Logout, {
    onLogout: props.onLogout
  });
}

function Widget(props) {
  var identity = Object(react_netlify_identity__WEBPACK_IMPORTED_MODULE_3__["useIdentityContext"])();
  var isLoggedIn = Boolean(identity && identity.user);
  return isLoggedIn ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(LoggedInScreen, Object.assign({}, props)) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(LoggedOutScreen, Object.assign({}, props));
}

var IdentityContextProvider = react_netlify_identity__WEBPACK_IMPORTED_MODULE_3__["IdentityContextProvider"];
var useIdentityContext = react_netlify_identity__WEBPACK_IMPORTED_MODULE_3__["useIdentityContext"];
function IdentityModal(_ref) {
  var showDialog = _ref.showDialog,
      onCloseDialog = _ref.onCloseDialog,
      authprops = _objectWithoutPropertiesLoose(_ref, ["showDialog", "onCloseDialog"]);

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_reach_dialog__WEBPACK_IMPORTED_MODULE_1__["Dialog"], {
    isOpen: showDialog,
    onDismiss: onCloseDialog,
    style: {
      border: 'solid 5px hsla(0, 0%, 0%, 0.5)',
      borderRadius: '10px',
      position: 'relative',
      maxWidth: 400
    }
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    className: "RNIW_btn RNIW_btnClose",
    onClick: onCloseDialog
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_reach_visually_hidden__WEBPACK_IMPORTED_MODULE_2__["default"], null, "Close")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Widget, Object.assign({}, authprops)));
}

/* harmony default export */ __webpack_exports__["default"] = (IdentityModal);

//# sourceMappingURL=react-netlify-identity-widget.esm.js.map


/***/ }),

/***/ "./node_modules/react-netlify-identity-widget/styles.css":
/*!***************************************************************!*\
  !*** ./node_modules/react-netlify-identity-widget/styles.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(true) {
      // 1588136291584
      var cssReload = __webpack_require__(/*! ./node_modules/mini-css-extract-plugin/dist/hmr/hotModuleReplacement.js */ "./node_modules/mini-css-extract-plugin/dist/hmr/hotModuleReplacement.js")(module.i, {"hmr":true,"locals":false});
      module.hot.dispose(cssReload);
      module.hot.accept(undefined, cssReload);
    }
  

/***/ }),

/***/ "./node_modules/react-netlify-identity/dist/index.js":
/*!***********************************************************!*\
  !*** ./node_modules/react-netlify-identity/dist/index.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";



if (false) {} else {
  module.exports = __webpack_require__(/*! ./react-netlify-identity.cjs.development.js */ "./node_modules/react-netlify-identity/dist/react-netlify-identity.cjs.development.js")
}


/***/ }),

/***/ "./node_modules/react-netlify-identity/dist/react-netlify-identity.cjs.development.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/react-netlify-identity/dist/react-netlify-identity.cjs.development.js ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = __webpack_require__(/*! react */ "react");
var React__default = _interopDefault(React);
var GoTrue = _interopDefault(__webpack_require__(/*! gotrue-js */ "./node_modules/gotrue-js/lib/index.js"));

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

var defaultParam = {
  token: undefined,
  type: undefined,
  error: undefined,
  status: undefined
};

/**
 * This code runs on every rerender so keep it light
 * keep checking the current route and do logic based on the route
 * as dictated by netlify identity's communication with us via hashes
 */

var routes = /(confirmation|invite|recovery|email_change|access)_token=([^&]+)/;
var errorRoute = /error=access_denied&error_description=403/;

var reduceHashToKeyValue = function reduceHashToKeyValue(hash) {
  return hash.split('&').reduce(function (carry, pair) {
    var _extends2;

    var _pair$split = pair.split('='),
        key = _pair$split[0],
        value = _pair$split[1];

    return _extends({}, carry, (_extends2 = {}, _extends2[key] = value, _extends2));
  }, {});
};

var hashReplace = /^#\/?/;
function runRoutes(gotrue, setUser, remember) {
  var _document, _document$location;

  if (remember === void 0) {
    remember = true;
  }

  // early terminate if no hash
  // also accounts for document.cookie further down
  if (!((_document = document) === null || _document === void 0 ? void 0 : (_document$location = _document.location) === null || _document$location === void 0 ? void 0 : _document$location.hash)) {
    return defaultParam;
  }

  var hash = document.location.hash.replace(hashReplace, '');

  try {
    history.pushState('', document.title, window.location.pathname + window.location.search);
  } catch (_) {
    window.location.href.substr(0, window.location.href.indexOf('#'));
  } // earliest possible bail on any match


  if (hash.match(errorRoute)) {
    return _extends({}, defaultParam, {
      error: 'access_denied',
      status: 403
    });
  }

  var matchesActionHashes = hash.match(routes);

  if (matchesActionHashes) {
    var params = reduceHashToKeyValue(hash);

    if (params.confirmation_token) {
      gotrue.confirm(params.confirmation_token, remember).then(setUser)["catch"](console.error); // dont notify dev as this package does not export its own method for this

      return defaultParam;
    }

    if (params.access_token) {
      document.cookie = "nf_jwt=" + params.access_token;
      gotrue.createUser(params, remember).then(setUser)["catch"](console.error); // also dont notify dev here for the same reasons as above

      return defaultParam;
    } // pass responsibility to dev in all other cases


    return _extends({}, defaultParam, {
      type: matchesActionHashes[1],
      token: matchesActionHashes[2]
    });
  }

  return defaultParam;
}

var defaultSettings = {
  autoconfirm: false,
  disable_signup: false,
  external: {
    bitbucket: false,
    email: true,
    facebook: false,
    github: false,
    gitlab: false,
    google: false
  }
};
var errors = {
  noUserFound: 'No current user found - are you logged in?',
  noUserTokenFound: 'no user token found',
  tokenMissingOrInvalid: 'either no token found or invalid for this purpose'
};

var _createCtx =
/*#__PURE__*/
createCtx(),
    _useIdentityContext = _createCtx[0],
    _IdentityCtxProvider = _createCtx[1];

var useIdentityContext = _useIdentityContext; // we dont want to expose _IdentityCtxProvider

/** most people should use this provider directly */

function IdentityContextProvider(_ref) {
  var url = _ref.url,
      children = _ref.children,
      _ref$onAuthChange = _ref.onAuthChange,
      onAuthChange = _ref$onAuthChange === void 0 ? function () {} : _ref$onAuthChange;

  /******** SETUP */
  if (!url || !validateUrl(url)) {
    // just a safety check in case a JS user tries to skip this
    throw new Error('invalid netlify instance URL: ' + url + '. Please check the docs for proper usage or file an issue.');
  }

  var identity = useNetlifyIdentity(url, onAuthChange);
  return React__default.createElement(_IdentityCtxProvider, {
    value: identity
  }, children);
}
/** some people may want to use this as a hook and bring their own contexts */

function useNetlifyIdentity(url, onAuthChange, enableRunRoutes) {
  if (onAuthChange === void 0) {
    onAuthChange = function onAuthChange() {};
  }

  if (enableRunRoutes === void 0) {
    enableRunRoutes = true;
  }

  var goTrueInstance = React.useMemo(function () {
    return new GoTrue({
      APIUrl: url + "/.netlify/identity",
      setCookie: true
    });
  }, [url]);
  /******* STATE and EFFECTS */

  var _useState = React.useState(goTrueInstance.currentUser() || undefined),
      user = _useState[0],
      setUser = _useState[1];

  var _setUser = React.useCallback(function (_user) {
    setUser(_user);
    onAuthChange(_user); // if someone's subscribed to auth changes, let 'em know

    return _user; // so that we can continue chaining
  }, [onAuthChange]);

  var _useState2 = React.useState(defaultParam),
      param = _useState2[0],
      setParam = _useState2[1];

  React.useEffect(function () {
    if (enableRunRoutes) {
      var _param = runRoutes(goTrueInstance, _setUser);

      if (_param.token || _param.error) {
        setParam(_param);
      }
    }
  }, []);

  var _useState3 = React.useState(defaultSettings),
      settings = _useState3[0],
      setSettings = _useState3[1];

  React.useEffect(function () {
    goTrueInstance.settings.bind(goTrueInstance)().then(function (x) {
      return setSettings(x);
    });
  }, []);
  /******* OPERATIONS */
  // make sure the Registration preferences under Identity settings in your Netlify dashboard are set to Open.
  // https://react-netlify-identity.netlify.com/login#access_token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NTY0ODY3MjEsInN1YiI6ImNiZjY5MTZlLTNlZGYtNGFkNS1iOTYzLTQ4ZTY2NDcyMDkxNyIsImVtYWlsIjoic2hhd250aGUxQGdtYWlsLmNvbSIsImFwcF9tZXRhZGF0YSI6eyJwcm92aWRlciI6ImdpdGh1YiJ9LCJ1c2VyX21ldGFkYXRhIjp7ImF2YXRhcl91cmwiOiJodHRwczovL2F2YXRhcnMxLmdpdGh1YnVzZXJjb250ZW50LmNvbS91LzY3NjQ5NTc_dj00IiwiZnVsbF9uYW1lIjoic3d5eCJ9fQ.E8RrnuCcqq-mLi1_Q5WHJ-9THIdQ3ha1mePBKGhudM0&expires_in=3600&refresh_token=OyA_EdRc7WOIVhY7RiRw5w&token_type=bearer

  /******* external oauth */

  /**
   * @see https://github.com/netlify/gotrue-js/blob/master/src/index.js#L71
   */

  var loginProvider = React.useCallback(function (provider) {
    var url = goTrueInstance.loginExternalUrl(provider);
    window.location.href = url;
  }, [goTrueInstance]);
  /**
   * @see https://github.com/netlify/gotrue-js/blob/master/src/index.js#L92
   */

  var acceptInviteExternalUrl = React.useCallback(function (provider, autoRedirect) {
    if (autoRedirect === void 0) {
      autoRedirect = true;
    }

    if (!param.token || param.type !== 'invite') {
      console.error(errors.tokenMissingOrInvalid);
      return;
    }

    var url = goTrueInstance.acceptInviteExternalUrl(provider, param.token); // clean up consumed token

    setParam(defaultParam);

    if (autoRedirect) {
      window.location.href = url;
      return;
    }

    return url;
  }, [goTrueInstance, param]);
  /**
   * @see https://github.com/netlify/gotrue-js/blob/master/src/index.js#L123
   */

  var verifyToken = React.useCallback(function () {
    if (!param.type || !param.token) {
      return Promise.reject(errors.tokenMissingOrInvalid);
    }

    return goTrueInstance.verify(param.type, param.token).then(function (user) {
      // cleanup consumed token
      setParam(defaultParam);
      return user;
    });
  }, [goTrueInstance, param]);
  /******* email auth */

  /**
   * @see https://github.com/netlify/gotrue-js/blob/master/src/index.js#L50
   */

  var signupUser = React.useCallback(function (email, password, data, directLogin) {
    if (directLogin === void 0) {
      directLogin = true;
    }

    return goTrueInstance.signup(email, password, data).then(function (user) {
      if (directLogin) {
        return _setUser(user);
      }

      return user;
    });
  }, [goTrueInstance, _setUser]);
  /**
   * @see https://github.com/netlify/gotrue-js/blob/master/src/index.js#L57
   */

  var loginUser = React.useCallback(function (email, password, remember) {
    if (remember === void 0) {
      remember = true;
    }

    return goTrueInstance.login(email, password, remember).then(_setUser);
  }, [goTrueInstance, _setUser]);
  /**
   * @see https://github.com/netlify/gotrue-js/blob/master/src/index.js#L80
   */

  var requestPasswordRecovery = React.useCallback(function (email) {
    return goTrueInstance.requestPasswordRecovery(email);
  }, [goTrueInstance]);
  /**
   * @see https://github.com/netlify/gotrue-js/blob/master/src/index.js#L87
   */

  var recoverAccount = React.useCallback(function (remember) {
    if (!param.token || param.type !== 'recovery') {
      return Promise.reject(errors.tokenMissingOrInvalid);
    }

    return goTrueInstance.recover(param.token, remember).then(function (user) {
      return _setUser(user);
    })["finally"](function () {
      // clean up consumed token
      setParam(defaultParam);
    });
  }, [goTrueInstance, _setUser, param]);
  /**
   * @see https://github.com/netlify/gotrue-js/blob/master/src/user.js#L54
   */

  var updateUser = React.useCallback(function (fields) {
    if (!user) {
      return Promise.reject(errors.noUserFound);
    }

    return user.update(fields) // e.g. { email: "example@example.com", password: "password" }
    .then(_setUser);
  }, [user]);
  /**
   * @see https://github.com/netlify/gotrue-js/blob/master/src/user.js#L63
   */

  var getFreshJWT = React.useCallback(function () {
    if (!user) {
      return Promise.reject(errors.noUserFound);
    }

    return user.jwt();
  }, [user]);
  /**
   * @see https://github.com/netlify/gotrue-js/blob/master/src/user.js#L71
   */

  var logoutUser = React.useCallback(function () {
    if (!user) {
      return Promise.reject(errors.noUserFound);
    }

    return user.logout().then(function () {
      return _setUser(undefined);
    });
  }, [user]);

  var genericAuthedFetch = function genericAuthedFetch(method) {
    return function (endpoint, options) {
      var _user$token;

      if (options === void 0) {
        options = {};
      }

      if (!(user === null || user === void 0 ? void 0 : (_user$token = user.token) === null || _user$token === void 0 ? void 0 : _user$token.access_token)) {
        return Promise.reject(errors.noUserTokenFound);
      }

      var defaultObj = {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + user.token.access_token
        }
      };
      var finalObj = Object.assign(defaultObj, {
        method: method
      }, options);
      return fetch(endpoint, finalObj).then(function (res) {
        return finalObj.headers['Content-Type'] === 'application/json' ? res.json() : res;
      });
    };
  };

  var authedFetch = {
    get: genericAuthedFetch('GET'),
    post: genericAuthedFetch('POST'),
    put: genericAuthedFetch('PUT'),
    "delete": genericAuthedFetch('DELETE')
  };
  /******* hook API */

  return {
    user: user,

    /** not meant for normal use! you should mostly use one of the other exported methods to update the user instance */
    setUser: _setUser,
    isConfirmedUser: !!(user && user.confirmed_at),
    isLoggedIn: !!user,
    signupUser: signupUser,
    loginUser: loginUser,
    logoutUser: logoutUser,
    requestPasswordRecovery: requestPasswordRecovery,
    recoverAccount: recoverAccount,
    updateUser: updateUser,
    getFreshJWT: getFreshJWT,
    authedFetch: authedFetch,
    _goTrueInstance: goTrueInstance,
    _url: url,
    loginProvider: loginProvider,
    acceptInviteExternalUrl: acceptInviteExternalUrl,
    settings: settings,
    param: param,
    verifyToken: verifyToken
  };
}
/**
 *
 *
 * Utils
 *
 */

function validateUrl(value) {
  return /^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:[/?#]\S*)?$/i.test(value);
} // lazy initialize contexts without providing a Nullable type upfront


function createCtx() {
  var ctx = React.createContext(undefined);

  function useCtx() {
    var c = React.useContext(ctx);
    if (!c) throw new Error('useCtx must be inside a Provider with a value');
    return c;
  }

  return [useCtx, ctx.Provider];
} // // Deprecated for now
// interface NIProps {
//   children: any
//   url: string
//   onAuthChange?: authChangeParam
// }
// export default function NetlifyIdentity({ children, url, onAuthChange }: NIProps) {
//   return children(useNetlifyIdentity(url, onAuthChange))
// }

exports.IdentityContextProvider = IdentityContextProvider;
exports.useIdentityContext = useIdentityContext;
exports.useNetlifyIdentity = useNetlifyIdentity;
//# sourceMappingURL=react-netlify-identity.cjs.development.js.map


/***/ }),

/***/ "./node_modules/react-remove-scroll-bar/dist/es2015/component.js":
/*!***********************************************************************!*\
  !*** ./node_modules/react-remove-scroll-bar/dist/es2015/component.js ***!
  \***********************************************************************/
/*! exports provided: RemoveScrollBar */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RemoveScrollBar", function() { return RemoveScrollBar; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_style_singleton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-style-singleton */ "./node_modules/react-style-singleton/dist/es2015/index.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils */ "./node_modules/react-remove-scroll-bar/dist/es2015/utils.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./constants */ "./node_modules/react-remove-scroll-bar/dist/es2015/constants.js");




var Style = Object(react_style_singleton__WEBPACK_IMPORTED_MODULE_1__["styleSingleton"])();
var getStyles = function (_a, allowRelative, gapMode, important) {
    var left = _a.left, top = _a.top, right = _a.right, gap = _a.gap;
    if (gapMode === void 0) { gapMode = 'margin'; }
    return "\n  ." + _constants__WEBPACK_IMPORTED_MODULE_3__["noScrollbarsClassName"] + " {\n   overflow: hidden " + important + ";\n   padding-right: " + gap + "px " + important + ";\n  }\n  body {\n    overflow: hidden " + important + ";\n    " + [
        allowRelative && "position: relative " + important + ";",
        gapMode === 'margin' && "\n    padding-left: " + left + "px;\n    padding-top: " + top + "px;\n    padding-right: " + right + "px;\n    margin-left:0;\n    margin-top:0;\n    margin-right: " + gap + "px " + important + ";\n    ",
        gapMode === 'padding' && "padding-right: " + gap + "px " + important + ";",
    ].filter(Boolean).join('') + "\n  }\n  \n  ." + _constants__WEBPACK_IMPORTED_MODULE_3__["zeroRightClassName"] + " {\n    right: " + gap + "px " + important + ";\n  }\n  \n  ." + _constants__WEBPACK_IMPORTED_MODULE_3__["fullWidthClassName"] + " {\n    margin-right: " + gap + "px " + important + ";\n  }\n  \n  ." + _constants__WEBPACK_IMPORTED_MODULE_3__["zeroRightClassName"] + " ." + _constants__WEBPACK_IMPORTED_MODULE_3__["zeroRightClassName"] + " {\n    right: 0 " + important + ";\n  }\n  \n  ." + _constants__WEBPACK_IMPORTED_MODULE_3__["fullWidthClassName"] + " ." + _constants__WEBPACK_IMPORTED_MODULE_3__["fullWidthClassName"] + " {\n    margin-right: 0 " + important + ";\n  }\n";
};
var RemoveScrollBar = function (props) {
    var _a = react__WEBPACK_IMPORTED_MODULE_0__["useState"](Object(_utils__WEBPACK_IMPORTED_MODULE_2__["getGapWidth"])(props.gapMode)), gap = _a[0], setGap = _a[1];
    react__WEBPACK_IMPORTED_MODULE_0__["useEffect"](function () {
        setGap(Object(_utils__WEBPACK_IMPORTED_MODULE_2__["getGapWidth"])(props.gapMode));
    }, [props.gapMode]);
    var noRelative = props.noRelative, noImportant = props.noImportant, _b = props.gapMode, gapMode = _b === void 0 ? 'margin' : _b;
    return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](Style, { styles: getStyles(gap, !noRelative, gapMode, !noImportant ? "!important" : '') });
};


/***/ }),

/***/ "./node_modules/react-remove-scroll-bar/dist/es2015/constants.js":
/*!***********************************************************************!*\
  !*** ./node_modules/react-remove-scroll-bar/dist/es2015/constants.js ***!
  \***********************************************************************/
/*! exports provided: zeroRightClassName, fullWidthClassName, noScrollbarsClassName */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "zeroRightClassName", function() { return zeroRightClassName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fullWidthClassName", function() { return fullWidthClassName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "noScrollbarsClassName", function() { return noScrollbarsClassName; });
var zeroRightClassName = 'right-scroll-bar-position';
var fullWidthClassName = 'width-before-scroll-bar';
var noScrollbarsClassName = 'with-scroll-bars-hidden';


/***/ }),

/***/ "./node_modules/react-remove-scroll-bar/dist/es2015/index.js":
/*!*******************************************************************!*\
  !*** ./node_modules/react-remove-scroll-bar/dist/es2015/index.js ***!
  \*******************************************************************/
/*! exports provided: RemoveScrollBar, zeroRightClassName, fullWidthClassName, noScrollbarsClassName, getGapWidth */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./component */ "./node_modules/react-remove-scroll-bar/dist/es2015/component.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RemoveScrollBar", function() { return _component__WEBPACK_IMPORTED_MODULE_0__["RemoveScrollBar"]; });

/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils */ "./node_modules/react-remove-scroll-bar/dist/es2015/utils.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getGapWidth", function() { return _utils__WEBPACK_IMPORTED_MODULE_1__["getGapWidth"]; });

/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constants */ "./node_modules/react-remove-scroll-bar/dist/es2015/constants.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "zeroRightClassName", function() { return _constants__WEBPACK_IMPORTED_MODULE_2__["zeroRightClassName"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fullWidthClassName", function() { return _constants__WEBPACK_IMPORTED_MODULE_2__["fullWidthClassName"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "noScrollbarsClassName", function() { return _constants__WEBPACK_IMPORTED_MODULE_2__["noScrollbarsClassName"]; });







/***/ }),

/***/ "./node_modules/react-remove-scroll-bar/dist/es2015/utils.js":
/*!*******************************************************************!*\
  !*** ./node_modules/react-remove-scroll-bar/dist/es2015/utils.js ***!
  \*******************************************************************/
/*! exports provided: zeroGap, getGapWidth */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "zeroGap", function() { return zeroGap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getGapWidth", function() { return getGapWidth; });
var zeroGap = {
    left: 0,
    top: 0,
    right: 0,
    gap: 0,
};
var parse = function (x) { return parseInt(x || '', 10) || 0; };
var getOffset = function (gapMode) {
    var cs = window.getComputedStyle(document.body);
    var left = cs[gapMode === 'padding' ? 'paddingLeft' : 'marginLeft'];
    var top = cs[gapMode === 'padding' ? 'paddingTop' : 'marginTop'];
    var right = cs[gapMode === 'padding' ? 'paddingRight' : 'marginRight'];
    return [
        parse(left),
        parse(top),
        parse(right),
    ];
};
var getGapWidth = function (gapMode) {
    if (gapMode === void 0) { gapMode = 'margin'; }
    if (typeof window === 'undefined') {
        return zeroGap;
    }
    var offsets = getOffset(gapMode);
    var documentWidth = document.documentElement.clientWidth;
    var windowWidth = window.innerWidth;
    return {
        left: offsets[0],
        top: offsets[1],
        right: offsets[2],
        gap: Math.max(0, windowWidth - documentWidth + offsets[2] - offsets[0]),
    };
};


/***/ }),

/***/ "./node_modules/react-remove-scroll/dist/es2015/Combination.js":
/*!*********************************************************************!*\
  !*** ./node_modules/react-remove-scroll/dist/es2015/Combination.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _UI__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./UI */ "./node_modules/react-remove-scroll/dist/es2015/UI.js");
/* harmony import */ var _sidecar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sidecar */ "./node_modules/react-remove-scroll/dist/es2015/sidecar.js");




var ReactRemoveScroll = react__WEBPACK_IMPORTED_MODULE_1__["forwardRef"](function (props, ref) { return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_UI__WEBPACK_IMPORTED_MODULE_2__["RemoveScroll"], tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, props, { ref: ref, sideCar: _sidecar__WEBPACK_IMPORTED_MODULE_3__["default"] }))); });
ReactRemoveScroll.classNames = _UI__WEBPACK_IMPORTED_MODULE_2__["RemoveScroll"].classNames;
/* harmony default export */ __webpack_exports__["default"] = (ReactRemoveScroll);


/***/ }),

/***/ "./node_modules/react-remove-scroll/dist/es2015/SideEffect.js":
/*!********************************************************************!*\
  !*** ./node_modules/react-remove-scroll/dist/es2015/SideEffect.js ***!
  \********************************************************************/
/*! exports provided: getTouchXY, getDeltaXY, RemoveScrollSideCar */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTouchXY", function() { return getTouchXY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDeltaXY", function() { return getDeltaXY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RemoveScrollSideCar", function() { return RemoveScrollSideCar; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_remove_scroll_bar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-remove-scroll-bar */ "./node_modules/react-remove-scroll-bar/dist/es2015/index.js");
/* harmony import */ var react_style_singleton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-style-singleton */ "./node_modules/react-style-singleton/dist/es2015/index.js");
/* harmony import */ var _handleScroll__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./handleScroll */ "./node_modules/react-remove-scroll/dist/es2015/handleScroll.js");
/* harmony import */ var _aggresiveCapture__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./aggresiveCapture */ "./node_modules/react-remove-scroll/dist/es2015/aggresiveCapture.js");





var getTouchXY = function (event) {
    return 'changedTouches' in event
        ? [event.changedTouches[0].clientX, event.changedTouches[0].clientY]
        : [0, 0];
};
var getDeltaXY = function (event) { return [event.deltaX, event.deltaY]; };
var extractRef = function (ref) {
    return ref && 'current' in ref ? ref.current : ref;
};
var deltaCompare = function (x, y) {
    return x[0] === y[0] && x[1] === y[1];
};
var generateStyle = function (id) { return "\n  .block-interactivity-" + id + " {pointer-events: none;}\n  .allow-interactivity-" + id + " {pointer-events: all;}\n"; };
var idCounter = 0;
var lockStack = [];
function RemoveScrollSideCar(props) {
    var shouldPreventQueue = react__WEBPACK_IMPORTED_MODULE_0__["useRef"]([]);
    var touchStartRef = react__WEBPACK_IMPORTED_MODULE_0__["useRef"]([0, 0]);
    var activeAxis = react__WEBPACK_IMPORTED_MODULE_0__["useRef"]();
    var id = react__WEBPACK_IMPORTED_MODULE_0__["useState"](idCounter++)[0];
    var Style = react__WEBPACK_IMPORTED_MODULE_0__["useState"](function () { return Object(react_style_singleton__WEBPACK_IMPORTED_MODULE_2__["styleSingleton"])(); })[0];
    var lastProps = react__WEBPACK_IMPORTED_MODULE_0__["useRef"](props);
    react__WEBPACK_IMPORTED_MODULE_0__["useEffect"](function () {
        lastProps.current = props;
    }, [props]);
    react__WEBPACK_IMPORTED_MODULE_0__["useEffect"](function () {
        if (props.inert) {
            document.body.classList.add("block-interactivity-" + id);
            var allow_1 = [
                props.lockRef.current
            ].concat((props.shards || []).map(extractRef)).filter(Boolean);
            allow_1.forEach(function (el) { return el.classList.add("allow-interactivity-" + id); });
            return function () {
                document.body.classList.remove("block-interactivity-" + id);
                allow_1.forEach(function (el) {
                    return el.classList.remove("allow-interactivity-" + id);
                });
            };
        }
        return;
    }, [props.inert, props.lockRef.current, props.shards]);
    var shouldCancelEvent = react__WEBPACK_IMPORTED_MODULE_0__["useCallback"](function (event, parent) {
        if ('touches' in event && event.touches.length === 2) {
            return !lastProps.current.allowPinchZoom;
        }
        var touch = getTouchXY(event);
        var touchStart = touchStartRef.current;
        var deltaX = 'deltaX' in event ? event.deltaX : touchStart[0] - touch[0];
        var deltaY = 'deltaY' in event ? event.deltaY : touchStart[1] - touch[1];
        var currentAxis;
        var target = event.target;
        var moveDirection = Math.abs(deltaX) > Math.abs(deltaY) ? 'h' : 'v';
        var canBeScrolledInMainDirection = Object(_handleScroll__WEBPACK_IMPORTED_MODULE_3__["locationCouldBeScrolled"])(moveDirection, target);
        if (!canBeScrolledInMainDirection) {
            return true;
        }
        if (canBeScrolledInMainDirection) {
            currentAxis = moveDirection;
        }
        else {
            currentAxis = moveDirection === 'v' ? 'h' : 'v';
            canBeScrolledInMainDirection = Object(_handleScroll__WEBPACK_IMPORTED_MODULE_3__["locationCouldBeScrolled"])(moveDirection, target);
            // other axis might be not scrollable
        }
        if (!canBeScrolledInMainDirection) {
            return false;
        }
        if (!activeAxis.current &&
            'changedTouches' in event &&
            (deltaX || deltaY)) {
            activeAxis.current = currentAxis;
        }
        if (!currentAxis) {
            return true;
        }
        var cancelingAxis = activeAxis.current || currentAxis;
        return Object(_handleScroll__WEBPACK_IMPORTED_MODULE_3__["handleScroll"])(cancelingAxis, parent, event, cancelingAxis == 'h' ? deltaX : deltaY, true);
    }, []);
    var shouldPrevent = react__WEBPACK_IMPORTED_MODULE_0__["useCallback"](function (_event) {
        var event = _event;
        if (!lockStack.length || lockStack[lockStack.length - 1] !== Style) {
            // not the last active
            return;
        }
        var delta = 'deltaY' in event ? getDeltaXY(event) : getTouchXY(event);
        var sourceEvent = shouldPreventQueue.current.filter(function (e) {
            return e.name === event.type &&
                e.target === event.target &&
                deltaCompare(e.delta, delta);
        })[0];
        // self event, and should be canceled
        if (sourceEvent && sourceEvent.should) {
            event.preventDefault();
            return;
        }
        // outside or shard event
        if (!sourceEvent) {
            var shardNodes = (lastProps.current.shards || [])
                .map(extractRef)
                .filter(Boolean)
                .filter(function (node) { return node.contains(event.target); });
            var shouldStop = shardNodes.length > 0
                ? shouldCancelEvent(event, shardNodes[0])
                : !lastProps.current.noIsolation;
            if (shouldStop) {
                event.preventDefault();
            }
        }
    }, []);
    var shouldCancel = react__WEBPACK_IMPORTED_MODULE_0__["useCallback"](function (name, delta, target, should) {
        var event = { name: name, delta: delta, target: target, should: should };
        shouldPreventQueue.current.push(event);
        setTimeout(function () {
            shouldPreventQueue.current = shouldPreventQueue.current.filter(function (e) { return e !== event; });
        }, 1);
    }, []);
    var scrollTouchStart = react__WEBPACK_IMPORTED_MODULE_0__["useCallback"](function (event) {
        touchStartRef.current = getTouchXY(event);
        activeAxis.current = undefined;
    }, []);
    var scrollWheel = react__WEBPACK_IMPORTED_MODULE_0__["useCallback"](function (event) {
        shouldCancel(event.type, getDeltaXY(event), event.target, shouldCancelEvent(event, props.lockRef.current));
    }, []);
    var scrollTouchMove = react__WEBPACK_IMPORTED_MODULE_0__["useCallback"](function (event) {
        shouldCancel(event.type, getTouchXY(event), event.target, shouldCancelEvent(event, props.lockRef.current));
    }, []);
    react__WEBPACK_IMPORTED_MODULE_0__["useEffect"](function () {
        lockStack.push(Style);
        props.setCallbacks({
            onScrollCapture: scrollWheel,
            onWheelCapture: scrollWheel,
            onTouchMoveCapture: scrollTouchMove
        });
        document.addEventListener('wheel', shouldPrevent, _aggresiveCapture__WEBPACK_IMPORTED_MODULE_4__["nonPassive"]);
        document.addEventListener('touchmove', shouldPrevent, _aggresiveCapture__WEBPACK_IMPORTED_MODULE_4__["nonPassive"]);
        document.addEventListener('touchstart', scrollTouchStart, _aggresiveCapture__WEBPACK_IMPORTED_MODULE_4__["nonPassive"]);
        return function () {
            lockStack = lockStack.filter(function (inst) { return inst !== Style; });
            document.removeEventListener('wheel', shouldPrevent, _aggresiveCapture__WEBPACK_IMPORTED_MODULE_4__["nonPassive"]);
            document.removeEventListener('touchmove', shouldPrevent, _aggresiveCapture__WEBPACK_IMPORTED_MODULE_4__["nonPassive"]);
            document.removeEventListener('touchstart', scrollTouchStart, _aggresiveCapture__WEBPACK_IMPORTED_MODULE_4__["nonPassive"]);
        };
    }, []);
    var removeScrollBar = props.removeScrollBar, inert = props.inert;
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null,
        inert ? react__WEBPACK_IMPORTED_MODULE_0__["createElement"](Style, { styles: generateStyle(id) }) : null,
        removeScrollBar ? react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_remove_scroll_bar__WEBPACK_IMPORTED_MODULE_1__["RemoveScrollBar"], { gapMode: "margin" }) : null));
}


/***/ }),

/***/ "./node_modules/react-remove-scroll/dist/es2015/UI.js":
/*!************************************************************!*\
  !*** ./node_modules/react-remove-scroll/dist/es2015/UI.js ***!
  \************************************************************/
/*! exports provided: RemoveScroll */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RemoveScroll", function() { return RemoveScroll; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_remove_scroll_bar_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-remove-scroll-bar/constants */ "./node_modules/react-remove-scroll-bar/dist/es2015/constants.js");
/* harmony import */ var _medium__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./medium */ "./node_modules/react-remove-scroll/dist/es2015/medium.js");
/* harmony import */ var use_callback_ref__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! use-callback-ref */ "./node_modules/use-callback-ref/dist/es2015/index.js");





var nothing = function () {
    return;
};
var RemoveScroll = react__WEBPACK_IMPORTED_MODULE_1__["forwardRef"](function (props, parentRef) {
    var ref = react__WEBPACK_IMPORTED_MODULE_1__["useRef"](null);
    var _a = react__WEBPACK_IMPORTED_MODULE_1__["useState"]({
        onScrollCapture: nothing,
        onWheelCapture: nothing,
        onTouchMoveCapture: nothing
    }), callbacks = _a[0], setCallbacks = _a[1];
    var forwardProps = props.forwardProps, children = props.children, className = props.className, removeScrollBar = props.removeScrollBar, enabled = props.enabled, shards = props.shards, sideCar = props.sideCar, noIsolation = props.noIsolation, inert = props.inert, allowPinchZoom = props.allowPinchZoom, rest = tslib__WEBPACK_IMPORTED_MODULE_0__["__rest"](props, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noIsolation", "inert", "allowPinchZoom"]);
    var SideCar = sideCar;
    var containerProps = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({ ref: Object(use_callback_ref__WEBPACK_IMPORTED_MODULE_4__["useMergeRefs"])([
            ref,
            parentRef
        ]) }, rest, callbacks);
    return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null,
        enabled && (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](SideCar, { sideCar: _medium__WEBPACK_IMPORTED_MODULE_3__["effectCar"], removeScrollBar: removeScrollBar, shards: shards, noIsolation: noIsolation, inert: inert, setCallbacks: setCallbacks, allowPinchZoom: !!allowPinchZoom, lockRef: ref })),
        forwardProps ? (react__WEBPACK_IMPORTED_MODULE_1__["cloneElement"](react__WEBPACK_IMPORTED_MODULE_1__["Children"].only(children), containerProps)) : (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, containerProps, { className: className }), children))));
});
RemoveScroll.defaultProps = {
    enabled: true,
    removeScrollBar: true,
    inert: false
};
RemoveScroll.classNames = {
    fullWidth: react_remove_scroll_bar_constants__WEBPACK_IMPORTED_MODULE_2__["fullWidthClassName"],
    zeroRight: react_remove_scroll_bar_constants__WEBPACK_IMPORTED_MODULE_2__["zeroRightClassName"]
};



/***/ }),

/***/ "./node_modules/react-remove-scroll/dist/es2015/aggresiveCapture.js":
/*!**************************************************************************!*\
  !*** ./node_modules/react-remove-scroll/dist/es2015/aggresiveCapture.js ***!
  \**************************************************************************/
/*! exports provided: nonPassive */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "nonPassive", function() { return nonPassive; });
var passiveSupported = false;
if (typeof window !== 'undefined') {
    try {
        var options = Object.defineProperty({}, 'passive', {
            get: function () {
                passiveSupported = true;
                return true;
            }
        });
        window.addEventListener('test', options, options);
        window.removeEventListener('test', options, options);
    }
    catch (err) {
        passiveSupported = false;
    }
}
var nonPassive = passiveSupported ? { passive: false } : false;


/***/ }),

/***/ "./node_modules/react-remove-scroll/dist/es2015/handleScroll.js":
/*!**********************************************************************!*\
  !*** ./node_modules/react-remove-scroll/dist/es2015/handleScroll.js ***!
  \**********************************************************************/
/*! exports provided: locationCouldBeScrolled, handleScroll */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "locationCouldBeScrolled", function() { return locationCouldBeScrolled; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "handleScroll", function() { return handleScroll; });
var elementCouldBeVScrolled = function (node) {
    var styles = window.getComputedStyle(node);
    return (styles.overflowY !== 'hidden' && // not-not-scrollable
        !(styles.overflowY === styles.overflowX && styles.overflowY === 'visible') // scrollable
    );
};
var elementCouldBeHScrolled = function (node) {
    var styles = window.getComputedStyle(node);
    return (styles.overflowX !== 'hidden' && // not-not-scrollable
        !(styles.overflowY === styles.overflowX && styles.overflowX === 'visible') // scrollable
    );
};
var locationCouldBeScrolled = function (axis, node) {
    var current = node;
    do {
        var isScrollable = elementCouldBeScrolled(axis, current);
        if (isScrollable) {
            var _a = getScrollVariables(axis, current), s = _a[1], d = _a[2];
            if (s > d) {
                return true;
            }
        }
        current = current.parentNode;
    } while (current && current !== document.body);
    return false;
};
var getVScrollVariables = function (_a) {
    var scrollTop = _a.scrollTop, scrollHeight = _a.scrollHeight, clientHeight = _a.clientHeight;
    return [scrollTop, scrollHeight, clientHeight];
};
var getHScrollVariables = function (_a) {
    var scrollLeft = _a.scrollLeft, scrollWidth = _a.scrollWidth, clientWidth = _a.clientWidth;
    return [scrollLeft, scrollWidth, clientWidth];
};
var elementCouldBeScrolled = function (axis, node) {
    return axis === 'v' ? elementCouldBeVScrolled(node) : elementCouldBeHScrolled(node);
};
var getScrollVariables = function (axis, node) {
    return axis === 'v' ? getVScrollVariables(node) : getHScrollVariables(node);
};
var handleScroll = function (axis, endTarget, event, sourceDelta, noOverscroll) {
    var delta = sourceDelta;
    // find scrollable target
    var target = event.target;
    var targetInLock = endTarget.contains(target);
    var shouldCancelScroll = false;
    var isDeltaPositive = delta > 0;
    var availableScroll = 0;
    var availableScrollTop = 0;
    do {
        var _a = getScrollVariables(axis, target), position = _a[0], scroll_1 = _a[1], capacity = _a[2];
        var elementScroll = scroll_1 - capacity - position;
        if (position || elementScroll) {
            if (elementCouldBeScrolled(axis, target)) {
                availableScroll += elementScroll;
                availableScrollTop += position;
            }
        }
        target = target.parentNode;
    } while (
    // portaled content
    (!targetInLock && target !== document.body) ||
        // self content
        (targetInLock && (endTarget.contains(target) || endTarget === target)));
    if (0) {}
    else if (isDeltaPositive &&
        ((noOverscroll && availableScroll === 0) ||
            (!noOverscroll && delta > availableScroll))) {
        shouldCancelScroll = true;
    }
    else if (!isDeltaPositive &&
        ((noOverscroll && availableScrollTop === 0) ||
            (!noOverscroll && -delta > availableScrollTop))) {
        shouldCancelScroll = true;
    }
    return shouldCancelScroll;
};


/***/ }),

/***/ "./node_modules/react-remove-scroll/dist/es2015/index.js":
/*!***************************************************************!*\
  !*** ./node_modules/react-remove-scroll/dist/es2015/index.js ***!
  \***************************************************************/
/*! exports provided: RemoveScroll */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Combination__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Combination */ "./node_modules/react-remove-scroll/dist/es2015/Combination.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RemoveScroll", function() { return _Combination__WEBPACK_IMPORTED_MODULE_0__["default"]; });





/***/ }),

/***/ "./node_modules/react-remove-scroll/dist/es2015/medium.js":
/*!****************************************************************!*\
  !*** ./node_modules/react-remove-scroll/dist/es2015/medium.js ***!
  \****************************************************************/
/*! exports provided: effectCar */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "effectCar", function() { return effectCar; });
/* harmony import */ var use_sidecar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! use-sidecar */ "./node_modules/use-sidecar/dist/es2015/index.js");

var effectCar = Object(use_sidecar__WEBPACK_IMPORTED_MODULE_0__["createSidecarMedium"])();


/***/ }),

/***/ "./node_modules/react-remove-scroll/dist/es2015/sidecar.js":
/*!*****************************************************************!*\
  !*** ./node_modules/react-remove-scroll/dist/es2015/sidecar.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var use_sidecar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! use-sidecar */ "./node_modules/use-sidecar/dist/es2015/index.js");
/* harmony import */ var _SideEffect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SideEffect */ "./node_modules/react-remove-scroll/dist/es2015/SideEffect.js");
/* harmony import */ var _medium__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./medium */ "./node_modules/react-remove-scroll/dist/es2015/medium.js");



/* harmony default export */ __webpack_exports__["default"] = (Object(use_sidecar__WEBPACK_IMPORTED_MODULE_0__["exportSidecar"])(_medium__WEBPACK_IMPORTED_MODULE_2__["effectCar"], _SideEffect__WEBPACK_IMPORTED_MODULE_1__["RemoveScrollSideCar"]));


/***/ }),

/***/ "./node_modules/react-style-singleton/dist/es2015/component.js":
/*!*********************************************************************!*\
  !*** ./node_modules/react-style-singleton/dist/es2015/component.js ***!
  \*********************************************************************/
/*! exports provided: styleSingleton */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styleSingleton", function() { return styleSingleton; });
/* harmony import */ var _hook__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./hook */ "./node_modules/react-style-singleton/dist/es2015/hook.js");

var styleSingleton = function () {
    var useStyle = Object(_hook__WEBPACK_IMPORTED_MODULE_0__["styleHookSingleton"])();
    var Sheet = function (_a) {
        var styles = _a.styles;
        useStyle(styles);
        return null;
    };
    return Sheet;
};


/***/ }),

/***/ "./node_modules/react-style-singleton/dist/es2015/hook.js":
/*!****************************************************************!*\
  !*** ./node_modules/react-style-singleton/dist/es2015/hook.js ***!
  \****************************************************************/
/*! exports provided: styleHookSingleton */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styleHookSingleton", function() { return styleHookSingleton; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _singleton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./singleton */ "./node_modules/react-style-singleton/dist/es2015/singleton.js");


var styleHookSingleton = function () {
    var sheet = Object(_singleton__WEBPACK_IMPORTED_MODULE_1__["stylesheetSingleton"])();
    return function (styles) {
        react__WEBPACK_IMPORTED_MODULE_0__["useEffect"](function () {
            sheet.add(styles);
            return function () {
                sheet.remove();
            };
        }, []);
    };
};


/***/ }),

/***/ "./node_modules/react-style-singleton/dist/es2015/index.js":
/*!*****************************************************************!*\
  !*** ./node_modules/react-style-singleton/dist/es2015/index.js ***!
  \*****************************************************************/
/*! exports provided: styleSingleton, stylesheetSingleton, styleHookSingleton */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./component */ "./node_modules/react-style-singleton/dist/es2015/component.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "styleSingleton", function() { return _component__WEBPACK_IMPORTED_MODULE_0__["styleSingleton"]; });

/* harmony import */ var _singleton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./singleton */ "./node_modules/react-style-singleton/dist/es2015/singleton.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "stylesheetSingleton", function() { return _singleton__WEBPACK_IMPORTED_MODULE_1__["stylesheetSingleton"]; });

/* harmony import */ var _hook__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./hook */ "./node_modules/react-style-singleton/dist/es2015/hook.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "styleHookSingleton", function() { return _hook__WEBPACK_IMPORTED_MODULE_2__["styleHookSingleton"]; });






/***/ }),

/***/ "./node_modules/react-style-singleton/dist/es2015/singleton.js":
/*!*********************************************************************!*\
  !*** ./node_modules/react-style-singleton/dist/es2015/singleton.js ***!
  \*********************************************************************/
/*! exports provided: stylesheetSingleton */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stylesheetSingleton", function() { return stylesheetSingleton; });
/* harmony import */ var get_nonce__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! get-nonce */ "./node_modules/get-nonce/dist/es2015/index.js");

function makeStyleTag() {
    if (!document)
        return null;
    var tag = document.createElement('style');
    tag.type = 'text/css';
    var nonce = Object(get_nonce__WEBPACK_IMPORTED_MODULE_0__["getNonce"])();
    if (nonce) {
        tag.setAttribute('nonce', nonce);
    }
    return tag;
}
function injectStyles(tag, css) {
    if (tag.styleSheet) {
        tag.styleSheet.cssText = css;
    }
    else {
        tag.appendChild(document.createTextNode(css));
    }
}
function insertStyleTag(tag) {
    var head = document.head || document.getElementsByTagName('head')[0];
    head.appendChild(tag);
}
var stylesheetSingleton = function () {
    var counter = 0;
    var stylesheet = null;
    return {
        add: function (style) {
            if (counter == 0) {
                if (stylesheet = makeStyleTag()) {
                    injectStyles(stylesheet, style);
                    insertStyleTag(stylesheet);
                }
            }
            counter++;
        },
        remove: function () {
            counter--;
            if (!counter && stylesheet) {
                stylesheet.parentNode && stylesheet.parentNode.removeChild(stylesheet);
                stylesheet = null;
            }
        }
    };
};


/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function() { return __classPrivateFieldGet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function() { return __classPrivateFieldSet; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
}

function __classPrivateFieldSet(receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
}


/***/ }),

/***/ "./node_modules/use-callback-ref/dist/es2015/assignRef.js":
/*!****************************************************************!*\
  !*** ./node_modules/use-callback-ref/dist/es2015/assignRef.js ***!
  \****************************************************************/
/*! exports provided: assignRef */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "assignRef", function() { return assignRef; });
function assignRef(ref, value) {
    if (typeof ref === 'function') {
        ref(value);
    }
    else if (ref) {
        ref.current = value;
    }
    return ref;
}


/***/ }),

/***/ "./node_modules/use-callback-ref/dist/es2015/createRef.js":
/*!****************************************************************!*\
  !*** ./node_modules/use-callback-ref/dist/es2015/createRef.js ***!
  \****************************************************************/
/*! exports provided: createCallbackRef */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createCallbackRef", function() { return createCallbackRef; });
function createCallbackRef(callback) {
    var current = null;
    return {
        get current() {
            return current;
        },
        set current(value) {
            var last = current;
            if (last !== value) {
                current = value;
                callback(value, last);
            }
        }
    };
}


/***/ }),

/***/ "./node_modules/use-callback-ref/dist/es2015/index.js":
/*!************************************************************!*\
  !*** ./node_modules/use-callback-ref/dist/es2015/index.js ***!
  \************************************************************/
/*! exports provided: assignRef, useCallbackRef, createCallbackRef, mergeRefs, useMergeRefs, useTransformRef, transformRef, refToCallback, useRefToCallback */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _assignRef__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assignRef */ "./node_modules/use-callback-ref/dist/es2015/assignRef.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "assignRef", function() { return _assignRef__WEBPACK_IMPORTED_MODULE_0__["assignRef"]; });

/* harmony import */ var _useRef__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./useRef */ "./node_modules/use-callback-ref/dist/es2015/useRef.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useCallbackRef", function() { return _useRef__WEBPACK_IMPORTED_MODULE_1__["useCallbackRef"]; });

/* harmony import */ var _createRef__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./createRef */ "./node_modules/use-callback-ref/dist/es2015/createRef.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createCallbackRef", function() { return _createRef__WEBPACK_IMPORTED_MODULE_2__["createCallbackRef"]; });

/* harmony import */ var _mergeRef__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./mergeRef */ "./node_modules/use-callback-ref/dist/es2015/mergeRef.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "mergeRefs", function() { return _mergeRef__WEBPACK_IMPORTED_MODULE_3__["mergeRefs"]; });

/* harmony import */ var _useMergeRef__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./useMergeRef */ "./node_modules/use-callback-ref/dist/es2015/useMergeRef.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useMergeRefs", function() { return _useMergeRef__WEBPACK_IMPORTED_MODULE_4__["useMergeRefs"]; });

/* harmony import */ var _useTransformRef__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./useTransformRef */ "./node_modules/use-callback-ref/dist/es2015/useTransformRef.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useTransformRef", function() { return _useTransformRef__WEBPACK_IMPORTED_MODULE_5__["useTransformRef"]; });

/* harmony import */ var _transformRef__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./transformRef */ "./node_modules/use-callback-ref/dist/es2015/transformRef.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "transformRef", function() { return _transformRef__WEBPACK_IMPORTED_MODULE_6__["transformRef"]; });

/* harmony import */ var _refToCallback__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./refToCallback */ "./node_modules/use-callback-ref/dist/es2015/refToCallback.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "refToCallback", function() { return _refToCallback__WEBPACK_IMPORTED_MODULE_7__["refToCallback"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useRefToCallback", function() { return _refToCallback__WEBPACK_IMPORTED_MODULE_7__["useRefToCallback"]; });


// callback ref


// merge ref


// transform ref


// refToCallback



/***/ }),

/***/ "./node_modules/use-callback-ref/dist/es2015/mergeRef.js":
/*!***************************************************************!*\
  !*** ./node_modules/use-callback-ref/dist/es2015/mergeRef.js ***!
  \***************************************************************/
/*! exports provided: mergeRefs */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mergeRefs", function() { return mergeRefs; });
/* harmony import */ var _createRef__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createRef */ "./node_modules/use-callback-ref/dist/es2015/createRef.js");
/* harmony import */ var _assignRef__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assignRef */ "./node_modules/use-callback-ref/dist/es2015/assignRef.js");


function mergeRefs(refs) {
    return Object(_createRef__WEBPACK_IMPORTED_MODULE_0__["createCallbackRef"])(function (newValue) {
        return refs.forEach(function (ref) { return Object(_assignRef__WEBPACK_IMPORTED_MODULE_1__["assignRef"])(ref, newValue); });
    });
}


/***/ }),

/***/ "./node_modules/use-callback-ref/dist/es2015/refToCallback.js":
/*!********************************************************************!*\
  !*** ./node_modules/use-callback-ref/dist/es2015/refToCallback.js ***!
  \********************************************************************/
/*! exports provided: refToCallback, useRefToCallback */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "refToCallback", function() { return refToCallback; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useRefToCallback", function() { return useRefToCallback; });
function refToCallback(ref) {
    return function (newValue) {
        if (typeof ref === 'function') {
            ref(newValue);
        }
        else if (ref) {
            ref.current = newValue;
        }
    };
}
var nullCallback = function () { return null; };
// lets maintain a weak ref to, well, ref :)
// not using `kashe` to keep this package small
var weakMem = new WeakMap();
var weakMemoize = function (ref) {
    var usedRef = ref || nullCallback;
    if (weakMem.has(usedRef)) {
        return weakMem.get(usedRef);
    }
    var cb = refToCallback(usedRef);
    weakMem.set(usedRef, cb);
    return cb;
};
function useRefToCallback(ref) {
    return weakMemoize(ref);
}


/***/ }),

/***/ "./node_modules/use-callback-ref/dist/es2015/transformRef.js":
/*!*******************************************************************!*\
  !*** ./node_modules/use-callback-ref/dist/es2015/transformRef.js ***!
  \*******************************************************************/
/*! exports provided: transformRef */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "transformRef", function() { return transformRef; });
/* harmony import */ var _assignRef__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assignRef */ "./node_modules/use-callback-ref/dist/es2015/assignRef.js");
/* harmony import */ var _createRef__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./createRef */ "./node_modules/use-callback-ref/dist/es2015/createRef.js");


function transformRef(ref, transformer) {
    return Object(_createRef__WEBPACK_IMPORTED_MODULE_1__["createCallbackRef"])(function (value) { return Object(_assignRef__WEBPACK_IMPORTED_MODULE_0__["assignRef"])(ref, transformer(value)); });
}


/***/ }),

/***/ "./node_modules/use-callback-ref/dist/es2015/useMergeRef.js":
/*!******************************************************************!*\
  !*** ./node_modules/use-callback-ref/dist/es2015/useMergeRef.js ***!
  \******************************************************************/
/*! exports provided: useMergeRefs */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useMergeRefs", function() { return useMergeRefs; });
/* harmony import */ var _useRef__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./useRef */ "./node_modules/use-callback-ref/dist/es2015/useRef.js");
/* harmony import */ var _assignRef__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assignRef */ "./node_modules/use-callback-ref/dist/es2015/assignRef.js");


function useMergeRefs(refs, defaultValue) {
    return Object(_useRef__WEBPACK_IMPORTED_MODULE_0__["useCallbackRef"])(defaultValue, function (newValue) {
        return refs.forEach(function (ref) { return Object(_assignRef__WEBPACK_IMPORTED_MODULE_1__["assignRef"])(ref, newValue); });
    });
}


/***/ }),

/***/ "./node_modules/use-callback-ref/dist/es2015/useRef.js":
/*!*************************************************************!*\
  !*** ./node_modules/use-callback-ref/dist/es2015/useRef.js ***!
  \*************************************************************/
/*! exports provided: useCallbackRef */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useCallbackRef", function() { return useCallbackRef; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

function useCallbackRef(initialValue, callback) {
    var ref = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(function () { return ({
        // value
        value: initialValue,
        // last callback
        callback: callback,
        // "memoized" public interface
        facade: {
            get current() {
                return ref.value;
            },
            set current(value) {
                var last = ref.value;
                if (last !== value) {
                    ref.value = value;
                    ref.callback(value, last);
                }
            }
        }
    }); })[0];
    // update callback
    ref.callback = callback;
    return ref.facade;
}


/***/ }),

/***/ "./node_modules/use-callback-ref/dist/es2015/useTransformRef.js":
/*!**********************************************************************!*\
  !*** ./node_modules/use-callback-ref/dist/es2015/useTransformRef.js ***!
  \**********************************************************************/
/*! exports provided: useTransformRef */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useTransformRef", function() { return useTransformRef; });
/* harmony import */ var _useRef__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./useRef */ "./node_modules/use-callback-ref/dist/es2015/useRef.js");
/* harmony import */ var _assignRef__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assignRef */ "./node_modules/use-callback-ref/dist/es2015/assignRef.js");


function useTransformRef(ref, transformer) {
    return Object(_useRef__WEBPACK_IMPORTED_MODULE_0__["useCallbackRef"])(undefined, function (value) {
        return Object(_assignRef__WEBPACK_IMPORTED_MODULE_1__["assignRef"])(ref, transformer(value));
    });
}


/***/ }),

/***/ "./node_modules/use-sidecar/dist/es2015/config.js":
/*!********************************************************!*\
  !*** ./node_modules/use-sidecar/dist/es2015/config.js ***!
  \********************************************************/
/*! exports provided: config, setConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "config", function() { return config; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setConfig", function() { return setConfig; });
var config = {
    onError: function (e) { return console.error(e); },
};
var setConfig = function (conf) {
    Object.assign(config, conf);
};


/***/ }),

/***/ "./node_modules/use-sidecar/dist/es2015/env.js":
/*!*****************************************************!*\
  !*** ./node_modules/use-sidecar/dist/es2015/env.js ***!
  \*****************************************************/
/*! exports provided: env */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "env", function() { return env; });
/* harmony import */ var detect_node__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! detect-node */ "./node_modules/detect-node/browser.js");
/* harmony import */ var detect_node__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(detect_node__WEBPACK_IMPORTED_MODULE_0__);

var env = {
    isNode: detect_node__WEBPACK_IMPORTED_MODULE_0___default.a,
    forceCache: false,
};


/***/ }),

/***/ "./node_modules/use-sidecar/dist/es2015/exports.js":
/*!*********************************************************!*\
  !*** ./node_modules/use-sidecar/dist/es2015/exports.js ***!
  \*********************************************************/
/*! exports provided: exportSidecar */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "exportSidecar", function() { return exportSidecar; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


var SideCar = function (_a) {
    var sideCar = _a.sideCar, rest = tslib__WEBPACK_IMPORTED_MODULE_0__["__rest"](_a, ["sideCar"]);
    if (!sideCar) {
        throw new Error('Sidecar: please provide `sideCar` property to import the right car');
    }
    var Target = sideCar.read();
    if (!Target) {
        throw new Error('Sidecar medium not found');
    }
    return react__WEBPACK_IMPORTED_MODULE_1__["createElement"](Target, tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, rest));
};
SideCar.isSideCarExport = true;
function exportSidecar(medium, exported) {
    medium.useMedium(exported);
    return SideCar;
}


/***/ }),

/***/ "./node_modules/use-sidecar/dist/es2015/hoc.js":
/*!*****************************************************!*\
  !*** ./node_modules/use-sidecar/dist/es2015/hoc.js ***!
  \*****************************************************/
/*! exports provided: sidecar */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sidecar", function() { return sidecar; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _hook__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./hook */ "./node_modules/use-sidecar/dist/es2015/hook.js");



function sidecar(importer, errorComponent) {
    var ErrorCase = function () { return errorComponent; };
    return function Sidecar(props) {
        var _a = Object(_hook__WEBPACK_IMPORTED_MODULE_2__["useSidecar"])(importer, props.sideCar), Car = _a[0], error = _a[1];
        if (error && errorComponent) {
            return ErrorCase;
        }
        return Car ? react__WEBPACK_IMPORTED_MODULE_1__["createElement"](Car, tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, props)) : null;
    };
}


/***/ }),

/***/ "./node_modules/use-sidecar/dist/es2015/hook.js":
/*!******************************************************!*\
  !*** ./node_modules/use-sidecar/dist/es2015/hook.js ***!
  \******************************************************/
/*! exports provided: useSidecar */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useSidecar", function() { return useSidecar; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _env__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./env */ "./node_modules/use-sidecar/dist/es2015/env.js");


var cache = new WeakMap();
function useSidecar(importer, effect) {
    var options = effect && effect.options || {};
    if (_env__WEBPACK_IMPORTED_MODULE_1__["env"].isNode && !options.ssr) {
        return [null, null];
    }
    var couldUseCache = _env__WEBPACK_IMPORTED_MODULE_1__["env"].forceCache || (_env__WEBPACK_IMPORTED_MODULE_1__["env"].isNode && !!options.ssr) || (!options.async);
    var _a = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(couldUseCache ? function () { return cache.get(importer); } : undefined), Car = _a[0], setCar = _a[1];
    var _b = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null), error = _b[0], setError = _b[1];
    Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
        if (!Car) {
            importer()
                .then(function (car) {
                var resolved = effect ? effect.read() : (car.default || car);
                if (!resolved) {
                    console.error('Sidecar error: with importer', importer);
                    var error_1;
                    if (effect) {
                        console.error('Sidecar error: with medium', effect);
                        error_1 = new Error('Sidecar medium was not found');
                    }
                    else {
                        error_1 = new Error('Sidecar was not found in exports');
                    }
                    setError(function () { return error_1; });
                    throw error_1;
                }
                cache.set(importer, resolved);
                setCar(function () { return resolved; });
            }, function (e) { return setError(function () { return e; }); });
        }
    }, []);
    return [Car, error];
}
;


/***/ }),

/***/ "./node_modules/use-sidecar/dist/es2015/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/use-sidecar/dist/es2015/index.js ***!
  \*******************************************************/
/*! exports provided: sidecar, useSidecar, setConfig, createMedium, createSidecarMedium, renderCar, exportSidecar */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _hoc__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./hoc */ "./node_modules/use-sidecar/dist/es2015/hoc.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "sidecar", function() { return _hoc__WEBPACK_IMPORTED_MODULE_0__["sidecar"]; });

/* harmony import */ var _hook__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./hook */ "./node_modules/use-sidecar/dist/es2015/hook.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useSidecar", function() { return _hook__WEBPACK_IMPORTED_MODULE_1__["useSidecar"]; });

/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./config */ "./node_modules/use-sidecar/dist/es2015/config.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setConfig", function() { return _config__WEBPACK_IMPORTED_MODULE_2__["setConfig"]; });

/* harmony import */ var _medium__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./medium */ "./node_modules/use-sidecar/dist/es2015/medium.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createMedium", function() { return _medium__WEBPACK_IMPORTED_MODULE_3__["createMedium"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createSidecarMedium", function() { return _medium__WEBPACK_IMPORTED_MODULE_3__["createSidecarMedium"]; });

/* harmony import */ var _renderProp__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./renderProp */ "./node_modules/use-sidecar/dist/es2015/renderProp.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "renderCar", function() { return _renderProp__WEBPACK_IMPORTED_MODULE_4__["renderCar"]; });

/* harmony import */ var _exports__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./exports */ "./node_modules/use-sidecar/dist/es2015/exports.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "exportSidecar", function() { return _exports__WEBPACK_IMPORTED_MODULE_5__["exportSidecar"]; });









/***/ }),

/***/ "./node_modules/use-sidecar/dist/es2015/medium.js":
/*!********************************************************!*\
  !*** ./node_modules/use-sidecar/dist/es2015/medium.js ***!
  \********************************************************/
/*! exports provided: createMedium, createSidecarMedium */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createMedium", function() { return createMedium; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createSidecarMedium", function() { return createSidecarMedium; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

function ItoI(a) {
    return a;
}
function innerCreateMedium(defaults, middleware) {
    if (middleware === void 0) { middleware = ItoI; }
    var buffer = [];
    var assigned = false;
    var medium = {
        read: function () {
            if (assigned) {
                throw new Error('Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.');
            }
            if (buffer.length) {
                return buffer[buffer.length - 1];
            }
            return defaults;
        },
        useMedium: function (data) {
            var item = middleware(data, assigned);
            buffer.push(item);
            return function () {
                buffer = buffer.filter(function (x) { return x !== item; });
            };
        },
        assignSyncMedium: function (cb) {
            assigned = true;
            while (buffer.length) {
                var cbs = buffer;
                buffer = [];
                cbs.forEach(cb);
            }
            buffer = {
                push: function (x) { return cb(x); },
                filter: function () { return buffer; },
            };
        },
        assignMedium: function (cb) {
            assigned = true;
            var pendingQueue = [];
            if (buffer.length) {
                var cbs = buffer;
                buffer = [];
                cbs.forEach(cb);
                pendingQueue = buffer;
            }
            var executeQueue = function () {
                var cbs = pendingQueue;
                pendingQueue = [];
                cbs.forEach(cb);
            };
            var cycle = function () { return Promise.resolve().then(executeQueue); };
            cycle();
            buffer = {
                push: function (x) {
                    pendingQueue.push(x);
                    cycle();
                },
                filter: function (filter) {
                    pendingQueue = pendingQueue.filter(filter);
                    return buffer;
                },
            };
        },
    };
    return medium;
}
function createMedium(defaults, middleware) {
    if (middleware === void 0) { middleware = ItoI; }
    return innerCreateMedium(defaults, middleware);
}
function createSidecarMedium(options) {
    if (options === void 0) { options = {}; }
    var medium = innerCreateMedium(null);
    medium.options = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({ async: true, ssr: false }, options);
    return medium;
}


/***/ }),

/***/ "./node_modules/use-sidecar/dist/es2015/renderProp.js":
/*!************************************************************!*\
  !*** ./node_modules/use-sidecar/dist/es2015/renderProp.js ***!
  \************************************************************/
/*! exports provided: renderCar */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "renderCar", function() { return renderCar; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);



function renderCar(WrappedComponent, defaults, options) {
    if (options === void 0) { options = {}; }
    function State(_a) {
        var stateRef = _a.stateRef, props = _a.props;
        var renderTarget = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function SideTarget() {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            Object(react__WEBPACK_IMPORTED_MODULE_1__["useLayoutEffect"])(function () {
                stateRef.current(args);
            });
            return null;
        }, []);
        return react__WEBPACK_IMPORTED_MODULE_1__["createElement"](WrappedComponent, tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, props, { children: renderTarget }));
    }
    var Children = react__WEBPACK_IMPORTED_MODULE_1__["memo"](function (_a) {
        var stateRef = _a.stateRef, defaultState = _a.defaultState, children = _a.children;
        var _b = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(defaultState.current), state = _b[0], setState = _b[1];
        react__WEBPACK_IMPORTED_MODULE_1__["useEffect"](function () {
            stateRef.current = setState;
        }, []);
        return children.apply(void 0, state);
    }, function () { return true; });
    return function Combiner(props) {
        var defaultState = react__WEBPACK_IMPORTED_MODULE_1__["useRef"](defaults(props));
        var ref = react__WEBPACK_IMPORTED_MODULE_1__["useRef"](function (state) { return defaultState.current = state; });
        return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null,
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](State, { stateRef: ref, props: props }),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](Children, { stateRef: ref, defaultState: defaultState, children: props.children })));
    };
}


/***/ }),

/***/ "./node_modules/warning/warning.js":
/*!*****************************************!*\
  !*** ./node_modules/warning/warning.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



/**
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var __DEV__ = "development" !== 'production';

var warning = function() {};

if (__DEV__) {
  var printWarning = function printWarning(format, args) {
    var len = arguments.length;
    args = new Array(len > 1 ? len - 1 : 0);
    for (var key = 1; key < len; key++) {
      args[key - 1] = arguments[key];
    }
    var argIndex = 0;
    var message = 'Warning: ' +
      format.replace(/%s/g, function() {
        return args[argIndex++];
      });
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  }

  warning = function(condition, format, args) {
    var len = arguments.length;
    args = new Array(len > 2 ? len - 2 : 0);
    for (var key = 2; key < len; key++) {
      args[key - 2] = arguments[key];
    }
    if (format === undefined) {
      throw new Error(
          '`warning(condition, format, ...args)` requires a warning ' +
          'message argument'
      );
    }
    if (!condition) {
      printWarning.apply(null, [format].concat(args));
    }
  };
}

module.exports = warning;


/***/ }),

/***/ "./src/components/Layout.js":
/*!**********************************!*\
  !*** ./src/components/Layout.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-helmet */ "./node_modules/react-helmet/es/Helmet.js");
/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Footer */ "./src/components/Footer.js");
/* harmony import */ var _components_Navbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Navbar */ "./src/components/Navbar.js");
/* harmony import */ var _all_sass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./all.sass */ "./src/components/all.sass");
/* harmony import */ var _all_sass__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_all_sass__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _SiteMetadata__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./SiteMetadata */ "./src/components/SiteMetadata.js");
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! gatsby */ "./.cache/gatsby-browser-entry.js");
/* harmony import */ var react_netlify_identity_widget__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-netlify-identity-widget */ "./node_modules/react-netlify-identity-widget/dist/react-netlify-identity-widget.esm.js");
/* harmony import */ var react_netlify_identity_widget_styles_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-netlify-identity-widget/styles.css */ "./node_modules/react-netlify-identity-widget/styles.css");
/* harmony import */ var react_netlify_identity_widget_styles_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_netlify_identity_widget_styles_css__WEBPACK_IMPORTED_MODULE_8__);
var _this = undefined,
    _jsxFileName = "/Users/khristianmarcial/Projects/khrismarcial/src/components/Layout.js";

(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};











var TemplateWrapper = function TemplateWrapper(_ref) {
  var children = _ref.children;

  var _useSiteMetadata = Object(_SiteMetadata__WEBPACK_IMPORTED_MODULE_5__["default"])(),
      title = _useSiteMetadata.title,
      description = _useSiteMetadata.description;

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_helmet__WEBPACK_IMPORTED_MODULE_1__["Helmet"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("html", {
    lang: "en",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 9
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("title", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 9
    }
  }, title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    name: "description",
    content: description,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 9
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("link", {
    rel: "apple-touch-icon",
    sizes: "180x180",
    href: Object(gatsby__WEBPACK_IMPORTED_MODULE_6__["withPrefix"])('/') + "img/apple-touch-icon.png",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 9
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("link", {
    rel: "icon",
    type: "image/png",
    href: Object(gatsby__WEBPACK_IMPORTED_MODULE_6__["withPrefix"])('/') + "img/favicon-32x32.png",
    sizes: "32x32",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 9
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("link", {
    rel: "icon",
    type: "image/png",
    href: Object(gatsby__WEBPACK_IMPORTED_MODULE_6__["withPrefix"])('/') + "img/favicon-16x16.png",
    sizes: "16x16",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 9
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("link", {
    rel: "mask-icon",
    href: Object(gatsby__WEBPACK_IMPORTED_MODULE_6__["withPrefix"])('/') + "img/safari-pinned-tab.svg",
    color: "#ff4400",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 9
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    name: "theme-color",
    content: "#fff",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 9
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    property: "og:type",
    content: "business.business",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 9
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    property: "og:title",
    content: title,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 9
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    property: "og:url",
    content: "/",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 9
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    property: "og:image",
    content: Object(gatsby__WEBPACK_IMPORTED_MODULE_6__["withPrefix"])('/') + "img/og-image.jpg",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 9
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Navbar__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 7
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 7
    }
  }, children), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Footer__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 7
    }
  }));
};

__signature__(TemplateWrapper, "useSiteMetadata{{ title, description }}", function () {
  return [_SiteMetadata__WEBPACK_IMPORTED_MODULE_5__["default"]];
});

var _default = TemplateWrapper;
/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(TemplateWrapper, "TemplateWrapper", "/Users/khristianmarcial/Projects/khrismarcial/src/components/Layout.js");
  reactHotLoader.register(_default, "default", "/Users/khristianmarcial/Projects/khrismarcial/src/components/Layout.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "react-dom":
/*!***************************!*\
  !*** external "ReactDOM" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ReactDOM;

/***/ })

})
//# sourceMappingURL=cms.f8f62df877a916105996.hot-update.js.map