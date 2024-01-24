import styles from "./RadioButtons.module.css";

interface IRadioButtonProps{
    options: {divideToAllOption: boolean, divideByPersonOption: boolean};
    radioButtonToggle: () => void;
}

const RadioButtons: React.FC<IRadioButtonProps> = ({options, radioButtonToggle }) => {
    return (
        <div className={styles.wraper}>
            <div className={styles.flexColumn}>
            <h3>Сумма заказа: </h3>
            <label className='label'> Поровну между всеми участниками. 
                <input type="radio" value="divide to all" checked={options.divideToAllOption} onChange={radioButtonToggle} />
            </label>  
            <label className='label'> Каждому иднивидуально: 
                <input type="radio" value="divide by persons" checked={options.divideByPersonOption} onChange={radioButtonToggle} />
            </label>

        </div>
        </div>
    )
}

export default RadioButtons;