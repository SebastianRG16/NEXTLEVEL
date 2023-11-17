import { faThumbsDown, faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ViewCurso } from "../VERCURSO/ViewCurso";
import axios from "axios";
import { useEffect, useState } from "react";

const URL = "http://localhost:3000/api/courses/courses-teacher/";
// const URL1 = "http://localhost:3000/api/courses/like/";
// const URL2 = "http://localhost:3000/api/courses/dislike/";

export const CursosTeacher = () => {
  const [data, setData] = useState(null);
  const [video, setVideo] = useState(null);
  // const [like, setLike] = useState(0);
  // const [dislike, setDislike] = useState(0);
  const [viewVideo, setViewVideo] = useState(false);

  const getDatos = async () => {
    const miDato = localStorage.getItem("user");
    console.log(miDato);
    try {
      const response = await axios.get(URL + miDato);
      if (response.data.msg) {
        console.log("hola");
      } else {
        setData(response.data);
      }
      console.log(response.data);
    } catch (error) {
      console.error("Error al obtener datos:", error);
    }
  };

  // const likeFunction = (id) => {
  //   // setLike(1);
  //   // console.log("hola");
  //   axios.get(URL1 + id);
  //   getDatos();
  // };

  // const dislikeFunction = (id) => {
  //   // setDislike(1);
  //   axios.get(URL2 + id);
  //   getDatos();
  // };

  const cambiarEstado = async () => {
    setViewVideo(!viewVideo);
  };

  useEffect(() => {
    getDatos();
  }, []);

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
            {data !== null &&
              data.map((item, index) => (
                <div key={index} className="lg:flex">
                  <img
                    className="object-cover w-full h-56 rounded-lg lg:w-64"
                    src={item.miniature_url}
                    alt=""
                  />

                  <div className="flex flex-col justify-between py-6 lg:mx-6">
                    <a
                      onClick={() => {
                        cambiarEstado(), setVideo(item);
                      }}
                      className="cursor-pointer text-xl font-semibold text-gray-800 hover:underline "
                    >
                      {item.title}
                    </a>
                    <div className="text-xl flex gap-4 justify-end mr-12">
                      <div className="">
                        <FontAwesomeIcon
                          className=""
                          icon={faThumbsUp}
                          // onClick={() => likeFunction(item._id)}
                        />
                        <p className="text-sm flex justify-center">
                          {item.like}
                        </p>
                      </div>
                      <div>
                        <FontAwesomeIcon
                          className=""
                          icon={faThumbsDown}
                          // onClick={() => dislikeFunction(item._id)}
                        />
                        <p className="text-sm flex justify-center">
                          {item.dislike}
                        </p>
                      </div>
                    </div>
                    <span className="text-sm text-gray-500 ">
                      {/* On: 20 October 2019 */}
                    </span>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>
    </div>
  );
};
