import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const AboutUs = () => {
  const navigate = useNavigate();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      {/* Back Button */}
      {/* <div className='bg-gray-50 py-4 px-4 sm:px-6 lg:px-8'>
        <button
          onClick={() => navigate('/')}
          className='text-blue-500 hover:text-blue-600 font-medium'
        >
          &#8592; Back to Home
        </button>
      </div> */}

      <div className='bg-gray-50 py-16 px-4 sm:px-6 lg:px-8 mx-auto max-w-7xl'>
        <div className='container mx-auto'>
          <div className='grid grid-cols-1 md:grid-cols-2 items-center gap-8'>
            <div className='max-w-lg'>
              <h2 className='text-3xl font-extrabold text-gray-900 sm:text-4xl text-center'>
                About Us
              </h2>
              <p className='mt-4 text-gray-600 text-lg'>
                At <span className='font-semibold'>PositiveWay Solutions</span>,
                we are led by a mentor with over 22 years of experience in
                Cybersecurity and certifications including CISA, ISO 27002, and
                ITIL. While our team brings a fresh and dynamic approach, we are
                guided by seasoned expertise to deliver secure, efficient, and
                innovative solutions that help businesses thrive in today’s
                digital world. Our focus is on building long-lasting
                relationships by providing solutions that are both robust and
                aligned with your vision.
              </p>
              <p className='mt-4 text-gray-600 text-lg'>
                Whether it’s fortifying your digital infrastructure,
                streamlining IT processes, or crafting user-friendly interfaces,
                we ensure every project meets the highest standards. With our
                deep understanding of cybersecurity and web technologies,
                PositiveWay Solutions is your trusted partner for success in an
                evolving digital landscape.
              </p>
              <div className='mt-8'>
                <a
                  href='https://www.linkedin.com/in/positiveway-solutions-40264b32a'
                  target='_blank'
                  className='text-blue-500 hover:text-blue-600 font-medium'
                >
                  Learn more about us<span className='ml-2'>&#8594;</span>
                </a>
              </div>
            </div>
            <div className='mt-12 md:mt-0'>
              <img
                src='https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                alt='About Us'
                className='object-cover rounded-lg shadow-md'
              />
            </div>
          </div>
        </div>
      </div>

      {/* Services Cards */}
      <div className='bg-black h-full rounded-3xl pb-11 mx-auto max-w-7xl'>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 justify-center gap-8 p-10 pt-28 rounded-3xl'>
          <div className='rounded-xl border border-gray-800 p-6 bg-gray-900 hover:bg-gray-800 transition-colors duration-200'>
            <span className='inline-block rounded-lg p-3 bg-blue-500'></span>
            <h2 className='mt-2 font-semibold text-base sm:text-lg text-white'>
              Custom Web Development
            </h2>
            <p className='sm:mt-1 block text-sm sm:text-base text-gray-300'>
              Build responsive and custom websites tailored to your business
              needs.
            </p>
          </div>

          <div className='rounded-xl border border-gray-800 p-6 bg-gray-900 hover:bg-gray-800 transition-colors duration-200'>
            <span className='inline-block rounded-lg p-3 bg-green-500'></span>
            <h2 className='mt-2 font-semibold text-base sm:text-lg text-white'>
              Data Analytics Solutions
            </h2>
            <p className='sm:mt-1 block text-sm sm:text-base text-gray-300'>
              Extract valuable insights from your data and make informed
              decisions.
            </p>
          </div>

          <div className='rounded-xl border border-gray-800 p-6 bg-gray-900 hover:bg-gray-800 transition-colors duration-200 mx-auto max-w-7xl'>
            <span className='inline-block rounded-lg p-3 bg-orange-500'></span>
            <h2 className='mt-2 font-semibold text-base sm:text-lg text-white'>
              Cybersecurity Solutions
            </h2>
            <p className='sm:mt-1 block text-sm sm:text-base text-gray-300'>
              Protect your business with advanced cybersecurity strategies and
              tools.
            </p>
          </div>

          <div className='rounded-xl border border-gray-800 p-6 bg-gray-900 hover:bg-gray-800 transition-colors duration-200'>
            <span className='inline-block rounded-lg p-3 bg-purple-500'></span>
            <h2 className='mt-2 font-semibold text-base sm:text-lg text-white'>
              Business Process Automation
            </h2>
            <p className='sm:mt-1 block text-sm sm:text-base text-gray-300'>
              Automate repetitive tasks and improve operational efficiency for
              your business.
            </p>
          </div>
        </div>
      </div>

      {/* "Let's Talk" Section */}
      <div className='bg-gray-100 py-16 px-4 sm:px-6 lg:px-8 mx-auto max-w-7xl'>
        <div className='container mx-auto text-center'>
          <h2 className='text-3xl font-extrabold text-gray-900 sm:text-4xl'>
            Let's Talk!
          </h2>
          <p className='mt-4 text-gray-600 text-lg'>
            Have a project in mind? We'd love to hear from you. Let's discuss
            how we can help bring your ideas to life.
          </p>
          <div className='mt-8'>
            <button
              onClick={() => navigate('/Form')}
              className='px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white font-medium rounded-lg transition-colors duration-200'
            >
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
