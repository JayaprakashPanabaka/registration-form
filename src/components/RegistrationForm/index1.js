import {useState} from 'react'
import './index.css'

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    firstNameErr: false,
    lastName: '',
    lastNameErr: false,
    isLoginSuccess: false,
  })

  const handleChange = e => {
    console.log(e.target.value)
    const {name, value} = e.target
    setFormData({...formData, [name]: value})
  }

  const validateFirstName = () => {
    const {firstName} = formData.firstName

    return firstName !== ''
  }

  const validateLastName = () => {
    const {lastName} = formData.firstName

    return lastName !== ''
  }

  const onFirstNameBlur = e => {
    // const {isValidateFirstName} = validateFirstName()
    if (e.target.value === '') {
      setFormData({...formData, firstNameErr: true})
    } else {
      setFormData({...formData, firstNameErr: false})
    }
    // setFormData({...formData, firstNameErr: !isValidateFirstName})
  }

  const onLastNameBlur = e => {
    // const {isValidateLastName} = validateLastName()
    if (e.target.value === '') {
      setFormData({...formData, lastNameErr: true})
    } else {
      setFormData({...formData, lastNameErr: false})
    }
    // setFormData({...formData, lastNameErr: !isValidateLastName})
  }

  const handleSubmit = e => {
    e.preventDefault()
    const {isValidateFirstName} = validateFirstName()
    const {isValidateLastName} = validateLastName()

    if (isValidateFirstName && isValidateLastName) {
      setFormData({
        ...formData,
        isLoginSuccess: true,
        firstNameErr: false,
        lastNameErr: false,
      })
    } else if (isValidateFirstName) {
      setFormData({
        ...formData,
        isLoginSuccess: false,
        firstNameErr: false,
        lastNameErr: true,
      })
    } else if (isValidateLastName) {
      setFormData({
        ...formData,
        isLoginSuccess: false,
        firstNameErr: false,
        lastNameErr: false,
      })
    } else {
      setFormData({
        ...formData,
        isLoginSuccess: false,
        firstNameErr: true,
        lastNameErr: true,
      })
    }
  }

  const onHandleClick = () => {
    setFormData({
      ...formData,
      firstName: '',
      firstNameErr: false,
      lastName: '',
      lastNameErr: false,
      isLoginSuccess: false,
    })
  }

  return (
    <>
      {formData.isLoginSuccess ? (
        <>
          <p>Submitted Successfully</p>
          <button type="button" onClick={onHandleClick}>
            Submit Another Response
          </button>
        </>
      ) : (
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
                onBlur={onFirstNameBlur}
              />
              {formData.firstNameErr && <p className="error-msg">Required</p>}
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
                onBlur={onLastNameBlur}
              />
              {formData.lastNameErr && <p className="error-msg">Required</p>}
            </div>

            <div>
              <button type="submit" className="btn">
                Submit
              </button>
            </div>
          </form>
        </div>
      )}
    </>
  )
}

export default RegistrationForm
