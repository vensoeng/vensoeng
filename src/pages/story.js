import '../assets/css/story.css';
import testImgStory from '../assets/img/test_story_img.jpg';
import Button from '../components/common/button';
import StarryBackground from '../components/common/StarryBackground';
export default function StoryPage()
{
    return (
        <main className="web-main">
            <div className="main-body">
                <div className="mb-box">
                    <section className="me-story">
                        <canvas id="star-canvas"></canvas>
                        <div className="ms-box">
                            <div className="ms-head">
                                <div className="msh-box">
                                    <h2>ពីក្រោយនៃស្នាមញញឹមនេះ មានរឿងរ៉ាវជាច្រើនដែលខ្ញុំបានឆ្លងកាត់!</h2>
                                    <blockquote>
                                        <p>ធ្វើជាហេតុផលដែលនរណាម្នាក់ញញឹមនៅថ្ងៃនេះ... ឬយ៉ាងហោចណាស់ហេតុផលដែលពួកគេសើចនៅពេលពួកគេគិតពីអ្នកនៅពេលក្រោយ㋡</p>
                                    </blockquote>
                                </div>
                            </div>
                            <div className='story-main-btn df-c'>
                                <Button>
                                    មើលបន្ថែមច្រើនទៀត
                                </Button>
                            </div>
                            <div className="ms-con">
                                <div className="msc-box">
                                    <div className="my-story-body">
                                        <div className='box'>
                                            <ul>
                                                <li
                                                    style={{ "--bg-img": `url(${testImgStory})` }}
                                                    >
                                                    <div className="image">
                                                        <img className="img-c" src={testImgStory} alt="" />
                                                    </div>
                                                    <div className="text">
                                                        <div className="title df-l">
                                                            <h2>ក្នុងនាមជាបងគេ</h2>
                                                            <span></span>
                                                        </div>
                                                    </div>
                                                    <div className="detail">
                                                        <div className="list df-l">
                                                            <strong>Main:</strong>
                                                            <div className="text df-l">
                                                                <a><p>be</p></a><a ><p>brother</p></a><a ><p></p></a><a ><p></p></a>                                    </div>
                                                        </div>
                                                        <div className="list df-l">
                                                            <strong>Hastag:</strong>
                                                            <div className="text df-l">
                                                                <a ><p>brother</p></a><a><p>family</p></a><a ><p></p></a>                                    </div>
                                                        </div>
                                                    </div>
                                                </li>
                                                 <li
                                                    style={{ "--bg-img": "url('https://vensoeng.free.nf/upload/683a9481b1673.jpg')" }}
                                                    data-aos="zoom-in"
                                                    className="aos-init aos-animate"
                                                    >
                                                    <div className="image">
                                                        <img className="img-c" loading="lazy" src={testImgStory} alt="" />
                                                    </div>
                                                    <div className="text">
                                                        <div className="title df-l">
                                                            <h2>ក្នុងនាមជាបងគេ</h2>
                                                            <span></span>
                                                        </div>
                                                    </div>
                                                    <div className="detail">
                                                        <div className="list df-l">
                                                            <strong>Main:</strong>
                                                            <div className="text df-l">
                                                                <a><p>be</p></a><a ><p>brother</p></a><a ><p></p></a><a ><p></p></a>                                    </div>
                                                        </div>
                                                        <div className="list df-l">
                                                            <strong>Hastag:</strong>
                                                            <div className="text df-l">
                                                                <a ><p>brother</p></a><a><p>family</p></a><a ><p></p></a>                                    </div>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li
                                                    style={{ "--bg-img": "url('https://vensoeng.free.nf/upload/683a9481b1673.jpg')" }}
                                                    data-aos="zoom-in"
                                                    className="aos-init aos-animate"
                                                    >
                                                    <div className="image">
                                                        <img className="img-c" loading="lazy" src={testImgStory} alt="" />
                                                    </div>
                                                    <div className="text">
                                                        <div className="title df-l">
                                                            <h2>ក្នុងនាមជាបងគេ</h2>
                                                            <span></span>
                                                        </div>
                                                    </div>
                                                    <div className="detail">
                                                        <div className="list df-l">
                                                            <strong>Main:</strong>
                                                            <div className="text df-l">
                                                                <a><p>be</p></a><a ><p>brother</p></a><a ><p></p></a><a ><p></p></a>                                    </div>
                                                        </div>
                                                        <div className="list df-l">
                                                            <strong>Hastag:</strong>
                                                            <div className="text df-l">
                                                                <a ><p>brother</p></a><a><p>family</p></a><a ><p></p></a>                                    </div>
                                                        </div>
                                                    </div>
                                                </li>
                                                 <li
                                                    style={{ "--bg-img": "url('https://vensoeng.free.nf/upload/683a9481b1673.jpg')" }}
                                                    data-aos="zoom-in"
                                                    className="aos-init aos-animate"
                                                    >
                                                    <div className="image">
                                                        <img className="img-c" loading="lazy" src={testImgStory} alt="" />
                                                    </div>
                                                    <div className="text">
                                                        <div className="title df-l">
                                                            <h2>ក្នុងនាមជាបងគេ</h2>
                                                            <span></span>
                                                        </div>
                                                    </div>
                                                    <div className="detail">
                                                        <div className="list df-l">
                                                            <strong>Main:</strong>
                                                            <div className="text df-l">
                                                                <a><p>be</p></a><a ><p>brother</p></a><a ><p></p></a><a ><p></p></a>                                    </div>
                                                        </div>
                                                        <div className="list df-l">
                                                            <strong>Hastag:</strong>
                                                            <div className="text df-l">
                                                                <a ><p>brother</p></a><a><p>family</p></a><a ><p></p></a>                                    </div>
                                                        </div>
                                                    </div>
                                                </li>
                                                 <li
                                                    style={{ "--bg-img": "url('https://vensoeng.free.nf/upload/683a9481b1673.jpg')" }}
                                                    data-aos="zoom-in"
                                                    className="aos-init aos-animate"
                                                    >
                                                    <div className="image">
                                                        <img className="img-c" loading="lazy" src={testImgStory} alt="" />
                                                    </div>
                                                    <div className="text">
                                                        <div className="title df-l">
                                                            <h2>ក្នុងនាមជាបងគេ</h2>
                                                            <span></span>
                                                        </div>
                                                    </div>
                                                    <div className="detail">
                                                        <div className="list df-l">
                                                            <strong>Main:</strong>
                                                            <div className="text df-l">
                                                                <a><p>be</p></a><a ><p>brother</p></a><a ><p></p></a><a ><p></p></a>                                    </div>
                                                        </div>
                                                        <div className="list df-l">
                                                            <strong>Hastag:</strong>
                                                            <div className="text df-l">
                                                                <a ><p>brother</p></a><a><p>family</p></a><a ><p></p></a>                                    </div>
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <StarryBackground />
                    </section>
                </div>
            </div>
        </main>
    );
}