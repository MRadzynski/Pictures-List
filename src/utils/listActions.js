import {getPictures} from './getPictures';

const compareIds = (a, b) => {
  const idA = a.id;
  const idB = b.id;

  return idA - idB;
};

const compareAuthors = (a, b) => {
  const authorA = a.author.split(' ');
  const authorB = b.author.split(' ');

  const lastNameA = authorA[authorA.length - 1].toUpperCase();
  const lastNameB = authorB[authorB.length - 1].toUpperCase();
  const firstNameA = authorA[0].toUpperCase();
  const firstNameB = authorB[0].toUpperCase();

  if (lastNameA > lastNameB) return 1;
  if (lastNameA < lastNameB) return -1;
  if (firstNameA > firstNameB) return 1;
  if (firstNameA < firstNameB) return -1;
  return 0;
};

export const refreshList = (setData, setLoading) => {
  setData([]);
  getPictures(setData, setLoading);
};

export const sortByAuthor = (data, setData) => {
  const sortedData = data.sort(compareAuthors);
  console.log(sortedData);
  setData(sortedData);
  // setData(currentData => currentData.sort(compareAuthors));
};

export const sortById = (data, setData) => {
  const sortedData = data.sort(compareIds);
  setData(sortedData);
  console.log(sortedData);
  // setData(currentData => currentData.sort(compareIds));
};
