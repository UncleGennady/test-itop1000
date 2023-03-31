import React, {useState} from 'react';
import {useGetAllCurrencyQuery, useLazyGetCurrencyQuery} from "../../store/currencyApi";

import './styles.scss'
import {getDate, rounded} from "../../utils";
import ConverterItem from "../converter-item";
const Converter = () => {
    const [firstInput, setFirstInput] = useState('')
    const [secondInput, setSecondInput] = useState('')
    const [firstSelect, setFirstSelect] = useState({valcode:'', rate: null})
    const [secondSelect, setSecondSelect] = useState({valcode:'', rate: null})


    const currentDate = getDate()

    const{data, isLoading} = useGetAllCurrencyQuery(currentDate)
    const [fetchCurrency] = useLazyGetCurrencyQuery()



    const handleChangeInput = (setCurrentInput, setNextInput, currentRate, nextRate) => (target)=>{
        setCurrentInput(()=> target.value)
        !!target.value ? setNextInput(()=> rounded(+target.value*(currentRate/nextRate), 2)): setNextInput(()=>'')
    }



    const handleChangeSelect =(currentSelect,  setCurrentSelect, nextSelect, setNextSelect )=> async (target) =>{
        const {value} = target
        const newCurrentSelect = {
            valcode:value,
            rate: null
        };
        if(value==='UAH'){
            newCurrentSelect.rate = 1;
        }else{
            const {data} = await fetchCurrency({currentDate, valcode:value})
            newCurrentSelect.rate = data[0].rate
        }

        if(value === nextSelect.valcode){
            setNextSelect({...currentSelect})
            setCurrentSelect(()=> newCurrentSelect)
            setFirstInput(()=>secondInput)
            setSecondInput(()=>firstInput)
        }else{
            setCurrentSelect(()=> newCurrentSelect)
            setFirstInput(()=>'')
            setSecondInput(()=>'')
        }
    }
    return (
        <div className='converter'>
            {isLoading ? <div className='converter__item'>Loading...</div> :
            <>
                <ConverterItem data={data} currentSelect={firstSelect} nextSelect={secondSelect} inputState={firstInput}  handleChangeInput={handleChangeInput(setFirstInput, setSecondInput, firstSelect.rate, secondSelect.rate)} handleChangeSelect={handleChangeSelect(firstSelect, setFirstSelect, secondSelect, setSecondSelect)} />
                <ConverterItem data={data} currentSelect={secondSelect} nextSelect={firstSelect} inputState={secondInput}  handleChangeInput={handleChangeInput(setSecondInput, setFirstInput, secondSelect.rate, firstSelect.rate)} handleChangeSelect={handleChangeSelect(secondSelect, setSecondSelect, firstSelect, setFirstSelect)} />
            </>
            }
        </div>
    );
};

export default Converter;