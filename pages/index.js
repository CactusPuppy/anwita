import Head from 'next/head';
import Image from 'next/image';
import { Navbar } from '../components/header';
import { Footer } from '../components/footer';
import { People } from '../components/people';
export default function Home() {
  const sectionWrapperClasses = 'flex-1 my-6 py-6';

  const linkStyling = 'text-blue-400 hover:text-yellow-500 hover:underline focus:underline focus:outline-none focus:ring focus:ring-gray-400 rounded';

  return (
    <div>
      <Head>
        <title>Anwita Biosciences Inc.</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header>
        <Navbar />
      </header>

      <div style={{height: '64px'}}></div>

      <main>
        <div id='banner-wrapper' className='bg-home-banner bg-cover bg-center flex content-center justify-center h-third-screen sm:h-banner' style={{maxHeight: 'fit-content(50vh)', minHeight: 'min-content'}}>
          <div
            className='flex flex-col w-full flex-none text-center content-center justify-center items-center space-y-2' style={{backgroundColor: 'rgba(54, 58, 69, 0.4)'}}
          >
            <h1 className='text-4xl sm:text-6xl lg:text-8xl text-white font-bold' style={{textShadow: '4px 4px rgba(0,0,0, 0.8)'}}>Anwita Biosciences</h1>
          </div>
        </div>
        <div id='primary-content-wrapper' className='py-2 mx-auto text-blue-900' style={{width: '1200px', maxWidth: "80vw"}}>

          <div className='flex flex-col space-y-2'>

            <div className={sectionWrapperClasses}>
              <span id='about' className='anchor'/>
              <h1 className='text-center text-4xl mb-2 font-semibold'>Our Mission</h1>
              <br/>
              <p className='text-xl'>
                Anwita Biosciences, Inc. is an emerging biopharmaceutical company headquartered in the San Francisco Bay Area.<br/><br/>
                Our mission is to deliver transformative treatment options to improve the lives of patients with cancer and autoimmune diseases. We specialize in the discovery and development of optimized immunotherapeutics, leveraging our core expertise in cancer immunotherapy, bioinformatics, and structure-based protein engineering.<br/><br/>
                We are advancing our product pipeline of improved cytokines (Exenokines<sup>TM</sup>) and tumor targeting antibody drug conjugates. Our lead product is expected to enter clinical trials in 1H 2021.
              </p>
              <br/><br/>
              <Image src='/assets/graphics/about.jpg' width="2159" height="1619" layout="responsive" className='object-scale-down w-full h-96'/>
            </div>

            <hr className='my-3 h-px border-1 border-gray-400'></hr>

            <div className={sectionWrapperClasses}>
              <span id='pipeline' className='anchor'/>
              <h1 className='text-center text-4xl mb-2 font-semibold'>Pipeline</h1>
              <br/>
              <div className='w-full'>
                <Image src='/assets/graphics/pipeline.jpg' alt="Image of Anwita's pipeline" width="100%" height="33%" layout="responsive" objectFit="contain"/>
              </div>
            </div>

            <hr className='my-3 h-px border-1 border-gray-400'></hr>

            <div className={sectionWrapperClasses + ' flex flex-col items-start'}>
              <span id='technology' className='anchor'/>
              <h1 className='text-center text-4xl mb-2 font-semibold place-self-center'>Our Approach</h1>
              <br/><br/>
              <p className='text-xl'>
                Exenokines<sup>TM</sup> are proprietary cytokines designed using Anwita Biosciences’ patented platform technology.  Our modular design enables accelerated development of a diversified portfolio of cytokine-based products with improved pharmaceutical properties.
              </p>
              <div className='my-12 w-full place-self-center' style={{maxWidth: '44rem'}}>
                <Image src='/assets/graphics/tech-01.jpg'
                width='100%' height = '60%' layout='responsive' objectFit='contain' className='object-scale-down' alt='Tech 01' />
              </div>
              <p className='text-xl'>
              Our scientists are developing a suite of innovative ADC technologies and payloads. The company is advancing a pipeline of tumor targeting ADCs with enhanced efficacy <i>in vivo</i>.
              </p>
              <div className='my-12 w-full place-self-center' style={{maxWidth: '44rem'}}>
                <Image src='/assets/graphics/tech-02.jpg'
                width='100%' height = '40%' layout='responsive' objectFit='contain' className='object-scale-down' alt='Tech 02' />
              </div>
            </div>

            <hr className='my-3 h-px border-1 border-gray-400'></hr>

            <People sectionWrapperClasses={sectionWrapperClasses} />

            <hr className='my-3 h-px border-1 border-gray-400'></hr>

            <div className={sectionWrapperClasses}>
              <br/>
              <span id='news' className='anchor'/>
              <h1 className='text-center text-4xl mb-2 font-semibold'>News</h1>
              <br/>
              <div className='text-xl'>
                <ol className='list-inside' role='list'>
                  <li>September 30<sup>th</sup>, 2020 - Anwita Biosciences and Shanghai Junshi Biosciences entered into a new collaboration in which Junshi was granted the exclusive rights to Anwita's Exenokine-2, an improved IL-2 variant with extended half-life, in the Greater China territories. (<a className={linkStyling} target='_blank' href='/assets/news/Anwita-Junshi IL-2 Collaboration HK Announcement.pdf'>PDF</a>)</li>
                  <br/>
                  <li>June 24<sup>th</sup>, 2019 - Strategic collaboration between Anwita Biosciences and Shanghai Junshi Biosciences whereby Junshi was granted the exclusive rights to develop and commercialize Anwita's Exenokine-21 program in the Greater China territories. (<a className={linkStyling} target='_blank' href='/assets/news/Anwita-Junshi First Collaboration (IL-21, HK Announcement).pdf'>PDF</a>)</li>
                </ol>
              </div>
            </div>

            <hr className='my-3 h-px border-1 border-gray-400'></hr>

            <div className={sectionWrapperClasses + ' flex flex-col'}>
              <br/>
              <span id='careers' className='anchor'/>
              <h1 className='text-center text-4xl mb-2 font-semibold'>Careers</h1>
              <hr className='my-3 h-px border-1 border-gray-400 w-1/3 place-self-center'></hr>
              <br/>
              <h2 className='text-3xl mb-6 italic font-semibold text-center'>Working at Anwita</h2>
              <p className='text-xl'>We are always seeking exceptional talent that is passionate about making a difference in the lives of patients with cancer or autoimmune disorders. If you share our mission, and are interested in joining our team, please reach out to us via email at <a href='mailto:contact@anwitabio.com' className={linkStyling}>contact@anwitabio.com</a>.</p>
              <br/>
              <h2 className='text-center text-3xl mb-2 italic font-semibold'>Benefits</h2>
              <div className='text-xl'>
                <ul className='list-disc list-inside'>
                  <li>Competitive compensation</li>
                  <li>Stock options at all levels</li>
                  <li>401(K) plan</li>
                  <li>Official holidays</li>
                  <li>Generous paid time off (PTO)</li>
                  <li>Sick days</li>
                  <li>Medical plan</li>
                  <li>Dental plan</li>
                  <li>Visional plan</li>
                  <li>Life insurance</li>
                </ul>
              </div>
            </div>
          </div>

          <hr className='my-3 h-px border-1 border-gray-400'></hr>

          <div className={sectionWrapperClasses}>
            <span id='contact' className='anchor'/>
            <h1 className='text-center text-4xl mb-2 font-semibold'>Contact</h1>
            <br/>
            <div className='flex flex-col sm:flex-row content-evenly justify-center'>
                <iframe className="w-96 h-48" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1669.5229423824994!2d-122.26270389781278!3d37.51492603078649!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808f98aa79bc4f55%3A0xd47219d8b27ce42a!2sAnwita%20Biosciences!5e0!3m2!1sen!2sus!4v1632246025164!5m2!1sen!2sus" style={{width: "35rem", height: "30rem", maxWidth: "95%", maxHeight: "35rem", border: 0}} allow="fullscreen" allowFullScreen={true} loading="lazy"></iframe>
              <div className='px-0 sm:px-8'>
                <p>Company Address: <br/><a href='https://www.google.com/maps/place/300+Industrial+Rd,+San+Carlos,+CA+94070/@37.5149181,-122.2641003,17z/data=!3m1!4b1!4m5!3m4!1s0x808f98aa79063b39:0x9744f7cb0ddf62fa!8m2!3d37.5149181!4d-122.2619063' target="_blank" rel="noreferrer noopener" className={linkStyling}>300 Industrial Road,<br/>San Carlos, CA 94070</a></p>
                <p>Phone: <a href='tel:1-650-600-9828' target='_blank' className={linkStyling}>(650) 600-9828</a></p>
                <p>Email: <a href='mailto:contact@anwitabio.com' className={linkStyling}>contact@anwitabio.com</a></p>
              </div>
            </div>

          </div>

        </div>
      </main>

      <footer>
        <Footer />
      </footer>

    </div>
  )
}
