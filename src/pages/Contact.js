import { useState } from 'react';

export default function Contact() {
    const initialValues = {firstName: "", lastName: "", email: "", message: "" };
    const [formValues, setFormValues] =useState(initialValues);
    const [formErrors, setFormErrors] =useState({});
    const [isSubmit, setIsSubmit] = useState(false);

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormValues({...formValues, [name]: value});
        //console.log(formValues);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormErrors(validate(formValues));
        setIsSubmit(true);
        if(formErrors) {
            setFormValues(initialValues);
        }
        setTimeout(() => {
                setIsSubmit(false)
            }, 2000)
    };

    const validate = (values) => {
        const errors = {};
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
        if(!values.firstName) {
            errors.firstName= "Please enter a first name";
        }
        if(!values.lastName) {
            errors.lastName= "Please enter a last name";
        }
        if(!values.email) {
            errors.email= "Please provide a valid email address";
        } else if(!regex.test(values.email)) {
            errors.email = "This is not a valid email format!"
        }
        if(!values.message) {
            errors.message= "Please enter a message";
        }
        return errors;
    }


  return (
    <div className='md:w-[60%] m-auto py-20'>
        <div>
            <h1 className='text-3xl font-bold'>Contact Me</h1>
            <p className='text-[#475467] py-5'>Hi there, contact me to ask me about anything you have in mind.</p>
        </div>

        <form onSubmit={handleSubmit} className='flex flex-col gap-3 md:grid md:grid-cols-2 md:grid-flow-row-dense'>
            <label className='label'>
                <span className='font-bold'>First name</span>
                <input
                    className='input'
                    type="text" 
                    id='first_name' 
                    placeholder='Enter your first name' 
                    value={formValues.firstName}
                    name='firstName'
                    onChange={handleChange} 
                    />
                    <p className="mt-2 text-pink-600 text-sm">
                        {formErrors.firstName}
                    </p>
            </label>
            <label className='label'>
                <span className='font-bold'>Last name</span>
                <input 
                    className='input' 
                    type="text" 
                    id='last_name' 
                    placeholder='Enter your last name'
                    value={formValues.lastName}
                    name='lastName'
                    onChange={handleChange}
                    />
                <p className="mt-2 text-pink-600 text-sm">
                   {formErrors.lastName}
                </p>
            </label>
            <label className='label col-span-2'>
                <span className='font-bold'>Email</span>
                <input 
                    className='input' 
                    type="email" 
                    id='email' 
                    placeholder='yourname@email.com'
                    value={formValues.email}
                    name='email'
                    onChange={handleChange} 
                    />
                <p className="mt-2 text-pink-600 text-sm">
                    {formErrors.email}
                </p>
            </label>
            <label className='label col-span-2'>
                <span className='font-bold'>Message</span>
                <textarea 
                    className='input' 
                    name="message" 
                    id="message" 
                    placeholder="Send me a message and I'll reply you as soon as possible..." 
                    rows='10'
                    value={formValues.message}
                    onChange={handleChange} 
                    />
                <p className="mt-2 text-pink-600 text-sm">
                   {formErrors.message}
                </p>
            </label>
            <label className='relative py-1 flex col-span-2'>
                <input className='check' type="checkbox" id="check" required/>
                <span className='pl-3 text-[#475467]'>You agree to providing your data to bohemian-x who may contact you.</span>
            </label>
            <button className='col-span-2 bg-[#1570ef] py-3 text-white rounded-lg hover:opacity-50' id='btn__submit'>Send message</button>
        </form>
        {Object.keys(formErrors).length === 0 && isSubmit ? <div className='mt-5 text-green-500 bg-lime-100 text-sm px-4 rounded-lg py-2 text-center font-bold'>message sent.</div> : null}
    </div>
  )
}
