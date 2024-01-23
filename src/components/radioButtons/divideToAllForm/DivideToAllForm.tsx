import styles from "./DivideToAll.module.css";
interface IDivideToAllFormProps {
    submitDivideToAllForm: (e: React.FormEvent<HTMLFormElement>) => void;
    inputPersonsHandler: (e: React.ChangeEvent<HTMLInputElement>) => void;
    inputSumOfOrderHandler: (e: React.ChangeEvent<HTMLInputElement>) => void;
    inputTipsPercentHandler: (e: React.ChangeEvent<HTMLInputElement>) => void;
    inputDeliveryHandler: (e: React.ChangeEvent<HTMLInputElement>) => void;
    divideToAllInputValue: {
        perosns: number, 
        sumOfOrder: number, 
        tipsPercent: number, 
        delivery: number
    };
}

const DivideToAllForm: React.FC<IDivideToAllFormProps> = (
    { 
        submitDivideToAllForm, 
        inputPersonsHandler, 
        inputSumOfOrderHandler, 
        inputTipsPercentHandler, 
        inputDeliveryHandler, 
        divideToAllInputValue 
    }) => {
    return (
        <div>
            <form onSubmit={(e) => submitDivideToAllForm(e)}>
                <label>Человек:
                    <input type="number" onChange={(e) => inputPersonsHandler(e)} value={divideToAllInputValue.perosns} />
                </label>
                <label>Сумма заказа:
                    <input type="number" onChange={(e) => inputSumOfOrderHandler(e)} value={divideToAllInputValue.sumOfOrder} />
                </label>
                <label>Процент чаевых:
                    <input type="number" onChange={(e) => inputTipsPercentHandler(e)} value={divideToAllInputValue.tipsPercent} />
                </label>
                <label>Доставка:
                    <input type="number" onChange={(e) => inputDeliveryHandler(e)} value={divideToAllInputValue.delivery} />
                </label>

                <input type="button" value="Расчитать" />
            </form>
        </div>
    )
}


export default DivideToAllForm;