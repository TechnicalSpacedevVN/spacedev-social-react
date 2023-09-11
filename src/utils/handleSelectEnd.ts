export const handleSelectEnd = (element: Node) => {
  const range = document.createRange();
  range.selectNodeContents(element);
  range.collapse(false); // Tắt select

  const sel = window.getSelection();
  sel?.removeAllRanges();
  sel?.addRange(range);
};
