const prefix = ['-webkit-', '-moz-', '-ms-', '-o-'];

export function cssTransform(val) {
  const o = { transform: val };
  prefix.forEach((p) => {
    o[`${p}transform`] = val;
  });
  return o;
}
