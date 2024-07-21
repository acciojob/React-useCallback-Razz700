import React, { memo, useState } from 'react'

const UseCallbackComp = (props) => {
 
    const onchange=(e)=>{
     const val=e.target.value;
         props.setinput(val);
    }
  return (
    <div>
        <form>
            <input value={props.input} onChange={onchange} id='skill-input' type='text' placeholder='Enter a skill' required />
            <button onClick={(e)=>{props.handleclick(e,props.input)}} id='skill-add-btn'>Add Skill</button>
        </form>
    </div>
  )
}

export default memo(UseCallbackComp)