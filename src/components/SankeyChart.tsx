import React from 'react';
import { sankey, SankeyGraph, SankeyNode, SankeyLink } from 'd3-sankey';
import { Group } from '@visx/group';
import { LinkHorizontal } from '@visx/shape';

interface SankeyChartProps {
  data: SankeyGraph<any, any>;
  width: number;
  height: number;
}

interface SankeyNodeExtended extends SankeyNode<{}, {}> {
    x0: number;
    x1: number;
    y0: number;
    y1: number;
  }
  
  interface SankeyLinkExtended extends SankeyLink<{}, {}> {
    width: number;
  }

const SankeyChart: React.FC<SankeyChartProps> = ({ data, width, height }) => {
    const { nodes, links } = sankey<SankeyNodeExtended, SankeyLinkExtended>()
        .nodeWidth(30)
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
        strokeWidth={1}
    />
    ))}

    // Rendering the links
    {links.map((link, i) => (
        <LinkHorizontal
            key={`link-${i}`}
            data={{
            source: { x: (link.source as SankeyNodeExtended).x1, y: ((link.source as SankeyNodeExtended).y0 + (link.source as SankeyNodeExtended).y1) / 2 },
            target: { x: (link.target as SankeyNodeExtended).x0, y: ((link.target as SankeyNodeExtended).y0 + (link.target as SankeyNodeExtended).y1) / 2 },
            }}
            stroke="gray"
            strokeWidth={Math.max(0.5, link.width)}
            fill="none"
        />
        ))}
      </Group>
    </svg>
  );
};

export default SankeyChart;