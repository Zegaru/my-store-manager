export function classNames(...classes: Array<string | undefined>) {
  return classes.filter(Boolean).join(' ');
}

export const slugify = (str: string) => {
  return str
    .toLowerCase()
    .replace(/ /g, '-')
    .replace(/[^\w-]+/g, '');
};
