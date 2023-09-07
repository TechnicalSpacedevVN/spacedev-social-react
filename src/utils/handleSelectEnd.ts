export const handleSelectEnd = (element: Node) => {
  var range = document.createRange();
  range.selectNodeContents(element);
  range.collapse(false); // Tắt select

  let sel = window.getSelection();
  sel?.removeAllRanges();
  sel?.addRange(range);
};
