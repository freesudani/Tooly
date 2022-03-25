export const logoVariant = {
  hidden: {
    rotate: -180,
  },
  visible: {
    rotate: 0,
    transition: { duration: 2 },
  },
};

export const lineVariant = {
  hidden: {
    y: "-1vh",
  },
  visible: {
    y: 0,
    transition: { duration: 2, transition: "ease-in" },
  },
};
