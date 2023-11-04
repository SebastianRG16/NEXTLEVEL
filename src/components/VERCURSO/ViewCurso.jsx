import { Link } from "react-router-dom";

export const ViewCurso = () => {
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
          <iframe
            className="w-full my-5 rounded-lg md:h-[500px]"
            src="https://www.youtube.com/embed/L6Jwa7al8os"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
          <div className="flex w-full">
            <div className="w-full flex">
              <p className="mt-0 text-black text-xl font-semibold">
                Titulo del video <br />
                <span className="font-light">
                  Autor: Sebastian Rodriguez Garzon
                </span>
              </p>
            </div>
            <div className="flex w-full justify-end">
              <Link to="/teacher">Todos los cursos</Link>
            </div>
          </div>
        </main>

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
