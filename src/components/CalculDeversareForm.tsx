import { Dispatch, FC, SetStateAction, useState } from "react";
import { FormControl, Select, InputLabel, MenuItem, SelectChangeEvent } from '@mui/material';
import style from './CalculDeversareForm.module.scss'

interface DataFormProps {
    name: string;
    data: string;
    dataArray: number[];
    handleData: Dispatch<SetStateAction<any>>;

  }
  

const CalculDeversareForm: FC<DataFormProps> = ({
    name,
    data,
    dataArray,
    handleData

}) => {
  return (
    <div>
         {/* --- Cota Amonte --- */}
         <FormControl className={style.formControl}>
            <InputLabel id="demo-simple-select-label1">{name}</InputLabel>
            <Select
                labelId="demo-simple-select-label1"
                id="demo-simple-select"
                value={data}
                label={name}
                onChange={handleData}
            >
                {dataArray.map(x => <MenuItem className={style.cell} value={x} key={dataArray.indexOf(x)}>{x}</MenuItem>)}
            </Select>
        </FormControl>
    </div>
  )
}

export default CalculDeversareForm
