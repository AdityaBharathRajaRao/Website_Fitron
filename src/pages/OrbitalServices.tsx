
// OrbitalServices.tsx
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import orbitalLogo from "@/assets/orbital/orbital-logo.jpg";
import weldingMachine from "@/assets/orbital/welding-machine.jpg";
import openHead from "@/assets/orbital/open-weld-head.jpg";
import closedHead from "@/assets/orbital/closed-weld-head.jpg";
import tubeSheet from "@/assets/orbital/tube-sheet.jpg";
import orbibug from "@/assets/orbital/orbibug.jpg";
import coldWire from "@/assets/orbital/cold-wire.jpg";
import oxygen from "@/assets/orbital/oxygen-analyser.jpg";
import tubeFacer from "@/assets/orbital/tube-facer.jpg";
import pipeCutter from "@/assets/orbital/pipe-cutter.jpg";

const products = [
  {id:1,name:"Orbital Welding Machines Power Source",image:weldingMachine},
  {id:2,name:"Open Weld Heads",image:openHead},
  {id:3,name:"Closed Weld Heads",image:closedHead},
  {id:4,name:"Tube to Tubesheet Weld Heads",image:tubeSheet},
  {id:5,name:"Orbibug Orbital Welding Bug",image:orbibug},
  {id:6,name:"Cold Wire Feeders",image:coldWire},
  {id:7,name:"Oxygen Analysers",image:oxygen},
  {id:8,name:"Tube Facers",image:tubeFacer},
  {id:9,name:"Pipe Cutters",image:pipeCutter},
];

export default function OrbitalServices(){
return (
<div className="min-h-screen flex flex-col">
<Navbar/>

<section className="bg-gradient-hero text-primary-foreground py-16">
<div className="container mx-auto px-4 text-center">
<img src={orbitalLogo} alt="Orbital Service" className="h-20 mx-auto bg-white rounded-md p-2 mb-6"/>
<h1 className="text-4xl md:text-5xl font-bold mb-4">Orbital Service</h1>
<p className="text-xl max-w-3xl mx-auto text-primary-foreground/90">
Advanced Orbital Welding Solutions for Precision Manufacturing
</p>
</div>
</section>

<section className="py-16">
<div className="container mx-auto px-4 max-w-5xl">
<h2 className="text-3xl font-bold mb-6">About Orbital Service</h2>
<div className="space-y-5 text-muted-foreground leading-relaxed">
<p>
Fitron Manufacturing Tech Pvt. Ltd. delivers excellence in manufacturing
solutions across diverse industry segments and partners with globally
recognized organizations to provide advanced engineering solutions.
</p>
<p>
As an authorized partner of <strong>Orbital Service GmbH</strong>, we provide
advanced orbital welding technology for industries requiring precision,
repeatability and international quality standards including semiconductor,
aerospace and defence applications.
</p>
<p>
Our experienced team works closely with customers to recommend the right
orbital welding equipment and complete application solutions.
</p>
</div>

<div className="bg-accent/10 rounded-lg p-6 mt-10">
<h3 className="text-2xl font-bold mb-4">Why Choose Orbital Service?</h3>
<div className="grid md:grid-cols-2 gap-3">
{[
"Precision Orbital Welding",
"Semiconductor Applications",
"Aerospace & Defence",
"Reliable German Engineering",
"High Quality Equipment",
"Customer-Centric Technical Support"
].map((item,i)=>(
<div key={i} className="flex gap-2 items-center">
<span className="text-accent">•</span><span>{item}</span>
</div>
))}
</div>
</div>
</div>
</section>

<section className="py-16 bg-secondary/30">
<div className="container mx-auto px-4">
<div className="text-center mb-12">
<h2 className="text-3xl md:text-4xl font-bold mb-4">Our Orbital Welding Solutions</h2>
<p className="text-lg text-muted-foreground">
Complete range of orbital welding equipment and accessories.
</p>
</div>

<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
{products.map((p)=>(
<Card key={p.id} className="hover:shadow-lg transition-shadow">
<CardContent className="pt-6">
<div className="w-full h-52 bg-white rounded-md flex items-center justify-center mb-4 overflow-hidden">
<img src={p.image} alt={p.name}
className="max-w-full max-h-full object-contain hover:scale-105 transition-transform"/>
</div>
<h3 className="text-xl font-bold">{p.name}</h3>
</CardContent>
</Card>
))}
</div>
</div>
</section>

<section className="py-16">
<div className="container mx-auto px-4 text-center">
<h2 className="text-3xl md:text-4xl font-bold mb-4">Need an Orbital Welding Solution?</h2>
<p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
Contact our experts to identify the right orbital welding equipment for your application.
</p>
<Button variant="cta" size="lg" asChild>
<Link to="/contact">
Request Quote <ArrowRight className="ml-2 h-5 w-5"/>
</Link>
</Button>
</div>
</section>

<Footer/>
</div>
);
}
