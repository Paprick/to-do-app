import styled, {keyframes} from 'styled-components'

const swipeRight = keyframes`
    from {
        transform: translateX(-100%);
    }
    to {
        transform: translateX(0%);
    }
`;
const swipeLeft = keyframes`
    from {
        transform: translateX(100%);
    }
    to {
        transform: translateX(0%);
    }
`;

export const TasksWrapper = styled.main`
    user-select: none;
    width: 100%;
    box-sizing: border-box;
    overflow-x: hidden;
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
`;
export const Tasks = styled.div`
    width: 100%;   
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 50px 100px;
    gap: 20px;
      
    &.swipe-right {
        animation: ${swipeRight} 0.2s linear forwards;
    }
    &.swipe-left {
        animation: ${swipeLeft} 0.2s linear forwards;
    }

    @media only screen and (max-width: 600px) {
        padding: 50px 10px;
    }
`