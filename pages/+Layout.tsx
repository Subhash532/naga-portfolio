import "./Layout.css";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ minHeight: "100vh" }}>
      <main style={{ maxWidth: 1100, margin: "0 auto", padding: "20px" }}>
        {children}
      </main>
    </div>
  );
}

