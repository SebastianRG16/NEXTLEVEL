// import { Link } from "react-router-dom";
import CORTOMETRAJE from "../../assets/CORTOMETRAJE.mp4";

export const ViewCurso = ({ video, cambiarEstado }) => {
  console.log(video);
  console.log(video && video.video_url);

  return (
    <div>
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
          <video
            controls
            className="w-full my-5 rounded-lg md:h-[500px]"
          >
            <source
              src={video && video.video_url}
              type="video/mp4"
            />
            Tu navegador no admite la reproducción de videos.
          </video>
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

        <footer className="mt-12 text-center">
          <h1 className="font-medium text-xl text-gray-800 ">
            Por favor responder unicamente cuando halla finalizado el curso
          </h1>

          <div className="mt-6">de aca para abajo va la encuesta</div>
        </footer>
      </section>
    </div>
  );
};
