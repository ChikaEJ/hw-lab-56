import InputOnePersonForm, { IInputOnePersonProps } from "../inputOnePerson/InputOnePersonForm";
import styles from "./ListOfPersonsWhoOrdered.module.css";
export interface IListOfPersonsWhoOrderedProps {
    persons: IInputOnePersonProps[];
    addPerson: () => void;
}

const ListOfPersonsWhoOrdered: React.FC<IListOfPersonsWhoOrderedProps> = ({persons, addPerson}) => {
const classList = [styles.billingType, styles.container].join(" ")

    return(
        <div className={classList} >
            {
                persons.map(person => {
                    return <InputOnePersonForm 
                    deletePersonHandler={person.deletePersonHandler} 
                    inputOnePersonNameHanlder={person.inputOnePersonNameHanlder}
                    inputOnePersonSumHanlder={person.inputOnePersonSumHanlder}
                    id={person.id} />
                })
            }
            <span>Добавить имя клиента: </span>
            <button onClick={addPerson}>+</button>
        </div>
    )
}

export default ListOfPersonsWhoOrdered;