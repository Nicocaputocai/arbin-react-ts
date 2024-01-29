import { FormWrapper } from "../FormWrapper"

type ubicationData ={ 
    ubication: string
}

type ubicationFormProps = ubicationData &{
    updateFields: (fields: Partial<ubicationData>) => void;
}
export function Ubication ({ubication, updateFields}:ubicationFormProps) {
    return(
    <FormWrapper title="Ubicación">
    <label>Ubicación</label>
    <input style={{color:'white'}} autoFocus required type="text" value={ubication}
    onChange={(e) => updateFields({ ubication: e.target.value })} />
    </FormWrapper>
    )
}
