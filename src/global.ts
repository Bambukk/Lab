import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`

    @import url('https://fonts.googleapis.com/css2?family=Croissant+One&family=Montserrat:wght@400;700&display=swap');

    * {
        margin: 0;
        padding: 0;
    }

    body {
        font-family: 'Croissant One', cursive;
    }

    button, input {
        border: none;
        background: none;
    }

    input:focus {
        outline: none;
    }
    a {
        text-decoration: none;
    }
    .active {
        text-decoration: underline;
    }

`