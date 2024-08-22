import React from 'react'
const LAUNCH_DATE:string = "Thu, August 22"

export default function privacy () {
  return (
    <div className='py-20 px-5 min-h-screen'>
      <div className='w-full max-w-lg mx-auto text-slate-200'>
        <h1 className='text-4xl pb-5 font-bold text-green-500'>Privacy Policy</h1>
        <p className='pb-14 text-md text-slate-100'>At mrEseosa_ , I am committed to protecting the privacy of my website visitors. This Privacy Policy explains how i collect, use, and protect personal data.</p>


        <div className='space-y-5'>
          <div className='space-y-2'>
          <h2 className='font-bold'>Information I Collect</h2>
          <p className='text-sm'>No personal data is collected on this website, except for cookies used by Next-intl for internalization purposes.</p>
          </div>
<div className='space-y-2'>
<h2>Cookes</h2>
        <p>This website uses cookies solely for Next-intl functionality. No tracking or advertising cookies are used.</p>
        <p>You can disable cookies in your browser settings, but this may affect website functionality.</p>
</div>
<div className='space-y-2'>
<h2>Data Protection</h2>
        <p>You have the right to request access, correction, or deletion of your personal data (although none is collected on this site).</p>
        <p>You have the right to object to processing or request data portability (not applicable on this site).</p>
</div>
<div className='space-y-2'>
<h2>Changes to this Policy</h2>
<p>I may update this Privacy Policy. Changes will be posted on this page.</p>
</div>
<div className='space-y-2'>
<h2>Contact</h2>
        <p>If you have questions or concerns, please contact me at hello@mreseosa.com</p>

</div>
<div className='space-y-2'>
<h2>Effective Date</h2>
<p>{LAUNCH_DATE}</p>
</div>
        </div>
        
        </div>
    </div>
  )
}
