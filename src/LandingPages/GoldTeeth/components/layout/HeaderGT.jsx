import React from "react";
import MobileMenu from "../../../GlobalComponents/MobileMenu";
import DarkMode from "../../../GlobalComponents/DarkMode";
import Background from "../../assets/img/Background.webp";
import GoldTeethLogo from "../../assets/img/GoldTeethLogo.webp";
import imgN1 from "../../assets/img/imgN1.webp";
import imgN2 from "../../assets/img/imgN2.webp";
import imgN3 from "../../assets/img/imgN3.webp";
import Modal from "../ui/Modal";

const HeaderDH = () => {
  return (
    <div className="relative w-full h-dvh text-beige-100 ">
      <div
        className="absolute inset-0 w-full bg-fixed bg-center bg-cover h-dvh "
        style={{ backgroundImage: `url(${Background})` }}
      ></div>

      {/*Design less than md  */}

      <div className="relative flex flex-col items-center justify-center gap-8 pt-4">

        <div className=" flex md:hidden flex-row justify-between w-full max-w-[100rem] p-4 mx-auto bg-beige-100">
          <img
            src={GoldTeethLogo}
            alt="GoldTeethLogo"
            className="object-contain w-40 h-auto cursor-pointer"
          />

          <div className="backdrop-blur-[4px] bg-black/20 p-2 rounded-3xl">
            <DarkMode />
          </div>
        </div>

        <div className="block md:hidden">
          <MobileMenu
            textColor="text-white transition-all duration-700 ease-out"
            hoverColor="hover:text-beige-400"
            bgColor=""
            invertColor="invert-0"
          />
        </div>

        <div className="flex-row justify-around hidden w-full p-4 mx-auto md:flex bg-beige-100">

          <img
            src={GoldTeethLogo}
            alt="GoldTeethLogo"
            className="object-contain w-40 h-auto cursor-pointer"
          />

          <div className="">
            <MobileMenu
              textColor="text-beige-800 transition-all duration-700 ease-out "
              hoverColor="hover:text-rose-800"
              bgColor=""
              invertColor="invert-0"
            />
          </div>


          <div className="backdrop-blur-[4px] bg-black/20 p-2 rounded-3xl">
            <DarkMode />
          </div>

        </div>


      </div>

      {/*Content */}
      <div className="h-2/3 md:h-3/4 xl:h-full relative flex flex-col md:flex-row justify-center m-auto gap-8 p-4 max-w-[80rem]">

        <div className="items-center justify-center hidden grid-cols-2 gap-2 md:grid ">
          <div className="flex flex-col items-end gap-2">
            <img
              src={imgN1}
              alt="imgN1"
              className="w-full h-auto rounded-t-full max-w-[15rem]"
            />
            <img
              src={imgN2}
              alt="imgN3"
              className="w-full h-auto rounded-b-full max-w-[15rem]"
            />
          </div>
          <div className="flex">
            <img
              src={imgN3}
              alt="imgN3"
              className="w-full h-auto rounded-t-full max-w-[15rem]"
            />
          </div>
        </div>

        <div className="flex flex-col items-center justify-center gap-4">

          <h1 className="text-4xl font-bold text-start lg:text-8xl">
            Sonríe mejor
          </h1>
          <h1 className="text-4xl font-bold text-start lg:text-8xl">
            con nosotros
          </h1>


          <div className="flex flex-col gap-2">
            <p className="text-base max-w-[25rem] text-center md:text-lg">
              Nos dedicamos a brindarle a usted y a su familia atención dental
              de máxima calidad en un entorno cómodo y acogedor.
            </p>

            <Modal />

            <div>
              <p className="">⭐⭐⭐⭐⭐(4.8)</p>
              <p className="">30K+Calificaciones en Google</p>

            </div>
          </div>
        </div>


      </div>
    </div>
  );
};

export default HeaderDH;
