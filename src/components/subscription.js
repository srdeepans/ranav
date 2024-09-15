export default function Subscription(){
    return(
        <>
        <div className="bg-gray text-center py-5 mb-5"> 
            <h1 className="yello-text">
                Subscribe Now For Getting<br />Latest Updates
            </h1>
            <div class="subscription-form-container">
                <form class="subscription-form" action="#" method="post">
                <input type="email" placeholder="Your e-mail" class="subscription-input" required />
                <button type="submit" class="subscription-button">Subscribe →</button>
                </form>
            </div>
        </div>
        </>
    )
}