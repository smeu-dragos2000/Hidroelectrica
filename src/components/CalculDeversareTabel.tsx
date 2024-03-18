import { FC } from "react"
import style from './CalculDeversareTabel.module.scss'

interface DebiteProps {
    debiteArray1: number[];
    debiteArray2: number[];
    debiteArray3: number[];
    debiteArray4: number[];
    clapetaDeschidereArray: number[];
    cotaArray: number[];
  }


const CalculDeversareTabel: FC<DebiteProps> = ({
    debiteArray1,
    debiteArray2,
    debiteArray3,
    debiteArray4,
    clapetaDeschidereArray,
    cotaArray
}) => {
  return (
    <div>
        <h2>Tabel Deversări la NNR</h2>
        <table>
            <tr>
            <th>Clapetă</th>
            <th>Cotă</th>
            <th>1 Clapetă</th>
            <th>2 Clapete</th>
            <th>3 Clapete</th>
            <th>4 Clapete</th>
            </tr>
            <td className={style.cell}>{clapetaDeschidereArray.map(x => <tr className='cell' key={clapetaDeschidereArray.indexOf(x)}>{x}</tr>)}</td>
            <td className={style.cell}>{cotaArray.map(x => <tr className='cell' key={cotaArray.indexOf(x)}>{x}</tr>)}</td>
            <td className={style.cell}>{debiteArray1.map(x => <tr className='cell' key={debiteArray1.indexOf(x)}>{x}</tr>)}</td>
            <td className={style.cell}>{debiteArray2.map(x => <tr className='cell' key={debiteArray2.indexOf(x)}>{x}</tr>)}</td>
            <td className={style.cell}>{debiteArray3.map(x => <tr className='cell' key={debiteArray3.indexOf(x)}>{x}</tr>)}</td>
            <td className={style.cell}>{debiteArray4.map(x => <tr className='cell' key={debiteArray4.indexOf(x)}>{x}</tr>)}</td>
    
  
        </table>
    </div>
  )
}

export default CalculDeversareTabel