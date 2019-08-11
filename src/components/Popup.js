import React from 'react'
import './Popup.css'

function Popup (){

        return (
            <div>
                
                    <div class="form-popup-simple-container" id="popupFormSimple" >
                    
                        
                        <div class="form-popup-simple"  >

                            <form action="https://gmail.us20.list-manage.com/subscribe/post?u=425c6e6dc7a889ebba1030332&amp;id=78aa0efce3" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate>
                                <div id="mc_embed_signup_scroll">
                                    <input type="email" value="" name="EMAIL" class="email" id="mce-EMAIL" placeholder="email address" required/>
                                    {/* <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups--> */}
                                    <div style="position: absolute; left: -5000px;" aria-hidden="true"><input type="text" name="b_425c6e6dc7a889ebba1030332_78aa0efce3" tabindex="-1" value=""/></div>
                                    <div class="clear2"><input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" class="button"/></div>
                                </div>
                            </form>
                            <div class="closeButton">
                                X
                            </div>
                        </div>
                    </div>
                        
            

            </div>
        )
}


export default Popup;