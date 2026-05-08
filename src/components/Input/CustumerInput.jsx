//tipo de input
//valor do input

//Radio inputs
//text
//password
import {InputStyle} from './styles.js'

function CustumerInput({...inputProps}){



    return (
        <>
            {/* Passando um por um */}
            {/* <InputStyle type={inputProps.type}></InputStyle> */}


            {/* Eu posso fazer assim que passa tudo automaticamente ou eu posso indicar proprieadade por propriedade */}
            <InputStyle {...inputProps} ></InputStyle>

        </>
    )
}
export default CustumerInput;