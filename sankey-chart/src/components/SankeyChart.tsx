import React from 'react';
import { sankey, SankeyGraph, SankeyNode, SankeyLink } from 'd3-sankey';
import { Group } from '@visx/group';
import { LinkHorizontal } from '@visx/shape';

interface SankeyChartProps {
  data: SankeyGraph<any, any>;
  width: number;
  height: number;
}

const SankeyChart: React.FC<SankeyChartProps> = ({ data, width, height }) => {
  const { nodes, links } = sankey<any, any>()
    .nodeWidth(15)
    .nodePadding(10)
    .extent([[1, 1], [width - 1, height - 1]])(data);

  return (
    <svg width={width} height={height}>
      <Group>
        {nodes.map((node, i) => (
          <rect
            key={`node-${i}`}
            x={node.x0}
            y={node.y0}
            width={node.x1 - node.x0}
            height={node.y1 - node.y0}
            fill="blue"
            stroke="black"
          />
        ))}

        {links.map((link, i) => (
          <LinkHorizontal
            key={`link-${i}`}
            data={link}
            strokeWidth={Math.max(1, link.width)}
            stroke="gray"
            fill="none"
          />
        ))}
      </Group>
    </svg>
  );
};

export default SankeyChart;