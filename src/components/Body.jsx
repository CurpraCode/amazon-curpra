import React from "react";
// import bootstrap from "bootstrap";
import "./Body.css";
import Product from "./Product";

function Body() {
  return (
    <div className="home">
      <div
        id="carouselExampleControls"
        class="carousel slide"
        data-bs-ride="carousel"
      >
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img
              src="https://images-eu.ssl-images-amazon.com/images/G/02/Amazon-co-uk-hq/2018/img/Prime/XCM_Manual_1133281_gatewayRedesignAcq_1500x600_Prime_1133280_30free-1x_1534769204-jpg._CB484986347_.jpg"
              class="d-block w-100"
              alt="..."
            />
          </div>
          <div class="carousel-item">
            <img
              src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/gateway/placement/launch/TheGentlemen/GENTL_2020_GWBleedingHero_FT_COVIDUPDATE_XSite_1500X600_PV_en-GB._CB404268992_.jpg"
              class="d-block w-100"
              alt="..."
            />
          </div>
          <div class="carousel-item">
            <img
              src="https://images-eu.ssl-images-amazon.com/images/G/02/AMAZON-FASHION/2020/PRIVATE_LABEL/Iris_Lilly/AW20/GW/GW_HERO_DESKTOP_1500x600px._CB404879644_.jpg"
              class="d-block w-100"
              alt="..."
            />
          </div>
          <div class="carousel-item">
            <img
              src="https://images-eu.ssl-images-amazon.com/images/G/02/kindle/journeys/NTE4NDY4NmUt/NTE4NDY4NmUt-MDU1MWIzMTEt-w1500._CB404725029_.jpg"
              class="d-block w-100"
              alt="..."
            />
          </div>
        </div>
        <a
          class="carousel-control-prev"
          href="#carouselExampleControls"
          role="button"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </a>
        <a
          class="carousel-control-next"
          href="#carouselExampleControls"
          role="button"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </a>
      </div>

      <div className="home-row-one">
        <Product
          title="HD TELEVISION 
          From small and affordable to ultra-widescreen LED monitors"
          rating={4}
          image="https://m.media-amazon.com/images/I/31iqYiOTMlL._AC_.jpg"
          price="39.9"
        />
        <Product
          title="MODERN LAPTOPS 
          ASUS VivoBook with Microsoft 365 E402YA 14 HD Laptop,"
          rating={4}
          image="https://m.media-amazon.com/images/I/611GkDpocJL._AC_UY218_.jpg"
          price="50.9"
        />
      </div>

      <div className="home-row-one">
        <Product
          title="AURIQUE Women's Mesh Panel Sports T-Shirt"
          rating={4}
          image="https://images-na.ssl-images-amazon.com/images/I/81eA9Kw40kL._AC_UY500_.jpg"
          price="29.9"
        />
        <Product
          title="BestoU Handbags for Ladies PU Leather Women"
          rating={4}
          image="https://images-na.ssl-images-amazon.com/images/I/61OK3xfkDiL._AC_UY395_.jpg"
          price="29.9"
        />

        <Product
          title="The Buried World (The Grave Kingdom Book 2)"
          rating={4}
          image="https://m.media-amazon.com/images/I/41znNmcuGaL._SY346_.jpg"
          price="29.9"
        />
      </div>
      <div className="home-row-one">
        <Product
          title="RUNMUS Gaming Headset for PS4, Xbox One, PC Headset"
          rating={4}
          image="https://m.media-amazon.com/images/I/81PtEw326aL._AC_AA180_.jpg"
          price="30.45"
        />
        <Product
          title="HUAWEI Watch GT 2 (46 mm) Smart Watch, 1.39 Inch
          AMOLED Display with 3D Glass Screen"
          rating={4}
          image="data:image/jpeg;base64,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"
          price="29.9"
        />
      </div>
      <bootstrap />
    </div>
  );
}

export default Body;
