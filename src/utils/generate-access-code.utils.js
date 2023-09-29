export function generateAccessCode(len = 6) {
  let str = "";
  const charSet = "ABCDEFGHJKMNPQRSTUVWXYZ987654321";

  for (let i = 1; i <= len; i += 1) {
    const randomNum = Math.floor(Math.random() * charSet.length);
    str += charSet.charAt(randomNum);
  }

  return str;
}
