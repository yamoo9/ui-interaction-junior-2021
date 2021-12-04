// import { camelCase } from './camelCase.js';

// export function titleCase(data) {
//   let string = data.toString();
//   return string[0].toUpperCase() + camelCase(string.slice(1));
// }

export function titleCase(data) {
  return data
    .toString()
    .replace(/(^\w|\s+\w)/g, (match) => match.toUpperCase().trim());
}
