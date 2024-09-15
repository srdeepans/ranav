import HomeBannerImage from '../../assets/banners/banner1.png';

export default function HomeBanner(){
    return(
        <>
        <div className="bg-brown text-white row container-fluid">
            <div className='col-1'></div>
        <div className="col-md-6 d-flex align-items-center mob-center home-banner-text">
            <div>
            <h6>LET US GUIDE YOUR HOME</h6>
            <h1 className='pt-3 pb-3'>Find Your <span className='yello-text'>Dream</span> Home.</h1>
            <p>From low price to with limited time offer discounts</p>
            </div>
            
        </div>
          
        
        <div className="col-md-5 pt-5 home_banner_image">
          <img src={HomeBannerImage} />
        </div>
      </div>
        </>
    )
}