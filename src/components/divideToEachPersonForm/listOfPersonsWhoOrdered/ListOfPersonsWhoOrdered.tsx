import InputOnePersonForm, { IInputOnePersonProps } from "../inputOnePerson/InputOnePersonForm";
import styles from "./DivideToEachPersonForm.module.css";
export interface IListOfPersonsWhoOrderedProps {
    persons: IInputOnePersonProps[];
    addPerson: () => void;
}

const ListOfPersonsWhoOrdered: React.FC<IListOfPersonsWhoOrderedProps> = ({persons, addPerson}) => {


    return(
        <div>
            {
                persons.map(person => {
                    return <InputOnePersonForm 
                    deletePersonHandler={person.deletePersonHandler} 
                    inputOnePersonNameHanlder={person.inputOnePersonNameHanlder}
                    inputOnePersonSumHanlder={person.inputOnePersonSumHanlder}
                    id={person.id} />
                })
            }
            <button onClick={addPerson}>+</button>
        </div>
    )
}

export default ListOfPersonsWhoOrdered;