import styled from 'styled-components'

const NavbarStyled = styled.div`
    background-color: #2a9d8f;
    padding: 1rem;
    color: #fff;

    h1 {
        margin-bottom: 1rem;
    }

    ul {
        list-style: none;
    }

    li {
        margin-bottom: 1rem;
    }

    a {
        color: #fff;
        text-decoration: none;
    }

    @media (min-width: 768px){
        background-color: #2a9d8f;

        nav {
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        ul {
            display: flex;
        }

        li {
            margin: 0 1rem;
        }

        h1 {
            margin: 0;
        }
    }
`

export default NavbarStyled