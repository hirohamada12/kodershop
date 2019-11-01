export function onChangeValue(context, name, value) {

  if (value === undefined || value === null || value === "") {
    return;
  }
  if (value) {
    value = value.target
  }
  context.setState(prevState => ({
    data: {
      ...prevState.data,
      [name]: value.value
    }
  }));
}

