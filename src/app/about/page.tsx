import React from 'react';
import Navbar from '../../../components/NavBar';
import { Title } from '../../../components/Title';

function About() {
  return (
    <div>
      <Navbar />
      <main className='font-roboto font-thin'>
        <div className='center flex-col'>
          <Title>About</Title>
          <div className='w-1/2'>
            <img src='/about_me_pic.jpg'></img>
          </div>
          {/* <p className='text-black_olive text-3xl leading-10'>
                    My name is Danny, and I'm a musician, actor and software developer in NYC.
                </p> */}
          <br />
          <p className='text-3xl leading-10 text-black_olive'>
            I was born and grew up in Bilbao, Spain until high school, when I
            moved to northern Virginia. After three years of school musicals,
            jazz band recitals and teenage angst, I moved to Ann Arbor to attend
            the University of Michigan, where I majored in Computer Science. I
            also had the opportunity to pursue my creative interests in college,
            where I sang in the Michigan G-Men A Cappella group and performed in
            two student-run theatre productions.
          </p>
          <br />
          <p className='text-3xl leading-10 text-black_olive'>
            I settled down in New York City after a Zoom college graduation as a
            result of the COVID-19 pandemic. Here, I frequently perform my music
            in venues across the City. I am an Esper Studio Acting alum, a
            program which I started upon my arrival in New York and also have
            over two years of experience in software development in Big Tech!
          </p>
          <br />
          <p className='text-3xl leading-10 text-black_olive'>
            Thanks for sticking around!
          </p>
        </div>
      </main>
    </div>
  );
}

export default About;
