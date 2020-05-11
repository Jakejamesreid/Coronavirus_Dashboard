// Wrapper function
var svgMap = function (options) {
  this.init(options)
};

// Initialize SVG Worldmap
svgMap.prototype.init = function (options) {

  // Default options, pass a custom options object to overwrite specific
  var defaultOptions = {

    // The element to render the map in
    targetElementID: '',

    // Minimum and maximum zoom
    minZoom: 1,
    maxZoom: 25,

    // Initial zoom
    initialZoom: 1.06,

    // Zoom sensitivity
    zoomScaleSensitivity: 0.2,

    // Zoom with mousewheel
    mouseWheelZoomEnabled: true,

    // Data colors
    colorMax: '#CC0033',
    colorMin: '#FFE5D9',
    colorNoData: '#E2E2E2',

    // The default text to be shown when no data is present
    noDataText: 'No data available',

    // Country specific options
    counties: {
      // Western Sahara: Set to false to combine Morocco (MA) and Western Sahara (EH)
      EH: true
    }
  };

  this.options = Object.assign({}, defaultOptions, (options || {}));

  // Abort if target element not found
  if (!this.options.targetElementID || !document.getElementById(this.options.targetElementID)) {
    this.error('Target element not found');
  }

  // Abort if no data
  if (!this.options.data) {
    this.error('No data');
  }

  // Global id
  this.id = this.options.targetElementID;

  // Cache wrapper element
  this.wrapper = document.getElementById(this.options.targetElementID);

  // Create the map
  this.createMap();

  // Apply map data
  this.applyData(this.options.data);
};
