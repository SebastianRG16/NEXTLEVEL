export function LoginView() {
  return (
    <div>
      <div className="grid grid-cols-12">
        <div className="col-span-4 text-white font-sans font-bold bg-black min-h-screen pl-7">
          <div className="grid grid-rows-6 grid-flow-col min-h-screen items-center justify-items-start">
            <div className="row-span-4 row-start-2 text-4xl">
              Sign In
              <div className="pt-10 pr-20">
                <label className="text-sm font-sans font-medium">Username</label>
                <input
                  type="text"
                  name="username"
                  placeholder="Write your username"
                  className="w-full bg-black py-3 px-12 border hover: border-gray-500 rounded shadow text-base font-sans"
                />
              </div>
              <div className="pt-2 pr-20">
                <label className="text-sm font-sans font-medium">Password</label>
                <input
                  type="password"
                  name="password"
                  placeholder="Write your password"
                  className=" w-full bg-black py-3 px-12 border hover: border-gray-500 rounded shadow text-base font-sans"
                />
                <a
                  href=""
                  className="text-sm font-sans font-medium text-gray-600 underline"
                >
                  Forgot password?
                </a>
              </div>
              <div className="text-sm font-sans font-medium w-full pr-20 pt-14">
                <button
                  type="button"
                  className="text-center w-full py-4 bg-blue-700 hover:bg-blue-400 rounded-md text-white"
                >
                  SIGN IN
                </button>
              </div>
            </div>
            <a
              href=""
              className="text-sm font-sans font-medium text-gray-400 underline"
            >
              Don´t have an account? Sign up
            </a>
          </div>
        </div>

        <div className="banner col-span-8 text-white font-sans font-bold"></div>
      </div>

      {/* <style>
    .banner {
        background: url( 'https://s1.1zoom.me/b6058/448/Dogs_Svetlana_Shelemeteva_Hug_Little_girls_568770_1920x1080.jpg' );
        background-repeat: no-repeat;
        background-size: cover        
    }
</style> */}
    </div>
  );
}
