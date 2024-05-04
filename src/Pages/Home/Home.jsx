import banner from "../../assets/images/banner_pic.png"
import one from "../../assets/images/pointer1.png"
import two from "../../assets/images/pointer2 .png"
import three from "../../assets/images/pointer3.png"
import four from "../../assets/images/pointer4.png"
import Heading from "../component/Heading"
import Peragraph from "../component/Peragraph"
import Subheading from "../component/Subheading"

const Home = () => {
  return (
    <>
      <section id="banner" className="bg-main py-32">
          <div className="max-w-container mx-auto">
            <div className="flex justify-between items-center">
              <div>
                <h1 className="w-h1Width text-sada font-popiens text-[54px] font-semibold leading-[74px]">Building stellar websites for early startups</h1>
                <p className="w-[562px] mt-[24px] text-sada opacity-70 font-popiens text-[16px] font-medium leading-[28px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>

                <div className="mt-[64px] flex gap-x-[40px] items-center">
                  <a className="py-4 px-12 border-2 border-[#FCD980] rounded-br text-kalo bg-[#FCD980] ease-linear duration-75 hover:bg-main hover:border-2 hover:border-borderColor hover:text-sada " href="#">View our work</a>

                  <a className="py-4 px-12 border-2 border-main rounded-br text-sada bg-main hover:bg-[#FCD980] ease-linear duration-75 hover:border-2 hover:border-[#FCD980] hover:text-kalo " href="#">View Pricing <i className="fa-solid fa-arrow-right-long"></i></a>
                </div>
              </div>
              <div>
                <img src={banner} alt="not found" />
              </div>
            </div>
          </div>
      </section>

      <section id="work" className="py-32 bg-background">
        <div className="max-w-container mx-auto">
          <div className="flex gap-x-[142px]">
            <div>
              <Heading text="How we work"/>
              <Peragraph styling="w-[405px] my-4 font-popiens text-4 text-headingcolor opacity-70" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor."/>

              <a className="font-popiens text-lg font-medium text-ac" href="#">Get in touch with us <i className="fa-solid fa-arrow-right-long"></i></a>
            </div>
            <div>
              <div className="flex gap-x-[25px]">
                <div>
                    <img src={one} alt="not found" />
                    <Subheading styling="font-popiens text-3xl font-medium mt-4 mb-2 text-headingcolor" text="Strategy"/>
                    <Peragraph styling="w-[303px] font-popiens text-4 text-headingcolor opacity-70" text="Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam ."/>
                </div>
                <div>
                    <img src={two} alt="not found" />
                    <Subheading styling="font-popiens text-3xl font-medium mt-4 mb-2 text-headingcolor" text="Wireframing"/>
                    <Peragraph styling="w-[303px] font-popiens text-4 text-headingcolor opacity-70" text="Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam ."/>
                </div>
              </div>
              <div className="flex gap-x-[25px] mt-12">
                <div>
                    <img src={three} alt="not found" />
                    <Subheading styling="font-popiens text-3xl font-medium mt-4 mb-2 text-headingcolor" text="Design"/>
                    <Peragraph styling="w-[303px] font-popiens text-4 text-headingcolor opacity-70" text="Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam ."/>
                </div>
                <div>
                    <img src={four} alt="not found" />
                    <Subheading styling="font-popiens text-3xl font-medium mt-4 mb-2 text-headingcolor" text="Development"/>
                    <Peragraph styling="w-[303px] font-popiens text-4 text-headingcolor opacity-70" text="Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam ."/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home