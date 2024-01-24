import styles from "./DivideToEachPersonForm.module.css";
import ListOfPersonsWhoOrdered, { IListOfPersonsWhoOrderedProps } from "./listOfPersonsWhoOrdered/ListOfPersonsWhoOrdered";


interface IDivideToEachPersonFormProps extends IListOfPersonsWhoOrderedProps {
    divideToEachPersonFormSubmit: (e: React.MouseEvent<HTMLFormElement>) => void;
    inputHandlerDTEFPersent: (e: React.ChangeEvent<HTMLInputElement>) => void;
    inputHandlerDTEFDelivery: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const DivideToEachPersonForm: React.FC<IDivideToEachPersonFormProps> = ({persons, addPerson, divideToEachPersonFormSubmit, inputHandlerDTEFPersent, inputHandlerDTEFDelivery}) => {
    return(
        <div className={styles.container}>
            <ListOfPersonsWhoOrdered persons={persons} addPerson={addPerson}/>
            <form className={styles.billingType} onClick={(e) => divideToEachPersonFormSubmit(e)}>
                <label className='label'>Процент чаевых: 
                    <input type="number" onChange={(e) => inputHandlerDTEFPersent(e)}/>
                </label>
                <label className='label'>Доставка: 
                    <input type="number" onChange={(e) => inputHandlerDTEFDelivery(e)}/>
                </label>
                <button type="submit">Расчитать</button>
            </form>
        </div>
    )
}

export default DivideToEachPersonForm;