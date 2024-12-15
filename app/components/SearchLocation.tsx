// "use client";

// import { Input } from "antd";
// import { SearchOutlined } from "@ant-design/icons";
// import { motion } from "framer-motion";

// interface SearchLocationProps {
//   onSearch: (value: string) => void;
// }

// export default function SearchLocation({ onSearch }: SearchLocationProps) {
//   return (
//     <motion.div
//       initial={{ opacity: 0, y: -20 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.5 }}
//       className="w-full max-w-md mx-auto mb-8"
//     >
//       <Input
//         size="large"
//         placeholder="Search for a location..."
//         prefix={<SearchOutlined />}
//         onPressEnter={(e) => onSearch((e.target as HTMLInputElement).value)}
//         className="rounded-full shadow-lg"
//       />
//     </motion.div>
//   );
// }

"use client";

import { Select, Input } from "antd";
import { useState } from "react";
import { SearchOutlined } from "@ant-design/icons";

interface SearchLocationProps {
  onSearch: (value: string) => void;
  suggestions: string[];
}

export default function SearchLocation({ onSearch, suggestions }: SearchLocationProps) {
  const [searchValue, setSearchValue] = useState("");

  const handleSearch = (value: string) => {
    setSearchValue(value);
    onSearch(value);
  };

  const handleSelect = (value: string) => {
    setSearchValue(value);
    onSearch(value);
  };

  return (
    <div className="w-full max-w-md mx-auto">
      <Select
        showSearch
        value={searchValue || undefined}
        placeholder="Search for a location..."
        onSearch={handleSearch}
        onChange={handleSelect}
        options={suggestions.map((city) => ({
          value: city,
          label: city,
        }))}
        size="large"
        style={{ width: "100%" }}
        suffixIcon={<SearchOutlined />}
        className="shadow-lg rounded-full"
      />
    </div>
  );
}

