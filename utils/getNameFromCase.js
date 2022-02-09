const getNameFromCase = (text) =>
  text
    ?.toLowerCase()
    ?.replace(/_([a-zA-Z])/g, (...match) => ` ${match[1].toUpperCase()}`)
    ?.replace(/^([a-zA-Z])/u, (...match) => ` ${match[0].toUpperCase()}`);

export default getNameFromCase;
