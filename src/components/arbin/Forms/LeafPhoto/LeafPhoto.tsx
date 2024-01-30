import { FormWrapper } from "../FormWrapper";

type LeafPhotoData = {
  photoLeaflet: string;
  idTree: string;
};

type LeafPhotoProps = LeafPhotoData & {
  updateFields: (fields: Partial<LeafPhotoData>) => void;
};

export function LeafPhoto({
  photoLeaflet,
  updateFields,
  idTree,
}: LeafPhotoProps) {
  return (
    <FormWrapper title="Foto de la hoja">
      <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
        Sacar foto de la hoja para identificar
      </label>
      <br />
      <input
        className="block w-full mb-5 text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
        id="small_size"
        type="file"
        required
        value={photoLeaflet}
        onChange={(e) => updateFields({ photoLeaflet: e.target.value })}
      />{" "}
      <br />
      <br />
      <div className="flex items-center">
        <input
          checked
          id="default-radio-2"
          type="radio"
          value=""
          name="default-radio"
          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
          onChange={(e) => updateFields({ idTree: e.target.value })}
        />
        <label className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
          Jacarandá
        </label>
      </div>
      <div>
        <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg" alt="" />
    </div>

    <div className="flex items-center">
        <input
          checked
          id="default-radio-2"
          type="radio"
          value=""
          name="default-radio"
          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
          onChange={(e) => updateFields({ idTree: e.target.value })}
        />
        <label className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
          Tipa
        </label>
      </div>
      <div>
        <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg" alt="" />
    </div>

    </FormWrapper>
  );
}
