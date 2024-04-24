import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";
import fb from "../assets/fb.png";
import twitter from "../assets/twitter.png";
import linkdin from "../assets/linkdin.png";
import p from "../assets/p.png";
function Footer() {
  return (
    <>
      <div className="my-10 w-[90%] m-auto text-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6"
        >
          <div>
            <div className="flex justify-center">
              <img src={logo} alt="image" className="-mt-4" />
              <h1 className="mx-2 text-xl">Learning Exp.</h1>
            </div>
            <div className="flex my-4 justify-center">
              <Link to="#">
                <img src={fb} alt="fbLogo" className="w-6 mx-2" />
              </Link>
              <Link to="#">
                <img src={twitter} alt="fbLogo" className="w-6 mx-2" />
              </Link>
              <Link to="#">
                <img src={linkdin} alt="fbLogo" className="w-6 mx-2" />
              </Link>
              <Link to="#">
                <img src={p} alt="fbLogo" className="w-6 mx-2" />
              </Link>
            </div>
          </div>
          <div>
            <h1 className="font-bold">Links</h1>
            <Link to="#">Home</Link>
            <br />
            <Link to="#">Pricing</Link> <br />
            <Link to="#">Download</Link> <br />
            <Link to="#">About</Link> <br />
            <Link to="#">Service</Link>
          </div>
          <div>
            <h1 className="font-bold">Support</h1>
            <Link to="#">FAQ</Link>
            <br />
            <Link to="#">How it</Link> <br />
            <Link to="#">Features</Link> <br />
            <Link to="#">Contact</Link> <br />
            <Link to="#">Reporting</Link>
          </div>
          <div>
            <h1 className="font-bold">Contact Us</h1>
            <Link to="#">Home</Link>
            <br />
            <Link to="#">+880 12345678</Link> <br />
            <Link to="#">youremail@gmail.com</Link> <br />
            <Link to="#">Pune City</Link> <br />
          </div>
        </div>
      </div>

      <div className="w-[90%] m-auto">
        <div className="flex justify-center flex-wrap md:justify-between">
          <p className="text-center">Copyright & Design By @Learning Exp.</p>
          <div className="flex mt-5 sm:mt-0">
            <Link className="mx-5">Terms of use</Link>
            <p className="mx-5">|</p>
            <Link className="mx-5">Privacy Policy</Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
