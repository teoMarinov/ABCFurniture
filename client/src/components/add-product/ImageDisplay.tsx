interface ImageDisplayProps {
  images: string[];
  handleOnChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
const ImageDisplay = ({ images = [], handleOnChange }: ImageDisplayProps) => {
  return (
    <div className=" h-[790px] flex items-center">
      <div className="h-full w-[600px] grid grid-rows-4 grid-cols-3 gap-4 overflow-hidden">
        <div className="row-span-3 col-span-3 flex items-center justify-center border-2 shadow-md rounded-md p-2">
          <img className="max-h-full max-w-full" src={images[0]} />
        </div>

        {images.slice(1).map((image: string) => (
          <div key={image} className="flex items-center justify-center border-2 shadow-md rounded-md p-1 ">
            <img className="max-h-full max-w-full" src={image} />
          </div>
        ))}
        <div className="flex items-center justify-center border-2 shadow-md rounded-md p-1">
          <input type="file" onChange={handleOnChange} accept="image/png, image/jpg"/>
        </div>
      </div>
    </div>
  );
};

export default ImageDisplay;
