import "../styles/form.css"

export function FormWrapper({ title, children }) {
  return (
    <>
      <h2 className="form-title">
        {title}
      </h2>
      <div className="form-body">
        {children}
      </div>
    </>
  )
}