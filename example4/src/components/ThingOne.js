import React, {useState} from 'react'
import ThingTwo from '../components/ThingTwo'
const ThingOne = (props) => {
  // create refs here.
  const myRefA = React.createRef()
  const myRefB = React.createRef()

  const [concatText, setConcatText] = useState("")

  const concatinateThemTogether = (event ) => {// don't use event
    const new_concat_text = (myRefA.current ? myRefA.current.value : " ") +
      (myRefB.current ? myRefB.current.value : "")
    console.log("concatinateThemTogether was called; new text is ", new_concat_text)
    setConcatText(new_concat_text);
  }

  return (
    <>this is thing one
      <br />

      <input ref={myRefA}
             onChange={concatinateThemTogether}/>
      <br />
      <ThingTwo
        concatinateThemTogether={concatinateThemTogether}
        myRefB={myRefB}  />
      <br />
      the two things together are:
      <br />
      {concatText}
    </>
  )
}
export default ThingOne