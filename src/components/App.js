<p>Now I can render any React component on any DOM node I want using ReactDOM.render</p>
import React, { useCallback, useState } from 'react'
import UseCallbackComp from './UseCallbackComp';
import SkillList from './SkillList';

const App = () => {
   const [list,setlist]=useState(['HTML','CSS','Javascript','React']);
   const [input,setinput]=useState('');
   const handleclick=useCallback((e,val)=>{
    e.preventDefault();
console.log('hi',val);
setlist(list=>[...list,val]);
setinput('');
   },[]);
const deletelist=useCallback((listname)=>{
    console.log('hi',listname);
   const newlist=list.filter((item)=>listname!=item);
    console.log(newlist);
    setlist(newlist);
},[list]);
  return (
    <div>
        <h1 id='heading'>use Callback Hook</h1>
        <UseCallbackComp input={input} setinput={setinput} handleclick={handleclick} />
        <SkillList list={list} deletelist={deletelist}  />
    </div>
  )
}

export default App
