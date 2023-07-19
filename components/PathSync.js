import Image from 'next/image'
import React from 'react'
import Wave from 'react-wavify'
import Link from 'next/link'
import Script from 'next/script'

export default function PathSync() {
  
  return (
    <div className='flex justify-center font-Mont'>
        <div className='flex flex-col px-8 lg:px-48 gap-12'>

            <div className=''>
                <div className='flex lg:flex-row flex-col lg:py-12'>
                    <div className='flex text-center lg:text-start items-center lg:text-[60px] text-[25px] font-CG font-bold pb-4 text-blue-900'>
                        Project Management & Analysis for Dual Organization Collaboration 
                    </div>
                    <div class=" flex align-center lg:justify-center lg:w-screen justify-center max-w-[500px] lg:max-w-[700px]">
                        <video src= "/pathsync/pathSync.mp4"
                            autoplay="{true}" 
                            loop="{true}"
                            className="min-w-sm min-h-sm rounded-lg">
                        </video>
                    </div>
                </div>
                <div className='lg:text-md text-sm pt-4 lg:pt-0'>
                    Personal Project 
                </div>
            </div>
            <div className='flex lg:flex-row flex-col lg:gap-24 gap-4'>
                <div className='flex flex-col gap-4 lg:w-1/2'>
                    <div className='lg:text-4xl text-2xl font-bold font-LS' font>OVERVIEW</div>
                    <div className=''>PathSync is a web application designed to facilitate effective collaboration between individuals and organizations working together on highly iterative and task oriented projects. By integrating project management and analysis functionalities, the program brings transparency to the entire collaborative process.</div>
                </div>
                <div className='flex flex-col gap-2 w-1/2'>
                    <div className='lg:text-4xl text-2xl font-bold font-LS'>ROLE</div>
                    <div className=''> Sofware Development/ Product/ Design</div>
                </div>
            </div>

            <div className='flex flex-col gap-4'>
                <div className='lg:text-4xl text-2xl font-bold font-LS'>INSPIRATION</div>
                <div className='font-bold lg:text-2xl font-LS'>
                            &ldquo;While working on <span className="text-blue-500 underline">long-distance collaborative</span> projects, how can you more effectively <span className="text-blue-500">uphold deadlines</span>, ensure <span className="text-blue-500">consistent communication</span>, and <span className="text-blue-500">identify areas of improvement</span>?&rdquo;
                </div>
                <div className='flex gap-24'>
                    <div className=''>
                        <div className=' '>
                            That was a question that came to mind when I took on a role of managing of 60+ engineering projects at a summer internship, <span className='underline'>each progressing through various phases at different points in time</span>. Because we had to <span className='underline'>communicate with an external enterprise</span> throughout the design process, I observed an inefficiency occuring. How could the distinct challenges that rise within younger businesses following this <span className='underline'>joint design manufacturing model</span> (like my workplace), where external communication is required at every step, be addressed? As the projects accumulated, I decided to focus on brainstorming solutions to the issues of inconsistent communication between the two collaborating companies and the lack of transparency in identifying task bottlenecks and individual accountabilities. 
                        </div>
                    </div>
                    <img src="/pathsync/collab.svg" alt="..." className="hidden lg:flex w-1/3 cursor-pointer rounded align-center"/>                
                </div>
            </div>

            <div className='flex flex-col gap-4'>
                <div className='lg:text-4xl text-2xl font-bold font-LS'>USER ANALYSIS</div>
                <div className='font-bold lg:text-xl'>

                </div>
                <div className=''>

                </div>
            </div>

            <div className='flex flex-col gap-4'>
                <div className='lg:text-4xl text-2xl font-bold font-LS'>COMPETITIVE ANALYSIS</div>
                <div className='flex flex-col gap-4 px-8'>
                    <div className='lg:text-xl'>
                        I established a <span className='text-blue-500'>competitive landscape</span>, focusing on the following top project management tools:
                    </div>
                    <div className='flex justify-between gap-8 lg:mx-48 py-4'>
                        <img src="/pathsync/msp.webp" alt="MS Project For The Web" className='lg:max-w-[100px] max-w-[50px] h-auto'/>
                        <img src="/pathsync/jira.webp" alt="Jira" className='lg:max-w-[225px] max-w-[100px] h-auto'/>
                        <img src="/pathsync/asana1.webp" alt="Asana" className='lg:max-w-[160px] max-w-[80px] h-auto'/>
                    </div>
                    <div className='lg:text-xl'>
                        From there, I gathered a collection of <span className='text-blue-500 font-bold'>Key Features</span>:
                        <ul className='list-disc pl-8 py-4'>
                            <li>Easy Task Management and Editing</li>
                            <li>Resource Management</li>
                            <li>Collaboration and Communication</li>
                            <li>Customization</li>
                            <li>Automation</li>
                            <li>Cloud Service</li>
                        </ul>
                        </div>
                    <div className='lg:text-xl'>
                        And derived two major project goals based on two relevant pain points I noticed:
                        <div className='grid lg:grid-cols-2 py-8 gap-8'>
                            <div className='font-bold opacity-40 hidden lg:flex'>Pain Points</div>
                            <div className='font-bold opacity-40 hidden lg:flex'>Goals</div>
                            <div><span className='font-bold'> Pain Point 1 - Delayed Setup:</span> Traditional project management apps often require significant time for setup, which can be a challenge for small companies and individuals. Additionally, the learning curve associated with these tools adds further time to the process.</div>
                            <div><span className='font-bold'>Goal 1:</span> Design a <span className='font-bold'>simple, user-friendly interface that prioritizes ease of use and intuitive navigation</span>. Allow users of any level of prior knowlege to quickly create projects and incorporate real-time analytics capabilities, empowering users to gain immediate insights into their projects with minimal setup.</div>
                            <div><span className='font-bold '>Pain Point 2 - Limited Time Metrics:</span> Task-oriented project management apps often lack comprehensive metrics for tracking task lead time. This limitation hinders the ability to gain valuable insights that help identify areas that require improvement.</div>
                            <div><span className='font-bold'>Goal 2: </span>Incorporate crucial task values such as Actual Start and Finish dates. <span className='font-bold'>Adopt a streamlined approach that enables users to update lead times in real-time as tasks progress</span>, providing a direct view of how these actions impact the overall project scope. </div>
                        </div>
                    </div>
                </div>
                <div className=''>

                </div>
            </div>

            <div className='flex flex-col gap-4'>
                <div className='lg:text-4xl text-2xl font-bold font-LS'>MAJOR MVP FEATURES AND TRADE OFFS</div>
                <div className='lg:text-xl gap-4 px-8 flex flex-col'>
                    <div className='font-bold text-blue-500'>1. Auto-fill Tasks ( Based on Fixed Values )</div>
                    
                    <div className='flex flex-col lg:grid lg:grid-cols-2 gap-8'>
                        <div><span className='font-bold'>Pro:</span> Increased efficiency for the manufacturing company with repetitive projects</div>
                        <div><span className='font-bold'>Con:</span> Making the product too company/industry-specific limits its usability in other contexts. This can pose challenges if the system needs to be adapted or used by different organizations with varying requirements. Requires consultation that the target users would most likely not want to pay for.</div>
                    </div> 
                    <div><span className='font-bold'>Middle Ground Solutions:</span> Enhancing Efficiency Without Limiting Project Content.
                        <ul className='list-disc pl-8 py-4'>
                            <li>Semi-automation of task creation by setting the &quot;End Date&quot; based on &quot;Start Date&quot; and &quot;Duration&quot; </li>
                            <li>Provide options for users to define their own commonly used task</li>
                            <li>Allowing users to save projects as templates</li>
                        
                        </ul> 
                     </div>
                </div>

                <div className='lg:text-xl gap-4 px-8 flex flex-col'>
                    <div className='font-bold text-blue-500'>2. Exporting to Excel</div>
                    <div className='lex flex-col lg:grid lg:grid-cols-2 gap-8'>
                        <div><span className='font-bold'>Pro:</span> Provides users with the flexibility to access and review their projects in a widely used and familiar format, ensuring ease of use and compatibility.</div>
                        <div><span className='font-bold'>Con:</span> Prioritizing the implementation of this feature might pose challenges due to its complexity, potentially delaying the release of the Minimum Viable Product (MVP).</div>
                    </div> 
                    <div><span className='font-bold'>Middle Ground Solutions:</span> Maintaining Projects Accessibility.
                        <ul className='list-disc pl-8 py-4'>
                            <li>Users can create an account to save their progress and easily revisit tasks, offering a practical alternative to exporting to Excel before the feature can be implemented.</li> 
                        </ul> 
                     </div>
                </div>

                <div className='lg:text-xl gap-4 px-8 flex flex-col'>
                    <div className='font-bold text-blue-500'>2. Customized Calendar</div>
                    <div className='lex flex-col lg:grid lg:grid-cols-2 gap-8'>
                        <div><span className='font-bold'>Pro:</span> Provides users with the flexibility to access and review their projects in a widely used and familiar format, ensuring ease of use and compatibility.</div>
                        <div><span className='font-bold'>Con:</span> Prioritizing the implementation of this feature might pose challenges due to its complexity, potentially delaying the release of the Minimum Viable Product (MVP).</div>
                    </div> 
                    <div><span className='font-bold'>Middle Ground Solutions:</span> Maintaining Projects Accessibility.
                        <ul className='list-disc pl-8 py-4'>
                            <li>Users can create an account to save their progress and easily revisit tasks, offering a practical alternative to exporting to Excel before the feature can be implemented.</li> 
                        </ul> 
                     </div>
                </div>


            </div>

            <div className='flex flex-col gap-4'>
                <div className='lg:text-4xl text-2xl font-bold font-LS'>USER STORY</div>
                <div>**Under Construction**</div>

            </div>

            <div className='flex flex-col gap-4'>
                <div className='lg:text-4xl text-2xl font-bold font-LS'>BUILT WITH</div>
                <div className='lg:text-lg gap-4 flex text-sm mx-24 flex-col lg:flex-row'>
                    <div className='rounded-full px-6 py-1 bg-pink-500 text-white font-semibold justify-center flex'>TailwindCSS</div>
                    <div className='rounded-full px-6 py-1 bg-pink-500 text-white font-semibold justify-center flex'>HTML</div>
                    <div className='rounded-full px-6 py-1 bg-pink-500 text-white font-semibold justify-center flex'>React</div>
                    <div className='rounded-full px-6 py-1 bg-blue-500 text-white font-semibold justify-center flex'>next.js</div>
                    <div className='rounded-full px-6 py-1 bg-blue-500 text-white font-semibold justify-center flex'>Javascript</div>
                    <div className='rounded-full px-6 py-1 bg-green-500 text-white font-semibold justify-center flex'>Prisma</div>
                    <div className='rounded-full px-6 py-1 bg-green-500 text-white font-semibold justify-center flex'>PostgreSQL</div>
                    <div className='rounded-full px-6 py-1 bg-green-500 text-white font-semibold justify-center flex'>Axios</div>
                </div>
            
            </div>

            <div className='flex flex-col gap-4'>
                <div className='lg:text-4xl text-2xl font-bold font-LS'>USABILITY ANALYSIS & FEEDBACK</div>
                <div className='flex gap-12 px-8'>
                    <img src="/pathsync/profile1.svg" alt="..." className="hidden lg:flex max-w-[150px] cursor-pointer rounded align-center"></img>
                    <div>
                        <div className='lg:text-xl font-bold'>User 1: Female, 47 Y/O, Project Manager</div>
                        <ul className='lg:text-xl list-disc pl-8 '>
                            <li>Enjoyed being able add actual start and actual finish dates</li>
                            <li>Should be able to copy a project</li>
                            <li>Slow save time should be addressed</li>
                            <li>Want to be able to create a team</li>
                            <li>Can consider not having as many inputs/making some automatic</li>
                        </ul>
                    </div>
                </div>

                {/* <div className='flex gap-12 px-8'>
                    <img src="/pathsync/profile2.svg" alt="..." className="hidden lg:flex max-w-[150px] cursor-pointer rounded align-center"></img>
                    <div>
                        <div className='lg:text-xl font-bold'>User 2: Female, 21 Y/O, Computer Engineering Technician</div>
                        <ul className='lg:text-xl list-disc pl-8 '>
                            <li></li>
                        </ul>
                    </div>
                </div> */}
            
            </div>
            
            <div className='flex flex-col gap-4 pb-24'>
                <div className='lg:text-4xl text-2xl font-bold font-LS '>NEXT STEPS</div>

                <div className='lg:text-xl font-bold px-8'>Refining Details & Ideas</div>
                <ul className='lg:text-xl list-disc pl-16 px-8'>
                    <li>Implement collaboration features enabling project access for multiple users, fostering more effective teamwork</li>
                    <li>Automate the input of  &ldquo;Actual Start&rdquo; and &ldquo;Actual End&rdquo; dates by utilizing the checkboxes, streamlining the task-creation process and reducing manual data entry</li>
                    <li>Incorporate user-friendly drag and drop and fill handle features to enhance task management efficiency and improve user experience.</li>
                    <li>Brainstorm innovative solutions to streamline date inputs, including exploring task dependencies to optimize project scheduling.</li>
                    <li>Enabled the generation of exportable graphs and charts, providing visual insights and facilitating data-driven decision-making</li>
                    <li>Integrated a visual timeline view, offering users a clear overview of project progress and deadlines</li>
                </ul>

                <div className='lg:text-xl font-bold px-8'>Higher Level Features</div>
                <ul className='lg:text-xl list-disc pl-16 px-8'>
                    <li>Modifiable and customizable calendar, empowering users to generate more accurate and tailored analysis of project timelines and deadlines</li>
                    <li>Leverage AI capabilities to suggest autofill tasks based on a user&apos;s previous activities, improving productivity</li>
                    <li>Implement advanced security measures, including data encryption and user authentication protocols, ensuring the confidentiality and integrity of project data.</li>
                    <li>Develop a mobile application companion, enabling users to access and manage their projects on the go</li>
                    <li>Implement resource management analysis functions</li>

                </ul>
            </div>

        </div>
    </div>
  )
};