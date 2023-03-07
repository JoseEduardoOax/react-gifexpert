export const getGifs = async (category) => {
  const url = `https://api.giphy.com/v1/gifs/search?api_key=PclqORCp6RtcbIr4loMIBjvHcFXYdn9Y&q=${category}&limit=20`;
  const resp = await fetch(url);
  const { data = [] } = await resp.json();

  return data.map(img => ({
    id: img.id,
    title: img.title,
    url: img.images.downsized_medium.url
  }));
}

