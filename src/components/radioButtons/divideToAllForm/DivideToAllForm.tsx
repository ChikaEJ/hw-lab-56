import styles from "./DivideToAll.module.css";
interface IDivideToAllFormProps {
    submitDivideToAllForm: () => void;
}

const DivideToAllForm: React.FC<IDivideToAllFormProps> = ({ submitDivideToAllForm, }) => {
    return (
        <div>
            <form onSubmit={submitDivideToAllForm}>
                <label>Человек:
                    <input type="number" />
                </label>
                <label>Сумма заказа:
                    <input type="number" />
                </label>
                <label>Процент чаевых:
                    <input type="number" />
                </label>
                <label>Доставка:
                    <input type="number" />
                </label>

                <input type="button" value="Расчитать" />
            </form>
        </div>
    )
}


export default DivideToAllForm;