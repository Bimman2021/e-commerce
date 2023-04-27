import axios from "./axios";
export async function refresh() {
  const res = await axios.get("/token", { data: 1 });
  return res;
}
