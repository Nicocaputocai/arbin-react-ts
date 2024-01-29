import { FormWrapper } from "../FormWrapper"

type AddressData={
    Address: string,
    NeightboardHood: string
}
type AddressFormProps = AddressData&{
    updateFields: (fields: Partial<AddressData >) => void;
}

export function Address ({Address, NeightboardHood,updateFields}:AddressFormProps){
return(
    <FormWrapper title="Dirección">
        <label>Dirección </label>
        <input autoFocus required type="text" value={Address}
        onChange={(e) => updateFields({ Address: e.target.value })}
            />
        <label>Barrio </label>
        <input autoFocus required type="text" value={NeightboardHood}
        onChange={(e) => updateFields({ NeightboardHood: e.target.value })}
            />
    </FormWrapper>
)
}
