import { Divider } from "@mui/material";
import { ButtonComponent } from "../Button/ButtonComponent"

const plusLogo = require("../../Assets/black-plus.png");

export const AddressCard = (): JSX.Element => {
    return(
        <div id = "address-card">
            <h2>Alamat Saya</h2>
            <ButtonComponent id="tambah-alamat-baru" className="" handler={undefined as any} variant="contained"><Content></Content></ButtonComponent>
            <div id = "user-address-content">
                <Divider></Divider>
                <div className = "container-address-user">
                    <div className = "content-address">
                        <p>Nama Lengkap</p>
                        <p>BCC Soto Sate</p>
                    </div>
                    <div className="content-address">
                        <p>Telepon</p>
                        <p id = "phone-address-value">08565062108</p>
                    </div>
                    <div className="content-address" id = "address-card-container">
                        <p>Alamat</p>
                        <p id = "address-address-value">Jl. KertoRaharjo Dalam No 56, Lowokwaru, Malang, Jawa Timur, Indonesia AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA</p>
                    </div>
                    <div>
                        <p className = "one">1</p>
                    </div>
                </div>
                <Divider></Divider>
            </div>
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