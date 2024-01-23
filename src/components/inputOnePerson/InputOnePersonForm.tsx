import styles from "./InputOnePersonForm.module.css";

interface IInputOnePersonProps {
    deletePersonHandler: (id: number) => void;
    inputOnePersonNameHanlder: (e: React.ChangeEvent<HTMLInputElement>) => void;
    inputOnePersonSumHanlder: (e: React.ChangeEvent<HTMLInputElement>) => void;
    id: number;


}

const InputOnePersonForm: React.FC<IInputOnePersonProps> = ({deletePersonHandler, inputOnePersonNameHanlder, inputOnePersonSumHanlder, id}) => {
    return (
        <div>
            <div>
                    <input type="text" onChange={(e) => inputOnePersonNameHanlder(e)}/>
                    <input type="number" onChange={(e) => inputOnePersonSumHanlder(e)} />
                    <span> Тенге</span>
                    <button onClick={() => deletePersonHandler(id)} >X</button>
            </div>
        </div>
    )
}

export default InputOnePersonForm;