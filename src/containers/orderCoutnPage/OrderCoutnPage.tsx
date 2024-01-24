import DivideToAllForm from "../../components/divideToAllForm/DivideToAllForm";
import RadioButtons from "../../components/radioButtons/RadioButtons";
import styles from "./OrderCountPage.module.css"
import DivideToEachPersonForm from "../../components/divideToEachPersonForm/DivideToEachPersonForm";
import { useRef, useState } from "react";

const OrderCountPage: React.FC = () => {

    const [billingType, setBillingType] = useState({ divideToAllOption: true, divideByPersonOption: false });
    const [divideToAllInputsValues, setDivideToAllInputsValues] = useState({
        perosns: '',
        sumOfOrder: '',
        tipsPercent: '',
        delivery: ''
    });
    const [showInfo, setShowInfo] = useState('hide')

    const radioButtonToggle = () => {
        let copyBillingType = billingType;
        copyBillingType = { divideToAllOption: !copyBillingType.divideToAllOption, divideByPersonOption: !copyBillingType.divideByPersonOption }
        setBillingType(copyBillingType)
    }

    const inputDivideToAllHandler: React.ChangeEventHandler<HTMLInputElement> = (e) => {
        const { name, value } = e.target;
        switch (name) {
            case "persons":
                setDivideToAllInputsValues(prevData => ({
                    ...prevData, perosns: value
                }))
                break;
            case "sumOfOrder":
                setDivideToAllInputsValues(prevData => ({
                    ...prevData, sumOfOrder: value
                }))
                break;
            case "tipsPercent":
                setDivideToAllInputsValues(prevData => ({
                    ...prevData, tipsPercent: value
                }))
                break;
            case "delivery":
                setDivideToAllInputsValues(prevData => ({
                    ...prevData, delivery: value
                }))
                break;

            default:
                break;
        }
    }

    const submitDivideToAllForm: React.FormEventHandler<HTMLFormElement> = (e) => {
        setShowInfo("show");
        e.preventDefault();
    }


    const classList = [styles.mainBillingPage, styles.container].join(" ")
    return (
        <div className={classList}>
            <RadioButtons options={billingType} radioButtonToggle={radioButtonToggle} />

            {billingType.divideToAllOption ?
                < DivideToAllForm
                    submitDivideToAllForm={submitDivideToAllForm}
                    inputDivideToAllHandler={inputDivideToAllHandler}
                    divideToAllInputValue={divideToAllInputsValues} />
                :
                <DivideToEachPersonForm
                    divideToEachPersonFormSubmit={() => { }}
                    inputHandlerDTEFPersent={() => { }}
                    inputHandlerDTEFDelivery={() => { }}
                    persons={[]}
                    addPerson={() => { }} />
            }
            <div className={styles[showInfo]}>
                <h3>Общая сумма: {divideToAllInputsValues.sumOfOrder}</h3>
                <h3>Количество человек: {divideToAllInputsValues.perosns}</h3>
                <h3>Каждый платит по: {(+divideToAllInputsValues.sumOfOrder + +divideToAllInputsValues.delivery + (+divideToAllInputsValues.sumOfOrder / 100 * +divideToAllInputsValues.tipsPercent)) / +divideToAllInputsValues.perosns}</h3>
            </div>
        </div>
    )
}

export default OrderCountPage;