import React from 'react'

const ThingOne = () => {
  const myRef = React.createRef()
  const handleButton = (event) => {
    if(myRef.current) {
      if (myRef.current.value === "") {
        alert(`The ref is empty string`)
      }
      else {
        alert(`The ref is ${myRef.current.value}`)
      }
    }
  }
  return (<>
      <input ref={myRef} />
      <input type={"submit"} onClick={handleButton} />
    </>
  )
}

export default ThingOne