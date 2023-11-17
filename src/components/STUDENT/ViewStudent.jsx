import { faThumbsDown, faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
import { ViewCurso } from "../VERCURSO/ViewCurso";
import { Link } from "react-router-dom";

const URL = "http://localhost:3000/api/courses/courses";
const URL1 = "http://localhost:3000/api/courses/like/";
const URL2 = "http://localhost:3000/api/courses/dislike/";

export const ViewStudent = () => {
  // const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState(null);
  const [video, setVideo] = useState(null);
  const [viewVideo, setViewVideo] = useState(false);
  const [search, setSearch] = useState("");

  const getDatos = async () => {
    try {
      const response = await axios.get(URL);
      // if (!response.data) {

      // }
      setData(response.data);
      console.log(response.data);
    } catch (error) {
      console.error("Error al obtener datos:", error);
    }
  };

  const filteredData = data
    ? data.filter((video) =>
        video.title.toLowerCase().includes(search.toLowerCase())
      )
    : [];

  const likeFunction = (id) => {
    // setLike(1);
    // console.log("hola");
    axios.get(URL1 + id);
    getDatos();
  };

  const dislikeFunction = (id) => {
    // setDislike(1);
    axios.get(URL2 + id);
    getDatos();
  };

  const cambiarEstado = async () => {
    setViewVideo(!viewVideo);
  };

  useEffect(() => {
    getDatos();
  }, []);

  if (data) {
    return (
      <div>
        <div className={`${viewVideo ? "" : "hidden"}`}>
          <ViewCurso video={video} cambiarEstado={cambiarEstado} />
        </div>
        <section className={`${viewVideo ? "hidden" : "bg-white"} `}>
          <div className="container px-6 py-10 mx-auto">
            <div className="flex w-full">
              <h1 className="w-1/2 text-3xl font-extrabold text-gray-800 capitalize lg:text-3xl ">
                Next Level
              </h1>

              <div className="w-1/2 justify-end flex">
                <div className="flex justify-end mt-5 mr-7">
                  <input
                    type="search"
                    className="w-[200px] h-[48px] px-4 py-1 text-gray-800 border rounded-l-lg focus:outline-none"
                    placeholder="Buscar por curso"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                  />
                  <div></div>
                  <button
                    type="submit"
                    className="cursor-pointer flex items-center bg-blue-500 justify-center w-12 h-12 text-white rounded-r-lg"
                    disabled="search.length == 0"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                    </svg>
                  </button>
                </div>
                <Link
                  to="/"
                  className="w-[140px]flex justify-center mb-2 mt-6 px-4 font-semibold py-2 tracking-wide text-white transition-all duration-300 transform bg-slate-900 rounded-lg hover:bg-gray-700 focus:outline-none focus:bg-gray-700 focus:ring  focus:ring-opacity-50 hover:scale-105 hover:shadow-md"
                >
                  Salir
                </Link>
              </div>
            </div>
            <div className="grid">
              <div className="gap-10 mt-10 grid max-sm:grid-cols-1 max-sm:justify-center max-lg:grid-cols-2 grid-cols-3 justify-between">
                {filteredData &&
                  filteredData.map((video, index) => (
                    <div
                      key={index}
                      className="max-w-xs hover:scale-110 transition-all duration-700 overflow-hidden bg-white rounded-lg shadow-lg "
                    >
                      <div className="px-4 py-2">
                        <h1 className="text-xl h-[80px] font-bold text-gray-800 uppercase ">
                          {video.title}
                        </h1>
                        <p className="mt-1 h-[] text-sm text-gray-600 ">
                          Autor: {video.teacher_id.name && video.teacher_id.name}{" "}
                          {video.teacher_id.last_name}
                        </p>
                      </div>

                      <img
                        className="object-cover w-full h-52 mt-2"
                        src={video.miniature_url}
                        alt="NIKE AIR"
                      />
                      <div className="flex w-full ">
                        <div className="flex w-full items-center justify-between px-4 py-2 bg-gray-900">
                          <div className="flex gap-5 text-lg font-bold text-white">
                            <div>
                              <FontAwesomeIcon
                                icon={faThumbsUp}
                                onClick={() => likeFunction(video._id)}
                                className="cursor-pointer"
                              />
                              <p className="text-sm flex justify-center">
                                {video.like}
                              </p>
                            </div>
                            <div>
                              <FontAwesomeIcon
                                icon={faThumbsDown}
                                onClick={() => dislikeFunction(video._id)}
                                className="cursor-pointer"
                              />
                              <p className="text-sm flex justify-centers">
                                {video.dislike}
                              </p>
                            </div>
                          </div>
                          <button
                            onClick={() => {
                              cambiarEstado(), setVideo(video);
                            }}
                            className="px-2 py-1 text-xs font-semibold hover:scale-110  text-gray-900 uppercase transition-all duration-300 transform bg-white rounded hover:bg-gray-200 focus:bg-gray-400 focus:outline-none"
                          >
                            Ver curso
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            </div>

            {/* <div className="grid grid-cols-1 gap-8 mt-8 md:mt-16 md:grid-cols-2">
              {filteredData &&
                filteredData.map((video, index) => (
                  <div key={index} className="lg:flex">
                    <img
                      className="object-cover w-full h-56 rounded-lg lg:w-64"
                      src={video.miniature_url}
                      alt=""
                    />

                    <div className="flex flex-col justify-between py-6 lg:mx-6">
                      <a
                        onClick={() => {
                          cambiarEstado(), setVideo(video);
                        }}
                        className="cursor-pointer text-xl font-semibold text-gray-800 hover:underline "
                      >
                        {video.title}
                      </a>
                      <div className="text-xl flex gap-4 justify-end mr-12">
                        <div>
                          <FontAwesomeIcon
                            icon={faThumbsUp}
                            onClick={() => likeFunction(video._id)}
                            className="cursor-pointer"
                          />
                          <p className="text-sm flex justify-center">
                            {video.like}
                          </p>
                        </div>
                        <div>
                          <FontAwesomeIcon
                            icon={faThumbsDown}
                            onClick={() => dislikeFunction(video._id)}
                            className="cursor-pointer"
                          />
                          <p className="text-sm flex justify-centers">
                            {video.dislike}
                          </p>
                        </div>
                      </div>
                      <span className="text-sm text-gray-500 ">
                        Autor: {video.teacher_id.name}{" "}
                        {video.teacher_id.last_name}
                      </span>
                    </div>
                  </div>
                ))}
            </div> */}
          </div>
        </section>
      </div>
    );
  } else {
    return <div>Error cargando los datos o no hay datos aun</div>;
  }
};
