import DivideToAllForm from "../../components/divideToAllForm/DivideToAllForm";
import RadioButtons from "../../components/radioButtons/RadioButtons";
import styles from "./OrderCountPage.module.css"
import DivideToEachPersonForm from "../../components/divideToEachPersonForm/DivideToEachPersonForm";
import { useState } from "react";

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

    const inputDivideToAllHandler: React.ChangeEventHandler<HTMLInputElement> = (e) => {
        const { name, value } = e.target;
        switch (name) {
            case "persons":
                setDivideToAllInputsValues(prevData => ({ ...prevData, perosns: value }))
                break;
            case "sumOfOrder":
                setDivideToAllInputsValues(prevData => ({ ...prevData, sumOfOrder: value }))
                break;
            case "tipsPercent":
                setDivideToAllInputsValues(prevData => ({ ...prevData, tipsPercent: value }))
                break;
            case "delivery":
                setDivideToAllInputsValues(prevData => ({ ...prevData, delivery: value }))
                break;
            default:
                break;
        }
    }
    const submitDivideToAllForm: React.FormEventHandler<HTMLFormElement> = (e) => {
        e.preventDefault();
        if (divideToAllInputsValues.sumOfOrder) setShowInfo("show");
    }
    const classList = [styles.mainBillingPage, styles.container].join(" ")

    //Divide by person part


    const [persons, setPersons] = useState([{ id: 0, inputOnePersonValue: { client: '', sum: '' } }])
    const [tipAndDeliveryValue, setTipAndDeliveryValue] = useState({ tip: '', delivery: '' })

    const inputChangeHandlerDTEF: React.ChangeEventHandler<HTMLInputElement> = (e) => {
        const { name, value } = e.target;
        if (name === "tip") {
            setTipAndDeliveryValue((prevValue) => {
                return { ...prevValue, tip: value }
            })
        } else {
            setTipAndDeliveryValue((prevValue) => {
                return { ...prevValue, delivery: value }
            })
        }
    }
    const divideToEachPersonFormSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
        e.preventDefault();
        if (persons[0].inputOnePersonValue.sum) setShowInfo("show")
    }
    //Total count and show
    const radioButtonToggle = () => {
        let copyBillingType = billingType;
        copyBillingType = { divideToAllOption: !copyBillingType.divideToAllOption, divideByPersonOption: !copyBillingType.divideByPersonOption }
        setBillingType(copyBillingType);
        setShowInfo('hide');
        setPersons([{ id: 0, inputOnePersonValue: { client: "", sum: '' } }]);
        setTipAndDeliveryValue({ tip: '', delivery: '' });
        setDivideToAllInputsValues({ perosns: '', sumOfOrder: '', tipsPercent: '', delivery: '' })
    }
    const sumOfclientsOrder = (): number => {
        const sum = persons.reduce((acc, currentItem) => {
            return acc += +currentItem.inputOnePersonValue.sum;
        }, 0)
        return sum + +tipAndDeliveryValue.delivery + (sum/100 * +tipAndDeliveryValue.tip )
    }
    return (
        <div className={classList}>
            <RadioButtons options={billingType} radioButtonToggle={radioButtonToggle} />

            {billingType.divideToAllOption ?
                <>
                    < DivideToAllForm
                        submitDivideToAllForm={submitDivideToAllForm}
                        inputDivideToAllHandler={inputDivideToAllHandler}
                        divideToAllInputValue={divideToAllInputsValues} />
                    <div className={styles[showInfo]}>
                        <h3>Общая сумма: {divideToAllInputsValues.sumOfOrder}</h3>
                        <h3>Количество человек: {divideToAllInputsValues.perosns}</h3>
                        <h3>Каждый платит по: {(+divideToAllInputsValues.sumOfOrder + +divideToAllInputsValues.delivery + (+divideToAllInputsValues.sumOfOrder / 100 * +divideToAllInputsValues.tipsPercent)) / +divideToAllInputsValues.perosns}</h3>
                    </div>
                </>
                :
                <>
                    <DivideToEachPersonForm
                        divideToEachPersonFormSubmit={divideToEachPersonFormSubmit}
                        inputChangeHandlerDTEF={inputChangeHandlerDTEF}
                        tipAndDeliveryValue={tipAndDeliveryValue}
                        persons={persons}
                        setPersons={setPersons}
                    />
                    <div className={styles[showInfo]}>
                        <h3>Общая сумма: {sumOfclientsOrder()}</h3>
                        {
                            persons.map(person => {
                                return <h3>{person.inputOnePersonValue.client} = {person.inputOnePersonValue.sum}</h3>
                            })
                        }
                    </div>
                </>
            }

        </div>
    )
}

export default OrderCountPage;