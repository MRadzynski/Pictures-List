export const getPictures = async (setData, setLoading) => {
  try {
    const res = await fetch('https://picsum.photos/v2/list');
    const data = await res.json();
    setData(data);
  } catch (error) {
    console.error(error);
  } finally {
    setLoading(false);
  }
};
