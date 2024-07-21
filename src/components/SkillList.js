import React, { memo } from 'react'

const SkillList = (props) => {
  return (
    <div>
        <ul>
            {props.list.map((item,idx)=>{
                return <li onClick={()=>props.deletelist(item)} key={'skill-number-'+idx}>{item}</li>
            })}
        </ul>
    </div>
  )
}

export default memo(SkillList) 