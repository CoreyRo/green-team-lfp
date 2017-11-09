import React from 'react'
import './ProfileEdit.css'


const ProfileEdit = props =>{
  console.log(props.prop)
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

            <label htmlFor='skillInput'>Skills:</label>
            <input
              value={prop.skillInput}
              onChange={props.handleInputChange}
              name='skillInput'
              type='text'
              className='form-control'
              placeholder='Enter a skill'
              id='skillInput'
            />
            <button
              type='submit'
              
              onClick={props.handleArraySubmit}
            >
            Add more skills
            </button>

            <button
              type='submit'
              onClick={props.editPage}
              className='btn btn-success'
            >
              Finish
            </button>
          </div>
        </form>
      </div>
  </div>
  )
}

export default ProfileEdit
