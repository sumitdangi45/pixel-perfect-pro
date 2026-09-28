import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowRight, BarChart3, CalendarDays, Check, Crown, FileText, Headphones, Layers3, Menu, Monitor, ShieldCheck, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Pricing Plans | Anni Web Solutions" },
      { name: "description", content: "Clear monthly and yearly website plans for startups, growing companies, and enterprises." },
      { property: "og:title", content: "Transparent Pricing | Anni Web Solutions" },
      { property: "og:description", content: "Choose a flexible website, automation, and support plan for your business." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

type Billing = "monthly" | "yearly";
type Currency = "inr" | "usd";

const plans = [
  { name: "BASIC PLAN", caption: "Get Started Online", monthly: 9999, icon: Monitor, intro: "Best for small businesses, startups & professionals who need a strong online presence.", features: ["Custom Website (Up to 5 Pages)", "Mobile Responsive Design", "Basic SEO Setup", "Contact Form & WhatsApp Integration", "1 Month Support"], cta: "Get Started" },
  { name: "STANDARD PLAN", caption: "Automate & Grow", monthly: 24999, icon: Layers3, intro: "Best for growing businesses that want to automate operations and reach more customers.", features: ["Everything in Basic Plan", "Web Application / Custom Features", "AI & Automation Integration", "Advanced SEO & Analytics", "3 Months Support"], cta: "Choose Standard", popular: true },
  { name: "PREMIUM PLAN", caption: "Full Business Solution", monthly: 49999, icon: Crown, intro: "Best for enterprises that need a complete digital solution with AI, automation and dedicated support.", features: ["Everything in Standard Plan", "Custom Software / SaaS Development", "AI Agents & Advanced Automation", "Priority Support & Maintenance", "Dedicated Account Manager"], cta: "Get Premium", premium: true },
];

const benefits = [
  { icon: Headphones, title: "Need a Custom Plan?", text: "Every business is unique. Tell us your requirements and we’ll prepare a personalized quote." },
  { icon: FileText, title: "No Hidden Fees", text: "Transparent pricing always." },
  { icon: CalendarDays, title: "Flexible Plans", text: "Monthly or yearly options." },
  { icon: ShieldCheck, title: "Ongoing Support", text: "We’re with you even after launch." },
];

function Index() {
  const [billing, setBilling] = useState<Billing>("monthly");
  const [currency, setCurrency] = useState<Currency>("inr");
  const [menuOpen, setMenuOpen] = useState(false);

  const displayPrice = (price: number) => {
    const billedPrice = billing === "yearly" ? Math.round(price * 10 / 12) : price;
    if (currency === "usd") return `$${Math.round(billedPrice / 83).toLocaleString("en-US")}`;
    return `₹${billedPrice.toLocaleString("en-IN")}`;
  };

  const navItems = ["Home", "About", "Services", "Projects", "Why Us", "Blog", "Contact"];

  return (
    <main className="page-glow min-h-screen overflow-hidden bg-background text-foreground">
      <header className="border-b border-line bg-background/80 backdrop-blur-sm">
        <div className="mx-auto grid h-[78px] max-w-[1408px] grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 lg:grid-cols-[230px_1fr_230px] lg:px-16">
          <a href="#home" className="flex min-w-0 items-center gap-3" aria-label="Anni home">
            <span className="relative h-11 w-9 shrink-0" aria-hidden="true"><span className="absolute left-1 top-0 h-11 w-[9px] rotate-[22deg] rounded-full bg-brand"/><span className="absolute right-1 top-0 h-11 w-[9px] -rotate-[22deg] rounded-full bg-brand-deep"/><span className="absolute bottom-1 left-[14px] h-2 w-2 rounded-full bg-bronze"/></span>
            <span className="min-w-0 leading-none"><strong className="block truncate text-[25px] font-extrabold">Anni</strong><small className="mt-1 block truncate text-[8px] font-extrabold">WEB SOLUTIONS PVT. LTD.</small></span>
          </a>
          <nav className="hidden items-center justify-center gap-11 lg:flex" aria-label="Main navigation">
            {navItems.map((item, i) => <a key={item} href={i === 0 ? "#home" : `#${item.toLowerCase().replace(" ", "-")}`} className={`relative py-7 text-[13px] font-medium transition-colors hover:text-brand ${i === 0 ? "font-bold text-brand after:absolute after:bottom-[-1px] after:left-1/2 after:h-0.5 after:w-5 after:-translate-x-1/2 after:bg-brand" : ""}`}>{item}</a>)}
          </nav>
          <Button variant="brand" className="hidden h-12 justify-self-end px-6 font-bold lg:inline-flex" asChild><a href="mailto:hello@anniweb.com">Get a Free Quote <ArrowRight /></a></Button>
          <Button variant="ghost" size="icon" className="lg:hidden" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">{menuOpen ? <X /> : <Menu />}</Button>
        </div>
        {menuOpen && <nav className="grid border-t border-line bg-background px-5 py-3 lg:hidden">{navItems.map((item) => <a key={item} href="#home" onClick={() => setMenuOpen(false)} className="border-b border-line py-3 text-sm font-semibold last:border-0">{item}</a>)}<Button variant="brand" className="mt-3" asChild><a href="mailto:hello@anniweb.com">Get a Free Quote <ArrowRight /></a></Button></nav>}
      </header>

      <section id="home" className="mx-auto max-w-[1408px] px-4 pb-7 pt-4 sm:px-8 lg:px-16">
        <div className="relative text-center">
          <div className="mx-auto inline-flex items-center gap-2 rounded-full bg-secondary px-4 py-2 text-sm font-bold text-bronze"><BarChart3 className="size-4"/> Pricing Plans</div>
          <div className="hand-note absolute left-8 top-12 hidden text-left text-[25px] leading-[.9] text-foreground xl:block">Quality<br/>Solutions<br/>Real Value<span className="mt-3 block h-px w-24 rotate-[-4deg] bg-foreground"/></div>
          <div className="hand-note absolute right-8 top-10 hidden rotate-[8deg] text-left text-[25px] leading-[.9] text-foreground xl:block">Build<br/>Grow<br/>Succeed<br/>Together<span className="mt-3 block h-px w-20 rotate-[-5deg] bg-foreground"/></div>
          <h1 className="mx-auto mt-5 max-w-4xl text-[31px] font-extrabold leading-tight sm:text-[40px] lg:text-[43px]">Transparent Pricing &amp; <span className="text-bronze">Flexible Plans</span></h1>
          <p className="mx-auto mt-2 max-w-[650px] text-sm leading-relaxed text-muted-foreground sm:text-base">Choose the right plan for your business with clear pricing, no hidden fees<br className="hidden sm:block"/> and complete flexibility.</p>
        </div>

        <div className="mx-auto mt-6 flex w-fit flex-col items-center gap-3 sm:flex-row sm:gap-7">
          <div className="flex rounded-full border border-line bg-background p-1 shadow-sm" aria-label="Billing frequency">
            <Button size="sm" variant={billing === "monthly" ? "brand" : "ghost"} className="rounded-full px-4" onClick={() => setBilling("monthly")}>Monthly Billing</Button>
            <Button size="sm" variant={billing === "yearly" ? "brand" : "ghost"} className="rounded-full px-3" onClick={() => setBilling("yearly")}>Yearly Offer <span className="rounded-full bg-brand-soft px-2 py-1 text-[10px] text-brand">2 Months Free</span></Button>
          </div>
          <span className="hidden h-10 w-px bg-line sm:block"/>
          <div className="flex rounded-full border border-line bg-background p-1 shadow-sm" aria-label="Currency">
            <Button size="sm" variant={currency === "inr" ? "brand" : "ghost"} className="rounded-full px-6" onClick={() => setCurrency("inr")}>INR (₹)</Button>
            <Button size="sm" variant={currency === "usd" ? "brand" : "ghost"} className="rounded-full px-6" onClick={() => setCurrency("usd")}>USD ($)</Button>
          </div>
        </div>

        <div className="mt-6 grid items-stretch gap-6 lg:grid-cols-3">
          {plans.map((plan) => {
            const Icon = plan.icon;
            return <article key={plan.name} className={`relative flex min-h-[455px] flex-col overflow-hidden rounded-2xl border bg-background/70 p-7 shadow-[0_14px_34px_-32px_var(--brand)] ${plan.popular ? "border-green-500" : "border-line"}`}>
              {plan.popular && <div className="absolute right-0 top-0 rounded-bl-xl bg-brand px-5 py-2 text-[11px] font-bold text-primary-foreground">ϟ MOST POPULAR</div>}
              <div className="flex items-center gap-4"><span className={`grid size-14 shrink-0 place-items-center rounded-xl ${plan.premium ? "bg-secondary text-bronze" : "bg-brand-soft text-brand"}`}><Icon className="size-7"/></span><div><h2 className="text-[15px] font-extrabold">{plan.name}</h2><p className="text-xs text-muted-foreground">{plan.caption}</p></div></div>
              <div className="mt-4 flex items-end gap-2"><strong className="text-[36px] font-extrabold leading-none">{displayPrice(plan.monthly)}</strong><span className="pb-1 text-sm">/ month</span></div>
              <p className="mt-2 text-xs text-muted-foreground">Billed {billing === "monthly" ? "monthly" : "yearly"}</p>
              <div className="my-3 h-px bg-line"/>
              <p className="min-h-[48px] text-[13px] leading-relaxed text-muted-foreground">{plan.intro}</p>
              <ul className="mt-3 space-y-2.5">{plan.features.map((feature) => <li key={feature} className="flex items-start gap-3 text-[13px] font-medium"><span className="mt-0.5 grid size-4 shrink-0 place-items-center rounded-full bg-brand text-primary-foreground"><Check className="size-2.5 stroke-[3]"/></span>{feature}</li>)}</ul>
              <Button variant={plan.popular ? "brand" : "brandOutline"} className="mt-auto h-11 w-full font-bold" asChild><a href="mailto:hello@anniweb.com?subject=Pricing plan enquiry">{plan.cta} <ArrowRight /></a></Button>
            </article>;
          })}
        </div>

        <div className="mt-9 grid overflow-hidden rounded-2xl bg-background/80 shadow-sm sm:grid-cols-2 xl:grid-cols-[1.55fr_.8fr_.8fr_.9fr_auto]">
          {benefits.map((benefit, index) => { const Icon = benefit.icon; return <div key={benefit.title} className={`flex items-center gap-4 px-5 py-5 ${index > 0 ? "border-t border-line sm:border-l sm:border-t-0" : ""}`}><span className="grid size-12 shrink-0 place-items-center rounded-full border border-line bg-background text-brand"><Icon className="size-6"/></span><div><h3 className="text-[13px] font-extrabold">{benefit.title}</h3><p className="mt-1 text-[11px] leading-relaxed text-muted-foreground">{benefit.text}</p></div></div> })}
          <div className="flex items-center justify-center border-t border-line p-5 sm:col-span-2 xl:col-span-1 xl:border-l xl:border-t-0"><Button variant="brand" className="h-11 whitespace-nowrap px-5 text-xs" asChild><a href="mailto:hello@anniweb.com">Get a Free Quote <ArrowRight /></a></Button></div>
        </div>
      </section>
    </main>
  );
}
