import { useState, useEffect } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';


export default function Example() {
  const code = `  // JavaScript fetch()
  fetch('https://example.com/api/data')
    .then(response => response.json()) 
    .then(data => {
      console.log(data); 
  }).catch(error => {
    console.error(error);
  });`;
  // const progLangList = [
  //   'cURL',
  //   'Python (Requests)',
  //   'JavaScript (Fetch)',
  //   'JavaScript (Axios)',
  //   'Ruby'
  // ]


  // console.log(myJson.examples[0])
  const [ style, setStyle ] = useState({})

  useEffect(() => {
    import('react-syntax-highlighter/dist/esm/styles/prism/okaidia')
    .then(mod => setStyle(mod.default));
  }, [])

  return (
    <>
      <h1 className="display-7 lh-1 mb-3 text-center">Example</h1>
      <div className='col-md-6 offset-md-3'>
        <p className="lead">100 Fake user data</p>    
        
        <SyntaxHighlighter language="js" style={style}>
          {code}
        </SyntaxHighlighter>
  
        <div className="d-grid gap-2 d-md-flex justify-content-md-start">
          <button type="button" className="btn btn-primary btn-sm px-4 me-md-2">Run</button>
        </div>
      </div>
    </>

  );
}