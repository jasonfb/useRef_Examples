import React, {useRef} from 'react'

const ThingOne = (props) => {
  const myRef = useRef()

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

  return(
    <>
      <input ref={myRef} />
      <input type={"submit"} onClick={handleButton} />
    </>
  )
}

export default ThingOne

