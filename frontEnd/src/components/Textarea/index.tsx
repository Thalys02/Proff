import React, { TextareaHTMLAttributes } from 'react'
import './styles.css';

//herdando do TextareaHtmlAttributes para pegar todos os atributos de um Textarea junto com spread operator(...)
interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement>{
    name:string;
    label:string;

}
//compomente com propriedades tipadas utilizando interface.
const Textarea: React.FunctionComponent<TextareaProps> = ({label,name,...rest}) => {
    return(
        <div className="textarea-block">
            <label htmlFor={name}>{label}</label>
            <textarea  id={name} {...rest} />
        </div>
    );
};

export default Textarea;
