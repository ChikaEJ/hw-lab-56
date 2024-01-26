import DivideToAllForm from "../../components/divideToAllForm/DivideToAllForm";
import RadioButtons from "../../components/radioButtons/RadioButtons";
import styles from "./OrderCountPage.module.css"
import DivideToEachPersonForm from "../../components/divideToEachPersonForm/DivideToEachPersonForm";
import { useId, useRef, useState } from "react";
import { IInputOnePersonProps } from "../../components/divideToEachPersonForm/inputOnePerson/InputOnePersonForm";

const OrderCountPage: React.FC = () => {
//Divide to all part
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
                setDivideToAllInputsValues(prevData => ({...prevData, perosns: value}))
                break;
            case "sumOfOrder":
                setDivideToAllInputsValues(prevData => ({...prevData, sumOfOrder: value}))
                break;
            case "tipsPercent":
                setDivideToAllInputsValues(prevData => ({...prevData, tipsPercent: value}))
                break;
            case "delivery":
                setDivideToAllInputsValues(prevData => ({...prevData, delivery: value}))
                break;
            default:
                break;
        }}
    const submitDivideToAllForm: React.FormEventHandler<HTMLFormElement> = (e) => {
        e.preventDefault();
        if(divideToAllInputsValues.sumOfOrder) setShowInfo("show");
    }
    const classList = [styles.mainBillingPage, styles.container].join(" ")

    //Divide by person part


    const [persons, setPersons] = useState([{id: 0, inputOnePersonValue: {client: "John", sum: 0}}])
    
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
                    divideToEachPersonFormSubmit={() => { } }
                    inputHandlerDTEFPersent={() => { } }
                    inputHandlerDTEFDelivery={() => { } }
                    persons={persons}
                    setPersons={setPersons}
                    />
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