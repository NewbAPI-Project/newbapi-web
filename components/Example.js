import { useState, useEffect } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
// import { dark } from 'react-syntax-highlighter/dist/esm/styles/prism';


export default function Example() {
  const code = `console.log('Hello World');`

  const [ style, setStyle ] = useState({})

  useEffect(() => {
    import('react-syntax-highlighter/dist/esm/styles/prism/okaidia')
    .then(mod => setStyle(mod.default));
  }, [])

  return (
    <div className="container px-4 py-5">
        <h1 className="display-7 fw-bold lh-1 mb-3 text-center">Example</h1>
        <p className="lead">sda</p>
                
        <SyntaxHighlighter language="javascript" style={style}>
          {code}
        </SyntaxHighlighter>

        <div className="d-grid gap-2 d-md-flex justify-content-md-start">
          <button type="button" className="btn btn-primary btn-lg px-4 me-md-2">Run</button>
          <button type="button" className="btn btn-outline-secondary btn-lg px-4">Default</button>
        </div>
    </div>
  );
}