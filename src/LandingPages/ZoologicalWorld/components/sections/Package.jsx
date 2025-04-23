import { useState, useEffect } from "react";
import Modal from "../ui/Modal";
import { Packages } from "../ui/Modal";

function PackagesCard() {
  const [isOpen, setIsOpen] = useState(false);
  const [SelectedPackage, setSelectedPackage] = useState(null);

  const handleClick = (Package) => {
    setSelectedPackage(Package);
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
      {/* Content less than lg */}
      {/* On mobile devices, it wouldn't be possible to hover over images because you'd have to hold it down. */}
      <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 lg:hidden">
        {Packages.map((pkg) => (
          <div
            key={pkg.id}
            className={`flex flex-col items-center justify-center p-4 ${pkg.color.base} border-4 ${pkg.color.border}`}
            onClick={() => handleClick(pkg)}
          >
            <pkg.svg width="130" height="auto" />
          </div>
        ))}
        <Modal
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          Package={SelectedPackage}
        />
      </div>

      {/* Content Greater than lg*/}
      <div className="hidden lg:flex p-2 m-auto max-w-[100rem] w-full">
        {Packages.map((pkg) => (
          <div
            key={pkg.id}
            className={`flex items-center justify-center flex-grow p-4 text-center transition-all duration-500 ${pkg.color.base} border-4 ${pkg.color.border} hover:grow-[4] `}
            onClick={() => handleClick(pkg)}
          >
            <div className="flex flex-col items-center">
              <pkg.svg width="130" height="auto" />
            </div>
          </div>
        ))}
        <Modal
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          Package={SelectedPackage}
        />
      </div>
    </div>
  );
}

export default PackagesCard;
