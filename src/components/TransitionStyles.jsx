import { css } from "styled-components";

const TransitionStyles = css`
  /* Slide Up with Fade-in */
  .slideup-enter {
    opacity: 0;
    transform: translateY(30px);
  }
  .slideup-enter-active {
    opacity: 1;
    transform: translateY(0);
    transition: opacity 600ms ease-in-out, transform 600ms ease-in-out;
  }
  .slideup-exit {
    opacity: 1;
    transform: translateY(0);
  }
  .slideup-exit-active {
    opacity: 0;
    transform: translateY(-30px);
    transition: opacity 600ms ease-in-out, transform 600ms ease-in-out;
  }

  /* Fade-in for Content */
  .fade-content {
    opacity: 0;
    transform: translateY(10px);
    transition: opacity 700ms ease-in-out, transform 700ms ease-in-out;
  }
  .fade-content.visible {
    opacity: 1;
    transform: translateY(0);
  }
`;

export default TransitionStyles;
