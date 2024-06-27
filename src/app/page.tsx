import ContactForm from "@/components/ui/ContactForm";
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from "@/components/ui/dialog";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from "@/components/ui/table";

import { GeistSans } from 'geist/font/sans';
import Image from 'next/image';
import Link from 'next/link';
import { FaBehance, FaDribbble, FaGithub, FaInstagram } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa6";
import { LuGithub } from "react-icons/lu";
import StatusBadge from '../components/ui/status-badge';
import "./globals.css";

export default function Home() {
  return (
    <main className="flex flex-col items-center p-30 border-b max-w-screen-2xl">

      {/* SECTION 1 */}
      <div className="flex flex-col lg:flex-row w-10/12 sm:w-11/12 border-x">
        <div className="wrapper flex justify-center p-10 lg:p-24">
          <div className="border relative">
            <div className="border-black dark:border-gray-100 h-3.5 w-3.5 border-l border-t absolute z-10 left-[-1px] top-[-1px] rotate-0"></div>
            <div className="border-black dark:border-gray-100 h-3.5 w-3.5 border-l border-t absolute z-10 right-[-1px] top-[-1px] rotate-90"></div>
            <div className="border-black dark:border-gray-100 h-3.5 w-3.5 border-l border-t absolute z-10 bottom-[-1px] left-[-1px] -rotate-90"></div>
            <div className="border-black dark:border-gray-100 h-3.5 w-3.5 border-l border-t absolute z-10 bottom-[-1px] right-[-1px] rotate-180"></div>
            <div className="flex flex-col heading-hero text-center items-center p-5 sm:p-10 md:p-20">
              <StatusBadge className={`${GeistSans.className} text-lg m-2`}>
                Available for work
              </StatusBadge>
              <h1 className={`${GeistSans.className} text-2xl sm:text-4xl lg:text-6xl text-center font-bold`}>
                Collaborate to create extraordinary website with me
              </h1>
              <p className={`${GeistSans.className} text-center text-base lg:text-xl p-6 lg:w-3/4 text-slate-500 dark:text-white`}>
                Get your project up and running in no time, create initial design for your application, and many more!
              </p>
              <div className="button-wrapper flex gap-2">
                <Button>Get started</Button>
                <Button variant={'outline'} className='flex gap-2'> <FaGithub size={24} />Github</Button>
              </div>

              <div className="flex flex-col p-10 gap-5">
                <code className="justify-end gap-x-2 text-xs text-muted-foreground">Theme <kbd className="pointer-events-none inline-flex h-fit select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100"><span className="text-xs">⌘</span>D</kbd></code>

                <code className="justify-end gap-x-2 text-xs text-muted-foreground">Command <kbd className="pointer-events-none inline-flex h-fit select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100"><span className="text-xs">⌘</span>F</kbd></code>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* SECTION 2 */}
      <div className="wrapper border-y w-full flex justify-center">
        <div className="flex flex-row w-10/12 sm:w-11/12 border-x">
          <div className="icon-wrapper group flex items-center justify-center gap-2 cursor-pointer hover:bg-purple-800 hover:text-white py-5 w-1/4 transition-all">
            <LuGithub size={24} className="icon transition-transform duration-300 ease-in-out group-hover:rotate-12 group-hover:scale-125" />
          </div>
          <div className="icon-wrapper group flex items-center justify-center gap-2 cursor-pointer hover:bg-purple-800 hover:text-white py-5 w-1/4 transition-all">
            <FaInstagram size={24} className="icon transition-transform duration-300 ease-in-out group-hover:rotate-12 group-hover:scale-125" />
          </div>
          <div className="icon-wrapper group flex items-center justify-center gap-2 cursor-pointer hover:bg-purple-800 hover:text-white py-5 w-1/4 transition-all">
            <FaBehance size={24} className="icon transition-transform duration-300 ease-in-out group-hover:rotate-12 group-hover:scale-125" />
          </div>
          <div className="icon-wrapper group flex items-center justify-center gap-2 cursor-pointer hover:bg-purple-800 hover:text-white py-5 w-1/4 transition-all">
            <FaDribbble size={24} className="icon transition-transform duration-300 ease-in-out group-hover:rotate-12 group-hover:scale-125" />
          </div>
        </div>
      </div>


      {/* SECTION 3 */}
      <div id="about" className="flex flex-col md:flex-row w-10/12 sm:w-11/12 border-x">
        <div className="wrapper flex justify-center md:w-1/2">
          <div className="heading-hero text-center p-10 lg:p-20 flex flex-col justify-center">
            <h1 className={`${GeistSans.className} text-3xl lg:text-6xl text-center md:text-start relative font-sans font-normal tracking-[-0.04em] col-span-12 lg:col-span-6 lg:leading-[60px] xl:col-span-4`}>
              <span className='relative'>
                <div className="border-black dark:bg-gray-100 bg-black h-[5px] w-[5px] absolute z-10 left-[-3px] top-[-3px]"></div>
                <div className="border-black dark:bg-gray-100 bg-black h-[5px] w-[5px] absolute z-10 right-[-3px] bottom-[-3px]"></div>
                About
                <span aria-hidden="true" className="absolute right-0 top-0 translate-x-full pl-1 font-mono text-lg font-medium text-gray-900 dark:text-white md:pl-0">(1)</span>
              </span>
            </h1>
            <p className='text-center md:text-start text-sm lg:text-xl  pt-10'>
              Halo! I am Ziel (pen name) and I am passionate in clean and neat design in website. I do UI/UX Design, Web Design, Front End Web Development, and Digital Illustration.
            </p>
          </div>
        </div>
        <div className="wrapper flex justify-center md:w-1/2 border-t-2 md:border-t-0 md:border-l-2 border-dashed">
          <div className="heading-hero text-center lg:p-20 flex justify-center items-center">
            <img src="/zielportowhite.png" alt="Ziel Image" className='size-72 zielporto p-10 lg:p-0' />
          </div>
        </div>
      </div>

      {/* SECTION 4 */}
      <div id="projects" className='border-t flex justify-center relative w-full'>
        <div className="flex flex-col w-10/12 sm:w-11/12 border-x">
          <div className="wrapper flex justify-center">
            <div className="heading-hero text-center p-10 lg:p-20 flex flex-col justify-center items-center">
              <h1 className={`${GeistSans.className} text-3xl lg:text-6xl text-center relative font-sans font-normal tracking-[-0.04em] col-span-12 lg:col-span-6 lg:leading-[60px] xl:col-span-4`}>
                <span className='relative'>
                  <div className="border-gray-800 dark:bg-gray-100 bg-black h-[5px] w-[5px] absolute z-10 left-[-3px] top-[-3px]"></div>
                  <div className="border-gray-800 dark:bg-gray-100 bg-black h-[5px] w-[5px] absolute z-10 right-[-3px] bottom-[-3px]"></div>
                  Projects
                  <span aria-hidden="true" className="absolute right-0 top-0 translate-x-full pl-1 font-mono text-lg font-medium text-gray-900 dark:text-white md:pl-0">(2)</span>
                </span>
              </h1>
              <p className='text-center text-sm lg:text-xl pt-10 w-3/4'>
                Some of the projects I&apos;ve undertaken while practicing programming languages and UI/UX design
              </p>
            </div>
          </div>
          <div className="project-wrapper flex flex-col lg:flex-row justify-start items-center lg:gap-20">
            <div className="p-10 lg:p-20 lg:w-1/2">
              <div className={`${GeistSans.className} project text-center sm:text-start text-3xl font-medium pb-10`}>
                Portoziel Website
              </div>
              <ul>
                <li className='flex text-[13px]/[0.75] font-normal text-[#666] transition-colors before:w-[3px] before:transition-colors md:text-[16px]/[0.75] md:before:w-[4px] text-[var(--ds-gray-1000)] before:bg-[black] dark:before:bg-[#D9D9D9]'>
                  <button className="text-start focus-visible:shadow-focus-ring px-[8px] pb-[2px] pt-[4px] focus:outline-none md:px-[10px] md:pb-[5px] md:pt-[9px] pointer-events-none" type="button">Type: Website</button>
                </li>
                <li className='pt-2 flex text-[13px]/[0.75] font-normal text-[#666] transition-colors before:w-[3px] before:transition-colors md:text-[16px]/[0.75] md:before:w-[4px] text-[var(--ds-gray-1000)] before:bg-[black] dark:before:bg-[#D9D9D9]'>
                  <button className="text-start focus-visible:shadow-focus-ring px-[8px] pb-[2px] pt-[4px] focus:outline-none md:px-[10px] md:pb-[5px] md:pt-[9px] pointer-events-none" type="button">Client: Ziel</button>
                </li>
                <li className='pt-2 flex text-[13px]/[0.75] font-normal text-[#666] transition-colors before:w-[3px] before:transition-colors md:text-[16px]/[0.75] md:before:w-[4px] text-[var(--ds-gray-1000)] before:bg-[black] dark:before:bg-[#D9D9D9]'>
                  <button className="leading-4 text-start focus-visible:shadow-focus-ring px-[8px] pb-[2px] pt-[4px] focus:outline-none md:px-[10px] md:pb-[5px] md:pt-[9px] pointer-events-none" type="button">Tools: HTML, CSS, JS, Bootstrap</button>
                </li>
              </ul>

              <div className="divisor border-t-2 border-dashed my-10"></div>

              <div className="description text-[black] dark:text-[#666] mb-10 text-center lg:text-start">
                A colorful portfolio website to showcase my personal branding. Basically my 1.0 version of this web. Developed using HTML, CSS, JS, and Bootstrap.
              </div>


              <Link className="mt-5 flex justify-center lg:justify-start" href="https://portoziel.vercel.app/" target="_blank" rel="noopener noreferrer">
                <Button>Visit<FaArrowRight className='ml-2' /></Button>
              </Link>


            </div>

            <div className="border relative h-60 flex justify-center items-center lg:w-4/12 mb-10 lg:mb-0">
              <div className="border-black dark:border-gray-100 h-3.5 w-3.5 border-l border-t absolute z-10 left-[-1px] top-[-1px] rotate-0"></div>
              <div className="border-black dark:border-gray-100 h-3.5 w-3.5 border-l border-t absolute z-10 right-[-1px] top-[-1px] rotate-90"></div>
              <div className="border-black dark:border-gray-100 h-3.5 w-3.5 border-l border-t absolute z-10 bottom-[-1px] left-[-1px] -rotate-90"></div>
              <div className="border-black dark:border-gray-100 h-3.5 w-3.5 border-l border-t absolute z-10 bottom-[-1px] right-[-1px] rotate-180"></div>
              <div className="image w-1/2">
                <Image src="/portozielblack.png" alt="Portoziel Snippet" width={300} height={100} className='object-contain portoziel' />
              </div>
            </div>
          </div>


        </div>
      </div>

      <div className='flex justify-center relative w-full'>
        <div className="flex flex-col w-10/12 sm:w-11/12 border-x">
          <div className="project-wrapper flex flex-col lg:flex-row justify-end items-center lg:gap-20">

            <div className="hidden border relative h-60 lg:flex justify-center items-center lg:w-4/12 mb-10 lg:mb-0">
              <div className="border-black dark:border-gray-100 h-3.5 w-3.5 border-l border-t absolute z-10 left-[-1px] top-[-1px] rotate-0"></div>
              <div className="border-black dark:border-gray-100 h-3.5 w-3.5 border-l border-t absolute z-10 right-[-1px] top-[-1px] rotate-90"></div>
              <div className="border-black dark:border-gray-100 h-3.5 w-3.5 border-l border-t absolute z-10 bottom-[-1px] left-[-1px] -rotate-90"></div>
              <div className="border-black dark:border-gray-100 h-3.5 w-3.5 border-l border-t absolute z-10 bottom-[-1px] right-[-1px] rotate-180"></div>
              <div className="image w-1/2">
                <Image src="/artofzielblack.png" alt="Artofziel Snippet" width={300} height={100} className='object-contain artofziel' />
              </div>
            </div>
            <div className="p-10 lg:p-20 lg:w-1/2">
              <div className={`${GeistSans.className} project text-center sm:text-start text-3xl font-medium pb-10`}>
                Artofziel Website
              </div>
              <ul>
                <li className='flex text-[13px]/[0.75] font-normal text-[#666] transition-colors before:w-[3px] before:transition-colors md:text-[16px]/[0.75] md:before:w-[4px] text-[var(--ds-gray-1000)] before:bg-[black] dark:before:bg-[#D9D9D9]'>
                  <button className="text-start focus-visible:shadow-focus-ring px-[8px] pb-[2px] pt-[4px] focus:outline-none md:px-[10px] md:pb-[5px] md:pt-[9px] pointer-events-none" type="button">Type: Website</button>
                </li>
                <li className='pt-2 flex text-[13px]/[0.75] font-normal text-[#666] transition-colors before:w-[3px] before:transition-colors md:text-[16px]/[0.75] md:before:w-[4px] text-[var(--ds-gray-1000)] before:bg-[black] dark:before:bg-[#D9D9D9]'>
                  <button className="text-start focus-visible:shadow-focus-ring px-[8px] pb-[2px] pt-[4px] focus:outline-none md:px-[10px] md:pb-[5px] md:pt-[9px] pointer-events-none" type="button">Client: Ziel</button>
                </li>
                <li className='pt-2 flex text-[13px]/[0.75] font-normal text-[#666] transition-colors before:w-[3px] before:transition-colors md:text-[16px]/[0.75] md:before:w-[4px] text-[var(--ds-gray-1000)] before:bg-[black] dark:before:bg-[#D9D9D9]'>
                  <button className="leading-4 text-start focus-visible:shadow-focus-ring px-[8px] pb-[2px] pt-[4px] focus:outline-none md:px-[10px] md:pb-[5px] md:pt-[9px] pointer-events-none" type="button">Tools: HTML, CSS, JS (All Vanilla)</button>
                </li>
              </ul>

              <div className="divisor border-t-2 border-dashed my-10"></div>

              <div className="description text-[black] dark:text-[#666] mb-10 text-center lg:text-start">
                I love digital art as well, this is my artwork gallery website. Built by Vanilla HTML, CSS, and JS.
              </div>


              <Link className="mt-5 flex justify-center lg:justify-start" href="https://artofziel.vercel.app/" target="_blank" rel="noopener noreferrer">
                <Button>Visit<FaArrowRight className='ml-2' /></Button>
              </Link>


            </div>

            <div className="lg:hidden border relative h-60 flex justify-center items-center lg:w-4/12 mb-10 lg:mb-0">
              <div className="border-black dark:border-gray-100 h-3.5 w-3.5 border-l border-t absolute z-10 left-[-1px] top-[-1px] rotate-0"></div>
              <div className="border-black dark:border-gray-100 h-3.5 w-3.5 border-l border-t absolute z-10 right-[-1px] top-[-1px] rotate-90"></div>
              <div className="border-black dark:border-gray-100 h-3.5 w-3.5 border-l border-t absolute z-10 bottom-[-1px] left-[-1px] -rotate-90"></div>
              <div className="border-black dark:border-gray-100 h-3.5 w-3.5 border-l border-t absolute z-10 bottom-[-1px] right-[-1px] rotate-180"></div>
              <div className="image w-1/2">
                <Image src="/artofzielblack.png" alt="Artofziel Snippet" width={300} height={100} className='object-contain artofziel' />
              </div>
            </div>
          </div>


        </div>
      </div>

      <div className='flex justify-center relative w-full'>
        <div className="flex flex-col w-10/12 sm:w-11/12 border-x">
          <div className="project-wrapper flex flex-col lg:flex-row justify-start items-center lg:gap-20">
            <div className="p-10 lg:p-20 lg:w-1/2">
              <div className={`${GeistSans.className} project text-center sm:text-start text-3xl font-medium pb-10`}>
                Jiwakita Prototype
              </div>
              <ul>
                <li className='flex text-[13px]/[0.75] font-normal text-[#666] transition-colors before:w-[3px] before:transition-colors md:text-[16px]/[0.75] md:before:w-[4px] text-[var(--ds-gray-1000)] before:bg-[black] dark:before:bg-[#D9D9D9]'>
                  <button className="text-start focus-visible:shadow-focus-ring px-[8px] pb-[2px] pt-[4px] focus:outline-none md:px-[10px] md:pb-[5px] md:pt-[9px] pointer-events-none" type="button">Type: UI/UX Prototype</button>
                </li>
                <li className='pt-2 flex text-[13px]/[0.75] font-normal text-[#666] transition-colors before:w-[3px] before:transition-colors md:text-[16px]/[0.75] md:before:w-[4px] text-[var(--ds-gray-1000)] before:bg-[black] dark:before:bg-[#D9D9D9]'>
                  <button className="text-start focus-visible:shadow-focus-ring px-[8px] pb-[2px] pt-[4px] focus:outline-none md:px-[10px] md:pb-[5px] md:pt-[9px] pointer-events-none" type="button">Client: Competition</button>
                </li>
                <li className='pt-2 flex text-[13px]/[0.75] font-normal text-[#666] transition-colors before:w-[3px] before:transition-colors md:text-[16px]/[0.75] md:before:w-[4px] text-[var(--ds-gray-1000)] before:bg-[black] dark:before:bg-[#D9D9D9]'>
                  <button className="leading-4 text-start focus-visible:shadow-focus-ring px-[8px] pb-[2px] pt-[4px] focus:outline-none md:px-[10px] md:pb-[5px] md:pt-[9px] pointer-events-none" type="button">Tools: Figma</button>
                </li>
              </ul>

              <div className="divisor border-t-2 border-dashed my-10"></div>

              <div className="description text-[black] dark:text-[#666] mb-10 text-center lg:text-start">
                A mental health application prototype that got the 3rd position in ANFORCOM Diponegoro UI/UX Competition. (Shoutout to Tsabita Cahya Qur&apos;ani as my teammate)
              </div>


              <Link className="mt-5 flex justify-center lg:justify-start" href="https://www.figma.com/proto/JOBOHqk9w13ZWEth8bbTTZ/jiwakita?page-id=170%3A2702&node-id=874-30730&starting-point-node-id=874%3A25000&t=doKBH4JOUhc4Ac5I-1" target="_blank" rel="noopener noreferrer">
                <Button>Visit<FaArrowRight className='ml-2' /></Button>
              </Link>

            </div>

            <div className="border relative h-60 flex justify-center items-center lg:w-4/12 mb-10 lg:mb-0">
              <div className="border-black dark:border-gray-100 h-3.5 w-3.5 border-l border-t absolute z-10 left-[-1px] top-[-1px] rotate-0"></div>
              <div className="border-black dark:border-gray-100 h-3.5 w-3.5 border-l border-t absolute z-10 right-[-1px] top-[-1px] rotate-90"></div>
              <div className="border-black dark:border-gray-100 h-3.5 w-3.5 border-l border-t absolute z-10 bottom-[-1px] left-[-1px] -rotate-90"></div>
              <div className="border-black dark:border-gray-100 h-3.5 w-3.5 border-l border-t absolute z-10 bottom-[-1px] right-[-1px] rotate-180"></div>
              <div className="image w-1/2">
                <Image src="/jiwakitablack.png" alt="Jiwakita Snippet" width={300} height={100} className='object-contain jiwakita' />
              </div>
            </div>
          </div>


        </div>
      </div>

      <div className='flex justify-center relative w-full'>
        <div className="flex flex-col w-10/12 sm:w-11/12 border-x">
          <div className="project-wrapper flex flex-col lg:flex-row justify-end items-center lg:gap-20">

            <div className="hidden border relative h-60 lg:flex justify-center items-center lg:w-4/12 mb-10 lg:mb-0">
              <div className="border-black dark:border-gray-100 h-3.5 w-3.5 border-l border-t absolute z-10 left-[-1px] top-[-1px] rotate-0"></div>
              <div className="border-black dark:border-gray-100 h-3.5 w-3.5 border-l border-t absolute z-10 right-[-1px] top-[-1px] rotate-90"></div>
              <div className="border-black dark:border-gray-100 h-3.5 w-3.5 border-l border-t absolute z-10 bottom-[-1px] left-[-1px] -rotate-90"></div>
              <div className="border-black dark:border-gray-100 h-3.5 w-3.5 border-l border-t absolute z-10 bottom-[-1px] right-[-1px] rotate-180"></div>
              <div className="image w-1/2">
                <Image src="/academikublack.png" alt="Academiku Snippet" width={300} height={100} className='object-contain academiku' />
              </div>
            </div>
            <div className="p-10 lg:p-20 lg:w-1/2">
              <div className={`${GeistSans.className} project text-center sm:text-start text-3xl font-medium pb-10`}>
                Academiku Prototype
              </div>
              <ul>
                <li className='flex text-[13px]/[0.75] font-normal text-[#666] transition-colors before:w-[3px] before:transition-colors md:text-[16px]/[0.75] md:before:w-[4px] text-[var(--ds-gray-1000)] before:bg-[black] dark:before:bg-[#D9D9D9]'>
                  <button className="text-start focus-visible:shadow-focus-ring px-[8px] pb-[2px] pt-[4px] focus:outline-none md:px-[10px] md:pb-[5px] md:pt-[9px] pointer-events-none" type="button">Type: UI/UX Prototype</button>
                </li>
                <li className='pt-2 flex text-[13px]/[0.75] font-normal text-[#666] transition-colors before:w-[3px] before:transition-colors md:text-[16px]/[0.75] md:before:w-[4px] text-[var(--ds-gray-1000)] before:bg-[black] dark:before:bg-[#D9D9D9]'>
                  <button className="text-start focus-visible:shadow-focus-ring px-[8px] pb-[2px] pt-[4px] focus:outline-none md:px-[10px] md:pb-[5px] md:pt-[9px] pointer-events-none" type="button">Client: Competition</button>
                </li>
                <li className='pt-2 flex text-[13px]/[0.75] font-normal text-[#666] transition-colors before:w-[3px] before:transition-colors md:text-[16px]/[0.75] md:before:w-[4px] text-[var(--ds-gray-1000)] before:bg-[black] dark:before:bg-[#D9D9D9]'>
                  <button className="leading-4 text-start focus-visible:shadow-focus-ring px-[8px] pb-[2px] pt-[4px] focus:outline-none md:px-[10px] md:pb-[5px] md:pt-[9px] pointer-events-none" type="button">Tools: Figma</button>
                </li>
              </ul>

              <div className="divisor border-t-2 border-dashed my-10"></div>

              <div className="description text-[black] dark:text-[#666] mb-10 text-center lg:text-start">
                Acquiring idea from real world education, me and my teammate built this mobile app prototype. 3rd position in TECHCOMFEST UI/UX Competition. (Shoutout to Tsabita Cahya Qur&apos;ani as my teammate)
              </div>


              <Link className="mt-5 flex justify-center lg:justify-start" href="https://www.figma.com/proto/4dpPY9tTTpaERumMd80OqI/Academiku?page-id=0%3A1&node-id=90-837&viewport=505%2C2553%2C0.87&t=tt3fxops6J46CJzg-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=290%3A1758&show-proto-sidebar=1" target="_blank" rel="noopener noreferrer">
                <Button>Visit<FaArrowRight className='ml-2' /></Button>
              </Link>


            </div>

            <div className="lg:hidden border relative h-60 flex justify-center items-center lg:w-4/12 mb-10 lg:mb-0">
              <div className="border-black dark:border-gray-100 h-3.5 w-3.5 border-l border-t absolute z-10 left-[-1px] top-[-1px] rotate-0"></div>
              <div className="border-black dark:border-gray-100 h-3.5 w-3.5 border-l border-t absolute z-10 right-[-1px] top-[-1px] rotate-90"></div>
              <div className="border-black dark:border-gray-100 h-3.5 w-3.5 border-l border-t absolute z-10 bottom-[-1px] left-[-1px] -rotate-90"></div>
              <div className="border-black dark:border-gray-100 h-3.5 w-3.5 border-l border-t absolute z-10 bottom-[-1px] right-[-1px] rotate-180"></div>
              <div className="image w-1/2">
                <Image src="/academikublack.png" alt="Academiku Snippet" width={300} height={100} className='object-contain academiku' />
              </div>
            </div>
          </div>


        </div>
      </div>

      {/* SECTION 5 */}
      <div id="services" className='border-t flex justify-center w-full'>
        <div className="flex flex-col w-10/12 sm:w-11/12 border-x">
          <div className="wrapper flex justify-center">
            <div className="w-full heading-hero text-center p-10 lg:p-20 flex flex-col justify-center items-center">
              <h1 className={`${GeistSans.className} text-3xl lg:text-6xl text-center relative font-sans font-normal tracking-[-0.04em] col-span-12 lg:col-span-6 lg:leading-[60px] xl:col-span-4`}>
                <span className='relative'>
                  <div className="border-gray-800 dark:bg-gray-100 bg-black h-[5px] w-[5px] absolute z-10 left-[-3px] top-[-3px]"></div>
                  <div className="border-gray-800 dark:bg-gray-100 bg-black h-[5px] w-[5px] absolute z-10 right-[-3px] bottom-[-3px]"></div>
                  Services
                  <span aria-hidden="true" className="absolute right-0 top-0 translate-x-full pl-1 font-mono text-lg font-medium text-gray-900 dark:text-white md:pl-0">(3)</span>
                </span>
              </h1>
              <Table className='mt-20 text-start w-full'>
                <TableHeader>
                  <TableRow>
                    <TableHead className="sm:p-10">SERVICE</TableHead>
                    <TableHead className="sm:p-10">STATUS</TableHead>
                    <TableHead className="sm:p-10">DESCRIPTION</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="sm:p-10 font-medium">User Interface Design</TableCell>
                    <TableCell className="sm:p-10">Available</TableCell>
                    <TableCell className="hidden md:flex sm:p-10">Focuses on creating intuitive, engaging, and user friendly interfaces for digital products</TableCell>
                    <TableCell className="md:hidden sm:p-10">

                      <Dialog>
                        <DialogTrigger asChild>
                          <Button variant="outline">Details</Button>
                        </DialogTrigger>
                        <DialogContent className="sm:max-w-[425px]">
                          <DialogHeader>
                            <DialogTitle>User Interface Design</DialogTitle>
                            <DialogDescription>
                              Focuses on creating intuitive, engaging, and user friendly interfaces for digital products
                            </DialogDescription>
                          </DialogHeader>
                        </DialogContent>
                      </Dialog>


                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="sm:p-10 font-medium">Front End Web Development</TableCell>
                    <TableCell className="sm:p-10">Available</TableCell>
                    <TableCell className="hidden md:flex sm:p-10">Building the visible parts of a website or web application and slice your Figma design into a real website</TableCell>
                    <TableCell className="md:hidden sm:p-10">

                      <Dialog>
                        <DialogTrigger asChild>
                          <Button variant="outline">Details</Button>
                        </DialogTrigger>
                        <DialogContent className="sm:max-w-[425px]">
                          <DialogHeader>
                            <DialogTitle>Front End Web Development</DialogTitle>
                            <DialogDescription>
                              Building the visible parts of a website or web application and slice your Figma design into a real website
                            </DialogDescription>
                          </DialogHeader>
                        </DialogContent>
                      </Dialog>

                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="sm:p-10 font-medium">Full Stack Web Development</TableCell>
                    <TableCell className="sm:p-10">Currently not Available</TableCell>
                    <TableCell className="hidden md:flex sm:p-10">Create a full-stack web application using Laravel, ReactJS, and Next.js</TableCell>
                    <TableCell className="md:hidden sm:p-10">

                      <Dialog>
                        <DialogTrigger asChild>
                          <Button variant="outline">Details</Button>
                        </DialogTrigger>
                        <DialogContent className="sm:max-w-[425px]">
                          <DialogHeader>
                            <DialogTitle>Full Stack Web Development</DialogTitle>
                            <DialogDescription>
                              Create a full-stack web application using Laravel, ReactJS, and Next.js
                            </DialogDescription>
                          </DialogHeader>
                        </DialogContent>
                      </Dialog>


                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="sm:p-10 font-medium">Digital Illustration</TableCell>
                    <TableCell className="sm:p-10">Available</TableCell>
                    <TableCell className="hidden md:flex sm:p-10">A digital drawing service that provides you portrait drawing, sketch, and draw your original character</TableCell>
                    <TableCell className="md:hidden sm:p-10">

                      <Dialog>
                        <DialogTrigger asChild>
                          <Button variant="outline">Details</Button>
                        </DialogTrigger>
                        <DialogContent className="sm:max-w-[425px]">
                          <DialogHeader>
                            <DialogTitle>Digital Illustration</DialogTitle>
                            <DialogDescription>
                              A digital drawing service that provides you portrait drawing, sketch, and draw your original character
                            </DialogDescription>
                          </DialogHeader>
                        </DialogContent>
                      </Dialog>

                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>
          </div>
        </div>
      </div>


      <div id="contact" className="w-full flex justify-center border-t">
        <div className="flex flex-col md:flex-row w-10/12 sm:w-11/12 border-x">
          <div className="wrapper md:hidden flex justify-center w-full md:w-1/2">
            <div className="heading-hero text-center p-10 lg:p-20 flex flex-col justify-center">
              <h1 className={`${GeistSans.className} text-3xl lg:text-6xl text-center md:text-start relative font-sans font-normal tracking-[-0.04em] col-span-12 lg:col-span-6 lg:leading-[60px] xl:col-span-4`}>
                <span className='relative'>
                  <div className="border-black dark:bg-gray-100 bg-black h-[5px] w-[5px] absolute z-10 left-[-3px] top-[-3px]"></div>
                  <div className="border-black dark:bg-gray-100 bg-black h-[5px] w-[5px] absolute z-10 right-[-3px] bottom-[-3px]"></div>
                  Contact
                  <span aria-hidden="true" className="absolute right-0 top-0 translate-x-full pl-1 font-mono text-lg font-medium text-gray-900 dark:text-white md:pl-0">(4)</span>
                </span>
              </h1>
              <p className='text-center md:text-start text-sm lg:text-xl pt-5 sm:pt-10'>
                Let&apos;s collaborate with me. Get in touch with me and I will bring your ideas to life.
              </p>
            </div>
          </div>

          <div className="wrapper flex justify-center md:w-1/2 border-t-2 md:border-t-0 md:border-r-2 border-dashed">
            <div className="heading-hero p-10 lg:p-20">
              <ContactForm></ContactForm>
            </div>
          </div>
          <div className="wrapper hidden md:flex justify-center w-full md:w-1/2">
            <div className="heading-hero text-center p-10 lg:p-20 flex flex-col justify-center">
              <h1 className={`${GeistSans.className} text-3xl lg:text-6xl text-center md:text-start relative font-sans font-normal tracking-[-0.04em] col-span-12 lg:col-span-6 lg:leading-[60px] xl:col-span-4`}>
                <span className='relative'>
                  <div className="border-black dark:bg-gray-100 bg-black h-[5px] w-[5px] absolute z-10 left-[-3px] top-[-3px]"></div>
                  <div className="border-black dark:bg-gray-100 bg-black h-[5px] w-[5px] absolute z-10 right-[-3px] bottom-[-3px]"></div>
                  Contact
                  <span aria-hidden="true" className="absolute right-0 top-0 translate-x-full pl-1 font-mono text-lg font-medium text-gray-900 dark:text-white md:pl-0">(4)</span>
                </span>
              </h1>
              <p className='text-center md:text-start text-sm lg:text-xl pt-5 sm:pt-10'>
                Let&apos;s collaborate with me. Get in touch with me and I will bring your ideas to life.
              </p>
            </div>
          </div>

        </div>
      </div>


      {/* FOOTER */}
      <footer className='flex justify-center items-center gap-2 p-10 border-t w-full'>
        © 2024 ZIEL. ALL RIGHTS RESERVED <FaGithub></FaGithub>
      </footer>
    </main >
  );
}


