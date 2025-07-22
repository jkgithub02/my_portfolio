export const getBasePath = () => {
  const isProd = process.env.NODE_ENV === 'production';
  return isProd ? '/my_portfolio' : '';
};

export const getImagePath = (imagePath: string) => {
  return `${getBasePath()}${imagePath}`;
};