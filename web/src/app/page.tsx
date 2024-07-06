"use client"

import { useState } from "react";

export default function Home() {

  const [name, setName] = useState('');

  return (
    <div className="container">
       <input type="text" value={name} onChange={(e)=>{setName(e.target.value)}} />
       <div>My Name is {name==''?'-':name}</div>
    </div>
  );
}
