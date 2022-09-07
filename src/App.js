import "./App.css";
import Card from "./components/Card/Card";
import Img1 from "./assets/img/photo1.png";
import Img2 from "./assets/img/photo2.png";
import Img3 from "./assets/img/photo3.png";
import Img4 from "./assets/img/photo4.png";
import Img5 from "./assets/img/photo5.png";
import Img6 from "./assets/img/photo6.png";

function App() {
  return (
    <>
      <div className="poppins d-flex align-items-center justify-content-center m-5 ">
        <h2 className="pt-serif fw-bold">The creative crew</h2>
        <div className="ps-5">
          <h3 className="fw-bold">Who we are</h3>
          <p className="fw-semibold">
            We are team of creatively diverse. driven. innovative individuals
            working in various locations from the world.
          </p>
        </div>
      </div>
      <div className="container">
        {/* Bill */}
        <div className="d-flex flex-wrap">
          <div className="col-4">
            <Card img={Img1} job="Product owner" name="Bill Mahoney" />
          </div>
          {/* Saba Cabrera */}
          <div className="col-4 margin">
            <span className="margin">
              <Card img={Img2} job="Art Director" name="Saba Cabrera" />
            </span>
          </div>
          {/* Shae le */}
          <div className="col-4">
            <Card img={Img3} job="Tech lead" name="Shae Le" />
          </div>
          {/* Skylah Lu */}
          <div className="col-4">
            <Card img={Img4} job="Ux Designer" name="SkyLah Lu" />
          </div>
          {/* Griff Richards */}
          <div className="col-4 margin">
            <span className="margin">
              <Card img={Img5} job="Developer" name="Griff Richards" />
            </span>
          </div>
          {/* Stan John */}
          <div className="col-4">
            <Card img={Img6} job="Developer" name="Stan John" />
          </div>
        </div>
        
          
        </div>

        {/* <div className="col-7">
              <Card img={Img1} job="Product owner" name="Bill Mahoney" />
            </div> */}
      
    </>
  );
}

export default App;
