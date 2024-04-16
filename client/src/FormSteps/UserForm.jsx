import { FormWrapper } from "../components/FormWrapper"

export function UserForm({
  username,
  email,
  phoneNumber,
  updateFields,
}) {

  function onChangeTagInput(e) {
    updateFields({phoneNumber: e.target.value.replace(/[a-zA-Z]/ig, "")});
  }


  return (
    <FormWrapper title="User Details">
      <label>Username</label>
      <input
        autoFocus
        required
        type="text"
        value={username}
        onChange={e => updateFields({ username: e.target.value })}
      />
      <label>Email</label>
      <input
        required
        type="email"
        value={email}
        onChange={e => updateFields({ email: e.target.value })}
      />
      <label>Phone Number:</label>
      <input
        required
        min={1}
        type="text"
        pattern="[0-9]{10}"
        value={phoneNumber}
        onChange={(e) => onChangeTagInput(e)}
      />
    </FormWrapper>
  )
}