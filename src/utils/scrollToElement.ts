export const scollToElement = (ref: HTMLElement) => {
  ref.scrollIntoView({
    behavior: 'smooth',
    block: 'center',
    inline: 'nearest',
  });
};
