import { useMutation, useQuery } from "@tanstack/react-query";

import {
  getVideos,
  createVideos,
  deleteVideos,
  updateVideos,
  getVideosByCategoryId,
} from "../../services/endpoints";

export function useGetVideos({
  filters,
  onSuccess = () => {},
  onError = (err) => console.error(err),
} = {}) {
  return useQuery({
    queryKey: ["videos", filters],
    queryFn: () => getVideos(filters),
    onSuccess,
    onError,
  });
}

export function useCreateVideos({
  onSuccess = () => {},
  onError = (err) => console.error(err),
} = {}) {
  return useMutation({ mutationFn: createVideos, onSuccess, onError });
}

export function useDeleteVideos({
  onSuccess = () => {},
  onError = (err) => console.error(err),
} = {}) {
  return useMutation({ mutationFn: deleteVideos, onSuccess, onError });
}

export function useUpdateVideos({
  onSuccess = () => {},
  onError = (err) => console.error(err),
} = {}) {
  return useMutation({ mutationFn: updateVideos, onSuccess, onError });
}
export function useGetVideosByCategoryId({
  id,
  title,

  onSuccess = () => {},
  onError = (err) => console.error(err),
} = {}) {
  return useQuery({
    queryKey: ["videos", { id, title }],
    queryFn: () => getVideosByCategoryId({ id, title }),
    onSuccess,
    onError,
  });
}
