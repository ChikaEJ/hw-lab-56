import styles from "./DivideToEachPersonForm.module.css";
import ListOfPersonsWhoOrdered, { IListOfPersonsWhoOrderedProps } from "./listOfPersonsWhoOrdered/ListOfPersonsWhoOrdered";


interface IDivideToEachPersonFormProps extends IListOfPersonsWhoOrderedProps {
    divideToEachPersonFormSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
    inputChangeHandlerDTEF: (e: React.ChangeEvent<HTMLInputElement>) => void;
    tipAndDeliveryValue: {tip: string, delivery: string}
}

const DivideToEachPersonForm: React.FC<IDivideToEachPersonFormProps> = ({persons, setPersons, divideToEachPersonFormSubmit, inputChangeHandlerDTEF, tipAndDeliveryValue}) => {


    return(
        <div className={styles.container}>
            <ListOfPersonsWhoOrdered persons={persons} setPersons={setPersons} />
            <form className={styles.billingType} onSubmit={(e) => divideToEachPersonFormSubmit(e)}>
                <label className='label'>Процент чаевых: 
                    <input type="number" name="tip" value={tipAndDeliveryValue.tip} onChange={(e) => inputChangeHandlerDTEF(e)}/>
                </label>
                <label className='label'>Доставка: 
                    <input type="number" name="delivery" value={tipAndDeliveryValue.delivery} onChange={(e) => inputChangeHandlerDTEF(e)}/>
                </label>
                <button type="submit">Расчитать</button>
            </form>
        </div>
    )
}

export default DivideToEachPersonForm;