import Header from "../components/header";
import Footer from "../components/footer";
import HomeBanner from "../components/banners/home_banner";
import ContactNav from "../components/contact-nav";
import Subscription from "../components/subscription";


export default function Home(){
    return(
        <>
                <Header/>
                <HomeBanner />
                <ContactNav />
                
                {/* home page body part */}
                

                <Subscription />
                <Footer />
        </>
    )
}