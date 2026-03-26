import {
  Link,
  Outlet,
  RouterProvider,
  createHashHistory,
  createRootRoute,
  createRoute,
  createRouter,
} from "@tanstack/react-router";
import Footer from "./components/Footer";
import Header from "./components/Header";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Manufacturing from "./pages/Manufacturing";
import Products from "./pages/Products";

function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/918179176699"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 rounded-full shadow-lg hover:scale-110 transition-transform"
      style={{ backgroundColor: "#25D366" }}
      aria-label="Chat on WhatsApp"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 32 32"
        width="32"
        height="32"
        fill="white"
        role="img"
        aria-label="WhatsApp"
      >
        <title>WhatsApp</title>
        <path d="M16 2C8.268 2 2 8.268 2 16c0 2.492.661 4.833 1.816 6.855L2 30l7.347-1.793A13.94 13.94 0 0 0 16 30c7.732 0 14-6.268 14-14S23.732 2 16 2zm0 25.6a11.56 11.56 0 0 1-5.89-1.607l-.422-.25-4.36 1.063 1.095-4.25-.276-.436A11.56 11.56 0 0 1 4.4 16C4.4 9.59 9.59 4.4 16 4.4S27.6 9.59 27.6 16 22.41 27.6 16 27.6zm6.336-8.664c-.347-.174-2.053-1.013-2.373-1.128-.32-.116-.553-.174-.786.174-.232.347-.9 1.128-1.104 1.36-.203.232-.406.261-.753.087-.347-.174-1.464-.54-2.788-1.72-1.03-.917-1.726-2.05-1.929-2.397-.203-.347-.022-.534.153-.707.157-.155.347-.406.52-.609.174-.203.232-.347.347-.58.116-.232.058-.435-.029-.609-.087-.174-.786-1.896-1.077-2.597-.283-.682-.571-.59-.786-.6l-.668-.012c-.232 0-.609.087-.928.435-.32.347-1.22 1.193-1.22 2.91s1.249 3.378 1.423 3.61c.174.232 2.458 3.754 5.956 5.265.833.36 1.482.575 1.989.736.835.266 1.595.228 2.196.138.67-.1 2.053-.84 2.344-1.652.29-.812.29-1.508.203-1.652-.087-.145-.32-.232-.668-.406z" />
      </svg>
    </a>
  );
}

function RootLayout() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

const rootRoute = createRootRoute({
  component: RootLayout,
  notFoundComponent: () => (
    <div className="text-center py-32">
      <h1 className="text-3xl font-bold text-navy mb-4">Page Not Found</h1>
      <Link to="/" className="text-solar-yellow underline">
        Go Home
      </Link>
    </div>
  ),
});

const homeRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: Home,
});
const aboutRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/about",
  component: About,
});
const productsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/products",
  component: Products,
});
const manufacturingRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/manufacturing",
  component: Manufacturing,
});
const contactRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/contact",
  component: Contact,
});

const routeTree = rootRoute.addChildren([
  homeRoute,
  aboutRoute,
  productsRoute,
  manufacturingRoute,
  contactRoute,
]);

const hashHistory = createHashHistory();
const router = createRouter({ routeTree, history: hashHistory });

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

export default function App() {
  return <RouterProvider router={router} />;
}
