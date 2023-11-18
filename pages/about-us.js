import HeadingCard from '@/components/card/HeadingCard';
import Heading from '@/components/commons/Heading';
import Paragraph from '@/components/commons/Paragraph';

export default function AboutUs() {
    return (
        <>
            <HeadingCard heading={'About Us'} />
            <div className=''>
                <img src="team.webp" alt="Your Image" className="w-full h-auto md:h-[50vh] object-cover" />
            </div>
            <section className="lg:px-44 md:px-30 sm:px-10 px-4 py-16  text-justify">
                <main className='flex flex-col gap-10'>
                    <div>
                        <Heading title={'Who Are We?'} />
                        <Paragraph para={para.para1} />
                    </div>
                    <div>
                        <Heading title={'What Makes EasyHai Online Different?'} />
                        <Paragraph para={para.para2} />
                    </div>
                    <div>
                        <Heading title={'Why Choose EasyHai Online?'} />
                        <Paragraph para={para.para3} />
                    </div>
                    <div>
                        <Heading title='Our Vision' />
                        <Paragraph para={para.para4} />
                    </div>
                    <div>
                        <Heading title='Our offering' />
                        <Paragraph para={para.para5} />
                    </div>
                </main>
            </section>
        </>
    );
}



const para = {
    para1: 'EasyHai Online is the most promising Edu-tech company and is a fastest growing online learning and knowledge sharing company located in India. We help students through our online classes/Offline teaching methods and scientifically designed educational content offering through our online/offline modes to make their dreams come true and to think beyond the walls.',
    para2: 'The organization relies on the expertise of experience and efficient faculty and professionals and state of art monitoring system as well as latest teaching methodology.',
    para3: "Easy Hai Online is a young, forward-thinking side of the world that accredit on working together for teachers and students. Our agenda is to make way for our morning stars. 'Out-of-the-box' thinkers. We believe in the ”Transformation of a student instead of creation”.",
    para4: 'Our vision is to make clear picture of rough imagination. The perception of EasyHai Online is of a highly trained, efficient and ingenious team which is true and proven. We are here to be the provider of knowledge for those who seek the excellence. We aim to be the crystal-clear choice by providing total solutions through novel and innovative service.',
    para5: 'EasyHai Online is a provider of Online Learning Education services and solutions for a broad range of demands in the era of challenges where Students to have a committed mentor who is agile and responsive with a comprehensive solution and the highest return on Knowledge investment that lasts. With a strong Student focus, EasyHai Online specializes in providing the impact driven educational platform with competencies along with latest technology, Subject expertise and also provide printed study-material in the form of books for the specific examination.'
}