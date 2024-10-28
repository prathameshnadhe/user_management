import { useEffect, useRef } from "react";
import * as d3 from "d3";

interface ArcChartProps {
  data: number[];
}

const ArcChart = ({ data }: ArcChartProps) => {
  const svgRef = useRef<SVGSVGElement | null>(null);
  const width = 150;
  const height = 150;

  useEffect(() => {
    const svg = d3.select(svgRef.current);
    svg.selectAll("*").remove();

    const radius = Math.min(width, height) / 2;
    const color = d3.scaleOrdinal(d3.schemeCategory10);

    const pie = d3.pie<number>();
    const arc = d3
      .arc<d3.PieArcDatum<number>>()
      .innerRadius(0)
      .outerRadius(radius);

    const pieData = pie(data);

    svg
      .attr("width", width)
      .attr("height", height)
      .append("g")
      .attr("transform", `translate(${width / 2}, ${height / 2})`)
      .selectAll("path")
      .data(pieData)
      .enter()
      .append("path")
      .attr("d", arc)
      .attr("fill", (d, i) => color(i.toString()))
      .attr("stroke", "white")
      .attr("stroke-width", 1);
  }, [data]);

  return <svg ref={svgRef} />;
};

export default ArcChart;
