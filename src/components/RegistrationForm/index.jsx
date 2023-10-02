// Write your JS code here
import {useState} from 'react'

import './index.css'

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    // firstNameErr: false,
    lastName: '',
    // lastNameErr: false,
  })

  const [errors, setErrors] = useState({})

  const validateForm = () => {
    const newErrors = {}

    if (!formData.firstName) {
      newErrors.firstName = 'Required*'
    }

    if (!formData.lastName) {
      newErrors.lastName = 'Required*'
    }

    setErrors(newErrors)

    return Object.keys(newErrors).length === 0
  }

  const handleChange = e => {
    const {name, value} = e.target
    // console.log(name)
    setFormData({...formData, [name]: value})
  }

  const handleBlur = () => {
    validateForm()
  }

  const handleSubmit = e => {
    e.preventDefault()
    validateForm()
    // console.log(formData)
  }

  return (
    <div className="form-container">
      <h1 className="form-heading">Registration</h1>
      <form className="reg-form" onSubmit={handleSubmit}>
        <div className="field-container">
          <label className="label-text" htmlFor="firstName">
            FIRST NAME
          </label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            className="input-field"
            placeholder="First Name"
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.firstName && <p className="error-msg">{errors.firstName}</p>}
        </div>

        <div className="field-container">
          <label className="label-text" htmlFor="lastName">
            LAST NAME
          </label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            className="input-field"
            placeholder="Last Name"
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.lastName && <p className="error-msg">{errors.lastName}</p>}
        </div>

        <div>
          <button type="submit" className="btn">
            Submit
          </button>
        </div>
      </form>
    </div>
  )
}

export default RegistrationForm
