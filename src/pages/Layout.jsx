import TopNav from "../components/TopNav/TopNav";

export default function Layout({ children }) {
  return (
    <div className="layout">
      <TopNav />
      <main>{children}</main>
    </div>
  );
}
