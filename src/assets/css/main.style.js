import { css } from 'styled-components';

export default css`
  /* CSS Reset */
  body {
    margin: 0;
    position: relative;
    background-color: ${props => props.theme.colors.neutral['100']};
  }

  p {
    margin: 0;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 0;
  }

  a {
    text-decoration: none;
    color: ${(props) => props.theme.colors.accent['300']}
  }

  ol,
  ul {
    padding-left: 1rem;
    margin: 1rem 0;
  }

  input:focus,
  select:focus,
  textarea:focus,
  button:focus {
    outline: none;
  }

  /* Base font in pixels */
  html,
  body {
    font-size: 14px;
    color: ${props => props.theme.colors.primary['300']};
  }

  @media (min-width: 488px) {
    html,
    body {
      font-size: 16px;
    }
  }

  @media (min-width: 768px) {
    html,
    body {
      font-size: 18px;
    }
  }
  @media (min-width: 1025px) {
    html,
    body {
      font-size: 20px;
    }
  }

  /* Applied Font */
  a,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  input,
  button,
  textarea {
    ${props => props.theme.fonts.cairo.bold}
  }

  input,
  button,
  textarea {
    font-size: 1rem;
  }

  li,
  td,
  th,
  p {
    font-size: 1rem;
    line-height: 135%;
    ${props => props.theme.fonts.cairo.light}
  }

  img::selection,
  a::selection,
  p::selection,
  b::selection,
  strong::selection,
  li::selection,
  td::selection,
  th::selection,
  h1::selection,
  h2::selection,
  h3::selection,
  h4::selection,
  h5::selection,
  h6::selection {
    background: ${props => props.theme.colors.accent['200']};
  }
`;
