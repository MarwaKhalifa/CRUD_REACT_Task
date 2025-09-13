import { useState } from "react";
export default function App() {

  const [phones, setPhones] = useState([
    { name: 'iphoneX', price: 2054, qty: 32 },
    { name: 'iphone11', price: 254, qty: 12 },
    { name: 'iphone12', price: 6754, qty: 23 },
    { name: 'iphone13', price: 2154, qty: 21 },
    { name: 'iphone14', price: 2554, qty: 52 },
  ]);
  const addNewPhone = () => {
    let newPhoneName = prompt("phone name");
    let newPhonePrice = +prompt("phone Price");
    let newPhoneQty = +prompt("phone Quantity");
    let newObj =
    {
      name: newPhoneName,
      price: newPhonePrice,
      qty: newPhoneQty

    };
    let copy = [...phones]
    copy.push(newObj)
    setPhones(copy)
  }
  const updatePhone = (index) => {
    let nameToEdit = prompt('Enter edited name');
    let priceToEdit = +prompt('Enter edited price');
    let qtyToEdit = prompt('Enter edited quantity');
    if (!nameToEdit || isNaN(priceToEdit) || priceToEdit <= 0 || isNaN(qtyToEdit) || qtyToEdit < 0) {
      alert('You must a valid Data to update')
    }
    else {

      let copy = [...phones];
      copy[index] = {
        name: nameToEdit,
        price: priceToEdit,
        qty: qtyToEdit
      };
      setPhones(copy);
    }
  }
  const deletePhone = (index) => {
    let copy = [...phones];
    copy.splice(index, 1);
    setPhones(copy);
  }
  return (
    <div className="p-5">

      <table className=" table">
        <thead>
          <td>#</td>
          <td>Name</td>
          <td>Price</td>
          <td>Qty</td>
          <td>Total Price</td>
          <td>
            Action
          </td>
        </thead>
        <tbody>
          {
            phones.map((el, index) => {
              return (
                <tr>
                  <td>{index + 1}</td>
                  <td>{el.name}</td>
                  <td>{el.price}</td>
                  <td>{el.qty}</td>
                  <td>{el.price * el.qty}</td>
                  <td className="flex gap-2">
                    <button className="btn btn-warning" onClick={() => { updatePhone(index) }}>Edit</button>
                    <button className="btn btn-error" onClick={() => { deletePhone(index) }}>Delete</button>
                  </td>
                </tr>
              )
            })
          }
        </tbody>

      </table >
      <button className="mt-5 text-center btn btn-success " onClick={() => {
        addNewPhone()
      }}>Add New Phone</button>
    </div>)
}
