import { faThumbsDown, faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

export const CursosTeacher = () => {
  return (
    <div>
      <section className="bg-white ">
        <div className="container px-6 py-10 mx-auto">
          <h1 className="text-3xl font-extrabold text-gray-800 capitalize lg:text-3xl ">
            Next Level
          </h1>

          <div className="grid grid-cols-1 gap-8 mt-8 md:mt-16 md:grid-cols-2">
            <div className="lg:flex">
              <img
                className="object-cover w-full h-56 rounded-lg lg:w-64"
                src="https://images.unsplash.com/photo-1515378960530-7c0da6231fb1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                alt=""
              />

              <div className="flex flex-col justify-between py-6 lg:mx-6">
                <a
                  href="#"
                  className="text-xl font-semibold text-gray-800 hover:underline "
                >
                  How to use sticky note for problem solving
                </a>
                <div className="text-xl flex gap-4 justify-end mr-12">
                  <div className="">
                    <FontAwesomeIcon icon={faThumbsUp} />
                    <p className="text-sm flex justify-center">0</p>
                  </div>
                  <div>
                    <FontAwesomeIcon icon={faThumbsDown} />
                    <p className="text-sm flex justify-center">0</p>
                  </div>
                </div>
                <span className="text-sm text-gray-500 ">
                  On: 20 October 2019
                </span>
              </div>
            </div>

            <div className="lg:flex">
              <img
                className="object-cover w-full h-56 rounded-lg lg:w-64"
                src="https://images.unsplash.com/photo-1497032628192-86f99bcd76bc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                alt=""
              />

              <div className="flex flex-col justify-between py-6 lg:mx-6">
                <Link
                  to="/curso"
                  className="text-xl font-semibold text-gray-800 hover:underline "
                >
                  How to use sticky note for problem solving
                </Link>

                <span className="text-sm text-gray-500 ">
                  On: 20 October 2019
                </span>
              </div>
            </div>

            <div className="lg:flex">
              <img
                className="object-cover w-full h-56 rounded-lg lg:w-64"
                src="https://images.unsplash.com/photo-1544654803-b69140b285a1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                alt=""
              />

              <div className="flex flex-col justify-between py-6 lg:mx-6">
                <a
                  href="#"
                  className="text-xl font-semibold text-gray-800 hover:underline"
                >
                  Morning routine to boost your mood
                </a>

                <span className="text-sm text-gray-500">
                  On: 25 November 2020
                </span>
              </div>
            </div>

            <div className="lg:flex">
              <img
                className="object-cover w-full h-56 rounded-lg lg:w-64"
                src="https://images.unsplash.com/photo-1530099486328-e021101a494a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1547&q=80"
                alt=""
              />

              <div className="flex flex-col justify-between py-6 lg:mx-6">
                <a
                  href="#"
                  className="text-xl font-semibold text-gray-800 hover:underline"
                >
                  All the features you want to know
                </a>

                <span className="text-sm text-gray-500">
                  On: 30 September 2020
                </span>
              </div>
            </div>

            <div className="lg:flex">
              <img
                className="object-cover w-full h-56 rounded-lg lg:w-64"
                src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1484&q=80"
                alt=""
              />

              <div className="flex flex-col justify-between py-6 lg:mx-6">
                <a
                  href="#"
                  className="text-xl font-semibold text-gray-800 hover:underline"
                >
                  Minimal workspace for your inspirations
                </a>

                <span className="text-sm text-gray-500">
                  On: 13 October 2019
                </span>
              </div>
            </div>

            <div className="lg:flex">
              <img
                className="object-cover w-full h-56 rounded-lg lg:w-64"
                src="https://images.unsplash.com/photo-1624996379697-f01d168b1a52?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                alt=""
              />

              <div className="flex flex-col justify-between py-6 lg:mx-6">
                <a
                  href="#"
                  className="text-xl font-semibold text-gray-800 hover:underline"
                >
                  What do you want to know about Blockchane
                </a>

                <span className="text-sm text-gray-500">
                  On: 20 October 2019
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
