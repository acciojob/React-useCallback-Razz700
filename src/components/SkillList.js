import React, { memo } from 'react'

const SkillList = (props) => {
  return (
    <div>
        <ul id='skill-list'>
            {props.list.map((item,idx)=>{
                return <li id={'skill-number-'+idx} onClick={()=>props.deletelist(item)} key={'skill-number-'+idx}>{item}</li>
            })}
        </ul>
    </div>
  )
}

export default memo(SkillList) 