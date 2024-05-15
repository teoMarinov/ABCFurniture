const SortingOptions = () => {
  return (
    <div className="py-4 ">
      <div className="flex items-center justify-between w-full">
        <div className="flex gap-x-3">
          <div className="size-9 border border-black rounded-md">1</div>
          <div className="size-9 border border-black rounded-md">2</div>
        </div>
        <div className="flex gap-x-1 items-center">
          <p>Sort by:</p>
          <div className="w-40 border border-black p-1 rounded-md mr-24">name ^</div>
          <p>Show: </p>{" "}
          <div className="w-40 border border-black p-1 rounded-md">12</div>
        </div>
      </div>
    </div>
  );
};

export default SortingOptions;
