import { supabase } from "./supabase";

export function debounce(fn, delay) {
  let timeout;

  return function (...args) {
    clearTimeout(timeout);
    timeout = setTimeout(() => fn(...args), delay);
  };
}

// Note: This may be insecure as it is only checking the localStorage
export async function requireAuth() {
  const { data, error } = await supabase.auth.getSession();

  if (error) {
    console.error(error);
    return false;
  }

  if (data.session) {
    return true;
  }

  return false;
}

// https://github.com/mui/material-ui/blob/master/packages/mui-material/src/usePagination/usePagination.js#L39
export function range(start, end) {
  return Array.from({ length: end - start + 1 }, (_, i) => i + start);
}
