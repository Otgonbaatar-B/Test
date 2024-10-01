const { CloseIcon } = require("../icons/Icons");

const Dialog = ({ dialogRef, handleCloseDialog }) => {
  return (
    <dialog ref={dialogRef} className="w-[587px] h-[470px] rounded-2xl">
      <div className="flex justify-between text-center items-center w-full border-b p-4">
        <h1></h1>
        <h1 className="text-xl font-semibold">Бараа үүсгэх</h1>
        <button onClick={handleCloseDialog}>
          <CloseIcon />
        </button>
      </div>
      <div className="flex flex-col p-4 gap-4">
        <div className="flex flex-col w-full h-auto gap-2">
          Барааны нэр
          <input
            className="rounded-lg h-[56px] p-2 outline-none bg-[#E9EAEC]"
            type="text"
            name="itemName" // Updated name attribute
            id=""
            placeholder="Нэр"
          />
        </div>
        <div className="flex flex-col w-full h-auto gap-2">
          Барааны ангилал
          <select
            className="rounded-lg h-[56px] p-2 outline-none bg-[#E9EAEC]"
            name="itemCategory" // Updated name attribute
          >
            <option value="" selected></option>
            <option value="shirt">Цамц</option>
            <option value="pants">Өмд</option>
            <option value="outerwear">Гадуур хувцас</option>
            <option value="shoes">Гутал</option>
          </select>
        </div>
        <div className="flex flex-col w-full h-auto gap-2">
          Үнэ
          <input
            className="rounded-lg h-[56px] p-2 outline-none bg-[#E9EAEC]"
            type="number" // Changed type to "number"
            name="itemPrice" // Updated name attribute
            id=""
            placeholder="0₮"
          />
        </div>
      </div>
      <div className="flex w-full h-auto border-t p-4">
        <div className="flex justify-end w-full h-full gap-2">
          <button
            onClick={handleCloseDialog}
            className="rounded px-4 py-[10px] bg-[#FF4433] text-white"
          >
            Буцах
          </button>
          <button
            type="submit"
            className="bg-[#393939] text-white rounded px-4 py-[10px]"
          >
            Үүсгэх
          </button>
        </div>
      </div>
    </dialog>
  );
};

export default Dialog;
