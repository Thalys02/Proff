import React, { SelectHTMLAttributes } from "react";

import './styles.css';

//herdando do SelectHtmlAttributes para pegar todos os atributos de um Select junto com spread operator(...)
interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement>{
    name:string;
    label:string;
    options:Array<{
        value:string;
        label:string;
    }>;
}
//compomente com propriedades tipadas utilizando interface.
const Select: React.FunctionComponent<SelectProps> = ({label,name,options,...rest}) => {
    return(
        <div className="select-block">
            <label htmlFor={name}>{label}</label>
            <select value="" id={name} {...rest} >
                <option value="" disabled hidden>Selecione um opção</option>
                {options.map(option =>{
                    return <option key={option.value} value={option.value}>{option.label}</option>
                })}
            </select>
        </div>
    );
};

export default Select;
