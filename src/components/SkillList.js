import React, { memo } from 'react'

const SkillList = (props) => {
  return (
  
        <ul id='skill-list'>
            {props.list.map((item,idx)=>{
                return <li id={'skill-number-'+idx} onClick={()=>props.deletelist(item)} key={'skill-number-'+idx}>{item}</li>
            })}
        </ul>
   
  )
}

export default memo(SkillList) 