import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import FormControl from "@material-ui/core/FormControl";
import TextField from "@material-ui/core/TextField";

function EditMemoForm(props) {
  function submitHandler(event) {
    event.preventDefault();
    props.onEditMemo();
  }

  return (
    <Card>
      <CardContent>
        <form onSubmit={submitHandler}>
          <FormControl fullWidth="true" margin="normal">
            <TextField
              required
              label="Title"
              value={props.memo.title}
              onChange={props.onEditTitle}
            />
          </FormControl>
          <FormControl fullWidth="true" margin="normal">
            <TextField
              required
              variant="outlined"
              label="Content"
              value={props.memo.content}
              onChange={props.onEditContent}
              multiline
              rows={2}
              rowsMax={4}
            />
          </FormControl>
          <div>
            <button>Save</button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}

export default EditMemoForm;
