import Image from 'next/image'
import React from 'react'
import Wave from 'react-wavify'
import Link from 'next/link'
import Script from 'next/script'

export default function PlantPeople() {
  
  return (
    <div className='flex justify-center font-Mont'>
        <div className='flex flex-col px-8 lg:px-48 gap-12'>

            <div className=''>
                <div className='flex lg:flex-row flex-col justify-center items-center lg:py-12 gap-12 lg:gap-24'>
                
                    <div className='flex flex-col justify-start lg:items-start items-center'>

                         <div className='flex text-center lg:text-start items-center lg:text-[60px] text-[25px] font-CG font-bold  text-green'>
                            Bridging the Gap Between Nurseries & Plant Owners
                        </div>

                            
                        <div className='pt-4 flex justify-center'>
                            <a
                            className="text-sm font-semibold opacity-80 text-green font-Mont text-center px-6 py-2 shadow-sm hover:shadow-none rounded-full border-[1px] border-green"
                            href="https://plantpeople.vercel.app"
                            target="_blank"
                            rel="noreferrer noopener">
                            <div className='flex gap-2 align-center items-center'>
                                <div>
                                Interface DEMO
                                </div>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 ">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                                </svg>
                            </div>
                            </a>
                        </div>
           
                    </div>
                    
                    <div class="flex align-center lg:justify-center justify-center max-w-[300px] lg:max-w-[600px] py-4">
                        <img src="/plantpeople/plantpeople.png" cl></img>
                        {/* <video src= "/pathsync/pathSync.mp4"
                            autoplay="{true}" 
                            loop="{true}"
                            className="min-w-sm min-h-sm rounded-lg">
                        </video> */}
                    </div>
                </div>

                <div className='lg:text-md text-sm pt-4 lg:pt-0 font-bold opacity-40'>
                    Startup
                </div>
            </div>
            <div className='flex lg:flex-row flex-col lg:gap-24 gap-4'>
                <div className='flex flex-col gap-4 lg:w-1/2'>
                    <div className='lg:text-4xl text-2xl font-bold font-LS' font>OVERVIEW</div>
                    <div className=''>Plant People is a communication application designed to promote user retention for independent nurseries and offer trusted assistance to plant owners seeking expert advice. By facilitating continued communication between plant enthusiasts and the knowledgeable staff at their respective nurseries, an invaluable relationship is formed, benefiting the plant community as a whole.</div>
                </div>
                <div className='flex flex-col gap-2 w-1/2'>
                    <div className='lg:text-4xl text-2xl font-bold font-LS'>ROLE</div>
                    <div className=''> Sofware Development/ Product/ Design</div>
                </div>
            </div>

            <div className='flex flex-col gap-4'>
                <div className='lg:text-4xl text-2xl font-bold font-LS'>INSPIRATION</div>
                <div className='font-bold lg:text-2xl font-LS'>
                    &ldquo;How do you help people <span className="text-green underline">keep their plants alive </span> ?&rdquo;
                </div>
                <div className='flex gap-24'>
                    <div className='flex flex-col gap-2'>
                        <div>
                        This is the simple age-old question that serves as the backbone of our project. Throwback to the COVID lockdown in 2020 when plantkeeping became a major trend, attracting a slew of curious individuals seeking new experiences while confined at home. This development meant increased business for nurseries everywhere, but like any trend, one had to wonder if it is destined to fade as quickly as it emerged.
                        </div>

                        <div>
                        Novice plantkeepers face a particular challenge—their interest in the hobby can be rather volatile. As the frequency of plant deaths and failures increases, so does the likelihood of them giving up on plantkeeping altogether. An NBC article described plantkeeping as a mix of being &ldquo;expensive, time-consuming, demoralizing, fulfilling, and uniquely compulsive&rdquo; highlighting the unique characteristics of the activity that drive this correlation.
                        </div>
                        <div>
                        How could we help combat this issue, especially for begineer plantkeepers? It occured to us that there&apos;s a resource that has often been overlooked: the nurseries where plants originate. This sparked the idea of providing a concrete platform for nurseries to assist their clients, even after the purchase of a plant. By doing so, people are more successful and subsequently encouraged to return to the nursery, resulting in both positive business impacts and nurturing a long-lasting love for the hobby.
                        </div>
                    </div>
                    <img src="/plantpeople/phone.svg" alt="..." className="hidden lg:flex max-w-[300px] cursor-pointer rounded align-center"/>                
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
                <div className='lg:text-4xl text-2xl font-bold font-LS'>INITIAL USER ANALYSIS</div>
                <div className=' gap-4 flex flex-col'>
                    <div className='font-bold text-green'>User Segmentation</div>
                    <div>First, potential users were determined to fall into the following categories and subcategories:</div>
                    <div className = " lg:pl-8 flex flex-col lg:grid lg:grid-cols-2 gap-8">
                        <div>
                            <div className='font-bold'>
                            1. Nursery Businesses
                            </div>
                            <ul className='list-disc pl-8 '>
                                <li>Wholesale</li>
                                <li>Retail</li>
                                <li>Mail-Order</li>
                                <li>Independent</li>
                                <li>Chain</li>
                                <li>Indoor/Outdoor</li>
                                <li>Common/Exotic</li>
                                
                            </ul> 
                        </div>
                        <div>
                            <div className='font-bold'>
                            2. Plant Owners
                            </div>
                            <ul className='list-disc pl-8 '>
                                <li>Novice</li>
                                <li>Expert</li>
                                <li>Hobbyist</li>
                                <li>Decoration Seekers</li>
                                <li>Serious Enthusiasts</li>
                            </ul> 
                        </div>
                    </div>
                    
                </div>

                <div className='gap-4 flex flex-col'>
                    <div className='font-bold text-green'>Interview Analysis</div>
                    <div className=''>Then based on various interview with potential users, the following information was deduced and categorized.</div>

                    <div className='flex gap-2 justify-start items-center'>
                        <img src="/plantpeople/plant.svg" className='w-[30px]'></img>
                        <div className='italic'>From Manager of &ldquo;X&rdquo; Nursery Specializing in Succulents based in Austin, TX</div>
                    </div>

                    <div className=' lg:pl-8 flex flex-col gap-2'>
                        <div><span className='font-bold'>Customer Base:</span> 50% newcomer, 25% wholesale, 25% experts</div>
                        <div><span className='font-bold'>Major Challenges & Pain Points</span>
                            <ul className='list-disc pl-8 py-2'>
                                <li><span className='font-bold'>Costly Delivery Charges: </span>High delivery prices pose a significant challenge for customers and the business.</li> 
                                <li><span className='font-bold'>Lack of Customer Awareness: </span>Customers face issues due to overwatering succulents and inadequate environmental knowledge.</li> 
                                <li><span className='font-bold'>Unpredictable Weather Impacts: </span>The unreliability of weather conditions makes plant maintenance challenging.</li> 
                                <li><span className='font-bold'>Cumbersome Watering Process: </span>The inconvenience of dragging around a hose makes watering plants a difficult.</li> 
                                <li><span className='font-bold'>Scarce Expertise in Greenhouse Repairs: </span>Shortage of engineers with the expertise to address greenhouse issues effectively.</li> 
                            </ul> 
                        </div>
                    </div>

                    <div className='flex gap-2 justify-start items-center'>
                        <img src="/plantpeople/plant.svg" className='w-[30px]'></img>
                        <div className='italic'>From The Farm Patch, an Open-Air Produce Market and Garden Center in Bryan/College Station, Texas</div>
                    </div>

                    <div className=' lg:pl-8 flex flex-col gap-2'>
                        <div><span className='font-bold'>Plant Sourcing and Stock Management:</span> 
                            <ul className='list-disc pl-8 py-2'>
                                <li>4-10 trucks per week of plants sourced from multiple growers across Texas</li> 
                                <li>Stock orders placed on Mondays, with nursery checks to identify missing items and assess availability</li> 
                                <li>Growers provide availability listings for planning stock procurement</li>
                            </ul>                        
                        </div>
                        <div><span className='font-bold'>Popular Plants and Sales:</span> 
                            <ul className='list-disc pl-8 py-2'>
                                <li>Colorful flowers are most popular for sales</li> 
                                <li>Houseplants like Pothos sell quickly</li> 
                                <li>Snake plants, Monsteras, Rattlesnake Calatheas, and Succulents are also popular choices</li>
                                <li>Succulents are the fastest-growing area in sales</li>
                            </ul>                        
                        </div>
                        <div><span className='font-bold'>Customer Interactions and Plant Care:</span> 
                        <div className='lg:flex gap-12'>
                            <ul className='list-disc pl-8 py-2'>
                                <li>
                                    Customers frequently bring pictures and samples for assessment.
                                </li>
                                <li>
                                    Majority of customers do not fertilize their plants.
                                </li>
                                <li>
                                    Mealybugs are the most common pest issue for plants.
                                </li>
                                <li>
                                    Spider mites become a problem in summer, and Aphids occasionally.
                                </li>
                                <li>
                                    Higher temperatures hinder plant growth; survival becomes the priority in extreme heat (105-110 degrees Fahrenheit).
                                </li>
                                <li>
                                    Plants sold at big box stores might not be suitable for the local water conditions, leading to failure.
                                </li>
                                </ul>
                                <ul className='list-disc pl-8 py-2'>
                                <li>
                                    Many customers are unaware of their location&apos;s water pH and minerality, leading to potential plant care issues.
                                </li>
                                <li>
                                    Turnover rate is 2-3 weeks at Farm Patch (presumably for certain plant varieties).
                                </li>
                                <li>
                                    Pepperomias struggle to survive with the water quality in College Station.
                                </li>
                                <li>
                                    No designers or landscaping companies are customers.
                                </li>
                            </ul>
                        </div>
                        </div>
                    </div>

                    <div className='flex gap-2 justify-start items-center'>
                        <img src="/plantpeople/sun.svg" className='w-[30px]'></img>
                        <div className='italic'>From Horitculture Specialist at The Farm Patch</div>
                    </div>
                    <div className=' lg:pl-8 flex flex-col gap-2'>
                        <div><span className='font-bold'>Background:</span> Studied horticulture at TAMU (Texas A&M University), in charge of nursery stock @ The Farm Patch.</div>

                        <div className='flex flex-col gap-2'>
                            <div className='font-bold'>Personal Experience</div>
                                <ul className='list-disc pl-8'>
                                    <li>
                                    When she used to keep lots of plants, she would be exhausted after work and not want to look after any more of her own plants.
                                    </li>
                                    <li>
                                    Due to low light conditions in her home, she currently keeps only four plants: a snake plant and an African violet.
                                    </li>
                                </ul>
                        </div>
                    </div>

                    <div className='flex gap-2 justify-start items-center'>
                        <img src="/plantpeople/sun.svg" className='w-[30px]'></img>
                        <div className='italic'>From Plant Enthusiast, Customer @ The Great Outdoors</div>
                    </div>
                    <div className=' lg:pl-8 flex flex-col gap-2'>
                        <div><span className='font-bold'>Experience:</span> Has been keeping plants for 3 years.</div>
                        <div><span className='font-bold'>Plants:</span> Pothos and Snake Plants (4)</div>

                        <div className='flex flex-col gap-4'>
                            <div className='font-bold'>Subject Overview</div>
                            <div>
                                 Plant Enthusiast demonstrates a strong interest in plants but faces a few challenges and has specific preferences when it comes to plant care. Key points in her habits:
                            </div>
                            <div className='lg:flex gap-12'>
                                <div className='flex flex-col gap-4'>
                                    <div>
                                    <span className='font-bold'>Communication with Mom:</span> Plant Enthusiast relies on her mom as a primary source of guidance when issues arise with her plants. She values external support and assistance in troubleshooting problems.
                                    </div>
                                    <div>
                                    <span className='font-bold'>Reliance on Google Search:</span> Apart from seeking outside advice, Plant Enthusiast also turns to Google search for plant-related information and solutions to plant care issues. This shows her willingness to learn and improve her plant care skills independently.
                                    </div>
                                    <div>
                                    <span className='font-bold'>Source of Plants:</span> Plant Enthusiast acquires most of her plants from the Flea Market. However, there seem to be some concerns or challenges associated with getting plants from this source. Further investigation might be needed to understand these issues better.
                                    </div>
                                    <div>
                                    <span className='font-bold'>Plant Placement:</span> The majority of Plant Enthusiast&apos;s plants are located in her room. Understanding her room&apos;s environment and light conditions could be important in providing tailored plant care advice.
                                    </div>
                                </div>
                                <div className='flex flex-col gap-4'>
                                    <div>
                                    <span className='font-bold'>Aesthetic Preference:</span> Plant Enthusiast values the beauty of plants, any plant care recommendations should consider the aesthetic aspect of her collection.
                                    </div>
                                    <div>
                                    <span className='font-bold'>Growth and Improvement:</span> Plant Enthusiast believes she is getting better at plant care over time and enjoys observing her plants&apos; progress. Encouraging and acknowledging her efforts to improve could be beneficial.
                                    </div>
                                    <div>
                                    <span className='font-bold'>Resistance to Alternative Solutions:</span> Plant Enthusiast admits to being somewhat lazy and prefers contacting her mom when issues arise, rather than seeking alternative solutions on her own.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='font-bold text-green'>
                    Visual Information Sorting
                </div>
                <div className=''>
                    Using sticky notes, major mentioned issues faces by the four interviewees were categorized.
                </div>
                <div className='pl-8 grid lg:grid-cols-2 grid-cols-1 gap-8'>
                    <div className="flex flex-col gap-4">
                        <div className=' font-bold'>
                            Relating to Knowlege
                        </div>
                        <img src="/plantpeople/knowlege.png" className='max-w-[100px] lg:max-w-md'></img>
                    </div>
                    <div className="flex flex-col gap-4">
                        <div className=' font-bold'>
                            Relating to Logistics
                        </div>
                        <img src="/plantpeople/logistics.png" className='max-w-[100px] lg:max-w-md'></img>
                    </div>
                    <div className="flex flex-col gap-4">
                        <div className=' font-bold'>
                            Relating to Resources
                        </div>
                        <img src="/plantpeople/resources.png" className='max-w-[100px] lg:max-w-md'></img>
                    </div>
                    <div className="flex flex-col gap-4">
                        <div className=' font-bold'>
                            Relating to Habits & Lifestyle
                        </div>
                        <img src="/plantpeople/habit.png" className='max-w-[100px] lg:max-w-md'></img>
                    </div>
                </div>

                {/* <div className='lg:text-xl gap-4  flex flex-col'>
                    <div className='font-bold text-green'>3. Customized Calendar</div>
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
                <div className='lg:text-4xl text-2xl font-bold font-LS'>COMPETITIVE ANALYSIS</div>
                <div className='flex flex-col gap-4'>
                    <div className=''>
                        To analyze the existing solutions and resources available for plant owners, the <span className='text-green'>competitive landscape</span> was sorted into the following categories: 
                    </div>
                    <div className='italic'>
                        Plant Care Apps
                    </div>
                    <div className=' grid lg:grid-cols-6 grid-cols-3 lg:gap-24 gap-4 px-24 lg:px-4 py-4'>
                        <div>
                            <img src="/plantpeople/planta.png" alt="Planta" className=' h-auto'/>
                            <div className='flex justify-center items-center text-xs opacity-50 font-bold pt-2 hidden lg:flex'>Planta</div>
                        </div>
                        <div>
                            <img src="/plantpeople/plantnote.png" alt="Jira" className=' h-auto'/>
                            <div className='flex justify-center items-center text-xs opacity-50 font-bold pt-2 hidden lg:flex'>PlantNote</div>
                        </div>
                        <div>
                            <img src="/plantpeople/blossom.png" alt="Asana" className=' h-auto'/>
                            <div className='flex justify-center items-center text-xs opacity-50 font-bold pt-2 hidden lg:flex'>Blossom</div>
                        </div>
                        <div>
                            <img src="/plantpeople/picturethis.png" alt="Asana" className=' h-auto'/>
                            <div className='flex justify-center items-center text-xs opacity-50 font-bold pt-2 hidden lg:flex'>PictureThis</div>
                        </div>
                        <div>
                            <img src="/plantpeople/vera.png" alt="Asana" className=' h-auto'/>
                            <div className='flex justify-center items-center text-xs opacity-50 font-bold pt-2 hidden lg:flex'>Vera</div>
                        </div>
                        <div>
                            <img src="/plantpeople/plantlightmeter.jpeg" alt="Asana" className=' h-auto'/>
                            <div className='flex justify-center items-center text-center text-xs opacity-50 font-bold pt-2 hidden lg:flex'>Plant Light Meter</div>
                        </div>

                    </div>

                    <div className='italic'>
                        Plant Forums & Communities
                    </div>
                    <div className=' grid lg:grid-cols-6 grid-cols-4 lg:gap-20 gap-4 px-24 lg:px-4 py-4'>
                        <div>
                            <img src="/plantpeople/reddit.png" alt="Asana" className=' h-auto'/>
                            <div className='flex justify-center items-center text-center text-xs opacity-50 font-bold pt-2 hidden lg:flex'>r/Housplants (Reddit)</div>
                        </div>
                        <div className='flex flex-col justify-bottom'>
                            <img src="/plantpeople/gardenweb.jpeg" alt="Asana" className=' h-auto'/>
                            <div className='flex justify-center items-center text-center text-xs opacity-50 font-bold pt-2 hidden lg:flex'>GardenWeb Forums</div>
                        </div>
                        <div className='flex flex-col justify-bottom'>
                            <img src="/plantpeople/twitter.png" alt="Asana" className=' h-auto'/>
                            <div className='flex justify-center items-center text-center text-xs opacity-50 font-bold pt-2 hidden lg:flex'>#GardenChat(Twitter)</div>
                        </div>
                        <div className=''>
                            <img src="/plantpeople/facebook.png" alt="Asana" className=' h-auto'/>
                            <div className='flex justify-center items-center text-center text-xs opacity-50 font-bold pt-2 hidden lg:flex'>Facebook</div>
                        </div>
                    </div>

                    <div className='italic'>
                        Physical Solutions 
                    </div>
                    <div className=' grid lg:grid-cols-6 grid-cols-3 lg:gap-24 gap-4 px-24 lg:px-4 py-4'>
                        <div>
                            <img src="/plantpeople/smartsensor.jpg" alt="Asana" className=' h-auto'/>
                            <div className='flex justify-center items-center text-center text-xs opacity-50 font-bold pt-2 hidden lg:flex'>Smart Sensors</div>
                        </div>
                        <div className='flex flex-col justify-bottom'>
                            <img src="/plantpeople/moisturemeters.jpeg" alt="Asana" className=' h-auto'/>
                            <div className='flex justify-center items-center text-center text-xs opacity-50 font-bold pt-2 hidden lg:flex'>Moisture Meters</div>
                        </div>
                        <div className='flex flex-col justify-bottom'>
                            <img src="/plantpeople/indoorgarden.jpeg" alt="Asana" className=' h-auto'/>
                            <div className='flex justify-center items-center text-center text-xs opacity-50 font-bold pt-2 hidden lg:flex'>Smart Indoor Garden</div>
                        </div>
                    </div>

                    {/* <div className=''>
                        <span className='text-green font-bold'>Key Features:</span>
                        <ul className='list-disc pl-8 py-4'>
                            <li>Easy Task Management and Editing</li>
                            <li>Resource Management</li>
                            <li>Collaboration and Communication</li>
                            <li>Customization</li>
                            <li>Automation</li>
                            <li>Cloud Service</li>
                        </ul>
                    </div> */}
                </div>
                <div className=''><span className='text-green font-bold'>Unique Value</span></div>
                <div>After analysis, we conclusively indentified the following sectors in which Plant People would <span className='underline'>add new value:</span></div>
                <div className='flex flex-col gap-4 '>
                    <div className='flex gap-4 justify-start items-center'>
                        <img src="/plantpeople/starbullet.svg" className='max-w-[25px]'></img>
                        <div className='font-bold'>SECTOR 1: Establishing distinctive, trusted, and maintained relationships between nurseries and their customers.</div>
                    </div>
                    <div>Unlike existing solutions that revolve around other plantkeepers and forums, Plant People builds a specific bridge for nurseries, particularly those that may not be as technologically advanced, enabling them to effectively reach out to and maintain their customers.
                    </div>

                    <div className='flex gap-4 justify-start items-center'>
                        <img src="/plantpeople/starbullet.svg" className='max-w-[25px]'></img>
                        <div className='font-bold'>SECTOR 2: Creating a proactive channel for nurseries to engage with customers, presenting an appealing business voice that resonates with their target audience.</div>
                    </div>
                    <div>Plant People presents a two-way street with plant health at its core, making it appealing from both business and user perspectives. In the future, numerous unexplored features will enable the business to showcase its voice while empowering customers to gain additional knowledge.
                    </div>
                </div>
                {/* <div className=''>

                </div> */}
            </div>


            <div className='flex flex-col gap-4'>
                <div className='lg:text-4xl text-2xl font-bold font-LS'>CONSIDERED MVP FEATURES AND TRADE OFFS</div>
                
                <div className=' gap-4 flex flex-col'>
                    <div className='font-bold text-green'>1. Live Messaging with Nursery Personel</div>
                    <div className='flex flex-col lg:grid lg:grid-cols-2 gap-8'>
                        <div><span className='font-bold'>Pro:</span> Fosters a strong sense of community and connection between the nursery and its customers, increasing customer loyalty.</div>
                        <div><span className='font-bold'>Con:</span> Requires availability of a designated customer representative, potentially increasing operational costs, and may lead to unfiltered information being sent by customers.</div>
                    </div> 
                </div>

                <div className=' gap-4 flex flex-col'>
                    <div className='font-bold text-green'>2. Email Messaging with Nursery Personel</div>
                        <div className='flex flex-col lg:grid lg:grid-cols-2 gap-8'>
                            <div><span className='font-bold'>Pro:</span> Provides a structured way for customers to communicate with the nursery and allows the nursery to specify essential information and respond at their convenience.</div>
                            <div><span className='font-bold'>Con:</span> May lack a personal touch, potentially affecting customer satisfaction, and response times could be longer compared to real-time messaging.</div>
                    </div>
                </div>

                
                <div className=' gap-4 flex flex-col'>
                    <div className='font-bold text-green'>3. Personal Plant Photo Log</div>
                    
                    <div className='flex flex-col lg:grid lg:grid-cols-2 gap-8'>
                        <div><span className='font-bold'>Pro:</span>  Increases user engagement by encouraging regular app usage, fostering a deeper connection between customers and their plants.</div>
                        <div><span className='font-bold'>Con:</span> Requires additional photo storage capacity and may not be appealing enough to drive significant user interest.</div>
                    </div> 
                </div>

                <div className='gap-4 flex flex-col'>
                    <div className='font-bold text-green'>4. Watering Reminders</div>
                    <div className='flex flex-col lg:grid lg:grid-cols-2 gap-8'>
                        <div><span className='font-bold'>Pro:</span> Addresses a common issue faced by novices, ensuring that customers properly care for their plants, boosting customer satisfaction.</div>
                        <div><span className='font-bold'>Con:</span> Accuracy may be challenging, potentially leading to mistakes in plant-specific reminders and undermining customer trust. Additionally, some users may find it intrusive to provide their phone number for reminders.</div>
                    </div> 
                </div>
                

                {/* <div className='lg:text-xl gap-4  flex flex-col'>
                    <div className='font-bold text-green'>3. Customized Calendar</div>
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
                <div className='lg:text-4xl text-2xl font-bold font-LS'>REFINED USER STORIES</div>
                <div>After comprehensive analysis of different user categories and their issues, goals were narrowed to focus on addressing specific groups.</div>
                <div><span className='font-bold text-green'>Minimum Viable Audiance: </span>Novice Plantkeeper Hobbyists with 0-2 Years of Experience & Independently Owned Retail Nurseries Selling Common Indoor Plants</div>

                <div className='font-bold'>User Story #1</div>
                
                <div className='flex lg:flex-row justify-center items-center flex-col gap-8 '>
                    <div className='flex lg:flex-row flex-col justify-center items-center lg:justify-start border-gray border-[1px] lg:w-1/3 rounded-xl p-4 gap-4 shadow-md'>
                        <img src="/plantpeople/andrew.png" className='flex justify-center items-center rounded-full max-w-[130px]'></img>
                        <div className='flex flex-col gap-2 text-xs'>
                            <div className='text-center lg:text-start'><span className='font-bold'>Name: </span> Andrew Wong</div>
                            <div className='text-center lg:text-start'><span className='font-bold'>Age: </span> 54</div>
                            <div className='text-center lg:text-start'><span className='font-bold'>Profession:</span> Accountant and Business Owner</div>
                            <div className='text-center lg:text-start'><span className='font-bold'>Goals: </span>                         
                                <ul className='list-disc pl-4'>
                                    <li>Enjoy a peaceful life away from work</li>
                                    <li>Find some hobbies now that his kids are in college</li>
                                    <li>Stay connected to his community</li>
                                </ul> 
                            </div>
                            <div className='text-center lg:text-start'><span className='font-bold'>Most Relevant Constraint: </span> 
                                Not the most technically fluent, and typically relies on the tools he is familiar with. While expanding his accounting services, he worked mainly through word of mouth and WeChat, a Chinese communication app. Beyond that he doesn&apos;t have a large online presence and doesn&apos;t feel the need to ever build one. 
                            </div>

                        </div>
                    </div>
                    <div className='lg:w-2/3'>
                        <div className=' flex flex-col gap-2 text-xs'>
                            <div className='flex flex-col gap-2'>
                            <span className='font-bold'>Story: </span> Five years ago, Andrew launched his own accounting business, working hard to secure and maintain clients. As the years passed, he achieves a stable clientele and gains the luxury of a flexible schedule. With this newfound freedom, he decides to retry plant keeping, something he&apos;s tried once before, but failed continuing because he felt discouraged after his plant died within the first month. Andrew visits a popular local indoor plant nursery, Colorado Plant House, which his neighbor recommended. There, he chooses to buy a $16 golden pothos plant due to its pretty looks.
                            <div>
                            During checkout, the cashier, Julie, informs Andrew about a free service that allows customers to seek guidance straight from the Colorado Plant House if they encounter difficulties caring for their plants. Intrigued, Andrew scanned the provided QR code, which leads him to the Plant People sign-up page. After Andrew creates an account with Google and enters his phone number, Julie adds his newly purchased pothos to his profile. Andrew recieves a confirmation text message with a link to view his plant&apos;s details and is prompted to log information like watering schedule, location, and climate for the plant.
                            </div>
                            <div>
                            For the first month, Andrew recieves weekly text message reminders to create a log for his golden pothos, including a photo and caption. After the first three weeks, he notices yellowish-brown spots on the leaves of his golden pothos. Rather than spending hours scouring the web and filtering through unreliable advice, he easily contacts the Colorado Plant House with Plant People by filling out a form with a brief description of the issue and a photo of the plant. The information Andrew previously provided, such as watering schedule and environment, is automatically filled in, further saving him time.
                            </div>
                            <div>
                            Within an hour, Colorado Plant House responds, diagnosing the issue as bacterial leaf spot, caused by various types of bacteria, mainly Xanthomonas spp. and Pseudomonas spp. Based on Andrew&apos;s location of the pothos in a moist area, the nursery provides detailed instructions to water the plant from below and relocate it to a dry area. They also suggest several products to address the problem. Following their advice, Andrew successfully nurses his pothos back to health.
                            </div>
                            <div>
                            A month later, Andrew only recieves notifications to log his pothos every two weeks. He is delighted in his plant&apos;s survival and feels ready to return to Colorado Plant House to purchase a snake plant.
                            </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* <div className='font-bold'>User Story #2</div>

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
                </div> */}

            </div>

            <div className='flex flex-col gap-4'>
                <div className='lg:text-4xl text-2xl font-bold font-LS'>BUILDING...</div>
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

            <div className='flex text-center justify-center text-[40px] py-24 font-bold opacity-10'>
                APP IN PROGRESS, MORE COMING SOON.
            </div>

            {/* <div className='flex flex-col gap-4'>
                <div className='lg:text-4xl text-2xl font-bold font-LS'>USABILITY ANALYSIS & FEEDBACK</div> */}
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
                {/* <div className=''>After the first launch on July 19th, 2023, I created an anonymous user feedback survey (click <a href="https://docs.google.com/forms/d/1A_UbHPq3itH3Xrla5sdThNu1q-LXKg2Sr-6K0bc-wc4/edit" className='text-green hover:underline'>here</a> to view) and categorized the responses into 2 categories: </div>
                <div className=' font-bold text-green'>Refining Details & Ideas (Short Term)</div>
                <ul className=' list-disc pl-8'>
                    <li>Automate the input of  &ldquo;Actual Start&rdquo; and &ldquo;Actual End&rdquo; dates by utilizing the checkboxes, streamlining the task-creation process and reducing manual data entry</li>
                    <li>Incorporate user-friendly drag and drop and fill handle features to enhance task management efficiency and improve user experience.</li>
                    <li>Brainstorm innovative solutions to streamline date inputs, including exploring task dependencies to optimize project scheduling.</li>
                    <li>Enabled the generation of exportable graphs and charts, providing visual insights and facilitating data-driven decision-making</li>
                    <li>Integrated a visual timeline view, offering users a clear overview of project progress and deadlines</li>
                </ul>

                <div className='font-bold text-green'>Higher Level Features (Long Term)</div>
                <ul className='list-disc pl-8'>
                    <li>Implement collaboration features enabling project access for multiple users, fostering more effective teamwork</li>
                    <li>Modifiable and customizable calendar, empowering users to generate more accurate and tailored analysis of project timelines and deadlines</li>
                    <li>Leverage AI capabilities to suggest autofill tasks based on a user&apos;s previous activities, improving productivity</li>
                    <li>Implement advanced security measures, including data encryption and user authentication protocols, ensuring the confidentiality and integrity of project data.</li>
                    <li>Develop a mobile application companion, enabling users to access and manage their projects on the go</li>
                    <li>Implement resource management analysis functions</li>

                </ul>
            </div> */}

            {/* <div className='flex flex-col gap-4'>
                <div className='lg:text-4xl text-2xl font-bold font-LS'>UPDATES</div>
                    <div className='pb-16 '>
                        <div className='flex flex-col border-[1px] shadow-md border-gray rounded-lg text-green lg:p-8 p-4 gap-4'>
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
            </div> */}

        </div>
    </div>
  )
};