import { Navbar } from "./Navbar";
import "../CSS/Details.css"

export const Details= () => {
    
    return <div>
       <div id="screen_emp">
           <Navbar />
       <div className="blank1"></div>
           

           <div className="main_content">
             <div className="for_icon">
                <img className="user_profile" src="http://assets.stickpng.com/images/585e4bf3cb11b227491c339a.png"/>
             </div>

             <div className="user_sub_content">
                 <div>NAME :</div>
                 <div> priya darshini</div>
             </div>

             <div className="user_sub_content">
                 <div>GENDER :</div>
                 <div> Female</div>
             </div>

             <div className="user_sub_content">
                 <div>AGE :</div>
                 <div>22</div>
             </div>

             <div className="user_sub_content">
                 <div>DEPARTMENT :</div>
                 <div>ITI</div>
             </div>

             <div className="user_sub_content">
                 <div>SALARY :</div>
                 <div>40000</div>
             </div>
           </div>
       <div className="blank1"></div>
       </div>
    </div>
}
