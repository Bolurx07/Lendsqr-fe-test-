import './UserFilter.scss'

const UserFilter = () => {
  return (
   
    <form className='formcontainer'>
        <div>
            <label htmlFor="organization">Organization</label><br />
            <select name="organization" id='org'>
                <option defaultValue="organization">Organization</option>
                <option value="active">labore-dolor-et</option>
                <option value="inactive">accusantium-voluptatem-voluptate</option>
            </select>
        </div>
        <div>
            <label htmlFor="username">Username</label><br />
            <input type="text" name='username' placeholder='User' />
        </div>
        <div>
            <label htmlFor="email">Email</label><br />
            <input type="email" name='email' placeholder='Email' />
        </div>
        <div>
            <label htmlFor="date">Date</label><br />
            <input type="date" name='date' placeholder='Date' id='date'/>
        </div>
        <div>
            <label htmlFor="number">Phone Number</label><br />
            <input type="number" name='number' placeholder='Phone Number' />
        </div>
        <div>
            <label htmlFor="status">Status</label><br />
            <select name="status" id='status'>
                <option defaultValue="status" >Status</option>
                <option value="active">Active</option>
                <option value="inactive">Inactive</option>
                <option value="pending">Pending</option>
                <option value="blacklisted">Blacklisted</option>
            </select>
        </div>
        <div className='button-div'>
            <button type="reset" id='reset'>Reset</button>
            <button type="submit" id='submit'>Submit</button>
        </div>
    </form>
   

  )
}

export default UserFilter