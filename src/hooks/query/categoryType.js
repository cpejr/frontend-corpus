import { useQuery } from "@tanstack/react-query";
import { toast } from "react-toastify";

import { getCategoryType } from "../../services/endpoints";

export function useGetCategoryType({
  filters,
  onSuccess = () => {},
  onError = (err) => toast.error(err),
} = {}) {
  return useQuery({
    queryKey: ["categoryType", filters],
    queryFn: () => getCategoryType(filters),
    onSuccess,
    onError,
  });
}
