import React, { ChangeEvent, useState } from "react";
import {
  buttons,
  closeButton,
  deleteButton,
  header,
  input,
  modalWindow,
  title,
  updateButton,
  wrapper,
} from "./ModalEdit.css";
import { FiX } from "react-icons/fi";
import { useTypedDispatch, useTypedSelector } from "../../hooks/reduxHooks";
import {
  deleteTask,
  setModalActive,
  updateTask,
} from "../../redux/slices/boardsSlice";

const ModalEdit = () => {
  const dispatch = useTypedDispatch();
  const editingState = useTypedSelector(state => state.modal);
  const [data, setData] = useState(editingState);

  const handleCloseButton = () => {
    dispatch(setModalActive(false));
  };

  const handleUpdate = () => {
    dispatch(
      updateTask({
        boardId: editingState.boardId,
        listId: editingState.listId,
        task: data.task,
      })
    );
    dispatch(setModalActive(false));
  };

  const handleDelete = () => {
    dispatch(
      deleteTask({
        boardId: editingState.boardId,
        listId: editingState.listId,
        taskId: editingState.task.taskId,
      })
    );
    dispatch(setModalActive(false));
  };

  const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setData({ ...data, task: { ...data.task, taskName: e.target.value } });
  };
  const handleDescriptionChange = (e: ChangeEvent<HTMLInputElement>) => {
    setData({
      ...data,
      task: { ...data.task, taskDescription: e.target.value },
    });
  };
  const handleAuthorChange = (e: ChangeEvent<HTMLInputElement>) => {
    setData({ ...data, task: { ...data.task, taskOwner: e.target.value } });
  };

  return (
    <div className={wrapper}>
      <div className={modalWindow}>
        <div className={header}>
          <div className={title}>{editingState.task.taskName}</div>
          <FiX className={closeButton} onClick={handleCloseButton} />
        </div>
        <div className={title}>Task name</div>
        <input
          type="text"
          className={input}
          value={data.task.taskName}
          onChange={handleNameChange}
        />
        <div className={title}>Task description</div>
        <input
          type="text"
          className={input}
          value={data.task.taskDescription}
          onChange={handleDescriptionChange}
        />
        <div className={title}>Task author</div>
        <input
          type="text"
          className={input}
          value={data.task.taskOwner}
          onChange={handleAuthorChange}
        />
        <div className={buttons}>
          <button className={updateButton} onClick={handleUpdate}>
            Update task
          </button>
          <button className={deleteButton} onClick={handleDelete}>
            Delete tasks
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModalEdit;
