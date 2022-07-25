import { AddressCard } from "../../Components/Card/AddressCard"
import { DropDown } from "../../Components/Navbar/DropDown"

export const MyAddressPage = (): JSX.Element => {
    return(
        <div>
            <DropDown></DropDown>
            <AddressCard></AddressCard>
        </div>
    )
}