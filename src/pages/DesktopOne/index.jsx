import React from "react";

import { Button, Img, Input, Line, Text } from "components";

const DesktopOnePage = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-outfit items-center justify-start mx-auto w-full">
        <div className="bg-gray-50 flex flex-col md:gap-10 gap-24 items-center justify-end pt-[89px] rounded-[10px] w-full">
          <div className="md:h-[729px] h-[739px] max-w-[1388px] mx-auto md:px-5 relative w-full">
            <div className="absolute bg-gray-50 flex inset-y-[0] my-auto p-[121px] md:px-10 sm:px-5 right-[0] w-[52%] md:w-full">
              <div className="flex flex-col items-center justify-start m-auto py-[13px] rounded-[5px] w-[49%]">
                <div className="flex flex-col items-center justify-start mb-[34px] w-full">
                  <div className="bg-amber-A400 font-montserrat md:h-12 h-14 p-[3px] relative rounded-[18px] w-14">
                    <Text
                      className="absolute h-max inset-[0] justify-center m-auto sm:text-[35.35px] md:text-[37.35px] text-[39.35px] text-indigo-900 tracking-[0.39px] w-max"
                      size="txtMontserratRomanBlack3935"
                    >
                      A
                    </Text>
                    <div className="absolute bg-amber-A400 h-3 right-[14%] top-[20%] w-[29%]"></div>
                  </div>
                  <Text
                    className="mt-[9px] text-2xl md:text-[22px] text-center text-gray-900_e5 sm:text-xl"
                    size="txtOutfitSemiBold24"
                  >
                    Welcome Back!
                  </Text>
                  <Text
                    className="mt-2.5 text-center text-gray-900_e5 text-xs"
                    size="txtOutfitMedium12"
                  >
                    Login to your account
                  </Text>
                  <Line className="bg-blue_gray-900_33 h-px mt-[13px] w-full" />
                  <div className="flex flex-col font-outfit items-start justify-start mt-3.5 w-[87%] md:w-full">
                    <Text
                      className="text-gray-900_e5 text-xs"
                      size="txtOutfitMedium12"
                    >
                      Enter Your Email
                    </Text>
                    <Input
                      name="rectangle194"
                      placeholder=""
                      className="p-0 w-full"
                      wrapClassName="border border-black-900_26 border-solid flex h-[46px] mt-[9px] w-full"
                    ></Input>
                    <Text
                      className="mt-[15px] text-gray-900_e5 text-xs"
                      size="txtOutfitMedium12"
                    >
                      Enter Your Password
                    </Text>
                    <Input
                      name="rectangle195"
                      placeholder=""
                      className="p-0 w-full"
                      wrapClassName="border border-black-900_26 border-solid flex h-[46px] mt-[9px] w-full"
                      color="white_A700_cc_01"
                    ></Input>
                    <div className="flex flex-row items-center justify-start mt-[9px] w-full">
                      <div className="border border-deep_purple-100 border-solid h-[15px] rounded-sm w-[15px]"></div>
                      <Text
                        className="ml-[5px] text-gray-900_e5 text-xs"
                        size="txtOutfitMedium12"
                      >
                        Remember Me
                      </Text>
                      <Text
                        className="ml-[105px] text-center text-indigo-800 text-xs"
                        size="txtOutfitMedium12Indigo800"
                      >
                        Recover Password
                      </Text>
                    </div>
                    <Button className="cursor-pointer font-bold leading-[normal] min-w-[302px] mt-[15px] text-base text-center tracking-[0.16px]">
                      Login
                    </Button>
                    <Img
                      className="h-[11px] md:ml-[0] ml-[50px] mt-[19px]"
                      src="images/img_donthaveanaccount.svg"
                      alt="donthaveanaccou"
                    />
                  </div>
                </div>
              </div>
              <Img
                className="h-[49px] mb-[196px] ml-[-14px] mr-[29px] mt-auto w-[49px] z-[1]"
                src="images/img_wpfcursor.svg"
                alt="wpfcursor"
              />
            </div>
            <Img
              className="absolute h-[729px] inset-y-[0] left-[0] my-auto object-cover rounded-[72px] w-[729px]"
              src="images/img_fireflygesture.png"
              alt="fireflygesture"
            />
          </div>
          <div className="bg-gray-50 border-gray-900_cc border-solid border-t flex flex-col items-center justify-end p-9 sm:px-5 w-full">
            <div className="flex flex-col items-center justify-start mt-1 md:px-5">
              <Text
                className="text-blue_gray-900_b2 text-lg tracking-[0.18px]"
                size="txtOutfitRegular18"
              >
                © 2023 Gesture. All Rights Reserved. Designed, Built &
                Maintained by Tumazir
              </Text>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DesktopOnePage;
