import React from 'react'
import { useId } from 'react';

function InputBox({
    label,
    amount,
    onAmountChange,
    onCurrencyChange,
    currencyOptions = [],
    selectCurrency = "usd",
    amountDisable = false,
    currencyDisable = false,
    className = "",
}) {
   const amountInputId=useId()

    return (
        //this syntax is used for taking input to show its own css 
        <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}> 
            <div className="w-1/2">
                <label htmlFor={amountInputId} className="text-black/40 mb-2 inline-block">
                    {label}
                </label>
                <input
                    id={amountInputId}
                    className="outline-none w-full bg-transparent py-1.5"
                    type="number"
                    placeholder="Amount"
                    disabled={amountDisable} //this will help in checking whether amount is there or not
                    value={amount}  //this is the amount which we are getting
                    onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))} //these clickable func takes callback func so these func always changes these result into str, so jekhane dorkar str theke num a change korar so kore debo amra aar dut baar check korchi kano tomar sometimes func ta fire korteh bhule jaye tai fired kora state ta k o pass koriye dewa hoye
                   />
            </div>
            <div className="w-1/2 flex flex-wrap justify-end text-right">
                <p className="text-black/40 mb-2 w-full">Currency Type</p>
                <select
                    className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
                    value={selectCurrency}
                    onChange={(e)=>{onCurrencyChange && onCurrencyChange(e.target.value)}}
                    disabled={currencyDisable}
                >
                   {//now loop koriye amra ja ja currency pacchi api theke seta k insert koriye debo
                   currencyOptions.map((currency)=>(  //eram type of looping dekhe niyo
                     <option value={currency}>
                           {currency}
                     </option>
                     ))
                   }
                </select>
            </div>
        </div>
    );
}

export default InputBox;