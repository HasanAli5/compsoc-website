import Image from 'next/image'

export default function Home() {
  return (
    <main>
      <div className=' flex flex-col bg-gradient-to-tr from-violet-500 to-teal-400 justify-center'>
        <div className='flex justify-start p-5'><a href='https://surreycompsoc.org/'><img src='/logo_grouped.png' className='h-auto w-44'></img></a></div>
        <div className='bg-stag bg-contain bg-no-repeat bg-center'>
        <div className=' p-24 max-w-4xl container mx-auto'>
          <h2 className='text-center text-white text-4xl font-bold p-2'>Welcome to Surrey CompSoc!</h2>
          <p className='text-center text-white font-bold'>
            We‘re the University of Surrey’s official Computer Science society.<br/>
            We organize and host academic, professional and social events.
          </p>
          </div>
          <div className="w-0 h-0 
            border-l-[50vw] border-l-white
            border-t-[75px] border-transparent
            border-r-[50vw] border-r-white">
          </div>
        </div>
      </div>
      <div className='flex flex-col gap-3 mx-20 my-10 '>
        <h1 className=' max-w-4xl container mx-auto text-2xl font-bold text-gray-700'>🚧 Under Construction!</h1>
        <p className=' max-w-4xl container mx-auto text-md text-gray-700'>Please bear with us whilst we develop our new site!</p>
        <p className=' max-w-4xl container mx-auto text-md text-gray-700'>In the mean time, you can <a className=' underline font-bold text-gray-700' href='https://discord.gg/BypMWcnuY7'>join our Discord server</a> to get the most up-to-date information.</p>
      </div>
      <div className='flex flex-col gap-3 mx-20 my-10 text-gray-700'>
        <h1 className=' max-w-4xl container mx-auto text-2xl font-bold text-gray-700'>About Us</h1>
        <p className='max-w-4xl container mx-auto text-md text-gray-700'>We’re the official Computer Science departmental society for the <a className=' underline font-bold text-gray-700' href='https://surrey.ac.uk/'>University of Surrey</a> and the <a className=' underline font-bold text-gray-700' href='https://ussu.co.uk/'>University of Surrey Student’s Union</a>. We’re also the official Guildford Student chapter of the <a className=' underline font-bold text-gray-700' href='https://www.bcs.org/'>British Computing Society</a>.</p>
        <p className='max-w-4xl container mx-auto text-md text-gray-700'>We run academic and social events on a weekly basis for coders and non-coders alike, as well as bigger events throughout the year. You can learn to code or participate in beginner, intermediate or advanced game jams (game building competitions), hackathons and more.</p>
        <p className='max-w-4xl container mx-auto text-md text-gray-700'>Students from all courses are welcome — computer industries involve people with very different skill sets from very different backgrounds, some of which don’t even involve computer, so if coding isn’t your thing, you can take part in graphic design competitions or sessions, or just hang out and meet people!</p>
      </div>
      <div className='flex justify-center pb-5'>
        <a href="https://my.ussu.co.uk/_layouts/authenticate-ussu.aspx?source=/activity/Pages/Pay.aspx?type=Memberships%26item=1383" target="_blank">
          <button className='flex gap-2 bg-gradient-to-tr from-violet-500 to-teal-400 px-10 py-3 text-white rounded-full transition-all ease-in-out hover:scale-110 hover:shadow-md hover:shadow-violet-400 hover:gap-4 hover:px-8'>Join Us! <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg></button>
        </a>
      </div>
      <footer className='w-full'>
        <div className='py-2 bg-gray-50 px-20'>
          <div className='flex flex-col gap-8 sm:flex-row sm:gap-0 max-w-4xl mx-auto container pb-10 pt-5'>
            <div className='flex flex-col gap-0.5'>
              <h4 className='text-lg font-bold text-gray-700'>CompSoc</h4>
              <h1 className=' text-gray-500'>University of Surrey</h1>
              <a className=' font-bold underline text-gray-700' href='mailto:ussu.computing@surrey.ac.uk'>ussu.computing@surrey.ac.uk</a>
              <div className='h-4'></div>
              <div className='flex gap-2'>
                <a href="https://www.bcs.org/membership-and-registrations/member-communities/student-chapters/" target="_blank"><img className='h-auto w-16' alt="British Computer Society" src="/bcs-logo.png"/></a>
                <a href="https://ussu.co.uk/"  target="_blank"><img className='w-auto h-16' alt="University of Surrey Students' Union" src="/ussu-logo.png"/></a>
              </div>
            </div>
            <div className='flex grow'></div>
            <div className='flex flex-col gap-0.5'>
              <p className=' text-right font-bold text-gray-700 pb-2'>Follow us on social media!</p>
              <div className='flex flex-row-reverse gap-2'>
              <svg className=' hover:fill-blue-400 fill-gray-700' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
              <svg className=' hover:fill-blue-400 fill-gray-700' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M2.149 0l-1.612 4.119v16.836h5.731v3.045h3.224l3.045-3.045h4.657l6.269-6.269v-14.686h-21.314zm19.164 13.612l-3.582 3.582h-5.731l-3.045 3.045v-3.045h-4.836v-15.045h17.194v11.463zm-3.582-7.343v6.262h-2.149v-6.262h2.149zm-5.731 0v6.262h-2.149v-6.262h2.149z" fill-rule="evenodd" clip-rule="evenodd"/></svg>
              <svg className=' hover:fill-blue-400 fill-gray-700' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
              <svg className=' hover:fill-blue-400 fill-gray-700'  xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>
              <svg className=' hover:fill-blue-400 fill-gray-700' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z"/></svg>
              </div>
              <div className=' h-6'></div>
              <p className=' text-right font-bold text-gray-700'>Spotted a typo?</p>
              <p className=' text-right text-gray-700'>We're on <a href='https://github.com/surreycompsoc/website' className=' font-bold underline text-gray-700'>GitHub!</a></p>
            </div>
          </div>
        </div>
        <div className='py-2 bg-gray-100 w-full px-20'>
          <div className='flex flex-row max-w-4xl mx-auto container justify-center'><p className='text-gray-700 font-bold'>Handcrafted with ♥ by the 2021 CompSoc committee! + Migrated to Next.js by Galtzed!</p></div>
        </div>
      </footer>
    </main>
  )
}
