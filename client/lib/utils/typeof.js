export function isNumericString(data){
  data = +data;
  return !isNaN(data);
}