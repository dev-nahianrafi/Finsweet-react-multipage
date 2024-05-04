import logo from "../../assets/images/logo.png"

const Navbar = () => {
  return (
    <>

      <nav className="bg-main py-8">
        <div className="max-w-container mx-auto">
          <div className="flex justify-between items-center">
            <div>
                <a href="#"><img src={logo} alt="logo" /></a>
            </div>
            <div className="flex gap-x-12 items-center">
              <div>
                <ul className="flex gap-x-8 items-center">
                  <li>
                    <a className=" text-sada font-popiens text-base font-medium capitalize" href="#">home</a>
                  </li>
                  <li>
                    <a className=" text-sada font-popiens text-base font-medium capitalize" href="#">About us</a>
                  </li>
                  <li>
                    <a className=" text-sada font-popiens text-base font-medium capitalize" href="#">Features</a>
                  </li>
                  <li>
                    <a className=" text-sada font-popiens text-base font-medium capitalize" href="#">Pricing</a>
                  </li>
                  <li>
                    <a className=" text-sada font-popiens text-base font-medium capitalize" href="#">FAQ</a>
                  </li>
                  <li>
                    <a className=" text-sada font-popiens text-base font-medium capitalize" href="#">Blog</a>
                  </li>
                </ul>
              </div>
              <div>
                <button className="py-4 px-12 border-2 rounded-br border-borderColor text-sada">Contact us</button>
              </div>
            </div>
          </div>
        </div>
      </nav>
    
    </>
  )
}

export default Navbar