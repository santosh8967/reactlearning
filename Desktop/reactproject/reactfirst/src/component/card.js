import React from "react";

export function Cardpage(props){
    return (
        
          <div className="card mb-5 mb-lg-0">
            <div className="card-body">
              <h5 className="card-title text-muted text-uppercase text-center">{props.Data.plan}</h5>
              <h6 className="card-price text-center">${props.Data.fees}<span className="period">/month</span></h6>
              <hr/>
              <ul className="fa-ul">
                <li><span className="fa-li"><i className="fas fa-check"></i></span>{props.Data.user}</li>
                <li><span className="fa-li"><i className="fas fa-check"></i></span>{props.Data.storage}</li>
                <li><span className="fa-li"><i className="fas fa-check"></i></span>{props.Data.limited}</li>
                <li><span className="fa-li"><i className="fas fa-check"></i></span>{props.Data.access}</li>
                <li className="text-muted"><span className="fa-li"><i className="fas fa-times"></i></span>{props.Data.limites}
                  </li>
                <li className="text-muted"><span className="fa-li"><i className="fas fa-times"></i></span>{props.Data.gadgets}</li>
                <li className="text-muted"><span className="fa-li"><i className="fas fa-times"></i></span>{props.Data.domain}
                </li>
                <li className="text-muted"><span className="fa-li"><i className="fas fa-times"></i></span>Monthly Status
                  Reports</li>
              </ul>
              <div className="d-grid">
                <a href="#" className="btn btn-primary text-uppercase">Button</a>
              </div>
            </div>
          </div>
       
    )
}