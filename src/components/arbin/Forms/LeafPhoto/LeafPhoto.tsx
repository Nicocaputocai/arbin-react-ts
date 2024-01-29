import { FormWrapper } from "../FormWrapper"


type LeafPhotoData ={
    photoLeaflet: string
}

type LeafPhotoProps= LeafPhotoData&{
    updateFields: (fields: Partial<LeafPhotoData>) => void;
}

export function LeafPhoto  ({photoLeaflet, updateFields}: LeafPhotoProps) {
    return(
<FormWrapper title="Foto de la hoja">
    <label>Sacar foto de la hoja para identificar</label>
    <br />
    <input  type="file" required  value={photoLeaflet}  onChange={(e) => updateFields({ photoLeaflet: e.target.value })}/>
</FormWrapper>

    )
}
