import { BASE_URL } from "./constant";
import axios from 'axios';

export async function getAllData() {
  const response = await axios.get(`${BASE_URL}`);
  return response;
}
