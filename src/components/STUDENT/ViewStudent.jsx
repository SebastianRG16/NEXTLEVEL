import { faThumbsDown, faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
import { ViewCurso } from "../VERCURSO/ViewCurso";

const URL = "http://localhost:3000/api/courses/courses";

export const ViewStudent = () => {
  // const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState(null);
  const [video, setVideo] = useState(null);
  const [viewVideo, setViewVideo] = useState(false);

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
            <h1 className="text-3xl font-extrabold text-gray-800 capitalize lg:text-3xl ">
              Next Level
            </h1>

            <div className="grid grid-cols-1 gap-8 mt-8 md:mt-16 md:grid-cols-2">
              {data &&
                data.map((video, index) => (
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
                          <FontAwesomeIcon icon={faThumbsUp} />
                          <p className="text-sm flex justify-center">0</p>
                        </div>
                        <div>
                          <FontAwesomeIcon icon={faThumbsDown} />
                          <p className="text-sm flex justify-centers">0</p>
                        </div>
                      </div>
                      <span className="text-sm text-gray-500 ">
                        On: 20 October 2019
                      </span>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </section>
      </div>
    );
  } else {
    return <div>Error cargando los datos o no hay datos aun</div>;
  }
};
