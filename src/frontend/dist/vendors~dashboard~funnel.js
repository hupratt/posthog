(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["vendors~dashboard~funnel"],{

/***/ "./node_modules/funnel-graph-js/index.js":
/*!***********************************************!*\
  !*** ./node_modules/funnel-graph-js/index.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./src/js/main */ "./node_modules/funnel-graph-js/src/js/main.js").default;


/***/ }),

/***/ "./node_modules/funnel-graph-js/src/js/graph.js":
/*!******************************************************!*\
  !*** ./node_modules/funnel-graph-js/src/js/graph.js ***!
  \******************************************************/
/*! exports provided: generateLegendBackground, getDefaultColors, areEqual, createSVGElement, setAttrs, removeAttrs, defaultColors */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateLegendBackground", function() { return generateLegendBackground; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDefaultColors", function() { return getDefaultColors; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "areEqual", function() { return areEqual; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createSVGElement", function() { return createSVGElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setAttrs", function() { return setAttrs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeAttrs", function() { return removeAttrs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultColors", function() { return defaultColors; });
const setAttrs = (element, attributes) => {
    if (typeof attributes === 'object') {
        Object.keys(attributes).forEach((key) => {
            element.setAttribute(key, attributes[key]);
        });
    }
};

const removeAttrs = (element, ...attributes) => {
    attributes.forEach((attribute) => {
        element.removeAttribute(attribute);
    });
};

const createSVGElement = (element, container, attributes) => {
    const el = document.createElementNS('http://www.w3.org/2000/svg', element);

    if (typeof attributes === 'object') {
        setAttrs(el, attributes);
    }

    if (typeof container !== 'undefined') {
        container.appendChild(el);
    }

    return el;
};

const generateLegendBackground = (color, direction = 'horizontal') => {
    if (typeof color === 'string') {
        return `background-color: ${color}`;
    }

    if (color.length === 1) {
        return `background-color: ${color[0]}`;
    }

    return `background-image: linear-gradient(${direction === 'horizontal'
        ? 'to right, '
        : ''}${color.join(', ')})`;
};

const defaultColors = ['#FF4589', '#FF5050',
    '#05DF9D', '#4FF2FD',
    '#2D9CDB', '#A0BBFF',
    '#FFD76F', '#F2C94C',
    '#FF9A9A', '#FFB178'];

const getDefaultColors = (number) => {
    const colors = [...defaultColors];
    const colorSet = [];

    for (let i = 0; i < number; i++) {
        // get a random color
        const index = Math.abs(Math.round(Math.random() * (colors.length - 1)));
        // push it to the list
        colorSet.push(colors[index]);
        // and remove it, so that it is not chosen again
        colors.splice(index, 1);
    }
    return colorSet;
};

/*
    Used in comparing existing values to value provided on update
    It is limited to comparing arrays on purpose
    Name is slightly unusual, in order not to be confused with Lodash method
 */
const areEqual = (value, newValue) => {
    // If values are not of the same type
    const type = Object.prototype.toString.call(value);
    if (type !== Object.prototype.toString.call(newValue)) return false;
    if (type !== '[object Array]') return false;

    if (value.length !== newValue.length) return false;

    for (let i = 0; i < value.length; i++) {
        // if the it's a two dimensional array
        const currentType = Object.prototype.toString.call(value[i]);
        if (currentType !== Object.prototype.toString.call(newValue[i])) return false;
        if (currentType === '[object Array]') {
            // if row lengths are not equal then arrays are not equal
            if (value[i].length !== newValue[i].length) return false;
            // compare each element in the row
            for (let j = 0; j < value[i].length; j++) {
                if (value[i][j] !== newValue[i][j]) {
                    return false;
                }
            }
        } else if (value[i] !== newValue[i]) {
            // if it's a one dimensional array element
            return false;
        }
    }

    return true;
};




/***/ }),

/***/ "./node_modules/funnel-graph-js/src/js/main.js":
/*!*****************************************************!*\
  !*** ./node_modules/funnel-graph-js/src/js/main.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _number__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./number */ "./node_modules/funnel-graph-js/src/js/number.js");
/* harmony import */ var _path__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./path */ "./node_modules/funnel-graph-js/src/js/path.js");
/* harmony import */ var _graph__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./graph */ "./node_modules/funnel-graph-js/src/js/graph.js");
/* harmony import */ var _random__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./random */ "./node_modules/funnel-graph-js/src/js/random.js");
/* eslint-disable no-trailing-spaces */
/* global HTMLElement */





class FunnelGraph {
    constructor(options) {
        this.containerSelector = options.container;
        this.gradientDirection = (options.gradientDirection && options.gradientDirection === 'vertical')
            ? 'vertical'
            : 'horizontal';
        this.direction = (options.direction && options.direction === 'vertical') ? 'vertical' : 'horizontal';
        this.labels = FunnelGraph.getLabels(options);
        this.subLabels = FunnelGraph.getSubLabels(options);
        this.values = FunnelGraph.getValues(options);
        this.percentages = this.createPercentages();
        this.colors = options.data.colors || Object(_graph__WEBPACK_IMPORTED_MODULE_2__["getDefaultColors"])(this.is2d() ? this.getSubDataSize() : 2);
        this.displayPercent = options.displayPercent || false;
        this.data = options.data;
        this.height = options.height;
        this.width = options.width;
        this.subLabelValue = options.subLabelValue || 'percent';
    }

    /**
    An example of a two-dimensional funnel graph
    #0..................
                       ...#1................
                                           ......
    #0********************#1**                    #2.........................#3 (A)
                              *******************
                                                  #2*************************#3 (B)
                                                  #2+++++++++++++++++++++++++#3 (C)
                              +++++++++++++++++++
    #0++++++++++++++++++++#1++                    #2-------------------------#3 (D)
                                           ------
                       ---#1----------------
    #0-----------------
     Main axis is the primary axis of the graph.
     In a horizontal graph it's the X axis, and Y is the cross axis.
     However we use the names "main" and "cross" axis,
     because in a vertical graph the primary axis is the Y axis
     and the cross axis is the X axis.
     First step of drawing the funnel graph is getting the coordinates of points,
     that are used when drawing the paths.
     There are 4 paths in the example above: A, B, C and D.
     Such funnel has 3 labels and 3 subLabels.
     This means that the main axis has 4 points (number of labels + 1)
     One the ASCII illustrated graph above, those points are illustrated with a # symbol.
    */
    getMainAxisPoints() {
        const size = this.getDataSize();
        const points = [];
        const fullDimension = this.isVertical() ? this.getHeight() : this.getWidth();
        for (let i = 0; i <= size; i++) {
            points.push(Object(_number__WEBPACK_IMPORTED_MODULE_0__["roundPoint"])(fullDimension * i / size));
        }
        return points;
    }

    getCrossAxisPoints() {
        const points = [];
        const fullDimension = this.getFullDimension();
        // get half of the graph container height or width, since funnel shape is symmetric
        // we use this when calculating the "A" shape
        const dimension = fullDimension / 2;
        if (this.is2d()) {
            const totalValues = this.getValues2d();
            const max = Math.max(...totalValues);

            // duplicate last value
            totalValues.push([...totalValues].pop());
            // get points for path "A"
            points.push(totalValues.map(value => Object(_number__WEBPACK_IMPORTED_MODULE_0__["roundPoint"])((max - value) / max * dimension)));
            // percentages with duplicated last value
            const percentagesFull = this.getPercentages2d();
            const pointsOfFirstPath = points[0];

            for (let i = 1; i < this.getSubDataSize(); i++) {
                const p = points[i - 1];
                const newPoints = [];

                for (let j = 0; j < this.getDataSize(); j++) {
                    newPoints.push(Object(_number__WEBPACK_IMPORTED_MODULE_0__["roundPoint"])(
                        // eslint-disable-next-line comma-dangle
                        p[j] + (fullDimension - pointsOfFirstPath[j] * 2) * (percentagesFull[j][i - 1] / 100)
                    ));
                }

                // duplicate the last value as points #2 and #3 have the same value on the cross axis
                newPoints.push([...newPoints].pop());
                points.push(newPoints);
            }

            // add points for path "D", that is simply the "inverted" path "A"
            points.push(pointsOfFirstPath.map(point => fullDimension - point));
        } else {
            // As you can see on the visualization above points #2 and #3 have the same cross axis coordinate
            // so we duplicate the last value
            const max = Math.max(...this.values);
            const values = [...this.values].concat([...this.values].pop());
            // if the graph is simple (not two-dimensional) then we have only paths "A" and "D"
            // which are symmetric. So we get the points for "A" and then get points for "D" by subtracting "A"
            // points from graph cross dimension length
            points.push(values.map(value => Object(_number__WEBPACK_IMPORTED_MODULE_0__["roundPoint"])((max - value) / max * dimension)));
            points.push(points[0].map(point => fullDimension - point));
        }

        return points;
    }

    getGraphType() {
        return this.values && this.values[0] instanceof Array ? '2d' : 'normal';
    }

    is2d() {
        return this.getGraphType() === '2d';
    }

    isVertical() {
        return this.direction === 'vertical';
    }

    getDataSize() {
        return this.values.length;
    }

    getSubDataSize() {
        return this.values[0].length;
    }

    getFullDimension() {
        return this.isVertical() ? this.getWidth() : this.getHeight();
    }

    static getSubLabels(options) {
        if (!options.data) {
            throw new Error('Data is missing');
        }

        const { data } = options;

        if (typeof data.subLabels === 'undefined') return [];

        return data.subLabels;
    }

    static getLabels(options) {
        if (!options.data) {
            throw new Error('Data is missing');
        }

        const { data } = options;

        if (typeof data.labels === 'undefined') return [];

        return data.labels;
    }

    addLabels() {
        const holder = document.createElement('div');
        holder.setAttribute('class', 'svg-funnel-js__labels');

        this.percentages.forEach((percentage, index) => {
            const labelElement = document.createElement('div');
            labelElement.setAttribute('class', `svg-funnel-js__label label-${index + 1}`);

            const title = document.createElement('div');
            title.setAttribute('class', 'label__title');
            title.textContent = this.labels[index] || '';

            const value = document.createElement('div');
            value.setAttribute('class', 'label__value');

            const valueNumber = this.is2d() ? this.getValues2d()[index] : this.values[index];
            value.textContent = Object(_number__WEBPACK_IMPORTED_MODULE_0__["formatNumber"])(valueNumber);

            const percentageValue = document.createElement('div');
            percentageValue.setAttribute('class', 'label__percentage');
            percentageValue.textContent = `${percentage.toString()}%`;

            labelElement.appendChild(value);
            labelElement.appendChild(title);
            if (this.displayPercent) {
                labelElement.appendChild(percentageValue);
            }

            if (this.is2d()) {
                const segmentPercentages = document.createElement('div');
                segmentPercentages.setAttribute('class', 'label__segment-percentages');
                let percentageList = '<ul class="segment-percentage__list">';

                const twoDimPercentages = this.getPercentages2d();

                this.subLabels.forEach((subLabel, j) => {
                    const subLabelDisplayValue = this.subLabelValue === 'percent'
                        ? `${twoDimPercentages[index][j]}%`
                        : Object(_number__WEBPACK_IMPORTED_MODULE_0__["formatNumber"])(this.values[index][j]);
                    percentageList += `<li>${this.subLabels[j]}:
    <span class="percentage__list-label">${subLabelDisplayValue}</span>
 </li>`;
                });
                percentageList += '</ul>';
                segmentPercentages.innerHTML = percentageList;
                labelElement.appendChild(segmentPercentages);
            }

            holder.appendChild(labelElement);
        });

        this.container.appendChild(holder);
    }

    addSubLabels() {
        if (this.subLabels) {
            const subLabelsHolder = document.createElement('div');
            subLabelsHolder.setAttribute('class', 'svg-funnel-js__subLabels');

            let subLabelsHTML = '';

            this.subLabels.forEach((subLabel, index) => {
                subLabelsHTML += `<div class="svg-funnel-js__subLabel svg-funnel-js__subLabel-${index + 1}">
    <div class="svg-funnel-js__subLabel--color"
        style="${Object(_graph__WEBPACK_IMPORTED_MODULE_2__["generateLegendBackground"])(this.colors[index], this.gradientDirection)}"></div>
    <div class="svg-funnel-js__subLabel--title">${subLabel}</div>
</div>`;
            });

            subLabelsHolder.innerHTML = subLabelsHTML;
            this.container.appendChild(subLabelsHolder);
        }
    }

    createContainer() {
        if (!this.containerSelector) {
            throw new Error('Container is missing');
        }

        if (typeof this.containerSelector === 'string') {
            this.container = document.querySelector(this.containerSelector);
            if (!this.container) {
                throw new Error(`Container cannot be found (selector: ${this.containerSelector}).`);
            }
        } else if (this.container instanceof HTMLElement) {
            this.container = this.containerSelector;
        } else {
            throw new Error('Container must either be a selector string or an HTMLElement.');
        }

        this.container.classList.add('svg-funnel-js');

        this.graphContainer = document.createElement('div');
        this.graphContainer.classList.add('svg-funnel-js__container');
        this.container.appendChild(this.graphContainer);

        if (this.direction === 'vertical') {
            this.container.classList.add('svg-funnel-js--vertical');
        }
    }

    setValues(v) {
        this.values = v;
        return this;
    }

    setDirection(d) {
        this.direction = d;
        return this;
    }

    setHeight(h) {
        this.height = h;
        return this;
    }

    setWidth(w) {
        this.width = w;
        return this;
    }

    static getValues(options) {
        if (!options.data) {
            return [];
        }

        const { data } = options;

        if (typeof data === 'object') {
            return data.values;
        }

        return [];
    }

    getValues2d() {
        const values = [];

        this.values.forEach((valueSet) => {
            values.push(valueSet.reduce((sum, value) => sum + value, 0));
        });

        return values;
    }

    getPercentages2d() {
        const percentages = [];

        this.values.forEach((valueSet) => {
            const total = valueSet.reduce((sum, value) => sum + value, 0);
            percentages.push(valueSet.map(value => (total === 0 ? 0 : Object(_number__WEBPACK_IMPORTED_MODULE_0__["roundPoint"])(value * 100 / total))));
        });

        return percentages;
    }

    createPercentages() {
        let values = [];

        if (this.is2d()) {
            values = this.getValues2d();
        } else {
            values = [...this.values];
        }

        const max = Math.max(...values);
        return values.map(value => (value === 0 ? 0 : Object(_number__WEBPACK_IMPORTED_MODULE_0__["roundPoint"])(value * 100 / max)));
    }

    applyGradient(svg, path, colors, index) {
        const defs = (svg.querySelector('defs') === null)
            ? Object(_graph__WEBPACK_IMPORTED_MODULE_2__["createSVGElement"])('defs', svg)
            : svg.querySelector('defs');

        const gradientName = Object(_random__WEBPACK_IMPORTED_MODULE_3__["default"])(`funnelGradient-${index}-`);

        const gradient = Object(_graph__WEBPACK_IMPORTED_MODULE_2__["createSVGElement"])('linearGradient', defs, {
            id: gradientName
        });

        if (this.gradientDirection === 'vertical') {
            Object(_graph__WEBPACK_IMPORTED_MODULE_2__["setAttrs"])(gradient, {
                x1: '0',
                x2: '0',
                y1: '0',
                y2: '1'
            });
        }

        const numberOfColors = colors.length;

        for (let i = 0; i < numberOfColors; i++) {
            Object(_graph__WEBPACK_IMPORTED_MODULE_2__["createSVGElement"])('stop', gradient, {
                'stop-color': colors[i],
                offset: `${Math.round(100 * i / (numberOfColors - 1))}%`
            });
        }

        Object(_graph__WEBPACK_IMPORTED_MODULE_2__["setAttrs"])(path, {
            fill: `url("#${gradientName}")`,
            stroke: `url("#${gradientName}")`
        });
    }

    makeSVG() {
        const svg = Object(_graph__WEBPACK_IMPORTED_MODULE_2__["createSVGElement"])('svg', this.graphContainer, {
            width: this.getWidth(),
            height: this.getHeight()
        });

        const valuesNum = this.getCrossAxisPoints().length - 1;
        for (let i = 0; i < valuesNum; i++) {
            const path = Object(_graph__WEBPACK_IMPORTED_MODULE_2__["createSVGElement"])('path', svg);

            const color = (this.is2d()) ? this.colors[i] : this.colors;
            const fillMode = (typeof color === 'string' || color.length === 1) ? 'solid' : 'gradient';

            if (fillMode === 'solid') {
                Object(_graph__WEBPACK_IMPORTED_MODULE_2__["setAttrs"])(path, {
                    fill: color,
                    stroke: color
                });
            } else if (fillMode === 'gradient') {
                this.applyGradient(svg, path, color, i + 1);
            }

            svg.appendChild(path);
        }

        this.graphContainer.appendChild(svg);
    }

    getSVG() {
        const svg = this.container.querySelector('svg');

        if (!svg) {
            throw new Error('No SVG found inside of the container');
        }

        return svg;
    }

    getWidth() {
        return this.width || this.graphContainer.clientWidth;
    }

    getHeight() {
        return this.height || this.graphContainer.clientHeight;
    }

    getPathDefinitions() {
        const valuesNum = this.getCrossAxisPoints().length - 1;
        const paths = [];
        for (let i = 0; i < valuesNum; i++) {
            if (this.isVertical()) {
                const X = this.getCrossAxisPoints()[i];
                const XNext = this.getCrossAxisPoints()[i + 1];
                const Y = this.getMainAxisPoints();

                const d = Object(_path__WEBPACK_IMPORTED_MODULE_1__["createVerticalPath"])(i, X, XNext, Y);
                paths.push(d);
            } else {
                const X = this.getMainAxisPoints();
                const Y = this.getCrossAxisPoints()[i];
                const YNext = this.getCrossAxisPoints()[i + 1];

                const d = Object(_path__WEBPACK_IMPORTED_MODULE_1__["createPath"])(i, X, Y, YNext);
                paths.push(d);
            }
        }

        return paths;
    }

    getPathMedian(i) {
        if (this.isVertical()) {
            const cross = this.getCrossAxisPoints()[i];
            const next = this.getCrossAxisPoints()[i + 1];
            const Y = this.getMainAxisPoints();
            const X = [];
            const XNext = [];

            cross.forEach((point, index) => {
                const m = (point + next[index]) / 2;
                X.push(m - 1);
                XNext.push(m + 1);
            });

            return Object(_path__WEBPACK_IMPORTED_MODULE_1__["createVerticalPath"])(i, X, XNext, Y);
        }

        const X = this.getMainAxisPoints();
        const cross = this.getCrossAxisPoints()[i];
        const next = this.getCrossAxisPoints()[i + 1];
        const Y = [];
        const YNext = [];

        cross.forEach((point, index) => {
            const m = (point + next[index]) / 2;
            Y.push(m - 1);
            YNext.push(m + 1);
        });

        return Object(_path__WEBPACK_IMPORTED_MODULE_1__["createPath"])(i, X, Y, YNext);
    }

    drawPaths() {
        const svg = this.getSVG();
        const paths = svg.querySelectorAll('path');
        const definitions = this.getPathDefinitions();

        definitions.forEach((definition, index) => {
            paths[index].setAttribute('d', definition);
        });
    }

    draw() {
        this.createContainer();
        this.makeSVG();

        this.addLabels();

        if (this.is2d()) {
            this.addSubLabels();
        }

        this.drawPaths();
    }

    /*
        Methods
     */

    makeVertical() {
        if (this.direction === 'vertical') return true;

        this.direction = 'vertical';
        this.container.classList.add('svg-funnel-js--vertical');

        const svg = this.getSVG();
        const height = this.getHeight();
        const width = this.getWidth();
        Object(_graph__WEBPACK_IMPORTED_MODULE_2__["setAttrs"])(svg, { height, width });

        this.drawPaths();

        return true;
    }

    makeHorizontal() {
        if (this.direction === 'horizontal') return true;

        this.direction = 'horizontal';
        this.container.classList.remove('svg-funnel-js--vertical');

        const svg = this.getSVG();
        const height = this.getHeight();
        const width = this.getWidth();
        Object(_graph__WEBPACK_IMPORTED_MODULE_2__["setAttrs"])(svg, { height, width });

        this.drawPaths();

        return true;
    }

    toggleDirection() {
        if (this.direction === 'horizontal') {
            this.makeVertical();
        } else {
            this.makeHorizontal();
        }
    }

    gradientMakeVertical() {
        if (this.gradientDirection === 'vertical') return true;

        this.gradientDirection = 'vertical';
        const gradients = this.graphContainer.querySelectorAll('linearGradient');

        for (let i = 0; i < gradients.length; i++) {
            Object(_graph__WEBPACK_IMPORTED_MODULE_2__["setAttrs"])(gradients[i], {
                x1: '0',
                x2: '0',
                y1: '0',
                y2: '1'
            });
        }

        return true;
    }

    gradientMakeHorizontal() {
        if (this.gradientDirection === 'horizontal') return true;

        this.gradientDirection = 'horizontal';
        const gradients = this.graphContainer.querySelectorAll('linearGradient');

        for (let i = 0; i < gradients.length; i++) {
            Object(_graph__WEBPACK_IMPORTED_MODULE_2__["removeAttrs"])(gradients[i], 'x1', 'x2', 'y1', 'y2');
        }

        return true;
    }

    gradientToggleDirection() {
        if (this.gradientDirection === 'horizontal') {
            this.gradientMakeVertical();
        } else {
            this.gradientMakeHorizontal();
        }
    }

    updateWidth(w) {
        this.width = w;
        const svg = this.getSVG();
        const width = this.getWidth();
        Object(_graph__WEBPACK_IMPORTED_MODULE_2__["setAttrs"])(svg, { width });

        this.drawPaths();

        return true;
    }

    updateHeight(h) {
        this.height = h;
        const svg = this.getSVG();
        const height = this.getHeight();
        Object(_graph__WEBPACK_IMPORTED_MODULE_2__["setAttrs"])(svg, { height });

        this.drawPaths();

        return true;
    }

    // @TODO: refactor data update
    updateData(d) {
        const labels = this.container.querySelector('.svg-funnel-js__labels');
        const subLabels = this.container.querySelector('.svg-funnel-js__subLabels');

        if (labels) labels.remove();
        if (subLabels) subLabels.remove();

        this.labels = [];
        this.colors = Object(_graph__WEBPACK_IMPORTED_MODULE_2__["getDefaultColors"])(this.is2d() ? this.getSubDataSize() : 2);
        this.values = [];
        this.percentages = [];

        if (typeof d.labels !== 'undefined') {
            this.labels = FunnelGraph.getLabels({ data: d });
        }
        if (typeof d.colors !== 'undefined') {
            this.colors = d.colors || Object(_graph__WEBPACK_IMPORTED_MODULE_2__["getDefaultColors"])(this.is2d() ? this.getSubDataSize() : 2);
        }
        if (typeof d.values !== 'undefined') {
            if (Object.prototype.toString.call(d.values[0]) !== Object.prototype.toString.call(this.values[0])) {
                this.container.querySelector('svg').remove();
                this.values = FunnelGraph.getValues({ data: d });
                this.makeSVG();
            } else {
                this.values = FunnelGraph.getValues({ data: d });
            }
            this.drawPaths();
        }
        this.percentages = this.createPercentages();

        this.addLabels();

        if (typeof d.subLabels !== 'undefined') {
            this.subLabels = FunnelGraph.getSubLabels({ data: d });
            this.addSubLabels();
        }
    }

    update(o) {
        if (typeof o.displayPercent !== 'undefined') {
            if (this.displayPercent !== o.displayPercent) {
                if (this.displayPercent === true) {
                    this.container.querySelectorAll('.label__percentage').forEach((label) => {
                        label.remove();
                    });
                } else {
                    this.container.querySelectorAll('.svg-funnel-js__label').forEach((label, index) => {
                        const percentage = this.percentages[index];
                        const percentageValue = document.createElement('div');
                        percentageValue.setAttribute('class', 'label__percentage');

                        if (percentage !== 100) {
                            percentageValue.textContent = `${percentage.toString()}%`;
                            label.appendChild(percentageValue);
                        }
                    });
                }
            }
        }
        if (typeof o.height !== 'undefined') {
            this.updateHeight(o.height);
        }
        if (typeof o.width !== 'undefined') {
            this.updateWidth(o.width);
        }
        if (typeof o.gradientDirection !== 'undefined') {
            if (o.gradientDirection === 'vertical') {
                this.gradientMakeVertical();
            } else if (o.gradientDirection === 'horizontal') {
                this.gradientMakeHorizontal();
            }
        }
        if (typeof o.direction !== 'undefined') {
            if (o.direction === 'vertical') {
                this.makeVertical();
            } else if (o.direction === 'horizontal') {
                this.makeHorizontal();
            }
        }
        if (typeof o.data !== 'undefined') {
            this.updateData(o.data);
        }
    }
}

/* harmony default export */ __webpack_exports__["default"] = (FunnelGraph);


/***/ }),

/***/ "./node_modules/funnel-graph-js/src/js/number.js":
/*!*******************************************************!*\
  !*** ./node_modules/funnel-graph-js/src/js/number.js ***!
  \*******************************************************/
/*! exports provided: roundPoint, formatNumber */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "roundPoint", function() { return roundPoint; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formatNumber", function() { return formatNumber; });
const roundPoint = number => Math.round(number * 10) / 10;
const formatNumber = number => Number(number).toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');




/***/ }),

/***/ "./node_modules/funnel-graph-js/src/js/path.js":
/*!*****************************************************!*\
  !*** ./node_modules/funnel-graph-js/src/js/path.js ***!
  \*****************************************************/
/*! exports provided: createCurves, createVerticalCurves, createPath, createVerticalPath */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createCurves", function() { return createCurves; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createVerticalCurves", function() { return createVerticalCurves; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createPath", function() { return createPath; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createVerticalPath", function() { return createVerticalPath; });
/* harmony import */ var _number__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./number */ "./node_modules/funnel-graph-js/src/js/number.js");


const createCurves = (x1, y1, x2, y2) => ` C${Object(_number__WEBPACK_IMPORTED_MODULE_0__["roundPoint"])((x2 + x1) / 2)},${y1} `
    + `${Object(_number__WEBPACK_IMPORTED_MODULE_0__["roundPoint"])((x2 + x1) / 2)},${y2} ${x2},${y2}`;

const createVerticalCurves = (x1, y1, x2, y2) => ` C${x1},${Object(_number__WEBPACK_IMPORTED_MODULE_0__["roundPoint"])((y2 + y1) / 2)} `
    + `${x2},${Object(_number__WEBPACK_IMPORTED_MODULE_0__["roundPoint"])((y2 + y1) / 2)} ${x2},${y2}`;

/*
    A funnel segment is draw in a clockwise direction.
    Path 1-2 is drawn,
    then connected with a straight vertical line 2-3,
    then a line 3-4 is draw (using YNext points going in backwards direction)
    then path is closed (connected with the starting point 1).

    1---------->2
    ^           |
    |           v
    4<----------3

    On the graph on line 20 it works like this:
    A#0, A#1, A#2, A#3, B#3, B#2, B#1, B#0, close the path.

    Points for path "B" are passed as the YNext param.
 */

const createPath = (index, X, Y, YNext) => {
    let str = `M${X[0]},${Y[0]}`;

    for (let i = 0; i < X.length - 1; i++) {
        str += createCurves(X[i], Y[i], X[i + 1], Y[i + 1]);
    }

    str += ` L${[...X].pop()},${[...YNext].pop()}`;

    for (let i = X.length - 1; i > 0; i--) {
        str += createCurves(X[i], YNext[i], X[i - 1], YNext[i - 1]);
    }

    str += ' Z';

    return str;
};

/*
    In a vertical path we go counter-clockwise

    1<----------4
    |           ^
    v           |
    2---------->3
 */

const createVerticalPath = (index, X, XNext, Y) => {
    let str = `M${X[0]},${Y[0]}`;

    for (let i = 0; i < X.length - 1; i++) {
        str += createVerticalCurves(X[i], Y[i], X[i + 1], Y[i + 1]);
    }

    str += ` L${[...XNext].pop()},${[...Y].pop()}`;

    for (let i = X.length - 1; i > 0; i--) {
        str += createVerticalCurves(XNext[i], Y[i], XNext[i - 1], Y[i - 1]);
    }

    str += ' Z';

    return str;
};




/***/ }),

/***/ "./node_modules/funnel-graph-js/src/js/random.js":
/*!*******************************************************!*\
  !*** ./node_modules/funnel-graph-js/src/js/random.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const generateRandomIdString = prefix => Math.random().toString(36).replace('0.', prefix || '');

/* harmony default export */ __webpack_exports__["default"] = (generateRandomIdString);


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZnVubmVsLWdyYXBoLWpzL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9mdW5uZWwtZ3JhcGgtanMvc3JjL2pzL2dyYXBoLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9mdW5uZWwtZ3JhcGgtanMvc3JjL2pzL21haW4uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Z1bm5lbC1ncmFwaC1qcy9zcmMvanMvbnVtYmVyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9mdW5uZWwtZ3JhcGgtanMvc3JjL2pzL3BhdGguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Z1bm5lbC1ncmFwaC1qcy9zcmMvanMvcmFuZG9tLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBLGlCQUFpQixtQkFBTyxDQUFDLG9FQUFlOzs7Ozs7Ozs7Ozs7O0FDQXhDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esb0NBQW9DLE1BQU07QUFDMUM7O0FBRUE7QUFDQSxvQ0FBb0MsU0FBUztBQUM3Qzs7QUFFQSxnREFBZ0Q7QUFDaEQ7QUFDQSxhQUFhLEVBQUUsaUJBQWlCO0FBQ2hDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLG1CQUFtQixZQUFZO0FBQy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxtQkFB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a0JBQWtCO0FBQ3JDO0FBQ0E7O0FBRUEsZ0JBQWdCLGFBQWEsR0FBRyxpQkFBaUI7O0FBRWpELDhCQUE4QixPQUFPO0FBQ3JDO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxrQkFBa0IsS0FBSyxHQUFHLEtBQUs7O0FBRS9CLG1CQUFtQixrQkFBa0I7QUFDckM7QUFDQTs7QUFFQSxnQkFBZ0IsaUJBQWlCLEdBQUcsYUFBYTs7QUFFakQsOEJBQThCLE9BQU87QUFDckM7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUlFOzs7Ozs7Ozs7Ozs7O0FDekVGO0FBQUE7O0FBRWUscUZBQXNCLEVBQUMiLCJmaWxlIjoidmVuZG9yc35kYXNoYm9hcmR+ZnVubmVsLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL3NyYy9qcy9tYWluJykuZGVmYXVsdDtcbiIsImNvbnN0IHNldEF0dHJzID0gKGVsZW1lbnQsIGF0dHJpYnV0ZXMpID0+IHtcbiAgICBpZiAodHlwZW9mIGF0dHJpYnV0ZXMgPT09ICdvYmplY3QnKSB7XG4gICAgICAgIE9iamVjdC5rZXlzKGF0dHJpYnV0ZXMpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoa2V5LCBhdHRyaWJ1dGVzW2tleV0pO1xuICAgICAgICB9KTtcbiAgICB9XG59O1xuXG5jb25zdCByZW1vdmVBdHRycyA9IChlbGVtZW50LCAuLi5hdHRyaWJ1dGVzKSA9PiB7XG4gICAgYXR0cmlidXRlcy5mb3JFYWNoKChhdHRyaWJ1dGUpID0+IHtcbiAgICAgICAgZWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoYXR0cmlidXRlKTtcbiAgICB9KTtcbn07XG5cbmNvbnN0IGNyZWF0ZVNWR0VsZW1lbnQgPSAoZWxlbWVudCwgY29udGFpbmVyLCBhdHRyaWJ1dGVzKSA9PiB7XG4gICAgY29uc3QgZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoJ2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJywgZWxlbWVudCk7XG5cbiAgICBpZiAodHlwZW9mIGF0dHJpYnV0ZXMgPT09ICdvYmplY3QnKSB7XG4gICAgICAgIHNldEF0dHJzKGVsLCBhdHRyaWJ1dGVzKTtcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIGNvbnRhaW5lciAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGVsKTtcbiAgICB9XG5cbiAgICByZXR1cm4gZWw7XG59O1xuXG5jb25zdCBnZW5lcmF0ZUxlZ2VuZEJhY2tncm91bmQgPSAoY29sb3IsIGRpcmVjdGlvbiA9ICdob3Jpem9udGFsJykgPT4ge1xuICAgIGlmICh0eXBlb2YgY29sb3IgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIHJldHVybiBgYmFja2dyb3VuZC1jb2xvcjogJHtjb2xvcn1gO1xuICAgIH1cblxuICAgIGlmIChjb2xvci5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgcmV0dXJuIGBiYWNrZ3JvdW5kLWNvbG9yOiAke2NvbG9yWzBdfWA7XG4gICAgfVxuXG4gICAgcmV0dXJuIGBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoJHtkaXJlY3Rpb24gPT09ICdob3Jpem9udGFsJ1xuICAgICAgICA/ICd0byByaWdodCwgJ1xuICAgICAgICA6ICcnfSR7Y29sb3Iuam9pbignLCAnKX0pYDtcbn07XG5cbmNvbnN0IGRlZmF1bHRDb2xvcnMgPSBbJyNGRjQ1ODknLCAnI0ZGNTA1MCcsXG4gICAgJyMwNURGOUQnLCAnIzRGRjJGRCcsXG4gICAgJyMyRDlDREInLCAnI0EwQkJGRicsXG4gICAgJyNGRkQ3NkYnLCAnI0YyQzk0QycsXG4gICAgJyNGRjlBOUEnLCAnI0ZGQjE3OCddO1xuXG5jb25zdCBnZXREZWZhdWx0Q29sb3JzID0gKG51bWJlcikgPT4ge1xuICAgIGNvbnN0IGNvbG9ycyA9IFsuLi5kZWZhdWx0Q29sb3JzXTtcbiAgICBjb25zdCBjb2xvclNldCA9IFtdO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBudW1iZXI7IGkrKykge1xuICAgICAgICAvLyBnZXQgYSByYW5kb20gY29sb3JcbiAgICAgICAgY29uc3QgaW5kZXggPSBNYXRoLmFicyhNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkgKiAoY29sb3JzLmxlbmd0aCAtIDEpKSk7XG4gICAgICAgIC8vIHB1c2ggaXQgdG8gdGhlIGxpc3RcbiAgICAgICAgY29sb3JTZXQucHVzaChjb2xvcnNbaW5kZXhdKTtcbiAgICAgICAgLy8gYW5kIHJlbW92ZSBpdCwgc28gdGhhdCBpdCBpcyBub3QgY2hvc2VuIGFnYWluXG4gICAgICAgIGNvbG9ycy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgIH1cbiAgICByZXR1cm4gY29sb3JTZXQ7XG59O1xuXG4vKlxuICAgIFVzZWQgaW4gY29tcGFyaW5nIGV4aXN0aW5nIHZhbHVlcyB0byB2YWx1ZSBwcm92aWRlZCBvbiB1cGRhdGVcbiAgICBJdCBpcyBsaW1pdGVkIHRvIGNvbXBhcmluZyBhcnJheXMgb24gcHVycG9zZVxuICAgIE5hbWUgaXMgc2xpZ2h0bHkgdW51c3VhbCwgaW4gb3JkZXIgbm90IHRvIGJlIGNvbmZ1c2VkIHdpdGggTG9kYXNoIG1ldGhvZFxuICovXG5jb25zdCBhcmVFcXVhbCA9ICh2YWx1ZSwgbmV3VmFsdWUpID0+IHtcbiAgICAvLyBJZiB2YWx1ZXMgYXJlIG5vdCBvZiB0aGUgc2FtZSB0eXBlXG4gICAgY29uc3QgdHlwZSA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh2YWx1ZSk7XG4gICAgaWYgKHR5cGUgIT09IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChuZXdWYWx1ZSkpIHJldHVybiBmYWxzZTtcbiAgICBpZiAodHlwZSAhPT0gJ1tvYmplY3QgQXJyYXldJykgcmV0dXJuIGZhbHNlO1xuXG4gICAgaWYgKHZhbHVlLmxlbmd0aCAhPT0gbmV3VmFsdWUubGVuZ3RoKSByZXR1cm4gZmFsc2U7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHZhbHVlLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIC8vIGlmIHRoZSBpdCdzIGEgdHdvIGRpbWVuc2lvbmFsIGFycmF5XG4gICAgICAgIGNvbnN0IGN1cnJlbnRUeXBlID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHZhbHVlW2ldKTtcbiAgICAgICAgaWYgKGN1cnJlbnRUeXBlICE9PSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobmV3VmFsdWVbaV0pKSByZXR1cm4gZmFsc2U7XG4gICAgICAgIGlmIChjdXJyZW50VHlwZSA9PT0gJ1tvYmplY3QgQXJyYXldJykge1xuICAgICAgICAgICAgLy8gaWYgcm93IGxlbmd0aHMgYXJlIG5vdCBlcXVhbCB0aGVuIGFycmF5cyBhcmUgbm90IGVxdWFsXG4gICAgICAgICAgICBpZiAodmFsdWVbaV0ubGVuZ3RoICE9PSBuZXdWYWx1ZVtpXS5sZW5ndGgpIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIC8vIGNvbXBhcmUgZWFjaCBlbGVtZW50IGluIHRoZSByb3dcbiAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgdmFsdWVbaV0ubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgICAgICBpZiAodmFsdWVbaV1bal0gIT09IG5ld1ZhbHVlW2ldW2pdKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAodmFsdWVbaV0gIT09IG5ld1ZhbHVlW2ldKSB7XG4gICAgICAgICAgICAvLyBpZiBpdCdzIGEgb25lIGRpbWVuc2lvbmFsIGFycmF5IGVsZW1lbnRcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0cnVlO1xufTtcblxuZXhwb3J0IHtcbiAgICBnZW5lcmF0ZUxlZ2VuZEJhY2tncm91bmQsIGdldERlZmF1bHRDb2xvcnMsIGFyZUVxdWFsLCBjcmVhdGVTVkdFbGVtZW50LCBzZXRBdHRycywgcmVtb3ZlQXR0cnMsIGRlZmF1bHRDb2xvcnNcbn07XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBuby10cmFpbGluZy1zcGFjZXMgKi9cbi8qIGdsb2JhbCBIVE1MRWxlbWVudCAqL1xuaW1wb3J0IHsgcm91bmRQb2ludCwgZm9ybWF0TnVtYmVyIH0gZnJvbSAnLi9udW1iZXInO1xuaW1wb3J0IHsgY3JlYXRlUGF0aCwgY3JlYXRlVmVydGljYWxQYXRoIH0gZnJvbSAnLi9wYXRoJztcbmltcG9ydCB7XG4gICAgZ2VuZXJhdGVMZWdlbmRCYWNrZ3JvdW5kLCBnZXREZWZhdWx0Q29sb3JzLCBjcmVhdGVTVkdFbGVtZW50LCBzZXRBdHRycywgcmVtb3ZlQXR0cnNcbn0gZnJvbSAnLi9ncmFwaCc7XG5pbXBvcnQgZ2VuZXJhdGVSYW5kb21JZFN0cmluZyBmcm9tICcuL3JhbmRvbSc7XG5cbmNsYXNzIEZ1bm5lbEdyYXBoIHtcbiAgICBjb25zdHJ1Y3RvcihvcHRpb25zKSB7XG4gICAgICAgIHRoaXMuY29udGFpbmVyU2VsZWN0b3IgPSBvcHRpb25zLmNvbnRhaW5lcjtcbiAgICAgICAgdGhpcy5ncmFkaWVudERpcmVjdGlvbiA9IChvcHRpb25zLmdyYWRpZW50RGlyZWN0aW9uICYmIG9wdGlvbnMuZ3JhZGllbnREaXJlY3Rpb24gPT09ICd2ZXJ0aWNhbCcpXG4gICAgICAgICAgICA/ICd2ZXJ0aWNhbCdcbiAgICAgICAgICAgIDogJ2hvcml6b250YWwnO1xuICAgICAgICB0aGlzLmRpcmVjdGlvbiA9IChvcHRpb25zLmRpcmVjdGlvbiAmJiBvcHRpb25zLmRpcmVjdGlvbiA9PT0gJ3ZlcnRpY2FsJykgPyAndmVydGljYWwnIDogJ2hvcml6b250YWwnO1xuICAgICAgICB0aGlzLmxhYmVscyA9IEZ1bm5lbEdyYXBoLmdldExhYmVscyhvcHRpb25zKTtcbiAgICAgICAgdGhpcy5zdWJMYWJlbHMgPSBGdW5uZWxHcmFwaC5nZXRTdWJMYWJlbHMob3B0aW9ucyk7XG4gICAgICAgIHRoaXMudmFsdWVzID0gRnVubmVsR3JhcGguZ2V0VmFsdWVzKG9wdGlvbnMpO1xuICAgICAgICB0aGlzLnBlcmNlbnRhZ2VzID0gdGhpcy5jcmVhdGVQZXJjZW50YWdlcygpO1xuICAgICAgICB0aGlzLmNvbG9ycyA9IG9wdGlvbnMuZGF0YS5jb2xvcnMgfHwgZ2V0RGVmYXVsdENvbG9ycyh0aGlzLmlzMmQoKSA/IHRoaXMuZ2V0U3ViRGF0YVNpemUoKSA6IDIpO1xuICAgICAgICB0aGlzLmRpc3BsYXlQZXJjZW50ID0gb3B0aW9ucy5kaXNwbGF5UGVyY2VudCB8fCBmYWxzZTtcbiAgICAgICAgdGhpcy5kYXRhID0gb3B0aW9ucy5kYXRhO1xuICAgICAgICB0aGlzLmhlaWdodCA9IG9wdGlvbnMuaGVpZ2h0O1xuICAgICAgICB0aGlzLndpZHRoID0gb3B0aW9ucy53aWR0aDtcbiAgICAgICAgdGhpcy5zdWJMYWJlbFZhbHVlID0gb3B0aW9ucy5zdWJMYWJlbFZhbHVlIHx8ICdwZXJjZW50JztcbiAgICB9XG5cbiAgICAvKipcbiAgICBBbiBleGFtcGxlIG9mIGEgdHdvLWRpbWVuc2lvbmFsIGZ1bm5lbCBncmFwaFxuICAgICMwLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICAgICAgICAgICAgICAgICAgIC4uLiMxLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC4uLi4uLlxuICAgICMwKioqKioqKioqKioqKioqKioqKiojMSoqICAgICAgICAgICAgICAgICAgICAjMi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4jMyAoQSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICoqKioqKioqKioqKioqKioqKipcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIzIqKioqKioqKioqKioqKioqKioqKioqKioqIzMgKEIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICMyKysrKysrKysrKysrKysrKysrKysrKysrKyMzIChDKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKysrKysrKysrKysrKysrKysrK1xuICAgICMwKysrKysrKysrKysrKysrKysrKysjMSsrICAgICAgICAgICAgICAgICAgICAjMi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0jMyAoRClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAtLS0tLS1cbiAgICAgICAgICAgICAgICAgICAgICAgLS0tIzEtLS0tLS0tLS0tLS0tLS0tXG4gICAgIzAtLS0tLS0tLS0tLS0tLS0tLVxuICAgICBNYWluIGF4aXMgaXMgdGhlIHByaW1hcnkgYXhpcyBvZiB0aGUgZ3JhcGguXG4gICAgIEluIGEgaG9yaXpvbnRhbCBncmFwaCBpdCdzIHRoZSBYIGF4aXMsIGFuZCBZIGlzIHRoZSBjcm9zcyBheGlzLlxuICAgICBIb3dldmVyIHdlIHVzZSB0aGUgbmFtZXMgXCJtYWluXCIgYW5kIFwiY3Jvc3NcIiBheGlzLFxuICAgICBiZWNhdXNlIGluIGEgdmVydGljYWwgZ3JhcGggdGhlIHByaW1hcnkgYXhpcyBpcyB0aGUgWSBheGlzXG4gICAgIGFuZCB0aGUgY3Jvc3MgYXhpcyBpcyB0aGUgWCBheGlzLlxuICAgICBGaXJzdCBzdGVwIG9mIGRyYXdpbmcgdGhlIGZ1bm5lbCBncmFwaCBpcyBnZXR0aW5nIHRoZSBjb29yZGluYXRlcyBvZiBwb2ludHMsXG4gICAgIHRoYXQgYXJlIHVzZWQgd2hlbiBkcmF3aW5nIHRoZSBwYXRocy5cbiAgICAgVGhlcmUgYXJlIDQgcGF0aHMgaW4gdGhlIGV4YW1wbGUgYWJvdmU6IEEsIEIsIEMgYW5kIEQuXG4gICAgIFN1Y2ggZnVubmVsIGhhcyAzIGxhYmVscyBhbmQgMyBzdWJMYWJlbHMuXG4gICAgIFRoaXMgbWVhbnMgdGhhdCB0aGUgbWFpbiBheGlzIGhhcyA0IHBvaW50cyAobnVtYmVyIG9mIGxhYmVscyArIDEpXG4gICAgIE9uZSB0aGUgQVNDSUkgaWxsdXN0cmF0ZWQgZ3JhcGggYWJvdmUsIHRob3NlIHBvaW50cyBhcmUgaWxsdXN0cmF0ZWQgd2l0aCBhICMgc3ltYm9sLlxuICAgICovXG4gICAgZ2V0TWFpbkF4aXNQb2ludHMoKSB7XG4gICAgICAgIGNvbnN0IHNpemUgPSB0aGlzLmdldERhdGFTaXplKCk7XG4gICAgICAgIGNvbnN0IHBvaW50cyA9IFtdO1xuICAgICAgICBjb25zdCBmdWxsRGltZW5zaW9uID0gdGhpcy5pc1ZlcnRpY2FsKCkgPyB0aGlzLmdldEhlaWdodCgpIDogdGhpcy5nZXRXaWR0aCgpO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8PSBzaXplOyBpKyspIHtcbiAgICAgICAgICAgIHBvaW50cy5wdXNoKHJvdW5kUG9pbnQoZnVsbERpbWVuc2lvbiAqIGkgLyBzaXplKSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHBvaW50cztcbiAgICB9XG5cbiAgICBnZXRDcm9zc0F4aXNQb2ludHMoKSB7XG4gICAgICAgIGNvbnN0IHBvaW50cyA9IFtdO1xuICAgICAgICBjb25zdCBmdWxsRGltZW5zaW9uID0gdGhpcy5nZXRGdWxsRGltZW5zaW9uKCk7XG4gICAgICAgIC8vIGdldCBoYWxmIG9mIHRoZSBncmFwaCBjb250YWluZXIgaGVpZ2h0IG9yIHdpZHRoLCBzaW5jZSBmdW5uZWwgc2hhcGUgaXMgc3ltbWV0cmljXG4gICAgICAgIC8vIHdlIHVzZSB0aGlzIHdoZW4gY2FsY3VsYXRpbmcgdGhlIFwiQVwiIHNoYXBlXG4gICAgICAgIGNvbnN0IGRpbWVuc2lvbiA9IGZ1bGxEaW1lbnNpb24gLyAyO1xuICAgICAgICBpZiAodGhpcy5pczJkKCkpIHtcbiAgICAgICAgICAgIGNvbnN0IHRvdGFsVmFsdWVzID0gdGhpcy5nZXRWYWx1ZXMyZCgpO1xuICAgICAgICAgICAgY29uc3QgbWF4ID0gTWF0aC5tYXgoLi4udG90YWxWYWx1ZXMpO1xuXG4gICAgICAgICAgICAvLyBkdXBsaWNhdGUgbGFzdCB2YWx1ZVxuICAgICAgICAgICAgdG90YWxWYWx1ZXMucHVzaChbLi4udG90YWxWYWx1ZXNdLnBvcCgpKTtcbiAgICAgICAgICAgIC8vIGdldCBwb2ludHMgZm9yIHBhdGggXCJBXCJcbiAgICAgICAgICAgIHBvaW50cy5wdXNoKHRvdGFsVmFsdWVzLm1hcCh2YWx1ZSA9PiByb3VuZFBvaW50KChtYXggLSB2YWx1ZSkgLyBtYXggKiBkaW1lbnNpb24pKSk7XG4gICAgICAgICAgICAvLyBwZXJjZW50YWdlcyB3aXRoIGR1cGxpY2F0ZWQgbGFzdCB2YWx1ZVxuICAgICAgICAgICAgY29uc3QgcGVyY2VudGFnZXNGdWxsID0gdGhpcy5nZXRQZXJjZW50YWdlczJkKCk7XG4gICAgICAgICAgICBjb25zdCBwb2ludHNPZkZpcnN0UGF0aCA9IHBvaW50c1swXTtcblxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPCB0aGlzLmdldFN1YkRhdGFTaXplKCk7IGkrKykge1xuICAgICAgICAgICAgICAgIGNvbnN0IHAgPSBwb2ludHNbaSAtIDFdO1xuICAgICAgICAgICAgICAgIGNvbnN0IG5ld1BvaW50cyA9IFtdO1xuXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCB0aGlzLmdldERhdGFTaXplKCk7IGorKykge1xuICAgICAgICAgICAgICAgICAgICBuZXdQb2ludHMucHVzaChyb3VuZFBvaW50KFxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGNvbW1hLWRhbmdsZVxuICAgICAgICAgICAgICAgICAgICAgICAgcFtqXSArIChmdWxsRGltZW5zaW9uIC0gcG9pbnRzT2ZGaXJzdFBhdGhbal0gKiAyKSAqIChwZXJjZW50YWdlc0Z1bGxbal1baSAtIDFdIC8gMTAwKVxuICAgICAgICAgICAgICAgICAgICApKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAvLyBkdXBsaWNhdGUgdGhlIGxhc3QgdmFsdWUgYXMgcG9pbnRzICMyIGFuZCAjMyBoYXZlIHRoZSBzYW1lIHZhbHVlIG9uIHRoZSBjcm9zcyBheGlzXG4gICAgICAgICAgICAgICAgbmV3UG9pbnRzLnB1c2goWy4uLm5ld1BvaW50c10ucG9wKCkpO1xuICAgICAgICAgICAgICAgIHBvaW50cy5wdXNoKG5ld1BvaW50cyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIGFkZCBwb2ludHMgZm9yIHBhdGggXCJEXCIsIHRoYXQgaXMgc2ltcGx5IHRoZSBcImludmVydGVkXCIgcGF0aCBcIkFcIlxuICAgICAgICAgICAgcG9pbnRzLnB1c2gocG9pbnRzT2ZGaXJzdFBhdGgubWFwKHBvaW50ID0+IGZ1bGxEaW1lbnNpb24gLSBwb2ludCkpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gQXMgeW91IGNhbiBzZWUgb24gdGhlIHZpc3VhbGl6YXRpb24gYWJvdmUgcG9pbnRzICMyIGFuZCAjMyBoYXZlIHRoZSBzYW1lIGNyb3NzIGF4aXMgY29vcmRpbmF0ZVxuICAgICAgICAgICAgLy8gc28gd2UgZHVwbGljYXRlIHRoZSBsYXN0IHZhbHVlXG4gICAgICAgICAgICBjb25zdCBtYXggPSBNYXRoLm1heCguLi50aGlzLnZhbHVlcyk7XG4gICAgICAgICAgICBjb25zdCB2YWx1ZXMgPSBbLi4udGhpcy52YWx1ZXNdLmNvbmNhdChbLi4udGhpcy52YWx1ZXNdLnBvcCgpKTtcbiAgICAgICAgICAgIC8vIGlmIHRoZSBncmFwaCBpcyBzaW1wbGUgKG5vdCB0d28tZGltZW5zaW9uYWwpIHRoZW4gd2UgaGF2ZSBvbmx5IHBhdGhzIFwiQVwiIGFuZCBcIkRcIlxuICAgICAgICAgICAgLy8gd2hpY2ggYXJlIHN5bW1ldHJpYy4gU28gd2UgZ2V0IHRoZSBwb2ludHMgZm9yIFwiQVwiIGFuZCB0aGVuIGdldCBwb2ludHMgZm9yIFwiRFwiIGJ5IHN1YnRyYWN0aW5nIFwiQVwiXG4gICAgICAgICAgICAvLyBwb2ludHMgZnJvbSBncmFwaCBjcm9zcyBkaW1lbnNpb24gbGVuZ3RoXG4gICAgICAgICAgICBwb2ludHMucHVzaCh2YWx1ZXMubWFwKHZhbHVlID0+IHJvdW5kUG9pbnQoKG1heCAtIHZhbHVlKSAvIG1heCAqIGRpbWVuc2lvbikpKTtcbiAgICAgICAgICAgIHBvaW50cy5wdXNoKHBvaW50c1swXS5tYXAocG9pbnQgPT4gZnVsbERpbWVuc2lvbiAtIHBvaW50KSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcG9pbnRzO1xuICAgIH1cblxuICAgIGdldEdyYXBoVHlwZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudmFsdWVzICYmIHRoaXMudmFsdWVzWzBdIGluc3RhbmNlb2YgQXJyYXkgPyAnMmQnIDogJ25vcm1hbCc7XG4gICAgfVxuXG4gICAgaXMyZCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0R3JhcGhUeXBlKCkgPT09ICcyZCc7XG4gICAgfVxuXG4gICAgaXNWZXJ0aWNhbCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZGlyZWN0aW9uID09PSAndmVydGljYWwnO1xuICAgIH1cblxuICAgIGdldERhdGFTaXplKCkge1xuICAgICAgICByZXR1cm4gdGhpcy52YWx1ZXMubGVuZ3RoO1xuICAgIH1cblxuICAgIGdldFN1YkRhdGFTaXplKCkge1xuICAgICAgICByZXR1cm4gdGhpcy52YWx1ZXNbMF0ubGVuZ3RoO1xuICAgIH1cblxuICAgIGdldEZ1bGxEaW1lbnNpb24oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmlzVmVydGljYWwoKSA/IHRoaXMuZ2V0V2lkdGgoKSA6IHRoaXMuZ2V0SGVpZ2h0KCk7XG4gICAgfVxuXG4gICAgc3RhdGljIGdldFN1YkxhYmVscyhvcHRpb25zKSB7XG4gICAgICAgIGlmICghb3B0aW9ucy5kYXRhKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0RhdGEgaXMgbWlzc2luZycpO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgeyBkYXRhIH0gPSBvcHRpb25zO1xuXG4gICAgICAgIGlmICh0eXBlb2YgZGF0YS5zdWJMYWJlbHMgPT09ICd1bmRlZmluZWQnKSByZXR1cm4gW107XG5cbiAgICAgICAgcmV0dXJuIGRhdGEuc3ViTGFiZWxzO1xuICAgIH1cblxuICAgIHN0YXRpYyBnZXRMYWJlbHMob3B0aW9ucykge1xuICAgICAgICBpZiAoIW9wdGlvbnMuZGF0YSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdEYXRhIGlzIG1pc3NpbmcnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHsgZGF0YSB9ID0gb3B0aW9ucztcblxuICAgICAgICBpZiAodHlwZW9mIGRhdGEubGFiZWxzID09PSAndW5kZWZpbmVkJykgcmV0dXJuIFtdO1xuXG4gICAgICAgIHJldHVybiBkYXRhLmxhYmVscztcbiAgICB9XG5cbiAgICBhZGRMYWJlbHMoKSB7XG4gICAgICAgIGNvbnN0IGhvbGRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBob2xkZXIuc2V0QXR0cmlidXRlKCdjbGFzcycsICdzdmctZnVubmVsLWpzX19sYWJlbHMnKTtcblxuICAgICAgICB0aGlzLnBlcmNlbnRhZ2VzLmZvckVhY2goKHBlcmNlbnRhZ2UsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBsYWJlbEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIGxhYmVsRWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgYHN2Zy1mdW5uZWwtanNfX2xhYmVsIGxhYmVsLSR7aW5kZXggKyAxfWApO1xuXG4gICAgICAgICAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgdGl0bGUuc2V0QXR0cmlidXRlKCdjbGFzcycsICdsYWJlbF9fdGl0bGUnKTtcbiAgICAgICAgICAgIHRpdGxlLnRleHRDb250ZW50ID0gdGhpcy5sYWJlbHNbaW5kZXhdIHx8ICcnO1xuXG4gICAgICAgICAgICBjb25zdCB2YWx1ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgdmFsdWUuc2V0QXR0cmlidXRlKCdjbGFzcycsICdsYWJlbF9fdmFsdWUnKTtcblxuICAgICAgICAgICAgY29uc3QgdmFsdWVOdW1iZXIgPSB0aGlzLmlzMmQoKSA/IHRoaXMuZ2V0VmFsdWVzMmQoKVtpbmRleF0gOiB0aGlzLnZhbHVlc1tpbmRleF07XG4gICAgICAgICAgICB2YWx1ZS50ZXh0Q29udGVudCA9IGZvcm1hdE51bWJlcih2YWx1ZU51bWJlcik7XG5cbiAgICAgICAgICAgIGNvbnN0IHBlcmNlbnRhZ2VWYWx1ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgcGVyY2VudGFnZVZhbHVlLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnbGFiZWxfX3BlcmNlbnRhZ2UnKTtcbiAgICAgICAgICAgIHBlcmNlbnRhZ2VWYWx1ZS50ZXh0Q29udGVudCA9IGAke3BlcmNlbnRhZ2UudG9TdHJpbmcoKX0lYDtcblxuICAgICAgICAgICAgbGFiZWxFbGVtZW50LmFwcGVuZENoaWxkKHZhbHVlKTtcbiAgICAgICAgICAgIGxhYmVsRWxlbWVudC5hcHBlbmRDaGlsZCh0aXRsZSk7XG4gICAgICAgICAgICBpZiAodGhpcy5kaXNwbGF5UGVyY2VudCkge1xuICAgICAgICAgICAgICAgIGxhYmVsRWxlbWVudC5hcHBlbmRDaGlsZChwZXJjZW50YWdlVmFsdWUpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAodGhpcy5pczJkKCkpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBzZWdtZW50UGVyY2VudGFnZXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgICAgICBzZWdtZW50UGVyY2VudGFnZXMuc2V0QXR0cmlidXRlKCdjbGFzcycsICdsYWJlbF9fc2VnbWVudC1wZXJjZW50YWdlcycpO1xuICAgICAgICAgICAgICAgIGxldCBwZXJjZW50YWdlTGlzdCA9ICc8dWwgY2xhc3M9XCJzZWdtZW50LXBlcmNlbnRhZ2VfX2xpc3RcIj4nO1xuXG4gICAgICAgICAgICAgICAgY29uc3QgdHdvRGltUGVyY2VudGFnZXMgPSB0aGlzLmdldFBlcmNlbnRhZ2VzMmQoKTtcblxuICAgICAgICAgICAgICAgIHRoaXMuc3ViTGFiZWxzLmZvckVhY2goKHN1YkxhYmVsLCBqKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHN1YkxhYmVsRGlzcGxheVZhbHVlID0gdGhpcy5zdWJMYWJlbFZhbHVlID09PSAncGVyY2VudCdcbiAgICAgICAgICAgICAgICAgICAgICAgID8gYCR7dHdvRGltUGVyY2VudGFnZXNbaW5kZXhdW2pdfSVgXG4gICAgICAgICAgICAgICAgICAgICAgICA6IGZvcm1hdE51bWJlcih0aGlzLnZhbHVlc1tpbmRleF1bal0pO1xuICAgICAgICAgICAgICAgICAgICBwZXJjZW50YWdlTGlzdCArPSBgPGxpPiR7dGhpcy5zdWJMYWJlbHNbal19OlxuICAgIDxzcGFuIGNsYXNzPVwicGVyY2VudGFnZV9fbGlzdC1sYWJlbFwiPiR7c3ViTGFiZWxEaXNwbGF5VmFsdWV9PC9zcGFuPlxuIDwvbGk+YDtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBwZXJjZW50YWdlTGlzdCArPSAnPC91bD4nO1xuICAgICAgICAgICAgICAgIHNlZ21lbnRQZXJjZW50YWdlcy5pbm5lckhUTUwgPSBwZXJjZW50YWdlTGlzdDtcbiAgICAgICAgICAgICAgICBsYWJlbEVsZW1lbnQuYXBwZW5kQ2hpbGQoc2VnbWVudFBlcmNlbnRhZ2VzKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaG9sZGVyLmFwcGVuZENoaWxkKGxhYmVsRWxlbWVudCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKGhvbGRlcik7XG4gICAgfVxuXG4gICAgYWRkU3ViTGFiZWxzKCkge1xuICAgICAgICBpZiAodGhpcy5zdWJMYWJlbHMpIHtcbiAgICAgICAgICAgIGNvbnN0IHN1YkxhYmVsc0hvbGRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgc3ViTGFiZWxzSG9sZGVyLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnc3ZnLWZ1bm5lbC1qc19fc3ViTGFiZWxzJyk7XG5cbiAgICAgICAgICAgIGxldCBzdWJMYWJlbHNIVE1MID0gJyc7XG5cbiAgICAgICAgICAgIHRoaXMuc3ViTGFiZWxzLmZvckVhY2goKHN1YkxhYmVsLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICAgIHN1YkxhYmVsc0hUTUwgKz0gYDxkaXYgY2xhc3M9XCJzdmctZnVubmVsLWpzX19zdWJMYWJlbCBzdmctZnVubmVsLWpzX19zdWJMYWJlbC0ke2luZGV4ICsgMX1cIj5cbiAgICA8ZGl2IGNsYXNzPVwic3ZnLWZ1bm5lbC1qc19fc3ViTGFiZWwtLWNvbG9yXCJcbiAgICAgICAgc3R5bGU9XCIke2dlbmVyYXRlTGVnZW5kQmFja2dyb3VuZCh0aGlzLmNvbG9yc1tpbmRleF0sIHRoaXMuZ3JhZGllbnREaXJlY3Rpb24pfVwiPjwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJzdmctZnVubmVsLWpzX19zdWJMYWJlbC0tdGl0bGVcIj4ke3N1YkxhYmVsfTwvZGl2PlxuPC9kaXY+YDtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBzdWJMYWJlbHNIb2xkZXIuaW5uZXJIVE1MID0gc3ViTGFiZWxzSFRNTDtcbiAgICAgICAgICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKHN1YkxhYmVsc0hvbGRlcik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjcmVhdGVDb250YWluZXIoKSB7XG4gICAgICAgIGlmICghdGhpcy5jb250YWluZXJTZWxlY3Rvcikge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdDb250YWluZXIgaXMgbWlzc2luZycpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHR5cGVvZiB0aGlzLmNvbnRhaW5lclNlbGVjdG9yID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgdGhpcy5jb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRoaXMuY29udGFpbmVyU2VsZWN0b3IpO1xuICAgICAgICAgICAgaWYgKCF0aGlzLmNvbnRhaW5lcikge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgQ29udGFpbmVyIGNhbm5vdCBiZSBmb3VuZCAoc2VsZWN0b3I6ICR7dGhpcy5jb250YWluZXJTZWxlY3Rvcn0pLmApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuY29udGFpbmVyIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpIHtcbiAgICAgICAgICAgIHRoaXMuY29udGFpbmVyID0gdGhpcy5jb250YWluZXJTZWxlY3RvcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignQ29udGFpbmVyIG11c3QgZWl0aGVyIGJlIGEgc2VsZWN0b3Igc3RyaW5nIG9yIGFuIEhUTUxFbGVtZW50LicpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5jb250YWluZXIuY2xhc3NMaXN0LmFkZCgnc3ZnLWZ1bm5lbC1qcycpO1xuXG4gICAgICAgIHRoaXMuZ3JhcGhDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgdGhpcy5ncmFwaENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdzdmctZnVubmVsLWpzX19jb250YWluZXInKTtcbiAgICAgICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5ncmFwaENvbnRhaW5lcik7XG5cbiAgICAgICAgaWYgKHRoaXMuZGlyZWN0aW9uID09PSAndmVydGljYWwnKSB7XG4gICAgICAgICAgICB0aGlzLmNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdzdmctZnVubmVsLWpzLS12ZXJ0aWNhbCcpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgc2V0VmFsdWVzKHYpIHtcbiAgICAgICAgdGhpcy52YWx1ZXMgPSB2O1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBzZXREaXJlY3Rpb24oZCkge1xuICAgICAgICB0aGlzLmRpcmVjdGlvbiA9IGQ7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIHNldEhlaWdodChoKSB7XG4gICAgICAgIHRoaXMuaGVpZ2h0ID0gaDtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgc2V0V2lkdGgodykge1xuICAgICAgICB0aGlzLndpZHRoID0gdztcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgc3RhdGljIGdldFZhbHVlcyhvcHRpb25zKSB7XG4gICAgICAgIGlmICghb3B0aW9ucy5kYXRhKSB7XG4gICAgICAgICAgICByZXR1cm4gW107XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCB7IGRhdGEgfSA9IG9wdGlvbnM7XG5cbiAgICAgICAgaWYgKHR5cGVvZiBkYXRhID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgcmV0dXJuIGRhdGEudmFsdWVzO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIFtdO1xuICAgIH1cblxuICAgIGdldFZhbHVlczJkKCkge1xuICAgICAgICBjb25zdCB2YWx1ZXMgPSBbXTtcblxuICAgICAgICB0aGlzLnZhbHVlcy5mb3JFYWNoKCh2YWx1ZVNldCkgPT4ge1xuICAgICAgICAgICAgdmFsdWVzLnB1c2godmFsdWVTZXQucmVkdWNlKChzdW0sIHZhbHVlKSA9PiBzdW0gKyB2YWx1ZSwgMCkpO1xuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gdmFsdWVzO1xuICAgIH1cblxuICAgIGdldFBlcmNlbnRhZ2VzMmQoKSB7XG4gICAgICAgIGNvbnN0IHBlcmNlbnRhZ2VzID0gW107XG5cbiAgICAgICAgdGhpcy52YWx1ZXMuZm9yRWFjaCgodmFsdWVTZXQpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHRvdGFsID0gdmFsdWVTZXQucmVkdWNlKChzdW0sIHZhbHVlKSA9PiBzdW0gKyB2YWx1ZSwgMCk7XG4gICAgICAgICAgICBwZXJjZW50YWdlcy5wdXNoKHZhbHVlU2V0Lm1hcCh2YWx1ZSA9PiAodG90YWwgPT09IDAgPyAwIDogcm91bmRQb2ludCh2YWx1ZSAqIDEwMCAvIHRvdGFsKSkpKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIHBlcmNlbnRhZ2VzO1xuICAgIH1cblxuICAgIGNyZWF0ZVBlcmNlbnRhZ2VzKCkge1xuICAgICAgICBsZXQgdmFsdWVzID0gW107XG5cbiAgICAgICAgaWYgKHRoaXMuaXMyZCgpKSB7XG4gICAgICAgICAgICB2YWx1ZXMgPSB0aGlzLmdldFZhbHVlczJkKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB2YWx1ZXMgPSBbLi4udGhpcy52YWx1ZXNdO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgbWF4ID0gTWF0aC5tYXgoLi4udmFsdWVzKTtcbiAgICAgICAgcmV0dXJuIHZhbHVlcy5tYXAodmFsdWUgPT4gKHZhbHVlID09PSAwID8gMCA6IHJvdW5kUG9pbnQodmFsdWUgKiAxMDAgLyBtYXgpKSk7XG4gICAgfVxuXG4gICAgYXBwbHlHcmFkaWVudChzdmcsIHBhdGgsIGNvbG9ycywgaW5kZXgpIHtcbiAgICAgICAgY29uc3QgZGVmcyA9IChzdmcucXVlcnlTZWxlY3RvcignZGVmcycpID09PSBudWxsKVxuICAgICAgICAgICAgPyBjcmVhdGVTVkdFbGVtZW50KCdkZWZzJywgc3ZnKVxuICAgICAgICAgICAgOiBzdmcucXVlcnlTZWxlY3RvcignZGVmcycpO1xuXG4gICAgICAgIGNvbnN0IGdyYWRpZW50TmFtZSA9IGdlbmVyYXRlUmFuZG9tSWRTdHJpbmcoYGZ1bm5lbEdyYWRpZW50LSR7aW5kZXh9LWApO1xuXG4gICAgICAgIGNvbnN0IGdyYWRpZW50ID0gY3JlYXRlU1ZHRWxlbWVudCgnbGluZWFyR3JhZGllbnQnLCBkZWZzLCB7XG4gICAgICAgICAgICBpZDogZ3JhZGllbnROYW1lXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmICh0aGlzLmdyYWRpZW50RGlyZWN0aW9uID09PSAndmVydGljYWwnKSB7XG4gICAgICAgICAgICBzZXRBdHRycyhncmFkaWVudCwge1xuICAgICAgICAgICAgICAgIHgxOiAnMCcsXG4gICAgICAgICAgICAgICAgeDI6ICcwJyxcbiAgICAgICAgICAgICAgICB5MTogJzAnLFxuICAgICAgICAgICAgICAgIHkyOiAnMSdcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgbnVtYmVyT2ZDb2xvcnMgPSBjb2xvcnMubGVuZ3RoO1xuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbnVtYmVyT2ZDb2xvcnM7IGkrKykge1xuICAgICAgICAgICAgY3JlYXRlU1ZHRWxlbWVudCgnc3RvcCcsIGdyYWRpZW50LCB7XG4gICAgICAgICAgICAgICAgJ3N0b3AtY29sb3InOiBjb2xvcnNbaV0sXG4gICAgICAgICAgICAgICAgb2Zmc2V0OiBgJHtNYXRoLnJvdW5kKDEwMCAqIGkgLyAobnVtYmVyT2ZDb2xvcnMgLSAxKSl9JWBcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgc2V0QXR0cnMocGF0aCwge1xuICAgICAgICAgICAgZmlsbDogYHVybChcIiMke2dyYWRpZW50TmFtZX1cIilgLFxuICAgICAgICAgICAgc3Ryb2tlOiBgdXJsKFwiIyR7Z3JhZGllbnROYW1lfVwiKWBcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgbWFrZVNWRygpIHtcbiAgICAgICAgY29uc3Qgc3ZnID0gY3JlYXRlU1ZHRWxlbWVudCgnc3ZnJywgdGhpcy5ncmFwaENvbnRhaW5lciwge1xuICAgICAgICAgICAgd2lkdGg6IHRoaXMuZ2V0V2lkdGgoKSxcbiAgICAgICAgICAgIGhlaWdodDogdGhpcy5nZXRIZWlnaHQoKVxuICAgICAgICB9KTtcblxuICAgICAgICBjb25zdCB2YWx1ZXNOdW0gPSB0aGlzLmdldENyb3NzQXhpc1BvaW50cygpLmxlbmd0aCAtIDE7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdmFsdWVzTnVtOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IHBhdGggPSBjcmVhdGVTVkdFbGVtZW50KCdwYXRoJywgc3ZnKTtcblxuICAgICAgICAgICAgY29uc3QgY29sb3IgPSAodGhpcy5pczJkKCkpID8gdGhpcy5jb2xvcnNbaV0gOiB0aGlzLmNvbG9ycztcbiAgICAgICAgICAgIGNvbnN0IGZpbGxNb2RlID0gKHR5cGVvZiBjb2xvciA9PT0gJ3N0cmluZycgfHwgY29sb3IubGVuZ3RoID09PSAxKSA/ICdzb2xpZCcgOiAnZ3JhZGllbnQnO1xuXG4gICAgICAgICAgICBpZiAoZmlsbE1vZGUgPT09ICdzb2xpZCcpIHtcbiAgICAgICAgICAgICAgICBzZXRBdHRycyhwYXRoLCB7XG4gICAgICAgICAgICAgICAgICAgIGZpbGw6IGNvbG9yLFxuICAgICAgICAgICAgICAgICAgICBzdHJva2U6IGNvbG9yXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGZpbGxNb2RlID09PSAnZ3JhZGllbnQnKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5hcHBseUdyYWRpZW50KHN2ZywgcGF0aCwgY29sb3IsIGkgKyAxKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgc3ZnLmFwcGVuZENoaWxkKHBhdGgpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5ncmFwaENvbnRhaW5lci5hcHBlbmRDaGlsZChzdmcpO1xuICAgIH1cblxuICAgIGdldFNWRygpIHtcbiAgICAgICAgY29uc3Qgc3ZnID0gdGhpcy5jb250YWluZXIucXVlcnlTZWxlY3Rvcignc3ZnJyk7XG5cbiAgICAgICAgaWYgKCFzdmcpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignTm8gU1ZHIGZvdW5kIGluc2lkZSBvZiB0aGUgY29udGFpbmVyJyk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gc3ZnO1xuICAgIH1cblxuICAgIGdldFdpZHRoKCkge1xuICAgICAgICByZXR1cm4gdGhpcy53aWR0aCB8fCB0aGlzLmdyYXBoQ29udGFpbmVyLmNsaWVudFdpZHRoO1xuICAgIH1cblxuICAgIGdldEhlaWdodCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaGVpZ2h0IHx8IHRoaXMuZ3JhcGhDb250YWluZXIuY2xpZW50SGVpZ2h0O1xuICAgIH1cblxuICAgIGdldFBhdGhEZWZpbml0aW9ucygpIHtcbiAgICAgICAgY29uc3QgdmFsdWVzTnVtID0gdGhpcy5nZXRDcm9zc0F4aXNQb2ludHMoKS5sZW5ndGggLSAxO1xuICAgICAgICBjb25zdCBwYXRocyA9IFtdO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHZhbHVlc051bTsgaSsrKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5pc1ZlcnRpY2FsKCkpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBYID0gdGhpcy5nZXRDcm9zc0F4aXNQb2ludHMoKVtpXTtcbiAgICAgICAgICAgICAgICBjb25zdCBYTmV4dCA9IHRoaXMuZ2V0Q3Jvc3NBeGlzUG9pbnRzKClbaSArIDFdO1xuICAgICAgICAgICAgICAgIGNvbnN0IFkgPSB0aGlzLmdldE1haW5BeGlzUG9pbnRzKCk7XG5cbiAgICAgICAgICAgICAgICBjb25zdCBkID0gY3JlYXRlVmVydGljYWxQYXRoKGksIFgsIFhOZXh0LCBZKTtcbiAgICAgICAgICAgICAgICBwYXRocy5wdXNoKGQpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjb25zdCBYID0gdGhpcy5nZXRNYWluQXhpc1BvaW50cygpO1xuICAgICAgICAgICAgICAgIGNvbnN0IFkgPSB0aGlzLmdldENyb3NzQXhpc1BvaW50cygpW2ldO1xuICAgICAgICAgICAgICAgIGNvbnN0IFlOZXh0ID0gdGhpcy5nZXRDcm9zc0F4aXNQb2ludHMoKVtpICsgMV07XG5cbiAgICAgICAgICAgICAgICBjb25zdCBkID0gY3JlYXRlUGF0aChpLCBYLCBZLCBZTmV4dCk7XG4gICAgICAgICAgICAgICAgcGF0aHMucHVzaChkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBwYXRocztcbiAgICB9XG5cbiAgICBnZXRQYXRoTWVkaWFuKGkpIHtcbiAgICAgICAgaWYgKHRoaXMuaXNWZXJ0aWNhbCgpKSB7XG4gICAgICAgICAgICBjb25zdCBjcm9zcyA9IHRoaXMuZ2V0Q3Jvc3NBeGlzUG9pbnRzKClbaV07XG4gICAgICAgICAgICBjb25zdCBuZXh0ID0gdGhpcy5nZXRDcm9zc0F4aXNQb2ludHMoKVtpICsgMV07XG4gICAgICAgICAgICBjb25zdCBZID0gdGhpcy5nZXRNYWluQXhpc1BvaW50cygpO1xuICAgICAgICAgICAgY29uc3QgWCA9IFtdO1xuICAgICAgICAgICAgY29uc3QgWE5leHQgPSBbXTtcblxuICAgICAgICAgICAgY3Jvc3MuZm9yRWFjaCgocG9pbnQsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgbSA9IChwb2ludCArIG5leHRbaW5kZXhdKSAvIDI7XG4gICAgICAgICAgICAgICAgWC5wdXNoKG0gLSAxKTtcbiAgICAgICAgICAgICAgICBYTmV4dC5wdXNoKG0gKyAxKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICByZXR1cm4gY3JlYXRlVmVydGljYWxQYXRoKGksIFgsIFhOZXh0LCBZKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IFggPSB0aGlzLmdldE1haW5BeGlzUG9pbnRzKCk7XG4gICAgICAgIGNvbnN0IGNyb3NzID0gdGhpcy5nZXRDcm9zc0F4aXNQb2ludHMoKVtpXTtcbiAgICAgICAgY29uc3QgbmV4dCA9IHRoaXMuZ2V0Q3Jvc3NBeGlzUG9pbnRzKClbaSArIDFdO1xuICAgICAgICBjb25zdCBZID0gW107XG4gICAgICAgIGNvbnN0IFlOZXh0ID0gW107XG5cbiAgICAgICAgY3Jvc3MuZm9yRWFjaCgocG9pbnQsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBtID0gKHBvaW50ICsgbmV4dFtpbmRleF0pIC8gMjtcbiAgICAgICAgICAgIFkucHVzaChtIC0gMSk7XG4gICAgICAgICAgICBZTmV4dC5wdXNoKG0gKyAxKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIGNyZWF0ZVBhdGgoaSwgWCwgWSwgWU5leHQpO1xuICAgIH1cblxuICAgIGRyYXdQYXRocygpIHtcbiAgICAgICAgY29uc3Qgc3ZnID0gdGhpcy5nZXRTVkcoKTtcbiAgICAgICAgY29uc3QgcGF0aHMgPSBzdmcucXVlcnlTZWxlY3RvckFsbCgncGF0aCcpO1xuICAgICAgICBjb25zdCBkZWZpbml0aW9ucyA9IHRoaXMuZ2V0UGF0aERlZmluaXRpb25zKCk7XG5cbiAgICAgICAgZGVmaW5pdGlvbnMuZm9yRWFjaCgoZGVmaW5pdGlvbiwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgIHBhdGhzW2luZGV4XS5zZXRBdHRyaWJ1dGUoJ2QnLCBkZWZpbml0aW9uKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZHJhdygpIHtcbiAgICAgICAgdGhpcy5jcmVhdGVDb250YWluZXIoKTtcbiAgICAgICAgdGhpcy5tYWtlU1ZHKCk7XG5cbiAgICAgICAgdGhpcy5hZGRMYWJlbHMoKTtcblxuICAgICAgICBpZiAodGhpcy5pczJkKCkpIHtcbiAgICAgICAgICAgIHRoaXMuYWRkU3ViTGFiZWxzKCk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmRyYXdQYXRocygpO1xuICAgIH1cblxuICAgIC8qXG4gICAgICAgIE1ldGhvZHNcbiAgICAgKi9cblxuICAgIG1ha2VWZXJ0aWNhbCgpIHtcbiAgICAgICAgaWYgKHRoaXMuZGlyZWN0aW9uID09PSAndmVydGljYWwnKSByZXR1cm4gdHJ1ZTtcblxuICAgICAgICB0aGlzLmRpcmVjdGlvbiA9ICd2ZXJ0aWNhbCc7XG4gICAgICAgIHRoaXMuY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3N2Zy1mdW5uZWwtanMtLXZlcnRpY2FsJyk7XG5cbiAgICAgICAgY29uc3Qgc3ZnID0gdGhpcy5nZXRTVkcoKTtcbiAgICAgICAgY29uc3QgaGVpZ2h0ID0gdGhpcy5nZXRIZWlnaHQoKTtcbiAgICAgICAgY29uc3Qgd2lkdGggPSB0aGlzLmdldFdpZHRoKCk7XG4gICAgICAgIHNldEF0dHJzKHN2ZywgeyBoZWlnaHQsIHdpZHRoIH0pO1xuXG4gICAgICAgIHRoaXMuZHJhd1BhdGhzKCk7XG5cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgbWFrZUhvcml6b250YWwoKSB7XG4gICAgICAgIGlmICh0aGlzLmRpcmVjdGlvbiA9PT0gJ2hvcml6b250YWwnKSByZXR1cm4gdHJ1ZTtcblxuICAgICAgICB0aGlzLmRpcmVjdGlvbiA9ICdob3Jpem9udGFsJztcbiAgICAgICAgdGhpcy5jb250YWluZXIuY2xhc3NMaXN0LnJlbW92ZSgnc3ZnLWZ1bm5lbC1qcy0tdmVydGljYWwnKTtcblxuICAgICAgICBjb25zdCBzdmcgPSB0aGlzLmdldFNWRygpO1xuICAgICAgICBjb25zdCBoZWlnaHQgPSB0aGlzLmdldEhlaWdodCgpO1xuICAgICAgICBjb25zdCB3aWR0aCA9IHRoaXMuZ2V0V2lkdGgoKTtcbiAgICAgICAgc2V0QXR0cnMoc3ZnLCB7IGhlaWdodCwgd2lkdGggfSk7XG5cbiAgICAgICAgdGhpcy5kcmF3UGF0aHMoKTtcblxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICB0b2dnbGVEaXJlY3Rpb24oKSB7XG4gICAgICAgIGlmICh0aGlzLmRpcmVjdGlvbiA9PT0gJ2hvcml6b250YWwnKSB7XG4gICAgICAgICAgICB0aGlzLm1ha2VWZXJ0aWNhbCgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5tYWtlSG9yaXpvbnRhbCgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZ3JhZGllbnRNYWtlVmVydGljYWwoKSB7XG4gICAgICAgIGlmICh0aGlzLmdyYWRpZW50RGlyZWN0aW9uID09PSAndmVydGljYWwnKSByZXR1cm4gdHJ1ZTtcblxuICAgICAgICB0aGlzLmdyYWRpZW50RGlyZWN0aW9uID0gJ3ZlcnRpY2FsJztcbiAgICAgICAgY29uc3QgZ3JhZGllbnRzID0gdGhpcy5ncmFwaENvbnRhaW5lci5xdWVyeVNlbGVjdG9yQWxsKCdsaW5lYXJHcmFkaWVudCcpO1xuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZ3JhZGllbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBzZXRBdHRycyhncmFkaWVudHNbaV0sIHtcbiAgICAgICAgICAgICAgICB4MTogJzAnLFxuICAgICAgICAgICAgICAgIHgyOiAnMCcsXG4gICAgICAgICAgICAgICAgeTE6ICcwJyxcbiAgICAgICAgICAgICAgICB5MjogJzEnXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIGdyYWRpZW50TWFrZUhvcml6b250YWwoKSB7XG4gICAgICAgIGlmICh0aGlzLmdyYWRpZW50RGlyZWN0aW9uID09PSAnaG9yaXpvbnRhbCcpIHJldHVybiB0cnVlO1xuXG4gICAgICAgIHRoaXMuZ3JhZGllbnREaXJlY3Rpb24gPSAnaG9yaXpvbnRhbCc7XG4gICAgICAgIGNvbnN0IGdyYWRpZW50cyA9IHRoaXMuZ3JhcGhDb250YWluZXIucXVlcnlTZWxlY3RvckFsbCgnbGluZWFyR3JhZGllbnQnKTtcblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGdyYWRpZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgcmVtb3ZlQXR0cnMoZ3JhZGllbnRzW2ldLCAneDEnLCAneDInLCAneTEnLCAneTInKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIGdyYWRpZW50VG9nZ2xlRGlyZWN0aW9uKCkge1xuICAgICAgICBpZiAodGhpcy5ncmFkaWVudERpcmVjdGlvbiA9PT0gJ2hvcml6b250YWwnKSB7XG4gICAgICAgICAgICB0aGlzLmdyYWRpZW50TWFrZVZlcnRpY2FsKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmdyYWRpZW50TWFrZUhvcml6b250YWwoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHVwZGF0ZVdpZHRoKHcpIHtcbiAgICAgICAgdGhpcy53aWR0aCA9IHc7XG4gICAgICAgIGNvbnN0IHN2ZyA9IHRoaXMuZ2V0U1ZHKCk7XG4gICAgICAgIGNvbnN0IHdpZHRoID0gdGhpcy5nZXRXaWR0aCgpO1xuICAgICAgICBzZXRBdHRycyhzdmcsIHsgd2lkdGggfSk7XG5cbiAgICAgICAgdGhpcy5kcmF3UGF0aHMoKTtcblxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICB1cGRhdGVIZWlnaHQoaCkge1xuICAgICAgICB0aGlzLmhlaWdodCA9IGg7XG4gICAgICAgIGNvbnN0IHN2ZyA9IHRoaXMuZ2V0U1ZHKCk7XG4gICAgICAgIGNvbnN0IGhlaWdodCA9IHRoaXMuZ2V0SGVpZ2h0KCk7XG4gICAgICAgIHNldEF0dHJzKHN2ZywgeyBoZWlnaHQgfSk7XG5cbiAgICAgICAgdGhpcy5kcmF3UGF0aHMoKTtcblxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICAvLyBAVE9ETzogcmVmYWN0b3IgZGF0YSB1cGRhdGVcbiAgICB1cGRhdGVEYXRhKGQpIHtcbiAgICAgICAgY29uc3QgbGFiZWxzID0gdGhpcy5jb250YWluZXIucXVlcnlTZWxlY3RvcignLnN2Zy1mdW5uZWwtanNfX2xhYmVscycpO1xuICAgICAgICBjb25zdCBzdWJMYWJlbHMgPSB0aGlzLmNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCcuc3ZnLWZ1bm5lbC1qc19fc3ViTGFiZWxzJyk7XG5cbiAgICAgICAgaWYgKGxhYmVscykgbGFiZWxzLnJlbW92ZSgpO1xuICAgICAgICBpZiAoc3ViTGFiZWxzKSBzdWJMYWJlbHMucmVtb3ZlKCk7XG5cbiAgICAgICAgdGhpcy5sYWJlbHMgPSBbXTtcbiAgICAgICAgdGhpcy5jb2xvcnMgPSBnZXREZWZhdWx0Q29sb3JzKHRoaXMuaXMyZCgpID8gdGhpcy5nZXRTdWJEYXRhU2l6ZSgpIDogMik7XG4gICAgICAgIHRoaXMudmFsdWVzID0gW107XG4gICAgICAgIHRoaXMucGVyY2VudGFnZXMgPSBbXTtcblxuICAgICAgICBpZiAodHlwZW9mIGQubGFiZWxzICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgdGhpcy5sYWJlbHMgPSBGdW5uZWxHcmFwaC5nZXRMYWJlbHMoeyBkYXRhOiBkIH0pO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0eXBlb2YgZC5jb2xvcnMgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICB0aGlzLmNvbG9ycyA9IGQuY29sb3JzIHx8IGdldERlZmF1bHRDb2xvcnModGhpcy5pczJkKCkgPyB0aGlzLmdldFN1YkRhdGFTaXplKCkgOiAyKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodHlwZW9mIGQudmFsdWVzICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChkLnZhbHVlc1swXSkgIT09IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh0aGlzLnZhbHVlc1swXSkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCdzdmcnKS5yZW1vdmUoKTtcbiAgICAgICAgICAgICAgICB0aGlzLnZhbHVlcyA9IEZ1bm5lbEdyYXBoLmdldFZhbHVlcyh7IGRhdGE6IGQgfSk7XG4gICAgICAgICAgICAgICAgdGhpcy5tYWtlU1ZHKCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMudmFsdWVzID0gRnVubmVsR3JhcGguZ2V0VmFsdWVzKHsgZGF0YTogZCB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuZHJhd1BhdGhzKCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5wZXJjZW50YWdlcyA9IHRoaXMuY3JlYXRlUGVyY2VudGFnZXMoKTtcblxuICAgICAgICB0aGlzLmFkZExhYmVscygpO1xuXG4gICAgICAgIGlmICh0eXBlb2YgZC5zdWJMYWJlbHMgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICB0aGlzLnN1YkxhYmVscyA9IEZ1bm5lbEdyYXBoLmdldFN1YkxhYmVscyh7IGRhdGE6IGQgfSk7XG4gICAgICAgICAgICB0aGlzLmFkZFN1YkxhYmVscygpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgdXBkYXRlKG8pIHtcbiAgICAgICAgaWYgKHR5cGVvZiBvLmRpc3BsYXlQZXJjZW50ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgaWYgKHRoaXMuZGlzcGxheVBlcmNlbnQgIT09IG8uZGlzcGxheVBlcmNlbnQpIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5kaXNwbGF5UGVyY2VudCA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbnRhaW5lci5xdWVyeVNlbGVjdG9yQWxsKCcubGFiZWxfX3BlcmNlbnRhZ2UnKS5mb3JFYWNoKChsYWJlbCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWwucmVtb3ZlKCk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3JBbGwoJy5zdmctZnVubmVsLWpzX19sYWJlbCcpLmZvckVhY2goKGxhYmVsLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcGVyY2VudGFnZSA9IHRoaXMucGVyY2VudGFnZXNbaW5kZXhdO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcGVyY2VudGFnZVZhbHVlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBwZXJjZW50YWdlVmFsdWUuc2V0QXR0cmlidXRlKCdjbGFzcycsICdsYWJlbF9fcGVyY2VudGFnZScpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocGVyY2VudGFnZSAhPT0gMTAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGVyY2VudGFnZVZhbHVlLnRleHRDb250ZW50ID0gYCR7cGVyY2VudGFnZS50b1N0cmluZygpfSVgO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsLmFwcGVuZENoaWxkKHBlcmNlbnRhZ2VWYWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAodHlwZW9mIG8uaGVpZ2h0ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgdGhpcy51cGRhdGVIZWlnaHQoby5oZWlnaHQpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0eXBlb2Ygby53aWR0aCAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlV2lkdGgoby53aWR0aCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHR5cGVvZiBvLmdyYWRpZW50RGlyZWN0aW9uICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgaWYgKG8uZ3JhZGllbnREaXJlY3Rpb24gPT09ICd2ZXJ0aWNhbCcpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmdyYWRpZW50TWFrZVZlcnRpY2FsKCk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKG8uZ3JhZGllbnREaXJlY3Rpb24gPT09ICdob3Jpem9udGFsJykge1xuICAgICAgICAgICAgICAgIHRoaXMuZ3JhZGllbnRNYWtlSG9yaXpvbnRhbCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmICh0eXBlb2Ygby5kaXJlY3Rpb24gIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICBpZiAoby5kaXJlY3Rpb24gPT09ICd2ZXJ0aWNhbCcpIHtcbiAgICAgICAgICAgICAgICB0aGlzLm1ha2VWZXJ0aWNhbCgpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChvLmRpcmVjdGlvbiA9PT0gJ2hvcml6b250YWwnKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5tYWtlSG9yaXpvbnRhbCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmICh0eXBlb2Ygby5kYXRhICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgdGhpcy51cGRhdGVEYXRhKG8uZGF0YSk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEZ1bm5lbEdyYXBoO1xuIiwiY29uc3Qgcm91bmRQb2ludCA9IG51bWJlciA9PiBNYXRoLnJvdW5kKG51bWJlciAqIDEwKSAvIDEwO1xuY29uc3QgZm9ybWF0TnVtYmVyID0gbnVtYmVyID0+IE51bWJlcihudW1iZXIpLnRvU3RyaW5nKCkucmVwbGFjZSgvKFxcZCkoPz0oXFxkezN9KSsoPyFcXGQpKS9nLCAnJDEsJyk7XG5cbmV4cG9ydCB7IHJvdW5kUG9pbnQsIGZvcm1hdE51bWJlciB9O1xuIiwiaW1wb3J0IHsgcm91bmRQb2ludCB9IGZyb20gJy4vbnVtYmVyJztcblxuY29uc3QgY3JlYXRlQ3VydmVzID0gKHgxLCB5MSwgeDIsIHkyKSA9PiBgIEMke3JvdW5kUG9pbnQoKHgyICsgeDEpIC8gMil9LCR7eTF9IGBcbiAgICArIGAke3JvdW5kUG9pbnQoKHgyICsgeDEpIC8gMil9LCR7eTJ9ICR7eDJ9LCR7eTJ9YDtcblxuY29uc3QgY3JlYXRlVmVydGljYWxDdXJ2ZXMgPSAoeDEsIHkxLCB4MiwgeTIpID0+IGAgQyR7eDF9LCR7cm91bmRQb2ludCgoeTIgKyB5MSkgLyAyKX0gYFxuICAgICsgYCR7eDJ9LCR7cm91bmRQb2ludCgoeTIgKyB5MSkgLyAyKX0gJHt4Mn0sJHt5Mn1gO1xuXG4vKlxuICAgIEEgZnVubmVsIHNlZ21lbnQgaXMgZHJhdyBpbiBhIGNsb2Nrd2lzZSBkaXJlY3Rpb24uXG4gICAgUGF0aCAxLTIgaXMgZHJhd24sXG4gICAgdGhlbiBjb25uZWN0ZWQgd2l0aCBhIHN0cmFpZ2h0IHZlcnRpY2FsIGxpbmUgMi0zLFxuICAgIHRoZW4gYSBsaW5lIDMtNCBpcyBkcmF3ICh1c2luZyBZTmV4dCBwb2ludHMgZ29pbmcgaW4gYmFja3dhcmRzIGRpcmVjdGlvbilcbiAgICB0aGVuIHBhdGggaXMgY2xvc2VkIChjb25uZWN0ZWQgd2l0aCB0aGUgc3RhcnRpbmcgcG9pbnQgMSkuXG5cbiAgICAxLS0tLS0tLS0tLT4yXG4gICAgXiAgICAgICAgICAgfFxuICAgIHwgICAgICAgICAgIHZcbiAgICA0PC0tLS0tLS0tLS0zXG5cbiAgICBPbiB0aGUgZ3JhcGggb24gbGluZSAyMCBpdCB3b3JrcyBsaWtlIHRoaXM6XG4gICAgQSMwLCBBIzEsIEEjMiwgQSMzLCBCIzMsIEIjMiwgQiMxLCBCIzAsIGNsb3NlIHRoZSBwYXRoLlxuXG4gICAgUG9pbnRzIGZvciBwYXRoIFwiQlwiIGFyZSBwYXNzZWQgYXMgdGhlIFlOZXh0IHBhcmFtLlxuICovXG5cbmNvbnN0IGNyZWF0ZVBhdGggPSAoaW5kZXgsIFgsIFksIFlOZXh0KSA9PiB7XG4gICAgbGV0IHN0ciA9IGBNJHtYWzBdfSwke1lbMF19YDtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgWC5sZW5ndGggLSAxOyBpKyspIHtcbiAgICAgICAgc3RyICs9IGNyZWF0ZUN1cnZlcyhYW2ldLCBZW2ldLCBYW2kgKyAxXSwgWVtpICsgMV0pO1xuICAgIH1cblxuICAgIHN0ciArPSBgIEwke1suLi5YXS5wb3AoKX0sJHtbLi4uWU5leHRdLnBvcCgpfWA7XG5cbiAgICBmb3IgKGxldCBpID0gWC5sZW5ndGggLSAxOyBpID4gMDsgaS0tKSB7XG4gICAgICAgIHN0ciArPSBjcmVhdGVDdXJ2ZXMoWFtpXSwgWU5leHRbaV0sIFhbaSAtIDFdLCBZTmV4dFtpIC0gMV0pO1xuICAgIH1cblxuICAgIHN0ciArPSAnIFonO1xuXG4gICAgcmV0dXJuIHN0cjtcbn07XG5cbi8qXG4gICAgSW4gYSB2ZXJ0aWNhbCBwYXRoIHdlIGdvIGNvdW50ZXItY2xvY2t3aXNlXG5cbiAgICAxPC0tLS0tLS0tLS00XG4gICAgfCAgICAgICAgICAgXlxuICAgIHYgICAgICAgICAgIHxcbiAgICAyLS0tLS0tLS0tLT4zXG4gKi9cblxuY29uc3QgY3JlYXRlVmVydGljYWxQYXRoID0gKGluZGV4LCBYLCBYTmV4dCwgWSkgPT4ge1xuICAgIGxldCBzdHIgPSBgTSR7WFswXX0sJHtZWzBdfWA7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IFgubGVuZ3RoIC0gMTsgaSsrKSB7XG4gICAgICAgIHN0ciArPSBjcmVhdGVWZXJ0aWNhbEN1cnZlcyhYW2ldLCBZW2ldLCBYW2kgKyAxXSwgWVtpICsgMV0pO1xuICAgIH1cblxuICAgIHN0ciArPSBgIEwke1suLi5YTmV4dF0ucG9wKCl9LCR7Wy4uLlldLnBvcCgpfWA7XG5cbiAgICBmb3IgKGxldCBpID0gWC5sZW5ndGggLSAxOyBpID4gMDsgaS0tKSB7XG4gICAgICAgIHN0ciArPSBjcmVhdGVWZXJ0aWNhbEN1cnZlcyhYTmV4dFtpXSwgWVtpXSwgWE5leHRbaSAtIDFdLCBZW2kgLSAxXSk7XG4gICAgfVxuXG4gICAgc3RyICs9ICcgWic7XG5cbiAgICByZXR1cm4gc3RyO1xufTtcblxuZXhwb3J0IHtcbiAgICBjcmVhdGVDdXJ2ZXMsIGNyZWF0ZVZlcnRpY2FsQ3VydmVzLCBjcmVhdGVQYXRoLCBjcmVhdGVWZXJ0aWNhbFBhdGhcbn07XG4iLCJjb25zdCBnZW5lcmF0ZVJhbmRvbUlkU3RyaW5nID0gcHJlZml4ID0+IE1hdGgucmFuZG9tKCkudG9TdHJpbmcoMzYpLnJlcGxhY2UoJzAuJywgcHJlZml4IHx8ICcnKTtcblxuZXhwb3J0IGRlZmF1bHQgZ2VuZXJhdGVSYW5kb21JZFN0cmluZztcbiJdLCJzb3VyY2VSb290IjoiIn0=