import axios from "axios";

const uploadImage = async (image: File) => {
  const upload_preset = "jynhwbpv";
  const formData = new FormData();
  formData.append("file", image);
  formData.append("upload_preset", upload_preset);
  try {
    const { data } = await axios.post(
      "https://api.cloudinary.com/v1_1/dl5y0big3/image/upload",
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
        data: formData,
      }
    );
    return data.secure_url;
  } catch (err) {
    console.error(err);
  }
};

export default uploadImage;
