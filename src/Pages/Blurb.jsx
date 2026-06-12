/* import mug from '../../public/assets/images/mug.png'
 */import tshirt from '../../public/assets/images/simple-black-t-shirt-worn-by-man.png'
import { Link } from 'react-router-dom'
function Blurb() {
    return ( 
        <>
            <section className="py-4 bg-light">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <div className="card">
                                <img src={tshirt} className="card-img-top" alt="T-shirt"/>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Blurb;