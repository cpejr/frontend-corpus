import { useQuery } from "@tanstack/react-query";
import { toast } from "react-toastify";

import { getCategoryPrice } from "../../services/endpoints";

export function useGetCategoryPrice({
  filters,
  onSuccess = () => {},
  onError = (err) => toast.error(err),
} = {}) {
  return useQuery({
    queryKey: ["categoryPrice", filters],
    queryFn: () => getCategoryPrice(filters),
    onSuccess,
    onError,
  });
}
