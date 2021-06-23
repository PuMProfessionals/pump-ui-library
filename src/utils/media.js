/*
 * Media util where breakpoint can be either a string or number (string for themes,
   and number for px) the styles will be the style at that breakpoint
 */
export const media = (
    breakpoint,
    styles
) => ({ theme }) => `
    @media (max-width: ${theme.media[breakpoint] || breakpoint}px) {
            ${styles}
}`;
