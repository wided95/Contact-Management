import React from 'react'
import { Input } from "antd";
import { SearchOutlined} from "@ant-design/icons";
const Search = ({settext}) => {
  return (
    <div className="filter">
        <div className="search">
        <Input placeholder="Search Contact..." style={{width:200,marginLeft:"70px"}} onChange={(e)=>settext(e.target.value)} prefix={<SearchOutlined />}  />
                </div>
    </div>
  )
}

export default Search