import '../assets/css/creator.css';
import Button from '../components/common/button';
import { Video } from 'iconsax-reactjs';
export default function CreatorPage()
{
 return (
      <main className="web-main">
            <div className="main-body">
               <div className="mb-box">
                  <section className="video-created" id="creator">
                     <div className="vc-body section-body">
                        <div className="head aos-init aos-animate">
                              <div className="image">
                                 <img src={'https://vensoeng.free.nf/about/images/video_creator.jpg'} width="100" alt="" />
                              </div>
                              <blockquote>
                                 <h2 className='df-l'>
                                    <Video/>
                                    អ្នកបង្កើតមាតិការ
                                    </h2>
                                 <p>ក្នុងកំឡុងសិក្សាលើជំនាញITខ្ញុំក៏ផ្ដោតទៅលើការបង្កើតមាតិការផងដែល ដែលរួមមានមាតិការផ្សព្វផ្សាយព្រះធម៌ មាតិការតាមបុណ្យទាន មាតិការផ្ដល់ចំណេះដឹង មាតិការចម្រៀង និងមាតិការផ្សេងៗទៀត។ </p>
                                 <div className="button">
                                    <Button>
                                       តាមដានមាតិការរបស់ខ្ញុំ
                                    </Button>
                                 </div>
                              </blockquote>
                        </div>
                        <div className="foot">
                              <div className="foot-box">
                                 <ul className="df-l scroll-x">
                                    <li data-aos="fade-left" data-aos-easing="linear" data-aos-duration="100">
                                          <img src={"https://vensoeng.free.nf/about/images/video_tum1.jpg"} width="100" alt="" />
                                    </li>
                                    <li data-aos="fade-left" data-aos-easing="linear" data-aos-duration="500">
                                          <img src={"https://vensoeng.free.nf/about/images/video_tum3.jpg"} width="100" alt="" />
                                    </li>
                                    <li data-aos="fade-left" data-aos-easing="linear" data-aos-duration="700">
                                          <img src={"https://vensoeng.free.nf/about/images/video_tum4.jpg"} width="100" alt="" />
                                    </li>
                                    <li data-aos="fade-left" data-aos-easing="linear" data-aos-duration="300">
                                          <img src={"https://vensoeng.free.nf/about/images/video_tum2.jpg"} width="100" alt="" />
                                    </li>
                                    <li data-aos="fade-left" data-aos-easing="linear" data-aos-duration="900">
                                          <img src={"https://vensoeng.free.nf/about/images/video_tum5.jpg"} width="100" alt="" />
                                    </li>
                                 </ul>
                              </div>
                        </div>
                     </div>
                  </section>
               </div>
            </div>
      </main>
 );   
}
