import InputOnePersonForm, { IInputOnePersonProps } from "../inputOnePerson/InputOnePersonForm";
import styles from "./DivideToEachPersonForm.module.css";
interface IDivideToEachPersonProps {
    persons: IInputOnePersonProps[];
}

const DivideToEachPersonForm: React.FC<IDivideToEachPersonProps> = ({persons}) => {


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

export default DivideToEachPersonForm;