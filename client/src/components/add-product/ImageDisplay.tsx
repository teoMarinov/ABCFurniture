interface ImageDisplayProps {}
const ImageDisplay = ({}: ImageDisplayProps) => {
  return (
    <div className=" h-[790px] flex items-center">
      <div className="h-full w-[600px] grid grid-rows-4 grid-cols-3 gap-4">
        <div className="row-span-3 col-span-3 bg-purple-400">01</div>
        <div className=" bg-purple-400">02</div>
        <div className=" bg-purple-400">03</div>
        <div className=" bg-purple-400">03</div>
      </div>
    </div>
  );
};

export default ImageDisplay;
