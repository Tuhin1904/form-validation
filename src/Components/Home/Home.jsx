import React from 'react'
import { deleteFormData } from '../../redux/formSlice';
import { useSelector,useDispatch } from 'react-redux';

const Home = () => {
  
  const persistedFormData = useSelector((state) => state.form.formData);
  const dispatch=useDispatch();

  if (!persistedFormData) {
    return null; 
  }
  const handleDelete = (index) => {
    dispatch(deleteFormData(index));
  };
  const handleViewMessage = (message) => {
    // setViewedMessage(message);
    alert(`Full Message: ${message}`);
  };
 
  return (
    <div className='container mx-auto my-5'>
    <table className='min-w-fit mx-auto bg-white border border-gray-300'>
      <thead>
        <tr className='bg-gray-100'>
          <th className='border border-gray-300 px-4 py-2'>First Name</th>
          <th className='border border-gray-300 px-4 py-2'>Middle Name</th>
          <th className='border border-gray-300 px-4 py-2'>Last Name</th>
          <th className='border border-gray-300 px-4 py-2'>Email</th>
          <th className='border border-gray-300 px-4 py-2'>Mobile Number</th>
          <th className='border border-gray-300 px-4 py-2'>Message</th>
          <th className='border border-gray-300 px-4 py-2'>Address</th>
        </tr>
      </thead>
      <tbody>
        {persistedFormData.map((data, index) => (
          <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : ''}>
            <td className='border border-gray-300 px-4 py-2'>{data.firstName}</td>
            <td className='border border-gray-300 px-4 py-2'>{data.middleName}</td>
            <td className='border border-gray-300 px-4 py-2'>{data.lastName}</td>
            <td className='border border-gray-300 px-4 py-2'>{data.email}</td>
            <td className='border border-gray-300 px-4 py-2'>{data.mobileNumber}</td>
            <td className='border border-gray-300 px-4 py-2'>
            {data.message.length > 25 ? (
          <>
            {`${data.message.substring(0, 25)}... `}
            <button
              className='underline cursor-pointer'
              onClick={() => handleViewMessage(data.message)}>
              Read
            </button>
          </>
        ) : (
          data.message
        )}  
            </td>
            <td className='border border-gray-300 px-4 py-2'>{data.address}</td>
            <td className='border border-gray-300 px-4 py-2'>
            <button
                  className='bg-red-500 hover:bg-red-600 text-white px-2 py-1 rounded'
                  onClick={() => handleDelete(index)}>
                  Delete
                </button>
                </td>    
          </tr>
        ))}
      </tbody>
    </table>
  </div>)
}

export default Home