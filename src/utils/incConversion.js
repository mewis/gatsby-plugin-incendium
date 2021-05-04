export const incConversion = async (target) => {
  if (!window.FIREFLY || !window.FIREFLY.conversion_configs) {
    return null;
  }
  const conversion = window.FIREFLY.conversion_configs.find(
    (c) => c.target === target
  );
  if (!conversion) {
    return;
  }
  window.inc("add_conversion", conversion.key);
  const key = await window.inc("go");
  return key;
};
