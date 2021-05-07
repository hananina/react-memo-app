import { useRef } from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import FormControl from "@material-ui/core/FormControl";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
  action: {
    marginTop: "1rem",
    textAlign: "right",
  },
}));

function NewMemoForm(props) {
  const titleInputRef = useRef();
  const ContentInputRef = useRef();
  const classes = useStyles();

  function submitHandler(event) {
    event.preventDefault();

    const enteredTitle = titleInputRef.current.value;
    const enteredContent = ContentInputRef.current.value;

    const memoData = {
      title: enteredTitle,
      content: enteredContent,
      createdAt: new Date(),
    };
    props.onAddMemo(memoData);
  }

  return (
    <Card className>
      <CardContent>
        <form onSubmit={submitHandler}>
          <FormControl fullWidth="true" margin="normal">
            <TextField required label="Title" inputRef={titleInputRef} />
          </FormControl>
          <FormControl fullWidth="true" margin="normal">
            <TextField
              required
              variant="outlined"
              label="Content"
              inputRef={ContentInputRef}
              multiline
              rows={2}
              rowsMax={4}
            />
          </FormControl>
          <div className={classes.action}>
            <Button variant="contained">Add</Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}

export default NewMemoForm;
