import { Footer } from "flowbite-react";

export function CallToAction() {
  const heading = {
    fontsize: "70px",
    color: "orange",
  };

  const logo = {};

  return (
    <Footer container={true}>
      <div className="w-full">
        <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
          <div>
            <Footer.Brand
              href="#"
              src="/fpg-logo.png"
              alt="FPG Logo"
              name="FPG"
            />
            <Footer.Title title="First Pavilion Technology Sdn Bhd" />
          </div>
          <div className="grid grid-cols-2 gap-8  sm:mt-4 sm:grid-cols-3 sm:gap-6">
            <div>
              <Footer.Title title="Solutions" />
              <Footer.LinkGroup col={true}>
                <Footer.Link href="#">Business Productivity</Footer.Link>
                <Footer.Link href="#">IT Solution</Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Services" />
              <Footer.LinkGroup col={true}>
                <Footer.Link href="#">Project Management</Footer.Link>
                <Footer.Link href="#">System Integration Provider</Footer.Link>
                <Footer.Link href="#">Software Development</Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Other Services" />
              <Footer.LinkGroup col={true}>
                <Footer.Link href="#">Data Warehouse and EIS</Footer.Link>
                <Footer.Link href="#">Document Image Processing</Footer.Link>
                <Footer.Link href="#">Internet Services</Footer.Link>
              </Footer.LinkGroup>
            </div>
          </div>
        </div>
        <Footer.Divider />
        <div className="w-full sm:flex sm:items-center sm:justify-between">
          <Footer.Copyright
            href="#"
            by="All Rights Reserved First Pavilion Technology"
            year={2022}
          />
          <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
            {/* <Footer.Icon href="#" icon={BsFacebook} />
            <Footer.Icon href="#" icon={BsInstagram} />
            <Footer.Icon href="#" icon={BsTwitter} />
            <Footer.Icon href="#" icon={BsGithub} />
            <Footer.Icon href="#" icon={BsDribbble} /> */}
          </div>
        </div>
      </div>
    </Footer>
  );
}
