import { useState } from "react";
import Logo from "../assets/next-level-Logo.png";
import { Link, Outlet } from "react-router-dom";

export function ViewCursos() {
  // return (
  //   <div className="h-screen w-screen flex">
  //     <aside className="flex flex-col w-64 h-screen px-4 py-8 overflow-y-auto bg-white border-r rtl:border-r-0 rtl:border-l">
  //       <a className="mx-auto">
  //         <p className="font-extrabold text-2xl">NEXT LEVEL</p>
  //       </a>

  //       <div className="flex flex-col items-center mt-6 -mx-2">
  //         <img
  //           className="object-cover w-24 h-24 mx-2 rounded-full"
  //           src={Logo}
  //           alt="avatar"
  //         />
  //         <h4 className="mx-2 mt-2 font-medium text-gray-800 ">Sebastian</h4>
  //         <p className="mx-2 mt-1 text-sm font-medium text-gray-600">
  //           sebastian@gmail.com
  //         </p>
  //       </div>

  //       <div className="flex flex-col justify-between flex-1 mt-6">
  //         <nav>
  //           <a
  //             className="flex items-center px-4 py-2 text-gray-700 bg-gray-100 rounded-lg"
  //             href="#"
  //           >
  //             <svg
  //               className="w-5 h-5"
  //               viewBox="0 0 24 24"
  //               fill="none"
  //               xmlns="http://www.w3.org/2000/svg"
  //             >
  //               <path
  //                 d="M19 11H5M19 11C20.1046 11 21 11.8954 21 13V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V13C3 11.8954 3.89543 11 5 11M19 11V9C19 7.89543 18.1046 7 17 7M5 11V9C5 7.89543 5.89543 7 7 7M7 7V5C7 3.89543 7.89543 3 9 3H15C16.1046 3 17 3.89543 17 5V7M7 7H17"
  //                 stroke="currentColor"
  //               />
  //             </svg>

  //             <span className="mx-4 font-medium">Mis cursos</span>
  //           </a>

  //           <a
  //             className="flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-300 transform rounded-lghover:bg-gray-100 hover:text-gray-700"
  //             href="#"
  //           >
  //             <svg
  //               className="w-5 h-5"
  //               viewBox="0 0 24 24"
  //               fill="none"
  //               xmlns="http://www.w3.org/2000/svg"
  //             >
  //               <path
  //                 d="M16 7C16 9.20914 14.2091 11 12 11C9.79086 11 8 9.20914 8 7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7Z"
  //                 stroke="currentColor"
  //               />
  //               <path
  //                 d="M12 14C8.13401 14 5 17.134 5 21H19C19 17.134 15.866 14 12 14Z"
  //                 stroke="currentColor"
  //               />
  //             </svg>

  //             <span className="mx-4 font-medium">Crear curso</span>
  //           </a>
  //         </nav>
  //       </div>
  //     </aside>
  //     <div className="">
  //       <div>hola</div>
  //     </div>
  //   </div>
  // );

  const [sidebarVisible, setSidebarVisible] = useState(false);

  const toggleSidebar = () => {
    setSidebarVisible(!sidebarVisible);
  };

  return (
    <div>
      <button
        data-drawer-target="logo-sidebar"
        data-drawer-toggle="logo-sidebar"
        aria-controls="logo-sidebar"
        type="button"
        onClick={toggleSidebar}
        className="inline-flex items-center p-2 mt-2 ml-3 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 "
      >
        <span className="sr-only">Open sidebar</span>
        <svg
          className="w-6 h-6"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
        </svg>
      </button>

      <div
        id="logo-sidebar"
        className={`fixed top-0 left-0 z-40 w-64 h-screen transition-transform ${
          sidebarVisible ? "" : "-translate-x-full"
        } lg:translate-x-0`}
        aria-label="Sidebar"
      >
        <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 ">
          <div className="">
            {sidebarVisible ? (
              <p
                className="w-full cursor-pointer flex justify-end"
                onClick={toggleSidebar}
              >
                Recoger
              </p>
            ) : (
              <p></p>
            )}
          </div>
          <a className="mx-auto">
            <p className="font-extrabold text-2xl text-center">NEXT LEVEL</p>
          </a>
          <div className="flex flex-col items-center mt-6 -mx-2">
            <img
              className="object-cover w-24 h-24 mx-2 rounded-full"
              src={Logo}
              alt="avatar"
            />
            <h4 className="mx-2 mt-2 font-medium text-gray-800 ">Sebastian</h4>
            <p className="mx-2 mt-1 text-sm font-medium text-gray-600">
              sebastian@gmail.com
            </p>
          </div>

          <div className="flex flex-col justify-between flex-1 mt-6">
            <nav>
              <Link
                className="flex items-center px-4 py-2 text-gray-700 bg-gray-100 rounded-lg"
                to='/teacher'
              >
                <svg
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M19 11H5M19 11C20.1046 11 21 11.8954 21 13V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V13C3 11.8954 3.89543 11 5 11M19 11V9C19 7.89543 18.1046 7 17 7M5 11V9C5 7.89543 5.89543 7 7 7M7 7V5C7 3.89543 7.89543 3 9 3H15C16.1046 3 17 3.89543 17 5V7M7 7H17"
                    stroke="currentColor"
                  />
                </svg>

                <span className="mx-4 font-medium">Mis cursos</span>
              </Link>

              <Link
                className="flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-300 transform rounded-lghover:bg-gray-100 hover:text-gray-700"
                to='/teacher/create'
              >
                <svg
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M16 7C16 9.20914 14.2091 11 12 11C9.79086 11 8 9.20914 8 7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7Z"
                    stroke="currentColor"
                  />
                  <path
                    d="M12 14C8.13401 14 5 17.134 5 21H19C19 17.134 15.866 14 12 14Z"
                    stroke="currentColor"
                  />
                </svg>

                <span className="mx-4 font-medium">Crear curso</span>
              </Link>
              <Link
                className="flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-300 transform rounded-lghover:bg-gray-100 hover:text-gray-700"
                to='/'
              >
                <svg
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M16 7C16 9.20914 14.2091 11 12 11C9.79086 11 8 9.20914 8 7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7Z"
                    stroke="currentColor"
                  />
                  <path
                    d="M12 14C8.13401 14 5 17.134 5 21H19C19 17.134 15.866 14 12 14Z"
                    stroke="currentColor"
                  />
                </svg>

                <span className="mx-4 font-medium">Salir</span>
              </Link>
            </nav>
          </div>
        </div>
      </div>
      <div className="p-4 lg:ml-64 h-screen">
        <Outlet></Outlet>
      </div>
    </div>
  );
}
