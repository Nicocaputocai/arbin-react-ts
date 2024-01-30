import { FormEvent, useState } from "react";
import Address from "../Forms/Address"
import LeafPhoto from "../Forms/LeafPhoto"
import ProfilePhoto from "../Forms/ProfilePhoto"
import Status from "../Forms/Status"
import Ubication from "../Forms/Ubication"
import { useMultiStepForm } from "../Forms/UseMultiStepForm";

type FormData ={
  Address: string,
    NeightboardHood: string,
    photoLeaflet: string,
    idTree: string,
    photo: string,
    status: string,
    fallingDanger: string,
    ubication: string
}

const INITIAL_DATA: FormData = {
  Address: "",
  NeightboardHood: "",
  photoLeaflet: "",
  idTree: "",
  photo: "",
  status: "",
  fallingDanger: "",
  ubication: "",
}


export function IaForm () {
  const [data, setData] = useState(INITIAL_DATA);
  function updateFields(fields: Partial<FormData>) {
    setData(prev=>{
      return{... prev, ...fields}
    })
  }
  const { steps, CurrentStepIndex, step, isFirstStep, isLastStep, back, next } =
  useMultiStepForm([
      <Address {...data} updateFields={updateFields} />,
      <Ubication {...data} updateFields={updateFields} />,
      <LeafPhoto {...data} updateFields={updateFields} />,
      <ProfilePhoto {...data} updateFields={updateFields} />,
      <Status {...data} updateFields={updateFields} />,

    ])
    function onSubmit(e: FormEvent) {
      e.preventDefault()
      console.log(e);
      
      if (!isLastStep) return next()

      
      alert("Árbol censado con éxito")
    }
  return (
    <div
      style={{
        position: "relative",
        background: "white",
        border: "1px solid black",
        padding: "2rem",
        margin: "1rem",
        borderRadius: ".5rem",
        fontFamily: "Arial",
      }}
    >
      <form onSubmit={onSubmit}>
        <div style={{ position: "absolute", top: ".5rem", right: ".5rem" }}>
          {CurrentStepIndex + 1} / {steps.length}
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
              Anterior
            </button>
          )}
            <button type="button" onClick={next}>
            {isLastStep ? "Finalizar" : "Siguiente"}
          </button>
        </div>
      </form>
    </div>



  )
}
