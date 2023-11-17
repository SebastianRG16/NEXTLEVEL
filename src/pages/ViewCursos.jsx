import { useEffect, useState } from "react";
import Logo from "../assets/next-level-Logo.png";
import { Link, Outlet, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faBarsProgress,
  faList,
  faSquarePlus,
} from "@fortawesome/free-solid-svg-icons";
import axios from "axios";

const URL = "http://localhost:3000/api/user/user/";

export function ViewCursos() {
  const [data, setData] = useState(null);

  const location = useLocation();
  const direccion = location.pathname;

  const getDatos = async () => {
    const miDato = localStorage.getItem("user");
    // console.log(miDato);
    try {
      const response = await axios.get(URL + miDato);
      if (response.data.msg) {
        // console.log("hola");
      } else {
        setData(response.data);
      }
      // console.log(response.data);
    } catch (error) {
      // console.error("Error al obtener datos:", error);
    }
  };

  useEffect(() => {
    getDatos();
  }, []);

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
            <h4 className="mx-2 mt-2 font-medium text-gray-800 ">{data && data.name} {data && data.last_name}</h4>
            <p className="mx-2 mt-1 text-sm font-medium text-gray-600">
            {data && data.email}
            </p>
          </div>

          <div className="flex flex-col justify-between flex-1 mt-6">
            <nav>
              <Link
                className={`flex items-center px-4 py-2 transition-colors duration-300 transform text-gray-700 ${
                  direccion === "/teacher/" ? "bg-gray-100" : ""
                } hover:bg-gray-100 rounded-lg`}
                to="/teacher/"
              >
                <FontAwesomeIcon icon={faList} />
                <span className="mx-4 font-medium">Mis cursos</span>
              </Link>

              <Link
                className={`flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-300 transform rounded-lg ${
                  direccion === "/teacher/create" ? "bg-gray-100" : ""
                } hover:bg-gray-100 hover:text-gray-700`}
                to="/teacher/create"
              >
                <FontAwesomeIcon icon={faSquarePlus} />

                <span className="mx-4 font-medium">Crear curso</span>
              </Link>
              <Link
                className={`flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-300 transform rounded-lg ${
                  direccion === "/teacher/progress" ? "bg-gray-100" : ""
                } hover:bg-gray-100 hover:text-gray-700`}
                to="/teacher/progress"
              >
                <FontAwesomeIcon icon={faBarsProgress} />

                <span className="mx-4 font-medium">
                  Progreso del estudiante
                </span>
              </Link>
              <Link
                className="flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-300 transform rounded-lg hover:bg-gray-100 hover:text-gray-700"
                to="/"
              >
                <FontAwesomeIcon icon={faArrowLeft} />

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
