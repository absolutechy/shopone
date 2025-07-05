"use client";

import { integralCF } from "@/styles/fonts";
import { cn } from "@/lib/utils";
import Image from "next/image";

export default function AboutPage() {
  return (
    <main className="pb-20">
      <div className="max-w-frame mx-auto px-4 xl:px-0">
        <hr className="h-[1px] border-t-black/10 mb-5 sm:mb-6" />
        
        {/* Hero Section */}
        <section className="py-12 md:py-16">
          <h1 className={cn([integralCF.className, "text-4xl md:text-5xl lg:text-6xl text-center mb-6"])}>
            About SHOPONE
          </h1>
          <p className="text-black/60 text-center max-w-2xl mx-auto mb-12">
            We believe in a world where you have total freedom to be you, without judgement. To experiment. To express yourself. To be brave and grab life as the extraordinary adventure it is.
          </p>
          <div className="relative w-full h-[300px] md:h-[400px] lg:h-[500px] rounded-3xl overflow-hidden">
            <Image
              src="/images/header-homepage.png"
              alt="About SHOPONE"
              fill
              className="object-cover"
              priority
            />
          </div>
        </section>

        {/* Our Story Section */}
        <section className="py-12 md:py-16">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            <div>
              <h2 className={cn([integralCF.className, "text-3xl md:text-4xl mb-6"])}>Our Story</h2>
              <p className="text-black/60 mb-4">
                SHOPONE started with a simple idea: to create a platform where fashion meets accessibility. Founded in 2024, we've grown from a small startup to a global fashion destination.
              </p>
              <p className="text-black/60">
                Our mission is to make quality fashion accessible to everyone. We work directly with manufacturers to bring you premium clothing without the premium price tag.
              </p>
            </div>
            <div className="relative w-full h-[300px] rounded-3xl overflow-hidden">
              <Image
                src="/images/picour.jpeg"
                alt="Our Story"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-12 md:py-16">
          <h2 className={cn([integralCF.className, "text-3xl md:text-4xl text-center mb-12"])}>Our Values</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-4">
                <Image
                  src="/icons/outlineOffer.svg"
                  alt="Quality"
                  width={32}
                  height={32}
                  className="invert"
                />
              </div>
              <h3 className="font-bold text-xl mb-3">Quality First</h3>
              <p className="text-black/60">
                We never compromise on quality, ensuring each piece meets our high standards.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-4">
                <Image
                  src="/icons/circleCheck.svg"
                  alt="Sustainability"
                  width={32}
                  height={32}
                  className="invert"
                />
              </div>
              <h3 className="font-bold text-xl mb-3">Sustainable Fashion</h3>
              <p className="text-black/60">
                We're committed to reducing our environmental impact through sustainable practices.
              </p>
            </div>
            <div className="text-center sm:col-span-2 lg:col-span-1">
              <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-4">
                <Image
                  src="/icons/user.svg"
                  alt="Customer Focus"
                  width={32}
                  height={32}
                  className="invert"
                />
              </div>
              <h3 className="font-bold text-xl mb-3">Customer First</h3>
              <p className="text-black/60">
                Your satisfaction is our priority, with exceptional service at every step.
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
} 