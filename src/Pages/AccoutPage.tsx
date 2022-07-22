import { ProfileCard } from "../Components/Card/ProfileCard"
import { DropDown } from "../Components/Navbar/DropDown"

export const AccountPage = (): JSX.Element => {
    return (
        <div>
            <DropDown></DropDown>
            <ProfileCard></ProfileCard>
        </div>
    )
}