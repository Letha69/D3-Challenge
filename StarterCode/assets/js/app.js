// Define SVG area dimensions
var svgWidth = 960;
var svgHeight = 660;

// Define the chart's margins as an object
var chartMargin = {
    top: 20,
    right: 40,
    bottom: 60,
    left: 100
  };

// Define dimensions of the chart area
var chartWidth = svgWidth - chartMargin.left - chartMargin.right;
var chartHeight = svgHeight - chartMargin.top - chartMargin.bottom;

// Select body, append SVG area to it, and set the dimensions
var svg = d3
  .select("#scatter")
  .append("svg")
  .attr("height", svgHeight)
  .attr("width", svgWidth);

  // Append a group to the SVG area and shift ('translate') it to the right and down to adhere
// to the margins set in the "chartMargin" object.
var chartGroup = svg.append("g")
    .attr("transform", `translate(${chartMargin.left}, ${chartMargin.top})`);
    
// Load data from data.csv
d3.csv("data.csv").then(function(healthData) {
    console.log();

    
  // Cast the hours value to a number for each piece of tvData
  healthData.forEach(function(data) {
    data.poverty = +data.poverty;
    data.healthcare = +data.healthcare;
  });
  

  });

  //var barSpacing = 10; // desired space between each bar
  //var scaleY = 10; // 10x scale on rect height

  //// Create a 'barWidth' variable so that the bar chart spans the entire chartWidth.
  //var barWidth = (chartWidth - (barSpacing * (healthData.length - 1))) / tvData.length;

  // @TODO
  // Create code to build the bar chart using the tvData.
  //chartGroup.selectAll(".bar")
    //.data(healthData)
    //.enter()
    //.append("rect")
    //.classed("bar", true)
    //.attr("width", d => barWidth)
    //.attr("height", d => d.hours * scaleY)
    //.attr("x", (d, i) => i * (barWidth + barSpacing))
    //.attr("y", d => chartHeight - d.hours * scaleY);
//}).catch(function(error) {
  //console.log(error);
//});