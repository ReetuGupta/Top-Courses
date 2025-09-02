export const Filter = ({ filterData, category, setCategory }) => {
  function handleFilter(title) {
    setCategory(title);
  }

  return (
    <div className="flex items-center justify-center flex-wrap sm:flex-col md:flex-row gap-5 font-medium capitalize lg:text-2xl mt-5">
      {filterData.map((data) => {
        return (
          <button
            key={data.id}
            onClick={() => handleFilter(data.title)}
            className={`px-6 py-1 rounded-full cursor-pointer transition-all
          ${
            category === data.title
              ? "bg-gradient-to-r from-cyan-400 to-blue-500 text-white scale-110 shadow"
              : "bg-gray-200 text-gray-700 hover:bg-gray-300"
          }`}
          >
            {data.title}
          </button>
        );
      })}
    </div>
  );
};
