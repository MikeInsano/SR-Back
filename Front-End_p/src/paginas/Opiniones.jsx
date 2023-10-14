import React from "react";
import './styles.css'
import versa from './img/c1.webp'
import lujo from './img/suburban.jpeg'
import CommentBox from './CommentBox.jsx'
import Header from "./header"
import Footer from "./footer"

function Opiniones(){
    return(
        <div>
          <Header></Header>
            <div className="display">
                <div className="conve">
                    <div className="titulo-convencional">
                        <h4>SERVICIO CONVENCIONAL</h4>
                        <div>
                            <img src={versa}/>
                        </div>
                    </div>
                    <div className="container">
                        <div className="star">
                            <input type="radio" name="rate-convencional" id="rate-5"/>
                            <label for="rate-5">&#9733;</label>
                            <input type="radio" name="rate-convencional" id="rate-4"/>
                            <label for="rate-4">&#9733;</label>
                            <input type="radio" name="rate-convencional" id="rate-3"/>
                            <label for="rate-3">&#9733;</label>
                            <input type="radio" name="rate-convencional" id="rate-2"/>
                            <label for="rate-2">&#9733;</label>
                            <input type="radio" name="rate-convencional" id="rate-1"/>
                            <label for="rate-1">&#9733;</label>
                        </div>
                    </div>    
                    <div className="ttl-comentario">
                        <label className="lbl-ttl">Comentarios</label>
                        <CommentBox/>
                    </div>
                </div>
                <div className="lujo">
                    <div className="titulo-lujo">
                        <h4>SERVICIO DE LUJO</h4>
                        <div>
                            <img src={lujo}/>
                        </div>
                    </div>
                    <div className="ctn-star">
                        <div className="rate-star">
                            <input type="radio" name="rate-lujo" id="star-5"/>
                            <label for="star-5">&#9733;</label>
                            <input type="radio" name="rate-lujo" id="star-4"/>
                            <label for="star-4">&#9733;</label>
                            <input type="radio" name="rate-lujo" id="star-3"/>
                            <label for="star-3">&#9733;</label>
                            <input type="radio" name="rate-lujo" id="star-2"/>
                            <label for="star-2">&#9733;</label>
                            <input type="radio" name="rate-lujo" id="star-1"/>
                            <label for="star-1">&#9733;</label>
                        </div>
                    </div> 
                    <div className="ttl-comentarios">
                        <label className="lbl-ttlo">Comentarios</label>
                        <CommentBox/>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    )
}
export default Opiniones