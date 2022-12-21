export const buildQuery = (
  q: string,
  k: string | undefined,
  v: string | undefined | number
) =>
  !v
    ? ""
    : !k && v
    ? "/" + v + "?"
    : q.endsWith("&")
    ? k + "=" + v + "&"
    : q.endsWith("?")
    ? k + "=" + v + "&"
    : "?" + k + "=" + v + "&";
