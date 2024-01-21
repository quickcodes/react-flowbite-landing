import { createBrowserRouter } from "react-router-dom";
import publicRoutes from "@/routes/PublicRoutes";

const router = createBrowserRouter([...publicRoutes]);

export default router;