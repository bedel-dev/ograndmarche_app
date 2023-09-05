(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~components-pages-blogmasonry-blogmasonry-module-ngfactory~components-pages-commande-commande~cf23030b"],{

/***/ "CUlp":
/*!***********************************************!*\
  !*** ./node_modules/ev-emitter/ev-emitter.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
 * EvEmitter v1.1.0
 * Lil' event emitter
 * MIT License
 */

/* jshint unused: true, undef: true, strict: true */

( function( global, factory ) {
  // universal module definition
  /* jshint strict: false */ /* globals define, module, window */
  if ( true ) {
    // AMD - RequireJS
    !(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}

}( typeof window != 'undefined' ? window : this, function() {

"use strict";

function EvEmitter() {}

var proto = EvEmitter.prototype;

proto.on = function( eventName, listener ) {
  if ( !eventName || !listener ) {
    return;
  }
  // set events hash
  var events = this._events = this._events || {};
  // set listeners array
  var listeners = events[ eventName ] = events[ eventName ] || [];
  // only add once
  if ( listeners.indexOf( listener ) == -1 ) {
    listeners.push( listener );
  }

  return this;
};

proto.once = function( eventName, listener ) {
  if ( !eventName || !listener ) {
    return;
  }
  // add event
  this.on( eventName, listener );
  // set once flag
  // set onceEvents hash
  var onceEvents = this._onceEvents = this._onceEvents || {};
  // set onceListeners object
  var onceListeners = onceEvents[ eventName ] = onceEvents[ eventName ] || {};
  // set flag
  onceListeners[ listener ] = true;

  return this;
};

proto.off = function( eventName, listener ) {
  var listeners = this._events && this._events[ eventName ];
  if ( !listeners || !listeners.length ) {
    return;
  }
  var index = listeners.indexOf( listener );
  if ( index != -1 ) {
    listeners.splice( index, 1 );
  }

  return this;
};

proto.emitEvent = function( eventName, args ) {
  var listeners = this._events && this._events[ eventName ];
  if ( !listeners || !listeners.length ) {
    return;
  }
  // copy over to avoid interference if .off() in listener
  listeners = listeners.slice(0);
  args = args || [];
  // once stuff
  var onceListeners = this._onceEvents && this._onceEvents[ eventName ];

  for ( var i=0; i < listeners.length; i++ ) {
    var listener = listeners[i]
    var isOnce = onceListeners && onceListeners[ listener ];
    if ( isOnce ) {
      // remove listener
      // remove before trigger to prevent recursion
      this.off( eventName, listener );
      // unset once flag
      delete onceListeners[ listener ];
    }
    // trigger listener
    listener.apply( this, args );
  }

  return this;
};

proto.allOff = function() {
  delete this._events;
  delete this._onceEvents;
};

return EvEmitter;

}));


/***/ }),

/***/ "GytN":
/*!*************************************************************!*\
  !*** ./node_modules/ng-masonry-grid/ng-masonry-grid.umd.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

(function (global, factory) {
	 true ? factory(__webpack_require__(/*! @angular/core */ "8Y7J"),__webpack_require__(/*! @angular/common */ "SVse"),exports, __webpack_require__(/*! @angular/core */ "8Y7J"), __webpack_require__(/*! @angular/common */ "SVse"), __webpack_require__(/*! rxjs */ "qCKp")) :
	undefined;
}(this, (function (ɵngcc0,ɵngcc1,exports,core,common,rxjs) { 
var _c0 = ["ng-masonry-grid", ""];
var _c1 = ["*"];
'use strict';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/**
 * Shailendra Kumar <shailu.snist@gmail.com>
 * @ignore
 */
var NgMasonryGridService = /** @class */ (function () {
    function NgMasonryGridService(_platformId) {
        this._platformId = _platformId;
        this.items = [];
        this.itemsCount = 0;
        this.itemsRenderedCount = 0;
        this.isAnimate = false;
        this.docElem = window.document.documentElement;
        /**
         * Default animation options of grid items on scroll
         */
        this.animationDefaults = {
            animationEffect: 'effect-1',
            // default animation effect-1
            // Minimum and a maximum duration of the animation (random value is chosen)
            minDuration: 0,
            maxDuration: 0,
            // The viewportFactor defines how much of the appearing item has to be visible in order to trigger the animation
            // if we'd use a value of 0, this would mean that it would add the animation class as soon as the item is in the viewport.
            // If we were to use the value of 1, the animation would only be triggered when we see all of the item in the viewport (100% of it)
            viewportFactor: 0
        };
        /**
         * Default masonry options
         */
        this.masonryDefaults = {
            // Set default itemSelector: mandatory
            itemSelector: '[ng-masonry-grid-item], ng-masonry-grid-item, [ng-masonry-grid-item].animate, ng-masonry-grid-item.animate',
            initLayout: false,
            addStatus: 'append' // 'prepend' or 'add' or 'reorder'
        };
        this._onScrollHandler = this._onScrollFn.bind(this);
        this._onResizeHandler = this._resizeHandler.bind(this);
    }
    /**
     * @return {?}
     */
    NgMasonryGridService.prototype.getViewportH = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var client = this.docElem['clientHeight'];
        /** @type {?} */
        var inner = window['innerHeight'];
        if (client < inner) {
            return inner;
        }
        else {
            return client;
        }
    };
    /**
     * @return {?}
     */
    NgMasonryGridService.prototype.scrollY = /**
     * @return {?}
     */
    function () {
        return window.pageYOffset || this.docElem.scrollTop;
    };
    /**
     * @param {?} el
     * @return {?}
     */
    NgMasonryGridService.prototype.getOffset = /**
     * @param {?} el
     * @return {?}
     */
    function (el) {
        /** @type {?} */
        var offsetTop = 0;
        /** @type {?} */
        var offsetLeft = 0;
        do {
            if (!isNaN(el.offsetTop)) {
                offsetTop += el.offsetTop;
            }
            if (!isNaN(el.offsetLeft)) {
                offsetLeft += el.offsetLeft;
            }
        } while (el = el.offsetParent);
        return {
            top: offsetTop,
            left: offsetLeft
        };
    };
    /**
     * @param {?} el
     * @param {?=} h
     * @return {?}
     */
    NgMasonryGridService.prototype.inViewport = /**
     * @param {?} el
     * @param {?=} h
     * @return {?}
     */
    function (el, h) {
        if (h === void 0) { h = 0; }
        /** @type {?} */
        var elH = el.offsetHeight;
        /** @type {?} */
        var scrolled = this.scrollY();
        /** @type {?} */
        var viewed = scrolled + this.getViewportH();
        /** @type {?} */
        var elTop = this.getOffset(el).top;
        /** @type {?} */
        var elBottom = elTop + elH;
        // if 0, the element is considered in the viewport as soon as it enters.
        // if 1, the element is considered in the viewport only when it's fully inside
        // value in percentage (1 >= h >= 0)
        // h = h || 0;
        return (elTop + elH * h) <= viewed && (elBottom - elH * h) >= scrolled;
    };
    /**
     * @param {?} a
     * @param {?} b
     * @return {?}
     */
    NgMasonryGridService.prototype.extend = /**
     * @param {?} a
     * @param {?} b
     * @return {?}
     */
    function (a, b) {
        for (var key in b) {
            if (b.hasOwnProperty(key)) {
                a[key] = b[key];
            }
        }
        return a;
    };
    /**
     * Initialize and extend all options
     * @param {?} el
     * @param {?} masonryOptions
     * @param {?=} useAnimation
     * @param {?=} animationOptions
     * @param {?=} useImagesLoaded
     * @return {?}
     */
    NgMasonryGridService.prototype.init = /**
     * Initialize and extend all options
     * @param {?} el
     * @param {?} masonryOptions
     * @param {?=} useAnimation
     * @param {?=} animationOptions
     * @param {?=} useImagesLoaded
     * @return {?}
     */
    function (el, masonryOptions, useAnimation, animationOptions, useImagesLoaded) {
        this.useAnimation = useAnimation;
        this.el = el;
        this.isAnimate = this.useAnimation || (animationOptions ? true : false);
        this.useImagesLoaded = useImagesLoaded;
        this.masonryOptions = this.extend(this.masonryDefaults, masonryOptions);
        this.animationOptions = this.extend(this.animationDefaults, animationOptions);
        return this._init();
    };
    /**
     * @param {?} _element
     * @param {?} options
     * @return {?}
     */
    NgMasonryGridService.prototype.initializeMasonry = /**
     * @param {?} _element
     * @param {?} options
     * @return {?}
     */
    function (_element, options) {
        /** @type {?} */
        var Masonry = __webpack_require__(/*! masonry-layout */ "hNNL");
        return new Masonry(_element, options);
    };
    /**
     * @return {?}
     */
    NgMasonryGridService.prototype._init = /**
     * @return {?}
     */
    function () {
        if (this.isAnimate) {
            // add animation effect
            this.el.classList.add(this.animationOptions.animationEffect);
        }
        // get imagesloaded libary instance
        if (this.useImagesLoaded) {
            this.imagesLoaded = __webpack_require__(/*! imagesloaded */ "vX6Q");
        }
        // check if browser and then intialize Masonry
        if (common.isPlatformBrowser(this._platformId)) {
            return this._initMasonry();
        }
        return null;
    };
    /**
     * @return {?}
     */
    NgMasonryGridService.prototype._initMasonry = /**
     * @return {?}
     */
    function () {
        var _this = this;
        // initialize masonry
        this._msnry = this.initializeMasonry(this.el, this.masonryOptions);
        // use animation options if useAnimation is true
        if (this.isAnimate && this._msnry) {
            // animate on scroll the items inside the viewport
            window.addEventListener('scroll', this._onScrollHandler, false);
            window.addEventListener('resize', this._onResizeHandler, false);
            /**
                   * Remove scroll animations to remove conflicts between Masonry Transitions and Scroll Animations
                   */
            this._msnry.on('layoutComplete', function (items) {
                Array.prototype.slice.call(_this.el.children).forEach(function (element) {
                    element.classList.remove('animate');
                });
            });
            this._msnry.on('removeComplete', function (items) {
                Array.prototype.slice.call(_this.el.children).forEach(function (element) {
                    element.classList.remove('animate');
                });
                _this._msnry.layout();
            });
        }
        return this._msnry;
    };
    /**
     * @return {?}
     */
    NgMasonryGridService.prototype._onScrollFn = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var self = this;
        if (!this.didScroll) {
            this.didScroll = true;
            setTimeout(function () { self._scrollPage(); }, 100);
        }
    };
    /**
     * @return {?}
     */
    NgMasonryGridService.prototype._scrollPage = /**
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var self = this;
        /** @type {?} */
        var items = this._msnry.items.map(function (item) { return item.element; });
        if (items.length) {
            items.forEach(function (el, i) {
                if (_this.inViewport(el, self.animationOptions.viewportFactor)) {
                    /** @type {?} */
                    var perspY = _this.scrollY() + _this.getViewportH() / 2;
                    self.el.style.WebkitPerspectiveOrigin = '50% ' + perspY + 'px';
                    self.el.style.MozPerspectiveOrigin = '50% ' + perspY + 'px';
                    self.el.style.perspectiveOrigin = '50% ' + perspY + 'px';
                    if (self.animationOptions.minDuration && self.animationOptions.maxDuration) {
                        /** @type {?} */
                        var randDuration = (Math.random() * (self.animationOptions.maxDuration - self.animationOptions.minDuration)
                            + self.animationOptions.minDuration) + 's';
                        el.style.WebkitAnimationDuration = randDuration;
                        el.style.MozAnimationDuration = randDuration;
                        el.style.animationDuration = randDuration;
                    }
                    el.classList.add('animate');
                    // }, 25 );
                }
                else {
                    el.classList.remove('animate');
                }
            });
        }
        this.didScroll = false;
    };
    /**
     * @return {?}
     */
    NgMasonryGridService.prototype._resizeHandler = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var self = this;
        Array.prototype.slice.call(this.el.children).forEach(function (element) {
            element.classList.remove('animate');
        });
        /**
         * @return {?}
         */
        function delayed() {
            self._scrollPage();
            self.resizeTimeout = null;
        }
        if (this.resizeTimeout) {
            clearTimeout(this.resizeTimeout);
        }
        this.resizeTimeout = setTimeout(delayed, 500);
    };
    /**
     * Check if total grid items are redered in the DOM
     * @return {?}
     */
    NgMasonryGridService.prototype._checkTotalRendered = /**
     * Check if total grid items are redered in the DOM
     * @return {?}
     */
    function () {
        ++this.itemsRenderedCount;
        if (this.itemsRenderedCount === this.itemsCount) {
            window.removeEventListener('scroll', this._onScrollHandler, false);
        }
    };
    /**
     * On Destroy remove Scroll and Resize event Listeners
     * @return {?}
     */
    NgMasonryGridService.prototype.onDestory = /**
     * On Destroy remove Scroll and Resize event Listeners
     * @return {?}
     */
    function () {
        window.removeEventListener('scroll', this._onScrollHandler, false);
        window.removeEventListener('resize', this._onResizeHandler, false);
    };
    /**
     * Remove scroll animations
     * @return {?}
     */
    NgMasonryGridService.prototype.removeAnimation = /**
     * Remove scroll animations
     * @return {?}
     */
    function () {
        if (this.isAnimate) {
            Array.prototype.slice.call(this.el.children).forEach(function (element) {
                element.classList.remove('animate');
            });
        }
    };
    /**
     * Add Each grid item to Masonry based on Masony addStatus property
     * @param {?} element Element - Grid item
     * @return {?}
     */
    NgMasonryGridService.prototype.add = /**
     * Add Each grid item to Masonry based on Masony addStatus property
     * @param {?} element Element - Grid item
     * @return {?}
     */
    function (element) {
        var _this = this;
        /** @type {?} */
        var addStatus = this.masonryOptions.addStatus.toLowerCase();
        // set margin bottom of gutter value.
        if (this.masonryOptions.gutter) {
            element.style.marginBottom = this.masonryOptions.gutter + 'px';
        }
        if (this.el.hasChildNodes() && this.el.contains(element)) {
            this.el.removeChild(element);
        }
        if (this.useImagesLoaded) {
            setTimeout(function () {
                _this.imagesLoaded(element, function (instance) {
                    ++_this.itemsRenderedCount;
                    _this.items.push(element);
                    // append or prepend based on masonry option
                    if (addStatus === 'prepend') {
                        if (_this._msnry.items.length !== 0) {
                            _this.el.insertBefore(element, _this._msnry.items[0].element);
                        }
                        else {
                            _this.el.appendChild(element);
                        }
                    }
                    else if (addStatus === 'append') {
                        _this.el.appendChild(element);
                    }
                    else {
                        _this.el.appendChild(element);
                    }
                    setTimeout(function () {
                        if (addStatus === 'prepend') {
                            if (_this._msnry.items.length !== 0) {
                                _this._msnry.prepended(element);
                            }
                            else {
                                _this._msnry.appended(element);
                            }
                        }
                        else if (addStatus === 'append') {
                            _this._msnry.appended(element);
                        }
                        else {
                            _this._msnry.addItems(element);
                        }
                        _this._msnry.layout();
                    }, 0);
                });
            }, 0);
        }
        else {
            setTimeout(function () {
                ++_this.itemsRenderedCount;
                _this.items.push(element);
                if (addStatus === 'prepend') {
                    if (_this._msnry.items.length !== 0) {
                        _this.el.insertBefore(element, _this._msnry.items[0].element);
                        // this._msnry.prepended(itemElem);
                    }
                    else {
                        _this.el.appendChild(element);
                        // this._msnry.appended(itemElem);
                    }
                }
                else if (addStatus === 'append') {
                    _this.el.appendChild(element);
                    // this._msnry.appended(itemElem);
                }
                else {
                    _this.el.appendChild(element);
                    // this._msnry.addItems(itemElem);
                }
                setTimeout(function () {
                    if (addStatus === 'prepend') {
                        if (_this._msnry.items.length !== 0) {
                            _this._msnry.prepended(element);
                        }
                        else {
                            _this._msnry.appended(element);
                        }
                    }
                    else if (addStatus === 'append') {
                        _this._msnry.appended(element);
                    }
                    else {
                        _this._msnry.addItems(element);
                    }
                    _this._msnry.layout();
                }, 50);
            }, 0);
        }
    };
    /**
     * TODO: reorder masonry items on load
     * @param {?} element
     * @return {?}
     */
    NgMasonryGridService.prototype.addOrderItem = /**
     * TODO: reorder masonry items on load
     * @param {?} element
     * @return {?}
     */
    function (element) {
        var _this = this;
        /** @type {?} */
        var addStatus = this.masonryOptions.addStatus.toLowerCase();
        // set margin bottom of gutter value.
        if (this.masonryOptions.gutter) {
            element.style.marginBottom = this.masonryOptions.gutter + 'px';
        }
        if (this.useImagesLoaded) {
            setTimeout(function () {
                _this.imagesLoaded(element, function (instance) {
                });
            }, 0);
        }
        else {
            setTimeout(function () {
                if (addStatus === 'prepend') {
                    if (_this._msnry.items.length !== 0) {
                        _this.el.insertBefore(element, _this._msnry.items[0].element);
                        // this._msnry.prepended(element);
                    }
                    else {
                        _this.el.appendChild(element);
                        // this._msnry.appended(element);
                    }
                }
                else if (addStatus === 'append') {
                    _this.el.appendChild(element);
                    // this._msnry.appended(element);
                }
                else {
                    _this.el.appendChild(element);
                    // this._msnry.addItems(element);
                }
                setTimeout(function () {
                    if (_this.itemsRenderedCount === _this.itemsCount) {
                        if (addStatus === 'prepend') {
                            if (_this._msnry.items.length !== 0) {
                                _this._msnry.prepended(element);
                                _this._msnry.layout();
                            }
                            else {
                                _this._msnry.appended(element);
                                _this._msnry.layout();
                            }
                        }
                        else if (addStatus === 'append') {
                            _this._msnry.appended(element);
                            _this._msnry.layout();
                        }
                        else {
                            _this._msnry.addItems(element);
                            _this._msnry.layout();
                        }
                    }
                }, 500);
            }, 0);
        }
    };
    /**
     * Re order Masonry items to original order
     * @return {?}
     */
    NgMasonryGridService.prototype.reorderMasonryItems = /**
     * Re order Masonry items to original order
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.itemsRenderedCount === this.itemsCount) {
            /** @type {?} */
            var reorderItems_1 = this.items.sort(function (a, b) {
                return a.dataset.count - b.dataset.count;
            });
            while (this.el.hasChildNodes()) {
                this.el.removeChild(this.el.lastChild);
            }
            setTimeout(function () {
                reorderItems_1.forEach(function (item) {
                    _this.el.appendChild(item);
                    _this._msnry.appended(item);
                });
                if (_this._msnry) {
                    _this._msnry.reloadItems();
                    _this._msnry.layout();
                }
            }, 100);
        }
    };
    /**
     * Set add status to Masonry before adding or appending
     * @param {?} value 'append' or 'prepend' or 'add'
     * @return {?}
     */
    NgMasonryGridService.prototype.setAddStatus = /**
     * Set add status to Masonry before adding or appending
     * @param {?} value 'append' or 'prepend' or 'add'
     * @return {?}
     */
    function (value) {
        this.masonryOptions.addStatus = value;
    };
    /**
     * Remove grid item from Masonry
     * @param {?} item Element: Removed Grid Item DOM
     * @return {?}
     */
    NgMasonryGridService.prototype.removeItem = /**
     * Remove grid item from Masonry
     * @param {?} item Element: Removed Grid Item DOM
     * @return {?}
     */
    function (item) {
        var _this = this;
        this.removeAnimation();
        if (item) {
            item.classList.remove('animate');
            /** @type {?} */
            var obsv = rxjs.Observable.create(function (observer) {
                /** @type {?} */
                var count = item.getAttribute('data-count');
                /** @type {?} */
                var index = _this._msnry.items.findIndex(function (masonryItem) {
                    return masonryItem.element.getAttribute('data-count') === count;
                });
                setTimeout(function () {
                    /** @type {?} */
                    var elem = _this._msnry.items[index].element;
                    _this._onTransitionEnd(observer, elem);
                    /** @type {?} */
                    var indx = _this.items.findIndex(function (element) {
                        return element.dataset.count === item.dataset.count;
                    });
                    _this.items.splice(indx, 1);
                }, 20);
            });
            return obsv;
        }
        return rxjs.empty();
    };
    /**
     * Remove first grid item from the Masonry List
     * @return {?}
     */
    NgMasonryGridService.prototype.removeFirstItem = /**
     * Remove first grid item from the Masonry List
     * @return {?}
     */
    function () {
        var _this = this;
        this.removeAnimation();
        if (this._msnry.items.length) {
            this._msnry.items[0].element.classList.remove('animate');
            /** @type {?} */
            var obsv = rxjs.Observable.create(function (observer) {
                //setTimeout(() => {
                //setTimeout(() => {
                _this._onTransitionEnd(observer, _this._msnry.items[0].element);
                _this.items.splice(0, 1);
                //}, 10);
            });
            return obsv;
        }
        return rxjs.empty();
    };
    /**
     * Empty the Masonry list
     * @return {?}
     */
    NgMasonryGridService.prototype.removeAllItems = /**
     * Empty the Masonry list
     * @return {?}
     */
    function () {
        var _this = this;
        this.removeAnimation();
        /** @type {?} */
        var obsv = rxjs.Observable.create(function (observer) {
            setTimeout(function () {
                /** @type {?} */
                var items = [];
                _this._msnry.items.forEach(function (masonryItem, index) {
                    items.push({ element: masonryItem.element, index: index });
                    _this.addTransition(masonryItem.element);
                });
                /** @type {?} */
                var elem = _this._msnry.items[_this._msnry.items.length - 1].element;
                /** @type {?} */
                var transitionEnd = function () {
                    observer.next(items);
                    setTimeout(function () {
                        _this._msnry.reloadItems();
                        _this._msnry.layout();
                        _this.items = [];
                        _this.itemsCount = 0;
                        _this.itemsRenderedCount = 0;
                    }, 10);
                    elem.removeEventListener('transitionend', transitionEnd, false);
                };
                elem.addEventListener('transitionend', transitionEnd, false);
                if (_this.masonryOptions.transitionDuration === "0") {
                    transitionEnd();
                }
            }, 10);
        });
        return obsv;
    };
    /**
     * Add transition effect on DOM Node removal
     * @param {?} elem
     * @return {?}
     */
    NgMasonryGridService.prototype.addTransition = /**
     * Add transition effect on DOM Node removal
     * @param {?} elem
     * @return {?}
     */
    function (elem) {
        elem.style.transition = 'transform ' + this.masonryOptions.transitionDuration + ', opacity ' + this.masonryOptions.transitionDuration;
        elem.style.transform = 'scale(0.001)';
        elem.style.opacity = '0';
    };
    /**
     * On transition End, remove eventListener
     * @param {?} observer Subscriber<MasonryGridItem>
     * @param {?} elem
     * @return {?}
     */
    NgMasonryGridService.prototype._onTransitionEnd = /**
     * On transition End, remove eventListener
     * @param {?} observer Subscriber<MasonryGridItem>
     * @param {?} elem
     * @return {?}
     */
    function (observer, elem) {
        var _this = this;
        if (elem) {
            this.addTransition(elem);
            /** @type {?} */
            var transitionEnd_1 = function () {
                /** @type {?} */
                var isindex = Array.prototype.slice.call(_this.el.children).findIndex(function (element) {
                    return element.getAttribute('data-count') === elem.getAttribute('data-count');
                });
                if (isindex !== -1) {
                    observer.next({ element: elem, index: isindex });
                }
                setTimeout(function () {
                    _this._msnry.reloadItems();
                    _this._msnry.layout();
                }, 10);
                elem.removeEventListener('transitionend', transitionEnd_1, false);
            };
            elem.addEventListener('transitionend', transitionEnd_1, false);
        }
    };
    /** @nocollapse */
    NgMasonryGridService.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: core.Inject, args: [core.PLATFORM_ID,] }] }
    ]; };
NgMasonryGridService.ɵfac = function NgMasonryGridService_Factory(t) { return new (t || NgMasonryGridService)(ɵngcc0.ɵɵinject(core.PLATFORM_ID)); };
NgMasonryGridService.ɵprov = ɵngcc0.ɵɵdefineInjectable({ token: NgMasonryGridService, factory: function (t) { return NgMasonryGridService.ɵfac(t); } });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NgMasonryGridService, [{
        type: core.Injectable
    }], function () { return [{ type: undefined, decorators: [{
                type: core.Inject,
                args: [core.PLATFORM_ID]
            }] }]; }, null); })();
    return NgMasonryGridService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/**
 * Shailendra Kumar <shailu.snist@gmail.com>
 * @ignore
 */
var NgMasonryGridComponent = /** @class */ (function () {
    function NgMasonryGridComponent(_platformId, _element, masonryGridService) {
        this._platformId = _platformId;
        this._element = _element;
        this.masonryGridService = masonryGridService;
        // Inputs
        this.masonryOptions = {};
        this.useAnimation = false;
        this.useImagesLoaded = false;
        // Outputs
        this.layoutComplete = new core.EventEmitter();
        this.removeComplete = new core.EventEmitter();
        this.onNgMasonryInit = new core.EventEmitter();
    }
    /**
     * @return {?}
     */
    NgMasonryGridComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this._element.nativeElement.classList.add('grid');
        this.initializeMasonry();
    };
    /**
     * @return {?}
     */
    NgMasonryGridComponent.prototype.ngAfterContentInit = /**
     * @return {?}
     */
    function () {
        // initialize masonry after View Initialization
        // this.initializeMasonry();
    };
    /**
     * @return {?}
     */
    NgMasonryGridComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        if (this._msnry) {
            this._msnry.destroy();
            this.masonryGridService.onDestory();
        }
    };
    /**
     * @return {?}
     */
    NgMasonryGridComponent.prototype.layout = /**
     * @return {?}
     */
    function () {
        var _this = this;
        setTimeout(function () {
            _this._msnry.layout();
        }, 50);
    };
    /**
     * @param {?} element
     * @return {?}
     */
    NgMasonryGridComponent.prototype.remove = /**
     * @param {?} element
     * @return {?}
     */
    function (element) {
        this._msnry.remove(element);
        this.layout();
    };
    /**
     * @param {?} element
     * @return {?}
     */
    NgMasonryGridComponent.prototype.add = /**
     * @param {?} element
     * @return {?}
     */
    function (element) {
        this.masonryGridService.add(element);
    };
    /**
     * @return {?}
     */
    NgMasonryGridComponent.prototype.initializeMasonry = /**
     * @return {?}
     */
    function () {
        var _this = this;
        // initialize Masonry with Animation effects
        this._msnry = this.masonryGridService
            .init(this._element.nativeElement, this.masonryOptions, this.useAnimation, this.scrollAnimationOptions, this.useImagesLoaded);
        // Bind to Masonry events
        this._msnry.on('layoutComplete', function (items) {
            _this.layoutComplete.emit(items);
        });
        this._msnry.on('removeComplete', function (items) {
            _this.removeComplete.emit(items);
        });
        this._msnry.removeAnimation = function () {
            _this.masonryGridService.removeAnimation();
        };
        this._msnry.setAddStatus = function (value) {
            _this.masonryGridService.setAddStatus(value);
        };
        this._msnry.removeItem = function (item) {
            return _this.masonryGridService.removeItem(item);
        };
        this._msnry.removeFirstItem = function () {
            return _this.masonryGridService.removeFirstItem();
        };
        this._msnry.removeAllItems = function () {
            return _this.masonryGridService.removeAllItems();
        };
        this._msnry.reOrderItems = function () {
            return _this.masonryGridService.reorderMasonryItems();
        };
        // emit Masonry Initialization event
        this.onNgMasonryInit.emit(this._msnry);
        this.layout();
    };
    /** @nocollapse */
    NgMasonryGridComponent.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: core.Inject, args: [core.PLATFORM_ID,] }] },
        { type: core.ElementRef },
        { type: NgMasonryGridService }
    ]; };
    NgMasonryGridComponent.propDecorators = {
        masonryOptions: [{ type: core.Input }],
        useAnimation: [{ type: core.Input }],
        scrollAnimationOptions: [{ type: core.Input }],
        useImagesLoaded: [{ type: core.Input }],
        layoutComplete: [{ type: core.Output }],
        removeComplete: [{ type: core.Output }],
        onNgMasonryInit: [{ type: core.Output }]
    };
NgMasonryGridComponent.ɵfac = function NgMasonryGridComponent_Factory(t) { return new (t || NgMasonryGridComponent)(ɵngcc0.ɵɵdirectiveInject(core.PLATFORM_ID), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef), ɵngcc0.ɵɵdirectiveInject(NgMasonryGridService)); };
NgMasonryGridComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: NgMasonryGridComponent, selectors: [["", "ng-masonry-grid", ""], ["ng-masonry-grid"]], inputs: { masonryOptions: "masonryOptions", useAnimation: "useAnimation", useImagesLoaded: "useImagesLoaded", scrollAnimationOptions: "scrollAnimationOptions" }, outputs: { layoutComplete: "layoutComplete", removeComplete: "removeComplete", onNgMasonryInit: "onNgMasonryInit" }, attrs: _c0, ngContentSelectors: _c1, decls: 1, vars: 0, template: function NgMasonryGridComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵprojectionDef();
        ɵngcc0.ɵɵprojection(0);
    } }, styles: ["[_nghost-%COMP%] {\n\t\t\tdisplay: block;\n\t\t}"] });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NgMasonryGridComponent, [{
        type: core.Component,
        args: [{
                selector: '[ng-masonry-grid], ng-masonry-grid',
                template: '<ng-content></ng-content>',
                styles: [
                    "\n\t\t:host {\n\t\t\tdisplay: block;\n\t\t}\n\t"
                ]
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: core.Inject,
                args: [core.PLATFORM_ID]
            }] }, { type: ɵngcc0.ElementRef }, { type: NgMasonryGridService }]; }, { masonryOptions: [{
            type: core.Input
        }], useAnimation: [{
            type: core.Input
        }], useImagesLoaded: [{
            type: core.Input
        }], layoutComplete: [{
            type: core.Output
        }], removeComplete: [{
            type: core.Output
        }], onNgMasonryInit: [{
            type: core.Output
        }], scrollAnimationOptions: [{
            type: core.Input
        }] }); })();
    return NgMasonryGridComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/**
 * Shailendra Kumar <shailu.snist@gmail.com>
 * @ignore
 */
var NgMasonryGridDirective = /** @class */ (function () {
    function NgMasonryGridDirective(_element, _parent, platformId, masonryGridService) {
        this._element = _element;
        this._parent = _parent;
        this.platformId = platformId;
        this.masonryGridService = masonryGridService;
    }
    /**
     * @return {?}
     */
    NgMasonryGridDirective.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        // this._parent.add(this._element.nativeElement);
    };
    /**
     * Add Masonry grid item after view initialization
     */
    /**
     * Add Masonry grid item after view initialization
     * @return {?}
     */
    NgMasonryGridDirective.prototype.ngAfterViewInit = /**
     * Add Masonry grid item after view initialization
     * @return {?}
     */
    function () {
        if (common.isPlatformBrowser(this.platformId)) {
            this.masonryGridService.itemsCount++;
            // set count attribute for every grid item
            this._element.nativeElement.setAttribute('data-count', this.masonryGridService.itemsCount);
            // if (this.masonryGridService.masonryOptions.horizontalOrder) {
            //   this.masonryGridService.addOrderItem(this._element.nativeElement);
            // } else {
            //   this._parent.add(this._element.nativeElement);
            // }
            this._parent.add(this._element.nativeElement);
            this.watchForHtmlChanges();
        }
    };
    /**
     * @return {?}
     */
    NgMasonryGridDirective.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
    };
    /**
     * When HTML in brick changes dynamically, observe that and change layout
     * @return {?}
     */
    NgMasonryGridDirective.prototype.watchForHtmlChanges = /**
     * When HTML in brick changes dynamically, observe that and change layout
     * @return {?}
     */
    function () {
        MutationObserver = window.MutationObserver || window.WebKitMutationObserver;
        if (MutationObserver) {
            /** *
             * Watch for any changes to subtree
              @type {?} */
            var self_1 = this;
            /** @type {?} */
            var observer = new MutationObserver(function (mutations, observerFromElement) {
                self_1._parent.layout();
            });
            // define what element should be observed by the observer
            // and what types of mutations trigger the callback
            observer.observe(this._element.nativeElement, {
                subtree: true,
                childList: true
            });
        }
    };
    /** @nocollapse */
    NgMasonryGridDirective.ctorParameters = function () { return [
        { type: core.ElementRef },
        { type: NgMasonryGridComponent, decorators: [{ type: core.Inject, args: [core.forwardRef(function () { return NgMasonryGridComponent; }),] }] },
        { type: undefined, decorators: [{ type: core.Inject, args: [core.PLATFORM_ID,] }] },
        { type: NgMasonryGridService }
    ]; };
NgMasonryGridDirective.ɵfac = function NgMasonryGridDirective_Factory(t) { return new (t || NgMasonryGridDirective)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef), ɵngcc0.ɵɵdirectiveInject(core.forwardRef(function () { return NgMasonryGridComponent; })), ɵngcc0.ɵɵdirectiveInject(core.PLATFORM_ID), ɵngcc0.ɵɵdirectiveInject(NgMasonryGridService)); };
NgMasonryGridDirective.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: NgMasonryGridDirective, selectors: [["", "ng-masonry-grid-item", ""], ["ng-masonry-grid-item"]] });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NgMasonryGridDirective, [{
        type: core.Directive,
        args: [{
                // tslint:disable-next-line:directive-selector
                selector: '[ng-masonry-grid-item], ng-masonry-grid-item'
            }]
    }], function () { return [{ type: ɵngcc0.ElementRef }, { type: NgMasonryGridComponent, decorators: [{
                type: core.Inject,
                args: [core.forwardRef(function () { return NgMasonryGridComponent; })]
            }] }, { type: undefined, decorators: [{
                type: core.Inject,
                args: [core.PLATFORM_ID]
            }] }, { type: NgMasonryGridService }]; }, null); })();
    return NgMasonryGridDirective;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/**
 * Shailendra Kumar <shailu.snist@gmail.com>
 * @ignore
 */
var NgMasonryGridModule = /** @class */ (function () {
    function NgMasonryGridModule() {
    }
NgMasonryGridModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: NgMasonryGridModule });
NgMasonryGridModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function NgMasonryGridModule_Factory(t) { return new (t || NgMasonryGridModule)(); }, providers: [NgMasonryGridService], imports: [[common.CommonModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(NgMasonryGridModule, { declarations: [NgMasonryGridComponent, NgMasonryGridDirective], imports: [ɵngcc1.CommonModule], exports: [NgMasonryGridComponent, NgMasonryGridDirective] }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NgMasonryGridModule, [{
        type: core.NgModule,
        args: [{
                imports: [common.CommonModule],
                exports: [NgMasonryGridComponent, NgMasonryGridDirective],
                declarations: [NgMasonryGridComponent, NgMasonryGridDirective],
                providers: [NgMasonryGridService]
            }]
    }], function () { return []; }, null); })();
    return NgMasonryGridModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/**
 * Masonry Grid item
 */
var MasonryGridItem = /** @class */ (function () {
    function MasonryGridItem() {
    }
    return MasonryGridItem;
}());
/**
 * Masonry Options
 * @record
 */

/**
 * Masonry Object
 */
var Masonry = /** @class */ (function () {
    function Masonry(selector, options) {
    }
    
    return Masonry;
}());
/**
 * Scroll Animation options
 * @record
 */

/**
 * interface for an image currently loading or completed
 * @record
 */

/**
 * @record
 */

/**
 * @record
 */

/**
 * @record
 */

/**
 * @record
 */

/**
 * @record
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

exports.NgMasonryGridModule = NgMasonryGridModule;
exports.NgMasonryGridComponent = NgMasonryGridComponent;
exports.NgMasonryGridDirective = NgMasonryGridDirective;
exports.NgMasonryGridService = NgMasonryGridService;
exports.Masonry = Masonry;
exports.MasonryGridItem = MasonryGridItem;

Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmctbWFzb25yeS1ncmlkLnVtZC5qcyIsInNvdXJjZXMiOlsibmctbWFzb25yeS1ncmlkLnVtZC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBLDRIQUF3RTtBQUN4RSx3RkFBc0Q7QUFDdEQsMENBQVU7QUFDVixpQ0FBbUI7OztBQUE0QjtBQUMvQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFHTTtBQUNOO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztrQ0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQVNNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztvQkFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQU1NO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztrRUFBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztnREFRTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gKGdsb2JhbCwgZmFjdG9yeSkge1xuXHR0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSAhPT0gJ3VuZGVmaW5lZCcgPyBmYWN0b3J5KGV4cG9ydHMsIHJlcXVpcmUoJ0Bhbmd1bGFyL2NvcmUnKSwgcmVxdWlyZSgnQGFuZ3VsYXIvY29tbW9uJyksIHJlcXVpcmUoJ3J4anMnKSkgOlxuXHR0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQgPyBkZWZpbmUoWydleHBvcnRzJywgJ0Bhbmd1bGFyL2NvcmUnLCAnQGFuZ3VsYXIvY29tbW9uJywgJ3J4anMnXSwgZmFjdG9yeSkgOlxuXHQoZmFjdG9yeSgoZ2xvYmFsWyduZy1tYXNvbnJ5LWdyaWQnXSA9IHt9KSxnbG9iYWwuY29yZSxnbG9iYWwuY29tbW9uLGdsb2JhbC5yeGpzKSk7XG59KHRoaXMsIChmdW5jdGlvbiAoZXhwb3J0cyxjb3JlLGNvbW1vbixyeGpzKSB7ICd1c2Ugc3RyaWN0JztcblxuLyoqXHJcbiAqIEBmaWxlb3ZlcnZpZXcgYWRkZWQgYnkgdHNpY2tsZVxyXG4gKiBAc3VwcHJlc3Mge2NoZWNrVHlwZXMsZXh0cmFSZXF1aXJlLHVzZWxlc3NDb2RlfSBjaGVja2VkIGJ5IHRzY1xyXG4gKi9cclxuLyoqXHJcbiAqIFNoYWlsZW5kcmEgS3VtYXIgPHNoYWlsdS5zbmlzdEBnbWFpbC5jb20+XHJcbiAqIEBpZ25vcmVcclxuICovXHJcbnZhciBOZ01hc29ucnlHcmlkU2VydmljZSA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIE5nTWFzb25yeUdyaWRTZXJ2aWNlKF9wbGF0Zm9ybUlkKSB7XHJcbiAgICAgICAgdGhpcy5fcGxhdGZvcm1JZCA9IF9wbGF0Zm9ybUlkO1xyXG4gICAgICAgIHRoaXMuaXRlbXMgPSBbXTtcclxuICAgICAgICB0aGlzLml0ZW1zQ291bnQgPSAwO1xyXG4gICAgICAgIHRoaXMuaXRlbXNSZW5kZXJlZENvdW50ID0gMDtcclxuICAgICAgICB0aGlzLmlzQW5pbWF0ZSA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuZG9jRWxlbSA9IHdpbmRvdy5kb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ7XHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogRGVmYXVsdCBhbmltYXRpb24gb3B0aW9ucyBvZiBncmlkIGl0ZW1zIG9uIHNjcm9sbFxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHRoaXMuYW5pbWF0aW9uRGVmYXVsdHMgPSB7XHJcbiAgICAgICAgICAgIGFuaW1hdGlvbkVmZmVjdDogJ2VmZmVjdC0xJyxcclxuICAgICAgICAgICAgLy8gZGVmYXVsdCBhbmltYXRpb24gZWZmZWN0LTFcclxuICAgICAgICAgICAgLy8gTWluaW11bSBhbmQgYSBtYXhpbXVtIGR1cmF0aW9uIG9mIHRoZSBhbmltYXRpb24gKHJhbmRvbSB2YWx1ZSBpcyBjaG9zZW4pXHJcbiAgICAgICAgICAgIG1pbkR1cmF0aW9uOiAwLFxyXG4gICAgICAgICAgICBtYXhEdXJhdGlvbjogMCxcclxuICAgICAgICAgICAgLy8gVGhlIHZpZXdwb3J0RmFjdG9yIGRlZmluZXMgaG93IG11Y2ggb2YgdGhlIGFwcGVhcmluZyBpdGVtIGhhcyB0byBiZSB2aXNpYmxlIGluIG9yZGVyIHRvIHRyaWdnZXIgdGhlIGFuaW1hdGlvblxyXG4gICAgICAgICAgICAvLyBpZiB3ZSdkIHVzZSBhIHZhbHVlIG9mIDAsIHRoaXMgd291bGQgbWVhbiB0aGF0IGl0IHdvdWxkIGFkZCB0aGUgYW5pbWF0aW9uIGNsYXNzIGFzIHNvb24gYXMgdGhlIGl0ZW0gaXMgaW4gdGhlIHZpZXdwb3J0LlxyXG4gICAgICAgICAgICAvLyBJZiB3ZSB3ZXJlIHRvIHVzZSB0aGUgdmFsdWUgb2YgMSwgdGhlIGFuaW1hdGlvbiB3b3VsZCBvbmx5IGJlIHRyaWdnZXJlZCB3aGVuIHdlIHNlZSBhbGwgb2YgdGhlIGl0ZW0gaW4gdGhlIHZpZXdwb3J0ICgxMDAlIG9mIGl0KVxyXG4gICAgICAgICAgICB2aWV3cG9ydEZhY3RvcjogMFxyXG4gICAgICAgIH07XHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogRGVmYXVsdCBtYXNvbnJ5IG9wdGlvbnNcclxuICAgICAgICAgKi9cclxuICAgICAgICB0aGlzLm1hc29ucnlEZWZhdWx0cyA9IHtcclxuICAgICAgICAgICAgLy8gU2V0IGRlZmF1bHQgaXRlbVNlbGVjdG9yOiBtYW5kYXRvcnlcclxuICAgICAgICAgICAgaXRlbVNlbGVjdG9yOiAnW25nLW1hc29ucnktZ3JpZC1pdGVtXSwgbmctbWFzb25yeS1ncmlkLWl0ZW0sIFtuZy1tYXNvbnJ5LWdyaWQtaXRlbV0uYW5pbWF0ZSwgbmctbWFzb25yeS1ncmlkLWl0ZW0uYW5pbWF0ZScsXHJcbiAgICAgICAgICAgIGluaXRMYXlvdXQ6IGZhbHNlLFxyXG4gICAgICAgICAgICBhZGRTdGF0dXM6ICdhcHBlbmQnIC8vICdwcmVwZW5kJyBvciAnYWRkJyBvciAncmVvcmRlcidcclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMuX29uU2Nyb2xsSGFuZGxlciA9IHRoaXMuX29uU2Nyb2xsRm4uYmluZCh0aGlzKTtcclxuICAgICAgICB0aGlzLl9vblJlc2l6ZUhhbmRsZXIgPSB0aGlzLl9yZXNpemVIYW5kbGVyLmJpbmQodGhpcyk7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIEByZXR1cm4gez99XHJcbiAgICAgKi9cclxuICAgIE5nTWFzb25yeUdyaWRTZXJ2aWNlLnByb3RvdHlwZS5nZXRWaWV3cG9ydEggPSAvKipcclxuICAgICAqIEByZXR1cm4gez99XHJcbiAgICAgKi9cclxuICAgIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAvKiogQHR5cGUgez99ICovXHJcbiAgICAgICAgdmFyIGNsaWVudCA9IHRoaXMuZG9jRWxlbVsnY2xpZW50SGVpZ2h0J107XHJcbiAgICAgICAgLyoqIEB0eXBlIHs/fSAqL1xyXG4gICAgICAgIHZhciBpbm5lciA9IHdpbmRvd1snaW5uZXJIZWlnaHQnXTtcclxuICAgICAgICBpZiAoY2xpZW50IDwgaW5uZXIpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGlubmVyO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIGNsaWVudDtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgLyoqXHJcbiAgICAgKiBAcmV0dXJuIHs/fVxyXG4gICAgICovXHJcbiAgICBOZ01hc29ucnlHcmlkU2VydmljZS5wcm90b3R5cGUuc2Nyb2xsWSA9IC8qKlxyXG4gICAgICogQHJldHVybiB7P31cclxuICAgICAqL1xyXG4gICAgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiB3aW5kb3cucGFnZVlPZmZzZXQgfHwgdGhpcy5kb2NFbGVtLnNjcm9sbFRvcDtcclxuICAgIH07XHJcbiAgICAvKipcclxuICAgICAqIEBwYXJhbSB7P30gZWxcclxuICAgICAqIEByZXR1cm4gez99XHJcbiAgICAgKi9cclxuICAgIE5nTWFzb25yeUdyaWRTZXJ2aWNlLnByb3RvdHlwZS5nZXRPZmZzZXQgPSAvKipcclxuICAgICAqIEBwYXJhbSB7P30gZWxcclxuICAgICAqIEByZXR1cm4gez99XHJcbiAgICAgKi9cclxuICAgIGZ1bmN0aW9uIChlbCkge1xyXG4gICAgICAgIC8qKiBAdHlwZSB7P30gKi9cclxuICAgICAgICB2YXIgb2Zmc2V0VG9wID0gMDtcclxuICAgICAgICAvKiogQHR5cGUgez99ICovXHJcbiAgICAgICAgdmFyIG9mZnNldExlZnQgPSAwO1xyXG4gICAgICAgIGRvIHtcclxuICAgICAgICAgICAgaWYgKCFpc05hTihlbC5vZmZzZXRUb3ApKSB7XHJcbiAgICAgICAgICAgICAgICBvZmZzZXRUb3AgKz0gZWwub2Zmc2V0VG9wO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICghaXNOYU4oZWwub2Zmc2V0TGVmdCkpIHtcclxuICAgICAgICAgICAgICAgIG9mZnNldExlZnQgKz0gZWwub2Zmc2V0TGVmdDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gd2hpbGUgKGVsID0gZWwub2Zmc2V0UGFyZW50KTtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICB0b3A6IG9mZnNldFRvcCxcclxuICAgICAgICAgICAgbGVmdDogb2Zmc2V0TGVmdFxyXG4gICAgICAgIH07XHJcbiAgICB9O1xyXG4gICAgLyoqXHJcbiAgICAgKiBAcGFyYW0gez99IGVsXHJcbiAgICAgKiBAcGFyYW0gez89fSBoXHJcbiAgICAgKiBAcmV0dXJuIHs/fVxyXG4gICAgICovXHJcbiAgICBOZ01hc29ucnlHcmlkU2VydmljZS5wcm90b3R5cGUuaW5WaWV3cG9ydCA9IC8qKlxyXG4gICAgICogQHBhcmFtIHs/fSBlbFxyXG4gICAgICogQHBhcmFtIHs/PX0gaFxyXG4gICAgICogQHJldHVybiB7P31cclxuICAgICAqL1xyXG4gICAgZnVuY3Rpb24gKGVsLCBoKSB7XHJcbiAgICAgICAgaWYgKGggPT09IHZvaWQgMCkgeyBoID0gMDsgfVxyXG4gICAgICAgIC8qKiBAdHlwZSB7P30gKi9cclxuICAgICAgICB2YXIgZWxIID0gZWwub2Zmc2V0SGVpZ2h0O1xyXG4gICAgICAgIC8qKiBAdHlwZSB7P30gKi9cclxuICAgICAgICB2YXIgc2Nyb2xsZWQgPSB0aGlzLnNjcm9sbFkoKTtcclxuICAgICAgICAvKiogQHR5cGUgez99ICovXHJcbiAgICAgICAgdmFyIHZpZXdlZCA9IHNjcm9sbGVkICsgdGhpcy5nZXRWaWV3cG9ydEgoKTtcclxuICAgICAgICAvKiogQHR5cGUgez99ICovXHJcbiAgICAgICAgdmFyIGVsVG9wID0gdGhpcy5nZXRPZmZzZXQoZWwpLnRvcDtcclxuICAgICAgICAvKiogQHR5cGUgez99ICovXHJcbiAgICAgICAgdmFyIGVsQm90dG9tID0gZWxUb3AgKyBlbEg7XHJcbiAgICAgICAgLy8gaWYgMCwgdGhlIGVsZW1lbnQgaXMgY29uc2lkZXJlZCBpbiB0aGUgdmlld3BvcnQgYXMgc29vbiBhcyBpdCBlbnRlcnMuXHJcbiAgICAgICAgLy8gaWYgMSwgdGhlIGVsZW1lbnQgaXMgY29uc2lkZXJlZCBpbiB0aGUgdmlld3BvcnQgb25seSB3aGVuIGl0J3MgZnVsbHkgaW5zaWRlXHJcbiAgICAgICAgLy8gdmFsdWUgaW4gcGVyY2VudGFnZSAoMSA+PSBoID49IDApXHJcbiAgICAgICAgLy8gaCA9IGggfHwgMDtcclxuICAgICAgICByZXR1cm4gKGVsVG9wICsgZWxIICogaCkgPD0gdmlld2VkICYmIChlbEJvdHRvbSAtIGVsSCAqIGgpID49IHNjcm9sbGVkO1xyXG4gICAgfTtcclxuICAgIC8qKlxyXG4gICAgICogQHBhcmFtIHs/fSBhXHJcbiAgICAgKiBAcGFyYW0gez99IGJcclxuICAgICAqIEByZXR1cm4gez99XHJcbiAgICAgKi9cclxuICAgIE5nTWFzb25yeUdyaWRTZXJ2aWNlLnByb3RvdHlwZS5leHRlbmQgPSAvKipcclxuICAgICAqIEBwYXJhbSB7P30gYVxyXG4gICAgICogQHBhcmFtIHs/fSBiXHJcbiAgICAgKiBAcmV0dXJuIHs/fVxyXG4gICAgICovXHJcbiAgICBmdW5jdGlvbiAoYSwgYikge1xyXG4gICAgICAgIGZvciAodmFyIGtleSBpbiBiKSB7XHJcbiAgICAgICAgICAgIGlmIChiLmhhc093blByb3BlcnR5KGtleSkpIHtcclxuICAgICAgICAgICAgICAgIGFba2V5XSA9IGJba2V5XTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gYTtcclxuICAgIH07XHJcbiAgICAvKipcclxuICAgICAqIEluaXRpYWxpemUgYW5kIGV4dGVuZCBhbGwgb3B0aW9uc1xyXG4gICAgICogQHBhcmFtIHs/fSBlbFxyXG4gICAgICogQHBhcmFtIHs/fSBtYXNvbnJ5T3B0aW9uc1xyXG4gICAgICogQHBhcmFtIHs/PX0gdXNlQW5pbWF0aW9uXHJcbiAgICAgKiBAcGFyYW0gez89fSBhbmltYXRpb25PcHRpb25zXHJcbiAgICAgKiBAcGFyYW0gez89fSB1c2VJbWFnZXNMb2FkZWRcclxuICAgICAqIEByZXR1cm4gez99XHJcbiAgICAgKi9cclxuICAgIE5nTWFzb25yeUdyaWRTZXJ2aWNlLnByb3RvdHlwZS5pbml0ID0gLyoqXHJcbiAgICAgKiBJbml0aWFsaXplIGFuZCBleHRlbmQgYWxsIG9wdGlvbnNcclxuICAgICAqIEBwYXJhbSB7P30gZWxcclxuICAgICAqIEBwYXJhbSB7P30gbWFzb25yeU9wdGlvbnNcclxuICAgICAqIEBwYXJhbSB7Pz19IHVzZUFuaW1hdGlvblxyXG4gICAgICogQHBhcmFtIHs/PX0gYW5pbWF0aW9uT3B0aW9uc1xyXG4gICAgICogQHBhcmFtIHs/PX0gdXNlSW1hZ2VzTG9hZGVkXHJcbiAgICAgKiBAcmV0dXJuIHs/fVxyXG4gICAgICovXHJcbiAgICBmdW5jdGlvbiAoZWwsIG1hc29ucnlPcHRpb25zLCB1c2VBbmltYXRpb24sIGFuaW1hdGlvbk9wdGlvbnMsIHVzZUltYWdlc0xvYWRlZCkge1xyXG4gICAgICAgIHRoaXMudXNlQW5pbWF0aW9uID0gdXNlQW5pbWF0aW9uO1xyXG4gICAgICAgIHRoaXMuZWwgPSBlbDtcclxuICAgICAgICB0aGlzLmlzQW5pbWF0ZSA9IHRoaXMudXNlQW5pbWF0aW9uIHx8IChhbmltYXRpb25PcHRpb25zID8gdHJ1ZSA6IGZhbHNlKTtcclxuICAgICAgICB0aGlzLnVzZUltYWdlc0xvYWRlZCA9IHVzZUltYWdlc0xvYWRlZDtcclxuICAgICAgICB0aGlzLm1hc29ucnlPcHRpb25zID0gdGhpcy5leHRlbmQodGhpcy5tYXNvbnJ5RGVmYXVsdHMsIG1hc29ucnlPcHRpb25zKTtcclxuICAgICAgICB0aGlzLmFuaW1hdGlvbk9wdGlvbnMgPSB0aGlzLmV4dGVuZCh0aGlzLmFuaW1hdGlvbkRlZmF1bHRzLCBhbmltYXRpb25PcHRpb25zKTtcclxuICAgICAgICByZXR1cm4gdGhpcy5faW5pdCgpO1xyXG4gICAgfTtcclxuICAgIC8qKlxyXG4gICAgICogQHBhcmFtIHs/fSBfZWxlbWVudFxyXG4gICAgICogQHBhcmFtIHs/fSBvcHRpb25zXHJcbiAgICAgKiBAcmV0dXJuIHs/fVxyXG4gICAgICovXHJcbiAgICBOZ01hc29ucnlHcmlkU2VydmljZS5wcm90b3R5cGUuaW5pdGlhbGl6ZU1hc29ucnkgPSAvKipcclxuICAgICAqIEBwYXJhbSB7P30gX2VsZW1lbnRcclxuICAgICAqIEBwYXJhbSB7P30gb3B0aW9uc1xyXG4gICAgICogQHJldHVybiB7P31cclxuICAgICAqL1xyXG4gICAgZnVuY3Rpb24gKF9lbGVtZW50LCBvcHRpb25zKSB7XHJcbiAgICAgICAgLyoqIEB0eXBlIHs/fSAqL1xyXG4gICAgICAgIHZhciBNYXNvbnJ5ID0gcmVxdWlyZSgnbWFzb25yeS1sYXlvdXQnKTtcclxuICAgICAgICByZXR1cm4gbmV3IE1hc29ucnkoX2VsZW1lbnQsIG9wdGlvbnMpO1xyXG4gICAgfTtcclxuICAgIC8qKlxyXG4gICAgICogQHJldHVybiB7P31cclxuICAgICAqL1xyXG4gICAgTmdNYXNvbnJ5R3JpZFNlcnZpY2UucHJvdG90eXBlLl9pbml0ID0gLyoqXHJcbiAgICAgKiBAcmV0dXJuIHs/fVxyXG4gICAgICovXHJcbiAgICBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuaXNBbmltYXRlKSB7XHJcbiAgICAgICAgICAgIC8vIGFkZCBhbmltYXRpb24gZWZmZWN0XHJcbiAgICAgICAgICAgIHRoaXMuZWwuY2xhc3NMaXN0LmFkZCh0aGlzLmFuaW1hdGlvbk9wdGlvbnMuYW5pbWF0aW9uRWZmZWN0KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gZ2V0IGltYWdlc2xvYWRlZCBsaWJhcnkgaW5zdGFuY2VcclxuICAgICAgICBpZiAodGhpcy51c2VJbWFnZXNMb2FkZWQpIHtcclxuICAgICAgICAgICAgdGhpcy5pbWFnZXNMb2FkZWQgPSByZXF1aXJlKCdpbWFnZXNsb2FkZWQnKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gY2hlY2sgaWYgYnJvd3NlciBhbmQgdGhlbiBpbnRpYWxpemUgTWFzb25yeVxyXG4gICAgICAgIGlmIChjb21tb24uaXNQbGF0Zm9ybUJyb3dzZXIodGhpcy5fcGxhdGZvcm1JZCkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2luaXRNYXNvbnJ5KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfTtcclxuICAgIC8qKlxyXG4gICAgICogQHJldHVybiB7P31cclxuICAgICAqL1xyXG4gICAgTmdNYXNvbnJ5R3JpZFNlcnZpY2UucHJvdG90eXBlLl9pbml0TWFzb25yeSA9IC8qKlxyXG4gICAgICogQHJldHVybiB7P31cclxuICAgICAqL1xyXG4gICAgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICAgICAgLy8gaW5pdGlhbGl6ZSBtYXNvbnJ5XHJcbiAgICAgICAgdGhpcy5fbXNucnkgPSB0aGlzLmluaXRpYWxpemVNYXNvbnJ5KHRoaXMuZWwsIHRoaXMubWFzb25yeU9wdGlvbnMpO1xyXG4gICAgICAgIC8vIHVzZSBhbmltYXRpb24gb3B0aW9ucyBpZiB1c2VBbmltYXRpb24gaXMgdHJ1ZVxyXG4gICAgICAgIGlmICh0aGlzLmlzQW5pbWF0ZSAmJiB0aGlzLl9tc25yeSkge1xyXG4gICAgICAgICAgICAvLyBhbmltYXRlIG9uIHNjcm9sbCB0aGUgaXRlbXMgaW5zaWRlIHRoZSB2aWV3cG9ydFxyXG4gICAgICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgdGhpcy5fb25TY3JvbGxIYW5kbGVyLCBmYWxzZSk7XHJcbiAgICAgICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCB0aGlzLl9vblJlc2l6ZUhhbmRsZXIsIGZhbHNlKTtcclxuICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAgICAgICAqIFJlbW92ZSBzY3JvbGwgYW5pbWF0aW9ucyB0byByZW1vdmUgY29uZmxpY3RzIGJldHdlZW4gTWFzb25yeSBUcmFuc2l0aW9ucyBhbmQgU2Nyb2xsIEFuaW1hdGlvbnNcclxuICAgICAgICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgIHRoaXMuX21zbnJ5Lm9uKCdsYXlvdXRDb21wbGV0ZScsIGZ1bmN0aW9uIChpdGVtcykge1xyXG4gICAgICAgICAgICAgICAgQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoX3RoaXMuZWwuY2hpbGRyZW4pLmZvckVhY2goZnVuY3Rpb24gKGVsZW1lbnQpIHtcclxuICAgICAgICAgICAgICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ2FuaW1hdGUnKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgdGhpcy5fbXNucnkub24oJ3JlbW92ZUNvbXBsZXRlJywgZnVuY3Rpb24gKGl0ZW1zKSB7XHJcbiAgICAgICAgICAgICAgICBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChfdGhpcy5lbC5jaGlsZHJlbikuZm9yRWFjaChmdW5jdGlvbiAoZWxlbWVudCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnYW5pbWF0ZScpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICBfdGhpcy5fbXNucnkubGF5b3V0KCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGhpcy5fbXNucnk7XHJcbiAgICB9O1xyXG4gICAgLyoqXHJcbiAgICAgKiBAcmV0dXJuIHs/fVxyXG4gICAgICovXHJcbiAgICBOZ01hc29ucnlHcmlkU2VydmljZS5wcm90b3R5cGUuX29uU2Nyb2xsRm4gPSAvKipcclxuICAgICAqIEByZXR1cm4gez99XHJcbiAgICAgKi9cclxuICAgIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAvKiogQHR5cGUgez99ICovXHJcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xyXG4gICAgICAgIGlmICghdGhpcy5kaWRTY3JvbGwpIHtcclxuICAgICAgICAgICAgdGhpcy5kaWRTY3JvbGwgPSB0cnVlO1xyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHsgc2VsZi5fc2Nyb2xsUGFnZSgpOyB9LCAxMDApO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICAvKipcclxuICAgICAqIEByZXR1cm4gez99XHJcbiAgICAgKi9cclxuICAgIE5nTWFzb25yeUdyaWRTZXJ2aWNlLnByb3RvdHlwZS5fc2Nyb2xsUGFnZSA9IC8qKlxyXG4gICAgICogQHJldHVybiB7P31cclxuICAgICAqL1xyXG4gICAgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICAgICAgLyoqIEB0eXBlIHs/fSAqL1xyXG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcclxuICAgICAgICAvKiogQHR5cGUgez99ICovXHJcbiAgICAgICAgdmFyIGl0ZW1zID0gdGhpcy5fbXNucnkuaXRlbXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7IHJldHVybiBpdGVtLmVsZW1lbnQ7IH0pO1xyXG4gICAgICAgIGlmIChpdGVtcy5sZW5ndGgpIHtcclxuICAgICAgICAgICAgaXRlbXMuZm9yRWFjaChmdW5jdGlvbiAoZWwsIGkpIHtcclxuICAgICAgICAgICAgICAgIGlmIChfdGhpcy5pblZpZXdwb3J0KGVsLCBzZWxmLmFuaW1hdGlvbk9wdGlvbnMudmlld3BvcnRGYWN0b3IpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLyoqIEB0eXBlIHs/fSAqL1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBwZXJzcFkgPSBfdGhpcy5zY3JvbGxZKCkgKyBfdGhpcy5nZXRWaWV3cG9ydEgoKSAvIDI7XHJcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5lbC5zdHlsZS5XZWJraXRQZXJzcGVjdGl2ZU9yaWdpbiA9ICc1MCUgJyArIHBlcnNwWSArICdweCc7XHJcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5lbC5zdHlsZS5Nb3pQZXJzcGVjdGl2ZU9yaWdpbiA9ICc1MCUgJyArIHBlcnNwWSArICdweCc7XHJcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5lbC5zdHlsZS5wZXJzcGVjdGl2ZU9yaWdpbiA9ICc1MCUgJyArIHBlcnNwWSArICdweCc7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHNlbGYuYW5pbWF0aW9uT3B0aW9ucy5taW5EdXJhdGlvbiAmJiBzZWxmLmFuaW1hdGlvbk9wdGlvbnMubWF4RHVyYXRpb24pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLyoqIEB0eXBlIHs/fSAqL1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgcmFuZER1cmF0aW9uID0gKE1hdGgucmFuZG9tKCkgKiAoc2VsZi5hbmltYXRpb25PcHRpb25zLm1heER1cmF0aW9uIC0gc2VsZi5hbmltYXRpb25PcHRpb25zLm1pbkR1cmF0aW9uKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKyBzZWxmLmFuaW1hdGlvbk9wdGlvbnMubWluRHVyYXRpb24pICsgJ3MnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbC5zdHlsZS5XZWJraXRBbmltYXRpb25EdXJhdGlvbiA9IHJhbmREdXJhdGlvbjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZWwuc3R5bGUuTW96QW5pbWF0aW9uRHVyYXRpb24gPSByYW5kRHVyYXRpb247XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsLnN0eWxlLmFuaW1hdGlvbkR1cmF0aW9uID0gcmFuZER1cmF0aW9uO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBlbC5jbGFzc0xpc3QuYWRkKCdhbmltYXRlJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gfSwgMjUgKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGVsLmNsYXNzTGlzdC5yZW1vdmUoJ2FuaW1hdGUnKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuZGlkU2Nyb2xsID0gZmFsc2U7XHJcbiAgICB9O1xyXG4gICAgLyoqXHJcbiAgICAgKiBAcmV0dXJuIHs/fVxyXG4gICAgICovXHJcbiAgICBOZ01hc29ucnlHcmlkU2VydmljZS5wcm90b3R5cGUuX3Jlc2l6ZUhhbmRsZXIgPSAvKipcclxuICAgICAqIEByZXR1cm4gez99XHJcbiAgICAgKi9cclxuICAgIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAvKiogQHR5cGUgez99ICovXHJcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xyXG4gICAgICAgIEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKHRoaXMuZWwuY2hpbGRyZW4pLmZvckVhY2goZnVuY3Rpb24gKGVsZW1lbnQpIHtcclxuICAgICAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdhbmltYXRlJyk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogQHJldHVybiB7P31cclxuICAgICAgICAgKi9cclxuICAgICAgICBmdW5jdGlvbiBkZWxheWVkKCkge1xyXG4gICAgICAgICAgICBzZWxmLl9zY3JvbGxQYWdlKCk7XHJcbiAgICAgICAgICAgIHNlbGYucmVzaXplVGltZW91dCA9IG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLnJlc2l6ZVRpbWVvdXQpIHtcclxuICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMucmVzaXplVGltZW91dCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMucmVzaXplVGltZW91dCA9IHNldFRpbWVvdXQoZGVsYXllZCwgNTAwKTtcclxuICAgIH07XHJcbiAgICAvKipcclxuICAgICAqIENoZWNrIGlmIHRvdGFsIGdyaWQgaXRlbXMgYXJlIHJlZGVyZWQgaW4gdGhlIERPTVxyXG4gICAgICogQHJldHVybiB7P31cclxuICAgICAqL1xyXG4gICAgTmdNYXNvbnJ5R3JpZFNlcnZpY2UucHJvdG90eXBlLl9jaGVja1RvdGFsUmVuZGVyZWQgPSAvKipcclxuICAgICAqIENoZWNrIGlmIHRvdGFsIGdyaWQgaXRlbXMgYXJlIHJlZGVyZWQgaW4gdGhlIERPTVxyXG4gICAgICogQHJldHVybiB7P31cclxuICAgICAqL1xyXG4gICAgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICsrdGhpcy5pdGVtc1JlbmRlcmVkQ291bnQ7XHJcbiAgICAgICAgaWYgKHRoaXMuaXRlbXNSZW5kZXJlZENvdW50ID09PSB0aGlzLml0ZW1zQ291bnQpIHtcclxuICAgICAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHRoaXMuX29uU2Nyb2xsSGFuZGxlciwgZmFsc2UpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICAvKipcclxuICAgICAqIE9uIERlc3Ryb3kgcmVtb3ZlIFNjcm9sbCBhbmQgUmVzaXplIGV2ZW50IExpc3RlbmVyc1xyXG4gICAgICogQHJldHVybiB7P31cclxuICAgICAqL1xyXG4gICAgTmdNYXNvbnJ5R3JpZFNlcnZpY2UucHJvdG90eXBlLm9uRGVzdG9yeSA9IC8qKlxyXG4gICAgICogT24gRGVzdHJveSByZW1vdmUgU2Nyb2xsIGFuZCBSZXNpemUgZXZlbnQgTGlzdGVuZXJzXHJcbiAgICAgKiBAcmV0dXJuIHs/fVxyXG4gICAgICovXHJcbiAgICBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHRoaXMuX29uU2Nyb2xsSGFuZGxlciwgZmFsc2UpO1xyXG4gICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdyZXNpemUnLCB0aGlzLl9vblJlc2l6ZUhhbmRsZXIsIGZhbHNlKTtcclxuICAgIH07XHJcbiAgICAvKipcclxuICAgICAqIFJlbW92ZSBzY3JvbGwgYW5pbWF0aW9uc1xyXG4gICAgICogQHJldHVybiB7P31cclxuICAgICAqL1xyXG4gICAgTmdNYXNvbnJ5R3JpZFNlcnZpY2UucHJvdG90eXBlLnJlbW92ZUFuaW1hdGlvbiA9IC8qKlxyXG4gICAgICogUmVtb3ZlIHNjcm9sbCBhbmltYXRpb25zXHJcbiAgICAgKiBAcmV0dXJuIHs/fVxyXG4gICAgICovXHJcbiAgICBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuaXNBbmltYXRlKSB7XHJcbiAgICAgICAgICAgIEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKHRoaXMuZWwuY2hpbGRyZW4pLmZvckVhY2goZnVuY3Rpb24gKGVsZW1lbnQpIHtcclxuICAgICAgICAgICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnYW5pbWF0ZScpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgLyoqXHJcbiAgICAgKiBBZGQgRWFjaCBncmlkIGl0ZW0gdG8gTWFzb25yeSBiYXNlZCBvbiBNYXNvbnkgYWRkU3RhdHVzIHByb3BlcnR5XHJcbiAgICAgKiBAcGFyYW0gez99IGVsZW1lbnQgRWxlbWVudCAtIEdyaWQgaXRlbVxyXG4gICAgICogQHJldHVybiB7P31cclxuICAgICAqL1xyXG4gICAgTmdNYXNvbnJ5R3JpZFNlcnZpY2UucHJvdG90eXBlLmFkZCA9IC8qKlxyXG4gICAgICogQWRkIEVhY2ggZ3JpZCBpdGVtIHRvIE1hc29ucnkgYmFzZWQgb24gTWFzb255IGFkZFN0YXR1cyBwcm9wZXJ0eVxyXG4gICAgICogQHBhcmFtIHs/fSBlbGVtZW50IEVsZW1lbnQgLSBHcmlkIGl0ZW1cclxuICAgICAqIEByZXR1cm4gez99XHJcbiAgICAgKi9cclxuICAgIGZ1bmN0aW9uIChlbGVtZW50KSB7XHJcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcclxuICAgICAgICAvKiogQHR5cGUgez99ICovXHJcbiAgICAgICAgdmFyIGFkZFN0YXR1cyA9IHRoaXMubWFzb25yeU9wdGlvbnMuYWRkU3RhdHVzLnRvTG93ZXJDYXNlKCk7XHJcbiAgICAgICAgLy8gc2V0IG1hcmdpbiBib3R0b20gb2YgZ3V0dGVyIHZhbHVlLlxyXG4gICAgICAgIGlmICh0aGlzLm1hc29ucnlPcHRpb25zLmd1dHRlcikge1xyXG4gICAgICAgICAgICBlbGVtZW50LnN0eWxlLm1hcmdpbkJvdHRvbSA9IHRoaXMubWFzb25yeU9wdGlvbnMuZ3V0dGVyICsgJ3B4JztcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMuZWwuaGFzQ2hpbGROb2RlcygpICYmIHRoaXMuZWwuY29udGFpbnMoZWxlbWVudCkpIHtcclxuICAgICAgICAgICAgdGhpcy5lbC5yZW1vdmVDaGlsZChlbGVtZW50KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMudXNlSW1hZ2VzTG9hZGVkKSB7XHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgX3RoaXMuaW1hZ2VzTG9hZGVkKGVsZW1lbnQsIGZ1bmN0aW9uIChpbnN0YW5jZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICsrX3RoaXMuaXRlbXNSZW5kZXJlZENvdW50O1xyXG4gICAgICAgICAgICAgICAgICAgIF90aGlzLml0ZW1zLnB1c2goZWxlbWVudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gYXBwZW5kIG9yIHByZXBlbmQgYmFzZWQgb24gbWFzb25yeSBvcHRpb25cclxuICAgICAgICAgICAgICAgICAgICBpZiAoYWRkU3RhdHVzID09PSAncHJlcGVuZCcpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKF90aGlzLl9tc25yeS5pdGVtcy5sZW5ndGggIT09IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzLmVsLmluc2VydEJlZm9yZShlbGVtZW50LCBfdGhpcy5fbXNucnkuaXRlbXNbMF0uZWxlbWVudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdGhpcy5lbC5hcHBlbmRDaGlsZChlbGVtZW50KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIChhZGRTdGF0dXMgPT09ICdhcHBlbmQnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzLmVsLmFwcGVuZENoaWxkKGVsZW1lbnQpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXMuZWwuYXBwZW5kQ2hpbGQoZWxlbWVudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoYWRkU3RhdHVzID09PSAncHJlcGVuZCcpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChfdGhpcy5fbXNucnkuaXRlbXMubGVuZ3RoICE9PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXMuX21zbnJ5LnByZXBlbmRlZChlbGVtZW50KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzLl9tc25yeS5hcHBlbmRlZChlbGVtZW50KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIChhZGRTdGF0dXMgPT09ICdhcHBlbmQnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdGhpcy5fbXNucnkuYXBwZW5kZWQoZWxlbWVudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdGhpcy5fbXNucnkuYWRkSXRlbXMoZWxlbWVudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXMuX21zbnJ5LmxheW91dCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0sIDApO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0sIDApO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICArK190aGlzLml0ZW1zUmVuZGVyZWRDb3VudDtcclxuICAgICAgICAgICAgICAgIF90aGlzLml0ZW1zLnB1c2goZWxlbWVudCk7XHJcbiAgICAgICAgICAgICAgICBpZiAoYWRkU3RhdHVzID09PSAncHJlcGVuZCcpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoX3RoaXMuX21zbnJ5Lml0ZW1zLmxlbmd0aCAhPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBfdGhpcy5lbC5pbnNlcnRCZWZvcmUoZWxlbWVudCwgX3RoaXMuX21zbnJ5Lml0ZW1zWzBdLmVsZW1lbnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyB0aGlzLl9tc25yeS5wcmVwZW5kZWQoaXRlbUVsZW0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXMuZWwuYXBwZW5kQ2hpbGQoZWxlbWVudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHRoaXMuX21zbnJ5LmFwcGVuZGVkKGl0ZW1FbGVtKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIGlmIChhZGRTdGF0dXMgPT09ICdhcHBlbmQnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMuZWwuYXBwZW5kQ2hpbGQoZWxlbWVudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gdGhpcy5fbXNucnkuYXBwZW5kZWQoaXRlbUVsZW0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMuZWwuYXBwZW5kQ2hpbGQoZWxlbWVudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gdGhpcy5fbXNucnkuYWRkSXRlbXMoaXRlbUVsZW0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGFkZFN0YXR1cyA9PT0gJ3ByZXBlbmQnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChfdGhpcy5fbXNucnkuaXRlbXMubGVuZ3RoICE9PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdGhpcy5fbXNucnkucHJlcGVuZGVkKGVsZW1lbnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXMuX21zbnJ5LmFwcGVuZGVkKGVsZW1lbnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKGFkZFN0YXR1cyA9PT0gJ2FwcGVuZCcpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXMuX21zbnJ5LmFwcGVuZGVkKGVsZW1lbnQpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXMuX21zbnJ5LmFkZEl0ZW1zKGVsZW1lbnQpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBfdGhpcy5fbXNucnkubGF5b3V0KCk7XHJcbiAgICAgICAgICAgICAgICB9LCA1MCk7XHJcbiAgICAgICAgICAgIH0sIDApO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICAvKipcclxuICAgICAqIFRPRE86IHJlb3JkZXIgbWFzb25yeSBpdGVtcyBvbiBsb2FkXHJcbiAgICAgKiBAcGFyYW0gez99IGVsZW1lbnRcclxuICAgICAqIEByZXR1cm4gez99XHJcbiAgICAgKi9cclxuICAgIE5nTWFzb25yeUdyaWRTZXJ2aWNlLnByb3RvdHlwZS5hZGRPcmRlckl0ZW0gPSAvKipcclxuICAgICAqIFRPRE86IHJlb3JkZXIgbWFzb25yeSBpdGVtcyBvbiBsb2FkXHJcbiAgICAgKiBAcGFyYW0gez99IGVsZW1lbnRcclxuICAgICAqIEByZXR1cm4gez99XHJcbiAgICAgKi9cclxuICAgIGZ1bmN0aW9uIChlbGVtZW50KSB7XHJcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcclxuICAgICAgICAvKiogQHR5cGUgez99ICovXHJcbiAgICAgICAgdmFyIGFkZFN0YXR1cyA9IHRoaXMubWFzb25yeU9wdGlvbnMuYWRkU3RhdHVzLnRvTG93ZXJDYXNlKCk7XHJcbiAgICAgICAgLy8gc2V0IG1hcmdpbiBib3R0b20gb2YgZ3V0dGVyIHZhbHVlLlxyXG4gICAgICAgIGlmICh0aGlzLm1hc29ucnlPcHRpb25zLmd1dHRlcikge1xyXG4gICAgICAgICAgICBlbGVtZW50LnN0eWxlLm1hcmdpbkJvdHRvbSA9IHRoaXMubWFzb25yeU9wdGlvbnMuZ3V0dGVyICsgJ3B4JztcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMudXNlSW1hZ2VzTG9hZGVkKSB7XHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgX3RoaXMuaW1hZ2VzTG9hZGVkKGVsZW1lbnQsIGZ1bmN0aW9uIChpbnN0YW5jZSkge1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0sIDApO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoYWRkU3RhdHVzID09PSAncHJlcGVuZCcpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoX3RoaXMuX21zbnJ5Lml0ZW1zLmxlbmd0aCAhPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBfdGhpcy5lbC5pbnNlcnRCZWZvcmUoZWxlbWVudCwgX3RoaXMuX21zbnJ5Lml0ZW1zWzBdLmVsZW1lbnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyB0aGlzLl9tc25yeS5wcmVwZW5kZWQoZWxlbWVudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBfdGhpcy5lbC5hcHBlbmRDaGlsZChlbGVtZW50KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gdGhpcy5fbXNucnkuYXBwZW5kZWQoZWxlbWVudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoYWRkU3RhdHVzID09PSAnYXBwZW5kJykge1xyXG4gICAgICAgICAgICAgICAgICAgIF90aGlzLmVsLmFwcGVuZENoaWxkKGVsZW1lbnQpO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIHRoaXMuX21zbnJ5LmFwcGVuZGVkKGVsZW1lbnQpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMuZWwuYXBwZW5kQ2hpbGQoZWxlbWVudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gdGhpcy5fbXNucnkuYWRkSXRlbXMoZWxlbWVudCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoX3RoaXMuaXRlbXNSZW5kZXJlZENvdW50ID09PSBfdGhpcy5pdGVtc0NvdW50KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChhZGRTdGF0dXMgPT09ICdwcmVwZW5kJykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKF90aGlzLl9tc25yeS5pdGVtcy5sZW5ndGggIT09IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdGhpcy5fbXNucnkucHJlcGVuZGVkKGVsZW1lbnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzLl9tc25yeS5sYXlvdXQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzLl9tc25yeS5hcHBlbmRlZChlbGVtZW50KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdGhpcy5fbXNucnkubGF5b3V0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAoYWRkU3RhdHVzID09PSAnYXBwZW5kJykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXMuX21zbnJ5LmFwcGVuZGVkKGVsZW1lbnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXMuX21zbnJ5LmxheW91dCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXMuX21zbnJ5LmFkZEl0ZW1zKGVsZW1lbnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXMuX21zbnJ5LmxheW91dCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSwgNTAwKTtcclxuICAgICAgICAgICAgfSwgMCk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIC8qKlxyXG4gICAgICogUmUgb3JkZXIgTWFzb25yeSBpdGVtcyB0byBvcmlnaW5hbCBvcmRlclxyXG4gICAgICogQHJldHVybiB7P31cclxuICAgICAqL1xyXG4gICAgTmdNYXNvbnJ5R3JpZFNlcnZpY2UucHJvdG90eXBlLnJlb3JkZXJNYXNvbnJ5SXRlbXMgPSAvKipcclxuICAgICAqIFJlIG9yZGVyIE1hc29ucnkgaXRlbXMgdG8gb3JpZ2luYWwgb3JkZXJcclxuICAgICAqIEByZXR1cm4gez99XHJcbiAgICAgKi9cclxuICAgIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xyXG4gICAgICAgIGlmICh0aGlzLml0ZW1zUmVuZGVyZWRDb3VudCA9PT0gdGhpcy5pdGVtc0NvdW50KSB7XHJcbiAgICAgICAgICAgIC8qKiBAdHlwZSB7P30gKi9cclxuICAgICAgICAgICAgdmFyIHJlb3JkZXJJdGVtc18xID0gdGhpcy5pdGVtcy5zb3J0KGZ1bmN0aW9uIChhLCBiKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gYS5kYXRhc2V0LmNvdW50IC0gYi5kYXRhc2V0LmNvdW50O1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgd2hpbGUgKHRoaXMuZWwuaGFzQ2hpbGROb2RlcygpKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmVsLnJlbW92ZUNoaWxkKHRoaXMuZWwubGFzdENoaWxkKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIHJlb3JkZXJJdGVtc18xLmZvckVhY2goZnVuY3Rpb24gKGl0ZW0pIHtcclxuICAgICAgICAgICAgICAgICAgICBfdGhpcy5lbC5hcHBlbmRDaGlsZChpdGVtKTtcclxuICAgICAgICAgICAgICAgICAgICBfdGhpcy5fbXNucnkuYXBwZW5kZWQoaXRlbSk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIGlmIChfdGhpcy5fbXNucnkpIHtcclxuICAgICAgICAgICAgICAgICAgICBfdGhpcy5fbXNucnkucmVsb2FkSXRlbXMoKTtcclxuICAgICAgICAgICAgICAgICAgICBfdGhpcy5fbXNucnkubGF5b3V0KCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sIDEwMCk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIC8qKlxyXG4gICAgICogU2V0IGFkZCBzdGF0dXMgdG8gTWFzb25yeSBiZWZvcmUgYWRkaW5nIG9yIGFwcGVuZGluZ1xyXG4gICAgICogQHBhcmFtIHs/fSB2YWx1ZSAnYXBwZW5kJyBvciAncHJlcGVuZCcgb3IgJ2FkZCdcclxuICAgICAqIEByZXR1cm4gez99XHJcbiAgICAgKi9cclxuICAgIE5nTWFzb25yeUdyaWRTZXJ2aWNlLnByb3RvdHlwZS5zZXRBZGRTdGF0dXMgPSAvKipcclxuICAgICAqIFNldCBhZGQgc3RhdHVzIHRvIE1hc29ucnkgYmVmb3JlIGFkZGluZyBvciBhcHBlbmRpbmdcclxuICAgICAqIEBwYXJhbSB7P30gdmFsdWUgJ2FwcGVuZCcgb3IgJ3ByZXBlbmQnIG9yICdhZGQnXHJcbiAgICAgKiBAcmV0dXJuIHs/fVxyXG4gICAgICovXHJcbiAgICBmdW5jdGlvbiAodmFsdWUpIHtcclxuICAgICAgICB0aGlzLm1hc29ucnlPcHRpb25zLmFkZFN0YXR1cyA9IHZhbHVlO1xyXG4gICAgfTtcclxuICAgIC8qKlxyXG4gICAgICogUmVtb3ZlIGdyaWQgaXRlbSBmcm9tIE1hc29ucnlcclxuICAgICAqIEBwYXJhbSB7P30gaXRlbSBFbGVtZW50OiBSZW1vdmVkIEdyaWQgSXRlbSBET01cclxuICAgICAqIEByZXR1cm4gez99XHJcbiAgICAgKi9cclxuICAgIE5nTWFzb25yeUdyaWRTZXJ2aWNlLnByb3RvdHlwZS5yZW1vdmVJdGVtID0gLyoqXHJcbiAgICAgKiBSZW1vdmUgZ3JpZCBpdGVtIGZyb20gTWFzb25yeVxyXG4gICAgICogQHBhcmFtIHs/fSBpdGVtIEVsZW1lbnQ6IFJlbW92ZWQgR3JpZCBJdGVtIERPTVxyXG4gICAgICogQHJldHVybiB7P31cclxuICAgICAqL1xyXG4gICAgZnVuY3Rpb24gKGl0ZW0pIHtcclxuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xyXG4gICAgICAgIHRoaXMucmVtb3ZlQW5pbWF0aW9uKCk7XHJcbiAgICAgICAgaWYgKGl0ZW0pIHtcclxuICAgICAgICAgICAgaXRlbS5jbGFzc0xpc3QucmVtb3ZlKCdhbmltYXRlJyk7XHJcbiAgICAgICAgICAgIC8qKiBAdHlwZSB7P30gKi9cclxuICAgICAgICAgICAgdmFyIG9ic3YgPSByeGpzLk9ic2VydmFibGUuY3JlYXRlKGZ1bmN0aW9uIChvYnNlcnZlcikge1xyXG4gICAgICAgICAgICAgICAgLyoqIEB0eXBlIHs/fSAqL1xyXG4gICAgICAgICAgICAgICAgdmFyIGNvdW50ID0gaXRlbS5nZXRBdHRyaWJ1dGUoJ2RhdGEtY291bnQnKTtcclxuICAgICAgICAgICAgICAgIC8qKiBAdHlwZSB7P30gKi9cclxuICAgICAgICAgICAgICAgIHZhciBpbmRleCA9IF90aGlzLl9tc25yeS5pdGVtcy5maW5kSW5kZXgoZnVuY3Rpb24gKG1hc29ucnlJdGVtKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG1hc29ucnlJdGVtLmVsZW1lbnQuZ2V0QXR0cmlidXRlKCdkYXRhLWNvdW50JykgPT09IGNvdW50O1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAvKiogQHR5cGUgez99ICovXHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGVsZW0gPSBfdGhpcy5fbXNucnkuaXRlbXNbaW5kZXhdLmVsZW1lbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMuX29uVHJhbnNpdGlvbkVuZChvYnNlcnZlciwgZWxlbSk7XHJcbiAgICAgICAgICAgICAgICAgICAgLyoqIEB0eXBlIHs/fSAqL1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBpbmR4ID0gX3RoaXMuaXRlbXMuZmluZEluZGV4KGZ1bmN0aW9uIChlbGVtZW50KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBlbGVtZW50LmRhdGFzZXQuY291bnQgPT09IGl0ZW0uZGF0YXNldC5jb3VudDtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICBfdGhpcy5pdGVtcy5zcGxpY2UoaW5keCwgMSk7XHJcbiAgICAgICAgICAgICAgICB9LCAyMCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICByZXR1cm4gb2JzdjtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHJ4anMuZW1wdHkoKTtcclxuICAgIH07XHJcbiAgICAvKipcclxuICAgICAqIFJlbW92ZSBmaXJzdCBncmlkIGl0ZW0gZnJvbSB0aGUgTWFzb25yeSBMaXN0XHJcbiAgICAgKiBAcmV0dXJuIHs/fVxyXG4gICAgICovXHJcbiAgICBOZ01hc29ucnlHcmlkU2VydmljZS5wcm90b3R5cGUucmVtb3ZlRmlyc3RJdGVtID0gLyoqXHJcbiAgICAgKiBSZW1vdmUgZmlyc3QgZ3JpZCBpdGVtIGZyb20gdGhlIE1hc29ucnkgTGlzdFxyXG4gICAgICogQHJldHVybiB7P31cclxuICAgICAqL1xyXG4gICAgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICAgICAgdGhpcy5yZW1vdmVBbmltYXRpb24oKTtcclxuICAgICAgICBpZiAodGhpcy5fbXNucnkuaXRlbXMubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX21zbnJ5Lml0ZW1zWzBdLmVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnYW5pbWF0ZScpO1xyXG4gICAgICAgICAgICAvKiogQHR5cGUgez99ICovXHJcbiAgICAgICAgICAgIHZhciBvYnN2ID0gcnhqcy5PYnNlcnZhYmxlLmNyZWF0ZShmdW5jdGlvbiAob2JzZXJ2ZXIpIHtcclxuICAgICAgICAgICAgICAgIC8vc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAvL3NldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgX3RoaXMuX29uVHJhbnNpdGlvbkVuZChvYnNlcnZlciwgX3RoaXMuX21zbnJ5Lml0ZW1zWzBdLmVsZW1lbnQpO1xyXG4gICAgICAgICAgICAgICAgX3RoaXMuaXRlbXMuc3BsaWNlKDAsIDEpO1xyXG4gICAgICAgICAgICAgICAgLy99LCAxMCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICByZXR1cm4gb2JzdjtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHJ4anMuZW1wdHkoKTtcclxuICAgIH07XHJcbiAgICAvKipcclxuICAgICAqIEVtcHR5IHRoZSBNYXNvbnJ5IGxpc3RcclxuICAgICAqIEByZXR1cm4gez99XHJcbiAgICAgKi9cclxuICAgIE5nTWFzb25yeUdyaWRTZXJ2aWNlLnByb3RvdHlwZS5yZW1vdmVBbGxJdGVtcyA9IC8qKlxyXG4gICAgICogRW1wdHkgdGhlIE1hc29ucnkgbGlzdFxyXG4gICAgICogQHJldHVybiB7P31cclxuICAgICAqL1xyXG4gICAgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICAgICAgdGhpcy5yZW1vdmVBbmltYXRpb24oKTtcclxuICAgICAgICAvKiogQHR5cGUgez99ICovXHJcbiAgICAgICAgdmFyIG9ic3YgPSByeGpzLk9ic2VydmFibGUuY3JlYXRlKGZ1bmN0aW9uIChvYnNlcnZlcikge1xyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIC8qKiBAdHlwZSB7P30gKi9cclxuICAgICAgICAgICAgICAgIHZhciBpdGVtcyA9IFtdO1xyXG4gICAgICAgICAgICAgICAgX3RoaXMuX21zbnJ5Lml0ZW1zLmZvckVhY2goZnVuY3Rpb24gKG1hc29ucnlJdGVtLCBpbmRleCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGl0ZW1zLnB1c2goeyBlbGVtZW50OiBtYXNvbnJ5SXRlbS5lbGVtZW50LCBpbmRleDogaW5kZXggfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMuYWRkVHJhbnNpdGlvbihtYXNvbnJ5SXRlbS5lbGVtZW50KTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgLyoqIEB0eXBlIHs/fSAqL1xyXG4gICAgICAgICAgICAgICAgdmFyIGVsZW0gPSBfdGhpcy5fbXNucnkuaXRlbXNbX3RoaXMuX21zbnJ5Lml0ZW1zLmxlbmd0aCAtIDFdLmVsZW1lbnQ7XHJcbiAgICAgICAgICAgICAgICAvKiogQHR5cGUgez99ICovXHJcbiAgICAgICAgICAgICAgICB2YXIgdHJhbnNpdGlvbkVuZCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICBvYnNlcnZlci5uZXh0KGl0ZW1zKTtcclxuICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXMuX21zbnJ5LnJlbG9hZEl0ZW1zKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzLl9tc25yeS5sYXlvdXQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXMuaXRlbXMgPSBbXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXMuaXRlbXNDb3VudCA9IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzLml0ZW1zUmVuZGVyZWRDb3VudCA9IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgfSwgMTApO1xyXG4gICAgICAgICAgICAgICAgICAgIGVsZW0ucmVtb3ZlRXZlbnRMaXN0ZW5lcigndHJhbnNpdGlvbmVuZCcsIHRyYW5zaXRpb25FbmQsIGZhbHNlKTtcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICBlbGVtLmFkZEV2ZW50TGlzdGVuZXIoJ3RyYW5zaXRpb25lbmQnLCB0cmFuc2l0aW9uRW5kLCBmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICBpZiAoX3RoaXMubWFzb25yeU9wdGlvbnMudHJhbnNpdGlvbkR1cmF0aW9uID09PSBcIjBcIikge1xyXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb25FbmQoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSwgMTApO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJldHVybiBvYnN2O1xyXG4gICAgfTtcclxuICAgIC8qKlxyXG4gICAgICogQWRkIHRyYW5zaXRpb24gZWZmZWN0IG9uIERPTSBOb2RlIHJlbW92YWxcclxuICAgICAqIEBwYXJhbSB7P30gZWxlbVxyXG4gICAgICogQHJldHVybiB7P31cclxuICAgICAqL1xyXG4gICAgTmdNYXNvbnJ5R3JpZFNlcnZpY2UucHJvdG90eXBlLmFkZFRyYW5zaXRpb24gPSAvKipcclxuICAgICAqIEFkZCB0cmFuc2l0aW9uIGVmZmVjdCBvbiBET00gTm9kZSByZW1vdmFsXHJcbiAgICAgKiBAcGFyYW0gez99IGVsZW1cclxuICAgICAqIEByZXR1cm4gez99XHJcbiAgICAgKi9cclxuICAgIGZ1bmN0aW9uIChlbGVtKSB7XHJcbiAgICAgICAgZWxlbS5zdHlsZS50cmFuc2l0aW9uID0gJ3RyYW5zZm9ybSAnICsgdGhpcy5tYXNvbnJ5T3B0aW9ucy50cmFuc2l0aW9uRHVyYXRpb24gKyAnLCBvcGFjaXR5ICcgKyB0aGlzLm1hc29ucnlPcHRpb25zLnRyYW5zaXRpb25EdXJhdGlvbjtcclxuICAgICAgICBlbGVtLnN0eWxlLnRyYW5zZm9ybSA9ICdzY2FsZSgwLjAwMSknO1xyXG4gICAgICAgIGVsZW0uc3R5bGUub3BhY2l0eSA9ICcwJztcclxuICAgIH07XHJcbiAgICAvKipcclxuICAgICAqIE9uIHRyYW5zaXRpb24gRW5kLCByZW1vdmUgZXZlbnRMaXN0ZW5lclxyXG4gICAgICogQHBhcmFtIHs/fSBvYnNlcnZlciBTdWJzY3JpYmVyPE1hc29ucnlHcmlkSXRlbT5cclxuICAgICAqIEBwYXJhbSB7P30gZWxlbVxyXG4gICAgICogQHJldHVybiB7P31cclxuICAgICAqL1xyXG4gICAgTmdNYXNvbnJ5R3JpZFNlcnZpY2UucHJvdG90eXBlLl9vblRyYW5zaXRpb25FbmQgPSAvKipcclxuICAgICAqIE9uIHRyYW5zaXRpb24gRW5kLCByZW1vdmUgZXZlbnRMaXN0ZW5lclxyXG4gICAgICogQHBhcmFtIHs/fSBvYnNlcnZlciBTdWJzY3JpYmVyPE1hc29ucnlHcmlkSXRlbT5cclxuICAgICAqIEBwYXJhbSB7P30gZWxlbVxyXG4gICAgICogQHJldHVybiB7P31cclxuICAgICAqL1xyXG4gICAgZnVuY3Rpb24gKG9ic2VydmVyLCBlbGVtKSB7XHJcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcclxuICAgICAgICBpZiAoZWxlbSkge1xyXG4gICAgICAgICAgICB0aGlzLmFkZFRyYW5zaXRpb24oZWxlbSk7XHJcbiAgICAgICAgICAgIC8qKiBAdHlwZSB7P30gKi9cclxuICAgICAgICAgICAgdmFyIHRyYW5zaXRpb25FbmRfMSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIC8qKiBAdHlwZSB7P30gKi9cclxuICAgICAgICAgICAgICAgIHZhciBpc2luZGV4ID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoX3RoaXMuZWwuY2hpbGRyZW4pLmZpbmRJbmRleChmdW5jdGlvbiAoZWxlbWVudCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBlbGVtZW50LmdldEF0dHJpYnV0ZSgnZGF0YS1jb3VudCcpID09PSBlbGVtLmdldEF0dHJpYnV0ZSgnZGF0YS1jb3VudCcpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICBpZiAoaXNpbmRleCAhPT0gLTEpIHtcclxuICAgICAgICAgICAgICAgICAgICBvYnNlcnZlci5uZXh0KHsgZWxlbWVudDogZWxlbSwgaW5kZXg6IGlzaW5kZXggfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICBfdGhpcy5fbXNucnkucmVsb2FkSXRlbXMoKTtcclxuICAgICAgICAgICAgICAgICAgICBfdGhpcy5fbXNucnkubGF5b3V0KCk7XHJcbiAgICAgICAgICAgICAgICB9LCAxMCk7XHJcbiAgICAgICAgICAgICAgICBlbGVtLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3RyYW5zaXRpb25lbmQnLCB0cmFuc2l0aW9uRW5kXzEsIGZhbHNlKTtcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgZWxlbS5hZGRFdmVudExpc3RlbmVyKCd0cmFuc2l0aW9uZW5kJywgdHJhbnNpdGlvbkVuZF8xLCBmYWxzZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIE5nTWFzb25yeUdyaWRTZXJ2aWNlLmRlY29yYXRvcnMgPSBbXHJcbiAgICAgICAgeyB0eXBlOiBjb3JlLkluamVjdGFibGUgfSxcclxuICAgIF07XHJcbiAgICAvKiogQG5vY29sbGFwc2UgKi9cclxuICAgIE5nTWFzb25yeUdyaWRTZXJ2aWNlLmN0b3JQYXJhbWV0ZXJzID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gW1xyXG4gICAgICAgIHsgdHlwZTogdW5kZWZpbmVkLCBkZWNvcmF0b3JzOiBbeyB0eXBlOiBjb3JlLkluamVjdCwgYXJnczogW2NvcmUuUExBVEZPUk1fSUQsXSB9XSB9XHJcbiAgICBdOyB9O1xyXG4gICAgcmV0dXJuIE5nTWFzb25yeUdyaWRTZXJ2aWNlO1xyXG59KCkpO1xuXG4vKipcclxuICogQGZpbGVvdmVydmlldyBhZGRlZCBieSB0c2lja2xlXHJcbiAqIEBzdXBwcmVzcyB7Y2hlY2tUeXBlcyxleHRyYVJlcXVpcmUsdXNlbGVzc0NvZGV9IGNoZWNrZWQgYnkgdHNjXHJcbiAqL1xyXG4vKipcclxuICogU2hhaWxlbmRyYSBLdW1hciA8c2hhaWx1LnNuaXN0QGdtYWlsLmNvbT5cclxuICogQGlnbm9yZVxyXG4gKi9cclxudmFyIE5nTWFzb25yeUdyaWRDb21wb25lbnQgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBOZ01hc29ucnlHcmlkQ29tcG9uZW50KF9wbGF0Zm9ybUlkLCBfZWxlbWVudCwgbWFzb25yeUdyaWRTZXJ2aWNlKSB7XHJcbiAgICAgICAgdGhpcy5fcGxhdGZvcm1JZCA9IF9wbGF0Zm9ybUlkO1xyXG4gICAgICAgIHRoaXMuX2VsZW1lbnQgPSBfZWxlbWVudDtcclxuICAgICAgICB0aGlzLm1hc29ucnlHcmlkU2VydmljZSA9IG1hc29ucnlHcmlkU2VydmljZTtcclxuICAgICAgICAvLyBJbnB1dHNcclxuICAgICAgICB0aGlzLm1hc29ucnlPcHRpb25zID0ge307XHJcbiAgICAgICAgdGhpcy51c2VBbmltYXRpb24gPSBmYWxzZTtcclxuICAgICAgICB0aGlzLnVzZUltYWdlc0xvYWRlZCA9IGZhbHNlO1xyXG4gICAgICAgIC8vIE91dHB1dHNcclxuICAgICAgICB0aGlzLmxheW91dENvbXBsZXRlID0gbmV3IGNvcmUuRXZlbnRFbWl0dGVyKCk7XHJcbiAgICAgICAgdGhpcy5yZW1vdmVDb21wbGV0ZSA9IG5ldyBjb3JlLkV2ZW50RW1pdHRlcigpO1xyXG4gICAgICAgIHRoaXMub25OZ01hc29ucnlJbml0ID0gbmV3IGNvcmUuRXZlbnRFbWl0dGVyKCk7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIEByZXR1cm4gez99XHJcbiAgICAgKi9cclxuICAgIE5nTWFzb25yeUdyaWRDb21wb25lbnQucHJvdG90eXBlLm5nT25Jbml0ID0gLyoqXHJcbiAgICAgKiBAcmV0dXJuIHs/fVxyXG4gICAgICovXHJcbiAgICBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGhpcy5fZWxlbWVudC5uYXRpdmVFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2dyaWQnKTtcclxuICAgICAgICB0aGlzLmluaXRpYWxpemVNYXNvbnJ5KCk7XHJcbiAgICB9O1xyXG4gICAgLyoqXHJcbiAgICAgKiBAcmV0dXJuIHs/fVxyXG4gICAgICovXHJcbiAgICBOZ01hc29ucnlHcmlkQ29tcG9uZW50LnByb3RvdHlwZS5uZ0FmdGVyQ29udGVudEluaXQgPSAvKipcclxuICAgICAqIEByZXR1cm4gez99XHJcbiAgICAgKi9cclxuICAgIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAvLyBpbml0aWFsaXplIG1hc29ucnkgYWZ0ZXIgVmlldyBJbml0aWFsaXphdGlvblxyXG4gICAgICAgIC8vIHRoaXMuaW5pdGlhbGl6ZU1hc29ucnkoKTtcclxuICAgIH07XHJcbiAgICAvKipcclxuICAgICAqIEByZXR1cm4gez99XHJcbiAgICAgKi9cclxuICAgIE5nTWFzb25yeUdyaWRDb21wb25lbnQucHJvdG90eXBlLm5nT25EZXN0cm95ID0gLyoqXHJcbiAgICAgKiBAcmV0dXJuIHs/fVxyXG4gICAgICovXHJcbiAgICBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuX21zbnJ5KSB7XHJcbiAgICAgICAgICAgIHRoaXMuX21zbnJ5LmRlc3Ryb3koKTtcclxuICAgICAgICAgICAgdGhpcy5tYXNvbnJ5R3JpZFNlcnZpY2Uub25EZXN0b3J5KCk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIC8qKlxyXG4gICAgICogQHJldHVybiB7P31cclxuICAgICAqL1xyXG4gICAgTmdNYXNvbnJ5R3JpZENvbXBvbmVudC5wcm90b3R5cGUubGF5b3V0ID0gLyoqXHJcbiAgICAgKiBAcmV0dXJuIHs/fVxyXG4gICAgICovXHJcbiAgICBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcclxuICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgX3RoaXMuX21zbnJ5LmxheW91dCgpO1xyXG4gICAgICAgIH0sIDUwKTtcclxuICAgIH07XHJcbiAgICAvKipcclxuICAgICAqIEBwYXJhbSB7P30gZWxlbWVudFxyXG4gICAgICogQHJldHVybiB7P31cclxuICAgICAqL1xyXG4gICAgTmdNYXNvbnJ5R3JpZENvbXBvbmVudC5wcm90b3R5cGUucmVtb3ZlID0gLyoqXHJcbiAgICAgKiBAcGFyYW0gez99IGVsZW1lbnRcclxuICAgICAqIEByZXR1cm4gez99XHJcbiAgICAgKi9cclxuICAgIGZ1bmN0aW9uIChlbGVtZW50KSB7XHJcbiAgICAgICAgdGhpcy5fbXNucnkucmVtb3ZlKGVsZW1lbnQpO1xyXG4gICAgICAgIHRoaXMubGF5b3V0KCk7XHJcbiAgICB9O1xyXG4gICAgLyoqXHJcbiAgICAgKiBAcGFyYW0gez99IGVsZW1lbnRcclxuICAgICAqIEByZXR1cm4gez99XHJcbiAgICAgKi9cclxuICAgIE5nTWFzb25yeUdyaWRDb21wb25lbnQucHJvdG90eXBlLmFkZCA9IC8qKlxyXG4gICAgICogQHBhcmFtIHs/fSBlbGVtZW50XHJcbiAgICAgKiBAcmV0dXJuIHs/fVxyXG4gICAgICovXHJcbiAgICBmdW5jdGlvbiAoZWxlbWVudCkge1xyXG4gICAgICAgIHRoaXMubWFzb25yeUdyaWRTZXJ2aWNlLmFkZChlbGVtZW50KTtcclxuICAgIH07XHJcbiAgICAvKipcclxuICAgICAqIEByZXR1cm4gez99XHJcbiAgICAgKi9cclxuICAgIE5nTWFzb25yeUdyaWRDb21wb25lbnQucHJvdG90eXBlLmluaXRpYWxpemVNYXNvbnJ5ID0gLyoqXHJcbiAgICAgKiBAcmV0dXJuIHs/fVxyXG4gICAgICovXHJcbiAgICBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcclxuICAgICAgICAvLyBpbml0aWFsaXplIE1hc29ucnkgd2l0aCBBbmltYXRpb24gZWZmZWN0c1xyXG4gICAgICAgIHRoaXMuX21zbnJ5ID0gdGhpcy5tYXNvbnJ5R3JpZFNlcnZpY2VcclxuICAgICAgICAgICAgLmluaXQodGhpcy5fZWxlbWVudC5uYXRpdmVFbGVtZW50LCB0aGlzLm1hc29ucnlPcHRpb25zLCB0aGlzLnVzZUFuaW1hdGlvbiwgdGhpcy5zY3JvbGxBbmltYXRpb25PcHRpb25zLCB0aGlzLnVzZUltYWdlc0xvYWRlZCk7XHJcbiAgICAgICAgLy8gQmluZCB0byBNYXNvbnJ5IGV2ZW50c1xyXG4gICAgICAgIHRoaXMuX21zbnJ5Lm9uKCdsYXlvdXRDb21wbGV0ZScsIGZ1bmN0aW9uIChpdGVtcykge1xyXG4gICAgICAgICAgICBfdGhpcy5sYXlvdXRDb21wbGV0ZS5lbWl0KGl0ZW1zKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLl9tc25yeS5vbigncmVtb3ZlQ29tcGxldGUnLCBmdW5jdGlvbiAoaXRlbXMpIHtcclxuICAgICAgICAgICAgX3RoaXMucmVtb3ZlQ29tcGxldGUuZW1pdChpdGVtcyk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5fbXNucnkucmVtb3ZlQW5pbWF0aW9uID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBfdGhpcy5tYXNvbnJ5R3JpZFNlcnZpY2UucmVtb3ZlQW5pbWF0aW9uKCk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLl9tc25yeS5zZXRBZGRTdGF0dXMgPSBmdW5jdGlvbiAodmFsdWUpIHtcclxuICAgICAgICAgICAgX3RoaXMubWFzb25yeUdyaWRTZXJ2aWNlLnNldEFkZFN0YXR1cyh2YWx1ZSk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLl9tc25yeS5yZW1vdmVJdGVtID0gZnVuY3Rpb24gKGl0ZW0pIHtcclxuICAgICAgICAgICAgcmV0dXJuIF90aGlzLm1hc29ucnlHcmlkU2VydmljZS5yZW1vdmVJdGVtKGl0ZW0pO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5fbXNucnkucmVtb3ZlRmlyc3RJdGVtID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gX3RoaXMubWFzb25yeUdyaWRTZXJ2aWNlLnJlbW92ZUZpcnN0SXRlbSgpO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5fbXNucnkucmVtb3ZlQWxsSXRlbXMgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBfdGhpcy5tYXNvbnJ5R3JpZFNlcnZpY2UucmVtb3ZlQWxsSXRlbXMoKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMuX21zbnJ5LnJlT3JkZXJJdGVtcyA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIF90aGlzLm1hc29ucnlHcmlkU2VydmljZS5yZW9yZGVyTWFzb25yeUl0ZW1zKCk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICAvLyBlbWl0IE1hc29ucnkgSW5pdGlhbGl6YXRpb24gZXZlbnRcclxuICAgICAgICB0aGlzLm9uTmdNYXNvbnJ5SW5pdC5lbWl0KHRoaXMuX21zbnJ5KTtcclxuICAgICAgICB0aGlzLmxheW91dCgpO1xyXG4gICAgfTtcclxuICAgIE5nTWFzb25yeUdyaWRDb21wb25lbnQuZGVjb3JhdG9ycyA9IFtcclxuICAgICAgICB7IHR5cGU6IGNvcmUuQ29tcG9uZW50LCBhcmdzOiBbe1xyXG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnW25nLW1hc29ucnktZ3JpZF0sIG5nLW1hc29ucnktZ3JpZCcsXHJcbiAgICAgICAgICAgICAgICAgICAgdGVtcGxhdGU6ICc8bmctY29udGVudD48L25nLWNvbnRlbnQ+JyxcclxuICAgICAgICAgICAgICAgICAgICBzdHlsZXM6IFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG5cXHRcXHQ6aG9zdCB7XFxuXFx0XFx0XFx0ZGlzcGxheTogYmxvY2s7XFxuXFx0XFx0fVxcblxcdFwiXHJcbiAgICAgICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICAgICAgfSxdIH0sXHJcbiAgICBdO1xyXG4gICAgLyoqIEBub2NvbGxhcHNlICovXHJcbiAgICBOZ01hc29ucnlHcmlkQ29tcG9uZW50LmN0b3JQYXJhbWV0ZXJzID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gW1xyXG4gICAgICAgIHsgdHlwZTogdW5kZWZpbmVkLCBkZWNvcmF0b3JzOiBbeyB0eXBlOiBjb3JlLkluamVjdCwgYXJnczogW2NvcmUuUExBVEZPUk1fSUQsXSB9XSB9LFxyXG4gICAgICAgIHsgdHlwZTogY29yZS5FbGVtZW50UmVmIH0sXHJcbiAgICAgICAgeyB0eXBlOiBOZ01hc29ucnlHcmlkU2VydmljZSB9XHJcbiAgICBdOyB9O1xyXG4gICAgTmdNYXNvbnJ5R3JpZENvbXBvbmVudC5wcm9wRGVjb3JhdG9ycyA9IHtcclxuICAgICAgICBtYXNvbnJ5T3B0aW9uczogW3sgdHlwZTogY29yZS5JbnB1dCB9XSxcclxuICAgICAgICB1c2VBbmltYXRpb246IFt7IHR5cGU6IGNvcmUuSW5wdXQgfV0sXHJcbiAgICAgICAgc2Nyb2xsQW5pbWF0aW9uT3B0aW9uczogW3sgdHlwZTogY29yZS5JbnB1dCB9XSxcclxuICAgICAgICB1c2VJbWFnZXNMb2FkZWQ6IFt7IHR5cGU6IGNvcmUuSW5wdXQgfV0sXHJcbiAgICAgICAgbGF5b3V0Q29tcGxldGU6IFt7IHR5cGU6IGNvcmUuT3V0cHV0IH1dLFxyXG4gICAgICAgIHJlbW92ZUNvbXBsZXRlOiBbeyB0eXBlOiBjb3JlLk91dHB1dCB9XSxcclxuICAgICAgICBvbk5nTWFzb25yeUluaXQ6IFt7IHR5cGU6IGNvcmUuT3V0cHV0IH1dXHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIE5nTWFzb25yeUdyaWRDb21wb25lbnQ7XHJcbn0oKSk7XG5cbi8qKlxyXG4gKiBAZmlsZW92ZXJ2aWV3IGFkZGVkIGJ5IHRzaWNrbGVcclxuICogQHN1cHByZXNzIHtjaGVja1R5cGVzLGV4dHJhUmVxdWlyZSx1c2VsZXNzQ29kZX0gY2hlY2tlZCBieSB0c2NcclxuICovXHJcbi8qKlxyXG4gKiBTaGFpbGVuZHJhIEt1bWFyIDxzaGFpbHUuc25pc3RAZ21haWwuY29tPlxyXG4gKiBAaWdub3JlXHJcbiAqL1xyXG52YXIgTmdNYXNvbnJ5R3JpZERpcmVjdGl2ZSA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIE5nTWFzb25yeUdyaWREaXJlY3RpdmUoX2VsZW1lbnQsIF9wYXJlbnQsIHBsYXRmb3JtSWQsIG1hc29ucnlHcmlkU2VydmljZSkge1xyXG4gICAgICAgIHRoaXMuX2VsZW1lbnQgPSBfZWxlbWVudDtcclxuICAgICAgICB0aGlzLl9wYXJlbnQgPSBfcGFyZW50O1xyXG4gICAgICAgIHRoaXMucGxhdGZvcm1JZCA9IHBsYXRmb3JtSWQ7XHJcbiAgICAgICAgdGhpcy5tYXNvbnJ5R3JpZFNlcnZpY2UgPSBtYXNvbnJ5R3JpZFNlcnZpY2U7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIEByZXR1cm4gez99XHJcbiAgICAgKi9cclxuICAgIE5nTWFzb25yeUdyaWREaXJlY3RpdmUucHJvdG90eXBlLm5nT25Jbml0ID0gLyoqXHJcbiAgICAgKiBAcmV0dXJuIHs/fVxyXG4gICAgICovXHJcbiAgICBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgLy8gdGhpcy5fcGFyZW50LmFkZCh0aGlzLl9lbGVtZW50Lm5hdGl2ZUVsZW1lbnQpO1xyXG4gICAgfTtcclxuICAgIC8qKlxyXG4gICAgICogQWRkIE1hc29ucnkgZ3JpZCBpdGVtIGFmdGVyIHZpZXcgaW5pdGlhbGl6YXRpb25cclxuICAgICAqL1xyXG4gICAgLyoqXHJcbiAgICAgKiBBZGQgTWFzb25yeSBncmlkIGl0ZW0gYWZ0ZXIgdmlldyBpbml0aWFsaXphdGlvblxyXG4gICAgICogQHJldHVybiB7P31cclxuICAgICAqL1xyXG4gICAgTmdNYXNvbnJ5R3JpZERpcmVjdGl2ZS5wcm90b3R5cGUubmdBZnRlclZpZXdJbml0ID0gLyoqXHJcbiAgICAgKiBBZGQgTWFzb25yeSBncmlkIGl0ZW0gYWZ0ZXIgdmlldyBpbml0aWFsaXphdGlvblxyXG4gICAgICogQHJldHVybiB7P31cclxuICAgICAqL1xyXG4gICAgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGlmIChjb21tb24uaXNQbGF0Zm9ybUJyb3dzZXIodGhpcy5wbGF0Zm9ybUlkKSkge1xyXG4gICAgICAgICAgICB0aGlzLm1hc29ucnlHcmlkU2VydmljZS5pdGVtc0NvdW50Kys7XHJcbiAgICAgICAgICAgIC8vIHNldCBjb3VudCBhdHRyaWJ1dGUgZm9yIGV2ZXJ5IGdyaWQgaXRlbVxyXG4gICAgICAgICAgICB0aGlzLl9lbGVtZW50Lm5hdGl2ZUVsZW1lbnQuc2V0QXR0cmlidXRlKCdkYXRhLWNvdW50JywgdGhpcy5tYXNvbnJ5R3JpZFNlcnZpY2UuaXRlbXNDb3VudCk7XHJcbiAgICAgICAgICAgIC8vIGlmICh0aGlzLm1hc29ucnlHcmlkU2VydmljZS5tYXNvbnJ5T3B0aW9ucy5ob3Jpem9udGFsT3JkZXIpIHtcclxuICAgICAgICAgICAgLy8gICB0aGlzLm1hc29ucnlHcmlkU2VydmljZS5hZGRPcmRlckl0ZW0odGhpcy5fZWxlbWVudC5uYXRpdmVFbGVtZW50KTtcclxuICAgICAgICAgICAgLy8gfSBlbHNlIHtcclxuICAgICAgICAgICAgLy8gICB0aGlzLl9wYXJlbnQuYWRkKHRoaXMuX2VsZW1lbnQubmF0aXZlRWxlbWVudCk7XHJcbiAgICAgICAgICAgIC8vIH1cclxuICAgICAgICAgICAgdGhpcy5fcGFyZW50LmFkZCh0aGlzLl9lbGVtZW50Lm5hdGl2ZUVsZW1lbnQpO1xyXG4gICAgICAgICAgICB0aGlzLndhdGNoRm9ySHRtbENoYW5nZXMoKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgLyoqXHJcbiAgICAgKiBAcmV0dXJuIHs/fVxyXG4gICAgICovXHJcbiAgICBOZ01hc29ucnlHcmlkRGlyZWN0aXZlLnByb3RvdHlwZS5uZ09uRGVzdHJveSA9IC8qKlxyXG4gICAgICogQHJldHVybiB7P31cclxuICAgICAqL1xyXG4gICAgZnVuY3Rpb24gKCkge1xyXG4gICAgfTtcclxuICAgIC8qKlxyXG4gICAgICogV2hlbiBIVE1MIGluIGJyaWNrIGNoYW5nZXMgZHluYW1pY2FsbHksIG9ic2VydmUgdGhhdCBhbmQgY2hhbmdlIGxheW91dFxyXG4gICAgICogQHJldHVybiB7P31cclxuICAgICAqL1xyXG4gICAgTmdNYXNvbnJ5R3JpZERpcmVjdGl2ZS5wcm90b3R5cGUud2F0Y2hGb3JIdG1sQ2hhbmdlcyA9IC8qKlxyXG4gICAgICogV2hlbiBIVE1MIGluIGJyaWNrIGNoYW5nZXMgZHluYW1pY2FsbHksIG9ic2VydmUgdGhhdCBhbmQgY2hhbmdlIGxheW91dFxyXG4gICAgICogQHJldHVybiB7P31cclxuICAgICAqL1xyXG4gICAgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIE11dGF0aW9uT2JzZXJ2ZXIgPSB3aW5kb3cuTXV0YXRpb25PYnNlcnZlciB8fCB3aW5kb3cuV2ViS2l0TXV0YXRpb25PYnNlcnZlcjtcclxuICAgICAgICBpZiAoTXV0YXRpb25PYnNlcnZlcikge1xyXG4gICAgICAgICAgICAvKiogKlxyXG4gICAgICAgICAgICAgKiBXYXRjaCBmb3IgYW55IGNoYW5nZXMgdG8gc3VidHJlZVxyXG4gICAgICAgICAgICAgIEB0eXBlIHs/fSAqL1xyXG4gICAgICAgICAgICB2YXIgc2VsZl8xID0gdGhpcztcclxuICAgICAgICAgICAgLyoqIEB0eXBlIHs/fSAqL1xyXG4gICAgICAgICAgICB2YXIgb2JzZXJ2ZXIgPSBuZXcgTXV0YXRpb25PYnNlcnZlcihmdW5jdGlvbiAobXV0YXRpb25zLCBvYnNlcnZlckZyb21FbGVtZW50KSB7XHJcbiAgICAgICAgICAgICAgICBzZWxmXzEuX3BhcmVudC5sYXlvdXQoKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIC8vIGRlZmluZSB3aGF0IGVsZW1lbnQgc2hvdWxkIGJlIG9ic2VydmVkIGJ5IHRoZSBvYnNlcnZlclxyXG4gICAgICAgICAgICAvLyBhbmQgd2hhdCB0eXBlcyBvZiBtdXRhdGlvbnMgdHJpZ2dlciB0aGUgY2FsbGJhY2tcclxuICAgICAgICAgICAgb2JzZXJ2ZXIub2JzZXJ2ZSh0aGlzLl9lbGVtZW50Lm5hdGl2ZUVsZW1lbnQsIHtcclxuICAgICAgICAgICAgICAgIHN1YnRyZWU6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBjaGlsZExpc3Q6IHRydWVcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIE5nTWFzb25yeUdyaWREaXJlY3RpdmUuZGVjb3JhdG9ycyA9IFtcclxuICAgICAgICB7IHR5cGU6IGNvcmUuRGlyZWN0aXZlLCBhcmdzOiBbe1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpkaXJlY3RpdmUtc2VsZWN0b3JcclxuICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ1tuZy1tYXNvbnJ5LWdyaWQtaXRlbV0sIG5nLW1hc29ucnktZ3JpZC1pdGVtJ1xyXG4gICAgICAgICAgICAgICAgfSxdIH0sXHJcbiAgICBdO1xyXG4gICAgLyoqIEBub2NvbGxhcHNlICovXHJcbiAgICBOZ01hc29ucnlHcmlkRGlyZWN0aXZlLmN0b3JQYXJhbWV0ZXJzID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gW1xyXG4gICAgICAgIHsgdHlwZTogY29yZS5FbGVtZW50UmVmIH0sXHJcbiAgICAgICAgeyB0eXBlOiBOZ01hc29ucnlHcmlkQ29tcG9uZW50LCBkZWNvcmF0b3JzOiBbeyB0eXBlOiBjb3JlLkluamVjdCwgYXJnczogW2NvcmUuZm9yd2FyZFJlZihmdW5jdGlvbiAoKSB7IHJldHVybiBOZ01hc29ucnlHcmlkQ29tcG9uZW50OyB9KSxdIH1dIH0sXHJcbiAgICAgICAgeyB0eXBlOiB1bmRlZmluZWQsIGRlY29yYXRvcnM6IFt7IHR5cGU6IGNvcmUuSW5qZWN0LCBhcmdzOiBbY29yZS5QTEFURk9STV9JRCxdIH1dIH0sXHJcbiAgICAgICAgeyB0eXBlOiBOZ01hc29ucnlHcmlkU2VydmljZSB9XHJcbiAgICBdOyB9O1xyXG4gICAgcmV0dXJuIE5nTWFzb25yeUdyaWREaXJlY3RpdmU7XHJcbn0oKSk7XG5cbi8qKlxyXG4gKiBAZmlsZW92ZXJ2aWV3IGFkZGVkIGJ5IHRzaWNrbGVcclxuICogQHN1cHByZXNzIHtjaGVja1R5cGVzLGV4dHJhUmVxdWlyZSx1c2VsZXNzQ29kZX0gY2hlY2tlZCBieSB0c2NcclxuICovXHJcbi8qKlxyXG4gKiBTaGFpbGVuZHJhIEt1bWFyIDxzaGFpbHUuc25pc3RAZ21haWwuY29tPlxyXG4gKiBAaWdub3JlXHJcbiAqL1xyXG52YXIgTmdNYXNvbnJ5R3JpZE1vZHVsZSA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIE5nTWFzb25yeUdyaWRNb2R1bGUoKSB7XHJcbiAgICB9XHJcbiAgICBOZ01hc29ucnlHcmlkTW9kdWxlLmRlY29yYXRvcnMgPSBbXHJcbiAgICAgICAgeyB0eXBlOiBjb3JlLk5nTW9kdWxlLCBhcmdzOiBbe1xyXG4gICAgICAgICAgICAgICAgICAgIGltcG9ydHM6IFtjb21tb24uQ29tbW9uTW9kdWxlXSxcclxuICAgICAgICAgICAgICAgICAgICBleHBvcnRzOiBbTmdNYXNvbnJ5R3JpZENvbXBvbmVudCwgTmdNYXNvbnJ5R3JpZERpcmVjdGl2ZV0sXHJcbiAgICAgICAgICAgICAgICAgICAgZGVjbGFyYXRpb25zOiBbTmdNYXNvbnJ5R3JpZENvbXBvbmVudCwgTmdNYXNvbnJ5R3JpZERpcmVjdGl2ZV0sXHJcbiAgICAgICAgICAgICAgICAgICAgcHJvdmlkZXJzOiBbTmdNYXNvbnJ5R3JpZFNlcnZpY2VdXHJcbiAgICAgICAgICAgICAgICB9LF0gfSxcclxuICAgIF07XHJcbiAgICByZXR1cm4gTmdNYXNvbnJ5R3JpZE1vZHVsZTtcclxufSgpKTtcblxuLyoqXHJcbiAqIEBmaWxlb3ZlcnZpZXcgYWRkZWQgYnkgdHNpY2tsZVxyXG4gKiBAc3VwcHJlc3Mge2NoZWNrVHlwZXMsZXh0cmFSZXF1aXJlLHVzZWxlc3NDb2RlfSBjaGVja2VkIGJ5IHRzY1xyXG4gKi9cclxuLyoqXHJcbiAqIE1hc29ucnkgR3JpZCBpdGVtXHJcbiAqL1xyXG52YXIgTWFzb25yeUdyaWRJdGVtID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gTWFzb25yeUdyaWRJdGVtKCkge1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIE1hc29ucnlHcmlkSXRlbTtcclxufSgpKTtcclxuLyoqXHJcbiAqIE1hc29ucnkgT3B0aW9uc1xyXG4gKiBAcmVjb3JkXHJcbiAqL1xyXG5cclxuLyoqXHJcbiAqIE1hc29ucnkgT2JqZWN0XHJcbiAqL1xyXG52YXIgTWFzb25yeSA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIE1hc29ucnkoc2VsZWN0b3IsIG9wdGlvbnMpIHtcclxuICAgIH1cclxuICAgIFxyXG4gICAgcmV0dXJuIE1hc29ucnk7XHJcbn0oKSk7XHJcbi8qKlxyXG4gKiBTY3JvbGwgQW5pbWF0aW9uIG9wdGlvbnNcclxuICogQHJlY29yZFxyXG4gKi9cclxuXHJcbi8qKlxyXG4gKiBpbnRlcmZhY2UgZm9yIGFuIGltYWdlIGN1cnJlbnRseSBsb2FkaW5nIG9yIGNvbXBsZXRlZFxyXG4gKiBAcmVjb3JkXHJcbiAqL1xyXG5cclxuLyoqXHJcbiAqIEByZWNvcmRcclxuICovXHJcblxyXG4vKipcclxuICogQHJlY29yZFxyXG4gKi9cclxuXHJcbi8qKlxyXG4gKiBAcmVjb3JkXHJcbiAqL1xyXG5cclxuLyoqXHJcbiAqIEByZWNvcmRcclxuICovXHJcblxyXG4vKipcclxuICogQHJlY29yZFxyXG4gKi9cblxuLyoqXHJcbiAqIEBmaWxlb3ZlcnZpZXcgYWRkZWQgYnkgdHNpY2tsZVxyXG4gKiBAc3VwcHJlc3Mge2NoZWNrVHlwZXMsZXh0cmFSZXF1aXJlLHVzZWxlc3NDb2RlfSBjaGVja2VkIGJ5IHRzY1xyXG4gKi9cblxuZXhwb3J0cy5OZ01hc29ucnlHcmlkTW9kdWxlID0gTmdNYXNvbnJ5R3JpZE1vZHVsZTtcbmV4cG9ydHMuTmdNYXNvbnJ5R3JpZENvbXBvbmVudCA9IE5nTWFzb25yeUdyaWRDb21wb25lbnQ7XG5leHBvcnRzLk5nTWFzb25yeUdyaWREaXJlY3RpdmUgPSBOZ01hc29ucnlHcmlkRGlyZWN0aXZlO1xuZXhwb3J0cy5OZ01hc29ucnlHcmlkU2VydmljZSA9IE5nTWFzb25yeUdyaWRTZXJ2aWNlO1xuZXhwb3J0cy5NYXNvbnJ5ID0gTWFzb25yeTtcbmV4cG9ydHMuTWFzb25yeUdyaWRJdGVtID0gTWFzb25yeUdyaWRJdGVtO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuXG59KSkpO1xuIl19

/***/ }),

/***/ "Hy43":
/*!*******************************************!*\
  !*** ./node_modules/outlayer/outlayer.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * Outlayer v2.1.1
 * the brains and guts of a layout library
 * MIT license
 */

( function( window, factory ) {
  'use strict';
  // universal module definition
  /* jshint strict: false */ /* globals define, module, require */
  if ( true ) {
    // AMD - RequireJS
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [
        __webpack_require__(/*! ev-emitter/ev-emitter */ "CUlp"),
        __webpack_require__(/*! get-size/get-size */ "QK1G"),
        __webpack_require__(/*! fizzy-ui-utils/utils */ "YVj6"),
        __webpack_require__(/*! ./item */ "KK1e")
      ], __WEBPACK_AMD_DEFINE_RESULT__ = (function( EvEmitter, getSize, utils, Item ) {
        return factory( window, EvEmitter, getSize, utils, Item);
      }).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}

}( window, function factory( window, EvEmitter, getSize, utils, Item ) {
'use strict';

// ----- vars ----- //

var console = window.console;
var jQuery = window.jQuery;
var noop = function() {};

// -------------------------- Outlayer -------------------------- //

// globally unique identifiers
var GUID = 0;
// internal store of all Outlayer intances
var instances = {};


/**
 * @param {Element, String} element
 * @param {Object} options
 * @constructor
 */
function Outlayer( element, options ) {
  var queryElement = utils.getQueryElement( element );
  if ( !queryElement ) {
    if ( console ) {
      console.error( 'Bad element for ' + this.constructor.namespace +
        ': ' + ( queryElement || element ) );
    }
    return;
  }
  this.element = queryElement;
  // add jQuery
  if ( jQuery ) {
    this.$element = jQuery( this.element );
  }

  // options
  this.options = utils.extend( {}, this.constructor.defaults );
  this.option( options );

  // add id for Outlayer.getFromElement
  var id = ++GUID;
  this.element.outlayerGUID = id; // expando
  instances[ id ] = this; // associate via id

  // kick it off
  this._create();

  var isInitLayout = this._getOption('initLayout');
  if ( isInitLayout ) {
    this.layout();
  }
}

// settings are for internal use only
Outlayer.namespace = 'outlayer';
Outlayer.Item = Item;

// default options
Outlayer.defaults = {
  containerStyle: {
    position: 'relative'
  },
  initLayout: true,
  originLeft: true,
  originTop: true,
  resize: true,
  resizeContainer: true,
  // item options
  transitionDuration: '0.4s',
  hiddenStyle: {
    opacity: 0,
    transform: 'scale(0.001)'
  },
  visibleStyle: {
    opacity: 1,
    transform: 'scale(1)'
  }
};

var proto = Outlayer.prototype;
// inherit EvEmitter
utils.extend( proto, EvEmitter.prototype );

/**
 * set options
 * @param {Object} opts
 */
proto.option = function( opts ) {
  utils.extend( this.options, opts );
};

/**
 * get backwards compatible option value, check old name
 */
proto._getOption = function( option ) {
  var oldOption = this.constructor.compatOptions[ option ];
  return oldOption && this.options[ oldOption ] !== undefined ?
    this.options[ oldOption ] : this.options[ option ];
};

Outlayer.compatOptions = {
  // currentName: oldName
  initLayout: 'isInitLayout',
  horizontal: 'isHorizontal',
  layoutInstant: 'isLayoutInstant',
  originLeft: 'isOriginLeft',
  originTop: 'isOriginTop',
  resize: 'isResizeBound',
  resizeContainer: 'isResizingContainer'
};

proto._create = function() {
  // get items from children
  this.reloadItems();
  // elements that affect layout, but are not laid out
  this.stamps = [];
  this.stamp( this.options.stamp );
  // set container style
  utils.extend( this.element.style, this.options.containerStyle );

  // bind resize method
  var canBindResize = this._getOption('resize');
  if ( canBindResize ) {
    this.bindResize();
  }
};

// goes through all children again and gets bricks in proper order
proto.reloadItems = function() {
  // collection of item elements
  this.items = this._itemize( this.element.children );
};


/**
 * turn elements into Outlayer.Items to be used in layout
 * @param {Array or NodeList or HTMLElement} elems
 * @returns {Array} items - collection of new Outlayer Items
 */
proto._itemize = function( elems ) {

  var itemElems = this._filterFindItemElements( elems );
  var Item = this.constructor.Item;

  // create new Outlayer Items for collection
  var items = [];
  for ( var i=0; i < itemElems.length; i++ ) {
    var elem = itemElems[i];
    var item = new Item( elem, this );
    items.push( item );
  }

  return items;
};

/**
 * get item elements to be used in layout
 * @param {Array or NodeList or HTMLElement} elems
 * @returns {Array} items - item elements
 */
proto._filterFindItemElements = function( elems ) {
  return utils.filterFindElements( elems, this.options.itemSelector );
};

/**
 * getter method for getting item elements
 * @returns {Array} elems - collection of item elements
 */
proto.getItemElements = function() {
  return this.items.map( function( item ) {
    return item.element;
  });
};

// ----- init & layout ----- //

/**
 * lays out all items
 */
proto.layout = function() {
  this._resetLayout();
  this._manageStamps();

  // don't animate first layout
  var layoutInstant = this._getOption('layoutInstant');
  var isInstant = layoutInstant !== undefined ?
    layoutInstant : !this._isLayoutInited;
  this.layoutItems( this.items, isInstant );

  // flag for initalized
  this._isLayoutInited = true;
};

// _init is alias for layout
proto._init = proto.layout;

/**
 * logic before any new layout
 */
proto._resetLayout = function() {
  this.getSize();
};


proto.getSize = function() {
  this.size = getSize( this.element );
};

/**
 * get measurement from option, for columnWidth, rowHeight, gutter
 * if option is String -> get element from selector string, & get size of element
 * if option is Element -> get size of element
 * else use option as a number
 *
 * @param {String} measurement
 * @param {String} size - width or height
 * @private
 */
proto._getMeasurement = function( measurement, size ) {
  var option = this.options[ measurement ];
  var elem;
  if ( !option ) {
    // default to 0
    this[ measurement ] = 0;
  } else {
    // use option as an element
    if ( typeof option == 'string' ) {
      elem = this.element.querySelector( option );
    } else if ( option instanceof HTMLElement ) {
      elem = option;
    }
    // use size of element, if element
    this[ measurement ] = elem ? getSize( elem )[ size ] : option;
  }
};

/**
 * layout a collection of item elements
 * @api public
 */
proto.layoutItems = function( items, isInstant ) {
  items = this._getItemsForLayout( items );

  this._layoutItems( items, isInstant );

  this._postLayout();
};

/**
 * get the items to be laid out
 * you may want to skip over some items
 * @param {Array} items
 * @returns {Array} items
 */
proto._getItemsForLayout = function( items ) {
  return items.filter( function( item ) {
    return !item.isIgnored;
  });
};

/**
 * layout items
 * @param {Array} items
 * @param {Boolean} isInstant
 */
proto._layoutItems = function( items, isInstant ) {
  this._emitCompleteOnItems( 'layout', items );

  if ( !items || !items.length ) {
    // no items, emit event with empty array
    return;
  }

  var queue = [];

  items.forEach( function( item ) {
    // get x/y object from method
    var position = this._getItemLayoutPosition( item );
    // enqueue
    position.item = item;
    position.isInstant = isInstant || item.isLayoutInstant;
    queue.push( position );
  }, this );

  this._processLayoutQueue( queue );
};

/**
 * get item layout position
 * @param {Outlayer.Item} item
 * @returns {Object} x and y position
 */
proto._getItemLayoutPosition = function( /* item */ ) {
  return {
    x: 0,
    y: 0
  };
};

/**
 * iterate over array and position each item
 * Reason being - separating this logic prevents 'layout invalidation'
 * thx @paul_irish
 * @param {Array} queue
 */
proto._processLayoutQueue = function( queue ) {
  this.updateStagger();
  queue.forEach( function( obj, i ) {
    this._positionItem( obj.item, obj.x, obj.y, obj.isInstant, i );
  }, this );
};

// set stagger from option in milliseconds number
proto.updateStagger = function() {
  var stagger = this.options.stagger;
  if ( stagger === null || stagger === undefined ) {
    this.stagger = 0;
    return;
  }
  this.stagger = getMilliseconds( stagger );
  return this.stagger;
};

/**
 * Sets position of item in DOM
 * @param {Outlayer.Item} item
 * @param {Number} x - horizontal position
 * @param {Number} y - vertical position
 * @param {Boolean} isInstant - disables transitions
 */
proto._positionItem = function( item, x, y, isInstant, i ) {
  if ( isInstant ) {
    // if not transition, just set CSS
    item.goTo( x, y );
  } else {
    item.stagger( i * this.stagger );
    item.moveTo( x, y );
  }
};

/**
 * Any logic you want to do after each layout,
 * i.e. size the container
 */
proto._postLayout = function() {
  this.resizeContainer();
};

proto.resizeContainer = function() {
  var isResizingContainer = this._getOption('resizeContainer');
  if ( !isResizingContainer ) {
    return;
  }
  var size = this._getContainerSize();
  if ( size ) {
    this._setContainerMeasure( size.width, true );
    this._setContainerMeasure( size.height, false );
  }
};

/**
 * Sets width or height of container if returned
 * @returns {Object} size
 *   @param {Number} width
 *   @param {Number} height
 */
proto._getContainerSize = noop;

/**
 * @param {Number} measure - size of width or height
 * @param {Boolean} isWidth
 */
proto._setContainerMeasure = function( measure, isWidth ) {
  if ( measure === undefined ) {
    return;
  }

  var elemSize = this.size;
  // add padding and border width if border box
  if ( elemSize.isBorderBox ) {
    measure += isWidth ? elemSize.paddingLeft + elemSize.paddingRight +
      elemSize.borderLeftWidth + elemSize.borderRightWidth :
      elemSize.paddingBottom + elemSize.paddingTop +
      elemSize.borderTopWidth + elemSize.borderBottomWidth;
  }

  measure = Math.max( measure, 0 );
  this.element.style[ isWidth ? 'width' : 'height' ] = measure + 'px';
};

/**
 * emit eventComplete on a collection of items events
 * @param {String} eventName
 * @param {Array} items - Outlayer.Items
 */
proto._emitCompleteOnItems = function( eventName, items ) {
  var _this = this;
  function onComplete() {
    _this.dispatchEvent( eventName + 'Complete', null, [ items ] );
  }

  var count = items.length;
  if ( !items || !count ) {
    onComplete();
    return;
  }

  var doneCount = 0;
  function tick() {
    doneCount++;
    if ( doneCount == count ) {
      onComplete();
    }
  }

  // bind callback
  items.forEach( function( item ) {
    item.once( eventName, tick );
  });
};

/**
 * emits events via EvEmitter and jQuery events
 * @param {String} type - name of event
 * @param {Event} event - original event
 * @param {Array} args - extra arguments
 */
proto.dispatchEvent = function( type, event, args ) {
  // add original event to arguments
  var emitArgs = event ? [ event ].concat( args ) : args;
  this.emitEvent( type, emitArgs );

  if ( jQuery ) {
    // set this.$element
    this.$element = this.$element || jQuery( this.element );
    if ( event ) {
      // create jQuery event
      var $event = jQuery.Event( event );
      $event.type = type;
      this.$element.trigger( $event, args );
    } else {
      // just trigger with type if no event available
      this.$element.trigger( type, args );
    }
  }
};

// -------------------------- ignore & stamps -------------------------- //


/**
 * keep item in collection, but do not lay it out
 * ignored items do not get skipped in layout
 * @param {Element} elem
 */
proto.ignore = function( elem ) {
  var item = this.getItem( elem );
  if ( item ) {
    item.isIgnored = true;
  }
};

/**
 * return item to layout collection
 * @param {Element} elem
 */
proto.unignore = function( elem ) {
  var item = this.getItem( elem );
  if ( item ) {
    delete item.isIgnored;
  }
};

/**
 * adds elements to stamps
 * @param {NodeList, Array, Element, or String} elems
 */
proto.stamp = function( elems ) {
  elems = this._find( elems );
  if ( !elems ) {
    return;
  }

  this.stamps = this.stamps.concat( elems );
  // ignore
  elems.forEach( this.ignore, this );
};

/**
 * removes elements to stamps
 * @param {NodeList, Array, or Element} elems
 */
proto.unstamp = function( elems ) {
  elems = this._find( elems );
  if ( !elems ){
    return;
  }

  elems.forEach( function( elem ) {
    // filter out removed stamp elements
    utils.removeFrom( this.stamps, elem );
    this.unignore( elem );
  }, this );
};

/**
 * finds child elements
 * @param {NodeList, Array, Element, or String} elems
 * @returns {Array} elems
 */
proto._find = function( elems ) {
  if ( !elems ) {
    return;
  }
  // if string, use argument as selector string
  if ( typeof elems == 'string' ) {
    elems = this.element.querySelectorAll( elems );
  }
  elems = utils.makeArray( elems );
  return elems;
};

proto._manageStamps = function() {
  if ( !this.stamps || !this.stamps.length ) {
    return;
  }

  this._getBoundingRect();

  this.stamps.forEach( this._manageStamp, this );
};

// update boundingLeft / Top
proto._getBoundingRect = function() {
  // get bounding rect for container element
  var boundingRect = this.element.getBoundingClientRect();
  var size = this.size;
  this._boundingRect = {
    left: boundingRect.left + size.paddingLeft + size.borderLeftWidth,
    top: boundingRect.top + size.paddingTop + size.borderTopWidth,
    right: boundingRect.right - ( size.paddingRight + size.borderRightWidth ),
    bottom: boundingRect.bottom - ( size.paddingBottom + size.borderBottomWidth )
  };
};

/**
 * @param {Element} stamp
**/
proto._manageStamp = noop;

/**
 * get x/y position of element relative to container element
 * @param {Element} elem
 * @returns {Object} offset - has left, top, right, bottom
 */
proto._getElementOffset = function( elem ) {
  var boundingRect = elem.getBoundingClientRect();
  var thisRect = this._boundingRect;
  var size = getSize( elem );
  var offset = {
    left: boundingRect.left - thisRect.left - size.marginLeft,
    top: boundingRect.top - thisRect.top - size.marginTop,
    right: thisRect.right - boundingRect.right - size.marginRight,
    bottom: thisRect.bottom - boundingRect.bottom - size.marginBottom
  };
  return offset;
};

// -------------------------- resize -------------------------- //

// enable event handlers for listeners
// i.e. resize -> onresize
proto.handleEvent = utils.handleEvent;

/**
 * Bind layout to window resizing
 */
proto.bindResize = function() {
  window.addEventListener( 'resize', this );
  this.isResizeBound = true;
};

/**
 * Unbind layout to window resizing
 */
proto.unbindResize = function() {
  window.removeEventListener( 'resize', this );
  this.isResizeBound = false;
};

proto.onresize = function() {
  this.resize();
};

utils.debounceMethod( Outlayer, 'onresize', 100 );

proto.resize = function() {
  // don't trigger if size did not change
  // or if resize was unbound. See #9
  if ( !this.isResizeBound || !this.needsResizeLayout() ) {
    return;
  }

  this.layout();
};

/**
 * check if layout is needed post layout
 * @returns Boolean
 */
proto.needsResizeLayout = function() {
  var size = getSize( this.element );
  // check that this.size and size are there
  // IE8 triggers resize on body size change, so they might not be
  var hasSizes = this.size && size;
  return hasSizes && size.innerWidth !== this.size.innerWidth;
};

// -------------------------- methods -------------------------- //

/**
 * add items to Outlayer instance
 * @param {Array or NodeList or Element} elems
 * @returns {Array} items - Outlayer.Items
**/
proto.addItems = function( elems ) {
  var items = this._itemize( elems );
  // add items to collection
  if ( items.length ) {
    this.items = this.items.concat( items );
  }
  return items;
};

/**
 * Layout newly-appended item elements
 * @param {Array or NodeList or Element} elems
 */
proto.appended = function( elems ) {
  var items = this.addItems( elems );
  if ( !items.length ) {
    return;
  }
  // layout and reveal just the new items
  this.layoutItems( items, true );
  this.reveal( items );
};

/**
 * Layout prepended elements
 * @param {Array or NodeList or Element} elems
 */
proto.prepended = function( elems ) {
  var items = this._itemize( elems );
  if ( !items.length ) {
    return;
  }
  // add items to beginning of collection
  var previousItems = this.items.slice(0);
  this.items = items.concat( previousItems );
  // start new layout
  this._resetLayout();
  this._manageStamps();
  // layout new stuff without transition
  this.layoutItems( items, true );
  this.reveal( items );
  // layout previous items
  this.layoutItems( previousItems );
};

/**
 * reveal a collection of items
 * @param {Array of Outlayer.Items} items
 */
proto.reveal = function( items ) {
  this._emitCompleteOnItems( 'reveal', items );
  if ( !items || !items.length ) {
    return;
  }
  var stagger = this.updateStagger();
  items.forEach( function( item, i ) {
    item.stagger( i * stagger );
    item.reveal();
  });
};

/**
 * hide a collection of items
 * @param {Array of Outlayer.Items} items
 */
proto.hide = function( items ) {
  this._emitCompleteOnItems( 'hide', items );
  if ( !items || !items.length ) {
    return;
  }
  var stagger = this.updateStagger();
  items.forEach( function( item, i ) {
    item.stagger( i * stagger );
    item.hide();
  });
};

/**
 * reveal item elements
 * @param {Array}, {Element}, {NodeList} items
 */
proto.revealItemElements = function( elems ) {
  var items = this.getItems( elems );
  this.reveal( items );
};

/**
 * hide item elements
 * @param {Array}, {Element}, {NodeList} items
 */
proto.hideItemElements = function( elems ) {
  var items = this.getItems( elems );
  this.hide( items );
};

/**
 * get Outlayer.Item, given an Element
 * @param {Element} elem
 * @param {Function} callback
 * @returns {Outlayer.Item} item
 */
proto.getItem = function( elem ) {
  // loop through items to get the one that matches
  for ( var i=0; i < this.items.length; i++ ) {
    var item = this.items[i];
    if ( item.element == elem ) {
      // return item
      return item;
    }
  }
};

/**
 * get collection of Outlayer.Items, given Elements
 * @param {Array} elems
 * @returns {Array} items - Outlayer.Items
 */
proto.getItems = function( elems ) {
  elems = utils.makeArray( elems );
  var items = [];
  elems.forEach( function( elem ) {
    var item = this.getItem( elem );
    if ( item ) {
      items.push( item );
    }
  }, this );

  return items;
};

/**
 * remove element(s) from instance and DOM
 * @param {Array or NodeList or Element} elems
 */
proto.remove = function( elems ) {
  var removeItems = this.getItems( elems );

  this._emitCompleteOnItems( 'remove', removeItems );

  // bail if no items to remove
  if ( !removeItems || !removeItems.length ) {
    return;
  }

  removeItems.forEach( function( item ) {
    item.remove();
    // remove item from collection
    utils.removeFrom( this.items, item );
  }, this );
};

// ----- destroy ----- //

// remove and disable Outlayer instance
proto.destroy = function() {
  // clean up dynamic styles
  var style = this.element.style;
  style.height = '';
  style.position = '';
  style.width = '';
  // destroy items
  this.items.forEach( function( item ) {
    item.destroy();
  });

  this.unbindResize();

  var id = this.element.outlayerGUID;
  delete instances[ id ]; // remove reference to instance by id
  delete this.element.outlayerGUID;
  // remove data for jQuery
  if ( jQuery ) {
    jQuery.removeData( this.element, this.constructor.namespace );
  }

};

// -------------------------- data -------------------------- //

/**
 * get Outlayer instance from element
 * @param {Element} elem
 * @returns {Outlayer}
 */
Outlayer.data = function( elem ) {
  elem = utils.getQueryElement( elem );
  var id = elem && elem.outlayerGUID;
  return id && instances[ id ];
};


// -------------------------- create Outlayer class -------------------------- //

/**
 * create a layout class
 * @param {String} namespace
 */
Outlayer.create = function( namespace, options ) {
  // sub-class Outlayer
  var Layout = subclass( Outlayer );
  // apply new options and compatOptions
  Layout.defaults = utils.extend( {}, Outlayer.defaults );
  utils.extend( Layout.defaults, options );
  Layout.compatOptions = utils.extend( {}, Outlayer.compatOptions  );

  Layout.namespace = namespace;

  Layout.data = Outlayer.data;

  // sub-class Item
  Layout.Item = subclass( Item );

  // -------------------------- declarative -------------------------- //

  utils.htmlInit( Layout, namespace );

  // -------------------------- jQuery bridge -------------------------- //

  // make into jQuery plugin
  if ( jQuery && jQuery.bridget ) {
    jQuery.bridget( namespace, Layout );
  }

  return Layout;
};

function subclass( Parent ) {
  function SubClass() {
    Parent.apply( this, arguments );
  }

  SubClass.prototype = Object.create( Parent.prototype );
  SubClass.prototype.constructor = SubClass;

  return SubClass;
}

// ----- helpers ----- //

// how many milliseconds are in each unit
var msUnits = {
  ms: 1,
  s: 1000
};

// munge time-like parameter into millisecond number
// '0.4s' -> 40
function getMilliseconds( time ) {
  if ( typeof time == 'number' ) {
    return time;
  }
  var matches = time.match( /(^\d*\.?\d*)(\w*)/ );
  var num = matches && matches[1];
  var unit = matches && matches[2];
  if ( !num.length ) {
    return 0;
  }
  num = parseFloat( num );
  var mult = msUnits[ unit ] || 1;
  return num * mult;
}

// ----- fin ----- //

// back in global
Outlayer.Item = Item;

return Outlayer;

}));


/***/ }),

/***/ "KK1e":
/*!***************************************!*\
  !*** ./node_modules/outlayer/item.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
 * Outlayer Item
 */

( function( window, factory ) {
  // universal module definition
  /* jshint strict: false */ /* globals define, module, require */
  if ( true ) {
    // AMD - RequireJS
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [
        __webpack_require__(/*! ev-emitter/ev-emitter */ "CUlp"),
        __webpack_require__(/*! get-size/get-size */ "QK1G")
      ], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}

}( window, function factory( EvEmitter, getSize ) {
'use strict';

// ----- helpers ----- //

function isEmptyObj( obj ) {
  for ( var prop in obj ) {
    return false;
  }
  prop = null;
  return true;
}

// -------------------------- CSS3 support -------------------------- //


var docElemStyle = document.documentElement.style;

var transitionProperty = typeof docElemStyle.transition == 'string' ?
  'transition' : 'WebkitTransition';
var transformProperty = typeof docElemStyle.transform == 'string' ?
  'transform' : 'WebkitTransform';

var transitionEndEvent = {
  WebkitTransition: 'webkitTransitionEnd',
  transition: 'transitionend'
}[ transitionProperty ];

// cache all vendor properties that could have vendor prefix
var vendorProperties = {
  transform: transformProperty,
  transition: transitionProperty,
  transitionDuration: transitionProperty + 'Duration',
  transitionProperty: transitionProperty + 'Property',
  transitionDelay: transitionProperty + 'Delay'
};

// -------------------------- Item -------------------------- //

function Item( element, layout ) {
  if ( !element ) {
    return;
  }

  this.element = element;
  // parent layout class, i.e. Masonry, Isotope, or Packery
  this.layout = layout;
  this.position = {
    x: 0,
    y: 0
  };

  this._create();
}

// inherit EvEmitter
var proto = Item.prototype = Object.create( EvEmitter.prototype );
proto.constructor = Item;

proto._create = function() {
  // transition objects
  this._transn = {
    ingProperties: {},
    clean: {},
    onEnd: {}
  };

  this.css({
    position: 'absolute'
  });
};

// trigger specified handler for event type
proto.handleEvent = function( event ) {
  var method = 'on' + event.type;
  if ( this[ method ] ) {
    this[ method ]( event );
  }
};

proto.getSize = function() {
  this.size = getSize( this.element );
};

/**
 * apply CSS styles to element
 * @param {Object} style
 */
proto.css = function( style ) {
  var elemStyle = this.element.style;

  for ( var prop in style ) {
    // use vendor property if available
    var supportedProp = vendorProperties[ prop ] || prop;
    elemStyle[ supportedProp ] = style[ prop ];
  }
};

 // measure position, and sets it
proto.getPosition = function() {
  var style = getComputedStyle( this.element );
  var isOriginLeft = this.layout._getOption('originLeft');
  var isOriginTop = this.layout._getOption('originTop');
  var xValue = style[ isOriginLeft ? 'left' : 'right' ];
  var yValue = style[ isOriginTop ? 'top' : 'bottom' ];
  var x = parseFloat( xValue );
  var y = parseFloat( yValue );
  // convert percent to pixels
  var layoutSize = this.layout.size;
  if ( xValue.indexOf('%') != -1 ) {
    x = ( x / 100 ) * layoutSize.width;
  }
  if ( yValue.indexOf('%') != -1 ) {
    y = ( y / 100 ) * layoutSize.height;
  }
  // clean up 'auto' or other non-integer values
  x = isNaN( x ) ? 0 : x;
  y = isNaN( y ) ? 0 : y;
  // remove padding from measurement
  x -= isOriginLeft ? layoutSize.paddingLeft : layoutSize.paddingRight;
  y -= isOriginTop ? layoutSize.paddingTop : layoutSize.paddingBottom;

  this.position.x = x;
  this.position.y = y;
};

// set settled position, apply padding
proto.layoutPosition = function() {
  var layoutSize = this.layout.size;
  var style = {};
  var isOriginLeft = this.layout._getOption('originLeft');
  var isOriginTop = this.layout._getOption('originTop');

  // x
  var xPadding = isOriginLeft ? 'paddingLeft' : 'paddingRight';
  var xProperty = isOriginLeft ? 'left' : 'right';
  var xResetProperty = isOriginLeft ? 'right' : 'left';

  var x = this.position.x + layoutSize[ xPadding ];
  // set in percentage or pixels
  style[ xProperty ] = this.getXValue( x );
  // reset other property
  style[ xResetProperty ] = '';

  // y
  var yPadding = isOriginTop ? 'paddingTop' : 'paddingBottom';
  var yProperty = isOriginTop ? 'top' : 'bottom';
  var yResetProperty = isOriginTop ? 'bottom' : 'top';

  var y = this.position.y + layoutSize[ yPadding ];
  // set in percentage or pixels
  style[ yProperty ] = this.getYValue( y );
  // reset other property
  style[ yResetProperty ] = '';

  this.css( style );
  this.emitEvent( 'layout', [ this ] );
};

proto.getXValue = function( x ) {
  var isHorizontal = this.layout._getOption('horizontal');
  return this.layout.options.percentPosition && !isHorizontal ?
    ( ( x / this.layout.size.width ) * 100 ) + '%' : x + 'px';
};

proto.getYValue = function( y ) {
  var isHorizontal = this.layout._getOption('horizontal');
  return this.layout.options.percentPosition && isHorizontal ?
    ( ( y / this.layout.size.height ) * 100 ) + '%' : y + 'px';
};

proto._transitionTo = function( x, y ) {
  this.getPosition();
  // get current x & y from top/left
  var curX = this.position.x;
  var curY = this.position.y;

  var didNotMove = x == this.position.x && y == this.position.y;

  // save end position
  this.setPosition( x, y );

  // if did not move and not transitioning, just go to layout
  if ( didNotMove && !this.isTransitioning ) {
    this.layoutPosition();
    return;
  }

  var transX = x - curX;
  var transY = y - curY;
  var transitionStyle = {};
  transitionStyle.transform = this.getTranslate( transX, transY );

  this.transition({
    to: transitionStyle,
    onTransitionEnd: {
      transform: this.layoutPosition
    },
    isCleaning: true
  });
};

proto.getTranslate = function( x, y ) {
  // flip cooridinates if origin on right or bottom
  var isOriginLeft = this.layout._getOption('originLeft');
  var isOriginTop = this.layout._getOption('originTop');
  x = isOriginLeft ? x : -x;
  y = isOriginTop ? y : -y;
  return 'translate3d(' + x + 'px, ' + y + 'px, 0)';
};

// non transition + transform support
proto.goTo = function( x, y ) {
  this.setPosition( x, y );
  this.layoutPosition();
};

proto.moveTo = proto._transitionTo;

proto.setPosition = function( x, y ) {
  this.position.x = parseFloat( x );
  this.position.y = parseFloat( y );
};

// ----- transition ----- //

/**
 * @param {Object} style - CSS
 * @param {Function} onTransitionEnd
 */

// non transition, just trigger callback
proto._nonTransition = function( args ) {
  this.css( args.to );
  if ( args.isCleaning ) {
    this._removeStyles( args.to );
  }
  for ( var prop in args.onTransitionEnd ) {
    args.onTransitionEnd[ prop ].call( this );
  }
};

/**
 * proper transition
 * @param {Object} args - arguments
 *   @param {Object} to - style to transition to
 *   @param {Object} from - style to start transition from
 *   @param {Boolean} isCleaning - removes transition styles after transition
 *   @param {Function} onTransitionEnd - callback
 */
proto.transition = function( args ) {
  // redirect to nonTransition if no transition duration
  if ( !parseFloat( this.layout.options.transitionDuration ) ) {
    this._nonTransition( args );
    return;
  }

  var _transition = this._transn;
  // keep track of onTransitionEnd callback by css property
  for ( var prop in args.onTransitionEnd ) {
    _transition.onEnd[ prop ] = args.onTransitionEnd[ prop ];
  }
  // keep track of properties that are transitioning
  for ( prop in args.to ) {
    _transition.ingProperties[ prop ] = true;
    // keep track of properties to clean up when transition is done
    if ( args.isCleaning ) {
      _transition.clean[ prop ] = true;
    }
  }

  // set from styles
  if ( args.from ) {
    this.css( args.from );
    // force redraw. http://blog.alexmaccaw.com/css-transitions
    var h = this.element.offsetHeight;
    // hack for JSHint to hush about unused var
    h = null;
  }
  // enable transition
  this.enableTransition( args.to );
  // set styles that are transitioning
  this.css( args.to );

  this.isTransitioning = true;

};

// dash before all cap letters, including first for
// WebkitTransform => -webkit-transform
function toDashedAll( str ) {
  return str.replace( /([A-Z])/g, function( $1 ) {
    return '-' + $1.toLowerCase();
  });
}

var transitionProps = 'opacity,' + toDashedAll( transformProperty );

proto.enableTransition = function(/* style */) {
  // HACK changing transitionProperty during a transition
  // will cause transition to jump
  if ( this.isTransitioning ) {
    return;
  }

  // make `transition: foo, bar, baz` from style object
  // HACK un-comment this when enableTransition can work
  // while a transition is happening
  // var transitionValues = [];
  // for ( var prop in style ) {
  //   // dash-ify camelCased properties like WebkitTransition
  //   prop = vendorProperties[ prop ] || prop;
  //   transitionValues.push( toDashedAll( prop ) );
  // }
  // munge number to millisecond, to match stagger
  var duration = this.layout.options.transitionDuration;
  duration = typeof duration == 'number' ? duration + 'ms' : duration;
  // enable transition styles
  this.css({
    transitionProperty: transitionProps,
    transitionDuration: duration,
    transitionDelay: this.staggerDelay || 0
  });
  // listen for transition end event
  this.element.addEventListener( transitionEndEvent, this, false );
};

// ----- events ----- //

proto.onwebkitTransitionEnd = function( event ) {
  this.ontransitionend( event );
};

proto.onotransitionend = function( event ) {
  this.ontransitionend( event );
};

// properties that I munge to make my life easier
var dashedVendorProperties = {
  '-webkit-transform': 'transform'
};

proto.ontransitionend = function( event ) {
  // disregard bubbled events from children
  if ( event.target !== this.element ) {
    return;
  }
  var _transition = this._transn;
  // get property name of transitioned property, convert to prefix-free
  var propertyName = dashedVendorProperties[ event.propertyName ] || event.propertyName;

  // remove property that has completed transitioning
  delete _transition.ingProperties[ propertyName ];
  // check if any properties are still transitioning
  if ( isEmptyObj( _transition.ingProperties ) ) {
    // all properties have completed transitioning
    this.disableTransition();
  }
  // clean style
  if ( propertyName in _transition.clean ) {
    // clean up style
    this.element.style[ event.propertyName ] = '';
    delete _transition.clean[ propertyName ];
  }
  // trigger onTransitionEnd callback
  if ( propertyName in _transition.onEnd ) {
    var onTransitionEnd = _transition.onEnd[ propertyName ];
    onTransitionEnd.call( this );
    delete _transition.onEnd[ propertyName ];
  }

  this.emitEvent( 'transitionEnd', [ this ] );
};

proto.disableTransition = function() {
  this.removeTransitionStyles();
  this.element.removeEventListener( transitionEndEvent, this, false );
  this.isTransitioning = false;
};

/**
 * removes style property from element
 * @param {Object} style
**/
proto._removeStyles = function( style ) {
  // clean up transition styles
  var cleanStyle = {};
  for ( var prop in style ) {
    cleanStyle[ prop ] = '';
  }
  this.css( cleanStyle );
};

var cleanTransitionStyle = {
  transitionProperty: '',
  transitionDuration: '',
  transitionDelay: ''
};

proto.removeTransitionStyles = function() {
  // remove transition
  this.css( cleanTransitionStyle );
};

// ----- stagger ----- //

proto.stagger = function( delay ) {
  delay = isNaN( delay ) ? 0 : delay;
  this.staggerDelay = delay + 'ms';
};

// ----- show/hide/remove ----- //

// remove element from DOM
proto.removeElem = function() {
  this.element.parentNode.removeChild( this.element );
  // remove display: none
  this.css({ display: '' });
  this.emitEvent( 'remove', [ this ] );
};

proto.remove = function() {
  // just remove element if no transition support or no transition
  if ( !transitionProperty || !parseFloat( this.layout.options.transitionDuration ) ) {
    this.removeElem();
    return;
  }

  // start transition
  this.once( 'transitionEnd', function() {
    this.removeElem();
  });
  this.hide();
};

proto.reveal = function() {
  delete this.isHidden;
  // remove display: none
  this.css({ display: '' });

  var options = this.layout.options;

  var onTransitionEnd = {};
  var transitionEndProperty = this.getHideRevealTransitionEndProperty('visibleStyle');
  onTransitionEnd[ transitionEndProperty ] = this.onRevealTransitionEnd;

  this.transition({
    from: options.hiddenStyle,
    to: options.visibleStyle,
    isCleaning: true,
    onTransitionEnd: onTransitionEnd
  });
};

proto.onRevealTransitionEnd = function() {
  // check if still visible
  // during transition, item may have been hidden
  if ( !this.isHidden ) {
    this.emitEvent('reveal');
  }
};

/**
 * get style property use for hide/reveal transition end
 * @param {String} styleProperty - hiddenStyle/visibleStyle
 * @returns {String}
 */
proto.getHideRevealTransitionEndProperty = function( styleProperty ) {
  var optionStyle = this.layout.options[ styleProperty ];
  // use opacity
  if ( optionStyle.opacity ) {
    return 'opacity';
  }
  // get first property
  for ( var prop in optionStyle ) {
    return prop;
  }
};

proto.hide = function() {
  // set flag
  this.isHidden = true;
  // remove display: none
  this.css({ display: '' });

  var options = this.layout.options;

  var onTransitionEnd = {};
  var transitionEndProperty = this.getHideRevealTransitionEndProperty('hiddenStyle');
  onTransitionEnd[ transitionEndProperty ] = this.onHideTransitionEnd;

  this.transition({
    from: options.visibleStyle,
    to: options.hiddenStyle,
    // keep hidden stuff hidden
    isCleaning: true,
    onTransitionEnd: onTransitionEnd
  });
};

proto.onHideTransitionEnd = function() {
  // check if still hidden
  // during transition, item may have been un-hidden
  if ( this.isHidden ) {
    this.css({ display: 'none' });
    this.emitEvent('hide');
  }
};

proto.destroy = function() {
  this.css({
    position: '',
    left: '',
    right: '',
    top: '',
    bottom: '',
    transition: '',
    transform: ''
  });
};

return Item;

}));


/***/ }),

/***/ "QK1G":
/*!*******************************************!*\
  !*** ./node_modules/get-size/get-size.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * getSize v2.0.3
 * measure size of elements
 * MIT license
 */

/* jshint browser: true, strict: true, undef: true, unused: true */
/* globals console: false */

( function( window, factory ) {
  /* jshint strict: false */ /* globals define, module */
  if ( true ) {
    // AMD
    !(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}

})( window, function factory() {
'use strict';

// -------------------------- helpers -------------------------- //

// get a number from a string, not a percentage
function getStyleSize( value ) {
  var num = parseFloat( value );
  // not a percent like '100%', and a number
  var isValid = value.indexOf('%') == -1 && !isNaN( num );
  return isValid && num;
}

function noop() {}

var logError = typeof console == 'undefined' ? noop :
  function( message ) {
    console.error( message );
  };

// -------------------------- measurements -------------------------- //

var measurements = [
  'paddingLeft',
  'paddingRight',
  'paddingTop',
  'paddingBottom',
  'marginLeft',
  'marginRight',
  'marginTop',
  'marginBottom',
  'borderLeftWidth',
  'borderRightWidth',
  'borderTopWidth',
  'borderBottomWidth'
];

var measurementsLength = measurements.length;

function getZeroSize() {
  var size = {
    width: 0,
    height: 0,
    innerWidth: 0,
    innerHeight: 0,
    outerWidth: 0,
    outerHeight: 0
  };
  for ( var i=0; i < measurementsLength; i++ ) {
    var measurement = measurements[i];
    size[ measurement ] = 0;
  }
  return size;
}

// -------------------------- getStyle -------------------------- //

/**
 * getStyle, get style of element, check for Firefox bug
 * https://bugzilla.mozilla.org/show_bug.cgi?id=548397
 */
function getStyle( elem ) {
  var style = getComputedStyle( elem );
  if ( !style ) {
    logError( 'Style returned ' + style +
      '. Are you running this code in a hidden iframe on Firefox? ' +
      'See https://bit.ly/getsizebug1' );
  }
  return style;
}

// -------------------------- setup -------------------------- //

var isSetup = false;

var isBoxSizeOuter;

/**
 * setup
 * check isBoxSizerOuter
 * do on first getSize() rather than on page load for Firefox bug
 */
function setup() {
  // setup once
  if ( isSetup ) {
    return;
  }
  isSetup = true;

  // -------------------------- box sizing -------------------------- //

  /**
   * Chrome & Safari measure the outer-width on style.width on border-box elems
   * IE11 & Firefox<29 measures the inner-width
   */
  var div = document.createElement('div');
  div.style.width = '200px';
  div.style.padding = '1px 2px 3px 4px';
  div.style.borderStyle = 'solid';
  div.style.borderWidth = '1px 2px 3px 4px';
  div.style.boxSizing = 'border-box';

  var body = document.body || document.documentElement;
  body.appendChild( div );
  var style = getStyle( div );
  // round value for browser zoom. desandro/masonry#928
  isBoxSizeOuter = Math.round( getStyleSize( style.width ) ) == 200;
  getSize.isBoxSizeOuter = isBoxSizeOuter;

  body.removeChild( div );
}

// -------------------------- getSize -------------------------- //

function getSize( elem ) {
  setup();

  // use querySeletor if elem is string
  if ( typeof elem == 'string' ) {
    elem = document.querySelector( elem );
  }

  // do not proceed on non-objects
  if ( !elem || typeof elem != 'object' || !elem.nodeType ) {
    return;
  }

  var style = getStyle( elem );

  // if hidden, everything is 0
  if ( style.display == 'none' ) {
    return getZeroSize();
  }

  var size = {};
  size.width = elem.offsetWidth;
  size.height = elem.offsetHeight;

  var isBorderBox = size.isBorderBox = style.boxSizing == 'border-box';

  // get all measurements
  for ( var i=0; i < measurementsLength; i++ ) {
    var measurement = measurements[i];
    var value = style[ measurement ];
    var num = parseFloat( value );
    // any 'auto', 'medium' value will be 0
    size[ measurement ] = !isNaN( num ) ? num : 0;
  }

  var paddingWidth = size.paddingLeft + size.paddingRight;
  var paddingHeight = size.paddingTop + size.paddingBottom;
  var marginWidth = size.marginLeft + size.marginRight;
  var marginHeight = size.marginTop + size.marginBottom;
  var borderWidth = size.borderLeftWidth + size.borderRightWidth;
  var borderHeight = size.borderTopWidth + size.borderBottomWidth;

  var isBorderBoxSizeOuter = isBorderBox && isBoxSizeOuter;

  // overwrite width and height if we can get it from style
  var styleWidth = getStyleSize( style.width );
  if ( styleWidth !== false ) {
    size.width = styleWidth +
      // add padding and border unless it's already including it
      ( isBorderBoxSizeOuter ? 0 : paddingWidth + borderWidth );
  }

  var styleHeight = getStyleSize( style.height );
  if ( styleHeight !== false ) {
    size.height = styleHeight +
      // add padding and border unless it's already including it
      ( isBorderBoxSizeOuter ? 0 : paddingHeight + borderHeight );
  }

  size.innerWidth = size.width - ( paddingWidth + borderWidth );
  size.innerHeight = size.height - ( paddingHeight + borderHeight );

  size.outerWidth = size.width + marginWidth;
  size.outerHeight = size.height + marginHeight;

  return size;
}

return getSize;

});


/***/ }),

/***/ "YVj6":
/*!**********************************************!*\
  !*** ./node_modules/fizzy-ui-utils/utils.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
 * Fizzy UI utils v2.0.7
 * MIT license
 */

/*jshint browser: true, undef: true, unused: true, strict: true */

( function( window, factory ) {
  // universal module definition
  /*jshint strict: false */ /*globals define, module, require */

  if ( true ) {
    // AMD
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [
      __webpack_require__(/*! desandro-matches-selector/matches-selector */ "x0Ue")
    ], __WEBPACK_AMD_DEFINE_RESULT__ = (function( matchesSelector ) {
      return factory( window, matchesSelector );
    }).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}

}( window, function factory( window, matchesSelector ) {

'use strict';

var utils = {};

// ----- extend ----- //

// extends objects
utils.extend = function( a, b ) {
  for ( var prop in b ) {
    a[ prop ] = b[ prop ];
  }
  return a;
};

// ----- modulo ----- //

utils.modulo = function( num, div ) {
  return ( ( num % div ) + div ) % div;
};

// ----- makeArray ----- //

var arraySlice = Array.prototype.slice;

// turn element or nodeList into an array
utils.makeArray = function( obj ) {
  if ( Array.isArray( obj ) ) {
    // use object if already an array
    return obj;
  }
  // return empty array if undefined or null. #6
  if ( obj === null || obj === undefined ) {
    return [];
  }

  var isArrayLike = typeof obj == 'object' && typeof obj.length == 'number';
  if ( isArrayLike ) {
    // convert nodeList to array
    return arraySlice.call( obj );
  }

  // array of single index
  return [ obj ];
};

// ----- removeFrom ----- //

utils.removeFrom = function( ary, obj ) {
  var index = ary.indexOf( obj );
  if ( index != -1 ) {
    ary.splice( index, 1 );
  }
};

// ----- getParent ----- //

utils.getParent = function( elem, selector ) {
  while ( elem.parentNode && elem != document.body ) {
    elem = elem.parentNode;
    if ( matchesSelector( elem, selector ) ) {
      return elem;
    }
  }
};

// ----- getQueryElement ----- //

// use element as selector string
utils.getQueryElement = function( elem ) {
  if ( typeof elem == 'string' ) {
    return document.querySelector( elem );
  }
  return elem;
};

// ----- handleEvent ----- //

// enable .ontype to trigger from .addEventListener( elem, 'type' )
utils.handleEvent = function( event ) {
  var method = 'on' + event.type;
  if ( this[ method ] ) {
    this[ method ]( event );
  }
};

// ----- filterFindElements ----- //

utils.filterFindElements = function( elems, selector ) {
  // make array of elems
  elems = utils.makeArray( elems );
  var ffElems = [];

  elems.forEach( function( elem ) {
    // check that elem is an actual element
    if ( !( elem instanceof HTMLElement ) ) {
      return;
    }
    // add elem if no selector
    if ( !selector ) {
      ffElems.push( elem );
      return;
    }
    // filter & find items if we have a selector
    // filter
    if ( matchesSelector( elem, selector ) ) {
      ffElems.push( elem );
    }
    // find children
    var childElems = elem.querySelectorAll( selector );
    // concat childElems to filterFound array
    for ( var i=0; i < childElems.length; i++ ) {
      ffElems.push( childElems[i] );
    }
  });

  return ffElems;
};

// ----- debounceMethod ----- //

utils.debounceMethod = function( _class, methodName, threshold ) {
  threshold = threshold || 100;
  // original method
  var method = _class.prototype[ methodName ];
  var timeoutName = methodName + 'Timeout';

  _class.prototype[ methodName ] = function() {
    var timeout = this[ timeoutName ];
    clearTimeout( timeout );

    var args = arguments;
    var _this = this;
    this[ timeoutName ] = setTimeout( function() {
      method.apply( _this, args );
      delete _this[ timeoutName ];
    }, threshold );
  };
};

// ----- docReady ----- //

utils.docReady = function( callback ) {
  var readyState = document.readyState;
  if ( readyState == 'complete' || readyState == 'interactive' ) {
    // do async to allow for other scripts to run. metafizzy/flickity#441
    setTimeout( callback );
  } else {
    document.addEventListener( 'DOMContentLoaded', callback );
  }
};

// ----- htmlInit ----- //

// http://jamesroberts.name/blog/2010/02/22/string-functions-for-javascript-trim-to-camel-case-to-dashed-and-to-underscore/
utils.toDashed = function( str ) {
  return str.replace( /(.)([A-Z])/g, function( match, $1, $2 ) {
    return $1 + '-' + $2;
  }).toLowerCase();
};

var console = window.console;
/**
 * allow user to initialize classes via [data-namespace] or .js-namespace class
 * htmlInit( Widget, 'widgetName' )
 * options are parsed from data-namespace-options
 */
utils.htmlInit = function( WidgetClass, namespace ) {
  utils.docReady( function() {
    var dashedNamespace = utils.toDashed( namespace );
    var dataAttr = 'data-' + dashedNamespace;
    var dataAttrElems = document.querySelectorAll( '[' + dataAttr + ']' );
    var jsDashElems = document.querySelectorAll( '.js-' + dashedNamespace );
    var elems = utils.makeArray( dataAttrElems )
      .concat( utils.makeArray( jsDashElems ) );
    var dataOptionsAttr = dataAttr + '-options';
    var jQuery = window.jQuery;

    elems.forEach( function( elem ) {
      var attr = elem.getAttribute( dataAttr ) ||
        elem.getAttribute( dataOptionsAttr );
      var options;
      try {
        options = attr && JSON.parse( attr );
      } catch ( error ) {
        // log error, do not initialize
        if ( console ) {
          console.error( 'Error parsing ' + dataAttr + ' on ' + elem.className +
          ': ' + error );
        }
        return;
      }
      // initialize
      var instance = new WidgetClass( elem, options );
      // make available via $().data('namespace')
      if ( jQuery ) {
        jQuery.data( elem, namespace, instance );
      }
    });

  });
};

// -----  ----- //

return utils;

}));


/***/ }),

/***/ "hNNL":
/*!************************************************!*\
  !*** ./node_modules/masonry-layout/masonry.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * Masonry v4.2.2
 * Cascading grid layout library
 * https://masonry.desandro.com
 * MIT License
 * by David DeSandro
 */

( function( window, factory ) {
  // universal module definition
  /* jshint strict: false */ /*globals define, module, require */
  if ( true ) {
    // AMD
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [
        __webpack_require__(/*! outlayer/outlayer */ "Hy43"),
        __webpack_require__(/*! get-size/get-size */ "QK1G")
      ], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}

}( window, function factory( Outlayer, getSize ) {

'use strict';

// -------------------------- masonryDefinition -------------------------- //

  // create an Outlayer layout class
  var Masonry = Outlayer.create('masonry');
  // isFitWidth -> fitWidth
  Masonry.compatOptions.fitWidth = 'isFitWidth';

  var proto = Masonry.prototype;

  proto._resetLayout = function() {
    this.getSize();
    this._getMeasurement( 'columnWidth', 'outerWidth' );
    this._getMeasurement( 'gutter', 'outerWidth' );
    this.measureColumns();

    // reset column Y
    this.colYs = [];
    for ( var i=0; i < this.cols; i++ ) {
      this.colYs.push( 0 );
    }

    this.maxY = 0;
    this.horizontalColIndex = 0;
  };

  proto.measureColumns = function() {
    this.getContainerWidth();
    // if columnWidth is 0, default to outerWidth of first item
    if ( !this.columnWidth ) {
      var firstItem = this.items[0];
      var firstItemElem = firstItem && firstItem.element;
      // columnWidth fall back to item of first element
      this.columnWidth = firstItemElem && getSize( firstItemElem ).outerWidth ||
        // if first elem has no width, default to size of container
        this.containerWidth;
    }

    var columnWidth = this.columnWidth += this.gutter;

    // calculate columns
    var containerWidth = this.containerWidth + this.gutter;
    var cols = containerWidth / columnWidth;
    // fix rounding errors, typically with gutters
    var excess = columnWidth - containerWidth % columnWidth;
    // if overshoot is less than a pixel, round up, otherwise floor it
    var mathMethod = excess && excess < 1 ? 'round' : 'floor';
    cols = Math[ mathMethod ]( cols );
    this.cols = Math.max( cols, 1 );
  };

  proto.getContainerWidth = function() {
    // container is parent if fit width
    var isFitWidth = this._getOption('fitWidth');
    var container = isFitWidth ? this.element.parentNode : this.element;
    // check that this.size and size are there
    // IE8 triggers resize on body size change, so they might not be
    var size = getSize( container );
    this.containerWidth = size && size.innerWidth;
  };

  proto._getItemLayoutPosition = function( item ) {
    item.getSize();
    // how many columns does this brick span
    var remainder = item.size.outerWidth % this.columnWidth;
    var mathMethod = remainder && remainder < 1 ? 'round' : 'ceil';
    // round if off by 1 pixel, otherwise use ceil
    var colSpan = Math[ mathMethod ]( item.size.outerWidth / this.columnWidth );
    colSpan = Math.min( colSpan, this.cols );
    // use horizontal or top column position
    var colPosMethod = this.options.horizontalOrder ?
      '_getHorizontalColPosition' : '_getTopColPosition';
    var colPosition = this[ colPosMethod ]( colSpan, item );
    // position the brick
    var position = {
      x: this.columnWidth * colPosition.col,
      y: colPosition.y
    };
    // apply setHeight to necessary columns
    var setHeight = colPosition.y + item.size.outerHeight;
    var setMax = colSpan + colPosition.col;
    for ( var i = colPosition.col; i < setMax; i++ ) {
      this.colYs[i] = setHeight;
    }

    return position;
  };

  proto._getTopColPosition = function( colSpan ) {
    var colGroup = this._getTopColGroup( colSpan );
    // get the minimum Y value from the columns
    var minimumY = Math.min.apply( Math, colGroup );

    return {
      col: colGroup.indexOf( minimumY ),
      y: minimumY,
    };
  };

  /**
   * @param {Number} colSpan - number of columns the element spans
   * @returns {Array} colGroup
   */
  proto._getTopColGroup = function( colSpan ) {
    if ( colSpan < 2 ) {
      // if brick spans only one column, use all the column Ys
      return this.colYs;
    }

    var colGroup = [];
    // how many different places could this brick fit horizontally
    var groupCount = this.cols + 1 - colSpan;
    // for each group potential horizontal position
    for ( var i = 0; i < groupCount; i++ ) {
      colGroup[i] = this._getColGroupY( i, colSpan );
    }
    return colGroup;
  };

  proto._getColGroupY = function( col, colSpan ) {
    if ( colSpan < 2 ) {
      return this.colYs[ col ];
    }
    // make an array of colY values for that one group
    var groupColYs = this.colYs.slice( col, col + colSpan );
    // and get the max value of the array
    return Math.max.apply( Math, groupColYs );
  };

  // get column position based on horizontal index. #873
  proto._getHorizontalColPosition = function( colSpan, item ) {
    var col = this.horizontalColIndex % this.cols;
    var isOver = colSpan > 1 && col + colSpan > this.cols;
    // shift to next row if item can't fit on current row
    col = isOver ? 0 : col;
    // don't let zero-size items take up space
    var hasSize = item.size.outerWidth && item.size.outerHeight;
    this.horizontalColIndex = hasSize ? col + colSpan : this.horizontalColIndex;

    return {
      col: col,
      y: this._getColGroupY( col, colSpan ),
    };
  };

  proto._manageStamp = function( stamp ) {
    var stampSize = getSize( stamp );
    var offset = this._getElementOffset( stamp );
    // get the columns that this stamp affects
    var isOriginLeft = this._getOption('originLeft');
    var firstX = isOriginLeft ? offset.left : offset.right;
    var lastX = firstX + stampSize.outerWidth;
    var firstCol = Math.floor( firstX / this.columnWidth );
    firstCol = Math.max( 0, firstCol );
    var lastCol = Math.floor( lastX / this.columnWidth );
    // lastCol should not go over if multiple of columnWidth #425
    lastCol -= lastX % this.columnWidth ? 0 : 1;
    lastCol = Math.min( this.cols - 1, lastCol );
    // set colYs to bottom of the stamp

    var isOriginTop = this._getOption('originTop');
    var stampMaxY = ( isOriginTop ? offset.top : offset.bottom ) +
      stampSize.outerHeight;
    for ( var i = firstCol; i <= lastCol; i++ ) {
      this.colYs[i] = Math.max( stampMaxY, this.colYs[i] );
    }
  };

  proto._getContainerSize = function() {
    this.maxY = Math.max.apply( Math, this.colYs );
    var size = {
      height: this.maxY
    };

    if ( this._getOption('fitWidth') ) {
      size.width = this._getContainerFitWidth();
    }

    return size;
  };

  proto._getContainerFitWidth = function() {
    var unusedCols = 0;
    // count unused columns
    var i = this.cols;
    while ( --i ) {
      if ( this.colYs[i] !== 0 ) {
        break;
      }
      unusedCols++;
    }
    // fit container to columns that have been used
    return ( this.cols - unusedCols ) * this.columnWidth - this.gutter;
  };

  proto.needsResizeLayout = function() {
    var previousWidth = this.containerWidth;
    this.getContainerWidth();
    return previousWidth != this.containerWidth;
  };

  return Masonry;

}));


/***/ }),

/***/ "vX6Q":
/*!***************************************************!*\
  !*** ./node_modules/imagesloaded/imagesloaded.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * imagesLoaded v4.1.4
 * JavaScript is all like "You images are done yet or what?"
 * MIT License
 */

( function( window, factory ) { 'use strict';
  // universal module definition

  /*global define: false, module: false, require: false */

  if ( true ) {
    // AMD
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [
      __webpack_require__(/*! ev-emitter/ev-emitter */ "CUlp")
    ], __WEBPACK_AMD_DEFINE_RESULT__ = (function( EvEmitter ) {
      return factory( window, EvEmitter );
    }).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}

})( typeof window !== 'undefined' ? window : this,

// --------------------------  factory -------------------------- //

function factory( window, EvEmitter ) {

'use strict';

var $ = window.jQuery;
var console = window.console;

// -------------------------- helpers -------------------------- //

// extend objects
function extend( a, b ) {
  for ( var prop in b ) {
    a[ prop ] = b[ prop ];
  }
  return a;
}

var arraySlice = Array.prototype.slice;

// turn element or nodeList into an array
function makeArray( obj ) {
  if ( Array.isArray( obj ) ) {
    // use object if already an array
    return obj;
  }

  var isArrayLike = typeof obj == 'object' && typeof obj.length == 'number';
  if ( isArrayLike ) {
    // convert nodeList to array
    return arraySlice.call( obj );
  }

  // array of single index
  return [ obj ];
}

// -------------------------- imagesLoaded -------------------------- //

/**
 * @param {Array, Element, NodeList, String} elem
 * @param {Object or Function} options - if function, use as callback
 * @param {Function} onAlways - callback function
 */
function ImagesLoaded( elem, options, onAlways ) {
  // coerce ImagesLoaded() without new, to be new ImagesLoaded()
  if ( !( this instanceof ImagesLoaded ) ) {
    return new ImagesLoaded( elem, options, onAlways );
  }
  // use elem as selector string
  var queryElem = elem;
  if ( typeof elem == 'string' ) {
    queryElem = document.querySelectorAll( elem );
  }
  // bail if bad element
  if ( !queryElem ) {
    console.error( 'Bad element for imagesLoaded ' + ( queryElem || elem ) );
    return;
  }

  this.elements = makeArray( queryElem );
  this.options = extend( {}, this.options );
  // shift arguments if no options set
  if ( typeof options == 'function' ) {
    onAlways = options;
  } else {
    extend( this.options, options );
  }

  if ( onAlways ) {
    this.on( 'always', onAlways );
  }

  this.getImages();

  if ( $ ) {
    // add jQuery Deferred object
    this.jqDeferred = new $.Deferred();
  }

  // HACK check async to allow time to bind listeners
  setTimeout( this.check.bind( this ) );
}

ImagesLoaded.prototype = Object.create( EvEmitter.prototype );

ImagesLoaded.prototype.options = {};

ImagesLoaded.prototype.getImages = function() {
  this.images = [];

  // filter & find items if we have an item selector
  this.elements.forEach( this.addElementImages, this );
};

/**
 * @param {Node} element
 */
ImagesLoaded.prototype.addElementImages = function( elem ) {
  // filter siblings
  if ( elem.nodeName == 'IMG' ) {
    this.addImage( elem );
  }
  // get background image on element
  if ( this.options.background === true ) {
    this.addElementBackgroundImages( elem );
  }

  // find children
  // no non-element nodes, #143
  var nodeType = elem.nodeType;
  if ( !nodeType || !elementNodeTypes[ nodeType ] ) {
    return;
  }
  var childImgs = elem.querySelectorAll('img');
  // concat childElems to filterFound array
  for ( var i=0; i < childImgs.length; i++ ) {
    var img = childImgs[i];
    this.addImage( img );
  }

  // get child background images
  if ( typeof this.options.background == 'string' ) {
    var children = elem.querySelectorAll( this.options.background );
    for ( i=0; i < children.length; i++ ) {
      var child = children[i];
      this.addElementBackgroundImages( child );
    }
  }
};

var elementNodeTypes = {
  1: true,
  9: true,
  11: true
};

ImagesLoaded.prototype.addElementBackgroundImages = function( elem ) {
  var style = getComputedStyle( elem );
  if ( !style ) {
    // Firefox returns null if in a hidden iframe https://bugzil.la/548397
    return;
  }
  // get url inside url("...")
  var reURL = /url\((['"])?(.*?)\1\)/gi;
  var matches = reURL.exec( style.backgroundImage );
  while ( matches !== null ) {
    var url = matches && matches[2];
    if ( url ) {
      this.addBackground( url, elem );
    }
    matches = reURL.exec( style.backgroundImage );
  }
};

/**
 * @param {Image} img
 */
ImagesLoaded.prototype.addImage = function( img ) {
  var loadingImage = new LoadingImage( img );
  this.images.push( loadingImage );
};

ImagesLoaded.prototype.addBackground = function( url, elem ) {
  var background = new Background( url, elem );
  this.images.push( background );
};

ImagesLoaded.prototype.check = function() {
  var _this = this;
  this.progressedCount = 0;
  this.hasAnyBroken = false;
  // complete if no images
  if ( !this.images.length ) {
    this.complete();
    return;
  }

  function onProgress( image, elem, message ) {
    // HACK - Chrome triggers event before object properties have changed. #83
    setTimeout( function() {
      _this.progress( image, elem, message );
    });
  }

  this.images.forEach( function( loadingImage ) {
    loadingImage.once( 'progress', onProgress );
    loadingImage.check();
  });
};

ImagesLoaded.prototype.progress = function( image, elem, message ) {
  this.progressedCount++;
  this.hasAnyBroken = this.hasAnyBroken || !image.isLoaded;
  // progress event
  this.emitEvent( 'progress', [ this, image, elem ] );
  if ( this.jqDeferred && this.jqDeferred.notify ) {
    this.jqDeferred.notify( this, image );
  }
  // check if completed
  if ( this.progressedCount == this.images.length ) {
    this.complete();
  }

  if ( this.options.debug && console ) {
    console.log( 'progress: ' + message, image, elem );
  }
};

ImagesLoaded.prototype.complete = function() {
  var eventName = this.hasAnyBroken ? 'fail' : 'done';
  this.isComplete = true;
  this.emitEvent( eventName, [ this ] );
  this.emitEvent( 'always', [ this ] );
  if ( this.jqDeferred ) {
    var jqMethod = this.hasAnyBroken ? 'reject' : 'resolve';
    this.jqDeferred[ jqMethod ]( this );
  }
};

// --------------------------  -------------------------- //

function LoadingImage( img ) {
  this.img = img;
}

LoadingImage.prototype = Object.create( EvEmitter.prototype );

LoadingImage.prototype.check = function() {
  // If complete is true and browser supports natural sizes,
  // try to check for image status manually.
  var isComplete = this.getIsImageComplete();
  if ( isComplete ) {
    // report based on naturalWidth
    this.confirm( this.img.naturalWidth !== 0, 'naturalWidth' );
    return;
  }

  // If none of the checks above matched, simulate loading on detached element.
  this.proxyImage = new Image();
  this.proxyImage.addEventListener( 'load', this );
  this.proxyImage.addEventListener( 'error', this );
  // bind to image as well for Firefox. #191
  this.img.addEventListener( 'load', this );
  this.img.addEventListener( 'error', this );
  this.proxyImage.src = this.img.src;
};

LoadingImage.prototype.getIsImageComplete = function() {
  // check for non-zero, non-undefined naturalWidth
  // fixes Safari+InfiniteScroll+Masonry bug infinite-scroll#671
  return this.img.complete && this.img.naturalWidth;
};

LoadingImage.prototype.confirm = function( isLoaded, message ) {
  this.isLoaded = isLoaded;
  this.emitEvent( 'progress', [ this, this.img, message ] );
};

// ----- events ----- //

// trigger specified handler for event type
LoadingImage.prototype.handleEvent = function( event ) {
  var method = 'on' + event.type;
  if ( this[ method ] ) {
    this[ method ]( event );
  }
};

LoadingImage.prototype.onload = function() {
  this.confirm( true, 'onload' );
  this.unbindEvents();
};

LoadingImage.prototype.onerror = function() {
  this.confirm( false, 'onerror' );
  this.unbindEvents();
};

LoadingImage.prototype.unbindEvents = function() {
  this.proxyImage.removeEventListener( 'load', this );
  this.proxyImage.removeEventListener( 'error', this );
  this.img.removeEventListener( 'load', this );
  this.img.removeEventListener( 'error', this );
};

// -------------------------- Background -------------------------- //

function Background( url, element ) {
  this.url = url;
  this.element = element;
  this.img = new Image();
}

// inherit LoadingImage prototype
Background.prototype = Object.create( LoadingImage.prototype );

Background.prototype.check = function() {
  this.img.addEventListener( 'load', this );
  this.img.addEventListener( 'error', this );
  this.img.src = this.url;
  // check if image is already complete
  var isComplete = this.getIsImageComplete();
  if ( isComplete ) {
    this.confirm( this.img.naturalWidth !== 0, 'naturalWidth' );
    this.unbindEvents();
  }
};

Background.prototype.unbindEvents = function() {
  this.img.removeEventListener( 'load', this );
  this.img.removeEventListener( 'error', this );
};

Background.prototype.confirm = function( isLoaded, message ) {
  this.isLoaded = isLoaded;
  this.emitEvent( 'progress', [ this, this.element, message ] );
};

// -------------------------- jQuery -------------------------- //

ImagesLoaded.makeJQueryPlugin = function( jQuery ) {
  jQuery = jQuery || window.jQuery;
  if ( !jQuery ) {
    return;
  }
  // set local variable
  $ = jQuery;
  // $().imagesLoaded()
  $.fn.imagesLoaded = function( options, callback ) {
    var instance = new ImagesLoaded( this, options, callback );
    return instance.jqDeferred.promise( $(this) );
  };
};
// try making plugin
ImagesLoaded.makeJQueryPlugin();

// --------------------------  -------------------------- //

return ImagesLoaded;

});


/***/ }),

/***/ "x0Ue":
/*!********************************************************************!*\
  !*** ./node_modules/desandro-matches-selector/matches-selector.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
 * matchesSelector v2.0.2
 * matchesSelector( element, '.selector' )
 * MIT license
 */

/*jshint browser: true, strict: true, undef: true, unused: true */

( function( window, factory ) {
  /*global define: false, module: false */
  'use strict';
  // universal module definition
  if ( true ) {
    // AMD
    !(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}

}( window, function factory() {
  'use strict';

  var matchesMethod = ( function() {
    var ElemProto = window.Element.prototype;
    // check for the standard method name first
    if ( ElemProto.matches ) {
      return 'matches';
    }
    // check un-prefixed
    if ( ElemProto.matchesSelector ) {
      return 'matchesSelector';
    }
    // check vendor prefixes
    var prefixes = [ 'webkit', 'moz', 'ms', 'o' ];

    for ( var i=0; i < prefixes.length; i++ ) {
      var prefix = prefixes[i];
      var method = prefix + 'MatchesSelector';
      if ( ElemProto[ method ] ) {
        return method;
      }
    }
  })();

  return function matchesSelector( elem, selector ) {
    return elem[ matchesMethod ]( selector );
  };

}));


/***/ })

}]);
//# sourceMappingURL=default~components-pages-blogmasonry-blogmasonry-module-ngfactory~components-pages-commande-commande~cf23030b-es2015.js.map