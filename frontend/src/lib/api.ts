export const apiUrl = (path: string) => {
  const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL?.replace(/\/$/, '');
  return `${backendUrl || ''}${path}`;
};
