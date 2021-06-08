function convert(input) {
  return input.replace(/(?<![\d\w.:^])\n/g, '');
}

export default convert;
