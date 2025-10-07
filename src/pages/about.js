import './../assets/css/about.css';
import aboutImg from './../assets/img/sg.jpg';
import qrImg from './../assets/img/qrcode.png';
import nmuLogo from './../assets/img/logo_nmu.jpg';
import Button from '../components/common/button';
import { MessageText1, Profile2User, Activity, Blur, Code, Cd, ArrowRight} from 'iconsax-reactjs';
export default function AboutPage()
{
 return (
   <main className="web-main">
      <div className="main-body">
         <div className="mb-box">
            {/* -----about-----  */}
            <section className="about" id="about">
                <div className="ab-box df-s">
                     {/* img */}
                     <div className="row-img">
                        <div className="ri-box">
                           <div className="ri-con">
                              <img className='img-c' src={aboutImg} alt="" width="100" />
                           </div>
                        </div>
                     </div>
                     {/* text */}
                     <div className="row-text">
                        <div className="rt-box">
                              <div className='rt-head'>
                                 <div className='rth-box df-l'>
                                    <div className='icon icon-ra icon-sm'>
                                       <MessageText1 />
                                    </div>
                                    <h2>ការងារ</h2>
                                 </div>
                              </div>
                              <h2>ខ្ញុំសង្ឃឹមថា នឹងមានឱកាសដ៏ល្អក្នុងការចូលរួមការងារលើវិស័យដែលខ្ញុំកំពុងសិក្សា។</h2>
                              <blockquote>
                                 <p>
                                    ជាមួយនឹងចំណង់ចំណូលចិត្តក្នុងការរៀនសូត្រយ៉ាងខ្លាំងខ្លា និងការដោះស្រាយបញ្ហាបច្ចេកទេស គ្រាន់តែមានការងារនៅវិស័យ IT Support ឬ Web Development នឹងអាចជួយខ្ញុំទទួលបានបទពិសោធន៍ថ្មី និងបន្តការអភិវឌ្ឍសមត្ថភាពអាជីពរបស់ខ្ញុំ។                                
                                 </p>
                              </blockquote>
                              <div className="button">
                                 <Button>
                                    រឿងពីក្រោយនៃជីវិត
                                    <ArrowRight/>
                                 </Button>
                              </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* ----- school ----- */}
            <section className='school' id='scholl'>
               <div className='sch-box df-s'>
                  {/* this Is main show of university */}
                  <div className='row'>
                     <ul className='df-s'>
                        <li className='df-l'>
                           <div className='lbox'>
                              <div className='lh'>
                                 <div className='icon icon-ra icon-sm'>
                                    <Profile2User/>
                                 </div>
                              </div>
                              <blockquote>
                                 <p>មហាវិទ្យាល័យសិល្បៈ មនុស្សសាស្ត្រ និងភាសា</p>
                              </blockquote>
                           </div>
                        </li>
                        <li className='df-l'>
                           <div className='lbox'>
                              <div className='lh'>
                                 <div className='icon icon-ra icon-sm'>
                                    <Activity/>
                                 </div>
                              </div>
                              <blockquote>
                                 <p>មហាវិទ្យាល័យគ្រប់គ្រងពាណិជ្ជកម្មនិងទេសចរណ៍</p>
                              </blockquote>
                           </div>
                        </li>
                     </ul>
                     <ul className='df-s'>
                        <li className='df-l'>
                           <div className='lbox'>
                              <div className='lh'>
                                 <div className='icon icon-ra icon-sm'>
                                    <Blur/>
                                 </div>
                              </div>
                              <blockquote>
                                 <p>មហាវិទ្យាល័យកសិកម្មនិងកែច្នៃអាហារ</p>
                              </blockquote>
                           </div>
                        </li>
                        <li className='df-l'>
                           <div className='lbox'>
                              <div className='lh'>
                                 <div className='icon icon-ra icon-sm'>
                                    <Code/>
                                 </div>
                              </div>
                              <blockquote>
                                 <p>មហាវិទ្យាល័យវិទ្យាសាស្ត្រនិងបច្ចេកវិទ្យា</p>
                              </blockquote>
                           </div>
                        </li>
                     </ul>
                     <ul>
                        <li>
                           <div className='lbox df-l'>
                              <div className='lh'>
                                 <div className='icon icon-ra icon-sm'>
                                    <Cd/>
                                 </div>
                              </div>
                              <blockquote>
                                 <p>មហាវិទ្យាល័យសង្គមសាស្ត្រនិងអភិវឌ្ឍន៍សហគមន៍</p>
                              </blockquote>
                           </div>
                        </li>
                     </ul>
                  </div>
                  {/* this is show university name */}
                  <div className='main'>
                     <div className='mb'>
                        <blockquote>
                           <p>NMU - សាកលវិទ្យាល័យជាតិមានជ័យនឹងក្លាយជាសាកលវិទ្យាល័យឈានមុខគេក្នុងការបណ្តុះបណ្តាលធនធានមនុស្សប្រកបដោយគុណភាព និងក្នុងការរួមចំណែកដល់ការអភិវឌ្ឍន៍ប្រទេសជាតិ។</p>
                        </blockquote>
                        <div className='mlogo'>
                           <div className='mlg-box df-l'>
                              <div className='icon icon-ra icon-sm'>
                                 <img className='img-c' src={nmuLogo} alt=''/>
                              </div>
                              <div className='text'>
                                 <h2>MNU-National Meanchey</h2>
                                 <p>Education & University, Cambodia</p>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </section>
         </div>
      </div>
   </main>
 );   
}