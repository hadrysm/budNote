export const generateUnicId = () => String(Math.floor(Math.random() * 10 ** 20));

export const getFormatDate = (dataInMiliSecond) => {
  const result = new Date(dataInMiliSecond);

  const year = result.getFullYear();
  const month = result.getMonth() + 1;
  const day = result.getDate();

  // return 14-10-2020

  return `${day < 10 ? `0${day}` : day}-${month < 10 ? `0${month}` : month}-${year}`;
};
