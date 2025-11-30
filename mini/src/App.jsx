// import React,{useEffect, useState} from 'react'
// import { getVersions, saveVersions } from './Api';
// import VersionItem from './Versions';
// import './App.css'


// function App() {
//   const [editText, setEditText] = useState("");
//   const [prevText , setPrevText] = useState("");
//   const [versions, setVersions] = useState([]);

//   useEffect(()=> {
//      loadVersions();
//   },[])

//   const loadVersions = async ()=> {
//     const data = await getVersions();
//     setVersions(data)
//   }

//   const handleSave = async()=> {
//     const Version = await saveVersions(prevText, editText);
//     setVersions((prev)=> [...prev, Version]);
//     setPrevText(editText);
//   }


//   return (
// <div>
//   <h1>Mini Audit Trail Generator</h1>
//   <h3>Content Editor</h3>
//   <textarea 
//   value={editText}
//   onChange={(e)=> setEditText(e.target.value)}
//   placeholder='Enter Text'

//   />
//   <button onClick={handleSave} >Save Version</button>
//   <h3>Version History</h3>
//    {versions.length === 0 && <p>No versions yet.</p>}

//   {
//     versions.map((v)=> {
//       <VersionItem key={v.id} v={v}/>
//     })
//   }
// </div>
//   )
// }

// export default App



import { useEffect, useState } from "react";
import { getVersions, saveVersion } from "./Api";
import VersionItem from "./Versions";

export default function App() {
  const [editorText, setEditorText] = useState("");
  const [prevText, setPrevText] = useState("");
  const [versions, setVersions] = useState([]);

  useEffect(() => {
    loadVersions();
  }, []);

  const loadVersions = async () => {
    const data = await getVersions();
    setVersions(data);
  };

  const handleSave = async () => {
    const version = await saveVersion(prevText, editorText);
    setVersions((prev) => [...prev, version]);
    setPrevText(editorText);
  };

  return (
    <div style={{ padding: 30, maxWidth: 700, margin: "0 auto", fontFamily: "sans-serif" }}>
      <h1>Mini Audit Trail Generator</h1>

      <h3>Content Editor</h3>
      <textarea
        value={editorText}
        onChange={(e) => setEditorText(e.target.value)}
        placeholder="Type something..."
        style={{
          width: "100%",
          minHeight: 150,
          fontSize: 16,
          padding: 10,
          marginBottom: 20
        }}
      />

      <button
        onClick={handleSave}
        style={{
          padding: "10px 20px",
          fontSize: 16,
          cursor: "pointer"
        }}
      >
        Save Version
      </button>

      <h3 style={{ marginTop: 40 }}>Version History</h3>
      {versions.length === 0 && <p>No versions yet.</p>}

      {versions.map(v => (
        <VersionItem key={v.id} v={v} />
      ))}
    </div>
  );
}
