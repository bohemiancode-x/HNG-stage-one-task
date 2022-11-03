import React from 'react'

export default function Contact() {
  return (
    <div className='md:w-[60%] m-auto py-20'>
        <div>
            <h1 className='text-3xl font-bold'>Contact Me</h1>
            <p className='text-[#475467] py-5'>Hi there, contact me to ask me about anything you have in mind.</p>
        </div>

        <form className='flex flex-col gap-3 md:grid md:grid-cols-2 md:grid-flow-row-dense'>
            <label className='label'>
                <span className='font-bold'>First name</span>
                <input className='input' type="text" id='first_name' placeholder='Enter your first name' required/>
            </label>
            <label className='label'>
                <span className='font-bold'>Last name</span>
                <input className='input' type="text" id='last_name' placeholder='Enter your last name' required/>
            </label>
            <label className='label col-span-2'>
                <span className='font-bold'>Email</span>
                <input className='peer invalid:border-red-500 input' type="email" id='email' placeholder='yourname@email.com' required />
                <p class="mt-2 invisible peer-invalid:visible text-pink-600 text-sm">
                    Please provide a valid email address.
                </p>
            </label>
            <label className='label col-span-2'>
                <span className='font-bold'>Message</span>
                <textarea className='input' name="message" id="message" placeholder="Send me a message and I'll reply you as soon as possible..." rows='10' required></textarea>
            </label>
            <label className='relative py-1 flex col-span-2'>
                <input className='check' type="checkbox" id="check" required/>
                <span className='pl-3 text-[#475467]'>You agree to providing your data to Emmanuel Ayo who may contact you.</span>
            </label>
            <button className='col-span-2 bg-[#1570ef] py-3 text-white rounded-lg hover:opacity-50' id='btn_submit'>Send message</button>
        </form>
    </div>
  )
}
