export const container = {
  hidden: {
    opacity: 0,
    y: 100,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.5,
      duration: 0.5,
      ease: "easeInOut",
      staggerChildren: 0.1,
      delayChildren: 0.5,
    },
  },
};
export const item = {
  hidden: {
    opacity: 0,
    y: 100,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.3,
      ease: "easeInOut",
    },
  },
};
export const button = {
  initial: {
    scale: 0,
    opacity: 0,
  },
  animate: {
    scale: 1,
    opacity: 1,
  },
  whileTap: {
    scale: 0.95,
    transition: {
      duration: 0.1,
      ease: "easeInOut",
    },
  },
};
export const image = {
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      ease: "easeInOut",
    },
  },
  initial: {
    opacity: 0,
    x: 100,
    position: "absolute",
  },

  exit: {
    opacity: 0,
    x: -50,
    position: "absolute",
  },
};
export const onClickImage = {
  animate: {
    x: 0,
    transition: {
      duration: 0.5,
      ease: "easeInOut",
    },
  },
  initial: {
    x: -400,
    position: "",
    hieght: "100%",
    width: "100%",
    zIndex: 20,
  },
};
export const heading = {
  animate: {
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeInOut",
    },
  },
  initial: {
    y: 200,
  },
};
