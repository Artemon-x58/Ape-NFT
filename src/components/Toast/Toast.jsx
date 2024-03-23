import toast from "react-hot-toast";

export const notify = () =>
  toast.success("Success!", { style: customToastStyle });

const customToastStyle = {
  backgroundColor: "#dc3b5a",
  color: "#fff",
};
