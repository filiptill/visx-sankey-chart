
# React Sankey Chart

A customizable Sankey chart component built with **React**, **TypeScript**, **D3**, and **Visx**. This project showcases how to create a flexible, interactive Sankey diagram for visualizing flow data. 

## Features

- **Customizable**: Easily configure nodes, links, and styles to fit your use case.
- **Interactive**: Hover over nodes or links to display detailed information.
- **Responsive**: Automatically adjusts the chart size based on the screen dimensions.
- **Built with Modern Tools**: Powered by React and TypeScript, leveraging D3's powerful layout engine and Visx's flexible rendering capabilities.

## Demo

Check out the live demo [here](https://visx-sankey-chart.vercel.app/) to see the Sankey chart in action.

## Table of Contents

- [Getting Started](#getting-started)
- [Installation](#installation)
- [Usage](#usage)
  - [Props](#props)
  - [Customization](#customization)
- [Sample Data](#sample-data)
- [Contributing](#contributing)
- [License](#license)

## Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

Make sure you have **Node.js** and **npm** (or **yarn**) installed on your system. You can check the versions by running:

```bash
node -v
npm -v
```

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/react-sankey-chart.git
   ```

2. Navigate to the project directory:

   ```bash
   cd react-sankey-chart
   ```

3. Install the project dependencies:

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   npm start
   ```

This will open the project in your browser at `http://localhost:3000`.

## Usage

The `SankeyChart` component accepts customizable data and rendering options. Below is an example of how to use it in your project.

### Basic Example

```tsx
import React from 'react';
import SankeyChart from './components/SankeyChart';
import { sampleData } from './data/sampleData';

const App: React.FC = () => {
  return (
    <div>
      <h1>React Sankey Chart</h1>
      <SankeyChart data={sampleData} width={800} height={600} />
    </div>
  );
};

export default App;
```

### Props

The `SankeyChart` component takes the following props:

| Prop    | Type               | Description                                      |
|---------|--------------------|--------------------------------------------------|
| `data`  | `SankeyGraph`      | The data for the nodes and links in the Sankey diagram. |
| `width` | `number`           | The width of the SVG canvas.                     |
| `height`| `number`           | The height of the SVG canvas.                    |

### Customization

You can customize the chart’s appearance by modifying the `fill`, `stroke`, and other SVG attributes for nodes and links. For example:

```tsx
<SankeyChart
  data={sampleData}
  width={800}
  height={600}
  nodeColor="blue"
  linkColor="gray"
/>
```

You can further enhance the chart with tooltips, transitions, and more advanced D3 configurations.

## Sample Data

Here’s an example of the data structure required by the Sankey chart:

```typescript
export const sampleData = {
  nodes: [
    { name: 'Source A' },
    { name: 'Source B' },
    { name: 'Target A' },
    { name: 'Target B' }
  ],
  links: [
    { source: 0, target: 2, value: 10 },
    { source: 1, target: 3, value: 5 },
    { source: 0, target: 3, value: 7 }
  ]
};
```

### Data Structure

- **nodes**: An array of objects where each object represents a node (e.g., a source or target).
- **links**: An array of objects where each object represents a link between two nodes. The `source` and `target` fields reference indices in the `nodes` array, while `value` represents the magnitude of the flow.

## Contributing

We welcome contributions from the community. If you want to contribute:

1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Submit a pull request with a detailed description of your changes.

### Setting Up the Dev Environment

1. Fork and clone the repository.
2. Install dependencies using `npm install`.
3. Make your changes in a new branch.
4. Test your changes thoroughly before submitting a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](./LICENSE) file for details.
