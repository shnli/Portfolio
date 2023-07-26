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
                <div className='flex lg:flex-row flex-col justify-center items-center lg:py-12'>
                
                    <div className='flex flex-col justify-start lg:items-start items-center'>

                         <div className='flex text-center lg:text-start items-center lg:text-[60px] text-[25px] font-CG font-bold  text-primary-blue'>
                        Project Management & Analysis for Dual Organization Collaboration 
                        </div>

                            
                        <div className='py-4 flex justify-center'>
                            <a
                                className="text-sm font-semibold opacity-80 text-primary-blue font-Mont text-center px-6 py-2 shadow-sm hover:shadow-none rounded-full border-[1px] border-primary-blue"
                                href="https://pathsync.vercel.app"
                                target="_blank"
                                rel="noreferrer noopener">
                                <div className='flex gap-2 align-center items-center'>
                                <div>
                                Try BETA Ver. 1.1
                                </div>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                                </svg>
                                </div>
                            </a>
                        </div>
                    </div>
                    
                    <div class="flex align-center lg:justify-center lg:w-screen justify-center max-w-[300px] lg:max-w-[700px] py-4">
                        <video src= "/pathsync/pathSync.mp4"
                            autoplay="{true}" 
                            loop="{true}"
                            className="min-w-sm min-h-sm rounded-lg">
                        </video>
                    </div>
                </div>

                <div className='lg:text-md text-sm pt-4 lg:pt-0 font-bold opacity-40'>
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
                            &ldquo;While working on <span className="text-primary-blue underline">cross-functional collaborative</span> projects, how can you more effectively <span className="text-primary-blue">uphold deadlines</span>, ensure <span className="text-primary-blue">consistent communication</span>, and <span className="text-primary-blue">identify areas of improvement</span>?&rdquo;
                </div>
                <div className='flex gap-24'>
                    <div className=''>
                        <div className=''>
                            That was a question that came to mind when I took on a role of managing of 60+ engineering projects at a summer internship, <span className='underline'>each progressing through various phases at different points in time</span>. Because we had to <span className='underline'>communicate with an external enterprise</span> throughout the design process, I observed an inefficiency occuring. How could the distinct challenges that rise within younger businesses following this <span className='underline'>joint design manufacturing model</span> (like my workplace), where external communication is required at every step, be addressed? As the projects accumulated, I decided to focus on brainstorming solutions to the issues of inconsistent communication between the two collaborating companies and the lack of transparency in identifying task bottlenecks and individual accountabilities. 
                        </div>
                    </div>
                    <img src="/pathsync/collab.svg" alt="..." className="hidden lg:flex max-w-[300px] cursor-pointer rounded align-center"/>                
                </div>
            </div>
{/* 
            <div className='flex flex-col gap-4'>
                <div className='lg:text-4xl text-2xl font-bold font-LS'>USER ANALYSIS</div>
                <div className='font-bold lg:text-xl'>

                </div>
                <div className=''>

                </div>
            </div> */}



            <div className='flex flex-col gap-4'>
                <div className='lg:text-4xl text-2xl font-bold font-LS'>USER STORIES</div>
                <div><span className='font-bold text-primary-blue'>Minimum Viable Audiance: </span>Students & Small Company Project Managers who frequently need to execute collaborative tasks.</div>

                <div className='font-bold'>User Story #1</div>
                
                <div className='flex lg:flex-row justify-center items-center flex-col gap-8 '>
                    <div className='flex lg:flex-row flex-col justify-center items-center lg:justify-start border-gray border-[1px] lg:w-1/3 rounded-xl p-4 gap-4 shadow-md'>
                        <img src="/pathsync/jackie.png" className='flex justify-center items-center rounded-full max-w-[130px]'></img>
                        <div className='flex flex-col gap-2 text-xs'>
                            <div className='text-center lg:text-start'><span className='font-bold'>Name: </span> Jackie Wells</div>
                            <div className='text-center lg:text-start'><span className='font-bold'>Age: </span> 20</div>
                            <div className='text-center lg:text-start'><span className='font-bold'>Profession:</span> 3rd Year Design Student at UNT, lead designer of Web Dev Club</div>
                            <div className='text-center lg:text-start'><span className='font-bold'>Goals: </span>                         
                                <ul className='list-disc pl-4'>
                                    <li>Maintain a good relationship with her team members</li>
                                    <li>Keep her organization relevant on campus</li>
                                    <li>Build problem solving skills that she can reference in the future</li>
                                </ul> 
                            </div>
                            <div className='text-center lg:text-start'><span className='font-bold'>Most Relevant Constraint: </span> 
                                Lack of accountability and the difficulty of persuading her peers about problem areas without concrete evidence. 
                            </div>

                        </div>
                        </div>
                    <div className='lg:w-2/3'>
                        <div className=' flex flex-col gap-2 text-xs'>
                            <div className='flex flex-col gap-2'>
                            <span className='font-bold'>Story: </span>Jackie is a design student about to begin her Junior year at the University of North Texas. Recently, she was promoted to an executive position in a web development club where she leads an initiative building websites for student organizations. Specifically, she collaborates closely with the technology team to ensure seamless translation of design layouts into functional websites. Currently, her priority is redesigning and restructuring UNT&apos;s hackathon website for an upcoming event in just two months.
                            <div>
                            With the urgency of the project, Jackie is determined to maintain smooth communication between the design and development teams and keep everyone on schedule. However, she faces a challenge as some team members have a history of missing deadlines, and fears sounding accusitory to address the issues without solid evidence to back her concerns.
                            </div>
                            To overcome this, Jackie starts using Pathsync for the new hackathon project. She spends half of a meeting working with the technology executive to meticulously plan out each task, setting lead times and deadlines, and assigns responsibilities to specific team members. As both teams iterate on the website, Jackie easily edits tasks and add remarks in Pathsync during the ongoing communication process.
                            <div>
                            Thanks to her consistent efforts, the website is completed on time. Jackie continues to use Pathsync for the organization&apos;s subsequent website development projects. By the end of the semester, she can identify team members and areas that consistently face delays and refer back to her remarks to understand the underlying reasons.
                            </div>

                            <div>
                            One significant observation she makes is that a member of the development team is overloaded with work, leading to frequent extension requests for tasks. Armed with this understanding, she empathizes with the team member&apos;s situation and initiates a conversation. She collaborates with him to redistribute some tasks to another student who has more availability, ensuring a fair workload distribution.
                            </div>

                            <div>
                            Through her approach, Jackie successfully completes the website projects and fosters a collaborative environment within the teams. Her ability to identify issues and address them with empathy contributes to the overall success of the organization&apos;s web development endeavors. 
                            </div>

                            </div>
                        </div>
                    </div>
                </div>

                <div className='font-bold'>User Story #2</div>

                <div className='flex lg:flex-row justify-center items-center flex-col gap-8 '>
                    <div className='flex lg:flex-row flex-col justify-center items-center lg:justify-start border-gray border-[1px] lg:w-1/3 rounded-xl p-4 gap-4 shadow-md'>
                        <img src="/pathsync/sam.jpg" className='flex justify-center items-center rounded-full max-w-[130px]'></img>
                        <div className='flex flex-col gap-2 text-xs'>
                            <div className='text-center lg:text-start'><span className='font-bold'>Name: </span> Sam Diaz</div>
                            <div className='text-center lg:text-start'><span className='font-bold'>Age: </span> 36</div>
                            <div className='text-center lg:text-start'><span className='font-bold'>Profession:</span> Project Manager at a small Electronics Company based in Texas.</div>
                            <div className='text-center lg:text-start'><span className='font-bold'>Goals: </span>                         
                                <ul className='list-disc pl-4'>
                                    <li>Organize his project trackers.</li>
                                    <li>Allocate time to process pending order forms.</li>
                                    <li>Gather relevant data to support his claims during presentations.</li>
                                </ul> 
                            </div>
                            <div className='text-center lg:text-start'><span className='font-bold'>Most Relevant Constraint: </span> The constant need to move forward quickly and the lack of time make it challenging to divert attention from the ongoing projects.</div>

                        </div>
                    </div>
                    <div className='lg:w-2/3'>
                        <div className=' flex flex-col gap-2 text-xs'>
                            <div>
                            <span className='font-bold'>Story: </span>Sam, a new project manager, has joined &ldquo;Company A&rdquo;, a small and highly technical electronics company based in Texas. The company collaborates with a manufacturer named &ldquo;Company B&rdquo; in California, not just for part creation but also for design. Being a relatively new company, they operate in a fast-paced and busy environment and haven&apos;t had the opportunity to invest in high-level project management tools, such as Jira, due to their steep learning curves. Consequently, Sam and the project manager at Company B rely on Excel sheets to organize updates for each part, sharing and manually updating the sheet.
                            </div> 
                            <div>
                            One day, Sam&apos;s boss points out that the project deadlines haven&apos;t been met effectively and asks him to identify bottlenecks in various projects. Seeking a solution that avoids the need to spend hours sorting through large amounts of data, Sam comes across Pathsync, an intuitive and free online platform that requires minimal setup. With Pathsync, Sam can immediately log tasks for both Company A and Company B, clearly identifying roles and responsibilities for each project. For every task, he sets goal deadlines and records actual completion dates, efficiently managing project timelines. 
                            </div>
                            <div>
                            Sam spends 20 minutes inputting tasks for a new project, setting expected start and end dates for each task. Over the next month, he takes only 2 minutes per project per day to mark off completed tasks and record initiation and completion dates while receiving real-time updates. As he updates the projects, he can monitor delays, slippage, and percentage completion in real time, enabling him to focus on urgent tasks.
                            </div>
                            <div>
                            At the end of the month, Sam presents the analytics page during the team meeting. The platform easily highlights design tasks with significant deviations from expected timeframes. Not only does Sam identify which company is responsible for the delay, but he can also pinpoint the specific engineer involved. With this information, Sam initiates conversations to understand the reasons behind the bottlenecks effectively. This approach empowers his company to take targeted actions to improve deadline adherence successfully.
                            </div>
                        </div>
                    </div>
                </div>

            </div>





            <div className='flex flex-col gap-4'>
                <div className='lg:text-4xl text-2xl font-bold font-LS'>COMPETITIVE ANALYSIS</div>
                <div className='flex flex-col gap-4'>
                    <div className=''>
                        I established a <span className='text-primary-blue'>competitive landscape</span>, focusing on the following top project management tools:
                    </div>
                    <div className='flex justify-between gap-8 lg:mx-48 py-4'>
                        <img src="/pathsync/msp.webp" alt="MS Project For The Web" className='lg:max-w-[100px] max-w-[50px] h-auto'/>
                        <img src="/pathsync/jira.webp" alt="Jira" className='lg:max-w-[225px] max-w-[100px] h-auto'/>
                        <img src="/pathsync/asana1.webp" alt="Asana" className='lg:max-w-[160px] max-w-[80px] h-auto'/>
                    </div>
                    <div className=''>
                        From there, I gathered a collection of <span className='text-primary-blue font-bold'>Key Features</span>:
                        <ul className='list-disc pl-8 py-4'>
                            <li>Easy Task Management and Editing</li>
                            <li>Resource Management</li>
                            <li>Collaboration and Communication</li>
                            <li>Customization</li>
                            <li>Automation</li>
                            <li>Cloud Service</li>
                        </ul>
                        </div>
                    <div className=''>
                        <div className=''>
                        And derived two major project goals based on two relevant pain points I noticed:
                        </div>
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
                {/* <div className=''>

                </div> */}
            </div>


            <div className='flex flex-col gap-4'>
                <div className='lg:text-4xl text-2xl font-bold font-LS'>MAJOR MVP FEATURES AND TRADE OFFS</div>
                <div className=' gap-4 flex flex-col'>
                    <div className='font-bold text-primary-blue'>1. Auto-fill Tasks (Based on Fixed Values)</div>
                    
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

                <div className='gap-4 flex flex-col'>
                    <div className='font-bold text-primary-blue'>2. Exporting to Excel</div>
                    <div className='flex flex-col lg:grid lg:grid-cols-2 gap-8'>
                        <div><span className='font-bold'>Pro:</span> Provides users with the flexibility to access and review their projects in a widely used and familiar format, ensuring ease of use and compatibility.</div>
                        <div><span className='font-bold'>Con:</span> Prioritizing the implementation of this feature might pose challenges due to its complexity, potentially delaying the release of the Minimum Viable Product (MVP).</div>
                    </div> 
                    <div><span className='font-bold'>Middle Ground Solutions:</span> Maintaining Projects Accessibility.
                        <ul className='list-disc pl-8 py-4'>
                            <li>Users can create an account to save their progress and easily revisit tasks, offering a practical alternative to exporting to Excel before the feature can be implemented.</li> 
                        </ul> 
                     </div>
                </div>

                {/* <div className='lg:text-xl gap-4  flex flex-col'>
                    <div className='font-bold text-primary-blue'>3. Customized Calendar</div>
                    <div className='lex flex-col lg:grid lg:grid-cols-2 gap-8'>
                        <div><span className='font-bold'>Pro:</span> Provides users the ability to </div>
                        <div><span className='font-bold'>Con:</span> Difficulty dealing with transparency, as data may not be as accurate </div>
                    </div> 
                    <div><span className='font-bold'>Middle Ground Solutions:</span> Maintaining Projects Accessibility.
                        <ul className='list-disc pl-8 py-4'>
                            <li>Users can create an account to save their progress and easily revisit tasks, offering a practical alternative to exporting to Excel before the feature can be implemented.</li> 
                        </ul> 
                     </div>
                </div> */}


            </div>

            <div className='flex flex-col gap-4'>
                <div className='lg:text-4xl text-2xl font-bold font-LS'>BUILT WITH</div>
                <div className='lg:text-lg gap-4 flex text-sm mx-24 flex-col lg:flex-row'>
                    <div className='rounded-full px-6 py-1 bg-[#d1439b] text-white font-semibold justify-center flex'>TailwindCSS</div>
                    <div className='rounded-full px-6 py-1 bg-[#d1439b] text-white font-semibold justify-center flex'>HTML</div>
                    <div className='rounded-full px-6 py-1 bg-[#d1439b] text-white font-semibold justify-center flex'>React</div>
                    <div className='rounded-full px-6 py-1 bg-primary-blue text-white font-semibold justify-center flex'>next.js</div>
                    <div className='rounded-full px-6 py-1 bg-primary-blue text-white font-semibold justify-center flex'>Javascript</div>
                    <div className='rounded-full px-6 py-1 bg-[#428f50] text-white font-semibold justify-center flex'>Prisma</div>
                    <div className='rounded-full px-6 py-1 bg-[#428f50] text-white font-semibold justify-center flex'>PostgreSQL</div>
                    <div className='rounded-full px-6 py-1 bg-[#428f50] text-white font-semibold justify-center flex'>Axios</div>
                </div>
            
            </div>

            <div className='flex flex-col gap-4'>
                <div className='lg:text-4xl text-2xl font-bold font-LS'>USABILITY ANALYSIS & FEEDBACK</div>
                {/* <div className='flex gap-12'>
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
                </div> */}

                {/* <div className='flex gap-12 px-8'>
                    <img src="/pathsync/profile2.svg" alt="..." className="hidden lg:flex max-w-[150px] cursor-pointer rounded align-center"></img>
                    <div>
                        <div className='lg:text-xl font-bold'>User 2: Female, 21 Y/O, Computer Engineering Technician</div>
                        <ul className='lg:text-xl list-disc pl-8 '>
                            <li></li>
                        </ul>
                    </div>
                </div> */}
                <div className=''>After the first launch on July 19th, 2023, I created an anonymous user feedback survey (click <a href="https://docs.google.com/forms/d/1A_UbHPq3itH3Xrla5sdThNu1q-LXKg2Sr-6K0bc-wc4/edit" className='text-primary-blue hover:underline'>here</a> to view) and categorized the responses into 2 categories: </div>
                <div className=' font-bold text-primary-blue'>Refining Details & Ideas (Short Term)</div>
                <ul className=' list-disc pl-8'>
                    <li>Automate the input of  &ldquo;Actual Start&rdquo; and &ldquo;Actual End&rdquo; dates by utilizing the checkboxes, streamlining the task-creation process and reducing manual data entry</li>
                    <li>Incorporate user-friendly drag and drop and fill handle features to enhance task management efficiency and improve user experience.</li>
                    <li>Brainstorm innovative solutions to streamline date inputs, including exploring task dependencies to optimize project scheduling.</li>
                    <li>Enabled the generation of exportable graphs and charts, providing visual insights and facilitating data-driven decision-making</li>
                    <li>Integrated a visual timeline view, offering users a clear overview of project progress and deadlines</li>
                </ul>

                <div className='font-bold text-primary-blue'>Higher Level Features (Long Term)</div>
                <ul className='list-disc pl-8'>
                    <li>Implement collaboration features enabling project access for multiple users, fostering more effective teamwork</li>
                    <li>Modifiable and customizable calendar, empowering users to generate more accurate and tailored analysis of project timelines and deadlines</li>
                    <li>Leverage AI capabilities to suggest autofill tasks based on a user&apos;s previous activities, improving productivity</li>
                    <li>Implement advanced security measures, including data encryption and user authentication protocols, ensuring the confidentiality and integrity of project data.</li>
                    <li>Develop a mobile application companion, enabling users to access and manage their projects on the go</li>
                    <li>Implement resource management analysis functions</li>

                </ul>
            </div>
            <div className='flex flex-col gap-4'>
                <div className='lg:text-4xl text-2xl font-bold font-LS'>UPDATES</div>
                    <div className='pb-16 '>
                        <div className='flex flex-col border-[1px] shadow-md border-gray rounded-lg text-primary-blue lg:p-8 p-4 gap-4'>
                            <div className='flex lg:gap-8 lg:items-center items-start gap-4'>

                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
                                <path fill-rule="evenodd" d="M12 6.75a5.25 5.25 0 016.775-5.025.75.75 0 01.313 1.248l-3.32 3.319c.063.475.276.934.641 1.299.365.365.824.578 1.3.64l3.318-3.319a.75.75 0 011.248.313 5.25 5.25 0 01-5.472 6.756c-1.018-.086-1.87.1-2.309.634L7.344 21.3A3.298 3.298 0 112.7 16.657l8.684-7.151c.533-.44.72-1.291.634-2.309A5.342 5.342 0 0112 6.75zM4.117 19.125a.75.75 0 01.75-.75h.008a.75.75 0 01.75.75v.008a.75.75 0 01-.75.75h-.008a.75.75 0 01-.75-.75v-.008z" clip-rule="evenodd" />
                                <path d="M10.076 8.64l-2.201-2.2V4.874a.75.75 0 00-.364-.643l-3.75-2.25a.75.75 0 00-.916.113l-.75.75a.75.75 0 00-.113.916l2.25 3.75a.75.75 0 00.643.364h1.564l2.062 2.062 1.575-1.297z" />
                                <path fill-rule="evenodd" d="M12.556 17.329l4.183 4.182a3.375 3.375 0 004.773-4.773l-3.306-3.305a6.803 6.803 0 01-1.53.043c-.394-.034-.682-.006-.867.042a.589.589 0 00-.167.063l-3.086 3.748zm3.414-1.36a.75.75 0 011.06 0l1.875 1.876a.75.75 0 11-1.06 1.06L15.97 17.03a.75.75 0 010-1.06z" clip-rule="evenodd" />
                                </svg>

                                <div className='lg:text-xl  font-semibold '>Ver. 1.1 New Features</div>
                            </div>
                            <div className='flex lg:gap-8  items-start'>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="hidden lg:flex text-[#ffc812] w-6 h-6">
                                <path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clip-rule="evenodd" />
                                </svg>
                                <div className=''><span className='font-bold '>Info Pop Ups: </span>Provide transparent instructions on program usage, including limitations, to minimize user confusion and offer clarity on how values are calculated.</div>
                            </div>
                            <div className='flex lg:gap-8  items-start'>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="hidden lg:flex text-[#ffc812] w-6 h-6">
                                <path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clip-rule="evenodd" />
                                </svg>
                                <div className=''><span className='font-bold'>Analytics</span> Presentation Mode: Ability to to hover over and click on specific tasks for easy reference during presentations.</div>
                            </div>
                            <div className='flex lg:gap-8  items-start'>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="hidden lg:flex text-[#ffc812] w-6 h-6">
                                <path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clip-rule="evenodd" />
                                </svg>
                                <div className=''><span className='font-bold'>Navigation Improvement: </span>The introduction of new navigation buttons reduces the number of clicks required to access a related page from a project.</div>
                            </div>
                            <div className='flex lg:gap-8  items-start'>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="hidden lg:flex text-[#ffc812] w-6 h-6">
                                <path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clip-rule="evenodd" />
                                </svg>
                                <div className=''><span className='font-bold'>Logo Update</span></div>
                            </div>
                    

                        </div>
                    </div>
            </div>

        </div>
    </div>
  )
};