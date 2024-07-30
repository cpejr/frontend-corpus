import { useQuery, useMutation } from "@tanstack/react-query";
import {
  getUsers,
  deleteUser,
  updateUser,
  login,
  updateFavoritesEvents,
  updateFavoritesMemorials,
  getFavoritesEvents,
  getFavoritesMemorials,
} from "../../services/endpoints";

export function useGetUsers({
  onSuccess = () => {},
  onError = (err) => console.error(err),
} = {}) {
  return useQuery({
    queryKey: ["users"],
    queryFn: () => getUsers(),
    onSuccess,
    onError,
  });
}
export function useDeleteUsers({
  onSuccess = () => {},
  onError = (err) => console.error(err),
} = {}) {
  return useMutation({
    mutationFn: deleteUser,
    onSuccess,
    onError,
  });
}
export function useUpdateUsers({
  onSuccess = () => {},
  onError = (err) => console.error(err),
} = {}) {
  return useMutation({
    mutationFn: updateUser,
    onSuccess,
    onError,
  });
}

export function useLogin({
  onSuccess = () => {},
  onError = (err) => console.error(err),
} = {}) {
  return useMutation({
    mutationFn: login,
    onError,
    onSuccess,
  });
}

export function useUpdateFavoritesEvents({
  onSuccess = () => {},
  onError = (err) => console.error(err),
  userId,
  ids,
} = {}) {
  return useMutation({
    mutationFn: () => updateFavoritesEvents({ userId, ids }),
    onSuccess,
    onError,
  });
}

export function useUpdateFavoritesMemorials({
  onSuccess = () => {},
  onError = (err) => console.error(err),
  userId,
  ids,
} = {}) {
  return useMutation({
    mutationFn: () => updateFavoritesMemorials({ userId, ids }),
    onSuccess,
    onError,
  });
}

export function useGetFavoritesEvents({
  onSuccess = () => {},
  onError = (err) => console.error(err),
  userId,
} = {}) {
  return useQuery({
    queryKey: ["favoritesEvents", { userId }],
    queryFn: () => getFavoritesEvents({ userId }),
    onSuccess,
    onError,
  });
}

export function useGetFavoritesMemorials({
  onSuccess = () => {},
  onError = (err) => console.error(err),
  userId,
} = {}) {
  return useQuery({
    queryKey: ["favoritesMemorials", { userId }],
    queryFn: () => getFavoritesMemorials({ userId }),
    onSuccess,
    onError,
  });
}
