interface IDropdownButtonProps {
  label: string
  value: any
  updateValue: (event: string) => void
}

export default function DropdownButton(props: IDropdownButtonProps) {
  return <>
    <label className="mr-1 text-sm sm:text-base">
      {props.label}
    </label>
    <div className="relative inline-flex self-center">
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" className="absolute top-0 right-0 p-1 m-1 text-white rounded pointer-events-none bg-blue-600/50" viewBox="0 0 38 22"><path fill="#fff" fillRule="nonzero" d="M19 21.29.615 2.907 3.443.077l15.558 15.557L34.556.077l2.829 2.829z"/></svg>
      <select
        defaultValue={props.value}
        name={props.label}
        onChange={(e) => props.updateValue(e.target.value)}
        className="w-20 pl-5 pr-10 font-bold text-gray-600 bg-white border-2 rounded appearance-none border-blue-600/50 text-md hover:border-blue-600/60 focus:outline-none">
        {
          Array.from(Array(9)).map(
            (_, i) =>
              i >= 1 &&
              <option key={i} value={ i?.toString() }>
                { i?.toString() }
              </option>
          )
        }
      </select>
    </div>
  </>
}