import { FormWrapper } from "../components/FormWrapper"

export function AddressForm({
  dateofBirth,
  gender,
  address,
  updateFields,
}) {
  return (
    <FormWrapper title="Address">
      <label>Date Of Birth</label>
      <input
        autoFocus
        required
        type="date"
        value={dateofBirth}
        onChange={e => updateFields({ dateofBirth: e.target.value })}
      />
      <label>Gender</label>
      <select required name="cars" id="cars" value={gender} onChange={e => updateFields({ gender: e.target.value })}>
        <option value="male">Male</option>
        <option value="female">Female</option>
        <option value="others">Others</option>
      </select>

      <label>Address</label>
      <textarea
        required
        value={address}
        onChange={e => updateFields({ address: e.target.value })}
      />
    </FormWrapper>
  )
}