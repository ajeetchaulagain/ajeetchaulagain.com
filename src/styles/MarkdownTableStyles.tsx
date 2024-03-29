import { css } from 'styled-components';
import { m, mt, mb } from 'styled-components-spacing';

export const MarkdownTableStyles = css`
  table {
    padding: 0;
    width: 100%;
  }
  table tr {
    border-top: 1px solid #cccccc;
    background-color: white;
    ${m(0)};
    padding: 0;
  }
  table tr:nth-child(2n) {
    background-color: #f8f8f8;
  }
  table tr th {
    font-weight: bold;
    border: 1px solid #cccccc;
    text-align: left;
    ${m(0)};
    padding: 6px 13px;
    background-color: rgb(62, 62, 62);
    color: #fff;
  }
  table tr td {
    border: 1px solid #cccccc;
    text-align: left;
    ${m(0)};
    padding: 6px 13px;
  }
  table tr th :first-child,
  table tr td :first-child {
    ${mt(0)};
  }
  table tr th :last-child,
  table tr td :last-child {
    ${mb(0)};
  }
`;
