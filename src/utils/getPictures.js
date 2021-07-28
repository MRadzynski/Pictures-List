export const getPictures = async (setData, setLoading) => {
  try {
    const response = await fetch('https://picsum.photos/v2/list');
    const json = await response.json();
    setData(json);
  } catch (error) {
    console.error(error);
  } finally {
    setLoading(false);
  }
};
