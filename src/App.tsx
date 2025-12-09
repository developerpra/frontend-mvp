import { Suspense } from "react";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./app/routes/AppRoutes";
import Header from "./shared/components/Header";
import ErrorBoundary from "./shared/error/ErrorBoundary";
import ErrorLayout from "./layouts/ErrorLayout";
import Sidebar from "./shared/components/Sidebar";
import { Toaster } from "sonner";
import Loading from "./shared/components/Loading";

export default function App() {
  return (
    <BrowserRouter>
      <Header />

      <div className="lg:flex min-h-screen">
        <Sidebar />

        <main className="flex-1 bg-gray-50">
          <ErrorBoundary
            fallback={({ error }) => <ErrorLayout error={error} />}
          >
            <Suspense fallback={<Loading />}>
              <AppRoutes />
            </Suspense>
          </ErrorBoundary>
        </main>
      </div>
      <Toaster position="top-right" richColors />
    </BrowserRouter>
  );
}
