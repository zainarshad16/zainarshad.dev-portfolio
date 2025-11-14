import React from 'react'

const about = () => {
  return (
    <>
      <section className="min-h-screen text-gray-200 py-10 md:py-20 px-5 md:px-20 flex flex-col md:flex-row items-start gap-10">

        {/* Left Text Section */}
        <div className="md:w-full space-y-6">
          <h1 className="text-5xl font-bold text-white mb-4">About Me</h1>

          <p className=" relative text-lg leading-relaxed text-gray-400">
            Hey there 👋! I’m <span className="font-semibold">Zain Arshad</span>, a passionate and dedicated{" "}
            <b>Computer Science student</b> currently pursuing my <b>Bachelor’s in Computer Science (BSCS)</b> at{" "}
            <b>Government College University, Lahore (GCU)</b>. I’m in my <b>6th semester</b>, and each day at GCU brings
            <img
              src="/gcu.jpg"          // your GCU image in public folder
              alt="GCU"
              className="float-right w-48 h-48 md:w-64 md:h-64 ml-1 mt-1 rounded-lg object-cover"
            />
            me closer to mastering the art of technology, problem-solving, and creative thinking.
          </p>

          <p className='text-gray-400'>
            My fascination with computers started at a young age — the moment I realized how a simple piece of code could
            create something useful, interactive, and impactful. Since then, I’ve been continuously exploring,
            experimenting, and evolving as a developer.
          </p>

          <h2 className="text-2xl  font-semibold mt-10">My Journey in Tech</h2>
          <p className='text-gray-400'>
            Throughout my academic journey, I’ve had the opportunity to dive into various domains of computer science —
            from the fundamentals of programming to complex system design and data management. Over time, I discovered a
            deep passion for <b>web development</b> and <b>software quality assurance</b>.
          </p>

          <p className='text-gray-400'>
            I started with the basics — <b>HTML, CSS, and JavaScript</b>, learning how to create visually appealing
            websites. Soon, I moved toward advanced technologies like <b>React, Next.js, Node.js</b>, and{" "}
            <b>MongoDB</b> to bring interactivity, scalability, and performance to my projects.
          </p>

          <p className='text-gray-400'>
            But I didn’t stop at writing code. I wanted to ensure that what I build actually works the way it’s supposed
            to. That’s where I developed a strong interest in <b>Software Quality Assurance (SQA)</b> — learning how to
            test software, find bugs, improve performance, and ensure seamless user experiences.
          </p>

          <h2 className="text-2xl  font-semibold mt-10">What I Love Doing</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-400">
            <li>💻 Full Stack Web Development with React, Next.js, Node.js, and MongoDB</li>
            <li>🧠 Software Quality Assurance — writing, testing, and improving software quality</li>
            <li>🛠️ IT Support & Troubleshooting — solving technical issues and helping users</li>
            <li>🎨 UI/UX Design — crafting simple, elegant, and user-friendly interfaces</li>
          </ul>

          <p className='text-gray-400'>
            I love writing <b>clean, maintainable, and efficient code</b>. Whether I’m debugging a backend issue or
            polishing a front-end component, I make every detail matter.
          </p>

          <h2 className="text-2xl  font-semibold mt-10">My Experience and Projects</h2>
          <p className='text-gray-400'>
            During my studies at GCU, I’ve worked on a variety of projects that strengthened my technical and
            collaborative skills. Some highlights include:
          </p>

          <ul className="list-disc list-inside space-y-2 text-gray-400">
            <li>Creating interactive web applications using React and Next.js</li>
            <li>Developing APIs and backend systems with Node.js and Express</li>
            <li>Designing database architectures using MongoDB</li>
            <li>Implementing testing, data validation, and automation for better reliability</li>
            <li>Building password managers, management systems, and portfolio websites</li>
          </ul>

          <p className='text-gray-400'>
            Each project taught me something new — not only about coding but also about teamwork, time management, and
            problem-solving.
          </p>

          <h2 className="text-2xl text-blue-400 font-semibold mt-10">My Passion for Cloud Computing, SQA & IT Support</h2>

          <p>
            Over time, I’ve developed a strong interest in <b>cloud computing</b>—especially how modern applications scale, deploy,
            and operate reliably on platforms like AWS, Azure, and Google Cloud. I enjoy exploring how cloud services handle
            networking, storage, compute power, and automation. The idea of building systems that are always available, secure,
            and efficient truly inspires me. Cloud technology is shaping the future, and I want to be part of it.
          </p>

          <p>
            Along with cloud, my passion for <b>Software Quality Assurance (SQA)</b> keeps growing day by day. For me, SQA is not
            just about finding bugs; it’s about thinking critically, understanding user needs, and ensuring that every feature
            behaves exactly the way it should. I enjoy working with test cases, analyzing system behavior, and improving the
            overall quality of applications. Quality isn’t a phase—it’s a mindset, and I follow that mindset in every project.
          </p>

          <p>
            Lastly, I have a natural talent for <b>IT support</b>. I genuinely enjoy solving system issues, helping others set up
            their environments, and making computers run smoother. It’s satisfying when a small fix saves someone hours of
            confusion or frustration. Working in IT support teaches me patience, analytical thinking, and a strong understanding
            of how computers and networks function—skills that perfectly complement both cloud computing and SQA.
          </p>


          <h2 className="text-2xl  font-semibold mt-10">Beyond the Code</h2>
          <p className='text-gray-400'>
            When I’m not coding or debugging, I’m usually exploring something new — reading about emerging technologies,
            watching development tutorials, or experimenting with new tools.
          </p>

          <ul className="list-disc list-inside space-y-2 text-gray-400">
            <li>Exploring TypeScript for better scalability</li>
            <li>Learning API integrations and backend security</li>
            <li>Experimenting with automation testing tools like Selenium and Postman</li>
            <li>Diving into AI and cloud technologies</li>
          </ul>

          <p className='text-gray-400'>
            I believe in <b>continuous learning and collaboration</b> — sharing knowledge, mentoring peers, and growing
            together.
          </p>

          <h2 className="text-2xl font-semibold mt-10">My University – GCU Lahore</h2>
          <p className='text-gray-400'>
            Studying at <b>Government College University, Lahore</b> has been a life-changing experience. The university’s
            culture of excellence, creativity, and discipline has shaped me into a confident and determined individual.
          </p>

          <p className='text-gray-400'>
            The inspiring campus, professors’ mentorship, and innovative learning environment constantly encourage me to
            dream bigger and push my limits. GCU is more than a place of study — it’s where I found my purpose and passion
            for computing.
          </p>

          <h2 className="text-2xl  font-semibold mt-10">My Vision</h2>
          <p className='text-gray-400'>
            My ultimate goal is to grow into a <b>versatile Full Stack Developer</b> with strong foundations in{" "}
            <b>Software Quality Assurance</b> and <b>IT Infrastructure</b>. I want to build software that’s not just
            functional, but also reliable, accessible, and impactful.
          </p>

          <p className='text-gray-400'>
            In the long run, I aspire to work on projects that make real-world impact — products that help people,
            simplify their work, and make technology feel effortless.
          </p>

          <p className='text-gray-400'>
            To me, success is not just about coding the perfect algorithm — it’s about understanding people, solving
            problems, and creating something that lasts.
          </p>

          <p className="italic font-medium mt-8 text-gray-400">
            “Technology is not just about logic — it’s about creativity, precision, and impact. Every project I build is a
            reflection of my passion for learning, improving, and contributing to the world through code.”
          </p>

          <p className="font-semibold text-lg mt-4">
            — Zain Arshad, Developer | Learner | Dreamer
          </p>
        </div>

        {/* Right Image Section */}
        {/* <div className="md:w-1/3 flex justify-center mt-10 md:mt-0">
        <img
          src="/gcu.jpg" // <-- Place your GCU picture in /public folder
          alt="Government College University Lahore"
          width={420}
          height={420}
          className="rounded-2xl shadow-2xl hover:scale-105 transition-transform duration-500"
        />
      </div> */}
      </section>

    </>
  )
}

export default about
