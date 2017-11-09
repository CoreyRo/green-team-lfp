import React from 'react'
import './ProfileEdit.css'


const ProfileEdit = props =>{
  console.log(props.prop)
  let prop = props.props
  return (
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
      <label htmlFor='projectInput'>Projects:</label>
      <input
        value={prop.projectInput}
        onChange={props.handleInputChange}
        name='projectInput'
        type='text'
        className='form-control'
        placeholder='Enter a project'
        id='projectInput'
      />
      <button
        type='submit'
        
        onClick={props.handleArraySubmit}
      >
      Add more projects
      </button>

      
      <label htmlFor='joinedInput'>Joined:</label>
      <input
        value={prop.joinedInput}
        onChange={props.handleInputChange}
        
        name='joinedInput'
        type='text'
        className='form-control'
        placeholder='Enter a project'
        id='joinedInput'
      />
      <button
        type='submit'
        
        onClick={props.handleArraySubmit}
      >
      Add more projects
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
  )
}

export default ProfileEdit
