import React from "react";
import "../style/pricing.css";
import {Cardpage} from "../component/card";


export function Pricingpage(){
    const Data = [
        {
          plan: "Paid",
          fees: "10",
          user:"Single User",
          storage:"10GB Storage",
          limited:"limited Public Projects",
          access:"Public Access",
          limites:"Limited Private Projects",
          gadgets:"Dedicated Mobile,Lap,System Support",
          domain:"Free SUbdomain"
        },
        {
          plan: "plus",
          fees: "15",
          user:"Multi User",
          storage:"50GB Storage",
          limited:"Unlimited Public Projects",
          access:"Public Access",
          limites:"Unlimited Private Projects",
          gadgets:"Dedicated Mobile,Lap Support",
          domain:"Free SUbdomain"
        },
        {
          plan: "pro",
          fees: "20",
          user:"Multi User",
          storage:"150GB Storage",
          limited:"Unlimited Public Projects",
          access:"Community Access",
          limites:"Limited Private Projects",
          gadgets:"Dedicated Mobile Support",
          domain:"Paid SUbdomain"
        },
      ];
      return (
        <section className="pricing py-5">
          <div className="container">
            <div className="row">
              {
                Data.map((details, index) => (
                  <div key={`${index}`} className="col-lg-4">
                    <Cardpage Data={details} />
                  </div>
                ))}
            </div>
          </div>
        </section>
      );
} 