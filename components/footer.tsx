import Image from "next/image";
import { Logo } from "@/components/logo";

export const Footer = () => {
  return (
    <>
      <footer className="px-6 md:px-16 lg:px-24 xl:px-32">
        <div className="border-x p-8 md:p-14 border-blue-100 grid gap-12 md:grid-cols-2">
          <div>
            <Logo />
            <p className="mt-6 text-sm/7 max-w-sm text-gray-500">
              Ordine dei medici n 03322 Monza e Brianza
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h4 className="font-sans text-lg/8 font-semibold">Contatti</h4>
              <ul className="mt-3">
                <li className="text-base font-light mb-4 text-gray-500">
                  <a href="#" className="hover:underline">
                    +39 039 231396
                  </a>
                </li>
                <li className="text-base font-light mb-4 text-gray-500">
                  <a href="#" className="hover:underline">
                    info@lorenzomontiortopedico.it
                  </a>
                </li>
                <li className="text-base font-light mb-4 text-gray-500">
                  <a href="#" className="hover:underline">
                    Via San Gerardo 10
                  </a>
                </li>
                <li className="text-base font-light mb-4 text-gray-500">
                  <a href="#" className="hover:underline">
                    P.IVA
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-sans text-lg/8 font-semibold">Links</h4>
              <ul className="mt-3">
                <li className="text-base font-light mb-4 text-gray-500">
                  <a href="#" className="hover:underline">
                    Cookie Policy
                  </a>
                </li>
                <li className="text-base font-light mb-4 text-gray-500">
                  <a href="#" className="hover:underline">
                    Privacy Policy
                  </a>
                </li>
                <li className="text-base font-light mb-4 text-gray-500">
                  <a href="#" className="hover:underline">
                    Press
                  </a>
                </li>
                <li className="text-base font-light mb-4 text-gray-500">
                  <a href="#" className="hover:underline">
                    Partners
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
      <div className="border-t border-blue-100">
        <p className="text-gray-500 py-6 text-center">
          Copyright {new Date().getFullYear()} &copy; Lorenzo Monti. All Right
          Reserved.
        </p>
      </div>
    </>
  );
};
