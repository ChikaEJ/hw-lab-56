import InputOnePersonForm, { IInputOnePersonProps } from "../inputOnePerson/InputOnePersonForm";
import styles from "./ListOfPersonsWhoOrdered.module.css";
export interface IListOfPersonsWhoOrderedProps {
    persons: {
        id: number;
        inputOnePersonValue: {
            client: string;
            sum: number;
        };
    }[];
    setPersons: React.Dispatch<React.SetStateAction<{
        id: number;
        inputOnePersonValue: {
            client: string;
            sum: number;
        };
    }[]>>;
}

const ListOfPersonsWhoOrdered: React.FC<IListOfPersonsWhoOrderedProps> = ({persons, setPersons}) => {
const classList = [styles.billingType, styles.container].join(" ")


    const deleteFormHandler = (id: number) => {
        let copyPersons = persons.filter(person => person.id !== id);
        setPersons(copyPersons);
    }
    const inputOnePersonChangeHanlder = () => {

    }

    const addPerson = () => {
        setPersons((persons) => {
            return [...persons, {id: (persons[persons.length-1].id) + 1 , inputOnePersonValue: {client: '', sum: 0}}]
        })
    }
    
    return(
        <div className={classList} >
            {
                persons.map(person => {
                    return <InputOnePersonForm 
                    deleteFormHandler={deleteFormHandler} 
                    inputOnePersonChangeHanlder={inputOnePersonChangeHanlder}
                    inputOnePersonValue={person.inputOnePersonValue}
                    id={person.id} />
                })
            }
            <span>Добавить имя клиента: </span>
            <button onClick={addPerson}>+</button>
        </div>
    )
}

export default ListOfPersonsWhoOrdered;