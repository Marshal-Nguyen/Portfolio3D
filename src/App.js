import React, { useState, useEffect, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import styles from "./App.css";
// import Layout from "./Page/Layout/Layout";
import Layout from "../src/Layout/Layout";
import Loader from "./components/loader/Loader";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Giả lập quá trình tải dữ liệu
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); // Điều chỉnh thời gian theo nhu cầu

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={styles.App}>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Layout />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
