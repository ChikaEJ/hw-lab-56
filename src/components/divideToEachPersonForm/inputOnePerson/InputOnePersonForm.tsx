import styles from "./InputOnePersonForm.module.css";

export interface IInputOnePersonProps {
    deleteFormHandler: (id: number) => void;
    inputOnePersonChangeHanlder: (e: React.ChangeEvent<HTMLInputElement>) => void;
    inputOnePersonValue: {client: string, sum: number};
    id: number;
}

const InputOnePersonForm: React.FC<IInputOnePersonProps> = ({ deleteFormHandler, inputOnePersonChangeHanlder, id, inputOnePersonValue }) => {
    return (
        <div>
            <div>
                    <input type="text" name="clientName" onChange={(e) => inputOnePersonChangeHanlder(e)} value={inputOnePersonValue.client}/>
                    <input type="number" name="clientSum" onChange={(e) => inputOnePersonChangeHanlder(e)} value={inputOnePersonValue.sum} />
                    <span> Тенге </span>
                    <button onClick={() => deleteFormHandler(id)}>Delete</button>
            </div>
        </div>
    )
}

export default InputOnePersonForm;