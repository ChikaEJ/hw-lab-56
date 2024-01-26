import InputOnePersonForm from "../inputOnePerson/InputOnePersonForm";
import styles from "./ListOfPersonsWhoOrdered.module.css";
export interface IListOfPersonsWhoOrderedProps {
    persons: {
        id: number;
        inputOnePersonValue: {
            client: string;
            sum: string;
        };
    }[];
    setPersons: React.Dispatch<React.SetStateAction<{
        id: number;
        inputOnePersonValue: {
            client: string;
            sum: string;
        };
    }[]>>;
}
let getId = 0;
const ListOfPersonsWhoOrdered: React.FC<IListOfPersonsWhoOrderedProps> = ({ persons, setPersons }) => {
    const classList = [styles.billingType, styles.container].join(" ")


    const deleteFormHandler = (id: number) => {
        let copyPersons = persons.filter(person => person.id !== id);
        setPersons(copyPersons);
    }
    const inputOnePersonChangeHanlder = (e: React.ChangeEvent<HTMLInputElement>, id: number) => {
        const { name, value } = e.target;
        if (name == "clientName") {
            setPersons(prevPersons => {
                return prevPersons.map(peroson => {
                    if (peroson.id == id) {
                        return { ...peroson, inputOnePersonValue: { ...peroson.inputOnePersonValue, client: value } }
                    }else{
                       return peroson;
                    }
                })
            })
        }else{
            setPersons(prevPersons => {
                return prevPersons.map(peroson => {
                    if (peroson.id == id) {
                        return { ...peroson, inputOnePersonValue: { ...peroson.inputOnePersonValue, sum: value } }
                    }else{
                       return peroson;
                    }
                })
            })
        }
    }

    const addPerson = () => {
        getId++
        setPersons((persons) => {
            return [...persons, { id: getId, inputOnePersonValue: { client: '', sum: '' } }]
        })
    }

    return (
        <div className={classList} >
            {
                persons.map(person => {
                    return <InputOnePersonForm
                        deleteFormHandler={() => deleteFormHandler(person.id)}
                        inputOnePersonChangeHanlder={(e) => inputOnePersonChangeHanlder(e, person.id)}
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