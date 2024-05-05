import { React } from "react";
import e1 from "../assets/images/e1.gif";
import e2 from "../assets/images/e2.gif";
import "../assets/css/transaction.css";
import Layout from "../components/Layout";
import { Toaster, toast } from "react-hot-toast";
import { addExpense, addIncome } from "../service/api";
import { useState } from "react";

const Expense = () => {
  const [expense, setExpense] = useState({
    date: new Date(),
    expAmount: "",
    category: "",
  });
  const handleChange1 = (e) => {
    e.preventDefault();
    setExpense({ ...expense, [e.target.id]: e.target.value });
  };
  const handleSubmit1 = async (e) => {
    e.preventDefault();
    console.log("Expense before");
    try{
    const res = await addExpense(expense, localStorage.getItem("xuserId"));
    console.log("Expense after");
    if (res.data === "Added successfully" && res.status == "200") {
      console.log(res.data.category);
      toast.promise(
        new Promise((resolve) => {
          setTimeout(() => {
            resolve("Added successfully!");
          }, 1000);
        }),
        {
          position: "bottom-right",
          loading: "Adding...",
          success: "Added successfully!",
          error: "An error occurred while adding expense.",
        }
      );
    }}
    catch(er){
      toast.error('An error occcured while adding your finances :(')
    }
  };
  const [income, setIncome] = useState({
    incAmount: "",
    incCategory: "",
  });
  const handleChange2 = (e) => {
    e.preventDefault();
    setIncome({ ...income, [e.target.id]: e.target.value });
  };

  const handleSubmit2 = async (e) => {
    e.preventDefault();
    console.log("Income before");
    try{
    const res = await addIncome(income, localStorage.getItem("xuserId"));
    console.log("Income after");
    if (res.data === "Added successfully" && res.status == "200") {
      console.log(res.data.category);
      toast.promise(
        new Promise((resolve) => {
          setTimeout(() => {
            resolve("Added successfully!");
          }, 1000);
        }),
        {
          position: "bottom-right",
          loading: "Adding...",
          success: "Added successfully!",
          error: "An error occurred while adding expense.",
        }
      );
    }
  }
  catch(er)
  {
    toast.error('An error occcured while adding your finances :(')
  }
  };

  return (
    <>
      <Toaster />
      <Layout />
      <div class="whole">
        <div class="container2">
          <img src={e1} style={{ width: "13%", marginLeft: "45%" }} />
          <div class="text">Add Expense</div>
          <form onSubmit={handleSubmit1}>
            <div class="form-row">
              <div class="mb-3">
                <label for="expAmount" class="form-label">
                  Expense
                </label>
                <input
                  type="number"
                  class="form-control"
                  id="expAmount"
                  onChange={handleChange1}
                />
              </div>
              <br/>
              <div class="mb-3">
                <label for="category" class="form-label">
                  Category
                </label>
                <br />
                <select
                  class="form-select"
                  aria-label="Default select example"
                  onChange={handleChange1}
                  id="category"
                >
                  <option selected>Select</option>
                  <option value="Education">Education</option>
                  <option value="Rent">Rent</option>
                  <option value="Entertainment">Entertainment</option>
                  <option value="Food">Food</option>
                  <option value="Health">Health</option>
                  <option value="Other">Other</option>
                </select>
              </div>
            </div>
            <br />
            <div class="form-row submit-btn">
              <div class="input-data">
                <div class="inner">
                  <button id="sub" type="submit">
                    Add
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>

        {/*another container */}

        <div class="container3">
          <img src={e2} style={{ width: "13%", marginLeft: "45%" }} />
          <div class="text">Add Income</div>
          <form onSubmit={handleSubmit2}>
            <div class="form-row">
              <div class="mb-3">
                <label for="incAmount" class="form-label">
                  Income
                </label>
                <input
                  type="number"
                  class="form-control"
                  id="incAmount"
                  onChange={handleChange2}
                />
              </div>
              <br />
              <div class="mb-3">
                <label for="incCategory">Category</label>

                <select
                  class="form-select"
                  id="incCategory"
                  name="incCategory"
                  onChange={handleChange2}
                >
                  <option selected>Select</option>
                  <option value="Salary">Salary</option>
                  <option value="Rent">Rent</option>
                  <option value="Trade">Trade</option>
                  <option value="Bank">Bank</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              <br />
            </div>
            <div class="form-row submit-btn">
              <div class="input-data">
                <div class="inner">
                  <button id="sub" type="submit">
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Expense;
