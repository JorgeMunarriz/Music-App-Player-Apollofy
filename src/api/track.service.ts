export const getAllTracks = async (url: string): Promise<any> => {
  try {
    const tracks = await fetch(url);
    const data = await tracks.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};
