const randomPassword = (length) => {
  let n = "";
  let t =
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789![]{}()%&*$#^<>~@|";
  for (let i = 0; i < length; i++)
    n += t.charAt(Math.floor(Math.random() * t.length));
  return n;
};

export { randomPassword };
