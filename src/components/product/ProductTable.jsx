import { useState } from "react";
import { motion } from "framer-motion";
import { Edit, Search, Trash2 } from "lucide-react";

const PRODUCT_DATA = [
  {
    id: 1,
    name: "Wireless Earbuds",
    category: "Electronics",
    price: 59.99,
    stock: 143,
    sales: 1200,
  },
  {
    id: 2,
    name: "Leather Wallet",
    category: "Accessories",
    price: 39.99,
    stock: 89,
    sales: 800,
  },
  {
    id: 3,
    name: "Smart Watch",
    category: "Electronics",
    price: 199.99,
    stock: 56,
    sales: 650,
  },
  {
    id: 4,
    name: "Yoga Mat",
    category: "Fitness",
    price: 29.99,
    stock: 210,
    sales: 950,
  },
  {
    id: 5,
    name: "Coffee Maker",
    category: "Home",
    price: 79.99,
    stock: 78,
    sales: 720,
  },
];

function ProductTable() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredProducts, setFilteredProducts] = useState(PRODUCT_DATA);

  const handleSearch = (e) => {
    const term = e.target.value.toLowerCase();
    setSearchTerm(term);
    const filtered = PRODUCT_DATA.filter(
      (product) =>
        product.name.toLowerCase().includes(term) ||
        product.category.toLowerCase().includes(term)
    );
    setFilteredProducts(filtered);
  };

  return (
    <motion.div
      className="dark:bg-gray-800 bg-white bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 lg:col-span-2 border dark:border-gray-700 border-gray-200"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
    >
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold dark:text-gray-100 text-gray-900">
          Product List
        </h2>
        <div className="relative w-full sm:w-auto max-w-xs">
          <input
            type="text"
            placeholder="Search Produts..."
            className="dark:bg-gray-700 bg-gray-200 dark:text-white text-gray-900 placeholder-gray-400 rounded-lg pl-10 pr-4 py-2 focus:outline-none w-full focus:ring-2 focus:ring-blue-500 "
            onChange={handleSearch}
            value={searchTerm}
          />
          <Search className="absolute left-3 top-2.5 text-gray-400" size={20} />
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y dark:divide-gray-700 divide-gray-200 ">
          <thead className="">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium dark:text-gray-400 text-gray-500 uppercase tracking-wider">
                Name
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium dark:text-gray-400 text-gray-500 uppercase tracking-wider">
                Category
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium dark:text-gray-400 text-gray-500 uppercase tracking-wider">
                Price
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium dark:text-gray-400 text-gray-500 uppercase tracking-wider">
                Stock
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium dark:text-gray-400 text-gray-500 uppercase tracking-wider">
                Sales
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium dark:text-gray-400 text-gray-500 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="divide-y dark:divide-gray-700 divide-gray-200">
            {filteredProducts.map((product) => (
              <motion.tr
                key={product.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium dark:text-gray-100 text-gray-900 flex gap-3 items-center">
                  <img
                    src="https://p.turbosquid.com/ts-thumb/G1/i5huWs/fR/airpods_3rd_generation_00/jpg/1635334932/300x300/sharp_fit_q85/4cc2b86f4b63f4299122612d302a3eb24d856a67/airpods_3rd_generation_00.jpg"
                    alt="product image"
                    className="size-10 rounded-full"
                  />
                  {product.name}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm dark:text-gray-300 text-gray-400 ">
                  {product.category}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm dark:text-gray-300 text-gray-400 ">
                  {product.price.toFixed(2)}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm dark:text-gray-300 text-gray-400 ">
                  {product.stock}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm dark:text-gray-300 text-gray-400 ">
                  {product.sales}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm dark:text-gray-300 text-gray-400 ">
                  <button className="text-indigo-400 hover:text-indigo-300 mr-2">
                    <Edit size={20} />
                  </button>
                  <button className="text-red-400 hover:text-red-300">
                    <Trash2 size={20} />
                  </button>
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>
    </motion.div>
  );
}

export default ProductTable;
