import React from "react";
import {
  Card,
  CardContent,
  CardHeader,
  IconButton,
  Typography,
} from "@material-ui/core";
import PropTypes from "prop-types";
import DeleteIcon from "@material-ui/icons/Delete";
import { removeTodo } from "../features/todo/TodoSlice";
import { useDispatch } from "react-redux";

export function TodoItem(props) {
  const { id, content, finished } = props.todo;
  const dispatch = useDispatch();
  return (
    <Card>
      <CardContent>
        <Typography paragraph>{content}</Typography>
        <IconButton onClick={() => dispatch(removeTodo(id))}>
          <DeleteIcon />
        </IconButton>
      </CardContent>
    </Card>
  );
}

TodoItem.propTypes = {
  todo: PropTypes.object,
};
