import { useState, useEffect } from "react";
import Link from "next/link";

export default function Mom() {
  return (
    <div className="h-screen font-jost bg-off_white text-lg m-12 ">
      <Link href="/pyioelili" className="">
        <div className="hover:cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M9 15 3 9m0 0 6-6M3 9h12a6 6 0 0 1 0 12h-3"
            />
          </svg>
        </div>
      </Link>

      <div className="items-center text-center text-6xl opacity-50">
        The MOTES Page
      </div>
      <div className="items-center text-center text-md opacity-50 pb-8">
        (Motes = Mom Notes)
      </div>
      <div className="rounded-t-lg border-2 bg-black text-white border-black py-2 px-4 flex justify-between items-center">
        <div>pyioelili@gmail.com, You&apos;ve Got Mail!</div>
        <div className="text-sm opacity-80">Recieved: 5/13/2024</div>
      </div>

      <div className="border-2 rounded-b-lg p-8 gap-4 flex flex-col font-OS mb-12">
        <div>Hi Mama, Happy Mother&apos;s Day!</div>
        <div>
          Hope you&apos;ve had a great day today. I know this is probably later
          than actual Mother&apos;s Day, but technically it&apos;s still the big
          day in America so I hope it&apos;s alright, haha! I was thinking about
          what to say in my notes this year and realized that after 21 years I
          still don&apos;t know how to put into words how much you mean to me. I
          love you so much and I&apos;m so grateful for everything you do for
          me. I hope you know that I appreciate you every day, not just on
          Mother&apos;s Day.
        </div>
        <div>
          Time sure flies by really fast! As I&apos;m writing this, I&apos;m
          already almost at the end my time at college-- and I&apos;m really
          only here because of all your support. I probably don&apos;t say it
          enough, but I really appreciate everything you do for me. I know we
          can be a handful sometimes, but I&apos;m so grateful for all the
          efforts you put into giving Julie and I opportunities that not
          everyone has.
        </div>
        <div>
          As I get older, I realize that I&apos;m sometimes pretty far away. It
          might be hard to celebrate important moments in the same way I did
          when I was younger. That&apos;s why I wanted to make this. I&apos;ll
          keep it updated with all the the &quot;cards&quot; I want to write for
          occasions when I can&apos;s give you in person ones (or, just to write
          things for fun). Maybe Julie will also make an entry :^). I hope it
          can be a way for us to stay connected even when we&apos;re far apart.
        </div>
        <div>
          Anyways, sorry it&apos; a little blank right now, hopefully over the
          years this page will get a little bit longer. I hope you like this
          little part of my website and am so excited to share my life with you!
          I love you, Mama.
        </div>
        <div>沈骊</div>
        <img src="/mothersday/may12.png" className="max-w-xs rounded-md"></img>
      </div>
      <div className="py-8 bottom-0 h-auto left-0 right-0 m-auto flex items-center justify-center text-sm opacity-50">
        Made by Li Shen
      </div>
    </div>
  );
}
