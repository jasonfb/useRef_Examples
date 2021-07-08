import React from 'react'

const ThingTwo = ({myRefB, concatinateThemTogether}) => {
  return (
    <>This is thing two
      <br />
      type something here:
      <br />
      <input
        onChange={concatinateThemTogether}
        ref={myRefB} />
    </>
  )
}

export default ThingTwo