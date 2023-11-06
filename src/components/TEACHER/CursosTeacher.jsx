import { faThumbsDown, faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const URL = "http://localhost:3000/api/courses/courses";

export const CursosTeacher = () => {
  const getDatos = async () => {
    try {
      const response = await axios.get(URL);
      console.log(response.data);
    } catch (error) {
      console.error("Error al obtener datos:", error);
    }
  };

  useEffect(() => {
    getDatos();
  }, []);

  return (
    <div>
      <section className="bg-white ">
        <div className="container px-6 py-10 mx-auto">
          <h1 className="text-3xl font-extrabold text-gray-800 capitalize lg:text-3xl ">
            Next Level
          </h1>

          <div className="grid grid-cols-1 gap-8 mt-8 md:mt-16 md:grid-cols-2">
            <div className="lg:flex">
              <img
                className="object-cover w-full h-56 rounded-lg lg:w-64"
                src="https://images.unsplash.com/photo-1515378960530-7c0da6231fb1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                alt=""
              />

              <div className="flex flex-col justify-between py-6 lg:mx-6">
                <Link
                  to="/curso"
                  className="text-xl font-semibold text-gray-800 hover:underline "
                >
                  How to use sticky note for problem solving
                </Link>
                <div className="text-xl flex gap-4 justify-end mr-12">
                  <div className="">
                    <FontAwesomeIcon icon={faThumbsUp} />
                    <p className="text-sm flex justify-center">0</p>
                  </div>
                  <div>
                    <FontAwesomeIcon icon={faThumbsDown} />
                    <p className="text-sm flex justify-center">0</p>
                  </div>
                </div>
                <span className="text-sm text-gray-500 ">
                  On: 20 October 2019
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
