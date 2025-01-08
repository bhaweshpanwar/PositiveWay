import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const testimonials = [
  {
    id: 1,
    header: 'Saved Big on My Bills!',
    text: 'I was able to reduce my monthly expenses significantly after using this service. It has made a huge difference, especially with the rising costs.',
    author: 'Rahul',
    location: 'DataFlair',
  },
  {
    id: 2,
    header: 'Great Customer Support!',
    text: 'The support team was always there to help me with any issues. Their service is reliable and efficient, and I feel confident using it.',
    author: 'Dinesh',
    location: 'Dakshaja Designs',
  },
  {
    id: 3,
    header: 'Professional and Reliable!',
    text: 'The service has been consistently professional and reliable. I would highly recommend it to anyone looking for quality and trust.',
    author: 'Brijesh',
    location: 'Rajhans Fertilizers',
  },
];

function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [email, setEmail] = useState('');
  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length
    );
  };

  const navigate = useNavigate();

  // const handleNavigate = () => {
  //   navigate('/Form', { state: { email } });
  // };
  // Function to handle Enter key press
  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault(); // Prevent default form submission behavior
      handleNavigate(); // Call the same navigate function when Enter is pressed
    }
  };

  const handleNavigate = () => {
    if (email) {
      navigate('/Form', { state: { email } }); // Redirect to form page with email in state
    } else {
      alert('Please enter a valid email address');
    }
  };

  return (
    <div className='w-full'>
      <div className='relative w-full bg-white'>
        <div className='mx-auto max-w-7xl lg:grid lg:grid-cols-12 lg:gap-x-8 lg:px-8'>
          <div className='flex flex-col justify-center px-4 py-12 md:py-16 lg:col-span-7 lg:gap-x-6 lg:px-6 lg:py-24 xl:col-span-6'>
            <h1 className='mt-8 text-3xl font-extrabold tracking-tight text-black md:text-4xl lg:text-6xl'>
              IT Solutions,{' '}
              <span className='bg-gradient-to-r from-[#BFF098] to-[#6FD6FF] bg-clip-text text-transparent'>
                Cybersecurity,
              </span>{' '}
              Consultancy Services
            </h1>

            <p className='mt-8 text-lg text-gray-700'>
              Assisting Organizations to Focus on Business
            </p>
            <form action='' className='mt-8 flex items-start space-x-2'>
              <div>
                <input
                  className='flex w-full rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1'
                  type='email'
                  placeholder='Enter your email'
                  id='email'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)} // Save email in state
                  onKeyDown={(e) => handleKeyDown(e)} // Call a function to handle key press
                />
                <p className='mt-2 text-sm text-gray-500'>
                  We care about your privacy
                </p>
              </div>
              <div>
                <button
                  type='button'
                  className='rounded-md bg-black px-3 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-black/80'
                  onClick={handleNavigate} // Use the handler to navigate and pass the email
                >
                  Let's Talk
                </button>
              </div>
            </form>
          </div>
          <div className='relative lg:col-span-5 lg:-mr-8 xl:col-span-6'>
            <img
              className='aspect-[3/2] bg-gray-50 object-cover lg:aspect-[4/3] lg:h-[700px] xl:aspect-[16/9]'
              src='https://images.unsplash.com/photo-1510915228340-29c85a43dcfe?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
              alt=''
            />
          </div>
        </div>
      </div>
      <div className='mx-auto m-4 max-w-7xl'>
        <div
          className='relative overflow-hidden py-16 px-8 h-auto
           flex justify-center items-center '
          style={{ background: 'linear-gradient(135deg, #E0F8D4, #A3E0FF)' }}
        >
          <div className='grid grid-cols-1 gap-y-8 text-center sm:grid-cols-2 sm:gap-12 lg:grid-cols-4 '>
            {/* Card 1 */}
            <div className='py-4 px-8 rounded-3xl bg-white shadow-lg hover:shadow-2xl transition-transform duration-300 transform hover:scale-105'>
              <div className='mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-blue-100'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  height='24px'
                  viewBox='0 -960 960 960'
                  width='24px'
                  fill='#333'
                >
                  <path d='M0-240v-63q0-43 44-70t116-27q13 0 25 .5t23 2.5q-14 21-21 44t-7 48v65H0Zm240 0v-65q0-32 17.5-58.5T307-410q32-20 76.5-30t96.5-10q53 0 97.5 10t76.5 30q32 20 49 46.5t17 58.5v65H240Zm540 0v-65q0-26-6.5-49T754-397q11-2 22.5-2.5t23.5-.5q72 0 116 26.5t44 70.5v63H780Zm-455-80h311q-10-20-55.5-35T480-370q-55 0-100.5 15T325-320ZM160-440q-33 0-56.5-23.5T80-520q0-34 23.5-57t56.5-23q34 0 57 23t23 57q0 33-23 56.5T160-440Zm640 0q-33 0-56.5-23.5T720-520q0-34 23.5-57t56.5-23q34 0 57 23t23 57q0 33-23 56.5T800-440Zm-320-40q-50 0-85-35t-35-85q0-51 35-85.5t85-34.5q51 0 85.5 34.5T600-600q0 50-34.5 85T480-480Zm0-80q17 0 28.5-11.5T520-600q0-17-11.5-28.5T480-640q-17 0-28.5 11.5T440-600q0 17 11.5 28.5T480-560Zm1 240Zm-1-280Z' />
                </svg>
              </div>
              <h3 className='mt-8 text-lg font-bold text-black'>
                Excellent Team
              </h3>
              <p className='mt-4 text-sm text-gray-600'>
                Our team of cybersecurity veterans provides unparalleled
                knowledge and experience to keep you safe.
              </p>
            </div>

            {/* Card 2 */}
            <div className='py-4 px-8 rounded-3xl bg-white shadow-lg hover:shadow-2xl transition-transform duration-300 transform hover:scale-105'>
              <div className='mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-orange-100'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  height='24px'
                  viewBox='0 -960 960 960'
                  width='24px'
                  fill='#333'
                >
                  <path d='M480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm-40-82v-78q-33 0-56.5-23.5T360-320v-40L168-552q-3 18-5.5 36t-2.5 36q0 121 79.5 212T440-162Zm276-102q20-22 36-47.5t26.5-53q10.5-27.5 16-56.5t5.5-59q0-98-54.5-179T600-776v16q0 33-23.5 56.5T520-680h-80v80q0 17-11.5 28.5T400-560h-80v80h240q17 0 28.5 11.5T600-440v120h40q26 0 47 15.5t29 40.5Z' />
                </svg>
              </div>
              <h3 className='mt-8 text-lg font-bold text-black'>
                Global Production Support
              </h3>
              <p className='mt-4 text-sm text-gray-600 text-center'>
                We're always here to help, with around-the-clock support no
                matter where you are in the world.
              </p>
            </div>

            {/* Card 3 */}
            <div className='py-4 px-8 rounded-3xl bg-white shadow-lg hover:shadow-2xl transition-transform duration-300 transform hover:scale-105'>
              <div className='mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-green-100'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  height='24px'
                  viewBox='0 -960 960 960'
                  width='24px'
                  fill='#333'
                >
                  <path d='M300-720q-25 0-42.5 17.5T240-660q0 25 17.5 42.5T300-600q25 0 42.5-17.5T360-660q0-25-17.5-42.5T300-720Zm0 400q-25 0-42.5 17.5T240-260q0 25 17.5 42.5T300-200q25 0 42.5-17.5T360-260q0-25-17.5-42.5T300-320ZM160-840h640q17 0 28.5 11.5T840-800v280q0 17-11.5 28.5T800-480H160q-17 0-28.5-11.5T120-520v-280q0-17 11.5-28.5T160-840Zm40 80v200h560v-200H200Zm-40 320h640q17 0 28.5 11.5T840-400v280q0 17-11.5 28.5T800-80H160q-17 0-28.5-11.5T120-120v-280q0-17 11.5-28.5T160-440Zm40 80v200h560v-200H200Zm0-400v200-200Zm0 400v200-200Z' />
                </svg>
              </div>
              <h3 className='mt-8 text-lg font-bold text-black'>
                Global Presence Server
              </h3>
              <p className='mt-4 text-sm text-gray-600'>
                Your data is protected by a global network of secure servers,
                ensuring redundancy and resilience.
              </p>
            </div>

            {/* Card 4 */}
            <div className='py-4 px-8 rounded-3xl bg-white shadow-lg hover:shadow-2xl transition-transform duration-300 transform hover:scale-105'>
              <div className='mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-red-100'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  height='24px'
                  viewBox='0 -960 960 960'
                  width='24px'
                  fill='#333'
                >
                  <path d='m354-287 126-76 126 77-33-144 111-96-146-13-58-136-58 135-146 13 111 97-33 143ZM233-120l65-281L80-590l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Zm247-350Z' />
                </svg>
              </div>
              <h3 className='mt-8 text-lg font-bold text-black'>Star People</h3>
              <p className='mt-4 text-sm text-gray-600'>
                We believe in building strong partnerships. Our team is
                dedicated to your success and committed to the highest ethical
                standards.
              </p>
            </div>
          </div>
        </div>
      </div>

      <section className='mx-auto max-w-7xl bg-gray-50 px-2 py-10 md:px-0'>
        <div id='our_services' className='scroll-smooth'>
          <div className='mx-auto max-w-2xl lg:text-center'>
            <h2 className='text-2xl font-extrabold leading-tight text-black sm:text-4xl lg:text-5xl'>
              Our Services
            </h2>
          </div>
          <div className='mx-auto mt-8 max-w-3xl space-y-4 md:mt-16'>
            <div className='cursor-pointer rounded-md border border-gray-400 transition-all duration-200'>
              <span className='flex w-full items-start justify-between px-4 py-5 sm:p-6 md:items-center font-bold text-black'>
                Managed Security Services
              </span>

              <div className='px-4 pb-5 sm:px-6 sm:pb-6'>
                <p className='text-gray-500'>
                  Our managed security services offer round-the-clock monitoring
                  and management of your security infrastructure.
                </p>
              </div>
            </div>
            <div className='cursor-pointer rounded-md border border-gray-400 transition-all duration-200'>
              <span className='flex w-full items-start justify-between px-4 py-5 sm:p-6 md:items-center font-bold text-black'>
                Consulting Services
              </span>
              <div className='px-4 pb-5 sm:px-6 sm:pb-6'>
                <p className='text-gray-500'>
                  Our Consulting Services provide strategic guidance to help you
                  develop and implement effective cybersecurity policies and
                  strategies.
                </p>
              </div>
            </div>
            <div className='cursor-pointer rounded-md border border-gray-400 transition-all duration-200'>
              <span className='flex w-full items-start justify-between px-4 py-5 sm:p-6 md:items-center font-bold text-black'>
                Security Assessment & Auditing
              </span>

              <div className='px-4 pb-5 sm:px-6 sm:pb-6'>
                <p className='text-gray-500'>
                  Our Security assessment include thorough vulnerability scans,
                  Risk assessments and compliance audits.
                </p>
              </div>
            </div>
          </div>
          <div className=' py-4 px-4 sm:px-6 lg:px-8 text-center'>
            <button
              onClick={() => navigate('/Services')}
              className='text-blue-500 hover:text-blue-600 font-medium text-center'
            >
              Know More &rarr;
            </button>
          </div>
        </div>
      </section>
      {/* <ServicesCards /> */}

      <div className='h-48 bg-gradient-to-r from-[#E0F8D4] to-[#A3E0FF] flex flex-col justify-between items-center p-6 text-center mx-auto max-w-7xl sm:py-6'>
        <div className='flex flex-col justify-center items-center space-y-4'>
          <h1 className='text-2xl font-bold text-gray-900'>
            Have Any Work For Us
          </h1>
          <p className='text-md text-gray-700'>
            We provide exceptional solutions tailored to your needs. Let's make
            your project a success together.
          </p>
        </div>

        <button
          type='button'
          className='rounded-md bg-black px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black'
          onClick={() => navigate('/form')}
        >
          Let's Talk
        </button>
      </div>

      <div className='bg-gray-50 py-10 px-4 mx-auto max-w-7xl' id='blogs'>
        <div className='max-w-4xl mx-auto'>
          <div className='relative'>
            {/* Slide Container */}
            <div className='overflow-hidden'>
              <div className='flex transition-all duration-300'>
                {/* Testimonial Card */}
                <div className='bg-white shadow-lg rounded-lg p-6 flex flex-col items-center text-center w-full'>
                  <h5 className='text-xl font-semibold mb-4 text-gray-800'>
                    {testimonials[currentIndex].header}
                  </h5>
                  <blockquote className='text-gray-600 mb-6'>
                    {testimonials[currentIndex].text}
                  </blockquote>
                  <address className='flex flex-col items-center'>
                    <h6 className='text-lg font-medium text-gray-700'>
                      {testimonials[currentIndex].author}
                    </h6>
                    <p className='text-sm text-gray-500'>
                      {testimonials[currentIndex].location}
                    </p>
                  </address>
                </div>
              </div>
            </div>

            {/* Previous Button */}
            <button
              onClick={handlePrev}
              className='absolute top-1/2 -left-4 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full hover:bg-gray-700 transition'
            >
              &#10094; {/* Left Arrow Icon */}
            </button>

            {/* Next Button */}
            <button
              onClick={handleNext}
              className='absolute top-1/2 -right-4 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full hover:bg-gray-700 transition'
            >
              &#10095; {/* Right Arrow Icon */}
            </button>
          </div>
        </div>
      </div>
      <div className='mx-auto bg-gray-900 px-4 pt-16 sm:max-w-xl md:max-w-full md:px-24 lg:max-w-screen-xl lg:px-8'>
        <div className='row-gap-6 mb-8 grid gap-10 text-white sm:grid-cols-2 lg:grid-cols-4'>
          <div className='sm:col-span-2'>
            <a
              aria-label='Go home'
              title='Company'
              className='inline-flex items-center'
            >
              <span className='text-2xl font-bold tracking-wide'>
                PositiveWay Solutions Pvt Ltd.
              </span>
            </a>
            <div className='mt-6 lg:max-w-sm'>
              <p className='text-sm text-gray-500'>
                We provide expert cybersecurity, IT consultancy, and custom web
                & UI/UX design solutions designed to protect and enhance your
                digital presence. With a focus on security, innovation, and user
                experience, our goal is to build trust and deliver results that
                align with your vision.
              </p>
            </div>
          </div>
          <div className='space-y-2 text-sm'>
            <p className='text-base font-bold tracking-wide'>Contacts</p>
            <div className='flex'>
              <p className='mr-1'>Phone:</p>
              <a
                href='tel:+919479360098'
                aria-label='Our phone'
                title='Our phone'
                className='text-deep-purple-accent-400 hover:text-deep-purple-800 transition-colors duration-300 text-gray-300'
              >
                {' '}
                +91 94793 60098{' '}
              </a>
            </div>
            <div className='flex flex-col'>
              <p className='mr-1'>Email:</p>
              <a
                href='mailto:enquiry@positiveway.in'
                aria-label='Our email'
                title='Our email'
                className='text-deep-purple-accent-400 hover:text-deep-purple-800 transition-colors duration-300 text-gray-300'
              >
                enquiry@positiveway.in
              </a>
              <a
                href='mailto:siddhant@positiveway.in'
                aria-label='Our email'
                title='Our email'
                className='text-deep-purple-accent-400 hover:text-deep-purple-800 transition-colors duration-300 text-gray-300'
              >
                siddhant@positiveway.in
              </a>
              <br />
              <p>Address:</p>
              <p className='text-gray-300'>
                Burjuman Towers, 15th Floor, Near Burjuman Mall, Dubai
              </p>
            </div>
          </div>
          <div>
            <span className='text-base font-bold tracking-wide'>Social</span>
            <div className='mt-1 flex items-center space-x-3'>
              <a
                href='https://www.instagram.com/positiveway_solutions/'
                target='_blank'
                className='hover:text-deep-purple-accent-400 text-gray-300 transition-colors duration-300 text-sm'
              >
                Instagram
              </a>
            </div>
            <div className='mt-1 flex items-center space-x-3'>
              <a
                href='https://www.linkedin.com/in/positiveway-solutions-40264b32a'
                target='_blank'
                className='hover:text-deep-purple-accent-400 text-gray-300 transition-colors duration-300 text-sm'
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>
        <div className='pb-10 pt-5 text-center'>
          <p className='text-gray-500 text-sm'>
            © 2025 PositiveWay Solutions. All Rights Reserved.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;
