import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    html, body, div, span, applet, object, iframe,
    h1, h2, h3, h4, h5, h6, p, blockquote, pre,
    a, abbr, acronym, address, big, cite, code,
    del, dfn, em, img, ins, kbd, q, s, samp,
    small, strike, strong, sub, sup, tt, var,
    b, u, i, center,
    dl, dt, dd, ol, ul, li,
    fieldset, form, label, legend,
    table, caption, tbody, tfoot, thead, tr, th, td,
    article, aside, canvas, details, embed, 
    figure, figcaption, footer, header, hgroup, 
    menu, nav, output, ruby, section, summary,
    time, mark, audio, video {
        margin: 0px;
        padding: 0;
        border: 0;
        font-size: 100%;
        font: inherit;
        vertical-align: baseline;
        font-family: 'Poppins';
    }
    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
    font-family: 'Poppins';
    }
    input[type=number] {
    -moz-appearance: textfield;
    font-family: 'Poppins';
    }
    input {
        outline: none;
    }
    input:focus {
        outline: none;
    }
	button:focus, input:focus, button:active, input:active {
		outline: none;
        font-family: 'Poppins';
	}
    a {
        text-decoration: none;
        margin: 0 auto;
        font-family: 'Poppins';
    }
    article, aside, details, figcaption, figure, 
    footer, header, hgroup, menu, nav, section {
        display: block;
        font-family: 'Poppins';
    }
    body {
        line-height: 1;
        font-family: 'Poppins';
    }
    ol, ul {
        list-style: none;
        font-family: 'Poppins';
    }
    blockquote, q {
        quotes: none;
        font-family: 'Poppins';
    }
    blockquote:before, blockquote:after,
    q:before, q:after {
        content: '';
        content: none;
    }
    table {
        border-collapse: collapse;
        border-spacing: 0;
        font-family: 'Poppins';
    }
    * {
        box-sizing: border-box;
        font-family: 'Poppins';
    }
`;

export default GlobalStyles;
