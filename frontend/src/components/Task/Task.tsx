import { TaskStyled } from "./TaskStyle";
import { FaRegTrashAlt } from "react-icons/fa";

interface TaskProps {
  titleTask: string;
  onRemove?: () => void;
  onClick?: () => void;
}

export default function Task({ titleTask, onClick, onRemove }: TaskProps) {
  return (
    <TaskStyled.Container>
      <TaskStyled.Content>
        <div onClick={onClick}>{titleTask}</div>
        <TaskStyled.RemoveButton onClick={onRemove}><FaRegTrashAlt /></TaskStyled.RemoveButton>
      </TaskStyled.Content>
    </TaskStyled.Container>
  );
}
