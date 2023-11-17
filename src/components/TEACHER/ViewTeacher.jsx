import axios from "axios";
import { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

const URL = "http://localhost:3000/api/courses/subir-curso";

export const ViewTeacher = () => {
  const [videoFileName, setVideoFileName] = useState("");
  const [ImageFileName, setImageFileName] = useState("");
  const [video, setVideo] = useState(null);
  const [image, setImage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formSubmittedImage, setFormSubmittedImage] = useState(false);
  //   const [totalPuntaje, setTotalPuntaje] = useState(0);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [preguntas, setPreguntas] = useState([
    { pregunta: "", respuestas: [{ name: "", puntaje: 0 }] },
  ]);

  const calcularPuntajeTotal = () => {
    let total = 0;
    preguntas.forEach((pregunta) => {
      pregunta.respuestas.forEach((respuesta) => {
        total += respuesta.puntaje;
      });
    });
    return total;
  };
  //   const handleAñadirRespuesta = (index) => {
  //     const newPreguntas = [...preguntas];
  //     newPreguntas[index].respuestas.push("");
  //     setPreguntas(newPreguntas);
  //   };

  const handleAñadirPregunta = () => {
    setPreguntas([
      ...preguntas,
      { pregunta: "", respuestas: [{ name: "", puntaje: 0 }] },
    ]);
    // setPreguntas([...preguntas, { pregunta: "", respuestas: [""] }]);
  };

  const handleAñadirRespuesta = (index) => {
    const newPreguntas = [...preguntas];
    newPreguntas[index].respuestas.push({ name: "", puntaje: 0 });
    setPreguntas(newPreguntas);
  };

  const onSubmit = handleSubmit(async (data) => {
    // console.log(preguntas);
    let valid = true;

    preguntas.forEach((pregunta) => {
      if (!pregunta.pregunta.trim()) {
        valid = false;
      }

      pregunta.respuestas.forEach((respuesta) => {
        if (!respuesta.name.trim()) {
          valid = false;
        }
      });
    });

    console.log(valid);
    if (valid === false) {
      toast.error("Faltan datos del cuestionario por llenar");
    }

    if (videoFileName !== "" && valid === true) {
      console.log(typeof preguntas);
      const puntajeTotal = calcularPuntajeTotal();
      // const preguntasData = JSON.stringify(preguntas);
      const miDato = localStorage.getItem("user");

      const formData = new FormData();
      formData.append("title", data.name);
      formData.append("description", data.description);
      formData.append("teacher_id", miDato);
      // // formData.append("miniature_url", data.name);
      formData.append("video", video);
      formData.append("max_points", puntajeTotal);
      preguntas.forEach((item, index) => {
        formData.append(`asks[${index}][pregunta]`, item.pregunta);
        item.respuestas.forEach((respuesta, respuestaIndex) => {
          formData.append(
            `asks[${index}][respuestas][${respuestaIndex}][name]`,
            respuesta.name
          );
          formData.append(
            `asks[${index}][respuestas][${respuestaIndex}][puntaje]`,
            respuesta.puntaje.toString()
          );
        });
      });
      // formData.append("asks",);

      console.log(formData);

      console.log(puntajeTotal);
      console.log(video);
      console.log(data);
      console.log(preguntas);

      setIsLoading(!isLoading);
      await toast.promise(
        axios

          .post(URL, formData, {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          })
          .then(async () => {
            // Navigate("/");
            // toast.success("curso creado correctamente");
          }),
        {
          loading: "Verificando...",
          success: <b>Curso agregado con exito!</b>,
          error: <b>Error creando curso</b>,
        }
      );
      setIsLoading(!isLoading);
    }
  });

  // esto es para el video
  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    setVideoFileName(file.name);
    setVideo(file);
  };

  const handleDrop = (event) => {
    event.preventDefault();
    const file = event.dataTransfer.files[0];
    setVideoFileName(file.name);
    setVideo(file);
  };

  const preventDefault = (event) => {
    event.preventDefault();
  };

  // esto es para la miniatura
  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    setImageFileName(file.name);
    setImage(file);
  };

  const handleImage = (event) => {
    event.preventDefault();
    const file = event.dataTransfer.files[0];
    setImageFileName(file.name);
    setImage(file);
  };

  const preventImage = (event) => {
    event.preventDefault();
  };

  return (
    <div>
      <section className="max-w-4xl p-6 mx-auto bg-white rounded-md shadow-2xl mt-20">
        <h2 className="text-lg font-semibold text-gray-700 capitalize ">
          Crear video
        </h2>

        <form onSubmit={onSubmit}>
          <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
            <div>
              <div>
                <label className="text-gray-700 ">Nombre del video</label>
                <input
                  id="name"
                  type="text"
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md  focus:border-blue-500  focus:outline-none focus:ring"
                  {...register("name", { required: true })}
                />
                {errors.name && (
                  <span className="flex text-red-600 text-[10px] font-semibold ml-2 sm:text-[12px] md:text-[13px] lg:text-[10px] xl:text-[12px] 2xl:text-[16px]">
                    Este campo es requerido
                  </span>
                )}
              </div>

              <div>
                <label className="text-gray-700 ">Descripcion del video</label>
                <textarea
                  id="description"
                  type="text"
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md  focus:border-blue-500  focus:outline-none focus:ring"
                  {...register("description", { required: true })}
                />
                {errors.name && (
                  <span className="flex text-red-600 text-[10px] font-semibold ml-2 sm:text-[12px] md:text-[13px] lg:text-[10px] xl:text-[12px] 2xl:text-[16px]">
                    Este campo es requerido
                  </span>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Video
                </label>
                <div
                  className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md"
                  onDrop={handleDrop}
                  onDragOver={preventDefault}
                >
                  <div className="space-y-1 text-center">
                    <svg
                      className="mx-auto h-12 w-12 text-gray-700"
                      stroke="currentColor"
                      fill="none"
                      viewBox="0 0 48 48"
                      aria-hidden="true"
                    >
                      <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" />
                    </svg>
                    <div className="flex text-sm text-gray-600">
                      <label className="relative cursor-pointer bg-gray-300 rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500">
                        <span className="">Cargue un video</span>
                        <input
                          id="file-upload"
                          name="file-upload"
                          type="file"
                          className="sr-only"
                          onChange={handleFileUpload}
                        />
                      </label>
                      <p className="pl-1 text-gray-700">o arrastre y suelte</p>
                    </div>
                    <p className="text-xs text-gray-700">{videoFileName}</p>
                  </div>
                </div>
                {formSubmitted === true && videoFileName === "" ? (
                  <span className="flex text-red-600 text-[10px] font-semibold ml-2 sm:text-[12px] md:text-[13px] lg:text-[10px] xl:text-[12px] 2xl:text-[16px]">
                    Este campo es requerido
                  </span>
                ) : (
                  <span></span>
                )}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Miniatura
                </label>
                <div
                  className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md"
                  onDrop={handleImage}
                  onDragOver={preventImage}
                >
                  <div className="space-y-1 text-center">
                    <svg
                      className="mx-auto h-12 w-12 text-gray-700"
                      stroke="currentColor"
                      fill="none"
                      viewBox="0 0 48 48"
                      aria-hidden="true"
                    >
                      <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" />
                    </svg>
                    <div className="flex text-sm text-gray-600">
                      <label className="relative cursor-pointer bg-gray-300 rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500">
                        <span className="">Cargue una imagen</span>
                        <input
                          id="file-upload"
                          name="file-upload"
                          type="file"
                          className="sr-only"
                          onChange={handleImageUpload}
                        />
                      </label>
                      <p className="pl-1 text-gray-700">o arrastre y suelte</p>
                    </div>
                    <p className="text-xs text-gray-700">{ImageFileName}</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="">
                <div className="w-full flex flex-col h-fit gap-4 ">
                  <p className="text-blue-900 text-xl font-extrabold">
                    Cuestionario de aprendizaje
                  </p>

                  {preguntas.map((pregunta, index) => (
                    <div
                      key={index}
                      className="flex flex-col p-4 shadow-md border rounded-sm"
                    >
                      <div className="flex flex-col gap-3">
                        <div className="flex flex-row gap-6 items-center">
                          <div className="flex flex-col gap-1 w-full">
                            <div>
                              <label className="text-gray-700">
                                Pregunta #{index + 1}
                              </label>
                              <input
                                type="text"
                                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md focus:border-blue-500 focus:outline-none focus:ring"
                                value={pregunta.pregunta}
                                onChange={(e) => {
                                  const newPreguntas = [...preguntas];
                                  newPreguntas[index].pregunta = e.target.value;
                                  setPreguntas(newPreguntas);
                                }}
                              />
                            </div>
                            {pregunta.respuestas.map(
                              (respuesta, respuestaIndex) => (
                                <div key={respuestaIndex}>
                                  <label className="text-gray-700">
                                    Respuesta #{respuestaIndex + 1}
                                  </label>
                                  <input
                                    type="text"
                                    className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md focus:border-blue-500 focus:outline-none focus:ring"
                                    value={respuesta.name}
                                    onChange={(e) => {
                                      const newPreguntas = [...preguntas];
                                      newPreguntas[index].respuestas[
                                        respuestaIndex
                                      ].name = e.target.value;
                                      setPreguntas(newPreguntas);
                                    }}
                                  />
                                  <label className="text-gray-700">
                                    Puntaje para Respuesta #{respuestaIndex + 1}
                                  </label>
                                  <input
                                    type="number"
                                    className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md focus:border-blue-500 focus:outline-none focus:ring"
                                    value={respuesta.puntaje}
                                    onChange={(e) => {
                                      const newPreguntas = [...preguntas];
                                      newPreguntas[index].respuestas[
                                        respuestaIndex
                                      ].puntaje = parseInt(e.target.value);
                                      setPreguntas(newPreguntas);
                                    }}
                                  />
                                </div>
                              )
                            )}
                          </div>
                        </div>
                        <div className="self-center text-center">
                          <a
                            onClick={() => handleAñadirRespuesta(index)}
                            className="cursor-pointer font-bold px-6 py-2 leading-5 text-white transition-colors duration-200 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600"
                          >
                            Añadir respuesta
                          </a>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex w-full justify-end mt-3">
                <a
                  onClick={handleAñadirPregunta}
                  className="cursor-pointer px-6 py-2 leading-5 text-white transition-colors duration-200 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600"
                >
                  Agregar pregunta
                </a>
              </div>
            </div>
          </div>
          <div className="flex justify-end mt-6">
            <button
              onClick={() => setFormSubmitted(true)}
              className="px-6 py-2 leading-5 text-white transition-colors duration-200 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600"
            >
              Save
            </button>
          </div>
        </form>
      </section>
    </div>
  );
};
