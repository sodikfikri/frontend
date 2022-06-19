import styled from 'styled-components'

const MovieStyled = styled.div`
    margin-bottom: 1rem;

    img {
        border-radius: 25px;
        max-width: 100%;
        height: auto;
        margin-bottom: 1rem;
    }

    h3 {
        color: #264653;
        font-size: 1.95rem;
        margin-bottom: 0.5rem;
    }

    p {
        color: #64748b;
    }

    /* Medium Screen */
    @media (min-width: 768px) {
        flex-basis: 50%;
        padding: 20px;
    }

    @media (min-width: 992px) {
        flex-basis: 25%;
        padding: 1rem;
  }
`

export default MovieStyled