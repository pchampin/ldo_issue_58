import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserSolidLdoProvider, useLdo, useResource } from '@ldo/solid-react';
import { BarShapeType } from './.ldo/bug.shapeTypes';

const DATA_URL= "http://localhost:3000/data.ttl";

function App() {
  return (
    <div className="App">
      <BrowserSolidLdoProvider>
        <SolidApp />
      </BrowserSolidLdoProvider>
    </div>
  );
}

function SolidApp() {
  const { dataset } = useLdo();
  const dataRes = useResource(DATA_URL);

  const bars = dataset.usingType(BarShapeType).matchSubject(
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type",
    "https://example.org/#Bar",
  );
  console.debug(bars.length, "bars");
  return <div style={{textAlign: "left"}}>
    <ul>
      <li><a href={DATA_URL}>{DATA_URL}</a> {dataRes.isFetched() ? "loaded." : "loading..."}</li>
      <li>found the following bars:<ul>
        { bars.map(b => (
          <li key={b['@id']}>{b['@id']} is linked to <b>{b.foo.label || "ERROR"}</b></li> ))}
      </ul></li>
    </ul>
  </div>;
}

export default App;
