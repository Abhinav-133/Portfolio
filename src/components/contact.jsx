import { FiPhone, FiMapPin, FiMail } from 'react-icons/fi';


export function Contactpage(){

    const contacts = [
        {
          id: 1,
          name: "Ghaziabad, Uttar Pradesh, India",
          icon: <FiMapPin />,
        },
        {
          id: 2,
          name: "abhinavmittal743@gmail.com",
          icon: <FiMail />,
        },
        {
          id: 3,
          name: "9650956XXX",
          icon: <FiPhone />,
        },
      ];

    const FormInput = ({
        inputLabel,
        labelFor,
        inputType,
        inputId,
        inputName,
        placeholderText,
        ariaLabelName,
    }) => {
        return (
            <div className="font-general-regular mb-4 text-white">
                <label
                    className="block text-lg text-primary-dark dark:text-primary-light mb-1"
                    htmlFor={labelFor}
                >
                    {inputLabel}
                </label>
                <input
                    className="w-full px-5 py-2 border  border-gray-300 dark:border-primary-dark border-opacity-50 text-white dark:text-secondary-light bg-ternary-light dark:bg-ternary-dark rounded-md shadow-sm text-md"
                    type={inputType}
                    id={inputId}
                    name={inputName}
                    placeholder={placeholderText}
                    aria-label={ariaLabelName}
                    required
                />
            </div>
        );
    };

    

    return(
        <div className="container mx-auto flex flex-col-reverse lg:flex-row py-5 lg:py-10 ">
        <div className="w-full lg:w-1/2">
        <div className="text-left max-w-xl px-6 text-white">
            <h2 className="font-general-medium text-2xl text-white dark:text-primary-light mt-12 mb-8">
                Contact details
            </h2>
            <ul className="font-general-regular">
                {contacts.map((contact) => (
                    <li className="flex " key={contact.id}>
                        <i className="text-2xl text-gray-500 dark:text-gray-400 mr-4">
                            {contact.icon}
                        </i>
                        <span className="text-lg mb-4 text-ternary-dark dark:text-ternary-light">
                            {contact.name}
                        </span>
                    </li>
                ))}
            </ul>
        </div>
    </div>
    

{/* <div className="w-full lg:w-1/2 text-white">
<div className="leading-loose">
    <form
        onSubmit={(e) => {
            e.preventDefault();
        }}
        className="max-w-xl m-4 p-6 sm:p-10 bg-[#3f5575] dark:bg-secondary-dark rounded-xl shadow-xl text-left"
    >
        <p className="font-general-medium text-primary-dark dark:text-primary-light text-2xl mb-8">
            Contact Form
        </p>
        <FormInput
            inputLabel="Full Name"
            labelFor="name"
            inputType="text"
            inputId="name"
            inputName="name"
            placeholderText="Your Name"
            ariaLabelName="Name"
        />
        <FormInput
            inputLabel="Email"
            labelFor="email"
            inputType="email"
            inputId="email"
            inputName="email"
            placeholderText="Your email"
            ariaLabelName="Email"
        />
        <FormInput
            inputLabel="Subject"
            labelFor="subject"
            inputType="text"
            inputId="subject"
            inputName="subject"
            placeholderText="Subject"
            ariaLabelName="Subject"
        />

        <div className="mt-6">
            <label
                className="block text-lg text-primary-dark dark:text-primary-light mb-2"
                htmlFor="message"
            >
                Message
            </label>
            <textarea
                className="w-full px-5 py-2 border border-gray-300 dark:border-primary-dark border-opacity-50 text-primary-dark dark:text-secondary-light bg-ternary-light dark:bg-ternary-dark rounded-md shadow-sm text-md"
                id="message"
                name="message"
                cols="14"
                rows="6"
                aria-label="Message"
            ></textarea>
        </div>

        <div className="font-general-medium w-40 px-4 py-2.5 text-white text-center font-medium tracking-wider bg-indigo-500 hover:bg-indigo-600 focus:ring-1 focus:ring-indigo-900 rounded-lg mt-6 duration-500">
            <Button
                title="Send Message"
                type="submit"
                aria-label="Send Message"
            />
        </div>
    </form>
</div>
</div> */}
<div className="w-full lg:w-1/2 text-white">
        <div className="leading-loose">
          <p className="font-general-medium text-primary-dark dark:text-primary-light text-3xl mb-8">
            Get in Touch
          </p>
          <div className="max-w-xl m-4 p-8 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 dark:bg-secondary-dark rounded-xl shadow-2xl text-left transform transition duration-500 hover:scale-105 hover:shadow-xl">
            <p className="text-lg mb-6 text-white">
              Ready to start a conversation? Click below to send me an email, and let's connect!
            </p>
            <a
              href="mailto:abhinavmittal743@gmail.com"
              className="flex items-center justify-center font-general-medium w-full py-3 px-8 text-lg text-white bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-purple-600 hover:to-pink-600 focus:ring-4 focus:ring-indigo-700 rounded-full shadow-lg transform transition duration-500 hover:scale-105"
              aria-label="Email Abhinav Mittal"
            >
              <FiMail className="mr-2 text-2xl" />
              Send Email
            </a>
          </div>
        </div>
      </div>
    </div>

// </div>

    )
}

function Button({ title }) {
    return <button>{title}</button>;
}



