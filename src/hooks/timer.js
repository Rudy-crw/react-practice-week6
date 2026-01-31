
const useTimer = ()=>  
    const [timer, setTimer] = useState(new Date().toLocaleTimeString)

  useEffect(() => {
    const clearTimer = setInterval(() => {
      setTimer(new Date().toLocaleTimeString())
      console.log(111)
    }, 1000)
    return () => clearInterval(clearTimer)
  },[])