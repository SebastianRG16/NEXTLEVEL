import axios from "axios";
import { useEffect, useState } from "react";
import * as XLSX from "xlsx";

const URL = "http://localhost:3000/api/quiz/result-quiz-teacher/";
// const URL = 'http://localhost:3000/api/quiz/result-quiz-course/654a6887f290c8a0c7494211'

export const ResultQuestions = () => {
  const [data, setData] = useState(null);
  const [pageNumber, setPageNumber] = useState(0);
  const [search, setSearch] = useState("");

  const userPerPage = 8;

  const getDatos = async () => {
    const miDato = localStorage.getItem("user");
    // console.log(miDato);
    try {
      const response = await axios.get(URL + miDato);
      // console.log(URL + miDato);
      // setData(response.data);
      // console.log(response.data);
      // console.log("hola");
      if (response.data.msg) {
        // console.log("hola");
      } else {
        setData(response.data);
      }
      // console.log(response.data);
    } catch (error) {
      console.error("Error al obtener datos:", error);
    }
  };

  useEffect(() => {
    getDatos();
  }, []);

  const pagesVisited = pageNumber * userPerPage;

  const displayedusers = data
    ? data
        .filter((user) =>
          user.course.title.toLowerCase().includes(search.toLowerCase())
        )
        .slice(pagesVisited, pagesVisited + userPerPage)
    : [];

  const pageCount = Math.ceil((data ? data.length : 0) / userPerPage);

  const changePage = (selected) => {
    setPageNumber(selected);
  };

  const renderPageNumbers = () => {
    const pageNumbers = Array.from({ length: pageCount }, (_, i) => i);
    return pageNumbers.map((number) => (
      <button
        key={number}
        onClick={() => changePage(number)}
        className={`page-number px-2 py-1 text-sm   bg-blue-100/60 ${
          number === pageNumber ? "text-blue-500 rounded-md" : ""
        }`}
      >
        {number + 1}
      </button>
    ));
  };

  const downloadExcel = () => {
    const workbook = XLSX.utils.book_new();
    const sheetData = [];
    const rows = document.querySelectorAll("table tr");

    rows.forEach((row) => {
      const rowData = [];
      const cells = row.querySelectorAll("td, th");

      cells.forEach((cell) => {
        rowData.push(cell.textContent.trim());
      });

      sheetData.push(rowData);
    });

    const ws = XLSX.utils.aoa_to_sheet(sheetData);
    XLSX.utils.book_append_sheet(workbook, ws, "Resultados");

    XLSX.writeFile(workbook, "resultados_estudiantes.xlsx");
  };

  return (
    <div>
      <section className="container px-4 mx-auto">
        <div className="flex flex-col">
          <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
              <div className="gap-4 flex w-full mb-10">
                <p className="text-xl mb-4 font-bold w-1/2">
                  Datos del estudiante
                </p>
                <div className="flex justify-end w-1/2">
                  <input
                    type="search"
                    className="w-[200px] px-4 py-1 text-gray-800 border rounded-l-lg focus:outline-none"
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
                <button
                  onClick={downloadExcel}
                  className="bg-green-500 hover:bg-green-700 text-white h-[48px] font-bold py-0 px-4 rounded"
                >
                  Descargar Excel
                </button>
              </div>
              <div className="overflow-hidden border border-gray-200  md:rounded-lg">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th
                        scope="col"
                        className="py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-500"
                      >
                        <div className="flex items-center gap-x-3">
                          <button className="flex items-center gap-x-2">
                            <span>Nombre completo</span>
                          </button>
                        </div>
                      </th>

                      <th
                        scope="col"
                        className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 "
                      >
                        Email
                      </th>

                      <th
                        scope="col"
                        className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 "
                      >
                        Puntaje
                      </th>

                      <th
                        scope="col"
                        className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 "
                      >
                        Curso
                      </th>

                      <th
                        scope="col"
                        className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 "
                      >
                        Estado
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200 ">
                    {displayedusers &&
                      displayedusers.map((item, index) => (
                        <tr key={index}>
                          <td className="px-4 py-4 text-sm font-medium text-gray-700  whitespace-nowrap">
                            <div className="inline-flex items-center gap-x-3">
                              <span>
                                {item.student[0].name}{" "}
                                {item.student[0].last_name}
                              </span>
                            </div>
                          </td>
                          <td className="px-4 py-4 text-sm text-gray-500  whitespace-nowrap">
                            {item.student[0].email}
                          </td>
                          <td className="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                            <div className="inline-flex items-center px-3 py-1 rounded-full gap-x-2 text-blue-500 bg-blue-100/60 ">
                              {/* <svg
                                width="12"
                                height="12"
                                viewBox="0 0 12 12"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M10 3L4.5 8.5L2 6"
                                  stroke="currentColor"
                                />
                              </svg> */}

                              <h2 className="text-sm font-normal">
                                {item.result} %
                              </h2>
                            </div>
                          </td>
                          <td className="px-4 py-4 text-sm text-gray-500  whitespace-nowrap">
                            <div className="flex items-center gap-x-2">
                              <div>
                                <h2 className="text-sm font-medium text-gray-800 ">
                                  {item.course.title}
                                </h2>
                                {/* <p className="text-xs font-normal text-gray-600 ">
                                  authurmelo@example.com
                                </p> */}
                              </div>
                            </div>
                          </td>
                          <td className="px-4 py-4 text-sm text-gray-500  whitespace-nowrap">
                            {item.result > 50 ? (
                              <div className="inline-flex items-center px-3 py-1 rounded-full gap-x-2 text-green-500 bg-green-100/60 ">
                                <p className="">Aprobado</p>
                              </div>
                            ) : (
                              <div className="inline-flex items-center px-3 py-1 rounded-full gap-x-2 text-red-500 bg-red-100/60 ">
                                <p>Reprobado</p>
                              </div>
                            )}
                          </td>
                        </tr>
                      ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between mt-6">
          <a
            className="flex items-center px-5 py-2 text-sm text-gray-700 capitalize transition-colors duration-200 bg-white border rounded-md gap-x-2 hover:bg-gray-100 "
            onClick={() => changePage(Math.max(pageNumber - 1, 0))}
            disabled={pageNumber === 0}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              // stroke-width="1.5"
              stroke="currentColor"
              className="w-5 h-5 rtl:-scale-x-100"
            >
              <path
                // stroke-linecap="round"
                // stroke-linejoin="round"
                d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
              />
            </svg>

            <span>previous</span>
          </a>

          <div className="items-center hidden md:flex gap-x-3">
            {renderPageNumbers()}
          </div>

          <button
            className="flex items-center px-5 py-2 text-sm text-gray-700 capitalize transition-colors duration-200 bg-white border rounded-md gap-x-2 hover:bg-gray-100 dark:bg-gray-900 dark:text-gray-200 dark:border-gray-700 dark:hover:bg-gray-800"
            onClick={() => changePage(Math.min(pageNumber + 1, pageCount - 1))}
            disabled={pageNumber === pageCount - 1}
          >
            <span>Next</span>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              // stroke-width="1.5"
              stroke="currentColor"
              className="w-5 h-5 rtl:-scale-x-100"
            >
              <path
                // stroke-linecap="round"
                // stroke-linejoin="round"
                d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
              />
            </svg>
          </button>
        </div>
      </section>
    </div>
  );
};
