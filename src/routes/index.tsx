import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowRight, BarChart3, CalendarDays, Check, CircleHelp, Crown, FileText, Github, Headphones, Instagram, Layers3, Linkedin, Mail, Menu, MessageCircle, MessageCircleMore, Monitor, Phone, Send, Shield, ShieldCheck, Twitter, Users, X, Youtube, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

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

const faqs = [
  { question: "What core services does Anni Web Solutions provide?", answer: "We build business websites, custom web applications, AI automations, digital marketing systems, and ongoing support solutions." },
  { question: "How can your AI & Automation services benefit my business?", answer: "We automate repetitive work, connect your tools, and create practical AI workflows that save time and improve customer response." },
  { question: "What is included in your Digital Marketing services?", answer: "Our plans can include SEO, paid campaigns, content strategy, analytics, lead generation, and conversion-focused reporting." },
  { question: "Do you handle complete Social Media Management & Growth?", answer: "Yes. We can manage planning, design, publishing, community engagement, paid promotion, and monthly performance reviews." },
  { question: "What kind of Video Editing & Media Creation do you offer?", answer: "We create short-form social videos, ads, product edits, corporate films, motion graphics, and campaign-ready visual content." },
  { question: "Can you help design a new Brand Identity for our company?", answer: "Yes. We create a cohesive visual identity including logo direction, colors, typography, brand guidelines, and launch assets." },
  { question: "How long does it take to deliver a project?", answer: "A standard website usually takes two to four weeks. Complex applications and automation projects are scheduled after discovery." },
  { question: "Will my website show up on Google, Google Analytics, and ChatGPT AI Search?", answer: "We provide technical SEO, analytics setup, structured content, and search-friendly foundations for traditional and AI-assisted discovery." },
  { question: "Who owns the source code, media assets, and designs?", answer: "You receive ownership of the approved final code and project assets after all agreed payments are complete." },
  { question: "What is the difference between your Custom and Prebuilt solutions?", answer: "Prebuilt solutions are faster and budget-friendly, while custom solutions are designed around your exact workflows, branding, and growth needs." },
];

function Index() {
  const [billing, setBilling] = useState<Billing>("monthly");
  const [currency, setCurrency] = useState<Currency>("inr");
  const [menuOpen, setMenuOpen] = useState(false);
  const [newsletterEmail, setNewsletterEmail] = useState("");

  const displayPrice = (price: number) => {
    const billedPrice = billing === "yearly" ? Math.round(price * 10 / 12) : price;
    if (currency === "usd") return `$${Math.round(billedPrice / 83).toLocaleString("en-US")}`;
    return `₹${billedPrice.toLocaleString("en-IN")}`;
  };

  const navItems = ["Home", "About", "Services", "Projects", "Why Us", "Blog", "Contact"];

  return (
    <main className="page-glow min-h-screen overflow-x-hidden bg-background text-foreground">
      <header className="border-b border-line bg-background/80 backdrop-blur-sm">
        <div className="mx-auto grid h-[78px] max-w-[1408px] grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 lg:grid-cols-[180px_minmax(0,1fr)_180px] lg:px-8 xl:grid-cols-[230px_minmax(0,1fr)_230px] xl:px-16">
          <a href="#home" className="flex min-w-0 items-center gap-3" aria-label="Anni home">
            <span className="relative h-11 w-9 shrink-0" aria-hidden="true"><span className="absolute left-1 top-0 h-11 w-[9px] rotate-[22deg] rounded-full bg-brand"/><span className="absolute right-1 top-0 h-11 w-[9px] -rotate-[22deg] rounded-full bg-brand-deep"/><span className="absolute bottom-1 left-[14px] h-2 w-2 rounded-full bg-bronze"/></span>
            <span className="min-w-0 leading-none"><strong className="block truncate text-[25px] font-extrabold">Anni</strong><small className="mt-1 block truncate text-[8px] font-extrabold">WEB SOLUTIONS PVT. LTD.</small></span>
          </a>
          <nav className="hidden min-w-0 items-center justify-center gap-5 lg:flex xl:gap-10" aria-label="Main navigation">
            {navItems.map((item, i) => <a key={item} href={i === 0 ? "#home" : `#${item.toLowerCase().replace(" ", "-")}`} className={`relative py-7 text-[13px] font-medium transition-colors hover:text-brand ${i === 0 ? "font-bold text-brand after:absolute after:bottom-[-1px] after:left-1/2 after:h-0.5 after:w-5 after:-translate-x-1/2 after:bg-brand" : ""}`}>{item}</a>)}
          </nav>
          <Button variant="brand" className="hidden h-12 justify-self-end px-4 font-bold lg:inline-flex xl:px-6" asChild><a href="mailto:hello@anniweb.com">Get a Free Quote <ArrowRight /></a></Button>
          <Button variant="ghost" size="icon" className="lg:hidden" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">{menuOpen ? <X /> : <Menu />}</Button>
        </div>
        {menuOpen && <nav className="grid border-t border-line bg-background px-5 py-3 lg:hidden">{navItems.map((item, index) => <a key={item} href={index === 0 ? "#home" : `#${item.toLowerCase().replace(" ", "-")}`} onClick={() => setMenuOpen(false)} className="border-b border-line py-3 text-sm font-semibold last:border-0">{item}</a>)}<Button variant="brand" className="mt-3" asChild><a href="mailto:hello@anniweb.com">Get a Free Quote <ArrowRight /></a></Button></nav>}
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
          {benefits.map((benefit, index) => { const Icon = benefit.icon; const divider = ["", "border-t sm:border-l sm:border-t-0", "border-t sm:border-t xl:border-l xl:border-t-0", "border-t sm:border-l xl:border-t-0"][index]; return <div key={benefit.title} className={`flex min-w-0 items-center gap-4 border-line px-5 py-5 ${divider}`}><span className="grid size-12 shrink-0 place-items-center rounded-full border border-line bg-background text-brand"><Icon className="size-6"/></span><div className="min-w-0"><h3 className="text-[13px] font-extrabold">{benefit.title}</h3><p className="mt-1 text-[11px] leading-relaxed text-muted-foreground">{benefit.text}</p></div></div> })}
          <div className="flex items-center justify-center border-t border-line p-5 sm:col-span-2 xl:col-span-1 xl:border-l xl:border-t-0"><Button variant="brand" className="h-11 whitespace-nowrap px-5 text-xs" asChild><a href="mailto:hello@anniweb.com">Get a Free Quote <ArrowRight /></a></Button></div>
        </div>
      </section>

      <section id="faq" className="border-t border-line/70 bg-background/55 px-4 py-14 sm:px-8 lg:px-16 lg:py-16">
        <div className="mx-auto max-w-[1408px]">
          <div className="relative text-center">
            <div className="inline-flex items-center gap-2 rounded-full bg-secondary px-4 py-2 text-sm font-bold text-bronze"><CircleHelp className="size-4"/> Common Inquiries</div>
            <div className="hand-note absolute left-3 top-7 hidden -rotate-6 text-left text-[24px] leading-[.9] xl:block">Your<br/>Questions<br/>Our Answers<span className="mt-3 block h-px w-24 -rotate-6 bg-foreground"/></div>
            <div className="hand-note absolute right-4 top-7 hidden rotate-6 text-left text-[24px] leading-[.9] xl:block">Let’s<br/>Build<br/>Together<span className="mt-3 block h-px w-20 -rotate-6 bg-foreground"/></div>
            <h2 className="mt-4 text-[31px] font-extrabold leading-tight sm:text-[40px] lg:text-[43px]">Frequently Asked <span className="text-bronze">Questions</span></h2>
            <p className="mx-auto mt-2 max-w-3xl text-sm text-muted-foreground sm:text-base">Everything you need to know about our services, process, ownership, and support.</p>
          </div>

          <Accordion type="multiple" className="mt-8 grid items-start gap-3 lg:grid-cols-2 lg:gap-x-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={faq.question} value={`faq-${index}`} className="overflow-hidden rounded-xl border border-line bg-background/70 px-5 data-[state=open]:border-brand/40">
                <AccordionTrigger className="min-h-[68px] gap-4 py-3 text-left hover:no-underline [&>svg]:size-4 [&>svg]:rounded-full [&>svg]:bg-secondary [&>svg]:p-1.5 [&>svg]:box-content">
                  <span className="flex min-w-0 items-center gap-4">
                    <span className="grid size-10 shrink-0 place-items-center rounded-lg bg-brand-soft text-sm font-semibold text-brand">{String(index + 1).padStart(2, "0")}</span>
                    <span className="text-[14px] font-bold leading-snug sm:text-base">{faq.question}</span>
                  </span>
                </AccordionTrigger>
                <AccordionContent className="pl-4 pr-4 text-[13px] leading-relaxed text-muted-foreground sm:pl-14 sm:pr-10 sm:text-sm">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <div className="mt-9 grid items-center gap-5 rounded-2xl bg-brand-soft/45 px-5 py-5 sm:px-8 lg:grid-cols-[1fr_auto_auto]">
            <div className="flex min-w-0 items-center gap-5"><span className="grid size-16 shrink-0 place-items-center rounded-full bg-brand text-primary-foreground"><MessageCircleMore className="size-7"/></span><div><h3 className="text-lg font-extrabold">Still have questions?</h3><p className="mt-1 text-sm text-muted-foreground">We’re here to help. Talk to our team and get all the details you need.</p></div></div>
            <Button variant="brand" className="h-12 px-7 font-semibold" asChild><a href="mailto:hello@anniweb.com?subject=Free consultation">Get a Free Consultation <ArrowRight /></a></Button>
            <div className="flex items-center gap-3 border-t border-brand/30 pt-4 lg:border-l lg:border-t-0 lg:pl-7 lg:pt-0"><div className="flex -space-x-2"><span className="grid size-10 place-items-center rounded-full border-2 border-background bg-bronze text-xs font-bold text-primary-foreground">A</span><span className="grid size-10 place-items-center rounded-full border-2 border-background bg-brand text-xs font-bold text-primary-foreground">S</span><span className="grid size-10 place-items-center rounded-full border-2 border-background bg-muted text-xs font-bold text-brand">R</span></div><p className="text-sm leading-tight">Trusted by<br/><strong>100+ Businesses</strong></p></div>
          </div>
          <div className="mt-8 flex items-center gap-4 text-[10px] text-muted-foreground"><span className="h-px w-10 bg-bronze"/> Ideas&nbsp; | &nbsp;Technology&nbsp; | &nbsp;Real Impact</div>
        </div>
      </section>

      <section id="contact" className="border-t border-line bg-background/70">
        <div className="relative mx-auto max-w-[1408px] px-4 py-12 text-center sm:px-8 lg:px-16 lg:py-14">
          <div className="hand-note absolute left-3 top-20 hidden -rotate-6 text-left text-[24px] leading-[.9] xl:block">Ideas<br/>Into<br/>Real Solutions<span className="mt-3 block h-px w-28 -rotate-6 bg-foreground"/></div>
          <div className="hand-note absolute right-4 top-24 hidden rotate-6 text-left text-[24px] leading-[.9] xl:block">Start<br/>Your Project<br/>Today<span className="mt-3 block h-px w-24 -rotate-6 bg-foreground"/></div>
          <div className="inline-flex items-center gap-2 rounded-full bg-secondary px-4 py-2 text-sm font-bold"><Send className="size-4 text-bronze"/> Get In Touch</div>
          <h2 className="mx-auto mt-4 max-w-4xl text-[31px] font-extrabold leading-tight sm:text-[40px] lg:text-[43px]">Let’s build something <span className="text-bronze">great together</span></h2>
          <p className="mx-auto mt-3 max-w-[670px] text-sm leading-relaxed text-muted-foreground sm:text-base">Have a project in mind or need a custom solution? Reach out to us,<br className="hidden sm:block"/> and we’ll help you bring your vision to life.</p>

          <div className="mt-7 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center">
            <Button variant="brand" className="h-12 rounded-full px-8 font-bold" asChild><a href="mailto:hello@anniweb.com"><Mail/> Email Us</a></Button>
            <Button variant="outline" className="h-12 rounded-full px-8 font-bold" asChild><a href="https://wa.me/917554601839" target="_blank" rel="noreferrer"><MessageCircle className="text-brand"/> Chat on WhatsApp</a></Button>
            <Button variant="outline" className="h-12 rounded-full px-8 font-bold" asChild><a href="tel:+917554601839"><Phone/> Call: +91 755-4601839</a></Button>
          </div>

          <div className="mx-auto mt-10 grid max-w-[890px] gap-5 text-left sm:grid-cols-3 sm:gap-0">
            <div className="flex items-center gap-4 sm:pr-7"><span className="grid size-14 shrink-0 place-items-center rounded-full bg-secondary text-bronze"><Zap className="size-7 fill-current"/></span><div><h3 className="text-sm font-extrabold">Quick Response</h3><p className="mt-1 text-xs text-muted-foreground">We reply within 24 hours</p></div></div>
            <div className="flex items-center gap-4 border-line sm:border-l sm:px-7"><span className="grid size-14 shrink-0 place-items-center rounded-full bg-secondary text-bronze"><Shield className="size-7"/></span><div><h3 className="text-sm font-extrabold">Free Consultation</h3><p className="mt-1 text-xs text-muted-foreground">Discuss your ideas with us</p></div></div>
            <div className="flex items-center gap-4 border-line sm:border-l sm:pl-7"><span className="grid size-14 shrink-0 place-items-center rounded-full bg-secondary text-bronze"><Users className="size-7"/></span><div><h3 className="text-sm font-extrabold">Let’s Grow Together</h3><p className="mt-1 text-xs text-muted-foreground">Your vision, our expertise</p></div></div>
          </div>
        </div>

        <footer className="border-t border-line bg-background px-4 pb-5 pt-9 sm:px-8 lg:px-16">
          <div className="mx-auto max-w-[1408px]">
            <div className="grid min-w-0 gap-9 md:grid-cols-2 xl:grid-cols-[1.25fr_.65fr_.8fr_1.35fr] xl:gap-16">
              <div className="min-w-0">
                <a href="#home" className="flex items-center gap-3" aria-label="Anni home">
                  <span className="relative h-11 w-9 shrink-0" aria-hidden="true"><span className="absolute left-1 top-0 h-11 w-[9px] rotate-[22deg] rounded-full bg-brand"/><span className="absolute right-1 top-0 h-11 w-[9px] -rotate-[22deg] rounded-full bg-brand-deep"/><span className="absolute bottom-1 left-[14px] h-2 w-2 rounded-full bg-bronze"/></span>
                  <span className="leading-none"><strong className="block text-[25px] font-extrabold">Anni</strong><small className="mt-1 block text-[8px] font-extrabold">WEB SOLUTIONS PVT. LTD.</small></span>
                </a>
                <p className="mt-4 max-w-[310px] text-sm leading-relaxed text-muted-foreground">Building modern web, mobile and AI solutions that help businesses grow and create real impact.</p>
                <div className="mt-4 flex gap-3">
                  {[
                    { label: "LinkedIn", icon: Linkedin }, { label: "Instagram", icon: Instagram }, { label: "YouTube", icon: Youtube }, { label: "X", icon: Twitter }, { label: "GitHub", icon: Github },
                  ].map(({ label, icon: Icon }) => <Button key={label} variant="secondary" size="icon" className="rounded-full" aria-label={label} asChild><a href={`https://${label.toLowerCase()}.com`} target="_blank" rel="noreferrer"><Icon className="size-4"/></a></Button>)}
                </div>
              </div>
              <div className="min-w-0">
                <h3 className="text-sm font-extrabold">Quick Links</h3>
                <nav className="mt-3 grid gap-2 text-sm text-muted-foreground">{["Home", "About", "Services", "Projects", "Blog", "Contact"].map((item) => <a key={item} href={item === "Home" ? "#home" : `#${item.toLowerCase()}`} className="w-fit hover:text-brand">{item}</a>)}</nav>
              </div>
              <div className="min-w-0">
                <h3 className="text-sm font-extrabold">Our Services</h3>
                <div className="mt-3 grid gap-2 text-sm text-muted-foreground"><span>Custom Development</span><span>AI &amp; Automation</span><span>Digital Marketing</span><span>UI/UX Design</span><span>Video &amp; Media</span><span>Branding</span></div>
              </div>
              <div className="min-w-0">
                <h3 className="text-sm font-extrabold">Subscribe to Our Newsletter</h3>
                <p className="mt-3 max-w-[360px] text-sm leading-relaxed text-muted-foreground">Get the latest updates, tech insights and company news.</p>
                <form className="mt-3 grid min-w-0 gap-2 min-[360px]:grid-cols-[minmax(0,1fr)_auto]" onSubmit={(event) => { event.preventDefault(); window.location.href = `mailto:hello@anniweb.com?subject=Newsletter subscription&body=${encodeURIComponent(newsletterEmail)}`; }}>
                  <label className="flex min-w-0 flex-1 items-center gap-3 rounded-md border border-input bg-background px-4 shadow-sm"><Mail className="size-4 shrink-0"/><span className="sr-only">Email address</span><input type="email" required value={newsletterEmail} onChange={(event) => setNewsletterEmail(event.target.value)} placeholder="Enter your email" className="h-11 min-w-0 flex-1 bg-transparent text-sm outline-none placeholder:text-muted-foreground"/></label>
                  <Button variant="brand" type="submit" className="h-11 w-full px-5 font-bold min-[360px]:w-auto">Subscribe</Button>
                </form>
              </div>
            </div>
            <div className="mt-8 flex flex-col gap-3 border-t border-line pt-4 text-[11px] text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
              <p>© 2024 Anni Web Solutions Pvt. Ltd. All rights reserved.</p>
              <div className="flex flex-wrap gap-2"><a href="#contact">Privacy Policy</a><span>|</span><a href="#contact">Terms &amp; Conditions</a><span>|</span><a href="#home">Sitemap</a></div>
            </div>
          </div>
        </footer>
      </section>
    </main>
  );
}
