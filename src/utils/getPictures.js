const getPictures = async (setData, setCopiedData, setLoading) => {
  try {
    setLoading(true);
    const res = await fetch('https://picsum.photos/v2/list');
    const data = await res.json();

    setData(data);
    setCopiedData(data);
  } catch (error) {
    console.error(error);
  } finally {
    setLoading(false);
  }
};

export default getPictures;
