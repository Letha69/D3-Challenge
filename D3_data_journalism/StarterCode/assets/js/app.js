// Chart Params
var svgWidth = 1000;
var svgHeight = 600;

var margin = { top: 20, right: 40, bottom: 60, left: 50 };

var width = svgWidth - margin.left - margin.right;
var height = svgHeight - margin.top - margin.bottom;

// Create an SVG wrapper, append an SVG group that will hold our chart, and shift the latter by left and top margins.
var svg = d3
  .select("#scatter")
  .append("svg")
  .attr("width", svgWidth)
  .attr("height", svgHeight);

var chartGroup = svg.append("g")
  .attr("transform", `translate(${margin.left}, ${margin.top})`);

// Import data from an external CSV file
d3.csv("assets/data/data.csv").then(function(journalismData) {
  //console.log(journalismData);
  //console.log([journalismData]);

  // Step 1: parse data/cast as numbers

  journalismData.forEach(function(data){
    data.healthcare = +data.healthcare;
    data.poverty = +data.poverty;
  });

  // Step 2: Create scale function

  var xLinearScale = d3.scaleLinear()
    .domain([8,d3.max(journalismData, d=> d.poverty)])
    .range([0, width]);

  var yLinearScale = d3.scaleLinear()
    .domain([4,d3.max(journalismData,d => d.healthcare)])
    .range([height,0]);

  //Step 3: Create axis functions

  var bottomAxis = d3.axisBottom(xLinearScale);
  var leftAxis = d3.axisLeft(yLinearScale);

  //Step 4: Append Axes to the chart

  chartGroup.append("g")
    .attr("transform", `translate(0, ${height})`)
    .call(bottomAxis);

  chartGroup.append("g")
    .call(leftAxis);

  //Step 5: Create Circles

  var circlesGroup = chartGroup.selectAll("circle")
    .data(journalismData)
    .enter()
    .append("circle")
    .attr("cx",d => xLinearScale(d.poverty))
    .attr("cy",d => yLinearScale(d.healthcare))
    .attr("r","8")
    .attr("fill","CornflowerBlue")
    //.attr("opacity",".5");

    // appending a label to each data point
    chartGroup.append("text")
      .style("text-ancher","middle")
      //.style("font-size","8px")
      .selectAll("tspan")
      .data(journalismData)
      .enter()
      .append("tspan")
      .attr("x", d => xLinearScale(d.poverty - 0.1))
      .attr("y",d => yLinearScale(d.healthcare - 0.1))
      .text(function(d){
        return d.abbr
      })
      .attr("font-family", "sans-serif")
      .attr("font-size", "8px")
      .attr("fill", "white");;

    // Create axes labels

    chartGroup.append("text")
    .attr("transform", "rotate(-90)")
    .attr("y",0 - margin.left + 20)
    .attr("x", 0- (height/2))
    .attr("class","axisText")
    .attr("font-family", "Times New Roman")
    .text("Lacks Healthcare (%)");

    chartGroup.append("text")
      .attr("transform", `translate(${width / 2}, ${height + margin.top + 30})`)
      .attr("class", "axisText")
      .attr("font-family", "Times New Roman")
      .text("In Poverty (%)");
  }).catch(function(error) {
    console.log(error);    
  

// Appending a label to each data point
chart.append("text")
.style("text-anchor", "middle")
.style("font-size", "12px")
.selectAll("tspan")
.data(healthData)
.enter()
.append("tspan")
    .attr("x", function(data) {
        return xLinearScale(data.poverty - 0);
    })
    .attr("y", function(data) {
        return yLinearScale(data.phys_act - 0.2);
    })
    .text(function(data) {
        return data.abbr
    });

})