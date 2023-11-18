import HeadingCard from '@/components/card/HeadingCard';
import Heading from '@/components/commons/Heading';
import Paragraph from '@/components/commons/Paragraph';

export default function AboutUs() {
    return (
        <>
            <HeadingCard heading={'Disclaimer'} />
            <div className=''>
                <img src="/disclaimer.webp" alt="Your Image" className="w-full h-auto md:h-[50vh] object-cover"
                />
            </div>
            <section className="lg:px-44 md:px-30 sm:px-10 px-4 py-16  text-justify">
                <main className='flex flex-col gap-10'>
                    <Paragraph para={`THIS WEBSITE, THE APPLICATION AND THE SERVICES ARE PROVIDED ON AN "AS IS" BASIS WITH ALL FAULTS AND WITHOUT ANY WARRANTY OF ANY KIND. THE COMPANY HEREBY DISCLAIMS ALL WARRANTIES AND CONDITIONS WITH REGARD TO THE WEBSITE, APPLICATION/PRODUCTS AND THE SERVICES, INCLUDING WITHOUT LIMITATION, ALL IMPLIED WARRANTIES AND CONDITIONS OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, TITLE, ACCURACY, and TIMELINESS. PERFORMANCE, COMPLETENESS, SUITABILITY AND NON-INFRINGEMENT. ADDITIONALLY, THE COMPANY SHALL NOT BE LIABLE FOR ANY DAMAGES ARISING OUT OF OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SITE, OR THE APPLICATION OR THE SERVICES. YOUR USE OF ANY INFORMATION OR MATERIALS ON THIS WEBSITE/APPLICATION/SERVICES/PRODUCTS IS ENTIRELY AT YOUR OWN RISK, FOR WHICH WE SHALL NOT BE LIABLE. IT SHALL BE YOUR OWN RESPONSIBILITY TO ENSURE THAT SERVICES PROVIDED BY US MEET YOUR SPECIFIC REQUIREMENTS.`} />
                    <div>
                        <Heading title={'Referral Program'} />
                        <Paragraph para={para.para1} />
                        <Paragraph para={para.para2} />
                        <Paragraph para={para.para3} />
                        <Paragraph para={para.para4} />
                        <Paragraph para={para.para5} />
                        <Paragraph para={para.para6} />
                        <Paragraph para={para.para7} />
                        <Paragraph para={para.para8} />
                        <Paragraph para={para.para9} />
                        <Paragraph para={para.para10} />
                    </div>
                </main>
            </section>
        </>
    );
}

const para = {
    para1: 'Easyhaionline Learner Referral Program (Referral Program) is organized by Harshly Education And Skills Technologies Pvt. Ltd. (“Easyhaionline”) to motivate learners to refer their friends and get rewarded for successful referrals.',
    para2: 'The Referral program is governed by these Terms and Conditions, the online Privacy Policies, Community Guidelines. The Referral policy is available on the Easyhaionline website (www. Easyhaionline.com) and may be amended from time to time at the discretion of Easyhaionline without any notice.',
    para3: 'Participation in the Referral Program is voluntary. While referring, learners agree to comply with the terms and conditions stated herein in letter and spirit.',
    para4: 'Learners can refer their friends in accordance with the referral policy that has been shared over the Easyhaionline website.',
    para5: 'Easyhaionline reserves the right to modify, add or delete any of the terms and conditions at any point of time at its sole discretion without serving any prior intimation. Intimation of any change, modification, addition, deletion in the terms and conditions of the same will be updated on this page.',
    para6: 'In the event of any violation of the policy or use of illegal, unfair or other means which give a referrer an unwarranted advantage over other referees, Easyhaionline reserves the right to withhold any gifts and reset the points to zero.',
    para7: 'Referral points/rewards are non-transferable; non-endorsable; non-exchangeable for equivalent amount of money or anything of value. Easyhaionline does not promise/promote to do the same. All gifts must be availed within 2 months of eligibility. In the event gifts are not claimed, the claims will lapse and the learner shall not be entitled to avail any gifts.',
    para8: 'Easyhaionline shall not be responsible for loss or damage of any gifts, including loss of digital vouchers or cards, after the same have been issued by Easyhaionline. Vouchers or digital vouchers or emails/sms containing unique codes or other digital means will not be reissued again.',
    para9: 'Easyhaionline reserves the full right to change rewards at any point in time. All rewards are subject to product/manufacturer availability. Easyhaionline will only pay the base value of the gift and any additional taxes and costs must be borne by the referrer.',
    para10: 'Referral codes must be given directly by learner to their friends. Referral codes are the property of Easyhaionline and cannot be displayed or shared on a public platform or a social media site using paid marketing and/or sponsored ads and Easyhaionline reserves the right to cancel any and all referral points where it finds evidence of such activity by the Learner.',
}