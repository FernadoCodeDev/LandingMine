import React from "react";
import { useState, useEffect } from "react";
import { Books } from "../ui/Modal";
import Masonry from "react-masonry-css";
import Modal from "../ui/Modal";
import Heart from "../../assets/svg/Heart";

function BooksCard() {
  const [isOpen, setIsOpen] = useState(false);
  const [SelectedBook, setSelectedBook] = useState(null);

  const handleClick = (Book) => {
    setSelectedBook(Book);
    setIsOpen(true);
  };

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [isOpen]);

  return (
    <div className="w-full">
      {/* Masonry effect*/}
      <Masonry
        breakpointCols={{ default: 3, 1024: 3, 768: 2 }}
        className="flex items-center justify-center gap-2 m-auto text-center md:gap-2 max-w-[90rem]"
        columnClassName="flex flex-col gap-2 "
      >
        {Books.map((Book) => (
          <div
            key={Book.id}
            className={`relative flex flex-col group rounded-2xl ${Book.color.base} md:hidden`}
            onClick={() => handleClick(Book)}
          >
            <div className="flex flex-row items-center justify-between h-full p-4 ">
              <h1 className="font-bold text-black">⭐{Book.start}</h1>
              <Heart width="20" height="20" />
            </div>
            <img src={Book.image} alt="img" className="w-full h-auto" />
            <div className="opacity-0 group-hover:opacity-100 transition-all duration-700 flex flex-col gap-2 p-2 absolute bottom-0 left-0 w-full h-[50%] sm:h-[33%] rounded-2xl bg-black/40 backdrop-blur-[3px]">
              <h1 className="text-lg font-bold text-white md:text-2xl">
                {Book.name}
              </h1>
              <h1 className="text-base font-bold text-white md:text-lg">
                {Book.price}
              </h1>
            </div>
          </div>
        ))}

        <div className="hidden md:block">
          {Books.slice(0, 3).map((Book) => (
            <div
              key={Book.id}
              className={`relative flex flex-col my-2 group rounded-2xl ${Book.color.base}`}
              onClick={() => handleClick(Book)}
            >
              <div className="flex flex-row items-center justify-between h-full p-4">
                <h1 className="font-bold text-black">⭐{Book.start}</h1>
                <Heart width="20" height="20" />
              </div>
              <img src={Book.image} alt="img" className="w-full h-auto" />
              <div className="opacity-0 group-hover:opacity-100 transition-all duration-700 flex flex-col gap-2 p-2 absolute bottom-0 left-0 w-full h-[50%] sm:h-[33%] rounded-2xl bg-black/40 backdrop-blur-[3px]">
                <h1 className="text-lg font-bold text-white md:text-2xl">
                  {Book.name}
                </h1>
                <h1 className="text-base font-bold text-white md:text-lg">
                  {Book.price}
                </h1>
              </div>
            </div>
          ))}
        </div>

        <div className="hidden md:block">
          {Books.slice(3, 5).map((Book) => (
            <div
              key={Book.id}
              className={`relative flex flex-col my-2 group rounded-2xl ${Book.color.base}`}
              onClick={() => handleClick(Book)}
            >
              <div className="flex flex-row items-center justify-between h-full p-4">
                <h1 className="font-bold text-black">⭐{Book.start}</h1>
                <Heart width="20" height="20" />
              </div>
              <img src={Book.image} alt="img" className="w-full h-auto" />
              <div className="opacity-0 group-hover:opacity-100 transition-all duration-700 flex flex-col gap-2 p-2 absolute bottom-0 left-0 w-full h-[50%] sm:h-[33%] rounded-2xl bg-black/40 backdrop-blur-[3px]">
                <h1 className="text-lg font-bold text-white md:text-2xl">
                  {Book.name}
                </h1>
                <h1 className="text-base font-bold text-white md:text-lg">
                  {Book.price}
                </h1>
              </div>
            </div>
          ))}
        </div>

        <div className="hidden md:block">
          {Books.slice(5, 7).map((Book) => (
            <div
              key={Book.id}
              className={`relative flex flex-col my-2 group rounded-2xl ${Book.color.base}`}
              onClick={() => handleClick(Book)}
            >
              <div className="flex flex-row items-center justify-between h-full p-4">
                <h1 className="font-bold text-black">⭐{Book.start}</h1>
                <Heart width="20" height="20" />
              </div>
              <img src={Book.image} alt="img" className="w-full h-auto" />
              <div className="opacity-0 group-hover:opacity-100 transition-all duration-700 flex flex-col gap-2 p-2 absolute bottom-0 left-0 w-full h-[50%] sm:h-[33%] rounded-2xl bg-black/40 backdrop-blur-[3px]">
                <h1 className="text-lg font-bold text-white md:text-2xl">
                  {Book.name}
                </h1>
                <h1 className="text-base font-bold text-white md:text-lg">
                  {Book.price}
                </h1>
              </div>
            </div>
          ))}
        </div>

        <Modal
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          Book={SelectedBook}
        />
      </Masonry>
    </div>
  );
}

export default BooksCard;
