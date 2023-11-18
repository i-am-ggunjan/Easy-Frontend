import HeadingCard from '@/components/card/HeadingCard';
import Heading from '@/components/commons/Heading';
import Paragraph from '@/components/commons/Paragraph';

export default function AboutUs() {
  return (
    <>
      <HeadingCard heading={'Refund Policy'} />
      <div className="">
        <img
          src="1 (3).webp"
          alt="Your Image"
          className="w-full h-auto md:h-[50vh] object-cover"
        />
      </div>
      <section className="lg:px-44 md:px-30 sm:px-10 px-4 py-16  text-justify">
        <main className="flex flex-col gap-10 text-[14px] sm:text-[15px] text-[#6F6B80]">
          <div className='flex flex-col gap-3'>
            <h3 className='text-[#231F40] font-bold text-[18px] sm:text-xl'>Refund Policy</h3>
            <p>The subscription terms and conditions state that once you subscribe to any of the subscription plans, you cannot change or cancel your subscription, and there will be no refunds. These terms are binding upon your acceptance of the Agreement.</p>
            <p>Here are the key points from the provided Subscription Terms & Conditions:</p>
          </div>

          <div className="flex flex-col gap-3">
            <h3 className='text-[#231F40] font-bold text-[16px] sm:text-[17px]'>A. Subscription & Eligibility:</h3>
            <div className='flex flex-col gap-1'>
              <li>Easyhaionline Subscription is a personalized service offering digital educational content.</li>
              <li>Eou can access the Subscription and Educational Content through the Easyhaionline website or mobile application by subscribing to a category of your choice.</li>
              <li>If you are under 18 years of age, you can use the Subscription only with the involvement of a parent or guardian.</li>
              <li>Content is personalized, and the platform strives to improve subscription plans.</li>
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <h3 className='text-[#231F40] font-bold text-[16px] sm:text-[17px]'>B. Compatible Devices:</h3>
            <div className='flex flex-col gap-1'>
              <li>You need a Compatible Device to access live-streamed courses or download Educational Content.</li>
              <li>Compatibility may change over time, and you should ensure your device is compatible.</li>
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <h3 className='text-[#231F40] font-bold text-[16px] sm:text-[17px]'>C. Educational Content:</h3>
            <div className='flex flex-col gap-1'>
              <li>The Subscription allows you to access live-streamed Educational Content during your Subscription Period.</li>
              <li>There are usage rules, including access to live-streamed classes and downloading content within the Subscription Period.</li>
              <li>Viewing of content is subject to the terms mentioned in the Agreement.</li>
              <li>Quality of streaming may vary based on device and bandwidth.</li>
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <h3 className='text-[#231F40] font-bold text-[16px] sm:text-[17px]'>D. Additional Terms:</h3>
            <div className='flex flex-col gap-1'>
              <li>You may receive electronic communications from Easyhaionline.</li>
              <li>Rest assured that Easyhaionline has the full authority to modify the Subscription Service and this Agreement at any time.Copyright and intellectual property rights are protected.</li>
              <li>Disputes are subject to the governing law and terms of the Easyhaionline Terms of Use.</li>
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <h3 className='text-[#231F40] font-bold text-[16px] sm:text-[17px]'>E. Limitation of Liability:</h3>
            <div className='flex flex-col gap-1'>
              <li>Easyhaionline's liability is limited in certain circumstances.</li>
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <h3 className='text-[#231F40] font-bold text-[16px] sm:text-[17px]'>F. Contact Information:</h3>
            <div className='flex flex-col gap-1'>
              <li>Contact details for communication with Easyhaionline are provided.</li>
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <h3 className='text-[#231F40] font-bold text-[16px] sm:text-[17px]'>G. Severability:</h3>
            <div className='flex flex-col gap-1'>
              <li>If any term or condition is deemed invalid, the remaining terms remain valid.</li>
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <h3 className='text-[#231F40] font-bold text-[16px] sm:text-[17px]'>H. Refund Policy (as per the additional text):</h3>
            <div className='flex flex-col gap-1'>
              <li>A refund policy is outlined for courses provided by Easyhaionline.</li>
              <li>To qualify for a refund, a student must have attended all live online classes in the first 30 days and submitted all assignments within that time frame.</li>
              <li>The refund request must be made between the 30th and 45th day from the course's official commencement date.</li>
              <li>No refund requests will be entertained before the 31st day or after the 45th day.</li>
              <li>Days are counted from the official batch/course start date.</li>
              <li>Missing assignments or not fully participating disqualifies a student from the refund policy.</li>
            </div>
          </div>

          <div className='text-[#231F40] text-[15px] sm:text-[16px]'>Please note that the refund policy is specific to courses offered by Esayhaionline and may not apply to other services provided by Easyhaionline. It's important to understand and agree to these terms before subscribing to any services.</div>
        </main>
      </section>
    </>
  );
}
