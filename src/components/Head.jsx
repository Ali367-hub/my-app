import Icon from "../assets/image/list.svg"
import { Link } from "react-router-dom";

function Head(){
    return(
      <header class="header">
        <div class="container">
            <Link to = "/disceplines" class="btn-category">
                <img src={Icon} alt=" menu sailing" />
            </Link>
        </div>
   </header>
    );
}

export default Head;