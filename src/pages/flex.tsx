const FlexPage: React.FC = () => {
  return (
    <div>
      <div className="text-white">
        <div className="mb-4 flex justify-between ">
          <div className="flex h-16 w-16 items-center justify-center  bg-cyan-100">
            1
          </div>
          <div className="flex h-16 w-16 items-center justify-center  bg-purple-800">
            2
          </div>
          <div className="flex h-16 w-16 items-center justify-center  bg-green-800">
            3
          </div>
        </div>

        <div className="mb-4 flex justify-between ">
          <div className="flex h-16 w-16 items-center justify-center  bg-blue-800">
            4
          </div>
          <div className="flex h-16 w-16 items-center justify-center  bg-pink-800">
            5
          </div>
          <div className="flex h-16 w-16 items-center justify-center  bg-yellow-800">
            6
          </div>
        </div>

        <div className="mb-4 flex justify-between ">
          <div className="flex h-16 w-16 items-center justify-center  bg-yellow-400 ">
            7
          </div>
          <div className="flex h-16 w-16 items-center justify-center  bg-gray-800">
            8
          </div>
          <div className="flex h-16 w-16 items-center justify-center  bg-rose-800">
            9
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlexPage;
