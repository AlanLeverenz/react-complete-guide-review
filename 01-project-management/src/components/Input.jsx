export default function Input({ label, textarea, ...props }) {
  return (
    <p>
      <label className="text-black">{label}</label>
      {textarea ? <textarea {...props} /> : <input {...props} />}
    </p>
  )
}