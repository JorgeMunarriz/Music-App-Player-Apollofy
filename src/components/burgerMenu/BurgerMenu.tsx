import { IoEllipsisVerticalSharp } from "react-icons/io5"

export const BurgerMenu = ({onClick}) => {

  return (
    <button onClick={onClick}>
        <IoEllipsisVerticalSharp />
    </button>
  )
}