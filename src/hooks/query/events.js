import { useMutation, useQuery } from "@tanstack/react-query";

import {
  getEvents,
  createEvents,
  getEventsByCategoryId,
  deleteEvents,
  updateEvents,
  getReadByName,
  getIsFavoritedEvent,
} from "../../services/endpoints";

export function useGetEvents({
  filters,
  onSuccess = () => {},
  onError = (err) => console.error(err),
} = {}) {
  return useQuery({
    queryKey: ["events", filters],
    queryFn: () => getEvents(filters),
    onSuccess,
    onError,
  });
}

export function useCreateEvents({
  onSuccess = () => {},
  onError = (err) => console.error(err),
} = {}) {
  return useMutation({ mutationFn: createEvents, onSuccess, onError });
}

export function useDeleteEvents({
  onSuccess = () => {},
  onError = (err) => console.error(err),
} = {}) {
  return useMutation({ mutationFn: deleteEvents, onSuccess, onError });
}

export function useUpdateEvents({
  onSuccess = () => {},
  onError = (err) => console.error(err),
} = {}) {
  return useMutation({ mutationFn: updateEvents, onSuccess, onError });
}
export function useGetEventsByCategoryId({
  id,
  name,
  type,
  dateRange,
  onSuccess = () => {},
  onError = (err) => console.error(err),
} = {}) {
  return useQuery({
    queryKey: ["events", { id, name, type, dateRange }],
    queryFn: () => getEventsByCategoryId({ id, name, type, dateRange }),
    onSuccess,
    onError,
  });
}
export function useGetReadByName({
  name,
  onSuccess = () => {},
  onError = (err) => console.error(err),
} = {}) {
  return useQuery({
    queryKey: ["events-by-name", { name }],
    queryFn: () => getReadByName({ name }),
    onSuccess,
    onError,
  });
}

export function useGetIsFavoritedEvent({
  userId,
  eventId,
  enabled,
  onSuccess = () => {},
  onError = (err) => console.error(err),
} = {}) {
  return useQuery({
    queryKey: ["events", { userId, eventId }],
    queryFn: () => getIsFavoritedEvent({ userId, eventId, enabled }),
    onSuccess,
    onError,
  });
}
