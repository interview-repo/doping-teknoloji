import { AlertCircleIcon } from "../icons";

export default function ClosePopup({ onClose }: { onClose: () => void }) {
  return (
    <>
      <div className="w-[440px] h-[317px] absolute top-56 left-1/2 transform -translate-x-1/2 -translate-y-1/2 shadow-2xl shadow-gray-400 z-10">
        <div className="fixed w-[442px] h-[317px] top-0 left-0">
          <div className="relative w-[440px] h-[317px] bg-white rounded-[15px]">
            <div className="absolute w-[386px] h-[117px] top-[20px] left-[34px]">
              <div className="absolute w-[374px] h-[97px] top-[20px] left-0">
                <div className="absolute h-[32px] top-[65px] left-0 [font-family:'Manrope-ExtraBold',Helvetica] font-extrabold text-[#2c3e50] text-[24px] text-center tracking-[0] leading-[32px] whitespace-nowrap">
                  Ayrılmak istediğine emin misin?
                </div>
                <AlertCircleIcon className="!absolute !w-[50px] !h-[50px] !top-0 !left-[161px]" />
              </div>
            </div>
            <div className="absolute w-[380px] h-[56px] top-[241px] left-[30px]">
              <button
                className="left-0 absolute w-[182px] h-[56px] top-0 all-[unset] box-border"
                onClick={onClose}
              >
                <div className="relative w-[180px] h-[56px] bg-[#edf2f4] rounded-[10px]">
                  <div className="absolute h-[22px] top-[17px] left-[62px] [font-family:'Manrope-ExtraBold',Helvetica] font-extrabold text-[#2c3e50] text-[16px] text-center tracking-[0] leading-[normal]">
                    Vazgeç
                  </div>
                </div>
              </button>
              <button
                className="left-[200px] absolute w-[182px] h-[56px] top-0 all-[unset] box-border"
                onClick={onClose}
              >
                <div className="relative w-[180px] h-[56px] rounded-[10px] [background:linear-gradient(180deg,rgb(248,80,80)_0%,rgb(222.06,71.25,71.25)_100%)]">
                  <div className="absolute h-[22px] top-[17px] left-[46px] [font-family:'Manrope-ExtraBold',Helvetica] font-extrabold text-white text-[16px] text-center tracking-[0] leading-[normal]">
                    Testten Çık
                  </div>
                </div>
              </button>
            </div>
            <p className="absolute w-[360px] top-[158px] left-[40px] [font-family:'Manrope-Regular',Helvetica] font-normal text-[#2c3e50] text-[16px] text-center tracking-[0] leading-[24px]">
              Testi yarıda bırakıyorsun. İstediğin zaman kaldığın sorudan devam
              edebilirsin.
            </p>
          </div>
        </div>
      </div>
      <div className="fixed w-full h-full bg-black/60 inset-y-0 inset-x-0 z-0"></div>
    </>
  );
}
