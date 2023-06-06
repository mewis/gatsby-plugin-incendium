export const incConversion = async (target) => {
  window.inc("add_conversion", target);
  const key = await window.inc("go");
  return key;
};
