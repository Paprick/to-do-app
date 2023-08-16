import * as styled from './no-tasks-container.styled'

export const NoTasksContainer = () => {

    return (
        <styled.NoTasksComponent>
            <p>No <span>tasks</span> for today</p>
            <styled.TutorialLabel>
                Use navigation buttons or <span>swipe left/right</span> to change date
            </styled.TutorialLabel>
        </styled.NoTasksComponent>
    )
}