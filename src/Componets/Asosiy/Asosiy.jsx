import React from "react";
import "./asosiy.css";
import Carusel from './Carusel'
import LanguageIcon from "@mui/icons-material/Language";
export default function Asosiy() {
  return (
    <div className="asosiy_page">
      <div className="asosiy_page_opacity">
        <div className="asosiy_title">
          <h1>
            {`<SoffHub/>`} <br /> Engineering - the future{" "}
          </h1>
        </div>
      </div>
      <Carusel/>
      <div className="services row">
        <div className="service_card">
          <div>
            <LanguageIcon className="icon" />
          </div>
          <div className="services_title asosiy_title">Veb sayt</div>
          <div className="service_text">
            <h1>Web Site</h1>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab autem eum totam sunt explicabo, nemo delectus repudiandae illum in suscipit voluptates excepturi ducimus ipsum temporibus nulla, omnis ratione consequatur tempora.</p>
            <button></button>
          </div>
        </div>
        <div className="service_card">
          <div>
            <LanguageIcon className="icon" />
          </div>
          <div className="services_title asosiy_title">Veb sayt</div>
          <div className="service_text">
            <h1>Web Site</h1>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab autem eum totam sunt explicabo, nemo delectus repudiandae illum in suscipit voluptates excepturi ducimus ipsum temporibus nulla, omnis ratione consequatur tempora.</p>
          </div>
        </div>
        <div className="service_card">
          <div>
            <LanguageIcon className="icon" />
          </div>
          <div className="services_title asosiy_title">Veb sayt</div>
          <div className="service_text">
            <h1>Web Site</h1>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab autem eum totam sunt explicabo, nemo delectus repudiandae illum in suscipit voluptates excepturi ducimus ipsum temporibus nulla, omnis ratione consequatur tempora.</p>
          </div>
        </div>
        <div className="service_card">
          <div>
            <LanguageIcon className="icon" />
          </div>
          <div className="services_title asosiy_title">Veb sayt</div>
          <div className="service_text">
            <h1>Web Site</h1>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab autem eum totam sunt explicabo, nemo delectus repudiandae illum in suscipit voluptates excepturi ducimus ipsum temporibus nulla, omnis ratione consequatur tempora.</p>
          </div>
        </div>
        <div className="service_card">
          <div>
            <LanguageIcon className="icon" />
          </div>
          <div className="services_title asosiy_title">Veb sayt</div>
          <div className="service_text">
            <h1>Web Site</h1>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab autem eum totam sunt explicabo, nemo delectus repudiandae illum in suscipit voluptates excepturi ducimus ipsum temporibus nulla, omnis ratione consequatur tempora.</p>
          </div>
        </div>

      </div>
    </div>
  );
}
