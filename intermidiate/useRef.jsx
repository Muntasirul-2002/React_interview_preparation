import React, { useEffect } from 'react'

const useRef = () => {
    const inputRef = useRef(null)

    useEffect(()=>{
        //focus the input when the component mounts
        inputRef.current.focus()
    },[]) // empty dependency array means it runs only once after the initial render

  return (
    <div>
        <input type="text" ref={inputRef} placeholder='type here...'  />
    </div>
  )
}

export default useRef