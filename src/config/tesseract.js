import { createWorker } from "tesseract.js";
async function runTesseract(url) {
  const worker = await createWorker({
    logger: (m) => console.log(m),
  });

  (async () => {
    await worker.loadLanguage("eng");
    await worker.initialize("eng");
    const {
      data: { text },
    } = await worker.recognize(
      url || "https://tesseract.projectnaptha.com/img/eng_bw.png"
    );
    console.log(text);
    await worker.terminate();
  })();
}

export default runTesseract;
