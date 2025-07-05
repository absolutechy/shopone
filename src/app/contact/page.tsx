"use client";

import { integralCF } from "@/styles/fonts";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import InputGroup from "@/components/ui/input-group";

export default function ContactPage() {
  return (
    <main className="pb-20">
      <div className="max-w-frame mx-auto px-4 xl:px-0">
        <hr className="h-[1px] border-t-black/10 mb-5 sm:mb-6" />
        
        {/* Hero Section */}
        <section className="py-12 md:py-16">
          <h1 className={cn([integralCF.className, "text-4xl md:text-5xl lg:text-6xl text-center mb-6"])}>
            Contact Us
          </h1>
          <p className="text-black/60 text-center max-w-2xl mx-auto">
            Have a question or need assistance? We're here to help! Reach out to our team and we'll get back to you as soon as possible.
          </p>
        </section>

        {/* Contact Form Section */}
        <section className="py-12 md:py-16">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-20">
            <div>
              <h2 className={cn([integralCF.className, "text-3xl md:text-4xl mb-6"])}>Get in Touch</h2>
              <form className="space-y-6">
                <div className="space-y-4">
                  <InputGroup className="bg-[#F0F0F0]">
                    <InputGroup.Input
                      type="text"
                      name="name"
                      placeholder="Your Name"
                      className="bg-[#F0F0F0] placeholder:text-black/40"
                    />
                  </InputGroup>
                  <InputGroup className="bg-[#F0F0F0]">
                    <InputGroup.Input
                      type="email"
                      name="email"
                      placeholder="Your Email"
                      className="bg-[#F0F0F0] placeholder:text-black/40"
                    />
                  </InputGroup>
                  <InputGroup className="bg-[#F0F0F0]">
                    <InputGroup.Input
                      type="text"
                      name="subject"
                      placeholder="Subject"
                      className="bg-[#F0F0F0] placeholder:text-black/40"
                    />
                  </InputGroup>
                  <div className="bg-[#F0F0F0]">
                    <textarea
                      name="message"
                      rows={5}
                      placeholder="Your Message"
                      className="w-full rounded-lg bg-[#F0F0F0] p-4 placeholder:text-black/40 focus:outline-none"
                    />
                  </div>
                </div>
                <Button
                  type="submit"
                  className="bg-black w-full rounded-full text-sm font-medium py-6"
                >
                  Send Message
                </Button>
              </form>
            </div>
            <div className="space-y-8">
              <div>
                <h2 className={cn([integralCF.className, "text-3xl md:text-4xl mb-6"])}>Contact Info</h2>
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center shrink-0">
                      <Image
                        src="/icons/envelope.svg"
                        alt="Email"
                        width={24}
                        height={24}
                        className="invert"
                      />
                    </div>
                    <div>
                      <h3 className="font-bold text-xl mb-1">Email</h3>
                      <p className="text-black/60">support@shopone.com</p>
                      <p className="text-black/60">business@shopone.com</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center shrink-0">
                      <Image
                        src="/icons/outlineOffer.svg"
                        alt="Office"
                        width={24}
                        height={24}
                        className="invert"
                      />
                    </div>
                    <div>
                      <h3 className="font-bold text-xl mb-1">Office</h3>
                      <p className="text-black/60">123 Fashion Street</p>
                      <p className="text-black/60">New York, NY 10001</p>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="font-bold text-xl mb-4">Follow Us</h3>
                <div className="flex space-x-4">
                  <a href="#" className="w-12 h-12 bg-black rounded-full flex items-center justify-center">
                    <Image
                      src="/icons/facebook.svg"
                      alt="Facebook"
                      width={24}
                      height={24}
                      className="invert"
                    />
                  </a>
                  <a href="#" className="w-12 h-12 bg-black rounded-full flex items-center justify-center">
                    <Image
                      src="/icons/instagram.svg"
                      alt="Instagram"
                      width={24}
                      height={24}
                      className="invert"
                    />
                  </a>
                  <a href="#" className="w-12 h-12 bg-black rounded-full flex items-center justify-center">
                    <Image
                      src="/icons/xTwitter.svg"
                      alt="Twitter"
                      width={24}
                      height={24}
                      className="invert"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
} 