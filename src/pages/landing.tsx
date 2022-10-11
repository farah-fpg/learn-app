const LandingPage: React.FC = () => {
  return (
    <div>
      <div className="mt-5 mb-5">
        <p className="text-center text-5xl">Hello, </p>
        <p className="text-center text-5xl">Farah 15</p>
      </div>

      <div className="mt-5 mb-5 flex justify-center">
        <button
          type="button"
          className="rounded-lg bg-blue-700 px-6 py-3.5 text-center text-base font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Button
        </button>
      </div>

      <div>
        <div className="text-white">
          <div className="flex justify-between ">
            <div>
              <div className="flex h-96 w-96 items-center justify-center  bg-cyan-100">
                1
              </div>
              <div>
                <p className="text-center text-black">Project 1</p>
                <p className="text-center text-black">
                  This text a project description.
                </p>
              </div>
            </div>

            <div>
              <div className="flex h-96 w-96 items-center justify-center  bg-purple-800">
                2
              </div>
              <div>
                <p className="text-center text-black">Project 2</p>
                <p className="text-center text-black">This text project 2.</p>
              </div>
            </div>
            <div>
              <div className="flex h-96 w-96 items-center justify-center  bg-green-800">
                3
              </div>
              <div>
                <p className="text-center text-black">Project 3</p>
                <p className="text-center text-black">Project 3 is so fun.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
