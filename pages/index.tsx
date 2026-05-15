import React, { useCallback, useEffect, useState } from "react";
import Head from "next/head";
import { Analytics } from "@vercel/analytics/react";
import type { Page } from "@/Components/portfolio-data";
import Nav from "@/Components/Nav";
import HomeView from "@/Components/HomeView";
import WorkView from "@/Components/WorkView";
import AboutView from "@/Components/AboutView";
import ContactView from "@/Components/ContactView";

const Portfolio: React.FC = () => {
  const [page, setPageState] = useState<Page>("home");

  useEffect(() => {
    window.history.scrollRestoration = "manual";
  }, []);

  const setPage = useCallback((p: Page) => {
    setPageState(p);
    window.scrollTo({ top: 0, behavior: "auto" });
  }, []);

  return (
    <>
      <Head>
        <title>Marmik Patel — Software Developer</title>
        <meta
          name="description"
          content="Marmik Patel — software developer obsessed with shipping. Solana protocol engineering, latency-bound matching engines, full-stack systems."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Analytics />

      <div className="eb-app">
        <div className="eb-shell">
          <Nav page={page} setPage={setPage} />
          <main className="eb-body">
            {page === "home" && <HomeView setPage={setPage} />}
            {page === "work" && <WorkView />}
            {page === "about" && <AboutView />}
            {page === "contact" && <ContactView />}
          </main>
        </div>
      </div>
    </>
  );
};

export default Portfolio;
