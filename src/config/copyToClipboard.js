import { toast } from "react-toastify";

export default async function handleCopy(text) {
  try {
    await navigator.clipboard.writeText(text);
    toast.success("Text successfully copied to clipboard!", {
      position: "bottom-center",
      theme: "colored",
      hideProgressBar: true,
    });
  } catch (err) {
    toast.error("Unable to copy text to clipboard.");
  }
}
