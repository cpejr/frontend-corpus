import api from "./api";
import useAuthStore from "../stores/auth";

//CategoryType endpoints

export const getCategoryType = async (filters = {}) => {
  const { data } = await api.get("/categoryType", { params: filters });
  return data;
};

//CategoryType endpoints
export const getCategoryPrice = async (filters = {}) => {
  const { data } = await api.get("/categoryPrice", { params: filters });
  return data;
};

// Events

export const getEvents = async (filters = {}) => {
  const { data } = await api.get(`/event`, { params: filters });
  return data;
};
export const deleteEvents = async (_id) => {
  const { data } = await api.delete(`/event/${_id}`);
  return data;
};

export const createEvents = async (newEvent) => {
  const { data } = await api.post(`/event`, newEvent);
  return data;
};

export async function updateEvents({ _id, body }) {
  const { data } = await api.put(`/event/${_id}`, body);

  return data;
}

export const getEventsByCategoryId = async ({ id, name, type, dateRange }) => {
  const { data } = await api.get("/event/search-by-category", {
    params: { id, name, type, dateRange },
  });

  return data;
};

export const getIsFavoritedEvent = async ({ userId, eventId, enabled }) => {
  const { data } = await api.get("/event/favorite", {
    params: { userId, eventId, enabled },
  });

  return data;
};

export async function getReadByName({ name }) {
  const { data } = await api.get("/event/search-by-name", {
    params: { name },
  });
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
export const login = async (credentials) => {
  const { setAuth, setUser } = useAuthStore.getState();
  const { data } = await api.post("/user", credentials);
  setAuth(data.token);
  setUser(data.user);
  return data;
};

export async function updateUser({ _id, newUserData }) {
  const { data } = await api.put(`/user/${_id}`, newUserData);

  return data;
}

export async function updateFavoritesEvents({ userId, ids }) {
  const { data } = await api.put(`/user/favoritesEvents/${userId}`, { ids });
  return data;
}

export async function getFavoritesEvents({ userId }) {
  const { data } = await api.get(`/user/favoritesEvents/${userId}`);
  return data;
}

export async function getFavoritesMemorials({ userId }) {
  const { data } = await api.get(`/user/favoritesMemorials/${userId}`);
  return data;
}

export async function updateFavoritesMemorials({ userId, ids }) {
  const { data } = await api.put(`/user/favoritesMemorials/${userId}`, { ids });
  return data;
}
