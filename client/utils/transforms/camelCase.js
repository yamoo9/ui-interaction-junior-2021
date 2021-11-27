export function camelCase(data) {
  // return data.toString().replace(/\s+\w/g, (...args) => {
  //   console.log(args); // ['    i', 6, data]
  //   return args[0];
  // });
  return data
    .toString()
    .replace(/\s+\w/g, (match) => match.toUpperCase().trim());
}
