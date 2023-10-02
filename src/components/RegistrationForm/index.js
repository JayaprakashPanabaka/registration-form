import {useState} from 'react'
import './index.css'

function RegistrationForm() {
  const [data, setData] = useState({
    firstName: '',
    firstNameErr: false,
    lastName: '',
    lastNameErr: false,
    isFormSubmitted: false,
  })

  const validateFirstName = () => {
    const {firstName} = data.firstName

    return firstName !== ''
  }

  const validateLastName = () => {
    const {lastName} = data.lastName

    return lastName !== ''
  }

  const handleFirstNameBlur = e => {
    console.log(e.target.value)
    // let { name, value } = e.target;
    if (e.target.value === '') {
      setData({...data, firstNameErr: true})
      // console.log(data);
    } else {
      setData({...data, firstNameErr: false})
      // console.log(data);
    }
  }

  const handleLastNameBlur = e => {
    console.log(e.target.value)
    // let { name, value } = e.target;
    if (e.target.value === '') {
      setData({...data, lastNameErr: true})
      // console.log(data);
    } else {
      setData({...data, lastNameErr: false})
      // console.log(data);
    }
  }

  const handleFirstNameChange = e => {
    // console.log(e.target.value);
    setData({...data, firstName: e.target.value})
    // console.log(data);
  }

  const handleLastNameChange = e => {
    // console.log(e.target.value);
    setData({...data, lastName: e.target.value})
    // console.log(data);
  }

  const handleSubmit = e => {
    e.preventDefault()
    // handleBlur(e);
    // handleChange(e);
    // handleFirstNameBlur(e)
    // handleLastNameBlur(e)
    // if (validateFirstName() && validateLastName()) {
    //   setData({
    //     ...data,
    //     firstNameErr: false,
    //     lastNameErr: false,
    //     isFormSubmitted: true,
    //   })
    //   console.log(data)
    // } else {
    //   setData({
    //     ...data,
    //     firstNameErr: !validateFirstName(),
    //     lastNameErr: !validateLastName(),
    //     isFormSubmitted: false,
    //   })
    //   console.log(data)
    // }

    if (data.firstName !== '' && data.lastName !== '') {
      setData({...data, isFormSubmitted: true, firstName: '', lastName: ''})
    } else if (data.firstName === '' && data.lastName === '') {
      setData({
        ...data,
        isFormSubmitted: false,
        firstNameErr: true,
        lastNameErr: true,
      })
    } else if (data.firstName === '') {
      setData({...data, firstNameErr: true})
    } else if (data.lastName === '') {
      setData({...data, lastNameErr: true})
    }
  }

  const handleClick = () => {
    setData({...data, isFormSubmitted: false, firstName: '', lastName: ''})
  }
  return (
    <div>
      {data.isFormSubmitted ? (
        <div className="success-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
            alt="success"
            className="success-img"
          />
          <p className="success-des">Form Submitted Successfully</p>
          <button type="button" className="success-btn" onClick={handleClick}>
            Submit Another Response
          </button>
        </div>
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
                placeholder="First Name"
                onChange={handleFirstNameChange}
                onBlur={handleFirstNameBlur}
                value={data.firstName}
                className="input-field"
              />
              {data.firstNameErr && <p className="error-msg">Required*</p>}
            </div>

            <div className="field-container">
              <label className="label-text" htmlFor="lastName">
                LAST NAME
              </label>

              <input
                type="text"
                id="lastName"
                name="lastName"
                placeholder="Last Name"
                onChange={handleLastNameChange}
                onBlur={handleLastNameBlur}
                value={data.lastName}
                className="input-field"
              />
              {data.lastNameErr && <p className="error-msg">Required*</p>}
            </div>
            <div>
              <button type="submit" className="btn">
                Submit
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  )
}

export default RegistrationForm
