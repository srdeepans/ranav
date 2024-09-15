import Header from "../components/header";
import Subscription from "../components/subscription";
import Footer from "../components/footer";

export default function NoPage() {
    return(
        <>
                <Header/>

                <div>
                    <h1>404 - Page Not Found</h1>
                    <p>The page you're looking for does not exist.</p>
                </div>

                <Subscription />
                <Footer />
        </>
    );
};
