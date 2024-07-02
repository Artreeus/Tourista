import { useLoaderData } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import CoffeeCard from "./../CoffeeCard";
import { AuthContext } from "../../providers/AuthProvider";

function MyList() {
  const { user } = useContext(AuthContext);
  const loadedCoffees = useLoaderData();
  const [coffees, setCoffees] = useState(loadedCoffees);
  const [filterData, setFilterData] = useState([]);

    useEffect(() => {
      const filterdata = coffees.filter(coffee=>coffee?.user_email===user.email);
      setFilterData(filterdata);
  }, [coffees.length]);


  return (
    <div className="m-20 grid">
      <div className="grid-cols-1  gap-4">
     
          <CoffeeCard
            key={filterData.length}
            coffee={filterData}
            coffees={filterData}
            setCoffees={setFilterData}
          ></CoffeeCard>
        
      </div>
    </div>
  );
}

export default MyList;
