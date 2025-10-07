import '../assets/css/home.css';
import Button from '../components/common/button';
import nmuLogo from './../assets/img/alien.jpg';
import mainImgUIPagoda from './../assets/img/chob_web.png';
import mainImgUILinkme from './../assets/img/web_linkme.png';
import { ExportCircle,DiscountShape, Global, Record, Hashtag, Book1 ,MessageText1, Profile2User, Activity, Blur, Code, Cd, ArrowRight} from 'iconsax-reactjs';
import AboutPage from './about';
import WebsitePage from './website';
import StoryPage from './story';
import CreatorPage from './creator';
// website pagoda images 
import imgP1 from './../assets/img/web_slider_chob1.png';
import imgP2 from './../assets/img/web_slider_chob2.png';
import imgP3 from './../assets/img/web_slider_chob3.png';
import imgP4 from './../assets/img/web_slider_chob4.png';
//website linkme images
import imgL1 from './../assets/img/photo_app_slider1.jpg';
import imgL2 from './../assets/img/photo_app_slider2.jpg';
import imgL3 from './../assets/img/photo_app_slider3.jpg';
import imgL4 from './../assets/img/photo_app_slider4.jpg';
export default function HomePage()
{
    return(
        <main className="web-main">
            <div className="main-body">
                <div className="mb-box">
                    {/* this is is head of home page  */}
                    <section className="head">
                        <blockquote>
                            <h2>
                                បង្កើតដំណោះស្រាយប្រកបដោយភាពច្នៃប្រឌិត និងមានប្រសិទ្ធភាព
                                គេហទំព័រនិងទូរស័ព្ទ។
                            </h2>
                            <p>សួស្តី ខ្ញុំឈ្មោះវិនសឹង្ហ ហើយខ្ញុំជាអ្នកអភិវឌ្ឍន៍ជាមួយនឹងបទពិសោធន៍ក្នុងភាសាសរសេរកម្មវិធី និងក្របខ័ណ្ឌផ្សេងៗ។</p>
                            <div className='list-btn'>
                                <div className='df-c'>
                                    <Button>ទាញយកប្រវត្តរូប</Button>
                                    <Button>
                                        <Book1/>
                                        ទិដ្ឋពីក្រោយជីវិត
                                    </Button>
                                </div>
                                <p>Open source platform!</p>
                            </div>
                        </blockquote>
                    </section>
                    {/* this is is about my skill  */}
                    <section className='skill'>
                        <div className='sk-box'>
                            <div className='sk-head'>
                                <div className='skh-box df-l'>
                                    <div className='list-icon'>
                                        <Record/>
                                        <Record/>
                                        <Record/>
                                    </div>
                                </div>
                            </div>
                            <div className='sk-con'>
                                <div className='skc-box df-s'>
                                    <div className='row'>
                                        <div className='row-head'>
                                            <h2>2021 - 2022</h2>
                                        </div>
                                        <ul>
                                            <li className="df-l">
                                                <Hashtag/>
                                                <p>Basic English</p>
                                            </li>
                                            <li className="df-l">
                                                <Hashtag/>
                                                <p>Basic computer</p>
                                            </li>
                                            <li className="df-l">
                                                <Hashtag/>
                                                <p>Computer network system</p>
                                            </li>
                                            <li className="df-l">
                                                <Hashtag/>
                                                <p>Adobe Photoshop, Premiere pro</p>
                                            </li>
                                            <li className="df-l">
                                                <Hashtag/>
                                                <p>Microsoft basic</p>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className='row'>
                                        <div className='row-head'>
                                            <h2>2022 - 2023</h2>
                                        </div>
                                        <ul>
                                            <li className="df-l">
                                                <Hashtag/>
                                                <p>Project paper (python)</p>
                                            </li>
                                            <li className="df-l">
                                                <Hashtag/>
                                                <p>Advance Java programing</p>
                                            </li>
                                            <li className="df-l">
                                                <Hashtag/>
                                                <p>Web development programing (HTML + CSS + JS)</p>
                                            </li>
                                            <li className="df-l">
                                                <Hashtag/>
                                                <p>Computer Graphic designs (Photoshop)</p>
                                            </li>
                                            <li className="df-l">
                                                <Hashtag/>
                                                <p>MData structure and algorithm program (python)</p>
                                            </li>
                                            <li className="df-l">
                                                <Hashtag/>
                                                <p>Digital marketing </p>
                                            </li>
                                            <li className="df-l">
                                                <Hashtag/>
                                                <p>Web technology (Angular + Node express basic) </p>
                                            </li>
                                            <li className="df-l">
                                                <Hashtag/>
                                                <p>Network administrator</p>
                                            </li>
                                            <li className="df-l">
                                                <Hashtag/>
                                                <p>Linux open source</p>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className='skc-box df-s'>
                                    <div className='row'>
                                        <div className='row-head'>
                                            <h2>2023 - 2024</h2>
                                        </div>
                                        <ul>
                                            <li className="df-l">
                                                <Hashtag/>
                                                <p>Mobile Application development (Flutter)</p>
                                            </li>
                                            <li className="df-l">
                                                <Hashtag/>
                                                <p>Open source Technology (Laravel + XAMP) </p>
                                            </li>
                                            <li className="df-l">
                                                <Hashtag/>
                                                <p>Net programing (ASP.net)</p>
                                            </li>
                                            <li className="df-l">
                                                <Hashtag/>
                                                <p>Research Methodology</p>
                                            </li>
                                            <li className="df-l">
                                                <Hashtag/>
                                                <p>Database Administrator (Microsoft SQL server) </p>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className='row'>
                                        <div className='row-head'>
                                            <h2>2024 - 2025</h2>
                                        </div>
                                        <ul>
                                            <li className="df-l">
                                                <Hashtag/>
                                                <p>Electronic Ecommerce (Ecommerce introduction + WordPress + Laravel)</p>
                                            </li>
                                            <li className="df-l">
                                                <Hashtag/>
                                                <p>Big data Analytics</p>
                                            </li>
                                            <li className="df-l">
                                                <Hashtag/>
                                                <p>Advance programming (Node express)</p>
                                            </li>
                                            <li className="df-l">
                                                <Hashtag/>
                                                <p>Software Engineer and project management </p>
                                            </li>
                                            <li className="df-l">
                                                <Hashtag/>
                                                <p>Machine Learning (Basic)</p>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className='skc-box df-s'>
                                    <div className='row'>
                                        <div className='row-head'>
                                            <h2>2025 - 2026 Fut</h2>
                                        </div>
                                        <ul>
                                            <li className="df-l">
                                                <Hashtag/>
                                                <p>React JS, Vue.js, Flutter, Network, Node Express.</p>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/* this is read node */}
                    <section className='read-node'>
                        <div className='rn-head'>
                            <div className='rnh-box'>
                                <h2>Start up with background Project Experience.</h2>
                            </div>
                        </div>
                        <div className='rn-con'>
                            <ul className='df-c'>
                                <li className='df-c'>
                                    <blockquote>
                                        <p>Student Management System</p>
                                    </blockquote>
                                </li>
                                <li className='df-c'>
                                    <blockquote>
                                        <p>Static Website Project</p>
                                    </blockquote>
                                </li>
                                <li className='df-c'>
                                    <blockquote>
                                        <p>E-Library Management System</p>
                                    </blockquote>
                                </li>
                                <li className='df-c'>
                                    <blockquote>
                                        <p>Pagoda Management System</p>
                                    </blockquote>
                                </li>
                                <li className='df-c'>
                                    <blockquote>
                                        <p>E-Portfolio Website</p>
                                    </blockquote>
                                </li>
                            </ul>
                            <ul className='df-c'>
                                <li className='df-c'>
                                    <blockquote>
                                        <p>Pagoda Management System</p>
                                    </blockquote>
                                </li>
                                <li className='df-c'>
                                    <blockquote>
                                        <p>E-commerce Website</p>
                                    </blockquote>
                                </li>
                            </ul>
                        </div>
                    </section>
                    {/* this is about page  */}
                    <AboutPage/>
                    {/* this is my work page  */}
                    <WebsitePage 
                        mainImg={mainImgUILinkme}
                        blockquote={<p>សូមមើលការបង្កើតថ្មីបំផុតរបស់ខ្ញុំ ដែលបានបង្កើតឡើងដោយប្រើប្រាស់ PHP, HTML, CSS, និង JavaScript! វាមានមុខងារដ៏ពេញនិយម និងអាចបង្កើនបទពិសោធន៍ប្រើប្រាស់បានយ៉ាងល្អ។ អ្នកអាចចូលមើលនៅទីនេះ។</p>}
                        flex = {true}
                        listItem={[
                            '🔐 ចូល/ចុះឈ្មោះ: បង្កើតគណនី និងចូលប្រើប្រព័ន្ធ។',
                            '✍️ បង្កើត, កែប្រែ, លុបតំណ: គ្រប់គ្រងតំណទំនាក់ទំនងរបស់អ្នក។',
                            '📝 បង្កើតការបង្ហោះ: ចែករំលែកគំនិត និងទស្សនៈជាមួយអ្នកដទៃ។',
                            '🤝 តាមដានអ្នកប្រើ: តភ្ជាប់ជាមួយអ្នកប្រើដទៃនៅក្នុងកម្មវិធី។',
                            '👤 គ្រប់គ្រងគណនី: មើល និងគ្រប់គ្រងទំព័រប្រវត្តិរូបរបស់អ្នក។',
                            '👍 ចូលចិត្ត និងរក្សាការបង្ហោះ: អ្នកអាចចូលចិត្ត និងរក្សាការបង្ហោះ។',
                            '🔔 ការជូនដំណឹង: ទទួលបានដំណឹងជាក់ស្តែងតាមពេលវេលា។',
                            '🔍 ស្វែងរកអ្នកប្រើ&ការបង្ហោះ: រកអ្នកប្រើ&ការបង្ហោះបានយ៉ាងលឿន។'
                        ]}
                        imagesList={[imgL1,imgL2,imgL3,imgL4]}
                        h2={<> 🎉 ការណែនាំកម្មវិធីបណ្តាញសង្គម!</>}
                    />
                    {/* this is somepage */}
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
                    {/* this is show my story  */}
                    <StoryPage />
                    {/* this is Elibrary App  */}
                    <WebsitePage 
                        h2={<><DiscountShape size="32" color="#FF8A65"/> Appសម្រាប់គ្រប់គ្រងសៀវភៅ</>}
                    />
                    <CreatorPage />
                    {/* this is Pagoda website  */}
                    <WebsitePage 
                        mainImg={mainImgUIPagoda}
                        blockquote={<p>គេហទំព័រនេះត្រូវបានបង្កើតដោយប្រើភាសា Back-end រួមមាន PHP និង Laravel Framework។ វាបានបង្ហោះនៅលើ InfinityFree ក្នុងកំណែទម្រង់៣.០.១៥ ដោយផ្តោតលើសមត្ថភាពប្រតិបត្តិ និងការប្រើប្រាស់ងាយស្រួល។</p>}
                        flex = {true}
                        listItem={[
                            'ព័ត៌មានថ្មីៗ – អានព្រះធម៌ និងពិធីបុណ្យថ្មីៗ។',
                            'អត្ថបទមានន័យ – ស្វែងរកអត្ថបទដែលផ្តល់ចំណេះដឹង។',
                            'វីដេអូអប់រំ – រៀនសូត្រអំពីព្រះធម៌តាមរយៈវីដេអូ។',
                            'ពិធីបុណ្យ – ទទួលព័ត៌មានអំពីពិធីសាសនា និងកម្មវិធីនៅវត្ត។',
                            'ព័ត៌មានព្រះសង្ឃ – សិក្សាពីជីវិតព្រះសង្ឃ និងការបង្ហាញចំណេះដឹង។',
                            'សុវត្ថិភាពអ្នកប្រើ – ចូលប្រើដោយមានការពារ និងផ្ទៀងផ្ទាត់អ្នកប្រើ។',
                            'បង្ហោះ និងចែករំលែក – ធ្វើបច្ចុប្បន្នភាពប្រវត្តិរូប និងចែករំលែកអត្ថបទ។',
                        ]}
                        imagesList={[imgP1,imgP2,imgP3,imgP4]}
                        h2={<><Global /> គេហទំព័រគ្រប់គ្រងព្រះសង្ឃ និងបង្ហោះព៍ត៌មាន!</>}
                    />
                </div>
            </div>
        </main>
    )
}