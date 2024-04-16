import { toast } from "react-hot-toast";

function ToasterMsg(props: any) {
  let toasterMsgCls =
    "flex flex-row items-center justify-between w-96 bg-green-900 px-4 py-6 text-white shadow-2xl hover:shadow-none transform-gpu translate-y-0 hover:translate-y-1 rounded-xl relative transition-all duration-500 ease-in-out";
  toasterMsgCls = props.message.includes("Error")
    ? toasterMsgCls.replace("bg-green-900", "bg-red-900")
    : toasterMsgCls.replace("bg-red-900", "bg-green-900");
  return (
    <div className={toasterMsgCls}>
      <h1 className="text-base text-gray-200 font-semibold leading-none tracking-wider">
        {props.message}
      </h1>
    </div>
  );
}

const getToasterMsg = (message: string) => {
  return toast.custom((t) => <ToasterMsg message={message} />, {
    id: "unique-notification",
    position: "top-right",
  });
};

export default getToasterMsg;
