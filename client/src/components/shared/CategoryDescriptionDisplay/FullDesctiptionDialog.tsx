import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";
interface FullDesctiptionDialogProps {
  description: string;
}
const FullDesctiptionDialog = ({ description }: FullDesctiptionDialogProps) => {
  return (
    <Dialog>
      <DialogTrigger>
        <div className="w-full h-full absolute top-0 left-0" />
      </DialogTrigger>
      <DialogContent className="py-14">{description}</DialogContent>
    </Dialog>
  );
};

export default FullDesctiptionDialog;
