import React, { useState } from "react";
import CodeMirror from "@uiw/react-codemirror";
import { javascript } from "@codemirror/lang-javascript";
import CodePreview from "@uiw/react-code-preview";

import {  } from './styles';

export function Editor() {
  const [code, setCode] = useState<string>();

  const initialCode = 
`import { useState } from 'react';
import ReactDOM from 'react-dom/client';

function App() {

  const [ couter, setCouter ] = useState(0)

  return <button onClick={() => setCouter(oldState => oldState + 1)}>Couter {couter}</button>
}

ReactDOM.createRoot(_mount_).render(<App />);`;

  const onChange = React.useCallback((value: string) => {
    setCode(value);
    console.log("value:", value);
  }, []);

  return (
    <div>
      <CodeMirror
        value={initialCode}
        height="200px"
        extensions={[javascript({ jsx: true })]}
        theme="dark"
        onChange={onChange}
      />
      <CodePreview 
        code={code} 
        dependencies={{ React, useState }} 
        theme="dark"
      />
    </div>
  );
}
