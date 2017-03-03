export default function capitalise(word) {
  if(typeof word !== 'string' || word === '') {
    throw('Please enter a valid string');
  }

  return word.toUpperCase();
};
