import React from 'react';
import SankeyChart from './components/SankeyChart';
import { sampleData } from './data/sampleData';

function App() {
  return (
    <div>
      <h1>Sankey Chart Example</h1>
      <SankeyChart data={sampleData} width={800} height={600} />
    </div>
  );
}

export default App;