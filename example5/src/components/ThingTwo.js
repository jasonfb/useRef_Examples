import React from 'react'

const ThingTwo = ({ref, concatinateThemTogether}) => {
  return (
    <>This is thing two
      <br />
      type something here:
      <br />
      <input
        onChange={concatinateThemTogether}
        ref={ref} />
    </>
  )
}

export default ThingTwo