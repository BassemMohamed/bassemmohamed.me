import { css } from 'styled-components';

export default css`
  color: ${props => props.theme.colors.main};
  width: 100%;
  max-width: 500px;
  position: relative;
  cursor: pointer;
  text-align: left;
  border: 1px solid #E66B00;
  background-color: ${props => props.theme.colors.white};
  border-radius: 8px;
  overflow: hidden;

  .image {
    background-image: url(${({ image }) => image});
    background-size: cover;
    background-position: top left;
    transition: background 0.8s;
    height: 150px;
  }

  div {
    padding: 20px;
    padding-bottom: 45px;

    .desc {
      margin: 10px 0;
    }
    .date {
      ${props => props.theme.fonts.italic}
      margin: 0;
      position: absolute;
      left: 20px;
      bottom: 20px;
    }
  }

  :hover {
    background-color: ${props => props.theme.colors.background};
  }
`;
