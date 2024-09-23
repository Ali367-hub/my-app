import disIcon from "../assets/image/grup.svg";
import allIcon from "../assets/image/all.svg";
import lukIcon from "../assets/image/luk.svg";
import horsIcon from "../assets/image/grup.svg";
import borbaIcon from "../assets/image/borba.svg";
import cocboryIcon from "../assets/image/coc-bory.svg";
import { Link } from "react-router-dom";

function DisceplinesPage(){
    return (
        <section class="mobile-block">
        <div class="mobile-block__header is-discepline">
           <h1>дисциплины-команды </h1>
        </div>
        <div class="container">
            <div class="disceplines-row">
                <Link to="/category" class="discepline-item">
                    <img src={disIcon} alt="" class="discepline-item__img"/>
                    <span class="disceplines-item__title">команды</span>
                </Link>
                <Link  to = "/ "class="discepline-item">
                    <img src={lukIcon} alt="" class="discepline-item__img"/>
                    <span class="disceplines-item__title">все-новсти </span>
                </Link>
                <div class="discepline-item">
                    <img src={allIcon}class="discepline-img"/>
                    <span class="disceplines-item__title">стрельба из лука</span>
                </div>
                <div class="discepline-item">
                    <img src={horsIcon} alt="" class="discepline-item__img"/>
                    <span class="disceplines-item__title">скачки</span>
                </div>
                <div class="discepline-item">
                    <img src={borbaIcon} alt="" class="discepline-item__img"/>
                    <span class="disceplines-item__title">борьба</span>
                </div>
                <div class="discepline-item">
                    <img src={cocboryIcon} alt="" class="discepline-item__img"/>
                    <span class="disceplines-item__title">кок-бору</span>
                </div>
            </div>
        </div>
    </section>
    ) ;
       
}

export default DisceplinesPage;