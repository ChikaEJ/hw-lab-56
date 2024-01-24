import styles from "./RadioButtons.module.css";

interface IRadioButtonProps{
    options: {divideToAllOption: boolean, divideByPersonOption: boolean};
    radioDivideToAll: () => void;
    radioDivideByPerson: () => void;
}

const RadioButtons: React.FC<IRadioButtonProps> = ({options, radioDivideToAll, radioDivideByPerson }) => {
    return (
        <div className={styles.wraper}>
            <div className={styles.flexColumn}>
            <h3>Сумма заказа: </h3>
            <label className='label'> Поровну между всеми участниками. 
                <input type="radio" value="divide to all" checked={options.divideToAllOption} onChange={radioDivideToAll} />
            </label>  
            <label className='label'> Каждому иднивидуально: 
                <input type="radio" value="divide by persons" checked={options.divideByPersonOption} onChange={radioDivideByPerson} />
            </label>

        </div>
        </div>
    )
}

export default RadioButtons;