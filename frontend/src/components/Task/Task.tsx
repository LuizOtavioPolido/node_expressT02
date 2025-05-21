import { TaskStyled } from "./TaskStyle";
import { FaRegTrashAlt } from "react-icons/fa";

interface TaskProps {
  titleTask: string;
  onRemove?: () => void;
  onClick?: () => void;
}

export default function Task({ titleTask }: TaskProps) {
  return (
    <TaskStyled.Container>
      <TaskStyled.Content>{titleTask}
        <TaskStyled.RemoveButton><FaRegTrashAlt /></TaskStyled.RemoveButton>
      </TaskStyled.Content>
    </TaskStyled.Container>
  );
}
