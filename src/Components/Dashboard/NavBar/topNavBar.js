export default function TopNavBar() {
  return (
    <div className="flex flex-row justify-between p-6">
      <div className="flex flex-row items-center ">
        <img
          className="w-[40px]"
          src="https://firebasestorage.googleapis.com/v0/b/inventorysmart-47ad6.appspot.com/o/Screenshot%202024-01-01%20211508.png?alt=media&token=996744f3-09c4-4a09-be59-d500594d1021"
        ></img>
        <h1>Inventory Smart</h1>
      </div>
      <div className="flex flex-row items-center gap-2">
        <img
          className="w-[30px] h-[30px] rounded-full"
          src="https://www.allprodad.com/wp-content/uploads/2021/03/05-12-21-happy-people.jpg"
        ></img>
        <p className="text-[15px] font-bold">Daniel Rivera</p>
      </div>
    </div>
  );
}
