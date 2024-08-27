import api from "./api";
import useAuthStore from "../stores/auth";

//CategoryType endpoints
export const getCategoryPrice = async (filters = {}) => {
  const { data } = await api.get("/categoryPrice", { params: filters });
  return data;
};

// Videos

export const getVideos = async (filters = {}) => {
  const { data } = await api.get(`/video`, { params: filters });
  return data;
};
export const deleteVideos = async (_id) => {
  const { data } = await api.delete(`/video/${_id}`);
  return data;
};

export const createVideos = async (newVideo) => {
  const { data } = await api.post(`/video`, newVideo);
  return data;
};

export async function updateVideos({ _id, body }) {
  const { data } = await api.put(`/video/${_id}`, body);

  return data;
}

//user
export async function getUsers() {
  const { data } = await api.get("/user");
  return data;
}

export async function deleteUser(_id) {
  const { data } = await api.delete(`/user/${_id}`);
  return data;
}

export async function updateUser({ _id, newUserData }) {
  const { data } = await api.put(`/user/${_id}`, newUserData);

  return data;
}

export async function createUser(newUser) {
  const { data } = await api.post(`/user`, newUser);
  return data;
}

export const login = async (credentials) => {
  const { setAuth, setUser } = useAuthStore.getState();
  const { data } = await api.post("/user", credentials);
  setAuth(data.token);
  setUser(data.user);
  return data;
}
