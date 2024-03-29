import React ,{useState,useEffect}from 'react'

function FComponent() {
    const [time, setTime] = useState(new Date().toString())
    const [message, setMessage] = useState("Functional component")

    useEffect(() => {
      console.log("Component Mounted or upadted")
      const interval = setInterval(showDate, 1000);
    
      return ()=> {
        console.log("clean of Interval")
        clearInterval(interval)
      }
    }, [time])
    

    const showDate = () => {
        setTime(new Date().toString());
    }

  return (
    <div>
        <div>{time}</div>
        <button onClick={showDate}>Show Date</button>
        <div>{message}</div>
        <button onClick={() => setMessage("change Functional Component")}>
            Change Message
        </button>
    </div>
  )
}

export default FComponent