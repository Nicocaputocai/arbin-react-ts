import { FormWrapper } from "../FormWrapper"

type StatusData ={
    status: string,
    fallingDanger: string
}
type StatusFormProps = StatusData&{
    updateFields: (fields: Partial<StatusData>) => void;
}

export function Status({status, fallingDanger, updateFields}: StatusFormProps){
    return(
<FormWrapper title="Estado">
    <label >Estado del 1 al 5</label>
    <select className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" value={status} onChange={(e) => updateFields({ status: e.target.value })}>
    <option value={1}>1</option>
    <option value={2}>2</option>
    <option value={3}>3</option>
    <option value={4}>4</option>
    <option value={5}>5</option>
    </select>
    <label >¿Peligro de caida?</label>
    <select className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" value={fallingDanger} onChange={(e) => updateFields({ fallingDanger: e.target.value })}>
    <option value={1}>Si</option>
    <option value={0}>No</option>
    </select>

</FormWrapper>
    )
}
