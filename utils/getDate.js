const getDateText = (dateIso) => {
  const date = new Date(dateIso);
  const options = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };

  return date.toLocaleDateString('en-GB', options);
};

export default getDateText;
