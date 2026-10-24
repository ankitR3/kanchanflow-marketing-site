import { Camera, MapPin, WifiOff } from "lucide-react";

/** A phone-shaped mockup of the field sales app, working offline. */
export function MobileAppMockup() {
  return (
    <div
      role="img"
      aria-label="The KanchanFlow mobile app logging a customer visit offline, with a photo of a sample part attached to a new RFQ that will sync when signal returns."
      className="mx-auto w-64 rounded-[2rem] border-[6px] border-graphite-800 bg-graphite-800 shadow-[0_24px_60px_-20px_rgb(0_0_0/0.45)] sm:w-72"
    >
      <div className="overflow-hidden rounded-[1.6rem] bg-steel-50 text-graphite-900">
        <div className="flex items-center justify-between bg-graphite-950 px-5 pt-3 pb-2 font-mono text-[10px] text-steel-50">
          <span>9:41</span>
          <span className="flex items-center gap-1 text-gold-300">
            <WifiOff aria-hidden="true" className="h-3 w-3" />
            Offline
          </span>
        </div>
        <div className="bg-graphite-950 px-5 pb-4 text-steel-50">
          <p className="text-[11px] text-steel-50/75">New visit</p>
          <p className="text-base font-bold">Satara Castings</p>
          <p className="mt-1 flex items-center gap-1 text-[11px] text-steel-50/75">
            <MapPin aria-hidden="true" className="h-3 w-3" />
            MIDC Satara, Plot B-14
          </p>
        </div>

        <div className="flex flex-col gap-3 p-4">
          <div className="rounded-sm border border-steel-200 bg-white p-3">
            <p className="text-[10px] font-semibold tracking-wide text-graphite-500 uppercase">
              Visit notes
            </p>
            <p className="mt-1 text-[12px] leading-snug">
              Needs gearbox covers in SG iron, 800 pcs per quarter. Wants pricing
              before their Friday review.
            </p>
          </div>

          <div className="rounded-sm border border-steel-200 bg-white p-3">
            <p className="text-[10px] font-semibold tracking-wide text-graphite-500 uppercase">
              RFQ attachments
            </p>
            <div className="mt-2 flex gap-2">
              <span className="h-14 w-14 rounded-sm bg-[linear-gradient(135deg,#7b828b,#363b42)]" />
              <span className="h-14 w-14 rounded-sm bg-[linear-gradient(135deg,#a0a6ae,#4a5058)]" />
              <span className="flex h-14 w-14 items-center justify-center rounded-sm border border-dashed border-steel-400 text-graphite-500">
                <Camera aria-hidden="true" className="h-4 w-4" />
              </span>
            </div>
          </div>

          <span className="rounded-sm bg-gold-500 py-2.5 text-center text-[13px] font-semibold text-graphite-950">
            Create RFQ
          </span>
          <p className="text-center font-mono text-[10px] text-graphite-500">
            2 items will sync when you&apos;re back online
          </p>
        </div>
      </div>
    </div>
  );
}
