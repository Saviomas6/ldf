import { Routes, Route } from "react-router-dom";
import Home from "../../../pages/Home";
import Dashboard from "../../../pages/Dashboard";
import NotFound from "../../components/routes/NotFound";
import { Paths } from "./types";
import Liquidity from "../../../pages/Liquidity";
import Borrow from "../../../pages/Borrow";
import ClaimReward from "../../../pages/ClaimReward";
import Lenders from "../../../pages/Lenders";
import Pool from "../../../pages/Pool";
import Stake from "../../../pages/Stake";
import Navbar from "../navbar/index";
import PoolDetails from "../../../pages/PoolDetails";
import Mint from "../modal/mint";
import ClaimLDF from "../modal/claimldf";
import Transfer from "../modal/transfer";
import MintTransfer from "../modal/minttransfer";
import Deposit from "../../../pages/Deposit";
import Borrowing from "../../../pages/Borrowing";

// const getRouteRenderWithAuth = (route: RouteDefinition, i: number) => {
//   return () => <route.component />;
// };

export interface RouteDefinition {
  path: string;
  component: any;
  routes?: RouteDefinition[];
  title?: string;
  protected?: boolean;
}

const NotFoundRoute: RouteDefinition = {
  path: "*",
  component: NotFound,
  protected: false,
  title: "",
};

export const routes: RouteDefinition[] = [
  {
    path: Paths.home,
    component: Home,
    protected: false,
    title: "Home",
  },
  {
    path: Paths.dashboard,
    component: Dashboard,
    protected: false,
    title: "Home",
  },
  {
    path: Paths.liquidity,
    component: Liquidity,
    protected: false,
    title: "Home",
  },
  {
    path: Paths.borrow,
    component: Borrow,
    protected: false,
    title: "Home",
  },
  {
    path: Paths.claimRewards,
    component: ClaimReward,
    protected: false,
    title: "Home",
  },
  {
    path: Paths.lenders,
    component: Lenders,
    protected: false,
    title: "Home",
  },
  {
    path: Paths.pool,
    component: Pool,
    protected: false,
    title: "Home",
  },
  {
    path: Paths.pooldetails,
    component: PoolDetails,
    protected: false,
    title: "Home",
  },
  {
    path: Paths.stake,
    component: Stake,
    protected: false,
    title: "Home",
  },
  {
    path: Paths.mint,
    component: MintTransfer,
    protected: false,
    title: "Mint",
  },
  {
    path: Paths.claimldf,
    component: ClaimLDF,
    protected: false,
    title: "ClaimLDF",
  },
  {
    path: Paths.deposit,
    component: Deposit,
    protected: false,
    title: "Deposit",
  },
  {
    path: Paths.borrowing,
    component: Borrowing,
    protected: false,
    title: "Borrowing",
  },
].concat(NotFoundRoute as any);

const RoutePath = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        {/* <Route path="" element={<Navigate replace={true} to={Paths.home} />} /> */}
        {routes.map((route, i) => {
          // const render = getRouteRenderWithAuth(route, i);
          // const rest = { render };
          return (
            <Route key={i} path={route.path} element={<route.component />} />
          );
        })}
      </Routes>
    </div>
  );
};
export default RoutePath;
