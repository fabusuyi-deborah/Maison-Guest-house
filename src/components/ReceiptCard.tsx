import { receiptData } from "../types"
import barcodeImage from "../assets/images/icon-barcode.svg"

const ReceiptCard = () => {
  return (
    <div className="overflow-hidden rounded-3xl bg-neutral-50 p-6 shadow-xl md:h-108 md:p-8">
      <div className="flex items-start justify-between">
        <p className="font-dm-mono text-xs uppercase tracking-widest text-neutral-500">
          Receipt
        </p>

        <div className="text-right">
          <p className="font-dm-mono text-xs text-neutral-500">
            № {receiptData.receiptNumberLine1}
          </p>

          <p className="font-dm-mono text-xs text-neutral-500">
            {receiptData.receiptNumberLine2}
          </p>
        </div>
      </div>

      <h3 className="font-fraunces text-2xl text-neutral-900">
        Your stay
      </h3>

      <div className="mt-6 flex justify-between">
        <div>
          <p className="font-dm-mono text-xs uppercase tracking-widest text-neutral-500">
            Check in
          </p>

          <p className="mt-1 font-fraunces text-3xl text-neutral-900">
            {receiptData.checkIn.date}
          </p>

          <p className="mt-1 font-dm-sans text-sm text-neutral-500">
            {receiptData.checkIn.day} · {receiptData.checkIn.time}
          </p>
        </div>

        <div className="text-right">
          <p className="font-dm-mono text-xs uppercase tracking-widest text-neutral-500">
            Check out
          </p>

          <p className="mt-1 font-fraunces text-3xl text-neutral-900">
            {receiptData.checkOut.date}
          </p>

          <p className="mt-1 font-dm-sans text-sm text-neutral-500">
            {receiptData.checkOut.day} · {receiptData.checkOut.time}
          </p>
        </div>
      </div>

      <div className="mt-6 space-y-2">
        {receiptData.lineItems.map((item) => (
          <div key={item.label} className="flex justify-between">
            <p className="font-dm-sans text-sm text-neutral-700">
              {item.label}
            </p>

            <p className="font-dm-mono text-sm text-neutral-700">
              {item.price}
            </p>
          </div>
        ))}
      </div>

      <hr className="mt-4 border-t border-dashed border-neutral-300" />

      <div className="mt-4 flex items-center justify-between">
        <p className="font-dm-mono text-xs uppercase tracking-widest text-neutral-900">
          Total paid
        </p>

        <p className="font-fraunces text-2xl text-neutral-900">
          {receiptData.total}
        </p>
      </div>

      <div className="mt-6 flex items-center justify-between">
        <p className="font-dm-mono text-xs uppercase tracking-widest text-neutral-400">
          Paid · {receiptData.paymentMethod} · {receiptData.currency}
        </p>

        <img src={barcodeImage} alt="Barcode" className="h-8" />
      </div>
    </div>
  )
}

export default ReceiptCard