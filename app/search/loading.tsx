const loading = () => {
  return (
    <ul className="py-4 divide-y divide-gray-200 bg-white shadow-md rounded-md mt-5 border">
      {[1, 2, 3, 4].map((index) => (
        <li
          className="mx-auto py-4 px-8 flex flex-col space-y-2 sm:flex-row space-x-4 w-full items-center justify-center animate-pulse"
          key={index}
        >
          <div className="rounded-lg bg-gray-300 h-40 w-40 " />
          <div className="w-full flex-1 space-y-4 py-1">
            <div className="h-10 bg-gray-300 rounded w-full" />
            <div className="space-y-2">
              <div className="h-4 bg-gray-300 rounded w-4/5 " />
              <div className="h-4 bg-gray-300 rounded w-4/5 " />
              <div className="h-4 bg-gray-300 rounded w-4/5 " />
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default loading;
