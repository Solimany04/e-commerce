import img from '../../public/assets/images/simple-black-t-shirt-worn-by-man.png'
import { Link } from 'react-router-dom'
function Hero() {
    return ( 
        <>
        <header className="py-5 my-5 container">
        <div className="container py-5 my-5 row">
            <div className="text-center my-5 py-5 col-md-6">
                <h1 className="display-4 fw-bolder">Welcome to Our Store</h1>
                <p className="lead fw-normal text-dark-50 mb-0">With this shop hompeage template</p>
            </div>
            <div className="col-md-6 d-flex justify-content-end align-items-center">
                <Link to='/products' id='shop-now' className='btn'>Shop Now <i className="bi-solid bi-arrow-right"></i></Link>
            </div>
        </div>
        </header>
        </>
     );
}

export default Hero;