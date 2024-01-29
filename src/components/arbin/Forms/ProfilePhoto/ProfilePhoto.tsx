import { FormWrapper } from "../FormWrapper"


type ProfilePhotoData ={
    photo: string
}

type ProfilePhotoProps= ProfilePhotoData&{
    updateFields: (fields: Partial<ProfilePhotoData>) => void;
}
export function ProfilePhoto  ({photo, updateFields}: ProfilePhotoProps) {
    return(
<FormWrapper title="Foto del perfil">
    <label>Sacar foto del perfil del árbol</label><br />
    <input type="file" required  value={photo}  onChange={(e) => updateFields({ photo: e.target.value })}/>
</FormWrapper>
    )
}
