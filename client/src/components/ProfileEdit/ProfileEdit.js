import React from 'react'
import './ProfileEdit.css'


const ProfileEdit = props =>{

  let prop = props.props
  return (
    <div className="row">
      <div className="col-sm-12">
        <form className='profileEdit'>

          <div className='form-group'>
            <label htmlFor='about'>About me:</label>
            <textarea
              onChange={props.handleInputChange}
              value={prop.about}
              name='about'
              type='text'
              className='form-control'
              placeholder='Write a short description about yourself'
              id='about'
            />

            <label htmlFor='displayName'>Display Name:</label>
            <input
              value={prop.displayName}
              onChange={props.handleInputChange}
              name='displayName'
              type='text'
              className='form-control'
              placeholder='Enter your first name'
              id='displayName'
            />

            <label htmlFor='email'>Email:</label>
            <input
              value={prop.email}
              onChange={props.handleInputChange}
              name='email'
              type='email'
              className='form-control'
              placeholder='Enter an email address'
              id='email'
            />

            <label htmlFor='skillInput'>Skills:</label>
            <input
              value={prop.skillInput}
              onChange={props.handleInputChange}
              name='skillInput'
              type='text'
              className='form-control'
              placeholder="Ex: javascript, node, react, etc.."
              id='skillInput'
            />

            <button
            type='submit'
            className="btn btn-success"
            onClick={props.handleSubmit}
          >
          Save Changes
          </button>

          </div>
        </form>
      </div>
  </div>
  )
}

export default ProfileEdit
