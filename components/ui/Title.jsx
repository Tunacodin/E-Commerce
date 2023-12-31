import React from 'react'

function Title({children, addClass}) {
  return (
    <div className={`${addClass} font-dancing`}>{children}</div>
  )
}

export default Title