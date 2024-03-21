import React from 'react'

const Comanbtn = (props) => {
  return (
    <div>
      <button onClick={props.fun} className={`${props.padding} comanBtn position-relative  text-nowrap `}>
        {props.text}
      </button>
    </div>
  )
}

export default Comanbtn
