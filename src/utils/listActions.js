import getPictures from './getPictures';

const compareIds = (a, b) => {
  const idA = a.id;
  const idB = b.id;

  return idA - idB;
};

const compareAuthors = (a, b) => {
  const authorA = a.author.split(' ');
  const authorB = b.author.split(' ');

  const lastNameA = authorA[authorA.length - 1].toLowerCase();
  const lastNameB = authorB[authorB.length - 1].toLowerCase();
  const firstNameA = authorA[0].toLowerCase();
  const firstNameB = authorB[0].toLowerCase();

  if (lastNameA > lastNameB) return 1;
  if (lastNameA < lastNameB) return -1;
  if (firstNameA > firstNameB) return 1;
  if (firstNameA < firstNameB) return -1;
  return 0;
};

export const refreshList = (setData, setCopiedData, setLoading, setQuery) => {
  setData([]);
  setQuery('');
  getPictures(setData, setCopiedData, setLoading);
};

export const sortByAuthor = (setCopiedData, newData) => {
  setCopiedData([...newData].sort(compareAuthors));
};

export const sortById = (setCopiedData, newData) => {
  setCopiedData([...newData].sort(compareIds));
};
