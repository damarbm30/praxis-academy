import { useState } from "react";
import "./filter.css";

const Filter = () => {
  const datas = [
    { id: 1, name: "Banana" },
    { id: 2, name: "Apple" },
    { id: 3, name: "Orange" },
  ];
  const [list, setList] = useState(datas);

  const handleSearch = (event) => {
    if (event.target.value === "") {
      setList(datas);
      return;
    }

    const filteredList = list.filter(
      (item) => item.name.toString().toLowerCase().indexOf(event.target.value.toLowerCase()) !== -1
    );
    setList(filteredList);
  };

  return (
    <div className="filter">
      <form>
        <input type="text" onChange={handleSearch} />
      </form>
      <ul className="filter-list">
        {list?.map((item) => (
          <li className="filter-list__item" key={item.id}>
            {item.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Filter;
