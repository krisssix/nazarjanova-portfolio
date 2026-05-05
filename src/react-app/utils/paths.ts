export const getAssetPath = (path: string) => {
  const baseUrl = import.meta.env.BASE_URL;
  
  // If the path already starts with the base URL, don't prepend it again
  if (path.startsWith(baseUrl)) {
    return path;
  }

  // Handle paths starting with ./ or /
  if (path.startsWith('./')) {
    return `${baseUrl}${path.slice(2)}`;
  }
  if (path.startsWith('/')) {
    return `${baseUrl}${path.slice(1)}`;
  }
  
  return `${baseUrl}${path}`;
};
