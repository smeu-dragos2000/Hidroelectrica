import style from './CalculOre.module.scss'
import { FC, useCallback, useMemo, useState } from "react";
import dayjs, { Dayjs } from 'dayjs';
import CalculOreForm from "./CalculOreForm";
import AddIcon from '@mui/icons-material/Add';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
// import Test from './Test';


const timeZero = dayjs().hour(0).minute(0).second(0).year(2000).month(1);

export type TimeFrame = {
  id: number;
  startTime: Dayjs;
  stopTime: Dayjs;
  intervalTime: "0h 0'";
  timeZero: Dayjs;
};


const initialTimeFramesState = [
  {
    id: 0,
    startTime: timeZero,
    stopTime: timeZero,
    intervalTime: "0h 0'",
    timeZero: timeZero
  },
];


const CalculOre: FC = () => {

  const [timeFrames, setTimeFrames] = useState<TimeFrame[]>(initialTimeFramesState as any);
  
  const addTimeFrame = useCallback(() => {
    setTimeFrames((prevState) => [
      ...prevState,
      {
        id: prevState[prevState.length - 1].id + 1,
        startTime: timeZero,
        stopTime: timeZero,
        intervalTime: "0h 0'",
        timeZero: timeZero
      },
    ]);
  }, []);

  const removeTimeFrame = useCallback(() => {
    setTimeFrames((prevState) =>
      prevState.length > 1
        ? prevState.slice(0, -1)
        : (initialTimeFramesState as any)
    );
  }, []);

  const addTimeStrings = (timeArray: string[]) => { 
    let totalHours = 0;
    let totalMinutes = 0;
 
    timeArray.forEach(time => { 
        const [hours, minutes] = time.split("h "); 
        totalHours += parseInt(hours);
        totalMinutes += parseInt(minutes);
    });
 
    totalHours += Math.floor(totalMinutes / 60);
    totalMinutes %= 60;
 
    return `${totalHours}h ${totalMinutes}'`;
  }

  const calculateTotal = useMemo(() => {
    const arrayOfIntervals = timeFrames.reduce((acc: string[], timeFrame) => { 
      if (timeFrame.intervalTime!== "0h 0'" ) {
        acc.push(timeFrame.intervalTime);
      }
      return acc;
    }, []);
    return arrayOfIntervals.length > 0 ? addTimeStrings(arrayOfIntervals) : 0
  },[timeFrames]);

  return (
      <div className={style.calculOre}>
        <div className={style.timeFrames}>
          {timeFrames &&
            timeFrames.map((timeFrame) => (
              <div className={style.timeFrame}>
                <CalculOreForm {...timeFrame} setTimeFrames={setTimeFrames} />
              </div>
            ))}
        </div>
        <div className={style.buttons}>
          <button className={style.addButton} onClick={addTimeFrame}>
            <AddIcon />
          </button>
          <button className={style.removeButton} onClick={removeTimeFrame}>
            <DeleteForeverIcon />
          </button>
        </div>
        <h2>
          Total Ore Funcționare: {calculateTotal}
        </h2>
        <br />
      </div>
  )
}

export default CalculOre