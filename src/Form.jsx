import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

function Form() {
  const location = useLocation();
  const navigate = useNavigate(); // For navigation
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: location.state?.email || '', // Set email from location state or empty
    message: '',
  });

  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !formData.name ||
      !formData.phone ||
      !formData.email ||
      !formData.message
    ) {
      setErrorMessage('Please fill in all the fields.');
      setSuccessMessage('');
      return;
    }

    try {
      const response = await fetch('https://positiveway.in/submit.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams(formData).toString(),
      });

      const result = await response.json();
      if (result.status === 'success') {
        setSuccessMessage(
          'Thank you for your response. We will talk to you later.'
        );
        setErrorMessage('');
        setFormData({
          name: '',
          phone: '',
          email: '',
          message: '',
        });
      } else {
        setSuccessMessage('');
        setErrorMessage('Error saving data: ' + result.message);
      }
    } catch (error) {
      console.error('Error:', error);
      setSuccessMessage('');
      setErrorMessage(
        'An error occurred while submitting the form. Please try again later.'
      );
    }
  };

  return (
    <section className='relative flex flex-wrap lg:h-screen lg:items-center mx-auto max-w-7xl'>
      <div className='w-full px-4 py-12 sm:px-6 sm:py-16 lg:w-1/2 lg:px-8 lg:py-24'>
        <div className='mx-auto max-w-lg text-center'>
          <h1 className='text-3xl font-extrabold py-4'>Send us a message</h1>
          <p className='mt-4 text-gray-500'>
            We'd love to hear from you. Fill out the form and we'll get back to
            you soon.
          </p>
        </div>

        {/* Success or Error message */}
        {successMessage && (
          <div className='my-4 text-green-600 text-center'>
            {successMessage}
          </div>
        )}
        {errorMessage && (
          <div className='my-4 text-red-600 text-center'>{errorMessage}</div>
        )}

        <form
          onSubmit={handleSubmit}
          className='mx-auto mt-8 max-w-md space-y-4'
        >
          <div className='relative'>
            <input
              className='w-full rounded-lg border-gray-200 p-4 text-sm shadow-sm'
              type='text'
              placeholder='First Name*'
              name='name'
              value={formData.name}
              onChange={handleChange}
            />
          </div>
          <div className='relative'>
            <input
              className='w-full rounded-lg border-gray-200 p-4 text-sm shadow-sm'
              type='number'
              placeholder='Phone*'
              name='phone'
              value={formData.phone}
              onChange={handleChange}
            />
          </div>
          <div className='relative'>
            <input
              className='w-full rounded-lg border-gray-200 p-4 text-sm shadow-sm'
              type='email'
              placeholder='Email*'
              name='email'
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div className='relative'>
            <textarea
              className='w-full rounded-lg border-gray-200 p-4 text-sm shadow-sm h-32'
              placeholder='Message*'
              name='message'
              value={formData.message}
              onChange={handleChange}
            ></textarea>
          </div>

          <div className='flex items-center justify-between'>
            <button
              type='submit'
              className='inline-block rounded-lg bg-blue-500 px-5 py-3 text-sm font-medium text-white'
            >
              Send Message
            </button>
            <button
              type='button'
              onClick={() => navigate('/')} // Navigate to home
              className='inline-block rounded-lg bg-gray-500 px-5 py-3 text-sm font-medium text-white'
            >
              Back to Home
            </button>
          </div>
        </form>
      </div>

      <div className='relative h-64 w-full sm:h-96 lg:h-full lg:w-1/2'>
        <img
          alt='Contact us'
          src='https://images.unsplash.com/photo-1555421689-d68471e189f2?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
          className='absolute inset-0 h-full w-full object-cover'
        />
      </div>
    </section>
  );
}

export default Form;
