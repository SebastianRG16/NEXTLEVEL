import axios from "axios";
import { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";

const URL = "http://localhost:3000/api/user/login/";

export const IngresarLogin = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = handleSubmit(async (data) => {
    setIsLoading(!isLoading);
    await axios
      .get(`${URL}${data.username}/${data.password}`)
      .then(async (response) => {
        if (response.status === 200) {
          console.log(response);
          if (!response.data.msg) {
            console.log(response.data._id);
            localStorage.setItem("user", response.data._id);
            toast.success("Bienvenido a Next Level");
            if (response.data.type_user === "TEACHER") {
              navigate("teacher/");
            } else {
              navigate("home/");
            }
          } else {
            toast.error("Credenciales incorrectas");
          }
        }
      }),
      setIsLoading(!isLoading);
  });

  return (
    <div className="">
      <form onSubmit={onSubmit}>
        <p className="text-gray-500 justify-center flex mb-10">
          Ingrese con su cuenta
        </p>
        <div>
          <label className="block mb-2 text-sm text-gray-600 ">
            Correo electronico
          </label>
          <input
            type="email"
            name="username"
            id="username"
            placeholder="Digite el correo electronico"
            className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
            {...register("username", { required: true })}
          />
          {errors.username && (
            <span className="flex text-red-600 text-[10px] font-semibold ml-2 sm:text-[12px] md:text-[13px] lg:text-[10px] xl:text-[12px] 2xl:text-[16px]">
              Este campo es requerido
            </span>
          )}
        </div>

        <div className="mt-6">
          <div className="flex justify-between mb-2">
            <label className="text-sm text-gray-600">Contraseña</label>
          </div>

          <input
            type="password"
            name="password"
            id="password"
            placeholder="Digite su contraseña"
            className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
            {...register("password", { required: true })}
          />
          {errors.password && (
            <span className="flex text-red-600 text-[10px] font-semibold ml-2 sm:text-[12px] md:text-[13px] lg:text-[10px] xl:text-[12px] 2xl:text-[16px]">
              Este campo es requerido
            </span>
          )}
          <button className="mb-2 mt-6 w-full px-4 py-2 tracking-wide text-white transition-all duration-300 transform bg-slate-900 rounded-lg hover:bg-gray-700 focus:outline-none focus:bg-gray-700 focus:ring  focus:ring-opacity-50 hover:scale-105 hover:shadow-md">
            Ingresar
          </button>
          <Link
            to="/register"
            className="cursor-pointer flex text-center justify-center w-full px-4 py-2 tracking-wide text-white transition-all duration-300 transform bg-slate-900 rounded-lg hover:bg-gray-700 focus:outline-none focus:bg-gray-700 focus:ring  focus:ring-opacity-50 hover:scale-105 hover:shadow-md"
          >
            Registrar
          </Link>
        </div>
      </form>
    </div>
  );
};
