// Apply the data to the map
svgMap.prototype.applyData = function (data) {

  var max = null;
  var min = null;

  // Get highest and lowest value
  Object.keys(data.values).forEach(function (countyID) {
    var value = parseInt(data.values[countyID]["cases"], 10);
    max === null && (max = value);
    min === null && (min = value);
    value > max && (max = value);
    value < min && (min = value);
  });



  // Loop through counties and set colors
  Object.keys(this.counties).forEach(function (countyID) {
    var element = document.getElementById(this.id + '-map-county-' + countyID);
    if (!element) {
      return;
    }
    if (!data.values[countyID]) {
      element.setAttribute('fill', this.options.colorNoData);
      return;
    }
    var value = Math.max(min, parseInt(data.values[countyID]["cases"], 10));
    var ratio = Math.max(0, Math.min(1, (value - min) / (max - min)));
    var color = this.getColor(this.options.colorMax, this.options.colorMin, ratio);
    element.setAttribute('fill', color);
  }.bind(this));

};