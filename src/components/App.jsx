import { DatePicker } from "antd";
import React from "react";

import 'antd/dist/antd.css';
import TotalBalance from "./TotalBalance/TotalBalance";

const App = () => {
    return (
        <TotalBalance value={123456} />
    );
}

export default App;