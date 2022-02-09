function replaceImgFormat(img, format) {
  const lasDotRegex = /.[^.]*$/;
  return img.replace(lasDotRegex, format);
}
export default replaceImgFormat;
