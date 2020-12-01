require("./runtime.js");require("./vendor.js");module.exports =
(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["bundle"],{

/***/ "../node_modules/babel-loader/lib/index.js!../node_modules/vue-loader/lib/index.js?!./components/About.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _nativescript_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@nativescript/core/index.js");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _shared_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./shared/utils.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({
  computed: _objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_1__["mapState"])(["icon", "currentComponent"])), {}, {
    getVersion() {
      var ctx = _nativescript_core__WEBPACK_IMPORTED_MODULE_0__["Application"].android.context;
      return ctx.getPackageManager().getPackageInfo(ctx.getPackageName(), 0).versionName;
    }

  }),

  data() {
    return {
      viewIsScrolled: false,
      appTheme: "Light"
    };
  },

  methods: _objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_1__["mapActions"])(["setCurrentComponentAction"])), {}, {
    onPageLoad() {
      this.setCurrentComponentAction("About");
    },

    // HELPERS
    showDrawer() {
      _shared_utils__WEBPACK_IMPORTED_MODULE_2__["showDrawer"]();
    },

    onScroll(args) {
      this.viewIsScrolled = args.scrollY ? true : false;
    },

    openURL(url) {
      _nativescript_core__WEBPACK_IMPORTED_MODULE_0__["Utils"].openUrl(url);
    }

  })
});

/***/ }),

/***/ "../node_modules/babel-loader/lib/index.js!../node_modules/vue-loader/lib/index.js?!./components/App.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _nativescript_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@nativescript/core/index.js");
/* harmony import */ var _nativescript_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/@nativescript/theme/index.js");
/* harmony import */ var nativescript_toast__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../node_modules/nativescript-toast/toast.js");
/* harmony import */ var nativescript_toast__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(nativescript_toast__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var tns_core_modules_application__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../node_modules/@nativescript/core/application/index.js");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("../node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _EnRecipes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./components/EnRecipes.vue");
/* harmony import */ var _MealPlanner__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./components/MealPlanner.vue");
/* harmony import */ var _Settings__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./components/Settings.vue");
/* harmony import */ var _About__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./components/About.vue");
/* harmony import */ var _modal_PromptDialog__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./components/modal/PromptDialog.vue");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//










/* harmony default export */ __webpack_exports__["default"] = ({
  data() {
    return {
      selectedCategory: null,
      filterFavorites: false,
      filterTrylater: false,
      MealPlanner: _MealPlanner__WEBPACK_IMPORTED_MODULE_6__["default"],
      topmenu: [{
        title: "EnRecipes",
        component: "EnRecipes",
        icon: "home"
      }, {
        title: "Try Later",
        component: "Try Later",
        icon: "trylater"
      }, {
        title: "Favorites",
        component: "Favorites",
        icon: "heart"
      }],
      bottommenu: [{
        title: "Settings",
        component: _Settings__WEBPACK_IMPORTED_MODULE_7__["default"],
        icon: "cog"
      }, {
        title: "About",
        component: _About__WEBPACK_IMPORTED_MODULE_8__["default"],
        icon: "info"
      }],
      editCategory: false,
      appTheme: "Light"
    };
  },

  components: {
    EnRecipes: _EnRecipes__WEBPACK_IMPORTED_MODULE_5__["default"],
    MealPlanner: _MealPlanner__WEBPACK_IMPORTED_MODULE_6__["default"]
  },
  computed: _objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_4__["mapState"])(["icon", "recipes", "categories", "yieldUnits", "mealPlans", "currentComponent"])), {}, {
    categoriesWithRecipes() {
      var arr = this.recipes.map(e => {
        return e.category;
      });
      return [...new Set(arr)];
    }

  }),
  methods: _objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_4__["mapActions"])(["setCurrentComponentAction", "initializeRecipes", "initializeCategories", "initializeYieldUnits", "initializeMealPlans", "renameCategoryAction"])), {}, {
    onPageLoad() {
      if (this.appTheme === "Light") {
        var View = android.view.View;
        var window = _nativescript_core__WEBPACK_IMPORTED_MODULE_0__["Application"].android.startActivity.getWindow();
        var decorView = window.getDecorView();
        decorView.setSystemUiVisibility(View.SYSTEM_UI_FLAG_LIGHT_STATUS_BAR); // window.setNavigationBarColor(new Color("#e0e0e0").android)
      }
    },

    onPageUnload() {// this.releaseGlobalBackEvent()
    },

    // HELPERS
    toggleCatEdit() {
      this.editCategory = !this.editCategory;
      if (this.selectedCategory) this.setComponent("EnRecipes");
      this.filterFavorites = this.filterTrylater = false;
      this.selectedCategory = null;
      this.$refs.enrecipes.updateFilter();
    },

    setComponent(comp) {
      this.setCurrentComponentAction(comp);
    },

    renameCategory(category) {
      this.releaseGlobalBackEvent();
      this.$showModal(_modal_PromptDialog__WEBPACK_IMPORTED_MODULE_9__["default"], {
        props: {
          title: "Rename category",
          text: category,
          action: "RENAME"
        }
      }).then(newCategory => {
        this.hijackGlobalBackEvent();

        if (newCategory.length) {
          this.renameCategoryAction({
            current: category,
            updated: newCategory
          });
          this.editCategory = false;
          this.navigateTo(newCategory, false, true);
        }
      });
    },

    setSelectedCategory(e) {
      this.selectedCategory = e.item;
      this.closeDrawer();
    },

    closeDrawer() {
      this.$refs.drawer.nativeView.closeDrawer();
    },

    // NAVIGATION HANDLERS
    hijackGlobalBackEvent() {
      _nativescript_core__WEBPACK_IMPORTED_MODULE_0__["AndroidApplication"].on(_nativescript_core__WEBPACK_IMPORTED_MODULE_0__["AndroidApplication"].activityBackPressedEvent, this.globalBackEvent);
    },

    releaseGlobalBackEvent() {
      _nativescript_core__WEBPACK_IMPORTED_MODULE_0__["AndroidApplication"].off(_nativescript_core__WEBPACK_IMPORTED_MODULE_0__["AndroidApplication"].activityBackPressedEvent, this.globalBackEvent);
    },

    globalBackEvent(args) {
      function preventDefault() {
        args.cancel = true;
      }

      var vm = this;

      function isFiltered() {
        vm.filterFavorites ? vm.setComponent("Favorites") : vm.filterTrylater ? vm.setComponent("Try Later") : vm.selectedCategory ? vm.setComponent(vm.selectedCategory) : vm.setComponent("EnRecipes");
      }

      if (this.$refs.drawer && this.$refs.drawer.nativeView.getIsOpen()) {
        preventDefault();
        this.closeDrawer();
        this.editCategory = false;
      } else if (["Favorites", "Try Later", this.selectedCategory].includes(this.currentComponent)) {
        preventDefault();
        this.setComponent("EnRecipes");
        this.filterFavorites = this.filterTrylater = false;
        this.selectedCategory = null;
        this.$refs.enrecipes.updateFilter();
        this.releaseGlobalBackEvent();
      }
    },

    navigateTo(to, isTrueComponent, isCategory) {
      if (isTrueComponent) {
        this.$navigateTo(to, {
          frame: "main-frame",
          backstackVisible: false
        });
        this.closeDrawer();
      } else if (!this.editCategory || !isCategory) {
        this.releaseGlobalBackEvent();
        this.hijackGlobalBackEvent();
        this.setComponent(to);
        this.$navigateBack({
          frame: "main-frame",
          backstackVisible: false
        });
        this.filterFavorites = to === "Favorites" ? true : false;
        this.filterTrylater = to === "Try Later" ? true : false;
        this.selectedCategory = isCategory ? to : null;
        this.$refs.enrecipes.updateFilter();
        this.closeDrawer();
      }

      this.editCategory = false;
    },

    donate() {
      _nativescript_core__WEBPACK_IMPORTED_MODULE_0__["Utils"].openUrl("https://www.vishnuraghav.com/donate/");
    }

  }),

  created() {
    this.appTheme = _nativescript_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationSettings"].getString("appTheme", "Light");
    setTimeout(e => {
      _nativescript_theme__WEBPACK_IMPORTED_MODULE_1__["default"].setMode(_nativescript_theme__WEBPACK_IMPORTED_MODULE_1__["default"][this.appTheme]);
    }, 10);
    if (!this.recipes.length) this.initializeRecipes();
    if (!this.categories.length) this.initializeCategories();
    if (!this.yieldUnits.length) this.initializeYieldUnits();
    if (!this.mealPlans.length) this.initializeMealPlans();
  }

});

/***/ }),

/***/ "../node_modules/babel-loader/lib/index.js!../node_modules/vue-loader/lib/index.js?!./components/EditRecipe.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _nativescript_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@nativescript/core/index.js");
/* harmony import */ var _nativescript_community_perms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/@nativescript-community/perms/permissions.js");
/* harmony import */ var nativescript_toast__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../node_modules/nativescript-toast/toast.js");
/* harmony import */ var nativescript_toast__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(nativescript_toast__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var nativescript_plugin_filepicker__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../node_modules/nativescript-plugin-filepicker/plugin-filepicker.js");
/* harmony import */ var nativescript_plugin_filepicker__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(nativescript_plugin_filepicker__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var nativescript_imagecropper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("../node_modules/nativescript-imagecropper/imagecropper.js");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("../node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _ViewRecipe_vue__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./components/ViewRecipe.vue");
/* harmony import */ var _modal_ActionDialog_vue__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./components/modal/ActionDialog.vue");
/* harmony import */ var _modal_ActionDialogWithSearch_vue__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./components/modal/ActionDialogWithSearch.vue");
/* harmony import */ var _modal_ConfirmDialog_vue__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./components/modal/ConfirmDialog.vue");
/* harmony import */ var _modal_PromptDialog_vue__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./components/modal/PromptDialog.vue");
/* harmony import */ var _modal_ListPicker_vue__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./components/modal/ListPicker.vue");
/* harmony import */ var _shared_utils__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./shared/utils.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//













/* harmony default export */ __webpack_exports__["default"] = ({
  props: ["recipeID", "selectedCategory", "filterFavorites", "filterTrylater", "navigationFromView"],

  data() {
    return {
      title: "New recipe",
      viewIsScrolled: false,
      recipeContent: {
        imageSrc: null,
        title: undefined,
        category: "Undefined",
        timeRequired: "00:00",
        yield: {
          quantity: undefined,
          unit: "Servings"
        },
        ingredients: [],
        instructions: [],
        combinations: [],
        notes: [],
        isFavorite: false,
        tried: true,
        lastTried: null,
        lastModified: null
      },
      tempRecipeContent: {},
      blockModal: false,
      modalOpen: false,
      newRecipeID: null,
      showFab: false,
      saving: false,
      cacheImagePath: null,
      unSyncCombinations: []
    };
  },

  computed: _objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_5__["mapState"])(["icon", "units", "yieldUnits", "recipes", "categories", "currentComponent"])), {}, {
    screenWidth() {
      return _nativescript_core__WEBPACK_IMPORTED_MODULE_0__["Screen"].mainScreen.widthDIPs;
    },

    appTheme() {
      return _nativescript_core__WEBPACK_IMPORTED_MODULE_0__["Application"].systemAppearance();
    },

    hasChanges() {
      return JSON.stringify(this.recipeContent) !== JSON.stringify(this.tempRecipeContent);
    },

    timeRequired() {
      var t = this.recipeContent.timeRequired.split(":");
      var h = parseInt(t[0]);
      var m = parseInt(t[1]);
      return h ? m ? "".concat(h, " hr ").concat(m, " min") : "".concat(h, " hr") : "".concat(m, " min");
    }

  }),
  methods: _objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_5__["mapActions"])(["setCurrentComponentAction", "addRecipeAction", "overwriteRecipeAction", "addCategoryAction", "addYieldUnitAction", "unSyncCombinationsAction"])), {}, {
    onPageLoad() {
      this.showFab = true;
    },

    // HELPERS
    focusField(args, type) {
      if (type) this.setInputTypeText(args, type);

      if (!args.object.text) {
        args.object.focus();
        setTimeout(e => _nativescript_core__WEBPACK_IMPORTED_MODULE_0__["Utils"].ad.showSoftInput(args.object.android), 10);
      }
    },

    setInputTypeText(args, type) {
      var field = args.object;

      switch (type) {
        case "words":
          field.android.setInputType(android.text.InputType.TYPE_CLASS_TEXT | android.text.InputType.TYPE_TEXT_FLAG_CAP_WORDS | android.text.InputType.TYPE_TEXT_FLAG_AUTO_CORRECT);
          break;

        case "sentence":
          field.android.setInputType(android.text.InputType.TYPE_CLASS_TEXT | android.text.InputType.TYPE_TEXT_FLAG_CAP_SENTENCES | android.text.InputType.TYPE_TEXT_FLAG_AUTO_CORRECT);
          break;

        case "multiLine":
          field.android.setInputType(android.text.InputType.TYPE_CLASS_TEXT | android.text.InputType.TYPE_TEXT_FLAG_MULTI_LINE | android.text.InputType.TYPE_TEXT_FLAG_CAP_SENTENCES | android.text.InputType.TYPE_TEXT_FLAG_AUTO_CORRECT);
          break;

        default:
          break;
      }
    },

    getRandomID() {
      var res = "";
      var chars = "abcdefghijklmnopqrstuvwxyz0123456789";

      for (var i = 0; i < 10; i++) {
        res += chars.charAt(Math.floor(Math.random() * chars.length));
      }

      return res;
    },

    setTimeRequired(focus) {
      this.modalOpen = true;
      var time = this.recipeContent.timeRequired.split(":");
      var hr = time[0];
      var min = time[1];
      this.$showModal(_modal_ListPicker_vue__WEBPACK_IMPORTED_MODULE_11__["default"], {
        props: {
          title: "Time required",
          action: "SET",
          selectedHr: hr,
          selectedMin: min
        }
      }).then(result => {
        if (result) {
          this.recipeContent.timeRequired = result;
          this.modalOpen = false;
          if (focus) this.addIngredient();
        }
      });
    },

    onScroll(args) {
      this.viewIsScrolled = args.scrollY ? true : false;
    },

    // DATA LIST
    showCategories(focus) {
      this.modalOpen = true;
      this.releaseBackEvent();
      this.$showModal(_modal_ActionDialog_vue__WEBPACK_IMPORTED_MODULE_7__["default"], {
        props: {
          title: "Category",
          list: [...this.categories],
          // height: "420",
          action: "ADD NEW"
        }
      }).then(action => {
        if (action == "ADD NEW") {
          this.$showModal(_modal_PromptDialog_vue__WEBPACK_IMPORTED_MODULE_10__["default"], {
            props: {
              title: "New category",
              action: "ADD"
            }
          }).then(category => {
            this.hijackBackEvent();

            if (category.length) {
              this.recipeContent.category = category;
              this.addCategoryAction(category);
              if (focus) this.autoFocusField("yieldQuantity");
              this.modalOpen = false;
            }
          });
        } else if (action) {
          this.recipeContent.category = action;
          this.hijackBackEvent();
          if (focus) this.autoFocusField("yieldQuantity");
          this.modalOpen = false;
        } else {
          this.hijackBackEvent();
        }
      });
    },

    autoFocusField(ref) {
      this.$refs[ref].nativeView.focus();
      setTimeout(() => {
        _nativescript_core__WEBPACK_IMPORTED_MODULE_0__["Utils"].ad.showSoftInput(this.$refs[ref].nativeView.android);
      }, 1);
    },

    showYieldUnits(focus) {
      this.modalOpen = true;
      this.releaseBackEvent();
      this.$showModal(_modal_ActionDialog_vue__WEBPACK_IMPORTED_MODULE_7__["default"], {
        props: {
          title: "Yield measured in",
          list: [...this.yieldUnits],
          // height: "420",
          action: "ADD NEW"
        }
      }).then(action => {
        if (action == "ADD NEW") {
          this.$showModal(_modal_PromptDialog_vue__WEBPACK_IMPORTED_MODULE_10__["default"], {
            props: {
              title: "New yield unit",
              action: "ADD"
            }
          }).then(yieldUnit => {
            this.hijackBackEvent();

            if (yieldUnit.length) {
              this.recipeContent.yield.unit = yieldUnit;
              this.addYieldUnitAction(yieldUnit);
              this.modalOpen = false;
              if (focus) this.autoFocusField("timeRequired");
            }
          });
        } else if (action) {
          this.recipeContent.yield.unit = action;
          this.hijackBackEvent();
          this.modalOpen = false;
          if (focus) this.autoFocusField("timeRequired");
        } else {
          this.hijackBackEvent();
        }
      });
    },

    showUnits(e, focus, index) {
      this.modalOpen = true;
      this.releaseBackEvent();
      this.$showModal(_modal_ActionDialog_vue__WEBPACK_IMPORTED_MODULE_7__["default"], {
        props: {
          title: "Unit",
          list: [...this.units]
        }
      }).then(action => {
        this.hijackBackEvent();

        if (action) {
          e.object.text = action;
          this.modalOpen = false;

          if (focus) {
            if (this.recipeContent.ingredients.length - 1 === index) {
              this.addIngredient();
            } else {
              this.$refs.ingredient[index + 1].nativeView.focus();
              setTimeout(e => _nativescript_core__WEBPACK_IMPORTED_MODULE_0__["Utils"].ad.showSoftInput(this.$refs.ingredient[index + 1].nativeView.android), 10);
            }
          }
        }
      });
    },

    // NAVIGATION HANDLERS
    navigateBackController() {
      if (this.navigationFromView) {
        this.$navigateTo(_ViewRecipe_vue__WEBPACK_IMPORTED_MODULE_6__["default"], {
          props: {
            filterTrylater: this.filterTrylater,
            recipeID: this.recipeID
          },
          backstackVisible: false
        });
      } else this.$navigateBack();
    },

    navigateBack() {
      if (this.hasChanges) {
        this.blockModal = true;
        this.$showModal(_modal_ConfirmDialog_vue__WEBPACK_IMPORTED_MODULE_9__["default"], {
          props: {
            title: "Unsaved changes",
            description: "Are you sure you want to discard unsaved changes to this recipe?",
            cancelButtonText: "DISCARD",
            okButtonText: "KEEP EDITING"
          }
        }).then(action => {
          this.blockModal = false;

          if (action != null && !action) {
            this.navigateBackController();
            this.releaseBackEvent();
          }
        });
      } else {
        this.navigateBackController();
        this.releaseBackEvent();
      }
    },

    hijackBackEvent() {
      _nativescript_core__WEBPACK_IMPORTED_MODULE_0__["AndroidApplication"].on(_nativescript_core__WEBPACK_IMPORTED_MODULE_0__["AndroidApplication"].activityBackPressedEvent, this.backEvent);
    },

    releaseBackEvent() {
      _nativescript_core__WEBPACK_IMPORTED_MODULE_0__["AndroidApplication"].off(_nativescript_core__WEBPACK_IMPORTED_MODULE_0__["AndroidApplication"].activityBackPressedEvent, this.backEvent);
    },

    backEvent(args) {
      if (this.hasChanges && !this.blockModal) {
        args.cancel = true;
        this.navigateBack();
      }
    },

    // DATA HANDLERS
    imageHandler() {
      if (this.recipeContent.imageSrc) {
        this.blockModal = true;
        this.$showModal(_modal_ConfirmDialog_vue__WEBPACK_IMPORTED_MODULE_9__["default"], {
          props: {
            title: "Recipe photo",
            cancelButtonText: "REMOVE",
            okButtonText: "REPLACE PHOTO"
          }
        }).then(action => {
          this.blockModal = false;

          if (action) {
            this.permissionCheck(this.permissionConfirmation, this.imagePicker);
          } else if (action != null) {
            this.recipeContent.imageSrc = null;
            this.releaseBackEvent();
          }
        });
      } else {
        this.permissionCheck(this.permissionConfirmation, this.imagePicker);
      }
    },

    permissionConfirmation() {
      return this.$showModal(_modal_ConfirmDialog_vue__WEBPACK_IMPORTED_MODULE_9__["default"], {
        props: {
          title: "Grant permission",
          description: "EnRecipes requires storage permission in order to set recipe photo.",
          cancelButtonText: "NOT NOW",
          okButtonText: "CONTINUE"
        }
      });
    },

    permissionCheck(confirmation, action) {
      if (!_nativescript_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationSettings"].getBoolean("storagePermissionAsked", false)) {
        confirmation().then(e => {
          if (e) {
            _nativescript_community_perms__WEBPACK_IMPORTED_MODULE_1__["request"]("photo").then(status => {
              switch (status[0]) {
                case "authorized":
                  action();
                  break;

                case "never_ask_again":
                  _nativescript_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationSettings"].setBoolean("storagePermissionAsked", true);
                  break;

                case "denied":
                  nativescript_toast__WEBPACK_IMPORTED_MODULE_2__["makeText"]("Permission denied").show();
                  break;

                default:
                  break;
              }
            });
          }
        });
      } else {
        _nativescript_community_perms__WEBPACK_IMPORTED_MODULE_1__["check"]("photo").then(res => {
          res[0] !== "authorized" ? confirmation().then(e => e && _shared_utils__WEBPACK_IMPORTED_MODULE_12__["openAppSettingsPage"]()) : action();
        });
      }
    },

    imagePicker() {
      _nativescript_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationSettings"].setBoolean("storagePermissionAsked", true);
      this.cacheImagePath = _nativescript_core__WEBPACK_IMPORTED_MODULE_0__["path"].join(_nativescript_core__WEBPACK_IMPORTED_MODULE_0__["knownFolders"].temp().path, "".concat(this.getRandomID(), ".jpg"));
      nativescript_plugin_filepicker__WEBPACK_IMPORTED_MODULE_3__["create"]({
        mode: "single",
        extensions: ["png", "jpeg", "jpg"]
      }).present().then(selection => {
        var imgPath = selection[0];
        _nativescript_core__WEBPACK_IMPORTED_MODULE_0__["ImageSource"].fromFile(imgPath).then(image => {
          nativescript_imagecropper__WEBPACK_IMPORTED_MODULE_4__["ImageCropper"].prototype.show(image, {
            width: 1080,
            height: 1080
          }, {
            hideBottomControls: true,
            toolbarTitle: "Crop photo",
            statusBarColor: "#ff5200",
            toolbarTextColor: this.appTheme == "light" ? "#212529" : "#f1f3f5",
            toolbarColor: this.appTheme == "light" ? "#f1f3f5" : "#212529",
            cropFrameColor: "#ff5200"
          }).then(cropped => {
            cropped.image.saveToFile(this.cacheImagePath, "jpg", 75);
            this.recipeContent.imageSrc = this.cacheImagePath;
          });
        });
      });
    },

    // INPUT FIELD HANDLERS
    fieldDeletionConfirm(title) {
      return this.$showModal(_modal_ConfirmDialog_vue__WEBPACK_IMPORTED_MODULE_9__["default"], {
        props: {
          title,
          cancelButtonText: "CANCEL",
          okButtonText: "REMOVE"
        }
      });
    },

    addIngredient() {
      this.recipeContent.ingredients.push({
        item: "",
        quantity: null,
        unit: "unit"
      });
    },

    removeIngredient(index) {
      if (this.recipeContent.ingredients[index].item.length) {
        this.fieldDeletionConfirm("Remove ingredient").then(res => {
          if (res) {
            this.recipeContent.ingredients.splice(index, 1);
          }
        });
      } else this.recipeContent.ingredients.splice(index, 1);
    },

    addInstruction() {
      this.recipeContent.instructions.push("");
    },

    removeInstruction(index) {
      if (this.recipeContent.instructions[index].length) {
        this.fieldDeletionConfirm("Remove instruction").then(res => {
          res && this.recipeContent.instructions.splice(index, 1);
        });
      } else this.recipeContent.instructions.splice(index, 1);
    },

    getCombinationTitle(id) {
      return this.recipes.filter(e => e.id === id)[0].title;
    },

    showCombinations() {
      var existingCombinations = [...this.recipeContent.combinations, this.recipeContent.id];
      var filteredRecipes = this.recipes.filter(e => !existingCombinations.includes(e.id));
      this.$showModal(_modal_ActionDialogWithSearch_vue__WEBPACK_IMPORTED_MODULE_8__["default"], {
        props: {
          title: "Select a recipe",
          recipes: filteredRecipes
        }
      }).then(res => {
        if (res) {
          this.recipeContent.combinations.push(res);
        }
      });
    },

    removeCombination(id) {
      var index = this.recipeContent.combinations.indexOf(id);
      this.fieldDeletionConfirm("Remove combination").then(res => {
        if (res) {
          this.recipeContent.combinations.splice(index, 1);
          this.unSyncCombinations.push(id);
        }
      });
    },

    addNote() {
      this.recipeContent.notes.push("");
    },

    removeNote(index) {
      if (this.recipeContent.notes[index].length) {
        this.fieldDeletionConfirm("Remove note").then(res => {
          if (res) this.recipeContent.notes.splice(index, 1);
        });
      } else this.recipeContent.notes.splice(index, 1);
    },

    // SAVE OPERATION
    clearEmptyFields() {
      if (!this.recipeContent.title) this.recipeContent.title = "Untitled Recipe";
      if (!this.recipeContent.yield.quantity) this.recipeContent.yield.quantity = 1;
      this.recipeContent.ingredients = this.recipeContent.ingredients.filter(e => e.item);
      var vm = this;

      function clearEmpty(arr) {
        vm.recipeContent[arr] = vm.recipeContent[arr].filter(e => e);
      }

      clearEmpty("instructions");
      clearEmpty("notes");
    },

    saveOperation() {
      this.saving = this.modalOpen = true;
      this.clearEmptyFields();
      this.recipeContent.lastModified = new Date();

      if (this.cacheImagePath) {
        var recipeImage = _nativescript_core__WEBPACK_IMPORTED_MODULE_0__["path"].join(_nativescript_core__WEBPACK_IMPORTED_MODULE_0__["knownFolders"].documents().getFolder("EnRecipes").getFolder("Images").path, "".concat(this.getRandomID(), ".jpg"));
        var binarySource = _nativescript_core__WEBPACK_IMPORTED_MODULE_0__["File"].fromPath(this.cacheImagePath).readSync();
        _nativescript_core__WEBPACK_IMPORTED_MODULE_0__["File"].fromPath(recipeImage).writeSync(binarySource);
        this.recipeContent.imageSrc = recipeImage;
        _nativescript_core__WEBPACK_IMPORTED_MODULE_0__["knownFolders"].temp().clear();
      }

      if (this.recipeContent.imageSrc) {
        if (this.tempRecipeContent.imageSrc && this.tempRecipeContent.imageSrc !== this.recipeContent.imageSrc) {
          Object(_nativescript_core__WEBPACK_IMPORTED_MODULE_0__["getFileAccess"])().deleteFile(this.tempRecipeContent.imageSrc);
        }
      } else if (this.tempRecipeContent.imageSrc) {
        Object(_nativescript_core__WEBPACK_IMPORTED_MODULE_0__["getFileAccess"])().deleteFile(this.tempRecipeContent.imageSrc);
      }

      this.unSyncCombinationsAction({
        id: this.recipeID,
        combinations: this.unSyncCombinations
      });
      this.saveRecipe();
    },

    saveRecipe() {
      if (this.recipeID) {
        this.overwriteRecipeAction({
          id: this.recipeID,
          recipe: this.recipeContent
        });
      } else {
        this.recipeContent.id = this.newRecipeID;
        this.addRecipeAction({
          id: this.newRecipeID,
          recipe: this.recipeContent
        });
      }

      setTimeout(() => {
        this.saving = false;
      }, 100);
      this.navigateBackController();
    }

  }),

  created() {
    setTimeout(e => {
      this.setCurrentComponentAction("EditRecipe");
    }, 500);
    this.title = this.recipeID ? "Edit recipe" : "New recipe";

    if (this.recipeID) {
      var recipe = this.recipes.filter(e => e.id === this.recipeID)[0];
      Object.assign(this.recipeContent, JSON.parse(JSON.stringify(recipe)));
      Object.assign(this.tempRecipeContent, JSON.parse(JSON.stringify(this.recipeContent)));
    } else {
      if (this.selectedCategory) this.recipeContent.category = this.selectedCategory;
      if (this.filterFavorites) this.recipeContent.isFavorite = true;
      Object.assign(this.tempRecipeContent, JSON.parse(JSON.stringify(this.recipeContent)));
      this.newRecipeID = this.getRandomID();
    }

    this.hijackBackEvent();
  }

});

/***/ }),

/***/ "../node_modules/babel-loader/lib/index.js!../node_modules/vue-loader/lib/index.js?!./components/EnRecipes.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _nativescript_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@nativescript/core/index.js");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _EditRecipe_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./components/EditRecipe.vue");
/* harmony import */ var _ViewRecipe_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./components/ViewRecipe.vue");
/* harmony import */ var _modal_ActionDialog_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./components/modal/ActionDialog.vue");
/* harmony import */ var _modal_ConfirmDialog_vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./components/modal/ConfirmDialog.vue");
/* harmony import */ var _shared_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./shared/utils.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//







/* harmony default export */ __webpack_exports__["default"] = ({
  props: ["filterFavorites", "filterTrylater", "closeDrawer", "selectedCategory", "hijackGlobalBackEvent", "releaseGlobalBackEvent"],
  components: {
    EditRecipe: _EditRecipe_vue__WEBPACK_IMPORTED_MODULE_2__["default"],
    ViewRecipe: _ViewRecipe_vue__WEBPACK_IMPORTED_MODULE_3__["default"]
  },

  data() {
    return {
      searchQuery: "",
      viewIsScrolled: false,
      showSearch: false,
      rightAction: false,
      sortType: "Natural order",
      deletionDialogActive: false,
      showFAB: false
    };
  },

  computed: _objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_1__["mapState"])(["icon", "recipes", "currentComponent"])), {}, {
    filteredRecipes() {
      if (this.filterFavorites) {
        return this.recipes.filter(e => e.isFavorite && e.title.toLowerCase().includes(this.searchQuery));
      } else if (this.filterTrylater) {
        return this.recipes.filter(e => !e.tried && e.title.toLowerCase().includes(this.searchQuery));
      } else if (this.selectedCategory) {
        return this.recipes.filter(e => e.category === this.selectedCategory && e.title.toLowerCase().includes(this.searchQuery));
      } else {
        return this.recipes.filter(e => e.title.toLowerCase().includes(this.searchQuery));
      }
    },

    noResultFor() {
      if (this.selectedCategory) return " in this category";
      if (this.filterFavorites) return " in your favorites";
      if (this.filterTrylater) return " in your try later list";
      return "";
    }

  }),
  methods: _objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_1__["mapActions"])(["setCurrentComponentAction", "deleteRecipeAction"])), {}, {
    onPageLoad() {
      this.filterFavorites ? this.setComponent("Favorites") : this.filterTrylater ? this.setComponent("Try Later") : this.selectedCategory ? this.setComponent(this.selectedCategory) : this.setComponent("EnRecipes");
      this.showFAB = true;
    },

    // HELPERS
    showDrawer() {
      _shared_utils__WEBPACK_IMPORTED_MODULE_6__["showDrawer"]();
    },

    openSearch() {
      this.showSearch = true;
      this.showFAB = false;
      this.hijackLocalBackEvent();
    },

    closeSearch() {
      if (this.searchQuery) this.updateFilter();
      this.searchQuery = "";
      _nativescript_core__WEBPACK_IMPORTED_MODULE_0__["Utils"].ad.dismissSoftInput();
      this.showSearch = false;
      this.showFAB = true;
      this.releaseLocalBackEvent();
    },

    setComponent(comp) {
      this.setCurrentComponentAction(comp);
      this.hijackGlobalBackEvent();
    },

    clearSearch() {
      if (this.searchQuery !== "") {
        this.updateFilter();
      }
    },

    formattedTime(time) {
      var t = time.split(":");
      var h = parseInt(t[0]);
      var m = parseInt(t[1]);
      return {
        time: h ? m ? "".concat(h, " hr ").concat(m, " min") : "".concat(h, " hr") : "".concat(m, " min"),
        duration: "".concat(h).concat(m)
      };
    },

    onScroll(args) {
      this.viewIsScrolled = args.scrollOffset ? true : false;
    },

    // NAVIGATION HANDLERS
    hijackLocalBackEvent() {
      this.releaseGlobalBackEvent();
      _nativescript_core__WEBPACK_IMPORTED_MODULE_0__["AndroidApplication"].on(_nativescript_core__WEBPACK_IMPORTED_MODULE_0__["AndroidApplication"].activityBackPressedEvent, this.searchBackEvent);
    },

    releaseLocalBackEvent() {
      _nativescript_core__WEBPACK_IMPORTED_MODULE_0__["AndroidApplication"].off(_nativescript_core__WEBPACK_IMPORTED_MODULE_0__["AndroidApplication"].activityBackPressedEvent, this.searchBackEvent);
      this.hijackGlobalBackEvent();
    },

    searchBackEvent(args) {
      args.cancel = true;
      this.closeDrawer();
      this.closeSearch();
    },

    addRecipe() {
      this.showFAB = false;
      this.releaseGlobalBackEvent();
      this.$navigateTo(_EditRecipe_vue__WEBPACK_IMPORTED_MODULE_2__["default"], {
        props: {
          selectedCategory: this.selectedCategory,
          filterFavorites: this.filterFavorites
        }
      });
    },

    viewRecipe(recipeID) {
      this.showFAB = false;
      this.$navigateTo(_ViewRecipe_vue__WEBPACK_IMPORTED_MODULE_3__["default"], {
        props: {
          filterTrylater: this.filterTrylater,
          recipeID
        },
        backstackVisible: false
      });
    },

    // LIST HANDLERS
    sortDialog() {
      this.releaseGlobalBackEvent();
      this.$showModal(_modal_ActionDialog_vue__WEBPACK_IMPORTED_MODULE_4__["default"], {
        props: {
          title: "Sort by",
          list: ["Natural order", "Title", "Duration", "Last modified"],
          height: "192"
        }
      }).then(action => {
        if (action && action !== "Cancel" && this.sortType !== action) {
          this.sortType = action;
          this.updateSort();
        }

        this.hijackGlobalBackEvent();
      });
    },

    updateSort() {
      var listView = this.$refs.listView.nativeView;
      listView.sortingFunction = undefined;
      listView.sortingFunction = this.sortFunction;
    },

    sortFunction(item, otherItem) {
      var titleOrder = item.title.toLowerCase().localeCompare(otherItem.title.toLowerCase(), "en", {
        ignorePunctuation: true
      });
      var d1 = this.formattedTime(item.timeRequired).duration;
      var d2 = this.formattedTime(otherItem.timeRequired).duration;
      var ld1 = new Date(item.lastModified);
      var ld2 = new Date(otherItem.lastModified);

      switch (this.sortType) {
        case "Title":
          return titleOrder > 0 ? -1 : titleOrder < 0 ? 1 : 0;
          break;

        case "Duration":
          return d1 > d2 ? -1 : d1 < d2 ? 1 : 0;
          break;

        case "Last modified":
          return ld1 < ld2 ? -1 : ld1 > ld2 ? 1 : 0;
          break;

        default:
          return 0;
          break;
      }
    },

    updateFilter() {
      var listView = this.$refs.listView.nativeView;
      setTimeout(e => {
        listView.filteringFunction = undefined;
        listView.filteringFunction = this.filterFunction;
      }, 1);
    },

    filterFunction(item) {
      if (this.filterFavorites) {
        return item.isFavorite ? item.title.toLowerCase().includes(this.searchQuery) : false;
      } else if (this.filterTrylater) {
        return item.tried ? false : item.title.toLowerCase().includes(this.searchQuery);
      } else if (this.selectedCategory) {
        return item.category === this.selectedCategory ? item.title.toLowerCase().includes(this.searchQuery) : false;
      } else {
        return item.title.toLowerCase().includes(this.searchQuery);
      }
    },

    onSwiping(_ref) {
      var {
        data,
        object
      } = _ref;
      var swipeLimits = data.swipeLimits;
      var swipeView = object;
      var rightItem = swipeView.getViewById("delete-action");
      swipeLimits.right = rightItem.getMeasuredWidth() - 12;
      swipeLimits.threshold = swipeLimits.right - 6;

      if (data.x < -swipeLimits.threshold) {
        this.rightAction = true;
        swipeView.notifySwipeToExecuteFinished();
      }
    },

    onSwipeEnded(_ref2) {
      var {
        index
      } = _ref2;
      var recipeID = this.recipes[index].id;
      if (this.rightAction && !this.deletionDialogActive) this.deleteRecipe(index, recipeID);
      this.rightAction = false;
    },

    // DATA HANDLERS
    deleteRecipe(index, recipeID) {
      this.deletionDialogActive = true;
      this.$showModal(_modal_ConfirmDialog_vue__WEBPACK_IMPORTED_MODULE_5__["default"], {
        props: {
          title: "Delete recipe",
          description: "Are you sure you want to delete the recipe \"".concat(this.recipes[index].title, "\"?"),
          cancelButtonText: "CANCEL",
          okButtonText: "DELETE"
        }
      }).then(action => {
        if (action) {
          this.deleteRecipeAction({
            index,
            id: recipeID
          });
        }

        this.deletionDialogActive = false;
      });
    }

  }),

  mounted() {
    this.showFAB = true;
  }

});

/***/ }),

/***/ "../node_modules/babel-loader/lib/index.js!../node_modules/vue-loader/lib/index.js?!./components/MealPlanner.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _nativescript_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@nativescript/core/index.js");
/* harmony import */ var nativescript_ui_calendar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/nativescript-ui-calendar/ui-calendar.js");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _ViewRecipe_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./components/ViewRecipe.vue");
/* harmony import */ var _modal_ActionDialogWithSearch_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./components/modal/ActionDialogWithSearch.vue");
/* harmony import */ var _modal_ConfirmDialog_vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./components/modal/ConfirmDialog.vue");
/* harmony import */ var _shared_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./shared/utils.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//







/* harmony default export */ __webpack_exports__["default"] = ({
  data() {
    return {
      viewIsScrolled: false,
      appTheme: "Light",
      mealTimes: ["breakfast", "lunch", "dinner", "snacks"],
      eventList: [],
      selectedDayMealPlans: [],
      viewMode: nativescript_ui_calendar__WEBPACK_IMPORTED_MODULE_1__["CalendarViewMode"].Month,
      transitionMode: nativescript_ui_calendar__WEBPACK_IMPORTED_MODULE_1__["CalendarTransitionMode"].Slide,
      selectionMode: nativescript_ui_calendar__WEBPACK_IMPORTED_MODULE_1__["CalendarSelectionMode"].Single,
      eventsViewMode: nativescript_ui_calendar__WEBPACK_IMPORTED_MODULE_1__["CalendarEventsViewMode"].None,
      color: {
        white: new _nativescript_core__WEBPACK_IMPORTED_MODULE_0__["Color"]("#ffffff"),
        gray1: new _nativescript_core__WEBPACK_IMPORTED_MODULE_0__["Color"]("#f1f3f5"),
        gray2: new _nativescript_core__WEBPACK_IMPORTED_MODULE_0__["Color"]("#e9ecef"),
        gray3: new _nativescript_core__WEBPACK_IMPORTED_MODULE_0__["Color"]("#dee2e6"),
        gray4: new _nativescript_core__WEBPACK_IMPORTED_MODULE_0__["Color"]("#ced4da"),
        gray5: new _nativescript_core__WEBPACK_IMPORTED_MODULE_0__["Color"]("#adb5bd"),
        gray6: new _nativescript_core__WEBPACK_IMPORTED_MODULE_0__["Color"]("#868e96"),
        gray7: new _nativescript_core__WEBPACK_IMPORTED_MODULE_0__["Color"]("#495057"),
        gray8: new _nativescript_core__WEBPACK_IMPORTED_MODULE_0__["Color"]("#343a40"),
        gray9: new _nativescript_core__WEBPACK_IMPORTED_MODULE_0__["Color"]("#212529"),
        black: new _nativescript_core__WEBPACK_IMPORTED_MODULE_0__["Color"]("#111111"),
        orange: new _nativescript_core__WEBPACK_IMPORTED_MODULE_0__["Color"]("#ff5200"),
        breakfast: "#ffb180",
        lunch: "#ceff80",
        dinner: "#80ceff",
        snacks: "#b180ff"
      },
      appFontRegular: "Orkney-Regular",
      appFontMedium: "Orkney-Medium",
      selectedDate: null
    };
  },

  computed: _objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_2__["mapState"])(["icon", "recipes", "mealPlans"])), {}, {
    isLightMode() {
      return this.appTheme === "Light";
    },

    monthViewStyle() {
      var monthViewStyle = new nativescript_ui_calendar__WEBPACK_IMPORTED_MODULE_1__["CalendarMonthViewStyle"]();
      monthViewStyle.backgroundColor = this.isLightMode ? this.color.gray1 : this.color.gray9;
      monthViewStyle.showTitle = true;
      monthViewStyle.showWeekNumbers = false;
      monthViewStyle.showDayNames = true;
      var titleCellStyle = new nativescript_ui_calendar__WEBPACK_IMPORTED_MODULE_1__["DayCellStyle"]();
      titleCellStyle.cellBackgroundColor = this.isLightMode ? this.color.gray2 : this.color.black;
      titleCellStyle.cellBorderWidth = 1;
      titleCellStyle.cellBorderColor = this.isLightMode ? this.color.gray2 : this.color.black;
      titleCellStyle.cellTextSize = 16;
      titleCellStyle.cellTextColor = this.isLightMode ? this.color.gray9 : this.color.gray1;
      titleCellStyle.cellTextFontName = this.appFontMedium;
      monthViewStyle.titleCellStyle = titleCellStyle;
      var dayNameCellStyle = new nativescript_ui_calendar__WEBPACK_IMPORTED_MODULE_1__["CellStyle"]();
      dayNameCellStyle.cellBackgroundColor = this.isLightMode ? this.color.gray2 : this.color.black;
      dayNameCellStyle.cellTextColor = this.isLightMode ? this.color.gray9 : this.color.gray1;
      dayNameCellStyle.cellBorderWidth = 1;
      dayNameCellStyle.cellBorderColor = this.isLightMode ? this.color.gray2 : this.color.black;
      dayNameCellStyle.cellTextSize = 10;
      dayNameCellStyle.cellAlignment = nativescript_ui_calendar__WEBPACK_IMPORTED_MODULE_1__["CalendarCellAlignment"].Center;
      dayNameCellStyle.cellTextFontName = this.appFontMedium;
      monthViewStyle.dayNameCellStyle = dayNameCellStyle;
      var dayCellStyle = new nativescript_ui_calendar__WEBPACK_IMPORTED_MODULE_1__["DayCellStyle"]();
      dayCellStyle.showEventsText = false;
      dayCellStyle.eventTextColor = this.color.orange;
      dayCellStyle.eventFontName = this.appFontRegular;
      dayCellStyle.eventFontStyle = nativescript_ui_calendar__WEBPACK_IMPORTED_MODULE_1__["CalendarFontStyle"].Bold;
      dayCellStyle.eventTextSize = 8;
      dayCellStyle.cellTextSize = 16;
      dayCellStyle.cellTextColor = this.isLightMode ? this.color.gray9 : this.color.gray1;
      dayCellStyle.cellAlignment = nativescript_ui_calendar__WEBPACK_IMPORTED_MODULE_1__["CalendarCellAlignment"].Bottom;
      dayCellStyle.cellBackgroundColor = this.isLightMode ? this.color.gray1 : this.color.gray9;
      dayCellStyle.cellTextFontName = this.appFontRegular;
      dayCellStyle.cellBorderWidth = 1;
      dayCellStyle.cellBorderColor = this.isLightMode ? this.color.gray2 : this.color.black;
      monthViewStyle.dayCellStyle = dayCellStyle;
      var todayCellStyle = new nativescript_ui_calendar__WEBPACK_IMPORTED_MODULE_1__["DayCellStyle"]();
      todayCellStyle.cellBackgroundColor = this.isLightMode ? this.color.gray1 : this.color.gray9;
      todayCellStyle.cellTextColor = this.color.orange;
      todayCellStyle.cellBorderWidth = 1;
      todayCellStyle.cellTextFontName = this.appFontMedium;
      todayCellStyle.cellTextFontStyle = nativescript_ui_calendar__WEBPACK_IMPORTED_MODULE_1__["CalendarFontStyle"].Bold;
      todayCellStyle.cellTextSize = 16;
      todayCellStyle.cellAlignment = nativescript_ui_calendar__WEBPACK_IMPORTED_MODULE_1__["CalendarCellAlignment"].Bottom;
      todayCellStyle.cellBorderColor = this.isLightMode ? this.color.gray2 : this.color.black;
      monthViewStyle.todayCellStyle = todayCellStyle;
      var selectedCellStyle = new nativescript_ui_calendar__WEBPACK_IMPORTED_MODULE_1__["DayCellStyle"]();
      selectedCellStyle.eventTextSize = 1;
      selectedCellStyle.cellAlignment = nativescript_ui_calendar__WEBPACK_IMPORTED_MODULE_1__["CalendarCellAlignment"].Bottom;
      selectedCellStyle.cellBackgroundColor = this.isLightMode ? this.color.white : this.color.gray8;
      selectedCellStyle.cellBorderWidth = 1;
      selectedCellStyle.cellBorderColor = this.color.orange;
      selectedCellStyle.cellTextColor = this.isLightMode ? this.color.gray9 : this.color.gray1;
      selectedCellStyle.cellTextFontName = this.appFontMedium;
      selectedCellStyle.cellTextFontStyle = nativescript_ui_calendar__WEBPACK_IMPORTED_MODULE_1__["CalendarFontStyle"].Bold;
      selectedCellStyle.cellTextSize = 16;
      monthViewStyle.selectedDayCellStyle = selectedCellStyle;
      return monthViewStyle;
    },

    getRecipes() {
      if (this.selectedDayMealPlans.length) {
        return this.selectedDayMealPlans.reduce((acc, e) => {
          switch (e.startDate.getHours()) {
            case 0:
              //breakfast
              acc["breakfast"] = [...(acc["breakfast"] || []), e.title];
              break;

            case 5:
              //lunch
              acc["lunch"] = [...(acc["lunch"] || []), e.title];
              break;

            case 10:
              //dinner
              acc["dinner"] = [...(acc["dinner"] || []), e.title];
              break;

            case 15:
              //snacks
              acc["snacks"] = [...(acc["snacks"] || []), e.title];
              break;

            default:
              break;
          }

          return acc;
        }, {});
      } else return 0;
    },

    getMealPlans() {
      var getDate = date => {
        var d = new Date(date);
        var result = new Date(d.getFullYear(), d.getMonth(), d.getDate(), d.getHours());
        return result;
      };

      var events = [];
      this.mealPlans.forEach(plan => {
        var e = new nativescript_ui_calendar__WEBPACK_IMPORTED_MODULE_1__["CalendarEvent"](plan.title, getDate(plan.startDate), getDate(plan.endDate), false, new _nativescript_core__WEBPACK_IMPORTED_MODULE_0__["Color"](plan.eventColor));
        events = [...events, e];
      });
      return events;
    }

  }),
  methods: _objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_2__["mapActions"])(["setCurrentComponentAction", "initializeMealPlans", "addMealPlanAction", "deleteMealPlanAction"])), {}, {
    onPageLoad(args) {
      this.setCurrentComponentAction("MealPlanner");
    },

    onCalendarLoad(args) {
      args.object.monthViewStyle = this.monthViewStyle;
      args.object.android.getGestureManager().setDoubleTapToChangeDisplayMode(false);
      args.object.android.getGestureManager().setPinchCloseToChangeDisplayMode(false);
      if (args.object.selectedDate == null) args.object.selectedDate = new Date();

      if (args.object.nativeView.getEventAdapter()) {
        args.object.nativeView.getEventAdapter().getRenderer().setEventRenderMode(com.telerik.widget.calendar.events.EventRenderMode.Shape);
      }
    },

    // HELPERS
    showDrawer() {
      _shared_utils__WEBPACK_IMPORTED_MODULE_6__["showDrawer"]();
    },

    onScroll(args) {
      this.viewIsScrolled = args.scrollY ? true : false;
    },

    getDate(index) {
      var date = new Date();
      date.setDate(date.getDate() + index);
      return date.getTime();
    },

    getDateString(days) {
      var date = new Date();
      date.setDate(date.getDate() + days);
      return date.toDateString().slice(0, -5);
    },

    getRecipeTitle(id) {
      var recipe = this.recipes.filter(e => e.id === id)[0];
      return recipe ? recipe.title : "[Recipe not found]";
    },

    // NAVIGATION HANDLERS
    viewRecipe(recipeID) {
      var recipe = this.recipes.filter(e => e.id === recipeID)[0];

      if (recipe) {
        this.$navigateTo(_ViewRecipe_vue__WEBPACK_IMPORTED_MODULE_3__["default"], {
          props: {
            filterTrylater: true,
            recipeID
          },
          backstackVisible: false
        });
      }
    },

    // DATA HANDLERS
    addRecipe(mealType) {
      var filteredRecipes = this.recipes.filter(e => this.getRecipes[mealType] ? !this.getRecipes[mealType].includes(e.id) : true);
      this.$showModal(_modal_ActionDialogWithSearch_vue__WEBPACK_IMPORTED_MODULE_4__["default"], {
        props: {
          title: "Select a recipe",
          recipes: filteredRecipes
        }
      }).then(recipeID => {
        recipeID && this.newEvent(recipeID, mealType);
      });
    },

    removeRecipeConfirm(mealType) {
      return this.$showModal(_modal_ConfirmDialog_vue__WEBPACK_IMPORTED_MODULE_5__["default"], {
        props: {
          title: "Remove recipe from ".concat(mealType),
          cancelButtonText: "CANCEL",
          okButtonText: "REMOVE"
        }
      });
    },

    removeRecipe(mealType, recipeID) {
      var startHour = {
        breakfast: 0,
        lunch: 5,
        dinner: 10,
        snacks: 15
      };
      this.removeRecipeConfirm(mealType).then(res => {
        if (res) {
          var actualMealPlan = this.selectedDayMealPlans.filter(e => e.startDate.getHours() === startHour[mealType] && e.title === recipeID)[0];
          var mealPlan = {
            title: actualMealPlan.title,
            startDate: actualMealPlan.startDate
          };
          this.deleteMealPlanAction(mealPlan);
          this.updateSelectedDatePlans();
        }
      });
    },

    // CALENDAR
    updateSelectedDatePlans() {
      var date = new Date(this.selectedDate);
      setTimeout(() => {
        this.selectedDayMealPlans = this.$refs.calendar.nativeView.getEventsForDate(date);
      }, 100);
    },

    onDateSelected(args) {
      this.selectedDate = args.date;
      this.selectedDayMealPlans = args.object.getEventsForDate(args.date);
    },

    newEvent(recipeID, mealType) {
      var date = new Date(this.selectedDate);

      var selectedDate = () => {
        return {
          y: date.getFullYear(),
          m: date.getMonth(),
          d: date.getDate()
        };
      };

      var {
        y,
        m,
        d
      } = selectedDate();
      var mealTime = {
        breakfast: {
          start: new Date(y, m, d, 0),
          end: new Date(y, m, d, 4)
        },
        lunch: {
          start: new Date(y, m, d, 5),
          end: new Date(y, m, d, 9)
        },
        dinner: {
          start: new Date(y, m, d, 10),
          end: new Date(y, m, d, 14)
        },
        snacks: {
          start: new Date(y, m, d, 15),
          end: new Date(y, m, d, 19)
        }
      };
      var event = new nativescript_ui_calendar__WEBPACK_IMPORTED_MODULE_1__["CalendarEvent"](recipeID, mealTime[mealType].start, mealTime[mealType].end, false, new _nativescript_core__WEBPACK_IMPORTED_MODULE_0__["Color"](this.color[mealType]));
      this.addMealPlanAction({
        event,
        eventColor: this.color[mealType]
      });
      this.updateSelectedDatePlans();
    },

    goToToday() {
      var date = new Date();
      this.$refs.calendar.goToDate(date);
      this.$refs.calendar.nativeView.selectedDate = date;
    }

  }),

  created() {
    this.appTheme = _nativescript_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationSettings"].getString("appTheme", "Light");
    var d = new Date();
    d.setHours(0, 0, 0);
    this.selectedDate = d;
  }

});

/***/ }),

/***/ "../node_modules/babel-loader/lib/index.js!../node_modules/vue-loader/lib/index.js?!./components/Settings.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _nativescript_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@nativescript/core/index.js");
/* harmony import */ var _nativescript_community_perms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/@nativescript-community/perms/permissions.js");
/* harmony import */ var _nativescript_zip__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../node_modules/@nativescript/zip/zip.js");
/* harmony import */ var nativescript_toast__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../node_modules/nativescript-toast/toast.js");
/* harmony import */ var nativescript_toast__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(nativescript_toast__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var nativescript_plugin_filepicker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("../node_modules/nativescript-plugin-filepicker/plugin-filepicker.js");
/* harmony import */ var nativescript_plugin_filepicker__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(nativescript_plugin_filepicker__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _nativescript_theme__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("../node_modules/@nativescript/theme/index.js");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("../node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _modal_ActionDialog_vue__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./components/modal/ActionDialog.vue");
/* harmony import */ var _modal_ConfirmDialog_vue__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./components/modal/ConfirmDialog.vue");
/* harmony import */ var _shared_utils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./shared/utils.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//










/* harmony default export */ __webpack_exports__["default"] = ({
  data() {
    return {
      viewIsScrolled: false,
      appTheme: "Light",
      backupProgress: 0,
      backupInProgress: false
    };
  },

  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_6__["mapState"])(["icon", "recipes", "userCategories", "userYieldUnits", "mealPlans", "currentComponent"])),
  methods: _objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_6__["mapActions"])(["setCurrentComponentAction", "importCategoriesAction", "importYieldUnitsAction", "importRecipesAction", "importMealPlansAction"])), {}, {
    onPageLoad() {
      this.setCurrentComponentAction("Settings");
    },

    // HELPERS
    showDrawer() {
      _shared_utils__WEBPACK_IMPORTED_MODULE_9__["showDrawer"]();
    },

    onScroll(args) {
      this.viewIsScrolled = args.scrollY ? true : false;
    },

    // THEME SELECTION
    selectThemes() {
      this.$showModal(_modal_ActionDialog_vue__WEBPACK_IMPORTED_MODULE_7__["default"], {
        props: {
          title: "Theme",
          list: ["Light", "Dark"],
          height: "96"
        }
      }).then(action => {
        if (action && action !== "Cancel" && this.appTheme !== action) {
          this.$showModal(_modal_ConfirmDialog_vue__WEBPACK_IMPORTED_MODULE_8__["default"], {
            props: {
              title: "Reload required",
              description: "EnRecipes needs to be reloaded for the theme change to take effect.",
              cancelButtonText: "CANCEL",
              okButtonText: "RELOAD"
            }
          }).then(result => {
            if (result) {
              this.appTheme = action;
              _nativescript_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationSettings"].setString("appTheme", action);
              setTimeout(e => _shared_utils__WEBPACK_IMPORTED_MODULE_9__["restartApp"](), 250);
            }
          });
        }
      });
    },

    // EXPORT HANDLERS
    exportCheck() {
      if (!this.recipes.length) {
        nativescript_toast__WEBPACK_IMPORTED_MODULE_3__["makeText"]("Add at least one recipe to perform a backup", "long").show();
      } else {
        this.permissionCheck(this.permissionConfirmation, "EnRecipes requires storage permission in order to backup your data to this device.", this.exportBackup);
      }
    },

    exportBackup() {
      this.exportFiles("create");
      var date = new Date();
      var formattedDate = date.getFullYear() + "-" + ("0" + (date.getMonth() + 1)).slice(-2) + "-" + ("0" + date.getDate()).slice(-2) + "_" + ("0" + date.getHours()).slice(-2) + ("0" + date.getMinutes()).slice(-2) + ("0" + date.getSeconds()).slice(-2);
      var sdDownloadPath = _nativescript_core__WEBPACK_IMPORTED_MODULE_0__["Folder"].fromPath(android.os.Environment.getExternalStorageDirectory().getAbsolutePath()).getFolder("Download").path;
      var fromPath = _nativescript_core__WEBPACK_IMPORTED_MODULE_0__["path"].join(_nativescript_core__WEBPACK_IMPORTED_MODULE_0__["knownFolders"].documents().path, "EnRecipes");
      var destPath = _nativescript_core__WEBPACK_IMPORTED_MODULE_0__["path"].join(sdDownloadPath, "EnRecipes-Backup_".concat(formattedDate, ".zip"));
      this.backupInProgress = true;
      _nativescript_zip__WEBPACK_IMPORTED_MODULE_2__["Zip"].zip({
        directory: fromPath,
        archive: destPath,
        onProgress: progress => {
          this.backupProgress = progress;
        }
      }).then(success => {
        nativescript_toast__WEBPACK_IMPORTED_MODULE_3__["makeText"]("Backup file successfully saved to Download folder", "long").show();
        this.exportFiles("delete");
      });
    },

    exportFiles(option) {
      var folder = _nativescript_core__WEBPACK_IMPORTED_MODULE_0__["path"].join(_nativescript_core__WEBPACK_IMPORTED_MODULE_0__["knownFolders"].documents().path, "EnRecipes");
      var EnRecipesFile = _nativescript_core__WEBPACK_IMPORTED_MODULE_0__["File"].fromPath(_nativescript_core__WEBPACK_IMPORTED_MODULE_0__["path"].join(folder, "recipes.json"));
      var userCategoriesFile, userYieldUnitsFile, mealPlansFile;

      if (this.userCategories.length) {
        userCategoriesFile = _nativescript_core__WEBPACK_IMPORTED_MODULE_0__["File"].fromPath(_nativescript_core__WEBPACK_IMPORTED_MODULE_0__["path"].join(folder, "userCategories.json"));
      }

      if (this.userYieldUnits.length) {
        userYieldUnitsFile = _nativescript_core__WEBPACK_IMPORTED_MODULE_0__["File"].fromPath(_nativescript_core__WEBPACK_IMPORTED_MODULE_0__["path"].join(folder, "userYieldUnits.json"));
      }

      if (this.mealPlans.length) {
        mealPlansFile = _nativescript_core__WEBPACK_IMPORTED_MODULE_0__["File"].fromPath(_nativescript_core__WEBPACK_IMPORTED_MODULE_0__["path"].join(folder, "mealPlans.json"));
      }

      switch (option) {
        case "create":
          this.writeDataToFile(EnRecipesFile, this.recipes);
          this.userCategories.length && this.writeDataToFile(userCategoriesFile, this.userCategories);
          this.userYieldUnits.length && this.writeDataToFile(userYieldUnitsFile, this.userYieldUnits);
          this.mealPlans.length && this.writeDataToFile(mealPlansFile, this.mealPlans);
          break;

        case "delete":
          EnRecipesFile.remove();
          this.userCategories.length && userCategoriesFile.remove();
          this.userYieldUnits.length && userYieldUnitsFile.remove();
          this.mealPlans.length && mealPlansFile.remove();
          break;

        default:
          break;
      }
    },

    writeDataToFile(file, data) {
      file.writeText(JSON.stringify(data));
    },

    // IMPORT HANDLERS
    importCheck() {
      this.permissionCheck(this.permissionConfirmation, "EnRecipes requires storage permission in order to restore your data from a previous backup.", this.openFilePicker);
    },

    openFilePicker() {
      nativescript_plugin_filepicker__WEBPACK_IMPORTED_MODULE_4__["create"]({
        mode: "single",
        extensions: ["zip"]
      }).present().then(selection => {
        nativescript_toast__WEBPACK_IMPORTED_MODULE_3__["makeText"]("Processing...").show();
        var zipPath = selection[0];
        this.validateZipContent(zipPath);
      });
    },

    importDataToDB(data, db, zipPath) {
      switch (db) {
        case "EnRecipesDB":
          this.importImages(zipPath);
          this.importRecipesAction(data);
          break;

        case "userCategoriesDB":
          this.importCategoriesAction(data);
          break;

        case "userYieldUnitsDB":
          this.importYieldUnitsAction(data);
          break;

        case "mealPlansDB":
          this.importMealPlansAction(data);
          break;

        default:
          break;
      }
    },

    isFileDataValid(file) {
      file.forEach((file, i) => {
        if (_nativescript_core__WEBPACK_IMPORTED_MODULE_0__["File"].exists(file.path)) {
          _nativescript_core__WEBPACK_IMPORTED_MODULE_0__["File"].fromPath(file.path).readText().then(data => {
            Array.isArray(JSON.parse(data)) && this.importDataToDB(JSON.parse(data), file.db, file.zipPath);
          });
        }
      });
    },

    validateZipContent(zipPath) {
      _nativescript_zip__WEBPACK_IMPORTED_MODULE_2__["Zip"].unzip({
        archive: zipPath,
        overwrite: true
      }).then(extractedFolderPath => {
        var cacheFolderPath = extractedFolderPath + "/EnRecipes";
        var EnRecipesFilePath = cacheFolderPath + "/recipes.json";
        var userCategoriesFilePath = cacheFolderPath + "/userCategories.json";
        var userYieldUnitsFilePath = cacheFolderPath + "/userYieldUnits.json";
        var mealPlansFilePath = cacheFolderPath + "/mealPlans.json";

        if (_nativescript_core__WEBPACK_IMPORTED_MODULE_0__["Folder"].exists(cacheFolderPath)) {
          this.isFileDataValid([{
            zipPath,
            path: EnRecipesFilePath,
            db: "EnRecipesDB"
          }, {
            zipPath,
            path: userCategoriesFilePath,
            db: "userCategoriesDB"
          }, {
            zipPath,
            path: userYieldUnitsFilePath,
            db: "userYieldUnitsDB"
          }, {
            zipPath,
            path: mealPlansFilePath,
            db: "mealPlansDB"
          }]);
        } else {
          _nativescript_core__WEBPACK_IMPORTED_MODULE_0__["Folder"].fromPath(extractedFolderPath).remove();
          nativescript_toast__WEBPACK_IMPORTED_MODULE_3__["makeText"]("Import failed. Backup file is incorrect or corrupt", "long").show();
        }

        if (_nativescript_core__WEBPACK_IMPORTED_MODULE_0__["Folder"].exists(cacheFolderPath + "/Images")) {
          this.importImages(cacheFolderPath + "/Images");
        }
      });
    },

    importImages(sourcePath) {
      var dest = _nativescript_core__WEBPACK_IMPORTED_MODULE_0__["knownFolders"].documents().path;
      _nativescript_zip__WEBPACK_IMPORTED_MODULE_2__["Zip"].unzip({
        archive: sourcePath,
        directory: dest,
        overwrite: true
      }).then(res => {
        nativescript_toast__WEBPACK_IMPORTED_MODULE_3__["makeText"]("Import successful", "long").show();
        this.$navigateBack();
      });
    },

    // PERMISSIONS HANDLER
    permissionCheck(confirmation, description, action) {
      if (!_nativescript_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationSettings"].getBoolean("storagePermissionAsked", false)) {
        confirmation(description).then(e => {
          if (e) {
            _nativescript_community_perms__WEBPACK_IMPORTED_MODULE_1__["request"]("photo").then(res => {
              var status = res[Object.keys(res)[0]];
              if (status === "authorized") action();
              if (status !== "denied") _nativescript_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationSettings"].setBoolean("storagePermissionAsked", true);else nativescript_toast__WEBPACK_IMPORTED_MODULE_3__["makeText"]("Permission denied").show();
            });
          }
        });
      } else {
        _nativescript_community_perms__WEBPACK_IMPORTED_MODULE_1__["check"]("photo").then(res => {
          var status = res[Object.keys(res)[0]];

          if (status !== "authorized") {
            confirmation(description).then(e => {
              e && _shared_utils__WEBPACK_IMPORTED_MODULE_9__["openAppSettingsPage"]();
            });
          } else action();
        });
      }
    },

    permissionConfirmation(description) {
      return this.$showModal(_modal_ConfirmDialog_vue__WEBPACK_IMPORTED_MODULE_8__["default"], {
        props: {
          title: "Grant permission",
          description,
          cancelButtonText: "NOT NOW",
          okButtonText: "CONTINUE"
        }
      });
    }

  }),

  mounted() {
    this.appTheme = _nativescript_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationSettings"].getString("appTheme", "Light");
  }

});

/***/ }),

/***/ "../node_modules/babel-loader/lib/index.js!../node_modules/vue-loader/lib/index.js?!./components/ViewRecipe.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _nativescript_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@nativescript/core/index.js");
/* harmony import */ var nativescript_feedback__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/nativescript-feedback/feedback.js");
/* harmony import */ var nativescript_feedback__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(nativescript_feedback__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var nativescript_toast__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../node_modules/nativescript-toast/toast.js");
/* harmony import */ var nativescript_toast__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(nativescript_toast__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _nativescript_social_share__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../node_modules/@nativescript/social-share/index.js");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("../node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _EditRecipe_vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./components/EditRecipe.vue");
/* harmony import */ var _ViewRecipe_vue__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./components/ViewRecipe.vue");
/* harmony import */ var _modal_ShareChooser_vue__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./components/modal/ShareChooser.vue");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//









var feedback = new nativescript_feedback__WEBPACK_IMPORTED_MODULE_1__["Feedback"]();
/* harmony default export */ __webpack_exports__["default"] = ({
  props: ["filterTrylater", "recipeID"],

  data() {
    return {
      busy: false,
      yieldMultiplier: 1,
      recipe: null,
      showFab: false,
      selectedTabIndex: 0,
      currentRecipeID: this.recipeID,
      viewIsScrolled: false,
      isScrolled: [false, false, false, false, false, false],
      hideActionBar: false
    };
  },

  computed: _objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_4__["mapState"])(["icon", "recipes"])), {}, {
    screenWidth() {
      return _nativescript_core__WEBPACK_IMPORTED_MODULE_0__["Screen"].mainScreen.widthDIPs;
    },

    positiveYieldMultiplier() {
      return Math.abs(this.yieldMultiplier) > 0 ? Math.abs(parseFloat(this.yieldMultiplier)) : 1;
    },

    isLightMode() {
      return _nativescript_core__WEBPACK_IMPORTED_MODULE_0__["Application"].systemAppearance() === "light";
    }

  }),
  methods: _objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_4__["mapActions"])(["toggleStateAction", "setCurrentComponentAction", "overwriteRecipeAction", "setRecipeAsTriedAction"])), {}, {
    onPageLoad() {
      this.busy = false;
      setTimeout(e => {
        this.setCurrentComponentAction("ViewRecipe");
      }, 500);
      this.showFab = true;
      this.yieldMultiplier = this.recipe.yield.quantity;
      this.keepScreenOn(true);
      this.syncCombinations();
    },

    onPageUnload() {
      feedback.hide();
      this.keepScreenOn(false);
    },

    // HELPERS
    niceDates(time) {
      var lastTried = new Date(time).getTime();
      var now = new Date().getTime();
      var midnight = new Date().setHours(0, 0, 0, 0);
      var diff = (now - lastTried) / 1000;
      var dayDiff = Math.ceil(diff / 86400);
      if (isNaN(dayDiff) || dayDiff < 0) return "";
      return diff < 86400 && lastTried > midnight && "today" || dayDiff == 1 && "yesterday" || dayDiff < 7 && dayDiff + " days ago" || dayDiff < 31 && Math.round(dayDiff / 7) + " week(s) ago" || dayDiff < 366 && Math.round(dayDiff / 30) + " month(s) ago" || dayDiff > 365 && "long time ago";
    },

    selectedIndexChange(args) {
      this.selectedTabIndex = args.object.selectedIndex;
      this.viewIsScrolled = this.isScrolled[this.selectedTabIndex];
    },

    showLastTried() {
      feedback.show({
        title: "You tried this recipe ".concat(this.niceDates(this.recipe.lastTried), "!"),
        titleColor: new _nativescript_core__WEBPACK_IMPORTED_MODULE_0__["Color"]("".concat(this.isLightMode ? "#f1f3f5" : "#212529")),
        backgroundColor: new _nativescript_core__WEBPACK_IMPORTED_MODULE_0__["Color"]("#ff5200")
      });
    },

    roundedQuantity(quantity) {
      return Math.abs(Math.round(quantity / this.recipe.yield.quantity * this.positiveYieldMultiplier * 100) / 100);
    },

    keepScreenOn(boolean) {
      var activity = _nativescript_core__WEBPACK_IMPORTED_MODULE_0__["Application"].android.foregroundActivity || _nativescript_core__WEBPACK_IMPORTED_MODULE_0__["Application"].android.startActivity;
      var window = activity.getWindow();
      if (boolean) window.addFlags(android.view.WindowManager.LayoutParams.FLAG_KEEP_SCREEN_ON);else window.clearFlags(android.view.WindowManager.LayoutParams.FLAG_KEEP_SCREEN_ON);
    },

    formattedTime(time) {
      var t = time.split(":");
      var h = parseInt(t[0]);
      var m = parseInt(t[1]);
      return h ? m ? "".concat(h, " hr ").concat(m, " min") : "".concat(h, " hr") : "".concat(m, " min");
    },

    isValidURL(string) {
      var pattern = new RegExp("^https?|^www", "ig");
      return pattern.test(string);
    },

    getCombinationTitle(id) {
      return this.recipes.filter(e => e.id === id)[0].title;
    },

    syncCombinations() {
      var combinationForOtherRecipes = this.recipes.filter(e => e.combinations.indexOf(this.currentRecipeID) >= 0 || this.recipe.combinations.includes(e.id)).map(e => e.id);
      this.recipe.combinations = combinationForOtherRecipes;
      this.overwriteRecipeAction({
        id: this.currentRecipeID,
        recipe: this.recipe
      });
    },

    // NAVIGATION HANDLERS
    onScroll(args) {
      this.viewIsScrolled = this.isScrolled[this.selectedTabIndex] = args.scrollY > 8 ? true : false;
    },

    editRecipe() {
      this.showFab = false;
      this.busy = true;
      this.$navigateTo(_EditRecipe_vue__WEBPACK_IMPORTED_MODULE_5__["default"], {
        props: {
          navigationFromView: true,
          filterTrylater: this.filterTrylater,
          recipeID: this.currentRecipeID
        },
        backstackVisible: false
      });
    },

    viewCombination(combination) {
      this.recipe = this.recipes.filter(e => e.id === combination)[0];
      this.currentRecipeID = combination;
      this.syncCombinations();
      this.selectedTabIndex = 0;
      setTimeout(e => this.recipe.tried && this.recipe.lastTried && this.showLastTried(), 500);
    },

    // SHARE ACTION
    shareHandler() {
      if (this.recipe.imageSrc) {
        this.$showModal(_modal_ShareChooser_vue__WEBPACK_IMPORTED_MODULE_7__["default"], {
          props: {
            title: "Share"
          }
        }).then(result => {
          switch (result) {
            case "photo":
              _nativescript_core__WEBPACK_IMPORTED_MODULE_0__["ImageSource"].fromFile(this.recipe.imageSrc).then(res => {
                _nativescript_social_share__WEBPACK_IMPORTED_MODULE_3__["shareImage"](res, "Share recipe photo using");
              });
              break;

            case "recipe":
              this.shareRecipe();
              break;

            default:
              break;
          }
        });
      } else {
        this.shareRecipe();
      }
    },

    shareRecipe() {
      var overview = "".concat(this.recipe.title, "\n\nTime required: ").concat(this.formattedTime(this.recipe.timeRequired), "\n");
      var shareContent = overview;

      if (this.recipe.ingredients.length) {
        var ingredients = "\n\nIngredients for ".concat(this.yieldMultiplier, " ").concat(this.recipe.yield.unit.toLowerCase(), "\n\n");
        this.recipe.ingredients.forEach(e => {
          ingredients += "- ".concat(e.quantity ? this.roundedQuantity(e.quantity) + " " + e.unit + " " : "").concat(e.item, "\n");
        });
        shareContent += ingredients;
      }

      if (this.recipe.instructions.length) {
        var instructions = "\n\nInstructions:\n\n";
        this.recipe.instructions.forEach((e, i) => {
          instructions += "Step ".concat(i + 1, ": ").concat(e, "\n\n");
        });
        shareContent += instructions;
      }

      if (this.recipe.combinations.length) {
        var combinations = "\nCombinations:\n\n";
        this.recipe.combinations.forEach((e, i) => {
          combinations += "".concat(i + 1, ". ").concat(this.getCombinationTitle(e), "\n\n");
        });
        shareContent += combinations;
      }

      if (this.recipe.notes.length) {
        var notes = "\nNotes:\n\n";
        this.recipe.notes.forEach((e, i) => {
          notes += "".concat(i + 1, ". ").concat(e, "\n\n");
        });
        shareContent += notes;
      }

      var sharenote = "\nCreated and shared via EnRecipes. Get it on F-Droid.";
      shareContent += sharenote;
      _nativescript_social_share__WEBPACK_IMPORTED_MODULE_3__["shareText"](shareContent, "Share recipe using");
    },

    // DATA HANDLERS
    toggle(key, setDate) {
      this.toggleStateAction({
        id: this.currentRecipeID,
        recipe: this.recipe,
        key,
        setDate
      });
    },

    toggleFavorite() {
      this.recipe.isFavorite ? nativescript_toast__WEBPACK_IMPORTED_MODULE_2__["makeText"]("Removed from Favorites").show() : nativescript_toast__WEBPACK_IMPORTED_MODULE_2__["makeText"]("Added to Favorites").show();
      this.toggle("isFavorite");
    },

    toggleTrylater() {
      this.recipe.tried ? this.filterTrylater ? nativescript_toast__WEBPACK_IMPORTED_MODULE_2__["makeText"]("Added back to Try Later").show() : nativescript_toast__WEBPACK_IMPORTED_MODULE_2__["makeText"]("Added to Try Later").show() : this.filterTrylater ? nativescript_toast__WEBPACK_IMPORTED_MODULE_2__["makeText"]("You tried this recipe").show() : nativescript_toast__WEBPACK_IMPORTED_MODULE_2__["makeText"]("Removed from Try Later").show();
      this.toggle("tried");
    },

    recipeTried() {
      this.setRecipeAsTriedAction({
        id: this.currentRecipeID,
        recipe: this.recipe
      });
      this.$navigateBack();
    },

    // URL ACTION
    openURL(url) {
      _nativescript_core__WEBPACK_IMPORTED_MODULE_0__["Utils"].openUrl(url);
    },

    copyURL(url) {
      var clipboard = _nativescript_core__WEBPACK_IMPORTED_MODULE_0__["Utils"].ad.getApplicationContext().getSystemService(android.content.Context.CLIPBOARD_SERVICE);
      var clip = android.content.ClipData.newPlainText("URl", url);
      clipboard.setPrimaryClip(clip);
      nativescript_toast__WEBPACK_IMPORTED_MODULE_2__["makeText"]("URL Copied").show();
    }

  }),

  created() {
    this.recipe = this.recipes.filter(e => e.id === this.currentRecipeID)[0];
  },

  mounted() {
    this.showFab = true;
    setTimeout(e => this.recipe.tried && this.recipe.lastTried && this.showLastTried(), 500);
  }

});

/***/ }),

/***/ "../node_modules/babel-loader/lib/index.js!../node_modules/vue-loader/lib/index.js?!./components/modal/ActionDialog.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _nativescript_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@nativescript/core/index.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  props: ["title", "list", "height", "action"],
  computed: {
    appTheme() {
      return _nativescript_core__WEBPACK_IMPORTED_MODULE_0__["Application"].systemAppearance();
    },

    rippleColor() {
      return this.appTheme == "light" ? "rgba(134,142,150,0.2)" : "rgba(206,212,218,0.1)";
    },

    screenHeight() {
      return Math.round(_nativescript_core__WEBPACK_IMPORTED_MODULE_0__["Screen"].mainScreen.heightDIPs);
    }

  },
  methods: {
    tapAction(item) {
      this.$modal.close(item);
    },

    onLabelLoaded(args) {
      args.object.android.setGravity(16);
    }

  }
});

/***/ }),

/***/ "../node_modules/babel-loader/lib/index.js!../node_modules/vue-loader/lib/index.js?!./components/modal/ActionDialogWithSearch.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _nativescript_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@nativescript/core/index.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  props: ["title", "recipes", "height", "action"],

  data() {
    return {
      searchTerm: ""
    };
  },

  computed: {
    appTheme() {
      return _nativescript_core__WEBPACK_IMPORTED_MODULE_0__["Application"].systemAppearance();
    },

    rippleColor() {
      return this.appTheme == "light" ? "rgba(134,142,150,0.2)" : "rgba(206,212,218,0.1)";
    },

    screenHeight() {
      return Math.round(_nativescript_core__WEBPACK_IMPORTED_MODULE_0__["Screen"].mainScreen.heightDIPs);
    },

    filteredRecipes() {
      return this.recipes.map((e, i) => {
        return {
          id: e.id,
          title: e.title
        };
      }).filter(e => e.title.includes(this.searchTerm));
    }

  },
  methods: {
    tapAction(recipe) {
      this.$modal.close(recipe.id);
    },

    onLabelLoaded(args) {
      args.object.android.setGravity(16);
    }

  }
});

/***/ }),

/***/ "../node_modules/babel-loader/lib/index.js!../node_modules/vue-loader/lib/index.js?!./components/modal/ConfirmDialog.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _nativescript_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@nativescript/core/index.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  props: ["title", "description", "cancelButtonText", "okButtonText"],
  computed: {
    appTheme() {
      return _nativescript_core__WEBPACK_IMPORTED_MODULE_0__["Application"].systemAppearance();
    },

    rippleColor() {
      return this.appTheme == "light" ? "rgba(134,142,150,0.2)" : "rgba(206,212,218,0.1)";
    }

  }
});

/***/ }),

/***/ "../node_modules/babel-loader/lib/index.js!../node_modules/vue-loader/lib/index.js?!./components/modal/ListPicker.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _nativescript_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@nativescript/core/index.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  props: ["title", "selectedHr", "selectedMin", "action"],

  data() {
    return {
      hrs: ["0 hr", "1 hr", "2 hr", "3 hr", "4 hr", "5 hr", "6 hr", "7 hr", "8 hr", "9 hr", "10 hr", "11 hr", "12 hr", "13 hr", "14 hr", "15 hr", "16 hr", "17 hr", "18 hr", "19 hr", "20 hr", "21 hr", "22 hr", "23 hr"],
      mins: ["0 min", "1 min", "2 min", "3 min", "4 min", "5 min", "6 min", "7 min", "8 min", "9 min", "10 min", "15 min", "20 min", "25 min", "30 min", "35 min", "40 min", "45 min", "50 min", "55 min"],
      selectedHrs: "00",
      selectedMins: "00"
    };
  },

  computed: {
    hrIndex() {
      var hr = this.selectedHr;
      if (hr.charAt(0) == "0") hr = hr.slice(-1) + " hr";else hr = hr + " hr";
      return this.hrs.indexOf(hr);
    },

    minIndex() {
      var min = this.selectedMin;
      if (min.charAt(0) == "0") min = min.slice(-1) + " min";else min = min + " min";
      return this.mins.indexOf(min);
    },

    appTheme() {
      return _nativescript_core__WEBPACK_IMPORTED_MODULE_0__["Application"].systemAppearance();
    },

    rippleColor() {
      return this.appTheme == "light" ? "rgba(134,142,150,0.2)" : "rgba(206,212,218,0.1)";
    },

    selectedTime() {
      return this.selectedHrs + ":" + this.selectedMins;
    }

  },
  methods: {
    setHrs(args) {
      var hr = "0" + this.hrs[args.object.selectedIndex];
      this.selectedHrs = hr.slice(-5).slice(0, -3);
    },

    setMins(args) {
      var min = "0" + this.mins[args.object.selectedIndex];
      this.selectedMins = min.slice(-6).slice(0, -4);
    }

  }
});

/***/ }),

/***/ "../node_modules/babel-loader/lib/index.js!../node_modules/vue-loader/lib/index.js?!./components/modal/PromptDialog.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _nativescript_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@nativescript/core/index.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  props: ["title", "hint", "text", "action"],

  data() {
    return {
      category: null
    };
  },

  computed: {
    appTheme() {
      return _nativescript_core__WEBPACK_IMPORTED_MODULE_0__["Application"].systemAppearance();
    },

    rippleColor() {
      return this.appTheme == "light" ? "rgba(134,142,150,0.2)" : "rgba(206,212,218,0.1)";
    }

  },
  methods: {
    focusField(args) {
      args.object.focus();
      setTimeout(e => _nativescript_core__WEBPACK_IMPORTED_MODULE_0__["Utils"].ad.showSoftInput(args.object.android), 1);
    }

  },

  mounted() {
    if (this.text) {
      this.category = this.text;
    }
  }

});

/***/ }),

/***/ "../node_modules/babel-loader/lib/index.js!../node_modules/vue-loader/lib/index.js?!./components/modal/ShareChooser.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _nativescript_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@nativescript/core/index.js");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/vuex/dist/vuex.esm.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
  props: ["title"],
  computed: _objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_1__["mapState"])(["icon"])), {}, {
    appTheme() {
      return _nativescript_core__WEBPACK_IMPORTED_MODULE_0__["Application"].systemAppearance();
    },

    rippleColor() {
      return this.appTheme == "light" ? "rgba(134,142,150,0.2)" : "rgba(206,212,218,0.1)";
    },

    backgroundColor() {
      return this.appTheme == "light" ? "#fff" : "#343a40";
    }

  })
});

/***/ }),

/***/ "../node_modules/vue-loader/lib/loaders/templateLoader.js?!../node_modules/vue-loader/lib/index.js?!./components/About.vue?vue&type=template&id=95337e7c&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "Page",
    { on: { loaded: _vm.onPageLoad } },
    [
      _c(
        "ActionBar",
        { attrs: { androidElevation: _vm.viewIsScrolled ? 4 : 0 } },
        [
          _c(
            "GridLayout",
            { attrs: { rows: "*", columns: "auto, *" } },
            [
              _c("MDButton", {
                staticClass: "bx",
                attrs: {
                  variant: "text",
                  text: _vm.icon.menu,
                  automationText: "Back",
                  col: "0"
                },
                on: { tap: _vm.showDrawer }
              }),
              _c("Label", {
                staticClass: "title orkm",
                attrs: { text: "About", col: "1" }
              })
            ],
            1
          )
        ],
        1
      ),
      _c(
        "ScrollView",
        { on: { scroll: _vm.onScroll } },
        [
          _c(
            "StackLayout",
            { staticClass: "main-container" },
            [
              _c(
                "StackLayout",
                {
                  staticClass: "appIconContainer",
                  attrs: {
                    horizontalAlignment: "center",
                    orientation: "horizontal"
                  }
                },
                [
                  _c("Image", {
                    staticClass: "appIcon",
                    attrs: { src: "res://logo", stretch: "aspectFit" }
                  })
                ],
                1
              ),
              _c("StackLayout", { staticClass: "m-8" }),
              _c(
                "GridLayout",
                { staticClass: "option", attrs: { columns: "auto, *" } },
                [
                  _c("Label", {
                    staticClass: "bx",
                    attrs: { col: "0", text: _vm.icon.info }
                  }),
                  _c(
                    "StackLayout",
                    { attrs: { col: "1" } },
                    [
                      _c("Label", { attrs: { text: "Version" } }),
                      _c("Label", {
                        staticClass: "info",
                        attrs: { text: _vm.getVersion, textWrap: "true" }
                      })
                    ],
                    1
                  )
                ],
                1
              ),
              _c(
                "GridLayout",
                { staticClass: "option", attrs: { columns: "auto, *" } },
                [
                  _c("MDRipple", {
                    attrs: { colSpan: "2" },
                    on: {
                      tap: function($event) {
                        return _vm.openURL(
                          "https://github.com/vishnuraghavb/enrecipes"
                        )
                      }
                    }
                  }),
                  _c("Label", {
                    staticClass: "bx",
                    attrs: { col: "0", text: _vm.icon.link }
                  }),
                  _c("Label", {
                    attrs: {
                      verticalAlignment: "center",
                      col: "1",
                      text: "View project on GitHub"
                    }
                  })
                ],
                1
              ),
              _c(
                "GridLayout",
                { staticClass: "option", attrs: { columns: "auto, *" } },
                [
                  _c("MDRipple", {
                    attrs: { colSpan: "2" },
                    on: {
                      tap: function($event) {
                        return _vm.openURL("https://t.me/enrecipes")
                      }
                    }
                  }),
                  _c("Label", {
                    staticClass: "bx",
                    attrs: { col: "0", text: _vm.icon.telegram }
                  }),
                  _c(
                    "StackLayout",
                    { attrs: { col: "1" } },
                    [
                      _c("Label", {
                        attrs: { text: "Join the Telegram group" }
                      }),
                      _c("Label", {
                        staticClass: "info",
                        attrs: {
                          text:
                            "for reporting issues, suggestions and feedback",
                          textWrap: "true"
                        }
                      })
                    ],
                    1
                  )
                ],
                1
              ),
              _c("StackLayout", { staticClass: "hr m-10" }),
              _c("Label", {
                staticClass: "group-header orkm",
                attrs: { text: "Author" }
              }),
              _c(
                "GridLayout",
                { staticClass: "option", attrs: { columns: "auto, *" } },
                [
                  _c("MDRipple", {
                    attrs: { colSpan: "2" },
                    on: {
                      tap: function($event) {
                        return _vm.openURL("https://www.vishnuraghav.com")
                      }
                    }
                  }),
                  _c("Label", {
                    staticClass: "bx",
                    attrs: { col: "0", text: _vm.icon.user }
                  }),
                  _c("Label", {
                    attrs: {
                      verticalAlignment: "center",
                      col: "1",
                      text: "Vishnu Raghav B"
                    }
                  })
                ],
                1
              ),
              _c(
                "GridLayout",
                { staticClass: "option", attrs: { columns: "auto, *" } },
                [
                  _c("MDRipple", {
                    attrs: { colSpan: "2" },
                    on: {
                      tap: function($event) {
                        return _vm.openURL("https://github.com/vishnuraghavb")
                      }
                    }
                  }),
                  _c("Label", {
                    staticClass: "bx",
                    attrs: { col: "0", text: _vm.icon.link }
                  }),
                  _c("Label", {
                    attrs: {
                      verticalAlignment: "center",
                      col: "1",
                      text: "Follow on GitHub"
                    }
                  })
                ],
                1
              ),
              _c(
                "GridLayout",
                { staticClass: "option", attrs: { columns: "auto, *" } },
                [
                  _c("MDRipple", {
                    attrs: { colSpan: "2" },
                    on: {
                      tap: function($event) {
                        return _vm.openURL(
                          "https://mastodon.social/@vishnuraghavb"
                        )
                      }
                    }
                  }),
                  _c("Label", {
                    staticClass: "bx",
                    attrs: { col: "0", text: _vm.icon.link }
                  }),
                  _c("Label", {
                    attrs: {
                      verticalAlignment: "center",
                      col: "1",
                      text: "Follow on Mastodon"
                    }
                  })
                ],
                1
              )
            ],
            1
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "../node_modules/vue-loader/lib/loaders/templateLoader.js?!../node_modules/vue-loader/lib/index.js?!./components/App.vue?vue&type=template&id=45ba5ed4&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "Page",
    {
      attrs: {
        actionBarHidden: "true",
        androidStatusBarBackground:
          _vm.appTheme == "Light" ? "#f1f3f5" : "#212529"
      },
      on: { loaded: _vm.onPageLoad, unloaded: _vm.onPageUnload }
    },
    [
      _c(
        "RadSideDrawer",
        {
          ref: "drawer",
          attrs: {
            allowEdgeSwipe: "true",
            showOverNavigation: "true",
            id: "sideDrawer",
            drawerContentSize: "270",
            gesturesEnabled: "true",
            drawerTransition: "SlideInOnTopTransition"
          }
        },
        [
          _c(
            "GridLayout",
            {
              directives: [
                {
                  name: "view",
                  rawName: "v-view:drawerContent",
                  arg: "drawerContent",
                  modifiers: {}
                }
              ],
              staticClass: "sd",
              attrs: { rows: "*, auto", columns: "*" }
            },
            [
              _c(
                "StackLayout",
                { attrs: { row: "0" } },
                [
                  _vm._l(_vm.topmenu, function(item, index) {
                    return _c(
                      "GridLayout",
                      {
                        key: index,
                        staticClass: "sd-item orkm",
                        class: {
                          "selected-sd-item":
                            _vm.currentComponent === item.component
                        },
                        attrs: { rows: "48", columns: "auto, 24, *" }
                      },
                      [
                        _c("MDRipple", {
                          attrs: { row: "0", colSpan: "3" },
                          on: {
                            tap: function($event) {
                              return _vm.navigateTo(
                                item.component,
                                false,
                                false
                              )
                            }
                          }
                        }),
                        _c("Label", {
                          staticClass: "bx",
                          attrs: {
                            col: "0",
                            row: "0",
                            text: _vm.icon[item.icon]
                          }
                        }),
                        _c("Label", {
                          attrs: { col: "2", row: "0", text: item.title }
                        })
                      ],
                      1
                    )
                  }),
                  _c("StackLayout", { staticClass: "hr m-8" }),
                  _c(
                    "GridLayout",
                    {
                      staticClass: "sd-item orkm",
                      class: {
                        "selected-sd-item":
                          _vm.currentComponent === "MealPlanner"
                      },
                      attrs: { rows: "48", columns: "auto, 24, *" }
                    },
                    [
                      _c("MDRipple", {
                        attrs: { row: "0", colSpan: "3" },
                        on: {
                          tap: function($event) {
                            return _vm.navigateTo(_vm.MealPlanner, true, false)
                          }
                        }
                      }),
                      _c("Label", {
                        staticClass: "bx",
                        attrs: { col: "0", row: "0", text: _vm.icon.calendar }
                      }),
                      _c("Label", {
                        attrs: { col: "2", row: "0", text: "Meal Planner" }
                      })
                    ],
                    1
                  ),
                  _c("StackLayout", { staticClass: "hr m-8" }),
                  _vm.categoriesWithRecipes.length
                    ? _c(
                        "GridLayout",
                        {
                          staticClass: "sd-group-header orkm",
                          attrs: { rows: "auto", columns: "*, auto" }
                        },
                        [
                          _c("Label", {
                            attrs: {
                              verticalAlignment: "center",
                              col: "0",
                              text: "Categories"
                            }
                          }),
                          _c("MDButton", {
                            attrs: {
                              variant: "text",
                              col: "2",
                              text: _vm.editCategory ? "DONE" : "RENAME"
                            },
                            on: { tap: _vm.toggleCatEdit }
                          })
                        ],
                        1
                      )
                    : _vm._e(),
                  _c(
                    "ScrollView",
                    { attrs: { height: "100%" } },
                    [
                      _c(
                        "StackLayout",
                        _vm._l(_vm.categoriesWithRecipes, function(
                          item,
                          index
                        ) {
                          return _c(
                            "GridLayout",
                            {
                              key: index,
                              staticClass: "sd-item orkm",
                              class: {
                                "selected-sd-item": _vm.currentComponent == item
                              },
                              attrs: { columns: "auto, *, auto" }
                            },
                            [
                              _c("MDRipple", {
                                attrs: { row: "0", colSpan: "3" },
                                on: {
                                  tap: function($event) {
                                    return _vm.navigateTo(item, false, true)
                                  }
                                }
                              }),
                              _c("Label", {
                                staticClass: "bx",
                                attrs: {
                                  col: "0",
                                  text: _vm.icon.label,
                                  margin: "0 24 0 0"
                                }
                              }),
                              _c("Label", { attrs: { col: "1", text: item } }),
                              _vm.editCategory
                                ? _c("MDButton", {
                                    staticClass: "bx",
                                    attrs: {
                                      variant: "text",
                                      col: "2",
                                      text: _vm.icon.edit
                                    },
                                    on: {
                                      tap: function($event) {
                                        return _vm.renameCategory(item)
                                      }
                                    }
                                  })
                                : _vm._e()
                            ],
                            1
                          )
                        }),
                        1
                      )
                    ],
                    1
                  )
                ],
                2
              ),
              _c(
                "StackLayout",
                { attrs: { row: "1" } },
                [
                  _c("StackLayout", { staticClass: "hr m-10" }),
                  _vm._l(_vm.bottommenu, function(item, index) {
                    return _c(
                      "GridLayout",
                      {
                        key: index,
                        staticClass: "sd-item orkm",
                        class: {
                          "selected-sd-item": _vm.currentComponent == item.title
                        },
                        attrs: { rows: "48", columns: "auto, 24, *" }
                      },
                      [
                        _c("MDRipple", {
                          attrs: { colSpan: "3" },
                          on: {
                            tap: function($event) {
                              return _vm.navigateTo(item.component, true, false)
                            }
                          }
                        }),
                        _c("Label", {
                          staticClass: "bx",
                          attrs: { col: "0", text: _vm.icon[item.icon] }
                        }),
                        _c("Label", { attrs: { col: "2", text: item.title } })
                      ],
                      1
                    )
                  })
                ],
                2
              )
            ],
            1
          ),
          _c(
            "Frame",
            {
              directives: [
                {
                  name: "view",
                  rawName: "v-view:mainContent",
                  arg: "mainContent",
                  modifiers: {}
                }
              ],
              attrs: { id: "main-frame" }
            },
            [
              _c("EnRecipes", {
                ref: "enrecipes",
                attrs: {
                  filterFavorites: _vm.filterFavorites,
                  filterTrylater: _vm.filterTrylater,
                  selectedCategory: _vm.selectedCategory,
                  closeDrawer: _vm.closeDrawer,
                  hijackGlobalBackEvent: _vm.hijackGlobalBackEvent,
                  releaseGlobalBackEvent: _vm.releaseGlobalBackEvent
                }
              })
            ],
            1
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "../node_modules/vue-loader/lib/loaders/templateLoader.js?!../node_modules/vue-loader/lib/index.js?!./components/EditRecipe.vue?vue&type=template&id=2dd987d3&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "Page",
    { on: { loaded: _vm.onPageLoad, unloaded: _vm.releaseBackEvent } },
    [
      _c(
        "ActionBar",
        { attrs: { androidElevation: _vm.viewIsScrolled ? 4 : 0 } },
        [
          _c(
            "GridLayout",
            { attrs: { rows: "*", columns: "auto, *, auto" } },
            [
              _c("MDButton", {
                staticClass: "bx",
                attrs: {
                  variant: "text",
                  text: _vm.icon.back,
                  automationText: "Back",
                  col: "0"
                },
                on: { tap: _vm.navigateBack }
              }),
              _c("Label", {
                staticClass: "title orkm",
                attrs: { text: _vm.title, col: "1" }
              }),
              _vm.hasChanges && !_vm.saving
                ? _c("MDButton", {
                    staticClass: "bx",
                    attrs: { variant: "text", text: _vm.icon.save, col: "2" },
                    on: { tap: _vm.saveOperation }
                  })
                : _vm._e(),
              _vm.saving
                ? _c("MDActivityIndicator", {
                    attrs: { col: "2", busy: _vm.saving }
                  })
                : _vm._e()
            ],
            1
          )
        ],
        1
      ),
      _c(
        "ScrollView",
        {
          attrs: { width: "100%", height: "100%" },
          on: { scroll: _vm.onScroll }
        },
        [
          _c(
            "StackLayout",
            { attrs: { width: "100%", padding: "0 0 88" } },
            [
              _c(
                "AbsoluteLayout",
                [
                  _c(
                    "StackLayout",
                    {
                      staticClass: "imageHolder",
                      attrs: {
                        width: "100%",
                        height: _vm.screenWidth,
                        verticalAlignment: "center"
                      }
                    },
                    [
                      _vm.recipeContent.imageSrc
                        ? _c("Image", {
                            attrs: {
                              src: _vm.recipeContent.imageSrc,
                              stretch: "aspectFill",
                              width: "100%",
                              height: _vm.screenWidth
                            }
                          })
                        : _c("Label", {
                            staticClass: "bx",
                            attrs: {
                              horizontalAlignment: "center",
                              fontSize: "160",
                              text: _vm.icon.image
                            }
                          })
                    ],
                    1
                  ),
                  _c(
                    "transition",
                    {
                      attrs: {
                        name: _vm.recipeContent.imageSrc ? "null" : "bounce"
                      }
                    },
                    [
                      _vm.showFab
                        ? _c("MDFloatingActionButton", {
                            staticClass: "bx",
                            attrs: {
                              top: _vm.screenWidth - 44,
                              left: _vm.screenWidth - 88,
                              src: "res://camera"
                            },
                            on: { tap: _vm.imageHandler }
                          })
                        : _vm._e()
                    ],
                    1
                  )
                ],
                1
              ),
              _c(
                "StackLayout",
                { attrs: { margin: "0 16" } },
                [
                  _c(
                    "AbsoluteLayout",
                    { staticClass: "inputField" },
                    [
                      _c("TextField", {
                        attrs: { hint: "My Healthy Recipe" },
                        on: {
                          loaded: function($event) {
                            return _vm.setInputTypeText($event, "words")
                          }
                        },
                        model: {
                          value: _vm.recipeContent.title,
                          callback: function($event) {
                            _vm.$set(
                              _vm.recipeContent,
                              "title",
                              $event.object["text"]
                            )
                          },
                          expression: "recipeContent.title"
                        }
                      }),
                      _c("Label", {
                        staticClass: "fieldLabel",
                        attrs: { top: "0", text: "Title" }
                      })
                    ],
                    1
                  ),
                  _c(
                    "AbsoluteLayout",
                    { staticClass: "inputField" },
                    [
                      _c("TextField", {
                        attrs: {
                          text: _vm.recipeContent.category,
                          editable: "false"
                        },
                        on: {
                          focus: function($event) {
                            _vm.modalOpen === false && _vm.showCategories(true)
                          },
                          tap: function($event) {
                            return _vm.showCategories(false)
                          }
                        }
                      }),
                      _c("Label", {
                        staticClass: "fieldLabel",
                        attrs: { top: "0", text: "Category" }
                      })
                    ],
                    1
                  ),
                  _c(
                    "GridLayout",
                    { attrs: { columns: "*, 8, *" } },
                    [
                      _c(
                        "AbsoluteLayout",
                        { staticClass: "inputField", attrs: { col: "0" } },
                        [
                          _c("TextField", {
                            ref: "yieldQuantity",
                            attrs: { hint: "1", keyboardType: "number" },
                            model: {
                              value: _vm.recipeContent.yield.quantity,
                              callback: function($event) {
                                _vm.$set(
                                  _vm.recipeContent.yield,
                                  "quantity",
                                  $event.object["text"]
                                )
                              },
                              expression: "recipeContent.yield.quantity"
                            }
                          }),
                          _c("Label", {
                            staticClass: "fieldLabel",
                            attrs: { top: "0", text: "Yield quantity" }
                          })
                        ],
                        1
                      ),
                      _c(
                        "AbsoluteLayout",
                        { staticClass: "inputField", attrs: { col: "2" } },
                        [
                          _c("TextField", {
                            attrs: {
                              text: _vm.recipeContent.yield.unit,
                              editable: "false"
                            },
                            on: {
                              focus: function($event) {
                                _vm.modalOpen === false &&
                                  _vm.showYieldUnits(true)
                              },
                              tap: function($event) {
                                return _vm.showYieldUnits(false)
                              }
                            }
                          }),
                          _c("Label", {
                            staticClass: "fieldLabel",
                            attrs: { top: "0", text: "Yield measured in" }
                          })
                        ],
                        1
                      )
                    ],
                    1
                  ),
                  _c(
                    "GridLayout",
                    { attrs: { columns: "*, 8, *" } },
                    [
                      _c(
                        "AbsoluteLayout",
                        { staticClass: "inputField", attrs: { col: "0" } },
                        [
                          _c("TextField", {
                            ref: "timeRequired",
                            attrs: {
                              text: _vm.timeRequired,
                              editable: "false"
                            },
                            on: {
                              focus: function($event) {
                                _vm.modalOpen === false &&
                                  _vm.setTimeRequired(true)
                              },
                              tap: function($event) {
                                return _vm.setTimeRequired(false)
                              }
                            }
                          }),
                          _c("Label", {
                            staticClass: "fieldLabel",
                            attrs: { top: "0", text: "Time required" }
                          })
                        ],
                        1
                      )
                    ],
                    1
                  ),
                  _c("StackLayout", {
                    staticClass: "hr",
                    attrs: { margin: "24 16" }
                  })
                ],
                1
              ),
              _c(
                "StackLayout",
                { attrs: { margin: "0 16" } },
                [
                  _c("Label", {
                    staticClass: "sectionTitle",
                    attrs: { text: "Ingredients" }
                  }),
                  _vm._l(_vm.recipeContent.ingredients, function(
                    ingredient,
                    index
                  ) {
                    return _c(
                      "GridLayout",
                      {
                        key: index,
                        attrs: { columns: "*,8,auto,8,auto,8,auto" }
                      },
                      [
                        _c("TextField", {
                          ref: "ingredient",
                          refInFor: true,
                          attrs: {
                            col: "0",
                            hint: "Item " + (index + 1),
                            returnKeyType: "next"
                          },
                          on: {
                            loaded: function($event) {
                              return _vm.focusField($event, "sentence")
                            }
                          },
                          model: {
                            value: _vm.recipeContent.ingredients[index].item,
                            callback: function($event) {
                              _vm.$set(
                                _vm.recipeContent.ingredients[index],
                                "item",
                                $event.object["text"]
                              )
                            },
                            expression: "recipeContent.ingredients[index].item"
                          }
                        }),
                        _c("TextField", {
                          attrs: {
                            width: "60",
                            col: "2",
                            hint: "1.00",
                            keyboardType: "number",
                            returnKeyType: "next"
                          },
                          model: {
                            value:
                              _vm.recipeContent.ingredients[index].quantity,
                            callback: function($event) {
                              _vm.$set(
                                _vm.recipeContent.ingredients[index],
                                "quantity",
                                $event.object["text"]
                              )
                            },
                            expression:
                              "recipeContent.ingredients[index].quantity"
                          }
                        }),
                        _c("TextField", {
                          attrs: {
                            width: "76",
                            col: "4",
                            hint: "Unit",
                            editable: "false"
                          },
                          on: {
                            focus: function($event) {
                              _vm.modalOpen === false &&
                                _vm.showUnits($event, true, index)
                            },
                            tap: function($event) {
                              return _vm.showUnits($event, false, index)
                            }
                          },
                          model: {
                            value: _vm.recipeContent.ingredients[index].unit,
                            callback: function($event) {
                              _vm.$set(
                                _vm.recipeContent.ingredients[index],
                                "unit",
                                $event.object["text"]
                              )
                            },
                            expression: "recipeContent.ingredients[index].unit"
                          }
                        }),
                        _c("MDButton", {
                          staticClass: "bx closeBtn",
                          attrs: {
                            variant: "text",
                            col: "6",
                            text: _vm.icon.close
                          },
                          on: {
                            tap: function($event) {
                              return _vm.removeIngredient(index)
                            }
                          }
                        })
                      ],
                      1
                    )
                  }),
                  _c("MDButton", {
                    staticClass: "text-btn orkm",
                    attrs: { variant: "text", text: "+ ADD INGREDIENT" },
                    on: {
                      tap: function($event) {
                        return _vm.addIngredient()
                      }
                    }
                  }),
                  _c("StackLayout", {
                    staticClass: "hr",
                    attrs: { margin: "24 16" }
                  })
                ],
                2
              ),
              _c(
                "StackLayout",
                { attrs: { margin: "0 16" } },
                [
                  _c("Label", {
                    staticClass: "sectionTitle",
                    attrs: { text: "Instructions" }
                  }),
                  _vm._l(_vm.recipeContent.instructions, function(
                    instruction,
                    index
                  ) {
                    return _c(
                      "GridLayout",
                      { key: index, attrs: { columns: "*,8,auto" } },
                      [
                        _c("TextView", {
                          attrs: { col: "0", hint: "Step " + (index + 1) },
                          on: {
                            loaded: function($event) {
                              return _vm.focusField($event, "multiLine")
                            }
                          },
                          model: {
                            value: _vm.recipeContent.instructions[index],
                            callback: function($event) {
                              _vm.$set(
                                _vm.recipeContent.instructions,
                                index,
                                $event.object["text"]
                              )
                            },
                            expression: "recipeContent.instructions[index]"
                          }
                        }),
                        _c("MDButton", {
                          staticClass: "bx closeBtn",
                          attrs: {
                            variant: "text",
                            col: "2",
                            text: _vm.icon.close
                          },
                          on: {
                            tap: function($event) {
                              return _vm.removeInstruction(index)
                            }
                          }
                        })
                      ],
                      1
                    )
                  }),
                  _c("MDButton", {
                    staticClass: "text-btn orkm",
                    attrs: { variant: "text", text: "+ ADD STEP" },
                    on: { tap: _vm.addInstruction }
                  }),
                  _c("StackLayout", {
                    staticClass: "hr",
                    attrs: { margin: "24 16" }
                  })
                ],
                2
              ),
              _c(
                "StackLayout",
                { attrs: { margin: "0 16" } },
                [
                  _c("Label", {
                    staticClass: "sectionTitle",
                    attrs: { text: "Combinations" }
                  }),
                  _vm._l(_vm.recipeContent.combinations, function(
                    combination,
                    index
                  ) {
                    return _c(
                      "GridLayout",
                      { key: index, attrs: { columns: "*,8,auto" } },
                      [
                        _c("TextField", {
                          staticClass: "combinationToken",
                          attrs: {
                            col: "0",
                            text: _vm.getCombinationTitle(combination),
                            editable: "false"
                          }
                        }),
                        _c("MDButton", {
                          staticClass: "bx closeBtn",
                          attrs: {
                            variant: "text",
                            col: "2",
                            text: _vm.icon.close
                          },
                          on: {
                            tap: function($event) {
                              return _vm.removeCombination(combination)
                            }
                          }
                        })
                      ],
                      1
                    )
                  }),
                  _c("MDButton", {
                    staticClass: "text-btn orkm",
                    attrs: { variant: "text", text: "+ ADD COMBINATION" },
                    on: { tap: _vm.showCombinations }
                  }),
                  _c("StackLayout", {
                    staticClass: "hr",
                    attrs: { margin: "24 16" }
                  })
                ],
                2
              ),
              _c(
                "StackLayout",
                { attrs: { margin: "0 16" } },
                [
                  _c("Label", {
                    staticClass: "sectionTitle",
                    attrs: { text: "Notes" }
                  }),
                  _vm._l(_vm.recipeContent.notes, function(note, index) {
                    return _c(
                      "GridLayout",
                      { key: index, attrs: { columns: "*,8,auto" } },
                      [
                        _c("TextView", {
                          attrs: { col: "0", hint: "Text or URL" },
                          on: {
                            loaded: function($event) {
                              return _vm.focusField($event, "multiLine")
                            }
                          },
                          model: {
                            value: _vm.recipeContent.notes[index],
                            callback: function($event) {
                              _vm.$set(
                                _vm.recipeContent.notes,
                                index,
                                $event.object["text"]
                              )
                            },
                            expression: "recipeContent.notes[index]"
                          }
                        }),
                        _c("MDButton", {
                          staticClass: "bx closeBtn",
                          attrs: {
                            variant: "text",
                            col: "2",
                            text: _vm.icon.close
                          },
                          on: {
                            tap: function($event) {
                              return _vm.removeNote(index)
                            }
                          }
                        })
                      ],
                      1
                    )
                  }),
                  _c("MDButton", {
                    staticClass: "text-btn orkm",
                    attrs: { variant: "text", text: "+ ADD NOTE" },
                    on: { tap: _vm.addNote }
                  })
                ],
                2
              )
            ],
            1
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "../node_modules/vue-loader/lib/loaders/templateLoader.js?!../node_modules/vue-loader/lib/index.js?!./components/EnRecipes.vue?vue&type=template&id=5150c21e&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "Page",
    { on: { loaded: _vm.onPageLoad } },
    [
      _c(
        "ActionBar",
        { attrs: { androidElevation: _vm.viewIsScrolled ? 4 : 0 } },
        [
          _vm.showSearch
            ? _c(
                "GridLayout",
                { attrs: { columns: "auto, *", verticalAlignment: "center" } },
                [
                  _c("MDButton", {
                    staticClass: "bx",
                    attrs: {
                      text: _vm.icon.back,
                      variant: "text",
                      automationText: "Back",
                      col: "0"
                    },
                    on: { tap: _vm.closeSearch }
                  }),
                  _c("SearchBar", {
                    attrs: { col: "1", hint: "Search" },
                    on: {
                      textChange: _vm.updateFilter,
                      clear: _vm.clearSearch
                    },
                    model: {
                      value: _vm.searchQuery,
                      callback: function($event) {
                        _vm.searchQuery = $event.object["text"]
                      },
                      expression: "searchQuery"
                    }
                  })
                ],
                1
              )
            : _c(
                "GridLayout",
                { attrs: { columns: "auto, *, auto, auto" } },
                [
                  _c("MDButton", {
                    staticClass: "bx",
                    attrs: {
                      col: "0",
                      variant: "text",
                      text: _vm.icon.menu,
                      automationText: "Back"
                    },
                    on: { tap: _vm.showDrawer }
                  }),
                  _c("Label", {
                    staticClass: "title orkm",
                    attrs: { text: _vm.currentComponent, col: "1" }
                  }),
                  _vm.recipes.length
                    ? _c("MDButton", {
                        staticClass: "bx",
                        attrs: {
                          text: _vm.icon.search,
                          variant: "text",
                          col: "2"
                        },
                        on: { tap: _vm.openSearch }
                      })
                    : _vm._e(),
                  _vm.recipes.length
                    ? _c("MDButton", {
                        staticClass: "bx",
                        attrs: {
                          text: _vm.icon.sort,
                          variant: "text",
                          col: "3"
                        },
                        on: { tap: _vm.sortDialog }
                      })
                    : _vm._e()
                ],
                1
              )
        ],
        1
      ),
      _c(
        "AbsoluteLayout",
        [
          _c(
            "RadListView",
            {
              ref: "listView",
              attrs: {
                itemHeight: "112",
                swipeActions: "true",
                filteringFunction: _vm.filterFunction,
                sortingFunction: _vm.sortFunction,
                items: _vm.recipes,
                "+alias": "recipe"
              },
              on: {
                itemSwipeProgressChanged: _vm.onSwiping,
                itemSwipeProgressEnded: _vm.onSwipeEnded,
                scrolled: _vm.onScroll
              }
            },
            [
              _c("v-template", {
                scopedSlots: _vm._u([
                  {
                    key: "default",
                    fn: function(ref) {
                      var recipe = ref.recipe
                      var $index = ref.$index
                      var $even = ref.$even
                      var $odd = ref.$odd
                      return _c(
                        "GridLayout",
                        {
                          staticClass: "recipeItem",
                          attrs: {
                            rows: "112",
                            columns: "112, *",
                            androidElevation: "1"
                          }
                        },
                        [
                          _c("MDRipple", {
                            attrs: { colSpan: "2" },
                            on: {
                              tap: function($event) {
                                return _vm.viewRecipe(recipe.id)
                              }
                            }
                          }),
                          _c(
                            "GridLayout",
                            {
                              staticClass: "imageHolder card",
                              attrs: { rows: "112", columns: "112" }
                            },
                            [
                              recipe.imageSrc
                                ? _c("Image", {
                                    attrs: {
                                      row: "0",
                                      col: "0",
                                      src: recipe.imageSrc,
                                      stretch: "aspectFill",
                                      decodeWidth: "112",
                                      decodeHeight: "112",
                                      loadMode: "async"
                                    }
                                  })
                                : _c("Label", {
                                    staticClass: "bx",
                                    attrs: {
                                      row: "0",
                                      col: "0",
                                      horizontalAlignment: "center",
                                      fontSize: "56",
                                      text: _vm.icon.image
                                    }
                                  })
                            ],
                            1
                          ),
                          _c(
                            "StackLayout",
                            { staticClass: "recipeInfo", attrs: { col: "1" } },
                            [
                              _c("Label", {
                                staticClass: "orkm category",
                                attrs: { text: recipe.category }
                              }),
                              _c("Label", {
                                staticClass: "orkm title",
                                attrs: { text: recipe.title }
                              }),
                              _c(
                                "StackLayout",
                                {
                                  staticClass: "timeContainer",
                                  attrs: { orientation: "horizontal" }
                                },
                                [
                                  _c("Label", {
                                    staticClass: "bx small",
                                    attrs: { text: _vm.icon.time }
                                  }),
                                  _c("Label", {
                                    staticClass: "time",
                                    attrs: {
                                      text:
                                        "" +
                                        _vm.formattedTime(recipe.timeRequired)
                                          .time
                                    }
                                  })
                                ],
                                1
                              )
                            ],
                            1
                          )
                        ],
                        1
                      )
                    }
                  }
                ])
              }),
              _c("v-template", {
                attrs: { name: "itemswipe" },
                scopedSlots: _vm._u([
                  {
                    key: "default",
                    fn: function(ref) {
                      var recipe = ref.recipe
                      var $index = ref.$index
                      var $even = ref.$even
                      var $odd = ref.$odd
                      return _c(
                        "GridLayout",
                        { attrs: { columns: "*, auto" } },
                        [
                          _c(
                            "StackLayout",
                            {
                              staticClass: "swipe-item right",
                              attrs: { id: "delete-action", col: "1" }
                            },
                            [
                              _c("Label", {
                                staticClass: "bx",
                                attrs: {
                                  padding: "8 0 0 6",
                                  text: _vm.icon.trash
                                }
                              })
                            ],
                            1
                          )
                        ],
                        1
                      )
                    }
                  }
                ])
              }),
              _c("v-template", {
                attrs: { name: "footer" },
                scopedSlots: _vm._u([
                  {
                    key: "default",
                    fn: function(ref) {
                      var recipe = ref.recipe
                      var $index = ref.$index
                      var $even = ref.$even
                      var $odd = ref.$odd
                      return _c("StackLayout", { attrs: { height: "80" } })
                    }
                  }
                ])
              })
            ],
            1
          ),
          _c(
            "GridLayout",
            {
              staticClass: "emptyStateContainer",
              attrs: { rows: "*, auto, *, 88", columns: "*" }
            },
            [
              !_vm.recipes.length &&
              !_vm.filterFavorites &&
              !_vm.filterTrylater &&
              !_vm.selectedCategory
                ? _c(
                    "StackLayout",
                    {
                      staticClass: "emptyState",
                      attrs: { row: "1" },
                      on: { tap: _vm.addRecipe }
                    },
                    [
                      _c("Label", {
                        staticClass: "bx icon",
                        attrs: { text: _vm.icon.plusCircle }
                      }),
                      _c("Label", {
                        staticClass: "title orkm",
                        attrs: {
                          text: "Start adding your recipes!",
                          textWrap: "true"
                        }
                      }),
                      _c(
                        "StackLayout",
                        {
                          attrs: {
                            orientation: "horizontal",
                            horizontalAlignment: "center"
                          }
                        },
                        [
                          _c("Label", { attrs: { text: "Use the " } }),
                          _c("Label", {
                            staticClass: "bx",
                            attrs: { text: _vm.icon.plus }
                          }),
                          _c("Label", { attrs: { text: " button to add one" } })
                        ],
                        1
                      )
                    ],
                    1
                  )
                : _vm._e(),
              !_vm.filteredRecipes.length &&
              _vm.filterTrylater &&
              !_vm.searchQuery
                ? _c(
                    "StackLayout",
                    { staticClass: "emptyState", attrs: { row: "1" } },
                    [
                      _c("Label", {
                        staticClass: "bx icon",
                        attrs: {
                          text: _vm.icon.trylaterOutline,
                          textWrap: "true"
                        }
                      }),
                      _c("Label", {
                        staticClass: "title orkm",
                        attrs: { text: "All done!", textWrap: "true" }
                      }),
                      _c("Label", {
                        attrs: {
                          text:
                            "Recipes you mark as try later will be listed here",
                          textWrap: "true"
                        }
                      })
                    ],
                    1
                  )
                : _vm._e(),
              !_vm.filteredRecipes.length &&
              _vm.filterFavorites &&
              !_vm.searchQuery
                ? _c(
                    "StackLayout",
                    { staticClass: "emptyState", attrs: { row: "1" } },
                    [
                      _c("Label", {
                        staticClass: "bx icon",
                        attrs: { text: _vm.icon.heartOutline, textWrap: "true" }
                      }),
                      _c("Label", {
                        staticClass: "title orkm",
                        attrs: { text: "No favorites yet", textWrap: "true" }
                      }),
                      _c("Label", {
                        attrs: {
                          text:
                            "Recipes you mark as favorite will be listed here",
                          textWrap: "true"
                        }
                      })
                    ],
                    1
                  )
                : _vm._e(),
              !_vm.filteredRecipes.length &&
              !_vm.searchQuery &&
              _vm.selectedCategory
                ? _c(
                    "StackLayout",
                    { staticClass: "emptyState", attrs: { row: "1" } },
                    [
                      _c("Label", {
                        staticClass: "bx icon",
                        attrs: { text: _vm.icon.labelOutline, textWrap: "true" }
                      }),
                      _c("Label", {
                        staticClass: "title orkm",
                        attrs: {
                          text: "Category looks empty",
                          textWrap: "true"
                        }
                      }),
                      _c(
                        "StackLayout",
                        {
                          attrs: {
                            orientation: "horizontal",
                            horizontalAlignment: "center"
                          }
                        },
                        [
                          _c("Label", {
                            attrs: { text: "Use the ", textWrap: "true" }
                          }),
                          _c("Label", {
                            staticClass: "bx",
                            attrs: { text: _vm.icon.plus }
                          }),
                          _c("Label", {
                            attrs: {
                              text: " button to add a recipe",
                              textWrap: "true"
                            }
                          })
                        ],
                        1
                      )
                    ],
                    1
                  )
                : _vm._e(),
              !_vm.filteredRecipes.length && _vm.searchQuery
                ? _c(
                    "StackLayout",
                    { staticClass: "emptyState", attrs: { row: "1" } },
                    [
                      _c("Label", {
                        staticClass: "bx icon",
                        attrs: { text: _vm.icon.search, textWrap: "true" }
                      }),
                      _c("Label", {
                        staticClass: "title orkm",
                        attrs: { text: "No recipes found", textWrap: "true" }
                      }),
                      _c("Label", {
                        attrs: {
                          text:
                            'Your search "' +
                            _vm.searchQuery +
                            '" did not match any recipes' +
                            _vm.noResultFor,
                          textWrap: "true"
                        }
                      })
                    ],
                    1
                  )
                : _vm._e()
            ],
            1
          ),
          _c(
            "GridLayout",
            {
              attrs: {
                id: "btnFabContainer",
                rows: "*, auto",
                columns: "*, auto"
              }
            },
            [
              _c(
                "transition",
                { attrs: { name: "bounce" } },
                [
                  _vm.showFAB
                    ? _c("MDFloatingActionButton", {
                        staticClass: "bx fab-button",
                        attrs: { row: "1", col: "1", src: "res://plus" },
                        on: { tap: _vm.addRecipe }
                      })
                    : _vm._e()
                ],
                1
              )
            ],
            1
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "../node_modules/vue-loader/lib/loaders/templateLoader.js?!../node_modules/vue-loader/lib/index.js?!./components/MealPlanner.vue?vue&type=template&id=ed5c11f8&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "Page",
    { on: { loaded: _vm.onPageLoad } },
    [
      _c(
        "ActionBar",
        { attrs: { flat: "true" } },
        [
          _c(
            "GridLayout",
            { attrs: { rows: "*", columns: "auto, *, auto" } },
            [
              _c("MDButton", {
                staticClass: "bx left",
                attrs: {
                  variant: "text",
                  text: _vm.icon.menu,
                  automationText: "Back",
                  col: "0"
                },
                on: { tap: _vm.showDrawer }
              }),
              _c("Label", {
                staticClass: "title orkm",
                attrs: { text: "Meal Planner", col: "1" }
              }),
              _c("MDButton", {
                staticClass: "bx left",
                attrs: {
                  variant: "text",
                  text: _vm.icon.today,
                  automationText: "today",
                  col: "2"
                },
                on: { tap: _vm.goToToday }
              })
            ],
            1
          )
        ],
        1
      ),
      _c(
        "GridLayout",
        { attrs: { rows: "280, *" } },
        [
          _c("RadCalendar", {
            ref: "calendar",
            staticClass: "orkm",
            attrs: {
              androidElevation: _vm.viewIsScrolled ? 4 : 0,
              row: "0",
              locale: "en-US",
              viewMode: _vm.viewMode,
              transitionMode: _vm.transitionMode,
              selectionMode: _vm.selectionMode,
              eventsViewMode: _vm.eventsViewMode,
              eventSource: _vm.getMealPlans
            },
            on: { loaded: _vm.onCalendarLoad, dateSelected: _vm.onDateSelected }
          }),
          _c(
            "ScrollView",
            {
              attrs: { row: "1", width: "100%", height: "100%" },
              on: { scroll: _vm.onScroll }
            },
            [
              _c(
                "StackLayout",
                { staticClass: "dayPlan" },
                _vm._l(_vm.mealTimes, function(mealType, index) {
                  return _c(
                    "StackLayout",
                    {
                      key: "mealType" + index,
                      staticClass: "plansContainer",
                      class: mealType
                    },
                    [
                      _c(
                        "GridLayout",
                        {
                          staticClass: "header",
                          attrs: { columns: "*, auto" }
                        },
                        [
                          _c("Label", {
                            staticClass: "periodLabel orkm",
                            attrs: { col: "0", text: mealType }
                          }),
                          _c("MDButton", {
                            staticClass: "bx addMeal",
                            attrs: {
                              col: "1",
                              variant: "text",
                              text: _vm.icon.plus
                            },
                            on: {
                              tap: function($event) {
                                return _vm.addRecipe(mealType)
                              }
                            }
                          })
                        ],
                        1
                      ),
                      _vm._l(_vm.getRecipes[mealType], function(
                        recipeID,
                        index
                      ) {
                        return _c(
                          "GridLayout",
                          {
                            key: mealType + index,
                            staticClass: "recipes",
                            attrs: { columns: "*, auto" }
                          },
                          [
                            _c("MDRipple", {
                              on: {
                                tap: function($event) {
                                  return _vm.viewRecipe(recipeID)
                                }
                              }
                            }),
                            _c("Label", {
                              staticClass: "recipeTitle",
                              attrs: {
                                verticalAlignment: "center",
                                col: "0",
                                text: _vm.getRecipeTitle(recipeID),
                                textWrap: "true"
                              }
                            }),
                            _c("MDButton", {
                              staticClass: "bx closeBtn",
                              attrs: {
                                variant: "text",
                                col: "1",
                                text: _vm.icon.close
                              },
                              on: {
                                tap: function($event) {
                                  return _vm.removeRecipe(mealType, recipeID)
                                }
                              }
                            })
                          ],
                          1
                        )
                      })
                    ],
                    2
                  )
                }),
                1
              )
            ],
            1
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "../node_modules/vue-loader/lib/loaders/templateLoader.js?!../node_modules/vue-loader/lib/index.js?!./components/Settings.vue?vue&type=template&id=6c938a04&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "Page",
    { on: { loaded: _vm.onPageLoad } },
    [
      _c(
        "ActionBar",
        { attrs: { androidElevation: _vm.viewIsScrolled ? 4 : 0 } },
        [
          _c(
            "GridLayout",
            { attrs: { rows: "*", columns: "auto, *" } },
            [
              _c("MDButton", {
                staticClass: "bx left",
                attrs: {
                  variant: "text",
                  text: _vm.icon.menu,
                  automationText: "Back",
                  col: "0"
                },
                on: { tap: _vm.showDrawer }
              }),
              _c("Label", {
                staticClass: "title orkm",
                attrs: { text: "Settings", col: "1" }
              })
            ],
            1
          )
        ],
        1
      ),
      _c(
        "ScrollView",
        { on: { scroll: _vm.onScroll } },
        [
          _c(
            "StackLayout",
            { staticClass: "main-container" },
            [
              _c("Label", {
                staticClass: "group-header orkm",
                attrs: { text: "Interface" }
              }),
              _c(
                "GridLayout",
                { staticClass: "option", attrs: { columns: "auto, *" } },
                [
                  _c("MDRipple", {
                    attrs: { colSpan: "2" },
                    on: { tap: _vm.selectThemes }
                  }),
                  _c("Label", {
                    staticClass: "bx",
                    attrs: {
                      col: "0",
                      verticalAlignment: "center",
                      text: _vm.icon.theme
                    }
                  }),
                  _c(
                    "StackLayout",
                    { attrs: { col: "1" } },
                    [
                      _c("Label", { attrs: { text: "Theme" } }),
                      _c("Label", {
                        staticClass: "info",
                        attrs: { text: _vm.appTheme }
                      })
                    ],
                    1
                  )
                ],
                1
              ),
              _c("StackLayout", { staticClass: "hr m-10" }),
              _c("Label", {
                staticClass: "group-header orkm",
                attrs: { text: "Database" }
              }),
              _c(
                "GridLayout",
                { staticClass: "option", attrs: { columns: "auto, *" } },
                [
                  _c("MDRipple", {
                    attrs: { colSpan: "2" },
                    on: { tap: _vm.exportCheck }
                  }),
                  _c("Label", {
                    staticClass: "bx",
                    attrs: { col: "0", text: _vm.icon.export }
                  }),
                  _c(
                    "StackLayout",
                    { attrs: { col: "1" } },
                    [
                      _c("Label", { attrs: { text: "Export a full backup" } }),
                      !_vm.backupInProgress
                        ? _c("Label", {
                            staticClass: "info",
                            attrs: {
                              text:
                                "Generates a zip file that contains all your data. This file can be imported back.",
                              textWrap: "true"
                            }
                          })
                        : _c(
                            "GridLayout",
                            {
                              staticClass: "progressContainer",
                              attrs: { columns: "*, 64" }
                            },
                            [
                              _c("MDProgress", {
                                attrs: {
                                  col: "0",
                                  value: _vm.backupProgress,
                                  maxValue: "100"
                                }
                              }),
                              _c("Label", {
                                attrs: {
                                  col: "1",
                                  text: "  " + _vm.backupProgress + "%"
                                }
                              })
                            ],
                            1
                          )
                    ],
                    1
                  )
                ],
                1
              ),
              _c(
                "GridLayout",
                { staticClass: "option", attrs: { columns: "auto, *" } },
                [
                  _c("MDRipple", {
                    attrs: { colSpan: "2" },
                    on: { tap: _vm.importCheck }
                  }),
                  _c("Label", {
                    staticClass: "bx",
                    attrs: { col: "0", text: _vm.icon.import }
                  }),
                  _c(
                    "StackLayout",
                    { attrs: { col: "1" } },
                    [
                      _c("Label", { attrs: { text: "Import from backup" } }),
                      _c("Label", {
                        staticClass: "info",
                        attrs: {
                          text: "Supports full backups exported by this app",
                          textWrap: "true"
                        }
                      })
                    ],
                    1
                  )
                ],
                1
              )
            ],
            1
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "../node_modules/vue-loader/lib/loaders/templateLoader.js?!../node_modules/vue-loader/lib/index.js?!./components/ViewRecipe.vue?vue&type=template&id=760a8eae&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "Page",
    { on: { loaded: _vm.onPageLoad, unloaded: _vm.onPageUnload } },
    [
      _c(
        "ActionBar",
        { attrs: { flat: "true" } },
        [
          _c(
            "GridLayout",
            { attrs: { rows: "48", columns: "auto, *, auto" } },
            [
              _c("MDButton", {
                staticClass: "bx",
                attrs: {
                  variant: "text",
                  row: "0",
                  col: "0",
                  text: _vm.icon.back,
                  automationText: "Back"
                },
                on: {
                  tap: function($event) {
                    return _vm.$navigateBack()
                  }
                }
              }),
              _c(
                "FlexboxLayout",
                { attrs: { row: "0", col: "2", alignItems: "center" } },
                [
                  !_vm.filterTrylater
                    ? _c("MDButton", {
                        staticClass: "bx",
                        attrs: {
                          variant: "text",
                          text: _vm.recipe.tried
                            ? _vm.icon.trylaterOutline
                            : _vm.icon.trylater
                        },
                        on: { tap: _vm.toggleTrylater }
                      })
                    : _c("MDButton", {
                        staticClass: "bx",
                        attrs: { variant: "text", text: _vm.icon.check },
                        on: { tap: _vm.recipeTried }
                      }),
                  _c("MDButton", {
                    staticClass: "bx",
                    attrs: {
                      variant: "text",
                      text: _vm.recipe.isFavorite
                        ? _vm.icon.heart
                        : _vm.icon.heartOutline
                    },
                    on: { tap: _vm.toggleFavorite }
                  }),
                  !_vm.busy
                    ? _c("MDButton", {
                        staticClass: "bx",
                        attrs: { variant: "text", text: _vm.icon.edit },
                        on: { tap: _vm.editRecipe }
                      })
                    : _c("MDActivityIndicator", { attrs: { busy: _vm.busy } })
                ],
                1
              )
            ],
            1
          )
        ],
        1
      ),
      _c(
        "AbsoluteLayout",
        [
          _c(
            "Tabs",
            {
              staticClass: "viewRecipe",
              attrs: {
                width: "100%",
                height: "100%",
                selectedIndex: _vm.selectedTabIndex
              },
              on: { selectedIndexChange: _vm.selectedIndexChange }
            },
            [
              _c(
                "TabStrip",
                { attrs: { androidElevation: _vm.viewIsScrolled ? 4 : 0 } },
                [
                  _c(
                    "TabStripItem",
                    [_c("Label", { attrs: { text: "Overview" } })],
                    1
                  ),
                  _c(
                    "TabStripItem",
                    [_c("Label", { attrs: { text: "Ingredients" } })],
                    1
                  ),
                  _c(
                    "TabStripItem",
                    [_c("Label", { attrs: { text: "Instructions" } })],
                    1
                  ),
                  _c(
                    "TabStripItem",
                    [_c("Label", { attrs: { text: "Combinations" } })],
                    1
                  ),
                  _c(
                    "TabStripItem",
                    [_c("Label", { attrs: { text: "Notes" } })],
                    1
                  )
                ],
                1
              ),
              _c(
                "TabContentItem",
                [
                  _c(
                    "ScrollView",
                    { on: { scroll: _vm.onScroll } },
                    [
                      _c(
                        "StackLayout",
                        [
                          _c(
                            "StackLayout",
                            {
                              staticClass: "imageHolder",
                              attrs: {
                                width: "100%",
                                height: _vm.screenWidth,
                                verticalAlignment: "center"
                              }
                            },
                            [
                              _vm.recipe.imageSrc
                                ? _c("Image", {
                                    attrs: {
                                      src: _vm.recipe.imageSrc,
                                      stretch: "aspectFill",
                                      width: "100%",
                                      height: _vm.screenWidth
                                    }
                                  })
                                : _c("Label", {
                                    staticClass: "bx",
                                    attrs: {
                                      horizontalAlignment: "center",
                                      fontSize: "160",
                                      text: _vm.icon.image
                                    }
                                  })
                            ],
                            1
                          ),
                          _c(
                            "StackLayout",
                            { attrs: { margin: "16 8 80" } },
                            [
                              _c("Label", {
                                staticClass: "category orkm",
                                attrs: { text: _vm.recipe.category }
                              }),
                              _c("Label", {
                                staticClass: "title orkm",
                                attrs: {
                                  margin: "0 8",
                                  text: _vm.recipe.title,
                                  textWrap: "true"
                                }
                              }),
                              _c(
                                "StackLayout",
                                {
                                  staticClass: "time",
                                  attrs: { orientation: "horizontal" }
                                },
                                [
                                  _c("Label", {
                                    attrs: { text: "Time required:" }
                                  }),
                                  _c("Label", {
                                    attrs: {
                                      text:
                                        " " +
                                        _vm.formattedTime(
                                          _vm.recipe.timeRequired
                                        )
                                    }
                                  })
                                ],
                                1
                              ),
                              _c(
                                "GridLayout",
                                {
                                  staticClass: "overviewContainer",
                                  attrs: { rows: "auto, auto", columns: "*, *" }
                                },
                                [
                                  _c(
                                    "GridLayout",
                                    {
                                      staticClass: "overviewItem",
                                      attrs: {
                                        row: "0",
                                        col: "0",
                                        rows: "auto, auto",
                                        columns: "*"
                                      }
                                    },
                                    [
                                      _c("MDRipple", {
                                        attrs: { rowSpan: "2" },
                                        on: {
                                          tap: function($event) {
                                            _vm.selectedTabIndex = 1
                                          }
                                        }
                                      }),
                                      _c("Label", {
                                        staticClass: "bx",
                                        attrs: { row: "0", text: _vm.icon.item }
                                      }),
                                      _c("Label", {
                                        staticClass: "itemCount",
                                        attrs: {
                                          row: "1",
                                          text:
                                            _vm.recipe.ingredients.length +
                                            " " +
                                            (_vm.recipe.ingredients.length == 1
                                              ? "Ingredient"
                                              : "Ingredients"),
                                          textWrap: "true"
                                        }
                                      })
                                    ],
                                    1
                                  ),
                                  _c(
                                    "GridLayout",
                                    {
                                      staticClass: "overviewItem",
                                      attrs: {
                                        row: "0",
                                        col: "1",
                                        rows: "auto, auto",
                                        columns: "*"
                                      }
                                    },
                                    [
                                      _c("MDRipple", {
                                        attrs: { rowSpan: "2" },
                                        on: {
                                          tap: function($event) {
                                            _vm.selectedTabIndex = 2
                                          }
                                        }
                                      }),
                                      _c("Label", {
                                        staticClass: "bx",
                                        attrs: { row: "0", text: _vm.icon.step }
                                      }),
                                      _c("Label", {
                                        staticClass: "itemCount",
                                        attrs: {
                                          row: "1",
                                          text:
                                            _vm.recipe.instructions.length +
                                            " " +
                                            (_vm.recipe.instructions.length == 1
                                              ? "Instruction"
                                              : "Instructions"),
                                          textWrap: "true"
                                        }
                                      })
                                    ],
                                    1
                                  ),
                                  _c(
                                    "GridLayout",
                                    {
                                      staticClass: "overviewItem",
                                      attrs: {
                                        row: "1",
                                        col: "0",
                                        rows: "auto, auto",
                                        columns: "*"
                                      }
                                    },
                                    [
                                      _c("MDRipple", {
                                        attrs: { rowSpan: "2" },
                                        on: {
                                          tap: function($event) {
                                            _vm.selectedTabIndex = 3
                                          }
                                        }
                                      }),
                                      _c("Label", {
                                        staticClass: "bx",
                                        attrs: {
                                          row: "0",
                                          text: _vm.icon.outline
                                        }
                                      }),
                                      _c("Label", {
                                        staticClass: "itemCount",
                                        attrs: {
                                          row: "1",
                                          text:
                                            _vm.recipe.combinations.length +
                                            " " +
                                            (_vm.recipe.combinations.length == 1
                                              ? "Combination"
                                              : "Combinations"),
                                          textWrap: "true"
                                        }
                                      })
                                    ],
                                    1
                                  ),
                                  _c(
                                    "GridLayout",
                                    {
                                      staticClass: "overviewItem",
                                      attrs: {
                                        row: "1",
                                        col: "1",
                                        rows: "auto, auto",
                                        columns: "*"
                                      }
                                    },
                                    [
                                      _c("MDRipple", {
                                        attrs: { rowSpan: "2" },
                                        on: {
                                          tap: function($event) {
                                            _vm.selectedTabIndex = 4
                                          }
                                        }
                                      }),
                                      _c("Label", {
                                        staticClass: "bx",
                                        attrs: { row: "0", text: _vm.icon.note }
                                      }),
                                      _c("Label", {
                                        staticClass: "itemCount",
                                        attrs: {
                                          row: "1",
                                          text:
                                            _vm.recipe.notes.length +
                                            " " +
                                            (_vm.recipe.notes.length == 1
                                              ? "Note"
                                              : "Notes"),
                                          textWrap: "true"
                                        }
                                      })
                                    ],
                                    1
                                  )
                                ],
                                1
                              )
                            ],
                            1
                          )
                        ],
                        1
                      )
                    ],
                    1
                  )
                ],
                1
              ),
              _c(
                "TabContentItem",
                [
                  _c(
                    "ScrollView",
                    { on: { scroll: _vm.onScroll } },
                    [
                      !_vm.recipe.ingredients.length
                        ? _c(
                            "GridLayout",
                            {
                              staticClass: "emptyStateContainer",
                              attrs: { rows: "*, auto, *, 88", columns: "*" }
                            },
                            [
                              _c(
                                "StackLayout",
                                {
                                  staticClass: "emptyState",
                                  attrs: { col: "0", row: "1" }
                                },
                                [
                                  _c("Label", {
                                    staticClass: "bx icon",
                                    attrs: {
                                      text: _vm.icon.item,
                                      textWrap: "true"
                                    }
                                  }),
                                  _c(
                                    "StackLayout",
                                    {
                                      staticClass: "title orkm",
                                      attrs: { orientation: "horizontal" }
                                    },
                                    [
                                      _c("Label", {
                                        attrs: { text: "Use the " }
                                      }),
                                      _c("Label", {
                                        staticClass: "bx",
                                        attrs: { text: _vm.icon.edit }
                                      }),
                                      _c("Label", {
                                        attrs: { text: " button" }
                                      })
                                    ],
                                    1
                                  ),
                                  _c("Label", {
                                    attrs: {
                                      text: "to add some ingredients",
                                      textWrap: "true"
                                    }
                                  })
                                ],
                                1
                              )
                            ],
                            1
                          )
                        : _c(
                            "StackLayout",
                            { attrs: { padding: "24 16 72" } },
                            [
                              _c(
                                "AbsoluteLayout",
                                { staticClass: "inputField" },
                                [
                                  _c("TextField", {
                                    attrs: {
                                      width: "50%",
                                      keyboardType: "number"
                                    },
                                    model: {
                                      value: _vm.yieldMultiplier,
                                      callback: function($event) {
                                        _vm.yieldMultiplier =
                                          $event.object["text"]
                                      },
                                      expression: "yieldMultiplier"
                                    }
                                  }),
                                  _c("Label", {
                                    staticClass: "fieldLabel",
                                    attrs: {
                                      top: "0",
                                      text:
                                        "Required " +
                                        _vm.recipe.yield.unit.toLowerCase()
                                    }
                                  })
                                ],
                                1
                              ),
                              _c(
                                "StackLayout",
                                { attrs: { margin: "16 0" } },
                                [
                                  _c("Label", {
                                    staticClass: "title orkm",
                                    attrs: {
                                      text:
                                        "Ingredients for " +
                                        _vm.positiveYieldMultiplier +
                                        " " +
                                        _vm.recipe.yield.unit.toLowerCase(),
                                      textWrap: "true"
                                    }
                                  })
                                ],
                                1
                              ),
                              _vm._l(_vm.recipe.ingredients, function(
                                item,
                                index
                              ) {
                                return _c(
                                  "StackLayout",
                                  { key: index },
                                  [
                                    _c("check-box", {
                                      staticClass: "ingredient",
                                      attrs: {
                                        checkPadding: "16",
                                        fillColor: "#ff5200",
                                        text:
                                          "" +
                                          (_vm.roundedQuantity(item.quantity)
                                            ? _vm.roundedQuantity(
                                                item.quantity
                                              ) + " "
                                            : "") +
                                          (_vm.roundedQuantity(item.quantity)
                                            ? item.unit + " "
                                            : "") +
                                          item.item
                                      }
                                    })
                                  ],
                                  1
                                )
                              })
                            ],
                            2
                          )
                    ],
                    1
                  )
                ],
                1
              ),
              _c(
                "TabContentItem",
                [
                  _c(
                    "ScrollView",
                    { on: { scroll: _vm.onScroll } },
                    [
                      !_vm.recipe.instructions.length
                        ? _c(
                            "GridLayout",
                            {
                              staticClass: "emptyStateContainer",
                              attrs: { rows: "*, auto, *, 88", columns: "*" }
                            },
                            [
                              _c(
                                "StackLayout",
                                {
                                  staticClass: "emptyState",
                                  attrs: { col: "0", row: "1" }
                                },
                                [
                                  _c("Label", {
                                    staticClass: "bx icon",
                                    attrs: {
                                      text: _vm.icon.step,
                                      textWrap: "true"
                                    }
                                  }),
                                  _c(
                                    "StackLayout",
                                    {
                                      staticClass: "title orkm",
                                      attrs: { orientation: "horizontal" }
                                    },
                                    [
                                      _c("Label", {
                                        attrs: { text: "Use the " }
                                      }),
                                      _c("Label", {
                                        staticClass: "bx",
                                        attrs: { text: _vm.icon.edit }
                                      }),
                                      _c("Label", {
                                        attrs: { text: " button" }
                                      })
                                    ],
                                    1
                                  ),
                                  _c("Label", {
                                    attrs: {
                                      text: "to add some instructions",
                                      textWrap: "true"
                                    }
                                  })
                                ],
                                1
                              )
                            ],
                            1
                          )
                        : _c(
                            "StackLayout",
                            { attrs: { padding: "28 16 62" } },
                            _vm._l(_vm.recipe.instructions, function(
                              instruction,
                              index
                            ) {
                              return _c(
                                "GridLayout",
                                { key: index, attrs: { columns: "auto ,*" } },
                                [
                                  _c("Label", {
                                    staticClass: "instruction",
                                    class: {
                                      noBorder:
                                        index ===
                                        _vm.recipe.instructions.length - 1
                                    },
                                    attrs: {
                                      col: "0",
                                      colSpan: "2",
                                      text: instruction,
                                      textWrap: "true"
                                    }
                                  }),
                                  _c("Label", {
                                    staticClass: "count orkm",
                                    attrs: {
                                      verticalAlignment: "top",
                                      horizontalAlignment: "center",
                                      col: "0",
                                      text: index + 1
                                    }
                                  })
                                ],
                                1
                              )
                            }),
                            1
                          )
                    ],
                    1
                  )
                ],
                1
              ),
              _c(
                "TabContentItem",
                [
                  _c(
                    "ScrollView",
                    { on: { scroll: _vm.onScroll } },
                    [
                      !_vm.recipe.combinations.length
                        ? _c(
                            "GridLayout",
                            {
                              staticClass: "emptyStateContainer",
                              attrs: { rows: "*, auto, *, 88", columns: "*" }
                            },
                            [
                              _c(
                                "StackLayout",
                                {
                                  staticClass: "emptyState",
                                  attrs: { col: "0", row: "1" }
                                },
                                [
                                  _c("Label", {
                                    staticClass: "bx icon",
                                    attrs: {
                                      text: _vm.icon.outline,
                                      textWrap: "true"
                                    }
                                  }),
                                  _c(
                                    "StackLayout",
                                    {
                                      staticClass: "title orkm",
                                      attrs: { orientation: "horizontal" }
                                    },
                                    [
                                      _c("Label", {
                                        attrs: { text: "Use the " }
                                      }),
                                      _c("Label", {
                                        staticClass: "bx",
                                        attrs: { text: _vm.icon.edit }
                                      }),
                                      _c("Label", {
                                        attrs: { text: " button" }
                                      })
                                    ],
                                    1
                                  ),
                                  _c("Label", {
                                    attrs: {
                                      text: "to add some combinations",
                                      textWrap: "true"
                                    }
                                  })
                                ],
                                1
                              )
                            ],
                            1
                          )
                        : _c(
                            "StackLayout",
                            { attrs: { padding: "8 0 80" } },
                            _vm._l(_vm.recipe.combinations, function(
                              combination,
                              index
                            ) {
                              return _c(
                                "GridLayout",
                                {
                                  key: index,
                                  staticClass: "urlCard",
                                  attrs: {
                                    columns: "auto, *",
                                    androidElevation: "1"
                                  }
                                },
                                [
                                  _c("MDRipple", {
                                    attrs: { colSpan: "2" },
                                    on: {
                                      tap: function($event) {
                                        return _vm.viewCombination(combination)
                                      }
                                    }
                                  }),
                                  _c("Label", {
                                    staticClass: "bx linkIcon",
                                    attrs: { col: "0", text: _vm.icon.food }
                                  }),
                                  _c("Label", {
                                    staticClass: "link",
                                    attrs: {
                                      col: "1",
                                      verticalAlignment: "center",
                                      text: _vm.getCombinationTitle(
                                        combination
                                      ),
                                      textWrap: "true"
                                    }
                                  })
                                ],
                                1
                              )
                            }),
                            1
                          )
                    ],
                    1
                  )
                ],
                1
              ),
              _c(
                "TabContentItem",
                [
                  _c(
                    "ScrollView",
                    { on: { scroll: _vm.onScroll } },
                    [
                      !_vm.recipe.notes.length
                        ? _c(
                            "GridLayout",
                            {
                              staticClass: "emptyStateContainer",
                              attrs: { rows: "*, auto, *, 88", columns: "*" }
                            },
                            [
                              _c(
                                "StackLayout",
                                {
                                  staticClass: "emptyState",
                                  attrs: { col: "0", row: "1" }
                                },
                                [
                                  _c("Label", {
                                    staticClass: "bx icon",
                                    attrs: {
                                      text: _vm.icon.note,
                                      textWrap: "true"
                                    }
                                  }),
                                  _c(
                                    "StackLayout",
                                    {
                                      staticClass: "title orkm",
                                      attrs: { orientation: "horizontal" }
                                    },
                                    [
                                      _c("Label", {
                                        attrs: { text: "Use the " }
                                      }),
                                      _c("Label", {
                                        staticClass: "bx",
                                        attrs: { text: _vm.icon.edit }
                                      }),
                                      _c("Label", {
                                        attrs: { text: " button" }
                                      })
                                    ],
                                    1
                                  ),
                                  _c("Label", {
                                    attrs: {
                                      text: "to add some notes",
                                      textWrap: "true"
                                    }
                                  })
                                ],
                                1
                              )
                            ],
                            1
                          )
                        : _c(
                            "StackLayout",
                            { attrs: { padding: "8 0 80" } },
                            _vm._l(_vm.recipe.notes, function(note, index) {
                              return _c(
                                "StackLayout",
                                { key: index },
                                [
                                  _vm.isValidURL(note)
                                    ? _c(
                                        "GridLayout",
                                        {
                                          staticClass: "urlCard",
                                          attrs: {
                                            columns: "auto, *",
                                            androidElevation: "1"
                                          }
                                        },
                                        [
                                          _c("MDRipple", {
                                            attrs: { colSpan: "2" },
                                            on: {
                                              longPress: function($event) {
                                                return _vm.copyURL(note)
                                              },
                                              tap: function($event) {
                                                return _vm.openURL(note)
                                              }
                                            }
                                          }),
                                          _c("Label", {
                                            staticClass: "bx linkIcon",
                                            attrs: {
                                              col: "0",
                                              text: _vm.icon.source
                                            }
                                          }),
                                          _c("Label", {
                                            staticClass: "link",
                                            attrs: {
                                              col: "1",
                                              verticalAlignment: "center",
                                              text: note,
                                              textWrap: "false"
                                            }
                                          })
                                        ],
                                        1
                                      )
                                    : _c("Label", {
                                        staticClass: "textCard",
                                        attrs: { text: note, textWrap: "true" }
                                      })
                                ],
                                1
                              )
                            }),
                            1
                          )
                    ],
                    1
                  )
                ],
                1
              )
            ],
            1
          ),
          _c(
            "GridLayout",
            {
              attrs: {
                id: "btnFabContainer",
                rows: "*, auto",
                columns: "*, auto"
              }
            },
            [
              _c(
                "transition",
                { attrs: { name: "dolly", appear: "" } },
                [
                  _vm.showFab
                    ? _c("MDFloatingActionButton", {
                        attrs: { row: "1", col: "1", src: "res://share" },
                        on: { tap: _vm.shareHandler }
                      })
                    : _vm._e()
                ],
                1
              )
            ],
            1
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "../node_modules/vue-loader/lib/loaders/templateLoader.js?!../node_modules/vue-loader/lib/index.js?!./components/modal/ActionDialog.vue?vue&type=template&id=73f3704a&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "Page",
    [
      _c(
        "StackLayout",
        { staticClass: "dialogContainer", class: _vm.appTheme },
        [
          _c("Label", {
            staticClass: "dialogTitle orkm",
            attrs: { text: _vm.title }
          }),
          _c(
            "ScrollView",
            {
              attrs: {
                width: "100%",
                height: _vm.height ? _vm.height : _vm.screenHeight - 256
              }
            },
            [
              _c(
                "StackLayout",
                _vm._l(_vm.list, function(item, index) {
                  return _c("MDButton", {
                    key: index,
                    staticClass: "actionItem",
                    attrs: {
                      variant: "text",
                      rippleColor: _vm.rippleColor,
                      text: item
                    },
                    on: {
                      loaded: _vm.onLabelLoaded,
                      tap: function($event) {
                        return _vm.tapAction(item)
                      }
                    }
                  })
                }),
                1
              )
            ],
            1
          ),
          _c(
            "GridLayout",
            {
              staticClass: "actionsContainer",
              attrs: { rows: "auto", columns: "auto, *, auto" }
            },
            [
              _vm.action
                ? _c("MDButton", {
                    staticClass: "action orkm pull-left",
                    attrs: {
                      rippleColor: _vm.rippleColor,
                      variant: "text",
                      col: "0",
                      text: _vm.action
                    },
                    on: {
                      tap: function($event) {
                        return _vm.$modal.close(_vm.action)
                      }
                    }
                  })
                : _vm._e(),
              _c("MDButton", {
                staticClass: "action orkm pull-right",
                attrs: {
                  rippleColor: _vm.rippleColor,
                  variant: "text",
                  col: "2",
                  text: "CANCEL"
                },
                on: {
                  tap: function($event) {
                    return _vm.$modal.close(false)
                  }
                }
              })
            ],
            1
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "../node_modules/vue-loader/lib/loaders/templateLoader.js?!../node_modules/vue-loader/lib/index.js?!./components/modal/ActionDialogWithSearch.vue?vue&type=template&id=5700bb49&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "Page",
    [
      _c(
        "StackLayout",
        { staticClass: "dialogContainer", class: _vm.appTheme },
        [
          _c("Label", {
            staticClass: "dialogTitle orkm",
            attrs: { text: _vm.title }
          }),
          _vm.filteredRecipes.length || _vm.searchTerm
            ? _c(
                "StackLayout",
                { attrs: { padding: "0 24 24" } },
                [
                  _c("TextField", {
                    attrs: { hint: "Search" },
                    model: {
                      value: _vm.searchTerm,
                      callback: function($event) {
                        _vm.searchTerm = $event.object["text"]
                      },
                      expression: "searchTerm"
                    }
                  })
                ],
                1
              )
            : _vm._e(),
          _c(
            "ScrollView",
            {
              attrs: {
                width: "100%",
                height: _vm.height ? _vm.height : _vm.screenHeight - 320
              }
            },
            [
              _c(
                "StackLayout",
                [
                  _vm._l(_vm.filteredRecipes, function(recipe, index) {
                    return _c("MDButton", {
                      key: index,
                      staticClass: "actionItem",
                      attrs: {
                        variant: "text",
                        rippleColor: _vm.rippleColor,
                        text: recipe.title
                      },
                      on: {
                        loaded: _vm.onLabelLoaded,
                        tap: function($event) {
                          return _vm.tapAction(recipe)
                        }
                      }
                    })
                  }),
                  !_vm.filteredRecipes.length
                    ? _c("Label", {
                        attrs: {
                          padding: "24",
                          lineHeight: "6",
                          text: "Nothing here! Add some recipes and try again.",
                          textAlignment: "center",
                          textWrap: "true"
                        }
                      })
                    : _vm._e()
                ],
                2
              )
            ],
            1
          ),
          _c(
            "GridLayout",
            {
              staticClass: "actionsContainer",
              attrs: { rows: "auto", columns: "auto, *, auto" }
            },
            [
              _vm.action
                ? _c("MDButton", {
                    staticClass: "action orkm pull-left",
                    attrs: {
                      rippleColor: _vm.rippleColor,
                      variant: "text",
                      col: "0",
                      text: _vm.action
                    },
                    on: {
                      tap: function($event) {
                        return _vm.$modal.close(_vm.action)
                      }
                    }
                  })
                : _vm._e(),
              _c("MDButton", {
                staticClass: "action orkm pull-right",
                attrs: {
                  rippleColor: _vm.rippleColor,
                  variant: "text",
                  col: "2",
                  text: "CANCEL"
                },
                on: {
                  tap: function($event) {
                    return _vm.$modal.close(false)
                  }
                }
              })
            ],
            1
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "../node_modules/vue-loader/lib/loaders/templateLoader.js?!../node_modules/vue-loader/lib/index.js?!./components/modal/ConfirmDialog.vue?vue&type=template&id=1d53d63b&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "Page",
    [
      _c(
        "StackLayout",
        { staticClass: "dialogContainer", class: _vm.appTheme },
        [
          _c("Label", {
            staticClass: "dialogTitle orkm",
            attrs: { text: _vm.title, textWrap: "true" }
          }),
          _vm.description
            ? _c("Label", {
                staticClass: "dialogDescription",
                attrs: { text: _vm.description, textWrap: "true" }
              })
            : _vm._e(),
          _c(
            "GridLayout",
            {
              staticClass: "actionsContainer",
              attrs: { rows: "auto", columns: "*, auto, auto" }
            },
            [
              _c("MDButton", {
                staticClass: "action orkm",
                attrs: {
                  rippleColor: _vm.rippleColor,
                  variant: "text",
                  col: "1",
                  text: _vm.cancelButtonText
                },
                on: {
                  tap: function($event) {
                    return _vm.$modal.close(false)
                  }
                }
              }),
              _c("MDButton", {
                staticClass: "action orkm",
                attrs: {
                  rippleColor: _vm.rippleColor,
                  variant: "text",
                  col: "2",
                  text: _vm.okButtonText
                },
                on: {
                  tap: function($event) {
                    return _vm.$modal.close(true)
                  }
                }
              })
            ],
            1
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "../node_modules/vue-loader/lib/loaders/templateLoader.js?!../node_modules/vue-loader/lib/index.js?!./components/modal/ListPicker.vue?vue&type=template&id=3632d46e&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "Page",
    [
      _c(
        "StackLayout",
        { staticClass: "dialogContainer", class: _vm.appTheme },
        [
          _c("Label", {
            staticClass: "dialogTitle orkm",
            attrs: { text: _vm.title }
          }),
          _c(
            "StackLayout",
            {
              staticClass: "dialogListPicker",
              attrs: {
                orientation: "horizontal",
                horizontalAlignment: "center"
              }
            },
            [
              _c("ListPicker", {
                ref: "hrPicker",
                attrs: { items: _vm.hrs, selectedIndex: _vm.hrIndex },
                on: { selectedIndexChange: _vm.setHrs }
              }),
              _c("ListPicker", {
                ref: "minPicker",
                attrs: { items: _vm.mins, selectedIndex: _vm.minIndex },
                on: { selectedIndexChange: _vm.setMins }
              })
            ],
            1
          ),
          _c(
            "GridLayout",
            {
              staticClass: "actionsContainer",
              attrs: { rows: "auto", columns: "*, auto, auto" }
            },
            [
              _c("MDButton", {
                staticClass: "action orkm",
                attrs: {
                  rippleColor: _vm.rippleColor,
                  variant: "text",
                  col: "1",
                  text: "CANCEL"
                },
                on: {
                  tap: function($event) {
                    return _vm.$modal.close(false)
                  }
                }
              }),
              _c("MDButton", {
                staticClass: "action orkm",
                attrs: {
                  rippleColor: _vm.rippleColor,
                  variant: "text",
                  col: "2",
                  text: _vm.action
                },
                on: {
                  tap: function($event) {
                    return _vm.$modal.close(_vm.selectedTime)
                  }
                }
              })
            ],
            1
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "../node_modules/vue-loader/lib/loaders/templateLoader.js?!../node_modules/vue-loader/lib/index.js?!./components/modal/PromptDialog.vue?vue&type=template&id=17328189&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "Page",
    [
      _c(
        "StackLayout",
        { staticClass: "dialogContainer", class: _vm.appTheme },
        [
          _c("Label", {
            staticClass: "dialogTitle orkm",
            attrs: { text: _vm.title }
          }),
          _c(
            "StackLayout",
            { staticClass: "dialogInput" },
            [
              _c("TextField", {
                attrs: {
                  hint: _vm.hint ? _vm.hint : "",
                  autocapitalizationType: "words"
                },
                on: { loaded: _vm.focusField },
                model: {
                  value: _vm.category,
                  callback: function($event) {
                    _vm.category = $event.object["text"]
                  },
                  expression: "category"
                }
              })
            ],
            1
          ),
          _c(
            "GridLayout",
            {
              staticClass: "actionsContainer",
              attrs: { rows: "auto", columns: "*, auto, auto" }
            },
            [
              _c("MDButton", {
                staticClass: "action orkm",
                attrs: {
                  rippleColor: _vm.rippleColor,
                  variant: "text",
                  col: "1",
                  text: "CANCEL"
                },
                on: {
                  tap: function($event) {
                    return _vm.$modal.close(false)
                  }
                }
              }),
              _c("MDButton", {
                staticClass: "action orkm",
                attrs: {
                  rippleColor: _vm.rippleColor,
                  variant: "text",
                  col: "2",
                  text: _vm.action
                },
                on: {
                  tap: function($event) {
                    return _vm.$modal.close(_vm.category)
                  }
                }
              })
            ],
            1
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "../node_modules/vue-loader/lib/loaders/templateLoader.js?!../node_modules/vue-loader/lib/index.js?!./components/modal/ShareChooser.vue?vue&type=template&id=d11e43ce&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "Page",
    [
      _c(
        "StackLayout",
        { staticClass: "dialogContainer", class: _vm.appTheme },
        [
          _c("Label", {
            staticClass: "dialogTitle orkm",
            attrs: { text: _vm.title }
          }),
          _c(
            "GridLayout",
            {
              staticClass: "actionsContainer",
              attrs: { rows: "auto, auto", columns: "*" }
            },
            [
              _c("MDButton", {
                staticClass: "actionIcon",
                attrs: {
                  rippleColor: _vm.rippleColor,
                  backgroundColor: _vm.backgroundColor,
                  row: "0",
                  src: "res://photo",
                  text: "Photo"
                },
                on: {
                  tap: function($event) {
                    return _vm.$modal.close("photo")
                  }
                }
              }),
              _c("MDButton", {
                staticClass: "actionIcon",
                attrs: {
                  rippleColor: _vm.rippleColor,
                  backgroundColor: _vm.backgroundColor,
                  row: "1",
                  src: "res://detail",
                  text: "Recipe"
                },
                on: {
                  tap: function($event) {
                    return _vm.$modal.close("recipe")
                  }
                }
              })
            ],
            1
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./ sync ^\\.\\/app\\.(css|scss|less|sass)$":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./app.scss": "./app.scss"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./ sync ^\\.\\/app\\.(css|scss|less|sass)$";

/***/ }),

/***/ "./ sync recursive (?<!\\bApp_Resources\\b.*)(?<!\\.\\/\\btests\\b\\/.*?)\\.(xml|css|js|(?<!\\.d\\.)ts|(?<!\\b_[\\w-]*\\.)scss)$":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./app.scss": "./app.scss",
	"./main.js": "./main.js",
	"./shared/utils.js": "./shared/utils.js",
	"./store.js": "./store.js"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./ sync recursive (?<!\\bApp_Resources\\b.*)(?<!\\.\\/\\btests\\b\\/.*?)\\.(xml|css|js|(?<!\\.d\\.)ts|(?<!\\b_[\\w-]*\\.)scss)$";

/***/ }),

/***/ "./app.scss":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {module.exports = {"type":"stylesheet","stylesheet":{"rules":[{"type":"comment","comment":"!\n * NativeScript Theme __VERSION__ (https://nativescript.org)\n * Copyright 2016-2016 The Theme Authors\n * Copyright 2016-2019 Progress Software\n * Licensed under Apache 2.0 (https://github.com/NativeScript/theme/blob/master/LICENSE)\n "},{"type":"keyframes","name":"empty","keyframes":[]},{"type":"comment","comment":" Forms "},{"type":"comment","comment":"*\n * Color classes\n * The following creates this pattern:\n * .c-grey{color:#e0e0e0}.c-bg-grey{background-color:#e0e0e0}\n*"},{"type":"rule","selectors":[".c-black"],"declarations":[{"type":"declaration","property":"color","value":"#000"}]},{"type":"rule","selectors":[".c-bg-black"],"declarations":[{"type":"declaration","property":"background-color","value":"#000"}]},{"type":"rule","selectors":[".c-white"],"declarations":[{"type":"declaration","property":"color","value":"#fff"}]},{"type":"rule","selectors":[".c-bg-white"],"declarations":[{"type":"declaration","property":"background-color","value":"#fff"}]},{"type":"rule","selectors":[".c-grey"],"declarations":[{"type":"declaration","property":"color","value":"#e0e0e0"}]},{"type":"rule","selectors":[".c-bg-grey"],"declarations":[{"type":"declaration","property":"background-color","value":"#e0e0e0"}]},{"type":"rule","selectors":[".c-grey-light"],"declarations":[{"type":"declaration","property":"color","value":"#bababa"}]},{"type":"rule","selectors":[".c-bg-grey-light"],"declarations":[{"type":"declaration","property":"background-color","value":"#bababa"}]},{"type":"rule","selectors":[".c-charcoal"],"declarations":[{"type":"declaration","property":"color","value":"#303030"}]},{"type":"rule","selectors":[".c-bg-charcoal"],"declarations":[{"type":"declaration","property":"background-color","value":"#303030"}]},{"type":"rule","selectors":[".c-transparent"],"declarations":[{"type":"declaration","property":"color","value":"transparent"}]},{"type":"rule","selectors":[".c-bg-transparent"],"declarations":[{"type":"declaration","property":"background-color","value":"transparent"}]},{"type":"rule","selectors":[".c-aqua"],"declarations":[{"type":"declaration","property":"color","value":"#00caab"}]},{"type":"rule","selectors":[".c-bg-aqua"],"declarations":[{"type":"declaration","property":"background-color","value":"#00caab"}]},{"type":"rule","selectors":[".c-blue"],"declarations":[{"type":"declaration","property":"color","value":"#3a53ff"}]},{"type":"rule","selectors":[".c-bg-blue"],"declarations":[{"type":"declaration","property":"background-color","value":"#3a53ff"}]},{"type":"rule","selectors":[".c-brown"],"declarations":[{"type":"declaration","property":"color","value":"#795548"}]},{"type":"rule","selectors":[".c-bg-brown"],"declarations":[{"type":"declaration","property":"background-color","value":"#795548"}]},{"type":"rule","selectors":[".c-forest"],"declarations":[{"type":"declaration","property":"color","value":"#006968"}]},{"type":"rule","selectors":[".c-bg-forest"],"declarations":[{"type":"declaration","property":"background-color","value":"#006968"}]},{"type":"rule","selectors":[".c-grey-dark"],"declarations":[{"type":"declaration","property":"color","value":"#5c687c"}]},{"type":"rule","selectors":[".c-bg-grey-dark"],"declarations":[{"type":"declaration","property":"background-color","value":"#5c687c"}]},{"type":"rule","selectors":[".c-purple"],"declarations":[{"type":"declaration","property":"color","value":"#8130ff"}]},{"type":"rule","selectors":[".c-bg-purple"],"declarations":[{"type":"declaration","property":"background-color","value":"#8130ff"}]},{"type":"rule","selectors":[".c-lemon"],"declarations":[{"type":"declaration","property":"color","value":"#ffea00"}]},{"type":"rule","selectors":[".c-bg-lemon"],"declarations":[{"type":"declaration","property":"background-color","value":"#ffea00"}]},{"type":"rule","selectors":[".c-lime"],"declarations":[{"type":"declaration","property":"color","value":"#aee406"}]},{"type":"rule","selectors":[".c-bg-lime"],"declarations":[{"type":"declaration","property":"background-color","value":"#aee406"}]},{"type":"rule","selectors":[".c-orange"],"declarations":[{"type":"declaration","property":"color","value":"#f57c00"}]},{"type":"rule","selectors":[".c-bg-orange"],"declarations":[{"type":"declaration","property":"background-color","value":"#f57c00"}]},{"type":"rule","selectors":[".c-ruby"],"declarations":[{"type":"declaration","property":"color","value":"#ff1744"}]},{"type":"rule","selectors":[".c-bg-ruby"],"declarations":[{"type":"declaration","property":"background-color","value":"#ff1744"}]},{"type":"rule","selectors":[".c-sky"],"declarations":[{"type":"declaration","property":"color","value":"#30bcff"}]},{"type":"rule","selectors":[".c-bg-sky"],"declarations":[{"type":"declaration","property":"background-color","value":"#30bcff"}]},{"type":"rule","selectors":[".c-error"],"declarations":[{"type":"declaration","property":"color","value":"#d50000"}]},{"type":"rule","selectors":[".c-bg-error"],"declarations":[{"type":"declaration","property":"background-color","value":"#d50000"}]},{"type":"comment","comment":" Width/Height "},{"type":"rule","selectors":[".w-full"],"declarations":[{"type":"declaration","property":"width","value":"100%"}]},{"type":"rule","selectors":[".w-100"],"declarations":[{"type":"declaration","property":"width","value":"100"}]},{"type":"rule","selectors":[".h-full"],"declarations":[{"type":"declaration","property":"height","value":"100%"}]},{"type":"rule","selectors":[".h-100"],"declarations":[{"type":"declaration","property":"height","value":"100"}]},{"type":"comment","comment":"*\n * Margin and Padding\n * The following creates this pattern:\n * .m-0{margin:0}.m-t-0{margin-top:0}.m-r-0{margin-right:0}.m-b-0{margin-bottom:0}.m-l-0{margin-left:0}.m-x-0{margin-right:0;margin-left:0}.m-y-0{margin-top:0;margin-bottom:0}\n * Same for Padding (using the 'p' abbreviation)\n * From 0, 2, 5, 10, 15, 20, 25, 30\n*"},{"type":"rule","selectors":[".m-0"],"declarations":[{"type":"declaration","property":"margin","value":"0"}]},{"type":"rule","selectors":[".m-t-0"],"declarations":[{"type":"declaration","property":"margin-top","value":"0"}]},{"type":"rule","selectors":[".m-r-0"],"declarations":[{"type":"declaration","property":"margin-right","value":"0"}]},{"type":"rule","selectors":[".m-b-0"],"declarations":[{"type":"declaration","property":"margin-bottom","value":"0"}]},{"type":"rule","selectors":[".m-l-0"],"declarations":[{"type":"declaration","property":"margin-left","value":"0"}]},{"type":"rule","selectors":[".m-x-0"],"declarations":[{"type":"declaration","property":"margin-right","value":"0"},{"type":"declaration","property":"margin-left","value":"0"}]},{"type":"rule","selectors":[".m-y-0"],"declarations":[{"type":"declaration","property":"margin-top","value":"0"},{"type":"declaration","property":"margin-bottom","value":"0"}]},{"type":"rule","selectors":[".m-2"],"declarations":[{"type":"declaration","property":"margin","value":"2"}]},{"type":"rule","selectors":[".m-t-2"],"declarations":[{"type":"declaration","property":"margin-top","value":"2"}]},{"type":"rule","selectors":[".m-r-2"],"declarations":[{"type":"declaration","property":"margin-right","value":"2"}]},{"type":"rule","selectors":[".m-b-2"],"declarations":[{"type":"declaration","property":"margin-bottom","value":"2"}]},{"type":"rule","selectors":[".m-l-2"],"declarations":[{"type":"declaration","property":"margin-left","value":"2"}]},{"type":"rule","selectors":[".m-x-2"],"declarations":[{"type":"declaration","property":"margin-right","value":"2"},{"type":"declaration","property":"margin-left","value":"2"}]},{"type":"rule","selectors":[".m-y-2"],"declarations":[{"type":"declaration","property":"margin-top","value":"2"},{"type":"declaration","property":"margin-bottom","value":"2"}]},{"type":"rule","selectors":[".m-4"],"declarations":[{"type":"declaration","property":"margin","value":"4"}]},{"type":"rule","selectors":[".m-t-4"],"declarations":[{"type":"declaration","property":"margin-top","value":"4"}]},{"type":"rule","selectors":[".m-r-4"],"declarations":[{"type":"declaration","property":"margin-right","value":"4"}]},{"type":"rule","selectors":[".m-b-4"],"declarations":[{"type":"declaration","property":"margin-bottom","value":"4"}]},{"type":"rule","selectors":[".m-l-4"],"declarations":[{"type":"declaration","property":"margin-left","value":"4"}]},{"type":"rule","selectors":[".m-x-4"],"declarations":[{"type":"declaration","property":"margin-right","value":"4"},{"type":"declaration","property":"margin-left","value":"4"}]},{"type":"rule","selectors":[".m-y-4"],"declarations":[{"type":"declaration","property":"margin-top","value":"4"},{"type":"declaration","property":"margin-bottom","value":"4"}]},{"type":"rule","selectors":[".m-5"],"declarations":[{"type":"declaration","property":"margin","value":"5"}]},{"type":"rule","selectors":[".m-t-5"],"declarations":[{"type":"declaration","property":"margin-top","value":"5"}]},{"type":"rule","selectors":[".m-r-5"],"declarations":[{"type":"declaration","property":"margin-right","value":"5"}]},{"type":"rule","selectors":[".m-b-5"],"declarations":[{"type":"declaration","property":"margin-bottom","value":"5"}]},{"type":"rule","selectors":[".m-l-5"],"declarations":[{"type":"declaration","property":"margin-left","value":"5"}]},{"type":"rule","selectors":[".m-x-5"],"declarations":[{"type":"declaration","property":"margin-right","value":"5"},{"type":"declaration","property":"margin-left","value":"5"}]},{"type":"rule","selectors":[".m-y-5"],"declarations":[{"type":"declaration","property":"margin-top","value":"5"},{"type":"declaration","property":"margin-bottom","value":"5"}]},{"type":"rule","selectors":[".m-8"],"declarations":[{"type":"declaration","property":"margin","value":"8"}]},{"type":"rule","selectors":[".m-t-8"],"declarations":[{"type":"declaration","property":"margin-top","value":"8"}]},{"type":"rule","selectors":[".m-r-8"],"declarations":[{"type":"declaration","property":"margin-right","value":"8"}]},{"type":"rule","selectors":[".m-b-8"],"declarations":[{"type":"declaration","property":"margin-bottom","value":"8"}]},{"type":"rule","selectors":[".m-l-8"],"declarations":[{"type":"declaration","property":"margin-left","value":"8"}]},{"type":"rule","selectors":[".m-x-8"],"declarations":[{"type":"declaration","property":"margin-right","value":"8"},{"type":"declaration","property":"margin-left","value":"8"}]},{"type":"rule","selectors":[".m-y-8"],"declarations":[{"type":"declaration","property":"margin-top","value":"8"},{"type":"declaration","property":"margin-bottom","value":"8"}]},{"type":"rule","selectors":[".m-10"],"declarations":[{"type":"declaration","property":"margin","value":"10"}]},{"type":"rule","selectors":[".m-t-10"],"declarations":[{"type":"declaration","property":"margin-top","value":"10"}]},{"type":"rule","selectors":[".m-r-10"],"declarations":[{"type":"declaration","property":"margin-right","value":"10"}]},{"type":"rule","selectors":[".m-b-10"],"declarations":[{"type":"declaration","property":"margin-bottom","value":"10"}]},{"type":"rule","selectors":[".m-l-10"],"declarations":[{"type":"declaration","property":"margin-left","value":"10"}]},{"type":"rule","selectors":[".m-x-10"],"declarations":[{"type":"declaration","property":"margin-right","value":"10"},{"type":"declaration","property":"margin-left","value":"10"}]},{"type":"rule","selectors":[".m-y-10"],"declarations":[{"type":"declaration","property":"margin-top","value":"10"},{"type":"declaration","property":"margin-bottom","value":"10"}]},{"type":"rule","selectors":[".m-12"],"declarations":[{"type":"declaration","property":"margin","value":"12"}]},{"type":"rule","selectors":[".m-t-12"],"declarations":[{"type":"declaration","property":"margin-top","value":"12"}]},{"type":"rule","selectors":[".m-r-12"],"declarations":[{"type":"declaration","property":"margin-right","value":"12"}]},{"type":"rule","selectors":[".m-b-12"],"declarations":[{"type":"declaration","property":"margin-bottom","value":"12"}]},{"type":"rule","selectors":[".m-l-12"],"declarations":[{"type":"declaration","property":"margin-left","value":"12"}]},{"type":"rule","selectors":[".m-x-12"],"declarations":[{"type":"declaration","property":"margin-right","value":"12"},{"type":"declaration","property":"margin-left","value":"12"}]},{"type":"rule","selectors":[".m-y-12"],"declarations":[{"type":"declaration","property":"margin-top","value":"12"},{"type":"declaration","property":"margin-bottom","value":"12"}]},{"type":"rule","selectors":[".m-15"],"declarations":[{"type":"declaration","property":"margin","value":"15"}]},{"type":"rule","selectors":[".m-t-15"],"declarations":[{"type":"declaration","property":"margin-top","value":"15"}]},{"type":"rule","selectors":[".m-r-15"],"declarations":[{"type":"declaration","property":"margin-right","value":"15"}]},{"type":"rule","selectors":[".m-b-15"],"declarations":[{"type":"declaration","property":"margin-bottom","value":"15"}]},{"type":"rule","selectors":[".m-l-15"],"declarations":[{"type":"declaration","property":"margin-left","value":"15"}]},{"type":"rule","selectors":[".m-x-15"],"declarations":[{"type":"declaration","property":"margin-right","value":"15"},{"type":"declaration","property":"margin-left","value":"15"}]},{"type":"rule","selectors":[".m-y-15"],"declarations":[{"type":"declaration","property":"margin-top","value":"15"},{"type":"declaration","property":"margin-bottom","value":"15"}]},{"type":"rule","selectors":[".m-16"],"declarations":[{"type":"declaration","property":"margin","value":"16"}]},{"type":"rule","selectors":[".m-t-16"],"declarations":[{"type":"declaration","property":"margin-top","value":"16"}]},{"type":"rule","selectors":[".m-r-16"],"declarations":[{"type":"declaration","property":"margin-right","value":"16"}]},{"type":"rule","selectors":[".m-b-16"],"declarations":[{"type":"declaration","property":"margin-bottom","value":"16"}]},{"type":"rule","selectors":[".m-l-16"],"declarations":[{"type":"declaration","property":"margin-left","value":"16"}]},{"type":"rule","selectors":[".m-x-16"],"declarations":[{"type":"declaration","property":"margin-right","value":"16"},{"type":"declaration","property":"margin-left","value":"16"}]},{"type":"rule","selectors":[".m-y-16"],"declarations":[{"type":"declaration","property":"margin-top","value":"16"},{"type":"declaration","property":"margin-bottom","value":"16"}]},{"type":"rule","selectors":[".m-20"],"declarations":[{"type":"declaration","property":"margin","value":"20"}]},{"type":"rule","selectors":[".m-t-20"],"declarations":[{"type":"declaration","property":"margin-top","value":"20"}]},{"type":"rule","selectors":[".m-r-20"],"declarations":[{"type":"declaration","property":"margin-right","value":"20"}]},{"type":"rule","selectors":[".m-b-20"],"declarations":[{"type":"declaration","property":"margin-bottom","value":"20"}]},{"type":"rule","selectors":[".m-l-20"],"declarations":[{"type":"declaration","property":"margin-left","value":"20"}]},{"type":"rule","selectors":[".m-x-20"],"declarations":[{"type":"declaration","property":"margin-right","value":"20"},{"type":"declaration","property":"margin-left","value":"20"}]},{"type":"rule","selectors":[".m-y-20"],"declarations":[{"type":"declaration","property":"margin-top","value":"20"},{"type":"declaration","property":"margin-bottom","value":"20"}]},{"type":"rule","selectors":[".m-24"],"declarations":[{"type":"declaration","property":"margin","value":"24"}]},{"type":"rule","selectors":[".m-t-24"],"declarations":[{"type":"declaration","property":"margin-top","value":"24"}]},{"type":"rule","selectors":[".m-r-24"],"declarations":[{"type":"declaration","property":"margin-right","value":"24"}]},{"type":"rule","selectors":[".m-b-24"],"declarations":[{"type":"declaration","property":"margin-bottom","value":"24"}]},{"type":"rule","selectors":[".m-l-24"],"declarations":[{"type":"declaration","property":"margin-left","value":"24"}]},{"type":"rule","selectors":[".m-x-24"],"declarations":[{"type":"declaration","property":"margin-right","value":"24"},{"type":"declaration","property":"margin-left","value":"24"}]},{"type":"rule","selectors":[".m-y-24"],"declarations":[{"type":"declaration","property":"margin-top","value":"24"},{"type":"declaration","property":"margin-bottom","value":"24"}]},{"type":"rule","selectors":[".m-25"],"declarations":[{"type":"declaration","property":"margin","value":"25"}]},{"type":"rule","selectors":[".m-t-25"],"declarations":[{"type":"declaration","property":"margin-top","value":"25"}]},{"type":"rule","selectors":[".m-r-25"],"declarations":[{"type":"declaration","property":"margin-right","value":"25"}]},{"type":"rule","selectors":[".m-b-25"],"declarations":[{"type":"declaration","property":"margin-bottom","value":"25"}]},{"type":"rule","selectors":[".m-l-25"],"declarations":[{"type":"declaration","property":"margin-left","value":"25"}]},{"type":"rule","selectors":[".m-x-25"],"declarations":[{"type":"declaration","property":"margin-right","value":"25"},{"type":"declaration","property":"margin-left","value":"25"}]},{"type":"rule","selectors":[".m-y-25"],"declarations":[{"type":"declaration","property":"margin-top","value":"25"},{"type":"declaration","property":"margin-bottom","value":"25"}]},{"type":"rule","selectors":[".m-28"],"declarations":[{"type":"declaration","property":"margin","value":"28"}]},{"type":"rule","selectors":[".m-t-28"],"declarations":[{"type":"declaration","property":"margin-top","value":"28"}]},{"type":"rule","selectors":[".m-r-28"],"declarations":[{"type":"declaration","property":"margin-right","value":"28"}]},{"type":"rule","selectors":[".m-b-28"],"declarations":[{"type":"declaration","property":"margin-bottom","value":"28"}]},{"type":"rule","selectors":[".m-l-28"],"declarations":[{"type":"declaration","property":"margin-left","value":"28"}]},{"type":"rule","selectors":[".m-x-28"],"declarations":[{"type":"declaration","property":"margin-right","value":"28"},{"type":"declaration","property":"margin-left","value":"28"}]},{"type":"rule","selectors":[".m-y-28"],"declarations":[{"type":"declaration","property":"margin-top","value":"28"},{"type":"declaration","property":"margin-bottom","value":"28"}]},{"type":"rule","selectors":[".m-30"],"declarations":[{"type":"declaration","property":"margin","value":"30"}]},{"type":"rule","selectors":[".m-t-30"],"declarations":[{"type":"declaration","property":"margin-top","value":"30"}]},{"type":"rule","selectors":[".m-r-30"],"declarations":[{"type":"declaration","property":"margin-right","value":"30"}]},{"type":"rule","selectors":[".m-b-30"],"declarations":[{"type":"declaration","property":"margin-bottom","value":"30"}]},{"type":"rule","selectors":[".m-l-30"],"declarations":[{"type":"declaration","property":"margin-left","value":"30"}]},{"type":"rule","selectors":[".m-x-30"],"declarations":[{"type":"declaration","property":"margin-right","value":"30"},{"type":"declaration","property":"margin-left","value":"30"}]},{"type":"rule","selectors":[".m-y-30"],"declarations":[{"type":"declaration","property":"margin-top","value":"30"},{"type":"declaration","property":"margin-bottom","value":"30"}]},{"type":"rule","selectors":[".p-0"],"declarations":[{"type":"declaration","property":"padding","value":"0"}]},{"type":"rule","selectors":[".p-t-0"],"declarations":[{"type":"declaration","property":"padding-top","value":"0"}]},{"type":"rule","selectors":[".p-r-0"],"declarations":[{"type":"declaration","property":"padding-right","value":"0"}]},{"type":"rule","selectors":[".p-b-0"],"declarations":[{"type":"declaration","property":"padding-bottom","value":"0"}]},{"type":"rule","selectors":[".p-l-0"],"declarations":[{"type":"declaration","property":"padding-left","value":"0"}]},{"type":"rule","selectors":[".p-x-0"],"declarations":[{"type":"declaration","property":"padding-right","value":"0"},{"type":"declaration","property":"padding-left","value":"0"}]},{"type":"rule","selectors":[".p-y-0"],"declarations":[{"type":"declaration","property":"padding-top","value":"0"},{"type":"declaration","property":"padding-bottom","value":"0"}]},{"type":"rule","selectors":[".p-2"],"declarations":[{"type":"declaration","property":"padding","value":"2"}]},{"type":"rule","selectors":[".p-t-2"],"declarations":[{"type":"declaration","property":"padding-top","value":"2"}]},{"type":"rule","selectors":[".p-r-2"],"declarations":[{"type":"declaration","property":"padding-right","value":"2"}]},{"type":"rule","selectors":[".p-b-2"],"declarations":[{"type":"declaration","property":"padding-bottom","value":"2"}]},{"type":"rule","selectors":[".p-l-2"],"declarations":[{"type":"declaration","property":"padding-left","value":"2"}]},{"type":"rule","selectors":[".p-x-2"],"declarations":[{"type":"declaration","property":"padding-right","value":"2"},{"type":"declaration","property":"padding-left","value":"2"}]},{"type":"rule","selectors":[".p-y-2"],"declarations":[{"type":"declaration","property":"padding-top","value":"2"},{"type":"declaration","property":"padding-bottom","value":"2"}]},{"type":"rule","selectors":[".p-4"],"declarations":[{"type":"declaration","property":"padding","value":"4"}]},{"type":"rule","selectors":[".p-t-4"],"declarations":[{"type":"declaration","property":"padding-top","value":"4"}]},{"type":"rule","selectors":[".p-r-4"],"declarations":[{"type":"declaration","property":"padding-right","value":"4"}]},{"type":"rule","selectors":[".p-b-4"],"declarations":[{"type":"declaration","property":"padding-bottom","value":"4"}]},{"type":"rule","selectors":[".p-l-4"],"declarations":[{"type":"declaration","property":"padding-left","value":"4"}]},{"type":"rule","selectors":[".p-x-4"],"declarations":[{"type":"declaration","property":"padding-right","value":"4"},{"type":"declaration","property":"padding-left","value":"4"}]},{"type":"rule","selectors":[".p-y-4"],"declarations":[{"type":"declaration","property":"padding-top","value":"4"},{"type":"declaration","property":"padding-bottom","value":"4"}]},{"type":"rule","selectors":[".p-5"],"declarations":[{"type":"declaration","property":"padding","value":"5"}]},{"type":"rule","selectors":[".p-t-5"],"declarations":[{"type":"declaration","property":"padding-top","value":"5"}]},{"type":"rule","selectors":[".p-r-5"],"declarations":[{"type":"declaration","property":"padding-right","value":"5"}]},{"type":"rule","selectors":[".p-b-5"],"declarations":[{"type":"declaration","property":"padding-bottom","value":"5"}]},{"type":"rule","selectors":[".p-l-5"],"declarations":[{"type":"declaration","property":"padding-left","value":"5"}]},{"type":"rule","selectors":[".p-x-5"],"declarations":[{"type":"declaration","property":"padding-right","value":"5"},{"type":"declaration","property":"padding-left","value":"5"}]},{"type":"rule","selectors":[".p-y-5"],"declarations":[{"type":"declaration","property":"padding-top","value":"5"},{"type":"declaration","property":"padding-bottom","value":"5"}]},{"type":"rule","selectors":[".p-8"],"declarations":[{"type":"declaration","property":"padding","value":"8"}]},{"type":"rule","selectors":[".p-t-8"],"declarations":[{"type":"declaration","property":"padding-top","value":"8"}]},{"type":"rule","selectors":[".p-r-8"],"declarations":[{"type":"declaration","property":"padding-right","value":"8"}]},{"type":"rule","selectors":[".p-b-8"],"declarations":[{"type":"declaration","property":"padding-bottom","value":"8"}]},{"type":"rule","selectors":[".p-l-8"],"declarations":[{"type":"declaration","property":"padding-left","value":"8"}]},{"type":"rule","selectors":[".p-x-8"],"declarations":[{"type":"declaration","property":"padding-right","value":"8"},{"type":"declaration","property":"padding-left","value":"8"}]},{"type":"rule","selectors":[".p-y-8"],"declarations":[{"type":"declaration","property":"padding-top","value":"8"},{"type":"declaration","property":"padding-bottom","value":"8"}]},{"type":"rule","selectors":[".p-10"],"declarations":[{"type":"declaration","property":"padding","value":"10"}]},{"type":"rule","selectors":[".p-t-10"],"declarations":[{"type":"declaration","property":"padding-top","value":"10"}]},{"type":"rule","selectors":[".p-r-10"],"declarations":[{"type":"declaration","property":"padding-right","value":"10"}]},{"type":"rule","selectors":[".p-b-10"],"declarations":[{"type":"declaration","property":"padding-bottom","value":"10"}]},{"type":"rule","selectors":[".p-l-10"],"declarations":[{"type":"declaration","property":"padding-left","value":"10"}]},{"type":"rule","selectors":[".p-x-10"],"declarations":[{"type":"declaration","property":"padding-right","value":"10"},{"type":"declaration","property":"padding-left","value":"10"}]},{"type":"rule","selectors":[".p-y-10"],"declarations":[{"type":"declaration","property":"padding-top","value":"10"},{"type":"declaration","property":"padding-bottom","value":"10"}]},{"type":"rule","selectors":[".p-12"],"declarations":[{"type":"declaration","property":"padding","value":"12"}]},{"type":"rule","selectors":[".p-t-12"],"declarations":[{"type":"declaration","property":"padding-top","value":"12"}]},{"type":"rule","selectors":[".p-r-12"],"declarations":[{"type":"declaration","property":"padding-right","value":"12"}]},{"type":"rule","selectors":[".p-b-12"],"declarations":[{"type":"declaration","property":"padding-bottom","value":"12"}]},{"type":"rule","selectors":[".p-l-12"],"declarations":[{"type":"declaration","property":"padding-left","value":"12"}]},{"type":"rule","selectors":[".p-x-12"],"declarations":[{"type":"declaration","property":"padding-right","value":"12"},{"type":"declaration","property":"padding-left","value":"12"}]},{"type":"rule","selectors":[".p-y-12"],"declarations":[{"type":"declaration","property":"padding-top","value":"12"},{"type":"declaration","property":"padding-bottom","value":"12"}]},{"type":"rule","selectors":[".p-15"],"declarations":[{"type":"declaration","property":"padding","value":"15"}]},{"type":"rule","selectors":[".p-t-15"],"declarations":[{"type":"declaration","property":"padding-top","value":"15"}]},{"type":"rule","selectors":[".p-r-15"],"declarations":[{"type":"declaration","property":"padding-right","value":"15"}]},{"type":"rule","selectors":[".p-b-15"],"declarations":[{"type":"declaration","property":"padding-bottom","value":"15"}]},{"type":"rule","selectors":[".p-l-15"],"declarations":[{"type":"declaration","property":"padding-left","value":"15"}]},{"type":"rule","selectors":[".p-x-15"],"declarations":[{"type":"declaration","property":"padding-right","value":"15"},{"type":"declaration","property":"padding-left","value":"15"}]},{"type":"rule","selectors":[".p-y-15"],"declarations":[{"type":"declaration","property":"padding-top","value":"15"},{"type":"declaration","property":"padding-bottom","value":"15"}]},{"type":"rule","selectors":[".p-16"],"declarations":[{"type":"declaration","property":"padding","value":"16"}]},{"type":"rule","selectors":[".p-t-16"],"declarations":[{"type":"declaration","property":"padding-top","value":"16"}]},{"type":"rule","selectors":[".p-r-16"],"declarations":[{"type":"declaration","property":"padding-right","value":"16"}]},{"type":"rule","selectors":[".p-b-16"],"declarations":[{"type":"declaration","property":"padding-bottom","value":"16"}]},{"type":"rule","selectors":[".p-l-16"],"declarations":[{"type":"declaration","property":"padding-left","value":"16"}]},{"type":"rule","selectors":[".p-x-16"],"declarations":[{"type":"declaration","property":"padding-right","value":"16"},{"type":"declaration","property":"padding-left","value":"16"}]},{"type":"rule","selectors":[".p-y-16"],"declarations":[{"type":"declaration","property":"padding-top","value":"16"},{"type":"declaration","property":"padding-bottom","value":"16"}]},{"type":"rule","selectors":[".p-20"],"declarations":[{"type":"declaration","property":"padding","value":"20"}]},{"type":"rule","selectors":[".p-t-20"],"declarations":[{"type":"declaration","property":"padding-top","value":"20"}]},{"type":"rule","selectors":[".p-r-20"],"declarations":[{"type":"declaration","property":"padding-right","value":"20"}]},{"type":"rule","selectors":[".p-b-20"],"declarations":[{"type":"declaration","property":"padding-bottom","value":"20"}]},{"type":"rule","selectors":[".p-l-20"],"declarations":[{"type":"declaration","property":"padding-left","value":"20"}]},{"type":"rule","selectors":[".p-x-20"],"declarations":[{"type":"declaration","property":"padding-right","value":"20"},{"type":"declaration","property":"padding-left","value":"20"}]},{"type":"rule","selectors":[".p-y-20"],"declarations":[{"type":"declaration","property":"padding-top","value":"20"},{"type":"declaration","property":"padding-bottom","value":"20"}]},{"type":"rule","selectors":[".p-24"],"declarations":[{"type":"declaration","property":"padding","value":"24"}]},{"type":"rule","selectors":[".p-t-24"],"declarations":[{"type":"declaration","property":"padding-top","value":"24"}]},{"type":"rule","selectors":[".p-r-24"],"declarations":[{"type":"declaration","property":"padding-right","value":"24"}]},{"type":"rule","selectors":[".p-b-24"],"declarations":[{"type":"declaration","property":"padding-bottom","value":"24"}]},{"type":"rule","selectors":[".p-l-24"],"declarations":[{"type":"declaration","property":"padding-left","value":"24"}]},{"type":"rule","selectors":[".p-x-24"],"declarations":[{"type":"declaration","property":"padding-right","value":"24"},{"type":"declaration","property":"padding-left","value":"24"}]},{"type":"rule","selectors":[".p-y-24"],"declarations":[{"type":"declaration","property":"padding-top","value":"24"},{"type":"declaration","property":"padding-bottom","value":"24"}]},{"type":"rule","selectors":[".p-25"],"declarations":[{"type":"declaration","property":"padding","value":"25"}]},{"type":"rule","selectors":[".p-t-25"],"declarations":[{"type":"declaration","property":"padding-top","value":"25"}]},{"type":"rule","selectors":[".p-r-25"],"declarations":[{"type":"declaration","property":"padding-right","value":"25"}]},{"type":"rule","selectors":[".p-b-25"],"declarations":[{"type":"declaration","property":"padding-bottom","value":"25"}]},{"type":"rule","selectors":[".p-l-25"],"declarations":[{"type":"declaration","property":"padding-left","value":"25"}]},{"type":"rule","selectors":[".p-x-25"],"declarations":[{"type":"declaration","property":"padding-right","value":"25"},{"type":"declaration","property":"padding-left","value":"25"}]},{"type":"rule","selectors":[".p-y-25"],"declarations":[{"type":"declaration","property":"padding-top","value":"25"},{"type":"declaration","property":"padding-bottom","value":"25"}]},{"type":"rule","selectors":[".p-28"],"declarations":[{"type":"declaration","property":"padding","value":"28"}]},{"type":"rule","selectors":[".p-t-28"],"declarations":[{"type":"declaration","property":"padding-top","value":"28"}]},{"type":"rule","selectors":[".p-r-28"],"declarations":[{"type":"declaration","property":"padding-right","value":"28"}]},{"type":"rule","selectors":[".p-b-28"],"declarations":[{"type":"declaration","property":"padding-bottom","value":"28"}]},{"type":"rule","selectors":[".p-l-28"],"declarations":[{"type":"declaration","property":"padding-left","value":"28"}]},{"type":"rule","selectors":[".p-x-28"],"declarations":[{"type":"declaration","property":"padding-right","value":"28"},{"type":"declaration","property":"padding-left","value":"28"}]},{"type":"rule","selectors":[".p-y-28"],"declarations":[{"type":"declaration","property":"padding-top","value":"28"},{"type":"declaration","property":"padding-bottom","value":"28"}]},{"type":"rule","selectors":[".p-30"],"declarations":[{"type":"declaration","property":"padding","value":"30"}]},{"type":"rule","selectors":[".p-t-30"],"declarations":[{"type":"declaration","property":"padding-top","value":"30"}]},{"type":"rule","selectors":[".p-r-30"],"declarations":[{"type":"declaration","property":"padding-right","value":"30"}]},{"type":"rule","selectors":[".p-b-30"],"declarations":[{"type":"declaration","property":"padding-bottom","value":"30"}]},{"type":"rule","selectors":[".p-l-30"],"declarations":[{"type":"declaration","property":"padding-left","value":"30"}]},{"type":"rule","selectors":[".p-x-30"],"declarations":[{"type":"declaration","property":"padding-right","value":"30"},{"type":"declaration","property":"padding-left","value":"30"}]},{"type":"rule","selectors":[".p-y-30"],"declarations":[{"type":"declaration","property":"padding-top","value":"30"},{"type":"declaration","property":"padding-bottom","value":"30"}]},{"type":"comment","comment":" Alignment "},{"type":"rule","selectors":[".text-left"],"declarations":[{"type":"declaration","property":"text-align","value":"left"}]},{"type":"rule","selectors":[".text-right"],"declarations":[{"type":"declaration","property":"text-align","value":"right"}]},{"type":"rule","selectors":[".text-center"],"declarations":[{"type":"declaration","property":"text-align","value":"center"}]},{"type":"rule","selectors":[".text-lowercase"],"declarations":[{"type":"declaration","property":"text-transform","value":"lowercase"}]},{"type":"rule","selectors":[".text-uppercase"],"declarations":[{"type":"declaration","property":"text-transform","value":"uppercase"}]},{"type":"rule","selectors":[".text-capitalize"],"declarations":[{"type":"declaration","property":"text-transform","value":"capitalize"}]},{"type":"rule","selectors":[".font-weight-normal"],"declarations":[{"type":"declaration","property":"font-weight","value":"normal"}]},{"type":"rule","selectors":[".font-weight-bold"],"declarations":[{"type":"declaration","property":"font-weight","value":"bold"}]},{"type":"rule","selectors":[".font-italic"],"declarations":[{"type":"declaration","property":"font-style","value":"italic"}]},{"type":"comment","comment":"*\n * Font size\n * The following creates this pattern:\n * .t-10{font-size:10}\n * From 10, 12, 14, 15, 16, 17, 18, 19, 20\n*"},{"type":"rule","selectors":[".t-10"],"declarations":[{"type":"declaration","property":"font-size","value":"10"}]},{"type":"rule","selectors":[".t-12"],"declarations":[{"type":"declaration","property":"font-size","value":"12"}]},{"type":"rule","selectors":[".t-14"],"declarations":[{"type":"declaration","property":"font-size","value":"14"}]},{"type":"rule","selectors":[".t-15"],"declarations":[{"type":"declaration","property":"font-size","value":"15"}]},{"type":"rule","selectors":[".t-16"],"declarations":[{"type":"declaration","property":"font-size","value":"16"}]},{"type":"rule","selectors":[".t-17"],"declarations":[{"type":"declaration","property":"font-size","value":"17"}]},{"type":"rule","selectors":[".t-18"],"declarations":[{"type":"declaration","property":"font-size","value":"18"}]},{"type":"rule","selectors":[".t-19"],"declarations":[{"type":"declaration","property":"font-size","value":"19"}]},{"type":"rule","selectors":[".t-20"],"declarations":[{"type":"declaration","property":"font-size","value":"20"}]},{"type":"rule","selectors":[".t-25"],"declarations":[{"type":"declaration","property":"font-size","value":"25"}]},{"type":"rule","selectors":[".t-30"],"declarations":[{"type":"declaration","property":"font-size","value":"30"}]},{"type":"rule","selectors":[".t-36"],"declarations":[{"type":"declaration","property":"font-size","value":"36"}]},{"type":"rule","selectors":[".h1",".h2",".h3",".h4",".h5",".h6"],"declarations":[{"type":"declaration","property":"margin-bottom","value":"4"},{"type":"declaration","property":"font-weight","value":"normal"},{"type":"declaration","property":"color","value":"#262626"}]},{"type":"rule","selectors":[".ns-dark .h1",".ns-dark .h2",".ns-dark .h3",".ns-dark .h4",".ns-dark .h5",".ns-dark .h6"],"declarations":[{"type":"declaration","property":"color","value":"white"}]},{"type":"rule","selectors":[".body",".body2",".footnote"],"declarations":[{"type":"declaration","property":"color","value":"black"},{"type":"declaration","property":"font-weight","value":"normal"}]},{"type":"rule","selectors":[".ns-dark .body",".ns-dark .body2",".ns-dark .footnote"],"declarations":[{"type":"declaration","property":"color","value":"#b3b3b3"}]},{"type":"rule","selectors":[".h1"],"declarations":[{"type":"declaration","property":"font-size","value":"32"}]},{"type":"rule","selectors":[".h2"],"declarations":[{"type":"declaration","property":"font-size","value":"22"}]},{"type":"rule","selectors":[".h3"],"declarations":[{"type":"declaration","property":"font-size","value":"15"}]},{"type":"rule","selectors":[".h4"],"declarations":[{"type":"declaration","property":"font-size","value":"12"}]},{"type":"rule","selectors":[".h5"],"declarations":[{"type":"declaration","property":"font-size","value":"11"}]},{"type":"rule","selectors":[".h6"],"declarations":[{"type":"declaration","property":"font-size","value":"10"}]},{"type":"rule","selectors":[".body"],"declarations":[{"type":"declaration","property":"font-size","value":"14"}]},{"type":"rule","selectors":[".body2"],"declarations":[{"type":"declaration","property":"font-size","value":"17"}]},{"type":"rule","selectors":[".footnote"],"declarations":[{"type":"declaration","property":"font-size","value":"13"}]},{"type":"rule","selectors":[".img-thumbnail"],"declarations":[{"type":"declaration","property":"border-radius","value":"0"}]},{"type":"rule","selectors":[".invisible"],"declarations":[{"type":"declaration","property":"visibility","value":"collapse"}]},{"type":"rule","selectors":[".pull-left"],"declarations":[{"type":"declaration","property":"horizontal-align","value":"left"}]},{"type":"rule","selectors":[".pull-right"],"declarations":[{"type":"declaration","property":"horizontal-align","value":"right"}]},{"type":"rule","selectors":[".m-x-auto"],"declarations":[{"type":"declaration","property":"horizontal-align","value":"center"}]},{"type":"rule","selectors":[".m-y-auto"],"declarations":[{"type":"declaration","property":"vertical-align","value":"center"}]},{"type":"rule","selectors":[".ns-modal",".ns-root"],"declarations":[{"type":"declaration","property":"background-color","value":"#fff"},{"type":"declaration","property":"color","value":"#262626"},{"type":"declaration","property":"font-family","value":"sans-serif"},{"type":"declaration","property":"font-size","value":"12"}]},{"type":"rule","selectors":[".ns-dark.ns-modal",".ns-dark.ns-root"],"declarations":[{"type":"declaration","property":"background-color","value":"#303030"},{"type":"declaration","property":"color","value":"white"}]},{"type":"rule","selectors":[".-hidden",".hidden"],"declarations":[{"type":"declaration","property":"visibility","value":"collapsed"}]},{"type":"rule","selectors":[".-rounded",".rounded"],"declarations":[{"type":"declaration","property":"border-radius","value":"4"}]},{"type":"rule","selectors":[".-circle"],"declarations":[{"type":"declaration","property":"border-radius","value":"50%"}]},{"type":"comment","comment":" Dividers "},{"type":"rule","selectors":[".hr"],"declarations":[{"type":"declaration","property":"height","value":"1"},{"type":"declaration","property":"width","value":"100%"},{"type":"declaration","property":"margin","value":"9 0 10"},{"type":"declaration","property":"border-width","value":"0 0 1"},{"type":"declaration","property":"border-style","value":"solid"}]},{"type":"rule","selectors":[".text-muted"],"declarations":[{"type":"declaration","property":"color","value":"#ace4ff"}]},{"type":"rule","selectors":[".ns-dark .text-muted"],"declarations":[{"type":"declaration","property":"color","value":"#446f83"}]},{"type":"rule","selectors":["Label > *","Label > * > *","Button > *","Button > * > *","TextField > *","TextField > * > *","TextView > *","TextView > * > *"],"declarations":[{"type":"declaration","property":"background-color","value":"transparent"}]},{"type":"rule","selectors":["ListView","RadListView"],"declarations":[{"type":"declaration","property":"min-height","value":"100"}]},{"type":"rule","selectors":["Image"],"declarations":[{"type":"declaration","property":"min-height","value":"20"}]},{"type":"rule","selectors":[".nt-icon"],"declarations":[{"type":"declaration","property":"font-size","value":"14"}]},{"type":"rule","selectors":["Button",".nt-button"],"declarations":[{"type":"declaration","property":"text-transform","value":"none"},{"type":"declaration","property":"border-color","value":"transparent"},{"type":"declaration","property":"min-width","value":"64"},{"type":"declaration","property":"height","value":"52"},{"type":"declaration","property":"padding","value":"0 5 0 5"},{"type":"declaration","property":"font-size","value":"14"},{"type":"declaration","property":"margin","value":"8 16 8 16"}]},{"type":"rule","selectors":[".ns-ios Button",".ns-ios .nt-button"],"declarations":[{"type":"declaration","property":"height","value":"40"},{"type":"declaration","property":"border-width","value":"0"}]},{"type":"rule","selectors":[".ns-android Button",".ns-android .nt-button"],"declarations":[{"type":"declaration","property":"margin","value":"4 12"}]},{"type":"rule","selectors":["Button.-outline",".nt-button.-outline"],"declarations":[{"type":"declaration","property":"height","value":"40"},{"type":"declaration","property":"border-width","value":"1"}]},{"type":"rule","selectors":[".ns-android Button.-outline",".ns-android .nt-button.-outline"],"declarations":[{"type":"declaration","property":"margin","value":"8 16"}]},{"type":"rule","selectors":["Button.-rounded-sm","Button.-rounded-lg",".nt-button.-rounded-sm",".nt-button.-rounded-lg"],"declarations":[{"type":"declaration","property":"height","value":"40"},{"type":"declaration","property":"border-radius","value":"4"}]},{"type":"rule","selectors":[".ns-android Button.-rounded-sm",".ns-android Button.-rounded-lg",".ns-android .nt-button.-rounded-sm",".ns-android .nt-button.-rounded-lg"],"declarations":[{"type":"declaration","property":"margin","value":"8 16"}]},{"type":"rule","selectors":["Button.-rounded-lg",".nt-button.-rounded-lg"],"declarations":[{"type":"declaration","property":"border-radius","value":"50%"}]},{"type":"rule","selectors":["Button[isEnabled=false]",".nt-button[isEnabled=false]"],"declarations":[{"type":"declaration","property":"opacity","value":"0.5"}]},{"type":"rule","selectors":["Button.-simple",".nt-button.-simple"],"declarations":[{"type":"declaration","property":"android-elevation","value":"0"},{"type":"declaration","property":"android-dynamic-elevation-offset","value":"0"}]},{"type":"rule","selectors":[".ns-root Button.-aqua",".ns-root .nt-button.-aqua"],"declarations":[{"type":"declaration","property":"border-color","value":"#00caab"},{"type":"declaration","property":"color","value":"#00caab"}]},{"type":"rule","selectors":[".ns-dark.ns-root Button.-aqua",".ns-dark.ns-root .nt-button.-aqua"],"declarations":[{"type":"declaration","property":"border-color","value":"#00caab"},{"type":"declaration","property":"color","value":"#00caab"}]},{"type":"rule","selectors":[".ns-root Button.-aqua.-primary",".ns-root .nt-button.-aqua.-primary"],"declarations":[{"type":"declaration","property":"color","value":"#fdffff"},{"type":"declaration","property":"background-color","value":"#00caab"}]},{"type":"rule","selectors":[".ns-dark.ns-root Button.-aqua.-primary",".ns-dark.ns-root .nt-button.-aqua.-primary"],"declarations":[{"type":"declaration","property":"color","value":"#fdffff"},{"type":"declaration","property":"background-color","value":"#00caab"}]},{"type":"rule","selectors":[".ns-root Button.-blue",".ns-root .nt-button.-blue"],"declarations":[{"type":"declaration","property":"border-color","value":"#3a53ff"},{"type":"declaration","property":"color","value":"#3a53ff"}]},{"type":"rule","selectors":[".ns-dark.ns-root Button.-blue",".ns-dark.ns-root .nt-button.-blue"],"declarations":[{"type":"declaration","property":"border-color","value":"#3a53ff"},{"type":"declaration","property":"color","value":"#3a53ff"}]},{"type":"rule","selectors":[".ns-root Button.-blue.-primary",".ns-root .nt-button.-blue.-primary"],"declarations":[{"type":"declaration","property":"color","value":"white"},{"type":"declaration","property":"background-color","value":"#3a53ff"}]},{"type":"rule","selectors":[".ns-dark.ns-root Button.-blue.-primary",".ns-dark.ns-root .nt-button.-blue.-primary"],"declarations":[{"type":"declaration","property":"color","value":"white"},{"type":"declaration","property":"background-color","value":"#3a53ff"}]},{"type":"rule","selectors":[".ns-root Button.-brown",".ns-root .nt-button.-brown"],"declarations":[{"type":"declaration","property":"border-color","value":"#795548"},{"type":"declaration","property":"color","value":"#795548"}]},{"type":"rule","selectors":[".ns-dark.ns-root Button.-brown",".ns-dark.ns-root .nt-button.-brown"],"declarations":[{"type":"declaration","property":"border-color","value":"#795548"},{"type":"declaration","property":"color","value":"#795548"}]},{"type":"rule","selectors":[".ns-root Button.-brown.-primary",".ns-root .nt-button.-brown.-primary"],"declarations":[{"type":"declaration","property":"color","value":"#fbf9f8"},{"type":"declaration","property":"background-color","value":"#795548"}]},{"type":"rule","selectors":[".ns-dark.ns-root Button.-brown.-primary",".ns-dark.ns-root .nt-button.-brown.-primary"],"declarations":[{"type":"declaration","property":"color","value":"#fbf9f8"},{"type":"declaration","property":"background-color","value":"#795548"}]},{"type":"rule","selectors":[".ns-root Button.-forest",".ns-root .nt-button.-forest"],"declarations":[{"type":"declaration","property":"border-color","value":"#006968"},{"type":"declaration","property":"color","value":"#006968"}]},{"type":"rule","selectors":[".ns-dark.ns-root Button.-forest",".ns-dark.ns-root .nt-button.-forest"],"declarations":[{"type":"declaration","property":"border-color","value":"#006968"},{"type":"declaration","property":"color","value":"#006968"}]},{"type":"rule","selectors":[".ns-root Button.-forest.-primary",".ns-root .nt-button.-forest.-primary"],"declarations":[{"type":"declaration","property":"color","value":"#9cfffe"},{"type":"declaration","property":"background-color","value":"#006968"}]},{"type":"rule","selectors":[".ns-dark.ns-root Button.-forest.-primary",".ns-dark.ns-root .nt-button.-forest.-primary"],"declarations":[{"type":"declaration","property":"color","value":"#9cfffe"},{"type":"declaration","property":"background-color","value":"#006968"}]},{"type":"rule","selectors":[".ns-root Button.-grey",".ns-root .nt-button.-grey"],"declarations":[{"type":"declaration","property":"border-color","value":"#5c687c"},{"type":"declaration","property":"color","value":"#5c687c"}]},{"type":"rule","selectors":[".ns-dark.ns-root Button.-grey",".ns-dark.ns-root .nt-button.-grey"],"declarations":[{"type":"declaration","property":"border-color","value":"#5c687c"},{"type":"declaration","property":"color","value":"#5c687c"}]},{"type":"rule","selectors":[".ns-root Button.-grey.-primary",".ns-root .nt-button.-grey.-primary"],"declarations":[{"type":"declaration","property":"color","value":"white"},{"type":"declaration","property":"background-color","value":"#5c687c"}]},{"type":"rule","selectors":[".ns-dark.ns-root Button.-grey.-primary",".ns-dark.ns-root .nt-button.-grey.-primary"],"declarations":[{"type":"declaration","property":"color","value":"white"},{"type":"declaration","property":"background-color","value":"#5c687c"}]},{"type":"rule","selectors":[".ns-root Button.-lemon",".ns-root .nt-button.-lemon"],"declarations":[{"type":"declaration","property":"border-color","value":"#ffea00"},{"type":"declaration","property":"color","value":"#ffea00"}]},{"type":"rule","selectors":[".ns-dark.ns-root Button.-lemon",".ns-dark.ns-root .nt-button.-lemon"],"declarations":[{"type":"declaration","property":"border-color","value":"#ffea00"},{"type":"declaration","property":"color","value":"#ffea00"}]},{"type":"rule","selectors":[".ns-root Button.-lemon.-primary",".ns-root .nt-button.-lemon.-primary"],"declarations":[{"type":"declaration","property":"color","value":"black"},{"type":"declaration","property":"background-color","value":"#ffea00"}]},{"type":"rule","selectors":[".ns-dark.ns-root Button.-lemon.-primary",".ns-dark.ns-root .nt-button.-lemon.-primary"],"declarations":[{"type":"declaration","property":"color","value":"black"},{"type":"declaration","property":"background-color","value":"#ffea00"}]},{"type":"rule","selectors":[".ns-root Button.-lime",".ns-root .nt-button.-lime"],"declarations":[{"type":"declaration","property":"border-color","value":"#aee406"},{"type":"declaration","property":"color","value":"#aee406"}]},{"type":"rule","selectors":[".ns-dark.ns-root Button.-lime",".ns-dark.ns-root .nt-button.-lime"],"declarations":[{"type":"declaration","property":"border-color","value":"#aee406"},{"type":"declaration","property":"color","value":"#aee406"}]},{"type":"rule","selectors":[".ns-root Button.-lime.-primary",".ns-root .nt-button.-lime.-primary"],"declarations":[{"type":"declaration","property":"color","value":"black"},{"type":"declaration","property":"background-color","value":"#aee406"}]},{"type":"rule","selectors":[".ns-dark.ns-root Button.-lime.-primary",".ns-dark.ns-root .nt-button.-lime.-primary"],"declarations":[{"type":"declaration","property":"color","value":"black"},{"type":"declaration","property":"background-color","value":"#aee406"}]},{"type":"rule","selectors":[".ns-root Button.-orange",".ns-root .nt-button.-orange"],"declarations":[{"type":"declaration","property":"border-color","value":"#f57c00"},{"type":"declaration","property":"color","value":"#f57c00"}]},{"type":"rule","selectors":[".ns-dark.ns-root Button.-orange",".ns-dark.ns-root .nt-button.-orange"],"declarations":[{"type":"declaration","property":"border-color","value":"#f57c00"},{"type":"declaration","property":"color","value":"#f57c00"}]},{"type":"rule","selectors":[".ns-root Button.-orange.-primary",".ns-root .nt-button.-orange.-primary"],"declarations":[{"type":"declaration","property":"color","value":"black"},{"type":"declaration","property":"background-color","value":"#f57c00"}]},{"type":"rule","selectors":[".ns-dark.ns-root Button.-orange.-primary",".ns-dark.ns-root .nt-button.-orange.-primary"],"declarations":[{"type":"declaration","property":"color","value":"black"},{"type":"declaration","property":"background-color","value":"#f57c00"}]},{"type":"rule","selectors":[".ns-root Button.-purple",".ns-root .nt-button.-purple"],"declarations":[{"type":"declaration","property":"border-color","value":"#8130ff"},{"type":"declaration","property":"color","value":"#8130ff"}]},{"type":"rule","selectors":[".ns-dark.ns-root Button.-purple",".ns-dark.ns-root .nt-button.-purple"],"declarations":[{"type":"declaration","property":"border-color","value":"#8130ff"},{"type":"declaration","property":"color","value":"#8130ff"}]},{"type":"rule","selectors":[".ns-root Button.-purple.-primary",".ns-root .nt-button.-purple.-primary"],"declarations":[{"type":"declaration","property":"color","value":"white"},{"type":"declaration","property":"background-color","value":"#8130ff"}]},{"type":"rule","selectors":[".ns-dark.ns-root Button.-purple.-primary",".ns-dark.ns-root .nt-button.-purple.-primary"],"declarations":[{"type":"declaration","property":"color","value":"white"},{"type":"declaration","property":"background-color","value":"#8130ff"}]},{"type":"rule","selectors":[".ns-root Button.-ruby",".ns-root .nt-button.-ruby"],"declarations":[{"type":"declaration","property":"border-color","value":"#ff1744"},{"type":"declaration","property":"color","value":"#ff1744"}]},{"type":"rule","selectors":[".ns-dark.ns-root Button.-ruby",".ns-dark.ns-root .nt-button.-ruby"],"declarations":[{"type":"declaration","property":"border-color","value":"#ff1744"},{"type":"declaration","property":"color","value":"#ff1744"}]},{"type":"rule","selectors":[".ns-root Button.-ruby.-primary",".ns-root .nt-button.-ruby.-primary"],"declarations":[{"type":"declaration","property":"color","value":"white"},{"type":"declaration","property":"background-color","value":"#ff1744"}]},{"type":"rule","selectors":[".ns-dark.ns-root Button.-ruby.-primary",".ns-dark.ns-root .nt-button.-ruby.-primary"],"declarations":[{"type":"declaration","property":"color","value":"white"},{"type":"declaration","property":"background-color","value":"#ff1744"}]},{"type":"rule","selectors":[".ns-root Button.-sky",".ns-root .nt-button.-sky"],"declarations":[{"type":"declaration","property":"border-color","value":"#30bcff"},{"type":"declaration","property":"color","value":"#30bcff"}]},{"type":"rule","selectors":[".ns-dark.ns-root Button.-sky",".ns-dark.ns-root .nt-button.-sky"],"declarations":[{"type":"declaration","property":"border-color","value":"#30bcff"},{"type":"declaration","property":"color","value":"#30bcff"}]},{"type":"rule","selectors":[".ns-root Button.-sky.-primary",".ns-root .nt-button.-sky.-primary"],"declarations":[{"type":"declaration","property":"color","value":"white"},{"type":"declaration","property":"background-color","value":"#30bcff"}]},{"type":"rule","selectors":[".ns-dark.ns-root Button.-sky.-primary",".ns-dark.ns-root .nt-button.-sky.-primary"],"declarations":[{"type":"declaration","property":"color","value":"white"},{"type":"declaration","property":"background-color","value":"#30bcff"}]},{"type":"rule","selectors":["Frame",".nt-frame"],"declarations":[{"type":"declaration","property":"background-color","value":"#fff"}]},{"type":"rule","selectors":[".ns-dark Frame",".ns-dark .nt-frame"],"declarations":[{"type":"declaration","property":"background-color","value":"#303030"}]},{"type":"rule","selectors":["Page",".nt-page"],"declarations":[{"type":"declaration","property":"color","value":"#262626"},{"type":"declaration","property":"background-color","value":"#fff"}]},{"type":"rule","selectors":[".ns-dark Page",".ns-dark .nt-page"],"declarations":[{"type":"declaration","property":"color","value":"white"},{"type":"declaration","property":"background-color","value":"#303030"}]},{"type":"rule","selectors":["ActivityIndicator",".nt-activity-indicator"],"declarations":[{"type":"declaration","property":"width","value":"30"},{"type":"declaration","property":"height","value":"30"}]},{"type":"rule","selectors":["Slider",".nt-slider"],"declarations":[{"type":"declaration","property":"margin","value":"20 16"}]},{"type":"rule","selectors":[".ns-ios Slider",".ns-ios .nt-slider"],"declarations":[{"type":"declaration","property":"margin","value":"10 15"}]},{"type":"rule","selectors":["Slider[isEnabled=false]",".nt-slider[isEnabled=false]"],"declarations":[{"type":"declaration","property":"background-color","value":"#e0e0e0"},{"type":"declaration","property":"color","value":"#e0e0e0"}]},{"type":"rule","selectors":[".ns-android Switch",".ns-android .nt-switch"],"declarations":[{"type":"declaration","property":"margin","value":"14 16"}]},{"type":"rule","selectors":[".ns-android Switch[isEnabled=false]",".ns-android .nt-switch[isEnabled=false]"],"declarations":[{"type":"declaration","property":"color","value":"#e6e6e6"}]},{"type":"rule","selectors":[".ns-dark.ns-android Switch[isEnabled=false]",".ns-dark.ns-android .nt-switch[isEnabled=false]"],"declarations":[{"type":"declaration","property":"color","value":"#4a4a4a"}]},{"type":"rule","selectors":[".ns-ios Switch",".ns-ios .nt-switch"],"declarations":[{"type":"declaration","property":"margin","value":"8 15"}]},{"type":"rule","selectors":[".ns-ios Switch[isEnabled=false]",".ns-ios .nt-switch[isEnabled=false]"],"declarations":[{"type":"declaration","property":"background-color","value":"rgba(48, 188, 255, 0.4)"}]},{"type":"rule","selectors":[".ns-dark.ns-ios Switch[isEnabled=false]",".ns-dark.ns-ios .nt-switch[isEnabled=false]"],"declarations":[{"type":"declaration","property":"background-color","value":"rgba(99, 205, 255, 0.4)"}]},{"type":"rule","selectors":["TabView",".nt-tab-view"],"declarations":[{"type":"declaration","property":"tab-text-font-size","value":"14"},{"type":"declaration","property":"text-transform","value":"capitalize"}]},{"type":"rule","selectors":["BottomNavigation",".nt-bottom-navigation"],"declarations":[{"type":"declaration","property":"font-size","value":"10"}]},{"type":"rule","selectors":["ListView","RadListView",".nt-list-view"],"declarations":[{"type":"declaration","property":"background-color","value":"transparent"}]},{"type":"rule","selectors":["ListView StackLayout","RadListView StackLayout",".nt-list-view StackLayout"],"declarations":[{"type":"declaration","property":"padding","value":"8"}]},{"type":"rule","selectors":["ListView > *","RadListView > *",".nt-list-view > *"],"declarations":[{"type":"declaration","property":"background-color","value":"transparent"},{"type":"declaration","property":"padding","value":"8"},{"type":"declaration","property":"margin","value":"0"}]},{"type":"rule","selectors":["ListView > * Label","RadListView > * Label",".nt-list-view > * Label"],"declarations":[{"type":"declaration","property":"padding","value":"5"},{"type":"declaration","property":"vertical-align","value":"center"}]},{"type":"rule","selectors":["ListView .thumb","ListView .-thumb","RadListView .thumb","RadListView .-thumb",".nt-list-view .thumb",".nt-list-view .-thumb"],"declarations":[{"type":"declaration","property":"stretch","value":"fill"},{"type":"declaration","property":"width","value":"40"},{"type":"declaration","property":"height","value":"40"},{"type":"declaration","property":"min-height","value":"0"},{"type":"declaration","property":"margin-right","value":"16"}]},{"type":"rule","selectors":["ListView.-single-col-cards Image","RadListView.-single-col-cards Image",".nt-list-view.-single-col-cards Image"],"declarations":[{"type":"declaration","property":"width","value":"100%"},{"type":"declaration","property":"height","value":"200"}]},{"type":"rule","selectors":["ListView.-two-col-cards Image","RadListView.-two-col-cards Image",".nt-list-view.-two-col-cards Image"],"declarations":[{"type":"declaration","property":"height","value":"100"}]},{"type":"rule","selectors":[".ns-ios ListView.-two-col-cards > StackLayout",".ns-ios RadListView.-two-col-cards > StackLayout",".ns-ios .nt-list-view.-two-col-cards > StackLayout"],"declarations":[{"type":"declaration","property":"width","value":"50%"}]},{"type":"rule","selectors":[".ns-ios ListView.-two-col-cards > StackLayout Image",".ns-ios RadListView.-two-col-cards > StackLayout Image",".ns-ios .nt-list-view.-two-col-cards > StackLayout Image"],"declarations":[{"type":"declaration","property":"horizontal-align","value":"left"},{"type":"declaration","property":"width","value":"100%"}]},{"type":"rule","selectors":["ListView.-two-lines-image Image","ListView.-single-line-image Image","RadListView.-two-lines-image Image","RadListView.-single-line-image Image",".nt-list-view.-two-lines-image Image",".nt-list-view.-single-line-image Image"],"declarations":[{"type":"declaration","property":"width","value":"60"},{"type":"declaration","property":"height","value":"60"},{"type":"declaration","property":"margin-right","value":"10"},{"type":"declaration","property":"margin-bottom","value":"0"}]},{"type":"rule","selectors":["ListView .-separator","RadListView .-separator",".nt-list-view .-separator"],"declarations":[{"type":"declaration","property":"border-bottom-width","value":"1"}]},{"type":"rule","selectors":["ListView .nt-list-view__delete","RadListView .nt-list-view__delete",".nt-list-view .nt-list-view__delete"],"declarations":[{"type":"declaration","property":"padding","value":"0 10"}]},{"type":"rule","selectors":[".ns-ios ListView .nt-list-view__delete",".ns-ios RadListView .nt-list-view__delete",".ns-ios .nt-list-view .nt-list-view__delete"],"declarations":[{"type":"declaration","property":"padding","value":"0 10 0 25"}]},{"type":"rule","selectors":["ListView .nt-list-view__delete > Label","RadListView .nt-list-view__delete > Label",".nt-list-view .nt-list-view__delete > Label"],"declarations":[{"type":"declaration","property":"horizontal-align","value":"center"},{"type":"declaration","property":"vertical-align","value":"center"},{"type":"declaration","property":"text-transform","value":"capitalize"}]},{"type":"rule","selectors":["ListView .nt-icon","RadListView .nt-icon",".nt-list-view .nt-icon"],"declarations":[{"type":"declaration","property":"font-size","value":"16"},{"type":"declaration","property":"width","value":"56"},{"type":"declaration","property":"height","value":"100%"},{"type":"declaration","property":"text-align","value":"center"}]},{"type":"rule","selectors":["RadListView > StackLayout"],"declarations":[{"type":"declaration","property":"padding","value":"0"}]},{"type":"rule","selectors":["RadListView > * > *"],"declarations":[{"type":"declaration","property":"background-color","value":"transparent"}]},{"type":"rule","selectors":["RadSideDrawer .nt-drawer__header",".nt-drawer .nt-drawer__header"],"declarations":[{"type":"declaration","property":"width","value":"100%"},{"type":"declaration","property":"vertical-align","value":"top"},{"type":"declaration","property":"padding","value":"35 0"}]},{"type":"rule","selectors":["RadSideDrawer .nt-drawer__header Label",".nt-drawer .nt-drawer__header Label"],"declarations":[{"type":"declaration","property":"padding","value":"0"}]},{"type":"rule","selectors":["RadSideDrawer .nt-drawer__header > Label",".nt-drawer .nt-drawer__header > Label"],"declarations":[{"type":"declaration","property":"font-size","value":"18"}]},{"type":"rule","selectors":["RadSideDrawer .nt-drawer__header-image",".nt-drawer .nt-drawer__header-image"],"declarations":[{"type":"declaration","property":"height","value":"74"},{"type":"declaration","property":"width","value":"74"},{"type":"declaration","property":"border-radius","value":"50%"}]},{"type":"rule","selectors":["RadSideDrawer .nt-drawer__header-footnote",".nt-drawer .nt-drawer__header-footnote"],"declarations":[{"type":"declaration","property":"opacity","value":".5"}]},{"type":"rule","selectors":["RadSideDrawer .nt-drawer__header > Label","RadSideDrawer .nt-drawer__header-image",".nt-drawer .nt-drawer__header > Label",".nt-drawer .nt-drawer__header-image"],"declarations":[{"type":"declaration","property":"margin-left","value":"15"},{"type":"declaration","property":"margin-right","value":"15"},{"type":"declaration","property":"horizontal-align","value":"center"},{"type":"declaration","property":"text-align","value":"center"}]},{"type":"rule","selectors":["RadSideDrawer .nt-drawer__header.-left > Label","RadSideDrawer .nt-drawer__header.-left .nt-drawer__header-image",".nt-drawer .nt-drawer__header.-left > Label",".nt-drawer .nt-drawer__header.-left .nt-drawer__header-image"],"declarations":[{"type":"declaration","property":"horizontal-align","value":"left"}]},{"type":"rule","selectors":["RadSideDrawer .nt-drawer__list-item",".nt-drawer .nt-drawer__list-item"],"declarations":[{"type":"declaration","property":"padding-left","value":"15"},{"type":"declaration","property":"height","value":"48"},{"type":"declaration","property":"horizontal-align","value":"left"},{"type":"declaration","property":"width","value":"100%"},{"type":"declaration","property":"orientation","value":"horizontal"}]},{"type":"rule","selectors":["RadSideDrawer .nt-drawer__list-item Label",".nt-drawer .nt-drawer__list-item Label"],"declarations":[{"type":"declaration","property":"vertical-align","value":"center"}]},{"type":"rule","selectors":["RadSideDrawer .nt-drawer__list-item .nt-icon",".nt-drawer .nt-drawer__list-item .nt-icon"],"declarations":[{"type":"declaration","property":"font-size","value":"12"},{"type":"declaration","property":"width","value":"30"}]},{"type":"rule","selectors":["RadSideDrawer.ns-dark .nt-drawer__header",".nt-drawer.ns-dark .nt-drawer__header"],"declarations":[{"type":"declaration","property":"background-color","value":"#1e1e1e"}]},{"type":"rule","selectors":["RadSideDrawer.ns-dark .nt-drawer__header Label",".nt-drawer.ns-dark .nt-drawer__header Label"],"declarations":[{"type":"declaration","property":"color","value":"white"}]},{"type":"rule","selectors":["Form",".nt-form"],"declarations":[{"type":"declaration","property":"padding","value":"16 0 10"}]},{"type":"rule","selectors":["Form .-center",".nt-form .-center"],"declarations":[{"type":"declaration","property":"horizontal-align","value":"center"}]},{"type":"rule","selectors":["Form .nt-form__or-separator",".nt-form .nt-form__or-separator"],"declarations":[{"type":"declaration","property":"margin","value":"20 0"}]},{"type":"rule","selectors":["Form .nt-form__logo",".nt-form .nt-form__logo"],"declarations":[{"type":"declaration","property":"margin","value":"20 0"},{"type":"declaration","property":"width","value":"50%"}]},{"type":"rule","selectors":["Form .nt-form__validation-message",".nt-form .nt-form__validation-message"],"declarations":[{"type":"declaration","property":"margin","value":"1 0 0"},{"type":"declaration","property":"padding","value":"0"},{"type":"declaration","property":"height","value":"19"}]},{"type":"rule","selectors":["Form .nt-form__footer",".nt-form .nt-form__footer"],"declarations":[{"type":"declaration","property":"padding","value":"0"},{"type":"declaration","property":"horizontal-align","value":"center"}]},{"type":"rule","selectors":["Form .nt-form__footer Button",".nt-form .nt-form__footer Button"],"declarations":[{"type":"declaration","property":"width","value":"50%"},{"type":"declaration","property":"margin","value":"5"}]},{"type":"comment","comment":" Form Validation styling "},{"type":"rule","selectors":[".nt-input.ng-valid","TextView.ng-valid","TextField.ng-valid","PickerField.ng-valid","DatePickerField.ng-valid","TimePickerField.ng-valid","RadAutoCompleteTextView.ng-valid"],"declarations":[{"type":"declaration","property":"margin-bottom","value":"20"}]},{"type":"rule","selectors":[".nt-input.ng-invalid.ng-dirty","TextView.ng-invalid.ng-dirty","TextField.ng-invalid.ng-dirty","PickerField.ng-invalid.ng-dirty","DatePickerField.ng-invalid.ng-dirty","TimePickerField.ng-invalid.ng-dirty","RadAutoCompleteTextView.ng-invalid.ng-dirty"],"declarations":[{"type":"declaration","property":"margin-bottom","value":"0"},{"type":"declaration","property":"border-color","value":"#d50000"}]},{"type":"comment","comment":" Form fields "},{"type":"rule","selectors":[".nt-input","TextView","TextField","PickerField","DatePickerField","TimePickerField","DateTimePickerFields","DataFormEditorCore","RadAutoCompleteTextView"],"declarations":[{"type":"declaration","property":"border-width","value":"0 0 1"},{"type":"declaration","property":"border-radius","value":"0"},{"type":"declaration","property":"background-color","value":"transparent"},{"type":"declaration","property":"font-size","value":"12"},{"type":"declaration","property":"padding","value":"8 0 4"},{"type":"declaration","property":"margin","value":"5 16"}]},{"type":"rule","selectors":[".-rounded-sm",".-rounded-lg",".-border"],"declarations":[{"type":"declaration","property":"border-width","value":"1"},{"type":"declaration","property":"padding","value":"12 14"}]},{"type":"rule","selectors":[".-rounded-sm"],"declarations":[{"type":"declaration","property":"border-radius","value":"4"}]},{"type":"rule","selectors":[".-rounded-lg"],"declarations":[{"type":"declaration","property":"border-radius","value":"50%"}]},{"type":"rule","selectors":["[isEnabled=false]"],"declarations":[{"type":"declaration","property":"opacity","value":"0.5"}]},{"type":"rule","selectors":["TextView[editable=false]"],"declarations":[{"type":"declaration","property":"border-width","value":"0"}]},{"type":"rule","selectors":["Label","DataFormEditorLabel"],"declarations":[{"type":"declaration","property":"padding","value":"2 0"}]},{"type":"rule","selectors":["TextView"],"declarations":[{"type":"declaration","property":"min-height","value":"100"}]},{"type":"rule","selectors":["RadAutoCompleteTextView[displayMode=Tokens]"],"declarations":[{"type":"declaration","property":"padding","value":"4 0 8"}]},{"type":"rule","selectors":["RadAutoCompleteTextView Token"],"declarations":[{"type":"declaration","property":"border-radius","value":"50%"}]},{"type":"rule","selectors":[".ns-android TokenClearButton"],"declarations":[{"type":"declaration","property":"width","value":"18"},{"type":"declaration","property":"height","value":"18"},{"type":"declaration","property":"border-radius","value":"50%"},{"type":"declaration","property":"opacity","value":".6"}]},{"type":"comment","comment":" Date Picker "},{"type":"rule","selectors":["PickerField","DatePickerField","TimePickerField","DateTimePickerFields","DataFormEditorCore","RadAutoCompleteTextView"],"declarations":[{"type":"declaration","property":"background-repeat","value":"no-repeat"},{"type":"declaration","property":"background-position","value":"right center"}]},{"type":"rule","selectors":[".ns-ios PickerField",".ns-ios\n  DatePickerField",".ns-ios\n  TimePickerField",".ns-ios\n  DateTimePickerFields",".ns-ios\n  DataFormEditorCore",".ns-ios\n  RadAutoCompleteTextView"],"declarations":[{"type":"declaration","property":"background-size","value":"28 16"}]},{"type":"rule","selectors":["PropertyEditor[type='Date'] DataFormEditorCore","DatePickerField"],"declarations":[{"type":"declaration","property":"background-image","value":"url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFQAAAAwBAMAAAB9IEC+AAAAD1BMVEVHcEwAAAAAAAAAAAAAAADTrAj/AAAABHRSTlMAwBAgU5DCQwAAAFdJREFUSMdjYCAVuLi4oDHop5RJxAUDOCpgVcroggUIYFXKgk2pMw6lChhudXHAoZSBVkrRw26EKcUC6Kt0NAoGkVIWaFSNKh25Sgd7QURCZURCFUcLAAC2I2hEECBYPgAAAABJRU5ErkJggg==\")"}]},{"type":"comment","comment":" Time Picker "},{"type":"rule","selectors":["PropertyEditor[type='Time'] DataFormEditorCore","TimePickerField"],"declarations":[{"type":"declaration","property":"background-image","value":"url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFQAAAAwBAMAAAB9IEC+AAAALVBMVEVHcEwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACttl6nAAAADnRSTlMAYOBAwCAQ0FCAcPCwoEZwdhsAAAE2SURBVEjHY2AYLIB1Td27d89PBRBWyQhUCALPBQiq1HsHBY8IqGX1e/fuyWRjY0sQjd8N3e/eKSaAGGxC797twGs9UCWMDVSLzwly794mwNhs9949xK2SA8UgoBUNOJVGo5oj924rTqV+EEP53sGMfYLbU28ZkJUy3MPpMaZ3aqhKk94p4PS/AKpSRpxhUPeIAVUpg95zHJEKMwOhVO4d9sjlevcMXWneuwVYlfK8c0BXyvLuAI4AmICulPNdAValfO8M0JVyvHtArFJmqiqFACopbSBWKTsssBAAV2DBowABcEUBPGIRAFfEsmImOVzJBZ4IEQBXIoQnbaQc9JBAhoED3BkGlg3hAHc2hGVuhNYn1CgySCiISCjeSCk0SSiKIQX8DGPjTsIFPAnVBimVESlV3IABAKDkz5jHIcToAAAAAElFTkSuQmCC\")"}]},{"type":"comment","comment":" Date/Time Picker "},{"type":"rule","selectors":["DateTimePickerFields"],"declarations":[{"type":"declaration","property":"padding","value":"0"},{"type":"declaration","property":"background-image","value":"url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKgAAAAwBAMAAAB3UCypAAAALVBMVEVHcEwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACttl6nAAAADnRSTlMAQGDgwBAg0FCAcPCwoM9Ie+kAAAGcSURBVEjH5Ze/TsMwEMZD2pQWVRUZu0VijxASa8UTVJXYUXYWniDqilhgY+QBmBEjMw9RtTQlU79nICRyrDjxxYkdqYhviYe7X87/7s6WlQqAMDCgPwF15igpWhAOg9cQiD8DCtpHha7k9naYmcQeAZ1UQb/lzBmz2XoUdFFaU2ykc08WK3py3envNyCgVgPoA3CRLrhzBrybgdoJk40TqkdCxRMmg/rY5wfDWeHLBHRYCC4Je2kAeluMzcebAeg8C5S52Ij0oTb2RZeVbKsaQHu4LLpc47zBjdpI9t4rQm3Z/jeAhltxcrNYFzpgcXGoj0BzTU+wE11u8KIJHbOMyF36+NCE9vAouowk268OneBUdBlibR56dPDQTAcMXbaBZtZrCfSYHSmuEe40oeNyO6By+Glofk25VK4pDR2UE51KQqGheerjkqc+ZagvVg8iSStDWTnJRZQTZSgrfLmUCl8NlJVo/hOVEl0HbdVM1EFbtT110E4atG5ayUZNrzI0bc+fXfe+rj2v0E7zIdHJk6eTx5nluCUF1j/RDxQQPw3i9N+zAAAAAElFTkSuQmCC\")"}]},{"type":"rule","selectors":[".ns-ios DateTimePickerFields"],"declarations":[{"type":"declaration","property":"background-size","value":"56 16"}]},{"type":"rule","selectors":["DateTimePickerFields .input","DateTimePickerFields DatePickerField","DateTimePickerFields TimePickerField"],"declarations":[{"type":"declaration","property":"background-image","value":"none"},{"type":"declaration","property":"border-width","value":"0"},{"type":"declaration","property":"margin","value":"0"}]},{"type":"rule","selectors":[".ns-dark DateTimePickerFields .input",".ns-dark\n    DateTimePickerFields DatePickerField",".ns-dark\n    DateTimePickerFields TimePickerField"],"declarations":[{"type":"declaration","property":"background-image","value":"none"},{"type":"declaration","property":"background-color","value":"transparent"}]},{"type":"rule","selectors":["DateTimePickerFields TimePickerField"],"declarations":[{"type":"declaration","property":"margin-left","value":"-30"}]},{"type":"comment","comment":" Picker "},{"type":"rule","selectors":["PickerField"],"declarations":[{"type":"declaration","property":"background-image","value":"url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFQAAAAwBAMAAAB9IEC+AAAAGFBMVEVHcEwAAAAAAAAAAAAAAAAAAAAAAAAAAABoAtTLAAAAB3RSTlMAoPAw0BAgCEJU4wAAAEpJREFUSMdjYBgFgwUwChCtVLyQaEPLy4k1Nqm8nFhjmdWJN9Zo1NghZiwJSol3wKihA2ooCZk7hPj0x+pOdEHEEEJ88TYKBgoAAAC5JRg49rIWAAAAAElFTkSuQmCC\")"}]},{"type":"rule","selectors":["PickerPage.input"],"declarations":[{"type":"declaration","property":"padding","value":"0"},{"type":"declaration","property":"margin","value":"0"}]},{"type":"rule","selectors":["PickerPage ListView"],"declarations":[{"type":"declaration","property":"separator-color","value":"transparent"}]},{"type":"rule","selectors":["PickerPage ListView > *"],"declarations":[{"type":"declaration","property":"height","value":"48"},{"type":"declaration","property":"margin-top","value":"0"},{"type":"declaration","property":"padding","value":"10 12"},{"type":"declaration","property":"border-bottom-width","value":"1px"}]},{"type":"rule","selectors":[".ns-dark PickerField"],"declarations":[{"type":"declaration","property":"background-image","value":"url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFQAAAAwBAMAAAB9IEC+AAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAYUExURUdwTP///////////////////////////x1LVb4AAAAHdFJOUwCg8DDQECAIQlTjAAAASklEQVRIx2NgGAWDBTAKEK1UvJBoQ8vLiTU2qbycWGOZ1Yk31mjU2CFmLAlKiXfAqKEDaigJmTuE+PTH6k50QcQQQnzxNgoGCgAAALklGDj2shYAAAAASUVORK5CYII=\")"}]},{"type":"rule","selectors":[".ns-dark DatePickerField"],"declarations":[{"type":"declaration","property":"background-image","value":"url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFQAAAAwBAMAAAB9IEC+AAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAPUExURUdwTP///////////////xPgMRoAAAAEdFJOUwDAECBTkMJDAAAAV0lEQVRIx2NgIBW4uLigMeinlEnEBQM4KmBVyuiCBQhgVcqCTakzDqUKGG51ccChlIFWStHDboQpxQLoq3Q0CgaRUhZoVI0qHblKB3tBREJlREIVRwsAALYjaEQQIFg+AAAAAElFTkSuQmCC\")"}]},{"type":"rule","selectors":[".ns-dark TimePickerField"],"declarations":[{"type":"declaration","property":"background-image","value":"url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFQAAAAwBAMAAAB9IEC+AAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAtUExURUdwTP///////////////////////////////////////////////////////81e3QIAAAAOdFJOUwBg4EDAIBDQUHDwsKCA4isvJAAAATZJREFUSMdjYBgsgHV23bt3z3cGEFbJCFQIAs8FCKrUewcFjwioZfV79+7JZWNjWxCN3w1d794pJoAYbELv3q3Aaz1QJYwNVIvPCXLv3iTA2Gzn3j3ErZIDxSCgFQ04lUahmiP3bilOpX4QQ/newYx9gttTbxiQlTKcw+kxpndqqEqT3ing9L8AqlJGnGFQ94gBVSmD3nMckQozA6FU7h32yOV89wxdad67CViVcr9zQFfK8m4DjgC4gK6U910BVqV87wzQlXK8e0CsUmaqKoUAKiltIFYpOyywEABXYMGjAAFwRQE8YhEAV8SyYiY5XMkFnggRAFcihCdtpBz0kECGgQPcGQaWDeEAdzaEZW6E1ifUKDJIKIhIKN5IKTRJKIohBfwNY+NewgU8CdUGKZURKVXcgAEAq1LPmF1qDewAAAAASUVORK5CYII=\")"}]},{"type":"rule","selectors":[".ns-dark DateTimePickerFields"],"declarations":[{"type":"declaration","property":"background-image","value":"url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKgAAAAwBAMAAAB3UCypAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAtUExURUdwTP///////////////////////////////////////////////////////81e3QIAAAAOdFJOUwBAYODAECDQUHDwsKCAaxMi1gAAAZxJREFUSMfll89Kw0AQxmPa1EppMQ9QCHgPIngtPkEpeJecPfkEoWdB8O5dPHr1JYrePLY2NZfyPYMxYbNkk51sshuo+F2yh5lfZv/NzFpWKgDCwID+BNSZo6RoQTgMnkIgfgsoaB8VupLb22FmEnsEdFIF/ZYzZ8xm61HQRWlNsZHOPVms6MN1p7/fgIBaDaD3wEW64M4Z8GIGaidMNk6oHgkVT5gM6mOfHwxnhS8T0GEhuCTspQHobTE2H88GoPMsUOZiI9KH2tgXXVayrWoA7eGy6HKN8wY3aiPZe68ItWX73wAabsXJzWJd6IDFxaE+As01PcFOdLnBoyZ0xDIid+njVRPaw7voMpZsvzp0glPRZYi1eejRwUMzHTB02QaaWa8l0GN2pLjGuNOEjsrtgMrhp6H5NeVSuaY0dFBOdCoJhYbmqY9LnvqUob5YPYgkrQxl5SQXUU6Uoazw5VIqfDVQVqL5T1RKdB20VTNRB23V9tRBO2nQumklGzW9ytC0Pf903Ye69rxCO82HRCdPnk4eZ5bjlhRY/0Q/Hn4/DfXSncYAAAAASUVORK5CYII=\")"}]},{"type":"rule","selectors":[".ns-dark PickerField",".ns-dark DatePickerField",".ns-dark TimePickerField",".ns-dark DateTimePickerFields",".ns-dark RadAutoCompleteTextView"],"declarations":[{"type":"declaration","property":"class","value":"ns-dark"}]},{"type":"rule","selectors":["RadDataForm PropertyEditor"],"declarations":[{"type":"declaration","property":"padding","value":"5 0 0"}]},{"type":"rule","selectors":["FlexboxLayout.nt-input","GridLayout.nt-input","StackLayout.nt-input"],"declarations":[{"type":"declaration","property":"border-width","value":"0"},{"type":"declaration","property":"border-radius","value":"0"},{"type":"declaration","property":"padding","value":"0"}]},{"type":"rule","selectors":["DataFormEditorLabel",".nt-input > .nt-label",".nt-input > Label"],"declarations":[{"type":"declaration","property":"font-size","value":"12"},{"type":"declaration","property":"color","value":"#bababa"}]},{"type":"rule","selectors":["DataFormEditorLabel",".nt-input > .nt-label",".nt-input > .nt-input",".nt-input > Label",".nt-input > TextView",".nt-input > TextField",".nt-input > PickerField",".nt-input > DatePickerField",".nt-input > TimePickerField",".nt-input > DateTimePickerFields",".nt-input > RadAutoCompleteTextView"],"declarations":[{"type":"declaration","property":"margin","value":"0"}]},{"type":"rule","selectors":[".nt-input.-sides"],"declarations":[{"type":"declaration","property":"margin-bottom","value":"10"}]},{"type":"rule","selectors":[".nt-input > .nt-icon"],"declarations":[{"type":"declaration","property":"font-size","value":"16"},{"type":"declaration","property":"vertical-align","value":"center"},{"type":"declaration","property":"horizontal-align","value":"right"},{"type":"declaration","property":"margin","value":"-15 10 0 0"}]},{"type":"rule","selectors":["ActionBar",".nt-action-bar"],"declarations":[{"type":"declaration","property":"font-size","value":"14"}]},{"type":"rule","selectors":[".ns-ios ActionBar",".ns-ios .nt-action-bar"],"declarations":[{"type":"declaration","property":"margin-left","value":"20"},{"type":"declaration","property":"vertical-align","value":"stretch"},{"type":"declaration","property":"horizontal-align","value":"stretch"}]},{"type":"rule","selectors":[".ns-landscape.ns-ios ActionBar",".ns-landscape.ns-ios .nt-action-bar"],"declarations":[{"type":"declaration","property":"margin-left","value":"100"},{"type":"declaration","property":"padding","value":"0 5"}]},{"type":"rule","selectors":["ActionBar Label","ActionBar Button","ActionBar .nt-action-bar__item",".nt-action-bar Label",".nt-action-bar Button",".nt-action-bar .nt-action-bar__item"],"declarations":[{"type":"declaration","property":"android-elevation","value":"0"},{"type":"declaration","property":"font-size","value":"12"},{"type":"declaration","property":"padding","value":"12 10 12 0"},{"type":"declaration","property":"margin","value":"0"},{"type":"declaration","property":"min-width","value":"0"},{"type":"declaration","property":"width","value":"auto"},{"type":"declaration","property":"border-width","value":"0"},{"type":"declaration","property":"text-transform","value":"none"},{"type":"declaration","property":"font-weight","value":"normal"}]},{"type":"rule","selectors":["ActionBar Label:active","ActionBar Button:active","ActionBar .nt-action-bar__item:active",".nt-action-bar Label:active",".nt-action-bar Button:active",".nt-action-bar .nt-action-bar__item:active"],"declarations":[{"type":"declaration","property":"opacity","value":".7"}]},{"type":"rule","selectors":["ActionBar > Label",".nt-action-bar > Label"],"declarations":[{"type":"declaration","property":"font-weight","value":"bold"},{"type":"declaration","property":"font-size","value":"14"}]},{"type":"rule","selectors":[".ns-statusbar-transparent Page > ActionBar",".ns-statusbar-transparent Page > .nt-action-bar"],"declarations":[{"type":"declaration","property":"padding-top","value":"24"}]},{"type":"rule","selectors":[".ns-android__19.ns-statusbar-transparent Page > ActionBar",".ns-modal.ns-statusbar-transparent Page > ActionBar",".ns-android__19.ns-statusbar-transparent Page > .nt-action-bar",".ns-modal.ns-statusbar-transparent Page > .nt-action-bar"],"declarations":[{"type":"declaration","property":"padding-top","value":"0"}]},{"type":"rule","selectors":[".ns-android ActionBar Button",".ns-android ActionBar .nt-button",".ns-android .nt-action-bar Button",".ns-android .nt-action-bar .nt-button"],"declarations":[{"type":"declaration","property":"padding","value":"0 6"}]},{"type":"rule","selectors":[".ns-android ActionBar > Label",".ns-android .nt-action-bar > Label"],"declarations":[{"type":"declaration","property":"width","value":"100%"}]},{"type":"rule","selectors":["ActionBar > Label","ActionBar > GridLayout Label",".nt-action-bar > Label",".nt-action-bar > GridLayout Label"],"declarations":[{"type":"declaration","property":"font-size","value":"14"},{"type":"declaration","property":"vertical-align","value":"center"},{"type":"declaration","property":"text-align","value":"center"}]},{"type":"rule","selectors":["ActionBar > GridLayout",".nt-action-bar > GridLayout"],"declarations":[{"type":"declaration","property":"width","value":"100%"},{"type":"declaration","property":"height","value":"100%"}]},{"type":"rule","selectors":["ActionBar > GridLayout > StackLayout",".nt-action-bar > GridLayout > StackLayout"],"declarations":[{"type":"declaration","property":"padding","value":"0"},{"type":"declaration","property":"horizontal-align","value":"left"}]},{"type":"rule","selectors":["ActionBar > GridLayout Button",".nt-action-bar > GridLayout Button"],"declarations":[{"type":"declaration","property":"padding","value":"12 10"},{"type":"declaration","property":"horizontal-align","value":"left"}]},{"type":"rule","selectors":["ActionBar > GridLayout [col=\"2\"]",".nt-action-bar > GridLayout [col=\"2\"]"],"declarations":[{"type":"declaration","property":"horizontal-align","value":"right"}]},{"type":"rule","selectors":[".ns-android ActionBar > GridLayout",".ns-android .nt-action-bar > GridLayout"],"declarations":[{"type":"declaration","property":"padding","value":"0 4"}]},{"type":"rule","selectors":[".ns-android ActionBar > GridLayout Button",".ns-android .nt-action-bar > GridLayout Button"],"declarations":[{"type":"declaration","property":"padding","value":"12 16"},{"type":"declaration","property":"margin","value":"0"}]},{"type":"rule","selectors":["Page",".ns-modal"],"declarations":[{"type":"declaration","property":"font-family","value":"\"Orkney-Regular\""}]},{"type":"rule","selectors":[".orkm"],"declarations":[{"type":"declaration","property":"font-family","value":"\"Orkney-Medium\""}]},{"type":"rule","selectors":[".bx"],"declarations":[{"type":"declaration","property":"font-family","value":"\"boxicons\""},{"type":"declaration","property":"font-size","value":"24"},{"type":"declaration","property":"vertical-alignment","value":"center"}]},{"type":"rule","selectors":[".bx.small"],"declarations":[{"type":"declaration","property":"padding","value":"0"},{"type":"declaration","property":"font-size","value":"16"}]},{"type":"rule","selectors":[".ns-light Page",".ns-light ActionBar",".ns-light SearchBar",".ns-light Tabs",".ns-light TabStripItem",".ns-light ListPicker"],"declarations":[{"type":"declaration","property":"color","value":"#212529"},{"type":"declaration","property":"background","value":"#f1f3f5"}]},{"type":"rule","selectors":[".ns-light MDRipple",".ns-light MDButton"],"declarations":[{"type":"declaration","property":"ripple-color","value":"rgba(134, 142, 150, 0.2)"}]},{"type":"rule","selectors":[".ns-light .hr"],"declarations":[{"type":"declaration","property":"border-color","value":"#dee2e6"}]},{"type":"rule","selectors":[".ns-light .sd",".ns-light .fieldLabel"],"declarations":[{"type":"declaration","property":"background","value":"#f1f3f5"}]},{"type":"rule","selectors":[".ns-light .urlCard",".ns-light .textCard",".ns-light .overviewItem",".ns-light .recipeItem"],"declarations":[{"type":"declaration","property":"background","value":"white"}]},{"type":"rule","selectors":[".ns-light TextField.combinationToken"],"declarations":[{"type":"declaration","property":"background","value":"#dee2e6"}]},{"type":"rule","selectors":[".ns-light .sd-item",".ns-light .sd-group-header",".ns-light .time .bx"],"declarations":[{"type":"declaration","property":"color","value":"#343a40"}]},{"type":"rule","selectors":[".ns-light .option .bx",".ns-light .option .info"],"declarations":[{"type":"declaration","property":"color","value":"#495057"}]},{"type":"rule","selectors":[".ns-light .imageHolder"],"declarations":[{"type":"declaration","property":"color","value":"#ced4da"},{"type":"declaration","property":"background","value":"#dee2e6"}]},{"type":"rule","selectors":[".ns-light .count",".ns-light .marker"],"declarations":[{"type":"declaration","property":"color","value":"#f1f3f5"},{"type":"declaration","property":"background","value":"#212529"}]},{"type":"rule","selectors":[".ns-light .instruction",".ns-light .dayContainer"],"declarations":[{"type":"declaration","property":"border-color","value":"#212529"}]},{"type":"rule","selectors":[".ns-light MDProgress"],"declarations":[{"type":"declaration","property":"progress-background-color","value":"#ced4da"}]},{"type":"rule","selectors":[".ns-light MDFloatingActionButton"],"declarations":[{"type":"declaration","property":"color","value":"white"}]},{"type":"rule","selectors":[".ns-light .appIconContainer"],"declarations":[{"type":"declaration","property":"background","value":"#ff5200"}]},{"type":"rule","selectors":[".ns-dark Page",".ns-dark ActionBar",".ns-dark SearchBar",".ns-dark Tabs",".ns-dark TabStripItem",".ns-dark ListPicker"],"declarations":[{"type":"declaration","property":"color","value":"#f1f3f5"},{"type":"declaration","property":"background","value":"#212529"}]},{"type":"rule","selectors":[".ns-dark MDRipple",".ns-dark MDButton"],"declarations":[{"type":"declaration","property":"ripple-color","value":"rgba(206, 212, 218, 0.1)"}]},{"type":"rule","selectors":[".ns-dark .hr"],"declarations":[{"type":"declaration","property":"border-color","value":"#111"}]},{"type":"rule","selectors":[".ns-dark .sd",".ns-dark .fieldLabel"],"declarations":[{"type":"declaration","property":"background","value":"#212529"}]},{"type":"rule","selectors":[".ns-dark .urlCard",".ns-dark .textCard",".ns-dark .overviewItem",".ns-dark .recipeItem",".ns-dark TextField.combinationToken"],"declarations":[{"type":"declaration","property":"background","value":"#343a40"}]},{"type":"rule","selectors":[".ns-dark .sd-item",".ns-dark .sd-group-header",".ns-dark .time .bx"],"declarations":[{"type":"declaration","property":"color","value":"#dee2e6"}]},{"type":"rule","selectors":[".ns-dark .option .bx",".ns-dark .option .info"],"declarations":[{"type":"declaration","property":"color","value":"#adb5bd"}]},{"type":"rule","selectors":[".ns-dark .imageHolder"],"declarations":[{"type":"declaration","property":"color","value":"#343a40"},{"type":"declaration","property":"background","value":"#111"}]},{"type":"rule","selectors":[".ns-dark .count",".ns-dark .marker"],"declarations":[{"type":"declaration","property":"color","value":"#212529"},{"type":"declaration","property":"background","value":"#f1f3f5"}]},{"type":"rule","selectors":[".ns-dark .instruction",".ns-dark .dayContainer"],"declarations":[{"type":"declaration","property":"border-color","value":"#f1f3f5"}]},{"type":"rule","selectors":[".ns-dark MDProgress"],"declarations":[{"type":"declaration","property":"progress-background-color","value":"#868e96"}]},{"type":"rule","selectors":[".ns-dark MDFloatingActionButton"],"declarations":[{"type":"declaration","property":"color","value":"#212529"}]},{"type":"rule","selectors":[".ns-dark .appIconContainer"],"declarations":[{"type":"declaration","property":"background","value":"#ff5200"}]},{"type":"rule","selectors":["TextField","TextView","TimePickerField"],"declarations":[{"type":"declaration","property":"width","value":"100%"},{"type":"declaration","property":"border-width","value":"1"},{"type":"declaration","property":"font-size","value":"14"},{"type":"declaration","property":"padding","value":"14 14 13"},{"type":"declaration","property":"margin","value":"8 0 0 0"},{"type":"declaration","property":"border-radius","value":"4"},{"type":"declaration","property":"border-color","value":"#868e96"},{"type":"declaration","property":"placeholder-color","value":"#868e96"}]},{"type":"rule","selectors":["TextView"],"declarations":[{"type":"declaration","property":"line-height","value":"12"}]},{"type":"rule","selectors":["SearchBar"],"declarations":[{"type":"declaration","property":"font-family","value":"\"Orkney-Regular\""},{"type":"declaration","property":"font-size","value":"16"},{"type":"declaration","property":"text-field-hint-color","value":"#868e96"}]},{"type":"rule","selectors":["TabView"],"declarations":[{"type":"declaration","property":"tab-text-color","value":"#868e96"}]},{"type":"rule","selectors":[".inputField"],"declarations":[{"type":"declaration","property":"margin-bottom","value":"4"}]},{"type":"rule","selectors":[".fieldLabel"],"declarations":[{"type":"declaration","property":"font-size","value":"12"},{"type":"declaration","property":"margin-left","value":"12"},{"type":"declaration","property":"padding","value":"0 4"}]},{"type":"rule","selectors":[".progressContainer"],"declarations":[{"type":"declaration","property":"width","value":"100%"}]},{"type":"rule","selectors":[".text-btn",".group-header",".category","MDActivityIndicator"],"declarations":[{"type":"declaration","property":"color","value":"#ff5200"}]},{"type":"rule","selectors":["MDProgress"],"declarations":[{"type":"declaration","property":"progress-color","value":"#ff5200"}]},{"type":"rule","selectors":["ActionBar"],"declarations":[{"type":"declaration","property":"margin","value":"0"},{"type":"declaration","property":"padding","value":"6 8"}]},{"type":"rule","selectors":["ActionBar GridLayout"],"declarations":[{"type":"declaration","property":"padding","value":"0"},{"type":"declaration","property":"margin","value":"0"}]},{"type":"rule","selectors":["ActionBar MDButton.bx"],"declarations":[{"type":"declaration","property":"padding","value":"0"},{"type":"declaration","property":"margin","value":"0"}]},{"type":"rule","selectors":["ActionBar MDButton.bx.flip"],"declarations":[{"type":"declaration","property":"transform","value":"scaleX(-1)"}]},{"type":"rule","selectors":["ActionBar .title"],"declarations":[{"type":"declaration","property":"padding-left","value":"12"},{"type":"declaration","property":"text-align","value":"left"},{"type":"declaration","property":"font-size","value":"18"}]},{"type":"rule","selectors":[".sd"],"declarations":[{"type":"declaration","property":"padding","value":"8"}]},{"type":"rule","selectors":[".sd-item"],"declarations":[{"type":"declaration","property":"border-radius","value":"4"},{"type":"declaration","property":"height","value":"48"},{"type":"declaration","property":"vertical-alignment","value":"center"}]},{"type":"rule","selectors":[".sd-item .bx"],"declarations":[{"type":"declaration","property":"font-size","value":"24"}]},{"type":"rule","selectors":[".sd-item.selected-sd-item"],"declarations":[{"type":"declaration","property":"color","value":"#ff5200"},{"type":"declaration","property":"background","value":"rgba(255, 82, 0, 0.1)"}]},{"type":"rule","selectors":[".sd-item.selected-sd-item MDRipple"],"declarations":[{"type":"declaration","property":"ripple-color","value":"transparent"}]},{"type":"rule","selectors":[".sd-item Label"],"declarations":[{"type":"declaration","property":"padding","value":"2 16 0 0"},{"type":"declaration","property":"font-size","value":"16"},{"type":"declaration","property":"vertical-alignment","value":"center"}]},{"type":"rule","selectors":[".sd-item Label.bx"],"declarations":[{"type":"declaration","property":"padding","value":"0 0 0 16"}]},{"type":"rule","selectors":[".sd-item MDRipple"],"declarations":[{"type":"declaration","property":"padding","value":"0 16"}]},{"type":"rule","selectors":[".sd-group-header"],"declarations":[{"type":"declaration","property":"width","value":"100%"},{"type":"declaration","property":"padding","value":"8"}]},{"type":"rule","selectors":["MDRipple"],"declarations":[{"type":"declaration","property":"border-radius","value":"4"}]},{"type":"rule","selectors":["MDButton"],"declarations":[{"type":"declaration","property":"padding","value":"8"},{"type":"declaration","property":"min-width","value":"0"},{"type":"declaration","property":"min-height","value":"0"}]},{"type":"rule","selectors":["MDButton.bx"],"declarations":[{"type":"declaration","property":"padding","value":"0"},{"type":"declaration","property":"width","value":"48"},{"type":"declaration","property":"height","value":"48"},{"type":"declaration","property":"margin","value":"0 8 0 0"},{"type":"declaration","property":"border-radius","value":"99"}]},{"type":"rule","selectors":[".emptyStateContainer"],"declarations":[{"type":"declaration","property":"width","value":"100%"},{"type":"declaration","property":"height","value":"100%"}]},{"type":"rule","selectors":[".emptyState"],"declarations":[{"type":"declaration","property":"line-height","value":"8"},{"type":"declaration","property":"padding","value":"0 32"},{"type":"declaration","property":"text-align","value":"center"},{"type":"declaration","property":"font-size","value":"16"},{"type":"declaration","property":"horizontal-alignment","value":"center"}]},{"type":"rule","selectors":[".emptyState .icon"],"declarations":[{"type":"declaration","property":"font-size","value":"64"},{"type":"declaration","property":"text-align","value":"center"},{"type":"declaration","property":"color","value":"#adb5bd"},{"type":"declaration","property":"margin-bottom","value":"16"}]},{"type":"rule","selectors":[".emptyState .logo"],"declarations":[{"type":"declaration","property":"width","value":"64"},{"type":"declaration","property":"margin-bottom","value":"16"}]},{"type":"rule","selectors":[".emptyState .title"],"declarations":[{"type":"declaration","property":"font-size","value":"20"},{"type":"declaration","property":"text-align","value":"center"},{"type":"declaration","property":"padding","value":"0"},{"type":"declaration","property":"margin","value":"0"},{"type":"declaration","property":"horizontal-alignment","value":"center"}]},{"type":"rule","selectors":[".emptyState .title .bx"],"declarations":[{"type":"declaration","property":"font-size","value":"24"},{"type":"declaration","property":"vertical-alignment","value":"center"}]},{"type":"rule","selectors":["RadListView"],"declarations":[{"type":"declaration","property":"margin","value":"0 0 128"},{"type":"declaration","property":"font-size","value":"16"}]},{"type":"rule","selectors":[".recipeItem"],"declarations":[{"type":"declaration","property":"margin","value":"8 16"},{"type":"declaration","property":"border-radius","value":"4"}]},{"type":"rule","selectors":[".recipeItem .recipeInfo"],"declarations":[{"type":"declaration","property":"margin","value":"4"}]},{"type":"rule","selectors":[".recipeItem .recipeInfo .category",".recipeItem .recipeInfo .time"],"declarations":[{"type":"declaration","property":"font-size","value":"12"},{"type":"declaration","property":"padding","value":"0"},{"type":"declaration","property":"margin","value":"0"}]},{"type":"rule","selectors":[".recipeItem .recipeInfo .title"],"declarations":[{"type":"declaration","property":"margin","value":"0"},{"type":"declaration","property":"padding","value":"4 0"}]},{"type":"rule","selectors":[".recipeItem .recipeInfo .timeContainer"],"declarations":[{"type":"declaration","property":"padding","value":"0"}]},{"type":"rule","selectors":[".recipeItem .recipeInfo .timeContainer .time"],"declarations":[{"type":"declaration","property":"padding","value":"0 0 0 4"}]},{"type":"rule","selectors":[".imageHolder"],"declarations":[{"type":"declaration","property":"vertical-alignment","value":"center"}]},{"type":"rule","selectors":[".imageHolder.card"],"declarations":[{"type":"declaration","property":"border-radius","value":"4 0 0 4"}]},{"type":"rule","selectors":[".imageHolder.card Image"],"declarations":[{"type":"declaration","property":"border-radius","value":"4 0 0 4"}]},{"type":"rule","selectors":[".swipe-item"],"declarations":[{"type":"declaration","property":"margin","value":"0 8"},{"type":"declaration","property":"background","value":"#c92a2a"},{"type":"declaration","property":"color","value":"#fff"},{"type":"declaration","property":"height","value":"128"},{"type":"declaration","property":"border-radius","value":"4"}]},{"type":"rule","selectors":[".group-header"],"declarations":[{"type":"declaration","property":"text-transform","value":"uppercase"},{"type":"declaration","property":"padding","value":"8"}]},{"type":"rule","selectors":[".main-container"],"declarations":[{"type":"declaration","property":"padding","value":"8 8 88"}]},{"type":"rule","selectors":[".main-container .option"],"declarations":[{"type":"declaration","property":"font-size","value":"16"}]},{"type":"rule","selectors":[".main-container .option .bx"],"declarations":[{"type":"declaration","property":"margin","value":"11 24 11 16"}]},{"type":"rule","selectors":[".main-container .option .info"],"declarations":[{"type":"declaration","property":"font-size","value":"12"},{"type":"declaration","property":"line-height","value":"4"}]},{"type":"rule","selectors":[".main-container .option StackLayout"],"declarations":[{"type":"declaration","property":"margin","value":"9 24 9 0"}]},{"type":"rule","selectors":[".appIconContainer"],"declarations":[{"type":"declaration","property":"background","value":"#ff5200"},{"type":"declaration","property":"padding","value":"24 0"},{"type":"declaration","property":"width","value":"100%"},{"type":"declaration","property":"border-radius","value":"4"}]},{"type":"rule","selectors":[".appIconContainer .appIcon"],"declarations":[{"type":"declaration","property":"height","value":"128"}]},{"type":"rule","selectors":[".viewRecipe .category",".viewRecipe .time",".viewRecipe .ingredient"],"declarations":[{"type":"declaration","property":"font-size","value":"16"}]},{"type":"rule","selectors":[".viewRecipe .category"],"declarations":[{"type":"declaration","property":"margin","value":"0 8"}]},{"type":"rule","selectors":[".viewRecipe .time"],"declarations":[{"type":"declaration","property":"margin","value":"0 8"}]},{"type":"rule","selectors":[".viewRecipe .time .bx"],"declarations":[{"type":"declaration","property":"vertical-align","value":"top"}]},{"type":"rule","selectors":[".viewRecipe .title"],"declarations":[{"type":"declaration","property":"font-size","value":"22"},{"type":"declaration","property":"line-height","value":"6"}]},{"type":"rule","selectors":[".viewRecipe .overviewContainer"],"declarations":[{"type":"declaration","property":"margin-top","value":"12"}]},{"type":"rule","selectors":[".viewRecipe .overviewContainer .overviewItem"],"declarations":[{"type":"declaration","property":"border-radius","value":"4"},{"type":"declaration","property":"margin","value":"8"},{"type":"declaration","property":"android-elevation","value":"1"}]},{"type":"rule","selectors":[".viewRecipe .overviewContainer .overviewItem .bx"],"declarations":[{"type":"declaration","property":"padding","value":"12 0 0 12"},{"type":"declaration","property":"color","value":"#868e96"},{"type":"declaration","property":"horizontal-alignment","value":"left"}]},{"type":"rule","selectors":[".viewRecipe .overviewContainer .overviewItem .itemCount"],"declarations":[{"type":"declaration","property":"font-size","value":"16"},{"type":"declaration","property":"padding","value":"8 12 12"}]},{"type":"rule","selectors":[".viewRecipe .ingredient"],"declarations":[{"type":"declaration","property":"line-height","value":"6"},{"type":"declaration","property":"padding-bottom","value":"0"}]},{"type":"rule","selectors":[".viewRecipe .count"],"declarations":[{"type":"declaration","property":"width","value":"24"},{"type":"declaration","property":"height","value":"24"},{"type":"declaration","property":"padding-top","value":"4%"},{"type":"declaration","property":"margin","value":"0 0 0 8"},{"type":"declaration","property":"text-align","value":"center"},{"type":"declaration","property":"border-radius","value":"99"}]},{"type":"rule","selectors":[".viewRecipe .instruction"],"declarations":[{"type":"declaration","property":"font-size","value":"16"},{"type":"declaration","property":"line-height","value":"6"},{"type":"declaration","property":"padding","value":"1 0 24 36"},{"type":"declaration","property":"margin","value":"0 0 0 19"},{"type":"declaration","property":"border-width","value":"0 0 0 2"}]},{"type":"rule","selectors":[".viewRecipe .instruction.noBorder"],"declarations":[{"type":"declaration","property":"border-color","value":"transparent"}]},{"type":"rule","selectors":[".viewRecipe .urlCard"],"declarations":[{"type":"declaration","property":"margin","value":"8 16"},{"type":"declaration","property":"border-radius","value":"4"},{"type":"declaration","property":"font-size","value":"16"}]},{"type":"rule","selectors":[".viewRecipe .urlCard .bx"],"declarations":[{"type":"declaration","property":"font-size","value":"24"}]},{"type":"rule","selectors":[".viewRecipe .urlCard .link"],"declarations":[{"type":"declaration","property":"padding","value":"13 16 13 11"},{"type":"declaration","property":"margin","value":"0"},{"type":"declaration","property":"line-height","value":"6"}]},{"type":"rule","selectors":[".viewRecipe .urlCard .linkIcon"],"declarations":[{"type":"declaration","property":"padding","value":"0 0 0 12"}]},{"type":"rule","selectors":[".viewRecipe .textCard"],"declarations":[{"type":"declaration","property":"font-size","value":"16"},{"type":"declaration","property":"line-height","value":"6"},{"type":"declaration","property":"padding","value":"13 16"},{"type":"declaration","property":"margin","value":"8 16"},{"type":"declaration","property":"border-radius","value":"4"}]},{"type":"rule","selectors":["#btnFabContainer"],"declarations":[{"type":"declaration","property":"z-index","value":"100"},{"type":"declaration","property":"width","value":"100%"},{"type":"declaration","property":"height","value":"100%"}]},{"type":"rule","selectors":["MDFloatingActionButton"],"declarations":[{"type":"declaration","property":"width","value":"56"},{"type":"declaration","property":"height","value":"56"},{"type":"declaration","property":"margin","value":"16"},{"type":"declaration","property":"background","value":"#ff5200"},{"type":"declaration","property":"ripple-color","value":"#ff864d"}]},{"type":"rule","selectors":[".sectionTitle"],"declarations":[{"type":"declaration","property":"font-size","value":"20"}]},{"type":"rule","selectors":[".text-btn"],"declarations":[{"type":"declaration","property":"font-size","value":"14"},{"type":"declaration","property":"horizontal-alignment","value":"left"},{"type":"declaration","property":"padding","value":"12"},{"type":"declaration","property":"margin","value":"8 0 0 0"},{"type":"declaration","property":"min-width","value":"0"}]},{"type":"rule","selectors":["MDButton.closeBtn"],"declarations":[{"type":"declaration","property":"margin","value":"16 0 0"},{"type":"declaration","property":"width","value":"32"},{"type":"declaration","property":"height","value":"32"},{"type":"declaration","property":"min-width","value":"0"},{"type":"declaration","property":"vertical-alignment","value":"top"}]},{"type":"rule","selectors":[".dayPlan"],"declarations":[{"type":"declaration","property":"padding","value":"0 0 88"},{"type":"declaration","property":"width","value":"100%"}]},{"type":"rule","selectors":[".dayPlan .plansContainer"],"declarations":[{"type":"declaration","property":"padding","value":"8 4"},{"type":"declaration","property":"color","value":"#212529"}]},{"type":"rule","selectors":[".dayPlan .plansContainer.breakfast"],"declarations":[{"type":"declaration","property":"background","value":"#ffb180"}]},{"type":"rule","selectors":[".dayPlan .plansContainer.lunch"],"declarations":[{"type":"declaration","property":"background","value":"#ceff80"}]},{"type":"rule","selectors":[".dayPlan .plansContainer.dinner"],"declarations":[{"type":"declaration","property":"background","value":"#80ceff"}]},{"type":"rule","selectors":[".dayPlan .plansContainer.snacks"],"declarations":[{"type":"declaration","property":"background","value":"#b180ff"}]},{"type":"rule","selectors":[".dayPlan .plansContainer .periodLabel"],"declarations":[{"type":"declaration","property":"text-transform","value":"uppercase"},{"type":"declaration","property":"vertical-alignment","value":"center"},{"type":"declaration","property":"font-size","value":"14"},{"type":"declaration","property":"padding","value":"0 0 0 16"}]},{"type":"rule","selectors":[".dayPlan .plansContainer .recipes"],"declarations":[{"type":"declaration","property":"margin","value":"4 8 4"}]},{"type":"rule","selectors":[".dayPlan .plansContainer .recipes .recipeTitle"],"declarations":[{"type":"declaration","property":"font-size","value":"14"},{"type":"declaration","property":"padding","value":"6 8"},{"type":"declaration","property":"line-height","value":"4"}]},{"type":"rule","selectors":[".dayPlan .plansContainer .recipes .closeBtn"],"declarations":[{"type":"declaration","property":"margin","value":"0 8"},{"type":"declaration","property":"vertical-alignment","value":"top"}]},{"type":"rule","selectors":[".dayPlan .plansContainer MDRipple",".dayPlan .plansContainer MDButton"],"declarations":[{"type":"declaration","property":"ripple-color","value":"rgba(134, 142, 150, 0.2)"}]},{"type":"rule","selectors":[".dialogContainer"],"declarations":[{"type":"declaration","property":"max-width","value":"480"},{"type":"declaration","property":"width","value":"100%"},{"type":"declaration","property":"color","value":"#212529"},{"type":"declaration","property":"background","value":"#f1f3f5"},{"type":"declaration","property":"font-size","value":"16"}]},{"type":"rule","selectors":[".dialogContainer.dark"],"declarations":[{"type":"declaration","property":"color","value":"#f1f3f5"},{"type":"declaration","property":"background","value":"#212529"}]},{"type":"rule","selectors":[".dialogContainer .dialogTitle"],"declarations":[{"type":"declaration","property":"line-height","value":"6"},{"type":"declaration","property":"padding","value":"24 24 16"},{"type":"declaration","property":"font-size","value":"20"}]},{"type":"rule","selectors":[".dialogContainer .dialogInput"],"declarations":[{"type":"declaration","property":"padding","value":"0 24 16"}]},{"type":"rule","selectors":[".dialogContainer .dialogDescription"],"declarations":[{"type":"declaration","property":"line-height","value":"6"},{"type":"declaration","property":"padding","value":"0 24 8"}]},{"type":"rule","selectors":[".dialogContainer .actionItem"],"declarations":[{"type":"declaration","property":"letter-spacing","value":"0"},{"type":"declaration","property":"text-transform","value":"none"},{"type":"declaration","property":"line-height","value":"6"},{"type":"declaration","property":"padding","value":"13 24"},{"type":"declaration","property":"margin","value":"0"}]},{"type":"rule","selectors":[".dialogContainer .actionsContainer"],"declarations":[{"type":"declaration","property":"padding","value":"8"}]},{"type":"rule","selectors":[".dialogContainer .action"],"declarations":[{"type":"declaration","property":"font-size","value":"12"},{"type":"declaration","property":"padding","value":"12"},{"type":"declaration","property":"min-width","value":"0"},{"type":"declaration","property":"color","value":"#ff7043"}]},{"type":"rule","selectors":[".dialogContainer MDButton.actionIcon"],"declarations":[{"type":"declaration","property":"width","value":"auto"},{"type":"declaration","property":"height","value":"auto"},{"type":"declaration","property":"min-width","value":"0"},{"type":"declaration","property":"padding","value":"16 24"},{"type":"declaration","property":"border-radius","value":"4"},{"type":"declaration","property":"letter-spacing","value":"0"},{"type":"declaration","property":"text-transform","value":"none"},{"type":"declaration","property":"margin","value":"0 16 16"}]},{"type":"rule","selectors":["MDActivityIndicator"],"declarations":[{"type":"declaration","property":"width","value":"24"},{"type":"declaration","property":"height","value":"24"},{"type":"declaration","property":"margin","value":"16 12"}]},{"type":"rule","selectors":[".bounce-enter-active"],"declarations":[{"type":"declaration","property":"animation-name","value":"bounce-in"},{"type":"declaration","property":"animation-duration","value":"1s"},{"type":"declaration","property":"animation-fill-mode","value":"forwards"},{"type":"declaration","property":"animation-timing-function","value":"ease-in-out"}]},{"type":"rule","selectors":[".bounce-leave-active"],"declarations":[{"type":"declaration","property":"animation-name","value":"bounce-out"},{"type":"declaration","property":"animation-duration","value":"0.25s"},{"type":"declaration","property":"animation-fill-mode","value":"forwards"}]},{"type":"keyframes","name":"bounce-in","keyframes":[{"type":"keyframe","values":["0%"],"declarations":[{"type":"declaration","property":"transform","value":"scale(0)"},{"type":"declaration","property":"opacity","value":"0"}]},{"type":"keyframe","values":["25%"],"declarations":[{"type":"declaration","property":"transform","value":"scale(1.2)"},{"type":"declaration","property":"opacity","value":"1"}]},{"type":"keyframe","values":["50%"],"declarations":[{"type":"declaration","property":"transform","value":"scale(0.9)"}]},{"type":"keyframe","values":["75%"],"declarations":[{"type":"declaration","property":"transform","value":"scale(1.1)"}]},{"type":"keyframe","values":["100%"],"declarations":[{"type":"declaration","property":"transform","value":"scale(1)"}]}]},{"type":"keyframes","name":"bounce-out","keyframes":[{"type":"keyframe","values":["0%"],"declarations":[{"type":"declaration","property":"transform","value":"scale(1)"}]},{"type":"keyframe","values":["100%"],"declarations":[{"type":"declaration","property":"transform","value":"scale(0)"},{"type":"declaration","property":"opacity","value":"0"}]}]},{"type":"rule","selectors":[".dolly-enter-active"],"declarations":[{"type":"declaration","property":"animation-name","value":"dolly"},{"type":"declaration","property":"animation-duration","value":"1s"},{"type":"declaration","property":"animation-delay","value":"0.25s"},{"type":"declaration","property":"animation-fill-mode","value":"forwards"},{"type":"declaration","property":"animation-timing-function","value":"ease-in-out"}]},{"type":"rule","selectors":[".dolly-leave-active"],"declarations":[{"type":"declaration","property":"opacity","value":"0"}]},{"type":"keyframes","name":"dolly","keyframes":[{"type":"keyframe","values":["0%"],"declarations":[{"type":"declaration","property":"transform","value":"rotate(20deg)"}]},{"type":"keyframe","values":["25%"],"declarations":[{"type":"declaration","property":"transform","value":"rotate(-20deg)"}]},{"type":"keyframe","values":["50%"],"declarations":[{"type":"declaration","property":"transform","value":"rotate(10deg)"}]},{"type":"keyframe","values":["75%"],"declarations":[{"type":"declaration","property":"transform","value":"rotate(-10deg)"}]},{"type":"keyframe","values":["100%"],"declarations":[{"type":"declaration","property":"transform","value":"rotate(0deg)"}]}]}],"parsingErrors":[]}};;
    if (true) {
        module.hot.accept();
        module.hot.dispose(() => {
            global.hmrRefresh({ type: 'style', path: './app.scss' });
        })
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./components/About.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _About_vue_vue_type_template_id_95337e7c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./components/About.vue?vue&type=template&id=95337e7c&");
/* harmony import */ var _About_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./components/About.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _About_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _About_vue_vue_type_template_id_95337e7c___WEBPACK_IMPORTED_MODULE_0__["render"],
  _About_vue_vue_type_template_id_95337e7c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (true) {
  var api = __webpack_require__("../node_modules/vue-hot-reload-api/dist/index.js")
  api.install(__webpack_require__("../node_modules/nativescript-vue/dist/index.js"))
  if (api.compatible) {
    module.hot.accept()
    if (!api.isRecorded('95337e7c')) {
      api.createRecord('95337e7c', component.options)
    } else {
      api.reload('95337e7c', component.options)
    }
    module.hot.accept("./components/About.vue?vue&type=template&id=95337e7c&", function(__WEBPACK_OUTDATED_DEPENDENCIES__) { /* harmony import */ _About_vue_vue_type_template_id_95337e7c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./components/About.vue?vue&type=template&id=95337e7c&");
(function () {
      api.rerender('95337e7c', {
        render: _About_vue_vue_type_template_id_95337e7c___WEBPACK_IMPORTED_MODULE_0__["render"],
        staticRenderFns: _About_vue_vue_type_template_id_95337e7c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]
      })
    })(__WEBPACK_OUTDATED_DEPENDENCIES__); }.bind(this))
  }
}
component.options.__file = "components/About.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./components/About.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_About_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/babel-loader/lib/index.js!../node_modules/vue-loader/lib/index.js?!./components/About.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_About_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./components/About.vue?vue&type=template&id=95337e7c&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_About_vue_vue_type_template_id_95337e7c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/vue-loader/lib/loaders/templateLoader.js?!../node_modules/vue-loader/lib/index.js?!./components/About.vue?vue&type=template&id=95337e7c&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_About_vue_vue_type_template_id_95337e7c___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_About_vue_vue_type_template_id_95337e7c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./components/App.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _App_vue_vue_type_template_id_45ba5ed4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./components/App.vue?vue&type=template&id=45ba5ed4&");
/* harmony import */ var _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./components/App.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _App_vue_vue_type_template_id_45ba5ed4___WEBPACK_IMPORTED_MODULE_0__["render"],
  _App_vue_vue_type_template_id_45ba5ed4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (true) {
  var api = __webpack_require__("../node_modules/vue-hot-reload-api/dist/index.js")
  api.install(__webpack_require__("../node_modules/nativescript-vue/dist/index.js"))
  if (api.compatible) {
    module.hot.accept()
    if (!api.isRecorded('45ba5ed4')) {
      api.createRecord('45ba5ed4', component.options)
    } else {
      api.reload('45ba5ed4', component.options)
    }
    module.hot.accept("./components/App.vue?vue&type=template&id=45ba5ed4&", function(__WEBPACK_OUTDATED_DEPENDENCIES__) { /* harmony import */ _App_vue_vue_type_template_id_45ba5ed4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./components/App.vue?vue&type=template&id=45ba5ed4&");
(function () {
      api.rerender('45ba5ed4', {
        render: _App_vue_vue_type_template_id_45ba5ed4___WEBPACK_IMPORTED_MODULE_0__["render"],
        staticRenderFns: _App_vue_vue_type_template_id_45ba5ed4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]
      })
    })(__WEBPACK_OUTDATED_DEPENDENCIES__); }.bind(this))
  }
}
component.options.__file = "components/App.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./components/App.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/babel-loader/lib/index.js!../node_modules/vue-loader/lib/index.js?!./components/App.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./components/App.vue?vue&type=template&id=45ba5ed4&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_45ba5ed4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/vue-loader/lib/loaders/templateLoader.js?!../node_modules/vue-loader/lib/index.js?!./components/App.vue?vue&type=template&id=45ba5ed4&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_45ba5ed4___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_45ba5ed4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./components/EditRecipe.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _EditRecipe_vue_vue_type_template_id_2dd987d3___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./components/EditRecipe.vue?vue&type=template&id=2dd987d3&");
/* harmony import */ var _EditRecipe_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./components/EditRecipe.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _EditRecipe_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _EditRecipe_vue_vue_type_template_id_2dd987d3___WEBPACK_IMPORTED_MODULE_0__["render"],
  _EditRecipe_vue_vue_type_template_id_2dd987d3___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (true) {
  var api = __webpack_require__("../node_modules/vue-hot-reload-api/dist/index.js")
  api.install(__webpack_require__("../node_modules/nativescript-vue/dist/index.js"))
  if (api.compatible) {
    module.hot.accept()
    if (!api.isRecorded('2dd987d3')) {
      api.createRecord('2dd987d3', component.options)
    } else {
      api.reload('2dd987d3', component.options)
    }
    module.hot.accept("./components/EditRecipe.vue?vue&type=template&id=2dd987d3&", function(__WEBPACK_OUTDATED_DEPENDENCIES__) { /* harmony import */ _EditRecipe_vue_vue_type_template_id_2dd987d3___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./components/EditRecipe.vue?vue&type=template&id=2dd987d3&");
(function () {
      api.rerender('2dd987d3', {
        render: _EditRecipe_vue_vue_type_template_id_2dd987d3___WEBPACK_IMPORTED_MODULE_0__["render"],
        staticRenderFns: _EditRecipe_vue_vue_type_template_id_2dd987d3___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]
      })
    })(__WEBPACK_OUTDATED_DEPENDENCIES__); }.bind(this))
  }
}
component.options.__file = "components/EditRecipe.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./components/EditRecipe.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_EditRecipe_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/babel-loader/lib/index.js!../node_modules/vue-loader/lib/index.js?!./components/EditRecipe.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_EditRecipe_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./components/EditRecipe.vue?vue&type=template&id=2dd987d3&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EditRecipe_vue_vue_type_template_id_2dd987d3___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/vue-loader/lib/loaders/templateLoader.js?!../node_modules/vue-loader/lib/index.js?!./components/EditRecipe.vue?vue&type=template&id=2dd987d3&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EditRecipe_vue_vue_type_template_id_2dd987d3___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EditRecipe_vue_vue_type_template_id_2dd987d3___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./components/EnRecipes.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _EnRecipes_vue_vue_type_template_id_5150c21e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./components/EnRecipes.vue?vue&type=template&id=5150c21e&");
/* harmony import */ var _EnRecipes_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./components/EnRecipes.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _EnRecipes_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _EnRecipes_vue_vue_type_template_id_5150c21e___WEBPACK_IMPORTED_MODULE_0__["render"],
  _EnRecipes_vue_vue_type_template_id_5150c21e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (true) {
  var api = __webpack_require__("../node_modules/vue-hot-reload-api/dist/index.js")
  api.install(__webpack_require__("../node_modules/nativescript-vue/dist/index.js"))
  if (api.compatible) {
    module.hot.accept()
    if (!api.isRecorded('5150c21e')) {
      api.createRecord('5150c21e', component.options)
    } else {
      api.reload('5150c21e', component.options)
    }
    module.hot.accept("./components/EnRecipes.vue?vue&type=template&id=5150c21e&", function(__WEBPACK_OUTDATED_DEPENDENCIES__) { /* harmony import */ _EnRecipes_vue_vue_type_template_id_5150c21e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./components/EnRecipes.vue?vue&type=template&id=5150c21e&");
(function () {
      api.rerender('5150c21e', {
        render: _EnRecipes_vue_vue_type_template_id_5150c21e___WEBPACK_IMPORTED_MODULE_0__["render"],
        staticRenderFns: _EnRecipes_vue_vue_type_template_id_5150c21e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]
      })
    })(__WEBPACK_OUTDATED_DEPENDENCIES__); }.bind(this))
  }
}
component.options.__file = "components/EnRecipes.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./components/EnRecipes.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_EnRecipes_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/babel-loader/lib/index.js!../node_modules/vue-loader/lib/index.js?!./components/EnRecipes.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_EnRecipes_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./components/EnRecipes.vue?vue&type=template&id=5150c21e&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EnRecipes_vue_vue_type_template_id_5150c21e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/vue-loader/lib/loaders/templateLoader.js?!../node_modules/vue-loader/lib/index.js?!./components/EnRecipes.vue?vue&type=template&id=5150c21e&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EnRecipes_vue_vue_type_template_id_5150c21e___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EnRecipes_vue_vue_type_template_id_5150c21e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./components/MealPlanner.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _MealPlanner_vue_vue_type_template_id_ed5c11f8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./components/MealPlanner.vue?vue&type=template&id=ed5c11f8&");
/* harmony import */ var _MealPlanner_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./components/MealPlanner.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _MealPlanner_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _MealPlanner_vue_vue_type_template_id_ed5c11f8___WEBPACK_IMPORTED_MODULE_0__["render"],
  _MealPlanner_vue_vue_type_template_id_ed5c11f8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (true) {
  var api = __webpack_require__("../node_modules/vue-hot-reload-api/dist/index.js")
  api.install(__webpack_require__("../node_modules/nativescript-vue/dist/index.js"))
  if (api.compatible) {
    module.hot.accept()
    if (!api.isRecorded('ed5c11f8')) {
      api.createRecord('ed5c11f8', component.options)
    } else {
      api.reload('ed5c11f8', component.options)
    }
    module.hot.accept("./components/MealPlanner.vue?vue&type=template&id=ed5c11f8&", function(__WEBPACK_OUTDATED_DEPENDENCIES__) { /* harmony import */ _MealPlanner_vue_vue_type_template_id_ed5c11f8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./components/MealPlanner.vue?vue&type=template&id=ed5c11f8&");
(function () {
      api.rerender('ed5c11f8', {
        render: _MealPlanner_vue_vue_type_template_id_ed5c11f8___WEBPACK_IMPORTED_MODULE_0__["render"],
        staticRenderFns: _MealPlanner_vue_vue_type_template_id_ed5c11f8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]
      })
    })(__WEBPACK_OUTDATED_DEPENDENCIES__); }.bind(this))
  }
}
component.options.__file = "components/MealPlanner.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./components/MealPlanner.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_MealPlanner_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/babel-loader/lib/index.js!../node_modules/vue-loader/lib/index.js?!./components/MealPlanner.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_MealPlanner_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./components/MealPlanner.vue?vue&type=template&id=ed5c11f8&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MealPlanner_vue_vue_type_template_id_ed5c11f8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/vue-loader/lib/loaders/templateLoader.js?!../node_modules/vue-loader/lib/index.js?!./components/MealPlanner.vue?vue&type=template&id=ed5c11f8&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MealPlanner_vue_vue_type_template_id_ed5c11f8___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MealPlanner_vue_vue_type_template_id_ed5c11f8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./components/Settings.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Settings_vue_vue_type_template_id_6c938a04___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./components/Settings.vue?vue&type=template&id=6c938a04&");
/* harmony import */ var _Settings_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./components/Settings.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Settings_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Settings_vue_vue_type_template_id_6c938a04___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Settings_vue_vue_type_template_id_6c938a04___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (true) {
  var api = __webpack_require__("../node_modules/vue-hot-reload-api/dist/index.js")
  api.install(__webpack_require__("../node_modules/nativescript-vue/dist/index.js"))
  if (api.compatible) {
    module.hot.accept()
    if (!api.isRecorded('6c938a04')) {
      api.createRecord('6c938a04', component.options)
    } else {
      api.reload('6c938a04', component.options)
    }
    module.hot.accept("./components/Settings.vue?vue&type=template&id=6c938a04&", function(__WEBPACK_OUTDATED_DEPENDENCIES__) { /* harmony import */ _Settings_vue_vue_type_template_id_6c938a04___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./components/Settings.vue?vue&type=template&id=6c938a04&");
(function () {
      api.rerender('6c938a04', {
        render: _Settings_vue_vue_type_template_id_6c938a04___WEBPACK_IMPORTED_MODULE_0__["render"],
        staticRenderFns: _Settings_vue_vue_type_template_id_6c938a04___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]
      })
    })(__WEBPACK_OUTDATED_DEPENDENCIES__); }.bind(this))
  }
}
component.options.__file = "components/Settings.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./components/Settings.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Settings_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/babel-loader/lib/index.js!../node_modules/vue-loader/lib/index.js?!./components/Settings.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Settings_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./components/Settings.vue?vue&type=template&id=6c938a04&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Settings_vue_vue_type_template_id_6c938a04___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/vue-loader/lib/loaders/templateLoader.js?!../node_modules/vue-loader/lib/index.js?!./components/Settings.vue?vue&type=template&id=6c938a04&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Settings_vue_vue_type_template_id_6c938a04___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Settings_vue_vue_type_template_id_6c938a04___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./components/ViewRecipe.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ViewRecipe_vue_vue_type_template_id_760a8eae___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./components/ViewRecipe.vue?vue&type=template&id=760a8eae&");
/* harmony import */ var _ViewRecipe_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./components/ViewRecipe.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ViewRecipe_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ViewRecipe_vue_vue_type_template_id_760a8eae___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ViewRecipe_vue_vue_type_template_id_760a8eae___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (true) {
  var api = __webpack_require__("../node_modules/vue-hot-reload-api/dist/index.js")
  api.install(__webpack_require__("../node_modules/nativescript-vue/dist/index.js"))
  if (api.compatible) {
    module.hot.accept()
    if (!api.isRecorded('760a8eae')) {
      api.createRecord('760a8eae', component.options)
    } else {
      api.reload('760a8eae', component.options)
    }
    module.hot.accept("./components/ViewRecipe.vue?vue&type=template&id=760a8eae&", function(__WEBPACK_OUTDATED_DEPENDENCIES__) { /* harmony import */ _ViewRecipe_vue_vue_type_template_id_760a8eae___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./components/ViewRecipe.vue?vue&type=template&id=760a8eae&");
(function () {
      api.rerender('760a8eae', {
        render: _ViewRecipe_vue_vue_type_template_id_760a8eae___WEBPACK_IMPORTED_MODULE_0__["render"],
        staticRenderFns: _ViewRecipe_vue_vue_type_template_id_760a8eae___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]
      })
    })(__WEBPACK_OUTDATED_DEPENDENCIES__); }.bind(this))
  }
}
component.options.__file = "components/ViewRecipe.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./components/ViewRecipe.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ViewRecipe_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/babel-loader/lib/index.js!../node_modules/vue-loader/lib/index.js?!./components/ViewRecipe.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ViewRecipe_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./components/ViewRecipe.vue?vue&type=template&id=760a8eae&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ViewRecipe_vue_vue_type_template_id_760a8eae___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/vue-loader/lib/loaders/templateLoader.js?!../node_modules/vue-loader/lib/index.js?!./components/ViewRecipe.vue?vue&type=template&id=760a8eae&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ViewRecipe_vue_vue_type_template_id_760a8eae___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ViewRecipe_vue_vue_type_template_id_760a8eae___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./components/modal/ActionDialog.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ActionDialog_vue_vue_type_template_id_73f3704a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./components/modal/ActionDialog.vue?vue&type=template&id=73f3704a&");
/* harmony import */ var _ActionDialog_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./components/modal/ActionDialog.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ActionDialog_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ActionDialog_vue_vue_type_template_id_73f3704a___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ActionDialog_vue_vue_type_template_id_73f3704a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (true) {
  var api = __webpack_require__("../node_modules/vue-hot-reload-api/dist/index.js")
  api.install(__webpack_require__("../node_modules/nativescript-vue/dist/index.js"))
  if (api.compatible) {
    module.hot.accept()
    if (!api.isRecorded('73f3704a')) {
      api.createRecord('73f3704a', component.options)
    } else {
      api.reload('73f3704a', component.options)
    }
    module.hot.accept("./components/modal/ActionDialog.vue?vue&type=template&id=73f3704a&", function(__WEBPACK_OUTDATED_DEPENDENCIES__) { /* harmony import */ _ActionDialog_vue_vue_type_template_id_73f3704a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./components/modal/ActionDialog.vue?vue&type=template&id=73f3704a&");
(function () {
      api.rerender('73f3704a', {
        render: _ActionDialog_vue_vue_type_template_id_73f3704a___WEBPACK_IMPORTED_MODULE_0__["render"],
        staticRenderFns: _ActionDialog_vue_vue_type_template_id_73f3704a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]
      })
    })(__WEBPACK_OUTDATED_DEPENDENCIES__); }.bind(this))
  }
}
component.options.__file = "components/modal/ActionDialog.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./components/modal/ActionDialog.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ActionDialog_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/babel-loader/lib/index.js!../node_modules/vue-loader/lib/index.js?!./components/modal/ActionDialog.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ActionDialog_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./components/modal/ActionDialog.vue?vue&type=template&id=73f3704a&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ActionDialog_vue_vue_type_template_id_73f3704a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/vue-loader/lib/loaders/templateLoader.js?!../node_modules/vue-loader/lib/index.js?!./components/modal/ActionDialog.vue?vue&type=template&id=73f3704a&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ActionDialog_vue_vue_type_template_id_73f3704a___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ActionDialog_vue_vue_type_template_id_73f3704a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./components/modal/ActionDialogWithSearch.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ActionDialogWithSearch_vue_vue_type_template_id_5700bb49___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./components/modal/ActionDialogWithSearch.vue?vue&type=template&id=5700bb49&");
/* harmony import */ var _ActionDialogWithSearch_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./components/modal/ActionDialogWithSearch.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ActionDialogWithSearch_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ActionDialogWithSearch_vue_vue_type_template_id_5700bb49___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ActionDialogWithSearch_vue_vue_type_template_id_5700bb49___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (true) {
  var api = __webpack_require__("../node_modules/vue-hot-reload-api/dist/index.js")
  api.install(__webpack_require__("../node_modules/nativescript-vue/dist/index.js"))
  if (api.compatible) {
    module.hot.accept()
    if (!api.isRecorded('5700bb49')) {
      api.createRecord('5700bb49', component.options)
    } else {
      api.reload('5700bb49', component.options)
    }
    module.hot.accept("./components/modal/ActionDialogWithSearch.vue?vue&type=template&id=5700bb49&", function(__WEBPACK_OUTDATED_DEPENDENCIES__) { /* harmony import */ _ActionDialogWithSearch_vue_vue_type_template_id_5700bb49___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./components/modal/ActionDialogWithSearch.vue?vue&type=template&id=5700bb49&");
(function () {
      api.rerender('5700bb49', {
        render: _ActionDialogWithSearch_vue_vue_type_template_id_5700bb49___WEBPACK_IMPORTED_MODULE_0__["render"],
        staticRenderFns: _ActionDialogWithSearch_vue_vue_type_template_id_5700bb49___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]
      })
    })(__WEBPACK_OUTDATED_DEPENDENCIES__); }.bind(this))
  }
}
component.options.__file = "components/modal/ActionDialogWithSearch.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./components/modal/ActionDialogWithSearch.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ActionDialogWithSearch_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/babel-loader/lib/index.js!../node_modules/vue-loader/lib/index.js?!./components/modal/ActionDialogWithSearch.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ActionDialogWithSearch_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./components/modal/ActionDialogWithSearch.vue?vue&type=template&id=5700bb49&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ActionDialogWithSearch_vue_vue_type_template_id_5700bb49___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/vue-loader/lib/loaders/templateLoader.js?!../node_modules/vue-loader/lib/index.js?!./components/modal/ActionDialogWithSearch.vue?vue&type=template&id=5700bb49&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ActionDialogWithSearch_vue_vue_type_template_id_5700bb49___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ActionDialogWithSearch_vue_vue_type_template_id_5700bb49___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./components/modal/ConfirmDialog.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ConfirmDialog_vue_vue_type_template_id_1d53d63b___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./components/modal/ConfirmDialog.vue?vue&type=template&id=1d53d63b&");
/* harmony import */ var _ConfirmDialog_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./components/modal/ConfirmDialog.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ConfirmDialog_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ConfirmDialog_vue_vue_type_template_id_1d53d63b___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ConfirmDialog_vue_vue_type_template_id_1d53d63b___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (true) {
  var api = __webpack_require__("../node_modules/vue-hot-reload-api/dist/index.js")
  api.install(__webpack_require__("../node_modules/nativescript-vue/dist/index.js"))
  if (api.compatible) {
    module.hot.accept()
    if (!api.isRecorded('1d53d63b')) {
      api.createRecord('1d53d63b', component.options)
    } else {
      api.reload('1d53d63b', component.options)
    }
    module.hot.accept("./components/modal/ConfirmDialog.vue?vue&type=template&id=1d53d63b&", function(__WEBPACK_OUTDATED_DEPENDENCIES__) { /* harmony import */ _ConfirmDialog_vue_vue_type_template_id_1d53d63b___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./components/modal/ConfirmDialog.vue?vue&type=template&id=1d53d63b&");
(function () {
      api.rerender('1d53d63b', {
        render: _ConfirmDialog_vue_vue_type_template_id_1d53d63b___WEBPACK_IMPORTED_MODULE_0__["render"],
        staticRenderFns: _ConfirmDialog_vue_vue_type_template_id_1d53d63b___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]
      })
    })(__WEBPACK_OUTDATED_DEPENDENCIES__); }.bind(this))
  }
}
component.options.__file = "components/modal/ConfirmDialog.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./components/modal/ConfirmDialog.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ConfirmDialog_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/babel-loader/lib/index.js!../node_modules/vue-loader/lib/index.js?!./components/modal/ConfirmDialog.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ConfirmDialog_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./components/modal/ConfirmDialog.vue?vue&type=template&id=1d53d63b&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ConfirmDialog_vue_vue_type_template_id_1d53d63b___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/vue-loader/lib/loaders/templateLoader.js?!../node_modules/vue-loader/lib/index.js?!./components/modal/ConfirmDialog.vue?vue&type=template&id=1d53d63b&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ConfirmDialog_vue_vue_type_template_id_1d53d63b___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ConfirmDialog_vue_vue_type_template_id_1d53d63b___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./components/modal/ListPicker.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ListPicker_vue_vue_type_template_id_3632d46e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./components/modal/ListPicker.vue?vue&type=template&id=3632d46e&");
/* harmony import */ var _ListPicker_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./components/modal/ListPicker.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ListPicker_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ListPicker_vue_vue_type_template_id_3632d46e___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ListPicker_vue_vue_type_template_id_3632d46e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (true) {
  var api = __webpack_require__("../node_modules/vue-hot-reload-api/dist/index.js")
  api.install(__webpack_require__("../node_modules/nativescript-vue/dist/index.js"))
  if (api.compatible) {
    module.hot.accept()
    if (!api.isRecorded('3632d46e')) {
      api.createRecord('3632d46e', component.options)
    } else {
      api.reload('3632d46e', component.options)
    }
    module.hot.accept("./components/modal/ListPicker.vue?vue&type=template&id=3632d46e&", function(__WEBPACK_OUTDATED_DEPENDENCIES__) { /* harmony import */ _ListPicker_vue_vue_type_template_id_3632d46e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./components/modal/ListPicker.vue?vue&type=template&id=3632d46e&");
(function () {
      api.rerender('3632d46e', {
        render: _ListPicker_vue_vue_type_template_id_3632d46e___WEBPACK_IMPORTED_MODULE_0__["render"],
        staticRenderFns: _ListPicker_vue_vue_type_template_id_3632d46e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]
      })
    })(__WEBPACK_OUTDATED_DEPENDENCIES__); }.bind(this))
  }
}
component.options.__file = "components/modal/ListPicker.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./components/modal/ListPicker.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ListPicker_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/babel-loader/lib/index.js!../node_modules/vue-loader/lib/index.js?!./components/modal/ListPicker.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ListPicker_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./components/modal/ListPicker.vue?vue&type=template&id=3632d46e&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ListPicker_vue_vue_type_template_id_3632d46e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/vue-loader/lib/loaders/templateLoader.js?!../node_modules/vue-loader/lib/index.js?!./components/modal/ListPicker.vue?vue&type=template&id=3632d46e&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ListPicker_vue_vue_type_template_id_3632d46e___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ListPicker_vue_vue_type_template_id_3632d46e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./components/modal/PromptDialog.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _PromptDialog_vue_vue_type_template_id_17328189___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./components/modal/PromptDialog.vue?vue&type=template&id=17328189&");
/* harmony import */ var _PromptDialog_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./components/modal/PromptDialog.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _PromptDialog_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _PromptDialog_vue_vue_type_template_id_17328189___WEBPACK_IMPORTED_MODULE_0__["render"],
  _PromptDialog_vue_vue_type_template_id_17328189___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (true) {
  var api = __webpack_require__("../node_modules/vue-hot-reload-api/dist/index.js")
  api.install(__webpack_require__("../node_modules/nativescript-vue/dist/index.js"))
  if (api.compatible) {
    module.hot.accept()
    if (!api.isRecorded('17328189')) {
      api.createRecord('17328189', component.options)
    } else {
      api.reload('17328189', component.options)
    }
    module.hot.accept("./components/modal/PromptDialog.vue?vue&type=template&id=17328189&", function(__WEBPACK_OUTDATED_DEPENDENCIES__) { /* harmony import */ _PromptDialog_vue_vue_type_template_id_17328189___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./components/modal/PromptDialog.vue?vue&type=template&id=17328189&");
(function () {
      api.rerender('17328189', {
        render: _PromptDialog_vue_vue_type_template_id_17328189___WEBPACK_IMPORTED_MODULE_0__["render"],
        staticRenderFns: _PromptDialog_vue_vue_type_template_id_17328189___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]
      })
    })(__WEBPACK_OUTDATED_DEPENDENCIES__); }.bind(this))
  }
}
component.options.__file = "components/modal/PromptDialog.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./components/modal/PromptDialog.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_PromptDialog_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/babel-loader/lib/index.js!../node_modules/vue-loader/lib/index.js?!./components/modal/PromptDialog.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_PromptDialog_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./components/modal/PromptDialog.vue?vue&type=template&id=17328189&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PromptDialog_vue_vue_type_template_id_17328189___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/vue-loader/lib/loaders/templateLoader.js?!../node_modules/vue-loader/lib/index.js?!./components/modal/PromptDialog.vue?vue&type=template&id=17328189&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PromptDialog_vue_vue_type_template_id_17328189___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PromptDialog_vue_vue_type_template_id_17328189___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./components/modal/ShareChooser.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ShareChooser_vue_vue_type_template_id_d11e43ce___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./components/modal/ShareChooser.vue?vue&type=template&id=d11e43ce&");
/* harmony import */ var _ShareChooser_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./components/modal/ShareChooser.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ShareChooser_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ShareChooser_vue_vue_type_template_id_d11e43ce___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ShareChooser_vue_vue_type_template_id_d11e43ce___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (true) {
  var api = __webpack_require__("../node_modules/vue-hot-reload-api/dist/index.js")
  api.install(__webpack_require__("../node_modules/nativescript-vue/dist/index.js"))
  if (api.compatible) {
    module.hot.accept()
    if (!api.isRecorded('d11e43ce')) {
      api.createRecord('d11e43ce', component.options)
    } else {
      api.reload('d11e43ce', component.options)
    }
    module.hot.accept("./components/modal/ShareChooser.vue?vue&type=template&id=d11e43ce&", function(__WEBPACK_OUTDATED_DEPENDENCIES__) { /* harmony import */ _ShareChooser_vue_vue_type_template_id_d11e43ce___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./components/modal/ShareChooser.vue?vue&type=template&id=d11e43ce&");
(function () {
      api.rerender('d11e43ce', {
        render: _ShareChooser_vue_vue_type_template_id_d11e43ce___WEBPACK_IMPORTED_MODULE_0__["render"],
        staticRenderFns: _ShareChooser_vue_vue_type_template_id_d11e43ce___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]
      })
    })(__WEBPACK_OUTDATED_DEPENDENCIES__); }.bind(this))
  }
}
component.options.__file = "components/modal/ShareChooser.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./components/modal/ShareChooser.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ShareChooser_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/babel-loader/lib/index.js!../node_modules/vue-loader/lib/index.js?!./components/modal/ShareChooser.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ShareChooser_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./components/modal/ShareChooser.vue?vue&type=template&id=d11e43ce&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ShareChooser_vue_vue_type_template_id_d11e43ce___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/vue-loader/lib/loaders/templateLoader.js?!../node_modules/vue-loader/lib/index.js?!./components/modal/ShareChooser.vue?vue&type=template&id=d11e43ce&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ShareChooser_vue_vue_type_template_id_d11e43ce___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ShareChooser_vue_vue_type_template_id_d11e43ce___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./main.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony import */ var _nativescript_core_bundle_entry_points__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@nativescript/core/bundle-entry-points.js");
/* harmony import */ var nativescript_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/nativescript-vue/dist/index.js");
/* harmony import */ var nativescript_vue__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(nativescript_vue__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_App__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./components/App.vue");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./store.js");
/* harmony import */ var nativescript_ui_listview_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("../node_modules/nativescript-ui-listview/vue/index.js");
/* harmony import */ var _nativescript_community_ui_material_button_vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("../node_modules/@nativescript-community/ui-material-button/vue/index.js");
/* harmony import */ var _nativescript_community_ui_material_activityindicator_vue__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("../node_modules/@nativescript-community/ui-material-activityindicator/vue/index.js");
/* harmony import */ var _nativescript_community_ui_material_ripple_vue__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("../node_modules/@nativescript-community/ui-material-ripple/vue/index.js");
/* harmony import */ var _nativescript_community_ui_material_floatingactionbutton_vue__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("../node_modules/@nativescript-community/ui-material-floatingactionbutton/vue/index.js");
/* harmony import */ var _nativescript_community_ui_material_progress_vue__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("../node_modules/@nativescript-community/ui-material-progress/vue/index.js");
/* harmony import */ var nativescript_ui_calendar_vue__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("../node_modules/nativescript-ui-calendar/vue/index.js");
/* harmony import */ var nativescript_ui_sidedrawer_vue__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("../node_modules/nativescript-ui-sidedrawer/vue/index.js");
/* harmony import */ var _nstudio_nativescript_checkbox__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("../node_modules/@nstudio/nativescript-checkbox/index.js");

        const isAndroid = __webpack_require__("../node_modules/@nativescript/core/index.js").isAndroid;
        if (isAndroid && !global["__snapshot"]) {
            __webpack_require__("../node_modules/@nativescript/core/ui/frame/index.js");
__webpack_require__("../node_modules/@nativescript/core/ui/frame/activity.js");
        }

        
            __webpack_require__("../node_modules/@nativescript/webpack/helpers/load-application-css-regular.js")();
            
            
        if (true) {
            const hmrUpdate = __webpack_require__("../node_modules/@nativescript/webpack/hmr/index.js").hmrUpdate;
            global.__coreModulesLiveSync = global.__onLiveSync;

            global.__onLiveSync = function () {
                // handle hot updated on LiveSync
                hmrUpdate();
            };

            global.hmrRefresh = function({ type, path } = {}) {
                // the hot updates are applied, ask the modules to apply the changes
                setTimeout(() => {
                    global.__coreModulesLiveSync({ type, path });
                });
            };

            // handle hot updated on initial app start
            hmrUpdate();
        }
        
            const context = __webpack_require__("./ sync recursive (?<!\\bApp_Resources\\b.*)(?<!\\.\\/\\btests\\b\\/.*?)\\.(xml|css|js|(?<!\\.d\\.)ts|(?<!\\b_[\\w-]*\\.)scss)$");
            global.registerWebpackModules(context);
            if (true) {
                module.hot.accept(context.id, () => { 
                    console.log("HMR: Accept module '" + context.id + "' from '" + module.i + "'"); 
                });
            }
            
        
        



nativescript_vue__WEBPACK_IMPORTED_MODULE_1___default.a.use(nativescript_ui_listview_vue__WEBPACK_IMPORTED_MODULE_4__["default"]);

nativescript_vue__WEBPACK_IMPORTED_MODULE_1___default.a.use(_nativescript_community_ui_material_button_vue__WEBPACK_IMPORTED_MODULE_5__["default"]);

nativescript_vue__WEBPACK_IMPORTED_MODULE_1___default.a.use(_nativescript_community_ui_material_activityindicator_vue__WEBPACK_IMPORTED_MODULE_6__["default"]);

nativescript_vue__WEBPACK_IMPORTED_MODULE_1___default.a.use(_nativescript_community_ui_material_ripple_vue__WEBPACK_IMPORTED_MODULE_7__["default"]);

nativescript_vue__WEBPACK_IMPORTED_MODULE_1___default.a.use(_nativescript_community_ui_material_floatingactionbutton_vue__WEBPACK_IMPORTED_MODULE_8__["default"]);

nativescript_vue__WEBPACK_IMPORTED_MODULE_1___default.a.use(_nativescript_community_ui_material_progress_vue__WEBPACK_IMPORTED_MODULE_9__["default"]);

nativescript_vue__WEBPACK_IMPORTED_MODULE_1___default.a.use(nativescript_ui_calendar_vue__WEBPACK_IMPORTED_MODULE_10__["default"]);

nativescript_vue__WEBPACK_IMPORTED_MODULE_1___default.a.use(nativescript_ui_sidedrawer_vue__WEBPACK_IMPORTED_MODULE_11__["default"]);

nativescript_vue__WEBPACK_IMPORTED_MODULE_1___default.a.registerElement("CheckBox", () => _nstudio_nativescript_checkbox__WEBPACK_IMPORTED_MODULE_12__["CheckBox"], {
  model: {
    prop: "checked",
    event: "checkedChange"
  }
});
nativescript_vue__WEBPACK_IMPORTED_MODULE_1___default.a.config.silent = "development" === "production";
new nativescript_vue__WEBPACK_IMPORTED_MODULE_1___default.a({
  store: _store__WEBPACK_IMPORTED_MODULE_3__["default"],
  render: h => h("frame", [h(_components_App__WEBPACK_IMPORTED_MODULE_2__["default"])])
}).$start();
    
        
        
    
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./shared/utils.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showDrawer", function() { return showDrawer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "restartApp", function() { return restartApp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "openAppSettingsPage", function() { return openAppSettingsPage; });
/* harmony import */ var _nativescript_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@nativescript/core/index.js");

var showDrawer = () => {
  var sideDrawer = _nativescript_core__WEBPACK_IMPORTED_MODULE_0__["Application"].getRootView().getViewById("sideDrawer");
  sideDrawer && sideDrawer.showDrawer();
};
var restartApp = () => {
  var mStartActivity = new android.content.Intent(_nativescript_core__WEBPACK_IMPORTED_MODULE_0__["Application"].android.context, _nativescript_core__WEBPACK_IMPORTED_MODULE_0__["Application"].android.startActivity.getClass());
  var mPendingIntentId = parseInt(Math.random() * 100000, 10);
  var mPendingIntent = android.app.PendingIntent.getActivity(_nativescript_core__WEBPACK_IMPORTED_MODULE_0__["Application"].android.context, mPendingIntentId, mStartActivity, android.app.PendingIntent.FLAG_CANCEL_CURRENT);
  var mgr = _nativescript_core__WEBPACK_IMPORTED_MODULE_0__["Application"].android.context.getSystemService(android.content.Context.ALARM_SERVICE);
  mgr.set(android.app.AlarmManager.RTC, java.lang.System.currentTimeMillis() + 100, mPendingIntent);
  android.os.Process.killProcess(android.os.Process.myPid());
};
var openAppSettingsPage = () => {
  var intent = new android.content.Intent(android.provider.Settings.ACTION_APPLICATION_DETAILS_SETTINGS);
  intent.addCategory(android.content.Intent.CATEGORY_DEFAULT);
  intent.setData(android.net.Uri.parse("package:" + _nativescript_core__WEBPACK_IMPORTED_MODULE_0__["Application"].android.context.getPackageName()));
  _nativescript_core__WEBPACK_IMPORTED_MODULE_0__["Application"].android.foregroundActivity.startActivity(intent);
};

/***/ }),

/***/ "./store.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/nativescript-vue/dist/index.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var nativescript_couchbase_plugin__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../node_modules/nativescript-couchbase-plugin/couchbase-plugin.js");
/* harmony import */ var nativescript_couchbase_plugin__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(nativescript_couchbase_plugin__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _nativescript_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../node_modules/@nativescript/core/index.js");
/* harmony import */ var nativescript_ui_calendar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("../node_modules/nativescript-ui-calendar/ui-calendar.js");
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("../node_modules/node-libs-browser/mock/empty.js");
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_5__);






var EnRecipesDB = new nativescript_couchbase_plugin__WEBPACK_IMPORTED_MODULE_2__["Couchbase"]("EnRecipes");
var userCategoriesDB = new nativescript_couchbase_plugin__WEBPACK_IMPORTED_MODULE_2__["Couchbase"]("userCategories");
var userYieldUnitsDB = new nativescript_couchbase_plugin__WEBPACK_IMPORTED_MODULE_2__["Couchbase"]("userYieldUnits");
var mealPlansDB = new nativescript_couchbase_plugin__WEBPACK_IMPORTED_MODULE_2__["Couchbase"]("mealPlans");
vue__WEBPACK_IMPORTED_MODULE_0___default.a.use(vuex__WEBPACK_IMPORTED_MODULE_1__["default"]);
var defaultCategories = ["Appetizers", "BBQ", "Beverages", "Breads", "Breakfast", "Desserts", "Dinner", "Drinks", "Healthy", "Lunch", "Main dishes", "Meat", "Noodles", "Pasta", "Poultry", "Rice", "Salads", "Sauces", "Seafood", "Side dishes", "Snacks", "Soups", "Undefined", "Vegan", "Vegetarian"];
var defaultYieldUnits = ["Serving", "Piece", "Teaspoon", "Tablespoon", "Fluid Ounce", "Ounce", "Pound", "Gram", "Kilogram", "Cup", "Gallon", "Millilitre", "Litre", "Roll", "Patty", "Loaf"];
/* harmony default export */ __webpack_exports__["default"] = (new vuex__WEBPACK_IMPORTED_MODULE_1__["default"].Store({
  state: {
    recipes: [],
    categories: [],
    userCategories: [],
    units: ["unit", "tsp", "dsp", "tbsp", "fl oz", "cup", "pt", "qt", "gal", "ml", "l", "oz", "lb", "mg", "g", "kg", "cm", "in", "leaf", "clove", "pinch", "drop", "dozen", "stick", "small", "medium", "large"],
    yieldUnits: [],
    userYieldUnits: [],
    mealPlans: [],
    icon: {
      home: "\ued3b",
      heart: "\ued36",
      heartOutline: "\uea6c",
      label: "\ued51",
      labelOutline: "\uea8b",
      cog: "\ueca6",
      info: "\ued49",
      menu: "\ueac1",
      search: "\ueb54",
      sort: "\ueac2",
      plus: "\ueb21",
      plusCircle: "\ueb22",
      close: "\uebe9",
      image: "\uea7f",
      food: "\ueb3e",
      back: "\uea95",
      save: "\uedeb",
      camera: "\uec61",
      share: "\uedf3",
      edit: "\uedba",
      theme: "\uecaa",
      link: "\ueaa0",
      file: "\ued02",
      detail: "\ue9f9",
      user: "\uee33",
      trash: "\uee26",
      donate: "\ueb4f",
      trylater: "\uec31",
      trylaterOutline: "\ue94a",
      note: "\ueb04",
      copy: "\ue9e6",
      check: "\ue9a4",
      telegram: "\ueec7",
      time: "\ueba2",
      item: "\ue99d",
      step: "\ue948",
      source: "\ueaa0",
      export: "\ued07",
      import: "\ued0c",
      outline: "\ueb07",
      calendar: "\uec55",
      today: "\ue97c"
    },
    currentComponent: "EnRecipes"
  },
  mutations: {
    initializeRecipes(state) {
      EnRecipesDB.query({
        select: []
      }).forEach(recipe => {
        state.recipes.push(recipe);
      });
    },

    initializeCategories(state) {
      var isCategoriesStored = userCategoriesDB.query({
        select: []
      }).length;

      if (isCategoriesStored) {
        state.userCategories = userCategoriesDB.getDocument("userCategories").userCategories;
        var categoriesWithRecipes = state.recipes.map(e => e.category);
        state.userCategories = state.userCategories.filter(e => categoriesWithRecipes.includes(e));
      } else {
        userCategoriesDB.createDocument({
          userCategories: []
        }, "userCategories");
      }

      state.categories = [...defaultCategories, ...state.userCategories];
      state.categories.sort();
    },

    initializeYieldUnits(state) {
      var isYieldUnitsStored = userYieldUnitsDB.query({
        select: []
      }).length;

      if (isYieldUnitsStored) {
        state.userYieldUnits = userYieldUnitsDB.getDocument("userYieldUnits").userYieldUnits;
        var yieldUnitsWithRecipes = state.recipes.map(e => e.yield.unit);
        state.userYieldUnits = state.userYieldUnits.filter(e => yieldUnitsWithRecipes.includes(e));
      } else {
        userYieldUnitsDB.createDocument({
          userYieldUnits: []
        }, "userYieldUnits");
      }

      state.yieldUnits = [...defaultYieldUnits, ...state.userYieldUnits];
    },

    initializeMealPlans(state) {
      var isMealPlansDBStored = mealPlansDB.query({
        select: []
      }).length;

      if (isMealPlansDBStored) {
        state.mealPlans = mealPlansDB.getDocument("mealPlans").mealPlans;
      } else {
        mealPlansDB.createDocument({
          mealPlans: []
        }, "mealPlans");
      }
    },

    importRecipes(state, recipes) {
      var localRecipesIDs, partition;

      if (state.recipes.length) {
        localRecipesIDs = state.recipes.map(e => e.id);
        partition = recipes.reduce((result, recipe, i) => {
          localRecipesIDs.indexOf(recipe.id) < 0 ? result[0].push(recipe) // create candidates
          : result[1].push(recipe); // update candidates

          return result;
        }, [[], []]);
        if (partition[0].length) createDocuments(partition[0]);
        if (partition[1].length) updateDocuments(partition[1]);
      } else {
        createDocuments(recipes);
      }

      function createDocuments(data) {
        state.recipes = [...state.recipes, ...data];
        data.forEach(recipe => {
          EnRecipesDB.createDocument(recipe, recipe.id);
        });
      }

      function updateDocuments(data) {
        data.forEach(recipe => {
          var recipeIndex = state.recipes.map((e, i) => {
            var d1 = new Date(e.lastModified).getTime();
            var d2 = new Date(recipe.lastModified).getTime();
            return e.id === recipe.id && d1 < d2 ? i : -1;
          }).filter(e => e >= 0)[0];

          if (recipeIndex >= 0) {
            Object.assign(state.recipes[recipeIndex], recipe);
            EnRecipesDB.updateDocument(recipe.id, recipe);
          }
        });
      }
    },

    importCategories(state, categories) {
      state.userCategories = new Set([...state.userCategories, ...categories]);
      userCategoriesDB.updateDocument("userCategories", {
        userCategories: [...state.userCategories]
      });
      state.categories = [...defaultCategories, ...state.userCategories];
      state.categories.sort();
    },

    importYieldUnits(state, yieldUnits) {
      state.userYieldUnits = new Set([...state.userYieldUnits, ...yieldUnits]);
      userYieldUnitsDB.updateDocument("userYieldUnits", {
        userYieldUnits: [...state.userYieldUnits]
      });
      state.yieldUnits = [...defaultYieldUnits, ...state.userYieldUnits];
    },

    importMealPlans(state, mealPlans) {
      var newMealPlans = mealPlans.filter(e => !state.mealPlans.some(f => f.title === e.title && f.startDate === e.startDate));
      state.mealPlans = [...state.mealPlans, ...newMealPlans];
      mealPlansDB.updateDocument("mealPlans", {
        mealPlans: [...state.mealPlans]
      });
    },

    addRecipe(state, _ref) {
      var {
        id,
        recipe
      } = _ref;
      state.recipes.push(recipe);
      EnRecipesDB.createDocument(recipe, id);
    },

    addCategory(state, category) {
      var lowercase = state.categories.map(e => e.toLowerCase());

      if (lowercase.indexOf(category.toLowerCase()) == -1) {
        state.userCategories.push(category);
        userCategoriesDB.updateDocument("userCategories", {
          userCategories: [...state.userCategories]
        });
        state.categories = [...defaultCategories, ...state.userCategories];
        state.categories.sort();
      }
    },

    addYieldUnit(state, yieldUnit) {
      var lowercase = state.yieldUnits.map(e => e.toLowerCase());

      if (lowercase.indexOf(yieldUnit.toLowerCase()) == -1) {
        state.userYieldUnits.push(yieldUnit);
        userYieldUnitsDB.updateDocument("userYieldUnits", {
          userYieldUnits: [...state.userYieldUnits]
        });
        state.yieldUnits = [...defaultYieldUnits, ...state.userYieldUnits];
      }
    },

    addMealPlan(state, _ref2) {
      var {
        event,
        eventColor
      } = _ref2;
      state.mealPlans.push({
        title: event.title,
        startDate: event.startDate,
        endDate: event.endDate,
        eventColor
      });
      mealPlansDB.updateDocument("mealPlans", {
        mealPlans: [...state.mealPlans]
      });
    },

    deleteRecipe(state, _ref3) {
      var {
        index,
        id
      } = _ref3;
      Object(_nativescript_core__WEBPACK_IMPORTED_MODULE_3__["getFileAccess"])().deleteFile(state.recipes[index].imageSrc);
      state.recipes.splice(index, 1);
      EnRecipesDB.deleteDocument(id);
      state.recipes.forEach((e, i) => {
        if (e.combinations.includes(id)) {
          state.recipes[i].combinations.splice(e.combinations.indexOf(id), 1);
          EnRecipesDB.updateDocument(state.recipes[i].id, state.recipes[i]);
        }
      });
    },

    deleteMealPlan(state, _ref4) {
      var {
        title,
        startDate
      } = _ref4;
      var mealPlan = state.mealPlans.filter(e => {
        console.log(e.startDate, startDate);
        var sd = new Date(e.startDate).getTime();
        return e.title === title && sd === startDate.getTime();
      })[0];
      var index = state.mealPlans.indexOf(mealPlan);
      state.mealPlans.splice(index, 1);
      state.mealPlans = [...state.mealPlans];
      var mealPlans = mealPlansDB.getDocument("mealPlans").mealPlans;
      mealPlans.splice(index, 1);
      mealPlansDB.updateDocument("mealPlans", {
        mealPlans: [...mealPlans]
      });
    },

    overwriteRecipe(state, _ref5) {
      var {
        id,
        recipe
      } = _ref5;
      var index = state.recipes.indexOf(state.recipes.filter(e => e.id === id)[0]);
      Object.assign(state.recipes[index], recipe);
      EnRecipesDB.updateDocument(id, recipe);
    },

    toggleState(state, _ref6) {
      var {
        id,
        recipe,
        key,
        setDate
      } = _ref6;
      var index = state.recipes.indexOf(state.recipes.filter(e => e.id === id)[0]);
      state.recipes[index][key] = !state.recipes[index][key];
      if (setDate) state.recipes[index].lastTried = new Date();
      EnRecipesDB.updateDocument(id, recipe);
    },

    setRecipeAsTried(state, _ref7) {
      var {
        id,
        recipe
      } = _ref7;
      var index = state.recipes.indexOf(state.recipes.filter(e => e.id === id)[0]);
      state.recipes[index].tried = true;
      state.recipes[index].lastTried = new Date();
      EnRecipesDB.updateDocument(id, recipe);
    },

    setLastTriedDate(state, index) {
      state.recipes[index].lastTried = new Date();
      EnRecipesDB.updateDocument(state.recipes[index].id, state.recipes[index]);
    },

    renameCategory(state, _ref8) {
      var {
        current,
        updated
      } = _ref8;
      var lowercase = state.categories.map(e => e.toLowerCase());

      if (lowercase.indexOf(updated.toLowerCase()) == -1) {
        state.userCategories.push(updated);
        userCategoriesDB.updateDocument("userCategories", {
          userCategories: [...state.userCategories]
        });
        state.categories = [...defaultCategories, ...state.userCategories];
        state.categories.sort();
      }

      state.recipes.forEach((e, i) => {
        if (e.category == current) {
          state.recipes[i].category = updated;
          EnRecipesDB.inBatch(() => {
            EnRecipesDB.updateDocument(state.recipes[i].id, state.recipes[i]);
          });
        }
      });
    },

    setCurrentComponent(state, comp) {
      state.currentComponent = comp;
    },

    unSyncCombinations(state, _ref9) {
      var {
        id,
        combinations
      } = _ref9;
      state.recipes.forEach((e, i) => {
        if (combinations.includes(e.id)) {
          state.recipes[i].combinations.splice(e.combinations.indexOf(id), 1);
          EnRecipesDB.updateDocument(state.recipes[i].id, state.recipes[i]);
        }
      });
    }

  },
  actions: {
    initializeRecipes(_ref10) {
      var {
        commit
      } = _ref10;
      commit("initializeRecipes");
    },

    initializeCategories(_ref11) {
      var {
        commit
      } = _ref11;
      commit("initializeCategories");
    },

    initializeYieldUnits(_ref12) {
      var {
        commit
      } = _ref12;
      commit("initializeYieldUnits");
    },

    initializeMealPlans(_ref13) {
      var {
        commit
      } = _ref13;
      commit("initializeMealPlans");
    },

    importRecipesAction(_ref14, recipes) {
      var {
        commit
      } = _ref14;
      commit("importRecipes", recipes);
    },

    importCategoriesAction(_ref15, categories) {
      var {
        commit
      } = _ref15;
      commit("importCategories", categories);
    },

    importYieldUnitsAction(_ref16, yieldUnits) {
      var {
        commit
      } = _ref16;
      commit("importYieldUnits", yieldUnits);
    },

    importMealPlansAction(_ref17, mealPlans) {
      var {
        commit
      } = _ref17;
      commit("importMealPlans", mealPlans);
    },

    addRecipeAction(_ref18, recipe) {
      var {
        commit
      } = _ref18;
      commit("addRecipe", recipe);
    },

    addYieldUnitAction(_ref19, yieldUnit) {
      var {
        commit
      } = _ref19;
      commit("addYieldUnit", yieldUnit);
    },

    addCategoryAction(_ref20, category) {
      var {
        commit
      } = _ref20;
      commit("addCategory", category);
    },

    addMealPlanAction(_ref21, mealPlan) {
      var {
        commit
      } = _ref21;
      commit("addMealPlan", mealPlan);
    },

    deleteMealPlanAction(_ref22, mealPlan) {
      var {
        commit
      } = _ref22;
      commit("deleteMealPlan", mealPlan);
    },

    deleteRecipeAction(_ref23, recipe) {
      var {
        commit
      } = _ref23;
      commit("deleteRecipe", recipe);
    },

    overwriteRecipeAction(_ref24, updatedRecipe) {
      var {
        commit
      } = _ref24;
      commit("overwriteRecipe", updatedRecipe);
    },

    toggleStateAction(_ref25, toggledRecipe) {
      var {
        commit
      } = _ref25;
      commit("toggleState", toggledRecipe);
    },

    setRecipeAsTriedAction(_ref26, recipe) {
      var {
        commit
      } = _ref26;
      commit("setRecipeAsTried", recipe);
    },

    setLastTriedDateAction(_ref27, index) {
      var {
        commit
      } = _ref27;
      commit("setLastTriedDate", index);
    },

    renameCategoryAction(_ref28, category) {
      var {
        commit
      } = _ref28;
      commit("renameCategory", category);
    },

    setCurrentComponentAction(_ref29, comp) {
      var {
        commit
      } = _ref29;
      commit("setCurrentComponent", comp);
    },

    unSyncCombinationsAction(_ref30, combinations) {
      var {
        commit
      } = _ref30;
      commit("unSyncCombinations", combinations);
    }

  }
}));

/***/ }),

/***/ "~/package.json":
/***/ (function(module, exports) {

module.exports = require("~/package.json");

/***/ })

},[["./main.js","runtime","vendor"]]]);