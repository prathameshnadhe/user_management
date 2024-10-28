import React, { useEffect, useRef } from "react";
import * as d3 from "d3";

interface DataPoint {
  x: number;
  y: number;
}

interface ArcChartProps {
  data: DataPoint[];
}

const CurveCharts: React.FC<ArcChartProps> = ({ data }) => {
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const svg = d3.select(svgRef.current);
    const width = 800;
    const height = 300;

    
    svg.selectAll("*").remove();

    
    const xScale = d3
      .scaleLinear()
      .domain([0, d3.max(data, (d) => d.x) || 0])
      .range([0, width]);

    const yScale = d3
      .scaleLinear()
      .domain([0, d3.max(data, (d) => d.y) || 0])
      .range([height, 0]);

    
    const lineGenerator = d3
      .line<DataPoint>()
      .x((d) => xScale(d.x))
      .y((d) => yScale(d.y))
      .curve(d3.curveBasis); 

    
    svg
      .append("path")
      .attr("d", lineGenerator(data) || "")
      .attr("fill", "none")
      .attr("stroke", "steelblue")
      .attr("stroke-width", 2);

    // Create X and Y axes
    const xAxis = d3.axisBottom(xScale);
    const yAxis = d3.axisLeft(yScale);

    svg.append("g").attr("transform", `translate(0, ${height})`).call(xAxis);

    svg.append("g").call(yAxis);
  }, [data]);

  return <svg ref={svgRef} width={800} height={300} />;
};

export default CurveCharts;
