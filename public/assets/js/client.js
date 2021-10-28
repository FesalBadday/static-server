const picsumIds = [
  237,
  433,
  577,
  582,
  593,
  659,
  718,
  783,
  790,
  837,
  1024,
  1025,
  1074,
  1084
];

picsumIds.forEach(function (imgIds) {
  let img;
  img = document.querySelector(".img");
  img.innerHTML +=
    `<img src="https://picsum.photos/id/` +
    imgIds +
    `/300/300" alt="Lorem Picsum Image">`;
});
