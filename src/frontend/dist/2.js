(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[2],{

/***/ "./node_modules/d3-sankey/src/align.js":
/*!*********************************************!*\
  !*** ./node_modules/d3-sankey/src/align.js ***!
  \*********************************************/
/*! exports provided: left, right, justify, center */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "left", function() { return left; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "right", function() { return right; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "justify", function() { return justify; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "center", function() { return center; });
/* harmony import */ var d3_array__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-array */ "./node_modules/d3-array/src/index.js");


function targetDepth(d) {
  return d.target.depth;
}

function left(node) {
  return node.depth;
}

function right(node, n) {
  return n - 1 - node.height;
}

function justify(node, n) {
  return node.sourceLinks.length ? node.depth : n - 1;
}

function center(node) {
  return node.targetLinks.length ? node.depth
      : node.sourceLinks.length ? Object(d3_array__WEBPACK_IMPORTED_MODULE_0__["min"])(node.sourceLinks, targetDepth) - 1
      : 0;
}


/***/ }),

/***/ "./node_modules/d3-sankey/src/constant.js":
/*!************************************************!*\
  !*** ./node_modules/d3-sankey/src/constant.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return constant; });
function constant(x) {
  return function() {
    return x;
  };
}


/***/ }),

/***/ "./node_modules/d3-sankey/src/index.js":
/*!*********************************************!*\
  !*** ./node_modules/d3-sankey/src/index.js ***!
  \*********************************************/
/*! exports provided: sankey, sankeyCenter, sankeyLeft, sankeyRight, sankeyJustify, sankeyLinkHorizontal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _sankey_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sankey.js */ "./node_modules/d3-sankey/src/sankey.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "sankey", function() { return _sankey_js__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _align_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./align.js */ "./node_modules/d3-sankey/src/align.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "sankeyCenter", function() { return _align_js__WEBPACK_IMPORTED_MODULE_1__["center"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "sankeyLeft", function() { return _align_js__WEBPACK_IMPORTED_MODULE_1__["left"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "sankeyRight", function() { return _align_js__WEBPACK_IMPORTED_MODULE_1__["right"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "sankeyJustify", function() { return _align_js__WEBPACK_IMPORTED_MODULE_1__["justify"]; });

/* harmony import */ var _sankeyLinkHorizontal_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sankeyLinkHorizontal.js */ "./node_modules/d3-sankey/src/sankeyLinkHorizontal.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "sankeyLinkHorizontal", function() { return _sankeyLinkHorizontal_js__WEBPACK_IMPORTED_MODULE_2__["default"]; });






/***/ }),

/***/ "./node_modules/d3-sankey/src/sankey.js":
/*!**********************************************!*\
  !*** ./node_modules/d3-sankey/src/sankey.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Sankey; });
/* harmony import */ var d3_array__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-array */ "./node_modules/d3-array/src/index.js");
/* harmony import */ var _align_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./align.js */ "./node_modules/d3-sankey/src/align.js");
/* harmony import */ var _constant_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constant.js */ "./node_modules/d3-sankey/src/constant.js");




function ascendingSourceBreadth(a, b) {
  return ascendingBreadth(a.source, b.source) || a.index - b.index;
}

function ascendingTargetBreadth(a, b) {
  return ascendingBreadth(a.target, b.target) || a.index - b.index;
}

function ascendingBreadth(a, b) {
  return a.y0 - b.y0;
}

function value(d) {
  return d.value;
}

function defaultId(d) {
  return d.index;
}

function defaultNodes(graph) {
  return graph.nodes;
}

function defaultLinks(graph) {
  return graph.links;
}

function find(nodeById, id) {
  const node = nodeById.get(id);
  if (!node) throw new Error("missing: " + id);
  return node;
}

function computeLinkBreadths({nodes}) {
  for (const node of nodes) {
    let y0 = node.y0;
    let y1 = y0;
    for (const link of node.sourceLinks) {
      link.y0 = y0 + link.width / 2;
      y0 += link.width;
    }
    for (const link of node.targetLinks) {
      link.y1 = y1 + link.width / 2;
      y1 += link.width;
    }
  }
}

function Sankey() {
  let x0 = 0, y0 = 0, x1 = 1, y1 = 1; // extent
  let dx = 24; // nodeWidth
  let dy = 8, py; // nodePadding
  let id = defaultId;
  let align = _align_js__WEBPACK_IMPORTED_MODULE_1__["justify"];
  let sort;
  let linkSort;
  let nodes = defaultNodes;
  let links = defaultLinks;
  let iterations = 6;

  function sankey() {
    const graph = {nodes: nodes.apply(null, arguments), links: links.apply(null, arguments)};
    computeNodeLinks(graph);
    computeNodeValues(graph);
    computeNodeDepths(graph);
    computeNodeHeights(graph);
    computeNodeBreadths(graph);
    computeLinkBreadths(graph);
    return graph;
  }

  sankey.update = function(graph) {
    computeLinkBreadths(graph);
    return graph;
  };

  sankey.nodeId = function(_) {
    return arguments.length ? (id = typeof _ === "function" ? _ : Object(_constant_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_), sankey) : id;
  };

  sankey.nodeAlign = function(_) {
    return arguments.length ? (align = typeof _ === "function" ? _ : Object(_constant_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_), sankey) : align;
  };

  sankey.nodeSort = function(_) {
    return arguments.length ? (sort = _, sankey) : sort;
  };

  sankey.nodeWidth = function(_) {
    return arguments.length ? (dx = +_, sankey) : dx;
  };

  sankey.nodePadding = function(_) {
    return arguments.length ? (dy = py = +_, sankey) : dy;
  };

  sankey.nodes = function(_) {
    return arguments.length ? (nodes = typeof _ === "function" ? _ : Object(_constant_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_), sankey) : nodes;
  };

  sankey.links = function(_) {
    return arguments.length ? (links = typeof _ === "function" ? _ : Object(_constant_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_), sankey) : links;
  };

  sankey.linkSort = function(_) {
    return arguments.length ? (linkSort = _, sankey) : linkSort;
  };

  sankey.size = function(_) {
    return arguments.length ? (x0 = y0 = 0, x1 = +_[0], y1 = +_[1], sankey) : [x1 - x0, y1 - y0];
  };

  sankey.extent = function(_) {
    return arguments.length ? (x0 = +_[0][0], x1 = +_[1][0], y0 = +_[0][1], y1 = +_[1][1], sankey) : [[x0, y0], [x1, y1]];
  };

  sankey.iterations = function(_) {
    return arguments.length ? (iterations = +_, sankey) : iterations;
  };

  function computeNodeLinks({nodes, links}) {
    for (const [i, node] of nodes.entries()) {
      node.index = i;
      node.sourceLinks = [];
      node.targetLinks = [];
    }
    const nodeById = new Map(nodes.map((d, i) => [id(d, i, nodes), d]));
    for (const [i, link] of links.entries()) {
      link.index = i;
      let {source, target} = link;
      if (typeof source !== "object") source = link.source = find(nodeById, source);
      if (typeof target !== "object") target = link.target = find(nodeById, target);
      source.sourceLinks.push(link);
      target.targetLinks.push(link);
    }
    if (linkSort != null) {
      for (const {sourceLinks, targetLinks} of nodes) {
        sourceLinks.sort(linkSort);
        targetLinks.sort(linkSort);
      }
    }
  }

  function computeNodeValues({nodes}) {
    for (const node of nodes) {
      node.value = node.fixedValue === undefined
          ? Math.max(Object(d3_array__WEBPACK_IMPORTED_MODULE_0__["sum"])(node.sourceLinks, value), Object(d3_array__WEBPACK_IMPORTED_MODULE_0__["sum"])(node.targetLinks, value))
          : node.fixedValue;
    }
  }

  function computeNodeDepths({nodes}) {
    const n = nodes.length;
    let current = new Set(nodes);
    let next = new Set;
    let x = 0;
    while (current.size) {
      for (const node of current) {
        node.depth = x;
        for (const {target} of node.sourceLinks) {
          next.add(target);
        }
      }
      if (++x > n) throw new Error("circular link");
      current = next;
      next = new Set;
    }
  }

  function computeNodeHeights({nodes}) {
    const n = nodes.length;
    let current = new Set(nodes);
    let next = new Set;
    let x = 0;
    while (current.size) {
      for (const node of current) {
        node.height = x;
        for (const {source} of node.targetLinks) {
          next.add(source);
        }
      }
      if (++x > n) throw new Error("circular link");
      current = next;
      next = new Set;
    }
  }

  function computeNodeLayers({nodes}) {
    const x = Object(d3_array__WEBPACK_IMPORTED_MODULE_0__["max"])(nodes, d => d.depth) + 1;
    const kx = (x1 - x0 - dx) / (x - 1);
    const columns = new Array(x);
    for (const node of nodes) {
      const i = Math.max(0, Math.min(x - 1, Math.floor(align.call(null, node, x))));
      node.layer = i;
      node.x0 = x0 + i * kx;
      node.x1 = node.x0 + dx;
      if (columns[i]) columns[i].push(node);
      else columns[i] = [node];
    }
    if (sort) for (const column of columns) {
      column.sort(sort);
    }
    return columns;
  }

  function initializeNodeBreadths(columns) {
    const ky = Object(d3_array__WEBPACK_IMPORTED_MODULE_0__["min"])(columns, c => (y1 - y0 - (c.length - 1) * py) / Object(d3_array__WEBPACK_IMPORTED_MODULE_0__["sum"])(c, value));
    for (const nodes of columns) {
      let y = y0;
      for (const node of nodes) {
        node.y0 = y;
        node.y1 = y + node.value * ky;
        y = node.y1 + py;
        for (const link of node.sourceLinks) {
          link.width = link.value * ky;
        }
      }
      y = (y1 - y + py) / (nodes.length + 1);
      for (let i = 0; i < nodes.length; ++i) {
        const node = nodes[i];
        node.y0 += y * (i + 1);
        node.y1 += y * (i + 1);
      }
      reorderLinks(nodes);
    }
  }

  function computeNodeBreadths(graph) {
    const columns = computeNodeLayers(graph);
    py = Math.min(dy, (y1 - y0) / (Object(d3_array__WEBPACK_IMPORTED_MODULE_0__["max"])(columns, c => c.length) - 1));
    initializeNodeBreadths(columns);
    for (let i = 0; i < iterations; ++i) {
      const alpha = Math.pow(0.99, i);
      const beta = Math.max(1 - alpha, (i + 1) / iterations);
      relaxRightToLeft(columns, alpha, beta);
      relaxLeftToRight(columns, alpha, beta);
    }
  }

  // Reposition each node based on its incoming (target) links.
  function relaxLeftToRight(columns, alpha, beta) {
    for (let i = 1, n = columns.length; i < n; ++i) {
      const column = columns[i];
      for (const target of column) {
        let y = 0;
        let w = 0;
        for (const {source, value} of target.targetLinks) {
          let v = value * (target.layer - source.layer);
          y += targetTop(source, target) * v;
          w += v;
        }
        if (!(w > 0)) continue;
        let dy = (y / w - target.y0) * alpha;
        target.y0 += dy;
        target.y1 += dy;
        reorderNodeLinks(target);
      }
      if (sort === undefined) column.sort(ascendingBreadth);
      resolveCollisions(column, beta);
    }
  }

  // Reposition each node based on its outgoing (source) links.
  function relaxRightToLeft(columns, alpha, beta) {
    for (let n = columns.length, i = n - 2; i >= 0; --i) {
      const column = columns[i];
      for (const source of column) {
        let y = 0;
        let w = 0;
        for (const {target, value} of source.sourceLinks) {
          let v = value * (target.layer - source.layer);
          y += sourceTop(source, target) * v;
          w += v;
        }
        if (!(w > 0)) continue;
        let dy = (y / w - source.y0) * alpha;
        source.y0 += dy;
        source.y1 += dy;
        reorderNodeLinks(source);
      }
      if (sort === undefined) column.sort(ascendingBreadth);
      resolveCollisions(column, beta);
    }
  }

  function resolveCollisions(nodes, alpha) {
    const i = nodes.length >> 1;
    const subject = nodes[i];
    resolveCollisionsBottomToTop(nodes, subject.y0 - py, i - 1, alpha);
    resolveCollisionsTopToBottom(nodes, subject.y1 + py, i + 1, alpha);
    resolveCollisionsBottomToTop(nodes, y1, nodes.length - 1, alpha);
    resolveCollisionsTopToBottom(nodes, y0, 0, alpha);
  }

  // Push any overlapping nodes down.
  function resolveCollisionsTopToBottom(nodes, y, i, alpha) {
    for (; i < nodes.length; ++i) {
      const node = nodes[i];
      const dy = (y - node.y0) * alpha;
      if (dy > 1e-6) node.y0 += dy, node.y1 += dy;
      y = node.y1 + py;
    }
  }

  // Push any overlapping nodes up.
  function resolveCollisionsBottomToTop(nodes, y, i, alpha) {
    for (; i >= 0; --i) {
      const node = nodes[i];
      const dy = (node.y1 - y) * alpha;
      if (dy > 1e-6) node.y0 -= dy, node.y1 -= dy;
      y = node.y0 - py;
    }
  }

  function reorderNodeLinks({sourceLinks, targetLinks}) {
    if (linkSort === undefined) {
      for (const {source: {sourceLinks}} of targetLinks) {
        sourceLinks.sort(ascendingTargetBreadth);
      }
      for (const {target: {targetLinks}} of sourceLinks) {
        targetLinks.sort(ascendingSourceBreadth);
      }
    }
  }

  function reorderLinks(nodes) {
    if (linkSort === undefined) {
      for (const {sourceLinks, targetLinks} of nodes) {
        sourceLinks.sort(ascendingTargetBreadth);
        targetLinks.sort(ascendingSourceBreadth);
      }
    }
  }

  // Returns the target.y0 that would produce an ideal link from source to target.
  function targetTop(source, target) {
    let y = source.y0 - (source.sourceLinks.length - 1) * py / 2;
    for (const {target: node, width} of source.sourceLinks) {
      if (node === target) break;
      y += width + py;
    }
    for (const {source: node, width} of target.targetLinks) {
      if (node === source) break;
      y -= width;
    }
    return y;
  }

  // Returns the source.y0 that would produce an ideal link from source to target.
  function sourceTop(source, target) {
    let y = target.y0 - (target.targetLinks.length - 1) * py / 2;
    for (const {source: node, width} of target.targetLinks) {
      if (node === source) break;
      y += width + py;
    }
    for (const {target: node, width} of source.sourceLinks) {
      if (node === target) break;
      y -= width;
    }
    return y;
  }

  return sankey;
}


/***/ }),

/***/ "./node_modules/d3-sankey/src/sankeyLinkHorizontal.js":
/*!************************************************************!*\
  !*** ./node_modules/d3-sankey/src/sankeyLinkHorizontal.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var d3_shape__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-shape */ "./node_modules/d3-shape/src/index.js");


function horizontalSource(d) {
  return [d.source.x1, d.y0];
}

function horizontalTarget(d) {
  return [d.target.x0, d.y1];
}

/* harmony default export */ __webpack_exports__["default"] = (function() {
  return Object(d3_shape__WEBPACK_IMPORTED_MODULE_0__["linkHorizontal"])()
      .source(horizontalSource)
      .target(horizontalTarget);
});


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZDMtc2Fua2V5L3NyYy9hbGlnbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZDMtc2Fua2V5L3NyYy9jb25zdGFudC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZDMtc2Fua2V5L3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZDMtc2Fua2V5L3NyYy9zYW5rZXkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2QzLXNhbmtleS9zcmMvc2Fua2V5TGlua0hvcml6b250YWwuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUE2Qjs7QUFFN0I7QUFDQTtBQUNBOztBQUVPO0FBQ1A7QUFDQTs7QUFFTztBQUNQO0FBQ0E7O0FBRU87QUFDUDtBQUNBOztBQUVPO0FBQ1A7QUFDQSxrQ0FBa0Msb0RBQUc7QUFDckM7QUFDQTs7Ozs7Ozs7Ozs7OztBQ3RCQTtBQUFBO0FBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ0pBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQThDO0FBQ3dFO0FBQzVDOzs7Ozs7Ozs7Ozs7O0FDRjFFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBdUM7QUFDSjtBQUNFOztBQUVyQztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSw4QkFBOEIsTUFBTTtBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FB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O0FBQ0E7QUFDQSxnQkFBZ0Isb0JBQW9CO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQixvQkFBb0I7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0Isb0JBQW9CO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQixvQkFBb0I7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDaFhBO0FBQUE7QUFBd0M7O0FBRXhDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRWU7QUFDZixTQUFTLCtEQUFjO0FBQ3ZCO0FBQ0E7QUFDQSxDQUFDIiwiZmlsZSI6IjIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge21pbn0gZnJvbSBcImQzLWFycmF5XCI7XG5cbmZ1bmN0aW9uIHRhcmdldERlcHRoKGQpIHtcbiAgcmV0dXJuIGQudGFyZ2V0LmRlcHRoO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbGVmdChub2RlKSB7XG4gIHJldHVybiBub2RlLmRlcHRoO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmlnaHQobm9kZSwgbikge1xuICByZXR1cm4gbiAtIDEgLSBub2RlLmhlaWdodDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGp1c3RpZnkobm9kZSwgbikge1xuICByZXR1cm4gbm9kZS5zb3VyY2VMaW5rcy5sZW5ndGggPyBub2RlLmRlcHRoIDogbiAtIDE7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjZW50ZXIobm9kZSkge1xuICByZXR1cm4gbm9kZS50YXJnZXRMaW5rcy5sZW5ndGggPyBub2RlLmRlcHRoXG4gICAgICA6IG5vZGUuc291cmNlTGlua3MubGVuZ3RoID8gbWluKG5vZGUuc291cmNlTGlua3MsIHRhcmdldERlcHRoKSAtIDFcbiAgICAgIDogMDtcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNvbnN0YW50KHgpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB4O1xuICB9O1xufVxuIiwiZXhwb3J0IHtkZWZhdWx0IGFzIHNhbmtleX0gZnJvbSBcIi4vc2Fua2V5LmpzXCI7XG5leHBvcnQge2NlbnRlciBhcyBzYW5rZXlDZW50ZXIsIGxlZnQgYXMgc2Fua2V5TGVmdCwgcmlnaHQgYXMgc2Fua2V5UmlnaHQsIGp1c3RpZnkgYXMgc2Fua2V5SnVzdGlmeX0gZnJvbSBcIi4vYWxpZ24uanNcIjtcbmV4cG9ydCB7ZGVmYXVsdCBhcyBzYW5rZXlMaW5rSG9yaXpvbnRhbH0gZnJvbSBcIi4vc2Fua2V5TGlua0hvcml6b250YWwuanNcIjtcbiIsImltcG9ydCB7bWF4LCBtaW4sIHN1bX0gZnJvbSBcImQzLWFycmF5XCI7XG5pbXBvcnQge2p1c3RpZnl9IGZyb20gXCIuL2FsaWduLmpzXCI7XG5pbXBvcnQgY29uc3RhbnQgZnJvbSBcIi4vY29uc3RhbnQuanNcIjtcblxuZnVuY3Rpb24gYXNjZW5kaW5nU291cmNlQnJlYWR0aChhLCBiKSB7XG4gIHJldHVybiBhc2NlbmRpbmdCcmVhZHRoKGEuc291cmNlLCBiLnNvdXJjZSkgfHwgYS5pbmRleCAtIGIuaW5kZXg7XG59XG5cbmZ1bmN0aW9uIGFzY2VuZGluZ1RhcmdldEJyZWFkdGgoYSwgYikge1xuICByZXR1cm4gYXNjZW5kaW5nQnJlYWR0aChhLnRhcmdldCwgYi50YXJnZXQpIHx8IGEuaW5kZXggLSBiLmluZGV4O1xufVxuXG5mdW5jdGlvbiBhc2NlbmRpbmdCcmVhZHRoKGEsIGIpIHtcbiAgcmV0dXJuIGEueTAgLSBiLnkwO1xufVxuXG5mdW5jdGlvbiB2YWx1ZShkKSB7XG4gIHJldHVybiBkLnZhbHVlO1xufVxuXG5mdW5jdGlvbiBkZWZhdWx0SWQoZCkge1xuICByZXR1cm4gZC5pbmRleDtcbn1cblxuZnVuY3Rpb24gZGVmYXVsdE5vZGVzKGdyYXBoKSB7XG4gIHJldHVybiBncmFwaC5ub2Rlcztcbn1cblxuZnVuY3Rpb24gZGVmYXVsdExpbmtzKGdyYXBoKSB7XG4gIHJldHVybiBncmFwaC5saW5rcztcbn1cblxuZnVuY3Rpb24gZmluZChub2RlQnlJZCwgaWQpIHtcbiAgY29uc3Qgbm9kZSA9IG5vZGVCeUlkLmdldChpZCk7XG4gIGlmICghbm9kZSkgdGhyb3cgbmV3IEVycm9yKFwibWlzc2luZzogXCIgKyBpZCk7XG4gIHJldHVybiBub2RlO1xufVxuXG5mdW5jdGlvbiBjb21wdXRlTGlua0JyZWFkdGhzKHtub2Rlc30pIHtcbiAgZm9yIChjb25zdCBub2RlIG9mIG5vZGVzKSB7XG4gICAgbGV0IHkwID0gbm9kZS55MDtcbiAgICBsZXQgeTEgPSB5MDtcbiAgICBmb3IgKGNvbnN0IGxpbmsgb2Ygbm9kZS5zb3VyY2VMaW5rcykge1xuICAgICAgbGluay55MCA9IHkwICsgbGluay53aWR0aCAvIDI7XG4gICAgICB5MCArPSBsaW5rLndpZHRoO1xuICAgIH1cbiAgICBmb3IgKGNvbnN0IGxpbmsgb2Ygbm9kZS50YXJnZXRMaW5rcykge1xuICAgICAgbGluay55MSA9IHkxICsgbGluay53aWR0aCAvIDI7XG4gICAgICB5MSArPSBsaW5rLndpZHRoO1xuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTYW5rZXkoKSB7XG4gIGxldCB4MCA9IDAsIHkwID0gMCwgeDEgPSAxLCB5MSA9IDE7IC8vIGV4dGVudFxuICBsZXQgZHggPSAyNDsgLy8gbm9kZVdpZHRoXG4gIGxldCBkeSA9IDgsIHB5OyAvLyBub2RlUGFkZGluZ1xuICBsZXQgaWQgPSBkZWZhdWx0SWQ7XG4gIGxldCBhbGlnbiA9IGp1c3RpZnk7XG4gIGxldCBzb3J0O1xuICBsZXQgbGlua1NvcnQ7XG4gIGxldCBub2RlcyA9IGRlZmF1bHROb2RlcztcbiAgbGV0IGxpbmtzID0gZGVmYXVsdExpbmtzO1xuICBsZXQgaXRlcmF0aW9ucyA9IDY7XG5cbiAgZnVuY3Rpb24gc2Fua2V5KCkge1xuICAgIGNvbnN0IGdyYXBoID0ge25vZGVzOiBub2Rlcy5hcHBseShudWxsLCBhcmd1bWVudHMpLCBsaW5rczogbGlua3MuYXBwbHkobnVsbCwgYXJndW1lbnRzKX07XG4gICAgY29tcHV0ZU5vZGVMaW5rcyhncmFwaCk7XG4gICAgY29tcHV0ZU5vZGVWYWx1ZXMoZ3JhcGgpO1xuICAgIGNvbXB1dGVOb2RlRGVwdGhzKGdyYXBoKTtcbiAgICBjb21wdXRlTm9kZUhlaWdodHMoZ3JhcGgpO1xuICAgIGNvbXB1dGVOb2RlQnJlYWR0aHMoZ3JhcGgpO1xuICAgIGNvbXB1dGVMaW5rQnJlYWR0aHMoZ3JhcGgpO1xuICAgIHJldHVybiBncmFwaDtcbiAgfVxuXG4gIHNhbmtleS51cGRhdGUgPSBmdW5jdGlvbihncmFwaCkge1xuICAgIGNvbXB1dGVMaW5rQnJlYWR0aHMoZ3JhcGgpO1xuICAgIHJldHVybiBncmFwaDtcbiAgfTtcblxuICBzYW5rZXkubm9kZUlkID0gZnVuY3Rpb24oXykge1xuICAgIHJldHVybiBhcmd1bWVudHMubGVuZ3RoID8gKGlkID0gdHlwZW9mIF8gPT09IFwiZnVuY3Rpb25cIiA/IF8gOiBjb25zdGFudChfKSwgc2Fua2V5KSA6IGlkO1xuICB9O1xuXG4gIHNhbmtleS5ub2RlQWxpZ24gPSBmdW5jdGlvbihfKSB7XG4gICAgcmV0dXJuIGFyZ3VtZW50cy5sZW5ndGggPyAoYWxpZ24gPSB0eXBlb2YgXyA9PT0gXCJmdW5jdGlvblwiID8gXyA6IGNvbnN0YW50KF8pLCBzYW5rZXkpIDogYWxpZ247XG4gIH07XG5cbiAgc2Fua2V5Lm5vZGVTb3J0ID0gZnVuY3Rpb24oXykge1xuICAgIHJldHVybiBhcmd1bWVudHMubGVuZ3RoID8gKHNvcnQgPSBfLCBzYW5rZXkpIDogc29ydDtcbiAgfTtcblxuICBzYW5rZXkubm9kZVdpZHRoID0gZnVuY3Rpb24oXykge1xuICAgIHJldHVybiBhcmd1bWVudHMubGVuZ3RoID8gKGR4ID0gK18sIHNhbmtleSkgOiBkeDtcbiAgfTtcblxuICBzYW5rZXkubm9kZVBhZGRpbmcgPSBmdW5jdGlvbihfKSB7XG4gICAgcmV0dXJuIGFyZ3VtZW50cy5sZW5ndGggPyAoZHkgPSBweSA9ICtfLCBzYW5rZXkpIDogZHk7XG4gIH07XG5cbiAgc2Fua2V5Lm5vZGVzID0gZnVuY3Rpb24oXykge1xuICAgIHJldHVybiBhcmd1bWVudHMubGVuZ3RoID8gKG5vZGVzID0gdHlwZW9mIF8gPT09IFwiZnVuY3Rpb25cIiA/IF8gOiBjb25zdGFudChfKSwgc2Fua2V5KSA6IG5vZGVzO1xuICB9O1xuXG4gIHNhbmtleS5saW5rcyA9IGZ1bmN0aW9uKF8pIHtcbiAgICByZXR1cm4gYXJndW1lbnRzLmxlbmd0aCA/IChsaW5rcyA9IHR5cGVvZiBfID09PSBcImZ1bmN0aW9uXCIgPyBfIDogY29uc3RhbnQoXyksIHNhbmtleSkgOiBsaW5rcztcbiAgfTtcblxuICBzYW5rZXkubGlua1NvcnQgPSBmdW5jdGlvbihfKSB7XG4gICAgcmV0dXJuIGFyZ3VtZW50cy5sZW5ndGggPyAobGlua1NvcnQgPSBfLCBzYW5rZXkpIDogbGlua1NvcnQ7XG4gIH07XG5cbiAgc2Fua2V5LnNpemUgPSBmdW5jdGlvbihfKSB7XG4gICAgcmV0dXJuIGFyZ3VtZW50cy5sZW5ndGggPyAoeDAgPSB5MCA9IDAsIHgxID0gK19bMF0sIHkxID0gK19bMV0sIHNhbmtleSkgOiBbeDEgLSB4MCwgeTEgLSB5MF07XG4gIH07XG5cbiAgc2Fua2V5LmV4dGVudCA9IGZ1bmN0aW9uKF8pIHtcbiAgICByZXR1cm4gYXJndW1lbnRzLmxlbmd0aCA/ICh4MCA9ICtfWzBdWzBdLCB4MSA9ICtfWzFdWzBdLCB5MCA9ICtfWzBdWzFdLCB5MSA9ICtfWzFdWzFdLCBzYW5rZXkpIDogW1t4MCwgeTBdLCBbeDEsIHkxXV07XG4gIH07XG5cbiAgc2Fua2V5Lml0ZXJhdGlvbnMgPSBmdW5jdGlvbihfKSB7XG4gICAgcmV0dXJuIGFyZ3VtZW50cy5sZW5ndGggPyAoaXRlcmF0aW9ucyA9ICtfLCBzYW5rZXkpIDogaXRlcmF0aW9ucztcbiAgfTtcblxuICBmdW5jdGlvbiBjb21wdXRlTm9kZUxpbmtzKHtub2RlcywgbGlua3N9KSB7XG4gICAgZm9yIChjb25zdCBbaSwgbm9kZV0gb2Ygbm9kZXMuZW50cmllcygpKSB7XG4gICAgICBub2RlLmluZGV4ID0gaTtcbiAgICAgIG5vZGUuc291cmNlTGlua3MgPSBbXTtcbiAgICAgIG5vZGUudGFyZ2V0TGlua3MgPSBbXTtcbiAgICB9XG4gICAgY29uc3Qgbm9kZUJ5SWQgPSBuZXcgTWFwKG5vZGVzLm1hcCgoZCwgaSkgPT4gW2lkKGQsIGksIG5vZGVzKSwgZF0pKTtcbiAgICBmb3IgKGNvbnN0IFtpLCBsaW5rXSBvZiBsaW5rcy5lbnRyaWVzKCkpIHtcbiAgICAgIGxpbmsuaW5kZXggPSBpO1xuICAgICAgbGV0IHtzb3VyY2UsIHRhcmdldH0gPSBsaW5rO1xuICAgICAgaWYgKHR5cGVvZiBzb3VyY2UgIT09IFwib2JqZWN0XCIpIHNvdXJjZSA9IGxpbmsuc291cmNlID0gZmluZChub2RlQnlJZCwgc291cmNlKTtcbiAgICAgIGlmICh0eXBlb2YgdGFyZ2V0ICE9PSBcIm9iamVjdFwiKSB0YXJnZXQgPSBsaW5rLnRhcmdldCA9IGZpbmQobm9kZUJ5SWQsIHRhcmdldCk7XG4gICAgICBzb3VyY2Uuc291cmNlTGlua3MucHVzaChsaW5rKTtcbiAgICAgIHRhcmdldC50YXJnZXRMaW5rcy5wdXNoKGxpbmspO1xuICAgIH1cbiAgICBpZiAobGlua1NvcnQgIT0gbnVsbCkge1xuICAgICAgZm9yIChjb25zdCB7c291cmNlTGlua3MsIHRhcmdldExpbmtzfSBvZiBub2Rlcykge1xuICAgICAgICBzb3VyY2VMaW5rcy5zb3J0KGxpbmtTb3J0KTtcbiAgICAgICAgdGFyZ2V0TGlua3Muc29ydChsaW5rU29ydCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gY29tcHV0ZU5vZGVWYWx1ZXMoe25vZGVzfSkge1xuICAgIGZvciAoY29uc3Qgbm9kZSBvZiBub2Rlcykge1xuICAgICAgbm9kZS52YWx1ZSA9IG5vZGUuZml4ZWRWYWx1ZSA9PT0gdW5kZWZpbmVkXG4gICAgICAgICAgPyBNYXRoLm1heChzdW0obm9kZS5zb3VyY2VMaW5rcywgdmFsdWUpLCBzdW0obm9kZS50YXJnZXRMaW5rcywgdmFsdWUpKVxuICAgICAgICAgIDogbm9kZS5maXhlZFZhbHVlO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGNvbXB1dGVOb2RlRGVwdGhzKHtub2Rlc30pIHtcbiAgICBjb25zdCBuID0gbm9kZXMubGVuZ3RoO1xuICAgIGxldCBjdXJyZW50ID0gbmV3IFNldChub2Rlcyk7XG4gICAgbGV0IG5leHQgPSBuZXcgU2V0O1xuICAgIGxldCB4ID0gMDtcbiAgICB3aGlsZSAoY3VycmVudC5zaXplKSB7XG4gICAgICBmb3IgKGNvbnN0IG5vZGUgb2YgY3VycmVudCkge1xuICAgICAgICBub2RlLmRlcHRoID0geDtcbiAgICAgICAgZm9yIChjb25zdCB7dGFyZ2V0fSBvZiBub2RlLnNvdXJjZUxpbmtzKSB7XG4gICAgICAgICAgbmV4dC5hZGQodGFyZ2V0KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKCsreCA+IG4pIHRocm93IG5ldyBFcnJvcihcImNpcmN1bGFyIGxpbmtcIik7XG4gICAgICBjdXJyZW50ID0gbmV4dDtcbiAgICAgIG5leHQgPSBuZXcgU2V0O1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGNvbXB1dGVOb2RlSGVpZ2h0cyh7bm9kZXN9KSB7XG4gICAgY29uc3QgbiA9IG5vZGVzLmxlbmd0aDtcbiAgICBsZXQgY3VycmVudCA9IG5ldyBTZXQobm9kZXMpO1xuICAgIGxldCBuZXh0ID0gbmV3IFNldDtcbiAgICBsZXQgeCA9IDA7XG4gICAgd2hpbGUgKGN1cnJlbnQuc2l6ZSkge1xuICAgICAgZm9yIChjb25zdCBub2RlIG9mIGN1cnJlbnQpIHtcbiAgICAgICAgbm9kZS5oZWlnaHQgPSB4O1xuICAgICAgICBmb3IgKGNvbnN0IHtzb3VyY2V9IG9mIG5vZGUudGFyZ2V0TGlua3MpIHtcbiAgICAgICAgICBuZXh0LmFkZChzb3VyY2UpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoKyt4ID4gbikgdGhyb3cgbmV3IEVycm9yKFwiY2lyY3VsYXIgbGlua1wiKTtcbiAgICAgIGN1cnJlbnQgPSBuZXh0O1xuICAgICAgbmV4dCA9IG5ldyBTZXQ7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gY29tcHV0ZU5vZGVMYXllcnMoe25vZGVzfSkge1xuICAgIGNvbnN0IHggPSBtYXgobm9kZXMsIGQgPT4gZC5kZXB0aCkgKyAxO1xuICAgIGNvbnN0IGt4ID0gKHgxIC0geDAgLSBkeCkgLyAoeCAtIDEpO1xuICAgIGNvbnN0IGNvbHVtbnMgPSBuZXcgQXJyYXkoeCk7XG4gICAgZm9yIChjb25zdCBub2RlIG9mIG5vZGVzKSB7XG4gICAgICBjb25zdCBpID0gTWF0aC5tYXgoMCwgTWF0aC5taW4oeCAtIDEsIE1hdGguZmxvb3IoYWxpZ24uY2FsbChudWxsLCBub2RlLCB4KSkpKTtcbiAgICAgIG5vZGUubGF5ZXIgPSBpO1xuICAgICAgbm9kZS54MCA9IHgwICsgaSAqIGt4O1xuICAgICAgbm9kZS54MSA9IG5vZGUueDAgKyBkeDtcbiAgICAgIGlmIChjb2x1bW5zW2ldKSBjb2x1bW5zW2ldLnB1c2gobm9kZSk7XG4gICAgICBlbHNlIGNvbHVtbnNbaV0gPSBbbm9kZV07XG4gICAgfVxuICAgIGlmIChzb3J0KSBmb3IgKGNvbnN0IGNvbHVtbiBvZiBjb2x1bW5zKSB7XG4gICAgICBjb2x1bW4uc29ydChzb3J0KTtcbiAgICB9XG4gICAgcmV0dXJuIGNvbHVtbnM7XG4gIH1cblxuICBmdW5jdGlvbiBpbml0aWFsaXplTm9kZUJyZWFkdGhzKGNvbHVtbnMpIHtcbiAgICBjb25zdCBreSA9IG1pbihjb2x1bW5zLCBjID0+ICh5MSAtIHkwIC0gKGMubGVuZ3RoIC0gMSkgKiBweSkgLyBzdW0oYywgdmFsdWUpKTtcbiAgICBmb3IgKGNvbnN0IG5vZGVzIG9mIGNvbHVtbnMpIHtcbiAgICAgIGxldCB5ID0geTA7XG4gICAgICBmb3IgKGNvbnN0IG5vZGUgb2Ygbm9kZXMpIHtcbiAgICAgICAgbm9kZS55MCA9IHk7XG4gICAgICAgIG5vZGUueTEgPSB5ICsgbm9kZS52YWx1ZSAqIGt5O1xuICAgICAgICB5ID0gbm9kZS55MSArIHB5O1xuICAgICAgICBmb3IgKGNvbnN0IGxpbmsgb2Ygbm9kZS5zb3VyY2VMaW5rcykge1xuICAgICAgICAgIGxpbmsud2lkdGggPSBsaW5rLnZhbHVlICoga3k7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHkgPSAoeTEgLSB5ICsgcHkpIC8gKG5vZGVzLmxlbmd0aCArIDEpO1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBub2Rlcy5sZW5ndGg7ICsraSkge1xuICAgICAgICBjb25zdCBub2RlID0gbm9kZXNbaV07XG4gICAgICAgIG5vZGUueTAgKz0geSAqIChpICsgMSk7XG4gICAgICAgIG5vZGUueTEgKz0geSAqIChpICsgMSk7XG4gICAgICB9XG4gICAgICByZW9yZGVyTGlua3Mobm9kZXMpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGNvbXB1dGVOb2RlQnJlYWR0aHMoZ3JhcGgpIHtcbiAgICBjb25zdCBjb2x1bW5zID0gY29tcHV0ZU5vZGVMYXllcnMoZ3JhcGgpO1xuICAgIHB5ID0gTWF0aC5taW4oZHksICh5MSAtIHkwKSAvIChtYXgoY29sdW1ucywgYyA9PiBjLmxlbmd0aCkgLSAxKSk7XG4gICAgaW5pdGlhbGl6ZU5vZGVCcmVhZHRocyhjb2x1bW5zKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGl0ZXJhdGlvbnM7ICsraSkge1xuICAgICAgY29uc3QgYWxwaGEgPSBNYXRoLnBvdygwLjk5LCBpKTtcbiAgICAgIGNvbnN0IGJldGEgPSBNYXRoLm1heCgxIC0gYWxwaGEsIChpICsgMSkgLyBpdGVyYXRpb25zKTtcbiAgICAgIHJlbGF4UmlnaHRUb0xlZnQoY29sdW1ucywgYWxwaGEsIGJldGEpO1xuICAgICAgcmVsYXhMZWZ0VG9SaWdodChjb2x1bW5zLCBhbHBoYSwgYmV0YSk7XG4gICAgfVxuICB9XG5cbiAgLy8gUmVwb3NpdGlvbiBlYWNoIG5vZGUgYmFzZWQgb24gaXRzIGluY29taW5nICh0YXJnZXQpIGxpbmtzLlxuICBmdW5jdGlvbiByZWxheExlZnRUb1JpZ2h0KGNvbHVtbnMsIGFscGhhLCBiZXRhKSB7XG4gICAgZm9yIChsZXQgaSA9IDEsIG4gPSBjb2x1bW5zLmxlbmd0aDsgaSA8IG47ICsraSkge1xuICAgICAgY29uc3QgY29sdW1uID0gY29sdW1uc1tpXTtcbiAgICAgIGZvciAoY29uc3QgdGFyZ2V0IG9mIGNvbHVtbikge1xuICAgICAgICBsZXQgeSA9IDA7XG4gICAgICAgIGxldCB3ID0gMDtcbiAgICAgICAgZm9yIChjb25zdCB7c291cmNlLCB2YWx1ZX0gb2YgdGFyZ2V0LnRhcmdldExpbmtzKSB7XG4gICAgICAgICAgbGV0IHYgPSB2YWx1ZSAqICh0YXJnZXQubGF5ZXIgLSBzb3VyY2UubGF5ZXIpO1xuICAgICAgICAgIHkgKz0gdGFyZ2V0VG9wKHNvdXJjZSwgdGFyZ2V0KSAqIHY7XG4gICAgICAgICAgdyArPSB2O1xuICAgICAgICB9XG4gICAgICAgIGlmICghKHcgPiAwKSkgY29udGludWU7XG4gICAgICAgIGxldCBkeSA9ICh5IC8gdyAtIHRhcmdldC55MCkgKiBhbHBoYTtcbiAgICAgICAgdGFyZ2V0LnkwICs9IGR5O1xuICAgICAgICB0YXJnZXQueTEgKz0gZHk7XG4gICAgICAgIHJlb3JkZXJOb2RlTGlua3ModGFyZ2V0KTtcbiAgICAgIH1cbiAgICAgIGlmIChzb3J0ID09PSB1bmRlZmluZWQpIGNvbHVtbi5zb3J0KGFzY2VuZGluZ0JyZWFkdGgpO1xuICAgICAgcmVzb2x2ZUNvbGxpc2lvbnMoY29sdW1uLCBiZXRhKTtcbiAgICB9XG4gIH1cblxuICAvLyBSZXBvc2l0aW9uIGVhY2ggbm9kZSBiYXNlZCBvbiBpdHMgb3V0Z29pbmcgKHNvdXJjZSkgbGlua3MuXG4gIGZ1bmN0aW9uIHJlbGF4UmlnaHRUb0xlZnQoY29sdW1ucywgYWxwaGEsIGJldGEpIHtcbiAgICBmb3IgKGxldCBuID0gY29sdW1ucy5sZW5ndGgsIGkgPSBuIC0gMjsgaSA+PSAwOyAtLWkpIHtcbiAgICAgIGNvbnN0IGNvbHVtbiA9IGNvbHVtbnNbaV07XG4gICAgICBmb3IgKGNvbnN0IHNvdXJjZSBvZiBjb2x1bW4pIHtcbiAgICAgICAgbGV0IHkgPSAwO1xuICAgICAgICBsZXQgdyA9IDA7XG4gICAgICAgIGZvciAoY29uc3Qge3RhcmdldCwgdmFsdWV9IG9mIHNvdXJjZS5zb3VyY2VMaW5rcykge1xuICAgICAgICAgIGxldCB2ID0gdmFsdWUgKiAodGFyZ2V0LmxheWVyIC0gc291cmNlLmxheWVyKTtcbiAgICAgICAgICB5ICs9IHNvdXJjZVRvcChzb3VyY2UsIHRhcmdldCkgKiB2O1xuICAgICAgICAgIHcgKz0gdjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoISh3ID4gMCkpIGNvbnRpbnVlO1xuICAgICAgICBsZXQgZHkgPSAoeSAvIHcgLSBzb3VyY2UueTApICogYWxwaGE7XG4gICAgICAgIHNvdXJjZS55MCArPSBkeTtcbiAgICAgICAgc291cmNlLnkxICs9IGR5O1xuICAgICAgICByZW9yZGVyTm9kZUxpbmtzKHNvdXJjZSk7XG4gICAgICB9XG4gICAgICBpZiAoc29ydCA9PT0gdW5kZWZpbmVkKSBjb2x1bW4uc29ydChhc2NlbmRpbmdCcmVhZHRoKTtcbiAgICAgIHJlc29sdmVDb2xsaXNpb25zKGNvbHVtbiwgYmV0YSk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gcmVzb2x2ZUNvbGxpc2lvbnMobm9kZXMsIGFscGhhKSB7XG4gICAgY29uc3QgaSA9IG5vZGVzLmxlbmd0aCA+PiAxO1xuICAgIGNvbnN0IHN1YmplY3QgPSBub2Rlc1tpXTtcbiAgICByZXNvbHZlQ29sbGlzaW9uc0JvdHRvbVRvVG9wKG5vZGVzLCBzdWJqZWN0LnkwIC0gcHksIGkgLSAxLCBhbHBoYSk7XG4gICAgcmVzb2x2ZUNvbGxpc2lvbnNUb3BUb0JvdHRvbShub2Rlcywgc3ViamVjdC55MSArIHB5LCBpICsgMSwgYWxwaGEpO1xuICAgIHJlc29sdmVDb2xsaXNpb25zQm90dG9tVG9Ub3Aobm9kZXMsIHkxLCBub2Rlcy5sZW5ndGggLSAxLCBhbHBoYSk7XG4gICAgcmVzb2x2ZUNvbGxpc2lvbnNUb3BUb0JvdHRvbShub2RlcywgeTAsIDAsIGFscGhhKTtcbiAgfVxuXG4gIC8vIFB1c2ggYW55IG92ZXJsYXBwaW5nIG5vZGVzIGRvd24uXG4gIGZ1bmN0aW9uIHJlc29sdmVDb2xsaXNpb25zVG9wVG9Cb3R0b20obm9kZXMsIHksIGksIGFscGhhKSB7XG4gICAgZm9yICg7IGkgPCBub2Rlcy5sZW5ndGg7ICsraSkge1xuICAgICAgY29uc3Qgbm9kZSA9IG5vZGVzW2ldO1xuICAgICAgY29uc3QgZHkgPSAoeSAtIG5vZGUueTApICogYWxwaGE7XG4gICAgICBpZiAoZHkgPiAxZS02KSBub2RlLnkwICs9IGR5LCBub2RlLnkxICs9IGR5O1xuICAgICAgeSA9IG5vZGUueTEgKyBweTtcbiAgICB9XG4gIH1cblxuICAvLyBQdXNoIGFueSBvdmVybGFwcGluZyBub2RlcyB1cC5cbiAgZnVuY3Rpb24gcmVzb2x2ZUNvbGxpc2lvbnNCb3R0b21Ub1RvcChub2RlcywgeSwgaSwgYWxwaGEpIHtcbiAgICBmb3IgKDsgaSA+PSAwOyAtLWkpIHtcbiAgICAgIGNvbnN0IG5vZGUgPSBub2Rlc1tpXTtcbiAgICAgIGNvbnN0IGR5ID0gKG5vZGUueTEgLSB5KSAqIGFscGhhO1xuICAgICAgaWYgKGR5ID4gMWUtNikgbm9kZS55MCAtPSBkeSwgbm9kZS55MSAtPSBkeTtcbiAgICAgIHkgPSBub2RlLnkwIC0gcHk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gcmVvcmRlck5vZGVMaW5rcyh7c291cmNlTGlua3MsIHRhcmdldExpbmtzfSkge1xuICAgIGlmIChsaW5rU29ydCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBmb3IgKGNvbnN0IHtzb3VyY2U6IHtzb3VyY2VMaW5rc319IG9mIHRhcmdldExpbmtzKSB7XG4gICAgICAgIHNvdXJjZUxpbmtzLnNvcnQoYXNjZW5kaW5nVGFyZ2V0QnJlYWR0aCk7XG4gICAgICB9XG4gICAgICBmb3IgKGNvbnN0IHt0YXJnZXQ6IHt0YXJnZXRMaW5rc319IG9mIHNvdXJjZUxpbmtzKSB7XG4gICAgICAgIHRhcmdldExpbmtzLnNvcnQoYXNjZW5kaW5nU291cmNlQnJlYWR0aCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gcmVvcmRlckxpbmtzKG5vZGVzKSB7XG4gICAgaWYgKGxpbmtTb3J0ID09PSB1bmRlZmluZWQpIHtcbiAgICAgIGZvciAoY29uc3Qge3NvdXJjZUxpbmtzLCB0YXJnZXRMaW5rc30gb2Ygbm9kZXMpIHtcbiAgICAgICAgc291cmNlTGlua3Muc29ydChhc2NlbmRpbmdUYXJnZXRCcmVhZHRoKTtcbiAgICAgICAgdGFyZ2V0TGlua3Muc29ydChhc2NlbmRpbmdTb3VyY2VCcmVhZHRoKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvLyBSZXR1cm5zIHRoZSB0YXJnZXQueTAgdGhhdCB3b3VsZCBwcm9kdWNlIGFuIGlkZWFsIGxpbmsgZnJvbSBzb3VyY2UgdG8gdGFyZ2V0LlxuICBmdW5jdGlvbiB0YXJnZXRUb3Aoc291cmNlLCB0YXJnZXQpIHtcbiAgICBsZXQgeSA9IHNvdXJjZS55MCAtIChzb3VyY2Uuc291cmNlTGlua3MubGVuZ3RoIC0gMSkgKiBweSAvIDI7XG4gICAgZm9yIChjb25zdCB7dGFyZ2V0OiBub2RlLCB3aWR0aH0gb2Ygc291cmNlLnNvdXJjZUxpbmtzKSB7XG4gICAgICBpZiAobm9kZSA9PT0gdGFyZ2V0KSBicmVhaztcbiAgICAgIHkgKz0gd2lkdGggKyBweTtcbiAgICB9XG4gICAgZm9yIChjb25zdCB7c291cmNlOiBub2RlLCB3aWR0aH0gb2YgdGFyZ2V0LnRhcmdldExpbmtzKSB7XG4gICAgICBpZiAobm9kZSA9PT0gc291cmNlKSBicmVhaztcbiAgICAgIHkgLT0gd2lkdGg7XG4gICAgfVxuICAgIHJldHVybiB5O1xuICB9XG5cbiAgLy8gUmV0dXJucyB0aGUgc291cmNlLnkwIHRoYXQgd291bGQgcHJvZHVjZSBhbiBpZGVhbCBsaW5rIGZyb20gc291cmNlIHRvIHRhcmdldC5cbiAgZnVuY3Rpb24gc291cmNlVG9wKHNvdXJjZSwgdGFyZ2V0KSB7XG4gICAgbGV0IHkgPSB0YXJnZXQueTAgLSAodGFyZ2V0LnRhcmdldExpbmtzLmxlbmd0aCAtIDEpICogcHkgLyAyO1xuICAgIGZvciAoY29uc3Qge3NvdXJjZTogbm9kZSwgd2lkdGh9IG9mIHRhcmdldC50YXJnZXRMaW5rcykge1xuICAgICAgaWYgKG5vZGUgPT09IHNvdXJjZSkgYnJlYWs7XG4gICAgICB5ICs9IHdpZHRoICsgcHk7XG4gICAgfVxuICAgIGZvciAoY29uc3Qge3RhcmdldDogbm9kZSwgd2lkdGh9IG9mIHNvdXJjZS5zb3VyY2VMaW5rcykge1xuICAgICAgaWYgKG5vZGUgPT09IHRhcmdldCkgYnJlYWs7XG4gICAgICB5IC09IHdpZHRoO1xuICAgIH1cbiAgICByZXR1cm4geTtcbiAgfVxuXG4gIHJldHVybiBzYW5rZXk7XG59XG4iLCJpbXBvcnQge2xpbmtIb3Jpem9udGFsfSBmcm9tIFwiZDMtc2hhcGVcIjtcblxuZnVuY3Rpb24gaG9yaXpvbnRhbFNvdXJjZShkKSB7XG4gIHJldHVybiBbZC5zb3VyY2UueDEsIGQueTBdO1xufVxuXG5mdW5jdGlvbiBob3Jpem9udGFsVGFyZ2V0KGQpIHtcbiAgcmV0dXJuIFtkLnRhcmdldC54MCwgZC55MV07XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gbGlua0hvcml6b250YWwoKVxuICAgICAgLnNvdXJjZShob3Jpem9udGFsU291cmNlKVxuICAgICAgLnRhcmdldChob3Jpem9udGFsVGFyZ2V0KTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=