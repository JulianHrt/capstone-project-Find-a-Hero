import useSWR, { mutate } from "swr";
import { fetcher } from "./api";

function getLoggedInUser(id) {
  const { data: user } = useSWR(`/api/users/${id}`, fetcher, mutate);

  mutate(`/api/users/${id}`);
  return user;
}

export { getLoggedInUser };
