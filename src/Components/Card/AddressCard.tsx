import { ButtonComponent } from "../Button/ButtonComponent"

const plusLogo = require("../../Assets/black-plus.png");

export const AddressCard = (): JSX.Element => {
    return(
        <div id = "address-card">
            <h2>Alamat Saya</h2>
            <ButtonComponent id="tambah-alamat-baru" className="" handler={undefined as any} variant="contained"><Content></Content></ButtonComponent>
        </div>
    )
}

const Content = (): JSX.Element => {
    return (
        <div id = "tombol-tambah-alamat-content">
            <div id = "plus-image">
                <img src = {plusLogo} alt="plus"></img>
            </div>
            <p id = "tambah-alamat-baru-text">Tambah Alamat Baru</p>
        </div>
    )
}