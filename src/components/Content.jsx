import React, { useState } from 'react'

const Content = () => {

    const [text, setText] = useState('')
    const [message, setMessage] = useState('')

    const handleform = (e) => {
        e.preventDefault()
        setMessage(text)

        setText('')

    }
  return (
    <div className='container mx-auto my-10'>
        <form onSubmit={handleform}>
            <h1 className='text-xl text-black font-bold text-center'>Send us a message</h1>
            <textarea id="message" rows="4" className="block p-2.5 my-5 w-full text-sm text-gray-900 bg-gray-600 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 text-white" placeholder="Write your thoughts here..." onChange={(e) => { setText(e.target.value) }} value={text}></textarea>
            <div className='text-center'>
                <button type='submit' className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                    Send
                </button>
            </div>
        </form>
        <div className='my-5 text-center text-xl bg-emerald-400 p-5 container text-white'>
            <p className='my-3'>Your message</p>
            <div className='border p-5'>
                <h1 className='text-blue-900'> {message && message} </h1>
            </div>
            
        </div>
    </div>
  )
}

export default Content