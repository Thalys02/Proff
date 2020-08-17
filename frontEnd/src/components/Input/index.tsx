import React, { InputHTMLAttributes } from "react";

import './styles.css';

//herdando do InputHtmlAttributes para pegar todos os atributos de um input junto com spread operator(...)
interface InputProps extends InputHTMLAttributes<HTMLInputElement>{
    name:string;
    label:string;

}
//compomente com propriedades tipadas utilizando interface.
const Input: React.FunctionComponent<InputProps> = ({label,name,...rest}) => {
    return(
        <div className="input-block">
            <label htmlFor={name}>{label}</label>
            <input type="text" id={name} {...rest} />
        </div>
    );
};

export default Input;
