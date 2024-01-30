import { FormWrapper } from "../FormWrapper";

type ProfilePhotoData = {
  photo: string;
};

type ProfilePhotoProps = ProfilePhotoData & {
  updateFields: (fields: Partial<ProfilePhotoData>) => void;
};
export function ProfilePhoto({ photo, updateFields }: ProfilePhotoProps) {
  return (
    <FormWrapper title="Foto del perfil">
      <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
        Sacar foto del perfil del árbol
      </label> <br />
      <input
        className="block w-full mb-5 text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
        id="small_size"
        type="file"
        required
        value={photo}
        onChange={(e) => updateFields({ photo: e.target.value })}
      />
    </FormWrapper>
  );
}
