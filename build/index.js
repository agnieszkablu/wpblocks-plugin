/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/filters/index.js"
/*!******************************!*\
  !*** ./src/filters/index.js ***!
  \******************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/hooks */ "@wordpress/hooks");
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_dom_ready__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/dom-ready */ "@wordpress/dom-ready");
/* harmony import */ var _wordpress_dom_ready__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_dom_ready__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__);






const changeParagraphIcon = (settings, name) => {
  if (name === 'core/paragraph') {
    return {
      ...settings,
      icon: 'smiley'
    };
  }
  return settings;
};
(0,_wordpress_hooks__WEBPACK_IMPORTED_MODULE_0__.addFilter)('blocks.registerBlockType', 'wpblocks/change-paragraph-icon', changeParagraphIcon);
const modifyEdit = BlockEdit => {
  return props => {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(BlockEdit, {
        ...props
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.InspectorControls, {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
          children: "Custom Panel"
        })
      })]
    });
  };
};
(0,_wordpress_hooks__WEBPACK_IMPORTED_MODULE_0__.addFilter)('editor.BlockEdit', 'wpblocks/change-edit', modifyEdit);
_wordpress_dom_ready__WEBPACK_IMPORTED_MODULE_4___default()(() => {
  (0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_3__.unregisterBlockType)('core/paragraph');
});

/***/ },

/***/ "./src/format-types/highlight.js"
/*!***************************************!*\
  !*** ./src/format-types/highlight.js ***!
  \***************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_rich_text__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/rich-text */ "@wordpress/rich-text");
/* harmony import */ var _wordpress_rich_text__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_rich_text__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);




const HighlightFormatButton = ({
  isActive,
  value,
  onChange
}) => {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichTextToolbarButton, {
    icon: "editor-textcolor",
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Highlight custom', 'blocks'),
    onClick: () => onChange((0,_wordpress_rich_text__WEBPACK_IMPORTED_MODULE_0__.toggleFormat)(value, {
      type: 'blocks/highlight',
      attributes: {
        style: 'background-color: yellow;'
      }
    })),
    isActive: isActive
  });
};
(0,_wordpress_rich_text__WEBPACK_IMPORTED_MODULE_0__.registerFormatType)('blocks/highlight', {
  title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Highlight', 'blocks'),
  tagName: 'span',
  className: null,
  //'highlight-custom',
  edit: HighlightFormatButton
});

/***/ },

/***/ "./src/plugins/sidebar-examples.js"
/*!*****************************************!*\
  !*** ./src/plugins/sidebar-examples.js ***!
  \*****************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_editor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/editor */ "@wordpress/editor");
/* harmony import */ var _wordpress_editor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_editor__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_plugins__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/plugins */ "@wordpress/plugins");
/* harmony import */ var _wordpress_plugins__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_plugins__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);




(0,_wordpress_plugins__WEBPACK_IMPORTED_MODULE_1__.registerPlugin)('metafildes-block-sidebar', {
  render: () => {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_editor__WEBPACK_IMPORTED_MODULE_0__.PluginDocumentSettingPanel, {
        name: "metafildes-block-panel",
        title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Metafields Post Options Panel', 'blocks-plugin'),
        className: "metafildes-block-panel",
        icon: "admin-settings",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("p", {
          children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Content of the panel', 'blocks-plugin')
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_editor__WEBPACK_IMPORTED_MODULE_0__.PluginPostStatusInfo, {
        className: "metafildes-block-status-info",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("p", {
          children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Content of the status info', 'blocks-plugin')
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_editor__WEBPACK_IMPORTED_MODULE_0__.PluginPrePublishPanel, {
        name: "metafildes-block-pre-publish-panel",
        title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Metafields Pre Publish Panel', 'blocks-plugin'),
        className: "metafildes-block-pre-publish-panel",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("p", {
          children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Content of the pre publish panel', 'blocks-plugin')
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_editor__WEBPACK_IMPORTED_MODULE_0__.PluginPostPublishPanel, {
        name: "metafildes-block-post-publish-panel",
        title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Metafields Post Publish Panel', 'blocks-plugin'),
        className: "metafildes-block-post-publish-panel",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("p", {
          children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Content of the post publish panel', 'blocks-plugin')
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_editor__WEBPACK_IMPORTED_MODULE_0__.PluginMoreMenuItem, {
        icon: "admin-settings",
        onClick: () => alert((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('More menu item clicked', 'blocks-plugin')),
        children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Metafields More Menu Item', 'blocks-plugin')
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_editor__WEBPACK_IMPORTED_MODULE_0__.PluginBlockSettingsMenuItem, {
        icon: "admin-settings",
        onClick: () => alert((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Block settings menu item clicked', 'blocks-plugin')),
        allowedBlocks: ['core/paragraph'],
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Metafields Block Settings Menu Item', 'blocks-plugin')
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_editor__WEBPACK_IMPORTED_MODULE_0__.PluginSidebar, {
        name: "metafildes-block-sidebar",
        title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Examples Metafields Post Options Sidebar', 'blocks-plugin'),
        icon: "admin-settings",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("p", {
          children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Content of the sidebar', 'blocks-plugin')
        })
      })]
    });
  }
});

/***/ },

/***/ "./src/plugins/sidebar.js"
/*!********************************!*\
  !*** ./src/plugins/sidebar.js ***!
  \********************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_editor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/editor */ "@wordpress/editor");
/* harmony import */ var _wordpress_editor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_editor__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_plugins__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/plugins */ "@wordpress/plugins");
/* harmony import */ var _wordpress_plugins__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_plugins__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__);






const MetaFieldsInputs = () => {
  const subtitle = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_4__.useSelect)(select => select('core/editor').getEditedPostAttribute('meta')._blocks_course_post_subtitle, []);
  const {
    editPost
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_4__.useDispatch)('core/editor');
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Metafields Block Settings Menu Item', 'blocks-plugin'),
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Subtitle', 'blocks-plugin'),
      value: subtitle,
      onChange: value => {
        editPost({
          meta: {
            _blocks_course_post_subtitle: value
          }
        });
      }
    })
  });
};
(0,_wordpress_plugins__WEBPACK_IMPORTED_MODULE_3__.registerPlugin)('metafields-sidebar', {
  render: () => {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_editor__WEBPACK_IMPORTED_MODULE_0__.PluginSidebar, {
      name: "metafields-sidebar",
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('My Plugin Sidebar', 'blocks-plugin'),
      icon: "admin-settings",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(MetaFieldsInputs, {})
    });
  }
});

/***/ },

/***/ "./src/todos-store/actions.js"
/*!************************************!*\
  !*** ./src/todos-store/actions.js ***!
  \************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addTodo: () => (/* binding */ addTodo),
/* harmony export */   populateTodos: () => (/* binding */ populateTodos),
/* harmony export */   toggleTodo: () => (/* binding */ toggleTodo),
/* harmony export */   updateTodo: () => (/* binding */ updateTodo)
/* harmony export */ });
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./types */ "./src/todos-store/types.js");
/* harmony import */ var _controls__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./controls */ "./src/todos-store/controls.js");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_2__);



function* addTodo(title) {
  // action.
  try {
    const todo = yield (0,_controls__WEBPACK_IMPORTED_MODULE_1__.createTodo)(title);
    return {
      type: _types__WEBPACK_IMPORTED_MODULE_0__.ADD_TODO,
      todo
    };
  } catch (error) {
    console.error('Failed to add todo:', error);
    return (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_2__.dispatch)('core/notices').createErrorNotice(error.message, 'Failed to create todos.');
  }
}
;
function* toggleTodo(todo, index) {
  try {
    yield updateTodo({
      ...todo,
      loading: true
    }, index);
    const updatedTodo = yield (0,_controls__WEBPACK_IMPORTED_MODULE_1__.toggleTodo)(todo);
    return updateTodo(updatedTodo, index);
  } catch (error) {
    console.error('Failed to toggle todo:', error);
    return (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_2__.dispatch)('core/notices').createErrorNotice(error.message, 'Failed to toggle todo.');
  }
}
const updateTodo = (todo, index) => {
  return {
    type: _types__WEBPACK_IMPORTED_MODULE_0__.UPDATE_TODO,
    index,
    todo
  };
};
const populateTodos = todos => {
  return {
    type: _types__WEBPACK_IMPORTED_MODULE_0__.POPULATE_TODOS,
    todos
  };
};

/***/ },

/***/ "./src/todos-store/controls.js"
/*!*************************************!*\
  !*** ./src/todos-store/controls.js ***!
  \*************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CREATE_TODO: () => (/* binding */ CREATE_TODO),
/* harmony export */   FETCH_TODOS: () => (/* binding */ FETCH_TODOS),
/* harmony export */   TOGGLE_TODO: () => (/* binding */ TOGGLE_TODO),
/* harmony export */   createTodo: () => (/* binding */ createTodo),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   fetchTodos: () => (/* binding */ fetchTodos),
/* harmony export */   toggleTodo: () => (/* binding */ toggleTodo)
/* harmony export */ });
const FETCH_TODOS = 'FETCH_TODOS';
const CREATE_TODO = 'CREATE_TODO';
const TOGGLE_TODO = 'TOGGLE_TODO';
const fetchTodos = () => {
  return {
    type: FETCH_TODOS
  };
};
const createTodo = title => {
  return {
    type: CREATE_TODO,
    title
  };
};
const toggleTodo = todo => {
  return {
    type: TOGGLE_TODO,
    todo
  };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  FETCH_TODOS() {
    return window.fetch('https://jsonplaceholder.typicode.com/todos?_limit=10').then(response => {
      if (!response.ok) {
        throw new Error('Failed to fetch todos.');
      }
      return response.json();
    });
  },
  CREATE_TODO({
    title
  }) {
    return window.fetch('https://jsonplaceholder.typicode.com/todos', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        title,
        completed: false,
        userId: 1
      })
    }).then(response => {
      if (!response.ok) {
        throw new Error('Failed to create todo.');
      }
      return response.json();
    });
  },
  TOGGLE_TODO({
    todo
  }) {
    return window.fetch(`https://jsonplaceholder.typicode.com/todos/${todo.id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        completed: !todo.completed
      })
    }).then(response => {
      if (!response.ok) {
        throw new Error('Failed to toggle todo.');
      }
      return response.json();
    });
  }
});

/***/ },

/***/ "./src/todos-store/index.js"
/*!**********************************!*\
  !*** ./src/todos-store/index.js ***!
  \**********************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reducer */ "./src/todos-store/reducer.js");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./actions */ "./src/todos-store/actions.js");
/* harmony import */ var _selectors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./selectors */ "./src/todos-store/selectors.js");
/* harmony import */ var _resolvers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./resolvers */ "./src/todos-store/resolvers.js");
/* harmony import */ var _controls__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./controls */ "./src/todos-store/controls.js");






const store = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_0__.createReduxStore)('blocks/todos', {
  reducer: _reducer__WEBPACK_IMPORTED_MODULE_1__["default"],
  actions: _actions__WEBPACK_IMPORTED_MODULE_2__,
  selectors: _selectors__WEBPACK_IMPORTED_MODULE_3__,
  resolvers: _resolvers__WEBPACK_IMPORTED_MODULE_4__,
  controls: _controls__WEBPACK_IMPORTED_MODULE_5__["default"]
});
(0,_wordpress_data__WEBPACK_IMPORTED_MODULE_0__.register)(store);

/***/ },

/***/ "./src/todos-store/reducer.js"
/*!************************************!*\
  !*** ./src/todos-store/reducer.js ***!
  \************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./types */ "./src/todos-store/types.js");

const DEFAULT_STATE = {
  items: []
};
const reducer = (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case _types__WEBPACK_IMPORTED_MODULE_0__.ADD_TODO:
      return {
        ...state,
        items: [...state.items, action.todo]
      };
    case _types__WEBPACK_IMPORTED_MODULE_0__.POPULATE_TODOS:
      return {
        ...state,
        items: action.todos
      };
    case _types__WEBPACK_IMPORTED_MODULE_0__.UPDATE_TODO:
      const itemsCopy = [...state.items];
      itemsCopy[action.index] = action.todo;
      return {
        ...state,
        items: itemsCopy
      };
    default:
      return state;
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (reducer);

/***/ },

/***/ "./src/todos-store/resolvers.js"
/*!**************************************!*\
  !*** ./src/todos-store/resolvers.js ***!
  \**************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getTodos: () => (/* binding */ getTodos)
/* harmony export */ });
/* harmony import */ var _controls__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./controls */ "./src/todos-store/controls.js");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./actions */ "./src/todos-store/actions.js");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_2__);
// sideeffects



function* getTodos() {
  // this function is running each time the selectors toDos function is called.
  try {
    const todos = yield (0,_controls__WEBPACK_IMPORTED_MODULE_0__.fetchTodos)();
    return (0,_actions__WEBPACK_IMPORTED_MODULE_1__.populateTodos)(todos);
  } catch (error) {
    return (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_2__.dispatch)('core/notices').createErrorNotice(error.message, 'Failed to fetch todos.');
  }
}

/***/ },

/***/ "./src/todos-store/selectors.js"
/*!**************************************!*\
  !*** ./src/todos-store/selectors.js ***!
  \**************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getDoneTodos: () => (/* binding */ getDoneTodos),
/* harmony export */   getTodos: () => (/* binding */ getTodos),
/* harmony export */   getTodosNumber: () => (/* binding */ getTodosNumber),
/* harmony export */   getUnDoneTodos: () => (/* binding */ getUnDoneTodos)
/* harmony export */ });
const getTodos = state => {
  return state.items;
};
const getTodosNumber = state => {
  return state.items.length;
};
const getDoneTodos = state => {
  return state.items.filter(todo => todo.completed).length;
};
const getUnDoneTodos = state => {
  return state.items.filter(todo => !todo.completed).length;
};

/***/ },

/***/ "./src/todos-store/types.js"
/*!**********************************!*\
  !*** ./src/todos-store/types.js ***!
  \**********************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ADD_TODO: () => (/* binding */ ADD_TODO),
/* harmony export */   CREATE_TODO: () => (/* binding */ CREATE_TODO),
/* harmony export */   FETCH_TODOS: () => (/* binding */ FETCH_TODOS),
/* harmony export */   POPULATE_TODOS: () => (/* binding */ POPULATE_TODOS),
/* harmony export */   TOGGLE_TODO: () => (/* binding */ TOGGLE_TODO),
/* harmony export */   UPDATE_TODO: () => (/* binding */ UPDATE_TODO)
/* harmony export */ });
const ADD_TODO = 'ADD_TODO';
const FETCH_TODOS = 'FETCH_TODOS';
const POPULATE_TODOS = 'POPULATE_TODOS';
const CREATE_TODO = 'CREATE_TODO';
const TOGGLE_TODO = 'TOGGLE_TODO';
const UPDATE_TODO = 'UPDATE_TODO';

/***/ },

/***/ "react/jsx-runtime"
/*!**********************************!*\
  !*** external "ReactJSXRuntime" ***!
  \**********************************/
(module) {

module.exports = window["ReactJSXRuntime"];

/***/ },

/***/ "@wordpress/block-editor"
/*!*************************************!*\
  !*** external ["wp","blockEditor"] ***!
  \*************************************/
(module) {

module.exports = window["wp"]["blockEditor"];

/***/ },

/***/ "@wordpress/blocks"
/*!********************************!*\
  !*** external ["wp","blocks"] ***!
  \********************************/
(module) {

module.exports = window["wp"]["blocks"];

/***/ },

/***/ "@wordpress/components"
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
(module) {

module.exports = window["wp"]["components"];

/***/ },

/***/ "@wordpress/data"
/*!******************************!*\
  !*** external ["wp","data"] ***!
  \******************************/
(module) {

module.exports = window["wp"]["data"];

/***/ },

/***/ "@wordpress/dom-ready"
/*!**********************************!*\
  !*** external ["wp","domReady"] ***!
  \**********************************/
(module) {

module.exports = window["wp"]["domReady"];

/***/ },

/***/ "@wordpress/editor"
/*!********************************!*\
  !*** external ["wp","editor"] ***!
  \********************************/
(module) {

module.exports = window["wp"]["editor"];

/***/ },

/***/ "@wordpress/hooks"
/*!*******************************!*\
  !*** external ["wp","hooks"] ***!
  \*******************************/
(module) {

module.exports = window["wp"]["hooks"];

/***/ },

/***/ "@wordpress/i18n"
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
(module) {

module.exports = window["wp"]["i18n"];

/***/ },

/***/ "@wordpress/plugins"
/*!*********************************!*\
  !*** external ["wp","plugins"] ***!
  \*********************************/
(module) {

module.exports = window["wp"]["plugins"];

/***/ },

/***/ "@wordpress/rich-text"
/*!**********************************!*\
  !*** external ["wp","richText"] ***!
  \**********************************/
(module) {

module.exports = window["wp"]["richText"];

/***/ }

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	const __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		const cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		const module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		if (!(moduleId in __webpack_modules__)) {
/******/ 			delete __webpack_module_cache__[moduleId];
/******/ 			const e = new Error("Cannot find module '" + moduleId + "'");
/******/ 			e.code = 'MODULE_NOT_FOUND';
/******/ 			throw e;
/******/ 		}
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = (module) => {
/******/ 		const getter = module && module.__esModule ?
/******/ 			() => (module['default']) :
/******/ 			() => (module);
/******/ 		__webpack_require__.d(getter, { a: getter });
/******/ 		return getter;
/******/ 	};
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	// define getter/value functions for harmony exports
/******/ 	__webpack_require__.d = (exports, definition) => {
/******/ 		for(var key in definition) {
/******/ 			if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 				Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 			}
/******/ 		}
/******/ 	};
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	__webpack_require__.o = (obj, prop) => (Object.hasOwn(obj, prop));
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = (exports) => {
/******/ 		Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/ 	
/************************************************************************/
let __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _todos_store_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todos-store/index.js */ "./src/todos-store/index.js");
/* harmony import */ var _plugins_sidebar_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./plugins/sidebar.js */ "./src/plugins/sidebar.js");
/* harmony import */ var _plugins_sidebar_examples_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./plugins/sidebar-examples.js */ "./src/plugins/sidebar-examples.js");
/* harmony import */ var _format_types_highlight_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./format-types/highlight.js */ "./src/format-types/highlight.js");
/* harmony import */ var _filters_index_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./filters/index.js */ "./src/filters/index.js");






})();

/******/ })()
;
//# sourceMappingURL=index.js.map