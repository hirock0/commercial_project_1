import Products from "@/components/homePage_Products/products/products"
interface Props{
  searchParams:object | any
}

const Home:React.FC<Props> = ({searchParams}) => {
  const searchdata = searchParams?.q || ""
  return (
    <main className=" bg-black pb-10 pt-10">
      <div id="main" className=" flex justify-center items-center">
        <Products searchProducts = {searchdata}/>
      </div>
        
    </main>
  )
}

export default Home
