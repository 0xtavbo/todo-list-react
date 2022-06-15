import React from "react";
import { ParagraphStyled } from "./TaskItemStyles";

const TaskItem = ({ description }) => {

    return (
        <ParagraphStyled>
            {description}
        </ParagraphStyled>
    )
};

export default TaskItem;