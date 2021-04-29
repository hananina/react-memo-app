
import { useRef } from 'react';
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';

function NewMemoForm(props) {
  const titleInputRef = useRef();
  const ContentInputRef = useRef();

  function submitHandler(event) {
    event.preventDefault()

    const enteredTitle = titleInputRef.current.value;
    const enteredContent = titleInputRef.current.value;

    const memoData = {
      title: enteredTitle,
      content: enteredContent,
    }
    props.onAddMemo(memoData);
  }

  return (
    <Card>
      <CardContent>
        <form onSubmit={submitHandler}>
          <FormControl fullWidth='true' margin='normal'>
            <TextField  required label="Title" placeholder="Hello World" inputRef={titleInputRef} />
          </FormControl>
          <FormControl fullWidth='true' margin='normal'>
            <TextField required variant='outlined' label="Content" placeholder="Hello World" inputRef={ContentInputRef} multiline rows={2} rowsMax={4} />
          </FormControl>
          <div>
            <button>Add Memo</button>
          </div>
        </form>
      </CardContent>
    </Card>
  )
}

export default NewMemoForm;
