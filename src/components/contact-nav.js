const phone = "tel:+91826662666";
const whatsapp = "https://wa.me/+91826662666";
const chat = "https://wa.me/+91826662666";
const enquire = "https://wa.me/+91826662666";

export default function ContactNav(){
    return (
        <>
        <div className="row">
            <div className="col-md-3"></div>
            <div className="col-md-6">
                <div className="card">
                    <ul className="bg-light contact-nav justify-content-evenly">
                        <li><a href={phone} >
                            Call  <i class="bi bi-telephone"></i>
                            </a>
                        </li>
                        <li>
                            <a href={whatsapp} target="_blank">WhatsApp  <i class="bi bi-whatsapp"></i>
                            </a>
                        </li>
                        <li>
                            <a href={chat} >Chat  <i class="bi bi-wechat"></i>
                            </a>
                        </li>
                        <li>
                            <a href={enquire} >Enquire  <i class="bi bi-send"></i>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="col-md-3"></div>
        </div>
        
        </>
    )
}