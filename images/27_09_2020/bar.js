var margin = options.margin,
    barPadding = options.barPadding,
    width = width-(2*margin),
    height = height-(2*margin),
    barWidth = Math.floor(width/data.length),
    xmax = d3.max(data, function(d) { return d.year; }),
    xmin = d3.min(data, function(d) { return d.year; }),
    ymax = d3.max(data, function(d) { return d.value; });
//Create the chart
svg.selectAll('rect')
   .data(data)
   .enter()
   .append('rect')
   .attr('height', function(d) { return d.value/ymax * height; })
   .attr('width', barWidth-barPadding)
   .attr('x', function(d, i) { return (margin+(i * barWidth)); })
   .attr('y', function(d) { return (height+margin-(d.value/ymax * height)); })
   .attr('fill', options.colour)
   //Hover effects
   .on('mouseover', function (d, i) {
     d3.select(this).transition()
       .duration('50')
       .attr('opacity', '.5')})
   .on('mouseout', function (d, i) {
     d3.select(this).transition()
       .duration('300')
       .attr('opacity', '1')})
//Create the x axis
var x = d3.scaleBand()
          .domain(data.map(function(d) { return d.year; }))
          .range([0, width-barPadding]);
svg.append("g")
  .attr("transform", "translate(" + margin + "," + (height+margin) + ")")
  .call(d3.axisBottom(x));
svg.append("text")             
  .attr("transform", "translate(" + (width/2) + " ," + (height+2*margin) + ")")
  .attr("dx", "1em")
  .style("text-anchor", "middle")
  .style("font-family", "Tahoma, Geneva, sans-serif")
  .style("font-size", "12pt")
  .text(options.xLabel);
//Create the y axis
var y = d3.scaleLinear()
          .range([height, 0])
          .domain([0, ymax]);
svg.append("g")
  .attr("transform", "translate(" + margin + ", " + margin + ")")
  .call(d3.axisLeft(y));
svg.append("text")
  .attr("transform", "translate(" + 0 + " ," + ((height+2*margin)/2) + ") rotate(-90)")
  .attr("dy", "1em")
  .style("text-anchor", "middle")
  .style("font-family", "Tahoma, Geneva, sans-serif")
  .style("font-size", "12pt")
  .text(options.yLabel);
//Create the chart title
svg.append("text")
  .attr("x", (width / 2))             
  .attr("y", (margin/2))
  .attr("text-anchor", "middle")
  .attr("dx", "1em")
  .style("font-size", "16pt")
  .style("font-family", "Tahoma, Geneva, sans-serif")
  .text(options.chartTitle);
