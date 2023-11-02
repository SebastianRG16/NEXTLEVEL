import axios from "axios";
import { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";

const URL = "https://next-level-b.fly.dev/api/user/register";

export const RegistrarLogin = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = handleSubmit(async (data) => {
    setIsLoading(!isLoading);
    await toast.promise(
      axios
        .post(URL, {
          name: data.name,
          last_name: data.apellidos,
          email: data.email,
          password: data.password,
          type_user: data.user,
          birthdate: data.fechaNacimiento,
        })
        .then(async () => {
          navigate("/home");
        }),
      {
        loading: "Verificando...",
        success: <b>Credenciales correctas!</b>,
        error: <b>Credenciales incorrectas</b>,
      }
    );
    setIsLoading(!isLoading);
  });

  return (
    <div className="">
      <form onSubmit={onSubmit}>
        <div className="mb-1">
          <label className="block mb-2 text-sm text-gray-600 ">Nombres</label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Nombre completo"
            className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
            {...register("name", { required: true })}
          />
          {errors.name && (
            <span className="flex text-red-600 text-[10px] font-semibold ml-2 sm:text-[12px] md:text-[13px] lg:text-[10px] xl:text-[12px] 2xl:text-[16px]">
              Este campo es requerido
            </span>
          )}
        </div>
        <div className="mb-1">
          <label className="block mb-2 text-sm text-gray-600 ">Apellidos</label>
          <input
            type="text"
            name="apellidos"
            id="apellidos"
            placeholder="Apellido completo"
            className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
            {...register("apellidos", { required: true })}
          />
          {errors.apellidos && (
            <span className="flex text-red-600 text-[10px] font-semibold ml-2 sm:text-[12px] md:text-[13px] lg:text-[10px] xl:text-[12px] 2xl:text-[16px]">
              Este campo es requerido
            </span>
          )}
        </div>
        <div className="mb-1">
          <label className="block mb-2 text-sm text-gray-600 ">
            Correo electronico
          </label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Correo electronico"
            className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
            {...register("email", { required: true })}
          />
          {errors.email && (
            <span className="flex text-red-600 text-[10px] font-semibold ml-2 sm:text-[12px] md:text-[13px] lg:text-[10px] xl:text-[12px] 2xl:text-[16px]">
              Este campo es requerido
            </span>
          )}
        </div>
        <div className="mb-1">
          <label className="block mb-2 text-sm text-gray-600 ">
            Tipo de usuario
          </label>
          <input
            type="text"
            name="user"
            id="user"
            placeholder="Escoja el tipo de usuario"
            className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
            {...register("user", { required: true })}
          />
          {errors.user && (
            <span className="flex text-red-600 text-[10px] font-semibold ml-2 sm:text-[12px] md:text-[13px] lg:text-[10px] xl:text-[12px] 2xl:text-[16px]">
              Este campo es requerido
            </span>
          )}
        </div>
        <div className="mb-1">
          <label className="block mb-2 text-sm text-gray-600 ">
            Fecha de nacimiento
          </label>
          <input
            type="date"
            name="fechaNacimiento"
            id="fechaNacimiento"
            placeholder="Digite el nombre de usuario"
            className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
            {...register("fechaNacimiento", { required: true })}
          />
          {errors.fechaNacimiento && (
            <span className="flex text-red-600 text-[10px] font-semibold ml-2 sm:text-[12px] md:text-[13px] lg:text-[10px] xl:text-[12px] 2xl:text-[16px]">
              Este campo es requerido
            </span>
          )}
        </div>
        <div className="mb-1">
          <label className="block mb-2 text-sm text-gray-600 ">
            Contraseña
          </label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Contraseña"
            className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
            {...register("password", { required: true })}
          />
          {errors.password && (
            <span className="flex text-red-600 text-[10px] font-semibold ml-2 sm:text-[12px] md:text-[13px] lg:text-[10px] xl:text-[12px] 2xl:text-[16px]">
              Este campo es requerido
            </span>
          )}
        </div>
        <div className="mt-1">
          {/* <div className="flex justify-between mb-2">
            <label className="text-sm text-gray-600">Contraseña</label>
          </div>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Digite su contraseña"
            className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
          /> */}
          <button className="mb-2 mt-6 w-full px-4 py-2 tracking-wide text-white transition-all duration-300 transform bg-slate-900 rounded-lg hover:bg-gray-700 focus:outline-none focus:bg-gray-700 focus:ring  focus:ring-opacity-50 hover:scale-105 hover:shadow-md">
            Registrar
          </button>
          <Link
            to="/"
            className="cursor-pointer flex text-center justify-center w-full px-4 py-2 tracking-wide text-white transition-all duration-300 transform bg-slate-900 rounded-lg hover:bg-gray-700 focus:outline-none focus:bg-gray-700 focus:ring  focus:ring-opacity-50 hover:scale-105 hover:shadow-md"
          >
            Cancelar
          </Link>
        </div>
      </form>
    </div>
  );
};
