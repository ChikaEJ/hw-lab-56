import InputOnePersonForm, { IInputOnePersonProps } from "../inputOnePerson/InputOnePersonForm";
import styles from "./DivideToEachPersonForm.module.css";
interface IListOfPersonsWhoOrderedProps {
    persons: IInputOnePersonProps[];
}

const ListOfPersonsWhoOrdered: React.FC<IListOfPersonsWhoOrderedProps> = ({persons}) => {


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
        </div>
    )
}

export default ListOfPersonsWhoOrdered;