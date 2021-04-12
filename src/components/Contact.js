import React from 'react';
import { FcPhoneAndroid } from 'react-icons/fc';
import { GoMail } from 'react-icons/go';


const Mailto = ({ email, subject = '', body = '', children }) => {
    let params = subject || body ? '?' : '';
    if (subject) params += `subject=${encodeURIComponent(subject)}`;
    if (body) params += `${subject ? '&' : ''}body=${encodeURIComponent(body)}`;
  
    return <a href={`mailto:${email}${params}`}>{children}</a>;
  };


export default function Contact() {
    
    return (
        <main className="relative bg-white">
            <div className="p-40 grid grid-cols-6 grid-rows-3">
                <div className="col-start-1 col-span-2 row-start-2 row-span-2">
                    <section className="bg-white-100 p-20 mx-32">
                    <Mailto email="ryantartar32@gmail.com"
                            subject=""
                            body="">
                        <GoMail className="h-20 w-20"/>
                        
                    </Mailto>
                      <h3 className="pl-2">Mail me!</h3>
                    </section>
                </div>
            <div className="col-start-5 col-span-2 row-span-2 row-start-2 ">

            <section 
            className="bg-white-100 p-20 mx-32">
                    <h3><FcPhoneAndroid className="h-20 w-20"/>
                    720-999-2361</h3>
            </section>
            </div>
            </div>
            
            </main>
    )
}