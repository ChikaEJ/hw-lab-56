import DivideToAllForm from "../../components/divideToAllForm/DivideToAllForm";
import RadioButtons from "../../components/radioButtons/RadioButtons";
import styles from "./OrderCountPage.module.css"
import DivideToEachPersonForm from "../../components/divideToEachPersonForm/DivideToEachPersonForm";
import { useState } from "react";

const OrderCountPage: React.FC = () => {

    const [billingType, setBillingType]= useState({divideToAllOption: true, divideByPersonOption: false})
    const radioDivideToAll = () => {
        setBillingType({divideToAllOption: true, divideByPersonOption: false})
    }
    const radioDivideByPerson = () => {
        setBillingType({divideToAllOption: false, divideByPersonOption: true})
    }


    const classList = [styles.mainBillingPage, styles.container].join(" ")
    return (
        <div className={classList}>
            <RadioButtons options={billingType} radioDivideToAll={radioDivideToAll} radioDivideByPerson={radioDivideByPerson} />
            
                {billingType.divideToAllOption ?
                    < DivideToAllForm 
                    submitDivideToAllForm={()=> {}} 
                    inputPersonsHandler={()=> {}} 
                    inputSumOfOrderHandler={()=> {}} 
                    inputTipsPercentHandler={()=> {}} 
                    inputDeliveryHandler={()=> {}} 
                    divideToAllInputValue={{
                        perosns: 0,
                        sumOfOrder: 0,
                        tipsPercent: 0,
                        delivery: 0
                    }} />
                :
                   <DivideToEachPersonForm 
                    divideToEachPersonFormSubmit={()=> {}} 
                    inputHandlerDTEFPersent={()=> {}} 
                    inputHandlerDTEFDelivery={()=> {}} 
                    persons={[]} 
                    addPerson={()=> {}} />
                }
        </div>
        )
    }

export default OrderCountPage;