export const isEmpty = _string => {
  _string = _string.trim();
  return _string.length === 0;
}

export const isANumber = _string => {
  return /^\d+\.*\d+$/.test(_string);
}