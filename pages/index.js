import HomePage from "../components/template/HomePage.js";
import Customer from "../models/Customer.js";
import connectDB from "../utils/connectDB.js";


function Index({customers}) {
  return (
    <>
    <HomePage customers={customers}/>
    </>
  )
}

export default Index;

export async function getServerSideProps(){
  try {
    await connectDB();
    const customers = await Customer.find();
    return{
      props:{
        customers: JSON.parse(JSON.stringify(customers)),
      }
    }
  } catch (error) {
    return{
      notFound: true,
    }
  }
}
