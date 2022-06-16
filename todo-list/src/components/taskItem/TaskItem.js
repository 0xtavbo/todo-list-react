import React from "react";
import { ParagraphStyled } from "./TaskItemStyles";

const TaskItem = ({ id, description }) => {
    return (
        <ParagraphStyled key={id}>
            {description}
        </ParagraphStyled>
    )
};

export default TaskItem;