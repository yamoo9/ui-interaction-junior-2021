export function snakeCase(data /* 'simple is best' */) {
  // return data.toString().split(' ').join('_');
  // 강력한 도구 필요
  // Regular Expression
  // /\s+/g
  return data.toString().replace(/\s+/g, '_');
}
