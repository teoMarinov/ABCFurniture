import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

interface ImageDialogProps {
  img: string;
}
const ImageDialog = ({ img }: ImageDialogProps) => {
  return (
    <Dialog>
      <DialogTrigger>
        <img src={img} className="size-[200px]" />
      </DialogTrigger>
      <DialogContent className="p-0">
        <img src={img} className="size-full" />
      </DialogContent>
    </Dialog>
  );
};

export default ImageDialog;
