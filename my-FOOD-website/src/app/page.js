import SearchBar from "@/components/Searchbar";

export default function Home() {
  return (
    <main className="flex my-10 mx-8 gap-4"> 
     <div className="w-4/6 h-24 bg-slate-400 rounded-lg ">
      <div className="">
        <span>Hi Edet</span>
        <h1>What would you like to eat</h1>
      </div>

      <SearchBar className='mx-20'/>
     </div>
     <div className="w-2/6 h-24 bg-black rounded-lg">
      <h2>Your Order</h2>
     </div>
    </main>
  );
}
