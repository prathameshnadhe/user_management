import React, { useEffect, useRef } from "react";
import * as d3 from "d3";

interface LineChartProps {
  data: { x: number; y: number }[];
}

const LineChart: React.FC<LineChartProps> = ({ data }) => {
  const svgRef = useRef<SVGSVGElement | null>(null);
  const width = 600;
  const height = 240;

  useEffect(() => {
    if (!data || data.length === 0) return;

    const svg = d3.select(svgRef.current);
    svg.selectAll("*").remove(); // Clear previous content

    const xScale = d3
      .scaleLinear()
      .domain(d3.extent(data, (d) => d.x) as [number, number])
      .range([0, width]);

    const yScale = d3
      .scaleLinear()
      .domain([0, d3.max(data, (d) => d.y) as number])
      .range([height, 0]);

    const line = d3
      .line<{ x: number; y: number }>()
      .x((d) => xScale(d.x))
      .y((d) => yScale(d.y));

    svg
      .append("path")
      .datum(data)
      .attr("fill", "none")
      .attr("stroke", "steelblue")
      .attr("stroke-width", 2)
      .attr("d", line);

    // Add x and y axes
    svg
      .append("g")
      .attr("transform", `translate(0, ${height})`)
      .call(d3.axisBottom(xScale));

    svg.append("g").call(d3.axisLeft(yScale));
  }, [data]);

  return <svg ref={svgRef} width={width} height={height} />;
};

export default LineChart;
