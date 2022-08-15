import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  /* Firefox */
  input[type=number] {
    -moz-appearance: textfield;
  }
  ::-webkit-scrollbar-track
  {
    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
    background-color: transparent;
  }

  ::-webkit-scrollbar
  {
    height: 8px;
    width: 5px;
    background-color: transparent;
  }

  ::-webkit-scrollbar-thumb
  {
    border-radius: 5px;
    background-color: rgb(71, 77, 87);
  }

  body {
    margin: 0;
    padding: 0;
    color: rgb(30, 35, 41);
    overflow-x: hidden;
    font-family: 'Source Sans Pro', 'Proxima Nova', BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji',sans-serif;
    font-size: 15px;
  }

  a {
    color: ${({ theme }) => theme.colors.primary};
  }
  a:hover {
    color: ${({ theme }) => theme.colors.primary};
  }

  a.menu-item:hover, a.nav-link:hover {
    color: ${({ theme }) => theme.colors.primary}!important;
    text-decoration: none;
    .anticon.anticon-down {
      color: ${({ theme }) => theme.colors.primary}!important;
    }
  }

  .ant-dropdown-menu {
    background: ${({ theme }) => theme.colors.background}!important;
    .ant-dropdown-menu-item {
      background: ${({ theme }) => theme.colors.background};
      color: ${({ theme }) => theme.colors.textColor};
    }
  }

  .ant-modal-content {
    border-radius: 6px;
  }

  .ant-table-wrapper {
    .ant-spin-spinning {
      display: flex !important;
      align-items: center !important;
      justify-content: center !important;
    }
  }

  .ant-checkbox-checked .ant-checkbox-inner {
    background-color: ${({ theme }) => theme.colors.primary};
    border-color: ${({ theme }) => theme.colors.primary};
  }
  .ant-checkbox-wrapper:hover .ant-checkbox-inner, .ant-checkbox:hover .ant-checkbox-inner, .ant-checkbox-input:focus + .ant-checkbox-inner {
    border-color: ${({ theme }) => theme.colors.primary};
  }

  .ant-message-custom-content {
    display: flex;
    align-items: center;

    .anticon {
      top: 0
    }
  }

  .ant-switch-checked {
    background-color: ${({ theme }) => theme.colors.primary};
  }

  .ant-picker-dropdown .ant-picker-panel-container {
    .ant-picker-content {
      tbody .ant-picker-cell:hover:not(.ant-picker-cell-in-view) .ant-picker-cell-inner, .ant-picker-cell:hover:not(.ant-picker-cell-selected):not(.ant-picker-cell-range-start):not(.ant-picker-cell-range-end):not(.ant-picker-cell-range-hover-start):not(.ant-picker-cell-range-hover-end) .ant-picker-cell-inner {
        background: none;
        color: ${({ theme }) => theme.colors.primary};
      }
    }

    .ant-picker-cell-inner {

      &::before {
        border-color: ${({ theme }) => theme.colors.primary};
      }
    }

    .ant-picker-cell-selected .ant-picker-cell-inner {
      background: ${({ theme }) => theme.colors.primary};
    }

    .ant-picker-cell-today .ant-picker-cell-inner {
      color: ${({ theme }) => theme.colors.primary};
    }
  }


  .ant-picker-today-btn {
    color: ${({ theme }) => theme.colors.primary};
  }


  .ant-tooltip-inner {
    border-radius: 4px;
  }

  .ant-tooltip-inner, .ant-tooltip-arrow-content {
    background-color: ${({ theme }) => theme.components.tooltip.background};
    color: ${({ theme }) => theme.components.tooltip.color};
  }

  .message-modal {
    .ant-modal-body {
      padding: 40px 24px 24px;
    }

    .ant-modal-confirm-btns {
      width: 100%;

      .ant-btn {
        width: 100%;
        height: 40px;
        background-color: #FBAB18;
        border-color: #FBAB18;
        color: rgb(24, 26, 32);
        font-weight: 500;
      }
    }
  }

  .confirm-modal {
    .ant-modal-body {
      padding: 40px 24px 24px;
    }

    .ant-modal-confirm-btns {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-around;



      .ant-btn {
        width: calc(50% - 10px);
        height: 40px;
        background-color: rgb(234, 236, 239);
        border-color: rgb(234, 236, 239);
        color: rgb(24, 26, 32);
        font-weight: 500;
      }

      .ant-btn-primary {
        background-color: #FBAB18;
        border-color: #FBAB18;
      }
    }
  }

  .ant-table-wrapper {
    overflow-x: auto;
    .ant-table {
      min-width: 992px;
    }
  }

  .ant-picker-cell-range-start {
    .ant-picker-cell-inner {
      background-color: ${({ theme }) => theme.colors.primary} !important;
    }
  }
  .ant-picker-cell-today{
    .ant-picker-cell-inner {
      color:black !important;
      font-weight:500;
    }
  }
  .ant-picker-cell-range-end{
    .ant-picker-cell-inner {
      background-color: ${({ theme }) => theme.colors.primary} !important;
    }
  }
 .select-theme{
    background-color:${({ theme }) => theme.colors.background} !important;
    .ant-select-item-option-active{
      background-color: ${({ theme }) => theme.colors.hoverColor} !important;
    }
    .ant-select-item-option-selected{
      background-color: ${({ theme }) => theme.colors.hoverColor} !important;
    }
    .ant-select-item-option-content{
      color: ${({ theme }) => theme.colors.textColor} !important;
    }
 }
  
  .ant-input-group-addon{
    border-color: ${({ theme }) => theme.footerBorder} !important;
  }

  .theme-date-picker{
    border-color: ${({ theme }) => theme.footerBorder} ;
    .ant-picker-input #dateOfBirth{
      color: ${({ theme }) => theme.colors.textColor} !important;
    }
  }

  .secondary-text{
    color:${({ theme }) => theme.colors.secondaryTextColor}
  }
   
`;
