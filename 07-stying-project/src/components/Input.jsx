export default function CustomInput({ label, invalid, ...props }) {
  return <p>
    <label>{label}</label>
    <input{...props} />
  </p>
}