import style from './CalculOreForm.module.scss'
import { Dispatch, FC, SetStateAction, useState } from "react";
import dayjs, { Dayjs } from 'dayjs';
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import { TimeFrame } from "./CalculOre";

interface CalculOreFormProps {
  id: number;
  startTime: Dayjs;
  stopTime: Dayjs;
  intervalTime: string;
  timeZero: Dayjs
  setTimeFrames: Dispatch<SetStateAction<TimeFrame[]>>;
}

const CalculOreForm: FC<CalculOreFormProps> = ({
  id,
  startTime,
  stopTime,
  intervalTime,
  timeZero,
  setTimeFrames,
}) => {

  const indexForm: number = id + 1;
  
  const calculateTime = () => {
    const timeInSeconds = (stopTime.$d - startTime.$d) / 1000;
    const totalMinutes = timeInSeconds / 60;
    const minutes = totalMinutes % 60;
    const hours = Math.floor(totalMinutes / 60);
    const time = { hours: hours, minutes: minutes };
    const timeString = `${time.hours}h ${time.minutes}'`;

    console.log(stopTime.$d)
    
    setTimeFrames(
      (prevState) =>
        prevState.map((item) =>
          item.id === id ? { ...item, intervalTime: timeString } : item
        ) as TimeFrame[]
    );
  };

  return (
    <div className={style.formWrapper}>
      <h3 className={style.index}>{indexForm}.</h3>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DemoContainer components={["TimePicker", "TimePicker"]}>
          <TimePicker
            className={style.timePicker}
            label="Oră Pornire"
            ampm={false}
            value={startTime}
            onChange={(newStartTime) =>
              setTimeFrames(
                (prevState) =>
                  prevState.map((item) =>
                    item.id === id ? { ...item, startTime: newStartTime } : item
                  ) as TimeFrame[]
              )
            }
          />

          <TimePicker
            className={style.timePicker}
            label="Oră Oprire"
            ampm={false}
            value={stopTime}
            minTime={startTime}
            onChange={(newStartTime) =>
              setTimeFrames(
                (prevState) =>
                  prevState.map((item) =>
                    item.id === id ? { ...item, stopTime: newStartTime } : item
                  ) as TimeFrame[]
              )
            }
          />

          <button
            className={style.buttonCalculOre}
            onClick={calculateTime}
            disabled={stopTime==timeZero || startTime==timeZero}
          >
            Calculează
          </button>
        </DemoContainer>
      </LocalizationProvider>
      <h2 className={style.ore}>
        T<span>{indexForm}</span>: {intervalTime}
      </h2>
    </div>
  )
}

export default CalculOreForm