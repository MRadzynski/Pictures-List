import {sortByAuthor, sortById} from './listActions';

const dataFormatter = (data, sortType = '', queryString, setCopiedData) => {
  const newResults = data.filter(item =>
    item.author.toLowerCase().includes(queryString.toLowerCase()) ? item : null,
  );
  if (sortType === 'author') sortByAuthor(setCopiedData, newResults);
  if (sortType === 'id') sortById(setCopiedData, newResults);
  if (sortType === '') setCopiedData(newResults);
};

export default dataFormatter;
