import styles from "./RadioButtons.module.css";

interface IRadioButtonProps{
    divideToAll: string;
    checked: boolean;
    forEachPerson: string;
}

const RadioButtons: React.FC<IRadioButtonProps> = ({divideToAll, checked, forEachPerson}) => {
    return (
        <div>
            <h3>Сумма заказа считаеться: </h3>
            <label> Поровну между всеми участниками. 
                <input type="radio" value={divideToAll} checked={checked} />
            </label>  
            <label> Каждому иднивидуально: 
                <input type="radio" value={forEachPerson} checked={checked} />
            </label>

        </div>
    )
}

export default RadioButtons;