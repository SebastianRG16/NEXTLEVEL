import LogoNextLeve from "../assets/next-level-Logo.png";
import nextLevel from "../assets/fondoLogin.png";
import { Outlet } from "react-router-dom";

export function LoginView() {
  return (
    <div>
      <div className="bg-white">
        <div className="flex justify-center h-screen">
          <div
            className="hidden bg-cover lg:block lg:w-2/3"
            style={{ backgroundImage: `url(${nextLevel})` }}
          >
            <div className="flex items-center h-full px-20 bg-gray-900 bg-opacity-40">
              {/* <div>
                <h2 className="text-2xl font-bold text-white sm:text-3xl">
                  NEXT LEVEL
                </h2>

                <p className="max-w-xl mt-3 text-gray-300">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. In
                  autem ipsa, nulla laboriosam dolores, repellendus perferendis
                  libero suscipit nam temporibus molestiae
                </p>
              </div> */}
            </div>
          </div>

          <div className="flex items-center w-full max-w-md px-6 mx-auto lg:w-2/6">
            <div className="flex-1">
              <div className="text-center">
                <p className="flex justify-center mx-auto font-extrabold text-3xl">
                  NEXT LEVEL
                </p>
                <div className="flex justify-center mx-auto mb-0">
                  <img className="w-auto h-14" src={LogoNextLeve} alt="" />
                </div>
              </div>

              <div className="mt-2">
                <Outlet />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
