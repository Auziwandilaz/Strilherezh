"use client"

import "./globals.css";
// importing components from react-router-dom package
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate,
} from "react-router-dom";

import "./globals.css";
import HistoryPage from "./ui/components/historyPage/HistoryPage";
import AllProduct from "./ui/components/allProducts/AllProducts";
import Home from "./page";

function App() {
    return (
        <html>
            <body>
                <Router>
                    <Routes>
                        <Route
                            exact
                            path="/" //route to homepage
                            element={<Home />}
                        />
                        <Route
                            exact 
                            path="/Home"
                            element={<Home />}
                        />
                        <Route
                            path="/allproducts" //route to all products page
                            element={<AllProduct />}
                        />
                        <Route
                            path="/history" //route to history page
                            element={<HistoryPage />}
                        />
                    </Routes>
                </Router>
            </body>
        </html>
    );
}

export default App;