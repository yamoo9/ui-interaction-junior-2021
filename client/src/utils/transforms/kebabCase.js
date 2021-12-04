export function kebabCase(data /* 'simple is best' */) {
  // return data.toString().replace(new RegExp('\\s+', 'g'), '-');
  return data.toString().replace(/\s+/g, '-');
}
