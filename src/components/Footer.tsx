const Footer = () => {
  return (
    <>
      <div className=" bg-zinc-400">
        <div className="max-w-2xl mx-auto text-stone-800 py-10">
          <div className="text-center">
            <h3 className="text-3xl mb-3"> Download our Weather App </h3>
            <p> Stay updated. All day, every day. </p>
            <div className="flex justify-center my-10">
              <div className="flex items-center border border-stone-800 w-auto rounded-lg px-4 py-2 mx-2">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/888/888857.png"
                  className="w-7 md:w-8"
                />
                <div className="text-left text-stone-800 ml-3">
                  <p className="text-xs">Download on </p>
                  <p className="text-sm md:text-base"> Google Play Store </p>
                </div>
              </div>
              <div className="flex items-center border border-stone-800 w-auto rounded-lg px-4 py-2 mx-2">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/888/888841.png"
                  className="w-7 md:w-8"
                />
                <div className="text-left text-stone-800 ml-3">
                  <p className="text-xs">Download on </p>
                  <p className="text-sm md:text-base"> Apple Store </p>
                </div>
              </div>
            </div>
          </div>
          <div className="text-stone-800 mt-5 flex flex-col md:flex-row md:justify-between items-center text-sm">
            <p className="order-2 md:order-1 mt-8 md:mt-0">
              {" "}
              &copy; Gokul's Weather App, 2021.{" "}
            </p>
            <div className="order-1 md:order-2 text-stone-800">
              <span className="px-2 text-stone-800">About us</span>
              <span className="px-2 border-l">Contact us</span>
              <span className="px-2 border-l">Privacy Policy</span>
            </div>
          </div>
        </div>
      </div>
    </>

    
  );
};

export default Footer;
