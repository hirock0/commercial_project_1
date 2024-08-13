import Products from "@/components/homePage_Products/products/products"
interface Props{
  searchParams:object | any
}

const Home:React.FC<Props> = ({searchParams}) => {
  const searchdata = searchParams?.q || ""
  return (
    <main className=" bg-black pt-10">
      <div className=" flex justify-center items-center">
        <Products searchProducts = {searchdata}/>
      </div>
        
    </main>
  )
}

export default Home
