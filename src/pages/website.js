import '../assets/css/website.css';
import chobImg from '../assets/img/app_Elibrary.png';
import { ArrowRight, Global} from 'iconsax-reactjs';
import Button from '../components/common/button';
import img1 from '../assets/img/E_web_slider1.jpg';
import img2 from '../assets/img/E_web_slider2.jpg';
import img3 from '../assets/img/E_web_slider3.jpg';
import img4 from '../assets/img/E_web_slider4.jpg';

const arrayListItem = [
  'ព័ត៌មានថ្មីៗ – អានព្រះធម៌ និងពិធីបុណ្យថ្មីៗ។',
  'អត្ថបទមានន័យ – ស្វែងរកអត្ថបទដែលផ្តល់ចំណេះដឹង។',
  'វីដេអូអប់រំ – រៀនសូត្រអំពីព្រះធម៌តាមរយៈវីដេអូ។',
  'ពិធីបុណ្យ – ទទួលព័ត៌មានអំពីពិធីសាសនា និងកម្មវិធីនៅវត្ត។',
  'ព័ត៌មានព្រះសង្ឃ – សិក្សាពីជីវិតព្រះសង្ឃ និងការបង្ហាញចំណេះដឹង។',
  'សុវត្ថិភាពអ្នកប្រើ – ចូលប្រើដោយមានការពារ និងផ្ទៀងផ្ទាត់អ្នកប្រើ។',
  'បង្ហោះ និងចែករំលែក – ធ្វើបច្ចុប្បន្នភាពប្រវត្តិរូប និងចែករំលែកអត្ថបទ។',
];
const arrayImagesList =[img1, img2, img3, img4];

export default function WebsitePage({h2 = '', blockquote = '', listItem = '',mainImg = '', imagesList= '', btn = '', flex = false})
{
    const finalList = listItem.length === 0 ? arrayListItem : listItem;
    const finalImags = imagesList.length === 0 ? arrayImagesList : imagesList;
    return (
      <section className="web-build">
          <div className="wbd-box">
               <div className="wbd-con df-s">
                    {/* image */}
                    {flex == true ? 
                    <div className='row-img'>
                        <div className='ri-box'>
                            <img className='img-c' src={mainImg == ''? chobImg : mainImg} alt="" />
                        </div>
                    </div>
                    : ''}
                    {/* text  */}
                    <div className='row-text'>
                        <div className='rt-box'>
                            <h2 className='df-l'>
                                {h2 == '' ? <> <Global /> គេហទំព័រគ្រប់គ្រងសៀវភៅ </> : h2}
                            </h2>
                            <blockquote>
                                {blockquote == "" ? 
                                <p>
                                    គេហទំព័រនេះត្រូវបានបង្កើតដោយប្រើភាសា Back-end រួមមាន PHP និង Laravel Framework។ វាបានបង្ហោះនៅលើ InfinityFree ក្នុងកំណែទម្រង់៣.០.១៥ ដោយផ្តោតលើសមត្ថភាពប្រតិបត្តិ និងការប្រើប្រាស់ងាយស្រួល។                                    
                                </p>
                                :  blockquote }
                            </blockquote>
                            <ul>
                                {finalList.map((text, index) =>(
                                    <li className="df-l " key={index}>
                                        <i className="fa-solid fa-check"></i>
                                        <p>{text}</p>
                                    </li>
                                    ))
                                }
                            </ul>
                            {btn == '' ? <>
                            <Button element='link' action='https://www.youtube.com/'>
                                ទាញយកកូដ
                                <ArrowRight/>
                            </Button>
                            </>
                            : btn}
                        </div>
                    </div>
                    {/* image */}
                    {flex == false ? 
                    <div className='row-img'>
                        <div className='ri-box'>
                            <img className='img-c' src={chobImg} alt="" />
                        </div>
                    </div>
                    : ''}
                </div>
               <div className="wbdf db-c">
                    <div className="wbdf-box db-c">
                        <ul className="df-s scroll-x">
                            {finalImags.map((img, index) => (
                                <li key={index}>
                                    <img className='img-c' src={img} alt="" />
                                </li> 
                            ))}
                        </ul>
                    </div>
               </div>
          </div>
      </section>
   );   
}

