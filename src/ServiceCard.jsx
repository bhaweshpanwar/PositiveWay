import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
const Services = () => {
  const navigate = useNavigate();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className='w-full py-16 px-2 bg-gray-50 mx-auto max-w-7xl'>
        {/* Back to Home Link */}
        {/* <div className='bg-gray-100 py-4 px-4 sm:px-6 lg:px-8'>
          <button
            onClick={() => navigate('/')}
            className='text-blue-500 hover:text-blue-600 font-medium'
          >
            &#8592; Back to Home
          </button>
        </div> */}

        {/* Heading Section */}
        <div className='text-center mb-12'>
          <h1 className='text-3xl font-extrabold text-gray-900 sm:text-4xl'>
            Our Services
          </h1>
          <p className='mt-4 text-gray-600 text-lg'>
            Discover the wide range of services we offer to help your business
            thrive in the digital world.
          </p>
        </div>

        {/* Services Cards */}
        <div className='container mx-auto px-4'>
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'>
            {servicesData.map((service, index) => (
              <div
                key={index}
                className='overflow-hidden rounded-xl bg-white shadow-lg hover:shadow-2xl transition-transform duration-300 transform hover:scale-105'
              >
                <div className='h-48 w-full overflow-hidden'>
                  <img
                    src={service.imageUrl}
                    alt={service.title}
                    className='object-cover w-full h-full'
                  />
                </div>
                <div className='p-6'>
                  <h5 className='text-xl font-semibold text-gray-900'>
                    {service.title}
                  </h5>
                  <p className='mt-2 text-gray-600'>{service.description}</p>
                </div>
              </div>
            ))}
          </div>
          {/* "Let's Talk" Section */}
          <div className='bg-gray-50 py-16 px-4 sm:px-6 lg:px-8'>
            <div className='container mx-auto text-center'>
              <h2 className='text-3xl font-extrabold text-gray-900 sm:text-4xl'>
                Let's Talk!
              </h2>
              <p className='mt-4 text-gray-600 text-lg'>
                Have a project in mind? We'd love to hear from you. Let's
                discuss how we can help bring your ideas to life.
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
        </div>

        {/* Footer Section */}
        {/* <div className='mt-16 text-center'>
          <p className='text-gray-600 text-sm'>
            We are dedicated to providing innovative and trusted services to
            empower your business for success.
          </p>
        </div> */}
      </div>
    </>
  );
};

// Sample Data for Services
const servicesData = [
  {
    title: 'Cybersecurity',
    description:
      'Protect your business with top-tier security solutions. We offer comprehensive threat monitoring and defense mechanisms.',
    imageUrl:
      'https://images.unsplash.com/photo-1515378960530-7c0da6231fb1?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    title: 'IT Consultancy',
    description:
      'Expert IT advice to help businesses achieve success through technology innovation and digital transformation.',
    imageUrl:
      'https://images.unsplash.com/photo-1521540216272-a50305cd4421?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&q=80&w=400',
  },
  {
    title: 'Web Design',
    description:
      'We craft visually stunning, user-friendly websites to engage users and increase conversions for your business.',
    imageUrl:
      'https://images.unsplash.com/photo-1542744173-05336fcc7ad4?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&q=80&w=400',
  },
  {
    title: 'UI/UX Design',
    description:
      'Delivering seamless user experiences with innovative designs that balance aesthetics and functionality.',
    imageUrl: 'https://www.ticworks.com/blog/images/ux-business-impact.webp',
  },
  {
    title: 'Digital Security',
    description:
      'Stay protected in the digital world with our advanced security solutions, preventing threats before they occur.',
    imageUrl:
      'https://www.freshbooks.com/blog/wp-content/uploads/2018/10/digital-security-852x568.jpg',
  },
  {
    title: 'Innovative Solutions',
    description:
      'Custom, cutting-edge solutions designed to help your business stay ahead of the curve in a fast-paced market.',
    imageUrl:
      'https://media.licdn.com/dms/image/D4D12AQGrEqG6W3-xuA/article-cover_image-shrink_720_1280/0/1678105450921?e=2147483647&v=beta&t=acXW7tgkWrpyVWifLYcz5iJBm9fyCHFuh8pC4xd2434',
  },
  {
    title: 'Trusted Partner',
    description:
      'Your growth is our priority. We build long-lasting partnerships to help you achieve your business goals.',
    imageUrl:
      'https://www.mtdsalestraining.com/wp-content/uploads/2015/07/Dollarphotoclub_81808080-1024x683.jpg',
  },
  {
    title: 'Business Growth',
    description:
      'Empowering your business to thrive through tailored strategies, ensuring sustainable growth and success.',
    imageUrl:
      'https://images.unsplash.com/photo-1542744095-291d1f67b221?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&q=80&w=400',
  },
];

export default Services;
