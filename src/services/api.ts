import axios from "axios";
import type { Home, CreateHomeData } from "../types/Home";

const API_BASE_URL = "http://localhost:3001";

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export const homeService = {
  // GET /homes - Get all homes
  getAllHomes: async (): Promise<Home[]> => {
    const response = await api.get("/homes");
    return response.data;
  },

  // GET /homes/:id - Get home by ID
  getHomeById: async (id: number): Promise<Home> => {
    const response = await api.get(`/homes/${id}`);
    return response.data;
  },

  // POST /homes - Create new home
  createHome: async (homeData: CreateHomeData): Promise<Home> => {
    const response = await api.post("/homes", homeData);
    return response.data;
  },

  // PUT /homes/:id - Update home
  updateHome: async (
    id: number,
    homeData: Partial<CreateHomeData>
  ): Promise<Home> => {
    const response = await api.put(`/homes/${id}`, homeData);
    return response.data;
  },

  // DELETE /homes/:id - Delete home
  deleteHome: async (id: number): Promise<void> => {
    await api.delete(`/homes/${id}`);
  },
};

export default api;
