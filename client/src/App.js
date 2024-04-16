import { FormEvent, useState } from "react"
import { AccountForm } from "./FormSteps/AccountForm"
import { AddressForm } from "./FormSteps/AddressForm"
import { useMultistepForm } from "./hooks/useMultiStepForm"
import { UserForm } from "./FormSteps/UserForm"
import axios from 'axios';
import "./App.css"
import { jsPDF } from "jspdf";

const backend = "http://localhost:5000/api"

function App() {
  const [data, setData] = useState({ gender: 'Male' })
  function updateFields(fields) {
    setData(prev => {
      return { ...prev, ...fields }
    })
  }

  const doc = new jsPDF();

  doc.text("Hello world!", 10, 10);
  doc.save("a4.pdf");


  const { steps, currentStepIndex, step, isFirstStep, isLastStep, back, next } =
    useMultistepForm([
      <UserForm {...data} updateFields={updateFields} />,
      <AddressForm {...data} updateFields={updateFields} />,
      <AccountForm {...data} updateFields={updateFields} />,
    ])

  function onSubmit(e) {
    e.preventDefault()
    if (!isLastStep) return next()

    axios.post(`${backend}/userData`, { ...data })
      .then(function (response) {
        console.log(response);
        alert("Successful Account Creation")
        console.log("Success")
      })
      .catch(function (error) {
        console.log(error);
        alert("Account Creation Failed")
      })


    console.log(data)
  }

  return (
    <div className="form-container">
      <form onSubmit={onSubmit}>
        <div style={{ position: "absolute", top: ".5rem", right: ".5rem" }}>
          {currentStepIndex + 1} / {steps.length}
        </div>
        {step}
        <div
          style={{
            marginTop: "1rem",
            display: "flex",
            gap: ".5rem",
            justifyContent: "flex-end",
          }}
        >
          {!isFirstStep && (
            <button type="button" onClick={back}>
              Back
            </button>
          )}
          <button type="submit">{isLastStep ? "Finish" : "Next"}</button>
        </div>
      </form>
    </div>
  )
}

export default App