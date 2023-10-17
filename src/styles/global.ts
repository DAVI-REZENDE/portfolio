import { createGlobalStyle } from 'styled-components'
export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    scroll-behavior: smooth;
  }

  body {
    background-color: ${({ theme }) => theme.black};
    color: ${({ theme }) => theme.white};
    font-family: Poppins, sans-serif;
    overflow-x: hidden;
  }

  button {
    outline: 0;
    &:focus {
      box-shadow: 0 0 0 3px ${({ theme }) => theme['yellow-600']};
    }

    cursor: pointer;
    border: 0;
    background-color: ${({ theme }) => theme['yellow-500']};
  }

  [data-color-mode*='light'],
  [data-color-mode*='light'] body {
    --color-code-preview-bg: #fff3;
    --color-code-preview-border: #d5d5d5;
    --color-code-preview-hover: #838383;
    --code-preview-text: #d5d5d5;
  }
  [data-color-mode*='dark'],
  [data-color-mode*='dark'] body {
    --color-code-preview-border: #ffffff1a;
    --color-code-preview-bg: #282c34;
    --color-code-preview-hover: #9c9c9c;
    --code-preview-text: #c9d1d9;
  }
  .w-code-preview.w-split-horizontal > .w-split-bar {
    height: initial;
  }
  .w-code-preview > .w-split-bar {
    background-color: var(--color-code-preview-bg) !important;
    box-shadow: inset 1px 0 0 0 var(--color-code-preview-border), 1px 0 0 0 var(--color-code-preview-border) !important;
  }
  .w-code-preview {
    border-radius: 3px;
    margin-bottom: 16px;
    background-color: var(--color-code-preview-bg) !important;
    max-height: 420px;
    min-height: 12px;
    z-index: 10;
    position: relative;
  }
  .w-code-preview-bordered {
    box-shadow: 0 0 0 1px rgba(16, 22, 26, 0.1), 0 0 0 rgba(16, 22, 26, 0), 0 1px 1px rgba(16, 22, 26, 0.2);
  }
  .w-code-preview-fullScreen {
    position: fixed;
    border-radius: 0;
    border: 0;
    top: 0 !important;
    left: 0 !important;
    bottom: 0 !important;
    margin: 0 !important;
    right: 0 !important;
    height: 100% !important;
    max-height: 100% !important;
    z-index: 99999;
  }
  .w-code-preview-demo-source input {
    margin: initial;
    vertical-align: initial;
  }
  .w-code-preview-demo-source blockquote,
  .w-code-preview-demo-source details,
  .w-code-preview-demo-source dl,
  .w-code-preview-demo-source ol,
  .w-code-preview-demo-source p,
  .w-code-preview-demo-source pre,
  .w-code-preview-demo-source table,
  .w-code-preview-demo-source ul {
    margin-bottom: initial;
    margin-top: initial;
  }
  .w-code-preview-demo-source pre,
  .w-code-preview-demo-source code,
  .w-code-preview-demo-source tt {
    font-family: inherit;
  }
  .w-code-preview-demo-source img {
    max-width: initial;
  }
  .w-code-preview-demo-source h1,
  .w-code-preview-demo-source h2 {
    border-bottom: initial;
    padding-bottom: initial;
  }
  .w-code-preview-demo-source h1,
  .w-code-preview-demo-source h2,
  .w-code-preview-demo-source h3,
  .w-code-preview-demo-source h4,
  .w-code-preview-demo-source h5,
  .w-code-preview-demo-source h6 {
    font-weight: initial;
    line-height: initial;
    margin-bottom: initial;
    margin-top: initial;
    font-size: initial;
  }
  .w-code-preview-demo-source ul {
    margin-bottom: initial;
    margin-top: initial;
    list-style: initial;
  }
  .w-code-preview-demo {
    border-radius: 3px;
    overflow: auto;
    min-width: 100px;
    position: relative;
    padding: 15px;
    min-height: 80px;
  }
  .w-code-preview-demo-error {
    z-index: 2;
    background-color: var(--color-code-preview-bg);
    width: 100%;
    height: 100%;
    margin-bottom: 0 !important;
    color: #dc3545 !important;
  }
  .w-code-preview-demo-bgPlaid:not(.w-code-preview-demo-error) {
    background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg'%3E%3Cpattern id='a' width='16' height='16' patternUnits='userSpaceOnUse'%3E%3Cpath fill='rgba(0, 0, 0, 0.06)' d='M0 0h8v8H0zM8 8h8v8H8z'/%3E%3C/pattern%3E%3Crect fill='url(%23a)' width='100%25' height='100%25'/%3E%3C/svg%3E");
  }
  .w-code-preview-demo-source.error {
    display: none;
  }
  .w-code-preview-noScroll {
    max-height: initial;
  }
  .w-code-preview-noScroll:not(.w-code-preview-fullScreen) .w-code-preview-demo {
    overflow: inherit;
  }
  .w-code-preview-bgPlaid {
    box-sizing: border-box;
    position: absolute;
    left: 0;
    bottom: 0;
    right: 0;
    top: 0;
  }
  .w-code-preview-bgPlaid svg {
    opacity: 0.7;
  }
  .w-code-preview-bar {
    cursor: pointer;
    box-shadow: inset 1px 0 0 0 var(--color-code-preview-border);
    padding: 3px 0 8px 0;
    margin: 0 auto;
    -webkit-writing-mode: tb-rl;
            writing-mode: tb-rl;
    position: relative;
    display: flex;
    align-items: center;
    width: 29px;
    line-height: 24px;
    font-size: 12px;
    max-width: 29px;
    min-width: 29px;
    min-height: 29px;
  }
  .w-code-preview-bar-btn {
    overflow: hidden;
    padding: 5px 0 10px 0;
    display: flex;
    transition: all 0.3s;
    font-weight: bold;
    -webkit-user-select: none;
            user-select: none;
    color: var(--code-preview-text);
    flex: 1;
  }
  .w-code-preview-bar-btn:hover {
    color: var(--color-code-preview-hover);
  }
  .w-code-preview-bar-iconbtns {
    margin-top: 6px;
    height: 14px;
    width: 14px;
    line-height: 22px;
  }
  .w-code-preview-bar svg {
    transition: all 0.3s;
    fill: var(--code-preview-text);
    display: block;
  }
  .w-code-preview-bar svg:hover {
    fill: var(--color-code-preview-hover);
  }
  .w-code-preview-bar-copied svg,
  .w-code-preview-bar-copied svg:hover {
    fill: #28a745;
  }
  .w-code-preview-OneItem .w-code-preview-bar {
    cursor: inherit;
  }
  .w-code-preview-thirdparty + .w-code-preview-thirdparty {
    margin-left: 10px;
  }
  .w-code-preview-thirdparty {
    display: inline-block;
    position: absolute;
    white-space: nowrap;
    line-height: 1;
    z-index: 2;
    right: 0;
    top: -23px;
  }
  .w-code-preview-thirdparty form {
    display: block;
  }
  .w-code-preview-thirdparty form + form {
    margin-right: 5px;
  }
  .w-code-preview-thirdparty button {
    border: 0;
    outline: 0;
    cursor: pointer;
    padding: 3px 4px 3px 4px;
    border-radius: 3px;
    transition: color 0.3s;
    color: rgba(0, 0, 0, 0.45);
  }
  .w-code-preview-thirdparty button:hover {
    color: rgba(0, 0, 0, 0.85);
  }
  .w-code-preview-thirdparty button svg {
    fill: var(--code-preview-text);
  }
  .w-code-preview-thirdparty button svg:not(:root) {
    overflow: hidden;
  }

`
