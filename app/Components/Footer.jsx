import React from "react";
import YouTubeIcon from "@mui/icons-material/YouTube";
import TwitterIcon from "@mui/icons-material/Twitter";
import PinterestIcon from "@mui/icons-material/Pinterest";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";

function Footer({ className }) {
  return (
    <div className={className + " font-[FFDINforPumaW07-Regular-latin]"}>
      <div className="flex footer FootHead justify-between bg-black text-white gap-10 px-5 py-5">
        <div className="sm:m-0 md:block lg:m-5 Foothead">
          <h1 className="uppercase text-lg font-bold mb-3">Supports</h1>
          <div className="foot-part">
            <p className="text-sm text-slate-200 font-light pb-2">Contact us</p>
            <p className="text-sm text-slate-200 font-light pb-2">
              Promotions & Sale
            </p>
            <p className="text-sm text-slate-200 font-light pb-2">
              Track Order
            </p>
            <p className="text-sm text-slate-200 font-light pb-2">
              Privacy Policy
            </p>
            <p className="text-sm text-slate-200 font-light pb-2">
              Terms & Conditions
            </p>
            <p className="text-sm text-slate-200 font-light pb-2">
              Cookie Settings
            </p>
          </div>
        </div>
        <div className="sm:m-0 md:block sm:mt-0 lg:m-5 Foothead lg:mt-12">
          <div className=" foot-part">
            <p className="text-sm text-slate-200 font-light pb-2">FAQs</p>
            <p className="text-sm text-slate-200 font-light pb-2">My Account</p>
            <p className="text-sm text-slate-200 font-light pb-2">
              Return Policy
            </p>
            <p className="text-sm text-slate-200 font-light pb-2">
              Tech Glossary
            </p>
            <p className="text-sm text-slate-200 font-light pb-2">
              Initiate Return
            </p>
          </div>
        </div>
        <div className="sm:m-0 md:block lg:m-5 Foothead">
          <h1 className="uppercase text-lg font-bold mb-3">About</h1>
          <div className=" foot-part">
            <p className="text-sm text-slate-200 font-light pb-2">Company</p>
            <p className="text-sm text-slate-200 font-light pb-2">
              Corporate News
            </p>
            <p className="text-sm text-slate-200 font-light pb-2">
              Press Center
            </p>
            <p className="text-sm text-slate-200 font-light pb-2">Investors</p>
            <p className="text-sm text-slate-200 font-light pb-2">
              Sustainability
            </p>
            <p className="text-sm text-slate-200 font-light pb-2">Careers</p>
            <p className="text-sm text-slate-200 font-light pb-2">
              Store Finder
            </p>
            <p className="text-sm text-slate-200 font-light pb-2">PUMA DNA</p>
          </div>
        </div>
        <div className="sm:m-0 lg:m-5 Foothead bg-black">
          <h1 className="uppercase text-lg font-bold mb-3">Stay up to Date</h1>
          <div className="flex flex-row ">
            <a
              rel="noopener noreferrer"
              className="my-4 mx-4"
              href="https://www.youtube.com/puma"
            >
              <YouTubeIcon fontSize="medium" />
            </a>
            <a
              rel="noopener noreferrer"
              className="my-4 mx-4"
              href="https://twitter.com/PUMA"
            >
              <TwitterIcon fontSize="medium" />
            </a>
            <a
              rel="noopener noreferrer"
              className="my-4 mx-4"
              href="https://www.pinterest.com/puma/"
            >
              <PinterestIcon fontSize="medium" />
            </a>
            <a
              rel="noopener noreferrer"
              className="my-4 mx-4"
              href="https://instagram.com/puma/"
            >
              <InstagramIcon fontSize="medium" />
            </a>
            <a
              rel="noopener noreferrer"
              className="my-4 mx-4"
              href="https://www.facebook.com/PUMA/"
            >
              <FacebookIcon fontSize="medium" />
            </a>
          </div>
          <h1 className="uppercase text-lg font-bold mb-3">Explore</h1>
          <div className="flex flex-row">
            <div>
              <a
                rel="noopener noreferrer"
                href="https://app.puma.com/web-download"
              >
                <img
                  alt="Footer-img"
                  className="w-[60px] mr-5 rounded-md border-white border-solid border-[1px]"
                  src="https://appcheck.mobilsicher.de/wp-content/uploads/2020/10/xhPDUD0i5MEguK1BBDge4CuOTsE7HdJjqol4OQqE5ecOih7akpcqF2LM3b8XE4tyPA.png"
                />
              </a>
            </div>
            <div>
              <a rel="noopener noreferrer" href="http://pumatr.ac/app">
                <img
                  alt="Footer-img"
                  className="w-[60px] rounded-md border-white border-solid border-[1px]"
                  src="https://www.networthspot.com/ezoimgfmt/yt3.ggpht.com/ytc/AMLnZu-958nknFKv2iFaKl2vciXTS-vRF_8EA4XZagDCQQ=s768-c-k-c0x00ffffff-no-rj?ezimgfmt=ngcb6/notWebP"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
      <hr className=" w-full" />
      <div className="bg-black flex flex-row justify-between">
        <div className="pt-12 px-3">
          <img
            alt="visa-icon"
            className="w-[250px]"
            src="https://www.iugg2023berlin.org/wp-content/uploads/2022/10/GOWNO.png"
          />
        </div>
        <div className="pt-[-60px]">
          <img
            alt="Country-icon"
            className="w-36 bg-black rounded-full "
            src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcS9Eyox-WBLwQ3Tm7vsDrh97neENGAE_iDduuhtX7KpajOz1GPU"
          />
        </div>
      </div>
    </div>
  ); //rel="noopener noreferrer"
}

export default Footer;
