
import Clock from 'react-simple-clock'
import './ClockAnalog.scss'

const MyApp = () => <Clock live={true} hourMarkFormat="number" className="clock-analog" mode="dark" size={300}/>

export default MyApp