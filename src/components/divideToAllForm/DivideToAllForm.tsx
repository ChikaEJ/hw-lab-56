import styles from "./DivideToAllForm.module.css";
interface IDivideToAllFormProps {
    submitDivideToAllForm: (e: React.FormEvent<HTMLFormElement>) => void;
    inputDivideToAllHandler: (e: React.ChangeEvent<HTMLInputElement>) => void;
    divideToAllInputValue: {
        perosns: string, 
        sumOfOrder: string, 
        tipsPercent: string, 
        delivery: string
    };
}

const DivideToAllForm: React.FC<IDivideToAllFormProps> = (
    { 
        submitDivideToAllForm, 
        inputDivideToAllHandler, 
        divideToAllInputValue 
    }) => {

        const containerLabalClass = ['label', styles.billingType].join(' ');
    return (
        <div className={styles.container} >
            <form className={styles.billingType} onSubmit={(e) => submitDivideToAllForm(e)}>
                <label className={containerLabalClass}>Человек:
                    <input type="number" name="persons" onChange={(e) => inputDivideToAllHandler(e)} value={divideToAllInputValue.perosns} />
                    
                </label>чел.
                <label className={containerLabalClass} >Сумма заказа:
                    <input type="number" name="sumOfOrder" onChange={(e) => inputDivideToAllHandler(e)} value={divideToAllInputValue.sumOfOrder} />
                    
                </label>тенге
                <label className={containerLabalClass}>Процент чаевых:
                    <input type="number" name="tipsPercent" onChange={(e) => inputDivideToAllHandler(e)} value={divideToAllInputValue.tipsPercent} />
                    
                </label>%
                <label className={containerLabalClass}>Доставка:
                    <input type="number" name="delivery" onChange={(e) => inputDivideToAllHandler(e)} value={divideToAllInputValue.delivery} />
                    
                </label>тенге

                <button type="submit" > Рассчитать</button>
            </form>
        </div>
    )
}


export default DivideToAllForm;