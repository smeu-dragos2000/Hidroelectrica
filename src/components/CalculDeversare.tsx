import { SelectChangeEvent } from '@mui/material';
// import { Unstable_NumberInput as BaseNumberInput, NumberInputProps, numberInputClasses,} from '@mui/base/Unstable_NumberInput';
import style from'./CalculDeversare.module.scss'
import { useEffect, useState } from 'react';
import CalculDeversareTabel from './CalculDeversareTabel';
import CalculDeversareForm from './CalculDeversareForm';


export type DebiteProps = {
    debiteArray1: number[];
    debiteArray2: number[];
    debiteArray3: number[];
    debiteArray4: number[];
    clapetaDeschidereArray: number[];
    cotaArray: number[];
  };

// const initialDebiteProps = []

const CalculDeversare = () => {

    const debiteArray1: number[]  = [0, 0.7, 1.9, 3.5, 5.3, 7.4, 9.8, 12.3, 15, 17.9, 20.9, 24.2, 27.6, 31.1, 34.8, 38.5, 42.5, 46.5, 50.7, 54.9, 59.3];
    const debiteArray2: number[] = [];
    const debiteArray3: number[]  = [];
    const debiteArray4: number[]  = [];
    const debiteArrayDefault: number[]  = [];
    let clapetaDeschidereArray: number[] = [];
    let cotaArray: number[] = [];
    const cotaNNR = 335;
    

    const [cota, setCota] = useState < string >('335');
    const [debit1, setDebit1] = useState <string>('0');
    const [debit2, setDebit2] = useState <string>('0');
    const [debit3, setDebit3] = useState <string>('0');
    const [debit4, setDebit4] = useState <string>('0');

    const [deschidere1, setDeschidere1] = useState <number>(0);
    const [deschidere2, setDeschidere2] = useState <number>(0);
    const [deschidere3, setDeschidere3] = useState <number>(0);
    const [deschidere4, setDeschidere4] = useState <number>(0);

    const cotaDif = ((cotaNNR - Number(cota)));
    let debitTotal = Math.round((Number(debit1) + Number(debit2) + Number(debit3) + Number(debit4))*100/100)

    useEffect(()=> {
        for (let i=0; i<debiteArray1.length; i++) {
            if (debiteArray1[i] == Number(debit1) && Number(debit1) !=0) {
                setDeschidere1(Math.round((clapetaDeschidereArray[i] + cotaDif)*100)/100)
            }
        }
        for (let i=0; i<debiteArray1.length; i++) {
            if (debiteArray1[i] == Number(debit2) && Number(debit1) !=0) {
                setDeschidere2(Math.round((clapetaDeschidereArray[i] + cotaDif)*100)/100)
            }
        }
        for (let i=0; i<debiteArray1.length; i++) {
            if (debiteArray1[i] == Number(debit3) && Number(debit1) !=0) {
                setDeschidere3(Math.round((clapetaDeschidereArray[i] + cotaDif)*100)/100)
            }
        }
        for (let i=0; i<debiteArray1.length; i++) {
            if (debiteArray1[i] == Number(debit4) && Number(debit1) !=0) {
                setDeschidere4(Math.round((clapetaDeschidereArray[i] + cotaDif)*100)/100)
            }
        }
    }, [cota, debit1, debit2, debit3, debit4])

    // Populate Arrays
    for (let i:number=0; i<=20; i++){
        clapetaDeschidereArray.push(i/10)
    }
    for (let i:number=3350; i>=3330; i--){
        cotaArray.push(i/10)
    }
    for (let i=0; i<debiteArray1.length; i++){
        debiteArray2[i] = Math.round(debiteArray1[i]* 2 * 100) / 100
    }
    for (let i=0; i<debiteArray1.length; i++){
        debiteArray3[i] = Math.round(debiteArray1[i]* 3 * 100) / 100
    }
    for (let i=0; i<debiteArray1.length; i++){
        debiteArray4[i] = Math.round(debiteArray1[i]* 4 * 100) / 100
    }
    for (let i:number=5; i<=230; i= i+5){
        debiteArrayDefault.push(i)
    }


    const handleCota = (event: SelectChangeEvent) => {
        setCota(event.target.value as any)
    }
    const handleDebit1 = (event: SelectChangeEvent) => {
        setDebit1(event.target.value as any)
    }
    const handleDebit2 = (event: SelectChangeEvent) => {
        setDebit2(event.target.value as any)
    }
    const handleDebit3 = (event: SelectChangeEvent) => {
        setDebit3(event.target.value as any)
    }
    const handleDebit4 = (event: SelectChangeEvent) => {
        setDebit4(event.target.value as any)
    }

  return (
    <section className='container'>
        <h1>Tabel Deversări</h1>
        <div className={style.wrapper}>

            <CalculDeversareTabel 
                debiteArray1 = {debiteArray1}
                debiteArray2 = {debiteArray2}
                debiteArray3 = {debiteArray3}
                debiteArray4 = {debiteArray4}
                clapetaDeschidereArray = {clapetaDeschidereArray}
                cotaArray = {cotaArray}
                />

            <div className={style.formWrapper}>
                <h2>Cotă actuală</h2>
                <CalculDeversareForm
                    name={'Cotă'}
                    data={cota}
                    dataArray={cotaArray}
                    handleData={handleCota}
                />

                <h2>Debit dorit</h2>
                <div className={style.debit}>
                <CalculDeversareForm
                    name={'Clapeta 1'}
                    data={debit1}
                    dataArray={debiteArray1}
                    handleData={handleDebit1}
                />
                <CalculDeversareForm
                    name={'Clapeta 2'}
                    data={debit2}
                    dataArray={debiteArray1}
                    handleData={handleDebit2}
                />
                <CalculDeversareForm
                    name={'Clapeta 3'}
                    data={debit3}
                    dataArray={debiteArray1}
                    handleData={handleDebit3}
                />
                <CalculDeversareForm
                    name={'Clapeta 4'}
                    data={debit4}
                    dataArray={debiteArray1}
                    handleData={handleDebit4}
                />
                </div>
                {/* <button onClick={calculDeschidere}>Calculează</button> */}

                {/* Tabel Deversari Calculate */}
                <table className={style.tabelDeversareRezultat}>
                    <thead>
                        <th>Clapeta 1</th>
                        <th>Clapeta 2</th>
                        <th>Clapeta 3</th>
                        <th>Clapeta 4</th>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Deschidere: {deschidere1}</td>
                            <td>Deschidere: {deschidere2}</td>
                            <td>Deschidere: {deschidere3}</td>
                            <td>Deschidere: {deschidere4}</td>
                        </tr>
                        <tr>
                            <td>Q dev.: {debit1}</td>
                            <td>Q dev.: {debit2}</td>
                            <td>Q dev.: {debit3}</td>
                            <td>Q dev.: {debit4}</td>
                        </tr>
                        <tr>
                            <td colSpan={4}>Q dev. Total: {debitTotal}</td>
                        </tr>
                    </tbody>
                </table>

            </div>
        </div>
    </section>
    
  )
}

export default CalculDeversare


