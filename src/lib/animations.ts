export const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      delay: i * 0.05,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  }),
};

export const fadeIn = {
  hidden: { opacity: 0 },
  visible: (i: number = 0) => ({
    opacity: 1,
    transition: { duration: 0.35, delay: i * 0.04 },
  }),
};

export const scaleIn = {
  hidden: { opacity: 0, scale: 0.94 },
  visible: (i: number = 0) => ({
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.35,
      delay: i * 0.05,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  }),
};

export const staggerContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.05, delayChildren: 0.05 },
  },
};

export const hoverLift = {
  rest: { y: 0, scale: 1 },
  hover: {
    y: -6,
    scale: 1.04,
    transition: { duration: 0.18, ease: "easeOut" as const },
  },
  tap: { scale: 0.97 },
};

export const float = {
  animate: {
    y: [0, -14, 6, -8, 0],
    transition: { duration: 6, repeat: Infinity, ease: "easeInOut" as const },
  },
};
