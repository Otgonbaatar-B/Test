"use client";
import React, { useRef, useState } from "react";
import { DeleteIcon, EditIcon } from "../icons/Icons";
import Dialog from "../Dialog/Dialog";

const ItemList = () => {
  const [notification, setNotification] = useState("");
  const BACKEND_ENDPOINT = "http://localhost:9999/item-register";

  const dialogRef = useRef(null);

  const handleShowDialog = () => {
    dialogRef.current.showModal();
  };

  const handleCloseDialog = () => {
    dialogRef.current.close();
  };

  const handleOnSubmit = async (event) => {
    event.preventDefault();

    const itemData = {
      itemName: event.target.itemName.value,
      itemCategory: event.target.itemCategory.value,
      itemPrice: event.target.itemPrice.value,
    };

    const option = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(itemData),
    };

    const response = await fetch(BACKEND_ENDPOINT, option);
    const data = await response.json();
    if (data.success) {
      navigator.clipboard.writeText(data).then(
        () => setNotification("Амжилттай хадгалагдлаа"),
        (err) => setNotification("Хадгалхад алдаа гарлаа: " + err)
      );

      setTimeout(() => setNotification(""), 3000);
    }

    console.log(data);
  };

  return (
    <div className="flex col flex-wrap w-[1264px] h-[1000px] mt-10 border p-6 gap-5">
      <div className="flex justify-between w-full">
        <h1 className="text-black text-2xl font-bold">Барааны жагсаалт</h1>
        <button
          className="bg-green-400 p-2 rounded-lg text-white"
          onClick={handleShowDialog}
        >
          Бараа нэмэх
        </button>
      </div>
      <form action="" onSubmit={handleOnSubmit}>
        <Dialog dialogRef={dialogRef} handleCloseDialog={handleCloseDialog} />
      </form>

      <div className="flex justify-start items-start w-full h-full gap-14">
        <div className="flex w-[364px] h-[140px] justify-between border rounded-2xl shadow-md p-5">
          <div className="flex flex-col w-auto justify-between">
            <h1 className="text-[#121316] text-sm font-normal">Барааны нэр:</h1>
            <h1 className="text-[#121316] text-sm font-normal">
              Барааны ангилал:
            </h1>
            <h1 className="text-[#121316] text-sm font-normal">Үнэ:</h1>
          </div>
          <div className="flex items-start text-center w-auto h-auto gap-3">
            <button>
              <DeleteIcon />
            </button>
            <button>
              <EditIcon />
            </button>
          </div>
        </div>
      </div>
      {notification && (
        <div className="fixed bottom-4 right-4 bg-gray-800 text-white p-3 rounded shadow-lg">
          {notification}
        </div>
      )}
    </div>
  );
};

export default ItemList;
