export default function Login() {
    return (
      <>
          <div className="flex flex-wrap justify-center h-full items-center bg-transparent backdrop-blur-2xl opacity-70 mx-20 mt-5 mb-16 rounded-3xl shadow-2xl">
              <div className="flex justify-center w-full text-white font-extrabold text-6xl ">
                  Login
              </div>
              <div className="flex flex-col">
                  <label>이름</label>
                  <input type="text"/>
              </div>
          </div>
      </>
    );
}