const codes_12 = [
  "#E8115B",
  "#477D95",
  "#503750",
  "#7D4B32",
  "#E61E32",
  "#006450",
  "#8D67AB",
  "#477D95",
  "#BA5D07",
  "#A56752",
  "#FF0090",
  "#8D67AB",
];

export const getBgolor = (idx: number) => {
  return codes_12[idx % 12];
};
