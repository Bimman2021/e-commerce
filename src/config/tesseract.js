import { createWorker } from "tesseract.js";
async function runTesseract(url) {
  //
  const worker = await createWorker({
    logger: (m) => console.log(m),
  });

  const workIt = async () => {
    await worker.loadLanguage("eng");
    await worker.initialize("eng");
    const {
      data: { text },
    } = await worker.recognize(
      url || "https://tesseract.projectnaptha.com/img/eng_bw.png"
    );
    await worker.terminate();
    return text;
  };
  return workIt();
}

export default runTesseract;
