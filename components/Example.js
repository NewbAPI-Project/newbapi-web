import { useState, useEffect } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';


export default function Example() {
  const fetchAllUser = `  // JavaScript fetch() all users
  fetch('https://fake.newbapi.com/api/v1/users/')
    .then(response => response.json()) 
    .then(data => {
      console.log(data); 
  }).catch(error => {
    console.error(error);
  });`;
  const fetchAllUserOutput = `  // JavaScript fetch() all users
  [
    {
      "id": 1,
      "title": "Mr",
      "first_name": "Sayre",
      "last_name": "Wloch",
      "email": "swloch0@is.gd",
      "gender": "Male",
      "address": {
        "country": "Kosovo",
        "city": "Vitina",
        "street_name": "Green",
        "street_address": "7018 Northview Place"
      },
      "is_active": true
    },
    {
      "id": 2,
      "title": "Dr",
      "first_name": "Amelina",
      "last_name": "Trewhella",
      "email": "atrewhella1@live.com",
      "gender": "Female",
      "address": {
        "country": "Greece",
        "city": "Vokhaïkó",
        "street_name": "Rigney",
        "street_address": "0235 Paget Court"
      },
      "is_active": true
    },
    ...
    ...
    // 100 users
  ]`;
  const fetchSingle = `  // JavaScript fetch() single user
  fetch('https://fake.newbapi.com/api/v1/users/1')
    .then(response => response.json()) 
    .then(data => {
      console.log(data); 
  }).catch(error => {
    console.error(error);
  });`;

  const fetchSingleOutput = `  // JavaScript fetch() single user
  [
    {
      "id": 1,
      "title": "Mr",
      "first_name": "Sayre",
      "last_name": "Wloch",
      "email": "swloch0@is.gd",
      "gender": "Male",
      "address": {
        "country": "Kosovo",
        "city": "Vitina",
        "street_name": "Green",
        "street_address": "7018 Northview Place"
      },
      "is_active": true
    }
  ]`;

  const fetchPagination = `  // JavaScript fetch() Pagination
  fetch('https://fake.newbapi.com/api/v1/users/?skip=0&limit=10')
    .then(response => response.json()) 
    .then(data => {
      console.log(data); 
  }).catch(error => {
    console.error(error);
  });`;

  const fetchPaginationOutput = `  // JavaScript fetch() Pagination
  [
    {
      "id": 1,
      "title": "Mr",
      "first_name": "Sayre",
      "last_name": "Wloch",
      "email": "swloch0@is.gd",
      "gender": "Male",
      "address": {
        "country": "Kosovo",
        "city": "Vitina",
        "street_name": "Green",
        "street_address": "7018 Northview Place"
      },
      "is_active": true
    },
    {
      "id": 2,
      "title": "Dr",
      "first_name": "Amelina",
      "last_name": "Trewhella",
      "email": "atrewhella1@live.com",
      "gender": "Female",
      "address": {
        "country": "Greece",
        "city": "Vokhaïkó",
        "street_name": "Rigney",
        "street_address": "0235 Paget Court"
      },
      "is_active": true
    },
    ...
    ...
    // 10 users, page 0, 0 + n
  ]`;
  const [ style, setStyle ] = useState({})

  useEffect(() => {
    import('react-syntax-highlighter/dist/esm/styles/prism/okaidia')
    .then(mod => setStyle(mod.default));
  }, [])

  return (
    <>
      <h1 className="display-7 lh-1 mb-3 text-center">Example 1</h1>
      <div className='col-md-6 offset-md-3'>
        <p className="lead">Endpoint: <br /><code>https://fake.newbapi.com/api/v1/users/</code></p>    
        
        <SyntaxHighlighter language="js" style={style}>
          {fetchAllUser}
        </SyntaxHighlighter>
  
      </div>
      <div className='col-md-6 offset-md-3'>
        <p className="lead">Example Output</p>    
        
        <SyntaxHighlighter language="js" style={style}>
          {fetchAllUserOutput}
        </SyntaxHighlighter>
      </div>
      <h1 className="display-7 lh-1 my-5 text-center">Example 2</h1>
      <div className='col-md-6 offset-md-3'>
        <p className="lead">Endpoint <br/> <code>https://fake.newbapi.com/api/v1/users/?skip=0&limit=10</code></p>    
        
        <SyntaxHighlighter language="js" style={style}>
          {fetchPagination}
        </SyntaxHighlighter>

      </div>
      <div className='col-md-6 offset-md-3'>
        <p className="lead">Example Output</p>    
        
        <SyntaxHighlighter language="js" style={style}>
          {fetchPaginationOutput}
        </SyntaxHighlighter>
  
      </div>

      <h1 className="display-7 lh-1 my-5 text-center">Example 3</h1>

      <div className='col-md-6 offset-md-3'>
        <p className="lead">Endpoint <br/> <code>https://fake.newbapi.com/api/v1/users/1</code></p>        
        
        <SyntaxHighlighter language="js" style={style}>
          {fetchSingle}
        </SyntaxHighlighter>
  
      </div>
      <div className='col-md-6 offset-md-3'>
        <p className="lead">Example Output</p>    
        
        <SyntaxHighlighter language="js" style={style}>
          {fetchSingleOutput}
        </SyntaxHighlighter>
  
      </div>
      <p className="display-7 lh-1 my-5 text-center">Okay, that&apos;s it 🎉</p>
    </>

  );
}