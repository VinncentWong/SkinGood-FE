const visaLogo = require("../../Assets/image_30.png");
const masterCardLogo = require("../../Assets/image_31.png");
const bankLogo = require("../../Assets/image_32.png");
const ovoLogo = require("../../Assets/image_33.png");
const gopayLogo = require("../../Assets/image_34.png");
const shopeepayLogo = require("../../Assets/image_46.png");
const danaLogo = require("../../Assets/image_47.png");
const jntLogo = require("../../Assets/image_48.png");
const jneLogo = require("../../Assets/image_49.png");
const sicepatLogo = require("../../Assets/image_50.png");
const idexpressLogo = require("../../Assets/image_51.png");
const gosendLogo = require("../../Assets/image_52.png");
const posLogo = require("../../Assets/image_53.png");

export const InformationComponent = (): JSX.Element => {
    return(
        <div>
            <div className = "information">
                <h3 className="information-text">Information</h3>
                <div className="sub-information">
                    <p>About Us</p>
                    <p>Affiliate with Us</p>
                    <p>Contact Us</p>
                    <p>FAQ(Frequently Asked Question)</p>
                    <p>Help Center</p>
                    <p>Privary Policy</p>
                    <p>Terms & Conditions</p>
                </div>
                <h3 className="payment-text">Payment Options</h3>
                <div className="payment-images">
                    <div className="logo-1">
                        <img src={visaLogo} alt="logo" className="payment-logo"></img>
                        <img src={masterCardLogo} alt="logo" className="payment-logo"></img>
                    </div>
                    <div className="logo-2">
                        <img src={bankLogo} alt="logo" className="payment-logo"></img>
                        <img src={ovoLogo} alt="logo" className="payment-logo"></img>
                    </div>
                    <div className="logo-4">
                        <img src={gopayLogo} alt="logo" className="payment-logo" id = "gopay"></img>
                    </div>
                    <div className="logo-3">
                        <img src={shopeepayLogo} alt="logo" className="payment-logo"></img>
                        <img src={danaLogo} alt="logo" className="payment-logo"></img>
                    </div>
                </div>
                <h3 className = "shipment-text">Shipment</h3>
                <div className = "shipment-images">
                    <div className="shipment-1">
                        <img src={jntLogo}alt="logo"></img>
                        <img src={jneLogo}alt="logo"></img>
                    </div>
                    <div className="shipment-2">
                        <img src={sicepatLogo} alt="logo"></img>
                        <img src={idexpressLogo} alt="logo"></img>
                    </div>
                    <div className="shipment-3">
                        <img src={gosendLogo} alt="logo"></img>
                        <img src={posLogo} alt="logo"></img>
                    </div>
                </div>
                <h3 className="customer-care-text">Customer Care</h3>
                <div className="detail-customer-care-info">
                    <h3>Email</h3>
                    <p>cs@skingood.com</p>
                    <h3>Whatsapp</h3>
                    <p>085802984481</p>
                </div>
            </div>
        </div>
    )
}