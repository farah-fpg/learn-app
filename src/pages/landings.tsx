const LandingsPage: React.FC = () => {
  return (
    <div>
      <div className="mt-5 mb-5">
        <p className="text-5xl">Hello, </p>
      </div>

      <div>
        <div>
          <div className="flex">
            <div>
              <div className="mb-4">
                <img
                  className="h-auto max-w-full"
                  src="/kucing.jpeg"
                  alt="image description"
                ></img>
              </div>

              <div>
                <div className="text-white">
                  <div className="flex justify-between ">
                    <div>
                      <div>
                        <img
                          className="h-auto max-w-full"
                          src="/kucing.jpeg"
                          alt="image description"
                        ></img>
                      </div>
                      <div>
                        <p className="text-center text-black">Lorem</p>
                        <p className="text-center text-black">012345</p>
                      </div>
                    </div>

                    <div>
                      <div>
                        <img
                          className="h-auto max-w-full"
                          src="/kucing.jpeg"
                          alt="image description"
                        ></img>
                      </div>
                      <div>
                        <p className="text-center text-black">Lorem</p>
                        <p className="text-center text-black">012345</p>
                      </div>
                    </div>

                    <div>
                      <div>
                        <img
                          className="h-auto max-w-full"
                          src="/kucing.jpeg"
                          alt="image description"
                        ></img>
                      </div>
                      <div>
                        <p className="text-center text-black">Lorem</p>
                        <p className="text-center text-black">012345</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div>
                <p className="text-black">Lorem</p>
              </div>

              <div className="text-white">
                <div>
                  <div>
                    <div>
                      <div>
                        <img
                          className=""
                          src="/kucing.jpeg"
                          alt="image description"
                        ></img>
                        <p className="text-center text-black">
                          Description is here
                        </p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <div>
                      <div>
                        <img
                          className=""
                          src="/kucing.jpeg"
                          alt="image description"
                        ></img>
                        <p className="text-center text-black">
                          Description is here
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          /*Start sini */
          <div>
            <div className="mt-4 mb-4 text-center text-black">
              <p> This is a description</p>
            </div>

            <div className="text-white">
              <div className="flex justify-between ">
                <div>
                  <div className="flex h-14 w-96 items-center justify-center  bg-cyan-100">
                    input
                  </div>
                </div>
                <div>
                  <div className="flex h-14 w-96 items-center justify-center  bg-purple-800">
                    input
                  </div>
                </div>
                <div>
                  <div className="flex h-14 w-96 items-center justify-center  bg-green-800">
                    input
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <form>
          <div className="mb-6">
            <label
              htmlFor="Feedback"
              className="mb-2 block text-sm font-medium text-gray-900 dark:text-gray-300"
            ></label>
            <input
              type="text"
              id="Feedback"
              className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
              placeholder="text area"
              required
            ></input>
          </div>
        </form>

        <div className="mt-5 mb-5 flex justify-center">
          <button
            type="button"
            className="rounded-lg bg-blue-700 px-6 py-3.5 text-center text-base font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default LandingsPage;
