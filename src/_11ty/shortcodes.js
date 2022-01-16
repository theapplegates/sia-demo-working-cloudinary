const CLOUDNAME = "paulportfolio";
const FOLDER = "sia.demo/";
const BASE_URL = `https://res.cloudinary.com/${CLOUDNAME}/image/upload/`;
const FALLBACK_WIDTHS = [300, 600, 680, 1360];
const FALLBACK_WIDTH = 680;

function getSrcset(file, widths) {
  const widthSet = widths ? widths : FALLBACK_WIDTHS;
  return widthSet
    .map((width) => {
      return `${getSrc(file, width)} ${width}w`;
    })
    .join(", ");
}

function getSrc(file, width) {
  return `${BASE_URL}q_auto,f_auto,w_${
    width ? width : FALLBACK_WIDTH
  }/${FOLDER}${file}`;
}

module.exports = {
  srcset: (file, widths) => getSrcset(file, widths),
  src: (file, width) => getSrc(file, width),
  defaultSizes: () => "(min-width: 980px) 928px, calc(95.15vw + 15px)"
};
