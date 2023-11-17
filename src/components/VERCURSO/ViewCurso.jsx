// import { Link } from "react-router-dom";
import axios from "axios";
// import CORTOMETRAJE from "../../assets/CORTOMETRAJE.mp4";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";

const URL = "http://localhost:3000/api/courses/video/";
const URL1 = "http://localhost:3000/api/quiz/quiz_answers";
const URL2 = "http://localhost:3000/api/courses/commnet/";

export const ViewCurso = ({ video, cambiarEstado }) => {
  console.log(video);
  console.log(video && video.video_url);
  const usuarioID = localStorage.getItem("user");
  const [data, setData] = useState(null);
  const [popup, setPopup] = useState(false);
  const [score, setScore] = useState(0);
  const [commentText, setCommentText] = useState("");
  // const [puntajesSeleccionados, setPuntajesSeleccionados] = useState({});
  const [respuestaSeleccionada, setRespuestaSeleccionada] = useState(0);

  const getVideo = async () => {
    if (video !== null) {
      try {
        // console.log(URL + video._id);
        // const response = await axios.get(URL + video._id);
        // setData(response.data);
        setData(URL + video._id);
        // console.log(response.data);
      } catch (error) {
        console.error("Error al obtener el video:", error);
      }
    }
  };

  const handleCommentChange = (event) => {
    setCommentText(event.target.value);
  };

  const newComentario = async () => {
    console.log(video._id);
    await axios.put(URL2 + video._id, {
      student_id: usuarioID,
      comment: commentText,
    });
  };

  const enviarCuestionario = async () => {
    let scoreTotal = 0;
    // console.log("enviando cuestionario");
    // console.log(video.max_points);
    // console.log(Object.values(respuestaSeleccionada));
    Object.values(respuestaSeleccionada).map(
      (item) => (
        // console.log(item),
        (scoreTotal = scoreTotal + item), console.log(scoreTotal)
      )
    );
    console.log(Math.round((scoreTotal * 100) / video.max_points));
    setScore(Math.round((scoreTotal * 100) / video.max_points));
    // console.log('video')
    // console.log(video._id)
    // console.log('usuario')
    // console.log(usuarioID)
    await axios
      .post(URL1, {
        result: Math.round((scoreTotal * 100) / video.max_points),
        student_id: usuarioID,
        course_id: video._id,
      })
      .then(async () => {
        setTimeout(() => {
          setPopup(true);
        }, 3000);
        setPopup(false);
        toast.success("Respuesta enviada a tu profesor");
      });
  };

  useEffect(() => {
    console.log(respuestaSeleccionada);
    // console.log(Object.keys(respuestaSeleccionada).length);
  }, [respuestaSeleccionada]);

  useEffect(() => {
    if (data === null) {
      getVideo();
    }
  }, [video]);

  return (
    <div>
      <div
        className={` ${
          popup ? "" : "hidden"
        } z-50 fixed left-0 top-0 flex h-full w-full items-center justify-center bg-black bg-opacity-50 py-10`}
      >
        <div className="max-h-full w-full max-w-xl overflow-y-auto sm:rounded-2xl bg-white">
          <div className="w-full">
            <div className="m-8 my-20 max-w-[400px] mx-auto">
              <div className="mb-8">
                <h1 className="mb-4 text-3xl text-center font-extrabold">
                  PUNTAJE OBTENIDO
                </h1>
                <p className="text-blue-600 text-4xl text-center">
                  {score && score} %
                </p>
              </div>
              <div className="space-y-4 w-full flex justify-center">
                <button
                  onClick={() => {
                    setPopup(false), cambiarEstado(), window.location.reload();
                  }}
                  className="flex text-center justify-center text-2xl p-3 bg-black rounded-full text-white w-full font-semibold"
                >
                  Volver
                </button>
                {/* <button className="p-3 bg-white border rounded-full w-full font-semibold">
                  Skip for now
                </button> */}
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="max-w-4xl px-6 py-8 mx-auto bg-white ">
        <header>
          <p className="flex justify-center text-3xl font-extrabold">
            {/* <img
              className="w-auto mx-auto h-7 sm:h-8"
              src="https://merakiui.com/images/full-logo.svg"
              alt=""
            /> */}
            NEXT LEVEL
          </p>
        </header>

        <main className="mt-0 h-full">
          {data && (
            <video controls className="w-full my-5 rounded-lg md:h-[500px]">
              <source src={data} type="video/mp4" />
              Tu navegador no admite la reproducción de videos.
            </video>
          )}
          {/* <iframe
            className="w-full my-5 rounded-lg md:h-[500px]"
            src="C:\\Users\\user\\Desktop\\UNIVERSIDAD\\MULTIMEDIA\\PROYECTO\\BACK\\next-level-b\\videos\\video-1699245980166CORTOMETRAJE.mp4"
            type="video/mp4"
            // title="YouTube video player"
            // allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          ></iframe> */}
          <div className="flex w-full">
            <div className="w-full flex">
              <p className="mt-0 text-black text-xl font-semibold">
                {video && video.title}
                <br />
                <span className="font-light">
                  Autor: {video && video.teacher_id.name}{" "}
                  {video && video.teacher_id.last_name}
                </span>
              </p>
            </div>
            <div className="flex w-full justify-end">
              <div className="flex h-10">
                <a
                  onClick={cambiarEstado}
                  // to="/teacher"
                  className="cursor-pointer text-center justify-center w-full px-4 py-2 tracking-wide text-white transition-all duration-300 transform bg-slate-900 rounded-lg hover:bg-gray-700 focus:outline-none focus:bg-gray-700 focus:ring  focus:ring-opacity-50 hover:scale-105 hover:shadow-md"
                >
                  Todos los cursos
                </a>
              </div>
            </div>
          </div>
        </main>

        <div className="mt-4">{video && video.description}</div>

        <div className="flex w-full justify-center">
          <div className="bg-white flex-col text-black w-full p-4 antialiased max-w-4xl flex">
            <div className="w-full flex flex-col mb-6">
              <div className="bg-gray-100 mb-2 rounded-3xl px-4 pt-2 pb-2.5 w-full">
                <div className="font-semibold text-sm leading-relaxed mb-2">
                  Crear un comentario nuevo
                </div>
                <div className="text-normal leading-snug md:leading-normal">
                  <textarea
                    className="w-full bg-slate-50 rounded-md"
                    name=""
                    id=""
                    cols="20"
                    rows="5"
                    value={commentText}
                    onChange={handleCommentChange}
                  ></textarea>
                </div>
              </div>
              <div className="flex w-full justify-end">
                <div className="flex h-10">
                  <a
                    onClick={newComentario}
                    // to="/teacher"
                    className="cursor-pointer text-center justify-center w-full px-4 py-2 tracking-wide text-white transition-all duration-300 transform bg-slate-900 rounded-lg hover:bg-gray-700 focus:outline-none focus:bg-gray-700 focus:ring  focus:ring-opacity-50 hover:scale-105 hover:shadow-md"
                  >
                    Enviar comentario
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <footer className="mt-12 text-center">
          <h1 className="font-medium text-xl text-gray-800 ">
            Por favor responder unicamente cuando haya finalizado el curso.
          </h1>
        </footer>
        <div className="mt-6">
          {video &&
            video.asks.map((pregunta, index) => (
              <div key={index} className="flex-col mb-6">
                <p>
                  {index + 1}. {pregunta.pregunta}
                </p>
                <div>
                  {pregunta &&
                    pregunta.respuestas.map((respuesta, indexP) => (
                      <div key={indexP}>
                        <label>
                          <input
                            type="radio"
                            name={`opciones-${index}`} // Usar un nombre único para cada pregunta
                            value={parseInt(respuesta.puntaje, 10)}
                            onChange={(e) => {
                              const newValue = parseInt(e.target.value, 10);
                              setRespuestaSeleccionada((prevState) => ({
                                ...prevState,
                                [index]: newValue,
                              }));
                            }}
                            checked={
                              respuestaSeleccionada[index] ===
                              parseInt(respuesta.puntaje, 10)
                            }
                          />
                          {respuesta.name}
                        </label>
                      </div>
                    ))}
                </div>
              </div>
            ))}
          <div className="flex w-full justify-end">
            <button
              onClick={() => enviarCuestionario()}
              className="w-[200px] mb-2 mt-6 px-4 py-2 tracking-wide text-white transition-all duration-300 transform bg-slate-900 rounded-lg hover:bg-gray-700 focus:outline-none focus:bg-gray-700 focus:ring  focus:ring-opacity-50 hover:scale-105 hover:shadow-md"
            >
              Enviar cuestionario
            </button>
          </div>
        </div>
      </section>
      <div className="flex w-full justify-center">
        <div className="bg-white flex-col text-black w-full p-4 antialiased max-w-4xl flex">
          <p className="ml-2 mb-6">Todos los comentarios</p>
          {video &&
            video.comments.map((item, index) => (
              <div key={index} className="w-full flex mb-6">
                <div className="bg-gray-100  rounded-xl px-4 pt-2 pb-2.5 w-full">
                  <div className="font-semibold text-sm leading-relaxed">
                    {item.student_id.name} {item.student_id.last_name}
                  </div>
                  <div className="text-normal leading-snug md:leading-normal">
                    {item.comment}
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};
